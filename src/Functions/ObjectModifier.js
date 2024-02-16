

const ObjectModifier = (obj) => {
    switch (obj.main) {
        case "Haze":
            obj["icon"] = "CLEAR_DAY";
            break;
        case "Clouds":
            obj["icon"] = "CLOUDY";
            break;
        case "Rain":
            obj["icon"] = "RAIN";
            break;
        case "Snow":
            obj["icon"] = "SNOW";
            break;
        case "Dust":
            obj["icon"] = "WIND";
            break;
        case "Drizzle":
            obj["icon"] = "SLEET";
            break;
        case "Fog":
            obj["icon"] = "FOG";
            break;
        case "Smoke":
            obj["icon"] ="FOG";
            break;
        case "Tornado":
            obj["icon"] = "WIND";
            break;
        default:
            obj["icon"] = "CLEAR_DAY";
    }

    return obj;
}

export default ObjectModifier;