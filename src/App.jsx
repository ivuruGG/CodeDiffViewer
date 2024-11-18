import React, { useState } from "react";
import FileInput from "./components/FileInput";
import DiffViewer from "./components/DiffViewer";
import { computeDiffs } from "./utils/diffUtils";

const App = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [diffs, setDiffs] = useState([]);
  const [error, setError] = useState("");

  const handleCompare = () => {
    console.log("Compare button clicked");
    console.log("Text1:", text1);
    console.log("Text2:", text2);

    setError(""); // エラーをリセット
    if (!text1 || !text2) {
      setError("Please upload both files.");
      console.error("Error: Both files must be selected.");
      return;
    }

    const result = computeDiffs(text1, text2);
    console.log("Diffs:", result);
    setDiffs(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-8">
      <h1 className="text-4xl font-extrabold text-center mb-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600">
          Elegant Code Diff Viewer
        </span>
      </h1>
      <div className="bg-white rounded-lg shadow-md p-6 text-black">
        <h2 className="text-xl font-semibold mb-4">Upload Your Files</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">File 1:</h3>
            <FileInput onFileLoad={setText1} />
          </div>
          <div>
            <h3 className="font-bold">File 2:</h3>
            <FileInput onFileLoad={setText2} />
          </div>
        </div>
        <button
          onClick={handleCompare}
          className="mt-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded hover:shadow-lg transform hover:scale-105 transition-all"
        >
          Compare
        </button>
      </div>
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      {diffs.length > 0 && (
        <div className="mt-6">
          <DiffViewer diffs={diffs} />
        </div>
      )}
    </div>
  );
};

export default App;
