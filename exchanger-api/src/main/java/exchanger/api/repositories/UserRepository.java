package exchanger.api.repositories;

import exchanger.api.entities.User;

public interface UserRepository {

    User insert(User user) throws ClassNotFoundException, Exception;

}
