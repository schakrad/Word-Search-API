package io.java.Brains.wordsearchAPI.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.java.Brains.wordsearchAPI.Services.wordGridService;

@RestController("/")
public class WordSearchController {
    @Autowired
	   wordGridService wordgridservice;
	
	
	@GetMapping("/wordgrid")
	@CrossOrigin(origins="http://localhost:51387")
	public String createWordGrid(@RequestParam int gridSize,@RequestParam String word)
	{
		List<String> words = Arrays.asList(word.split(","));
		char[][] grid = wordgridservice.fillGrid(gridSize, words);
		String gridToString= " ";
		
		for(int i=0;i<gridSize;i++) {
		  for(int j=0;j<gridSize;j++)
			   gridToString+=grid[i][j]+" ";
		  gridToString+="\r\n";
		}
		
		
		
		return gridToString;
	}
	
	
	
}
