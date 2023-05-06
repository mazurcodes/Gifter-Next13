const Footer = () => {
  return (
    <footer className="flex justify-between text-sm border-t border-gray-100 p-4 text-gray-400 sm:flex-col sm:items-center sm:gap-4">
      <p>© {new Date().getFullYear()} Gifter | All rights reserved.</p>
      <a target="_blank" href="https://bartekmazur.dev">
        bartekmazur.dev
      </a>
      <p>No cookies</p>
    </footer>
  );
};

export default Footer;
