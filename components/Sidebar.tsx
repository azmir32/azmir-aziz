'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  User, 
  FolderKanban, 
  FileText, 
  Mail, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Menu, 
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import BloomButton from './BloomButton';

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavLink = ({ href, icon, label, isActive, onClick }: NavLinkProps) => (
  <Link 
    href={href}
    className={cn("nav-link", isActive && "active")}
    onClick={onClick}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "home", href: "/", icon: <Home size={18} />, label: "Home" },
    { id: "about", href: "/about", icon: <User size={18} />, label: "About" },
    { id: "projects", href: "/projects", icon: <FolderKanban size={18} />, label: "Projects" },
    { id: "articles", href: "/articles", icon: <FileText size={18} />, label: "Articles" },
    { id: "contact", href: "/contact", icon: <Mail size={18} />, label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://twitter.com", icon: <Twitter size={18} />, label: "Twitter" },
    { href: "https://linkedin.com", icon: <Linkedin size={18} />, label: "LinkedIn" },
    { href: "https://youtube.com", icon: <Youtube size={18} />, label: "YouTube" },
  ];

  return (
    <>
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-background rounded-md shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={cn(
        "bg-secondary/30 w-full md:w-64 md:min-h-screen md:fixed md:right-0 md:top-0 overflow-y-auto flex flex-col justify-between p-6",
        isMobileMenuOpen ? "fixed inset-0 z-40" : "hidden md:flex"
      )}>
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold">Azmir Aziz</h2>
            <p className="text-muted-foreground">Developer</p>
          </div>

          <nav className="space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                href={link.href}
                icon={link.icon}
                label={link.label}
                isActive={pathname === link.href}
                onClick={() => handleLinkClick()}
              />
            ))}
          </nav>
        </div>

        <div className="space-y-6 pt-6">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Socials
            </h3>
            <div className="flex flex-col space-y-2">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-200"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <div>
                <BloomButton />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogTitle>Resume - Azmir Aziz</DialogTitle>
              <div className="p-4">
                <div className="prose max-w-none">
                  <h3>Experience</h3>
                  <p>Software Engineer at HJC Company (2020-Present)</p>
                  <ul>
                    <li>Led development of customer-facing web applications</li>
                  </ul>

                  <h3>Skills</h3>
                  <p>JavaScript, TypeScript, React, Next.js, Node.js, GraphQL</p>

                  <h3>Education</h3>
                  <p>B.S. Computer Science, Self-study (2016-2020)</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </aside>
    </>
  );
}