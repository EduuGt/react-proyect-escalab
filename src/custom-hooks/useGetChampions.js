import { useState } from "react";
import axios from "axios";
import { useLocalStorage } from "./useLocalStorage";

const useGetChampions = () => {
  const [champions, setChampions] = useLocalStorage("champions", "");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getChampions(filter = "") {
    try {

      setLoading(true);

      const response = await axios.get(
        "http://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion.json"
      );
      const result = Object.values(response.data.data);

      const words = filter.match(/\w+/g);
      filter = words && words.join(" ");

      if (filter && filter.length > 0) {
        // console.log(champions.filter((champion) => champion.id.toLowerCase().includes(filter.toLowerCase())));
        setChampions(champions.filter((champion) => champion.id.toLowerCase().includes(filter.toLowerCase())));
      } else {
        setChampions(result);
      }
      // setChampions(result);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  return { champions, loading, error, getChampions };
};

export default useGetChampions;
