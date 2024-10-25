function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])

/* 
When currentVal is 1 and j is initially 0, the array might look like [2, 2, 9, 76, 4] after shifting.

However, when we assign arr[j + 1] = currentVal, we actually mean:

j is -1 after decrementing in the loop.

j + 1 is 0.

So, 1 is placed at arr[0]. That's why the array correctly updates to [1, 2, 9, 76, 4]. It’s a cool trick that ensures elements find their right spot!
*/