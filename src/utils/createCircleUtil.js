function createCircle(e, figures) {
  const { nativeEvent, type } = e;
  const circle = figures.pop();
  const { downX, downY } = circle;
  circle.cx = (downX + nativeEvent.offsetX) / 2;
  circle.cy = (downY + nativeEvent.offsetY) / 2;
  circle.r =
    Math.max(
      Math.abs(nativeEvent.offsetX - downX),
      Math.abs(nativeEvent.offsetY - downY)
    ) / 2;
  figures.push(circle);
}

function renderCircle(figure) {
  const { cx, cy, r, key, color, fill, width } = figure;
  return (
    <circle
      r={r}
      cx={cx}
      cy={cy}
      key={key}
      stroke={color}
      fill="transparent"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={width}
    />
  );
}

export { createCircle, renderCircle };
