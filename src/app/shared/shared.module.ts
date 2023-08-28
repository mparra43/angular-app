import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { ListHeaderComponent } from './components/list-header/list-header.component';
import { ListBodyComponent } from './components/list-body/list-body.component';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipe/order-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SideBarComponent,
    FooterComponent,
    HeaderUserComponent,
    CardMovieComponent,
    SectionGenericComponent,
    ListHeaderComponent,
    ListBodyComponent,
    OrderListPipe,
    ImgBrokenDirective,
    SearchComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
    
  ],
  exports:[
    SideBarComponent,
    FooterComponent,
    HeaderUserComponent,
    CardMovieComponent,
    SectionGenericComponent,
    ListHeaderComponent,
    ListBodyComponent,
    OrderListPipe,
    ImgBrokenDirective,
    SearchComponent
  ]
})
export class SharedModule { }
