# TasteQuest

## Description
TasteQuest is a React Native application designed to explore restaurants across various price ranges: affordable, pricey, and expensive. Using Yelp's extensive restaurant database, the app provides a user-friendly interface to browse restaurants in a selected location. Key features include:
- Category-based exploration: Easily find restaurants categorized as affordable, pricey, or expensive.
- Search functionality: Discover restaurants by city, name, or keywords.
- Detailed information: Access in-depth details like photos, reviews, and descriptions by tapping on a restaurant's image.

## System Requirements
Ensure your device meets the following requirements to run TasteQuest:
- Node.js: Version 12 or higher.
- React Native CLI: For executing commands in React Native.
- iOS: Requires Xcode and iOS Simulator.
- Android: Requires Android Studio and Android Emulator.

## Installation and Setup

### Step 1: Install Dependencies
Navigate to the app's directory and install required npm packages.

### Step 2: Configure Yelp API Key
1. Obtain a Yelp API Key from the Yelp Fusion API. Instructions available at [Yelp API Documentation](https://www.yelp.com/developers/documentation/v3/authentication).
2. Create a `.env` file in your project's root folder.
3. Add the following line with your Yelp API Key:
```bash
YELP_API_KEY=your_yelp_api_key
```

### Step 3: Run the App
#### For iOS:
```bash
npx react-native run-ios
```

#### For Android:
```bash
npx react-native run-android
```

---

Enjoy exploring a world of culinary delights with TasteQuest! 🍽️🌎
