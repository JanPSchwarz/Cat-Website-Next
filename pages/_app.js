import { GlobalStyle } from "../styles";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";

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

  // stores number of fetched Cats
  const [numberOfCats, setNumberOfCats] = useState(20);

  const maxCats = numberOfCats; // actually deprecated -> variable can be fully replaced by "numberOfCats" (change needed to be done)
  const catsPerSide = 5;
  const numberOfPages = Math.ceil(maxCats / catsPerSide);

  const lastPage = currentPage === numberOfPages;

  const URL = `https://api.thecatapi.com/v1/images/search?limit=${maxCats}&has_breeds=1&api_key=live_80QHtDPhcDJgMWfVMivtOm4RkbsEB7Op11NNA8NkImpLpcuUvYoyb12eDy5cLmnb`;

  const { data, isLoading, error } = useSWR(URL, fetcher, {
    revalidateOnFocus: false,
  });

  //updates useState "number of cats" (=maxCats) and fetches data new; used in "Headers" Form-Component
  function handleNumberOfCats(value) {
    setNumberOfCats(value);
    mutate();
  }

  //Page-Navigation functions
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

  //on likeButton: it stores a fetched cat to state "likedCats" if that cat is new; a existing (already likedCat) cat gets deleted from "likedCats"
  function handleToggleLike(id) {
    const alreadyLikedCat = likedCats.find((cat) => cat.id === id);

    if (alreadyLikedCat) {
      const isConfirmed = confirm("Are you sure you want to delete that cat?");
      if (isConfirmed) {
        setLikedCats(
          likedCats.filter((cat) => !(cat.id === alreadyLikedCat.id))
        );
      }
    } else {
      const newCat = data.find((cat) => cat.id === id);

      newCat.isFavorite = !newCat.isFavorite;

      newCat.isFavorite && setLikedCats((prevStats) => [...prevStats, newCat]);
    }
  }

  // description toggle for every mapped cat
  function handleToggleDescription(index) {
    const updateShow = [...show];
    updateShow[index] = !updateShow[index];
    setShow(updateShow);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        lastPage={lastPage}
        cats={data}
        likedCats={likedCats}
        pageUp={pageUp}
        pageDown={pageDown}
        onToggleLike={handleToggleLike}
        toggleDescription={handleToggleDescription}
        onChangeNumber={handleNumberOfCats}
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
