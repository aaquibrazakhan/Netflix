export const formValidate = (email ,password) => {
    
    const emailcheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    if(!emailcheck) return 'Invalid Email'
    if(!passwordcheck) return 'Invalid Password'
    

  return null
    

}
