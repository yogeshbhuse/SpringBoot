package com.yogesh.spring.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import org.springframework.stereotype.Component;

/**
 * @author bhuse_y  5/31/2018
 */
@Component
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ResponseModel {

    private String userMessage;

    private ResponseModel(){

    }

    private ResponseModel(Builder builder) {
        userMessage = builder.userMessage;
    }

    public static Builder newBuilder() {
        return new Builder();
    }


    public String getUserMessage() {
        return userMessage;
    }

    public void setUserMessage(String userMessage) {
        this.userMessage = userMessage;
    }

    public static final class Builder {
        private String userMessage;

        private Builder() {
        }

        public Builder withUserMessage(String val) {
            userMessage = val;
            return this;
        }

        public ResponseModel build() {
            return new ResponseModel(this);
        }
    }
}
