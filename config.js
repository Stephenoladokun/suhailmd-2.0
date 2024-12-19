const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2349129495184";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_35_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDg5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODcsXG4gICAgICAgIDg1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDk5LFxuICAgICAgICA2NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxODIsXG4gICAgICAgIDExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc5LFxuICAgICAgICA5LFxuICAgICAgICA1NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTI3LFxuICAgICAgICA1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MixcbiAgICAgICAgMTc5LFxuICAgICAgICA5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NixcbiAgICAgICAgNixcbiAgICAgICAgMTY0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDg4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDMxLFxuICAgICAgICA1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5S0hFSVlhcUlTUDJKRlVRaDUxdFBrTU5vcllJWHBOU3VQcStUSHd0UDNFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1Z242VE5aU1M3LW5ycnZFaVVuQ3VnXCIsXG4gIFwicGhvbmVJZFwiOiBcImM5MjNjZmJjLTI3NTEtNGE0Mi1hZTIwLTI4MWM4ZTRjYmU3Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjksXG4gICAgICAxNTksXG4gICAgICAxMDMsXG4gICAgICA2MyxcbiAgICAgIDIwOCxcbiAgICAgIDY0LFxuICAgICAgNDgsXG4gICAgICAxOTgsXG4gICAgICAxOTQsXG4gICAgICAxOTIsXG4gICAgICAxOTUsXG4gICAgICAxODMsXG4gICAgICAxMDgsXG4gICAgICA0MSxcbiAgICAgIDE5MCxcbiAgICAgIDE3NSxcbiAgICAgIDI0LFxuICAgICAgNzgsXG4gICAgICAyNDIsXG4gICAgICAyNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAxMDYsXG4gICAgICA0NyxcbiAgICAgIDEwNSxcbiAgICAgIDE1NixcbiAgICAgIDEwOCxcbiAgICAgIDEwOCxcbiAgICAgIDc0LFxuICAgICAgMTExLFxuICAgICAgMTgzLFxuICAgICAgMjA3LFxuICAgICAgMTgwLFxuICAgICAgMixcbiAgICAgIDE2OCxcbiAgICAgIDIwOSxcbiAgICAgIDExMSxcbiAgICAgIDEyOCxcbiAgICAgIDYzLFxuICAgICAgMjUwLFxuICAgICAgMjIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkY2TUdGNE45XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTA1NzQxMjI0OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNjIxOTAyMzgxMDczMDo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x6RWpCNFF4ZFNOdXdZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOVVwc1cwVWtXNE85NWJKRWJUa3V4ZmgxNTM3Snc2OFF4czNwQjYzME16UT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5dDllZENMRmZyc2tMS25ESndsdHJ6VTJyUStzOVVxcUNSdmZXbzRxdU55c2RPQXNEaW00N1FFVmFnK3hmSVNNSldzNVBPbnA0MXpIOVczYStnWWxDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIVzlhSTFHbDNWdUZlTFVkdXhlVEt6aVRFUHM5cTJFc1dtNy8vTnRGOFRhci9jeEZISVV6MGNlSFJ1cHpqRUg4RXVrOTJhRkJmbERzL0h6cEpDYndoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTA1NzQxMjI0OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDU2ODUyMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
