import Link from 'next/link'
import HeaderMember from '../../components/Member/Componente.Header'
export default function authmember(){
    return (
        <>
        <HeaderMember/>
        <style type="text/css" jsx global>{`
        body{ background: url('/Front/Member/10yil_pageskin_2.jpg');}
.gifts img {border-radius: 5px;}
.contents .row:first-child {display: none;}
.contents .row:last-child {margin-top: 40px;}
.download-here {display: none; position: fixed; left: 10px; bottom: -85px;}`
        }</style>
        <div className="container ">
   <div className="logo">
   <a href="/"><img src="/Front/Member/pointblank_logo_beyaz.png" alt="Point Blank" className="img-fluid"/></a> 
   </div>
   <div className="contents">
      <div className="row">
         <div className="col-12">
            <div className="event-detail">
            </div>
         </div>
      </div>
      <div className="row ">
         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="register-form">
               <h1>REGISTER FREE AND START PLAYING!</h1>
               <input type="hidden" name="_token" value="3DsaEha8JTYmkpvtmG4R8frxGnL4nnAZQHeHqEMi"/>                            
               <input type="hidden" name="querystring" id="querystring" />
              
               <p className="notice_txt" id="notice_txt_countryCode"></p>
               <div className="input-group">
                  <div className="input-group-append">
                     <span className="input-group-text">
                     <i className="fas fa-user"></i>
                     </span>
                  </div>
                  <input type="text" id="userid1" name="userid1" className="form-control"
                     title="Enter User ID"
                     placeholder="User ID"
                     />
               </div>
               <div className="input-group">
                  <div className="input-group-append">
                     <span className="input-group-text">
                     <i className="fas fa-envelope"></i>
                     </span>
                  </div>
                  <input type="email" id="userid" name="userid" className="form-control"
                     title="Enter Email Address"
                     placeholder="Email Address"
                     />
               </div>
               <p className="notice_txt" id="notice_txt_userid"></p>
               <div className="input-group">
                  <div className="input-group-append">
                     <span className="input-group-text">
                     <i className="fas fa-key"></i>
                     </span>
                  </div>
                  <input type="password" id="password" name="password" className="form-control"
                     title="Enter Password"
                     placeholder="Password"/>
                  <div className="input-group-append show-password">
                     <label className="input-group-text">
                     <i className="far fa-eye-slash"></i>
                     </label>
                  </div>
               </div>
               <p className="notice_txt" id="notice_txt_password"></p>
               <div className="check_agree">
                  <div className="form-check">
                     <input className="form-check-input" name="email_agree" type="checkbox" value="1" id="email_agree"/>
                     <label className="form-check-label" htmlFor="email_agree">
                     I want to receive e-mails about latest updates and campaigns.
                     </label>
                  </div>
                  <div className="form-check">
                     <input className="form-check-input" name="join_agree" type="checkbox" value="1" id="join_agree"/>
                     <label className="form-check-label" htmlFor="join_agree">I've read and accepted the <a href="//www.tamgame.com/policy/customer.do" target="_blank">User Agreement (EULA)</a> , <a href="//www.tamgame.com/policy/privacy.do" target="_blank">Privacy Policy</a> and <a href="//www.tamgame.com/policy/manner.do" target="_blank">Hack Policy</a></label>
                  </div>
               </div>
               <p className="notice_txt" id="notice_txt_capcha"></p>
               <button type="button" id="btnSubmit" className="submit-form">ENTER</button>
               <Link href="/member/auth"><a className="download-game"><i className="fas fa-user"></i> LOGIN</a></Link>
            </div>
         </div>
         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="gifts">
               <img src="/Front/Member/sp-1120-en.png"
                  alt="Point Blank Registration - TAM Game" className="img-fluid"/>
            </div>
         </div>
      </div>
   </div>
</div>             
        </>
    )
}