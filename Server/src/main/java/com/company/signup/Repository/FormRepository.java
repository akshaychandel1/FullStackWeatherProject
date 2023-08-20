package com.company.signup.Repository;

        import com.company.signup.Model.User;
        import org.springframework.data.repository.CrudRepository;

public interface FormRepository extends CrudRepository<User,String>{
}