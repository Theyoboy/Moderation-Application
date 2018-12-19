const Discord = recuire('discord.js');
const client = new Discord.Client();

client.on('ready, () => {
    consol.log('I am ready!');
    });
    
    // THIS MUST BE THIS WAY
    client.login(process.env.BOT_TOKEN);
