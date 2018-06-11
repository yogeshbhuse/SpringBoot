package com.yogesh.spring.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.yogesh.spring.entity.Product;

/**
 * @author bhuse_y  6/1/2018
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProductDTO {

    private Integer id;

    private String productId;

    private String productName;

    private String productDecscrption;


    private ProductDTO(){

    }

    private ProductDTO(Builder builder) {
        setId(builder.id);
        setProductId(builder.productId);
        setProductName(builder.productName);
        setProductDecscrption(builder.productDecscrption);
    }

    public static Builder newProductBuilder(Product product){
        Builder builder = new Builder();
        builder.id=product.getId();
        builder.productId=product.getProductId();
        builder.productName=product.getProductName();
        builder.productDecscrption=product.getProductDecscrption();
        return builder;
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductDecscrption() {
        return productDecscrption;
    }

    public void setProductDecscrption(String productDecscrption) {
        this.productDecscrption = productDecscrption;
    }


    public static final class Builder {
        private Integer id;
        private String productId;
        private String productName;
        private String productDecscrption;

        private Builder() {
        }

        public Builder withId(Integer id) {
            this.id = id;
            return this;
        }

        public Builder withProductId(String productId) {
            this.productId = productId;
            return this;
        }

        public Builder withProductName(String productName) {
            this.productName = productName;
            return this;
        }

        public Builder withProductDecscrption(String productDecscrption) {
            this.productDecscrption = productDecscrption;
            return this;
        }

        public ProductDTO build() {
            return new ProductDTO(this);
        }
    }
}
