package com.example.demo.dao;

import com.example.demo.domain.Item;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface TestDao {
   List<Item> getdata();
}
