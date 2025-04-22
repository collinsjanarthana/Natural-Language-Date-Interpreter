// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { DateInterpreterComponent } from './date-interpreter/date-interpreter.component';
import { HistoryComponent } from './history/history.component';
import { ProductGeneratorComponent } from './components/product-generator/product-generator.component';

export const routes: Routes = [
  { path: '', component: DateInterpreterComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'product', component: ProductGeneratorComponent },
  { path: '**', redirectTo: '' }, // Fallback route
];
