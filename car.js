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

document.addEventListener("DOMContentLoaded", () => {
  const turnsContainer = document.querySelector(".turns-container"); // Select the turns container

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
    gasElement.textContent = `Turn ${turn} Remaining Gas For ${
      car.Brand
    }: ${calculateGas(car.Year, car.Gas, turn)}`;
  }

  const cars = [car1, car2, car3, car4, car5, car6]; // Array of cars

  // Update gas remaining for each car after each turn
  for (let turn = 1; turn <= 7; turn++) {
    // Create a div element for the turn
    const turnElement = document.createElement("div");
    turnElement.textContent = `Turn ${turn}`;

    // Append the turn element to the turns container
    turnsContainer.appendChild(turnElement);

    // Update gas remaining for each car and append it to the turn element
    cars.forEach((car, index) => {
      const gasElement = document.createElement("p");
      gasElement.classList.add("remaining-gas");
      updateGasRemaining(car, gasElement, turn);
      turnElement.appendChild(gasElement);
    });
  }
});
