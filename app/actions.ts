"use server";

export async function submitAppointment(formData: FormData) {
    const rawFormData = {
        name: formData.get("name"),
        phone: formData.get("phone"),
        date: formData.get("date"),
        treatment: formData.get("treatment"),
    };

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Appointment Request Received:", rawFormData);

    // In a real app, you would use Resend/Nodemailer here
    // await resend.emails.send({ ... });

    return {
        success: true,
        message: "Appointment request sent successfully! We will contact you shortly.",
    };
}
