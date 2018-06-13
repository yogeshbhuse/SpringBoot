package com.yogesh.spring.common.exception.handler;


public class CustomErrorDTO {

    private String errorCode;
    private String errorMessage;
    private String errorTitle;

    public CustomErrorDTO() {

    }

    public CustomErrorDTO(String errorMessage) {
        this.errorMessage = errorMessage;

    }

    public CustomErrorDTO(String errorCode, String errorTitle, String errorMessage) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
        this.errorTitle = errorTitle;

    }


    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public String getErrorTitle() {
        return errorTitle;
    }

    public void setErrorTitle(String errorTitle) {
        this.errorTitle = errorTitle;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }


}
