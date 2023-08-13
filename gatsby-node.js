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
  createRedirect({
    fromPath: "/lecture",
    toPath: "https://docs.google.com/presentation/d/19jLpCe-OLfRCgKeDhqFU-aM3zPPn0iqNl7lpb_8b-Z4/edit?usp=sharing",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
}
