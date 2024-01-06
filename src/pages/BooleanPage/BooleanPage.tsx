import React from "react";

export const BooleanPage = () => {
    let isAvailable: boolean = true;
    let isComplete: boolean = false;
    let hasLicense: boolean = true;
    let isVerified: boolean = false;
    let isActive: boolean = true;
    let isMarried: boolean = false;
    let canDrive: boolean = true;
    let hasPets: boolean = false;
    let isEmployed: boolean = true;
    let isStudent: boolean = false;
  
    return (
      <div>
        <p>Доступен: {isAvailable ? 'Да' : 'Нет'}</p>
        <p>Завершено: {isComplete ? 'Да' : 'Нет'}</p>
        <p>Имеется лицензия: {hasLicense ? 'Да' : 'Нет'}</p>
        <p>Проверен: {isVerified ? 'Да' : 'Нет'}</p>
        <p>Активен: {isActive ? 'Да' : 'Нет'}</p>
        <p>Женат/Замужем: {isMarried ? 'Да' : 'Нет'}</p>
        <p>Может водить: {canDrive ? 'Да' : 'Нет'}</p>
        <p>Имеет домашних животных: {hasPets ? 'Да' : 'Нет'}</p>
        <p>Трудоустроен: {isEmployed ? 'Да' : 'Нет'}</p>
        <p>Студент: {isStudent ? 'Да' : 'Нет'}</p>
      </div>
    );
  };
  
  
  