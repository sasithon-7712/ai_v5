import Datepicker from './components/Datepicker'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center p-8">
      <h1 className="text-6xl font-bold text-white drop-shadow-lg mb-8">
        hello kbtg
      </h1>
      
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Select a Date</h2>
        <Datepicker />
      </div>
    </div>
  )
}

export default App
