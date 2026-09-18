import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Recipe } from './recipe/recipe';
import { MindGames } from './mind-games/mind-games';

export const routes: Routes = [
    {path : "", component : Home },
    {path : "recipe", component : Recipe },
    {path: "riddles", component: MindGames}

];
