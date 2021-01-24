function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


function UserDetail(name){
	$.get("/api/get/individual", { user: name}, function( rs ){
			if (rs == null || rs == undefined) {
				alert("Network error.");
			} else {
				if (rs.success == true) {
					setRankDetailView(true, rs.data, name)
				}
				if (rs.message.length > 0) {
					alert(rs.message);
				}
			}		
})

}
function setRankDetailView(isView, data, mickname) {
    if (isView == true) {

        $("#layer_Nickname").text(mickname);
        $("#layer_UserExp").text(data.Exp ? data.Exp : "");
        $("#layer_UserRank").text(data.Rank ? data.Rank : "");
        $("#layer_UserKill").text(data.KillCnt ? data.KillCnt : "");
        $("#layer_UserDeath").text(data.DeathCnt ? data.DeathCnt : "");
        $("#layer_UserHeadshot").text(data.HeadShotCnt ? data.HeadShotCnt : "");
        $("#layer_WinRate").text(data.ClanWinRate ? data.ClanWinRate : "");
        layer_popup_open_w550('ranking_info');
    }
    
}