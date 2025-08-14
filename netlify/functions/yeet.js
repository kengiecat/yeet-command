// netlify/functions/yeet.js
// This file goes in: netlify/functions/yeet.js

exports.handler = async (event, context) => {
  const destinations = [
    "the dark abyss", "an ambient void", "the kelp forest", "the sixth dimension",
    "2007", "the nearest suspicious puddle", "the backrooms", "grandma's tupperware cabinet",
    "your last save point", "the questionable soup", "the fog bank", "a caesar salad",
    "the wrong cutscene", "the nearest vending machine", "a jellyfish rave", "a haunted gift shop",
    "the player's inventory", "the static", "the fish dimension", "glowing tidepools! magical!",
    "the secret level", "an infinite hallway", "cut content", "moss on a log",
    "a liminal airport", "an underwater train station", "the bonus round", "a lukewarm hot tub",
    "a broken elevator", "pandora's box.. good luck", "the dream sequence", "a quick time event",
    "the spinoff nobody asked for", "a sea witch's foyer", "the beta version", "the alpha version",
    "a dumpster behind the aquarium", "the unskippable tutorial", "the junk drawer!", "an overstim casino!",
    "the lost-and-found", "save slot 4", "a suspicious portal", "the snack closet",
    "a gallery wall", "a damp dungeon", "an endless corridor", "the secret boss arena",
    "the deep fryer of fate", "the smelly sewers", "the bad ending. womp womp.", "the cursed ikea showroom",
    "a time loop. yeeted into a time loop.", "the wrong franchise", "a mirror maze", "a haunted carousel",
    "undercooked lasagna", "a pixel forest", "the low-res ocean", "an alternate timeline",
    "never-ending email subscriptions", "the fish market at midnight", "debug", "a dank basement",
    "the lunar gift shop", "the wrong patch update", "a half-loaded map", "a loading screen that never ends",
    "the archives", "a low-poly iceberg", "a pop-up ad dimension", "somewhere with too many crabs",
    "the abandoned lighthouse", "a corrupted memory card", "a deep sea rave", "an underwater coffee shop",
    "the ocean at 3am", "a jellyfish jury", "the glowing reef", "an unmapped cave",
    "textureless terrain", "the water temple", "an unplugged aquarium", "a deep sea library",
    "a forbidden area", "the cloud", "a random multiplayer lobby", "the ghost server",
    "404 error.", "low tide", "a power-outage", "a low-res sea monster",
    "endless credits", "a corn maze", "an unpatched glitch", "a moon pool! stellar!",
    "the patch notes", "a giant clam rave", "a backup save", "a ghost ship",
    "the wrong console port", "a soundless cutscene", "postgame depression", "unsynced audio",
    "the underwater server room", "the closed beta", "the echo chamber", "a low-poly fish tank",
    "the render distance", "a half-rendered coral reef", "an unlit cave", "the boss fight",
    "the demo", "early access", "the end credits scene", "your first checkpoint",
    "a bowl of cheerios", "the restricted section", "sea anemone"
  ];

  // Get random destination
  const destination = destinations[Math.floor(Math.random() * destinations.length)];
  
  // Build message
  const message = `˖✧ yeeted into ${destination}`;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
    body: message
  };
};
