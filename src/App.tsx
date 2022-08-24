import { useRef, useState } from 'react';

import AcceptButton from './components/AcceptButton';
import LoveImage from './components/LoveImage';
import RejectButton from './components/RejectButton';
import getRandomLocation from './utils/getRandomLocation';

function App() {
  const acceptButtonRef = useRef<HTMLButtonElement>(null);
  const rejectButtonRef = useRef<HTMLButtonElement>(null);

  const [accepted, setAccepted] = useState(false);
  const [hidden, setHidden] = useState(false);

  function handleMoveButton() {
    const rejectButtonWidth = rejectButtonRef.current!.clientWidth;
    const rejectButtonHeight = rejectButtonRef.current!.clientHeight;

    const { x, y } = getRandomLocation({
      buttonWidth: rejectButtonWidth,
      buttonHeight: rejectButtonHeight,
    });

    rejectButtonRef.current!.style.left = `${x}px`;
    rejectButtonRef.current!.style.top = `${y}px`;
  }

  function handleAccept() {
    setAccepted(true);
    setTimeout(() => setHidden(true), 300);
  }

  return (
    <div className="w-[100vw] h-[100vh] pt-10">
      <LoveImage hidden={!accepted} />

      {!hidden && (
        <div className={`transition-opacity duration-300 ${accepted ? 'opacity-0' : 'opacity-100'}`}>
          <h1 className="font-apricot text-3xl text-center">Namora comigo? &gt;&lt;</h1>

          <AcceptButton onClick={handleAccept} ref={acceptButtonRef} />
          <RejectButton onMouseMove={handleMoveButton} onClick={handleMoveButton} ref={rejectButtonRef} />
        </div>
      )}
    </div>
  );
}

export default App;
