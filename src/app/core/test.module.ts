import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Route[] = [];

@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [
    CommonModule,

    /*
    * If you comment following Module main.js size = 182kb (= 51kb gzip)
    * If you uncomment following Module main.js size = 195kb (= 54.6kb gzip)
    *
    * Since TestModule is not imported in AppModule in any way, adding or removing modules
    * in TestModule should have no impact on main.js file size
    * */
    // RouterModule,
    // HttpClientModule,
    // FormsModule,
    // ReactiveFormsModule,
  ],
})
export class TestModule {
}
