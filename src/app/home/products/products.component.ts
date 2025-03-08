import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [CommonModule, MatTableModule]
})
export class ProductsComponent implements OnInit {
  displayedColumns = ["title", "category", "price"];
  products: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getProducts();
  }

  private getProducts() {
    this.httpClient.get<any>('https://dummyjson.com/products?limit=10').subscribe(d => {
      this.products = d.products as any[];
    });
  }
}
