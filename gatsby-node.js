exports.createPages = ({ actions }) => {
  const { createRedirect } = actions
    createRedirect({
    fromPath: "/tickets",
    toPath: "http://www.iticket.co.nz/events/2024/aug/phineas-and-ferb",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
      createRedirect({
    fromPath: "/lecture",
    toPath: "https://www.canva.com/design/DAGM4R5kKPQ/e-Py2AdNzHGmpZ6H_E6bfg/edit?utm_content=DAGM4R5kKPQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  })
 // createRedirect({
 //   fromPath: "/crew",
 //   toPath: "https://forms.gle/HUXL5Xg3xZCihPJi9",
 //   isPermanent: true,
 //   redirectInBrowser: true,
 //   force: true,
 // })
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

