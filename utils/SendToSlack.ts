const sendToSlack = async (email: string) => {
    // Send to Slack
    try {
        const response = await fetch("/api/addtoslack", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email}),
        });

        if (response.status === 200) {
            console.log("Successfully sent to Slack");
        } else {
            console.log("Error sending to Slack", await response.text());
        }
      
    } catch (error) {
     console.error("Error sending to slack:", error); 
    }
}

export default sendToSlack;