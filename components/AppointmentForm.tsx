"use client";

import { useState } from "react";
import { User, Phone, Mail, Calendar, Clock, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import { submitAppointment } from "@/app/actions";
import { siteConfig } from "@/lib/site-config";

export default function AppointmentForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        doctor: "",
        date: "",
        time: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formPayload = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formPayload.append(key, value);
        });

        try {
            await submitAppointment(formPayload);
            setIsSubmitted(true);
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="appointment" className="py-0 bg-gray-50 overflow-hidden">
            <div className="flex flex-col lg:flex-row h-full">

                {/* Right: Image (Order 2 on mobile, Order 2 on Desktop - wait, screenshot has Image Right) */}
                {/* Actually, let's look at the screenshot: Form Left (White), Image Right (Dentist Scene) */}

                {/* Left: Form */}
                <div className="w-full lg:w-1/2 bg-gray-50 p-8 md:p-16 flex flex-col justify-center">
                    <div className="max-w-xl mx-auto w-full">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block text-center">Appointment</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-2 font-serif text-center">
                            Book your <span className="text-primary">Dentist</span>
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-10 font-serif text-center">
                            for <span className="text-primary">Proper</span> Care
                        </h3>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-primary/10 p-8 rounded-2xl text-center border border-primary/20"
                            >
                                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">🎉</span>
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
                                <p className="text-gray-600 mb-6">
                                    Thank you, {formData.name}. We will contact you shortly on {formData.phone} to confirm your appointment.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-secondary font-semibold underline"
                                >
                                    Book another
                                </button>
                            </motion.div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <select
                                            name="service"
                                            className="w-full px-6 py-4 rounded-xl bg-white border-none shadow-sm text-gray-500 outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-primary/20 transition-all"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>Select Treatment</option>
                                            <option value="checkup">General Checkup</option>
                                            <option value="cleaning">Cleaning & Polishing</option>
                                            <option value="rootcanal">Root Canal</option>
                                            <option value="implants">Dental Implants</option>
                                            <option value="cosmetic">Cosmetic Dentistry</option>
                                            <option value="ortho">Orthodontics (Braces)</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                    </div>
                                    <div className="relative">
                                        <select
                                            name="doctor"
                                            className="w-full px-6 py-4 rounded-xl bg-white border-none shadow-sm text-gray-500 outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-primary/20 transition-all"
                                            value={formData.doctor}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>Preferred Doctor</option>
                                            <option value="dr_leena">{siteConfig.doctor.name}</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className="w-full px-6 py-4 rounded-xl bg-white border-none shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 transition-all"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        className="w-full px-6 py-4 rounded-xl bg-white border-none shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 transition-all"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        className="w-full px-6 py-4 rounded-xl bg-white border-none shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-primary/20 transition-all"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        maxLength={10}
                                    />
                                    <input
                                        type="date"
                                        name="date"
                                        className="w-full px-6 py-4 rounded-xl bg-white border-none shadow-sm outline-none text-gray-400 focus:ring-2 focus:ring-primary/20 transition-all"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="time"
                                        name="time"
                                        className="w-full px-6 py-4 rounded-xl bg-white border-none shadow-sm outline-none text-gray-400 focus:ring-2 focus:ring-primary/20 transition-all"
                                        value={formData.time}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="text-center pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="inline-flex items-center gap-2 text-primary font-bold underline underline-offset-4 text-lg hover:text-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : "Confirm Appointment"}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                {/* Right: Image */}
                <div className="w-full lg:w-1/2 h-[500px] lg:h-auto relative">
                    <img
                        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop"
                        alt="Dentist Working"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary/10"></div>
                    <div className="absolute right-0 bottom-0 p-4">
                        <div className="bg-primary p-3 rounded-tl-xl text-white">
                            <ChevronDown className="rotate-180 w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
