export interface Navbar {
  brandLogoUrl: string;
  brandLogoTitle: string;
  navigationOptions: NavigationOption[];
};

export interface NavigationOption {
  title: string;
  redirectTo: string;
};

export interface DogsApiResponse {
  status: string;
  message: string;
};
