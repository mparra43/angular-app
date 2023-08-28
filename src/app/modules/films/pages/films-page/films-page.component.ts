import { Component } from '@angular/core';
import { FilmService } from '@modules/films/services/film.service';

@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.css']
})
export class FilmsPageComponent {
  upcomingMovies: Array<any> = [
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
    },
    {
      "adult": false,
      "backdrop_path": "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
      "genre_ids": [
        35,
        12,
        14
      ],
      "id": 346698,
      "original_language": "en",
      "original_title": "Barbie",
      "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
      "popularity": 1411.092,
      "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      "release_date": "2023-07-19",
      "title": "Barbie",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 3360
    },
    {
      "adult": false,
      "backdrop_path": "/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 298618,
      "original_language": "en",
      "original_title": "The Flash",
      "overview": "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
      "popularity": 1368.289,
      "poster_path": "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
      "release_date": "2023-06-13",
      "title": "The Flash",
      "video": false,
      "vote_average": 7,
      "vote_count": 2486
    },
    {
      "adult": false,
      "backdrop_path": "/rRcNmiH55Tz0ugUsDUGmj8Bsa4V.jpg",
      "genre_ids": [
        35,
        10749
      ],
      "id": 884605,
      "original_language": "en",
      "original_title": "No Hard Feelings",
      "overview": "On the brink of losing her childhood home, Maddie discovers an intriguing job listing: wealthy helicopter parents looking for someone to “date” their introverted 19-year-old son, Percy, before he leaves for college. To her surprise, Maddie soon discovers the awkward Percy is no sure thing.",
      "popularity": 1199.947,
      "poster_path": "/4K7gQjD19CDEPd7A9KZwr2D9Nco.jpg",
      "release_date": "2023-06-15",
      "title": "No Hard Feelings",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 886
    },
    {
      "adult": false,
      "backdrop_path": "/2Icjry0xdRSNxrtsBR1F47b9r3u.jpg",
      "genre_ids": [
        28,
        878,
        27
      ],
      "id": 615656,
      "original_language": "en",
      "original_title": "Meg 2: The Trench",
      "overview": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
      "popularity": 1656.935,
      "poster_path": "/FQHtuf2zc8suMFE28RyvFt3FJN.jpg",
      "release_date": "2023-08-02",
      "title": "Meg 2: The Trench",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 613
    },
    {
      "adult": false,
      "backdrop_path": "/nYDPmxvl0if5vHBBp7pDYGkTFc7.jpg",
      "genre_ids": [
        27
      ],
      "id": 709631,
      "original_language": "en",
      "original_title": "Cobweb",
      "overview": "Eight year old Peter is plagued by a mysterious, constant tapping from inside his bedroom wall—one that his parents insist is all in his imagination. As Peter's fear intensifies, he believes that his parents could be hiding a terrible, dangerous secret and questions their trust.",
      "popularity": 1119.811,
      "poster_path": "/cGXFosYUHYjjdKrOmA0bbjvzhKz.jpg",
      "release_date": "2023-07-19",
      "title": "Cobweb",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 201
    },
    {
      "adult": false,
      "backdrop_path": "/bz66a19bR6BKsbY8gSZCM4etJiK.jpg",
      "genre_ids": [
        28,
        27,
        53
      ],
      "id": 1006462,
      "original_language": "en",
      "original_title": "The Flood",
      "overview": "A horde of giant hungry alligators is unleashed on a group of in-transit prisoners and their guards after a massive hurricane floods Louisiana.",
      "popularity": 1067.243,
      "poster_path": "/mvjqqklMpHwOxc40rn7dMhGT0Fc.jpg",
      "release_date": "2023-07-14",
      "title": "The Flood",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 156
    },
    {
      "adult": false,
      "backdrop_path": "/hPcP1kv6vrkRmQO3YgV1H97FE5Q.jpg",
      "genre_ids": [
        27,
        9648,
        53
      ],
      "id": 614479,
      "original_language": "en",
      "original_title": "Insidious: The Red Door",
      "overview": "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
      "popularity": 862.847,
      "poster_path": "/d07phJqCx6z5wILDYqkyraorDPi.jpg",
      "release_date": "2023-07-05",
      "title": "Insidious: The Red Door",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 964
    },
    {
      "adult": false,
      "backdrop_path": "/6IafiYxaqR2MxCnEC29bi6637eo.jpg",
      "genre_ids": [
        28,
        12,
        53,
        35
      ],
      "id": 457332,
      "original_language": "en",
      "original_title": "Hidden Strike",
      "overview": "Two elite soldiers must escort civilians through a gauntlet of gunfire and explosions.",
      "popularity": 772.96,
      "poster_path": "/zsbolOkw8RhTU4DKOrpf4M7KCmi.jpg",
      "release_date": "2023-07-06",
      "title": "Hidden Strike",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 626
    },
    {
      "adult": false,
      "backdrop_path": "/8FQeHmusSN2hk3bICf16x5GFQvT.jpg",
      "genre_ids": [
        12,
        10751,
        14,
        10749
      ],
      "id": 447277,
      "original_language": "en",
      "original_title": "The Little Mermaid",
      "overview": "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
      "popularity": 718.218,
      "poster_path": "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
      "release_date": "2023-05-18",
      "title": "The Little Mermaid",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 1695
    },
    {
      "adult": false,
      "backdrop_path": "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
      "genre_ids": [
        18,
        36
      ],
      "id": 872585,
      "original_language": "en",
      "original_title": "Oppenheimer",
      "overview": "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
      "popularity": 640.141,
      "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      "release_date": "2023-07-19",
      "title": "Oppenheimer",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 2410
    },
    {
      "adult": false,
      "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
      "genre_ids": [
        16,
        10751,
        12,
        14,
        35
      ],
      "id": 502356,
      "original_language": "en",
      "original_title": "The Super Mario Bros. Movie",
      "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      "popularity": 629.06,
      "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      "release_date": "2023-04-05",
      "title": "The Super Mario Bros. Movie",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 6373
    },
    {
      "adult": false,
      "backdrop_path": "/lDCIQ1Qe7cRnhZ4ybQVVEbadMZ.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 1008042,
      "original_language": "en",
      "original_title": "Talk to Me",
      "overview": "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
      "popularity": 741.313,
      "poster_path": "/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
      "release_date": "2023-07-26",
      "title": "Talk to Me",
      "video": false,
      "vote_average": 7.2,
      "vote_count": 236
    },
    {
      "adult": false,
      "backdrop_path": "/f7UI3dYpr7ZUHGo0iIr1Qvy1VPe.jpg",
      "genre_ids": [
        16,
        10751,
        14,
        35
      ],
      "id": 1040148,
      "original_language": "en",
      "original_title": "Ruby Gillman, Teenage Kraken",
      "overview": "Ruby Gillman, a sweet and awkward high school student, discovers she's a direct descendant of the warrior kraken queens. The kraken are sworn to protect the oceans of the world against the vain, power-hungry mermaids. Destined to inherit the throne from her commanding grandmother, Ruby must use her newfound powers to protect those she loves most.",
      "popularity": 548.09,
      "poster_path": "/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg",
      "release_date": "2023-06-28",
      "title": "Ruby Gillman, Teenage Kraken",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 578
    },
    {
      "adult": false,
      "backdrop_path": "/iEFuHjqrE059SmflBva1JzDJutE.jpg",
      "genre_ids": [
        16,
        10751,
        28,
        14,
        10749
      ],
      "id": 496450,
      "original_language": "fr",
      "original_title": "Miraculous - le film",
      "overview": "A life of an ordinary Parisian teenager Marinette goes superhuman when she becomes Ladybug. Bestowed with magical powers of creation, Ladybug must unite with her opposite, Cat Noir, to save Paris as a new villain unleashes chaos unto the city.",
      "popularity": 506.014,
      "poster_path": "/bBON9XO9Ek0DjRwMBnJNCwC96Cd.jpg",
      "release_date": "2023-07-05",
      "title": "Miraculous: Ladybug & Cat Noir, The Movie",
      "video": false,
      "vote_average": 7.9,
      "vote_count": 503
    },
    {
      "adult": false,
      "backdrop_path": "/H6j5smdpRqP9a8UnhWp6zfl0SC.jpg",
      "genre_ids": [
        28,
        878
      ],
      "id": 565770,
      "original_language": "en",
      "original_title": "Blue Beetle",
      "overview": "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
      "popularity": 465.067,
      "poster_path": "/lZ2sOCMCcGaPppaXj0Wiv0S7A08.jpg",
      "release_date": "2023-08-16",
      "title": "Blue Beetle",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 238
    },
    {
      "adult": false,
      "backdrop_path": "/oqP1qEZccq5AD9TVTIaO6IGUj7o.jpg",
      "genre_ids": [
        14,
        28,
        12
      ],
      "id": 455476,
      "original_language": "en",
      "original_title": "Knights of the Zodiac",
      "overview": "When a headstrong street orphan, Seiya, in search of his abducted sister unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess, sent to watch over humanity. Can he let his past go and embrace his destiny to become a Knight of the Zodiac?",
      "popularity": 486.402,
      "poster_path": "/qW4crfED8mpNDadSmMdi7ZDzhXF.jpg",
      "release_date": "2023-04-27",
      "title": "Knights of the Zodiac",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 762
    },
    {
      "adult": false,
      "backdrop_path": "/r54HQwvisSXMfip7oJNhPSWyCK5.jpg",
      "genre_ids": [
        28,
        12,
        10752
      ],
      "id": 1061181,
      "original_language": "ja",
      "original_title": "キングダム 運命の炎",
      "overview": "It follows Li Xin and Wang Qi as they stand on the battlefield for the first time to fight off an invasion by Zhao, and it also follows Ying Zheng's unknown past.",
      "popularity": 461.367,
      "poster_path": "/lm5LF2eyCcBdCEfvpeyvpujOyPb.jpg",
      "release_date": "2023-07-28",
      "title": "Kingdom 3: The Flame of Fate",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 48
    },
    {
      "adult": false,
      "backdrop_path": "/aLpQ3G2LRgXYNrQgUlo6AQRo9R6.jpg",
      "genre_ids": [
        28,
        53
      ],
      "id": 1143190,
      "original_language": "en",
      "original_title": "Fear the Night",
      "overview": "During a bachelorette party in a secluded California farmhouse, masked intruders launch a brutal attack, forcing eight women to fight for survival. Led by Tess, a troubled military veteran, they unite to defend themselves throughout a harrowing night.",
      "popularity": 456.311,
      "poster_path": "/4XLZS2xvdv5rxizzTUVREtRyw95.jpg",
      "release_date": "2023-07-21",
      "title": "Fear the Night",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 102
    }
  ]
  series: Array<any> = []
  listObservers$: Array<any> = []

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.loadDataAll() //TODO 📌📌
    
  }

  async loadDataAll(): Promise<any> {
    try {
      const { results } = await this.filmService.getAllFilms$().toPromise()
      const series = await this.filmService.getAllSeries$().toPromise()
      if (results && Array.isArray(results)) {
        this.upcomingMovies = results;
        this.series = series.results;
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }


  }

}
