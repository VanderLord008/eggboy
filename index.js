const Discord = require ('discord.js');
const config = require('./config.json');
const client = new Discord.Client({ intents: [] });

client.on('ready',()=>
{
    console.log('im ready');
})
client.login(config.token);