package com.yogesh.spring.controller.webcontroller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @author bhuse_y  6/19/2018
 */

@Controller
public class LoginController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String appLandingPage(Model model){
        model.addAttribute("loginPage","Hi Welcome To Spring Boot Web Login Application");
        return "login";
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String loginPage(Model model){
        model.addAttribute("loginPage","Hi Welcome To Spring Boot Web Login Application");
        return "login";
    }
}
