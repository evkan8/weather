class WeatherAPI {
  constructor() {
    this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    this.apiKey = "99b5f40e2809b0daedbd0f72de7b1706";
  }

  async getWeatherInfo(cityName) {
    const response = await fetch(
      `${this.baseUrl}?q=${cityName}&units=metric&lang=en&appid=${this.apiKey}`
    );
    const data = await response.json();
    return data;
  }
}
