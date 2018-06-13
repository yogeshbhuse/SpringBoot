package com.yogesh.spring.common.exception;

import java.io.Serializable;

public class SpringBootRuntimeException extends RuntimeException implements Serializable {


    private static final long serialVersionUID = 7486437826115224132L;
    private final ErrorCode errorCode;

    public SpringBootRuntimeException(ErrorCode errorCode) {
        super();
        this.errorCode = errorCode;
    }

    public SpringBootRuntimeException(ErrorCode errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }

    public ErrorCode getErrorCode() {
        return errorCode;
    }
}
