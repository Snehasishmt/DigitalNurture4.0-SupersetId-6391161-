/*
 Added Junit dependency and creating test class to create junit tests
*/


import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class CalculatorTest {

	 @Test
	    public void testAdd() {
	        Calculator calc = new Calculator();
	        assertEquals(6, calc.add(2, 3));
	    }

	    @Test
	    public void testSubtract() {
	        Calculator calc = new Calculator();
	        assertEquals(1, calc.subtract(3, 2));
	    }
}
