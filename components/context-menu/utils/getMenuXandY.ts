const getMenuXandY = (e: React.MouseEvent) => {
  e.preventDefault();
  const { clientWidth, clientHeight } = e.currentTarget;
  const { clientX, clientY } = e;

  let pointX: number = 0;
  let pointY: number = 0;
  let originX: number = 0;
  let originY: number = 0;

  if (clientWidth - clientX > 210) {
    pointX = clientX;
    originY = 0;
  } else {
    pointX = clientX - 200;
    originX = 1;
  }

  if (clientHeight - clientY > 50) {
    pointY = clientY;
    originY = 0;
  } else {
    pointY = clientY - 50;
    pointY = 1;
  }

  return { points: { x: pointX, y: pointY }, origins: { originX, originY } };
};

export default getMenuXandY;
