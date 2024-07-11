export interface AuthInterface {
  username?: string;
  email?: string | null;
  readonly password?: string;
  confirmpassword?: string;
  token?: string | null;
  userdp?: string | undefined,
}

export interface RegexInterface {
  fieldname: string;
  regex: RegExp;
  value: string;
  errormessage: string;
}

export interface RegexError {
  email: string;
  password?: string;
}


export interface AuthState {
  user: AuthInterface | null;
  isAuthenticated: boolean;
  navigatetoverify: boolean;
  loading: boolean;
  globalLoading: boolean;
  error: string | null;
}

export interface UpdatePasswordInt {
  password: string;
  confirmpassword: string;
  token?: string | null;
}

export interface ForgotPasswordInt{
  email: string;
}

