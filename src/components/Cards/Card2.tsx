import Image from "next/image";

interface CardProps {
  title: string; // Title for the card
  imageSrc: string; // Path to the image
  altText: string;
  paragraph: string;
  price: any; // Alternative text for the image
}

const Card2: React.FC<CardProps> = ({
  title,
  paragraph,
  price,
  imageSrc,
  altText,
}) => {
  return (
    <div className="flex flex-col items-start p-4 shadow-md rounded-lg ">
      {/* 1Card Image */}
      <Image src={imageSrc} width={300} height={400} alt={altText} />
      {/* Card Title */}
      <h1 className="mt-4 text-lg font-bold text-gray-800">{title}</h1>
      <p className="py-1">{paragraph}</p>
      <h1 className="font-bold">{price}</h1>
    </div>
  );
};

export default Card2;
