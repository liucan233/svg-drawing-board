function createBessel(e, figures) {
  const { nativeEvent } = e;
  const bessel = figures.pop();
  bessel.way = `${bessel.path} Q ${nativeEvent.offsetX} ${bessel.downY} ${nativeEvent.offsetX} ${nativeEvent.offsetY}`;
  figures.push(bessel);
}

function renderBessel(figure) {
  const { way, key, color, width, fill } = figure;
  return (
    <path
      stroke={color}
      strokeWidth={width}
      fill="transparent"
      strokeLinecap="round"
      strokeLinejoin="round"
      d={way}
      key={key}
    />
  );
}

export { createBessel, renderBessel };
