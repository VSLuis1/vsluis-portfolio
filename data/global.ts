type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}


export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },

  {
    title: "Projects",
    path: "/projects",
  },
];


export const footer = {
  columns: [
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/VSLuis1",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/luis-meshram-992270227/",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
       
        {
          name: "Email",
          link: "mailto:meshramluis@gmail.com",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],
};
