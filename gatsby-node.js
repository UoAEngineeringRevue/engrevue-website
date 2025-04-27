exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
  //   createRedirect({
  //   fromPath: "/tickets",
  //   toPath: "http://www.iticket.co.nz/events/2024/aug/phineas-and-ferb",
  //   isPermanent: true,
  //   redirectInBrowser: true,
  //   force: true,
  // })
  createRedirect({
    fromPath: "/lecture",
    toPath: "https://www.canva.com/design/DAGl0TyH9Ms/RZWwIG8ThBjX25nK-PohcA/view?utm_content=DAGl0TyH9Ms&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6afd9725e6",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
 createRedirect({
   fromPath: "/crew",
   toPath: "https://forms.gle/bHDsf4osiec4uNZ98",
   isPermanent: true,
   redirectInBrowser: true,
   force: true,
 })
  createRedirect({
    fromPath: "/cast",
    toPath: "https://forms.gle/vgZ2csiwE7USrhsC9",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
  createRedirect({
    fromPath: "/links",
    toPath: "https://linktr.ee/engrevue",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
  // ^^ update these links once you've set up the tickets!
}

