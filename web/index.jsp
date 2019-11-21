<%--
  Created by IntelliJ IDEA.
  User: dinod
  Date: 27.10.2019
  Time: 17:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css" type="text/css"/>
    <script src="script.js" defer></script>

    <meta charset="UTF-8">
    <title>
    </title>
<script>
</script>
</head>
<header>Митин Михаил Владиславович <br>P3200<br> Вариант 200013</header>
<body>

<div>

    <div id="divForCanvas">
        <canvas id="shapesCanvas" width="250" height="250">У вас не поддерживает canvas!</canvas>
        <canvas id="cartesianSystemCanvas" width="250" height="250">У вас не поддерживает canvas!</canvas>
        <canvas id="circlesCanvas" width="250" height="250">У вас не поддерживает canvas!</canvas>
    </div>


    <form action="controller" onsubmit="return validate();" method="post" id="form">
        <!-- Тут изменить отправку на др страницу -->


        <br/>
        X:
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
        <%--         <input type="text" name="r" placeholder="Число (2 до 5)" id="r">--%>
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
</body>
</html>
