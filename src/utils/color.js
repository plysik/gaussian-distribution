export const generatePastelColor = ({
  hue = Math.random(),
  saturation = Math.random(),
  lightness = Math.random()
}) => `hsl(${360 * hue},${25 + 70 * saturation}%,${85 + 10 * lightness}%)`;
