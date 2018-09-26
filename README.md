


# New York Times API app

View the NYT Best-Sellers, browse popular articles, search archives dating back to the year 1900.

## Table of Contents
- [Background](#background)
- [Getting Started](#getStarted)
- [How it works](#how)

<a name="background"></a>
## Background
Once I found out about the wonderful world of APIs, I knew right away that I wanted to work with news data.

I don't follow the news at all, but news data, particularly news articles, typically have a simple data-structure of a title, text, and perhaps a few images. This was an ideal schema for me, as I wanted data that would be easy to build a UI around. 

### Why the New York Times?
The primary reason I went with the New York Times API was to access their archives. These archives are massive, with some request payloads for a single month numbering tens-of-thousands of articles. As a history buff, I wanted a tool tap into this immense trove of information, and thus this app. 

### Archives

From the API documentation:
> The Archive API provides lists of NYT articles by month going back to 1851. Simply pass in the year and month you want and it returns a JSON object with all articles for that month.


The heart of this app is the archives search. Users are able to set a year range from 1900 to 2018 and receive articles from a random month and year within that range (e.g., April 1991). 

Considering the immense number of articles delivered with each request, I needed to trim the data without only presenting the first articles of the month. In other words, the articles are ordered chronologically in the array, so taking a slice of say, fifty, would show articles from one day that month.

To fix this problem I added a helper function that randomizes the original array from the request. Then a slice of fifty is taken from the shuffled array to be mapped over in the container component.


Reading old news articles is a very interesting experience to say the least. I won't wax poetic too much here, but I feel it's the closest thing we have to a time machine. 

### Best Sellers
View the non-fiction best-sellers. Hover over a book to read its abstract. Click on a book to purchase a book on Amazon.

The best sellers page was more for UI/UX practice than anything else. I figured that displaying books would be a good chance to work on my grid and image skills, and I think it adds some needed visual interest to an otherwise very text-heavy website. 




<a name="getStarted"></a>
## Getting started 
You will need to have Node installed and a New York Times API key to run this app.

### Configure API key
Set an environment variable `API_KEY` to your API key.

```powershell
$env:API_KEY="<KEY>"
```

### Development
```powershell
npm run dev
```

### Production
Set an environment variable `NODE_ENV` to `"production"` and run `npm start`.

```powershell
$env:NODE_ENV="production"
```
```powershell
npm start
```

<a name="how"></a>
## How it works

This app uses React and Redux, where each Redux action creator is a fetch request to the API. Additional action creators act as middleware to handle loading (i.e., presenting a load screen while the request resolves) and error handling for bad requests.



## TODO
- Add month input