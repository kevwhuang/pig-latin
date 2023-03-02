const pigLatin = () => {
    // Retrieve input
    let input = document.getElementById('user-input').value;

    // Clean input
    input = input.trim().toLowerCase();
    input = input.replace(/[^a-z ]/g, '').replace(/  +/g, ' ');

    // Edge case: no input
    if (input.length === 0) {
        document.querySelector('p').innerHTML = '';
        return;
    }

    // Split input by words
    let output = '';
    let wordList = input.split(' ');

    // Transform each word
    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i] !== '') {
            output = output + rearrange(wordList[i]) + ' ';
        }
    }

    // Print to document
    document.querySelector('p').innerHTML = output.trim();
}

const rearrange = (word) => {
    // Find first index of letter types
    const firstConsonant = word.search(/[^aeiou]/);
    const firstVowel = word.search(/[aeiou]/);

    // Edge case: only consonants
    if (firstConsonant !== -1 && firstVowel === -1) {
        return word + 'ay';
    }

    switch (word[0]) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            // Transform if starting with vowel
            return word + 'yay';
        default:
            // Transform if starting with consonant group
            return word = word.slice(firstVowel) + word.slice(0, firstVowel) + 'ay';
    }
}