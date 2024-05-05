Drop database if exists mary;
Create database mary;

\c mary

create Table apparition (
    year varchar(20) not null,
    location varchar(50) not null,
    witnesses varchar(100) not null
);

