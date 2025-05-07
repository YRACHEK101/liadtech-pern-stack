'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';

interface Product {
  id: number;
  ref_option: string;
  intitule_option: string;
  unit_price: string;
  tva: string;
  criteres: Array<{
    critere: string;
  }>;
  service?: {
    intitule: string;
    ref_service: string;
    pack_id: number;
  };
  pack?: {
    intitule: string;
    ref_pack: string;
  };
}

export default function CheckoutView() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!productId) return;

        const response = await fetch(`http://localhost:5000/api/v1/produits/${productId}`);
        if (!response.ok) throw new Error('Échec du chargement du produit');

        const data = await response.json();
        if (!data.data) throw new Error('Produit non trouvé');

        setProduct(data.data);
      } catch {
        setError('Erreur inattendue');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const billingInfo = Object.fromEntries(formData.entries());

      const response = await fetch('http://localhost:5000/api/v1/stripe/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId,
          serviceId: product?.service?.pack_id,
          packId: product?.pack?.ref_pack,
          billingInfo
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Échec du paiement');

      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setError('Erreur lors du traitement du paiement');
    } finally {
      setSubmitting(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  if (loading) return <div className="text-center p-8">Chargement en cours...</div>;
  // if (error) return <div className="text-red-500 text-center p-8">{error}</div>;
  // if (!product) return <div className="text-center p-8">Produit non trouvé</div>;

  const subtotal = parseFloat(product?.unit_price || '0');
  const tvaPercentage = parseFloat(product?.tva || '0');
  const tax = subtotal * (tvaPercentage / 100);
  const total = subtotal + tax;


  return (
    <section className="px-1 md:px-5 py-16 md:container sm:mx-auto">
      <div className="w-full flex flex-col gap-16 ">

        <div className=" flex px-4 flex-col gap-[22px] items-center text-center text-[#2D1F67]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ">
            Finalisez votre paiement maintenant
          </h1>
          <h3 className='text-xl md:text-2xl'>
            Paiement simple, rapide et sécurisé
          </h3>
        </div>
    
        <div className="w-full flex flex-col lg:flex-row relative gap-9 p-4 md:py-[30px] md:px-[37px]">
          <Image src={"/Liadtech/checkout/Rectangle 92.svg"} className='absolute top-0 z-0 right-0 !w-auto !h-5/6  ' width={0} height={0} alt='bg' />
          <Image src={"/Liadtech/checkout/Rectangle 93.svg"} className='absolute bottom-0 z-0 left-0 !w-auto !h-5/6  ' width={0} height={0} alt='bg' />
          <div className='grid grid-cols-2 p-5 md:p-10 gap-6 gap-x-10 bg-white z-10 border-2 basis-3/5 border-[#B7C1E7] rounded-lg'>
            <span className='text-2xl md:text-3xl text-[#2D1F67] mb-4 col-span-full font-bold'>
              Détails de facturation
            </span>

            <label className='flex flex-col gap-1.5 text-[#2D1F67]'>
              <span className='font-bold'>
                Prénom
              </span>
              <Input name="firstName" placeholder="Prénom" required />
            </label>
            <label className='flex flex-col gap-1.5 text-[#2D1F67]'>
              <span className='font-bold'>
                Nom
              </span>
              <Input name="lastName" placeholder="Nom" required />
            </label>
            <label className='flex flex-col gap-1.5 col-span-full text-[#2D1F67]'>
              <span className='font-bold'>
                Addesse email
              </span>
              <Input name="email" placeholder="Addresse email" required />
            </label>
            <label className='flex flex-col gap-1.5 col-span-full text-[#2D1F67]'>
              <span className='font-bold'>
                Téléphone
              </span>
              <div className='flex gap-10'>
                <Select name="country" required>
                <SelectTrigger>
                  <SelectValue placeholder="Pays" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="FR">France</SelectItem>
                  <SelectItem value="MA">Maroc</SelectItem>
                </SelectContent>
                </Select>
                <Input name="phone" placeholder="000000000" required />
              </div>
            </label>
            <label className='flex flex-col gap-1.5 col-span-full text-[#2D1F67]'>
              <span className='font-bold'>
                Pays
              </span>
              <Select name="country" required>
                <SelectTrigger>
                  <SelectValue placeholder="Pays" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="FR">France</SelectItem>
                  <SelectItem value="MA">Maroc</SelectItem>
                </SelectContent>
              </Select>
            </label>
            <label className='flex flex-col gap-1.5 col-span-full text-[#2D1F67]'>
              <span className='font-bold'>
                Adresse
              </span>
              <Input name="address" placeholder="Adresse" required className='mb-2' />
              <Input name="full_address" placeholder="Complélement d’adresse" required />
            </label>
            <label className='flex flex-col gap-1.5 text-[#2D1F67]'>
              <span className='font-bold'>
                Ville
              </span>
              <Input name="city" placeholder="Ville" required />
            </label>
            <label className='flex flex-col gap-1.5 text-[#2D1F67]'>
              <span className='font-bold'>
                Code postal
              </span>
              <Input name="postalCode" placeholder="Code postal" required />
            </label>
          </div>
          <div className='p-5 md:p-10 basis-2/5 border-2 bg-white z-10  border-[#B7C1E7] rounded-lg'>
            <span className='text-2xl md:text-3xl text-[#2D1F67] font-bold '>
              Votre commande
            </span>
            <div className='text-[#2D1F67] mb-6'>
              <div className='flex items-center justify-between gap-2 py-5 font-bold text-xl md:text-2xl border-b-2 border-[#2D1F67]'>
                <span>Produit</span>
                <span>Total</span>
              </div>
              <div className='flex items-center justify-between gap-2 py-5 text-xl md:text-2xl border-b-2 border-[#2D1F67]'>
                <span>Sous Total</span>
                <span>0 €</span>
              </div>
              <div className='flex items-center justify-between gap-2 py-5 text-xl md:text-2xl border-b-2 border-[#2D1F67]'>
                <span>TVA(20%)</span>
                <span>0.00 €</span>
              </div>
              <div className='flex items-center justify-between gap-2 py-5 font-bold text-xl md:text-2xl border-b-2 border-[#2D1F67]'>
                <span>Total</span>
                <span>0.00 €</span>
              </div>
            </div>
            <span className='text-2xl md:text-3xl text-[#2D1F67] font-bold '>
              Méthode de paiment
            </span>
            <label className='flex gap-2 items-center my-5'>
              <input type='radio' name='payment' />
              <span>
                Paiement via Stripe
              </span>
            </label>
            <div className='px-5 md:px-10'>
            <Image src={"/images/stripe.png"} className='w-auto h-auto ' width={0} height={0} alt='bg' />
            </div>
            <label className='flex gap-2 flex-nowrap my-5'>
              <input type='radio' name='confirme' className='mt-1.5 self-start' />
              <span>
                J'ai besoin d'informations supplémentaires avant de procéder au paiement
              </span>
            </label>

            <span className=''>
              Vos données personnelles seront utilisées pour traiter votre commande, soutenir votre expérience sur tout ce site Web et à d'autres fins décrites dans notre <a className='text-[#673DE6] underline'>politique de confidentialité</a>.
            </span>
            <label className='flex gap-2 items-start my-10'>
              <input type='checkbox' className='mt-1' />
              <span className='flex-1'>
                J'accepte <a href="http://" className='text-blue-600'>les conditions générales de vente</a>
              </span>
            </label>
            <Button className='w-full text-white font-bold text-xl rounded-lg'>
              Continue
            </Button>
          </div>
        </div>

      </div>
    </section>
  )

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Paiement</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Billing Details */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold mb-4">Détails de facturation</h2>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="productId" value={productId || ''} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input name="firstName" placeholder="Prénom *" required />
              <Input name="lastName" placeholder="Nom *" required />
            </div>

            <Input name="company" placeholder="Nom de l'entreprise" className="mt-4" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <select name="country" required className="border rounded p-2">
                <option value="FR">France</option>
                <option value="MA">Maroc</option>
              </select>
              <Input name="postalCode" placeholder="Code Postal *" required />
            </div>

            <Input name="address" placeholder="Adresse *" className="mt-4" required />
            <Input name="address2" placeholder="Complément d'adresse" className="mt-2" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <Input name="city" placeholder="Ville *" required />
              <Input name="phone" placeholder="Téléphone *" required />
            </div>

            <Input name="email" placeholder="Adresse e‑mail *" required className="mt-4" />

            <textarea
              name="notes"
              placeholder="Merci de préciser vos besoins"
              className="w-full border rounded p-2 mt-4 h-24"
            />

            <label className="inline-flex items-center mt-4">
              <input type="checkbox" name="terms" required className="mr-2" />
              J'accepte les conditions générales de vente
            </label>

            <Button
              type="submit"
              className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white"
              disabled={submitting}
            >
              {submitting ? 'Traitement en cours...' : 'PASSER LA COMMANDE'}
            </Button>

            {error && <p className="text-red-500 mt-4">{error}</p>}
          </form>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-semibold mb-4">Détails du produit</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Référence:</span>
                <span className="font-medium">{product?.ref_option}</span>
              </div>

              {product?.service && (
                <div className="pt-3 border-t">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-medium">
                      {product?.service?.intitule} ({product?.service?.ref_service})
                    </span>
                  </div>
                </div>
              )}

              {product?.pack && (
                <div className="pt-3 border-t">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pack:</span>
                    <span className="font-medium">
                      {product?.pack?.intitule} ({product?.pack?.ref_pack})
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-semibold mb-4">Caractéristiques</h2>
            <ul className="space-y-3">
              {product?.criteres.map((critere, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{critere.critere}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-semibold mb-4">Votre commande</h2>
            <ul className="divide-y">
              <li className="flex justify-between py-2">
                <span>{product?.intitule_option} × 1</span>
                <span>{formatPrice(subtotal)}</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Sous Total</span>
                <span>{formatPrice(subtotal)}</span>
              </li>
              <li className="flex justify-between py-2">
                <span>TVA ({tvaPercentage}%)</span>
                <span>{formatPrice(tax)}</span>
              </li>
              <li className="flex justify-between py-2 font-bold">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </li>
            </ul>

            <div className="mt-6">
              <label className="inline-flex items-center">
                <input type="radio" name="method" className="mr-2" checked readOnly />
                Paiement via Stripe
              </label>
              <div className="mt-4">
                <Image
                  src="/stripe-logo.png"
                  alt="Stripe"
                  width={100}
                  height={30}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}