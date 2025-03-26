package com.dt.EscolaWilliams.Domain.Student;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "students")
public class Student {
    @Id
    private String rga;
    private String nome;
    private String turma;
    private String registro;
    private String formacao;
    private String cpf;

    public Student() {
    }

    public Student(String rga, String nome, String turma, String registro, String formacao, String cpf) {
        this.rga = rga;
        this.nome = nome;
        this.turma = turma;
        this.registro = registro;
        this.formacao = formacao;
        this.cpf = cpf;
    }

    public String getRga() {
        return rga;
    }

    public void setRga(String rga) {
        this.rga = rga;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTurma() {
        return turma;
    }

    public void setTurma(String turma) {
        this.turma = turma;
    }

    public String getRegistro() {
        return registro;
    }

    public void setRegistro(String registro) {
        this.registro = registro;
    }

    public String getFormacao() {
        return formacao;
    }

    public void setFormacao(String formacao) {
        this.formacao = formacao;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
}
