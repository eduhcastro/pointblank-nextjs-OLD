import jwt from 'jsonwebtoken';
import React, { Component } from 'react';
const jwtSecret = process.env.PRIVATE_JWT;
import FuncoesWebsite from './Componente.Funcoes'


const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.PRIVATE_PTS);


const CloseDiv = (e) =>  {
    $('.layer_popup').fadeOut();
}



const Logout = (e) =>{
    async function Llo(){
        const res = await fetch('/api/auth/logout', {
            method: 'GET'
          })
          const json = await res.json()
          return json
    }
    localStorage.clear();
    async function Teste(){
    const Auth = await Llo()
    if(Auth){
    window.location.href = "/";
    }
    }
    Teste()
}

async function Status(Obj){
  try{
    var Decodado = jwt.verify(Obj, jwtSecret);
    return 'DEU BOM'
  }catch (e){
    localStorage.clear();
    return e;
  }
}


class Loged extends Component {
    constructor() { 
        super()
        this.state = {
          dados: [],
          nickname: undefined,
          id: undefined,
          exp: undefined,
          rank: undefined
        };
      }
      
      componentDidMount() {
        const Token = localStorage.getItem('Autorizacao') || 'OFF';
        Status(Token)
        this.setState({
            nickname: localStorage.getItem('userNick') || null,
            id:   localStorage.getItem('userID') || null,
            exp:  localStorage.getItem('userEXP') || null,
            rank:  localStorage.getItem('userRank') || null,
        });
      }

    render() {
        var img = `/Front/Rank/icon/${this.state.rank}.png` || `/Front/Rank/icon/0.png`
       if(this.state.id != null || this.state.id != undefined) {
         return (<>
         <div className="logout">
                 <ul className="my_info">
                     <li className="grade">
                         <p><span>Nick</span> {this.state.nickname || cryptr.decrypt(this.state.id)} </p>
                         <p><span>Rank</span> {new FuncoesWebsite().NameRanking(parseInt(this.state.rank))} <img src={img}/></p>
                         <p><span>TG</span> 0</p>
                         <p><span>Bonus TG</span> 0</p>
                     </li>
                     <li className="btn">
                         <p><a href="https://www.tamgame.com/account/mypage/index.do"><img src="/Front/Commom/btn_lnb_mypage.png"/></a>
                         </p>
                         <p className="right"><a href="#!" onClick={Logout}><img src="/Front/Commom/btn_lnb_logout.png"/></a>
                         </p>
                     </li>
                 </ul>
             </div>
              </>
         )
      }else{
        return (<>
            <div className="login">
               <p className="register"><a href="/member/register" className="btn" target="_blank"> REGISTER</a></p>
               <p className="sso"><a href="/member/auth" className="btn">LOGIN</a></p>
            </div>
           </>)
      }
    }
  }

export {CloseDiv, Logout, Loged}

