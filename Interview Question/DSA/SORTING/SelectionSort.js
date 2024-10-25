/* 
Example 1:
Input: N = 6, array[] = {13,46,24,52,20,9}
Output: 9,13,20,24,46,52
Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52


Example 2:
Input: N=5, array[] = {5,4,3,2,1}
Output: 1,2,3,4,5
Explanation: After sorting the array is: 1, 2, 3, 4, 5
*/



    //SELECTION SORT:visualgo
    //first element ko sorted mante  hai then fir poora array compare karte hai with the inner loop
    let arr = [13, 46, 24, 52, 20, 9]
    let n= arr.length
    for (let i=0; i<n-1 ;i++){
        let minIndex=i
        let temp
        for(let j=i+1; j<n-1; j++){
            if(arr[minIndex]>arr[j]){ 
               minIndex = j
            }
        }
        //if there is some other value which is smaller than the the arr[i] then minIndex is not equal to i then swap
        if(minIndex!==i){
            temp = arr[minIndex]
            arr[minIndex] = arr[i]
            arr[i] = temp
        }
        console.log(arr)
    }


