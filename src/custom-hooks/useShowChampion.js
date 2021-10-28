import { useState } from "react";
import axios from "axios";
import { useLocalStorage } from "./useLocalStorage";

const useShowChampion = () => {
  const [champion, setChampion] = useLocalStorage("champion", "");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function showChampion(id = null) {
    try {
      if (id === null) return null;

      setLoading(true);

      const response = await axios.get(
        `https://ddragon.leagueoflegends.com/cdn/11.21.1/data/en_US/champion/${id}.json`
      );
				
      const result = Object.values(response.data.data);
			console.log(result);
			setChampion(result[0]);
      setLoading(false);
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  return { champion, loading, error, showChampion };
};

export default useShowChampion;
