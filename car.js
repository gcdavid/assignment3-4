class Car {
  constructor(Brand, Model, Year, Color, Price, Gas) {
    this.Brand = Brand;
    this.Model = Model;
    this.Year = Year;
    this.Color = Color;
    this.Price = Price;
    this.Gas = Gas;
  }

  Honk() {
    return "Tuut tuut";
  }
}

const car1 = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
const car2 = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
const car3 = new Car("BMW", "X5", 2022, "Green", 60000, 65);
const car4 = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
const car5 = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
const car6 = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);

car1.Honk();
car2.Honk();
car3.Honk();
car4.Honk();
car5.Honk();
car6.Honk();

document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();
  const minimumGasLost = 5;

  function calculateGas(builtYear, gas, turn) {
    const gasLossThisTurn =
      builtYear == currentYear
        ? minimumGasLost
        : minimumGasLost + (currentYear - builtYear);
    let remainingGas = gas - turn * gasLossThisTurn;
    return remainingGas < 0 ? 0 : remainingGas;
  }

  function updateGasRemaining(car, gasElement, turn) {
    gasElement.innerHTML = `Remaining Gas For ${car.Brand}: ${calculateGas(
      car.Year,
      car.Gas,
      turn
    )}`;
  }

  const mazdaGas = document.getElementById("mazda-gas");
  const hondaGas = document.getElementById("honda-gas");
  const fordGas = document.getElementById("ford-gas");
  const bmwGas = document.getElementById("bmw-gas");
  const audiGas = document.getElementById("audi-gas");
  const kiaGas = document.getElementById("kia-gas");

  // Invoke the honk method for each car
  car1.Honk();
  car2.Honk();
  car3.Honk();
  car4.Honk();
  car5.Honk();
  car6.Honk();

  // Update gas remaining for each car after each turn
  for (let turn = 1; turn <= 7; turn++) {
    updateGasRemaining(car1, hondaGas, turn);
    updateGasRemaining(car2, fordGas, turn);
    updateGasRemaining(car3, bmwGas, turn);
    updateGasRemaining(car4, mazdaGas, turn);
    updateGasRemaining(car5, audiGas, turn);
    updateGasRemaining(car6, kiaGas, turn);
  }
});
