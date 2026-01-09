export const siteConfig = {
    name: "Salford Dental Clinic",
    subtitle: "Advanced Dental Care Center",
    phone: "+91 8788454508",
    phoneSecondary: "+91 8788454508",
    email: "contact@salforddental.com",
    address: {
        line1: "Salford Dental Clinic,",
        line2: "Near City Center,",
        line3: "Maharashtra",
        googleMapsLink: "https://maps.app.goo.gl/BgMEDEEcdSZkUoc57",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2!2d73.7!3d18.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM5JzA1LjEiTiA3M8KwNDQnMzUuMiJF!5e0!3m2!1sen!2sin!4v1638867498750!5m2!1sen!2sin"
    },
    timing: "Mon-Sat: 10:00 AM - 9:00 PM",
    social: {
        whatsapp: "https://wa.me/918788454508?text=Hi%20Dr.%20Komal,%20I%20would%20like%20to%20book%20an%20appointment.",
        instagram: "#",
        facebook: "#",
        twitter: "#"
    },
    images: {
        logo: "/images/salford-logo.png",
        hero: "/images/hero_perfect_smile_indian.png"
    },
    theme: {
        colors: {
            primary: "#222461",   // Deep Blue from Logo
            secondary: "#1A1A2E", // Dark Navy for contrast text
            accent: "#E39A3B"     // Warm Dental Orange
        }
    },
    hero: {
        tagline: "Your Smile, Our Passion",
        headingLine1: "World Class",
        headingLine2: "Dental Treatment",
        description: "Salford Dental Clinic provides top-tier dental services with a focus on hygiene, comfort, and results. Dr. Komal Raut-Chavan and her team are here for you.",
        offer: {
            text: "Checkup",
            value: "FREE",
            visible: true
        }
    },
    features: {
        title: "Why Choose Us",
        headingLine1: "Superior",
        headingLine2: "Dental Experience",
        description: "We combine advanced technology with compassionate care to ensure the best oral health for you.",
        items: [
            {
                icon: "Users",
                title: "Expert Team",
                desc: "Highly qualified doctors dedicated to your oral health."
            },
            {
                icon: "Zap",
                title: "Advanced Tech",
                desc: "State-of-the-art equipment for precise treatments."
            },
            {
                icon: "HeartPulse",
                title: "Painless Care",
                desc: "Gentle techniques ensuring a comfortable experience."
            },
            {
                icon: "Shield",
                title: "Sterilization",
                desc: "Strict hygiene protocols for your complete safety."
            }
        ]
    },
    services: [
        {
            title: "Dental Implants",
            slug: "dental-implants",
            short: "Replace missing teeth with durable and natural-looking implants.",
            image: "/images/service-implants.png"
        },
        {
            title: "Braces & Aligners",
            slug: "braces-aligners",
            short: "Correct misalignment and achieve a perfect smile with our orthodontic solutions.",
            image: "/images/service-braces.png"
        },
        {
            title: "Teeth Whitening",
            slug: "teeth-whitening",
            short: "Brighten your smile safely and effectively with our whitening treatments.",
            image: "/images/service-whitening.png"
        },
        {
            title: "Root Canal",
            slug: "root-canal",
            short: "Advanced endodontic therapy to save trusted teeth from extraction.",
            image: "/images/service-rct.png"
        },
        {
            title: "Preventive Care",
            slug: "preventive-care",
            short: "Regular checkups and cleanings to maintain optimal oral health.",
            image: "/images/service-cleaning.png"
        },
        {
            title: "Family Dentistry",
            slug: "family-dentistry",
            short: "Comprehensive care for patients of all ages.",
            image: "/images/service-kids.png"
        }
    ],
    doctor: {
        label: "Meet The Expert",
        name: "Dr. Komal Raut-Chavan",
        qualification: "Dental Surgeon",
        description1: "Dr. Komal Raut-Chavan is a dedicated professional committed to delivering the highest quality dental care. Her precise approach and warm demeanor make every patient feel at home.",
        description2: "Whether you need a routine checkup or a complex procedure, Dr. Raut-Chavan ensures that you receive personalized attention and treatment plans tailored to your needs.",
        image: "/images/doctor-profile.png",
        stats: {
            label: "Patients",
            value: "2000+"
        }
    },
    testimonials: {
        label: "Testimonials",
        headingLine1: "Client",
        headingLine2: "Feedback",
        description: "See what our happy patients have to say about their experience at Salford Dental Clinic.",
        items: [
            {
                name: "Suresh Mehta",
                role: "Implant Patient",
                content: "Dr. Komal is an excellent dentist. The clinic is very well equipped and the staff is cooperative.",
                stars: 5,
            },
            {
                name: "Anita Singh",
                role: "Regular Checkup",
                content: "Very hygienic and professional. I recommend Salford Dental Clinic for all dental needs.",
                stars: 5,
            },
            {
                name: "Rahul Kulkarni",
                role: "Teeth Whitening",
                content: "Great experience! My results were amazing and the process was very smooth.",
                stars: 5,
            }
        ]
    }
};
