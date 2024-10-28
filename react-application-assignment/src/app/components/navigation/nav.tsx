"use client";

import { usePathname } from 'next/navigation';

import NavLink from 'next/link';

export default function Nav() {
  const pathname = usePathname();
  const resolveActiveClass = (href: string) => pathname === href ? 'active' : '';

  return (
    <nav>
      <ul className="flex gap-5">
        <li>
          <NavLink href="/" className={resolveActiveClass('/')}>
            Root
          </NavLink>
        </li>
        <li>
        <NavLink href="/projects" className={resolveActiveClass('/projects')}>
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
