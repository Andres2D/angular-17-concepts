import { Navbar } from "../interfaces/home.interface";

export const navbar: Navbar = {
  brandLogoUrl: '../../../../../assets/svg/effect.svg',
  brandLogoTitle: 'logo',
  navigationOptions: [
    {
      title: 'Office Furniture',
      redirectTo: '#'
    },
    {
      title: 'Design Services',
      redirectTo: '#'
    },
    {
      title: 'Free Installation',
      redirectTo: '#'
    }
  ]
};
