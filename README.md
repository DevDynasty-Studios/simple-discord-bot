# simple-discord-bot

How to run the bot:
- Open console, navigate to the project folder
- Run "npm install"
- Make sure your change "clientId" and "token" in the config.json to yours
  - You have to create an application in the Discord Developer Portal 
    - https://discord.com/developers/applications
    - Then you have to create a Bot after that you can generate an Invite-Link with oAuth2 to let you bot join servers.
- Run "npm ./deploy.js" to register the commands on the servers your bot is on.
- At last run "npm ./index.js" to start your bot.


Now you have a bot with a "/command" Command to earn your developer badge.