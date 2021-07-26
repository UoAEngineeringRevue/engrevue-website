exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/tickets",
    toPath: "https://www.iticket.co.nz/events/2021/aug/cs-get-degrease",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
}
