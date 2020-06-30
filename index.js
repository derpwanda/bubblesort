// sort in ascending order
// compare index a to next index
// will usually take several passes

// start at the 0 and 1 index and increment upwards

// Time Complexity passes - O(n), comparisons O(n)
// best case - O(n), worst case 0(n)^2


function bubblesort(arr) {
    console.log("start arr: " + arr)
    for (let i = 0; i < arr.length; i++){
        isSorted = true //optimization
        for (let j = 1; j < arr.length - i; j++){
            if (arr[j] < arr[j - 1]) {
                // let temp = arr[j]
                // arr[j] = arr[j - 1]
                // arr[j - 1] = temp

                swap(arr, j, j-1)
                isSorted = false //optimization
            }
            if (isSorted) return arr // optimization
        }
    }
    return arr
}

// cleaner code
function swap(arr, index1, index2){
    let temp = arr[index1]
    arr[index1] = arr[index2] 
    arr[index2] = temp
}

let array = [8, 1, 2, 4, 5]
let array2 = [7, 3, 1, 4, 6, 2]
let array3 = []
let array4 = [7, 3]
console.log(bubblesort(array3))