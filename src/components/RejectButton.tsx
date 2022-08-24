import { type ForwardedRef, forwardRef } from 'react';

interface RejectButtonProps {
  onMouseEnter(): void;
  onClick(): void;
}

function RejectButton({ onMouseEnter, onClick }: RejectButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
  return (
    <button
      className="bg-black p-2 rounded text-white text-2xl font-danger whitespace-nowrap cursor-default transition-all duration-[0.04s] md:duration-[0.08s] absolute left-[calc(50%_+_65px)] -translate-x-1/2 top-1/2 -translate-y-1/2"
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      ref={ref}
    >
      Recusar
    </button>
  );
}

export default forwardRef(RejectButton);
