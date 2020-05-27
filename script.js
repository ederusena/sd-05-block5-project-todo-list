const posBotaoAdicionar = document.getElementById('criar-tarefa');
let conteudoAdicionar = '';
const posTextoTarefa = document.getElementById('texto-tarefa');
const posListaTarefas = document.getElementById('lista-tarefas');
const posApagaTudo = document.getElementById('apaga-tudo');
const posBotaoFinalizados = document.getElementById('remover-finalizados');
const posBotaoSalvar = document.getElementById('salvar-tarefas');
const posBotaoMoveCima = document.getElementById('mover-cima');
const posBotaoMoveBaixo = document.getElementById('mover-baixo');

function moveCima() {
  const pegaTodosLi = document.querySelectorAll('li');
  console.log(pegaTodosLi);
  for (let i=0; i<pegaTodosLi.length; i+=1) {
    if (pegaTodosLi[i].classList.contains('coloreCinza')) {
      exchangeElements(pegaTodosLi[i], pegaTodosLi[i].previousSibling);

      /* console.log("achei o elemento selecionado!!!!")
      console.log("O elemento selecionado é " + pegaTodosLi[i]);
      const pegaAnterior = pegaTodosLi[i].previousSibling;
      console.log("O elemento anterior é: " + pegaAnterior)
      let aux = pegaTodosLi[i];
      pegaTodosLi[i] = pegaAnterior;
      pegaTodosLi[i].previousSibling = aux;
      console.log("O novo elemento selecionado é " + pegaTodosLi[i].innerHTML);
      console.log("O elemento anterior é: " + pegaTodosLi[i].previousSibling.innerHTML); */
    }
  }
  //console.log(pegaTodosLi);
  //console.log(pegaAnterior);
}

function exchangeElements(element1, element2)
{
    var clonedElement1 = element1.cloneNode(true);
    var clonedElement2 = element2.cloneNode(true);

    element2.parentNode.replaceChild(clonedElement1, element2);
    element1.parentNode.replaceChild(clonedElement2, element1);

    //return clonedElement1;
}

posBotaoMoveCima.addEventListener('click', moveCima);

function carregaStorage() {
  document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('conteudo');
}

window.onload = carregaStorage;

function salvarTarefas() {
  localStorage.clear()
  const pegaTudo = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('conteudo', pegaTudo);
  /* const pegaTodosLi = document.querySelectorAll('#lista-tarefas li');
  for (let i=0; i<pegaTodosLi.length; i+=1) {
    let classe = pegaTodosLi[i].className;
    let conteudo = pegaTodosLi[i].innerHTML;
    localStorage.setItem(conteudo, classe);
  } */
 }

posBotaoSalvar.addEventListener('click', salvarTarefas);

function adicionaCompleted(event) {
  event.target.classList.toggle('completed');
}

posListaTarefas.addEventListener('dblclick', adicionaCompleted);

function coloreCinza(event) {
  const pegaTodosLi = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < pegaTodosLi.length; i+=1) {
    if (pegaTodosLi[i].classList.contains('coloreCinza')) {
      pegaTodosLi[i].classList.remove('coloreCinza');
    }
  }
  event.target.classList.add('coloreCinza');
}

posListaTarefas.addEventListener('click', coloreCinza);

function apagaTudo() {
  document.getElementById('lista-tarefas').innerHTML = '';
}

posApagaTudo.addEventListener('click', apagaTudo);

function apagaFinalizados() {
  const pegaCompletos = document.querySelectorAll('.completed');
  for (const elemento of pegaCompletos) {
    elemento.remove();
  }
}

posBotaoFinalizados.addEventListener('click', apagaFinalizados);

function adicionaItem() {
  const criaLi = document.createElement('li');
  posListaTarefas.appendChild(criaLi);
  conteudoAdicionar = posTextoTarefa.value;
  posListaTarefas.lastElementChild.innerHTML = conteudoAdicionar;
  posTextoTarefa.value = '';
}

posBotaoAdicionar.addEventListener('click', adicionaItem);
