Splashforce Script
==================
Features
---------
- auto remove messages after 10min (cart expired)
- manual clear
- refresh 

Installation
------------
1. Find where you want this to be located
2. Open start, type cmd, and hit enter
3. In the prompt type `cd`, hit space, drag the folder in, then press enter
4. Enter `git clone https://github.com/mck457/Splashforce-script.git` and press enter
5. Enter `node -v` if you see something like `v8.9.3` or similar you can skip step #6
6. Install [nodejs](https://nodejs.org/en/) 
7. Configure conf.json, making sure you don't break the formatting
8. enter `cd Splashforce-script`
9. enter `node app`

Configuration
-------------
1. Token: to find your token go to [Discord](https://discordapp.com), sign in, inspect element, go to `Application`, expand `Local Storage`, click on `https://discordapp.com`, and find the value to the right of token. **No, I didn't leave mine there**

2. Prefix: change to what you want your command prefix to be

3. AllowInDM: `true` or `false`

4. CartChannel: name of the channel where the bot posts your carts 

![alt text](https://i.gyazo.com/f9afb6b90cd677a5e8e0ff933988a850.png "Reference")
5. CartBot: name of bot that posts your carts, **with #0000**

![alt text](https://i.gyazo.com/53b70531ac0f8291976d7764e726902d.png "Reference")
6. Servers: Name of server it should work on

7. Whitelist: Whitelisted users (Users who are allowed to use the commands)

