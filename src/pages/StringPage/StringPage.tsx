import React from "react";

export const StringPage = () => {
    let city: string = "New York";
    let bookTitle: string = "Mahabharata";
    let carModel: string = "Porsche";
    let movieName: string = "Pulp fiction";
    let Artist: string = "Giotto";
    let Director: string = "Квентин Тарантино";
    let language: string = "English";
    let hobby: string = "Фотография";
    let interest: string = "Philosophy";
    let songTitle: string = "Калифорния";
 
  
    return (
      <div>
        <p>Город: {city}</p>
        <p>Название книги: {bookTitle}</p>
        <p>Модель машины: {carModel}</p>
        <p>Название фильма: {movieName}</p>
        <p>Художник: {Artist}</p>
        <p>Режиссер: {Director}</p>
        <p>Язык: {language}</p>
        <p>Хобби: {hobby}</p>
        <p>Интерес: {interest}</p>
        <p>Название песни: {songTitle}</p>
      </div>
    );
  };