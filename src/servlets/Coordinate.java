package servlets;

public class Coordinate {

    private double x;
    private double y;
    private double r;
    private double pixelX;
    private double pixelY;
    private String requestTime;
    private long executionTime;
    private boolean correct;

    public Coordinate(double x, double y, double r, double pixelX, double pixelY, String requestTime, long executionTime, boolean correct) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.pixelX = pixelX;
        this.pixelY = pixelY;
        this.requestTime = requestTime;
        this.executionTime = executionTime;
        this.correct = correct;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getPixelX() {
        return pixelX;
    }

    public void setPixelX(double pixelX) {
        this.pixelX = pixelX;
    }

    public double getPixelY() {
        return pixelY;
    }

    public void setPixelY(double pixelY) {
        this.pixelY = pixelY;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public String getRequestTime() {
        return requestTime;
    }

    public void setRequestTime(String requestTime) {
        this.requestTime = requestTime;
    }

    public long getExecutionTime() {
        return executionTime;
    }

    public void setExecutionTime(long executionTime) {
        this.executionTime = executionTime;
    }

    public boolean isCorrect() {
        return correct;
    }

    public void setCorrect(boolean correct) {
        this.correct = correct;
    }
}
