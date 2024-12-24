export type CustomInputMode =
  | 'email'
  | 'nickname'
  | 'password'
  | 'passwordConfirm'
  | 'search'
  | 'image'
  | 'profile'
  | 'review'
  | 'title'
  | 'category'
  | 'description'
  | 'price'
  | 'address'
  | 'date'
  | 'startTime'
  | 'endTime'
  | 'myNickname'
  | 'myEmail'
  | 'myPassword'
  | 'myPasswordConfirm';

export const placeholderMap: Record<CustomInputMode, string> = {
  email: '이메일을 입력해주세요',
  nickname: '닉네임을 입력해주세요',
  password: '8자 이상 입력해주세요',
  passwordConfirm: '비밀번호를 한번 더 입력해주세요',
  search: '내가 원하는 체험은',
  image: '',
  profile: '',
  review: '후기를 작성해주세요',
  title: '제목',
  category: '카테고리',
  description: '설명',
  price: '가격',
  address: '주소를 입력해주세요',
  date: 'YY/MM/DD',
  startTime: '0:00',
  endTime: '0:00',
  myNickname: '닉네임',
  myEmail: '이메일',
  myPassword: '8자 이상 입력해주세요',
  myPasswordConfirm: '비밀번호를 한번 더 입력해주세요',
};

export const typeMap: Record<CustomInputMode, string> = {
  email: 'email',
  nickname: 'text',
  password: 'password',
  passwordConfirm: 'password',
  search: 'search',
  image: 'file',
  profile: 'file',
  review: 'textarea',
  title: 'text',
  category: 'text',
  description: 'text',
  price: 'number',
  address: 'text',
  date: 'date',
  startTime: 'time',
  endTime: 'time',
  myNickname: 'text',
  myEmail: 'email',
  myPassword: 'password',
  myPasswordConfirm: 'password',
};

export const stepMap: Record<CustomInputMode, string | undefined> = {
  email: undefined,
  nickname: undefined,
  password: undefined,
  passwordConfirm: undefined,
  search: undefined,
  image: undefined,
  profile: undefined,
  review: undefined,
  title: undefined,
  category: undefined,
  description: undefined,
  price: undefined,
  address: undefined,
  date: undefined,
  startTime: '60',
  endTime: '60',
  myNickname: undefined,
  myEmail: undefined,
  myPassword: undefined,
  myPasswordConfirm: undefined,
};
