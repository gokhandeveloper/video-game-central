import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {GameDetailsComponent} from "./game-details/game-details.component";

const routes: Routes =[
  {
    path: '',
    component:  HomeComponent
  },
  {
    path: 'search/:game-search',
    component:  HomeComponent
  },
  {
    path:'details/:id',
    component: GameDetailsComponent
  }

  ];

@NgModule( {
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRouting {

}
