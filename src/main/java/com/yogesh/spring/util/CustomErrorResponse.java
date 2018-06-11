package com.yogesh.spring.util;



import com.yogesh.spring.common.exception.handler.CustomErrorDTO;
import com.yogesh.spring.i18n.I18NMessageService;


public class CustomErrorResponse {

	public CustomErrorDTO errorResponse(I18NMessageService messageService, String setErrorCode, Object[] objMsg, Object[] objtitle){
		CustomErrorDTO errorDTO=new CustomErrorDTO();
    	errorDTO.setErrorCode(setErrorCode);    	
    	String newMsg = messageService.getMessage(setErrorCode, objMsg);
    	String newMsg2 = messageService.getMessage(setErrorCode+".title",objtitle);
    	errorDTO.setErrorMessage(newMsg);    	
    	errorDTO.setErrorTitle(newMsg2);
    	return errorDTO;
	}
	
}
