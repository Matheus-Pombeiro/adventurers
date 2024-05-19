import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="min-h-screen dark:bg-neutral-700 flex flex-col justify-between gap-5 relative">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
