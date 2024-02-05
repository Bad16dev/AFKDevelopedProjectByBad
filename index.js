///Hala Madrid
const express = require("express");
const app = express();
const Discord = require('discord.js-v11-fixes');
const ffmpeg = require('ffmpeg');
const ffmpegstatic = require('ffmpeg-static');
const cmd = require("node-cmd");
const client = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;
const id = config.id;
///Ready
client.on("ready", () => {
console.log(`Log In : ${client.user.tag}..`);
app.listen(() => console.log('Bad Start Go Go'));
app.get('/', (req, res) => {
res.send('<center><h1><u>Ready<u/><h1/>')
});
 });
///Code
//Join
client.on('message', message => {
         let messageArray = message.content.split(" ");
    let args = messageArray.slice(1).join(" ");
if (id.includes(message.author.id)) 
{
    if(message.content.startsWith(prefix + "join")) {
  console.log("Joining..."); 
  let hope = client.channels.get(process.env.ch_id)
  
  hope.join();
}
}})
//Leave
client.on('message', message => {
  let messageArray = message.content.split(" ");
    let args = messageArray.slice(1).join(" ");
  if (id.includes(message.author.id)) 
{
    if(message.content.startsWith(prefix + "leave")) {
  console.log("Leaving..."); 
  let hope = client.channels.get(process.env.ch_id)
  hope.leave();
}
}})
///Login
client.login(process.env.token);
