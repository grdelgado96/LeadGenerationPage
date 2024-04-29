import Navigation from "./navigation";

/**
 * DesktopMenu component for rendering navigation links in desktop view.
 * @module components/DesktopMenu
 * @returns {JSX.Element} JSX element representing the desktop navigation menu.
 */
export default function DesktopMenu() {
  return (
    <Navigation
      containerclasses={"hidden lg:flex lg:gap-x-12"}
      linkClasses={"text-lg font-semibold leading-6 text-gray-200"}
    ></Navigation>
  );
}
