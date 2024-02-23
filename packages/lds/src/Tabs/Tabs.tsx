'use client';

import { colors } from '@linker/styles';
import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { tabs, tabList, tabItem, link, activeLink, bottomLine, activeTabItem } from './Tabs.css';
import { Txt } from '../Txt';

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
      <ul className={tabList}>
        {tabInfos.map((tabInfo) => (
          <li
            className={clsx(tabItem, pathname === tabInfo.href && activeTabItem)}
            key={tabInfo.href}
          >
            <Link
              href={tabInfo.href}
              className={clsx(link, pathname === tabInfo.href && activeLink)}
            >
              <Txt typography="p1" color={colors.gray000} fontWeight="bold">
                {tabInfo.text}
              </Txt>
            </Link>
          </li>
        ))}
      </ul>
      <div className={bottomLine} />
    </nav>
  );
}

export default Tabs;
