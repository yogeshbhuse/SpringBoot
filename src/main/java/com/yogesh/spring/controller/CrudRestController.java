package com.yogesh.spring.controller;

import com.yogesh.spring.model.ProductDTO;
import com.yogesh.spring.services.CrudService;
import com.yogesh.spring.util.Responses;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author bhuse_y  6/1/2018
 */

@RestController
@RequestMapping("/api/v1/product")
@Api(value = "/api/v1/product")
public class CrudRestController {

    @Autowired
    CrudService crudService;

    @RequestMapping(value = "/getAllProducts", method = RequestMethod.GET, produces = "application/json")
    @ApiOperation(value = "Provides the All Available Prodcuts")
    public ResponseEntity getAllProductDetails() {
        return Responses.ok(crudService.getAllProduct());
    }


    @RequestMapping(value = "/getProductsDetails/{productId}", method = RequestMethod.GET, produces = "application/json")
    @ApiOperation(value = "Provides the Individual Product details")
    public ResponseEntity getProductDetails(@PathVariable("productId") String productId) {
        return Responses.ok(crudService.getProductDetails(productId));
    }


    @RequestMapping(value = "/addProduct", method = RequestMethod.PUT, produces = "application/json")
    @ApiOperation(value = "Add New Prodcut details")
    public ResponseEntity addNewProdcut(@RequestBody ProductDTO productDTO) {
        return Responses.ok(crudService.addProduct(productDTO));
    }


    @RequestMapping(value = "/updateProduct", method = RequestMethod.PUT, produces = "application/json")
    @ApiOperation(value = "Update the Existing product details")
    public ResponseEntity updateProduct() {

        return Responses.ok();
    }
}
