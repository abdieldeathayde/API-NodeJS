let idade = 25;
try {
    const json = ' { "nome": "João", "idade": 30 } ';
    const pessoa = JSON.parse(json);
    console.log(pessoa.nome);
    if (idade < 18) {
        throw new Error("Idade deve ser maior ou igual a 18");
    } else {
        console.log("Você pode dirigir.");
    }

} catch (error) {
    console.log(error.message);
}