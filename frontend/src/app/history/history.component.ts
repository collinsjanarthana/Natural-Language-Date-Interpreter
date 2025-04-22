import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { DatePipe } from '@angular/common';

// Define an interface for your history items
interface HistoryItem {
  id: number;
  request: string;
  response: string;
  created_at: string;
  showResponse?: boolean; // Optional property for UI state
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, DatePipe],
  template: `
    <div class="container mt-4">
      @for (item of history; track item.id) {
      <div class="mb-3">
        <div class="card">
          <div
            class="card-header d-flex justify-content-between align-items-center"
          >
            <span class="fw-bold">Request: {{ item.request }}</span>
            <small class="text-muted">{{ item.created_at | date }}</small>
          </div>
          <div class="card-body">

            <!-- Toggle to expand/collapse response -->
            <button
              class="btn btn-sm btn-outline-primary mb-2"
              (click)="toggleResponse(item)"
            >
              {{ item.showResponse ? 'Hide Response' : 'Show Response' }}
            </button>

            <!-- Response content (collapsed by default) -->
            @if (item.showResponse) {
            <div class="response-container mt-2">
              @if (isJsonString(item.response)) {
              <!-- Format JSON response -->
              <pre class="bg-light p-3 response-pre">{{
                formatJson(item.response)
              }}</pre>
              } @else {
              <!-- Display text response -->
              <div class="bg-light p-3 response-text">{{ item.response }}</div>
              }
            </div>
            }
          </div>
        </div>
      </div>
      }
    </div>
  `,
  styles: [
    `
      .response-pre {
        max-height: 400px;
        overflow-y: auto;
        white-space: pre-wrap;
        word-break: break-word;
      }
      .response-text {
        max-height: 400px;
        overflow-y: auto;
        white-space: pre-wrap;
        word-break: break-word;
      }
    `,
  ],
})
export class HistoryComponent implements OnInit {
  history: HistoryItem[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getHistory().subscribe((res: HistoryItem[]) => {
      this.history = res.map((item: HistoryItem) => ({
        ...item,
        showResponse: false, // Add property to track visibility state
      }));
    });
  }

  // Toggle response visibility
  toggleResponse(item: HistoryItem): void {
    item.showResponse = !item.showResponse;
  }

  // Check if string is valid JSON
  isJsonString(str: string): boolean {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  }

  // Format JSON for display
  formatJson(jsonString: string): string {
    try {
      const obj = JSON.parse(jsonString);
      return JSON.stringify(obj, null, 2);
    } catch (e) {
      return jsonString;
    }
  }
}
