"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SplitText from "./SplitText";

export default function Hero() {

    return (
        <section id="home" className="relative w-full min-h-[800px] bg-[#FDFBF7] overflow-hidden flex items-center">
            {/* Background Decorative Elements */}
            {/* Large circle outline */}
            <div className="absolute top-1/2 right-[-10%] w-[800px] h-[800px] border border-gray-100 rounded-full -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute top-1/2 right-[-5%] w-[600px] h-[600px] border border-dashed border-gray-200 rounded-full -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl"
                >
                    <span className="uppercase tracking-[0.2em] text-sm font-bold text-[#00A651] mb-4 block">
                        Dental Care
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 font-serif text-[#434E96]">
                        <SplitText delay={0.2}>Always Smile</SplitText> <br />
                        <span className="text-[#C5A059]">
                            <SplitText delay={0.6}>like twinkle</SplitText>
                        </span>
                    </h1>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-md">
                        Dental care is the maintenance of healthy teeth and the practice of keeping the mouth and teeth clean to prevent dental disorders.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <a
                            href="https://wa.me/917744975111?text=Hi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-[#434E96] font-bold hover:text-[#00A651] transition-colors text-lg group"
                        >
                            Chat With Us
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -15, 0] // Gentle floating effect
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        y: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatType: "reverse"
                        }
                    }}
                    className="relative"
                >
                    {/* Circular Main Image Mask */}
                    <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-8 border-gray-100 bg-blue-50 mx-auto">
                        <img
                            src="/images/hero_perfect_smile_indian.png"
                            alt="Beautiful Smile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Floating "Offer" Badge */}
                    <div className="absolute top-10 left-0 md:left-10 bg-[#00A651] text-white rounded-full w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center shadow-lg border-4 border-white/20 animate-bounce-slow">
                        <span className="text-lg font-serif italic">Offer</span>
                        <span className="text-4xl md:text-5xl font-bold">35%</span>
                    </div>

                    {/* Decorative Curved Arrow (SVG) */}
                    <div className="absolute bottom-10 left-0 w-24 h-24 text-gray-200 hidden md:block">
                        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M10,10 Q50,90 90,50" />
                            <path d="M80,45 L90,50 L85,60" />
                        </svg>
                    </div>

                    {/* Decorative Icon Badge Bottom */}
                    <div className="absolute bottom-0 right-10 md:right-20 bg-[#E8F5E9] p-4 rounded-full w-24 h-24 flex items-center justify-center shadow-xl">
                        <img src="https://cdn-icons-png.flaticon.com/512/2740/2740652.png" alt="Chair" className="w-12 h-12 opacity-80" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
