


// function transformString(str) {
//   let result = "";
//   let isFirstWord = true;
//   let inWord = false;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     // If the current character is a space, reset word flag
//     if (char === " ") {
//       result += char;
//       inWord = false;
//     } else {
//       // If we are at the start of a new word
//       if (!inWord) {
//         inWord = true;

//         // First word: convert to lowercase
//         if (isFirstWord) {
//           if (char >= "A" && char <= "Z") {
//             result += String.fromCharCode(char.charCodeAt(0) + 32);
//           } else {
//             result += char;
//           }
//           isFirstWord = false;
//         }
//         // Subsequent words: convert first character to uppercase
//         else {
//           if (char >= "a" && char <= "z") {
//             result += String.fromCharCode(char.charCodeAt(0) - 32);
//           } else {
//             result += char;
//           }
//         }
//       }
//       // For the rest of the characters in the word: convert to lowercase
//       else {
//         if (char >= "A" && char <= "Z") {
//           result += String.fromCharCode(char.charCodeAt(0) + 32);
//         } else {
//           result += char;
//         }
//       }
//     }
//   }

//   return result.replaceAll(" " , "");
// }

// console.log(transformString("  MuJtaBa sHah syed"));


// find the biggest number in an array??

 // let arr = [1,2,3,4,5,5,44,4,4,3,2,1,6,3,6,6,6]
// let largest = 0;

// for (let index = 0; index <= arr.length; index++) {
    // console.log(arr) 1 step done.  
   
//    if (arr[index] > largest) {
//     largest = arr[index]
//    }
// }

// console.log(largest);

let arr = [1,2,3,4,5,5,44,4,4,3,2,1,6,3,6,6,6]















