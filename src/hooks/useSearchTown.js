import { useState, useEffect } from "react";
import { callSearchTownByIpApi, callSearchTownByQueryApi } from "../api";

const useSearchTown = () => {
  const [subTitle, setSubTitle] = useState("근처동네");
  const [searchResults, setSearchResults] = useState({
    regionDepth1: "",
    regionDepth2: "",
  });

  const searchTownByIp = async () => {
    const response = await callSearchTownByIpApi();
    if (response.status !== 500) {
      setSearchResults(response.data);
      setSubTitle("근처동네");
    }
    return response;
  };

  const searchTownByInput = async (input) => {
    if (input.length === null || input.length < 2) {
      setSearchResults({ regionDepth1: "", regionDepth2: "" });
      return;
    }
    const dataFromApi = await callSearchTownByQueryApi(input);
    if (dataFromApi.status !== 500) {
      console.log(searchResults);
      console.log(dataFromApi.data);
      setSearchResults(dataFromApi.data);
      setSubTitle(`${input} 검색결과`);
    }
    return;
  };

  useEffect(() => {
    searchTownByInput();
  }, []);

  return {
    subTitle,
    searchResults,
    setSearchResults,
    searchTownByIp,
    searchTownByInput,
  };
};

export default useSearchTown;
