import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Review {
  id?: number;
  name: string;
  message: string;
  createdAt?: string;
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  review: Review = { name: '', message: '' }; // ✅ это добавляем
  reviews: Review[] = [];
  userName: string = ''; // будет заполнено при отправке
  apiUrl = 'https://localhost:7174/api/reviews';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadReviews();
  }

  loadReviews() {
    this.http.get<Review[]>(this.apiUrl).subscribe(data => {
      this.reviews = data;
    });
  }

  sendReview() {
    if (this.review.name.trim() && this.review.message.trim()) {
      this.http.post<Review>(this.apiUrl, this.review).subscribe(() => {
        this.userName = this.review.name; // запоминаем, кто отправил
        this.review = { name: '', message: '' }; // очищаем форму
        this.loadReviews();
      });
    }
  }
}
