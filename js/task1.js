// // # Завдання 1

// // Напиши функцію `countProps(obj)`, яка рахує кількість властивостей в об'єкті.
// // Функція повертає число - кількість властивостей.

// const countProps = function (obj) {
//     // твій код
//   };
  
//   /*
//    * Викличи функції для перевірки працездатності твоєї реалізації.
//    */
//   console.log(countProps({})); // 0
  
//   console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
//   console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3


function countProps(obj) {
    let propCount = 0;
    for (const key in obj) {
      propCount++;
    }
    return propCount;
  }
  
  
  console.log(countProps({})); 
  
  console.log(countProps({ name: 'Mango', age: 2 })); 
  
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); 
  