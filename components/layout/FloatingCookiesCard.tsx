'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface FloatingCookiesCardProps {
  onAccept?: () => void;
  onReject?: () => void;
  onOpenSettings?: () => void;
}

const COOKIE_CONSENT_KEY = 'cookie-consent-status';

export default function FloatingCookiesCard({
  onAccept,
  onReject,
  onOpenSettings,
}: FloatingCookiesCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consentStatus = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consentStatus) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    onAccept?.();
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
    onReject?.();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4  bg-white rounded-lg shadow-lg p-6 z-50 border border-gray-100">
      <h2 className="text-xl font-semibold text-[#4B3B7C] mb-3 sm:container mx-auto">
      Nous nous soucions de votre vie privée
            </h2>
      <p className="text-gray-600 mb-6 sm:container mx-auto">
      Nous utilisons des cookies pour améliorer votre expérience de navigation, diffuser des annonces ou du contenu personnalisés et analyser notre trafic.
      En cliquant sur "Autoriser les cookies", vous consentez à notre utilisation des cookies.
              {/* <Link href="/cookie-policy" className="text-[#4B3B7C] underline hover:text-[#6B5B9C]">
          Cookie policy
        </Link> */}
        .
      </p>
      <div className="flex flex-wrap gap-3 sm:container mx-auto">
        <button
          onClick={handleAccept}
          className="px-6 py-2 w-full sm:w-auto bg-[#5735bc] font-bold text-white rounded-lg hover:bg-[#5735bc] transition-colors"
        >
          Autoriser les cookies
        </button>
        <button
          onClick={handleReject}
          className="px-6 py-2 w-full sm:w-auto border-2 font-bold border-[#5735bc] text-[#5735bc] rounded-lg hover:bg-gray-50 transition-colors"
        >
          Refuser tous
        </button>
        {onOpenSettings && (
          <button
            onClick={onOpenSettings}
            className="px-6 py-2 text-[#7C3AED] hover:underline transition-colors"
          >
            Paramètres des cookies
          </button>
        )}
      </div>
    </div>
  );
}
