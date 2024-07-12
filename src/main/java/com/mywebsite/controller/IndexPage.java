package com.mywebsite.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/app/")
public class IndexPage {
    
    @GetMapping("index")
    public String index(){
        return "index.html";
    }
}
