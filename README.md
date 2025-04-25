# set up Instructions 

Make sure you have Node.js installed (preferably v16+).

step 1 : Clone the Repository using below command 

    cmd : git clone https://github.com/MAHI-CHOWDARY/Crypto_Price_Tacker.git

step 2 : change the directory name 
    cmd: cd directory name 

step 3 : install necessary dependencies

    cmd : npm install
          npm i react-redux
          npm i @reduxjs/toolkit
          npm i bootstrap
          npm i bootstrap-icons

step 4 : After install open the terminal with the current directory and run 

    cmd : npm run dev 

step 5 : open the localhost server to view the project 


# Tech Stack

🖥️ Frontend : 

    React – Component-based UI library.

    Redux Toolkit – For managing global state with less boilerplate.

    React-Redux – Connects React with Redux.

    Bootstrap 5 – Responsive and mobile-first UI framework with pre-built components and utilities.

    JavaScript (ES6+) – Core scripting language.

    Vite or CRA (Create React App) – For bundling and serving the app (based on what you're using).

# 🏗️ Architecture Overview

    src/
    ├── store/                       → Redux store setup
    │   └── index.js                 → Configures store with cryptoSlice
    │    └── reducer.js               → Asset state + reducers like updateAsset
    ├── components/                  → Reusable UI components
    │   └── CryptoTable.jsx          → Renders the main table with asset data
    ├── api/                         → Static JS used as mock backend
    │   └── data.js                  → Preloaded asset data       
    ├── App.jsx                      → App entry point, dispatches updates
    ├── index.css                    → bootstrap + global styles
    └── main.jsx                     → Renders App with Redux <Provider>


# 🔁 Data Flow

    1. App.jsx starts the app and selects `cryptoData` from the store
    2. A `setInterval` simulates real-time changes by dispatching `updateAsset`
    3. Redux store updates the selected asset's price/volume
    4. CryptoTable.jsx subscribes using `useSelector`, auto-refreshing UI