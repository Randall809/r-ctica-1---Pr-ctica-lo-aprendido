// Definición de la clase base Vehiculo
class Vehiculo {
    constructor(marca, modelo, año, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }

    descripcion() {
        return `${this.marca} ${this.modelo} del año ${this.año}, color ${this.color}`;
    }

    arrancar() {
        return `${this.marca} ${this.modelo} está arrancado.`;
    }

    detener() {
        return `${this.marca} ${this.modelo} está detenido.`;
    }
}

// Definición de la clase Coche que hereda de Vehiculo
class Coche extends Vehiculo {
    constructor(marca, modelo, año, color, numPuertas) {
        super(marca, modelo, año, color);
        this.numPuertas = numPuertas;
    }

    tocarBocina() {
        return `El coche ${this.marca} ${this.modelo} está tocando la bocina.`;
    }

    descripcion() {
        return `${super.descripcion()} con ${this.numPuertas} puertas.`;
    }
}

// Definición de la clase Moto que hereda de Vehiculo
class Moto extends Vehiculo {
    constructor(marca, modelo, año, color, tipo) {
        super(marca, modelo, año, color);
        this.tipo = tipo;
    }

    calibrar() {
        return `La moto ${this.marca} ${this.modelo} tipo ${this.tipo} ha sido calibrada.`;
    }

    descripcion() {
        return `${super.descripcion()} de tipo ${this.tipo}.`;
    }
}

// Creación de objetos
const coche1 = new Coche('Toyota', 'Corolla', 2020, 'Rojo', 4);
const coche2 = new Coche('Ford', 'Focus', 2019, 'Azul', 5);

const moto1 = new Moto('Yamaha', 'YZF-R3', 2021, 'Negro', 'Deportiva');
const moto2 = new Moto('Honda', 'CB500F', 2018, 'Blanco', 'Naked');

// Pruebas de los métodos
console.log(coche1.descripcion());
console.log(coche1.arrancar());
console.log(coche1.tocarBocina());
console.log(coche1.detener());

console.log(coche2.descripcion());
console.log(coche2.arrancar());
console.log(coche2.tocarBocina());
console.log(coche2.detener());

console.log(moto1.descripcion());
console.log(moto1.arrancar());
console.log(moto1.calibrar());
console.log(moto1.detener());

console.log(moto2.descripcion());
console.log(moto2.arrancar());
console.log(moto2.calibrar());
console.log(moto2.detener());
