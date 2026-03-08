function dividirNumeros(num1, num2) {
    try {
        if (num2 === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        return num1 / num2;
    }
    catch (error) {
        return "Erro: " +error.message;
    }
}
console.log(dividirNumeros(21, 3));