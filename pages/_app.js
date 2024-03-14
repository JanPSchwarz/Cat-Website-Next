import { GlobalStyle } from "../styles";
import { useState } from "react";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

async function fetcher(url) {
  const res = await fetch(url);

  if (!res) {
    const error = new Error(`An error occured...`);
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
}

export default function App({ Component, pageProps }) {
  // page counter
  const [currentPage, setCurrentPage] = useState(0);

  // liked Cats
  const [likedCats, setLikedCats] = useLocalStorageState("likedCats", {
    defaultValue: [],
  });

  // stores boolean for description toggle
  const [show, setShow] = useState([]);

  const maxCats = 25;
  const catsPerSide = 5;
  const numberOfPages = Math.ceil(maxCats / catsPerSide);

  const URL = `https://api.thecatapi.com/v1/images/search?limit=${maxCats}&has_breeds=1&api_key=live_80QHtDPhcDJgMWfVMivtOm4RkbsEB7Op11NNA8NkImpLpcuUvYoyb12eDy5cLmnb`;

  const { data, isLoading, error } = useSWR(URL, fetcher, {
    revalidateOnFocus: false,
  });

  //Page-Navigatioin functions
  function pageDown() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: `smooth` });
    }
  }

  function pageUp() {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: `smooth` });
    }
  }
  //

  function handleToggleLike(id) {
    const alreadyLikedCat = likedCats.find((cat) => cat.id === id);

    if (alreadyLikedCat) {
      setLikedCats(likedCats.filter((cat) => !(cat.id === alreadyLikedCat.id)));
    } else {
      const newCat = data.find((cat) => cat.id === id);

      newCat.isFavorite = !newCat.isFavorite;

      newCat.isFavorite
        ? setLikedCats((prevStats) => [...prevStats, newCat])
        : setLikedCats(likedCats.filter((cat) => !(cat.id === newCat.id)));
    }
  }

  // description toggle for every mapped cat
  function handleToggleDescription(index) {
    const updateShow = [...show];
    updateShow[index] = !updateShow[index];
    setShow(updateShow);
  }

  console.log(likedCats);

  return (
    <>
      <GlobalStyle />
      <Component
        cats={data}
        likedCats={likedCats}
        pageUp={pageUp}
        pageDown={pageDown}
        onToggleLike={handleToggleLike}
        toggleDescription={handleToggleDescription}
        show={show}
        maxCats={maxCats}
        currentPage={currentPage}
        catsPerSide={catsPerSide}
        numberOfPages={numberOfPages}
        isLoading={isLoading}
        error={error}
        {...pageProps}
      />
    </>
  );
}
