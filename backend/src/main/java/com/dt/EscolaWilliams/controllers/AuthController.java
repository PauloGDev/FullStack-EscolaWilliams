package com.dt.EscolaWilliams.controllers;

import com.dt.EscolaWilliams.Domain.User.User;
import com.dt.EscolaWilliams.Repositories.UserRepository;
import com.dt.EscolaWilliams.dto.LoginRequestDTO;
import com.dt.EscolaWilliams.dto.RegisterRequestDTO;
import com.dt.EscolaWilliams.dto.ResponseDTO;
import com.dt.EscolaWilliams.infra.security.TokenService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/auth")
public class AuthController {
    public AuthController(UserRepository repository, PasswordEncoder passwordEncoder, TokenService tokenService) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.tokenService = tokenService;
    }

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequestDTO dto) {
        User user = this.repository.findByEmail(dto.email()).orElseThrow(() -> new RuntimeException("User Not Found"));
        if(dto.password().equals(user.getPassword())) {
            String token = tokenService.generateToken(user);
            return ResponseEntity.ok(new ResponseDTO(user.getName(), token));
        }
        return ResponseEntity.badRequest().build();
    }

    @CrossOrigin
    @PostMapping("/register")
    public ResponseEntity register(@RequestBody RegisterRequestDTO dto) {
        Optional<User> user = this.repository.findByEmail(dto.email());
        if(user.isEmpty()){
        User newUser = new User();
        newUser.setName(dto.name());
        newUser.setEmail(dto.email());
        newUser.setPassword(dto.password());
        this.repository.save(newUser);
            String token = tokenService.generateToken(newUser);
            return ResponseEntity.ok(new ResponseDTO(newUser.getName(), token));
        }
        return ResponseEntity.badRequest().build();
    }
}
