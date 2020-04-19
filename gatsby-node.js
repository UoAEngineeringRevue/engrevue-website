exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/signup",
    toPath:
      "https://docs.google.com/forms/d/e/1FAIpQLScAKoyEA_sz2W5UWt2ocRMjrw2g9bjFFsJow2QgSGW_yqFfEw/viewform?usp=sf_link",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "/crewsignup",
    toPath:
      "https://docs.google.com/forms/d/e/1FAIpQLScWKMPxsOV0-tpv2281hKbs9hkBSagrPzYRzdzmYdjF8vfC2w/viewform?usp=sf_link",
    isPermanent: true,
    force: true,
  })
}
