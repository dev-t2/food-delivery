export interface IUser {
  email: string;
  nickname: string;
  accessToken: string;
}

export interface InitialState {
  email: string;
  nickname: string;
  accessToken: string;
  money: number;
}

export interface ISignUpRequest {
  email: string;
  nickname: string;
  password: string;
}

export interface ISignInRequest {
  email: string;
  password: string;
}

export interface ISignInResponse {
  email: string;
  nickname: string;
  accessToken: string;
  refreshToken: string;
}
