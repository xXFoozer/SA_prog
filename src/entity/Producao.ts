
export default class Producao{
    private id: number
    private modelo: string
    private chassi: string
    private cor: string
    private pecas:string
    private motor:string
    private pneu:string


    constructor( modelo:string, chassi: string, cor: string, pecas: string, motor: string, pneu:string){
        this.id = Math.floor(Math.random() * 10000); // Gera um número entre 0 e 10000
        this.modelo= modelo;
        this.chassi= chassi;
        this.cor = cor;
        this.pecas= pecas;
        this.motor= motor;
        this.pneu = pneu
    }


    public getId(){
        return this.id;
    }

    public getModelo(){
        return this.modelo;
    }

    public getChassi() {
        return this.chassi;
    }

    public getCor(){
        return this.cor;
    }

    public getPecas(){
        return this.pecas;
    }

    public getMotor() {
        return this.motor;
    }

    public getPneu() {
        return this.pneu;
    }
}