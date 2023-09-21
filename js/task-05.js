 const nameInput = document.getElementById('name-input');
 const nameOutput = document.getElementById('name-output');

 const placeholder = (event) => {
    nameOutput.textContent = nameInput.value !== '' ? event.currentTarget.value : 'Anonymus';
 };
//Властивість GamepadButton.value інтерфейсу GamepadButton повертає стан аналогової клавіші геймпада, такий, як, наприклад, тригери.
//Є дробовим числом в діапазоні 0.0 - 1.0, де 0.0 показує, що кнопка не натиснута, а 1.0 - що натиснута повністю.
 nameInput.addEventListener('input', placeholder);