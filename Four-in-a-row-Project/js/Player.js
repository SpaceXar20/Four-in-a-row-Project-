/* -two players should display when the button 'start' is clicked
   there should be player 1 and player 2
*/

class Player { 
    constructor(name, id, color, active = false){
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active
        this.tokens = this.createTokens(21);
    }
    
    /**
 * Creates token objects for player
 * @param   {integer}   num - Number of token objects to be created
 * @return  {array}     tokens - an arary of new token objects
 */
createTokens(num) {
    const tokens = [];

    for (let i = 0; i < num; i++) {
        let token = new Token(i, this);
        tokens.push(token);
    }

    return tokens;
  }
 //Gets all tokens that haven't been dropped
 get unusedTokens() {
    return this.tokens.filter(token => !token.dropped);
  }
  //gets the active token by returning the first in the array of unused tokens
  get activeToken() {
      return this.unusedTokens[0];
  }
  checkTokens() {
      return this.unusedTokens.length == 0 ? false : true;
  }
}

