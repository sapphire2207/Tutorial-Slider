import TutorialSlider from "./components/TutorialSlider";
import Header from "./components/Header";

function App() {
  return (
    // A full-page container with a gradient background and centered content
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 relative">
      {/* Header component, which will display the application’s header. */}
      <Header />
      {/* The TutorialSlider component, which contains the interactive tutorial slides */}
      <TutorialSlider />
    </div>
  );
}

export default App;
