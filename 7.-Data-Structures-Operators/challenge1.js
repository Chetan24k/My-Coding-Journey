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
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',  
    'Hummels'], 
    date: 'Nov 9th, 2037', 
    odds: { 
      team1:6.25 , 
      x: 3.25, 
      team2:11.33, 
    }, 
  };
//task1
let {players:[p1,p2]}=game;
// console.log(p1,p2);
let [players1,players2]=game.players;
// console.log(players1);

//task2 
let [gk,...fieldPlayer]=players1;
console.log(gk,fieldPlayer);

//task3
let allPlayers=[...players1,...players2];
// console.log(allPlayers);

//task4
let players1Final=[`thiago`,`coutinho`,`perisic`,...players1];
// console.log(players1Final);

//task5
let {team1,draw,team2}=game.odds;
// console.log(team1);

//task6
let printGoals=function(...playernames)
{
    for (let index = 0; index < playernames.length; index++) {
        const element = playernames[index];
        console.log(element);
        
    }
    console.log(`total number of goals scored ${playernames.length}`);
}
// printGoals('Lewandowski', 'Gnarby', 'Lewandowski','Hummels')

//task7

let teamWin;
teamWin=team1<team2&&`team 1 will win `;
teamWin=teamWin||`team 2 will win`;

// console.log(teamWin);

for (const [index,element] of allPlayers.entries()) {
    console.log(`${index} : ${element}`);
}
// console.log(allPlayers.entries());
