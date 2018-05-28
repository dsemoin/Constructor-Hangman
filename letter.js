// constructor function to create letters and underscores
let Letter = function (character){
    this.character = character;
    this.guessed = false;

    this.letterGuessed = function(){
        if (this.guessed){
            return (this.character)
        } else {
            return ("_")
        }
    }
    this.guessLetter = function(character){
        if (this.character == character){
            this.guessed = true;
        }
    }
}
module.exports = Letter;