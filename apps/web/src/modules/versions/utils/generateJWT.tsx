import jwt from 'jsonwebtoken';

const generateJWTToken = () => {
    // TODO: hide!!!!!
    const keyId = 'MX3ABRJWJ7';
    const issuerId = 'YOUR_ISSUER_ID';
    const privateKey = process.env.NEXT_PUBLIC_APPLE_API_PRIVATE_KEY;
    // @ts-expect-error
    const jwtToken = jwt.sign({}, privateKey, {
        algorithm: 'ES256',
        expiresIn: '1h',
        audience: 'appstoreconnect-v1',
        issuer: issuerId,
        header: {
            alg: 'ES256',
            kid: keyId,
        },
    });

    return jwtToken;
};

export default generateJWTToken;
