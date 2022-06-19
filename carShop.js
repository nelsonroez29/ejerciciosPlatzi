/*
Hacer un script para crear de forma automatica 30 registros de carros con sus caracteristicas
empleando el uso de arrays, bucles y funcion constructura de objetos.
 */

//-------------------------------------------
// Estructura Base
//-------------------------------------------


//Funcion constructora

function Auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.description = function(){
        console.log(`El Auto es un ${this.marca} ${this.modelo} del ${this.annio}`)
    }

}

//Lista de marcas de Carros.

var marcas = [
    "Audi",
    "BMW",
    "Chevrolet",
    "Ferrari",
    "Ford",
    "Nissan",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Ferrari",
    "Ford",
    "Nissan",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Audi",
    "BMW",
    "Chevrolet",
    "Ferrari",
    "Ford",
    "Nissan",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Audi",
    "BMW",
    "Chevrolet",
];

//Lista de los modelos de estas marcas de Carros.

var modelos = [
    "A6 allroad quattro",
    "Serie 2 Gran Tourer",
    "Camaro",
    "California",
    "Mustang",
    "Murano",
    "Grand Vitara",
    "Model X",
    "Corolla",
    "Fox",
    "GTC4",
    "C-Max",
    "X-TRAIL",
    "Swift",
    "Model S",
    "Avensis",
    "Phaeton",
    "A4",
    "Serie 3",
    "Cruze",
    "488",
    "Fiesta",
    "QASHQAI",
    "SX4 S-Cross",
    "Model Y",
    "Land Cruiser",
    "Golf",
    "SQ7",
    "X1",
    "Aveo"
];

//Lista de los años de cada modelo anterior.

var annios = [
    "2021",
    "2022",
    "2010",
    "2015",
    "2020",
    "2007",
    "2012",
    "2018",
    "2020",
    "2014",
    "2017",
    "2015",
    "2016",
    "2014",
    "2021",
    "2017",
    "2016",
    "2015",
    "2016",
    "2015",
    "2016",
    "2016",
    "2014",
    "2013",
    "2017",
    "2018",
    "2016",
    "2020",
    "2022",
    "2015",

    
];

// Registro de Autos creados

listAutos = [];


//-------------------------------------------
// Versiones de Bucles
//-------------------------------------------


// Version 01 con for 01

for(var i = 0; i< marcas.length; i++){
    var newCar = new Auto(marcas[i], modelos[i],annios[i]);
    listAutos.push(newCar);
}


// Version 02 con for 01 Comprimido

for(var i = 0; i < marcas.length ; i++){
    listAutos.push(new Auto(marcas[i], modelos[i],annios[i]));
}


// Version 03 con for...of ...

for(marca of marcas){
    var modelo = modelos.shift();
    var annio = annios.shift();
    listAutos.push(new Auto(marca, modelo, annio));
}


// Version 04 con While tomando valores del primero al ultimo

while(marcas.length > 0){
    var marca = marcas.shift();
    var modelo = modelos.shift();
    var annio = annios.shift();
    listAutos.push(new Auto(marca, modelo,annio));

}


// Version 05 con While tomando valores del ultimo al primero

while(marcas.length > 0){
    var marca = marcas.pop();
    var modelo = modelos.pop();
    var annio = annios.pop();
    listAutos.push(new Auto(marca, modelo,annio));

}


//Zona de Pruebas

/*


//Funcion constructora

function Auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.description = function(){
        console.log(`El Auto es un ${this.marca} ${this.modelo} del ${this.annio}`)
    }

}

//Lista de marcas de Carros.

var marcas = [
    "Audi",
    "BMW",
    "Chevrolet",
    "Ferrari",
    "Ford",
    "Nissan",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Ferrari",
    "Ford",
    "Nissan",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Audi",
    "BMW",
    "Chevrolet",
    "Ferrari",
    "Ford",
    "Nissan",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Audi",
    "BMW",
    "Chevrolet",
];

//Lista de los modelos de estas marcas de Carros.

var modelos = [
    "A6 allroad quattro",
    "Serie 2 Gran Tourer",
    "Camaro",
    "California",
    "Mustang",
    "Murano",
    "Grand Vitara",
    "Model X",
    "Corolla",
    "Fox",
    "GTC4",
    "C-Max",
    "X-TRAIL",
    "Swift",
    "Model S",
    "Avensis",
    "Phaeton",
    "A4",
    "Serie 3",
    "Cruze",
    "488",
    "Fiesta",
    "QASHQAI",
    "SX4 S-Cross",
    "Model Y",
    "Land Cruiser",
    "Golf",
    "SQ7",
    "X1",
    "Aveo"
];

//Lista de los años de cada modelo anterior.

var annios = [
    "2021",
    "2022",
    "2010",
    "2015",
    "2020",
    "2007",
    "2012",
    "2018",
    "2020",
    "2014",
    "2017",
    "2015",
    "2016",
    "2014",
    "2021",
    "2017",
    "2016",
    "2015",
    "2016",
    "2015",
    "2016",
    "2016",
    "2014",
    "2013",
    "2017",
    "2018",
    "2016",
    "2020",
    "2022",
    "2015",

    
];

// Registro de Autos creados

listAutos = [];


// Bucle 03 (for 3 of)

for(marca of marcas){
    var modelo = modelos.shift()
    var annio = annios.shift()
    listAutos.push(new Auto(marca, modelo, annio));
}

 */