package com.yogesh.spring.common.exception;

public class SpringBootRuntimeException extends RuntimeException {
    private ErrorCode errorCode;

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
