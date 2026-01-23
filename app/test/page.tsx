export default function TestPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Test Page</h1>
      <p className="text-lg text-gray-600 mb-8">
        Welcome to your practice page! Feel free to experiment here.
      </p>
      
      <div className="space-y-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Click me
        </button>
        
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Test Content</h2>
          <p>This is a test area where you can practice building components.</p>
        </div>
      </div>
    </main>
  );
}
