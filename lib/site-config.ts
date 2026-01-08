export const siteConfig = {
    name: "Dr Sushma Kawale Dental Care",
    subtitle: "Advanced Dental Care Center",
    phone: "+91 9960348939",
    phoneSecondary: "+91 9960348939", // Using same as primary if not provided
    email: "contact@drsushmakawale.com", // Placeholder
    address: {
        line1: "MP3V+P9 Ravet,",
        line2: "Pimpri-Chinchwad,",
        line3: "Maharashtra",
        googleMapsLink: "https://maps.app.goo.gl/21n5cYgqYhVTFHay8",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2!2d73.7!3d18.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM5JzA1LjEiTiA3M8KwNDQnMzUuMiJF!5e0!3m2!1sen!2sin!4v1638867498750!5m2!1sen!2sin"
    },
    timing: "Mon-Sat: 10:00 AM - 9:00 PM", // Default timing
    social: {
        whatsapp: "https://wa.me/919960348939?text=Hi%20Dr.%20Sushma,%20I%20would%20like%20to%20book%20an%20appointment.",
        instagram: "#",
        facebook: "#",
        twitter: "#"
    },
    images: {
        logo: "/images/logo.png", // Keeps generic for now
        hero: "/images/hero_perfect_smile_indian.png"
    },
    theme: {
        colors: {
            // "Clinical Blue & White with Modern Gradient Accents"
            primary: "#2F6FD6",   // Royal Medical Blue
            secondary: "#1F2A44", // Deep Navy Blue
            accent: "#6FA8FF"     // Sky / Soft Blue
        }
    },
    hero: {
        tagline: "Your Smile, Our Priority",
        headingLine1: "Expert Dental Care",
        headingLine2: "In Ravet",
        description: "Dr. Sushma Kawale Dental Care offers comprehensive treatments including Root Canals, Implants, and Smile Designing with a gentle touch.",
        offer: {
            text: "Consultation",
            value: "FREE",
            visible: true
        }
    },
    features: {
        title: "Our Expertise",
        headingLine1: "Complete",
        headingLine2: "Dental Solutions",
        description: "From routine cleaning to advanced implants, we provide high-quality care for your entire family.",
        items: [
            {
                icon: "Zap", // Root Canal
                title: "Root Canal Treatment",
                desc: "Painless advanced root canal therapy to save your natural teeth."
            },
            {
                icon: "Sparkles", // Cosmetic
                title: "Smile Designing",
                desc: "Transform your smile with veneers, whitening, and aesthetic corrections."
            },
            {
                icon: "Baby", // Kids
                title: "Kid’s Dentistry",
                desc: "Gentle and friendly dental care for your little ones."
            },
            {
                icon: "Gem", // Implants
                title: "Dental Implants",
                desc: "Permanent and natural-looking solutions for missing teeth."
            },
            {
                icon: "Smile", // Braces
                title: "Braces & Aligners",
                desc: "Straighten your teeth with modern orthodontic treatments."
            },
            {
                icon: "Crown", // Crown (Custom icon logic in Features might default if not mapped, but 'Crown' isn't in Lucide? Using generic 'Award' or 'Star' if needed, but let's try 'Crown' or 'Activity')
                title: "Crowns & Bridges", // Re-using an icon or picking a standard one
                desc: "Restore function and appearance with durable crowns."
            }
        ]
    },
    doctor: {
        label: "Meet The Expert",
        name: "Dr. Sushma Kawale",
        qualification: "Chief Dental Surgeon",
        description1: "Dr. Sushma Kawale is a highly skilled dental surgeon dedicated to providing exceptional oral healthcare in Ravet. With a focus on patient comfort and advanced techniques, she ensures every visit is a positive experience.",
        description2: "Specializing in Root Canals, Implants, and Cosmetic Dentistry, Dr. Kawale combines clinical expertise with a compassionate approach to help you achieve a healthy, confident smile.",
        image: "/images/doctor-profile.png", // Generic placeholder
        stats: {
            label: "Experience",
            value: "10+ Years" // Placeholder
        }
    },
    testimonials: {
        label: "Happy Patients",
        headingLine1: "What Our",
        headingLine2: "Patients Say",
        description: "Trusted by families in Ravet for our quality care and friendly atmosphere.",
        items: [
            {
                name: "Rahul Patil",
                role: "Root Canal Patient",
                content: "I had a painless root canal treatment with Dr. Sushma. She is very gentle and explained the procedure well. Highly recommended!",
                stars: 5,
            },
            {
                name: "Neha Deshmukh",
                role: "Smile Designing",
                content: "My smile makeover changed my confidence completely. The team is professional and the clinic is very hygienic.",
                stars: 5,
            },
            {
                name: "Aniket Joshi",
                role: "Regular Checkup",
                content: "Best dental clinic in Ravet. Dr. Sushma is very knowledgeable and takes great care of her patients.",
                stars: 5,
            }
        ]
    }
};
