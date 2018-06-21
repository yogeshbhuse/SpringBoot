package com.yogesh.spring.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestMethod;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.builders.ResponseMessageBuilder;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.*;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.SecurityConfiguration;
import springfox.documentation.swagger.web.SecurityConfigurationBuilder;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static com.google.common.collect.Lists.newArrayList;

/**
 * @author bhuse_y  5/31/2018
 */

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    private List<ResponseMessage> getDafaultRequestMessage() {
        final List<ResponseMessage> responseMessageList = new ArrayList<ResponseMessage>();
        responseMessageList
                .add(new ResponseMessageBuilder().code(500).message("500 message").responseModel(new ModelRef("Error")).build());
        responseMessageList.add(new ResponseMessageBuilder().code(403).message("Forbidden!!!!!").build());
        return responseMessageList;
    }

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2).select()
                .apis(RequestHandlerSelectors.any())
                .build()
                .apiInfo(apiInfo()).useDefaultResponseMessages(false)
                .globalResponseMessage(RequestMethod.GET, getDafaultRequestMessage())
                .securitySchemes(newArrayList(apiKey()))
                .securityContexts(Arrays.asList(securityContext()));
        
    }

    private ApiKey apiKey() {
        return new ApiKey("oauthKey", "api_key", "header");
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

    private SecurityContext securityContext() {
        return SecurityContext.builder()
                .securityReferences(defaultAuth())
                .build();
    }

    List<SecurityReference> defaultAuth() {
        AuthorizationScope authorizationScope
                = new AuthorizationScope("global", "accessEverything");
        AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
        authorizationScopes[0] = authorizationScope;
        return newArrayList(
                new SecurityReference("oauthKey", authorizationScopes));
    }

    @Bean
    SecurityConfiguration security() {
        return SecurityConfigurationBuilder.builder()
                .clientId("test-app-client-id")
                .clientSecret("test-app-client-secret")
                .realm("test-app-realm")
                .appName("test-app")
                .scopeSeparator(",")
                .additionalQueryStringParams(null)
                .useBasicAuthenticationWithAccessCodeGrant(false)
                .build();
    }


}
