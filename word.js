const Letter = require("./letter.js");

var Word = function(word){
    this.word = [];
    this.fullWord = word;
    // This creates an array of new Letter objects representing the letters of the underlying word
    for(var i = 0; i<word.length; i++) {
        let newLetter = new Letter(word[i]);
        this.word.push(newLetter);
    };
    // This is to create the current word
    this.currentWord = function(){
        let word = "";
        // This joins the letters to create a word
        this.word.forEach(function(letter){
            word = word + letter.letterGuessed()
        })
        return(word);
    }
    // This is to guess a letter
    this.guess = function(character){
        var found = 0;
        this.word.forEach(function(letter){
            letter.guessLetter(character);
        })
        return found;
    }
    this.didWeFindTheWord = function() {
        return this.word.filter(letter => letter.guessed == false).length > 0 ? false : true;
    }
}
module.exports = Word;