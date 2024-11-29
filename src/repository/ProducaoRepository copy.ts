import { Client } from "pg";
import Producao from "../entity/Producao";

export default class ProducaoRepository {
    private connection: Client

    constructor() {
       if( !this.connection ){
         this.connection = new Client({
            host: 'localhost',
            port: 5432,
            database: 'sa_fabrica',
            user: 'postgres',
            password: 'senai'      
        })
       }
        
    }

    async save(producao: Producao){
        try {
            this.connection.connect()
            const sql = "INSERT INTO producao (id, modelo, chassi, cor, pecas, motor, pneu) VALUES ($1, $2, $3, $4, $5, $6, $7)";
            const values = [
                producao.getId(),
                producao.getModelo(),
                producao.getChassi(),
                producao.getCor(),
                producao.getPecas(),
                producao.getMotor(),
                producao.getPneu()
            ];
            await this.connection.query(sql, values);
        } catch (error) {
            console.log(error)
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }

    

}