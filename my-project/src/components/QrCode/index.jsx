import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator() {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function handleGenerate() {
    if (!text.trim()) {
      setError("Please enter some text.");
      setValue("");
      return;
    }
    setError(null);
    setValue(text.trim());
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-xl font-semibold">QR Code Generator</h1>

      <input
        type="text"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border px-4 py-2 w-72 rounded-md shadow-sm"
      />
      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Generate
      </button>

      {error && <div className="text-richblack-900">{error}</div>}

      {value && (
        <div className="mt-4">
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={value}
            viewBox={`0 0 256 256`}
          />
        </div>
      )}
    </div>
  );
}
