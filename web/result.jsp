<%@ page import="java.util.ArrayList" %>
<%@ page import="servlets.Coordinate" %>
<%@ page import="servlets.Coordinate" %>
<%--
  Created by IntelliJ IDEA.
  User: dinod
  Date: 27.10.2019
  Time: 20:23
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css" type="text/css"/>
    <script src="script.js" async></script>
    <meta charset="UTF-8">
    <title>
    </title>
</head>
<header>Митин Михаил Владиславович <br>P3200<br> Вариант 200013</header>
<body>
<% ServletContext context = request.getServletContext();
    ArrayList<Coordinate> coordinates; //Создаём коллекцию для вывода на результатов
    coordinates = (ArrayList<Coordinate>) context.getAttribute("userData"); //Берём наши  данные
%>



<div>
    <div id="divForCanvas">
        <canvas id="shapesCanvas" width="250" height="250">У вас не поддерживает canvas!</canvas>
        <canvas id="cartesianSystemCanvas" width="250" height="250">У вас не поддерживает canvas!</canvas>
        <canvas id="circlesCanvas" width="250" height="250">У вас не поддерживает canvas!</canvas>
    </div>

<%--//todo удалить с кнопки, сделать eventlist--%>
    <form action="controller" onsubmit="return validate();" method="post" id="form">
        <!-- Тут изменить отправку на др страницу -->


        <br/>
        X:
<%--        todo избавиться от айди--%>
        <input type="radio" name="x" value="-5" id="x">-5


        <input type="radio" name="x" value="-4" id="x">-4


        <input type="radio" name="x" value="-3 " id="x">-3


        <input type="radio" name="x" value="-2" id="x">-2


        <input type="radio" name="x" value="-1" id="x">-1

        <!--todo убрать отсюда cheched потом  -->

        <input type="radio" name="x" checked="" value="0" id="x">0


        <input type="radio" name="x" value="1" id="x">1


        <input type="radio" name="x" value="2" id="x">2


        <input type="radio" name="x" value="3" id="x">3

        <br>
        Y:<input type="text" name="y" placeholder="Число (-5 до 3)" id="y">
        R: <select name="r" id="r">
        <option value='1'>
            1
        </option>
        <option value='1.5'>
            1.5
        </option>
        <option value='2'>
            2
        </option>
        <option value='2.5'>
            2.5
        </option>
        <option value='3'>
            3
        </option>
    </select>
        <button type="submit">Отправить</button>

    </form>
</div>

<footer>
    <blockquote> Лучше невзрачный работающий сайт, чем красивый, но поломанный!</blockquote>
</footer>
<div id="divForTime"></div>
<table border="2px">
    <thead>
    <tr>
        <th>
            X
        </th>
        <th>
            Y
        </th>
        <th>
            R
        </th>
        <th>
            RESULT
        </th>
        <th>
            TIME
        </th>
        <th>
            TIME OF SCRYPT
        </th>
    </tr>


    </thead>
    <tbody>
    <script>function toDrawCirclesOnCanvas(result, pixelX, pixelY, oldRadius) {
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
        let newRadius = document.getElementById("r").value;
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
    let eventsForR1 = document.getElementById("r");
    // надо понять как здесь передавать значения функции
    eventsForR1.addEventListener("change", toDrawCirclesOnCanvas, false);
    </script>

    <% for (Coordinate element : coordinates) { %>
   <script>
       toDrawCirclesOnCanvas(<%=element.isCorrect() %>,<%=element.getPixelX() %>,<%=element.getPixelY() %>,<%=element.getR() %> );</script>
    <tr>
        <td><%= element.getX()%>
        </td>
        <td><%= element.getY()%>
        </td>
        <td><%= element.getR()%>
        </td>
        <td><%= element.isCorrect()%>
        </td>
        <td><%= element.getRequestTime()%>
        </td>
        <td><%= element.getRequestTime()%>
        </td>
    </tr>
    <% }
    %>
    </tbody>

</table>
</body>
</html>

