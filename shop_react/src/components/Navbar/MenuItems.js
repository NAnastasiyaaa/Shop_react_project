const MenuItems = [
  {
    title: "Home",
    url: "/home",
    cName: "nav-links",
    isActive: window.location.pathname === '/home'
  },
  {
    title: "Catalog",
    url: "/catalog",
    cName: "nav-links",
    isActive: window.location.pathname === '/catalog'
  },
  {
    title: "Cart",
    url: "#",
    cName: "nav-links",
    isActive: window.location.pathname === '#'
  },
];

export default MenuItems;
