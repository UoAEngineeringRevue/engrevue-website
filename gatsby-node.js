exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/signup",
    toPath:
      "https://docs.google.com/forms/d/e/1FAIpQLScWtAsV3LKE63qr-S9_gxV1y-m8IRMJFledCAAPw9zA_rUU5g/viewform",
    isPermanent: true,
    force: true,
  }),
    createRedirect({
      fromPath: "/crewsignup",
      toPath:
        "https://docs.google.com/forms/d/e/1FAIpQLSdKI17wIs1TiwkORyI0w0V-VxLz4RdDDxyCCLn2DI5SXHKRnQ/viewform",
      isPermanent: true,
      force: true,
    })
}
