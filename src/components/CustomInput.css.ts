import { style, styleVariants } from '@vanilla-extract/css';
import { media } from '@/styles/media';
import { theme } from '@/app/global.css';

export const baseInput = style({
  color: theme.colors.nomadBlack,
  backgroundColor: theme.colors.white,
  margin: '20px',
  borderRadius: '4px',
  outline: '1px solid theme.colors.gray2',
  padding: '16px 20px',
  ':focus': {
    outline: '1px solid theme.colors.nomadBlack',
  },
  '::placeholder': {
    color: theme.colors.gray3,
  },
});

export const inputVariants = styleVariants({
  email: {
    width: '640px',
    height: '58px',
    borderRadius: '6px',
    '@media': {
      [media.mobile]: {
        width: '350px',
        height: '56px',
      },
    },
  },
  nickname: {
    width: '640px',
    height: '58px',
    borderRadius: '6px',
    '@media': {
      [media.mobile]: {
        width: '350px',
        height: '56px',
      },
    },
  },
  password: {
    width: '640px',
    height: '58px',
    borderRadius: '6px',
    '@media': {
      [media.mobile]: {
        width: '350px',
        height: '56px',
      },
    },
  },
  passwordConfirm: {
    width: '640px',
    height: '58px',
    borderRadius: '6px',
    '@media': {
      [media.mobile]: {
        width: '350px',
        height: '56px',
      },
    },
  },
  search: {},

  image: {},
  profile: {},

  review: {
    width: '432px',
    height: '240px',
    resize: 'none',
    '@media': {
      [media.mobile]: {
        width: '343px',
        height: '346px',
      },
    },
  },

  title: {
    width: '792px',
    height: '56px',
    '@media': {
      [media.tablet]: {
        width: '429px',
      },
      [media.mobile]: {
        width: '343px',
      },
    },
  },
  category: {},
  description: {},
  price: {
    width: '792px',
    height: '56px',
    '@media': {
      [media.tablet]: {
        width: '429px',
      },
      [media.mobile]: {
        width: '343px',
      },
    },
  },
  address: {
    width: '792px',
    height: '56px',
    '@media': {
      [media.tablet]: {
        width: '429px',
      },
      [media.mobile]: {
        width: '343px',
      },
    },
  },
  date: {
    width: '379px',
    height: '56px',
    '@media': {
      [media.tablet]: {
        width: '149px',
      },
      [media.mobile]: {
        width: '343px',
        height: '44px',
      },
    },
  },

  startTime: {
    width: '140px',
    height: '56px',
    '@media': {
      [media.tablet]: {
        width: '104px',
      },
      [media.mobile]: {
        width: '79px',
        height: '44px',
      },
    },
  },

  endTime: {
    width: '140px',
    height: '56px',
    '@media': {
      [media.tablet]: {
        width: '104px',
      },
      [media.mobile]: {
        width: '79px',
        height: '44px',
      },
    },
  },

  myNickname: {
    width: '797px',
    height: '56px',
    '@media': {
      [media.tablet]: {
        width: '429px',
      },
      [media.mobile]: {
        width: '343px',
      },
    },
  },
  myEmail: {
    width: '797px',
    height: '56px',
    '@media': {
      [media.tablet]: {
        width: '429px',
      },
      [media.mobile]: {
        width: '343px',
      },
    },
  },
  myPassword: {
    width: '797px',
    height: '56px',
    '@media': {
      [media.tablet]: {
        width: '429px',
      },
      [media.mobile]: {
        width: '343px',
      },
    },
  },
  myPasswordConfirm: {
    width: '797px',
    height: '56px',
    '@media': {
      [media.tablet]: {
        width: '429px',
      },
      [media.mobile]: {
        width: '343px',
      },
    },
  },
});

export const passwordInputWrapper = style({
  position: 'relative',
  display: 'inline-block',
  width: '100%',
});

export const toggleIcon = style({
  position: 'absolute',
  top: '50%',
  right: '12px',
  transform: 'translateY(-50%)',
  width: '24px',
  height: '24px',
  cursor: 'pointer',
  userSelect: 'none',
});

export const errorOutline = style({
  outline: '1px solid theme.colors.red4',
});

export const errorMessage = style({
  color: theme.colors.red4,
  fontSize: theme.text['xs-regular'].fontSize,
  fontWeight: theme.text['xs-regular'].fontWeight,
  lineHeight: theme.text['xs-regular'].lineHeight,
  marginTop: '8px',
});

export const fileInputHidden = style({
  display: 'none',
});

export const uploadLabelVariants = styleVariants({
  image: {
    display: 'inline-block',
    width: '180px',
    height: '180px',
    backgroundImage: 'url("/icons/image_upload.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    cursor: 'pointer',

    '@media': {
      [media.tablet]: {
        width: '206px',
        height: '206px',
      },
      [media.mobile]: {
        width: '167px',
        height: '167px',
      },
    },
  },

  profile: {
    display: 'inline-block',
    width: '44px',
    height: '44px',
    backgroundImage: 'url("/icons/profile_edit.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    cursor: 'pointer',
  },
});
