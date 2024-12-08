// components/Card.tsx
import Image from "next/image";

interface CardProps {
  title: string; // Title for the card
  imageSrc: string; // Path to the image
  altText: string; // Alternative text for the image
}

const Card: React.FC<CardProps> = ({ title, imageSrc, altText }) => {
  return (
    <div className="flex flex-col items-center p-4 shadow-md rounded-lg">
      {/* 1Card Image */}
      <Image
        src={imageSrc}
        width={350}
        height={400}
        alt={altText}
        className="mt-7"
      />

      {/* Card Title */}
      <h1 className="mt-4 text-lg font-bold text-gray-800">{title}</h1>

     
    </div>
  );
};

export default Card;
