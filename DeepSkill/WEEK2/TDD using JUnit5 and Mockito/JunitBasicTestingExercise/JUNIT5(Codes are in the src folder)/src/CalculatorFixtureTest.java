//Arrange-Act-Assert (AAA) Pattern + Setup/Teardown

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorFixtureTest {

    private Calculator calc;

    @Before
    public void setUp() {
        calc = new Calculator();
        System.out.println("Setup done");
    }

    @After
    public void tearDown() {
    	calc = null;
        System.out.println("Teardown: Calculator reference cleared\n");
    }

    @Test
    public void testAddition() {
        int result = calc.add(10, 20);
        assertEquals(30, result);
    }

    @Test
    public void testSubtraction() {
        int result = calc.subtract(10, 5);
        assertEquals(5, result);
    }
}
