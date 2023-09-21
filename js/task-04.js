let counterValue = 0; // =0
const valueRef = document.getElementById('value'); // id(span)
const decrementBtn = document.querySelector('[data-action="decrement"]') // -1
//data-* атрибути дозволяють зберігати додаткову інформацію у стандартних елементах HTML.
//Синтаксис простий - будь-який атрибут, ім'я якого починається з data-, є data-* атрибутом.
const incrementBtn = document.querySelector('[data-action= "increment"]') // +1

const onClickDecrementBtn = (event) => { //Метод EventTarget.addEventListener() реєструє певний обробник події, викликаної на EventTarget.
    counterValue -= 1;                       //Listener(параметр) - oб'єкт, який приймає повідомлення, коли подія вказаного типу відбулася. 
    valueRef.textContent = counterValue;     //Це має бути об'єкт, який реалізує інтерфейс EventListener або просто функцію JavaScript.
}; //Метод addEventListener() інтерфейсу EventTarget встановлює функцію, яка буде викликатися щоразу, коли зазначена подія доставляється в ціль.
    //Оброблювач подій може бути заданий або як колбек-функція, або як об'єкт, що реалізує EventListener.
const onClickIncrementBtn = (event) => { //EventTarget – це інтерфейс, що реалізується об'єктами, 
    counterValue += 1;                       //які можуть генерувати події та можуть мати підписників на ці події.
    valueRef.textContent = counterValue;
};

decrementBtn.addEventListener('click', onClickDecrementBtn);
incrementBtn.addEventListener('click', onClickIncrementBtn);