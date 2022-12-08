## `NEWS FEED PROJECT`:
### This news feed project allows users to search for the latest news and articles from different sources and blogs across the web in different languages by using keywords and phrases.

## Project Description and Structure:
The application let users search through every article published by over 80,000 news sources and blogs in the last 4 years. A 'Search' navigation bar that can be accessed by clicking on the 'Search' button just below the header, has the form where users can sort and look for the desired news. The form includes keywords search with the advanced search by 'title', 'description' and 'content', as well as the options to sort by date, language and source.\
Users can also search for the required news just by adding keywords in the address bar after http://localhost:3000/ (for example: http://localhost:3000/bitcoin).

Each page is consist of 12 (if enough data available) news elements (cards). Each card includes: news photo, title, source, description, author and date published. By clicking on the element, it will bring up the pop-up window where a user can read the full article by clicking on the 'Read more' button.

Pagination at the bottom allows users to navigate through pages. 

## Application Limitations:
**API**:\
Since we are using the Free version of this API, the biggest limitation of this project is that it only works on the localhost.

## Technologies used:
In order to use this application the following API is required:\
**API**: https://newsapi.org/ Anyone can get a free API key for personal and commercial projects, however it is limited to 100 request per day and can only be used on the localhost. An API key should be added in '.env' location with the following format: REACT_APP_API_KEY = ""

**Languages**:\
 ![GitHub top language](https://img.shields.io/github/languages/top/Wobbla1337/news-app?color=%23F7DF1E&label=javascript&logo=javascript) <img src="https://img.shields.io/badge/HTML5-6.9%25-E34F26?logo=HTML5"> <img src="https://img.shields.io/badge/SCSS-0.9%25-CC6699?logo=SASS">

**Tools and frameworks**:\
 ![npm](https://img.shields.io/npm/v/react?color=%2361DAFB&label=React&logo=React) ![npm](https://img.shields.io/npm/v/bootstrap?color=%237952B3&label=Bootstrap&logo=bootstrap) ![npm](https://img.shields.io/npm/v/redux?color=%23764ABC&label=redux&logo=redux) ![npm](https://img.shields.io/npm/v/react-router?color=%23CA4245&label=react-router&logo=react-router) ![npm](https://img.shields.io/npm/v/sass?color=%23CC6699&label=sass&logo=sass) ![npm](https://img.shields.io/npm/v/moment?label=moment&logo=moment)
 
## How to Install and Run the Project



 **`git clone https://github.com/Wobbla1337/news-app.git`**

Clone (download) a repository, including all of the files, branches, and commits.

**`npm i`**

Install packages and its dependencies.

**`npm start`**  

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Author

You can find my contact information by clicking on the 'Contact' link in the header of the application.


