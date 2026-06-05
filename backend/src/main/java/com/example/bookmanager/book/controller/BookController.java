package com.example.bookmanager.book.controller;

import com.example.bookmanager.book.dto.BookRequest;
import com.example.bookmanager.book.dto.BookResponse;
import com.example.bookmanager.book.service.BookService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;
import java.util.UUID;

@Tag(name = "Books", description = "Book management endpoints")
@RestController
@RequestMapping("/books")
@RequiredArgsConstructor
public class BookController {

    private final BookService bookService;

    @Operation(summary = "List all books")
    @GetMapping
    public List<BookResponse> getAllBooks(
            @RequestParam(required = false) String title
    ) {

        if (title != null && !title.isBlank()) {
            return bookService.searchByTitle(title);
        }

        return bookService.getAllBooks();
    }

    @GetMapping("/{id}")
    public BookResponse getBookById(
            @PathVariable UUID id
    ) {
        return bookService.getBookById(id);
    }

    @Operation(summary = "Create a new book")
    @PostMapping
    public BookResponse createBook(
            @Valid @RequestBody BookRequest request
    ) {
        return bookService.createBook(request);
    }

    @PutMapping("/{id}")
    public BookResponse updateBook(
            @PathVariable UUID id,
            @Valid @RequestBody BookRequest request
    ) {
        return bookService.updateBook(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteBook(
            @PathVariable UUID id
    ) {
        bookService.deleteBook(id);
    }
}