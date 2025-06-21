import java.util.*;

public class test {
	public static void main(String args[]) {
		Scanner sc =new Scanner(System.in);
		String s;
		System.out.println("Enter Document type");
		s=sc.nextLine();
		Factory ob=new Factory();
		Object document=ob.createDocument(s);
		/*We have used Object as it is a general reference type that can hold any type of object.
		 And the question asked us to create multiple instances and there is no common interface so the Object
		 is required*/
		
		if (document instanceof word) {
		    ((word) document).dis();
		} else if (document instanceof pdf) {
		    ((pdf) document).dis();
		} else if (document instanceof Excel) {
		    ((Excel) document).dis();
		}
		
	}
}
