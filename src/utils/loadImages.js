export const imageContexts = {
  civiel: require.context(
    "../images/project-fotos/civiel",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  drinkwater: require.context(
    "../images/project-fotos/drinkwater",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  energie: require.context(
    "../images/project-fotos/energie",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  infra: require.context(
    "../images/project-fotos/infra",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  parkeergarages: require.context(
    "../images/project-fotos/parkeergarages",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  specials: require.context(
    "../images/project-fotos/specials",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  utiliteitsbouw: require.context(
    "../images/project-fotos/utiliteitsbouw",
    false,
    /\.(png|jpe?g|svg)$/
  ),
};

export function importAllImages(r) {
  return r.keys().map((key) => ({
    src: r(key),
    name: key.replace("./", ""),
  }));
}
