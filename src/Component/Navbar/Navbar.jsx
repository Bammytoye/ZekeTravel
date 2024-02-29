import { HiMiniArrowSmallDown } from "react-icons/hi2";
import menu from '/src/assets/menu-60.png'
import close from '/src/assets/clsoemenu.png'
import { useState } from "react";


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => setToggle(!toggle)

    return (
            <div className="py-6 px-12 md:px-24 lg:px-32 z-50">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center">
                        <span className="font-black text-4xl stroke text-yellowColor cursor-pointer">Zeke</span>
                    </div>

                    <div className="hidden lg:flex items-center space-x-5 z-50 text-[12px]">
                                <a href="#" className="font-semibold hover:border-r-2 pr-3 border-yellowColor">Destination</a>
                                <a href="#" className="font-semibold hover:border-r-2 pr-3 border-yellowColor">Hotels</a>
                                <a href="#" className="font-semibold hover:border-r-2 pr-3 border-yellowColor">Flights</a>
                                <a href="#" className="font-semibold hover:border-r-2 pr-3 border-yellowColor">Bookings</a>
                                <a href="#" className="text-redText font-semibold hover:underline">Login</a>
                                <a href="#" className="border rounded-md hover:bg-yellowColor hover:text-textWhite px-4 py-1.5 border-black font-semibold">Sign Up</a>
                                
                                <a href="#" className="font-semibold flex">EN <span className="mt-1"><HiMiniArrowSmallDown /></span></a>
                    </div>
                    
                    <div className="md:block lg:hidden" onClick={handleClick}>
                                <img src={toggle?close:menu} alt="" className="w-[30px]" />
                    </div>    
                </div>
                
                <div className={toggle?"w-full flex flex-col justify-center items-center md:hidden course-pointer z-50 space-y-4" : 'hidden'}>
                    
                            <a href="#" className="font-semibold hover:border-l-2 pl-3 border-yellowColor">Destination</a>
                            <a href="#" className="font-semibold hover:border-l-2 pl-3 border-yellowColor">Hotels</a>
                            <a href="#" className="font-semibold hover:border-l-2 pl-3 border-yellowColor">Flights</a>
                            <a href="#" className="font-semibold hover:border-l-2 pl-3 border-yellowColor">Bookings</a>
                            <a href="#" className="text-redText font-semibold hover:border-r-2 pr-3 border-yellowColor">Login</a>
                            <a href="#" className="border rounded-md hover:bg-yellowColor hover:text-textWhite px-4 py-1.5 border-black font-semibold">Sign Up</a>
                                
                            <a href="#" className="font-semibold flex">EN <span className="mt-1"><HiMiniArrowSmallDown /></span></a>
                                
                        
                </div>
            </div>
    )
}

export default Navbar