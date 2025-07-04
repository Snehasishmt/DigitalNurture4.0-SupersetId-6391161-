package com.Example;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;

@Aspect
public class LoggingAspect {

    @Before("execution(* com.Example.Library.issueBook(..))")
    public void logBefore() {
        System.out.println("Logging BEFORE issuing book.");
    }
}
