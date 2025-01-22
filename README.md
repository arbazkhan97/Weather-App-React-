# Weather App

This project is a Weather App built using React and Material-UI. The app provides detailed weather information for a specified location, including:

- **Temperature**: Current temperature of the location.
- **Humidity**: Current humidity level.
- **Max Temperature**: Maximum temperature recorded for the day.
- **Min Temperature**: Minimum temperature recorded for the day.
- **Weather**: General weather conditions (e.g., sunny, cloudy, rainy).
- **Wind Speed**: Current wind speed.
- **Feels Like**: Perceived temperature considering wind and humidity.

## Features

- **User-friendly Interface**: Built with Material-UI for a clean and responsive design.
- **Real-time Data**: Fetches up-to-date weather information.
- **Detailed Weather Metrics**: Provides comprehensive weather details.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Material-UI**: React components for faster and easier web development.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/weather-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd weather-app
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

## Usage

Enter the desired location in the search bar to get the current weather information. The app will display all the relevant weather metrics for the specified location.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
## Error Handling

The app includes error handling to manage any issues that may arise during data fetching. If an error occurs (e.g., network issues or invalid location), the app will display an appropriate error message to the user.

### Example

Here is an example of how error handling is implemented using a `try` and `catch` block in the data fetching function:

```javascript
async function fetchWeatherData(location) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${location}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Process and display the data
    } catch (error) {
        console.error('Error fetching weather data:', error);
        // Display error message to the user
    }
}
```

This ensures that any errors encountered during the API call are caught and handled gracefully, providing a better user experience.