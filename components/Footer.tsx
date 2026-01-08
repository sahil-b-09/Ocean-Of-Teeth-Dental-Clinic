import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/images/logo.png" alt="Ocean Of Teeth Logo" className="h-12 w-auto bg-white rounded-lg p-1" />
                            <div>
                                <div className="text-xl font-bold text-[#C5A059] leading-tight font-serif tracking-wide">
                                    OCEAN OF TEETH
                                </div>
                                <div className="text-xs text-[#00A651] font-bold tracking-widest uppercase">
                                    COSMETIC AND IMPLANT DENTAL CLINIC
                                </div>
                            </div>
                        </div>
                        <p className="mb-6 text-gray-400">
                            Providing premium dental care with advanced technology and a patient-first approach.
                            Your smile is our priority.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary cursor-pointer transition-colors text-white">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary cursor-pointer transition-colors text-white">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary cursor-pointer transition-colors text-white">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
                            <li><a href="https://wa.me/917744975111?text=Hi" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                                <a
                                    href="https://www.google.com/maps/place/Ocean+Of+Teeth+Dental+Clinic/@18.6601168,73.7320773,970m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3bc2b0a71b689abb:0x23cdb8981474ada1!2sKohinoor+Grandeur!8m2!3d18.6600741!4d73.7321212!16s%2Fg%2F11b7jy1ksn!3m5!1s0x3bc2b1c74811a857:0x8c7cb03558b189cf!8m2!3d18.6595458!4d73.7325458!16s%2Fg%2F11t1sjt5pn?entry=ttu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    Office No. 11, Kohinoor Grandeur,<br />
                                    Mukai Chowk, Kiwale (Ravet),<br />
                                    Pune - 411033
                                </a>
                            </li>
                            <li className="flex gap-3 items-start">
                                <Phone className="w-5 h-5 text-secondary shrink-0 mt-1" />
                                <div className="flex flex-col gap-1">
                                    <a href="tel:+917744975111" className="hover:text-white transition-colors">+91 7744975111</a>
                                    <a href="tel:+919820160133" className="hover:text-white transition-colors">+91 9820160133</a>
                                </div>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <a href="mailto:11oceanofteeth@gmail.com" className="hover:text-white transition-colors">11oceanofteeth@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Location</h4>
                        <div className="rounded-xl overflow-hidden h-[300px] border border-gray-700 shadow-lg relative z-10 group cursor-pointer">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.279619177699!2d73.7431201!3d18.6514216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e67c9d961d%3A0xe5459b7636e0965e!2sKohinoor%20Grandeur!5e0!3m2!1sen!2sin!4v1709827000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, pointerEvents: "none" }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale group-hover:grayscale-0 transition-all duration-500 w-full h-full"
                            ></iframe>
                            <a
                                href="https://www.google.com/maps/place/Ocean+Of+Teeth+Dental+Clinic/@18.6601168,73.7320773,970m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3bc2b0a71b689abb:0x23cdb8981474ada1!2sKohinoor+Grandeur!8m2!3d18.6600741!4d73.7321212!16s%2Fg%2F11b7jy1ksn!3m5!1s0x3bc2b1c74811a857:0x8c7cb03558b189cf!8m2!3d18.6595458!4d73.7325458!16s%2Fg%2F11t1sjt5pn?entry=ttu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-20 flex items-center justify-center bg-transparent"
                                aria-label="View Ocean Of Teeth Dental Clinic on Google Maps"
                            >
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Ocean Of Teeth Dental Clinic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
