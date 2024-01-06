import React from "react";

export const NumberPage = () => {
    let age: number = 30;
    let temperature: number = 23;
    let speed: number = 60;
    let height: number = 180;
    let weight: number = 75;
    let price: number = 1500;
    let distance: number = 100;
    let score: number = 85;
    let year: number = 2024;
    let quantity: number = 50;
  
    return (
      <div>
        <p>Возраст: {age}</p>
        <p>Температура: {temperature}</p>
        <p>Скорость: {speed}</p>
        <p>Рост: {height}</p>
        <p>Вес: {weight}</p>
        <p>Цена: {price}</p>
        <p>Дистанция: {distance}</p>
        <p>Очки: {score}</p>
        <p>Год: {year}</p>
        <p>Количество: {quantity}</p>
      </div>
    );
  };
  
 
  