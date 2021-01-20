import Link from 'next/link'
import {MyHeader,MyFooter,InfoLeft,MyMenu} from '../../components/Componente.HeaderModules'
export default function Patch() {
  return (
    <>

  <MyHeader/>
    <div id="layer_reg">
    </div>
    <div id="wrap">
      <div className="GNB">
        <div className="gnb_cont">
      <p className="logo"><Link href="/"><a><img src="/Front/imgs/logo_gnb_pb.webp"/></a></Link></p>
      <script type="text/javascript" src="/Base/js/select_design.js"></script>
      <MyMenu/>
   </div>
   <p className="gnb_bg"></p>
</div>
        <div className="substance">
            <InfoLeft/>
        <div className="contents">
        <div className="sub_title">PATCH NOTE</div>
        <div className="sub_contents">
      <ul className="bbs_list_news">
         <li className="thumb">
            <dl>
               <dd className="thumb_img"><img src="/Front/News/1.jpg" alt="Patch Notes, 12.01.2021"/></dd>
               <dd>
                  <p className="tit"><a href="view.do?page=1&amp;idx=384">Patch Notes, 12.01.2021</a></p>
                  <p className="date">12 January, 2021</p>
                  <p className="txt"><a href="view.do?page=1&amp;idx=384">Dear Point Blank Players,Our maintenance took place on 12.01.2021, which started at 04:30 and was completed at 08:43, thank you for your patience and understanding during the maintenance period.The maintenance covere..</a></p>
               </dd>
            </dl>
         </li>
         </ul>
      <ul className="bbs_paging">
         <li className="first"><a href="/Noticia?id=1"><span>First</span></a></li>
         <li className="prev"><a href="/Noticia?id=1"><span>Preview</span></a></li>
         <li className="here"><a href="/Noticia?id=1">1</a></li>
         <li><a href="/Noticia?id=1">2</a></li>
         <li><a href="/Noticia?id=1">3</a></li>
         <li><a href="/Noticia?id=1">4</a></li>
         <li><a href="/Noticia?id=1">5</a></li>
         <li className="next"><a href="/Noticia?id=1"><span>Next</span></a></li>
         <li className="last"><a href="/Noticia?id=1"><span>Last</span></a></li>
      </ul>
   </div>
</div>
      <MyFooter/>
  </div>
</div>
</>
  )
}
