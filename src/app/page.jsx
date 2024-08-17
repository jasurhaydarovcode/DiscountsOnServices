import Navbar from "@/components/Navbar";
import Image from 'next/image';
import { spotifyGirl } from '../assets/import/images'

export default function Home() {
    return (
        <>
            <Navbar />


            {/* START HERO */}
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-center p-6">
                    <div className="md:w-[40%] bg-blue-fa text-white pl-20 p-6 rounded-3xl pb-20">
                        <h2 className="text-4xl pt-20 pb-5 font-bold mb-4">Start enjoying a benefit <br /> of up to 50%</h2>
                        <p className="mb-6 py-10">You have always wanted to get the same product at a <br /> special price for you, without haggling - and it is yours.</p>
                        <button className="bg-white text-black-100 font-bold text-secondary-foreground hover:bg-secondary/80 px-10 py-3 rounded-xl">Start using</button>
                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
                        <Image undefinedhidden="true" alt="illustration of a woman with product logos" src={spotifyGirl} />
                    </div>
                </div>
            </div>

            {/* END HERO */}
        </>
    );
}