//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wallyjay123@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Wallyjaytechh/WALLYJAYTECH-MD";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/HF1NuB6nFBaIwdGWgeGtni";
global.website = process.env.GURL || "https://wa.me/2348144317152";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://fv5-5.files.fm/down.php?i=xygcscr7dm&view&n=IMG-20241101-WA0062.jpg";
global.devs = "https://t.me/svenanjafrieda";
global.sudo = process.env.SUDO || "2348144317152,2348155763709,2348054984935";
global.owner = process.env.OWNER_NUMBER || "923346690239";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://fv5-5.files.fm/down.php?i=xygcscr7dm&view&n=IMG-20241101-WA0062.jpg";
global.waPresence = process.env.WAPRESENCE || "composimg";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "2348054984952";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tlc05CVCtHR0x5NXM3MmIrdm9vZXFlaVRkU0RnVTVmNTIrSU1KVVBIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2lUODBPcHpkWm1QRVZuVURRWXQrSnI5TzJZVTRrMXJ3VDQ2dXROWHpoaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRUJ4dFZSb2hqbjc4dGlBbElaZmgwakcvR2ZZdFltOHdGaEZqVXJ1UkU0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuMGkzZGc5RW1HakZ4QzgrYjB1NCt4UUw2QktXRGZBY1pBQWIvUkJ2RWhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9COUNpU09DSW5BRWRzZ1lraEFWOUxOTkJlRDN1SXRZcEYrWC8rVHdZMjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNGeHo3SDhZM25heDA2eGY3NHVsV2JtWW80TlpVWWkzVjRHVDVuVnRraUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUhPdVZYcUlFQ2NoWTFQMFNQd1JqdkZIVG51SzlpVXZpbGx2VmFXNWdsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0NjUjBEZE92b2hhcHU5b0VWb3JKdWM5NWZNODl3dUxUZHpNeVlZTlZCdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdNSXNocWV5czZ2OUMvcmF5aGlFdFhmb3hHYmFlOVlmSmx0Y3lBSFFablNsS21rS0VORkErTVk4ZXRmRFhra25ZQ0k5dVBpNmllZUR3OVJyVS81cEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzYsImFkdlNlY3JldEtleSI6ImpUVSt1Zi92Wi9xY2RTVXB1NWhrYW8zVXJxZStuNlNuSkc1cElxRjlFRDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzQ2NjkwMjM5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQxNjhDMkMxQTBBOUIyOTY4MTc2RDc1NEYyRDBGRkM0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzExMzMyMzZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJsaVY0ZlpSUzhtak8wSmppVEFza2ciLCJwaG9uZUlkIjoiZTA5NDE3ZWYtMmU1MC00NWMxLWIyMzktM2M1MGUwYzM1NWM3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilo0TXgwck9hWTJHT1lTdXVyVm5PcnV4bkFicz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6YWpUK054eDRyY3FsSTdxYVVwMHFtREFrN289In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOFhETEdZOFMiLCJtZSI6eyJpZCI6IjkyMzM0NjY5MDIzOToxN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNdXNrYW4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o3dG5aOEVFS0wrdTdrR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkNzTDBwY05OeFRtbjNNWkdtMDlEZEZUUnlSdlV0OEttNDBmZW4rSTQ2WGM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkN5b2lhcUp3aXFITnRXblk4YnhNVTF3Tlg5NGVaakFxZ2xiRnVxeFJpVkljaU1NSThJYW5QZVhyMlNJb1hFbW5ORHcwengxdnNzN0FFS2dZOWNJMUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJCdmxndEJYQldRSEZCOFlDWEwwNFZYWmwxZEw5WWVldVhjNkZ0b0hRb3RKeEYwS3pYcG1jeUJSckZOQ3FKSXM1eCtQRkZ3UzNobFllbUwvNVY4UmpDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM0NjY5MDIzOToxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRckM5S1hEVGNVNXA5ekdScHRQUTNSVTBja2IxTGZDcHVOSDNwL2lPT2wzIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxMTMzMjMxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFYTiJ9"
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0",
  caption: process.env.CAPTION || "INVENTED BY WALLY JAY TECH",
  author: process.env.PACK_AUTHER || "WALLYJAYTECH-MD",
  packname: process.env.PACK_NAME || "WALLY JAY TECH",
  botname: process.env.BOT_NAME || "WALLYJAYTECH-MD",
  ownername: process.env.OWNER_NAME || "WALLY JAY TECH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "dyrbNSNtMf1CE84he61DR7Wx",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WALLYJAYTECH-MD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
