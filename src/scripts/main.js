const selectBtns = document.querySelectorAll('.survival-title>button'); //кнопки
const selectArticles = document.querySelectorAll('.survival-item'); //абзацы



for (let i=0; i < selectBtns.length; i++){
    selectBtns[i].addEventListener('click', (e)=>{
        for (let j = 0; j < selectArticles.length; j++){
            selectBtns[j].style.opacity = '0.5'; //делаем полупрозрачными все кнопки
            selectArticles[j].style.opacity = '0'; //делаем прозрачными все абзацы
        }
        e.target.style.opacity = '1'; //делаем кнопку по которой кликнули полностью видимой
        setTimeout(()=>{
            selectArticles[i].style.opacity = '1'; //делаем абзац порядковый номер которого равен кнопке по которой кликнули видимым
        }, 600);
    })
}