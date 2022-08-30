import us from '../assets/us.jpg';

interface LoveImageProps {
  hidden: boolean;
}

export default function LoveImage({ hidden }: LoveImageProps) {
  return (
    <img
      src={us}
      draggable={false}
      className={`rounded transition-opacity duration-500 w-[260px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ${
        hidden ? 'opacity-0' : 'opacity-100'
      }`}
    />
  );
}
