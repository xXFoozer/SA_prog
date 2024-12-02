import Veiculo from './entity/Veiculo';
import * as echarts from 'echarts';
import './index.css';
import Producao from './entity/Producao';

var listaVeiculos:Veiculo[] = [];

document.getElementById("botao-cadastrar")?.addEventListener("click", async (event: MouseEvent) => {
//     event.preventDefault();
  

//    var modelo = document.getElementById("modelo") as HTMLInputElement;
//    var cor = document.getElementById("cor") as HTMLInputElement;
//    var ano = document.getElementById("ano") as HTMLInputElement;
//    var preco = document.getElementById("preco") as HTMLInputElement;
//    var placa = document.getElementById("placa") as HTMLInputElement;
//    var imagem = document.getElementById("imagem") as HTMLInputElement;


//    const novoVeiculo = new Veiculo(modelo.value,cor.value, Number(ano.value),Number(preco.value), placa.value,imagem.value)

//    listaVeiculos.push(novoVeiculo);
//    (window as any).bancoAPI.createVeiculo(novoVeiculo);


//    const lista_campos = ["modelo","cor","ano","preco","placa","imagem"];
//    lista_campos.forEach((campos)=> (document.getElementById(campos)as HTMLInputElement).value = "")

//   render()

})


window.onload = async () => {
    const veiculos = await (window as any).bancoAPI.findAll();
    for(var i =0 ; i < veiculos.length ; i++){
          const veiculo = new Veiculo (veiculos[i].modelo, veiculos[i].cor, veiculos[i].ano,veiculos[i].preco,veiculos[i].placa,veiculos[i].imagem,veiculos[i].id)
          listaVeiculos.push(veiculo)
     }
    // render()
    
   
    desenharGraficoPizza();
    // preencheComboBox()
}
// function preencheComboBox() {
//      var combobox = document.getElementById("combobox");
//      combobox.innerHTML = `<option value="" disabled="true">Selecione uma opção</option>`;
 
//      for (var i = 0; i < listaVeiculos.length; i++) {
//          combobox.innerHTML += `
//              <option value="${listaVeiculos[i].getid()}">${listaVeiculos[i].getModelo()}</option>
//          `;
//      }
//  }

function render(){
    //  var aside = document.getElementById("grafico");
    //  aside.innerHTML = "";
    //  for(var i=0; i <listaVeiculos.length; i++){
    //       aside.innerHTML += `
    //       <div class="card">
    //               <img src="${listaVeiculos[i].getImagem()}" alt="ERRO">
    //               <div class="dados">
    //                 <strong>${listaVeiculos[i].getModelo()}</strong>
    //                 <span>Cor:${listaVeiculos[i].getCor()}</span>
    //                 <span>Ano:${listaVeiculos[i].getAno()}</span>
    //                 <span>Preço:${listaVeiculos[i].getPreco()}</span>
    //                 <span>Placa:${listaVeiculos[i].getPlaca()}</span>
    //            </div>
    //            <div class="botao-card">
    //               <button id="botao-ver"  onclick="irPaginaDetalhes('${listaVeiculos[i].getid()}')" >VER</button>
    //               <button id="botao-deletar" onclick="deletarVeiculo('${listaVeiculos[i].getid()}')">DELETAR</button>
    //            </div>
    //       </div>
    //       `
    //  }
}
async function desenharGraficoPizza() {
    const teste = document.getElementById("pizza") as HTMLDivElement;
    const dadosProducao = await (window as any).productAPI.findAllGrafico();
    console.log(dadosProducao)
    let dados : any[] = []
    let legenda: string[] = []
    dadosProducao.forEach((valor: any) => {

        const item ={
            value: valor.quantidade,
            name: valor.modelo
        }
        legenda.push(valor.modelo)
        dados.push(item)
    })
    
    const chart = echarts.init(teste);
    const option = {
        title: { text: 'produção', x: 'center' },
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        legend: { orient: 'vertical', left: 'left', data: legenda },
        series: [{
            name: 'Vendas',
            type: 'pie', // Tipo de gráfico de pizza
            radius: ['35%', '75%'], // Donut (com buraco no meio)
            avoidLabelOverlap: false,
            label: { show: false, position: 'center' },
            labelLine: { show: false },
            data: dados
        }]
    };

    chart.setOption(option);
}

function deletarVeiculo(id: string){
     // CHAMA A FUNÇÃO DELETAR DO PRELOAD, NO CONTEXTO DE 'bancoAPI'
     (window as any).bancoAPI.deletarVeiculo(id);

     //FILTRA TODOS OD ITENS COM ID DIFERENTE DO ID QUE FOI POR PARAMETRO
     listaVeiculos = listaVeiculos.filter(veiculo => veiculo.getid() !== id);
     render()
     
}

function irPaginaDetalhes(id: string){
     (window as any).navigateAPI.irPaginaDetalhes(id);
}

document.getElementById("producao")?.addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();
    function irPaginaProducao() {
        (window as any).navigateAPI.irPaginaProducao();
    }
    irPaginaProducao()
});




(window as any).deletarVeiculo = deletarVeiculo;
(window as any).irPaginaDetalhes = irPaginaDetalhes;
