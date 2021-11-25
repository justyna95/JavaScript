// We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.
//Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.

const team = {
  _players: [{
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 25
  }, {
    firstName: 'Olo',
    lastName: 'Munick',
    age: 22
  }, {
    firstName: 'Marc',
    lastName: 'Black',
    age: 20
  }],
  _games: [{
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  }, {
    opponent: 'BlueLions',
    teamPoints: 54,
    opponentPoints: 65
  }, {
    opponent: 'Narways',
    teamPoints: 21,
    opponentPoints: 32
  }],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age
    }
    this.players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints
    }
    return this.games.push(game);
  }

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
//console.log(team.players);
team.addGame('Yankees', 98, 75);
//console.log(team.games);

