import { NavLink } from "react-router-dom";
import { X, Menu, LogOutIcon, ShoppingCart, HomeIcon } from "lucide-react";
import "../Home.css"


const Home = () => {
  return (
    <div>
      <main className='mx-auto home'>
            <h1 className='ml-5 text-5xl tracking-wide md:text-7xl sm:text-5xl'>
                <span>Be Bold,</span>
                <span>Be Beautiful,</span>
                <span>with Bold Beauty</span>
            </h1>
            <p className='max-w-xl ml-5 text-xl text-gray-200 '>We offer only the best products because the health of your skin 
            is our priority</p>

            <div className="links flex items-end gap-5 ml-5 ">
              <button className="hover:-translate-y-1 hover:duration-75 bg-white text-black font-bold py-1 px-5 rounded-md">
                {`Go to Cart`}
              </button>

              <button className="hover:-translate-y-1 hover:duration-200 bg-transparent border  text-white font-bold py-1 px-5 rounded-md">
                {`View Products`}
              </button>
            </div>

            
      </main>
    </div>
  )
}

export default Home
