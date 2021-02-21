exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/interest",
    toPath:
      "https://docs.google.com/forms/d/e/1FAIpQLScJ_2Uj8seJS22Q9vov5Qxf6iehP0lBnpEUSOLCKgH29x8D-Q/viewform?usp=sf_link",
    isPermanent: true,
    force: true,
  })
}
