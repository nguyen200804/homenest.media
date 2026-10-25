export type NavSubItem = {
  label: string;
  href: string;
};

export type NavChild = {
  label: string;
  href: string;
  children?: NavSubItem[];
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};
