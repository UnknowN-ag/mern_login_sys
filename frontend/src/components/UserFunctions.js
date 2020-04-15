import axios from 'axios'

export const register = (newUser) => {   //register function name and (parameter)
    return axios.post('/user', {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password
    }).then(res => {
        console.log('User Registered Successfully');
    })
}

export const login = user => {
    return axios.get('/user', {
        email: user.email,
        password: user.password
    }).then(result => {
        localStorage.setItem('token', res.token);
        return res;
    }).catch(err => {
        console.log(err)
    })
}