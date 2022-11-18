import { useRouter } from "next/router";
import { motion as m } from 'framer-motion';
import { useState, useEffect } from "react";
import Confetti from "react-confetti";


const success = () => {
    const router = useRouter();
    const [pieces, setPieces] = useState(200);

    const stopConfetti = () => {
        setTimeout(() => {
            setPieces(0);
        }, 3000);
    };

    useEffect(() => {
        stopConfetti();
    }, []);

    return (
        <m.main 
            initial={{opacity: 0}} 
            animate={{opacity: 1}}
            exit={{ opacity: 0}}
            className='h-screen flex items-center justify-center w-full'
        >
            <div className='bg-white rounded-2xl items-center justify-center sm:w-full md:w-4/5 xl:w-1/2 text-gray-700 p-16'>
                <h1 className='text-3xl pb-4'>
                    Thank you for joining us {router.query.name}!
                </h1>
                <p className='text-lg text-gray-500'>
                    You will shortly receive an email over at {router.query.email}
                </p>
            </div>
            <Confetti gravity={0.2} numberOfPieces={pieces} />
        </m.main>
    )
}

export default success;