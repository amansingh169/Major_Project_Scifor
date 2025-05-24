import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeSelector = () => {
  const { theme, setTheme, availableThemes } = useContext(ThemeContext);

  return (
    <select
      className="form-select"
      value={theme}
      onChange={(e) => {
        setTheme(e.target.value);
      }}
    >
      {availableThemes.map((theme) => (
        <option value={theme} key={theme}>
          {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
        </option>
      ))}
    </select>
  );
};

export default ThemeSelector;
