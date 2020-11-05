//функция прокрутки header
function getDownHeader() {
    //кнопка которая прокручивает header
    const btnDown = document.querySelector('.main-header_down');
    //блок до которого нужно прокрутить страницу
    const downBlock = document.querySelector('.information-mars');

    //вешаем обработчик на кнопку
    btnDown.addEventListener('click', ()=>downBlock.scrollIntoView({behavior: "smooth"}))
}
getDownHeader();
//----------------------------------------------------------


//переключение видимости статей в блоке survival-container
function visibleSurvivalArticles() {
    //родительский элемент кнопок
    const selectMain = document.querySelector('.survival-title');
    //кнопки
    const selectBtns = document.querySelectorAll('.survival-title>button');
    //абзацы
    const selectArticles = document.querySelectorAll('.survival-item');

    //вешаем обработчик на родителя всех кнопок
    selectMain.addEventListener('click', (event)=>{

        //проверяем что нажали на кнопку
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
            //берем данные из data атрибута кнопки на которую нажали и заносим в переменную
            let index = event.target.dataset.index;
            //делаем абзац порядковый номер которого равен кнопке по покоторой кликнули видимым
            setTimeout(()=> selectArticles[index].style.opacity = '1', 600);
        }
    });
}
visibleSurvivalArticles();
//-------------------------------------------------------------

//переключение видимости статей в блоке inside-life
function visibleInsideLifeArticles() {
    //кнопки
    const markerBtn = document.querySelectorAll('.marker_item_btn');

    //блоки статей
    const articles = document.querySelectorAll('.inside-life_preview-item');

    //перебираем все кнопки
    for (let i = 0; i < markerBtn.length; i++){

        //начальное состояние видимости для статей
        //все статьи невидимы
        articles[i].classList.add('invisible-articles');
        //первая статья видима
        articles[0].classList.remove('invisible-articles');

        //вешаем на все кнопки обработчики
        markerBtn[i].addEventListener('click', (event)=>{
            //вешаем data атрибут на кнопки
            markerBtn[i].dataset.index = i;
            //удаляем маркеры всем кнопккам
            markerBtn.forEach(elem => elem.classList.remove('marker_item_btn-focus'));
            //добавляем маркер кнопке но которой кликнули
            event.currentTarget.classList.add('marker_item_btn-focus');
            //деляем все статьи невидимыми
            articles.forEach(elem => elem.classList.add('invisible-articles'));
            //делаем статью порядковый номер в массиве которой соответсвует data-index кнопки по которой кликнули
            articles[event.currentTarget.dataset.index].classList.remove('invisible-articles')
        });
    }
}
visibleInsideLifeArticles();




