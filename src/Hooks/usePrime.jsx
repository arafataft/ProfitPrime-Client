import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePrime = () => {
  const {
    data: primeUsers = [],
    refetch,
    isLoading: loading,
  } = useQuery(["users"], async () => {
    const res = await axios.get(
      "https://profit-prime-server.vercel.app/users/prime"
    );
    console.log(res.data);
    return res.data;
  });
  return [primeUsers, refetch, loading];
};

export default usePrime;
