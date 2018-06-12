package com.yogesh.spring.common.exception.handler;

import com.yogesh.spring.common.exception.SpringBootCustomException;
import com.yogesh.spring.common.exception.SpringBootRuntimeException;
import com.yogesh.spring.common.exception.DataIntegrityViolationException;
import com.yogesh.spring.common.exception.ErrorCode;
import com.yogesh.spring.i18n.I18NMessageService;
import com.yogesh.spring.util.Responses;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.ArrayList;
import java.util.List;

import static com.yogesh.spring.common.exception.ErrorCode.ERROR_CODE_1000;


/**
 * @author .
 */
@ControllerAdvice
public class GlobalErrorHandler {
    private static final Logger LOGGER = LoggerFactory.getLogger(GlobalErrorHandler.class);

    @Autowired
    private I18NMessageService messageService;

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<ErrorDTO> handleConflict(SpringBootRuntimeException ex) {
        return Responses.conflict(buildErrorInfo(ex));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<List<FieldErrorDTO>> handleBadRequest(MethodArgumentNotValidException ex) {
        BindingResult result = ex.getBindingResult();
        List<FieldError> errors = result.getFieldErrors();

        List<FieldErrorDTO> fieldErrors = new ArrayList<FieldErrorDTO>();

        for (FieldError error : errors) {
            fieldErrors.add(new FieldErrorDTO(error.getField(), messageService.getMessage(error.getDefaultMessage(), error.getDefaultMessage())));
        }
        return Responses.badRequest(fieldErrors);
    }

    @ExceptionHandler(SpringBootRuntimeException.class)
    public ResponseEntity<ErrorDTO> handleBadRequest(SpringBootRuntimeException ex) {
        return Responses.ok(buildErrorInfo(ex));
    }

    @ExceptionHandler(Throwable.class)
    public ResponseEntity<ErrorDTO> handleUnexpected(Throwable ex) {
        LOGGER.error(String.format("Unexpected condition %s", ERROR_CODE_1000), ex);
        return Responses.unexpected(new ErrorDTO(ERROR_CODE_1000, ex.getMessage()));
    }

    private ErrorDTO buildErrorInfo(SpringBootRuntimeException ex) {
        ErrorCode errorCode = ex.getErrorCode();
        String errorMessage = ex.getMessage();

        if (errorMessage == null) {
            errorMessage = messageService.getMessage(errorCode);
        }

        return new ErrorDTO(errorCode, errorMessage);
    }    
    
    @ExceptionHandler(SpringBootCustomException.class)
    public ResponseEntity<CustomErrorDTO> handleCustomException(SpringBootCustomException ex) {
        return Responses.ok(ex.getErrorDTO());
    }
}
