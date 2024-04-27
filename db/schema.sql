Drop database if exists mary;
Create database mary;

\c mary db;

create Table year(
    id serial primary key,
    year varchar(20) unique not null
);

create table  location (
    id serial primary key,
    location varchar(50) unique not null,
);

create table witnesses (
    id serial primary key,
    witnesses varchar(100) not null,
);
