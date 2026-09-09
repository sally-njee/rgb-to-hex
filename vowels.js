function repeatVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  let result = '';

  for (let ch of str) {
    if (vowels.includes(ch)) {
      count++;
      result += ch + ch.toLowerCase().repeat(count - 1);
    } else {
      result += ch;
    }
  }
  return result;
}
console.log(repeatVowels("Hello World"));