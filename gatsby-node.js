exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/crewsignup",
    toPath:
      "https://docs.google.com/forms/d/e/1FAIpQLScWKMPxsOV0-tpv2281hKbs9hkBSagrPzYRzdzmYdjF8vfC2w/viewform?usp=sf_link",
    isPermanent: true,
    force: true,
  })
}
