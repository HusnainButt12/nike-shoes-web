import { useState } from "react";

const ContactUs = () => {
  const [isPresed, setPresed] = useState(false)
  return (
    <div className="h-[120%] w-full  flex flex-col justify-center items-center">
      <div className="h-30 w-[90%]  flex  justify-center items-center ">
        <text className="font-extrabold text-5xl">Contact Us</text>
      </div>
      <div className="h-72 w-[90%] flex justify-center flex-col">
        <text className="ml-24 font-bold">Customer care</text>
        <text className="ml-24 mt-6 ">
          If you have a query related to our products, services or policies
          please go through our <b className="underline cursor-pointer hover:text-gray-700">FAQ’s</b> section,
          where you will find answers to the most common questions asked by our
          customers.
        </text>

        <text className="ml-24 ">
          Hopefully, you will find the answer to your query, but if you don’t,
          or want to get any information, know about order status or have any
          queries related to a product(s) get in touch with our customer
          services representatives or fill in the contact form below.
        </text>
        <text className="ml-24 ">
          <b>Phone Number: 0331-533-3367</b>
        </text>
        <text className="ml-24 ">
          <b>Email:</b>
          <b className="underline cursor-pointer hover:text-gray-700"> queries.affinity@gmail.com</b>
        </text>
      </div>
      <div className="h-[40%] w-[90%]">
      <div className=" w-[90%] flex flex-row gap-2 ml-24">
        <div className="flex flex-col">
            <label>Name</label>

            <input
              className="border-2 p-2 border-gray-200 bg-white"
              type="email"
              id="email"
              pattern=".+@globex\.com"
              size="45"
              required
            />
            </div>
            <div className="flex flex-col">
            <label>Email *</label>

            <input
              className="border-2 p-2 border-gray-200 bg-white"
              type="text"
              id="password"
              pattern="abc345"
              size="45"
              required
            />
            </div>
          </div>
          <div className="flex flex-col ml-24 mr-8 mt-3">
            <label>Phone Number</label>

            <input
              className="border-2 p-2 border-gray-200 bg-white"
              type="number"
              id="password"
              pattern="abc345"
              size="45"
              required
            />
            </div>
            <div className="flex flex-col ml-24 mr-8 mt-3">
            <label>Message</label>

            <input
              className="border-2 p-2 border-gray-200 bg-white"
              type="text"
              id="text"
              pattern="abc345"
              size="45"
              required
            />
            </div>
            <button className="bg-gray-900 text-white p-2 px-4 hover:bg-gray-700 ml-24 mt-4" onClick={() => setPresed(!isPresed)}>{isPresed ? "SEND ..." : "SEND"}</button>
      </div>
    </div>
  );
};

export default ContactUs;
