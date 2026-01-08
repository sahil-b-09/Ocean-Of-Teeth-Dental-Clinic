"use client";

import { Phone, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileStickyBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] pb-safe">
            <div className="grid grid-cols-2 gap-1 p-2">
                <a
                    href="tel:+917744975111"
                    className="flex items-center justify-center gap-2 bg-gray-100 text-[#434E96] font-bold py-3 rounded-lg active:bg-gray-200"
                >
                    <Phone className="w-5 h-5" />
                    Call Now
                </a>
                <a
                    href="#appointment"
                    className="flex items-center justify-center gap-2 bg-[#00A651] text-white font-bold py-3 rounded-lg active:bg-green-700"
                >
                    <CalendarCheck className="w-5 h-5" />
                    Book
                </a>
            </div>
        </div>
    );
}
