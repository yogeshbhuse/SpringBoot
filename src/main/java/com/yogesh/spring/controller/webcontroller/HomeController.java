package com.yogesh.spring.controller.webcontroller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Map;

/**
 * @author bhuse_y  6/1/2018
 */

@Controller
public class HomeController {

    @RequestMapping(value = "/needAfter", method = RequestMethod.GET)
    public String homePage(Model model){
        model.addAttribute("message","Hi from SpringBoot UI");
        model.addAttribute("testMessage", "Test Message...");
        return "index";
    }

    @RequestMapping(value = "/welcome", method = RequestMethod.GET)
    public String welcome(Model model) {
        System.out.println("Welcome Attribute");
        model.addAttribute("userName","Yogesh");
        return "welcome";
    }
}
