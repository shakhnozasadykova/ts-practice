import React from "react";

interface Person {
  name: string;
  age: number;
}

interface Car {
  brand: string;
  model: string;
  year: number;
}

interface Book {
  title: string;
  author: string;
  isAvailable: boolean;
}

interface Job {
    title: string;
    company: string;
}

interface University {
    name: string;
    city: string;

}

interface Device {
    type: string;
    model: string;
    brand: string;
}
  
interface City {
    name: string;
    country: string;
    population: number;
}
  
interface Movie {
    title: string;
    director: string;
    releaseYear: number;
}
  
interface Course {
    name: string;
    fieldOfStudy: string;
    durationInWeeks: number;
}
  
interface Animal {
    species: string;
    name: string;
    age: number;
}

export const ObjectsPage = () => {
  const person: Person = {
    name: "Shakhnoza",
    age: 23
  };

  const car: Car = {
    brand: "Porsche",
    model: "Cayman",
    year: 2018
  };

  const book: Book = {
    title: "10 меченосцев",
    author: "Эйдзи Ёсикава",
    isAvailable: true
  };

  const job: Job = {
    title: "Programmer",
    company: "Google"
  }

  const university: University = {
    name: "UWED",
    city: "Tashkent"
  }

  const device: Device = {
    type: "Smartphone",
    model: "Galaxy S21",
    brand: "Samsung"
  };

  const city: City = {
    name: "Токио",
    country: "Япония",
    population: 13960000
  };

  const movie: Movie = {
    title: "Властелин колец: Братство кольца",
    director: "Питер Джексон",
    releaseYear: 2001
  };

  const course: Course = {
    name: "Введение в TypeScript",
    fieldOfStudy: "Программирование",
    durationInWeeks: 5
  };

  const animal: Animal = {
    species: "Кошка",
    name: "Мурка",
    age: 3
  };

  return (
    <div>
      <p>Имя: {person.name}, возраст: {person.age}</p>
      <p>Бренд Автомобиля: {car.brand}, Модель автомобиля: {car.model}, Год: {car.year}</p>
      <p>Название книги: {book.title}, автор: {book.author} наличие: {book.isAvailable}</p>
      <p>Работа: {job.title}, компания: {job.company}</p>
      <p>Университет: {university.name}, город: {university.city}</p>
      <p>Устройство: {device.brand} {device.model} ({device.type})</p>
      <p>Город: {city.name}, {city.country}, население {city.population}</p>
      <p>Фильм: "{movie.title}", режиссер {movie.director}, год выпуска {movie.releaseYear}</p>
      <p>Курс: {course.name} по специальности {course.fieldOfStudy}, продолжительность {course.durationInWeeks} недель</p>
      <p>Животное: {animal.species}, кличка {animal.name}, возраст {animal.age}</p>
    </div>
  );
};


