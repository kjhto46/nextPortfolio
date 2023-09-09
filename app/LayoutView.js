import Header from "./common/inc/Header";
import Footer from "./common/inc/Footer";
export default function LayoutView({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
