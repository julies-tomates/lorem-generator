// generates random lorem ipsum text

const loremIpsum = new GenerateNewText();

//Constructor function that creates an object with a property called sentences
function GenerateNewText() {
    this.sentences = [
        "Nice.",
        "Do you have a sound test?",
        "Check out my sound test.",
        "Instead of asking for a keyboard rec, try building your own keyboard.",
        "What switches are those?",
        "I don’t know, I’m still waiting on a group buy.",
        "My GMK set is delayed.",
        "Well regardless, those caps are nice.",
        "Please check out my interest check!",
        "I built it myself.",
        "Sadly, I had to pay after market prices for these.",
        "I’m a tactile person myself.",
        "This is end game, for sure.",
        "Specs?",
        "There’s a new group buy coming up that I’m waiting for.",
        "GMK is delayed by a year.",
        "Yeah once the caps come in, I’ll have this keyboard done.", 
        "How much was your latest build?",
        "Wow do you use all those keyboards?",
        "I forgot to lube my switches.",
        "It was supposed to be a budget build.",
        "Hopefully there will be a round 2 for that.",
        "I'm pretty sure I saw that on someone's build stream.",
        "That's a really nice build.",
        "I wonder how long it took for everything to arrive.", 
        "I find lubing switches to be therapeutic.",
        "I'm already thinking about my next build.",
        "You have to lube your switches though.", 
        "Cool build.",
        "Thinking about getting an IKEA wall mount to display my boards.",
        "I bought that in a group buy a year ago.",
        "You won't believe how much shipping was.",
        "Not sure when my keyboard will come in honestly.",
        "Listen to the type test of this board.",
        "Soldered this PCB myself.",
        "Imagine buying GMK sets to flip them.",
        "My keyboard is stuck in customs.",
        "I have a collection of desk mats and only 1 desk.",
        "I've seen some cursed builds out there.",
        "Keyboards made me broke.",
        "I fell in too deep in the rabbit hole.",
        "I'm about to spend $500 on a rectangle.",
        "Not sure if this is a hobby or hell.",
        "Give me some feedback on my first build!",
        "The group buy is live now.",
        "I think I just forgot to join a group buy.",
        "RNG gods please bless me.",
        "It's gasket-mounted.",
        "But actuation force though.",
        "Never really thought of it that way now that you say it.",
        "Lots of people get into this hobby without doing their research and it shows.",
        "A custom keyboard can change your life, I would know.",
        "Group buys have taught me a different type of patience I didn't know I had.",
        "This was a group buy, you can't really find this unless you search after market."
    ]
}

// Returns unique values to be used to generate sentences for a paragraph
GenerateNewText.prototype.getUniqueSentences = function() {
  let randomNums = new Set();
  
  while (randomNums.size < 15) {
    randomNums.add(Math.floor(Math.random() * this.sentences.length))
  }
  return randomNums
}

// Returns a paragraph of unique sentences with a minimum character length
GenerateNewText.prototype.getUniqueParagraph = function() {
  let randomSentenceNums = this.getUniqueSentences(); //set of random nums
  let paragraph = "";
  let minimumCharacterLength = 350;

  for (let num of randomSentenceNums){
    if (paragraph.length < minimumCharacterLength){
      paragraph = paragraph.concat(this.sentences[num] + " ")
    }
  }
  return paragraph.slice(0, -1)

}



// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
    let allParagraphs = [];
    // Generate the number of paragraphs as specified by the user
    while (allParagraphs.length < numberOfParagraphs) {
      allParagraphs.push(this.getUniqueParagraph());
    }
    // Convert array into HTML string
    let paragraphHTML = "";
    allParagraphs.forEach(function (paragraph) {
      paragraphHTML += "<p>" + paragraph + "</p>";
    });
    let div = "<div class='generated-text'>" + paragraphHTML + "</div>"
    return div;
}
  
module.exports = loremIpsum;


