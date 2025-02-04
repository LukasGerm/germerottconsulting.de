interface Path {
  [key: string]: {
    path: string;
    label: string;
  };
}

export const paths: Path = {
  home: {
    path: "/",
    label: "Startseite",
  },
  services: {
    path: "/leistungen",
    label: "Leistungen",
  },
  about: {
    path: "/ueber-mich",
    label: "Über Mich",
  },
  imprint: {
    path: "/impressum",
    label: "Impressum",
  },
  privacy: {
    path: "/datenschutz",
    label: "Datenschutz",
  },
};
