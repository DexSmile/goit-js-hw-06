const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
]; 

const gallery = document.querySelector('.gallery');
//Функція - це JS об'єкт спціального типу, в котрому ми можемо реалізувати логіку і перевикористовувати її з допомогою повторних визовів функцій.
  const galleryItems = ({url, alt}) => //Callback function — це функція, яка передається в іншу функцію як аргумент, 
  //який потім викликається всередині зовнішньої функції для виконання будь-якої процедури або дії.
  `<li><img src = "${url}" alt = "${alt}" width = 300 height = auto></li>`;
  const galleryMarkup = images.reduce( //Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву
    (acc, item) => acc + galleryItems(item), [] //із збереженням проміжного результату, як акумулятор.
  ); //Тобто метод reduce() використовується, коли необхідно взяти «багато» і привести до «одного».

  gallery.insertAdjacentHTML('afterbegin', galleryMarkup); ////Метод InsertAdjacentHTML() інтерфейсу Element аналізує вказаний текст як 
   //HTML або XML і вставляє отримані вузли в дерево DOM у вказану позицію.