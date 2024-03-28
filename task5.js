export default function parse(s){
    return s.toUpperCase()
            .split(';')
            .map(item => item.split(':').reverse().join(':'))
            .sort()
            .map(item => '(' + item.replace(':', ', ')+ ')')
            .join('')
}

console.log(parse("Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))