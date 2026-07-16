// src/components/common/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full py-stack-lg border-t border-surface-container-highest dark:border-outline-variant bg-surface dark:bg-background">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop w-full max-w-container-max mx-auto gap-stack-md">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-headline-md text-headline-md font-bold text-primary">SNEAKER's</span>
          <span className="font-caption text-caption uppercase tracking-widest text-on-surface-variant dark:text-outline opacity-60">© {new Date().getFullYear()} SNEAKER's. 
            ALL RIGHTS RESERVED.
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-stack-md">
          <a className="font-caption text-caption uppercase tracking-widest text-on-surface-variant dark:text-outline hover:text-primary transition-colors" href="#">Sustainability</a>
          <a className="font-caption text-caption uppercase tracking-widest text-on-surface-variant dark:text-outline hover:text-primary transition-colors" href="#">Shipping</a>
          <a className="font-caption text-caption uppercase tracking-widest text-on-surface-variant dark:text-outline hover:text-primary transition-colors" href="#">Returns</a>
          <a className="font-caption text-caption uppercase tracking-widest text-on-surface-variant dark:text-outline hover:text-primary transition-colors" href="#">Contact</a>
          <a className="font-caption text-caption uppercase tracking-widest text-on-surface-variant dark:text-outline hover:text-primary transition-colors" href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;