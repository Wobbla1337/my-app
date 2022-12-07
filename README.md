# `NEWS FEED PROJECT`:
### This news feed project allows users to search for the latest news and articles from different sources and blogs across the web in different languages by using keywords and phrases.

## Project Description and Structure:
The application let users to search through every article published by over 80,000 news sources and blogs in the last 4 years. A 'Search' navigation bar that can be accessed by clicking on the 'Search' button just below the header, has the form where users can sort and look for the desired news. The form includes keywords search with the advanced search by 'title', 'description' and 'content', as well as the options to sort by date, language and source.\
Users can also search for the required news just by adding keywords in the address bar after http://localhost:3000/ (for example: http://localhost:3000/bitcoin).

Each page is consist of 12 (if enought data available) news elements(cards). Each card includes: news' photo, title, source, description, author and date published. By clicking on the element it will bring up the pop-up window where user can read the full article by clicking on the 'Read rore' button.  
Pagination at the bottom allows users to navigate through pages. 

## Application Limitations:
`API`:\
Since we are using the Free version of this API, the biggest limitation of this project is that it only works on the localhost.

## Technologies used:
In order to use this application the following API is required:\
`API`: https://newsapi.org/ Anyone can get a free API key for personal and commercial projects, however it is limited to 100 request per day and can only be used on the localhost. An API key should be add in '.env' location with the following format: REACT_APP_API_KEY = ""

`Languages`: HTML, CSS, JavaScript.

`Tools and frameworks`: React(18.2.0), Bootstrap(5.2.2), Moment(2.29.4), React Redux(8.0.5), React Router(6.4.3), SASS(1.56.1) 
 
## How to Run and Deploy the Project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run deploy`

Deploys the app.

## Author

You can find my contact information by clicking on the 'Contact' link in the header of the application.


