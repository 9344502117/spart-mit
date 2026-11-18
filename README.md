# SPART MIT Website — starter build

## Files
- `index.html`: homepage
- `events.html`: upcoming and completed events
- `event-pages/`: individual event pages
- `style.css`: shared responsive theme
- `script.js`: mobile navigation, gallery expand/collapse, and image lightbox
- `assets/`: logo, fonts, and folders for future posters, photos, people, and sponsor logos

## Add assets later
Replace the placeholder areas in the HTML with image elements pointing to the matching folders. Keep the shared 4:3 gallery aspect ratio.
- Official logo: `assets/logo/spart-logo.png`
- Event posters: `assets/events/`
- Gallery images: `assets/gallery/`
- Staff photos: `assets/people/staff/`
- Student photos: `assets/people/students/`
- Sponsor logos: `assets/sponsors/`

## Publish
Upload the contents of this folder to your GitHub Pages repository. Keep the folder structure intact. All page links are relative so the site can work from a repository subpath.

## Latest homepage decisions
- Added a centered SPART identity hero with the official logo, association name, institute, short introduction, and tagline.
- Kept the Renwa '26 featured-event poster hero and its View More link to the Renwa event page.
- Removed the Activities card/section from the homepage. Completed activities remain accessible through Events & Activities navigation and the Events page.

## Student office bearers
- Homepage includes 21 student office-bearer card slots.
- First 6 are shown initially; View More expands the remaining 15 and changes to View Less.
- Replace placeholder names, positions, roll numbers, and photos as the confirmed details are supplied.
- Header brand text is displayed as SPART MIT.

## Central content editing (`spart-data.js`)
- Add staff entries to `staff`; staff cards are generated automatically.
- Add student entries to `students`; regular and Junior Office Bearers are supported. First 6 display initially; View More reveals the rest.
- Add/edit event objects in `events`; set `status` to `upcoming` or `completed` to move the event between sections.
- Add gallery groups and image paths in `gallery`; first 4 images per group display initially.
- Add sponsor entries to `sponsors` when the sponsor section is activated.
- Put image files in the matching `assets/` folders. Image paths are relative to the website root.


### Background image
The supplied dark polygon-network image is stored at `assets/backgrounds/spart-network-background.jpg` and is used site-wide with a dark overlay. Replace that file to change the background while keeping the same filename.

### Profile cards
Add actual staff and student details in `spart-data.js`; cards render automatically. Student entries support `group: "Office Bearer"` and `group: "Junior Office Bearer"`. No names or photos have been fabricated.


## Version 5 updates
- A visible Our Sponsors section now appears directly below the RENEWA ’26 hero. It shows a clean empty message until sponsor details are added.
- Add sponsors in the `sponsors` array in `spart-data.js`, using `{ name, logo, url }`; logo paths should be placed under `assets/sponsors/`.
- The people section is titled SPART Leadership. The initial profile entries for Dr. K. Elangovan (President, SPART MIT) and Elumalai K (Technical Head) are included with their supplied photos.
- Add more students to the `students` array; their order in the array controls display order.


## Version 6: event images and homepage showcase

All content is managed in `spart-data.js`.

### Three independent images per event
- `cardImage`: Events & Activities listing card.
- `detailImage`: the individual View More event page.
- `heroImage`: homepage featured event image.

Example:
```js
{
  id: "renewа",
  title: "RENEWA ’26",
  status: "upcoming",
  description: "Your event description.",
  cardImage: "assets/events/renewa-card.jpg",
  detailImage: "assets/events/renewa-detail.jpg",
  heroImage: "assets/events/renewa-hero.jpg",
  page: "event-pages/renewa.html"
}
```
Place the files in `assets/events/`.

### Homepage hero controls
`heroEvent` selects the featured event and controls what is shown.
- `displayMode: "details"` shows poster, title, description and configured buttons.
- `displayMode: "showcase"` shows only the image. The title, description, Featured Event label, registration and View More buttons are hidden.
- `imageOnlyImage` optionally points to a separate group photo for the completed-event hero. If blank, `heroImage` is used.
- `showDescription`, `showRegistrationButton`, `showViewMoreButton` toggle individual items in details mode.

After an event ends, set its status to `"completed"` and set:
```js
heroEvent: {
  eventId: "renewа",
  displayMode: "showcase",
  imageOnlyImage: "assets/events/renewa-group-photo.jpg"
}
```
The event listing image and detail-page image remain separate.

### Event View More pages
Each event detail page now contains only its `detailImage` and description. Speaker and registration sections have been removed.

### Sponsors
Sponsor logos scroll continuously in a horizontal marquee and pause on hover. Add:
```js
{ name: "Sponsor Name", logo: "assets/sponsors/logo.png", url: "https://sponsor.example" }
```

### Profile alignment
Desktop profile cards are centred as a group, including an incomplete final row. Mobile remains one card per row.


## Version 7 layout and event image notes

- Sponsor logos are now static cards, not a moving marquee. The sponsor cards form a centred group and use larger logo display areas.
- Upcoming and Completed Event cards are centred as a group. A single card is centred; multiple cards share the row; a short final row is centred too.
- Mobile continues to show one card per row.
- The event ID for RENEWA is the plain Latin spelling `renewa` (not a visually similar Cyrillic character).

### Keep all three event image paths separate
For each event, edit these independently in `spart-data.js`:
```js
cardImage: "assets/events/renewa-events-card.jpg",
detailImage: "assets/events/renewa-view-more.jpg",
heroImage: "assets/events/renewa-home-hero.jpg"
```
The homepage hero uses `heroImage` in normal/details mode. The Events & Activities listing uses `cardImage`. The individual View More page uses `detailImage`.

After the event is completed, set the status to `"completed"` to move it to Completed Events. To use a separate group photo in the homepage image-only showcase, set `heroEvent.displayMode` to `"showcase"` and put its path in `heroEvent.imageOnlyImage`. This does not change either `cardImage` or `detailImage`.

If you want to preserve a completed year's event while creating the next year's event, duplicate the event object with a new unique `id`, title, page path, and three new image paths.


## V8: content-only event updates and image zoom

### Homepage hero settings (all in `heroEvent`)
```js
heroEvent: {
  eventId: "renewa",
  displayMode: "details",
  heroImage: "assets/events/renewa-hero.jpg",
  imageOnlyImage: "assets/events/renewa-showcase.jpg",
  showDescription: true,
  showRegistrationButton: true,
  registrationLabel: "Register Now",
  registrationUrl: "PASTE_GOOGLE_FORM_LINK_HERE",
  showViewMoreButton: true,
  viewMoreLabel: "Explore Event",
  viewMoreUrl: ""
}
```
Leave `viewMoreUrl` blank to automatically jump to the matching event card on `events.html`. Set `registrationUrl` to the Google Form link.

When the event is completed, change `displayMode` to `"showcase"`; the homepage displays `imageOnlyImage` and hides the title, description and buttons. The homepage hero image and showcase image are separate from the Events page `cardImage` and event detail `detailImage`.

### Add an event without creating HTML
Add an object to the `events` array with a unique `id`, `title`, `status` (`"upcoming"` or `"completed"`), `shortDescription`, `description`, `cardImage`, and `detailImage`. It appears automatically under the matching Events & Activities heading.

The event card's **Read More** button expands/collapses the detailed description in place and reveals the optional `detailImage`. It does not navigate to another HTML page. `cardImage` and `detailImage` can be different.

### Image zoom
Content images (people, event posters, hero image, and gallery) open in a full-image viewer when clicked or tapped. Sponsor logos are excluded from the viewer because they remain links to sponsor websites. Brand/logo images in the navigation and footer are not zoomed.

### Footer
The footer brand now reads **SPART MIT**.
