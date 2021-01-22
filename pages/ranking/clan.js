import Link from 'next/link'
import {MyHeader,MyFooter,InfoLeft,MyMenu} from '../../components/Componente.HeaderModules'
import {PageGetClan} from '../../components/Componente.RankModules'
import {LoadClan} from '../../components/Componente.Load'
export default function Clan() {
  return (
    <>

  <MyHeader/>
    <div id="layer_reg"></div>
    <div id="wrap">
      <div className="GNB">
        <div className="gnb_cont">
      <p className="logo"><Link href="/"><a><img src="/Front/Commom/logo_gnb_pb.png"/></a></Link></p>
      <script type="text/javascript" src="/Base/js/select_design.js"></script>
      <MyMenu/>
   </div>
   <p className="gnb_bg"></p>
</div>
<div className="substance">
		<InfoLeft/>
        <div className="contents">
        <div className="sub_title">Clan Ranking</div>
        	<div className="sub_contents_pnone">
				
                    <div className="cont_p30">

                                            <table className="bbs_list_rank">
                                                <colgroup>
							<col style={{width:"114px"}}/>
							<col style={{width:"238px"}}/>
							<col style={{width:"218px"}}/>
							<col style={{width:"100px"}}/>
                            </colgroup>
                            <thead>
							<tr>
								<th>Ranking</th>
                                <th>Clan Name</th>
                                <th>title</th>
                                <th>XP</th>
                                <th>W/L</th>
                                <th className="last">Point</th>
							</tr>
                            </thead>
                            <tbody id="rankinglistclan">
                            <LoadClan/>
                            </tbody>
                        </table>
                        <ul className="bbs_paging">
										<li className="first"><a href="#!"><span>First</span></a></li>
					<li className="prev"><a href="#!"><span>Preview</span></a></li>
					<li className="string here" data-target="1"><a data-targeta="1" href="#!" onClick={PageGetClan}>1</a></li>
					<li className="string" data-target="2"><a data-targeta="2" href="#!" onClick={PageGetClan}>2</a></li>
          <li className="string" data-target="3"><a data-targeta="3" href="#!" onClick={PageGetClan}>3</a></li>
          <li className="string" data-target="4"><a data-targeta="4" href="#!" onClick={PageGetClan}>4</a></li>
          <li className="string" data-target="5"><a data-targeta="5" href="#!" onClick={PageGetClan}>5</a></li>
          <li className="string" data-target="6"><a data-targeta="6" href="#!" onClick={PageGetClan}>6</a></li>
          <li className="string" data-target="7"><a data-targeta="7" href="#!" onClick={PageGetClan}>7</a></li>
          <li className="string" data-target="8"><a data-targeta="8" href="#!" onClick={PageGetClan}>8</a></li>
          <li className="string" data-target="9"><a data-targeta="9" href="#!" onClick={PageGetClan}>9</a></li>
          <li className="string" data-target="10"><a data-targeta="10" href="#!" onClick={PageGetClan}>10</a></li>
					<li className="next"><a href="#!"><span>Next</span></a></li>
					<li className="last"><a id="lastpage" href="#!"><span>Last</span></a></li>
					</ul>
                        </div>
                       
                </div>    
      </div>
      <MyFooter/>
  </div>
</div>
</>
  )
}
