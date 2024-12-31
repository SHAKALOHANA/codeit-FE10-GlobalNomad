import Image from "next/image";
import * as styles from './DropdownBox.css';
import pic from '../../../public/icons/arrow_down.svg'


interface DropdownBoxProps {
  onClick: () => void;
  label: string;
}

const DropdownBox: React.FC<DropdownBoxProps> = ({ onClick, label }) => (
  <button onClick={onClick} className={styles.dropdownButton}>
    {label} <Image src={pic} alt=" " width={13} height={8} />
  </button>
);

export default DropdownBox;