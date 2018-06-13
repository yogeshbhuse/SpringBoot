package com.yogesh.spring.configuration;

import io.swagger.annotations.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * @author bhuse_y  5/31/2018
 */

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.any())
                .build()
                .apiInfo(apiInfo());
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("Spring Boot Swagger")
                .description("REST API")
                .version("v 1.0")
                .license("yogeshbhuse Licence (MIT)")
                .licenseUrl("https://github.com/yogeshbhuse/SpringBoot/blob/master/LICENSE")
                .contact(new springfox.documentation.service.Contact("Yogesh Bhuse", "https://github.com/yogeshbhuse/SpringBoot", "yogesh95.bhuse@gmail.com"))
                .build();
    }
}
