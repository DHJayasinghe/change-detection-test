import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';
import { MockOrdersService } from '../../services/mock-orders.service';
import memoize from 'memoizee';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [CommonModule, MatTableModule, MatCardModule, ReactiveFormsModule]
})
export class ProductsComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement> | undefined;
  displayedColumns = ["title", "category", "price", "totalorders"];
  products: any[] = [];
  searchControl = new FormControl('');
  private memorizedOrderCount: (id: number) => number;

  constructor(private httpClient: HttpClient, private orderService: MockOrdersService, private ngZone: NgZone, private cdr: ChangeDetectorRef) {
    this.memorizedOrderCount = memoize(this.orderService.calculateOrderCount.bind(this.orderService), { maxAge: 30000 });
  }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(_ => {
      if (this.searchInput) {
        fromEvent(this.searchInput.nativeElement, 'keyup')
          .pipe(
            debounceTime(500), // Wait 500ms after user stops typing
            distinctUntilChanged() // Avoid duplicate API calls
          )
          .subscribe(() => this.getProducts(this.searchInput?.nativeElement.value ?? ""));
      }
    });
  }

  ngOnInit() {
    this.getProducts();

    this.searchControl.valueChanges
      .pipe(
        debounceTime(500), // Wait 500ms after user stops typing
        distinctUntilChanged(), // Avoid duplicate API calls
      )
      .subscribe(search => this.getProducts(search ?? ""));
  }

  private getProducts(term: string = "") {
    this.httpClient.get<any>(`https://dummyjson.com/products/search?limit=10&q=${term}`).subscribe(d => {
      this.products = d.products as any[];
      this.cdr.detectChanges();
    });
  }

  public getOrdersCount(id: number) {
    return this.ngZone.runOutsideAngular(() => this.memorizedOrderCount(id));
    // return this.orderService.calculateOrderCount(id);
  }
}
