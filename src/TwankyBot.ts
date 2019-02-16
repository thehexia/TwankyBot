var auth = require('./auth/auth.json');
import Discord from "discord.io";
import winston from "winston";


export class TwankyBot {
    public run() : void {
        console.log("running");
    }
}


var bot = new TwankyBot();
export function run() {
    bot.run();
}
