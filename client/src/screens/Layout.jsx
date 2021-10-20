import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <>
      <Navigation />
      {props.children}
      <Footer />
    </>
  );
}
