package exchanger.api.repositories.impl;

import exchanger.api.entities.User;
import exchanger.api.repositories.UserRepository;

import java.sql.*;

public class UserRepositoryImpl implements UserRepository {

    private static final String DB_CONNECTION = "jdbc:postgresql://localhost:5432/exchanger-db";
    private static final String DB_USER = "postgres";
    private static final String DB_PASSWORD = "123456";

    private static final String INSERT_USER_SQL = "INSERT INTO \"user\" (email, password, first_name, phone_number, surname, is_active) VALUES (?, ?, ?, ?, ?, ?) RETURNING id";

    public User insert(User user) throws Exception {
        try (Connection dbConnection = DriverManager.getConnection(DB_CONNECTION, DB_USER,DB_PASSWORD)) {
            try (PreparedStatement statement = dbConnection.prepareStatement(INSERT_USER_SQL)) {
                statement.setString(1, user.getEmail());
                statement.setString(2, user.getPassword());
                statement.setString(3, user.getFirstName());
                statement.setString(4,user.getPhone());
                statement.setString(5, user.getSurname());
                statement.setBoolean(6, user.isActive());


                try (ResultSet generatedKeys = statement.executeQuery()) {
                    if (generatedKeys.next()) {
                        user.setId(generatedKeys.getLong(1));
                    }
                }
            }
            return user;
        }
    }

}
