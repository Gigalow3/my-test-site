import Dropdown from "./components/Dropdown";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-6">Welcome to Gigalow3</h1>
        <p className="text-2xl mb-12">Your Personal Portfolio</p>
        <Dropdown />
      </div>
    </main>
  );
}

