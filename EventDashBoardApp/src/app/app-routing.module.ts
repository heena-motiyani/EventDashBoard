import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BlogpostDetailComponent} from './blogpost/blogpost-detail/blogpost-detail.component';
import {ContactFormComponent} from './cmspage/contact-form/contact-form.component';
import {BlogpostListComponent} from './blogpost/blogpost-list/blogpost-list.component';
const routes: Routes = [
{path: '', redirectTo: '', pathMatch:'full'},
{path: '**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
