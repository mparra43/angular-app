import { Component } from '@angular/core';
import { FilmModel} from '@core/models/Films.model';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';



@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    standalone: true,
    imports: [SideBarComponent, FooterComponent, RouterOutlet]
})
export class HomePageComponent {

  moviesInTheaters: Array<FilmModel> = [
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

  series: Array<FilmModel> =[
    {
      "backdrop_path": "/jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg",
      "first_air_date": "1952-12-26",
      "genre_ids": [
        10763
      ],
      "id": 94722,
      "name": "Tagesschau",
      "origin_country": [
        "DE"
      ],
      "original_language": "de",
      "original_name": "Tagesschau",
      "overview": "German daily news program, the oldest still existing program on German television.",
      "popularity": 4202.066,
      "poster_path": "/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg",
      "vote_average": 7.5,
      "vote_count": 128
    },
    {
      "backdrop_path": "/t2rAdgjSh0WYbXzdOB5zTDqzdCI.jpg",
      "first_air_date": "2022-11-02",
      "genre_ids": [
        18
      ],
      "id": 213713,
      "name": "Faltu",
      "origin_country": [
        "IN"
      ],
      "original_language": "hi",
      "original_name": "Faltu",
      "overview": "What's in a name? Amidst the arid landscape of Rajasthan, a young woman with dreamy eyes struggles to prove her worth.",
      "popularity": 3122.269,
      "poster_path": "/lgyFuoXs7GvKJN0mNm7z7OMOFuZ.jpg",
      "vote_average": 7,
      "vote_count": 134
    },
    {
      "backdrop_path": "/9TXcHOeCsM8W3ZKKIKjdYUsRSeq.jpg",
      "first_air_date": "2017-07-17",
      "genre_ids": [
        80,
        18
      ],
      "id": 72879,
      "name": "Tomorrow is Ours",
      "origin_country": [
        "FR"
      ],
      "original_language": "fr",
      "original_name": "Demain nous appartient",
      "overview": "The story revolves around the people of Sète, France. Their lives are punctuated by family rivalries, romance and scenes from daily life, but also by plots involving police investigations, secrets and betrayals.",
      "popularity": 1856.361,
      "poster_path": "/3uU5uJzOX7xe7mn7YKpBM9oiEZO.jpg",
      "vote_average": 6.7,
      "vote_count": 32
    },
    {
      "backdrop_path": "/3n2TjKw3HrwDqgVgcynvantOfS3.jpg",
      "first_air_date": "2023-01-04",
      "genre_ids": [
        18,
        10751
      ],
      "id": 215103,
      "name": "Teri Meri Doriyaann",
      "origin_country": [
        "IN"
      ],
      "original_language": "hi",
      "original_name": "तेरी मेरी डोरियाँ",
      "overview": "It’s hate at first sight for Sahiba and Angad! But destined to be together, their lives get intertwined by a marriage alliance, and a love-hate story ensues.",
      "popularity": 2880.436,
      "poster_path": "/4BHDmYiuSnNL3nqKIOzLJKYX4AN.jpg",
      "vote_average": 7.2,
      "vote_count": 106
    },
    {
      "backdrop_path": "/zDUZKdCMESNbylWGybN4FMaUckG.jpg",
      "first_air_date": "2022-11-28",
      "genre_ids": [
        18
      ],
      "id": 215315,
      "name": "Rabb Se Hai Dua",
      "origin_country": [
        "IN"
      ],
      "original_language": "hi",
      "original_name": "रब्ब से है दुआ",
      "overview": "Dua and her husband are a perfect married couple in the eyes of their family. However, Dua’s life turns upside down when her husband seeks her permission to marry another woman.",
      "popularity": 2885.41,
      "poster_path": "/6ikbefd7VeopbBuGgioYMNU5bQj.jpg",
      "vote_average": 6.7,
      "vote_count": 82
    },
    {
      "backdrop_path": "/1Xm0WqoT0DjZm5JdG2V6YFabrOz.jpg",
      "first_air_date": "2023-02-13",
      "genre_ids": [
        10759,
        35,
        18
      ],
      "id": 215803,
      "name": "Batang Quiapo",
      "origin_country": [
        "PH"
      ],
      "original_language": "tl",
      "original_name": "Quiapo Kid",
      "overview": "A young man rises to be one of the biggest outlaws in the neighborhood while he navigates his way in life to survive in Quiapo. Hoping to earn the affection of his parents, his feat draws him closer to the truth about his identity.",
      "popularity": 1693.108,
      "poster_path": "/9McqS8mgMf5NJCAKZIY6J1oOl8y.jpg",
      "vote_average": 7.3,
      "vote_count": 88
    },
    {
      "backdrop_path": "/1Vj73YrMj4OLBppgZdWXoGZlsGI.jpg",
      "first_air_date": "2022-12-05",
      "genre_ids": [
        18,
        10751,
        10766
      ],
      "id": 215902,
      "name": "Katha Ankahee",
      "origin_country": [
        "IN"
      ],
      "original_language": "hi",
      "original_name": "कथा अनकही",
      "overview": "Katha, a single parent, is in need of funds for her son's medical treatment. She comes across Viaan, who offers help but his conditions put her in an awkward situation.",
      "popularity": 1692.31,
      "poster_path": "/uhXU0SMPMlemKGHmwbldM60qqmW.jpg",
      "vote_average": 7.6,
      "vote_count": 96
    },
    {
      "backdrop_path": "/rj3jBAZwPiOgkwAy1205MAgLahj.jpg",
      "first_air_date": "2018-08-27",
      "genre_ids": [
        10766
      ],
      "id": 81329,
      "name": "Chronicles of the Sun",
      "origin_country": [
        "FR"
      ],
      "original_language": "fr",
      "original_name": "Un si grand soleil",
      "overview": "",
      "popularity": 1572.278,
      "poster_path": "/t6jVlbPMtZOJoAOfeoR4yQmnjXM.jpg",
      "vote_average": 7.5,
      "vote_count": 45
    },
    {
      "backdrop_path": "/jtAh65bX9Ydy2NFkwTN6V9WSzWb.jpg",
      "first_air_date": "2023-02-07",
      "genre_ids": [
        18
      ],
      "id": 220525,
      "name": "Maitree",
      "origin_country": [],
      "original_language": "hi",
      "original_name": "मैत्री",
      "overview": "",
      "popularity": 2437.36,
      "poster_path": "/k57vsZ5Pl80WRR02ahgC3QLdhhL.jpg",
      "vote_average": 7.8,
      "vote_count": 35
    },
    {
      "backdrop_path": "/ottT2Yt0OfHiHp3PHJTLNVV8JPE.jpg",
      "first_air_date": "1992-05-11",
      "genre_ids": [
        18,
        10766
      ],
      "id": 13945,
      "name": "Gute Zeiten, schlechte Zeiten",
      "origin_country": [
        "DE"
      ],
      "original_language": "de",
      "original_name": "Gute Zeiten, schlechte Zeiten",
      "overview": "Gute Zeiten, schlechte Zeiten is a long-running German television soap opera, first broadcast on RTL in 1992. The programme concerns the lives of a fictional neighborhood in Germany's capital city Berlin. Over the years the soap opera tends to have an overhaul of young people in their late teens and early twenties; targeting a young viewership.",
      "popularity": 1467.799,
      "poster_path": "/fNHBzjxsydcAssxXqb5IV2obDdU.jpg",
      "vote_average": 6.9,
      "vote_count": 17
    },
    {
      "backdrop_path": "/yJEFbFax9fb8ePB0rK9UIQoXMG4.jpg",
      "first_air_date": "2023-04-17",
      "genre_ids": [
        18
      ],
      "id": 222100,
      "name": "Meant To Be",
      "origin_country": [
        "KR"
      ],
      "original_language": "ko",
      "original_name": "Meant To Be",
      "overview": "The work depicts the lives of two women, Lee Hae In, and Kang Se Na, who fell into different fates as children.",
      "popularity": 1445.634,
      "poster_path": "/xdzSO56WueBMW45QHWemV3D6mzJ.jpg",
      "vote_average": 7,
      "vote_count": 93
    },
    {
      "backdrop_path": "/m0TiLZ79RR19Zz0AZruQSBeH39x.jpg",
      "first_air_date": "2019-07-09",
      "genre_ids": [
        10764
      ],
      "id": 90521,
      "name": "Love Island",
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "Love Island",
      "overview": "American version of the British dating reality competition in which ten singles come to stay in a villa for a few weeks and have to couple up with one another. Over the course of those weeks, they face the public vote and might be eliminated from the show. Other islanders join and try to break up the couples.",
      "popularity": 2303.791,
      "poster_path": "/kU2y21cls8WargMaX7KI47URMjD.jpg",
      "vote_average": 7.4,
      "vote_count": 117
    },
    {
      "backdrop_path": "/yYNa1nqvNK94xZz3eKyfvZdAvPi.jpg",
      "first_air_date": "2020-11-02",
      "genre_ids": [
        10766
      ],
      "id": 112470,
      "name": "Here it all begins",
      "origin_country": [
        "FR"
      ],
      "original_language": "fr",
      "original_name": "Ici tout commence",
      "overview": "",
      "popularity": 1355.357,
      "poster_path": "/60cqjI590JKXCAABqCStVmSBGET.jpg",
      "vote_average": 7,
      "vote_count": 26
    },
    {
      "backdrop_path": "/2N4LXvTkUwPRkbvyzdmzvtnCHgR.jpg",
      "first_air_date": "2023-07-25",
      "genre_ids": [],
      "id": 225660,
      "name": "Pira-Pirasong Paraiso",
      "origin_country": [
        "PH"
      ],
      "original_language": "tl",
      "original_name": "Pira-Pirasong Paraiso",
      "overview": "A con artist takes on the job of pretending to be one of the long-lost sisters of a young and rich woman. As she navigates a world of cunning and lies, she learns about right and wrong, love and family, and spectacular truths about herself.",
      "popularity": 2161.056,
      "poster_path": "/gELcO56G9EsUj6LSjaDq8VvI8De.jpg",
      "vote_average": 8.6,
      "vote_count": 7
    },
    {
      "backdrop_path": "/5MkBAawsj7O9zitVtzMXagyrIBw.jpg",
      "first_air_date": "2023-01-30",
      "genre_ids": [
        18,
        10766
      ],
      "id": 217216,
      "name": "Flor Sem Tempo",
      "origin_country": [
        "PT"
      ],
      "original_language": "pt",
      "original_name": "Flor Sem Tempo",
      "overview": "",
      "popularity": 1329.88,
      "poster_path": "/bclnfDXvx7UydFSk83B258vRRvI.jpg",
      "vote_average": 7.2,
      "vote_count": 36
    },
    {
      "backdrop_path": "/5YfFibGB0Mjcl2RHUqztlPBCJp8.jpg",
      "first_air_date": "2023-06-12",
      "genre_ids": [
        18,
        10766
      ],
      "id": 226411,
      "name": "Mía es la venganza",
      "origin_country": [
        "ES"
      ],
      "original_language": "es",
      "original_name": "Mía es la venganza",
      "overview": "",
      "popularity": 1300.67,
      "poster_path": "/bReUZMOPDSs4fpONIIQER6X4yNm.jpg",
      "vote_average": 7.3,
      "vote_count": 53
    },
    {
      "backdrop_path": "/mAJ84W6I8I272Da87qplS2Dp9ST.jpg",
      "first_air_date": "2023-01-23",
      "genre_ids": [
        9648,
        18
      ],
      "id": 202250,
      "name": "Dirty Linen",
      "origin_country": [
        "PH"
      ],
      "original_language": "tl",
      "original_name": "Dirty Linen",
      "overview": "To exact vengeance, a young woman infiltrates the household of an influential family as a housemaid to expose their dirty secrets. However, love will get in the way of her revenge plot.",
      "popularity": 1296.112,
      "poster_path": "/aoAZgnmMzY9vVy9VWnO3U5PZENh.jpg",
      "vote_average": 6.8,
      "vote_count": 101
    },
    {
      "backdrop_path": null,
      "first_air_date": "2022-12-19",
      "genre_ids": [],
      "id": 227017,
      "name": "YHC: 2nd Generation",
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "YHC: 2nd Generation",
      "overview": "When destiny brings a reserved physiotherapist, Dr Nayantara and a famous rockstar Samrat together, will love blossom between them?",
      "popularity": 2051.835,
      "poster_path": null,
      "vote_average": 6.6,
      "vote_count": 5
    },
    {
      "backdrop_path": "/kdF7ZTktLHVVhAhI90uuzqlZqJI.jpg",
      "first_air_date": "2023-06-06",
      "genre_ids": [
        18
      ],
      "id": 228093,
      "name": "Titlie",
      "origin_country": [
        "IN"
      ],
      "original_language": "hi",
      "original_name": "Titlie",
      "overview": "Obsessed by the notion of fairy tale love , Titlie marries her beau Garv . Soon , the picture - perfect romance turns abusive , forcing her to wrestle with reality .",
      "popularity": 2045.347,
      "poster_path": "/5kZi1LCFugNAeDCWOF3ornGNm2W.jpg",
      "vote_average": 7.9,
      "vote_count": 83
    },
    {
      "backdrop_path": "/wJmcuxa0C4AERmA9mejxm9qRYDj.jpg",
      "first_air_date": "2022-06-06",
      "genre_ids": [
        80,
        9648
      ],
      "id": 203504,
      "name": "Aashiqana",
      "origin_country": [
        "IN"
      ],
      "original_language": "hi",
      "original_name": "आशिकाना",
      "overview": "A serial killer sparks the story of uptight Yashvardhan and feisty Chikki. Plagued by misunderstandings, how far do they have to go to nab the murderer?",
      "popularity": 2164.306,
      "poster_path": "/a4Z6Uohb6Ln5vcPvMUzwyn3WBjP.jpg",
      "vote_average": 6.7,
      "vote_count": 33
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
