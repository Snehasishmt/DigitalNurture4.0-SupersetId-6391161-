package com.simplelearn.mockito;

public class MyService2 {
	private ExternalApi2 api;

    public MyService2(ExternalApi2 api) {
        this.api = api;
    }

    public void fetchData() {
        // Call with specific arguments
        api.getData("user123", 10);
    }
}
