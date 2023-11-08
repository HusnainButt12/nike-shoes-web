import AddToCart from "./Pages/AddToCart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardData from "./Pages/CardData";
import Footer from "./Pages/Footer";
import NavBar from "./Pages/NavBar";
import TopNav from "./Pages/TopNav";
import Login from "./Pages/Login";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Faqs from "./Pages/Faqs";
import SalePolicy from "./Pages/SalePolicy";
import Delivery from "./Pages/Delivery";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Tos from "./Pages/Tos";
import Payment from "./Pages/Payment";
import Slides from "./Pages/Slides";
import Accessories from "./Pages/Accessories";
import ClearSale from "./Pages/ClearSale";
import TrackOrder from "./Pages/TrackOrder";

function App() {
  return (
    <div className="h-[100vh] w-full bg-white">
      <Router>
        <TopNav />
        <NavBar />
        <Routes>
          <Route path="/" element={<CardData />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addtocart" element={<AddToCart />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/clear" element={<SalePolicy />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/tos" element={<Tos />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/slide" element={<Slides />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/sale" element={<ClearSale />} />
          <Route path="/trackorder" element={<TrackOrder />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
