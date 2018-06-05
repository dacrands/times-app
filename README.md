## NPM Scripts
**Development** 
- `npm run dev`

**Production** 
- `npm start`



## TO DO
1. ~~configure webpack for prod~~
2. *add redux form*
    - Would need to add entire redux store, will consider
3. Fix Trianglify glitch 
4. Fall back styles for Edge (i.e., :root variables)
5. 404 page
6. Blog component
7. Move stateless components to separate dir


## Old NPM Script
```json
"scripts": {
"start": "webpack-dev-server --open --config webpack.dev.js -d",
"build": "webpack -p --config webpack.prod.js"
}
```
  