package com.yogesh.spring.common.exception;

public class RecordNotFoundException extends SpringBootRuntimeException {
    public RecordNotFoundException(ErrorCode errorCode) {
        super(errorCode);
    }

    public RecordNotFoundException(ErrorCode errorCode, String message) {
        super(errorCode, message);
    }
}
