
let url = "https://aslstrongapi.herokuapp.com/api/allwords"
fetch(url)
  .then(res => res.json())
  .then(data => console.log())

  // let url = "https://aslstrongapi.herokuapp.com/api/allwords"

{
  "words": [
    {
      "words": ["Doghouse"],
      "videoId": 23,
      "categories": ["Animals", "House"]
    },
    {
      "words": ["Sneeze"],
      "videoId": 61,
      "categories": ["Health", "ASL For Baby"]
    }
  ]
}

//https://aslstrongapi.herokuapp.com/api/word/61

{
  "words": {
      "words": ["Sunset", "Shabbat"],
      "videoId": 66
    },
  "video": {
    "id": 66,
    "videoURL": "https://www.youtube.com/watch?v=i_vxVxXTerA",
    "dominateHand": "",
    "nonDominateHand": "",
    "orientation": "",
    "location": "",
    "movement": "",
    "expression": "",
    "createdAt": "2017-10-09T02:58:06.008Z",
    "updatedAt": "2017-10-09T02:58:06.008Z"
  }
}

//https://aslstrongapi.herokuapp.com/api/letter/a

{
  "words": [
    {
      "id": 20,
      "videoId": 25,
      "categories": ["School"],
      "words": ["abbreviate"],
      "createdAt": "2017-10-06T21:04:48.573Z",
      "updatedAt": "2017-10-06T21:04:48.573Z"
    }
  ]
}

//https://aslstrongapi.herokuapp.com/api/categories/Food

{
  "info": [
    {
      "id": 30,
  "videoId": 35,
  "categories": ["Food","ASL For Baby"],
  "words": ["Soup"],
  "createdAt": "2017-10-07T18:45:12.518Z",
  "updatedAt": "2017-10-07T18:45:12.518Z"
    }
  ]
}

//https://aslstrongapi.herokuapp.com/api/categories

[
"Alphabet",
"Animals",
"ASL For Baby",
"Baby",
"Body",
"Clothes",
"Country",
"Family",
"Food",
"Geography",
"Health",
"Holidays",
"House",
"Music",
"Nature",
"occupations",
"Recreation",
"Religious",
"School",
"Time",
"Wedding"
]
