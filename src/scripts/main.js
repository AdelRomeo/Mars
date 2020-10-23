const selectBtns = document.querySelectorAll('.survival-title>button'); //кнопки
const selectMain = document.querySelector('.survival-title'); //родительский элемент кнопок
const selectArticles = document.querySelectorAll('.survival-item'); //абзацы

//вешаем обработчик на родителя всех кнопок
selectMain.addEventListener('click', (e)=>{
    //перебераем все кнопки
    for (let i=0; i < selectBtns.length; i++){
        // если нажата любая из кнопок
        if (e.target === selectBtns[i]){

            //делаем полупрозрачными все кнопки
            selectBtns[i].style.opacity = '0.5';
            //делаем прозрачными все абзацы
            selectArticles[i].style.opacity = '0';

            //делаем кнопку по которой кликнули полностью видимой
            e.target.style.opacity = '1';
            //делаем абзац идекс которого соответствует кнопке по которой кликнули видимым
            setTimeout(()=>selectArticles[i].style.opacity = '1', 600);
        }
    }
});