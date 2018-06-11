package com.yogesh.spring.common.exception.handler;


import com.yogesh.spring.common.exception.ErrorCode;

public class ErrorDTO {
    private ErrorCode errorCode;
    private String errorMessage;

    public ErrorDTO(ErrorCode errorCode, String errorMessage) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }

    public ErrorCode getErrorCode() {
        return errorCode;
    }

    public String getErrorMessage() {
        return errorMessage;
    }
}
