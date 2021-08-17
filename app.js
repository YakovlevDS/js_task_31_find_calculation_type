
// *? Task:Вам нужно создать функцию findCalculationType, которая принимает 3 аргумента: 2 числа и результат выполненной с ними неизвестной операции (также число).

// На основе этих трех значений вы должны вернуть строку, описывающую, какая операция была использована для получения данного результата.

// Возможные возвращаемые строки: addition, subtraction, multiplication, division.

// Example:

// findCalculationType(1, 2, 3) -->   1 ? 2 = 3   --> "addition"
// Примечания:

// В случае деления следует ожидать, что результат операции будет получен с помощью оператора / ручное преобразование типов данных или округление не требуется.
// В функцию будут переданы только валидные аргументы.
// Значения, которые приходят в параметрах, предусматривают только одну возможную операцию для достижения результата.

// Solution 1

function findCalculationType(a, b, res) {
  if (a / b === res) {
    return 'devision';
  };

  if (a * b === res) {
    return 'multiplication';
  };

  if (a - b === res) {
    return 'subtraction';
  };

  if (a + b === res) {
    return 'addition';
  };

  return 'error';
};

console.log(findCalculationType(20, 10, 30));
console.log(findCalculationType(20, 10, 2));
console.log(findCalculationType(20, 10, 200));
console.log(findCalculationType(20, 10, 10));
console.log(findCalculationType(28, 10, 10));
// ! Explanation: Used if