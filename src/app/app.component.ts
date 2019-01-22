import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: Recipe[] = [
  new Recipe('Cake', ['egg', 'flour', 'sugar'], ['put it all in a bowl', 'bake at 350 degrees', 'eat']),
  new Recipe('Cookies', ['egg', 'flour', 'sugar'], ['put it all in a bowl', 'bake at 350 degrees', 'eat']),
  new Recipe('Bread', ['egg', 'flour', 'sugar'], ['put it all in a bowl', 'bake at 350 degrees', 'eat'])
];

  saySomething(){
    console.log("hello")
  }
}
