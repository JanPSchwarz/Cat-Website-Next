import Header from "@/components/Header/Header";
import NavBar from "@/components/Navigations/NavBar";

export default function Home({ lastPage }) {
  return (
    <>
      <NavBar href1="/" href2="/favorite_cats"></NavBar>
      <Header lastPage={true} hrefButton="/random_cats" />
    </>
  );
}
