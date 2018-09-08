


# New York Times API app

View the NYT Best-Sellers, browse popular articles, search archives dating back to the year 1900.

## Table of Contents
- [Background](#background)
- [Getting Started](#getStarted)

<a name="background"></a>
## Background
Once I found out about the wonderful world of APIs, I knew right away that I wanted to work with news data.

I don't follow the news at all, but news data, particularly news articles, have a simple data-structure of a title, text, and perhaps a few images. This was an ideal schema for me, as I wanted data that would be easy to build a UI around. 

### Why the New York Times?
The primary reason I went with the New York Times API was to access their archives. These archives provide access to **a lot** of data.


The heart of this app is the archives search:
> The Archive API provides lists of NYT articles by month going back to 1851. Simply pass in the year and month you want and it returns a JSON object with all articles for that month.

Reading old news articles is a very interesting experience to say the least. I won't wax poetic too much here, but I feel it's the closest thing we have to a time machine. 


<a name="getStarted"></a>
## Getting started 
You will need to have NPM installed and a New York Times API key to run this app.

### Configure API key
Create an environment variable `API_KEY`

```powershell
PS C:\> $env:API_KEY="<KEY>"
```

### Development
```powershell
PS C:\> npm run dev
```

### Production
Create and environment variable `NODE_ENV` to `"production"` and run `npm start`

```powershell
PS C:\> $env:NODE_ENV="production"
PS C:\> npm start
```



## TODO
- Add month input