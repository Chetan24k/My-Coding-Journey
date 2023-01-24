const game = { 
    team1: 'Bayern Munich', 
    team2: 'Borrussia Dortmund', 
    players: [ 
      [ 
        'Neuer', 
        'Pavard', 
        'Martinez', 
        'Alaba', 
        'Davies', 
        'Kimmich', 
        'Goretzka', 
        'Coman', 
        'Muller', 
        'Gnarby', 
        'Lewandowski', 
      ], 
      [ 
        'Burki', 
        'Schulz', 
        'Hummels', 
        'Akanji', 
        'Hakimi', 
        'Weigl', 
        'Witsel', 
        'Hazard', 
        'Brandt', 
        'Sancho', 
        'Gotze', 
      ], 
    ], 
    score: '4:0', 
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',  'Lewandowski',
    'Hummels'], 
    date: 'Nov 9th, 2037', 
    odds: { 
      team1: 1.33, 
      x: 3.25, 
      team2: 6.5, 
    }, 
  }; 

//task1
//Loop over the game.scored array and print each player name to the console, 
// along with the goal number (Example: "Goal 1: Lewandowski")
  for (const [goalNumber,playerName] of game.scored.entries()) {
    console.log(`${goalNumber+1} : ${playerName}`);
  };
  //task2
let total=0;
for (const [index,value] of Object.entries(game.odds)) {
    total+=value;
}
console.log(total);
console.log(total/Object.values(game.odds).length);
//task3
for (const [keys,values] of Object.entries(game.odds) ) {
    console.log(`odds of victory ${game[keys]??`draw`} are ${values}`);
}
//task4
let scorers={  
  }
  for (const name of game.scored) {
    let goal=0;
    console.log(scorers[name],scorers[name]+1);
    goal=scorers[name]+1||1;
    scorers[name]=goal;
  }
  console.log(scorers);