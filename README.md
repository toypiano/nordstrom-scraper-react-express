# Building a web scraper with express and react

## Q&A with author

> Hi Stefan, Are there any reasons for building express server instead of fetching directly from the react? Thanks for answering & the great course!

> Hi Hayoun,
> You could do it in theory but you might stumble into issues with CORS. **Newer browsers don't allow fetching from different domains**, I've had one student who had the client only approach and stumbled into issues due to CORS.
> Also because sometimes we **have the data saved in our database** instead of requesting from the site all the time, and risking blocking.
> For example scraping all the site data once a day, and then using a react client to see all the historic data we have saved in our own database.
