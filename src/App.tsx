import { useRef, useState } from 'react';

import us from './assets/us.jpg';
import getRandomLocation from './utils/getRandomLocation';

function App() {
  const acceptButtonRef = useRef<HTMLButtonElement>(null);
  const rejectButtonRef = useRef<HTMLButtonElement>(null);

  const [accepted, setAccepted] = useState(false);
  const [hidden, setHidden] = useState(false);

  function handleMoveButton() {
    const acceptButtonWidth = acceptButtonRef.current!.clientWidth;
    const acceptButtonHeight = acceptButtonRef.current!.clientHeight;
    const acceptButtonXPosition = acceptButtonRef.current!.offsetLeft;
    const acceptButtonYPosition = acceptButtonRef.current!.offsetTop;

    const rejectButtonWidth = rejectButtonRef.current!.clientWidth;
    const rejectButtonHeight = rejectButtonRef.current!.clientHeight;
    const rejectButtonXPosition = rejectButtonRef.current!.offsetLeft;
    const rejectButtonYPosition = rejectButtonRef.current!.offsetTop;

    let { x, y } = getRandomLocation({
      buttonWidth: rejectButtonWidth,
      buttonHeight: rejectButtonHeight,
    });

    const isInsideOfAcceptButtonHorizontally =
      x > acceptButtonXPosition - acceptButtonWidth && x < acceptButtonXPosition + acceptButtonWidth;
    const isInsideOfAcceptButtonVertically =
      y > acceptButtonYPosition - acceptButtonHeight && y < acceptButtonYPosition + acceptButtonHeight;
    const isInsideOfRejectButtonHorizontally =
      x > rejectButtonXPosition - rejectButtonWidth && x < rejectButtonXPosition + rejectButtonWidth;
    const isInsideOfRejectButtonVertically =
      y > rejectButtonYPosition - rejectButtonHeight && y < rejectButtonYPosition + rejectButtonHeight;

    while (
      isInsideOfAcceptButtonHorizontally ||
      isInsideOfAcceptButtonVertically ||
      isInsideOfRejectButtonHorizontally ||
      isInsideOfRejectButtonVertically
    ) {
      let { x: newX, y: newY } = getRandomLocation({
        buttonWidth: rejectButtonRef.current!.clientWidth,
        buttonHeight: rejectButtonRef.current!.clientHeight,
      });

      x = newX;
      y = newY;
    }

    rejectButtonRef.current!.style.left = `${x}px`;
    rejectButtonRef.current!.style.top = `${y}px`;
  }

  function handleAccept() {
    setAccepted(true);
    setTimeout(() => setHidden(true), 300);
  }

  return (
    <div className="w-[100vw] h-[100vh] pt-10">
      <img
        src={us}
        className={`rounded transition-opacity duration-500 w-[260px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ${
          accepted ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {!hidden && (
        <div className={`transition-opacity duration-300 ${accepted ? 'opacity-0' : 'opacity-100'}`}>
          <h1 className="font-apricot text-3xl text-center">Namora comigo? &gt;&lt;</h1>

          <button
            onClick={handleAccept}
            className="bg-gradient-to-b from-pink-400 to-pink-600 p-2 rounded text-white text-2xl font-apricot transition ease-in-out hover:scale-110 absolute left-[calc(50%_-_45px)] translate-x-[-50%] top-1/2 translate-y-[-50%]"
            ref={acceptButtonRef}
          >
            Aceitar
          </button>

          <button
            className="bg-black p-2 rounded text-white text-2xl font-danger whitespace-nowrap cursor-default transition-all duration-[0.08s] absolute left-[calc(50%_+_65px)] -translate-x-1/2 top-1/2 -translate-y-1/2"
            onMouseEnter={handleMoveButton}
            onClick={handleMoveButton}
            ref={rejectButtonRef}
          >
            Recusar
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
