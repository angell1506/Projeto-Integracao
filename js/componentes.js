// js/componentes.js
async function carregarComponente(arquivo, seletor) {
  try {
    const resposta = await fetch(arquivo);
    const html = await resposta.text();
    document.querySelector(seletor).innerHTML = html;
  } catch (erro) {
    console.error("Erro ao carregar componente:", erro);
  }
}
