import Producao from './entity/Producao';
import './producao.css';


document.getElementById("botao-cadastrar")?.addEventListener("click", async (event: MouseEvent) => {
    event.preventDefault();
  
   var modelo = document.getElementById("modelo") as HTMLInputElement;
   var chassi = document.getElementById("chassi") as HTMLInputElement;
   var cor = document.getElementById("cor") as HTMLInputElement;
   var pecas = document.getElementById("pecas") as HTMLInputElement;
   var motor = document.getElementById("motor") as HTMLInputElement;
   var pneu = document.getElementById("pneu") as HTMLInputElement;


   const producao= {
     modelo: modelo.value,
     chassi: chassi.value,
     cor: cor.value,
     pecas: pecas.value,
     motor: motor.value,
     pneu: pneu.value
     };


   (window as any).productAPI.createProduct(producao);
})

document.getElementById("botao-voltar").addEventListener("click", async(event: MouseEvent) => {
  event.preventDefault();
  (window as any).navigateAPI.irPaginaHome();
})

