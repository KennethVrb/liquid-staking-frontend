import React from "react";

interface CardProps {
  children: React.ReactNode;
  title?: string; // Optional title prop
}

const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className="mb-8">
      {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
        <div className="text-secondary">{children}</div>
      </div>
    </div>
  );
};

export default Card;
