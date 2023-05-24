export interface LoginResponse {
  status: string;
  message: string;
  user: User;
  token: string;
}

export interface User {
  id: string;
  name: string;
  lastName: string;
  image: string;
  email: string;
}

export interface RegisterProps {
  email: string;
  lastName: string;
  name: string;
  password: string;
}

export interface LoginProps {
  email: string;
  password: string;
}
