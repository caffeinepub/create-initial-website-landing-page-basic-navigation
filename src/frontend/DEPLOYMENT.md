# Deployment Guide - Archiv Agency

This guide walks you through deploying your Archiv Agency travel website to the Internet Computer (IC) mainnet, making it publicly accessible with a live URL.

## Prerequisites

Before deploying, ensure you have:

1. **DFX CLI** installed (version 0.15.0 or later)
   ```bash
   sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
   ```

2. **Node.js and npm/pnpm** installed
   ```bash
   node --version  # Should be v18 or later
   npm --version   # Should be v9 or later
   # OR
   pnpm --version  # Should be v8 or later
   ```

3. **Cycles** for deployment (IC's compute resource)
   - Create a cycles wallet at https://nns.ic0.app/
   - Or get free cycles from https://faucet.dfinity.org/

4. **Internet Identity** (optional, for authenticated features)
   - You can create one at https://identity.ic0.app/

## Step 1: Prepare Your Project

1. **Install dependencies:**
   
   Using npm:
   ```bash
   cd frontend
   npm install
   cd ..
   ```
   
   Or using pnpm:
   ```bash
   cd frontend
   pnpm install
   cd ..
   ```

2. **Verify your identity:**
   ```bash
   dfx identity whoami
   ```
   
   If you need to create a new identity:
   ```bash
   dfx identity new my-identity
   dfx identity use my-identity
   ```

## Step 2: Local Development & Testing

Before deploying to mainnet, test locally:

### Start Local Replica

1. **Start the local Internet Computer replica:**
   ```bash
   dfx start --clean --background
   ```

2. **Deploy locally:**
   ```bash
   dfx deploy
   ```
   
   This command will:
   - Create both backend and frontend canisters
   - Generate TypeScript bindings for the backend
   - Build the frontend (runs `npm run build` in the frontend directory)
   - Deploy both canisters to the local replica

3. **Get your local URLs:**
   ```bash
   dfx canister id frontend
   ```
   
   Your local frontend URL will be:
   ```
   http://<frontend-canister-id>.localhost:4943
   ```

4. **Verify the deployment:**
   - Open the local URL in your browser
   - Check that the homepage displays "Archiv Agency" and the tagline
   - Navigate through all pages (About, Services, Tour Packages, etc.)
   - Open browser DevTools Console (F12) and verify no errors

5. **Test backend connection:**
   ```bash
   dfx canister call backend getSiteInfo
   ```
   
   Should return:
   ```
   (
     record {
       heroCta = "Explore the World With Archiv Agency";
       tagline = "Your Trusted Partner for Unforgettable Travel Experiences";
       name = "Archiv Agency";
     },
   )
   ```

6. **Stop the local replica when done:**
   ```bash
   dfx stop
   ```

## Step 3: Deploy to IC Mainnet

### Configure for Production

1. **Set the network to IC mainnet:**
   ```bash
   export DFX_NETWORK=ic
   ```

2. **Verify your cycles balance:**
   ```bash
   dfx wallet --network ic balance
   ```
   
   You need at least 2-3 trillion cycles for initial deployment.

### Deploy Backend Canister

1. **Create the backend canister on IC:**
   ```bash
   dfx canister --network ic create backend
   ```
   
   This will generate a unique canister ID for your backend.

2. **Build and deploy the backend:**
   ```bash
   dfx build --network ic backend
   dfx canister --network ic install backend
   ```

3. **Note your backend canister ID:**
   ```bash
   dfx canister --network ic id backend
   ```
   
   Save this ID - you'll need it to verify the deployment.

### Deploy Frontend Assets

1. **Generate backend bindings:**
   ```bash
   dfx generate backend
   ```

2. **Build the frontend for production:**
   
   Using npm:
   ```bash
   cd frontend
   npm run build
   cd ..
   ```
   
   Or using pnpm:
   ```bash
   cd frontend
   pnpm run build
   cd ..
   ```
   
   This creates optimized production assets in `frontend/dist/`.

3. **Create and deploy the frontend canister:**
   ```bash
   dfx canister --network ic create frontend
   dfx build --network ic frontend
   dfx canister --network ic install frontend
   ```

### Get Your Live URL

1. **Get your frontend canister ID:**
   ```bash
   dfx canister --network ic id frontend
   ```

2. **Your live URL will be:**
   ```
   https://<frontend-canister-id>.ic0.app
   ```
   
   Or alternatively:
   ```
   https://<frontend-canister-id>.icp0.io
   ```

3. **Open the URL in your browser** to see your live website!

## Step 4: Verify Deployment

1. **Test the site loads correctly:**
   - Open your live URL
   - Check that all pages load without errors
   - Open browser DevTools Console (F12) and verify no errors

2. **Verify backend connection:**
   - The homepage should display "Archiv Agency" and the tagline
   - This confirms the frontend is successfully calling the backend canister

3. **Test navigation:**
   - Click through all menu items (Home, About, Services, Tour Packages, etc.)
   - Verify all pages render correctly
   - Test the booking form and WhatsApp integration
   - Verify all images load properly

4. **Test on mobile devices:**
   - Open the site on a mobile browser
   - Verify responsive design works correctly
   - Test the mobile navigation menu

## Step 5: Update Your Deployment

When you make changes to your code:

### Update Backend

