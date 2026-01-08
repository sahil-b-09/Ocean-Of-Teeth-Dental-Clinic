"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, Menu, X, Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "About Us", href: "#about" },
        { name: "Contact", href: "https://wa.me/917744975111?text=Hi" },
    ];

    return (
        <header className={`w-full z-50 transition-all duration-300 ${isScrolled ? "fixed top-0 bg-white/95 backdrop-blur-sm shadow-md" : "relative bg-white"}`}>
            {/* Top Bar */}
            <div className="bg-primary text-white py-2 text-sm hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex space-x-6">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>Kohinoor Grandeur, Kiwale (Ravet), Pune</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>Mon-Sun: 10:00 AM - 9:00 PM</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="tel:+917744975111" className="flex items-center gap-2 hover:text-secondary transition-colors">
                            <Phone className="w-4 h-4" />
                            <span>+91 7744975111</span>
                        </a>
                        <div className="flex items-center gap-3 border-l border-white/20 pl-4">
                            {/* Placeholders for social icons */}
                            <Instagram className="w-4 h-4 hover:text-secondary cursor-pointer" />
                            <Facebook className="w-4 h-4 hover:text-secondary cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <img src="/images/logo.png" alt="Ocean Of Teeth Logo" className="h-12 w-auto object-contain transform group-hover:scale-110 transition-transform duration-300" />
                        <div>
                            <div className="text-xl md:text-2xl font-bold text-[#C5A059] leading-tight font-serif tracking-wide">
                                OCEAN OF TEETH
                            </div>
                            <div className="text-[0.6rem] md:text-xs text-[#00A651] font-bold tracking-widest uppercase">
                                COSMETIC AND IMPLANT DENTAL CLINIC
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="font-medium text-gray-700 hover:text-primary transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                        <Link
                            href="#appointment"
                            className="bg-primary hover:bg-teal-600 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
                        >
                            Book Appointment
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-2">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.3 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="block font-medium text-gray-700 hover:text-[#00A651] py-3 border-b border-gray-100 text-lg transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.3 }}
                            >
                                <Link
                                    href="#appointment"
                                    className="block bg-[#00A651] text-white text-center py-4 rounded-xl font-bold mt-4 shadow-lg active:scale-95 transition-transform"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Book Appointment
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
