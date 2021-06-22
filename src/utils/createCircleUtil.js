function createCircle(e, figure) {
  const { nativeEvent } = e;
  const { downX, downY } = figure;
  figure.cx = (downX + nativeEvent.offsetX) / 2;
  figure.cy = (downY + nativeEvent.offsetY) / 2;
  figure.r =
    Math.max(
      Math.abs(nativeEvent.offsetX - downX),
      Math.abs(nativeEvent.offsetY - downY)
    ) / 2;
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
      fill={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={width}
    />
  );
}

export { createCircle, renderCircle };
