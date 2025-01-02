import * as styles from './DropdownBox.css';

interface DropdownBoxProps {
  onClick: () => void;
  label: string;
}

const DropdownIn: React.FC<DropdownBoxProps> = ({ onClick, label }) => (
  <input
    type="button"
    value={label}
    onClick={onClick}
    className={styles.dropdownButton}
  />
);

const DropdownBox: React.FC<DropdownBoxProps> = ({ onClick, label }) => (
  <button onClick={onClick} className={styles.dropdownButton}>
    {label}
  </button>
);

export default DropdownBox;