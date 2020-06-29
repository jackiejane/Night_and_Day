# Night_and_Day

- [Project Planning](#Project-Planning)
  - [Description](#Description)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [MVP Goals](#MVP-Goals)
    - [MVP API](#MVP-API)
    - [MVP Libraries & Dependencies](#MVP-Libraries--Dependencies)
    - [MVP Components](#MVP-Components)
    - [MVP Breakdown](#MVP-Breakdown)
    - [MVP Timeframes](#MVP-Timeframes)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

# Project Overview
An web-based App that allows users to keep notes about their mood, short-, and long-term goals. 

## Project Name

Night_and_Day

## Project Description

"The unexamined life is not worth living" -- the words of Socrates as he defended himself against the claims of corrupting the youth of Athens. These words ring true despite the fact that we will never know if Socrates actually made this decree. As Plato wrote in his description of the trial "I only know that I do not know." Night_and_Day allows users to track their mood and goals, a very important step in understanding our internal, emotional dialouge.  

### Wireframes

https://xd.adobe.com/view/a18af1f8-3e1f-4d58-836a-00977547ba15-f4d9/#access_token=eyJ4NXUiOiJpbXNfbmExLWtleS0xLmNlciIsImFsZyI6IlJTMjU2In0.eyJpZCI6IjE1OTMzODgwNDgxMDdfNjVkYjk1ZDEtYTk0MS00YWZmLThmOTMtNDIzZjZkNzlhZWYwX3VlMSIsImNsaWVudF9pZCI6IkNvbWV0V2ViMSIsInVzZXJfaWQiOiI5QzAyMEE2MTVFRUU1REQyMEE0OTVGRDJAQWRvYmVJRCIsInR5cGUiOiJhY2Nlc3NfdG9rZW4iLCJhcyI6Imltcy1uYTEiLCJmZyI6IlVSWjVNT0dIVkxQNTVYNldPTUkzUU9RQUJRPT09PT09Iiwic2lkIjoiMTU5MzM4MzYxOTQ4M180MTA1Zjk5MS1hMDNmLTQ4YjgtOTI0Mi00ZThkM2JjODJkZjNfdWUxIiwibW9pIjoiNTMyYzEwODkiLCJjIjoiUW4yK3M0R1pYczNDL3djVkVwS1BTdz09IiwiZXhwaXJlc19pbiI6Ijg2NDAwMDAwIiwiY3JlYXRlZF9hdCI6IjE1OTMzODgwNDgxMDciLCJzY29wZSI6IiJ9.lN1PqqcIVLJPTP2WJbDRal2T2njVq3gLuf266gjpXYGj8RpAzkSNLIqyHZ4giREsN4Lh4URIeSm8AjzScpuxgEpOBxRGCRxYKSlBKhYBCABCcV3xRytSHVAdU9mKtgZJJ1CLJgibcTjsq31pG1cV58EpHB2xhcuIe1ZIQXRTCUJwUL5vEPvSB3yTs4XFDD68K760_hV6er5jY6eHCQeTbkOysd-DlmZ6jbTlQTVMkT5FD7-Sgeo2MF_sUmdByKjbHTm1qhIXmTa2QNvTgcpZY7xEAwTg_k3syPVt8cnAbjsIpv4ypqQ87bS1LrwcwFu9K0llCCh8C_GiM7xNukiRnw&token_type=bearer&expires_in=86399995

#### MVP Goals

- Create a web-based application that prompts users to reflect on their thoughts twice a day. 
- Uses an API to access NASA photos for the design of the application.
- Uses React and React Router, to create a multi-page application.
- Uses two media queries to ensure the app has a responsive design for a wide-range of screen sizes. 
- The option to automatically email the user with their writing so that they can catalog it for their own purposes. 
- Create a username - password , sign in capability

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
| Storybook | Will be used to execute a consistent design across multiple pages and screen sizes |

<br>

#### MVP Components

> Use this section to define your React components and the data architecture of your app.

```
.stroybook
|__ main.js
src
|__ assets/
      |__ data-tests
      |__ fonts
|__ components/
      |__ NightMain.js
      |__ DayMain.js
      |__Diamond.js
      |__ Buttons.js
      |__ DayText.js
      |__ NightText.js
      |__ ToDo.js
      |__ App.js
      |__ Morning.js
      |__ Night.js
      |__ Summary.js
      |__ Profile.js
```

<br>

#### MVP Breakdown

|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    |   class    |   y   |   n   |   n   | Renders all componenets and is exported to index|
|   NightMain.js  |   class    |   y   |   n   |   n   |  component on mainpage |
|   DayMain.js   |   class    |   y   |   n   |   n   |   component on mainpage |
|   Diamond.js   |   class    |   y   |   n   |   n   |  component on mainpage |
|   Buttons.js  |   class    |   y   |   n   |   n   |  component on multiple pages |
|   DayText.js   |   class    |   y   |   n   |   n   |  component that allows user to create and manipulate text|
|   NightText.js    |   class    |   y   |   n   |   n   |  component that allows user to create and manipulate text|
|    Profile.js    |   class    |   y   |   n   |   n   |  page that allows user to change settings/information |
|    sign-on    |   class    |   y   |   n   |   n   |  | allows user datas to be saved |
|    Index     | functional |   n   |   n   |   y   | renders to DOM |

<br>

#### MVP Timeframes

| Task             | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
|    App.js    |   H     |     4 hrs      |     2 hrs     |    3 hrs    |
|   NightMain.js  |     H      |     2 hrs      |     2 hrs     |    3 hrs    |
|   DayMain.js   |    H      |     2 hrs      |     2 hrs     |    3 hrs    |
|   Diamond.js   |    H      |     3 hrs      |     2 hrs     |    3 hrs    |
|   Buttons.js  |    H      |     2 hrs      |     2 hrs     |    3 hrs    |
|   DayText.js   |    H      |     3 hrs      |     2 hrs     |    3 hrs    |
|   NightText.js    |    H      |     2 hrs      |     2 hrs     |    3 hrs    |
|    Profile.js    |    H      |     3 hrs      |     2 hrs     |    3 hrs    |
|    sign-on    |     H      |     3 hrs      |     2 hrs     |    3 hrs    |
|    Index     |   H     |     3 hrs      |     2 hrs     |    3 hrs    |
|    contingency    |        |     5 hrs      |          |        |
| TOTAL            |          |     32 hrs      |     TBD   |     TBD     |

<br>

### Post-MVP

TBD

<br>

***

## Project Delivery

> The Project Delivery section should be completed as your work on your project.

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
