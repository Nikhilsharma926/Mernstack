function rps(user,computer){
    if(user === computer) return'draw'

    if(user === 'paper' && computer ==='scissor') return'computer win'
    if(user === 'rock' && computer ==='paper') return 'computer win'
    if(user === 'scissor' && computer ==='rock') return 'computer win'

     if (user) return'user win'
}

console.log(rps("rock","paper"));
