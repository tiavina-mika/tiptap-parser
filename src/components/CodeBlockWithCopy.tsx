import { ReactNode, useState } from "react";
import Check from "./icons/Check";
import Copy from "./icons/Copy";
import { childrenToString } from "../utils/utils";

/**
 *
 * @param param0
 * @returns
 */
type Props = {
  children: ReactNode;
};

const CodeBlockWithCopy = ({ children }: Props) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    const codeContent = childrenToString(children);
    if (!codeContent) return;
    navigator.clipboard.writeText(codeContent).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // "Copied!" message for 2 seconds
    });
  };

  return (
    <div className="pre-container">
      <button
        type="button"
        onClick={copyToClipboard}
      >
        {copied ? <Check /> : <Copy />}
      </button>
      <pre>{children}</pre>
    </div>
  );
};

export default CodeBlockWithCopy;
