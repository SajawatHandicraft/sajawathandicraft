# Sajawat Handicraft Website

A responsive website starter for Sajawat Handicraft, a door and window drapes wholesale manufacturing business in Ahmedabad, Gujarat.

## Files
- `index.html` — homepage, about, products, manufacturing, bulk orders, inquiry form
- `catalogue.html` — separate product catalogue
- `style.css` — responsive cream and brown design
- `script.js` — mobile navigation and WhatsApp inquiry setup
- `assets/logo.svg` — editable vector logo

## Run locally
1. Extract this ZIP.
2. Open the folder in Jupyter Notebook / JupyterLab.
3. Open `index.html` in a browser. If Jupyter does not preview HTML directly, use the file browser to download it and open it with Chrome or Edge.
4. For a more reliable local preview, open a terminal in the project folder and run `python -m http.server 8000`, then visit `http://localhost:8000`.

## Connect WhatsApp later
1. Open `script.js` in Jupyter or a text editor.
2. Find `const BUSINESS_WHATSAPP_NUMBER = "";`
3. Put the business WhatsApp number inside the quotes, including country code and digits only. Example format for India: `919876543210`.
4. Save the file and test the inquiry form. A WhatsApp window opens with a prepared message; the customer still has to press Send.
5. Until a number is added, the form creates a copyable message preview instead of sending it anywhere.

## Free hosting with GitHub Pages
1. Create/sign in to a GitHub account.
2. Create a new public repository, for example `sajawat-handicraft`.
3. Upload all project files and the `assets` folder, keeping the same folder structure.
4. In repository Settings → Pages, choose deployment from the `main` branch and `/ (root)` folder, then Save.
5. Wait for GitHub Pages to publish and copy the website URL shown in the Pages section.
6. Open the link on a phone and laptop to test every section and form.
7. After any edit, upload/commit the changed files; the live site updates after redeployment.

## Before publishing
- Add your real WhatsApp number when ready.
- Confirm business contact details and exact claims.
- Replace illustrative photos if you have your own product/workshop photos.
- Confirm you have permission to use every photo and brand asset you upload.
- This is a static website. The inquiry form does not store entries in a database or send emails.
- A free GitHub Pages address is typically a `username.github.io/repository-name` URL. Custom domains may cost extra.
- External photos and Google Fonts require an internet connection; the layout and logo still exist locally if those services are unavailable.

## Customization
- Change business text in `index.html` and `catalogue.html`.
- Change colours near the top of `style.css` under `:root`.
- Edit the logo by editing `assets/logo.svg` in a vector editor or text editor.
