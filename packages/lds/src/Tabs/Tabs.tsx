'use client';

import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { tabs, tapList, tapItem, link, activeLink, bottomLine, activeLine } from './Tabs.css';

export interface TabInfo {
  href: string;
  text: string;
}

interface TabsProps {
  tabInfos: TabInfo[];
}

function Tabs({ tabInfos }: TabsProps) {
  const pathname = usePathname();

  return (
    <nav className={tabs}>
      <ul className={tapList}>
        {tabInfos.map((tabInfo) => (
          <li className={tapItem} key={tabInfo.href}>
            <Link
              href={tabInfo.href}
              className={clsx(link, pathname === tabInfo.href && activeLink)}
            >
              <span>{tabInfo.text}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className={bottomLine}>
        <div className={activeLine} />
      </div>
    </nav>
  );
}

export default Tabs;
