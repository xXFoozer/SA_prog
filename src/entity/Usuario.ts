import{v4 as uuid }from 'uuid';


export default class Usuario{
    private id: number
    private name: string
    private email: string
    private password: string
    private endereco:string
    private cpf:string
    private telefone:string


    constructor( name:string, email: string, password: string, endereco: string,cpf: string, telefone:string){
        this.id = Math.floor(Math.random() * 10000); // Gera um número entre 0 e 10000
        this.name= name;
        this.email= email;
        this.endereco= endereco;
        this.cpf= cpf;
        this.telefone = telefone
       this.password = password;
    }


    public getId(){
        return this.id;
    }

    public getName(){
        return this.name;
    }

    public getEmail() {
        return this.email;
    }

    public getPassword(){
        return this.password;
    }

    public getEndereco(){
        return this.endereco;
    }

    public getCpf() {
        return this.cpf;
    }

    public getTelefone() {
        return this.telefone;
    }
}