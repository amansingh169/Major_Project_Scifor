import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeSelector = () => {
  const { theme, setTheme, availableThemes } = useContext(ThemeContext);

  return (
    <select
      className="select-menu mt-4"
      value={theme}
      onChange={(e) => {
        setTheme(e.target.value);
      }}
      style={{ width: "300px" }}
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
