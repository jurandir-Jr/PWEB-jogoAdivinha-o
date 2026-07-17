let numeroSecreto = Math.floor(Math.random() * 50) + 1;

let palpite = 0;

while (palpite !== numeroSecreto) {
    palpite = Number(prompt("Digite um número entre 1 e 50:"));

    if (palpite < numeroSecreto) {
        alert("O número secreto é maior!");
    } else if (palpite > numeroSecreto) {
        alert("O número secreto é menor!");
    } else {
        alert("Parabéns! Você acertou o número secreto: " + numeroSecreto);
    }
}