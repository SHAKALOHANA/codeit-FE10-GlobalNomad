import * as styles from './DropdownMenu.css';

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  onSelect: (value: string) => void;
  isVisible: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, onSelect, isVisible }) => (
  <ul className={`${styles.dropdownMenu} ${isVisible ? styles.dropdownMenuVisible : ''}`}>
    {items.map((item) => (
      <li
        key={item.value}
        onClick={() => onSelect(item.value)}
        className={styles.dropdownItem}
      >
        {item.label}
      </li>
    ))}
  </ul>
);

export default DropdownMenu;