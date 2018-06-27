package com.yogesh.spring.model.user;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.Date;

/**
 * @author bhuse_y  6/25/2018
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserDTO {

    private Integer userId;

    private String userName;

    private String password;

    private String userFirstName;

    private String userLastName;

    private Date lastSignInTime;

    private String userAddress;

    private String userCity;

    private Integer userPostalCode;

    private String userState;

    private String userCountry;

    private UserDTO() {

    }

    private UserDTO(Builder builder) {
        setUserId(builder.userId);
        setUserName(builder.userName);
        setPassword(builder.password);
        setUserFirstName(builder.userFirstName);
        setUserLastName(builder.userLastName);
        setLastSignInTime(builder.lastSignInTime);
        setUserAddress(builder.userAddress);
        setUserCity(builder.userCity);
        setUserPostalCode(builder.userPostalCode);
        setUserState(builder.userState);
        setUserCountry(builder.userCountry);
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserFirstName() {
        return userFirstName;
    }

    public void setUserFirstName(String userFirstName) {
        this.userFirstName = userFirstName;
    }

    public String getUserLastName() {
        return userLastName;
    }

    public void setUserLastName(String userLastName) {
        this.userLastName = userLastName;
    }

    public Date getLastSignInTime() {
        return lastSignInTime;
    }

    public void setLastSignInTime(Date lastSignInTime) {
        this.lastSignInTime = lastSignInTime;
    }

    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }

    public String getUserCity() {
        return userCity;
    }

    public void setUserCity(String userCity) {
        this.userCity = userCity;
    }

    public Integer getUserPostalCode() {
        return userPostalCode;
    }

    public void setUserPostalCode(Integer userPostalCode) {
        this.userPostalCode = userPostalCode;
    }

    public String getUserState() {
        return userState;
    }

    public void setUserState(String userState) {
        this.userState = userState;
    }

    public String getUserCountry() {
        return userCountry;
    }

    public void setUserCountry(String userCountry) {
        this.userCountry = userCountry;
    }


    public static final class Builder {
        private Integer userId;
        private String userName;
        private String password;
        private String userFirstName;
        private String userLastName;
        private Date lastSignInTime;
        private String userAddress;
        private String userCity;
        private Integer userPostalCode;
        private String userState;
        private String userCountry;

        private Builder() {
        }

        public Builder withUserId(Integer userId) {
            this.userId = userId;
            return this;
        }

        public Builder withUserName(String userName) {
            this.userName = userName;
            return this;
        }

        public Builder withPassword(String password) {
            this.password = password;
            return this;
        }

        public Builder withUserFirstName(String userFirstName) {
            this.userFirstName = userFirstName;
            return this;
        }

        public Builder withUserLastName(String userLastName) {
            this.userLastName = userLastName;
            return this;
        }

        public Builder withLastSignInTime(Date lastSignInTime) {
            this.lastSignInTime = lastSignInTime;
            return this;
        }

        public Builder withUserAddress(String userAddress) {
            this.userAddress = userAddress;
            return this;
        }

        public Builder withUserCity(String userCity) {
            this.userCity = userCity;
            return this;
        }

        public Builder withUserPostalCode(Integer userPostalCode) {
            this.userPostalCode = userPostalCode;
            return this;
        }

        public Builder withUserState(String userState) {
            this.userState = userState;
            return this;
        }

        public Builder withUserCountry(String userCountry) {
            this.userCountry = userCountry;
            return this;
        }

        public UserDTO build() {
            return new UserDTO(this);
        }
    }
}
