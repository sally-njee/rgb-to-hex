function tribonacciSequence(startSequence, length) {
  // Defensive check: handle edge cases
  if (length <= 0) return [];
  if (length <= 3) return startSequence.slice(0, length);

  // Copy the starting sequence
  const sequence = [...startSequence];

  // Build the sequence iteratively
  for (let i = 3; i < length; i++) {
    const nextValue = sequence[i - 1] + sequence[i - 2] + sequence[i - 3];
    sequence.push(nextValue);
  }

  return sequence;
}

// Example test
console.log(tribonacciSequence([0, 0, 1], 10));
// Output: [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]

