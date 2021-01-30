export default function SwatchColor(props) {
  const { srgbColor } = props;
  return (
    <div className="Swatch-color-tile">
      <div
        className="Swatch-color"
        style={{
          backgroundColor: `rgb(${srgbColor.red},${srgbColor.green},${srgbColor.blue})`,
        }}
      ></div>
      <div className="Swatch-color-text">
        {`RGB: (${srgbColor.red},${srgbColor.green},${srgbColor.blue})`}
      </div>
    </div>
  );
}
