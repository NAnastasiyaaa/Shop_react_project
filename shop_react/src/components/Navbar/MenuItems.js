const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
    isActive: window.location.pathname === '/'
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
