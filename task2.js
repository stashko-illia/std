export default function first_non_repeating_letter(s){
    return s.split('').find(char => s.indexOf(char) === s.lastIndexOf(char)) ?? ''
}

console.log(first_non_repeating_letter("stress"))