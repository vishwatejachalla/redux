import axios  from  'axios'

export default function getRemoteUsers(){
    var users = []
    return axios.get('https://jsonplaceholder.typicode.com/users')
                    .then(response =>{
                            console.log(response.data);
                            response.data.forEach(element => {
                                users.push(element)
                            });
                            console.log(users);
                            return users


                    }, error =>{
                        return error
                    })
    
}