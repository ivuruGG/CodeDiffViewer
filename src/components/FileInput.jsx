const FileInput = ({ onFileLoad }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log("Loaded file content:", e.target.result); // デバッグログ
        onFileLoad(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  return (
    <input
      type="file"
      accept=".txt,.js,.py,.java,.cpp"
      onChange={handleFileChange}
      className="mt-2 block"
    />
  );
};

export default FileInput;
