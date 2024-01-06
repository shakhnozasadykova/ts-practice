import React from "react";

export const ObjectsPage = () => {
    let person = { name: "Иван", age: 25 };
    let car = { brand: "Ford", model: "Focus", year: 2018 };
    let book = { title: "Гарри Поттер", author: "Дж. К. Роулинг" };
    let smartphone = { brand: "Samsung", model: "Galaxy S10" };
    let computer = { brand: "Apple", model: "MacBook Pro" };
    let country = { name: "Россия", capital: "Москва" };
    let city = { name: "Санкт-Петербург", population: 5000000 };
    let movie = { title: "Титаник", director: "Джеймс Кэмерон" };
    let job = { title: "Программист", company: "Google" };
    let university = { name: "МГУ", city: "Москва" };
  
    return (
      <div>
        <p>Человек: {person.name}, {person.age} лет</p>
        <p>Автомобиль: {car.brand} {car.model}, {car.year} год выпуска</p>
        <p>Книга: "{book.title}", автор {book.author}</p>
        <p>Смартфон: {smartphone.brand} {smartphone.model}</p>
        <p>Компьютер: {computer.brand} {computer.model}</p>
        <p>Страна: {country.name}, столица {country.capital}</p>
        <p>Город: {city.name}, население {city.population}</p>
        <p>Фильм: "{movie.title}", режиссер {movie.director}</p>
        <p>Работа: {job.title} в компании {job.company}</p>
        <p>Университет: {university.name} в городе {university.city}</p>
      </div>
    );
  };
  
 
  