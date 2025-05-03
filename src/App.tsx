import { Header } from "./components/Header";
import { RingForm } from "./components/RingForm";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <RingForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
