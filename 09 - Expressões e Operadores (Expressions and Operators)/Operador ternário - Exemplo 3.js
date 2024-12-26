// Sintaxe:
// condição ? valor_se_verdadeiro : valor_se_falso;

const nota = 55;

const resultado = (nota >= 90) ? "Sua pontuação foi: A" :
                  (nota >= 50) ? "Sua pontuação foi: B" :
                  (nota >= 30) ? "Sua pontuação foi: C" : "Sua pontuação foi: D";

console.log(resultado); // Sua pontuação foi: B
