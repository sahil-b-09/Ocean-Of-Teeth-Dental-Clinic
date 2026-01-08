"use client";

import { motion } from "framer-motion";
import { Users, HeartPulse, Pill } from "lucide-react";
import SplitText from "./SplitText";

const features = [
    {
        icon: Users,
        title: "Expert Dentist",
        desc: "Highly experienced professionals dedicated to your perfect smile."
    },
    {
        icon: HeartPulse,
        title: "Modern Dental Tech",
        desc: "State-of-the-art equipment for precise and painless treatments."
    },
    {
        icon: Pill,
        title: "Personalized Care",
        desc: "Tailored treatment plans designed specifically for your unique needs."
    }
];

export default function Features() {
    return (
        <section className="py-20 bg-[#FDFBF7]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Image/Design */}
                    <div className="hidden lg:block relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white h-[500px] border border-gray-100 group">
                            <img
                                src="/images/why-choose-us-dentist-hd.png"
                                alt="Dental Team High Quality"
                                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        <span className="text-[#00A651] font-bold tracking-widest uppercase text-sm mb-2 block">Why Choose Us</span>
                        <h2 className="text-4xl font-bold text-[#434E96] mb-8 font-serif">
                            <SplitText delay={0.2}>Ocean Of Teeth</SplitText> <span className="text-[#C5A059]"><SplitText delay={0.5}>Dental Clinic</SplitText></span>
                        </h2>
                        <p className="text-gray-600 mb-10">
                            We combine expertise with a gentle touch to provide the comprehensive dental care you deserve. Your oral health is our priority.
                        </p>

                        <div className="space-y-8">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.2, duration: 0.5 }}
                                    className="flex gap-4 group"
                                >
                                    <div className="w-16 h-16 shrink-0 rounded-full border border-gray-100 flex items-center justify-center text-[#434E96] bg-white shadow-sm">
                                        <feature.icon className="w-8 h-8 stroke-1" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#434E96] mb-2 font-serif">{feature.title}</h3>
                                        <p className="text-gray-500 text-sm max-w-xs">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
