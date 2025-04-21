import React, { forwardRef, useImperativeHandle, useState } from 'react';

export interface ModalRef {
  show: () => void;
  hide: () => void;
}

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
}

const Modal = forwardRef<ModalRef, ModalProps>(({ children, onClose }, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => setIsVisible(true),
    hide: () => setIsVisible(false),
  }));

  const handleBackdropClick = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/50  backdrop-blur-sm"
        
      >
        <button onClick={handleBackdropClick} className='absolute top-0 right-0 p-5 rounded-bl-full bg-black/20 text-white hover:bg-black/30 hover:font-bold'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 -translate-y-1/4 translate-x-1/4 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
      </div>
      
      {/* Modal content */}
        <div 
          className="relative bg-white rounded-lg shadow-xl w-full max-w-lg p-6"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
    </div>
  );
});

Modal.displayName = 'Modal';

export default Modal;
