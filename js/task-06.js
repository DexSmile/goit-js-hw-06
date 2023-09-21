const inputRef = document.getElementById('validation-input');
inputRef.addEventListener('blur', onBlurBorderColor); //Подія blur(розмиття) спрацьовує, коли елемент втрачає фокус. 
//Подія не спливає, але відповідна подія фокусування, яка слідує за нею, спливає.
function onBlurBorderColor (event) { //Властивість dataset, доступна тільки для читання, 
//інтерфейсу HTMLElement забезпечує доступ для читання та запису до атрибутів даних (data-*) в елементах. 
    const inputDataLength = Number(inputRef.dataset.length);//Він надає карту рядків (DOMStringMap) із записом для кожного атрибуту data-*.
    const inputValueLength = Number(inputRef.value.trim().length); //Метод trim() видаляє проблемні символи з початку та кінця рядка. 
//Проблемними символами в цьому контексті вважаються всі власне пробілові символи (пробіл, табуляція, нерозривний пробіл та інші).
//Метод trim() повертає рядок з вирізаними пробілами з її кінців. Метод trim() не змінює значення самого рядка.
    if (inputValueLength === inputDataLength) {//CSS псевдоклас :valid знаходить будь-які <input> або <form> елементи,
        inputRef.classList.add('valid'); //контент яких валідний (en-US), відповідно до типу поля. Він дозволяє легко змінювати 
        inputRef.classList.remove('invalid');//зовнішній вигляд полів, що допомагає зрозуміти користувачеві, що він ввів дані правильно.
    } else { //CSS псевдоклас :invalid - він дозволяє вам легко змінювати зовнішній вигляд полів, 
        inputRef.classList.remove('valid'); //що дозволяє користувачеві бачити та виправляти помилки.
        inputRef.classList.add('invalid');
    }
}
