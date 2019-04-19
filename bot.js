const Discord = require('discord.js');
const client = new Discord.Client();
 
var prefix = "-"
client.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
By ! .BlùeWõlf,#0050
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
// By ! .BlùeWõlf,#0050
  let args = message.content.split(" ").slice(1);
// By ! .BlùeWõlf,#0050
  if (command == "say") {
  if (message.member.id !== "455061501934436373") return message.channel.send('لا حبي ما يصير هيك :joy:');// By ! .BlùeWõlf,#0050
   message.channel.send(args.join("  "))// By ! .BlùeWõlf,#0050
   message.delete()// By ! .BlùeWõlf,#0050
  }
 });
// 


client.login(process.env.BOT_TOKEN);