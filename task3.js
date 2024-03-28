export default function ditital_root(n){
    if(n.toString().length === 1 ) return n;
    return ditital_root(
        n.toString()
        .split('')
        .map(item => parseInt(item))
        .reduce((a, b) => a + b, 0)
    )
}

console.log(ditital_root(16))
console.log(ditital_root(942))
console.log(ditital_root(132189))
console.log(ditital_root(493193))