var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});

// Получаем элементы
var modal = document.getElementById("myModal");
var btn = document.querySelector(".todiscbutn");
var span = document.getElementsByClassName("close")[0];

// При нажатии на кнопку, показываем модальное окно
btn.onclick = function() {
 modal.style.display = "block";
}

// При нажатии на <span> (x), скрываем модальное окно
span.onclick = function() {
 modal.style.display = "none";
}

// При нажатии в любом месте за пределами модального окна, скрываем его
window.onclick = function(event) {
 if (event.target == modal) {
    modal.style.display = "none";
 }
}
function toggleMenu() {
  console.log("okay");
  var nav = document.querySelector('nav');
  if (nav.style.display === "none") {
      nav.style.display = "block";
      header.style.position = "fixed";
  } else {
      nav.style.display = "none";
      header.style.position = "absolute";
  }
}
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('myForm');
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var number = document.getElementById('number');
 
  form.addEventListener('submit', function(event) {
       // Предотвращаем отправку формы до проверки всех полей
       event.preventDefault();
 
       // Проверка имени
       if (name.value === '') {
           alert('Пожалуйста, введите ваше имя.');
           return; // Прекращаем выполнение функции, если имя не введено
       }
 
       // Проверка электронной почты
       var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
       if (!emailRegex.test(email.value)) {
           alert('Пожалуйста, введите корректный адрес электронной почты.');
           return; // Прекращаем выполнение функции, если электронная почта некорректна
       }
 
       // Проверка номера телефона
       var numberRegex = /^\+?[0-9]{10,15}$/;
       if (!numberRegex.test(number.value)) {
           alert('Пожалуйста, введите корректный номер телефона.');
           return; // Прекращаем выполнение функции, если номер телефона некорректен
       }
 
       // Если все проверки прошли успешно, форма может быть отправлена
       // Генерируем уникальный номер заявки
       var requestNumber = Math.floor(Math.random() * 1000000) + 1;
 
       // Создаем элемент для сообщения
       var message = document.createElement('div');
       message.textContent = 'Ваша заявка с номером ' + requestNumber + ' успешно принята.';
       message.style.color = '#BABABA'; // Цвет текста сообщения
       message.style.fontSize = '20px'; // Размер шрифта сообщения
       message.style.padding = '10px'; // Отступы вокруг сообщения
       message.style.marginTop = '20px'; // Отступ сверху сообщения
 
       // Добавляем сообщение в модальное окно
       var modalContent = document.querySelector('.modal-content');
       modalContent.appendChild(message);
 
       // Очищаем поля формы
       form.reset();
 
       // Закрываем модальное окно через 3 секунды
       setTimeout(function() {
           document.getElementById('myModal').style.display = 'none';
       }, 3000);
  });
 });
 
function mainbutfunc(text){
    window.scrollTo(0, 0);
    // Создаем модальное окно и добавляем стили
    var modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.width = '50%';
    modal.style.textAlign = 'center';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#fff';
    modal.style.padding = '20px';
    modal.style.borderRadius = '4px';
    modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    modal.style.zIndex = '1000';
  
    // Создаем текстовый узел с переданным текстом
    var textNode = document.createTextNode(text);
    modal.appendChild(textNode);
  
    // Добавляем модальное окно в DOM
    document.body.appendChild(modal);
  
    // Создаем затемненный фон и добавляем стили
    var backdrop = document.createElement('div');
    backdrop.style.position = 'fixed';
    backdrop.style.top = '0';
    backdrop.style.left = '0';
    backdrop.style.width = '100%';
    backdrop.style.height = '100%';
    backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    backdrop.style.zIndex = '999';
  
    // Добавляем затемненный фон в DOM
    document.body.appendChild(backdrop);
  
    // Удаляем модальное окно и затемненный фон по клику
    backdrop.addEventListener('click', function() {
        document.body.removeChild(modal);
        document.body.removeChild(backdrop);
    });
}

function langfunc(text) {
  var modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = '#fff';
  modal.style.padding = '20px';
  modal.style.borderRadius = '4px';
  modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  modal.style.zIndex = '1000';

  var textNode = document.createTextNode(text);
  modal.appendChild(textNode);

  document.body.appendChild(modal);

  var backdrop = document.createElement('div');
  backdrop.style.position = 'fixed';
  backdrop.style.top = '0';
  backdrop.style.left = '0';
  backdrop.style.width = '100%';
  backdrop.style.height = '100%';
  backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  backdrop.style.zIndex = '999';

  document.body.appendChild(backdrop);

  backdrop.addEventListener('click', function() {
      document.body.removeChild(modal);
      document.body.removeChild(backdrop);
  });
}


