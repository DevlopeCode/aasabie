const validation: any = {
  email: () => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
  password: () => /^[a-zA-Z0-9]{8,16}$/,
  phone: () => /^[0-9]+$/,
};

export default validation;
