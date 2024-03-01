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

  const URL = `https://api.thecatapi.com/v1/images/search?limit=50&page=${currentPage}&has_breeds=1&api_key=live_80QHtDPhcDJgMWfVMivtOm4RkbsEB7Op11NNA8NkImpLpcuUvYoyb12eDy5cLmnb`;

  const { data, isLoading, error } = useSWR(URL, fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: true,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
  });

  function pageDown() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: `smooth` });
    }
  }

  // Page-Nav "Up"
  function pageUp() {
    if (currentPage < 6) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: `smooth` });
    }
  }

  const cats = data;
  return (
    <>
      <GlobalStyle />
      <Component
        pageUp={pageUp}
        pageDown={pageDown}
        currentPage={currentPage}
        cats={cats}
        isLoading={isLoading}
        error={error}
        {...pageProps}
      />
    </>
  );
}
