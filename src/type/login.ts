/**
 * 表单数据接口
 */
export interface ILoginData{
    email: string
    password: string
}

export class LoginData{
    ruleForm: ILoginData = {
        email: "",
        password: ""
    }
}