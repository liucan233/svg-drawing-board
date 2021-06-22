function createPath(e, figures) {
  const { nativeEvent } = e;
  figures.path += `L${nativeEvent.offsetX} ${nativeEvent.offsetY}`;
}

function renderPath(figure) {
  const { path, key, color, width, downX, downY } = figure;
  if (!path) return null;
  const newPath = `M${downX} ${downY} ` + path;
  return (
    <path
      stroke={color}
      strokeWidth={width}
      fill="transparent"
      strokeLinecap="round"
      strokeLinejoin="round"
      d={newPath}
      key={key}
    />
  );
}

export { createPath, renderPath };
