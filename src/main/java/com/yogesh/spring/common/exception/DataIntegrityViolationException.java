package com.yogesh.spring.common.exception;

public class DataIntegrityViolationException extends SpringBootRuntimeException {
    public DataIntegrityViolationException(ErrorCode errorCode) {
        super(errorCode);
    }

    public DataIntegrityViolationException(ErrorCode errorCode, String message) {
        super(errorCode, message);
    }
}
