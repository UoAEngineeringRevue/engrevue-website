exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/cast",
    toPath: "https://forms.gle/Ypb9K6717Nk3GVXw9",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
  createRedirect({
    fromPath: "/crew",
    toPath: "https://forms.gle/HUXL5Xg3xZCihPJi9",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
  // createRedirect({
  //   fromPath: "/tickets",
  //   toPath: "http://www.iticket.co.nz/events/2023/aug/engineering-revue",
  //   isPermanent: true,
  //   redirectInBrowser: true,
  //   force: true,
  // })
  // createRedirect({
  //   fromPath: "/ticket",
  //   toPath: "http://www.iticket.co.nz/events/2023/aug/engineering-revue",
  //   isPermanent: true,
  //   redirectInBrowser: true,
  //   force: true,
  // })
  // ^^ update these links once you've set up the tickets!
}
