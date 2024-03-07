import { GlobalStyle } from "../styles";
import { useState } from "react";
import useSWR from "swr";

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

  console.log(data);

  return (
    <>
      <GlobalStyle />
      <Component
        cats={data}
        pageUp={pageUp}
        pageDown={pageDown}
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
