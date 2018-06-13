package com.yogesh.spring.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.yogesh.spring.model.ProductDTO;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * @author bhuse_y  6/4/2018
 */

@JsonInclude(JsonInclude.Include.NON_NULL)
@Entity
@Table(name = "PRODUCT_DETAILS")
public class Product extends AbstractIdentityDAO
        implements Serializable  {

    @Column(name = "Product_Id")
    private String productId;

    @Column(name = "Product_Name")
    private String productName;

    @Column(name = "Product_Description")
    private String productDecscrption;

    private Product() {

    }

    private Product(Builder builder) {
        setId(builder.id);
        setProductId(builder.productId);
        setProductName(builder.productName);
        setProductDecscrption(builder.productDecscrption);
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public static Builder newpProductBuilder(ProductDTO productDTO) {
        Builder builder =new Builder();
        builder.productId=productDTO.getProductId();
        builder.productName=productDTO.getProductName();
        builder.productDecscrption=productDTO.getProductDecscrption();
        return builder;
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

        public Product build() {
            return new Product(this);
        }
    }
}
