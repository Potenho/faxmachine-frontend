

export interface LoginInterface {
    username: string,
    password: string
}

export interface RegisterInterface extends LoginInterface {
    confirm_password: string
}