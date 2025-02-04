interface Path {
  [key: string]: {
    path: string;
    label: string;
  };
}

export const headerPaths: Path = {
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
};

export const footerPaths: Path = {
  imprint: {
    path: "/impressum",
    label: "Impressum",
  },
  privacy: {
    path: "/datenschutz",
    label: "Datenschutz",
  },
};

export const paths: Path = { ...headerPaths, ...footerPaths };
