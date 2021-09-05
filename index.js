const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


const arrayOfStatus = [
    `Free Rewards`,
    `Legit Rewards`];

let index = 0;
setInterval(() => {
    if (index === arrayOfStatus.length) index = 0;
    const status = arrayOfStatus[index];
    client.user.setActivity(status, { type: 'WATCHING' }).catch(console.error);
    index++;
}, 5000);




client.on('guildMemberAdd', member => {
    member.send(`Hey <@${member.user.id}>, welcome to **${member.guild.name}**!\n\nHere are some more legit reward servers: https://discord.gg/7s9UUfT3Am , https://discord.gg/Yz8ZdNYk8k`);
});

client.login('ODczMzg0MzY4MjUxNDkwMzE0.YQ3olA.e1azRZa4f1S_su7b5Dm5-fMW-C4');
