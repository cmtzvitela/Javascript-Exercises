function toBase13(num1, num2) {
  const multiply = num1 * num2;
  const parsedNumber = multiply.toString(13);
  return parsedNumber;
}

console.log(toBase13(86, 23));

// function multiplyToBase13(num1, num2) {
//   const result = num1 * num2;
//   if (result < 13 && result > -13) {
//     console.log(lessThan13(result));
//   } else {
//     if (result <= -13) {
//       const absoluteResult = result;
//       console.log("-", transformToBase13(absoluteResult));
//     } else {
//       return transformToBase13(result);
//     }
//   }
// }

// function transformToBase13(num) {
//   if (Math.floor(num / 13) == 0) {
//     return lessThan13(num);
//   } else {
//     workingOn13(num);
//   }
// }

// let base13 = "";
// function workingOn13(num) {
//   let remainder;
//   let quotient;
//   remainder = num % 13;
//   //console.log(remainder);
//   transformedRemainder = lessThan13(remainder);
//   //console.log("🚀 ~ file: Question01.js ~ line 24 ~ workingOn13 ~ transformedRemainder", transformedRemainder);
//   quotient = Math.floor(num / 13);
//   //console.log("🚀 ~ file: Question01.js ~ line 19 ~ transformToBase13 ~ quotient", quotient);
//   base13 = transformedRemainder + base13;
//   //console.log("🚀 ~ file: Question01.js ~ line 25 ~ workingOn13 ~ base13", base13);

//   if (Math.floor(quotient / 13) == 0) {
//     remainder = quotient % 13;
//     transformedRemainder = lessThan13(remainder);
//     base13 = transformedRemainder + base13;
//     console.log("The result in base 13 is", base13);

//     return base13;
//   } else {
//     workingOn13(quotient);
//   }
// }

// function lessThan13(num) {
//   switch (num) {
//     case 12:
//       return "C";
//       break;
//     case 11:
//       return "B";
//       break;
//     case 10:
//       return "A";
//       break;
//     case -12:
//       return "-C";
//       break;
//     case -11:
//       return "-B";
//       break;
//     case -10:
//       return "-A";
//       break;
//     default:
//       return num.toString();
//       break;
//   }
// }

// multiplyToBase13(5, 1739);
//transformToBase13(8695);

// remainder = num % 13;
//     console.log(remainder);
//     switch (remainder) {
//       case 12:
//         base13 = "C" + base13;
//         transformToBase13(remainder);
//         break;
//       case 11:
//         base13 = "B" + base13;
//         transformToBase13(remainder);
//         break;
//       case 10:
//         base13 = "A" + base13;
//         transformToBase13(remainder);
//         break;
//       default:
//         base13 = remainder.toString() + base13;
//         transformToBase13(remainder);
//         break;
