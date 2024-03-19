import Header from "@/components/Header/Header";
import NavBar from "@/components/Navigations/NavBar";
import Form from "@/components/Form/Form";

export default function Home({ onChangeNumber }) {
  return (
    <>
      <NavBar href1="/" href2="/favorite_cats"></NavBar>
      <Header
        onChangeNumber={onChangeNumber}
        indexPage
        hrefButton="/random_cats"
      />
      {/* <Form onChangeNumber={onChangeNumber} /> */}
    </>
  );
}
