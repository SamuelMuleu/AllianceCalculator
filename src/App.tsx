import { Header } from "./components/Header";
import { RingForm } from "./components/RingForm";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow px-4 pb-8">
        <RingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
