import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-generator',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule, JsonPipe],
  template: `
    <div class="container mt-5">
      <div class="card">
        <div class="card-header bg-success text-white">
          <h3>Product Description Generator</h3>
        </div>
        <div class="card-body">
          <form (ngSubmit)="onSubmit()">
            <div class="mb-3">
              <label class="form-label">Product Description Request:</label>
              <textarea
                class="form-control"
                [(ngModel)]="query"
                name="query"
                placeholder="Describe the product features you want"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              class="btn btn-sm btn-outline-success mb-2"
              [disabled]="isLoading"
            >
              @if (isLoading) {
              <span
                class="spinner-border spinner-border-sm"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Loading...</span>
              } Generate Description
            </button>
          </form>

          @if (error) {
          <div class="alert alert-danger mt-3">{{ error }}</div>
          } @if (result) {
          <div class="mt-4">
            <h4>Generated Description:</h4>
            <div class="card">
              <div class="card-header">
                {{ result.product_name }}
              </div>
              <div class="card-body">
                <h5>Key Features:</h5>
                <ul>
                  @for (feature of result.key_features; track $index) {
                  <li>{{ feature }}</li>
                  }
                </ul>

                <h5 class="mt-3">Technical Specs:</h5>
                <pre>{{ result.technical_specs | json }}</pre>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class ProductGeneratorComponent {
  query = '';
  format = 'Product Specification';
  result: any = null;
  error: string | null = null;
  isLoading = false;

  constructor(private api: ApiService) {}

  onSubmit() {
    if (!this.query.trim()) {
      this.error = 'Please enter a product description';
      return;
    }

    this.isLoading = true;
    this.error = null;
    this.result = null;

    this.api.generateProduct(this.query, this.format).subscribe({
      next: (res: any) => {
        this.result = res;
        this.isLoading = false;
      },
      error: (err: any) => {
        this.error = 'Failed to generate description. Please try again.';
        this.isLoading = false;
        console.error(err);
      },
    });
  }
}
