import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";
import styles from "./selection.module.css";
function Selection() {
  const { cities, city, setCity } = useContext(WeatherContext);

  const handleCityChange = (e) => {
    for (let i = 0; i < cities.length; i++) {
      if (e.target.value === cities[i].name) {
        setCity(cities[i]);
      }
    }
  };

  return (
    <div>
      <select value={city.name} onChange={handleCityChange}>
        {cities.map((city, i) => (
          <option key={i} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Selection;
