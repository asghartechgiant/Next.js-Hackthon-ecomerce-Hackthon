import { FaTrophy, FaShieldAlt, FaTruck, FaHeadset } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaTrophy />,
      title: "High Quality",
      description: "Crafted from top materials",
    },
    {
      icon: <FaShieldAlt />,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: <FaTruck />,
      title: "Free Shipping",
      description: "Order over $150",
    },
    {
      icon: <FaHeadset />,
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <div className="bg-[#F9F5F0] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <div className="text-4xl text-yellow-600 mb-3">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
