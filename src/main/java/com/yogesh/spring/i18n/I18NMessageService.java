package com.yogesh.spring.i18n;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Service;

@Service
public class I18NMessageService {
    @Autowired
    private MessageSource messageSource;

    public String getMessage(I18NMessage input) {
        return getMessage(input.getKey(), input.getArgs(), null);
    }

    public String getMessage(String key) {
        return getMessage(key, null, null);
    }

    public String getMessage(String key, Object[] args) {
        return getMessage(key, args, null);
    }

    public String getMessage(String key, Object[] args, String defaultMessage) {
        return messageSource.getMessage(key, args, defaultMessage, LocaleContextHolder.getLocale());
    }

    public String getMessage(String key, String defaultMessage) {
        return getMessage(key, null, defaultMessage);
    }

    public String getMessage(Enum key) {
        return getMessage(key.name(), null, null);
    }

    public String getMessage(Enum key, Object[] args) {
        return getMessage(key.name(), args, null);
    }

    public String getMessage(Enum key, Object[] args, String defaultMessage) {
        return getMessage(key.name(), args, defaultMessage);
    }

    public String getMessage(Enum key, String defaultMessage) {
        return getMessage(key.name(), defaultMessage);
    }
}
