import type { MouseEvent } from 'react';
import styles from './SharedNavbar.module.css';

interface SharedNavbarProps {
  currentRoute: '/' | '/basics' | '/learn' | '/process' | '/physical' | '/cases' | '/resources';
  onNavigate: (href: string) => void;
}

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/basics', label: 'Basics' },
  { href: '/process', label: 'Process' },
  { href: '/physical', label: 'Physical' },
  { href: '/cases', label: 'Cases' },
  { href: '/resources', label: 'Resources' },
  { href: '/learn', label: 'Learning Portal' },
] as const;

export function SharedNavbar({ currentRoute, onNavigate }: SharedNavbarProps) {
  const handleNavigate =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      onNavigate(href);
    };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/" onClick={handleNavigate('/')}>
            MIT RE <span>CLINIC</span>
          </a>
        </div>

        <ul className={styles.links}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={handleNavigate(item.href)}
                className={currentRoute === item.href ? styles.active : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
