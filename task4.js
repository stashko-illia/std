export default function count_pairs(arr, k){
    let count = 0;
    for(let i = 0; i< arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === k) count++
        }
    }
    return count;
}

console.log(count_pairs([1, 3, 6, 2, 2, 0, 4, 5], 5))