// Informações básicas
let nome = "Yanka";
let rendaMensal = 2500; // valor fictício
let aluguel = 800;
let internet = 100;
let alimentacao = 600;
let outrosGastos = 300;

// Cálculo do total de despesas
let totalDespesas = aluguel + internet + alimentacao + outrosGastos;

// Cálculo do saldo restante
let saldoFinal = rendaMensal - totalDespesas;

// Exibindo tudo
console.log(`Olá, meu nome é ${nome}!`);
console.log(`Minha renda mensal é R$ ${rendaMensal}.`);
console.log(`Gastos mensais:`);
console.log(`- Aluguel: R$ ${aluguel}`);
console.log(`- Internet: R$ ${internet}`);
console.log(`- Alimentação: R$ ${alimentacao}`);
console.log(`- Outros gastos: R$ ${outrosGastos}`);
console.log(`Gasto total: R$ ${totalDespesas}`);
console.log(`Saldo restante no final do mês: R$ ${saldoFinal}`);