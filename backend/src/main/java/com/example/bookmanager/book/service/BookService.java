package com.example.bookmanager.book.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.bookmanager.book.dto.BookRequest;
import com.example.bookmanager.book.dto.BookResponse;
import com.example.bookmanager.book.entity.Book;
import com.example.bookmanager.book.repository.BookRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookRepository bookRepository;

    public List<BookResponse> getAllBooks() {
        return bookRepository.findAll()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public List<BookResponse> searchByTitle(String title) {
        return bookRepository.findByTitleContainingIgnoreCase(title)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public BookResponse getBookById(UUID id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        return toResponse(book);
    }

    public BookResponse createBook(BookRequest request) {

        Book book = Book.builder()
                .title(request.title())
                .author(request.author())
                .year(request.year())
                .description(request.description())
                .build();

        Book savedBook = bookRepository.save(book);

        return toResponse(savedBook);
    }

    public BookResponse updateBook(UUID id, BookRequest request) {

        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        book.setTitle(request.title());
        book.setAuthor(request.author());
        book.setYear(request.year());
        book.setDescription(request.description());

        Book updatedBook = bookRepository.save(book);

        return toResponse(updatedBook);
    }

    public void deleteBook(UUID id) {

        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        bookRepository.delete(book);
    }

    private BookResponse toResponse(Book book) {
        return new BookResponse(
                book.getId(),
                book.getTitle(),
                book.getAuthor(),
                book.getYear(),
                book.getDescription()
        );
    }


}