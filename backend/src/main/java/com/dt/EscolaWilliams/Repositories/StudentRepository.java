package com.dt.EscolaWilliams.Repositories;

import com.dt.EscolaWilliams.Domain.Student.Student;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface StudentRepository extends CrudRepository<Student, String> {

    Optional<Student> findByRga(String rga);
    Optional<Student> findByNome(String nome);
    Optional<Student> findByCpf(String cpf);
    List<Student> findAllByNomeContainingIgnoreCase(String nome);
    List<Student> findAllByRgaContainingIgnoreCase(String rga);
    List<Student> findAllByTurmaContainingIgnoreCase(String turma);
    List<Student> findAll(Pageable pageable);
    List<Student> findAll();
}
