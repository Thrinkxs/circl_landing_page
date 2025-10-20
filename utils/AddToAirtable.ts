const addToAirtable = async (values: { email: string}) => {
  // Save to Airtable directly
  try {
    console.log("Adding to Airtable with values:", values);
    
    // First, check if email already exists
    const checkResponse = await fetch(`https://api.airtable.com/v0/appVTniMDCgU6zpSP/Waitlist?filterByFormula={Email}="${values.email}"`, {
      headers: {
        "Authorization": `Bearer ${process.env.AIRTABLE_API_KEY}`
      }
    });
    
    if (checkResponse.ok) {
      const existingRecords = await checkResponse.json();
      if (existingRecords.records.length > 0) {
        console.log("Email already exists in Airtable");
        return existingRecords.records[0]; // Return existing record
      }
    }

    // If no existing record, create new one
    const response = await fetch("https://api.airtable.com/v0/appVTniMDCgU6zpSP/Waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.AIRTABLE_API_KEY}`
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              "Email": values.email,
            }
          }
        ]
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Successfully added to Airtable:", result.records?.[0]?.id);
      return result;
    } else {
      const errorText = await response.text();
      console.error("Airtable API Error Status:", response.status);
      console.error("Airtable API Error:", errorText);
      throw new Error(`Airtable API Error: ${response.status} - ${errorText}`);
    }
  } catch (error) {
    console.error("Error adding to airtable:", error);
    throw error; // Re-throw so calling code knows it failed
  }
};

export default addToAirtable;
