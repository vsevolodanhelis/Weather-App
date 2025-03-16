### Overview

This project demonstrates API integration, asynchronous JavaScript handling, and responsive UI design. Users can search for any city to receive up-to-date weather conditions, including temperature, humidity, wind speed, and a weather icon representing the current conditions.

### Components Breakdown

#### **HTML Structure**

##### **Head Section**
- Defines meta tags for character encoding and responsive design.
- Includes the title "Weather App".
- Links to external CSS for styling and JavaScript for functionality.

##### **Body Section**
- A main container `<div>` encapsulating the interface.
- A header displaying the application title.
- A search bar (`#searchInput`) for user queries.
- A button (`#searchButton`) to trigger the API call.
- A results section displaying:
  - The searched city name.
  - Temperature, humidity, wind speed, and weather conditions.
  - A dynamically loaded weather icon.

---

#### **CSS Styling**

The CSS ensures a visually appealing and responsive user experience:
- The layout is centered, with a well-structured search box and results display.
- Smooth animations enhance transitions between searches.
- A modern, minimalist design makes weather information easy to read.
- Mobile responsiveness ensures usability on all screen sizes.

---

#### **JavaScript Functionality**

##### **Event Listeners**
- Handles search input and triggers the API request on button click.
- Updates the UI dynamically with fetched weather data.
- Displays an error message for invalid city names.

##### **API Integration**
- Fetches real-time weather data from OpenWeatherMap API.
- Parses and extracts relevant data such as temperature, humidity, and wind speed.
- Updates the UI with the retrieved information.

##### **Error Handling**
- Detects and informs the user of invalid locations or network issues.
- Displays appropriate error messages when API requests fail.

### Features
- Real-time weather updates using OpenWeatherMap API.
- Interactive UI with smooth animations.
- Error handling for invalid searches.
- Responsive design suitable for both desktop and mobile devices.

This project serves as an excellent example of working with APIs, handling asynchronous JavaScript, and building interactive UI elements in a web application.
