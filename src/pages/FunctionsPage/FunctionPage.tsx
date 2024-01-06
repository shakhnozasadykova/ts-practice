import React from "react";

export const FunctionPage = () => {
    // 1. Функция для сложения двух чисел
function sum(a: number, b: number): number {
    return a + b;
  }
  
  // 2. Функция для умножения двух чисел
  function multiply(a: number, b: number): number {
    return a * b;
  }
  
  // 3. Функция для проверки, является ли число чётным
  function isEven(num: number): boolean {
    return num % 2 === 0;
  }
  
  // 4. Функция для капитализации строки
  function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // 5. Функция для переворачивания массива
  function reverseArray<T>(arr: T[]): T[] {
    return arr.slice().reverse();
  }
  
  // 6. Функция для нахождения максимального значения в массиве чисел
  function findMax(numbers: number[]): number {
    return Math.max(...numbers);
  }
  
  // 7. Функция для фильтрации массива значений, возвращающая только строки
  function filterStrings(arr: any[]): string[] {
    return arr.filter(item => typeof item === 'string');
  }
  
  // 8. Функция для расчёта среднего значения массива чисел
  function calculateAverage(numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0) / numbers.length;
  }
  
  // 9. Функция для получения уникальных значений из массива
  function getUniqueValues<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
  }
  
  // 10. Функция для форматирования даты в строку "день.месяц.год"
  function formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() возвращает 0-11
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }

  
}