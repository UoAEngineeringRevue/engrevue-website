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
    toPath: "https://www.canva.com/design/DAGv50CjtsY/_o5TOsLZNaIlMJLXqFml7Q/view?utm_content=DAGv50CjtsY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf4aa7a32c9",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
 createRedirect({
   fromPath: "/tickets",
   toPath: "https://www.iticket.co.nz/events/2025/sep/toy-story-parts-sold-separately",
   isPermanent: true,
   redirectInBrowser: true,
   force: true,
  })
  createRedirect({
    fromPath: "/cast",
    toPath: "https://forms.gle/4nQTUzx8PF8StGbP7",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
  createRedirect({
    fromPath: "/crew",
    toPath: "https://forms.gle/AErzF21MrGhwJCAB6",
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

