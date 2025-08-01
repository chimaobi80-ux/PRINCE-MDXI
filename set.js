
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU25KiSBD9l3rVmAbkokR0xIKiiKKgYqsb81BAgSVXqwoUJ/z3DbR7ejZid7b3ra55TuY5mT9AXmCKZqgB6g9QElxDhtola0oEVKBXUYQI6IIQMghUMDEsaow28eBlpmtv6fm2LnN3/ZI6meQ7lmkOhGJb7Kqot5u+gnsXlJWf4uA3AZUoTNFxaA9nmXeZOF5tn80qtIrCHotXFpzChbm/bY7L2U58Bfc2IsQE57FRHlGGCExnqHEgJl+jvzSTWnGl7GQsQ8teUSycZsnet+sJ86yj1Y/QaeLNx5zfM75Gn0lNk1Tu9abcTp2Ntroki3CbzCq6mburCVH4szXnepFx0LwnfYrjHIXTEOUMs+bLde9Yi63ZKbfxkSpsRKNwLAeyqQcz5Tj2zrXzshDXI/Ei3Xba14hPK7rsXfhLPk7K1bgypWX6ZnrUiNl4X2HbOHWyMNOusb/6G3GHfHgl+T91nw4z3JsXneysQ2FguPZBG2X2WNNS4a1ZJ3xt8NObzXho7L9Gf72z3cO+f+Kd2gqux8thqU1WeYPPQh1kzqHKUWZEh9rTPOOTPmQV+R1LJY4E0af2NqsGPLrpu0Ugn0wr3NSZ0uuw8rKzOf7qZ7eKazTyosjjoyt4zclL3wrZUGRxPSNKMV1crZLzNwHqiB45aa+PjBLUTEOg8vcuICjGlBHIcJG3Z2IXwLBeo4Ag9iguSCWb5yskGlimIXJPIb316W66Ec556ZqLancLe/gaOudYewVdUJIiQJSi0MSUFaSxEaUwRhSof37vghxd2VO2FqzHd0GECWVeXpVpAcMPTT8uYRAUVc7WTR4M2wUiQOU+jxFjOI9pW8UqhyQ44hoNj5BRoEYwpehnfoigEKiMVOhnzw6LsC370pP31miugC7IHnLgEKhA6IkKx0uDgSwJkir0/6DfLm1cWJbfcsRAF+SwfQ5GuMY5Al2QPv7xkiD3BuJA4eS+zCntz/bi/pNyixAiBnFKgQqGToOpMzWM+S6g1J1M9CDWhrEGPlP8cMpTi7Uwk+sXUrk372U+qSpuMtsbm8itanl+SPx4siZb15kFnJm8/kMQoIJMjP3dXJ/bvjfcQ0nmtfNtb1uuOEqs6caNlqO6YwQrpr3N9lm8oX2/EnJqUhxgGi4cfpmYm+V52akXLio1c4fDuNHc1xYtRDUO0K9g1QUeSX/BKW+30zBy4aDe636ipL4S6XFfH6f+qrQvekXigNv6280AMUOxh9fLKGGFNc/QmY06SB8NqcZpKFsYURLgy9PDjx5K32cXfvirFa/dRhg9RsG7Rv8t5pN5azru3v0lyPt0+ZcO1T2GK/IiK4nNO82VEKbjTDd63Jx0sHCYiHpy5r1Rky90Cdzv37ugTCGLCpIBFdDMh6ALSFG1Fp7mUfEbpKE+neruM+8UUqZ9tsUGZ4gymJVA5RVJ5CSO57nnK4cUpQnpEaggz3q6D+5/AZWl8e1hBwAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
