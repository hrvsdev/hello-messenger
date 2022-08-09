const getMenuXandY = (e: React.MouseEvent, width: number, height: number) => {
  e.preventDefault();
  const { clientWidth, clientHeight } = e.currentTarget;
  const { clientX, clientY } = e;

  let pointX: number = 0;
  let pointY: number = 0;
  let originX: number = 0;
  let originY: number = 0;

  if (clientWidth - clientX > width + 2) {
    pointX = clientX;
    originY = 0;
  } else {
    pointX = clientX - width + 2;
    originX = 1;
  }

  if (clientHeight - clientY > height + 2) {
    pointY = clientY;
    originY = 0;
  } else {
    pointY = clientY - height + 2;
    originY = 1;
  }

  console.dir({ points: { x: pointX, y: pointY }, origins: { originX, originY } })
  return { points: { x: pointX, y: pointY }, origins: { originX, originY } };
};

export default getMenuXandY;
