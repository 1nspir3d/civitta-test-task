import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { themes, TThemeColors, TThemeObject } from "./theme";

type ThemeContextType = {
  themes: TThemeObject;
  theme: TThemeColors;
  setTheme: (theme: keyof TThemeObject) => void;
  system: boolean;
  toggleSystem: () => void;
  currentTheme: "light" | "dark";
};

const STORAGE_KEY = "user-theme";
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const systemScheme = useColorScheme();
  const [userTheme, setUserTheme] = useState<keyof TThemeObject | null>(null);
  const [useSystem, setUseSystem] = useState(true);

  const currentTheme = useSystem
    ? systemScheme || "light"
    : userTheme || "light";

  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setUserTheme(parsed.theme);
        setUseSystem(parsed.useSystem);
      }
    })();
  }, []);

  const updateTheme = async (theme: keyof TThemeObject) => {
    setUserTheme(theme);
    setUseSystem(false);
    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ theme, useSystem: false })
    );
  };

  const toggleSystem = async () => {
    if (useSystem) return;
    setUseSystem(true);
    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ theme: userTheme || "light", useSystem: true })
    );
  };
  return (
    <ThemeContext.Provider
      value={{
        themes,
        theme: themes[currentTheme],
        setTheme: updateTheme,
        system: useSystem,
        toggleSystem,
        currentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};
