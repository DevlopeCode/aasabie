import axios from 'react-native-axios';

const BASE_URL = 'https://www.aasabie.com/api/v1/auth'
export const FIRST_NAME_KEY = "f_name";
export const LAST_NAME_KEY = "l_name";
export const EMAIL_KEY = "email";
export const PHONE_KEY = "phone";
export const PASSWORD_KEY = "password";

const apiClient = axios.create({
    baseURL: BASE_URL,
  });

export async function login(email, password) {
    let formData = new FormData();
    formData.append(EMAIL_KEY, email);
    formData.append(PASSWORD_KEY, password);

    return fetchAPI('/login', formData);
}

export async function register(fname,lname,email,phn,password){
    let formData = new FormData();
    formData.append(FIRST_NAME_KEY, fname);
    formData.append(LAST_NAME_KEY, lname);
    formData.append(EMAIL_KEY, email);
    formData.append(PHONE_KEY, phn);
    formData.append(PASSWORD_KEY, password);
        
    return fetchAPI('/register', formData);
}

async function fetchAPI(endpoint, formData) {
    try{
        const response = await apiClient.post(endpoint, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    }catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code outside of the 2xx range
          // Access the error message from the response object
          throw new Error(JSON.stringify(error.response.data.errors));
        } else if (error.request) {
          // The request was made but no response was received
          // You can handle the error based on your requirements
          throw new Error('No response from the server');
        } else {
          // Something else happened while setting up the request
          throw new Error('Request failed');
        }
      }
    
}