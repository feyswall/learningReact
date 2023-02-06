let movies = [
  {
    "_id": "63e0b980d8008c8d0d3dcd7a",
    "title": "Bessie Long",
    "numberInStock": 20,
    "dailyRentalRate": -63.171516,
    "registered": "2022-12-16T11:01:12 -03:00",
    "phone": "+1 (840) 542-2198"
  },
  {
    "_id": "63e0b980f3445f7f1a7e5a67",
    "title": "Cabrera Marsh",
    "numberInStock": 29,
    "dailyRentalRate": 53.167548,
    "registered": "2022-06-23T03:15:28 -03:00",
    "phone": "+1 (820) 555-2898"
  },
  {
    "_id": "63e0b98028ef2f7ad6b3d9ea",
    "title": "Duran Hoover",
    "numberInStock": 28,
    "dailyRentalRate": -6.796335,
    "registered": "2015-11-10T04:54:46 -03:00",
    "phone": "+1 (873) 517-3785"
  },
  {
    "_id": "63e0b980d77d4d0cd7471866",
    "title": "Jolene Gould",
    "numberInStock": 25,
    "dailyRentalRate": 33.8263,
    "registered": "2014-11-18T02:43:44 -03:00",
    "phone": "+1 (922) 480-3568"
  },
  {
    "_id": "63e0b9805d5d084ac656520c",
    "title": "Berg Burgess",
    "numberInStock": 33,
    "dailyRentalRate": -43.163021,
    "registered": "2021-04-17T08:32:37 -03:00",
    "phone": "+1 (840) 460-2070"
  },
  {
    "_id": "63e0b980d859d8c89b5c1a17",
    "title": "Henson Hurley",
    "numberInStock": 27,
    "dailyRentalRate": -48.125547,
    "registered": "2017-06-21T02:28:26 -03:00",
    "phone": "+1 (899) 406-2912"
  },
  {
    "_id": "63e0b980e371b8f6c31983f6",
    "title": "Noelle Ward",
    "numberInStock": 32,
    "dailyRentalRate": 73.831173,
    "registered": "2016-02-23T01:24:58 -03:00",
    "phone": "+1 (822) 500-3971"
  },
  {
    "_id": "63e0b98046a4231cd890d292",
    "title": "Christie Hampton",
    "numberInStock": 30,
    "dailyRentalRate": 67.226422,
    "registered": "2021-03-13T10:23:53 -03:00",
    "phone": "+1 (960) 560-3164"
  },
  {
    "_id": "63e0b98066607dc9446d4ce6",
    "title": "Corine Hunt",
    "numberInStock": 38,
    "dailyRentalRate": -73.84774,
    "registered": "2014-11-01T02:34:28 -03:00",
    "phone": "+1 (880) 489-2198"
  },
  {
    "_id": "63e0b980acd24da3ccc00370",
    "title": "House Franks",
    "numberInStock": 28,
    "dailyRentalRate": -26.177727,
    "registered": "2017-05-15T07:29:43 -03:00",
    "phone": "+1 (897) 474-2727"
  },
  {
    "_id": "63e0b98026d1e2f220e6ccf9",
    "title": "Rachelle Goodman",
    "numberInStock": 20,
    "dailyRentalRate": -48.784098,
    "registered": "2016-03-19T05:18:03 -03:00",
    "phone": "+1 (970) 587-3866"
  },
  {
    "_id": "63e0b98008d904a0183b1f5e",
    "title": "Hampton Taylor",
    "numberInStock": 28,
    "dailyRentalRate": 13.318399,
    "registered": "2014-01-10T11:54:34 -03:00",
    "phone": "+1 (897) 542-3743"
  },
  {
    "_id": "63e0b9804df2f95dd7878f1b",
    "title": "Hardin Monroe",
    "numberInStock": 39,
    "dailyRentalRate": 20.896205,
    "registered": "2021-02-21T04:17:07 -03:00",
    "phone": "+1 (850) 580-2658"
  },
  {
    "_id": "63e0b980e473f7df658af762",
    "title": "Ramona Pruitt",
    "numberInStock": 21,
    "dailyRentalRate": 22.79338,
    "registered": "2021-04-15T02:02:37 -03:00",
    "phone": "+1 (896) 590-2217"
  },
  {
    "_id": "63e0b980f43fa52490e5a819",
    "title": "Vonda Brennan",
    "numberInStock": 38,
    "dailyRentalRate": -8.862155,
    "registered": "2019-04-06T11:03:32 -03:00",
    "phone": "+1 (831) 441-3754"
  }
]

export function getMovies() {
    return movies;
}

export function getMovie(movieId) {
    console.log( movieId )
    movies.map(mov => {
        if (mov._id === movieId) return mov;
    });
}