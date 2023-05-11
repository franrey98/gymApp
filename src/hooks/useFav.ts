import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect, useContext } from "react";
import { FavoriteContext } from "../context/FavoritesContext";

export const useFav = () => {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error("useFav must be used within an FavProvider");
  }

  return context;
};
