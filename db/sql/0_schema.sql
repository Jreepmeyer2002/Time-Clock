DROP TABLE if EXISTS person;
DROP TABLE if EXISTS company;
DROP TABLE if EXISTS timeLog;

CREATE TABLE person (
    ID SERIAL PRIMARY KEY,
    fname VARCHAR(32),
    lname VARCHAR(32),
    username VARCHAR(32),
    companyID INT,
    password VARCHAR(32)
);

CREATE TABLE company (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(32),
    location VARCHAR(32)
);

CREATE TABLE timeLog (
    PERSON INT,
    COMPANY INT,
    date VARCHAR(32),
    clockOut VARCHAR(32)
);

