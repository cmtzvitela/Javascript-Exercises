function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
console.log(`${hexToRgb("#0033ff").r}, ${hexToRgb("#0033ff").g}, ${hexToRgb("#0033ff").b}`);
console.log(`${hexToRgb("#482b7d").r}, ${hexToRgb("#482b7d").g}, ${hexToRgb("#482b7d").b}`);
