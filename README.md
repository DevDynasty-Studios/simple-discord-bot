# simple-discord-bot

Dependencies:
  - Any Code-Editor like VSC, VS, WebStorm or else.
  - NodeJS v14+ and NPM
  - discord.js

How to run the bot:
- Open console, navigate to the project folder
- Run "npm install"
- Make sure your change "clientId" and "token" in the config.json to yours
  - You have to create an application in the Discord Developer Portal 
    - https://discord.com/developers/applications
    - ![Picture](https://i.imgur.com/5I2HiZj.png "Create Application")
    - ![Picture](https://i.imgur.com/xpIY0fL.png "Create Application")
    - After creating your Application you can see your "Application ID"
    - Then you have to create a Bot after that you can generate an Invite-Link with oAuth2 to let you bot join servers.
    - ![Picture](https://i.imgur.com/r1bBEvp.png "Create Application")
    - To get your token from the bot, your have to press "Reset Token" after your created the bot.
- Run "npm ./deploy.js" to register the commands on the servers your bot is on.
- At last run "npm ./index.js" to start your bot.


Now you have a bot with a "/command" Command to earn your developer badge. :)