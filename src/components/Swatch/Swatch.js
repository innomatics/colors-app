import SwatchColor from "./SwatchColor";

export default function Swatch(props) {
  const { srgbColors } = props;
  return (
    <div className="Swatch">
      {srgbColors.map((srgbColor) => (
        <SwatchColor srgbColor={srgbColor}></SwatchColor>
      ))}
    </div>
  );
}
