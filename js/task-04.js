// const CounterValue = function ({
//   rootSelector,
//   initialValue = 0,
//   step = 1,
// } = {}) {
//   this._value = initialValue;
//   this._step = step;

//   this._refs = this._getRefs(rootSelector);

//   this._bindEvents();
// };

// CounterValue.prototype._getRefs = function (rootSelector) {
//   const refs = {};
//   refs.container = document.querySelector(rootSelector);
//   refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
//   refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
//   refs.value = refs.container.querySelector("#value");

//   return refs;
// };

// CounterValue.prototype._bindEvents = function () {
//   this._refs.decrementBtn.addEventListener("click", () => {
//     console.log('CounterValue.prototype._bindEvents -> this', this);
//     this.decrement();
//     this.updateValueUI();
//   });

//   this._refs.incrementBtn.addEventListener("click", () => {
//     console.log('CounterValue.prototype._bindEvents -> this', this);
//     this.increment();
//     this.updateValueUI();
//   });
// };

// CounterValue.prototype.updateValueUI = function (){
//     this._refs.value.textContent = this._value;
// }

// CounterValue.prototype.decrement = function () {
//   this._value -= this._step;
// };

// CounterValue.prototype.increment = function () {
//   this._value += this._step;
// };

// const counter = new CounterValue({ rootSelector: "#counter", step: 10 });

// console.log(counter);

// Реалізація завдання 4 дуже усладнена.
// Якщо маєте бажання - доцільніше переписати на клас + step має бути 1, а не 10.

const decrement = document.querySelector('[data-action="decrement"]');

const increment = document.querySelector('[data-action="increment"]');

const value = document.querySelector("#value");


let counterValue = 0;


function render() {
  value.textContent = counterValue.toString();
}

increment.addEventListener("click", () => {
  counterValue += 1;
  render();
});

decrement.addEventListener("click", () => {
  counterValue -= 1;
  render();
});

render();