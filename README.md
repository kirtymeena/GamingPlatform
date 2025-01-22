
# Gaming Platform

BlackNGreen UI challenge

  

## Quick Start

  

### Clone the Repository

```bash

git  clone  https://github.com/kirtymeena/GamingPlatform.git

```

  

<li>Navigate to project folder</li>

<li>Install dependencies using npm install</li>

<li>Run Development Server npm run dev</li>

<li>The Application will start running at http://localhost:5173</li>

</ul>

### Technology Used
- React: 18.3.1 
- Node: 18.17.1,
- vite: 6.0.5
- sass: 1.83.4
- MUI: 6.4.1 

### Features
#### 1. Header
- Displaying a navigation bar with different logos and user profile along with Add Funds button.
- On clicking the Add Funds button it will increment the coins count by 10
#### 2. Game Section
- Displaying a main game ("Guns and Bottles") which occupies the full width with a Play Now button, which shows an alert when clicked.
- Game section contains a list of games with their images, weekly winnings and live users. These cards are clickable and can be accessed using keyboard.
- Used flex box and media query to create the layout. 

#### 3. Battle Arena
- Displaying Total matched played, Total stakes, and upcoming matches.
- Contains a View Match button.

#### 4. Footer Navigation
- Contains Home, Games, Notifications, and Profile.
- On hover, the background color is changing and on click, the active option will have background in orange color. 

### Folder Structure
```
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── assets  // images
│   │   
    ├── components
    │   ├── AddCoins.jsx
    │   │  
    │   ├── BattleArena.jsx
    │   │   
    │   ├── Footer.jsx
    |   |
    |   ├── Gamecard.jsx  
    |   |
    |   ├── Header.jsx
    |
    |__ styles /// styles for components
    |   |
    |   ├── utils   
    |   |   |
    |   |   ├── _breakpoints.scss // breakpoints mixin
    |   |   |
    |   |   ├── _variables.scss // variables
    |   |   
    |   ├── App.scss
    |   ├── battleArena.scss
    |   ├── footer.scss
    |   ├── gamecard.scss
    |   ├── header.scss
    |   └── normalize.scss
    |   
    ├──App.jsx // main component
    ├── main.jsx // main file
|
├── .gitignore // Ignores node_modules 
├── package.json
├── README.md
└── vite.config.js
```

## Screenshots
### Small screens

![Screen Shot 2025-01-22 at 21 07 42](https://github.com/user-attachments/assets/e45b4f81-a633-40c7-bd74-f34d008e3e24)

![Screen Shot 2025-01-22 at 21 08 09](https://github.com/user-attachments/assets/b2bd3bad-3399-48bd-942d-19fe9e93c7f6)

### Medium to large screens

![Screen Shot 2025-01-22 at 21 08 44](https://github.com/user-attachments/assets/3a02f564-12c8-4a16-ada3-e2eb534cd393)

![Screen Shot 2025-01-22 at 21 09 10](https://github.com/user-attachments/assets/ac06c3c7-8dc2-4c97-978b-9724ccc0cae0)

![Screen Shot 2025-01-22 at 21 09 35](https://github.com/user-attachments/assets/848e8881-3c1d-4007-96ca-c08fdc1a643c)
