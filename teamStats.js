const team = {
  _name: 'Flamengo',
  _players: [
    {firstName: 'Gabriel', lastName:'Barbosa', age: 25},
    {firstName: 'Bruno', lastName: 'Henrique', age: 31},
    {firstName: 'Everton', lastName: 'Ribeiro', age: 33}
  ],
  _games: [
    {opponent: 'Corinthians', teamPoints: 1, opponentPoints: 0},
    {opponent: 'São Paulo', teamPoints: 2, opponentPoints: 0},
    {opponent: 'Atlético-GO', teamPoints: 4, opponentPoints: 1}
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge){
    let player = {firstName: newFirstName, lastName: newLastName, age: newAge};
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints};
    this._games.push(game);
  },
  getTotalGames(){
    let totalGames = this._games.length;
    return `This season ${this._name} has played ${totalGames} matches.`
  },
  getAvgScore(){
    let sumScore = 0;
    let matchCount = 0;
    for(game of this._games){
      sumScore += game.teamPoints;
      matchCount++
    }
    let avg = (sumScore/matchCount).toFixed(2);
    return `The average score for ${this._name} is ${avg}.`
  }
}

console.log(team.getTotalGames());
console.log(team.getAvgScore());

