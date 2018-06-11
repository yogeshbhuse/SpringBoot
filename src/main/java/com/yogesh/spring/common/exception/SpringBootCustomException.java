package com.yogesh.spring.common.exception;


import com.yogesh.spring.common.exception.handler.CustomErrorDTO;

public class SpringBootCustomException extends RuntimeException {

	private String errorCode;
	String errorTitle;
	CustomErrorDTO errorDTO;
	
	public SpringBootCustomException(CustomErrorDTO errorDTO2) {
        this.errorDTO=errorDTO2;
    }

	public String getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}

	public String getErrorTitle() {
		return errorTitle;
	}

	public void setErrorTitle(String errorTitle) {
		this.errorTitle = errorTitle;
	}

	public CustomErrorDTO getErrorDTO() {
		return errorDTO;
	}

	public void setErrorDTO(CustomErrorDTO errorDTO) {
		this.errorDTO = errorDTO;
	}
	
	
	
}
