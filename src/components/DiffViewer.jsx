const DiffViewer = ({ diffs }) => {
  if (!diffs || diffs.length === 0) {
    return (
      <p className="text-center text-gray-600">No differences found. 🎉</p>
    );
  }

  return (
    <div className="space-y-4">
      {diffs.map((part, index) => {
        const [operation, text] = part;
        let className =
          "p-4 rounded-lg shadow-md font-mono whitespace-pre-wrap text-lg";
        if (operation === -1) className += " bg-red-100 text-red-600";
        if (operation === 1) className += " bg-green-100 text-green-600";
        if (operation === 0) className += " bg-gray-100 text-gray-800";

        return (
          <div key={index} className={className}>
            {text}
          </div>
        );
      })}
    </div>
  );
};
