import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './Components/page-one/page-one.component';
import { PageTwoComponent } from './Components/page-two/page-two.component';

const appRoutes: Routes = [
  {path: 'page-one', component: PageOneComponent},
  {path: 'page-two', component: PageTwoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
