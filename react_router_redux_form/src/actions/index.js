import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
const ROOT_URL = 'http://localhost:3000/';
export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}todos/`);
    return{
        type: FETCH_POSTS,
        payload: request
    }
}
export function createPosts(props){
    const request = axios.post(`${ROOT_URL}todos/`, props);
    return {
        type: CREATE_POST,
        payload: request
    }
}