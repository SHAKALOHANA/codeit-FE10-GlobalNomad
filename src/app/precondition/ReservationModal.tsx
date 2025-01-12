import {
  modalContainer,
  header,
  menu,
  reservationContainer,
  buttonContainer,
} from './ReservationModal.css';
import Image from 'next/image';
import CustomButton from '../../components/CustomButton';

const ReservationModal = () => {
  return (
    <div className={modalContainer}>
      <div className={header}>
        <h1>예약 정보</h1>
        <Image
          src="../../../icons/modalxbutton.svg"
          alt="창닫기버튼"
          width={40}
          height={40}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className={menu}>
        <p>신청</p>
        <p>승인</p>
        <p>거절</p>
      </div>
      <h2>예약 날짜</h2>
      <h2>예약 내역</h2>
      <div className={reservationContainer}>
        <p>닉네임</p>
        <p>인원</p>
        <div className={buttonContainer}>
          <CustomButton mode="reservationFinalize">등록하기</CustomButton>
          <CustomButton mode="reservationReject">거절하기</CustomButton>
        </div>
      </div>
      <div className={reservationContainer}>
        <p>닉네임</p>
        <p>인원</p>
        <div className={buttonContainer}>
          <CustomButton mode="reservationFinalize">등록하기</CustomButton>
          <CustomButton mode="reservationReject">거절하기</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;

