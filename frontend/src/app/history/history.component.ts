import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { DatePipe } from '@angular/common';

interface HistoryItem {
  id: number;
  input_text: string;
  interpreted_date: string | null;
  response_json: string | null;
  type: string;
  created_at: string;
  showResponse?: boolean;
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
            <span class="fw-bold">Request: {{ item.input_text }}</span>
            <small class="text-muted">{{
              item.created_at | date : 'medium'
            }}</small>
          </div>
          <div class="card-body">
            <div class="text-muted mb-2">
              Type: {{ item.type || 'Unknown' }}
            </div>

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
              @if (item.type === 'date') {
              <!-- Display date response -->
              <div class="bg-light p-3">
                <h5>Date Interpretation</h5>
                <pre class="response-pre">{{ getFormattedDateJson(item) }}</pre>
              </div>
              } @else if (item.response_json) {
              <!-- Format JSON response -->
              <div class="bg-light p-3">
                <h5>Product Description</h5>
                <pre class="response-pre">{{
                  formatJson(item.response_json)
                }}</pre>
              </div>
              } @else {
              <!-- Fallback display -->
              <div class="bg-light p-3 response-text">
                No response data available
              </div>
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
        background-color: #f8f9fa;
        border: none;
        margin: 0;
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
    this.api.getHistory().subscribe((res: any[]) => {
      this.history = res.map((item: any) => ({
        ...item,
        showResponse: false,
        // Determine type based on available data
        type: item.type || (item.interpreted_date ? 'date' : 'unknown'),
      }));
      console.log('History loaded:', this.history);
    });
  }

  // Toggle response visibility
  toggleResponse(item: HistoryItem): void {
    item.showResponse = !item.showResponse;
  }

  // Format JSON for display
  formatJson(jsonString: string | null): string {
    if (!jsonString) return 'No data';

    try {
      const obj = JSON.parse(jsonString);
      return JSON.stringify(obj, null, 2);
    } catch (e) {
      return jsonString;
    }
  }

  // Get formatted date JSON
  getFormattedDateJson(item: HistoryItem): string {
    // If response_json exists and is valid JSON, use that
    if (item.response_json) {
      try {
        const obj = JSON.parse(item.response_json);
        return JSON.stringify(obj, null, 2);
      } catch (e) {
        // If parsing fails, fall back to creating a JSON object
      }
    }

    // If no valid response_json, create a JSON object from individual fields
    const dateObj = {
      date: item.interpreted_date,
      request: item.input_text,
    };

    return JSON.stringify(dateObj, null, 2);
  }
}