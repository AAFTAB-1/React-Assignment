import logo from './logo.svg';
import './App.css';



//Tailwind css styling
function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-6">
        <h2 className="text-2xl font-bold text-gray-800">React + Tailwind CSS</h2>
        <p className="text-gray-600 mt-2">
          React-Styling
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
