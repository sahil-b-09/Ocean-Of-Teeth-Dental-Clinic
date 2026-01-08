"use client";

import { motion } from "framer-motion";
import SplitText from "./SplitText";

export default function About() {
    return (
        <section id="about" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image with Animated Frame */}
                    <div className="relative flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative min-w-[350px] min-h-[400px]"
                        >
                            {/* Decorative Background Frame (Rotated) */}
                            <motion.div
                                animate={{ rotate: [6, 12, 6] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                                className="absolute inset-0 bg-[#C5A059]/20 rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[30px] rounded-br-[30px] z-0"
                            />

                            {/* Solid Background Frame (Offset) */}
                            <div className="absolute inset-4 bg-[#00A651] rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[30px] rounded-br-[30px] z-10 translate-x-4 translate-y-4"></div>

                            {/* Main Image */}
                            <img
                                src="/images/doctor-profile.png"
                                alt="Dr. Leena Shah"
                                className="relative z-20 w-full h-full object-cover shadow-2xl rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[30px] rounded-br-[30px]"
                            />

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute -bottom-6 -left-6 z-30 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3"
                            >
                                <div className="w-12 h-12 bg-[#E8F5E9] rounded-full flex items-center justify-center text-2xl">🦷</div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Experience</p>
                                    <p className="text-[#C5A059] font-bold text-lg">18+ Years</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#00A651] font-bold tracking-widest uppercase text-sm mb-2 block">Meet The Doctor</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#434E96] mb-4 font-serif">
                            <SplitText delay={0.2}>Dr. Leena Shah</SplitText> <br />
                            <span className="text-[#C5A059] text-2xl md:text-3xl font-sans font-normal block mt-2">Director & Dental Surgeon (BDS)</span>
                        </h2>

                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                            Dr. Leena Shah is the heart and soul of Ocean of Teeth Dental Clinic. As the leading dental professional, she brings extensive experience in cosmetic, implant, and general dentistry to every procedure.
                        </p>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Dedicated to providing the highest standard of personalized care, Dr. Shah ensures that every patient feels comfortable and leaves with a healthy, confident smile. Her approach combines state-of-the-art technology with a compassionate touch, making her the trusted face of dental health in our community.
                        </p>

                        <div className="flex items-center gap-8">
                            <a href="#appointment" className="px-8 py-3 bg-[#00A651] text-white rounded-full font-bold shadow-lg hover:bg-green-700 transition-all transform hover:scale-105">
                                Book Appointment
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
