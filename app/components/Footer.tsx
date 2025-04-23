import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer 
      className="bg-[#1B1438] text-white py-16 bg-no-repeat" 
      style={{ 
        backgroundImage: "url('/Liadtech/Accueil/footer globe background.svg')",
        backgroundPosition:'top right',
        backgroundSize:'60% 90%',
      }}
      >
      <div className="w-full px-10  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10 ">
          {/* Footer Column 1 */}
          <div className="lg:col-span-3 md:col-span-1 -mt-12 lg:pl-10">
            <Link href="/" className=" ">
              <Image
                src="/images/Liadtech blanc avec backgroud 1.svg"
                alt="LIADTECH Logo"
                width={224}
                height={130}
              />
            </Link>
            <p className="text-[#BEBEBE] mb-6">
              Experts en solutions digitales, nous accompagnons les entreprises dans leur croissance numérique avec des solutions sur mesure et une approche centrée sur l&apos;innovation
            </p>
            {/* <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-[#673de6] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#673de6] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div> */}
          </div>

          {/* Footer Column 2 */}
          <div className="lg:col-span-2 md:col-span-1">
            <h4 className="text-lg font-medium mb-6">A propos</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-[#BEBEBE] hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/services" className="text-[#BEBEBE] hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/tarifs" className="text-[#BEBEBE] hover:text-white transition-colors">Tarifs</Link></li>
              <li><Link href="/explorer" className="text-[#BEBEBE] hover:text-white transition-colors">Explorer</Link></li>
              <li><Link href="/support" className="text-[#BEBEBE] hover:text-white transition-colors">Support</Link></li>
              <li><Link href="/univers-liadtech" className="text-[#BEBEBE] hover:text-white transition-colors">L'univers LIADTECH</Link></li>
              {/* <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/qui-sommes-nous" className="text-gray-300 hover:text-white transition-colors">Qui sommes-nous</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li> */}
            </ul>
          </div>

          {/* Footer Column 3 */}
          <div className="lg:col-span-2 md:col-span-1">
            <h4 className="text-lg font-medium mb-6">Solutions</h4>
            <ul className="space-y-3 [&_li_a]:whitespace-nowrap ">
              <li><Link href="/services/creation-sites-web" className="text-[#BEBEBE] hover:text-white transition-colors">Création de sites web</Link></li>
              <li><Link href="/services/applications-mobiles" className="text-[#BEBEBE] hover:text-white transition-colors">Applications mobiles</Link></li>
              <li><Link href="/services/marketing-digital" className="text-[#BEBEBE] hover:text-white transition-colors">Marketing digital & publicité</Link></li>
              <li><Link href="/services/referencement-seo" className="text-[#BEBEBE] hover:text-white transition-colors">Référencement Web /SEO</Link></li>
              <li><Link href="/services/blogging-contenus" className="text-[#BEBEBE] hover:text-white transition-colors">Blogging & contenus</Link></li>
              <li><Link href="/services/videos-explicatives" className="text-[#BEBEBE] hover:text-white transition-colors">Vidéos explicatives 2D/3D</Link></li>
              <li><Link href="/services/creation-logo" className="text-[#BEBEBE] hover:text-white transition-colors">Création de logo</Link></li>
              <li><Link href="/services/animations-narratives" className="text-[#BEBEBE] hover:text-white transition-colors">Animations narratives & mini-séries</Link></li>
              <li><Link href="/services/design-graphique" className="text-[#BEBEBE] hover:text-white transition-colors">Design Graphique & Visuels</Link></li>
              <li><Link href="/services/design-ux-ui" className="text-[#BEBEBE] hover:text-white transition-colors">Design UX/UI</Link></li>
              <li><Link href="/services/infrastructure-cloud" className="text-[#BEBEBE] hover:text-white transition-colors">Infrastructure Cloud et migration</Link></li>
              <li><Link href="/services/developpement-saas" className="text-[#BEBEBE] hover:text-white transition-colors">Développement SaaS</Link></li>
              <li><Link href="/services/maintenance-infogerance" className="text-[#BEBEBE] hover:text-white transition-colors">Maintenance & infogérance</Link></li>
              <li><Link href="/services/applications-sur-mesure" className="text-[#BEBEBE] hover:text-white transition-colors">Applications sur mesure</Link></li>
              <li><Link href="/services/chatbots" className="text-[#BEBEBE] hover:text-white transition-colors">Chatbots</Link></li>
              <li><Link href="/services/automatisation-ia" className="text-[#BEBEBE] hover:text-white transition-colors">Automatisation & agents IA</Link></li>
              <li><Link href="/services/audit-securite" className="text-[#BEBEBE] hover:text-white transition-colors">Audit de sécurité & Pentest</Link></li>
            </ul>
          </div>

          {/* Footer Column 4 */}
          <div className="lg:col-span-2 md:col-span-1 flex flex-col">
            <h4 className="text-lg font-medium mb-6">Contactez nous</h4>
              <a href="mailto:contact@liadtech.com" className="text-[#BEBEBE] mb-2 underline hover:text-[#673de6] transition-colors">contact@liadtech.com</a>
              <a target="_blank" href="https://espace-client.liadtech.com/login" className="text-[#BEBEBE] hover:text-[#673de6] underline transition-colors">Espace Client</a>
          </div>

          {/* Footer Column 5 */}
          <div className="lg:col-span-3 md:col-span-1">
            <h4 className="text-lg font-medium mb-6">Abonnez-vous à notre newsletter</h4>
            <p className="text-[#BEBEBE] mb-6">Abonnez-vous à notre newsletter pour obtenir les dernières nouvelles et mises à jour!</p>
            <div className="relative">
              <label className='flex items-center gap-1 w-full bg-purple-500/50  border border-purple-600 rounded-md py-3 px-4 text-white  focus:outline-none focus:ring-2 focus:ring-[#673de6]'>
              <input
                type="email"
                className="bg-transparent flex-1 focus:outline-none placeholder:text-white"
                placeholder="Entrez votre e-mail"
                required
              />
                <Image src={"/Liadtech/Accueil/icones/Frame 150.svg"} width={0} height={0} className='size-auto' alt='icon' />
              </label>
              {/* <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </button> */}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        {/* <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400 max-w-3xl mx-auto">
            Ce site est protégé par recaptcha et le google
            <Link href="/politique-de-confidentialite" className="text-white hover:text-[#673de6] transition-colors border-b border-white mx-1">
              politique de confidentialité
            </Link>
            et
            <Link href="/conditions-de-service" className="text-white hover:text-[#673de6] transition-colors border-b border-white mx-1">
              conditions de service
            </Link>
            appliquées.
          </p>
        </div> */}
      </div>
    </footer>
  )
} 