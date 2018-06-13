package com.yogesh.spring.common.exception;


import com.yogesh.spring.common.exception.handler.CustomErrorDTO;

import java.io.Serializable;

public class SpringBootCustomException extends RuntimeException
         implements Serializable {

    private static final long serialVersionUID = 4121747519971890213L;
    private final CustomErrorDTO errorDTO;

    public SpringBootCustomException(CustomErrorDTO errorDTO2) {
        this.errorDTO = errorDTO2;
    }

    public CustomErrorDTO getErrorDTO() {
        return errorDTO;
    }
}
