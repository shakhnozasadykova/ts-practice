import React from "react";

export const MassivePage = () => {
    let numbers: number[] = [1, 2, 3, 4, 5];
    let names: string[] = ["Тарантино", "Фон Триер", "Линч", "Кубрик"];
    let booleans: boolean[] = [true, false, true, false];
    let cities: string[] = ["Нью-Йорк", "Рим", "Лондон", "Париж"];
    let cars: string[] = ["Toyota", "Ford", "BMW", "Audi"];
    let fruits: string[] = ["Яблоко", "Банан", "Груша", "Апельсин"];
    let temperatures: number[] = [20, 22, 19, 25];
    let languages: string[] = ["Русский", "Английский", "Испанский", "Французский"];
    let grades: number[] = [4, 5, 3, 4, 5];
    let hobbies: string[] = ["Чтение", "Плавание", "Рисование", "Фотография"];
  
    
    const renderMassive = (array: Array<any>, title: string) => (
      <div>
        <strong>{title}:</strong>
        <ul>{array.map((item, index) => <li key={index}>{item.toString()}</li>)}</ul>
      </div>
    );
  
    return (
      <div>
        {renderMassive(numbers, "Числа")}
        {renderMassive(names, "Имена")}
        {renderMassive(booleans, "Булевые значения")}
        {renderMassive(cities, "Города")}
        {renderMassive(cars, "Автомобили")}
        {renderMassive(fruits, "Фрукты")}
        {renderMassive(temperatures, "Температуры")}
        {renderMassive(languages, "Языки")}
        {renderMassive(grades, "Оценки")}
        {renderMassive(hobbies, "Хобби")}
      </div>
    );
  };
  

  