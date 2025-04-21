import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-[#2D1F67]">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#673DE6]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#673DE6]" />
        )}
      </div>
      {isOpen && (
        <p className="mt-4 text-gray-600">
          {answer}
        </p>
      )}
    </div>
  );
} 