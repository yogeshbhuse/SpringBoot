package com.yogesh.spring.util;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.net.URI;

public class Responses {
    public static ResponseEntity ok() {
        return new ResponseEntity(HttpStatus.OK);
    }

    public static ResponseEntity notFound() {
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }

    public static ResponseEntity notAuthorized() {
        return new ResponseEntity(HttpStatus.UNAUTHORIZED);
    }

    public static <T> ResponseEntity<T> notAuthorized(T model) {
        return new ResponseEntity<T>(model, HttpStatus.UNAUTHORIZED);
    }

    public static <T> ResponseEntity<T> ok(T model) {
        return new ResponseEntity<T>(model, HttpStatus.OK);
    }

    public static ResponseEntity created(URI uri) {
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uri);
        return new ResponseEntity(headers, HttpStatus.CREATED);
    }

    public static ResponseEntity noContent() {
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    public static <T> ResponseEntity<T> conflict(T model) {
        return new ResponseEntity<T>(model, HttpStatus.CONFLICT);
    }

    public static <T> ResponseEntity<T> unexpected(T model) {
        return new ResponseEntity<T>(model, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    public static <T> ResponseEntity<T> badRequest(T model) {
        return new ResponseEntity<T>(model, HttpStatus.BAD_REQUEST);
    }
}
