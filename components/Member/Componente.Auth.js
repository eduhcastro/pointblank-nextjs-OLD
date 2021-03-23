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
    if(Auth.Resultado[0].code === 201){
        alert('Incorrect username or password')
        return
    }
    if(Auth.Resultado[0].code === 203){
      alert('Sorry, we had a problem, please try again later.')
      return
    }
    if(Auth.Resultado[0].code === 204){
      alert('Sorry, we had a problem, please try again later.')
      return
    }
    if(Auth.Resultado[0].code === 0){
      try{      
        const token = jwt.sign({ "userID": Auth.UserDetail[0].Usuario, "userRank": Auth.UserDetail[0].Rank, "userEXP": Auth.UserDetail[0].Exp, "userNick" : Auth.UserDetail[0].Nick}, jwtSecret, { expiresIn: 3600 })
        const userIDENC = cryptr.encrypt(Auth.UserDetail[0].Usuario);

        window.location.href = "/";
        localStorage.setItem("Autorizacao", token)
        localStorage.setItem("userNick", Auth.UserDetail[0].Nick)
        localStorage.setItem("userID", userIDENC)
        localStorage.setItem("userRank", Auth.UserDetail[0].Rank)
        localStorage.setItem("userEXP", Auth.UserDetail[0].Exp)
        alert('Welcome ' + Auth.UserDetail[0].Usuario)
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