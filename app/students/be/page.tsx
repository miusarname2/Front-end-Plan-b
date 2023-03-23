"use client";
import View from "./components/view";
import Navbar from "../../components/NavBar";
import Footer from "../../components/footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <View title="Be/Ser" />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
