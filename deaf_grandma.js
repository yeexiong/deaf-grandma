// Create variable and assign the prompt library to it. This is from "npm i prompt" isntallation
var prompt = require('prompt');

// Starts the prompt
prompt.start();

let goodByeCount = 0;

function deafGrandma() {
  prompt.get(['input'], function (err, result) {
      const input = result.input

// If you don't input anything (just hit enter) she responds with WHAT?!
      if (input === '') {
        console.log("WHAT?!")
        deafGrandma();
      }
      
// The second time you say GOODBYE! she says LATER, SKATER! and the program exits.
      else if (input === "GOODBYE!" && goodByeCount === 1) {
        return console.log("LATER, SKATER!");
      }
      
// The first time you say GOODBYE! she says LEAVING SO SOON?
      else if (input === "GOODBYE!") {
        console.log('LEAVING SO SOON?');
        goodByeCount++
        deafGrandma();
      }
      
// If you talk to her in all upper-case letters, she responds with NO, NOT SINCE 1946!
      else if (input === input.toUpperCase()) {
        console.log('NO, NOT SINCE 1946!');
        deafGrandma();
      }
      
// If you ask a question with any lower-case letters, she responds with SPEAK UP, KID!
      else {
        console.log("SPEAK UP, KID!");
        deafGrandma()
      }
  });
}

deafGrandma();



