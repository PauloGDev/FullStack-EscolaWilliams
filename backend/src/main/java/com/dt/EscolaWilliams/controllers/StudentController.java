package com.dt.EscolaWilliams.controllers;

import com.dt.EscolaWilliams.Domain.Student.Student;
import com.dt.EscolaWilliams.Repositories.StudentRepository;
import com.dt.EscolaWilliams.dto.ResponseDTO;
import com.dt.EscolaWilliams.dto.StudentDeleteDTO;
import com.dt.EscolaWilliams.dto.StudentRequestDTO;
import com.dt.EscolaWilliams.infra.security.TokenService;
import com.dt.EscolaWilliams.services.StudentService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/")
public class StudentController {
    public StudentController(StudentRepository repository, PasswordEncoder passwordEncoder, TokenService tokenService, StudentService studentService) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.tokenService = tokenService;
        this.studentService = studentService;
    }

    private final StudentRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;
    private final StudentService studentService;

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody StudentRequestDTO dto) {
        Optional<Student> student = this.repository.findByRga(dto.rga());
        if(student.isEmpty()){
            Student newStudent = new Student(dto.rga(), capitalizeWords(dto.nome()),dto.turma(), dto.registro(), dto.formacao(), dto.cpf());
            this.repository.save(newStudent);
            String token = tokenService.generateToken(newStudent);
            return ResponseEntity.ok(new ResponseDTO(newStudent.getRga(), token));
        }
        return ResponseEntity.badRequest().build();
    }

    @DeleteMapping("/delete")
    public ResponseEntity delete(@RequestBody StudentDeleteDTO dto) {
        Optional<Student> student = this.repository.findByRga(dto.rga());
        if(student.isEmpty()){
            return ResponseEntity.badRequest().build();
        }
        repository.delete(student.get());
        return ResponseEntity.ok().build();
    }
    @GetMapping("/getQtd")
    public ResponseEntity<Integer> findAll() {
        return ResponseEntity.ok(this.studentService.getAllStudentsCount());
    }

    @GetMapping("/dashboard")
    public List<Student> findAll(@RequestParam int page) {
        return ResponseEntity.ok(this.studentService.getStudents(page, 10)).getBody();
    }

    @GetMapping("/getBy")
    public List<Student> findAllByNome(@RequestParam String search) {
        return ResponseEntity.ok(this.studentService.getAllStudentsBy(search)).getBody();
    }

    @GetMapping("/check")
    public ResponseEntity check(@RequestParam String cpf) {
        String rga = cpf.replaceAll("\\.", "");
        rga = rga.replaceAll("-", "");
        rga = rga.replaceAll(" ", "");
        if (this.repository.findByCpf(cpf).isPresent()){
            return ResponseEntity.ok(this.studentService.getStudentByCpf(cpf));
        }else if(this.repository.findByNome(capitalizeWords(cpf)).isPresent()){
            return ResponseEntity.ok(this.studentService.getStudentByNome(cpf));
        }else if(this.repository.findByRga(rga).isPresent()){
            return ResponseEntity.ok(this.studentService.getStudentByRga(rga));
        }
        return ResponseEntity.ok(this.studentService.getStudentByRga(rga)).getBody();
    }

    public static String capitalizeWords(String input) {
        // split the input string into an array of words
        String[] words = input.split("\\s");

        // StringBuilder to store the result
        StringBuilder result = new StringBuilder();

        // iterate through each word
        for (String word : words) {
            // capitalize the first letter, append the rest of the word, and add a space
            result.append(Character.toTitleCase(word.charAt(0)))
                    .append(word.substring(1))
                    .append(" ");
        }

        // convert StringBuilder to String and trim leading/trailing spaces
        return result.toString().trim();
    }

}
