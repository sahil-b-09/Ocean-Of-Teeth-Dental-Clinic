"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";
import SplitText from "./SplitText";
import { siteConfig } from "@/lib/site-config";

export default function Testimonials() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

    const testimonials = siteConfig.testimonials.items;

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">{siteConfig.testimonials.label}</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4 font-serif">
                        <SplitText>{siteConfig.testimonials.headingLine1}</SplitText> <span className="text-accent"><SplitText delay={0.3}>{siteConfig.testimonials.headingLine2}</SplitText></span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        {siteConfig.testimonials.description}
                    </p>
                </div>

                <div className="max-w-6xl mx-auto" ref={emblaRef}>
                    <div className="flex gap-8">
                        {testimonials.map((item, idx) => (
                            <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 h-full flex flex-col relative group">
                                    <Quote className="w-10 h-10 text-gray-100 absolute top-4 right-4 group-hover:text-primary/10 transition-colors" />

                                    <div className="flex gap-1 mb-6 text-yellow-400">
                                        {[...Array(item.stars)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-current" />
                                        ))}
                                    </div>

                                    <p className="text-gray-600 mb-8 flex-grow leading-relaxed italic">"{item.content}"</p>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-secondary">
                                            {item.name[0]}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-secondary">{item.name}</h4>
                                            <p className="text-xs text-primary font-medium uppercase tracking-wider">{item.role}</p>
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
