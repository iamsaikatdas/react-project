import { ThemeProvider } from "./context/ThemeContext";
import ThemeButton from "./component/ThemeButton";
import { useEffect, useState } from "react";
import Card from "./component/Card";
// import "./App.css";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  // actually change the theme
  useEffect(() => {
    const data = document.querySelector("html");
    data.classList.remove("light", "dark");

    data.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme button */}
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
