import { SiGradleplaypublisher } from "react-icons/si";
import ASAS from '/src/assets/img/ASAS.png';
import traveler from '/src/assets/img/travler.png';

const About = () => {
    return (
        <div className="pt-3 px-12 md:px-24 lg:px-32">
            <div className="w-full">
                <div className="md:flex items-center justify-between">
                    <div className="flex flex-col justify-between space-y-5">
                        <div className="flex flex-col md:w-[450px]">
                            <span className="text-redText font-bold text-2xl font-sans">
                                Best Destinations around the world
                            </span>

                            <span className="font-bold text-2xl md:text-6xl text-purpleText font-serif">
                                Travel, enjoy
                                and live a new
                                and full life
                            </span>

                            <img src={ASAS} className="hidden md:absolute top-[215px] right-[281px] h-[22px] w-[1300px]" alt="" />
                        </div>

                        <div className="md:w-[450px]">
                            <span className="text-purpleText">
                                The world is big and I want you to have a good look at it before it gets dark.
                                Traveling - it leaves you speechless, then turns you into a storyteller.
                            </span>
                        </div>

                        <div className="flex space-x-6 items-center">
                            <a href="#" className="px-4 py-2.5 rounded-md bg-yellowColor text-textWhite">Find out more</a>
                            
                            <div className="flex items-center space-x-3">
                                <div className="rounded-full bg-buttonColor p-3 text-textWhite cursor-pointer">
                                    <SiGradleplaypublisher />   
                                </div>

                                <div className="text-purpleText text-sm">
                                    <span>Play Demo</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                            <img className="w-[450px]" src={traveler} alt="" />
                    </div> 
                </div>    
            </div>
        </div>
    )
}

export default About