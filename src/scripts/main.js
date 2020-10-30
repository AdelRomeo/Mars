//функция прокрутки header
(function getDownHeader() {
    //кнопка которая прокручивает header
    const btnDown = document.querySelector('.main-header_down');
    const downBlock = document.querySelector('.information-mars');

    //вешаем обработчик на кнопку
    btnDown.addEventListener('click', ()=>downBlock.scrollIntoView({behavior: "smooth"}))
})();

const selectBtns = document.querySelectorAll('.survival-title>button'); //кнопки
const selectMain = document.querySelector('.survival-title'); //родительский элемент кнопок
const selectArticles = document.querySelectorAll('.survival-item'); //абзацы

//вешаем обработчик на родителя всех кнопок
selectMain.addEventListener('click', (event)=>{

    //проверяем на что нажали
    if (event.target.tagName === 'BUTTON'){

        //перебираем все кнопки
        for (let i = 0; i < selectBtns.length; i++){

            //добавляем кнопкам data атрибут
            selectBtns[i].dataset.index = i;

            //делаем полупрозрачными все кнопки
            selectBtns[i].style.opacity = '0.5';
            //делаем прозрачными все абзацы
            selectArticles[i].style.opacity = '0';
        }

        //делаем кнопку на которую нажали более яркой
        event.target.style.opacity = '1';

        //берем данные из data атрибута кнопки на которую нажали.
        let index = event.target.dataset.index;

        //делаем абзац порядковый номер которого равен кнопке по покоторой кликнули видимым
        setTimeout(()=> selectArticles[index].style.opacity = '1', 600);
    }
});