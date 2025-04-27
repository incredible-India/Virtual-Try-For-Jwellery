import { Component, OnInit } from '@angular/core';
import { JewelleryClient } from '../../Services/jewellery.service';
import { Jewellery } from '../../../models/jewellery.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shoppingpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shoppingpage.component.html',
  styleUrl: './shoppingpage.component.css'
})
export class ShoppingpageComponent implements OnInit {
  constructor(private jewelleryService : JewelleryClient) { }
  jewelleries: Jewellery[] = [];
  ngOnInit(): void {
    this.getAllJewelleries();
  }


    getAllJewelleries() {
      this.jewelleryService.getAllJewelleries().subscribe({
        next: (data) => {
          this.jewelleries = data;
        },
        error: (err) => {
          console.error('Failed to fetch jewellery data:', err);
        }
      });
    }

    parseFloat(value: string): number {
      return parseFloat(value.replace(/,/g, ''));
    }
  // Add any methods or properties needed for the shopping page functionality

}
