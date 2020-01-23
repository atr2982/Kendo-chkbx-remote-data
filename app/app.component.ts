import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from './categories.service';

@Component({
    selector: 'my-app',
    styles: [`
        :host {
            height: 600px;
            overflow: auto;
        }
    `],
    template: `
     <kendo-treeview
        [nodes]="categories | async"
        [textField]="['CategoryName', 'ProductName']"
        kendoTreeViewExpandable

        [hasChildren]="hasChildren"
        [children]="fetchChildren"
      >
    </kendo-treeview>
  `
})
export class AppComponent implements OnInit {
    public categories: Observable<any[]>;

    constructor(private categoryService: CategoriesService) { 

    }

    public ngOnInit(): void {
        this.categories = this.categoryService.fetchCategories();

        this.categories.subscribe(function (categories) {
          console.log(categories);
        });
    }

    public hasChildren = (item) => {
      return 'CategoryName' in item;
    };

    public fetchChildren = (item) => {
      let children = this.categoryService.fetchProducts(item.CategoryID);

      children.subscribe(function (children) {
        console.log(children);
      });

      return children;
    } 
}
