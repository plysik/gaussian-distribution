export function capitalize(string, splitOn = " ") {
  const words = string.split(splitOn);
  const capitalized = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalized.join(splitOn);
}
