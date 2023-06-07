import {strings} from '../localization';
import validation from './validations';

const rules: any = {
  email: {
    required: {
      value: true,
      message: strings.errors.Required,
    },
    pattern: {
      value: validation.email(),
      message: strings.errors.email_invalid,
    },
  },
  password: {
    required: {
      value: true,
      message: strings.errors.Required,
    },
    pattern: {
      value: validation.password(),
      message: strings.errors.password_invalid,
    },
  },
  connfirmpassword: {
    required: {
      value: true,
      message: strings.errors.Required,
    },
    pattern: {
      value: validation.password(),
      message: strings.errors.password_invalid,
    },
  },
  name: {
    required: {
      value: true,
      message: 'Required!',
    },
  },
  birthDate: {
    required: {
      value: true,
      message: 'Required!',
    },
  },
  radio: {
    required: {
      value: true,
      message: 'Required!',
    },
  },
  phone: {
    required: {
      value: true,
      message: strings.errors.Required,
    },
  },
};

export default rules;
