import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-date-interpreter',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule, DatePipe, JsonPipe],
  template: `
    <div class="container mt-5">
      <div class="card">
        <div class="card-header bg-primary text-white">
          <h3>Date Interpreter</h3>
        </div>
        <div class="card-body">
          <form (ngSubmit)="onSubmit()">
            <div class="mb-3">
              <label class="form-label">Enter date phrase:</label>
              <input
                type="text"
                class="form-control"
                [(ngModel)]="query"
                name="query"
                placeholder="e.g., 'next Monday' or '3 days from today'"
              />
            </div>
            <button
              type="submit"
              class="btn btn-sm btn-outline-primary mb-2"
              [disabled]="isLoading"
            >
              Interpret Date
            </button>
          </form>

          @if (error) {
          <div class="alert alert-danger mt-3">
            {{ error }}
          </div>
          } @if (result) {
          <div class="mt-4">
            <h4>Result:</h4>
            <div class="card">
              <div class="card-header">
                {{ result.request }}
              </div>
              <div class="card-body">
                <p><strong>Computed Date:</strong> {{ result.date | date }}</p>
                <pre>{{ result | json }}</pre>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class DateInterpreterComponent {
  query = '';
  result: { date: string; request: string } | null = null;
  error: string | null = null;
  isLoading = false;

  constructor(private api: ApiService) {}

  onSubmit() {
    if (!this.query.trim()) {
      this.error = 'Please enter a date phrase';
      return;
    }

    this.isLoading = true;
    this.error = null;
    this.result = null;

    this.api.interpretDate(this.query).subscribe({
      next: (res) => {
        this.result = res;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Could not interpret date. Try another phrase.';
        this.isLoading = false;
      },
    });
  }
}
