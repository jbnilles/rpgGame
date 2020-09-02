export default class Game {
  constructor(values){
    this.players = []; 
    this.playersTurnIndex = 0;
  }

  attack(attackingPlayer, defendingPlayer) {
    let sides = 6; //add 
    let modifierAttack = this.rollDice(sides);//figure out sides
    let modifierDefend = this.rollDice(sides);//figure out sides
    let damageDealt = attackingPlayer.attacking(modifierAttack) - defendingPlayer.blocking(modifierDefend);
    defendingPlayer.health -= damageDealt;
    if(damageDealt <= 0) {
      damageDealt = 1;
    }
   return damageDealt;
  }
  nextTurn() {
    if(this.playersTurnIndex >= this.players.length - 1) {
      this.playersTurnIndex = 0;
    } else {
      this.playersTurnIndex++;
    }
  }
  removePlayer(player) {
    let x = this.players.indexOf(player)//needs to be fixed | removePlayer?
    this.players.splice(x, x + 1);//needs to be fixed
  }

  rollDice(sides) {
    return Math.ceil(Math.random()*sides)
  }

  addPlayer(player){/// to add player
    this.players.push(player);

  }

  determineFirstPlayer(){//based on speed
    this.players.sort(function (a,b) {
      return b.speed - a.speed;
    });

  }
  getAttackingPlayer(){
    return this.players[this.playersTurnIndex];
  }
  getDefendingPlayer(){
    if(this.playersTurnIndex >= this.players.length - 1){
      return this.players[0];
    } else {
      return this.players[this.playersTurnIndex];
    }

  }

}


/*
to add:
fortifiy
items
*/