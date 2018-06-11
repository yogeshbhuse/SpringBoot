package com.yogesh.spring.repository;

import com.yogesh.spring.entity.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * @author bhuse_y  6/4/2018
 */
public interface ProductRepository extends CrudRepository<Product,Integer> {

      @Query(name ="SELECT * FROM PRODUCT_DETAILS WHERE PRODUCT_ID=:productId" , nativeQuery = false)
      Product findByProductId(@Param("productId") String productId);


}
