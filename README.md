# Night_and_Day

# Project Overview
An web-based App that allows users to keep notes about their mood, short-, and long-term goals.

## Project Name

Night_and_Day

## Project Description

"The unexamined life is not worth living" -- the words of Socrates as he defended himself against the claims of corrupting the youth of Athens. These words ring true despite the fact that we will never know if Socrates actually made this decree. As Plato wrote in his description of the trial "I only know that I do not know." Night_and_Day allows users to track their mood and goals, a very important step in understanding our internal, emotional dialouge.  

### Wireframes

https://xd.adobe.com/view/a18af1f8-3e1f-4d58-836a-00977547ba15-f4d9/#access_token=eyJ4NXUiOiJpbXNfbmExLWtleS0xLmNlciIsImFsZyI6IlJTMjU2In0.eyJpZCI6IjE1OTMzODgwNDgxMDdfNjVkYjk1ZDEtYTk0MS00YWZmLThmOTMtNDIzZjZkNzlhZWYwX3VlMSIsImNsaWVudF9pZCI6IkNvbWV0V2ViMSIsInVzZXJfaWQiOiI5QzAyMEE2MTVFRUU1REQyMEE0OTVGRDJAQWRvYmVJRCIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJhcyI6Imltcy1uYTEiLCJmZyI6IlVSWjVNT0dIVkxQNTVYNldPTUkzUU9RQUJRPT09PT09Iiwic2lkIjoiMTU5MzM4MzYxOTQ4M180MTA1Zjk5MS1hMDNmLTQ4YjgtOTI0Mi00ZThkM2JjODJkZjNfdWUxIiwibW9pIjoiNTMyYzEwODkiLCJjIjoiUW4yK3M0R1pYczNDL3djVkVwS1BTdz09IiwiZXhwaXJlc19pbiI6Ijg2NDAwMDAwIiwiY3JlYXRlZF9hdCI6IjE1OTMzODgwNDgxMDciLCJzY29wZSI6IiJ9.lN1PqqcIVLJPTP2WJbDRal2T2njVq3gLuf266gjpXYGj8RpAzkSNLIqyHZ4giREsN4Lh4URIeSm8AjzScpuxgEpOBxRGCRxYKSlBKhYBCABCcV3xRytSHVAdU9mKtgZJJ1CLJgibcTjsq31pG1cV58EpHB2xhcuIe1ZIQXRTCUJwUL5vEPvSB3yTs4XFDD68K760_hV6er5jY6eHCQeTbkOysd-DlmZ6jbTlQTVMkT5FD7-Sgeo2MF_sUmdByKjbHTm1qhIXmTa2QNvTgcpZY7xEAwTg_k3syPVt8cnAbjsIpv4ypqQ87bS1LrwcwFu9K0llCCh8C_GiM7xNukiRnw&token_type=bearer&expires_in=86399995

#### MVP Goals

- Create a web-based application that allows users to reflect on their thoughts twice a day. 
- Uses an API to access NASA photos for the design of the application.
- Uses React and React Router, to create a multi-page application.
- Uses two media queries to ensure the app has a responsive design for a wide-range of screen sizes. 

#### MVP API

```
|    API     | Quality Docs? | Documentation | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| NASA API |      yes      | https://api.nasa.gov/ | https://api.nasa.gov/planetary/apod?api_key={APIKEY} |

{
    "date": "2020-06-28",
    "explanation": "What are those spots on Jupiter? Largest and furthest, just right of center, is the Great Red Spot -- a huge storm system that has been raging on Jupiter possibly since Giovanni Cassini's likely notation of it 355 years ago.  It is not yet known why this Great Spot is red. The spot toward the lower left is one of Jupiter's largest moons: Europa. Images from Voyager in 1979 bolster the modern hypothesis that Europa has an underground ocean and is therefore a good place to look for extraterrestrial life. But what about the dark spot on the upper right? That is a shadow of another of Jupiter's large moons: Io. Voyager 1 discovered Io to be so volcanic that no impact craters could be found.  Sixteen frames from Voyager 1's flyby of Jupiter in 1979 were recently reprocessed and merged to create the featured image.  About 43 years ago, Voyager 1 launched from Earth and started one of the greatest explorations of the Solar System ever.    Free Download: Voyager Posters",
    "hdurl": "https://apod.nasa.gov/apod/image/2006/EuropaJupiter_Voyager_2792.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Europa and Jupiter from Voyager 1",
    "url": "https://apod.nasa.gov/apod/image/2006/EuropaJupiter_Voyager_960.jpg"
}

```

#### MVP Libraries & Dependencies

> Use this section to list the key supporting libraries and their role in the project.

|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | Will be used as the primary structure of the application |
| React Router | Will be used to support multiple urls |

<br>

#### MVP Components

> Use this section to define your React components and the data architecture of your app.

```
src
|__ Main
|__ Prompt
|__ Summary
|__ components/
      |__ Main/
          |__Triangle
          |__MainDay
          |__MainNight
      |__ Prompt/
          |__slider
          |__subButton
          |__writingCenter
      |__Summary/
          |__Quote
          |__time
          |__todo
          |__weather
```

<br>

#### MVP Breakdown

|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    | functional     |   N   |   N   |   N   | Renders all componenets and is exported to index|
|   Main.js  |   functional    |   N   |   N   |   N   |  Renders Main Page /main |
| Prompt.js | class | Y | N | N | Renders /prompt |
| Summary.js | class | Y | N | N | renders /summary |
| MainDay.js | functional| N | N | N | renders day image on /main |
| MainNight.js | class | Y | N | N | renders night image on /main |
| Triangle.js  | functional | N | N | N | renders triangle on /main |
| slider.js | functional | N | N | N | renders slider on /prompt |
| subButton.js | functional| N | N | N | renders submit button on /prompt |
| WritingCenter.js | class | Y | N | N | renders text editor onto /prompt tracks users writing |
| Quote.js | class | Y | N | N | calls api and renders random quote on page /summary |
| Time.js | class | Y | N | N | checks time and renders time to /summary |
| todo.js | class | Y | N | N | renders text editor onto /prompt tracks users writing |
| weather.js | class | Y | N | N | makes an api call and renders weather data based on the users location |
|    Index     | functional |   n   |   n   |   y   | renders to DOM |

<br>

#### MVP Timeframes

| Task             | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
|    App.js    |   H     |     2 hrs      |     2 hrs     |    2 hrs    |
|   Prompt.js | L (PMVP) | 2hrs | 3hrs | 3hrs |
| Day.js | H (no longer exists was refactored into prompt.js) | 2hrs | 3hrs | 3hrs |
| NightMain.js  | H (no longer exists was refactored into prompt.js) | 2 hrs | 2 hrs  |    3 hrs    |
|   Triangle.js   |    M    |     3 hrs      |     2 hrs     |    2 hrs    |
|   subButtons.js  |    M      |     2 hrs      |     1 hrs     |    1 hrs    |
| WritingCenter.js | M | 2hrs | 4hrs | 4hrs |
| Summary.js | M | 4hrs | 6hrs | 6hrs |
| Weather.js | L (pmvp) | 3hrs | 5hrs | 5hrs|
| Quote.js | L (pmvp) | 2hrs | 3hrs | 3hrs |
| Research | M | | 8hrs| 8hrs|
| Todo.js | L (pmvp) | 2hrs | 4hrs | 4hrs |
| Time.js |  M (PMVP) | 2 hrs | 4hrs | 4hrs|
|    contingency    |        |     5 hrs      |          |        |
| TOTAL            |          |     32 hrs      |     47hrs   |     47hrs     |

<br>

### Post-MVP

TBD

<br>

***

## Project Delivery

> The Project Delivery section should be completed as your work on your project.

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.
The code below allows us to create an event listner that starts a countdown clock when the user start to type. The function is triggered by an onKeyDown listener. The code below adds a boolean value within state so that the function string is only triggered once.
```
resetSec = () => {
    if (this.state.min > 0) {
      this.setState({
        min: this.state.min - 1,
        sec: 59
      })
      this.timeKeeper()
    }
  }
  subtractSec = () => {
    this.setState({
      sec: this.state.sec - 1
    })
    this.timeKeeper()
  }
  timeKeeper = () => {
    if (this.state.sec > 0) {
      setTimeout(() => { this.subtractSec() }, 1000)
    } else if (this.state.sec === 0) {
      setTimeout(() => { this.resetSec() }, 1000)
    }
  }
  handleTimer = () => {
    if (this.state.timerOn === true) {
      this.setState({
        timerOn: false
      })
      this.timeKeeper()
    }
  }
  handleChange(value) {
    this.setState({
      text: value
    })
  }

```