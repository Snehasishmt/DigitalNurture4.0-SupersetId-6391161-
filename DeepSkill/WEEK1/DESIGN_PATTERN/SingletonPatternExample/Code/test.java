
public class test {
	public static void main(String args[]) {
		
		if(Logger.getInstance()==Logger.getInstance()) { //to check if both instance are same ensuring only one object is created in Logger class
			System.out.println("Singleton pattern implemented successfully");
			Logger.getInstance().dis();
		}
		else {
			System.out.println("Singleton pattern implementation failed");
		}
		}
}
