exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/tickets",
    toPath: "http://www.iticket.co.nz/events/2023/aug/engineering-revue",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
  createRedirect({
    fromPath: "/ticket",
    toPath: "http://www.iticket.co.nz/events/2023/aug/engineering-revue",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
}
