import {MyHeader,MyFooter,InfoLeft,MyMenu} from '../../../components/Componente.HeaderModules'
import Link from 'next/link'
export default function News(){
    return(
        <>
		 <MyHeader/>
    <div id="layer_reg">
    </div>
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
	<div className="sub_title">News</div>
	<div className="sub_contents">
		<ul className="bbs_view_tit">
			<li className="tit">Important Information</li>
			<li className="date">
			02 February, 2021			</li>
		</ul>
		<div className="bbs_view">
			<p style={{textAlign: "center"}}>
				<img alt="" src="https://www.tamgame.com/upload/images/bilgilendirme_rb_EN.jpg" style={{height:"348px", width:"730px"}}/>
				</p>
				<p></p>
				<p>
					<strong>Dear Point Blank Players!</strong>
				</p>
				<p></p>
				<p>
					<strong>With the first week of February, some game maps have been removed</strong>
				</p>
				<p></p>
				<p>
					<span style={{color:"#ff0000"}}>
						<strong>Maps removed in TDM Mode</strong>
					</span>
				</p>
				<p>Down Town</p>
				<p>Black Mamba</p>
				<p>Battle Ship</p>
				<p>Ampera</p>
				<p>Kick Point</p>
				<p>Ruined Village</p>
				<p>Cargo Port</p>
				<p>Grand Bazaar</p>
				<p>West Station</p>
				<p></p>
				<p></p>
				
					<p>
						<span style={{color:"#ff0000"}}>
							<strong>Maps removed in Bomb Mode</strong>
						</span>
					</p>
					<p>Cemetery</p>
					<p>New Midtown</p>
					<p>Roadside</p>
					<p>Gustav</p>
					<p></p>
					
						<p>
							<span style={{color:"#ff0000"}}>
								<strong>Maps removed from Chaos Mode</strong>
							</span>
						</p>
						<p>Hindrance</p>
						<p></p>
						
							<p>
								<span style={{color:"#ff0000"}}>
									<strong>Maps removed in Headhunter Mode</strong>
								</span>
							</p>
							<p>Safari</p>
							<p>Midnight Zone</p>
							<p>Kick Point</p>
							<p></p>
							
								<p>
									<span style={{color:"#ff0000"}}>
										<strong>Removed Game Modes</strong>
									</span>
								</p>
								<p>TDM Sniper 4vs4 Mode</p>
								<p>TDM Shotgun 4vs4 Mode</p>
								<p>Bomb Mode shotgun</p>
								<p>Annihilation Shotgun 4vs4</p>
								<p>Annihilation Sniper 4vs4</p>
								<p>Escape Dino</p>
								<p>Knuckle Annihilation</p>
								<p></p>
								
									<p>
										<span style={{color:"#ff0000"}}>
											<strong>Maps removed in Zombie MOD</strong>
										</span>
									</p>
									<p>Sewage</p>
									<p>M-Bridge</p>
									<p></p>
									
										<p>➤
											<strong>Fixes have been made in some game modes and maps</strong>
										</p>
										<p>➤
											<strong>The variety of maps in different game modes has been increased, you can find it below.</strong>
										</p>
										
											<p>
												<span style={{color:"#ff0000"}}>
<strong>TDM - Maps added to Sniper Match</strong>
												</span>
											</p>
											<p>Desert Camp</p>
											<p>Library</p>
											<p>Water Park</p>
											<p></p>
											
												<p>
<span style={{color:"#ff0000"}}>
	<strong>TDM - Maps added to Shotgun Match</strong>
</span>
												</p>
												<p>Eastern Road</p>
												<p>Two Towers</p>
												<p>Water Park</p>
												<p></p>
												
<p>
	<span style={{color:"#ff0000"}}>
		<strong>Bomb Match - Sniper added maps</strong>
	</span>
</p>
<p>Lux Ville</p>
<p>Sand Storm</p>
<p>Blow City</p>
<p></p>

	<p>
		<span style={{color:"#ff0000"}}>
			<strong>Annihilation - Sniper added maps</strong>
		</span>
	</p>
	<p>Library</p>
	<p>Desert Camp</p>
	<p>Up Town</p>
	<p>Eastern Road</p>
	<p>Two Towers</p>
	<p>Water Park</p>
	<p></p>
	
		<p>
			<span style={{color:"#ff0000"}}>
				<strong>Annihilation - Shotgun added maps</strong>
			</span>
		</p>
		<p>Up Town</p>
		<p>Eastern Road</p>
		<p>Two Towers</p>
		<p>Water Park</p>
		<p></p>
		
			<p>
				<span style={{color:"#ff0000"}}>
					<strong>Maps added to Chaos Mode</strong>
				</span>
			</p>
			<p>Burning Hall</p>
			<p>Desert Camp</p>
			<p>Port Akaba</p>
			<p>M-Station</p>
			<p></p>
			
				<p>
					<span style={{color:"#ff0000"}}>
						<strong>Maps added to Headhunter Mode</strong>
					</span>
				</p>
				<p>M-Station</p>
				<p>Library</p>
				<p>Desert Camp</p>
				<p></p>
				<p></p>
				<p>
					<span style={{color:"#ffa500"}}>
						<strong>TAM Game || Point Blank Team</strong>
					</span>
				</p>
			</div>
			<div className="cont_btn">
				<p className="btn">
					<span className="btn_cont_w135">
						
					</span>
				</p>
			</div>
			</div>
        </div>
      <MyFooter/>
  </div>
</div>
        </>
    )
}