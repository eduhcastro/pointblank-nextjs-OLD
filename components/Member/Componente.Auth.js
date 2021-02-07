import jwt from 'jsonwebtoken';
const Cryptr = require('cryptr');

const jwtSecret = process.env.PRIVATE_JWT;
const cryptr = new Cryptr(process.env.PRIVATE_PTS);



const AuthNow = (e) =>{
    const UserID = document.getElementById("userauth").value
    const Pass = document.getElementById("passwordauth").value
    if(UserID === undefined || UserID === null || Pass === undefined || Pass === null || UserID.length < 5 || Pass.length < 5){
        return alert('Enter a valid userid and pass of at least 5 characters!')
    }
    async function Login(){
        const formData = new URLSearchParams();
        formData.append('usuario', UserID);
        formData.append('senha', Pass);
        formData.append('chave', process.env.PRIVATE_PTS);
        const res = await fetch('/api/post/login', {
            method: 'POST',
            body: formData
          })
          const json = await res.json()
          return json
    }
    async function Teste(){
    const Auth = await Login()
    if(Auth.code === 201){
        alert('Incorrect username or password')
        return
    }
    if(Auth.code === 203){
      alert('Sorry, we had a problem, please try again later.')
      return
    }
    if(Auth.code === 0){
      try{      
        const token = jwt.sign({ "userID": Auth.Usuario, "userRank": Auth.Rank, "userEXP": Auth.Exp, "userNick" : Auth.Nick}, jwtSecret, { expiresIn: 3600 })
        const userIDENC = cryptr.encrypt(Auth.Usuario);

        window.location.href = "/";
        localStorage.setItem("Autorizacao", token)
        localStorage.setItem("userNick", Auth.Nick)
        localStorage.setItem("userID", userIDENC)
        localStorage.setItem("userRank", Auth.Rank)
        localStorage.setItem("userEXP", Auth.Exp)
        alert('Welcome ' + Auth.Usuario)
        return
      }catch (e){
        console.log(e)
        alert('error')
        return
      }
    }
    return
    }
    Teste()
}

export default AuthNow