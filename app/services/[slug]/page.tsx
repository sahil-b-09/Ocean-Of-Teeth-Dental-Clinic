import { services } from "@/lib/services_data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Phone, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find(s => s.slug === slug);
    if (!service) return { title: "Service Not Found" };
    return {
        title: `${service.title} | Ocean Of Teeth Dental Clinic`,
        description: service.short,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services.find(s => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Minimal Header for Navigation */}
            <div className="bg-[#434E96] text-white py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 font-serif text-xl font-bold hover:text-[#C5A059] transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </Link>
                    <div className="hidden md:flex items-center gap-6 text-sm">
                        <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#C5A059]" /> +91 123 456 7890</span>
                    </div>
                </div>
            </div>

            {/* Hero Section of Service */}
            <section className="bg-[#E8F5E9] py-16 md:py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-[#00A651] font-semibold text-sm mb-6 shadow-sm">
                            <service.icon className="w-4 h-4" />
                            Dental Service
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-[#434E96] font-serif mb-6 leading-tight">
                            {service.title}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                            {service.short}
                        </p>
                    </div>
                </div>
                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#00A651]/5 rounded-bl-[100px] hidden md:block pointer-events-none" />
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-8">

                            {/* Service Image (Logo Style) */}
                            <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg mb-8 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center group border border-gray-100">
                                {service.image && (
                                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-contain group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 ease-in-out drop-shadow-xl"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="prose prose-lg max-w-none text-gray-600">
                                <h3 className="text-2xl font-bold text-[#434E96] font-serif mb-4">Detailed Description</h3>
                                <p className="leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-8">
                                <h3 className="text-xl font-bold text-[#434E96] mb-4">Why choose this treatment?</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Performed by experienced specialists",
                                        "State-of-the-art technology and equipment",
                                        "Comprehensive care and follow-up",
                                        "Comfortable and pain-free experience"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600">
                                            <div className="w-6 h-6 rounded-full bg-[#00A651]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <ArrowRight className="w-3 h-3 text-[#00A651]" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar / CTA */}
                        <div className="md:col-span-1">
                            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
                                <h3 className="text-2xl font-bold text-[#434E96] font-serif mb-2">Book Appointment</h3>
                                <p className="text-gray-500 mb-6 text-sm">
                                    Interested in {service.title}? Schedule a consultation with our experts today.
                                </p>

                                <Link
                                    href="/#appointment"
                                    className="w-full py-4 bg-[#00A651] text-white rounded-xl font-bold shadow-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2 mb-4 group"
                                >
                                    Book Now
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <div className="text-center space-y-2">
                                    <p className="text-sm text-gray-400 mb-1">Or call us directly</p>
                                    <a href="tel:+917744975111" className="block text-lg font-bold text-[#434E96] hover:text-[#00A651] transition-colors">
                                        +91 7744975111
                                    </a>
                                    <a href="tel:+919820160133" className="block text-lg font-bold text-[#434E96] hover:text-[#00A651] transition-colors">
                                        +91 9820160133
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
