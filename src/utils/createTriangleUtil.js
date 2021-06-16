function createTriangle(e, figures) {
  const { nativeEvent, type } = e;
  const triangle = figures.pop();
  triangle.moveX = nativeEvent.offsetX;
  triangle.moveY = nativeEvent.offsetY;
  figures.push(triangle);
}

function renderTriangle(figure) {
  const { downX, downY, moveX, moveY, key, color, width, fill } = figure;
  if (!moveX) return;
  const pointsStr = `${
    (downX + moveX) / 2
  } ${downY},${downX} ${moveY},${moveX} ${moveY}`;
  return (
    <polygon
      key={key}
      stroke={color}
      points={pointsStr}
      fill={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={width}
    />
  );
}

export { createTriangle, renderTriangle };
