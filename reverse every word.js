function reverseWords(sentence) {
// Split the sentence into words
let words = sentence.split(' ');

// Reverse each word
let reversedWords = words.map(word => {
return word.split('').reverse().join('');
});

// Join the reversed words to form the reversed sentence
let reversedSentence = reversedWords.join(' ');

return reversedSentence;
}

const inputSentence = "This is a sunny day";
const reversedResult = reverseWords(inputSentence);
console.log(reversedResult);

