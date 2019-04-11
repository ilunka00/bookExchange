package exchanger.api.controllers;

import exchanger.api.entities.User;
import exchanger.api.models.UserRegRequest;
import exchanger.api.models.UserRegResponse;
import exchanger.api.repositories.UserRepository;
import exchanger.api.repositories.impl.UserRepositoryImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class UserController {

    private final UserRepository userRepository;

    public UserController() {
        this.userRepository = new UserRepositoryImpl();
    }

    @PostMapping("/api/user/register")
    public UserRegResponse register(@RequestBody UserRegRequest regRequest) throws Exception {

        User newUser = new User();
        newUser.setEmail(regRequest.getEmail());
        newUser.setPassword(regRequest.getPassword());
        newUser.setFirstName(regRequest.getFirstName());
        newUser.setSurname(regRequest.getSurname());
        newUser.setPhone(regRequest.getPhone());
        newUser.setActive(true);

        User insertedUser = this.userRepository.insert(newUser);

        UserRegResponse regResponse = new UserRegResponse();
        regResponse.setUserId(insertedUser.getId());

        return regResponse;
    }

}
