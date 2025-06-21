import java.util.Scanner;

public class Product {
	int productId;
	String productName;
	String category;
	private Product(int p,String n,String c){
		this.productId=p;
		this.productName=n;
		this.category=c;
	}
	//Implemented linear search
	private static void linearSearch(Product products[], String sr) {
		int flag=0;
		for(Product p:products) {
			if(p.productName.equals(sr)) {
				System.out.println("The searching element is found successfully through linear Search");
				System.out.println("Product Id :"+p.productId+", Product Name:"+p.productName+", Category:"+p.category);
				flag=1;
				break;
			
			}
		}
		if(flag==0) {
			System.out.println("Search is unsuccessful");
		}
	}
	private static void mergeSort(Product products[],int low,int high) {
		int mid;
		if(low<high) {
			mid=(low+high)/2;
			mergeSort(products,low,mid);
			mergeSort(products,mid+1,high);
			merge(products,mid,low,high);
			
		}
	}
	private static void merge(Product[] products, int mid, int low, int high) {
		int i ,j,k;
		Product p[]=new Product[products.length];
		i=low;
		j=mid+1;
		k=low;
		while(i<=mid && j<=high) {
			if(products[i].productName.compareToIgnoreCase(products[j].productName)<0) {
				p[k]=products[i];
				i++;
				k++;
				
			}
			else {
				p[k]=products[j];
				j++;
				k++;
			}
			
		}
		
		while(i<=mid) {
			p[k]=products[i];
			i++;
			k++;
		}
		while(j<=high) {
			p[k]=products[j];
			j++;
			k++;
		}
		for(i=low;i<=high;i++) {
			products[i]=p[i];
		}
		
	}
	//implemented binary search
	private static void binarySearch(Product products[], String sr) {
		
		int l=0,mid=0,h=products.length-1;
		int flag=0;
		//Implemented merge sort to sort the given details
		mergeSort(products,l,h);
		System.out.println("After Sorting product Details:");
		display(products);
		while(l<=h) {
			mid=(l+h)/2;
			if(products[mid].productName.compareToIgnoreCase(sr)<0) {
				l=mid+1;
			}
			else if(products[mid].productName.compareToIgnoreCase(sr)>0) {
				h=mid-1;
			}
			else {
				flag=1;
				break;
			}
		}
		if(flag==1) {
			System.out.println("The searching element is found successfully through binary Search");
			System.out.println("Product Id:"+products[mid].productId+"Product Name:"+products[mid].productName+"Category:"+products[mid].category);
		}
		else {
			System.out.println("Search is unsuccessful");
		}
		
				
		
	}
	//function to display the details
	private static void display(Product products[]) {
		for(Product p:products) {
			System.out.println("Product Id:"+p.productId+", Product Name:"+p.productName+", Category:"+p.category);
		}
	}
	
	public static void main(String a[]) {
		Scanner sc=new Scanner(System.in);
		int i,n;
		int id;
		String p,c;
		System.out.println("Enter number of product details you want to enter");
		n=sc.nextInt();
		sc.nextLine();
		Product products[]=new Product[n];
		for(i=0;i<n;i++) {
			System.out.println("Enter product id,product name,category");
			id=sc.nextInt();
			sc.nextLine();
			p=sc.nextLine();
			c=sc.nextLine();
			products[i]=new Product(id,p,c);
		}
		int ch;
		String sr;
		System.out.println("Enter the product to be searched");
		sr=sc.nextLine();
		System.out.println("Enter 1: Linear Search & 2:Binary Search");
		ch=sc.nextInt();
		sc.nextLine();
		switch(ch){
		case 1:
			System.out.println("Product Details");
			display(products);
			linearSearch(products,sr);
			break;
		case 2:
			System.out.println("Product Details");
			display(products);
			binarySearch(products,sr);
			break;
		default:
			System.out.println("Wrong Choice");
			
		}
	}
}

