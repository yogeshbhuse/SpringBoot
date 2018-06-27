package com.yogesh.spring.repository.user;

import com.yogesh.spring.entity.user.UserDetailsDAO;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * @author bhuse_y  6/26/2018
 */
@Repository
public interface UserDetailsRepository extends CrudRepository<UserDetailsDAO,Integer>{

    @Query(name = "SELECT * FROM USER_DETAILS WHERE USER_ID=:userId AND USER_PASSWORD=:userPassword",nativeQuery = false)
    UserDetailsDAO findByUserNameAndPassword(@Param("userId") String userId,@Param("userPassword") String userPassword);
}
