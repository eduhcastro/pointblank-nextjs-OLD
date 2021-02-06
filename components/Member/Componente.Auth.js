import jwt from 'jsonwebtoken';
const jwtSecret = "cAsTroMs20216for2F0reVer";
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

const AuthNow = (e) =>{
    const UserID = document.getElementById("userauth").value
    const Pass = document.getElementById("passwordauth").value
    if(UserID === undefined || UserID === null || Pass === undefined || Pass === undefined || UserID.length < 5 || Pass.length < 5){
        return alert('Enter a valid userid and pass of at least 5 characters!')
    }
    async function Login(){
        const formData = new URLSearchParams();
        formData.append('usuario', UserID);
        formData.append('senha', Pass);
        formData.append('chave', '12312312312');
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
    if(Auth.code === 0){
      try{      
        const token = jwt.sign({ "userID": Auth.Usuario, "userRank": Auth.Rank, "userEXP": Auth.Exp, "userNick" : Auth.Nick}, jwtSecret, { expiresIn: 3600 })
        cookies.set("TOKENAUTH", token, {
          path: "/",
          maxAge: 30 * 24 * 60 * 60,
        });
        window.location.href = "/";
        localStorage.setItem("Autorizacao", token)
        localStorage.setItem("userNick", Auth.Nick)
        localStorage.setItem("userID", Auth.Usuario)
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