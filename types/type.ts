export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

export type SideNavItemGroup = {
  title: string;
  menuList: SideNavItem[];
};

export type City = {
  zips: string[];
  city: string;
  state_id: string;
  state_name: string;
  county_fips: string;
  county_name: string;
  lat: number;
  lng: number;
  population: number;
  density: number;
  timezone: string;
  ranking: number;
  id: string;
};
export type Attorney = {
  name: string;
  email: string;
  address?: string;
  phone?: string;
  website?: string;
  image?: string;
};

export type Article = {
  title: string;
  author: string;
  body: string;
};
export type Review = {
  rating: number;
  review: string;
  name: string;
  cityId: string;
};

export type FAQ = {
  question: string;
  answer: string;
  cityId: string; // Assuming cityId is a string in the frontend
};
