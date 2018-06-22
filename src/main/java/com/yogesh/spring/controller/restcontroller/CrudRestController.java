package com.yogesh.spring.controller.restcontroller;

import com.yogesh.spring.model.ProductDTO;
import com.yogesh.spring.services.CrudService;
import com.yogesh.spring.util.Responses;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.Authorization;
import org.apache.log4j.Logger;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author bhuse_y  6/1/2018
 */

@RestController
@RequestMapping("/api/v1/product")
@Api(value = "/api/v1/product")
public class CrudRestController {

    private static final Logger LOGGER=Logger.getLogger(CrudRestController.class);

    @Autowired
    CrudService crudService;

    @RequestMapping(value = "/getAllProducts", method = RequestMethod.GET, produces = "application/json")
    @ApiOperation(value = "Provides the All Available Prodcuts")
    public ResponseEntity getAllProductDetails() {
        LOGGER.info("Get ALL products for API /getAllProducts");
        return Responses.ok(crudService.getAllProduct());
    }


    @RequestMapping(value = "/getProductsDetails/{productId}", method = RequestMethod.GET, produces = "application/json")
    @ApiOperation(value = "Provides the Individual Product details",authorizations = {@Authorization(value="apiKey") })
    public ResponseEntity getProductDetails(@PathVariable("productId") String productId) {
        return Responses.ok(crudService.getProductDetails(productId));
    }


    @RequestMapping(value = "/addProduct", method = RequestMethod.PUT, produces = "application/json")
    @ApiOperation(value = "Add New Prodcut details" ,authorizations = {@Authorization(value="apiKey")})
    public ResponseEntity addNewProdcut(@RequestBody ProductDTO productDTO) {
        JSONObject json = new JSONObject();
        if(crudService.addProduct(productDTO)){
            json.put("productAdded", true);
        }

        return Responses.ok(json.toJSONString());
    }


    @RequestMapping(value = "/updateProduct", method = RequestMethod.PUT, produces = "application/json")
    @ApiOperation(value = "Update the Existing product details")
    public ResponseEntity updateProduct(@RequestBody ProductDTO productDTO) {
        JSONObject json = new JSONObject();
        if(crudService.updateProduct(productDTO)){
            json.put("productEdited", true);
        }
        return Responses.ok(json.toJSONString());
    }
}
