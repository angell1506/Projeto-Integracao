// js/componentes.js

async function carregarComponente(caminho, seletor) {
  try {
    const resposta = await fetch(caminho);
    if (!resposta.ok) {
      throw new Error(`Erro ao carregar ${caminho}: ${resposta.status}`);
    }

    const html = await resposta.text();
    document.querySelector(seletor).innerHTML = html;

  } catch (erro) {
    console.error('Erro ao carregar componente:', erro);
  }
}