


# New York Times API app

View the NYT Best-Sellers, browse popular articles, search archives dating back to the year 1900.

## Table of Contents
- [Background](#background)
- [Getting Started](#getStarted)
- [How it works](#how)

<a name="background"></a>
## Background
Once I found out about the wonderful world of APIs, I knew right away that I wanted to work with news data.

I don't follow the news at all, but news data, particularly news articles, have a simple data-structure of a title, text, and perhaps a few images. This was an ideal schema for me, as I wanted data that would be easy to build a UI around. 

### Why the New York Times?
The primary reason I went with the New York Times API was to access their archives. These archives are massive, with some request payloads for a single month numbering in the tens-of-thousands of articles. As a history buff, I wanted a tool tap into this immense trove of information and thus this app. 

### Archives
The heart of this app is the archives search.

From the API documentation:
> The Archive API provides lists of NYT articles by month going back to 1851. Simply pass in the year and month you want and it returns a JSON object with all articles for that month.

Reading old news articles is a very interesting experience to say the least. I won't wax poetic too much here, but I feel it's the closest thing we have to a time machine. 

### Best Sellers
The best sellers page was more for UI/UX practice than anything else.


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