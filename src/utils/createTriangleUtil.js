function createTriangle(e, figure) {
  const { nativeEvent } = e;
  figure.moveX = nativeEvent.offsetX;
  figure.moveY = nativeEvent.offsetY;
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
