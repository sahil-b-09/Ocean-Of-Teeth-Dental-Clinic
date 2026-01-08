"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";
import SplitText from "./SplitText";

export default function Testimonials() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

    const testimonials = [
        {
            name: "Rohan Miller",
            role: "Dental Implant Patient",
            content: "I was terrified of the dentist, but Dr. Leena made me feel so comfortable. The implant procedure was painless, and I can finally smile with confidence again!",
            stars: 5,
        },
        {
            name: "Priya Sharma",
            role: "Cosmetic Dentistry",
            content: "The teeth whitening results are incredible. The clinic is so modern and clean. I recommend Ocean Of Teeth to all my friends and family.",
            stars: 5,

        },
        {
            name: "Amit Desai",
            role: "Root Canal Treatment",
            content: "Top-notch technology and very professional staff. I didn't feel a thing during my root canal. Best dental experience in Pune.",
            stars: 5,
        },
        {
            name: "Sneha Patil",
            role: "Regular Checkup",
            content: "Dr. Leena is wonderful with kids. My daughter actually looks forward to her dental appointments now. Highly recommended!",
            stars: 5,
        },
    ];

    return (
        <section className="py-20 bg-[#FDFBF7] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-[#00A651] font-bold tracking-widest uppercase text-sm mb-2 block">Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#434E96] mb-4 font-serif">
                        <SplitText>Happy</SplitText> <span className="text-[#C5A059]"><SplitText delay={0.3}>Stories</SplitText></span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Don't just take our word for it. Here is what our patients have to say about their experience with us.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto" ref={emblaRef}>
                    <div className="flex gap-8">
                        {testimonials.map((item, idx) => (
                            <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 h-full flex flex-col relative group">
                                    <Quote className="w-10 h-10 text-gray-100 absolute top-4 right-4 group-hover:text-[#00A651]/10 transition-colors" />

                                    <div className="flex gap-1 mb-6 text-yellow-400">
                                        {[...Array(item.stars)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-current" />
                                        ))}
                                    </div>

                                    <p className="text-gray-600 mb-8 flex-grow leading-relaxed italic">"{item.content}"</p>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-[#434E96]">
                                            {item.name[0]}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#434E96]">{item.name}</h4>
                                            <p className="text-xs text-[#00A651] font-medium uppercase tracking-wider">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
