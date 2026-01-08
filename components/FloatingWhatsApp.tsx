"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
    return (
        <Link
            href="https://wa.me/917744975111"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 right-6 z-50 md:bottom-8 md:right-8"
            aria-label="Chat on WhatsApp"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative group"
            >
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow text-white">
                    <MessageCircle className="w-8 h-8 fill-current" />
                </div>

                {/* Tooltip */}
                <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-white text-gray-800 text-sm font-medium rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                    Chat with us!
                </span>
            </motion.div>
        </Link>
    );
}
