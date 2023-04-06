exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/auditions",
    toPath: "https://forms.gle/Gdzm41nodG3wvaYY9",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
}
