import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './core/service/in-memory-data.service';
import { ProductInfoComponent } from './product-info/product.info.component';
import { ListService } from './core/service/list.service';
import { SortingFilterComponent } from './common/sorting-filter/sorting-filter.component';
import { FilterPipe } from './core/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductInfoComponent,
    SortingFilterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
