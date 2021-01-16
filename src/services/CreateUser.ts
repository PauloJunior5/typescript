interface techObject {
    title: string;
    experience: number;
}

interface createUserData {
    name?: string;
    email: string;
    senha: string | boolean;
    techs: Array<string | techObject>;
    // techs: string[]; //quando for tipo único
}

export default function createUser({ name = "", email, senha, techs }: createUserData) {
    const user = {
        name,
        email,
        senha,
        techs,
    };

    return user;
}
