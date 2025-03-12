
export interface HeaderItemProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

function Item({children, href, active}: HeaderItemProps) {
  return (
    <li className={`py-3 px-2 border-b-2 border-transparent transition duration-500 ease-in-out ${active ? "border-primary-600" : "hover:border-primary-600"} ${active ? "text-primary-700" : "hover:text-primary-700"}`}>
      <a
        href={href}
        className={`block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:p-0`}
        aria-current="page"
      >
        {children}
      </a>
    </li>
  );
}

export default Item;
