const produtos = [
  "TV 55'' Samsung", "Geladeira Brastemp", "Notebook Dell", "Micro-ondas Electrolux",
  "Fogão 4 bocas", "Ar-condicionado 12000 BTUs", "Máquina de Lavar 12kg", "Smartphone Motorola",
  "Caixa de Som JBL", "Aspirador de Pó", "Air Fryer", "Impressora Epson",
  "Monitor LG 27''", "Tablet Samsung", "Cadeira Gamer", "Ventilador Arno",
  "Console Xbox Series S", "PlayStation 5", "Relógio Smartwatch", "Panela de Pressão Elétrica"
];

function gerarBoleto() {
  const email = document.getElementById("email").value;
  if (!email.includes("@")) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  const nome = email.split("@")[0].replace(/[0-9]/g, "").toUpperCase();
  const produto = produtos[Math.floor(Math.random() * produtos.length)];
  const valor = (Math.random() * 900 + 100).toFixed(2).replace(".", ",");
  const vencimento = gerarDataFutura();
  const codigo = gerarLinhaDigitavel();

  document.getElementById("pagador").innerText = `${nome} - ${email}`;
  document.getElementById("produto").innerText = produto;
  document.getElementById("valor").innerText = `R$ ${valor}`;
  document.getElementById("vencimento").innerText = vencimento;
  document.getElementById("codigo").innerText = codigo;

  document.getElementById("formulario").classList.add("hidden");
  document.getElementById("boleto").classList.remove("hidden");
}

function gerarLinhaDigitavel() {
  let linha = '';
  for (let i = 0; i < 47; i++) {
    linha += Math.floor(Math.random() * 10);
    if (i === 4 || i === 9 || i === 14 || i === 20 || i === 25 || i === 30 || i === 35 || i === 40) {
      linha += '.';
    }
  }
  return linha;
}

function gerarDataFutura() {
  const hoje = new Date();
  hoje.setDate(hoje.getDate() + Math.floor(Math.random() * 15) + 5);
  return hoje.toLocaleDateString('pt-BR');
}
