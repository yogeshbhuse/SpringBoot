package com.yogesh.spring.services;

import com.yogesh.spring.common.exception.SpringBootCustomException;
import com.yogesh.spring.common.exception.handler.CustomErrorDTO;
import com.yogesh.spring.entity.user.UserDetailsDAO;
import com.yogesh.spring.i18n.I18NMessageService;
import com.yogesh.spring.model.user.UserDTO;
import com.yogesh.spring.repository.user.UserDetailsRepository;
import com.yogesh.spring.util.CustomErrorResponse;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author bhuse_y  6/25/2018
 */

@Service
public class UserService {

    private static final Logger LOGGER = Logger.getLogger(UserService.class);
    @Autowired
    private UserDetailsRepository userDetailsRepository;
    @Autowired
    private I18NMessageService messageService;

    public UserDTO userLogin(UserDTO userDTO) {
        LOGGER.info("User Login Method");
        UserDetailsDAO userDetailsDAO = userDetailsRepository.findByUserNameAndPassword(userDTO.getUserName(), userDTO.getPassword());
        if (userDetailsDAO != null) {
            return UserDTO.newBuilder().withUserFirstName(userDetailsDAO.getUserFirstName())
                    .withUserLastName(userDetailsDAO.getUserLastName())
                    .withLastSignInTime(userDetailsDAO.getLastSignInTime())
                    .withUserName(userDetailsDAO.getUserName())
                    .withUserId(userDetailsDAO.getId())
                    .withPassword(null)
                    .withUserAddress(null)
                    .withUserCity(null)
                    .withUserState(null)
                    .withUserCountry(null)
                    .withUserPostalCode(null)
                    .build();

        } else {
            CustomErrorResponse customErrorResponse = new CustomErrorResponse();
            Object[] obj = new Object[]{"User Details"};
            Object[] obj2 = new Object[]{"User Details"};
            CustomErrorDTO errorDTO = customErrorResponse.errorResponse(messageService, "error.nouserfound", obj, obj2);
            throw new SpringBootCustomException(errorDTO);
        }
    }


    public Boolean userRegistration(UserDTO userDTO) {

        try {
            UserDetailsDAO userDetailsDAO = UserDetailsDAO.newAddUserBuilder(userDTO).build();
            userDetailsRepository.save(userDetailsDAO);
        } catch (Exception ex) {
            CustomErrorResponse customErrorResponse = new CustomErrorResponse();
            Object[] obj = new Object[]{"User Details"};
            Object[] obj2 = new Object[]{"User Details"};
            CustomErrorDTO errorDTO = customErrorResponse.errorResponse(messageService, "error.saverecord", obj, obj2);
            throw new SpringBootCustomException(errorDTO);
        }
        return true;
    }

}
