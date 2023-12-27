import "./App.css";
import stacklineLogo from "./assets/stackline_logo.svg";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <header className="flex h-20 w-full bg-[#052849] shadow-lg">
        <img src={stacklineLogo} alt="logo" className="h-full p-6" />
      </header>

      <main className="flex h-screen space-x-5 px-5 py-16">
        <section className="flex w-1/5">
          <div className="h-full w-full shadow-md bg-white rounded">
            <h1 className="text-3xl font-bold underline">Product Details</h1>
          </div>
        </section>

        <section className="flex flex-col w-4/5 space-y-16 rounded">
          <div className="h-full w-full shadow-md bg-white">
            <h1 className="text-3xl font-bold underline">Chart</h1>
          </div>

          <div className="h-full w-full shadow-md bg-white rounded">
            <h1 className="text-3xl font-bold underline">Sales Data</h1>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
