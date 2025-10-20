

const sendWelcomeEmail  = async (email: string) => {
    // Send Welcome Email
    try {
        const response = await fetch("/api/sendemail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        if (response.status === 200) {
            console.log("Successfully sent welcome email");
        } else {
            console.log("Error sending welcome email", await response.text());
        }
      
    } catch (error) {
     console.error("Error sending welcome email:", error); 
    }
}

export default sendWelcomeEmail;