import React, { useState } from 'react';
import axios from 'axios';
//import img from '../../public/ai.png'
function ChatPage() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [listening, setListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  let speechSynthesisInstance = window.speechSynthesis;
  let currentUtterance = null;

  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setPrompt(speechResult);
      setListening(false);
      
      if (speechResult.trim().toLowerCase() === "hey alexa how are you") {
        speakResponse("I am good, tell me how can I help you?");
      } else if (speechResult.toLowerCase().includes("tell me about yourself")) {
        speakResponse("I am your assistant, here to help you with any queries you may have.");
      } else {
        handleSubmit(speechResult);
      }
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  const handleSubmit = async (inputPrompt) => {
    try {
      const res = await axios.post("http://localhost:8080/chat", { prompt: inputPrompt || prompt });
      const answer = res.data.answer;
      setResponse(answer); 
      setPrompt(""); 

      // Speak the response aloud
      speakResponse(answer, () => {
        // After speaking the answer, ask if more help is needed
        speakResponse("Any more help you want?");
      });

    } catch (err) {
      console.error('Error details:', err.response ? err.response.data : err.message);
      setResponse('An error occurred. Please try again.');
    }
  };

  const speakResponse = (text, callback) => {
    if (speechSynthesisInstance.speaking) {
      speechSynthesisInstance.cancel(); // Stop any ongoing speech
    }
    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = 'en-US';

    // When the speech ends, execute the callback (if provided)
    currentUtterance.onend = () => {
      setIsSpeaking(false);
      if (callback) {
        callback();
      }
    };

    speechSynthesisInstance.speak(currentUtterance);
    setIsSpeaking(true);
    setIsPaused(false);
  };

  const toggleSpeech = () => {
    if (speechSynthesisInstance.speaking) {
      if (isPaused) {
        speechSynthesisInstance.resume(); // Resume the paused speech
        setIsPaused(false);
      } else {
        speechSynthesisInstance.pause(); // Pause the speech
        setIsPaused(true);
      }
    }
  };

  const handleStop = () => {
    speechSynthesisInstance.cancel(); // Stop the speech
    setIsSpeaking(false);
    setIsPaused(false);
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen  bg-black ">
      <div className="flex-grow w-full max-w-2xl p-4 space-y-4 overflow-y-auto">
        <div 
          className="p-4 rounded-xl shadow-lg border  bg-black border-gray-300" 
        //   style={{ backgroundColor: '#F2E8C6', boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)' }}
        >
          <p className="text-gray-200">
            {response || 'Your response will appear here...'}
          </p>
        </div>
      </div>
    

      <div className=" w-full max-w-2xl p-4  mb-10 border rounded-xl bg-black border-t border-gray-300">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-grow px-4 py-2 text-gray-700 border rounded-md "
            placeholder="Type your message here..."
            // style={{ backgroundColor: '#F2E8C6', borderColor: '#982B1C' }}
          />
          <button 
            onClick={handleVoiceInput} 
            className={`px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 ${listening ? 'bg-gray-400' : 'bg-[#9e7df1]'} hover:bg-[#a388e9]`}
          >
            {listening ? 'Listening...' : 'Speak'}
          </button>
          <button 
            onClick={() => handleSubmit()} 
            className="px-4 py-2 text-white bg-[#9e7df1] rounded-md hover:bg-[#9e7df1]"
          >
            Send
          </button>
        </div>

        {listening && (
          <div className="flex mt-4 space-x-4">
            <button 
              onClick={toggleSpeech} 
              className="px-4 py-2 text-white bg-[#9e7df1] rounded-md hover:bg-[#9e7df1]"
            >
              {isPaused ? 'Resume' : 'Pause'}
            </button>
            <button 
              onClick={handleStop} 
              className="px-4 py-2 text-white bg-[#9e7df1] rounded-md hover:bg-[#9e7df1]"
            >
              Stop
            </button>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes bgAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-bgAnimation {
            animation: bgAnimation 10s ease infinite;
          }
        `}
      </style>
    </div>
  );
}

export default ChatPage;
