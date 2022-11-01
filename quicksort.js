
// sorts by starting at first index

// function quicksort(arr) {
//   // Check if the input is length 1 or less
//   // If so, it's already sorted: return
//   if (arr.length <= 1) return arr;
//   // Pick the first value as the pivot

//   let pivot = arr[0];
//   // Orient the pivot so that...
//   let left = new Array();
//   let right = new Array();
//   for (let i = 0; i < arr.length; i++) {
//     let curr = arr[i];
//     // every number smaller than the pivot is to the left
//     // every number larger (or equal) than the pivot is to the right
//     if (curr < pivot) {
//       left.push(curr);
//     }
//     if (curr > pivot) {
//       right.push(curr);
//     }
//   }

//   // Recursively sort the left
//   left = quicksort(left);
//   // Recursively sort the right
//   right = quicksort(right);
//   // Return the left, pivot and right in sorted order
//   return [...left, pivot, ...right];
// }


// sorts by starting in random pos

// function quicksort(arr) {
//   // Check if the input is length 1 or less
//   // If so, it's already sorted: return
//   if (arr.length <= 1) return arr;
//   // Pick the first value as the pivot
//   let pivotIndex = Math.floor(Math.random() * arr.length)
//   let pivotVal = arr[pivotIndex];
//   // Orient the pivot so that...
//   let left = new Array();
//   let right = new Array();
//   for (let i = 0; i < arr.length; i++) {
//     let curr = arr[i];
//     // every number smaller than the pivot is to the left
//     // every number larger (or equal) than the pivot is to the right
//     if (curr < pivotVal) {
//       left.push(curr);
//     }
//     if (curr > pivotVal) {
//       right.push(curr);
//     }
//   }

//   // Recursively sort the left
//   left = quicksort(left);
//   // Recursively sort the right
//   right = quicksort(right);
//   // Return the left, pivot and right in sorted order
//   return [...left, pivotVal, ...right];
// }


// sorts by starting in middle
function quicksort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr;
  // Pick the first value as the pivot
  let pivotIndex = Math.floor(arr.length/2.0)
  let pivotVal = arr[pivotIndex];
  // Orient the pivot so that...
  let left = new Array();
  let right = new Array();
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    // every number smaller than the pivot is to the left
    // every number larger (or equal) than the pivot is to the right
    if (curr < pivotVal) {
      left.push(curr);
    }
    if (curr > pivotVal) {
      right.push(curr);
    }
  }

  // Recursively sort the left
  left = quicksort(left);
  // Recursively sort the right
  right = quicksort(right);
  // Return the left, pivot and right in sorted order
  return [...left, pivotVal, ...right];
}




 var arr = [234, 43, 55, 63,  5, 6, 235, 547];
console.log(quicksort(arr));


module.exports = [quicksort];
