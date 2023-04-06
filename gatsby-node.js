exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/auditions",
    toPath: "https://forms.gle/a9WfjFZwWiixHoNm9",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
}
