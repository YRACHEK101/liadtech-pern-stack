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
        onClick={handleBackdropClick}
        className="absolute inset-0 bg-[#262831]/60  backdrop-blur-sm"
        
      >
        {/* <button onClick={handleBackdropClick} className='absolute top-0 right-0 p-5 rounded-bl-full bg-black/20 text-white hover:bg-black/30 hover:font-bold'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 -translate-y-1/4 translate-x-1/4 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button> */}
      </div>
      
      {/* Modal content */}
        <div 
          className="relative bg-white rounded-lg shadow-xl w-full max-w-5xl p-16"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          {/* <button onClick={handleBackdropClick} className='absolute top-0 right-0 p-2 rounded-bl-lg rounded-tr-lg text-black hover:bg-black/10 hover:font-bold'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>  */}
        <button  className='absolute top-0 right-0 p-2 hover:font-bold'>
            <svg onClick={handleBackdropClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 text-black -translate-x-3/4 translate-y-3/4 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button> 
        </div>
    </div>
  );
});

Modal.displayName = 'Modal';

export default Modal;
