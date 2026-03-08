//Operador AND

let idade = 25;
let temCarteira = true;
if (idade >= 18 && temCarteira === true) {
    console.log("Você pode dirigir.");
} else {
    console.log("Você não pode dirigir.");
}

//operador || (OR)

let dia = "segunda-feira";
if (dia === "segunda-feira" || dia === "terça-feira" || dia === "quarta-feira" || dia === "quinta-feira" || dia === "sexta-feira") {
    console.log("Hoje é um dia útil.");
} else {
    console.log("Hoje é um dia de descanso.");
}