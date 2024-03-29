Name - Tyler Nguyen
Date - 03-29-2024
Lab Name - Weather App Rebuild
Description - This web application should be a one for one design of a figma. With a functional weather location, using the Open Weather API.
It should display a 5 day weather forecast, current weather, ability to search, favorites, and geoLocation. 
Peer Reviewer - Jayvon Khuth
Peer Review - I like the design of the website very much, it looks just like the figma. However there are bugs that I found when loading up your website. For example, upon first load the five day forecast, and the icons image for the current weather do not load, but they do load as soon as I click on an input. I advise that you have to probably change your useEffect in order for it to load correctly. Also once when I favorite a place it will show up in my favorites however the star image/symbol doesn't change, I would look at maybe fixing your handleFavorite function. Also for the favorites, whenever I search for a certain city inside of my favorites list, the city will show up, but it will show up without a filled star. Also when I unfavorite a place, it will successfully remove it, but it will also search for that city, I would suggest to not put an onClick function for the whole div that encompassees the certain favorite item. And lastly for the favorites, I recommend that you add overflow to the favorites list so that the favorites list doesn't keep extending the screen down, and also add a hover offect that makes the mouse cursor to pointer, so that I know I can click on it. And for the mobile I recommend that you add a minimum height class of like maybe 100 pixels or more, so that the favorites class isn't the same height as the view height of the screen. There's also another bug where when I search for a certain place, sometimes it doesn't output the correct place, I think this might be a bug with your dataservice fetches. But other than the errors that I've found on your website, I really liked how you implemeted higher order methods, ternary operators, a switch case, not operators, for loops, and a reverse geo location search in your code. In conclusion good job, I really like how your website is designed, and how you coded your project, but make sure you try to fix those errors! Keep up the good work

LINKS:
Vercel - nguyen-t-weather-app-rebuild.vercel.app
Figma - https://www.figma.com/file/zE0auV3KVRU80BzfYBkPTa/Weather-Sprint?type=design&node-id=0%3A1&mode=design&t=60nKctBZGVQ4qjq1-1
GitHub - https://github.com/ItzTeeler/NguyenTWeatherAppRebuild
API - https://openweathermap.org/api

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
