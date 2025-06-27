package com.simplelearn.mockito;
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest2 {
	    @Test
	    public void testVerifyInteractionWithArguments() {
	        ExternalApi2 mockApi = Mockito.mock(ExternalApi2.class);
	        MyService2 service = new MyService2(mockApi);
	        service.fetchData();
	        //Verify interaction with specific arguments
	        verify(mockApi).getData("user123", 10);
	    }
	}



