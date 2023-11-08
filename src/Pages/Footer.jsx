import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Optional: Adds a smooth scrolling animation
    });
  };
  return (
    <div className="h-[70%] w-full mt-10  bg-slate-100 flex flex-col">
      <div className="h-[75%] w-full  border-solid border-y-2 flex flex-row justify-center items-center gap-32">
        <div className="h-72 w-64 flex flex-col">
          <text className="font-bold mt-12 cursor-default">Quick links</text>
          <Link
            to="/about"
            className="mt-6 hover:text-gray-500 hover:underline cursor-pointer"
            onClick={handleScrollToTop}
          >
            <text>About Us</text>
          </Link>
          <Link
            to="/contactus"
            className="mt-2 hover:text-gray-500 hover:underline cursor-pointer"
            onClick={handleScrollToTop}
          >
            <text>Contact Us</text>
          </Link>
          <Link
            to="/faqs"
            className="mt-2 hover:text-gray-500 hover:underline cursor-pointer"
            onClick={handleScrollToTop}
          >
            <text className="mt-2 hover:text-gray-500 hover:underline cursor-pointer">
              FAQs
            </text>
          </Link>
          <Link
            to="/clear"
            className="mt-2 hover:text-gray-500 hover:underline cursor-pointer"
            onClick={handleScrollToTop}
          >
            <text className="mt-2 hover:text-gray-500 hover:underline cursor-pointer">
              Clearance Sale Policy
            </text>
          </Link>
        </div>
        <div className="h-72 w-64 flex flex-col ">
          <text className="font-bold mt-12 cursor-default">Useful Links</text>
          <Link
            to="/delivery"
            className="mt-6 hover:text-gray-500 hover:underline cursor-pointer"
            onClick={handleScrollToTop}
          >
            <text>Delivery & Exchange</text>
          </Link>
          <Link
            to="/privacy"
            className="mt-2 hover:text-gray-500 hover:underline cursor-pointer"
            onClick={handleScrollToTop}
          >
            <text className="mt-2 hover:text-gray-500 hover:underline cursor-pointer">
              Privacy Policy
            </text>
          </Link>
          <Link
            to="/tos"
            className="mt-2 hover:text-gray-500 hover:underline cursor-pointer"
            onClick={handleScrollToTop}
          >
            <text className="mt-2 hover:text-gray-500 hover:underline cursor-pointer">
              TOS
            </text>
          </Link>
          <Link
            to="/payment"
            className="mt-2 hover:text-gray-500 hover:underline cursor-pointer"
            onClick={handleScrollToTop}
          >
            <text className="mt-2 hover:text-gray-500 hover:underline cursor-pointer">
              Payment Methods
            </text>
          </Link>
        </div>
        <div className="h-72 w-80 flex flex-col">
          <text className="font-bold mt-12 cursor-default">
            Contact Information
          </text>
          <text className="mt-6 font-bold text-sm cursor-default">
            📞 12345678901 (MON to SAT | 2 PM to 9 PM)
          </text>
          <text className="mt-5 font-bold hover:text-gray-500 hover:underline cursor-pointer">
            📧 queries.affinity@gmail.com
          </text>
          <text className="mt-5 font-bold cursor-default">
            📍 PIA Road, Main Boulevard, Lahore
          </text>
        </div>
      </div>
      <div className="h-28 w-full  flex flex-col justify-end items-end">
        <div className="h-full w-[30%]">
          <div className="h-16 w-full  flex flex-row justify-center items-center gap-4">
            <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1653377901&extra_1=s%7Cc%7C318307045144%7Ce%7Cfacebook%27%7C&placement=&creative=318307045144&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1653377901%26adgroupid%3D65139789042%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D9076950%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiAgK2qBhCHARIsAGACuzn7k74oiCvxwxF2OHoOt-5A5t0ZQWSsb8vQaNlLUeIGXxUrLvJXL48aAnZSEALw_wcB">
              <AiFillFacebook className="text-4xl hover:text-gray-700 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/">
              <BsInstagram className="text-3xl hover:text-gray-700 cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="h-full w-[30%] flex justify-center">
          <text className="text-gray-700 cursor-default">
            © 2023, Affinity Powered by Shopify
          </text>
        </div>
      </div>
    </div>
  );
};

export default Footer;
