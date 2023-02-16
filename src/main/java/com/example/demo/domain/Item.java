package com.example.demo.domain;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class Item {
    public Long id;
    public String companyName;

    public String itemCode;

    public String item;
    public String itemNo;

    public String pn;
    public String itemGroup;
    public String itemSize;
    public String unit;
    public String purUnit;
    public int purCnt;
    public String distUnit;
    public int distCnt;
    public String yieldUnit;
    public int yieldCnt;
}
