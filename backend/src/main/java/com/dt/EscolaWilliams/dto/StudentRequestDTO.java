package com.dt.EscolaWilliams.dto;

import java.util.Date;

public record StudentRequestDTO(String rga, String cpf, String nome, String turma, String formacao, String registro) {
}
