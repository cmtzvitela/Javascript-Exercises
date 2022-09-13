function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let rgb = `rgb (${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`;
  return rgb;
}

console.log(hexToRgb("#0033ff"));
console.log(hexToRgb("#482b7d"));

// return result
//   ? {
//       r: parseInt(result[1], 16),
//       g: parseInt(result[2], 16),
//       b: parseInt(result[3], 16),
//     }
//   : null;
// console.log(`rgb (${hexToRgb("#0033ff").r}, ${hexToRgb("#0033ff").g}, ${hexToRgb("#0033ff").b})`);
// console.log(`rgb (${hexToRgb("#482b7d").r}, ${hexToRgb("#482b7d").g}, ${hexToRgb("#482b7d").b})`);
