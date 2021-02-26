import jwt from 'jsonwebtoken';
import React, { Component } from 'react';
const jwtSecret = process.env.PRIVATE_JWT;
import FuncoesWebsite from './Componente.Funcoes'
import Link from 'next/link';

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
                         <p><Link href="/member/my"><a><img src="/Front/Commom/btn_lnb_mypage.png"/></a></Link>
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

  const sendItMy = (e) =>  {
  	var frm = $("#userForm");
		var regPwd = /[^a-zA-Z0-9~`!@#$%^&*()_\-+={}[\]|\\;:'""<>,.?/]/g;
		var regPwd2 = /([a-zA-Z0-9])\1{2,}/g;

		$('.notice_txt').hide();
		if ($('#password_change_cancel').css('display')=="none") {
			$("#password").val("");
			$("#repassword").val("");
		}
	if ($("#password").val().length > 0 || $("#repassword").val().length > 0) {
		if ($("#password").val().length < 6 || $("#password").val().length > 16) {
			drawMsg("password", "Password has to be between 6-16 characters long");
			$("#password").focus();
			return;
		} else if (regPwd.test($("#password").val())) {
			drawMsg("password", "Located only a number on your keyboard, you can use English characters and symbols.");
			$("#password").focus();
			return;
		} else if (regPwd2.test($("#password").val())) {
			drawMsg("password", "Please do not use repeating characters in your password.");
			$("#password").focus();
			return;
		} else if ($("#password").val() != $("#repassword").val()) {
			drawMsg("password", "Passwords does not match.");
			$("#repassword").val("");
			$("#repassword").focus();
			return;
		}

		async function NewPassWord(Pass,id){
			const formData = new URLSearchParams();
			formData.append('newpassword', Pass);
			formData.append('token', id);
			const res = await fetch('/api/post/newpassword', {
				method: 'POST',
				body: formData
			  })
			  const json = await res.json()
			  return json
		}

		async function RealizandoNewPassword(){
			const Auth = await NewPassWord($("#password").val(),localStorage.getItem('userID'))
			if(Auth.code === 201){
				alert('Erro interno')
				return
			}
			if(Auth.code === 203){
			  alert('Sorry, we had a problem, please try again later.')
			  return
			}
			if(Auth.code === 0){
			  try{      
				alert('Password Changed Success!')
				return
			  }catch (e){
				console.log(e)
				alert('error')
				return
			  }
			}
			return
			}
			RealizandoNewPassword()
	}

	var sq = $('input:radio[name=secretQuestion]:checked').val();
	if (sq != "" && sq != "undefined") {
		if (sq == "255" && $('#etc_txt').val() == "") {
			drawMsg("secretQuestion", "Please enter your Secret Qeustion.");
			$("#etc_txt").focus();
			return;
		}
		if ($('#answer_change_cancel').css('display')!="none") {
			if ($('#secretAnswer').val() == "") {
				drawMsg("secretAnswer", "Please enter your Secret Answer.");
				$("#secretAnswer").focus();
				return;
			}
			else if ($('#secretAnswer').val().length>200) {
				drawMsg("secretAnswer", "Your secret answer cannot be more than 200 characters .");
				$("#secretAnswer").focus();
				return;
			}

			async function Securityy(ss,id,value){
				const formData = new URLSearchParams();
				formData.append('security', ss);
				formData.append('token', id);
				formData.append('reply', value);
				const res = await fetch('/api/post/security', {
					method: 'POST',
					body: formData
				  })
				  const json = await res.json()
				  return json
			}
			async function NewSecurity(){
				const Auth = await Securityy(sq,localStorage.getItem('userID'),$('#secretAnswer').val())
				if(Auth.code === 201){
					alert('Erro interno')
					return
				}
				if(Auth.code === 203){
				  alert('Sorry, we had a problem, please try again later.')
				  return
				}
				if(Auth.code === 0){
				  try{      
					alert('Password Changed Success!')
					return
				  }catch (e){
					console.log(e)
					alert('error')
					return
				  }
				}
				return
				}
				NewSecurity()
		}
		else {
			$("#secretAnswer").val('');
		}
	}
	else {
		if ($('#secretAnswer').val() != "") {
			drawMsg("secretAnswer", "title.single.select.secret.answer");
			$("#secretAnswer").val('');
			return;
		}
	}

	//if ($("#firstname").val()!="") {
	//	if ($('#firstname').val().length>30) {
	//		drawMsg("name", "Your name cannot be more than 30 characters .");
	//		$("#firstname").focus();
	//		return;
	//	}
	//}
	//if ($('#lastname').val()!="") {
	//	if ($('#lastname').val().length>30) {
	//		drawMsg("name", "Your surname cannot be more than 30 characters .");
	//		$("#lastname").focus();
	//		return;
	//	}
	//}
	//if ($("#year").val()!="" || $("#month").val()!="" || $("#day").val()!="") {
	//	if ($("#year").val()=="" || $("#month").val()=="" || $("#day").val()=="") {
	//		$("#year").val('');
	//		$("#month").val('');
	//		$("#day").val('');
	//		//drawMsg("birthday", "Your name cannot be more than 30 characters .");
	//		//$("#year").focus();
	//		//return;
	//	}
	//}

	//if ($('#countryCode').val() == "") {
	//	drawMsg("countryCode", "Please choose your country.");
	//	$("#countryCode").focus();
	//	return;
	//}
	///*if (parseInt($('#countryCode').val())<6) {
	//	if ($('#locationCode').val() == "") {
	//		drawMsg("locationCode", "Please select your city.");
	//		$("#locationCode").focus();
	//		return;
	//	}
	//}*/

  //    if ($("#phone").val() != "") {
  //                var regPhone = /^[0-9\-]+$/i;
	//	if (!regPhone.test($('#phone').val())) {
	//		drawMsg("phone", "Please enter a valid phone number.");
	//		$("#phone").focus();
	//		return;
	//	}
	//	else if ($('#phone').val().length>20) {
	//		drawMsg("phone", "Your phone number cannot be more than 20 characters .");
	//		$("#phone").focus();
	//		return;
	//	}
  //            }
	//if ($("#email").val()!="") {
	//    var regExp = /^[0-9a-zA-Z]([-_\.]*[0-9a-zA-Z]*)*@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  //        if ($('#email').val()=="projecflex@gmail.com") {
	//		drawMsg("email", "Please enter a valid secondary e-mail address.");
	//		$("#email").focus();
	//		return;
	//	}
	//	else if (!regExp.test($('#email').val())) {
	//		drawMsg("email", "Please enter a valid secondary e-mail address.");
	//		$("#email").focus();
	//		return;
	//	}
	//	else if ($('#email').val().length<6 || $('#email').val().length>60) {
	//		drawMsg("email", "E-Mail has to be between 6-60 characters long");
	//		$("#email").focus();
	//		return;
	//	}
	//}

	////submit block
	//  $("#btnSubmit").attr("disabled", "true");

	//frm.attr("method", "POST");
	//frm.attr("action", "process.do");
	//frm.attr("onsubmit", "return true");
	//  frm.submit();
}

if (!String.prototype.trim) {
  String.prototype.trim = function() {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}



export {CloseDiv, Logout, Loged, sendItMy}

