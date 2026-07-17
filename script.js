
let jogador = prompt("Escolha: pedra, papel ou tesoura");

jogador = jogador.toLowerCase();


if (jogador !== "pedra" && jogador !== "papel" && jogador !== "tesoura") {
    alert("Opção inválida! Recarregue a página e tente novamente");
} else {

    
    let numero = Math.floor(Math.random() * 3);

    // Mapeia o número para a escolha do computador
    let computador;

    if (numero === 0) {
        computador = "pedra";
    } else if (numero === 1) {
        computador = "papel";
    } else {
        computador = "tesoura";
    }

    
    if (jogador === computador) {
        alert("Computador: " + computador + "\nEmpate");
    } else if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")
    ) {
        alert("Computador: " + computador + "\nVocê venceu!");
    } else {
        alert("Computador: " + computador + "\nVocê perdeu!");
    }
}