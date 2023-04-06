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
  createRedirect({
    fromPath: "/interview",
    toPath: "https://www.youtube.com/watch?v=GmS0LObyRD0",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
  createRedirect({
    fromPath: "/tickets",
    toPath: "https://www.iticket.co.nz/events/2022/aug/charlie-internship-lottery",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
  createRedirect({
    fromPath: "/auditions",
    toPath: "https://forms.gle/a9WfjFZwWiixHoNm9",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
}
