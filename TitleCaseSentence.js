function titleCase(str) {
  return str.toLowerCase().split(" ").map((word) => {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  }).join(" ");
}