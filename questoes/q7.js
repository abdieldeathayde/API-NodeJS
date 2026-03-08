let palavra = "ABC";
switch(palavra) {
    case "ACB":
        console.log("C");
        break;
    case "BC":
    case "ABC":
        console.log("A");
        break;
    case "B":
        console.log("Hello");
        break;
    default:
        console.log("Palavra não encontrada");
        break;

    
    

}