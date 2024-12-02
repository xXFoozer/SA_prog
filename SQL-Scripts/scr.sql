CREATE DATABASE sa_fabrica

CREATE TABLE producao(
	id SERIAL PRIMARY KEY,
	modelo VARCHAR(100)NOT NULL,
	chassi VARCHAR(100)NOT NULL,
	cor VARCHAR(70)NOT NULL,
	pecas VARCHAR(100)NOT NULL,
	motor VARCHAR(100)NOT NULL,
	pneu VARCHAR(85)NOT NULL
)
create table estoque (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(200)NOT NULL,
	quantidade INTEGER NOT NULL,
	descricao VARCHAR(300),
	fornecedor VARCHAR(200)NOT NULL,
	kit_pneu INTEGER,
	producao_id INTEGER,
	FOREIGN KEY (producao_id) REFERENCES producao(id)
)

CREATE TABLE usuario(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(100)NOT NULL,
	email VARCHAR(200)NOT NULL,
	endereco VARCHAR(250)NOT NULL,
	cpf VARCHAR (50)NOT NULL UNIQUE,
	telefone VARCHAR(60)NOT NULL UNIQUE
)

create table qualidade(
	id serial primary key,
	producao_id integer not null,
	pneus varchar(100),
	lataria varchar(250),
	motor varchar(300),
	portas varchar(100),
	interior varchar(250),
	farois varchar(200),
	FOREIGN KEY (producao_id) REFERENCES producao(id)
)

insert into producao(modelo,chassi,cor,pecas,motor,pneu)values ('UNO','55ABC22','BRANCA','NOVAS','1.0TURBO','PIRELLI');
insert into producao(modelo,chassi,cor,pecas,motor,pneu)values ('CORSA','45DBD55','AZUL','REULTILIZADA','1.5 TURBO','PIRELLI');
insert into producao(modelo,chassi,cor,pecas,motor,pneu)values ('MOBI','57BAD52','VERMELHO','NOVAS','1.0','PIRELLI')

insert into estoque(nome,quantidade,descricao,fornecedor,kit_pneu,producao_id)VALUES ('rolamento','15','rolamento gasto','comparts','5','2')
insert into estoque(nome,quantidade,descricao,fornecedor,kit_pneu,producao_id)VALUES ('bico de vela','8','bico de vela gol quadrado','corema','0',default)


insert into qualidade(producao_id,pneus,lataria,motor,portas,interior,farois)values('2','bom estado','amassada e enferrujada','motor recuperado','portas de outra cor','ruim','queimados')