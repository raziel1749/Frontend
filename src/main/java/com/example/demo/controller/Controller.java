package com.example.demo.controller;

import com.example.demo.domain.Item;
import com.example.demo.service.TestService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@Slf4j
public class Controller {
    @Autowired
    TestService Dao;
    @GetMapping("/api")
    public List<Item> ao () {
        List<Item> testjson = Dao.testjson();
        return testjson;
    }
}
