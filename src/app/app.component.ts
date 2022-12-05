import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ListService } from './core/service/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchText: string = '';
  constructor(private listService: ListService,
    private changeDetectorRef: ChangeDetectorRef) { }
  title = 'result-list-angular';
  allProducts = [];
  products = [];

  ngOnInit() {
    this.listService.getProducts().subscribe((items) => {
      if (items.length) {
        this.products = <any>items;
        this.allProducts = [...this.products];
      }
    })
  }

  sortProducts(type: string) {
    this.products = this.allProducts.sort((item1, item2) => item1[type] - item2[type]);
    this.changeDetectorRef.detectChanges();
  }

  search(searchText: string) {
    this.searchText = searchText;
  }

}
