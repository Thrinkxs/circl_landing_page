import { BeehiivSubscriber } from "@/lib/types";

export async function addToBeehiiv(subscriber: BeehiivSubscriber) {
  const API_KEY = process.env.BEEHIIV_API_KEY;
  const PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

  if (!API_KEY || !PUBLICATION_ID) {
    throw new Error("Beehiiv API credentials not found");
  }

  try {
    // Helper function to find custom field value
    const getCustomFieldValue = (name: string) => {
      return subscriber.custom_fields?.find((field) => field.name === name)
        ?.value;
    };

    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          email: subscriber.email,
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: getCustomFieldValue("source") || "circl_landing",
          utm_medium: "waitlist_signup",
          utm_channel: "website",
          utm_term: "early_access",
          referring_site: "circl.app",
          utm_campaign: "circl_waitlist",
          custom_fields: subscriber.custom_fields || [],
          tags: subscriber.tags || ["waitlist", "circl"],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Beehiiv API error:", errorData);
      throw new Error(`Beehiiv API error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Successfully added to Beehiiv:", data);
    return data;
  } catch (error) {
    console.error("Error adding to Beehiiv:", error);
    throw error;
  }
}
