import Header from "../header/header.js";
import Footer from "../footer/footer.js";
import Tours from "../tours/Tours.js";



export default function Home({ data }) {
  return (
    <div>
      <Header />
      <hr />
      <Tours data={data} />
      <Footer />
    </div>
  );
}
// Export App Function
