package com.yogesh.spring.controller.restcontroller.login;

import com.yogesh.spring.i18n.I18NMessageService;
import com.yogesh.spring.model.user.UserDTO;
import com.yogesh.spring.services.UserService;
import com.yogesh.spring.util.Responses;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

/**
 * @author bhuse_y  6/25/2018
 */

@RestController
@RequestMapping("/api/v1/user/login")
@Api(value = "api/v1/login")
public class UserLoginController {

    @Autowired
    UserService userService;
    @Autowired
    I18NMessageService messageService;


    @RequestMapping(value = "/userLogin", method = RequestMethod.POST, produces = "application/json")
    @ApiOperation("User Login Page")
    public ResponseEntity userLogin(@RequestBody UserDTO userDTO) {
        return Responses.ok(userService.userLogin(userDTO));
    }

    @RequestMapping(value = "/registerUser", method = RequestMethod.PUT, produces = "application/json")
    public ResponseEntity registerUser(@Valid @RequestBody UserDTO userDTO, Errors errors) {
        List<FieldError> fieldErrors = errors.getFieldErrors();
        List<String> message = new ArrayList<>();
        JSONObject json = new JSONObject();
        for (FieldError e : fieldErrors) {
            message.add("@" + e.getField() + ":" + e.getDefaultMessage());
        }
        if (!message.isEmpty()) {
            return Responses.ok(message);
        }
        if (userService.userRegistration(userDTO)) {
            json.put("userRegistration", true);
        }
        return Responses.ok(json.toJSONString());
    }


}
