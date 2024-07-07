import { FaTiktok, FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import NavItems from "./NavItems";


const Footer = () => (
  <footer className="p-4 text-center text-black bg-gray-600">
    <div className="social-icons">
      <ul className="flex items-center justify-center gap-10 p-10 text-3xl">
        <li><a href="#">{<FaInstagram/>}</a></li>
        <li><a href="#">{<FaFacebook/>}</a></li>
        <li><a href="#">{<FaWhatsapp/>}</a></li>
        <li><a href="#">{<FaTiktok/>}</a></li>
      </ul>
    </div>

    <ul className="flex items-center justify-center gap-5 text-white">
        {NavItems.map((item) => (
            <li key={item.id} className="py-1 pb-12 text-center ">
                <div className="flex items-center justify-center gap-3">
                  {item.icon}
                  <a href={item.href}>{item.text}</a>
                </div>
            </li>
        ))}
    </ul>
    <p>&copy; 2024 My E-Commerce Site</p>
  </footer>
);

export default Footer;
