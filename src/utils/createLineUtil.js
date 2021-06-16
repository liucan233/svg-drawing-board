function createLine(e, figures) {
  const { nativeEvent, type } = e;
  const line = figures.pop();
  line.moveX = nativeEvent.offsetX;
  line.moveY = nativeEvent.offsetY;
  figures.push(line);
}

function renderLine(figure) {
  const { downX, downY, moveX, moveY, path, key, color, width, fill } = figure;
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
