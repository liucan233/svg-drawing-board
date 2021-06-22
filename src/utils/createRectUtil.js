function createRect(e, figure) {
  const { nativeEvent } = e;
  figure.moveX = nativeEvent.offsetX;
  figure.moveY = nativeEvent.offsetY;
}

function renderRect(figure) {
  const { key, color, fill, width } = figure;
  let { downX, downY, moveX, moveY } = figure;
  if (!moveX) return;
  let rectWidth = moveX - downX,
    rectHeight = moveY - downY;
  if (rectWidth < 0) {
    downX += rectWidth;
    rectWidth = -rectWidth;
  }
  if (rectHeight < 0) {
    downY += rectHeight;
    rectHeight = -rectHeight;
  }
  return (
    <rect
      x={downX}
      y={downY}
      width={rectWidth}
      height={rectHeight}
      key={key}
      stroke={color}
      fill={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={width}
    />
  );
}

export { createRect, renderRect };
