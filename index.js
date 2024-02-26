// const person = {
//   name: "Oleg",
//   age: 25,
//   maritalStatus: "single",
//   greet: function () {
//     console.log("Greet!!!");
//   },
// };

const person = new Object({
  name: "Oleg",
  age: 25,
  maritalStatus: "single",
  greet: function () {
    console.log("Greet!!!");
  },
});

Object.prototype.sayHi = function () {
  console.log("Hi" + " " + this.name);
};

const nastya = Object.create(person);
nastya.name = "Nastya";

const valya = Object.create(person);
valya.name = "Valya";

nastya.sayHi();
console.log(nastya.age);

valya.sayHi();

console.log(valya.hasOwnProperty("maritalStatus")); // перевіряє властивість об'єкту на чи вона особиста чи це властивість прототипу

// const frozenNastya = Object.freeze(nastya); // заморожує об'єкт від змін, метод працює тільки в одну сторону, скасувати дію неможливо

// console.log(Object.isFrozen(nastya));

// const forbitNasty = Object.seal(nastya); // забороняє додавати нові властивості, але можна змінювати існуючі

// console.log(Object.isSealed(nastya));
// nastya.hair = "black";

// console.log(nastya.hair); // underfind

// Object.preventExtensions(nastya);//предотвращает добавление новых свойств к объекту (то есть, предотвращает расширение этого объекта в будущем).

//Ще э купа методів
