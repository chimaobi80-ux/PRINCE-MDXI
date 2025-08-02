
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUyXKjSBD9l7qiaLFriXDEgIQFQkhgSUh4Yg4FFKjMqqoChDv07xPY7XYfZno8t1ozX773Mr+DssIU2agH8++gJriFDA1L1tcIzIHeJAkiYARiyCCYg9QKWqVW98808K2pIhu7cOPhCeW4bbm9TfdicI4nsnS8iM4DuI9A3YQ5jn4T8JbJnK8I49XZUNaydTG8fjcR6OWVt/2VdjxRb1KcLofd4yN9APchIsQEl6lRX1CBCMxt1LsQk6/Bh+uk2KHzbub79lXoCy9/jEKv1ALE1Hyr3gx0XVSH3JRM+Wvwg0QX3eWplVgUJhOMc06KcpVbHpd8ZsKt8Nq9zoyzCzU9e4dPcVqi2IpRyTDrv8y7ZvXSQQtZ6stK8JLm9k0jtOpuS2nlnO1Uk2RF0AORcKcv8n7Sy/PYVJ5NtFeVRXvSslarL1Eix8vN86aMI9wxBz/LXKf9CtwlH17J/g/vtvNi7zSf8wNekLuVsD7b4vXA7TZpn/Z7IX7KtlP34pIrb3wNfqruWmuLxHWdJ3y/2Yi81BUvol4KO18Zb17U7UUpDqS6+MEnfMga8juUbYphOh5z2/LJWCRSNTNPnsVX1Yrzcsf0D/qLc6x1vuLJbSlRZ32Dx9bIgtOpsumKOhN1ISebkykGYevTWOC7DNNUe3irKEO9FYO5cB8BglJMGYEMV+VwpggjAON2jyKC2Bu74PZUJuENpeba1CEN9geai7HJppjvlkSqn9bRFXuPG4fpzgMYgZpUEaIUxSamrCK9gyiFKaJg/udfI1CiG3vXbcgmCSOQYELZsWzqvILxh6gflzCKqqZk+76MFsMCETDnP48RY7hM6UBjU0ISXXCLFhfIKJgnMKfoZ4GIoBjMGWnQz6ZdVPHA+9YPeFc0DmAEijc9cAzmQJTkCS8os5mqiMpcnP1Bv3VDXFjX30rEwAiUcHgOlrjFJQIjkL/9ExRRlWbybMKrU5WfDD+Hi/tPyEOGGDGIcwrmYOH2mLqWYThXu3G81UpPU22RauCzxA+rvGuxF221HZPGez2ON6um4Vd2YBwSr2nVzXMWpqs98T3Xjngze/iHIANgVV0lXXE5uLlbNPs0dfi8PVmCKLQx4c5Oa9lXT4ui8JCFiaxyTb7JFej4SrbwDbp59DY8isWE82w0iXdLozF0adk9DNli1OII/ZosuQnbZpxf9Ze8iyY3Fpe5H0ZP027ciqWgs6Bd+JZs44tgtlI3jcTDebvauRlZT58C3Q6PYedlxvKc871T4OOYNvwMd+8mfmui/Mfwwm/+GsQbtglGb7Pgh0b/LeY78sF0/H30S5Af4+VfWlQ/MtyQsTrJHMHtb4QwHRe6IfEbwmHxeSXr2VU4Lvtyqyvgfv9rBOocsqQiBZgDWoQQjACpmsHCVplUv8m00C1L997rziFl2mdbHHCBKINFDebCRJEFaTKTZu+vXFLVJqQXMAdlIekhuP8Nqs8z12IHAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "false",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by divine-mdx", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "2347015996525", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐃𝐈𝐕𝐈𝐍𝐄", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐃𝐈𝐕𝐈𝐍𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "𝐃𝐈𝐕𝐈𝐍𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.5.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "true",
ANTIBAD: process.env.ANTIBAD || "true",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐃𝐈𝐕𝐈𝐍𝐄-𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/m96ecn.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "true",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DIVINE ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "true", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
