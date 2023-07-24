import { Container } from '../Container/Container';
export const Header = () => {
  const navigation = [
    {
      name: 'About',
      href: '/about',
      current: false,
    },
    {
      name: 'Services',
      href: '/about',
      current: false,
    },
    {
      name: 'Projects',
      href: '/about',
      current: false,
    },
    {
      name: 'Clients',
      href: '/about',
      current: false,
    },
    {
      name: 'Contact',
      href: '/about',
      current: false,
    },
  ];
  return (
    <div className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start">
      <div>
        <a href="https://oranitz.wixsite.com/james-consulting">
          <span>JAMES</span>
          <span>CONSULTING</span>
        </a>
        {navigation.map((item) => item.name)}
      </div>
    </div>
  );
};
