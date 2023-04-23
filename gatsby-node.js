exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/cast",
    toPath: "https://forms.gle/Gdzm41nodG3wvaYY9",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
  createRedirect({
    fromPath: "/crew",
    toPath: "https://forms.gle/a9WfjFZwWiixHoNm9",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
  createRedirect({
    fromPath: "/video",
    toPath: "https://www.youtube.com/watch?v=fIBn00Wd9Zc",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
}
