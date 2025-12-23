# mom's bday bouquet <#

an interactive birthday gift featuring a bouquet of flowers, each containing a special coupon for activities to enjoy together :)

## features:

- animated cake character
- 8 different types of flowers (roses, tulips, sunflowers, daisies)
- a special activity to do together is revealed when the flower is clicked on
- animations and hopefully smooth interactions

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd birthday-bouquet-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

The app will automatically reload if you make changes to the code.

## Deployment

### Build for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add these scripts to your `package.json`:
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

### Other Deployment Options

- **Netlify**: Drag and drop the `build` folder to [Netlify](https://www.netlify.com/)
- **Vercel**: Connect your GitHub repo to [Vercel](https://vercel.com/)
- **GitHub Pages**: Follow the instructions above

## Customization

To customize the coupons or colors, edit the `flowers` array in `src/BirthdayBouquet.jsx`:

```javascript
const flowers = [
  { id: 1, coupon: "Your custom coupon text", color: "#E74C3C", petalColor: "#C0392B", type: "rose" },
  // ... add more flowers
];
```

## Technologies Used

- React 18
- CSS-in-JS for styling
- Google Fonts (Playfair Display)

## License

This is a personal project created as a birthday gift. Feel free to use and modify for your own personal gifts!

---

Made with ❤️ for Mom's Birthday 🎉
