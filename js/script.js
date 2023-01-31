// 1. инициализируем анимаию AOS  
AOS.init();



// 2. отображение кнопки "прокрутка наверх страницы" и функция прокрутки
const btnUp = document.querySelector('#btnUp');
btnUp.addEventListener('click', () => {
    if (window.scrollY !== 0) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };
});


// массив из двух событий, подслушка window на три события - одна функция
// при загрузке экрана
// при скролле
// при изменении размеров. Например, переход из моб.версии в десктопную

const intro = document.querySelector('.greetingPage');
let introHeight = intro.clientHeight;
let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

checkScroll(introHeight, scrollPosition);
["scroll", "resize"].forEach(function (e) {
    window.addEventListener(e, function () {
        introHeight = intro.clientHeight;
        scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        checkScroll(introHeight, scrollPosition);
    });
});

function checkScroll(introHeight, scrollPosition) {
    if (scrollPosition > introHeight) {
        btnUp.style.display = 'flex';
    } else {
        btnUp.style.display = 'none';
    };
};


// 3. если пользователь кликнул на отправку формы, при переходе со страницы форма будет очищена
const btnSubmit = document.querySelector('#btn');
btnSubmit.addEventListener('click', () => {
    window.addEventListener('unload', () => {
        resetForm();
    })
});

//функция очистки полей
function resetForm() {
    document.querySelector('.formStyle').reset();
};

gsap.to('.mainHeader', {
    text: 'ШАЛÉ',
    duration: 2.5,
    stagger: .5,
    ease: 'power1'
});

gsap.from('.bottomText', {
    opacity: 0,
    duration: 1,
    delay: 2,
    y: 20,
    ease: 'SlowMo'
});


// 4. увеличиваем картинку меню по клику, если экран больше 500px
// создаем модальное окно
const modal = document.createElement('div');
modal.classList.add('modalProperties');
document.body.appendChild(modal);
// привязываем к нему картинку без пути
let scalePic = document.createElement('img');
scalePic.classList.add('scalePicStartStyle');
modal.appendChild(scalePic);


const gallery = document.querySelectorAll('.gallery');
const picGallery = document.querySelectorAll('.picGallery');
picGallery.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth > 500) {
            // добавляем путь выбранной картинки в модальное окно и отображаем его
            scalePic.src = item.querySelector('.imageGallery').src;
            modal.style.display = 'flex';
            setTimeout(() => {
                scalePic.classList.add('scalePicEndtyle');
            }, 0);
            // при клике на модальное окно, снимаем стиль и скрываем окно
            modal.addEventListener('click', hideModal);
        };
    });
}); 


function hideModal() {
    modal.style.display = 'none';
    scalePic.classList.remove('scalePicEndtyle');
};