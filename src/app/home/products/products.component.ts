import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [CommonModule, MatTableModule, MatCardModule, ReactiveFormsModule]
})
export class ProductsComponent implements OnInit {
  displayedColumns = ["title", "category", "price"];
  products: any[] = [];
  searchControl = new FormControl('');

  constructor(private httpClient: HttpClient) { }

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
    });
  }
}
