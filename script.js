// Створення масиву vehicles з об'єктами транспортних засобів
const vehicle1 = {
    model: "Toyota Camry",
    type: "Легковий автомобіль",
    year: 2019,
    isOperational: true,
  };
  
  const vehicle2 = {
    model: "Ford Transit",
    type: "Вантажівка",
    year: 2015,
    isOperational: false,
  };
  
  const vehicle3 = {
    model: "Honda CR-V",
    type: "Кросовер",
    year: 2021,
    isOperational: true,
  };
  
  const vehicle4 = {
    model: "Volkswagen Golf",
    type: "Хетчбек",
    year: 2018,
    isOperational: true,
  };
  
  const vehicle5 = {
    model: "Mercedes-Benz Sprinter",
    type: "Мікроавтобус",
    year: 2020,
    isOperational: true,
  };
  
  // Створення масиву vehicles
  const vehicles = [vehicle1, vehicle2, vehicle3, vehicle4, vehicle5];
  
// Виведення інформації про всі транспортні засоби
console.log("Всі транспортні засоби:");
for (let i = 0; i < vehicles.length; i++) {
    console.log(`Модель: ${vehicles[i].model}, Тип: ${vehicles[i].type}, Рік випуску: ${vehicles[i].year}, Робочий стан: ${vehicles[i].isOperational}`);
}

// Виведення інформації про транспортні засоби, які є у робочому стані
console.log("\Транспортні засоби у робочому стані:");
for (let i = 0; i < vehicles.length; i++) {
    if (vehicles[i].isOperational) {
        console.log(`Модель: ${vehicles[i].model}, Тип: ${vehicles[i].type}, Рік випуску: ${vehicles[i].year}, Робочий стан: ${vehicles[i].isOperational}`);
    }
}
