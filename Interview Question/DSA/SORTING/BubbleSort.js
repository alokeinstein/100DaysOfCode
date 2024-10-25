    //TEACHER BUBBLE SORT
//     function bubbleSort(arr) {
//         let n= arr.length
//       for (let i=n; i>0; i--){
//         for(let j=0; j<i-1;j++){
//             console.log(arr,arr[j], arr[j+1])
//             if(arr[j]>arr[j+1]){
//                 //swap
//                 var temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1]= temp
//             }
//         }
//       }
//       return arr;
//     }
    
//    bubbleSort([13, 46, 24, 52, 20, 9])





   //My Bubble sort
  //  let arr = [13,46,24,52,20,9]
  //  for(let i=0; i<=arr.length-1; i++){
  //      for(let j=i+1; j<=arr.length-1; j++){
  //         let c
  //          if(arr[i]>arr[j]){
  //              c=arr[i]
  //              arr[i]=arr[j]
  //              arr[j]=c
  //              console.log(arr)
  //          }
  //      }
  //  }





   //visualgo code
   let arr = [13, 46, 24, 52, 20, 9];

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  let swapCounter = 0;
  
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        swapCounter++;
      }
    }
    // Decrease the range of the next iteration
    n--;
  } while (swapped);

  console.log("Total swaps: ", swapCounter);
  return arr;
}

console.log("Before bubble sort: ", arr);
arr = bubbleSort(arr);
console.log("After bubble sort: ", arr);
