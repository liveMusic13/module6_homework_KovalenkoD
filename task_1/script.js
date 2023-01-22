'use strict';


// В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
// На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.


let randomArray = [3, 2, 3, 1, null];

function checkingElements(mas) {
  let evenItems = 0;
  let unEvenItems = 0;

  mas.forEach(function (item) {
    if (item === null) {
      console.log(null);
    } else if (item % 2 === 0) {
      evenItems++;
    } else {
      unEvenItems++;
    }
  });
  console.log(evenItems);
  console.log(unEvenItems);
}

checkingElements(randomArray);

