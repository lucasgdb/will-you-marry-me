import getRandomNumber from './getRandomNumber';

export default function getRandomLocation({
  buttonWidth,
  buttonHeight,
}: {
  buttonWidth: number;
  buttonHeight: number;
}) {
  const { innerWidth, innerHeight } = window;

  const randomXLocation = getRandomNumber({ min: buttonWidth, max: innerWidth - buttonWidth * 2 });
  const randomYLocation = getRandomNumber({ min: 110, max: innerHeight - buttonHeight * 2 });

  return { x: randomXLocation, y: randomYLocation };
}
