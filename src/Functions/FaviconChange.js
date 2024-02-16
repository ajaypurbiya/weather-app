const FaviconChange = (weather) => {
    var link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.href = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
}

export default FaviconChange