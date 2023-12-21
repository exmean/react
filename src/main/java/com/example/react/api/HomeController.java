package com.example.react.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HomeController {

    @GetMapping("/api/user/info")
    public Map<String, String> map() {
        return Map.of("name", "막시무스", "age", "29");
    }
}
