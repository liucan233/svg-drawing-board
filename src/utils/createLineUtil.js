function createLine(e, figure) {
  const { nativeEvent } = e;
  figure.moveX = nativeEvent.offsetX;
  figure.moveY = nativeEvent.offsetY;
}

function renderLine(figure) {
  const { downX, downY, moveX, moveY, key, color, width, fill } = figure;
  if (!moveX) return;
  return (
    <line
      x1={downX}
      x2={moveX}
      y1={downY}
      y2={moveY}
      key={key}
      stroke={color}
      fill={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={width}
    />
  );
}

export { createLine, renderLine };
