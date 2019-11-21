//todo оптимизировать всё, для будущей отладки

function toDrawCirclesOnCanvas(result, pixelX, pixelY, oldRadius) {
//todo эти атрибуты временны

    let canvas = document.getElementById("circlesCanvas");
    let context = canvas.getContext('2d');
    //
    // let newPixelX = x * (100 / 3) +125; //
    // let newPixelY = y * (100 / 3) -125;

    alert("Входной пиксель по Х:" + pixelX);
    alert("Входной пиксель по Y:" + pixelY);

    //todo onchange
    alert("Старый радиус равен:" + oldRadius);
    let newRadius = document.getElementById("r");
    alert("Новый радиус равен: " + newRadius);


    pixelX = (pixelX / oldRadius) * newRadius + 125;
    pixelY = (pixelY / oldRadius) * newRadius - 125;
    pixelY = -pixelY;


    alert("Выходные пиксель по Х:" + pixelX);
    alert("Выходные пиксель по Y:" + pixelY);


    context.beginPath();
    //todo оптимизировать
    if (result) {
        context.strokeStyle = "green";
        context.fillStyle = "green";

    } else {
        context.strokeStyle = "red";
        context.fillStyle = "red";
    }
    //todo изменить радиус кружка
    context.arc(pixelX, pixelY, 2.5, 0, Math.PI * 2);
    context.fill();
    context.stroke();


}

function toDrawShapes(widthOfCartesianSystem, heightOfCartesianSystem, radius, colorOfShapes, lineWidth) {
    //Слой для рисования фигур
    let canvas = document.getElementById("shapesCanvas");
    let context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    //я хз пока как, но допустим полотно квадратное todo переделать
    let centre = widthOfCartesianSystem / 2;
    let minusRadOfX = centre - radius;
    let minusRadDivTwoOfX = centre - (radius / 2);
    let plusRadDivTwoOfX = centre + (radius / 2);
    let plusRadOfX = centre + radius;
    //ПОМНИМ, ЧТО Y РАСТЁТ ВНИЗ!
    let plusRadOfY = centre - radius;
    let plusRadDivTwoOfY = centre - (radius / 2);
    let minusRadDivTwoOfY = centre + (radius / 2);
    let minusRadOfY = centre + radius;
    //делаем обводку
    context.strokeRect(0, 0, widthOfCartesianSystem, heightOfCartesianSystem);
    //
    context.beginPath();
    context.strokeStyle = colorOfShapes;
    context.fillStyle = colorOfShapes;
    context.lineWidth = lineWidth;

    //1) Рисуем фигуры
    //1.1)Прямоугольник в первой четверти
    context.rect(centre, centre, radius, radius / 2);
    //1.2)Арка в первой четверти
    context.arc(centre, centre, radius, 0, -Math.PI / 2, true);
    //1.3)Треугольник в третьей четверти
    context.moveTo(minusRadDivTwoOfX, centre);
    context.lineTo(centre, minusRadOfY);
    context.lineTo(centre, centre);
    context.moveTo(centre, centre);
    context.fill(); //окрашиваем
    context.stroke(); //выводим

}

function toDrawCartesianSystem(widthOfCartesianSystem, heightOfCartesianSystem, radius, colorOfSystem, lineWidth) {

    let canvas = document.getElementById("cartesianSystemCanvas");
    let context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);
    //я хз пока как, но допустим полотно квадратное todo переделать
    let centre = widthOfCartesianSystem / 2;
    let minusRadOfX = centre - radius;
    let minusRadDivTwoOfX = centre - (radius / 2);
    let plusRadDivTwoOfX = centre + (radius / 2);
    let plusRadOfX = centre + radius;
    //ПОМНИМ, ЧТО Y РАСТЁТ ВНИЗ!
    let plusRadOfY = centre - radius;
    let plusRadDivTwoOfY = centre - (radius / 2);
    let minusRadDivTwoOfY = centre + (radius / 2);
    let minusRadOfY = centre + radius;
//todo переделать
    let marking = widthOfCartesianSystem / 50;


    context.beginPath();
    context.fillStyle = colorOfSystem;
    context.strokeStyle = colorOfSystem;
    context.lineWidth = lineWidth;
    //Стрелка по Y вниз
    context.moveTo(centre, centre);
    context.lineTo(centre, heightOfCartesianSystem);
    //по Y первая нижняя чёрточка, -R/2
    context.moveTo(centre, minusRadDivTwoOfY);
    context.lineTo(centre + marking, minusRadDivTwoOfY);
    context.moveTo(centre, minusRadDivTwoOfY);
    context.lineTo(centre - marking, minusRadDivTwoOfY);
    //по Y вторая нижняя чёрточка, -R
    context.moveTo(centre, minusRadOfY);
    context.lineTo(centre - marking, minusRadOfY);
    context.moveTo(centre, minusRadOfY);
    context.lineTo(centre + marking, minusRadOfY);
    //Стрелка по Y вверх
    context.moveTo(centre, centre);
    context.lineTo(centre, 0);
    //по Y первая верхняя чёрточка, R/2
    context.moveTo(centre, plusRadDivTwoOfY);
    context.lineTo(centre + marking, plusRadDivTwoOfY);
    context.moveTo(centre, plusRadDivTwoOfY);
    context.lineTo(centre - marking, plusRadDivTwoOfY);
    //по Y вторая верхняя чёрточка, R
    context.moveTo(centre, plusRadOfY);
    context.lineTo(centre + marking, plusRadOfY);
    context.moveTo(centre, plusRadOfY);
    context.lineTo(centre - marking, plusRadOfY);
    //левый "усик" по Y
    context.moveTo(centre, 0);
    context.lineTo(centre - (marking * 3), marking * 3);
    //правый "усик" по Y
    context.moveTo(centre, 0);
    context.lineTo(centre + (marking * 3), marking * 3);
    //Стрелка по Х влево
    context.moveTo(centre, centre);
    context.lineTo(0, centre);
    //по Х первая левая чёрточка, -R/2
    context.moveTo(minusRadDivTwoOfX, centre);
    context.lineTo(minusRadDivTwoOfX, centre + marking);
    context.moveTo(minusRadDivTwoOfX, centre);
    context.lineTo(minusRadDivTwoOfX, centre - marking);
    //по Х вторая левая чёрточка, -R
    context.moveTo(minusRadOfX, centre);
    context.lineTo(minusRadOfX, centre + marking);
    context.moveTo(minusRadOfX, centre);
    context.lineTo(minusRadOfX, centre - marking);
    //Стрелка по Х вправо
    context.moveTo(centre, centre);
    context.lineTo(widthOfCartesianSystem, centre);
    //по Х первая правая чёрточка, R/2
    context.moveTo(plusRadDivTwoOfX, centre);
    context.lineTo(plusRadDivTwoOfX, centre + marking);
    context.moveTo(plusRadDivTwoOfX, centre);
    context.lineTo(plusRadDivTwoOfX, centre - marking);
    //по Х вторая правая чёрточка, R
    context.moveTo(plusRadOfX, centre);
    context.lineTo(plusRadOfX, centre + marking);
    context.moveTo(plusRadOfX, centre);
    context.lineTo(plusRadOfX, centre - marking);
    //нижний "усик" по Х
    context.moveTo(widthOfCartesianSystem, centre);
    context.lineTo(widthOfCartesianSystem - (marking * 3), centre + (marking * 3));
    //верхний "усик" по Х
    context.moveTo(widthOfCartesianSystem, centre);
    context.lineTo(widthOfCartesianSystem - (marking * 3), centre - (marking * 3));

    //3) рисуем поверх фигур радиус

    //По Y
    context.fillText("-R/2", centre + (2 * marking), minusRadDivTwoOfY);
    context.fillText("-R", centre + (2 * marking), minusRadOfY);
    context.fillText("R/2", centre + (2 * marking), plusRadDivTwoOfY);
    context.fillText("R", centre + (2 * marking), plusRadOfY);
    //По X
    context.fillText("-R/2", minusRadDivTwoOfX, centre - marking);
    context.fillText("-R", minusRadOfX, centre - marking);
    context.fillText("R/2", plusRadDivTwoOfX, centre - marking);
    context.fillText("R", plusRadOfX, centre - marking);
    context.stroke();


}

//todo нужна другая функция, которая будет делигировать данные функциям, которые рисуют!

//допустим радиус равен 100 px
toDrawShapes(250, 250, document.getElementById("r").value * 100 / 3, "purple", 0);
toDrawCartesianSystem(250, 250, document.getElementById("r").value * 100 / 3, "black", 2);


function check() { //todo сделать нейминг

    let r = document.getElementById('r').value; //берём значение радиуса из селекта

    let domRect = circlesCanvas.getBoundingClientRect();
    let pixelX = (event.pageX - domRect.left - domRect.width / 2 - window.scrollX); //Пиксели, куда нажал пользователь на холст
    let pixelY = -(event.pageY - domRect.top - domRect.height / 2 - window.scrollY);//Добавил минус, потому что Y растёт вниз


    //todo если честно до я не доконца разобрался с этими формулами, хотя составил их сам, эмпирическим путём
    let x = pixelX / (100 / 3); //Перевод в вещественную координату
    let y = pixelY / (100 / 3);//100 пикселей, это шаг мой; 3 это граница по R


    createFormForCanvas(x, y, r);


}

//Функция для отправки формы от пользователя на сервер через canvas
function createFormForCanvas(x, y, r) {
//todo сделать hidden или типо того
    let form = document.createElement('form');
    form.action = "controller";
    form.method = "POST";
    form.innerHTML = "<input name= 'x' value=\"" + x + "\">" + "<input name= 'y' value=\"" + y + "\">" + "<input name= 'r' value=\"" + r + "\">";// + '<input name="y" value="1" id="yC">' + '<input name="r" value="1" id="rC" >";
    document.body.append(form);

    form.submit();

}


//Функция для вставки времени
function showTime() {

    //todo возможно изменить формат...
    let dateNow = new Date();
    document.getElementById("divForTime").innerHTML = "Текущее время: " + dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds();

}

//Задаём таймер для отображения времени
setInterval(showTime, 1000);
//todo скорее всего придётся переделать, т.к. костыльно; Заменяет начальный текст на дату сразу, при загрузке страницы
window.onload = showTime;

//Функция для вырисовки кругов на декартовой системе координат


function validate() {

//todo проверить X на клиент. валидации, но пока будет просто checked атрибут
    let y = document.getElementById("y").value.replace(",", "."); //y

    let r = document.getElementById("r").value.replace(",", "."); //r


    let i = 0;
    //  let arrOfX = [-5, -4, -3, -2, -1, 0, 1, 2, 3];
    let arrOfR = ["1", "1.5", "2", "2.5", "3"];


    if ((!isNumeric(y)) || y > 3 || y < -5) {

        y = document.getElementById("y"); //вот эту
        y.style.border = "2px solid red";// и вот эту


        ++i;
    } else {

        y = document.getElementById("y");
        y.style.border = "2px solid green";

    }

    if ((!isNumeric(r)) || !arrOfR.includes(r)) {

        r = document.getElementById("r"); //вот эту
        r.style.border = "2px solid red";// и вот эту

        ++i;
    } else {
        r = document.getElementById("r");
        r.style.border = "2px solid green";
    }
    if (i === 0) {
        return true;
    } else return false;


} //todo переделать функцию

function isNumeric(n) {

    return !isNaN(parseFloat(n)) && isFinite(n);
}

function toDrawCartesianSystemAfterChangeR() {
    //todo проверить тут всё, избавиться от всех цифр, нейминг
    let rData = document.getElementById("r").value;
    let radius = 100 * rData / 3;

    toDrawCartesianSystem(250, 250, radius, "black", 2);
}

function toDrawShapesAfterChangeR() {
    let r = document.getElementById("r").value;
    let radius = 100 * r / 3;
    toDrawShapes(250, 250, radius, "purple,0");
}


//function toDrawCirclesAfterChangeR(){
//     let r = document.getElementById("r").value;
//     let radius = 100*r/3;
//     toDrawCirclesOnCanvas();
// }

let eventsForCanvas = document.getElementById("circlesCanvas");
eventsForCanvas.addEventListener("click", check, false);


let eventsForR = document.getElementById("r");
eventsForR.addEventListener("change", toDrawShapesAfterChangeR, false);
eventsForR.addEventListener("change", toDrawCartesianSystemAfterChangeR, false);


//testEvent.addEventListener("change",toDrawCirclesAfterChangeR,false);