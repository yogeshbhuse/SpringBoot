package com.yogesh.spring.controller.restcontroller;

import com.yogesh.spring.model.ResponseModel;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * @author bhuse_y  5/31/2018
 */

@RestController
@RequestMapping("/api/v1")
@Api(value = "/api/v1")
public class SwaggerController {

    @Autowired
    private ResponseModel responseModel;



    @RequestMapping(value = "/getMessage" ,method = RequestMethod.GET,produces = "application/json")
    @ApiOperation("Provide the Welcome Message to User")
    public ResponseEntity showMessage() {

        responseModel.setUserMessage("Hi Swagger");


        return ResponseEntity.ok(responseModel);
    }
}
