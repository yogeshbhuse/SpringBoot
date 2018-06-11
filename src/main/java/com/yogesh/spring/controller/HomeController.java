package com.yogesh.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Map;

/**
 * @author bhuse_y  6/1/2018
 */

@Controller
public class HomeController {

    @RequestMapping(value = {"/"}, method = RequestMethod.GET)
    public String homePage(Map<String,String> model){
        model.put("message","Hello from Spring Boot");
        return "index";
    }
}
