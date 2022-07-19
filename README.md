# Engineering Revue Website

## [Visit the website!](https://www.engrevue.co.nz/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/6d7fec8f-f6fc-4e11-8620-25c6052d70bb/deploy-status)](https://app.netlify.com/sites/engrevue/deploys)

The landing page website used to promote and document the University of Auckland Engineering Revue, the coolest student-run variety comedy theatre show in the vicinity of 20 Symonds Street.

## Development

This project is built with Gatsby. To run the development server, use:

`gatsby develop`

Changes can now be live-previewed at `localhost:8000`.

### Help, I've been told to maintain this site by the producer but I don't know what's going on!

Hello and welcome. Beneath the surface, this codebase is quite a mess (it was the original developers' first ever React project), but we've set it up so that the bare-minimum of maintenance isn't too bad.

You'll probably need to do the following tasks in a given year:

#### Setting up link redirects (audition signups, ticket sales, etc)

Open `gatsby-node.js` and add the following:

```
createRedirect({
    fromPath: "/redirect",
    toPath: "https://your-given-url.com/whatever-page",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
```

Make sure to delete them once they're no longer relevant, as flushing them from various sites' caches takes time. Best to do that in the off-season :)

#### Updating the homepage banner

Open `src/pages/index.js`. Everything in this page is relatively timeless, but you might want to update the banner based on what's happening with the show at the time.

To update the banner, change the props on the `Banner` component.

```
<Banner
      background={RevueBg}              // background image, imported into page
      color="white"                     // either "white" or "black" - pick based on contrast with background image
      logo={`${RevueLogo}`}             // logo image, displayed on top.
                                        // Note that it is passed in as a string, because <img /> reasons, lol
      heading="Text"                    // heading text string
      body="Text"                       // body text string
      callToActionLink="https://..."    // call-to-action button links to external page (e.g. iTicket)
      callToActionText="Buy Tickets"    // text displayed on call-to-action button
      tint                              // boolean that toggles a tint over the background image
      showDownBtn                       // boolean that toggles showing a scroll-down-to-content button
    />
```

The `logo`, `heading`, `body`, and `callToActionLink` elements won't be rendered if they aren't passed in.

#### Adding a previous show

**TODO: Overhaul this page so the process isn't fragile.**

Here be dragons. This code is old, but adding a show follows a standard format; if you stick to it, nothing should break.

First, go to `src/components/shows/data.js` and add the following at the top of the object:

```
// For any values that are null, simply add "null" in its place.

20xx: {
    "cover-image": curtains,
    poster: revue20xx,                // image import of show's poster
    "cast-picture": revue20xxCast,    // image import of cast photo from show week
    // Text
    title: "NAME OF THE SHOW",
    subtitle: "Auckland Engineering Revue 20xx",
    subtitle1: "Engineering Revue 20xx",
    "catch-phrase": "The show's marketing byline goes here.",
    location: "SkyCity Theatre",
    director: "Director Name",
    producer: "Producer Name",
    blurb: `The marketing copy for the show goes here.`,
    quote: `"A fun quote related to the show (sometimes an endorsement from David Seymour's Instagram story)."`,
    // Resources
    programme: programme2016,         // file import of show's programme pdf
  },
```

Then, go to `src/components/shows/showviewer.js` and update the following magic number:

```
// This is necessary for the page to not break. Yeah...

const YEAR_AFTER_LATEST_SHOW = "20xx"
```

## Deployment

Changes are automatically deployed to Netlify upon committing to the `master` branch. Netlify will also automatically generate live previews of any pull request opened - **please use this to test your changes on mobile.**

If you need access to the `engrevue` Netlify account, please contact @dikunong. Once they give you the login details, you are now the login keeper; store it somewhere safe and then put your name in this spot in the README.

## Roadmap

### Done

- **Sponsor Us** page: promotion of the Revue to potential future sponsors

### Future

- Redesign of the **Previous Shows** page to improve accessibility and reduce fragility during maintenance
- **Watch** page: ability to watch old revues with embedded YouTube player with chapters/timestamps support
- **History** page: detailed historical timeline of the creation of the Revue and its changes from 2008 to today
- Mailing list to contact potential patrons with promotional material and ticket sales information (subject to any potential cost/data privacy issues)
  - https://buttondown.email/
- Sign-up page for University of Auckland Engineering students who want to get involved

## Authors

### 2022

- Di Kun Ong
  - Refactoring (upgrade from Gatsby v2 --> v4, some code improvements)

### 2021

- Di Kun Ong
  - Maintenance

### 2020

- Di Kun Ong
  - Index page
- Alex Ruddell
  - Previous Shows page
  - Sponsor Us page

_Special thanks to Alex Kennedy, Daniel Wong, and Michael Kemp for their contributions to the previous version of this website between 2018-2019._
