import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CategoriesService {

  private BASE_URL = 'https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc';

  constructor(private http: HttpClient) { }

  public fetchCategories(): Observable<any[]> {
    return this.fetch(`${this.BASE_URL}/Categories`);
  }

  public fetchProducts(categoryID: number): any {
    return this.fetch(`${this.BASE_URL}/Categories(${categoryID})/Products`);
  }

  private fetch(url: string): Observable<any[]> {
    return this.http
      .get(url)
      .pipe(map((response: any) => response.value));
  }
}

