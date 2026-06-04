package com.example.bookmanager.book.dto;

import java.util.UUID;

public record BookResponse(

        UUID id,

        String title,

        String author,

        Integer year,

        String description

) {
}