// ENUMS

enum ResType { SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN };

interface APIResponse<T> {
    status: number;
    type: ResType;
    data: T;
}

const response1: APIResponse<object> = {
    status: 200,
    type: ResType.UNAUTHENTICATED,
    data: {
        name: 'Test',
        something: 300
    }
}

console.log(response1);