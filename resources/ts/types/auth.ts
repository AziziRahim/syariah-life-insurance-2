export interface RegistrationRequest {
    fullName: string;
    motherName: string;
    phoneNumber?: string;
    emailAddress: string;
    password: string;
    confirmPassword: string;
    secretWord: string;
    dateOfBirth: string;
}

export interface RegistraitonResponse {
    message: string;
    data: {
        id: number;
        fullName: string;
        motherName: string;
        phoneNumber?: string;
        emailAddress: string;
        secretWord: string;
        dateOfBirth: string;
        createdAt: string;
        updatedAt: string;
    };
}