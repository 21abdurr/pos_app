import bcrypt from "bcrypt";
const salRounds = 10;

export const encript = (password) => {
    return bcrypt.hashSync(password, salRounds)
}