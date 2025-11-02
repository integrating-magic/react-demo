import React, { useState } from "react";
import Button from "../components/Button";

// Component that shows different content based on state
const StatusIndicator = ({ selectedButton }) => {
  const getButtonNumber = (btnText) => {
    const match = btnText.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  const buttonNumber = getButtonNumber(selectedButton.btnText);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Status Indicator</h3>
      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4, 5].map(num => (
          <div
            key={num}
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
              buttonNumber === num 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-200 text-gray-500'
            }`}
          >
            {num}
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-600">
        {buttonNumber > 0 ? `Button ${buttonNumber} is active` : 'No button selected'}
      </p>
    </div>
  );
};

// Component that changes color based on even/odd button
const ColorPanel = ({ selectedButton }) => {
  const getButtonNumber = (btnText) => {
    const match = btnText.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  const buttonNumber = getButtonNumber(selectedButton.btnText);
  const isEven = buttonNumber % 2 === 0 && buttonNumber > 0;
  const isSpecial = buttonNumber === 1000;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Color Panel</h3>
      <div 
        className={`w-full h-32 rounded-lg flex items-center justify-center text-white font-bold text-xl transition-all duration-500 ${
          isSpecial 
            ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
            : isEven 
              ? 'bg-blue-500' 
              : buttonNumber > 0 
                ? 'bg-orange-500' 
                : 'bg-gray-300 text-gray-600'
        }`}
      >
        {isSpecial && '🌟 SPECIAL 🌟'}
        {!isSpecial && buttonNumber > 0 && (isEven ? '🔵 EVEN' : '🟠 ODD')}
        {buttonNumber === 0 && 'Waiting...'}
      </div>
      <p className="text-sm text-gray-600 mt-2">
        {isSpecial && 'Button 1000 triggers special gradient!'}
        {!isSpecial && buttonNumber > 0 && `Button ${buttonNumber} is ${isEven ? 'even' : 'odd'}`}
        {buttonNumber === 0 && 'Click a button to see the magic!'}
      </p>
    </div>
  );
};

// Component that shows different navigation based on state
const NavigationMenu = ({ selectedButton }) => {
  const getButtonNumber = (btnText) => {
    const match = btnText.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  const buttonNumber = getButtonNumber(selectedButton.btnText);
  
  const menuItems = [
    { id: 1, name: 'Home', icon: '🏠' },
    { id: 2, name: 'Profile', icon: '👤' },
    { id: 3, name: 'Settings', icon: '⚙️' },
    { id: 4, name: 'Messages', icon: '💬' },
    { id: 5, name: 'Help', icon: '❓' }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Navigation Menu</h3>
      <div className="space-y-2">
        {menuItems.map(item => (
          <div
            key={item.id}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
              buttonNumber === item.id 
                ? 'bg-purple-500 text-white shadow-lg transform scale-105' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
            {buttonNumber === item.id && <span className="ml-auto">←</span>}
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-600 mt-4">
        {buttonNumber > 0 && buttonNumber <= 5 ? `${menuItems[buttonNumber-1]?.name} is highlighted` : 'Click buttons 1-5 to highlight menu items'}
      </p>
    </div>
  );
};

// Component that displays current state information
const StateViewer = ({ selectedButton, inputText }) => {
  return (
    <div className="bg-gray-800 text-green-400 p-6 rounded-lg shadow-lg font-mono">
      <h3 className="text-lg font-semibold mb-4 text-white">State Viewer (Like FileMaker Data Viewer)</h3>
      <div className="space-y-2">
        <div>
          <span className="text-gray-400">selectedButton.btnText:</span> 
          <span className="ml-2">"{selectedButton.btnText}"</span>
        </div>
        <div>
          <span className="text-gray-400">selectedButton.text:</span> 
          <span className="ml-2">"{selectedButton.text}"</span>
        </div>
        <div>
          <span className="text-gray-400">inputText:</span> 
          <span className="ml-2">"{inputText}"</span>
        </div>
        <div>
          <span className="text-gray-400">inputText.length:</span> 
          <span className="ml-2">{inputText.length}</span>
        </div>
        <div>
          <span className="text-gray-400">buttonNumber:</span> 
          <span className="ml-2">{selectedButton.btnText.match(/\d+/)?.[0] || 'null'}</span>
        </div>
        <div>
          <span className="text-gray-400">isEven:</span> 
          <span className="ml-2">{(() => {
            const num = parseInt(selectedButton.btnText.match(/\d+/)?.[0] || '0');
            return num > 0 ? (num % 2 === 0).toString() : 'false';
          })()}</span>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-4">
        This shows ALL current state - just like FileMaker's Data Viewer!
      </p>
    </div>
  );
};

// Component that shows the input text in different ways
const TextDisplay = ({ inputText, selectedButton }) => {
  const getButtonNumber = (btnText) => {
    const match = btnText.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };

  const buttonNumber = getButtonNumber(selectedButton.btnText);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Text Display</h3>
      <div className="space-y-4">
        {/* Normal text */}
        <div className="p-3 bg-gray-100 rounded-lg">
          <label className="text-sm font-medium text-gray-600">Normal Text:</label>
          <p className="text-lg text-gray-800">{inputText || "Type something in the input above..."}</p>
        </div>
        
        {/* Uppercase text */}
        <div className="p-3 bg-blue-100 rounded-lg">
          <label className="text-sm font-medium text-blue-600">Uppercase Text:</label>
          <p className="text-lg text-blue-800 font-bold">{inputText.toUpperCase() || "TYPE SOMETHING..."}</p>
        </div>
        
        {/* Character count */}
        <div className="p-3 bg-green-100 rounded-lg">
          <label className="text-sm font-medium text-green-600">Character Count:</label>
          <p className="text-lg text-green-800">{inputText.length} characters</p>
        </div>
        
        {/* Reversed text (only if button is odd) */}
        {buttonNumber > 0 && buttonNumber % 2 === 1 && (
          <div className="p-3 bg-orange-100 rounded-lg">
            <label className="text-sm font-medium text-orange-600">Reversed Text (Odd Button Active):</label>
            <p className="text-lg text-orange-800">{inputText.split('').reverse().join('') || "...gnihtemos epyT"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Component that shows word analysis
const TextAnalysis = ({ inputText }) => {
  const words = inputText.trim() ? inputText.trim().split(/\s+/) : [];
  const vowels = inputText.toLowerCase().match(/[aeiou]/g) || [];
  const consonants = inputText.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/g) || [];
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Text Analysis</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-purple-100 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">{words.length}</div>
          <div className="text-sm text-purple-600">Words</div>
        </div>
        <div className="text-center p-3 bg-pink-100 rounded-lg">
          <div className="text-2xl font-bold text-pink-600">{vowels.length}</div>
          <div className="text-sm text-pink-600">Vowels</div>
        </div>
        <div className="text-center p-3 bg-indigo-100 rounded-lg">
          <div className="text-2xl font-bold text-indigo-600">{consonants.length}</div>
          <div className="text-sm text-indigo-600">Consonants</div>
        </div>
        <div className="text-center p-3 bg-teal-100 rounded-lg">
          <div className="text-2xl font-bold text-teal-600">{inputText.length}</div>
          <div className="text-sm text-teal-600">Total Chars</div>
        </div>
      </div>
      {words.length > 0 && (
        <div className="mt-4">
          <label className="text-sm font-medium text-gray-600">Words Found:</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {words.map((word, index) => (
              <span key={index} className="px-2 py-1 bg-gray-200 rounded-full text-sm">
                {word}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const App = ({ buttons }) => {
  // TWO SOURCES OF TRUTH - Each controls different parts of the UI
  const [selectedButton, setSelectedButton] = useState({
    text: "Click a button to see React's magic!",
    btnText: "",
  });

  // NEW STATE: Controlled input field
  const [inputText, setInputText] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header explaining the concept */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
          <h1 className="text-2xl font-bold text-blue-900 mb-2">
            React Demo: Single Source of Truth (Like FileMaker!)
          </h1>
          <p className="text-blue-800">
            Just like in FileMaker where one field can control multiple layout
            objects, in React one state variable can control multiple
            components. Watch how clicking ONE button updates ALL components
            below simultaneously!
          </p>
        </div>
      </div>

      {/* Buttons - These update our button state */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            Control Panel (Updates Button State)
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {buttons.map((button, index) => (
              <Button
                key={index}
                button={button}
                setBtn={setSelectedButton} // This updates our button state
              />
            ))}
          </div>
        </div>
      </div>

      {/* Controlled Input Field - Updates text state */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            Controlled Input Field (Updates Text State)
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="textInput"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Type something and watch multiple components update:
              </label>
              <input
                id="textInput"
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Start typing to see React's magic..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
              />
              <p className="text-sm text-gray-500 mt-2">
                This is a <strong>controlled component</strong> - React controls
                the input value through state!
              </p>
            </div>

            {/* Quick text buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setInputText("Hello FileMaker Developers!")}
                className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors"
              >
                Sample Text 1
              </button>
              <button
                onClick={() => setInputText("React is like FileMaker for UI!")}
                className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition-colors"
              >
                Sample Text 2
              </button>
              <button
                onClick={() => setInputText("Single Source of Truth")}
                className="px-3 py-1 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-600 transition-colors"
              >
                Sample Text 3
              </button>
              <button
                onClick={() => setInputText("")}
                className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* All components below read from the state */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Components controlled by BUTTON state */}
        <StatusIndicator selectedButton={selectedButton} />
        <ColorPanel selectedButton={selectedButton} />
        <NavigationMenu selectedButton={selectedButton} />

        {/* Components controlled by INPUT TEXT state */}
        <TextDisplay inputText={inputText} selectedButton={selectedButton} />
        <TextAnalysis inputText={inputText} />

        {/* Component showing ALL state (spans full width) */}
        <div className="md:col-span-2 lg:col-span-3">
          <StateViewer selectedButton={selectedButton} inputText={inputText} />
        </div>
      </div>

      {/* Main Display - Shows both state values */}
      <div className="max-w-6xl mx-auto mt-8">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Current State Values
          </h2>

          {/* Button State Display */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              Button State:
            </h3>
            <div className="text-4xl text-purple-600 font-bold mb-2">
              {selectedButton.text}
            </div>
            <p className="text-gray-600 text-sm">
              This comes from the button selection state
            </p>
          </div>

          {/* Input State Display */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-600 mb-2">
              Input State:
            </h3>
            <div className="text-4xl text-blue-600 font-bold mb-2 min-h-[60px] flex items-center justify-center">
              {inputText || "Type something above..."}
            </div>
            <p className="text-gray-600 text-sm">
              This comes from the controlled input field state
            </p>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
            <p className="text-yellow-800 text-sm">
              <strong>FileMaker Parallel:</strong> Just like how one FileMaker
              field can be displayed in multiple layout objects, these React
              states control multiple components simultaneously!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
