//to implement Singleton Pattern


public class Logger {
	private static Logger logger; 
	
	private Logger(){} //To prevent other classes to create object of Logger class
	
	public static Logger getInstance() {
		if(logger==null) {
			synchronized(Logger.class) { //synchronized keyword is used to control access to shared resources in a multithreaded environment
				logger=new Logger();
			}
		}
		return logger;
	}
	public void dis() {
		System.out.println("hello");
	}
	public static void main(String args[]) {
	}
}
