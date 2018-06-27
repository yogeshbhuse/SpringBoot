package com.yogesh.spring.entity.user;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.yogesh.spring.entity.AbstractIdentityDAO;
import com.yogesh.spring.model.user.UserDTO;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Calendar;
import java.util.Date;

/**
 * @author bhuse_y  6/26/2018
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Entity
@Table(name = "USER_DETAILS")
public class UserDetailsDAO extends AbstractIdentityDAO {

    @Column(name = "USER_ID")
    private String userName;

    @Column(name = "USER_PASSWORD")
    private String password;

    @Column(name = "USER_FIRST_NAME")
    private String userFirstName;

    @Column(name = "USER_LAST_NAME")
    private String userLastName;

    @Column(name = "USER_LAST_LOGIN")
    private Date lastSignInTime;

    @Column(name = "USER_ADDRESS")
    private String userAddress;

    @Column(name = "USER_CITY")
    private String userCity;

    @Column(name = "USER_PINCODE")
    private Integer userPostalCode;

    @Column(name = "USER_STATE")
    private String userState;

    @Column(name = "USER_COUNTRY")
    private String userCountry;

    private UserDetailsDAO() {

    }

    private UserDetailsDAO(Builder builder) {
        setId(builder.id);
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

    public static Builder newAddUserBuilder(UserDTO userDTo) {
        java.sql.Date sqlDate = new java.sql.Date(Calendar.getInstance().getTime().getTime());
        Builder builder = new Builder();
        builder.userName = userDTo.getUserName();
        builder.password = userDTo.getPassword();
        builder.userFirstName = userDTo.getUserFirstName();
        builder.userLastName = userDTo.getUserLastName();
        builder.userAddress = userDTo.getUserAddress();
        builder.userPostalCode = userDTo.getUserPostalCode();
        builder.userCity = userDTo.getUserCity();
        builder.userState = userDTo.getUserState();
        builder.userCountry = userDTo.getUserCountry();
        builder.lastSignInTime = sqlDate;
        return builder;
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
        private Integer id;
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

        public Builder withId(Integer id) {
            this.id = id;
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

        public UserDetailsDAO build() {
            return new UserDetailsDAO(this);
        }
    }
}
