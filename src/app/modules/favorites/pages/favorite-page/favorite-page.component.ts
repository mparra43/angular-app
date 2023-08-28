import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent {
  favoriteMovies: Array<any> = [
    {
      "adult": false,
      "backdrop_path": "/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
      "genre_ids": [
        16,
        35,
        10751,
        14,
        10749
      ],
      "id": 976573,
      "original_language": "en",
      "original_title": "Elemental",
      "overview": "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
      "popularity": 2933.943,
      "poster_path": "/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
      "release_date": "2023-06-14",
      "title": "Elemental",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 1402
    },
    {
      "adult": false,
      "backdrop_path": "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 667538,
      "original_language": "en",
      "original_title": "Transformers: Rise of the Beasts",
      "overview": "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
      "popularity": 1520.55,
      "poster_path": "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
      "release_date": "2023-06-06",
      "title": "Transformers: Rise of the Beasts",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 2925
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
