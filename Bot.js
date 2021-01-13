const Discord = require("discord.js");
const auth = require("./config.json");
const client = new Discord.Client();
const sample = require('lodash.sample');
const Words = ["https://discord.gg/"];
client.on("ready", () => {
 console.log("Zabij się");
});


//randomkick
client.on('message', message => {
  // If the message is "!randomkick"
  if (message.content === '!randomkick') {
    var members = message.guild.members.fetch();
    console.log(members.keys);
    var user = message.guild.members.random();
    console.log(`${user.user}`);
  }

});




client.login(auth.token);