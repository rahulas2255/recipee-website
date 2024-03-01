import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {
  allRecipesCategoryWise:any[]=[]
  page: number = 1;
  searchKey:string = ''
  allRecipes:any[]=[]
  selectedCategory: string = '';
  
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getAllRecipeList()
  }

  getAllRecipeList(){
    this.api.getAllRecipeeAPI().subscribe({
      next:(result:any)=>{
        console.log(result.recipes);
        this.allRecipes = result.recipes
        this.allRecipesCategoryWise = result.recipes

        
      },
      error:(reason:any)=>{
        console.log(reason);
        
        
      }
    })
  }
  onSelectCategory(category:string):void{
    this.selectedCategory = category
  }
  viewMealType(category:string):void{
    console.log("category",category);

    this.allRecipes = this.allRecipesCategoryWise.filter((item) => item.mealType.includes(category));
    
    
  }
}
