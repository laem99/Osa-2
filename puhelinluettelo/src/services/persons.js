import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = async () => {
    const request = axios.get(baseUrl);
    const response = await request
    return response.data
}

const create = async newObject => {
    const request = axios.post(baseUrl, newObject);
    const response = await request
    return response.data
}

const update = async (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const deletePerson = async (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return await getAll();
}

const personService = { getAll, create, update, deletePerson }

export default personService;