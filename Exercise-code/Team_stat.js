const team = {
    _players: [
      {
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11
      },
      {
    firstName: 'yao',
    lastName: 'ming',
    age: 13
      },
      {
    firstName: 'aka',
    lastName: 'yeet',
    age: 14
      },    
    ],
    _games: [{
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  },
  {
    opponent: 'Taipei',
    teamPoints: 20,
    opponentPoints: 50
  },
  {
    opponent: 'Japan',
    teamPoints: 40,
    opponentPoints: 30
  }
  ],
//   get playerskeys() {
//     return this._players;
//   },
//   get _gameskeys() {
//     return this._games;
//   },
  addplayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    }
     this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    }
    this._games.push(game);
  }
  };
  
  team.addplayer("Steph", "Curry", 28);
  team.addplayer("Lisa", "Leslie", 44);
  team.addplayer("Bugs", "Bunny", 76);
  
  team.addGame('Titans', 100, 98);

  console.log(team._players);
  console.log(team._games);
  