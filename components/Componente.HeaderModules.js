import Head from 'next/head'
import Link from 'next/link'
import {TabShow} from '../components/Componente.RankModules'
import {Individual, SecundList, IndividualClan, SecundListClan} from '../components/Componente.HeaderReact'

function MyHeader(){
    return <Head><meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
	<meta httpEquiv="pragma" content="no-cache"/>
	<meta httpEquiv="cache-control" content="no-cache"/>
	<meta name="description" content="Point Blank TAM Online Bilgisayar Oyunu - Ücretsiz; Türkçe, İngilizce ve Arapça içeriğe sahip olan ve bu dillerde destek sağlayan ülkenin en kaliteli MMOFPS oyunudur. En gerçekçi vuruş hissini, onlarca silah ve harita seçeneklerinde, çekişmeli eSpor turnuvalarıyla milyonlarca oyuncu ile yaşamak istiyorsanız, doğru tercih Point Blank TAM!" />
	<meta name="keywords" content="Point Blank, TAM, Türkiye, Online, FPS, oyun, bedava, ücretsiz, indir, kayıt, oyna, espor, turnuva, türkçe, ingilizce, arapça, azeri, azerbaycan, savaş, silah, bıçak, bomba, hemen, f2p, tg, yükle, premium, kafe" />
	<meta property="og:title" content="Point Blank" />
	<meta property="og:description" content="Point Blank" />
	<title>Point Blank</title>
	<link href='//fonts.googleapis.com/css?family=Anton|Open+Sans:400,700,400italic,700italic' rel='stylesheet' type='text/css'/>
  <script src="/Base/js/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
  <script type="text/javascript" src="/Base/js/index1.js"> </script>
  <script type="text/javascript" src="/Base/js/index2.js"> </script>
  <script type="text/javascript" src="/Base/js/index3.js"> </script>
  <script type="text/javascript" src="/Base/js/index4.js"> </script>
  </Head>
} 

function MyFooter(){
    return <div className="footer_area">
	<div className="footer">
		<div className="up">
			<p className="logo">
				<a href="http://corp.nfinitygames.com/" target="_blank"><img src="/Front/Commom/footer_logo_nfinity.jpg" className="nfinity"/></a>
				<img src="/Front/Commom/footer_logo_zepetto.jpg" className="zepetto"/>
			</p>
			<ul className="menu">
				<li className="haberler"><a href="/news/notice/list.do"><img src="/Front/Commom/footer_menu_haberler.jpg"/></a></li>
				<li className="kilavuzu"><a href="/guide/intro.do"><img src="/Front/Commom/footer_menu_kilavuzu.jpg"/></a></li>
				<li className="indir"><a href="/download"><img src="/Front/Commom/footer_menu_indir.jpg"/></a></li>
				<li className="siralama"><a href="/ranking/individual/list.do"><img src="/Front/Commom/footer_menu_siralama.jpg"/></a></li>
				<li className="destek"><a href="/login"><img src="/Front/Commom/footer_menu_destek.jpg" /></a></li>
			</ul>
		</div>
		<div className="dn">
			<ul className="sns">
				<li className="facebook"><a href="https://www.facebook.com/pointblanktr" target="_blank"><img src="/Front/Commom/footer_sns_facebook.jpg"/></a></li>
									<li className="discord"><a href="https://discord.gg/pointblanktam" target="_blank"><img src="/Front/Commom/footer_sns_discord.jpg"/></a></li>
				<li className="twitter"><a href="https://twitter.com/pointblanktr" target="_blank"><img src="/Front/Commom/footer_sns_twitter.jpg"/></a></li>
				<li className="youtube"><a href="https://www.youtube.com/user/PointBlankTurkiye" target="_blank"><img src="/Front/Commom/footer_sns_youtube.jpg"/></a></li>
				<li className="instagram"><a href="https://www.instagram.com/tampointblank/" target="_blank"><img src="/Front/Commom/footer_sns_instagram.jpg"/></a></li>
			</ul>
			<div className="copyright">
				<ul className="util">
					<li><a href="/policy/privacy.do">Gizlilik Politikası</a><span>ㅣ</span></li>
					<li><a href="/policy/customer.do">Tüketici Bilgilendirme Notu</a><span>ㅣ</span></li>
					<li><a href="/policy/manner.do">Davranış Kurallar</a></li>
				</ul>
				Bu sitede yer alan bütün yazılı ve görsel içeriğin her türlü kullanım hakkı Nfinity Games Bilişim A.Ş.'ye  aittir.<br />Nfinity Games Bilişim A.Ş., site içeriğinde önceden haber vermeksizin değişiklik yapma hakkını saklı tutar.<br /><p>© Nfinity Games Bilişim A.Ş. - 2015</p>                </div>
		</div>
	</div>        
</div>
} 

function InfoLeft(){
    return <div className="LNB">
	<div className="section_common">
	   <div className="gamestart ">
		  <div className="bg"></div>
		  <div className="btn_default"></div>
		  <a href="/download/games/download.do" className="btn_gamestart">ÜCRETSİZ İNDİR</a>
	   </div>
	</div>
	<div className="login">
	   <p className="register"><a href="/registrar" className="btn" target="_blank"> REGISTER</a></p>
	   <p className="sso"><a href="#!" className="btn">LOGIN</a></p>
	</div>
	<ul className="cs">
      <li className="m_r2 m_b2"><a href="/guide/intro.do"><img src="/Front/Commom/lnb_cs_first.jpg"/></a></li>
      <li className="m_b2"><a href="#!"><img src="/Front/Commom/lnb_cs_how.jpg"/></a></li>
      <li className="m_r2"><a href="#!"><img src="/Front/Commom/lnb_cs_coupon.jpg"/></a></li>
      <li><a href="https://www.tamgame.com/support/faq/list.do?service=3"><img src="/Front/Commom/lnb_cs_faq.jpg"/></a></li>
   </ul>
   <div className="ranking">
      <p className="main_tit"><a href="/ranking/individual/list.do">RANKING</a><span className="more"><a href="/ranking/individual/list.do"><img src="/Front/Bottons/btn_tit_more_rotate.png"/></a></span></p>
      <div id="tab_Bire">
         <ul className="tab_tit">
            <li className="tit_first_on">Individual</li>
            <li className="tit_last"><a href="#!" data-tab="2" onClick={TabShow} className="btn">Clan</a></li>
         </ul>
         <div className="champion" id="FisrtChampion">
           <Individual/>
         </div>
         <div className="grade" id="RankList5">
		 <SecundList/>
         </div>
      </div>
      <div id="tab_klan" style={{display: "none"}}>
         <ul className="tab_tit">
            <li className="tit_first"><a href="#!" data-tab="1" onClick={TabShow} className="btn">Individual</a></li>
            <li className="tit_last_on">Clan</li>
         </ul>
          <IndividualClan/>
         <div className="grade">
		 <SecundListClan/>
         </div>
      </div>
   </div>
</div>
} 

function MyMenu(){
	return <div className="gnb_menu">
	<ul>
	   <li className="menu">
		  <p className="depth1_1st"><Link href="/news/notice/list.do"><a  className="depth1_on"><span>News</span></a></Link></p>
		  <ul className="depth2">
		  <li><Link href="/News/Patch"><a>Patchs</a></Link></li>
		   <li><Link href="/News/News"><a>News</a></Link></li>
		  </ul>
	   </li>
	   <li className="menu">
		  <p className="depth1_2nd"><a href="#!" className="depth1_on"><span>Guide</span></a></p>
		  <ul className="depth2">
		  <li><Link href="/start/intro"><a>Guide</a></Link></li>
			 <li><Link href="/Guide/Install"><a>Install</a></Link></li>
			 <li><Link href="/Guide/Character"><a>Create Account</a></Link></li>
		  </ul>
	   </li>
	   <li className="menu">
		  <p className="depth1_3rd"><Link href="/download"><a className="depth1_on"><span>Download</span></a></Link></p>
		  <ul className="depth2">
		  </ul>
	   </li>
	   <li className="menu">
		  <p className="depth1_4th"><a href="#!" className="depth1_on"><span>Ranking</span></a></p>
		  <ul className="depth2">
			 <li><Link href="/ranking/individual"><a>Individual</a></Link></li>
			 <li><Link href="/ranking/clan"><a>Clan</a></Link></li>
		  </ul>
	   </li>
	   <li className="menu">
		  <p className="depth1_6th"><a href="https://www.facebook.com/eduhcm/" className="depth1_on" target="_blank"><span>Support</span></a></p>
		  <ul className="depth2">
		  </ul>
	   </li>
	</ul>
 </div>
}

export {MyHeader,MyFooter,InfoLeft,MyMenu}
