create database loja_node;
use loja_node;
create table produtos(
codigo int not null primary key auto_increment,
nome varchar(50) not null,
quantidade int null);
use loja_node;
insert into produtos (nome,quantidade)
values ("Laranja",500),
("Banana",1000);
select * from produtos;