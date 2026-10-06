function doPost(e) {

    // Open the Google Sheet
    const sheet = SpreadsheetApp
        .getActiveSpreadsheet()
        .getSheetByName("Sheet1");

    // Get data from the form
    const name = e.parameter.name;
    const email = e.parameter.email;
    const gender = e.parameter.gender;
    const contact = e.parameter.contact;
    const message = e.parameter.message;

    // Save data to Google Sheets
    sheet.appendRow([
        new Date(),
        name,
        email,
        gender,
        "'" + contact,   // apostrophe keeps the leading 0 in the phone number
        message
    ]);

    // Send response
    return ContentService
        .createTextOutput("Information saved successfully!")
        .setMimeType(ContentService.MimeType.TEXT);
}
