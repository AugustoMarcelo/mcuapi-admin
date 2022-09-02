import classNames from 'classnames';
import { IconProps } from 'phosphor-react';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface NavLinkComponentProps extends NavLinkProps {
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
}

export function NavLinkComponent({
  icon: Icon,
  title,
  ...rest
}: NavLinkComponentProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(
          'flex items-center py-4 px-9 border-l-[14px] border-transparent',
          {
            'bg-gray-750 border-red-500': isActive,
          }
        )
      }
      {...rest}
    >
      <Icon weight="fill" size={24} className="text-white mr-3" />
      <span className="text-lg text-white">{title}</span>
    </NavLink>
  );
}
