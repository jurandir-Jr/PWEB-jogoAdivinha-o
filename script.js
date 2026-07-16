let numeroSecreto = Math.floor(Math.random() * 50) + 1;

let palpite = 15;

while (palpite !== numeroSecreto) {   
    palpite = Number(prompt("Adivinhe o número (entre 1 e 50):"));

    if (palpite < numeroSecreto) {
        alert("O número secreto é MAIOR!");
    } else if (palpite > numeroSecreto) {
        alert("O número secreto é MENOR!");
    } else {
        alert("Parabéns! Você acertou o número secreto: " + numeroSecreto);
    }
}