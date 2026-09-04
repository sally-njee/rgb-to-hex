/**
 * Converts a CSS rgb(r, g, b) string to its hexadecimal equivalent.
 * Example: rgb(255, 255, 255) → #ffffff
 */
function rgbToHex(rgb) {
  // Extract numeric values using regex
  const [r, g, b] = rgb.match(/\d+/g).map(Number);

  // Convert each value to a two-digit hex string
  const toHex = (value) => value.toString(16).padStart(2, '0');

  // Combine and return lowercase hex color
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Example usage:
console.log(rgbToHex("rgb(255, 255, 255)")); // #ffffff
console.log(rgbToHex("rgb(1, 2, 3)"));       // #010203
