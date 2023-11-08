const Payment = () => {
  return (
    <div className="h-[100%] w-full  flex flex-col justify-center items-center ">
      <div className="h-40 w-[90%] flex  justify-center ">
        <text className="font-extrabold text-5xl">Payment Methods</text>
      </div>
      <div className="h-72 w-[90%] flex justify-center flex-col">
        <text className="ml-24 ">
          To ease up shopping for you we are providing with multiple payment
          options for you to choice from when you shop at Affinity.
        </text>
        <text className="ml-24 mt-6 font-bold">Cash On Delivery</text>

        <text className="ml-24 mt-6">
          Shop with convenience and without any hassle with our cash on delivery
          service. When you make a purchase using the Cash on Delivery option,
          your product will be booked. Our customer services representatives
          will call you to confirm your order before it gets dispatched. You
          then have to pay in cash to the delivery agent upon receiving your
          order.
        </text>
        <text className="ml-24 mt-4 font-bold">Banking</text>

        <text className="ml-24 mt-6">
          We entertain payments made via Bank Transfer to our account as well,
          you can deposit or transfer online at your ease. For help on how to
          pay using Bank Transfer and account details please call our customer
          services representatives on 0331-533-3367.
        </text>
        <text className="ml-24 mt-6 font-bold">
          Telenor Easypaisa / UBL Omni / Mobi Cash / Western Union
        </text>
        <text className="ml-24 mt-6 ">
          You can also pay for your purchase by using these service. You can pay
          via Telenor Easypaisa, UBL Omni, Mobi Cash, Western Union or similar
          services by visiting any of their outlets across Pakistan. For help on
          how to pay in advance using any of these methods do not hesitate to
          get in touch with our representatives on 0331-533-3367.
        </text>

        
      </div>
    </div>
  );
};

export default Payment;
