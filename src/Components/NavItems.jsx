import { HomeIcon, ShoppingCart, ShoppingBagIcon, Contact } from "lucide-react";


const NavItems = [
    { id: 1, text: 'Home', icon: <HomeIcon size={15}/> , link: '/' },
    { id: 2, text: 'Products', icon: <ShoppingBagIcon size={15}/>,  link: '/Products' },
    { id: 3, text: 'Cart', icon: <ShoppingCart size={15}/>, link: '/Cart' },
    { id: 4, text: 'Contact Us', icon: <Contact size={15}/>,  link: '/contact' },
  ];
  
  export default NavItems;
  