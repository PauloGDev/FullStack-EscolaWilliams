package com.dt.EscolaWilliams.services;

import com.dt.EscolaWilliams.Domain.Student.Student;
import com.dt.EscolaWilliams.Repositories.StudentRepository;
import com.dt.EscolaWilliams.dto.StudentRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class StudentService {
    @Autowired
    private StudentRepository repository;

        public List<Student> getStudents(int page, int size) {
            Sort sort = Sort.by(Sort.Direction.DESC, "rga");
            Pageable pageable = PageRequest.of(page, size, sort);
            return this.repository.findAll(pageable);
        }

    public List<Student> getAllStudentsBy(String rga) {
        Set<Student> uniqueStudents = new HashSet<>();

        uniqueStudents.addAll(repository.findAllByRgaContainingIgnoreCase(rga));
        uniqueStudents.addAll(repository.findAllByNomeContainingIgnoreCase(rga)); // Corrigindo a busca por nome
        uniqueStudents.addAll(repository.findAllByTurmaContainingIgnoreCase(rga)); // Corrigindo a busca por nome

        return new ArrayList<>(uniqueStudents);
    }

        public int getAllStudentsCount() {
            return this.repository.findAll().size();
        }

        public ResponseEntity<Student> getStudentByRga(String rga) {
            Optional<Student> student = this.repository.findByRga(rga);
            return student.map(ResponseEntity::ok).orElseThrow(() -> new RuntimeException("Student not found"));
        }

        public ResponseEntity<Student> getStudentByCpf(String cpf) {
            Optional<Student> student = this.repository.findByCpf(cpf);
            return student.map(ResponseEntity::ok).orElseThrow(() -> new RuntimeException("Student not found"));
        }

        public ResponseEntity<Student> getStudentByNome(String nome) {
            nome = capitalizeWords(nome);
            Optional<Student> student = this.repository.findByNome(nome);
            return student.map(ResponseEntity::ok).orElseThrow(() -> new RuntimeException("Student not found"));
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
