//In this project, you will use what you know about iterating over arrays to improve the quality of a paragraph and gather some information about that paragraph.
//This is the same type of work that word processing software does. Additionally, you may have heard of linting, a process by which text is evaluated and improved by an application. In this project, you will create a miniature version of a linter using array methods that you have learned.

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
//console.log(storyWords.length);

let betterWords = storyWords.filter(word => {
  if (word !== 'extremely' && word !== 'literally' && word !== 'actually') {
    return word;
  }
});
//console.log(betterWords.length);

function howManyWords(word) {
  let sumWords = 0;
    for (let i=0; i<storyWords.length; i++) {
      if (storyWords[i] === word) {
        sumWords +=1;
      } else { 
        continue;
      }
    }
  return sumWords;
};
//console.log(howManyWords('really'));

sumSentences = 0;
for (let i=0; i<storyWords.length; i++) {
  if (storyWords[i].includes('.') || storyWords[i].includes('!')) {
    sumSentences +=1;
  }
};
//console.log(sumSentences);


let sentenceSummary = () => {
  return `The paragraph has ${storyWords.length} words.\nIt consists of ${sumSentences} sentences.\nHere is how often each overused word appears:\n'very' - ${howManyWords('very')} number of times,\n'really' - ${howManyWords('really')} number of times,\n'basically' - ${howManyWords('basically')} times.\n`;
};
console.log(sentenceSummary());

console.log(betterWords.join(' '));

/*Here are some ideas on further improving on the project:

*For the overused words, remove it every other time it appears.

*Write a function that finds the word that appears the greatest number of times.

*Replaced overused words with something else.*/
