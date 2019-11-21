import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "ControllerServlet", urlPatterns = "controller")
public class ControllerServlet extends HttpServlet {


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
       // double x = Double.parseDouble(request.getParameter("x").replace(',', '.'));//Достаём x
     //   double y = Double.parseDouble(request.getParameter("y").replace(',', '.'));//Достаём y
      //  double r = Double.parseDouble(request.getParameter("r").replace(',', '.'));//Достаём r
        //todo сделать нормальную валидацию, что это нормальная форма и можно переходить на проверку полей, иначе
        //todo редирект обратно на домашную страницу (Отключен JS и подобная хрень).
        //todo надо ещё придумать, как передавать все эти данные на проверку Area сервлету

        RequestDispatcher dispatcher = request.getRequestDispatcher("/validate");
        dispatcher.forward(request,response);
            //todo на всякий оставлю тут форвард
        //RequestDispatcher dispatcher = request.getRequestDispatcher("/index.jsp");
       // dispatcher.forward(request,response);

//todo может оставим редирект
        response.sendRedirect(request.getContextPath() + "/index.jsp");



        //тут принимаем данные, если не нулл и числа, то переходим на AreaCheckServlet, если не валидные, то редирект отбратно, всё
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
