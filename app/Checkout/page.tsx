'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Check } from 'lucide-react';

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
      } catch (err) {
        setError(err.message || 'Erreur inattendue');
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
    } catch (err) {
      setError(err.message || 'Erreur lors du traitement du paiement');
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
  if (error) return <div className="text-red-500 text-center p-8">{error}</div>;
  if (!product) return <div className="text-center p-8">Produit non trouvé</div>;

  const subtotal = parseFloat(product.unit_price);
  const tvaPercentage = parseFloat(product.tva);
  const tax = subtotal * (tvaPercentage / 100);
  const total = subtotal + tax;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Paiement</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Billing Details */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-semibold mb-4">Détails de facturation</h2>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="productId" value={productId} />
            
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
                <span className="font-medium">{product.ref_option}</span>
              </div>
              
              {product.service && (
                <div className="pt-3 border-t">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-medium">
                      {product.service.intitule} ({product.service.ref_service})
                    </span>
                  </div>
                </div>
              )}

              {product.pack && (
                <div className="pt-3 border-t">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pack:</span>
                    <span className="font-medium">
                      {product.pack.intitule} ({product.pack.ref_pack})
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-semibold mb-4">Caractéristiques</h2>
            <ul className="space-y-3">
              {product.criteres.map((critere, index) => (
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
                <span>{product.intitule_option} × 1</span>
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