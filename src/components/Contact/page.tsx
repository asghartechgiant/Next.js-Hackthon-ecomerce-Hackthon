import Image from "next/image";

const Contact = () => {
  return (
    <>
      <Image
        src={"/ii.png"}
        alt="ii"
        height={300}
        width={900}
        className="w-full object-cover"
      />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            Get In Touch With Us
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            For more information about our products & services, feel free to
            drop us an email. Our team is always here to assist you.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Details */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div>
                <span className="text-lg text-yellow-500">&#x1F4CD;</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Address</h4>
                <p className="text-gray-600">
                  2585 Sim Ave. Kansas Ave,
                  <br />
                  New York 10038, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div>
                <span className="text-lg text-yellow-500">&#x260E;</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Phone</h4>
                <p className="text-gray-600">
                  Hotline: (+84) 456-4789
                  <br />
                  Mobile: (+84) 678-9012
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start space-x-4">
              <div>
                <span className="text-lg text-yellow-500">&#x23F0;</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Working Time</h4>
                <p className="text-gray-600">
                  Monday–Friday: 8:00 - 20:00
                  <br />
                  Saturday–Sunday: 8:00 - 17:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="email@example.com"
                  className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is optional"
                  className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Let us know what you think"
                  rows={4}
                  className="mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-yellow-600 text-white py-4 px-14 rounded-md shadow hover:bg-yellow-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
