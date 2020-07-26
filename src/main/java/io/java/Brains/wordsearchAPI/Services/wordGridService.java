package io.java.Brains.wordsearchAPI.Services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

import org.springframework.stereotype.Service;

@Service
public class wordGridService {
		
		
		
		private class Coordinate{
			int x;
			int y;
			
			Coordinate(int x, int y)
			{
				this.x=x;
				this.y=y;
			}

		}
		
		private enum Direction
		{
			Horizontal,
			Vertical,
			Diagonal,
			Horizontal_inverse,
			Vertical_inverse,
			Diagonal_inverse
		}
		
		
	
		
		public char[][] fillGrid(int gridsize,List<String> words)
		{
			List<Coordinate> list = new ArrayList<Coordinate>();
			char contents[][] = new char[gridsize][gridsize];
			
			for(int i=0;i<gridsize;i++)
			 for(int j=0;j<gridsize;j++) {
				list.add(new Coordinate(i,j));
			    contents[i][j]='-';
			    }
			
		   Collections.shuffle(list);
		   for(String word: words) {
			   
			    for(Coordinate l : list) {
			    	  int x =l.x;
			    	  int y =l.y;
			    	  Direction dir = getDirectionFit(contents,word,l);
			          if(dir!=null) {
			        	  switch(dir) {
			        	  case Horizontal:
			               for(char c : word.toCharArray()) {
			                 contents[x][y++]=c;
			               }
			              break; 
			        	  case Vertical:
			        		  for(char c : word.toCharArray()) {
					                 contents[x++][y]=c;
					               } 
			              break;
			        	  case Diagonal:
			        		  for(char c : word.toCharArray()) {
					                 contents[x++][y++]=c;
					               } 
			              break;
			        	  case Horizontal_inverse:
				               for(char c : word.toCharArray()) {
				                 contents[x][y--]=c;
				               }
				              break; 
				        	  case Vertical_inverse:
				        		  for(char c : word.toCharArray()) {
						                 contents[x--][y]=c;
						               } 
				              break;
				        	  case Diagonal_inverse:
				        		  for(char c : word.toCharArray()) {
						                 contents[x--][y--]=c;
						               } 
				              break;
			        	  } 
			        	  break;
			          }
			    }
			   
		   }
		   
		   randomfillGrid(contents);
		   
		   return contents;
		}
		
		public void display(char[][] contents)
		{
		   int gridsize = contents[0].length;
		   for(int i=0;i<gridsize;i++) {
		       for(int j=0;j<gridsize;j++)
			      System.out.print(contents[i][j]+" ");
			
		       System.out.println();
		   }
		}
		
		
		private void randomfillGrid(char[][] contents) {
			String allcapletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			int gridsize=contents[0].length;
			for(int i=0;i<gridsize;i++)
			 for(int j=0;j<gridsize;j++)
			 {
				 if(contents[i][j]=='-') {
					 int randomIndex = ThreadLocalRandom.current().nextInt(0,allcapletters.length()-1);
					 contents[i][j]=allcapletters.charAt(randomIndex);
				 }
			 }
		}
		
		
		public Direction getDirectionFit(char[][] contents,String word,Coordinate coordinate)
		{
	            List<Direction> directions = Arrays.asList(Direction.values());
	            Collections.shuffle(directions);
	            
	            for(Direction direction : directions)
	            {
	            	if(doesfit(contents,word,coordinate,direction))
	            	     return direction;
	            }
	            
	            return null;
		}
		
		
		
		public boolean doesfit(char [][] contents,String word,Coordinate coordinate,Direction direction)
		{
			int gridsize = contents[0].length;
			switch(direction) {
			case Horizontal:
				if(coordinate.y + word.length() >gridsize ) return false;
					for(int i=0;i<word.length();i++) 
					{
					   if(contents[coordinate.x][coordinate.y+i]!='-') {
					         return false;
					   }
					} 
				break;
				
			case Vertical:
				if(coordinate.x + word.length() > gridsize ) return false;
					for(int i=0;i<word.length();i++) 
					{
					   if(contents[coordinate.x+i][coordinate.y]!='-') {
					         return false;
					   }
					} 
				break;
			
			case Diagonal:
				if(coordinate.x + word.length() > gridsize || coordinate.y + word.length() > gridsize  ) return false;
					for(int i=0;i<word.length();i++) 
					{
					   if(contents[coordinate.x+i][coordinate.y+i]!='-') {
					         return false;
					   }
					} 
				
				break;
				
			case Horizontal_inverse:
				if(coordinate.y < word.length()  ) return false;
					for(int i=0;i<word.length();i++) 
					{
					   if(contents[coordinate.x][coordinate.y-i]!='-') {
					         return false;
					   }
					} 
				break;
				
			case Vertical_inverse:
				if(coordinate.x < word.length() ) return false;
					for(int i=0;i<word.length();i++) 
					{
					   if(contents[coordinate.x-i][coordinate.y]!='-') {
					         return false;
					   }
					} 
				break;
			
			case Diagonal_inverse:
				if(coordinate.x <word.length() || coordinate.y < word.length()) return false;
					for(int i=0;i<word.length();i++) 
					{
					   if(contents[coordinate.x-i][coordinate.y-i]!='-') {
					         return false;
					   }
					} 
				
				break;	
				
				
				
				
				
				
				
			}
	         return true;
			
		
		}
}
