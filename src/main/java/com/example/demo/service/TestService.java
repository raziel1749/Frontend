package com.example.demo.service;

import com.example.demo.dao.TestDao;
import com.example.demo.domain.Item;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class TestService {
    @Autowired
    TestDao tdao;
    public List<Item> testjson(){
        List<Item> getdata = tdao.getdata();
        log.info("rjson:{}",getdata);
        return getdata;
    }

}