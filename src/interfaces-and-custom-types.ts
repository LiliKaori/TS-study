type Coordinate = {
    x: number;
    y: number;
}

const coodinate: Coordinate = {
    x: 20,
    y: 8,
}

function calculateDistance(pointA: Coordinate, pointB: Coordinate): number {
    const dx = pointB.x - pointA.x;
    const dy = pointB.y - pointA.y;

    const result = Math.sqrt(dx * dx + dy * dy)

    return result
}

const coordinateA: Coordinate = {
    x: 10,
    y: 8,
}

const coordinateB: Coordinate = {
    x: 12,
    y: 6,
}

// console.log(calculateDistance(coordinateA, coordinateB))

//interface - é como um contrato do que tem que ser feito
interface Car {
    brand: string;
    model: string;
    year: number;
    startEngine: () => void;
}

const myCar: Car = {
    brand: 'Audi',
    model: 'A3',
    year: 2023,
    startEngine: ()=>{
        console.log('Engine started!')
    }
}

function drive (car: Car): void{
    console.log(`Driving ${car.brand} - ${car.model}`)
    car.startEngine()
}

drive(myCar)
