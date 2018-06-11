package com.yogesh.spring.i18n;

public class I18NMessage<T extends Enum> {
    private T key;
    private Object[] args;

    public I18NMessage(T key, Object[] args) {
        this.key = key;
        this.args = args;
    }

    public I18NMessage(T key) {
        this(key, null);
    }

    public T getKey() {
        return key;
    }

    public Object[] getArgs() {
        return args;
    }
}
