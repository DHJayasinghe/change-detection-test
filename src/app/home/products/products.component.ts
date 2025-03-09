import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [CommonModule, MatTableModule, MatCardModule, ReactiveFormsModule]
})
export class ProductsComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement> | undefined;
  displayedColumns = ["title", "category", "price"];
  products: any[] = [];
  searchControl = new FormControl('');

  constructor(private httpClient: HttpClient, private ngZone: NgZone, private cdr: ChangeDetectorRef) { }

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
}
