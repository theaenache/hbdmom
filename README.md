# mom's bday bouquet <3

an interactive birthday gift featuring a bouquet of flowers, each containing a special coupon for activities to enjoy together :)

## features:

- animated cake character
- 8 different types of flowers (roses, tulips, sunflowers, daisies)
- a special activity to do together is revealed when the flower is clicked on
- animations and hopefully smooth interactions

## setup instructions

### prereqs

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### installation

1. clone this repo:
   ```bash
   git clone <your-repo-url>
   cd birthday-bouquet-app
   ```

2. install dependencies:
   ```bash
   npm install
   ```

3. start the development server:
   ```bash
   npm start
   ```

4. open your browser and navigate to `http://localhost:3000`

the app will automatically reload if you make changes to the code.

## deployment

### build for prod time

to create an optimized production build:

```bash
npm run build
```

this creates a `build` folder with optimized files ready for deployment.

### deployment to GitHub pages

1. install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. add these scripts to your `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/birthday-bouquet",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### alternative deploy options

- **Netlify**: drag and drop the `build` folder to [Netlify](https://www.netlify.com/)
- **Vercel**: connet GitHub repo to [Vercel](https://vercel.com/)
- **GitHub Pages**: follow the instructions above

## customization

to customize the coupons or colors, edit the `flowers` array in `src/BirthdayBouquet.jsx`:

```javascript
const flowers = [
  { id: 1, coupon: "Your custom coupon text", color: "#E74C3C", petalColor: "#C0392B", type: "rose" },
  // ... add more flowers
];
```

## for this proj i used:

- react 18
- CSS-in-JS for styling
- google fonts (Playfair Display (for now, its kinda chopped))

## license

this is my personal project created as a birthday gift for my mom. feel free to use and modify for your own personal gifts!

---

made with ❤️ for moms's bday !!
