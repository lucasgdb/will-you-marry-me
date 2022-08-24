import { type ForwardedRef, forwardRef } from 'react';

interface AcceptButtonProps {
  onClick(): void;
}

function AcceptButton({ onClick }: AcceptButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-b from-pink-400 to-pink-600 p-2 rounded text-white text-2xl font-apricot transition ease-in-out hover:scale-110 absolute left-[calc(50%_-_45px)] -translate-x-1/2 top-1/2 -translate-y-1/2"
      ref={ref}
    >
      Aceitar
    </button>
  );
}

export default forwardRef(AcceptButton);
