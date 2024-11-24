import apiClient from "./apiClient";

interface Author{
    id: number;
    name: string;
    birthDate: string;
}

export const getAuthors = async () => {
    const response = await apiClient.get('/authors')
    return response.data
}

export const createAuthor = async (name:string, birthDate:string) => await apiClient.post('/authors/create', {name, birthDate});
