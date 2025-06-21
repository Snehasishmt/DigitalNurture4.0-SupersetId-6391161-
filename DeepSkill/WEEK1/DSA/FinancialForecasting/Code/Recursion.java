import java.util.Scanner;

public class Recursion {
	//we know that FV=P*(1+R)^N
	//Where FV=future value
	//P=Principal
	//R=Rate
	//N=Years
	private static double futureValue( double principal,double rate,int years) {
		if(years==0) {
			return principal;
		}
		else {
			return futureValue(principal,rate,years-1)*(1+rate);
		}
	}
	
	public static void main(String a[]) {
		Scanner sc=new Scanner(System.in);
		double p,r;
		int y;
		System.out.println("Enter the principal");
		p=sc.nextDouble();
		System.out.println("Enter the rate");
		r=sc.nextDouble();
		System.out.println("Enter the year");
		y=sc.nextInt();
		System.out.println("Future Value after "+y+"years="+futureValue(p,r,y));
	}
}
