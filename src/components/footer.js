/**
 * Footer component for displaying the website footer.
 * @module components/Footer
 * @returns {JSX.Element} JSX element representing the footer component.
 */
function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 px-4 text-center md:justify-between bg-black/20">
      <p className="mt-6 text-lg leading-8 text-gray-600">&copy; 2024 Auguri</p>

      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <p className="mt-6 text-lg leading-8 text-gray-600">Contact Us</p>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
