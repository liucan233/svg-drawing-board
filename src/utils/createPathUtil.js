function createPath(e, figures) {
  const { nativeEvent } = e;
  const topSvgChild = figures.pop();
  topSvgChild.path += `L${nativeEvent.offsetX} ${nativeEvent.offsetY}`;
  figures.push(topSvgChild);
}

function renderPath(figure) {
  const { path, key, color, width, fill } = figure;
  return (
    <path
      stroke={color}
      strokeWidth={width}
      fill={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d={path}
      key={key}
    />
  );
}

export { createPath, renderPath };
