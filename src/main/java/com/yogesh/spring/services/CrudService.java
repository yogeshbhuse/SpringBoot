package com.yogesh.spring.services;

import com.yogesh.spring.common.exception.SpringBootCustomException;
import com.yogesh.spring.common.exception.handler.CustomErrorDTO;
import com.yogesh.spring.entity.Product;
import com.yogesh.spring.i18n.I18NMessageService;
import com.yogesh.spring.model.ProductDTO;
import com.yogesh.spring.repository.ProductRepository;
import com.yogesh.spring.util.CustomErrorResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * @author bhuse_y  6/4/2018
 */

@Service
public class CrudService {

    @Autowired
    ProductRepository prodcutRepository;
    @Autowired
    private I18NMessageService messageService;


    public List<ProductDTO> getAllProduct() {
        List<Product> productList = (List<Product>) prodcutRepository.findAll();
        List<ProductDTO> prodctDtoList = new ArrayList<ProductDTO>();
        productList.stream().forEach(product -> {
            ProductDTO productDTO = ProductDTO.newProductBuilder(product)
                    .withId(product.getId())
                    .withProductId(product.getProductId())
                    .withProductName(product.getProductName())
                    .withProductDecscrption(product.getProductDecscrption())
                    .build();
            prodctDtoList.add(productDTO);

        });
        return prodctDtoList;
    }

    public ProductDTO getProductDetails(String productId) {

        Product product=prodcutRepository.findByProductId(productId);
        if(product!=null){
            return ProductDTO.newBuilder()
                    .withId(product.getId())
                    .withProductId(product.getProductId())
                    .withProductName(product.getProductName())
                    .withProductDecscrption(product.getProductDecscrption())
                    .build();
        }else{
            CustomErrorResponse customErrorResponse=new CustomErrorResponse();
            Object[] obj=new Object[]{"Product"};
            Object[] obj2=new Object[]{"Product"};
            CustomErrorDTO errorDTO=customErrorResponse.errorResponse(messageService, "error.norecordfound", obj, obj2);
            throw new SpringBootCustomException(errorDTO);
        }
    }
    public Boolean addProduct(ProductDTO productDTO){
         try{
             Product product=Product.newpProductBuilder(productDTO).build();
             prodcutRepository.save(product);
         }catch (Exception exception){
             CustomErrorResponse customErrorResponse=new CustomErrorResponse();
             Object[] obj=new Object[]{"Product"};
             Object[] obj2=new Object[]{"Product"};
             CustomErrorDTO errorDTO=customErrorResponse.errorResponse(messageService, "error.saverecord", obj, obj2);
             throw new SpringBootCustomException(errorDTO);
         }
        return true;
    }
}
