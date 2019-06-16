/**
 * DO NOT EDIT AS THE SCRIPT BUILDS THIS FILE
*/

interface Quest {
    title: string;
    icon: string;
    stype: number;
    body: string;
}

export const Quests: Quest[] = [
    {
       title: "4.1.2 - 2",
       icon: "ReplaceableTextures\\CommandButtons\\BTNAmbush.blp",
       stype: bj_QUESTTYPE_REQ_DISCOVERED,
       body: "Updates:\n - All towers now share the same ground texture\n - Fixed a bug where the Ice Troll Emperor could kill friendly summoned units\n - Fixed another bug where people could block\n - Removed outdated towers from hybrid\n - Goblin Sapper (now '80' gold, explodes more for more damage)\n - Forsaken Necromancer (now '75' gold)\n - Forsaken Solider (Attacks slower, less damage)\n - Forsaken Archer (Higher damage)\n - Forsaken Mage (Higher damage)\n - Champion waves (9, 14, 19...) have been greatly buffed\n - Anti-air towers rebalanced for new air\n - Fixed a bug where half of blue spawns would skip yellow\n - Rebalanced all races around 200% difficulty",
    },
    {
       title: "4.1.2 - 1",
       icon: "ReplaceableTextures\\CommandButtons\\BTNAmbush.blp",
       stype: bj_QUESTTYPE_REQ_DISCOVERED,
       body: "Updates:\n - Created a new advanced race The Elementalists\n - Goblins can now be Hardcore Randomed\n - Gave builders an ability that makes creeps move\n - Changed how we write these quests\n - Hybrid random now only gives you one weeiz.\n - Added anti-stuck ability\n - Reworked Unique\n - Added proper tooltips to [Hybrid] towers\n - Added hotkeys to [Hybrid] towers\n - Changes to [Hybrid] - Sniper towers\n - Minor Changes to other [Hybrid] Towers\n - Air now spawns like normal waves",
    },
    {
       title: "4.1.1 - 2",
       icon: "ReplaceableTextures\\CommandButtons\\BTNAmbush.blp",
       stype: bj_QUESTTYPE_REQ_DISCOVERED,
       body: "Updates:\nBugfixes and Adjustments\n - Dragon Egg 15 gold -> 20 gold (now a tier 2 tower in Hybrid Random).\n - Blue Dragon Whelp and Drake: Lower attack speed, and ground damage. Whelp now 40 gold instead of 35.\n - Green Dragons: Attack speed and damage up for all. Whelp now 15 gold instead of 20.\n - Chimaeras now lose life properly again\n - Gnoll Poacher: Damage from 500 -> 250\n - [Galaxy] Star Shooter now has a multi-target attack. Damage lowered by 1. AttackSpeed decreased by .1\n - Mutated Frog now sells for the correct amount\n - Fixed description for Beast of Arrrgh!\n - Kick command now closes spawn and removes towers of kicked player\n - Added damage % to armor type descriptions as well as a quest log below the Bugs & Suggestions quest\n - Removed the critical strike item from Ancient Protector\n - fixed several bugs with the votekick command",
    },
    {
       title: "4.1.1 - 1",
       icon: "ReplaceableTextures\\CommandButtons\\BTNAmbush.blp",
       stype: bj_QUESTTYPE_REQ_DISCOVERED,
       body: "Updates:\nReworks and Overhauls\n - UFF has been reworked completely into [Forsaken].\n - Chaos Orcs has been rethemed into [Outland].\n - [Outland] has had Chaos Shrine, Chaos Kodo, Chaos Pool, and Grom removed.\n - Aforementioned units are now found in the Secondary Race selector as the [Shrine of Buffs]\n - [Outland] has been massively buffed and has a new ultimate tower: Magtheridon\n\n",
    },
    {
       title: "4.1.0",
       icon: "ReplaceableTextures\\CommandButtons\\BTNAmbush.blp",
       stype: bj_QUESTTYPE_REQ_DISCOVERED,
       body: "Updates:\n - Fixed broken secondary attacks\n - Fixed armour types on enemies\n - Fixed some possible ways to block creeps\n - New loadingscreen with new team members name\n - Fixed bugged goblin mine\n - Fixed some spelling\n - Added Splash to Dragon Towers Missile Targets\n - Fixed Health Regen on Void and Arachnid\n - Fixed Hybrid Random\n - Fixed broken secondary attacks on UFF Archer, and UFF Banshee\n - Fixed Goblin Blademaster's MirrorImage not working\n - Fixed a problem with units spawning and not moving",
    },
    {
       title: "4.0.9",
       icon: "ReplaceableTextures\\CommandButtons\\BTNAmbush.blp",
       stype: bj_QUESTTYPE_REQ_DISCOVERED,
       body: "Updates:\n - Updated the damage engine from v3.8.0.0 to v4.0\n - Made the checkpoints unbuildable, there was far too many people abusing the buildable checkpoints\n - Hopefully fixed the Divine Shield\n - Changed a lot of the tower missiles to prevent desync issues\n - Fixed the spam Stop on Naga Slave abuse\n - Increased the cost of the Night Elf Ancient Protector from 150 to 250\n - Added descriptive text to Countess' buildings\n - Added the send command as an alias for give\n - Fixed a bug where darkgreen could block his spawn\n - Rebalanced the Gnoll race\n - Buffed Marine's damage from 5-5 to 7-7\n - Reworked dragons and goblins\n - Fixed Worker's Union autocast\n - High Elf Farm towers are no longer affected by -dt\n - Added a -votekick <color> command\n - Fixed a bug where Alliance of Blades would give you the wrong level 4 item after using the Merchant",
    },
    {
       title: "4.0.8",
       icon: "ReplaceableTextures\\CommandButtons\\BTNAmbush.blp",
       stype: bj_QUESTTYPE_REQ_DISCOVERED,
       body: "Updates:\n - Space Runner now has the correct attack speed\n - the -dt command no longer disables upgraded Arachnid towers\n - Alliance of Blades can no longer trade items with non-Alliance towers\n - Fixed some memory leaks\n - Flying units should no longer be detected by the anti-juggle system\n - Created the -give <color> <amount> command\n - Reworked Obsidian Statue\n - Slightly buffed the Human Cold Tower\n - Reworked the Ice Troll Tribe\n - Disabled the Dragon Turtle as it caused desyncs\n - Cripple Aura should lag a bit less now\n - Calmed down the desync and lag issues\n - Fixed a few anti-block problems\n - Fixed Adult Green Dragon and Wyvern not working on wave 32",
    },
    {
       title: "4.0.7",
       icon: "ReplaceableTextures\\CommandButtons\\BTNAmbush.blp",
       stype: bj_QUESTTYPE_REQ_DISCOVERED,
       body: "Updates:\n - Various tooltip corrections\n - Changed Cavernous Creatures mana transfer slightly\n - Removed Arachnes roar ability\n - Fixed an exploit with ents spawned by corrupted ancient tower\n - Fixed fallen archer hitting friendly air units\n - Chaos Blademaster is now affected by Forest Troll Emp aura\n - The goblin tesla coil no longer has a BOOM factor\n(GenoHacker)\n - Fixed hybrid someitmes missing a tower",
    },
    {
       title: "4.0.6",
       icon: "ReplaceableTextures\\CommandButtons\\BTNAmbush.blp",
       stype: bj_QUESTTYPE_REQ_DISCOVERED,
       body: "Updates:\n - Fixed Cavern Hydra attack\n - Fixed Cavern Hydra sell value\n - Lazy Fix for cavern turtle using all its mana on its ability\n - Angel Warrior hotkey is now Q\n ",
    },
    {
       title: "4.0.5",
       icon: "ReplaceableTextures\\CommandButtons\\BTNAmbush.blp",
       stype: bj_QUESTTYPE_REQ_DISCOVERED,
       body: "Updates:\n - The disable tower system has been re-enabled and works properly\n - Replaced Hydra Swamp race with Cavernous Creatures race\n - Increased Death Tower Death Strike chance to 20%\n - Increased Wisp Explosion Aoe to 800\n - Buffed Forest Troll Joker aura slightly\n - Buffed Summons Avatar of Vengeance\n - Buffed Gnolls Tier 1 tower\n - Changed the hotkey of all Tier 1 hotkeys that werent Q, to Q\n - Disabled Shrine of Ultron race\n - Disabled Dark Troll race",
    },
    {
       title: "4.0.4",
       icon: "ReplaceableTextures\\CommandButtons\\BTNAmbush.blp",
       stype: bj_QUESTTYPE_REQ_DISCOVERED,
       body: "Updates:\n - Changes to the Ancient Protector and items generated by it\n - Changed the icons of several buffs\n - Changed the icon for Mazing Tower\n - Changed Spirit Hawk attack speed to correct value\n - Changed price of Hydra Hatchling to 8 gold\n - Gave Sylvanus Windrunner [High Elves] a projectile, also reduced projectile speed and slightly increased attack speed\n - Fixed Naga Slave spells not triggering\n - Fixed Arachnid Regen Aura and Roar not affecting spiders\n - Corrected coloring and level indicator on God Wand and God Luck items\n - Cracked Barrel will now spawn 2 spiderlings\n - Buffed Rexxar and his summons",
    },
    {
       title: "4.0.3",
       icon: "ReplaceableTextures\\CommandButtons\\BTNAmbush.blp",
       stype: bj_QUESTTYPE_REQ_DISCOVERED,
       body: "Updates:\n - Fixed not getting a builder when picking Night Elf",
    },
    {
       title: "4.0.2",
       icon: "ReplaceableTextures\\CommandButtons\\BTNAmbush.blp",
       stype: bj_QUESTTYPE_REQ_DISCOVERED,
       body: "Updates:\n - reworked Night Elves\n - increased range of Thrall's forked lightning\n - decreased Draenei Seer's damage\n - fixed Worker's Union Wisp not autocasting\n - fixed Mild Mannered Chris not autocasting\n - fixed Felguard's autocasting\n - changed Cold Tower's attack to magic\n - (thanks GenoHacker)\n - fixed Morning Person and Walk it Off (effects were 10x stronger than intended, ooops!)",
    },
    {
       title: "4.0.1",
       icon: "ReplaceableTextures\\CommandButtons\\BTNAmbush.blp",
       stype: bj_QUESTTYPE_REQ_DISCOVERED,
       body: "Updates:\n - Alliance of Blades and the Void Cult should now work better\n - fixed Spirit Bear's cost\n - fixed Worker's Union's Orc Peon\n - fixed Forest Troll Emperor's damage boost\n - fixed Dark Green's spawn\n - fixed Maroon's block detection\n - fixed several broken creep buffs\n - added new creep buffs",
    },
    {
       title: "4.0.0 - 2",
       icon: "ReplaceableTextures\\CommandButtons\\BTNAmbush.blp",
       stype: bj_QUESTTYPE_REQ_DISCOVERED,
       body: "Updates:\n - added effects to all Alliance of Blades items\n - fixed a bug where grey's Fel Hounds didn't spawn\n - made it easier to level up items later for Alliance of Blades\n - buffed Moonlight's Moonstorm ability\n - removed damage boost from Massive Blow\n - nerfed Ogre Magi's damage from 500 to 350 and splash was lowered from 500 to 400\n - lowered Ancient Golem's damage increase from +100 damage every minute to +75\n - heavily nerfed the Chaos Boar's damage\n - fixed Chaos Grunt's damage (his DPS was way below average due to a calculation error I made when I reworked the race)\n - reduced Chaos Pool's attackspeed buff from 100% to 60%\n - massive pathing update and flawed block detection added",
    },
    {
       title: "4.0.0 - 1",
       icon: "ReplaceableTextures\\CommandButtons\\BTNAmbush.blp",
       stype: bj_QUESTTYPE_REQ_DISCOVERED,
       body: "Updates:\n - fixed Green and Teal's broken spawns\n - created a simple anti-juggle\n - created a script that detects rogue enemies then tries to correct their bad behaviour\n - reworked Orc Stronghold\n - reworked Dwarf King tower\n - (GenoHacker)\n - fixed God's Book\n - changed God's Luck description\n - Alliance of Blades attack speed and damage auras of different levels should now stack",
    },


   {
        title: 'Commands',
        icon: 'ReplaceableTextures\\CommandButtons\\BTNReplay-Loop.blp',
        stype: bj_QUESTTYPE_OPT_DISCOVERED,
        body: 'List of in-game commands\n\n|cffffcc00-waves|r (shows you information about every wave)\n|cffffcc00-air|r (tells you when air waves are coming)\n|cffffcc00-boss|r (Tells you when boss waves are coming)\n|cffffcc00-champion|r (tells you when champion waves are coming)\n|cffffcc00-light|r (tells you when light armored waves are coming)\n|cffffcc00-medium|r (tells you when medium armored waves are coming)\n|cffffcc00-heavy|r (tells you when heavy armored waves are coming)\n|cffffcc00-fortified|r (tells you when fortified armor waves are coming)\n|cffffcc00-hero|r (tells you when hero armored waves are coming)\n|cffffcc00-sellall|r or |cffffcc00-sa|r (sells all towers given to you when a player left)\n|cffffcc00-claim|r (claims ownership of all towers built in your area.)',
    },
    {
        title: 'Commands 2',
        icon: 'ReplaceableTextures\\CommandButtons\\BTNReplay-Loop.blp',
        stype: bj_QUESTTYPE_OPT_DISCOVERED,
        body: 'List of in-game commands\n\n|cffffcc00-deny <color>|r (denies the specified color access to your spawn and gives their towers to you)\n|cffffcc00-allow <color>|r (allows the specified color access to your spawn)\n|cffffcc00-denyall|r (denies access to your spawn for all players)\n|cffffcc00-allowall|r (allows access to your spawn for all players)\n|cffffcc00-zoom <value>|r (zooms your camera out)\n|cffffcc00-buffs|r (gives detailed information about creep buffs)\n|cffffcc00-dt/-disabletowers|r (disables your basic tier 1 tower that sell for 10 or less gold)\n|cffffcc00-give <color> <amount>|r (gives the specified color a specified amount of gold)\n|cffffcc00-votekick <color>|r (starts a votekick for the specified color)',
    },
    {
        title: 'Bugs & Suggestions',
        icon: 'ReplaceableTextures\\CommandButtons\\BTNReplay-Play.blp',
        stype: bj_QUESTTYPE_OPT_DISCOVERED,
        body: 'If you find a bug or want to suggest a change or feature for our map please post it on maulbot.com and our developers will happily look into it!\n(Please make your post detailed so it\'s easier for us to find the bug or implement your feature)',
    },
    {
        title: 'Armor types',
        icon: 'ReplaceableTextures\\CommandButtons\\BTNHumanArmorUpOne.blp',
        stype: bj_QUESTTYPE_OPT_DISCOVERED,
        body: 'Unarmored takes 150% damage from piercing attacks and 150% damage from siege\nLight takes 200% from piercing and 125% from magic attacks\nMedium takes 150% damage from normal, 75% from piercing, 75% from magic and 50% from siege\nHeavy armor takes 200% damage from magic attacks\nFortified takes 70% from normal, 35% from piercing, 35% from magic, 150% from siege and 50% from hero\n\nAnything unmentioned deals the standard 100% damage',
    },


];
