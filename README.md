# The In and Out of Place project (with timeslider)
Project link: https://brown-university-library.github.io/ioop/
The Leaflet uses a customizable timeline slider. The original template of timeline at https://codepen.io/trevanhetzel/pen/rOVrGK, with specific modifications and custom JS for this project.

### Requirements 
- Leaflet 1.4.0
- jQuery 3.3.1
- Tested with Mozilla Firefox, Google Chrome, and Edge Chromium
- Compatible with Mozilla Firefox, Google Chrome, and Edge Chromium

### Instructions for Use
After loading leaflet css, leaflet js and jQuery in your HTML, include the downloaded timeline.js file from this repository:
```
    <!--Leaflet + jQuery js-->
        <script 
            src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
            integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
            crossorigin="">
        </script>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

    <!--Time Slider-->
        <script src="src/timeslider.js"></script>
```

# Leaflet Storymaps for In and Out of Place project
This Leaflet StoryMap is created for the *In and Out of Place: Tracking Resources Extractions from Treaty Lands, 1874*, a digital project done in collaboration between [Center for American Indian Research and Native Studies](https://www.nativecairns.org/index.html) (CAIRNS) and [Brown University Library's Center for Digital Scholarship](https://library.brown.edu/create/cds/in-and-out-of-place-resource-extractions-from-treaty-lands). This StoryMap uses a template by *Hands-On Data Visualization* (see Credits), customized with our data and content on the 1874 expedition through the Black Hills. Our data sheet can be accessed below.

## Live links
- Leaflet Map https://brown-university-library.github.io/ioop/
- A Reconnaissance of the 1874 Black Hills Expedition https://brown-university-library.github.io/ioop/ioop-blackhills
- Google Sheets template https://docs.google.com/spreadsheets/d/1kOxhcYI-CMPUxNq0wUFiAcHPT0u2gk3utx_8hALwAmg/edit#gid=1017616277

## Credits (and licenses)
GitHub repository and tutorial guide to creating this Storymap developed by [Ilya Ilyankou](https://github.com/ilyankou) and [Jack Dougherty](https://github.com/jackdougherty) with support from Connecticut Humanities and Trinity College, CT. Inspired by Code for Atlanta mapsfor.us (2016) https://github.com/codeforatlanta/mapsforus (BSD-3-Clause). Adapted from MUX Lab, Map Effects 100: https://github.com/muxlab/map-effects-100, see http://muxlab.github.io/map-effects-100/Leaflet/11_scroll-driven-map-navigation.html. For step-by-step tutorial to create the storymap taken from *Hands-On Data Visualization* https://HandsOnDataViz.org/leaflet-storymaps-with-google-sheets.html

Utilizing [Google Sheets API version 4](https://developers.google.com/sheets/api), with these open-source components:

- Leaflet v1.7.1 https://leafletjs.com (BSD-2-Clause)
- jQuery v3.5.1 https://code.jquery.com (MIT)
- PapaParse v5.3.0 to parse CSV with JavaScript (MIT)
- Font Awesome v5.8.1 https://cdn.fontawesome.com (MIT, SIL OFL 1.1)
- leaflet-providers (v1.10.2) https://github.com/leaflet-extras/leaflet-providers (BSD-2-Clause)
- Leaflet.awesome-markers (v2.0.4), manually updated to svg to allow hex and material icons https://github.com/sigma-geosistemas/Leaflet.awesome-markers (MIT)
- Leaflet.ExtraMarkers (v1.0.5) https://github.com/coryasilva/Leaflet.ExtraMarkers (MIT)
- jQuery-CSV (v1.0.11) https://github.com/evanplaice/jquery-csv (MIT)
- Single Element CSS Spinner (31 May 2016) https://github.com/lukehaas/css-loaders (MIT)
- Lightbox by Lokesh Dhakar (v.2.11.3) https://github.com/lokesh/lightbox2 (MIT)
