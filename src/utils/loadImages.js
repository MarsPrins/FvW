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
  "civiel 1": require.context(
    "../images/project-fotos/civiel",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "drinking water": require.context(
    "../images/project-fotos/drinkwater",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  energy: require.context(
    "../images/project-fotos/energie",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  infra: require.context(
    "../images/project-fotos/infra",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "parking garages": require.context(
    "../images/project-fotos/parkeergarages",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  specials: require.context(
    "../images/project-fotos/specials",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "civil 2": require.context(
    "../images/project-fotos/utiliteitsbouw",
    false,
    /\.(png|jpe?g|svg)$/
  ),
};

export function importAllImages(r) {
  return r.keys().map((key) => {
    const src = r(key);

    // src kan zijn: './static/media/foo.hash.png' OF '/static/media/foo.hash.png'
    const absoluteSrc = "/" + src.replace(/^\.?\//, "");

    return {
      src: absoluteSrc,
      name: key.replace("./", ""),
    };
  });
}
