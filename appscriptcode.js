// Your google sheet url
let url = "https://docs.google.com/spreadsheets/d/1tbgC8Lz4IxnadyiFD-3AXaTxq8JIKThttps://docs.google.com/spreadsheets/d/1JPBf1jxWDHkhFYhn9KSkX5cITy_t1uQ0EBb2iQrjIX8/edit#gid=0iXt4E6ROHYsqI/edit#gid=0";
// Your sheet name
let sheetName = "sheet 1";
// your email to receive message
let receipentMail = "tolaapopo001@gmail.com";

let ss = SpreadsheetApp.openByUrl(url)
let sheet = ss.getSheetByName(sheetName)

function doPost(e) {
    let content = JSON.parse(e.postData.contents);
    MailApp.sendEmail(receipentMail, "Message from portfolio contact form", content.message)
    MailApp.sendEmail(content.email, "Instant Response by Apopo Tola Portfolio Website", `${content.name} I Just Received your message\n
  \n Thank you For Contact Me!\n\nI will response you back when i'm available.
  \n\n\nYou Received this message because i have just receive this email from my portfolio website https://sundeep.netlify.app\nif you haven't submit your email there then leave this message .\nSomeone might mistakenly type your email in my contact form.
  `)
    return ContentService.createTextOutput("success");
}