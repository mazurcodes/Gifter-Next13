import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex justify-between text-sm border-t border-gray-100 p-4 text-gray-400 ">
      <div>© {new Date().getFullYear()} Gifter</div>
      <a target="_blank" href="https://bartekmazur.dev">
        bartekmazur.dev
      </a>
    </footer>
  );
};

export default Footer;
