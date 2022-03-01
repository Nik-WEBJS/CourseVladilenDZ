let ag = 20;
console.log(Number(ag), Boolean(ag), String(ag));

let strin = 'Fokin Nikita';
console.log(Number(strin), Boolean(strin), String(strin));

let booll = true;
console.log(Number(booll), Boolean(booll), String(booll));

let Nulll = null;
console.log(Number(Nulll), Boolean(Nulll), String(Nulll));

let undefinedd = undefined;
console.log(Number(undefinedd), Boolean(undefinedd), String(undefinedd));

let objects = {
    ag: 20,
    strin: 'Fokin Nikita',
};
console.log(Number(objects), Boolean(objects), String(objects));

let bigints = 20n;
console.log(Number(bigints), Boolean(bigints), String(bigints));

let symbols = Symbol('id');
console.log(/*Number(symbols),*/ Boolean(symbols), String(symbols));
