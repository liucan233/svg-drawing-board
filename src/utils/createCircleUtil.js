function createCircle(e, figures) {
  const { nativeEvent, type } = e;
  const circle = figures.pop();
  const dx = nativeEvent.offsetX - circle.downX;
  const dy = nativeEvent.offsetY - circle.downY;
  circle.r = ~~Math.sqrt(dx * dx + dy * dy);
  figures.push(circle);
}

function renderCircle(figure) {
  const { downX, downY, r, key, color, fill, width } = figure;
  return (
    <circle
      r={r}
      cx={downX}
      cy={downY}
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
