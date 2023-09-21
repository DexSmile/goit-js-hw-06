const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', submitHandler); //submit - обробник події відправлення форми.
const profile = {};

function submitHandler(event) {
    event.preventDefault();
//Метод preventDefault () інтерфейсу Event повідомляє User agent, що якщо подія не обробляється явно, 
//її стандартна дія не повинна виконуватися так, як зазвичай. Подія продовжує розповсюджуватися як завжди, до тих пір, 
//поки один з її обробників не викликає методи stopPropagation () або stopImmediatePropagation (), 
//будь-який з яких відразу ж припиняє поширення. наприклад, події, відправленої через EventTarget.dispatchEvent(), 
//без вказівки cancelable: true не має ефекту.
    const email = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;

    if(email.value === '' || password.value === '') {
        alert('Pleas fill in all the fields!');
    } else {
        profile.email = email.value;
        profile.password = password.value;

        console.log(profile);
    }
    event.currentTarget.reset(); //Метод HTMLFormElement.reset() відновлює стандартні значення для всіх елементів форми. 
}                                   //Даний метод виконує ідентичне натискання кнопки має тип reset.
