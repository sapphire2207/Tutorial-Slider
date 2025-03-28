import React, { useState, useEffect } from "react"; 
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define an interface for the slide structure
interface Slide {
  title: string;
  content: string;
  image: string;
}

// Define an array of slides, each containing an image, title, and content
const slides: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Step 1: Development",
    content: "Start building your first component step by step.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Step 2: Testing",
    content: "Test your implementation and debug any issues.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Step 3: Deployment",
    content: "Deploy your project and finalize your work.",
  },
];

const TutorialSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide index

  // Handle keyboard navigation (left and right arrow keys)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext(); // Move to the next slide when the right arrow is pressed
      } else if (e.key === "ArrowLeft") {
        handlePrevious(); // Move to the previous slide when the left arrow is pressed
      }
    };

    window.addEventListener("keydown", handleKeyPress); // Attach event listener for key presses
    return () => window.removeEventListener("keydown", handleKeyPress); // Cleanup function to remove event listener
  }, [currentSlide]); // Re-run effect when currentSlide changes

  // Function to navigate to the next slide
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length); // Cycles back to the first slide when at the end
  };

  // Function to navigate to the previous slide
  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); // Cycles to the last slide when at the beginning
  };

  return (
    <div className="relative w-full max-w-lg mx-auto px-4 py-8"> {/* Centered container for the slider */}
      {/* Slide content */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden"> {/* Slide container with styling */}
        <div className="relative aspect-video"> {/* Responsive aspect ratio for the image */}
          <img
            src={slides[currentSlide].image} // Displays current slide image
            alt={slides[currentSlide].title} // Alternative text for accessibility
            className="w-full h-full object-cover" // Ensures image fills container
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /> {/* Gradient overlay for better text readability */}
        </div>

        <div className="p-6 md:p-8"> {/* Padding around slide content */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"> {/* Slide title with styling */}
            {slides[currentSlide].title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed"> {/* Slide description */}
            {slides[currentSlide].content}
          </p>
        </div>
      </div>

      {/* Navigation controls below the card */}
      <div className="flex justify-center items-center gap-4 mt-4"> {/* Flexbox for button alignment */}
        <button
          onClick={handlePrevious} // Navigate to the previous slide
          className="p-2 rounded-full bg-gray-200 shadow-md hover:bg-gray-300 transition" // Styling for button
          aria-label="Previous slide" // Accessibility label
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" /> {/* Left arrow icon */}
        </button>

        {/* Slide indicator to show current slide number */}
        <p className="text-gray-800 font-medium text-lg">
          {currentSlide + 1} / {slides.length} {/* Displays current slide number out of total slides */}
        </p>

        <button
          onClick={handleNext} // Navigate to the next slide
          className="p-2 rounded-full bg-gray-200 shadow-md hover:bg-gray-300 transition" // Styling for button
          aria-label="Next slide" // Accessibility label
        >
          <ChevronRight className="w-6 h-6 text-gray-800" /> {/* Right arrow icon */}
        </button>
      </div>
    </div>
  );
};

export default TutorialSlider; // Export component for use in other parts of the project
