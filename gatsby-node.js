exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/distrussed",
    toPath: "https://www.youtube.com/watch?v=u7XGILPI7Lg",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
  createRedirect({
    fromPath: "/dancewithus",
    toPath: "https://www.youtube.com/watch?v=f4-92UYWsVs",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
}
