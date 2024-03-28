export default function nextBigger(n){
    const res = parseInt(
        n.toString()
        .split('')
        .sort((a, b) => b - a)
        .join('')
    )
    return res === n ? -1: res
}

console.log(nextBigger(12))
console.log(nextBigger(513))
console.log(nextBigger(2071))
//expected -1
console.log(nextBigger(9))
console.log(nextBigger(111))
console.log(nextBigger(531))