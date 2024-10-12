'use client';

import { ReactNode, useState } from 'react';
import Check from './icons/Check';
import Copy from './icons/Copy';
import { childrenToString } from '../utils/utils';

/**
 *
 * add a copy button to the code block
 * @returns
 */
type Props = {
  children: ReactNode;
};

const CodeBlockWithCopy = ({ children }: Props) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    const codeContent = childrenToString(children);

    if (!codeContent) return;
    navigator.clipboard.writeText(codeContent).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // "Copied!" message for 2 seconds
    });
  };

  return (
    <div className="pre-container">
      <button
        type="button"
        onClick={copyToClipboard}
      >
        {isCopied ? <Check /> : <Copy />}
      </button>
      <pre>{children}</pre>
    </div>
  );
};

export default CodeBlockWithCopy;
