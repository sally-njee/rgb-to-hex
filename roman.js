function parseRomanNumeral(numeral) {
  const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;

  for (let i = 0; i < numeral.length; i++) {
    const current = values[numeral[i]];
    const next = values[numeral[i + 1]];

    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}

console.log(parseRomanNumeral("MCMXCIV")); // Output: 1994
