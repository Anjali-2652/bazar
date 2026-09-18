import { Component, OnInit } from '@angular/core';
import { Cuisine } from '../services/cuisine';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recipe.html',
  styleUrl: './recipe.css',
})
export class Recipe implements OnInit {
  searchQuery : string = 'pizza';
  recipes: any[] = [];
  loading : boolean = false;
  errorMessage :string = ''
  

  constructor(private cuisineService: Cuisine){}

  ngOnInit() {
    this.searchRecipes();
  }

  searchRecipes(){
    if(!this.searchQuery.trim()) return;
    this.loading = true;
    this.errorMessage = ''

    this.cuisineService.getRecipe(this.searchQuery).subscribe({
      next:(res) =>{
        this.recipes = (res || []).map((meal: any) =>({
          ...meal,
          ingredients: this.extractIngredients(meal),
          expanded: false
          
        }));
        this.loading = false;
  
      },
      error: (err) =>{
        console.error('Errror fetching recipes: ', err);
        this.errorMessage = 'Failed to load recipes';
        this.loading = false
      }
    });
  }

  private extractIngredients(meal: any) : string[]{
    const ingredientsList: string[] = [];
    for (let i =1; i<=20; i++){
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if(ingredient && ingredient.trim() !== ''){
        const cleanMeasure = measure ? measure.trim(): '';
        ingredientsList.push(`${cleanMeasure} ${ingredient.trim()}`.trim())
      }
    }
    return ingredientsList;
  }

  toggleRecipe(recipe: any){
    recipe.expanded = !recipe.expanded
  }
}
