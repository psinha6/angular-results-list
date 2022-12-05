import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, tap } from 'rxjs';

@Component({
  selector: 'sorting-filter',
  templateUrl: './sorting-filter.component.html',
  styleUrls: ['./sorting-filter.component.scss']
})
export class SortingFilterComponent {
  @Output() sort = new EventEmitter<string>();
  @Output() search = new EventEmitter<string>();

  @ViewChild('input', {static: true}) input!: ElementRef;

  sortText: string | '' = '';
  dataList = [
    { code: "index", name: "index" },
    { code: "title", name: "title" },
    { code: "rating", name: "rating" },
    { code: "price", name: "price" }
  ]

  onChange(sortValue: any) {
    this.sort.emit(sortValue.target.value);
  }

  ngAfterViewInit() {
    // server-side search
    fromEvent(<any>this.input.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(800),
        distinctUntilChanged(),
        tap((event: any) => {
          this.search.emit(this.input.nativeElement.value);
        })
      )
      .subscribe();
  }


}
