
// const { clientId, guildId, token, publicKey } = require('./config.json');
require('dotenv').config()
const APPLICATION_ID = process.env.APPLICATION_ID 
const TOKEN = process.env.TOKEN 
const PUBLIC_KEY = process.env.PUBLIC_KEY || 'not set'
const GUILD_ID = process.env.GUILD_ID 

const { default: { stream } } = require("got");
const { createWriteStream } = require("fs");
const { execSync } = require("child_process");
const path = "./Lavalink.jar";

// Based on https://github.com/Cog-Creators/Lavalink-Jars/, untill that koltin based one is fixed.
const lljar = "https://cdn.darrennathanael.com/jars/cogs/Lavalink.jar";
// temp code untill I made jar options & checking.
// aka selection between downloading the "custom" "dev" "dev-with-plugins"

const start = () => {
     const download = stream(lljar).pipe(createWriteStream('Lavalink.jar'));
     download.on("finish", () => {
         execSync("java -jar Lavalink.jar", { stdio: "inherit" });
     });
 };

start();

