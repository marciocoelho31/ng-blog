import { CommentsComponent } from './post-view/comments/comments.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: 'not-found', component: NotFoundComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id',
    component: PostViewComponent,
    children: [{ path: 'comentarios', loadChildren: () => import('./post-view/comments/comments.module').then(
        (m) => m.CommentsModule
       ) }]
  },
  { path: 'sobre-mim', component: AboutComponent },
  { path: 'contato', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
