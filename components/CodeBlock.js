import { rainbow } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

const CopyButton = ({ target }) => {
  const handleCopy = async () => {
    if (target) {
      try {
        await navigator.clipboard.writeText(target);
        alert("copied");
      } catch (error) {
        alert(`copy filed ${error}`);
      }
    }
  };

  return (
    <button
      className="absolute p-0.5 right-0.5 top-0.5 rounded-lg bg-white text-sm text-gray-800"
      onClick={handleCopy}
    >
      copy
    </button>
  );
};

export default function CodeBlock({ children }) {
  return (
    <div className="relative">
      <CopyButton target={children} />
      <SyntaxHighlighter showLineNumbers style={rainbow}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
