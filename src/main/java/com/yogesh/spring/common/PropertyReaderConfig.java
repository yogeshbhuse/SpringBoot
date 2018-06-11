package com.yogesh.spring.common;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 * Class For Reading the Property Files fields
 * Created by Xoriant
 */

public class PropertyReaderConfig {

    @Value("${keyStorePath}")
    private String keyStorePath;

    @Value("${keyStoreKey}")
    private String keyStoreKey;

    @Value("${trustStorePath}")
    private String trustStorePath;

    @Value("${trustStoreKey}")
    private String trustStoreKey;

    @Value("${sourceAppId}")
    private String sourceAppId;

    @Value("${destinationAppId}")
    private String destinationAppId;

    @Value("${notificationType}")
    private Integer notificationType;

    @Value("${notificationMethod}")
    private Integer notificationMethod;

    @Value("${messageActionNo}")
    private String messageActionNo;

    @Value("${modelViewType}")
    private Integer modelViewType;

    @Value("${cneUrl}")
    private String cneURL;

    @Value("${cneUserName}")
    private String cneUserName;

    @Value("${env}")
    private String env;

    @Value("${adminEmailIds}")
    private String adminEmailIds;
    

    public String getKeyStorePath() {
        return keyStorePath;
    }

    public void setKeyStorePath(String keyStorePath) {
        this.keyStorePath = keyStorePath;
    }

    public String getKeyStoreKey() {
        return keyStoreKey;
    }

    public void setKeyStoreKey(String keyStoreKey) {
        this.keyStoreKey = keyStoreKey;
    }

    public String getTrustStorePath() {
        return trustStorePath;
    }

    public void setTrustStorePath(String trustStorePath) {
        this.trustStorePath = trustStorePath;
    }

    public String getTrustStoreKey() {
        return trustStoreKey;
    }

    public void setTrustStoreKey(String trustStoreKey) {
        this.trustStoreKey = trustStoreKey;
    }

    public String getSourceAppId() {
        return sourceAppId;
    }

    public void setSourceAppId(String sourceAppId) {
        this.sourceAppId = sourceAppId;
    }

    public String getDestinationAppId() {
        return destinationAppId;
    }

    public void setDestinationAppId(String destinationAppId) {
        this.destinationAppId = destinationAppId;
    }

    public Integer getNotificationType() {
        return notificationType;
    }

    public void setNotificationType(Integer notificationType) {
        this.notificationType = notificationType;
    }

    public Integer getNotificationMethod() {
        return notificationMethod;
    }

    public void setNotificationMethod(Integer notificationMethod) {
        this.notificationMethod = notificationMethod;
    }

    public String getMessageActionNo() {
        return messageActionNo;
    }

    public void setMessageActionNo(String messageActionNo) {
        this.messageActionNo = messageActionNo;
    }

    public Integer getModelViewType() {
        return modelViewType;
    }

    public void setModelViewType(Integer modelViewType) {
        this.modelViewType = modelViewType;
    }

    public String getCneURL() {
        return cneURL;
    }

    public void setCneURL(String cneURL) {
        this.cneURL = cneURL;
    }

    public String getCneUserName() {
        return cneUserName;
    }

    public void setCneUserName(String cneUserName) {
        this.cneUserName = cneUserName;
    }

    public String getEnv() {
        return env;
    }

    public void setEnv(String env) {
        this.env = env;
    }
    
    public String getAdminEmailIds() {
        return adminEmailIds;
    }

    public void setAdminEmailIds(String adminEmailIds) {
        this.adminEmailIds = adminEmailIds;
    }
}
