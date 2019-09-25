const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question(`Hi! What's your name? => `, (name) => {
  rl.question(`Ok! But what do your friends call you? What is your nickname? 😀 => `, (nickname) => {
    rl.question(`Great, I'll call you ${nickname}! Now, ${nickname} what do you do for fun? => `, (fun) => {
      rl.question(`I assume you like music, every one does. So pull out your phone and have a look, What is the name of the last track your were 🎶listening🎶 to? => `, (songName) => {
        rl.question(`🤘Rock on!🤘 I love that song. Who is the artist though, I always forget? => `, (artist) => {
          rl.question(`Right!!! Doi... of course it's ${artist}.\n\nOne more question and were done, so ${nickname} tell me..... If you hade a super power, what would it be? => `, (sPower) => {
            rl.question(`That's it! were done. hit enter to see you new profile description.`, () => {
              let message = `Hello, my name is ${name}, but you can call me ${nickname}, all my friends do.\nIt's to hard to tell you what my favorite music is, but I can tell you that I was just listening to ${songName} by ${artist}.\nIn my spare time I keep practicing my super power: ${sPower}. It's not quite there yet, but I think with a little more time, I'll be AWESOME!!!!`;
              console.log(`\n\n\n${message}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});




