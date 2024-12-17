import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BreadCrumbProps {
  backgroundImage: string;
  icon: string;
  title: string;
  links: { name: string; href?: string; isActive?: boolean }[];
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  backgroundImage,
  icon,
  title,
  links,
}) => {
  return (
    <section
      className="bg-cover bg-center p-20 flex justify-center items-center flex-col"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Image src={icon} alt="icon" width={80} height={80} />
      <h3 className="text-5xl font-medium font-poppins">{title}</h3>
      <div className="flex gap-2 items-center">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <p
              className={`font-poppins text-base ${
                link.isActive ? "font-light" : "font-medium"
              }`}
            >
              {link.href ? (
                <Link href={link.href} className="hover:underline">
                  {link.name}
                </Link>
              ) : (
                link.name
              )}
            </p>
            {index < links.length - 1 && <ChevronRight />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default BreadCrumb;
