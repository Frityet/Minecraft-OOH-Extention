var  bgp = chrome.extension.getBackgroundPage()

document.addEventListener('DOMContentLoaded', function () {
	var btn = document.getElementById("btnToggle");
    btn.addEventListener('click', toggle);

	if(localStorage.play_audio == undefined) {
        localStorage.play_audio = "false";
    }
	
	btn.value = "OOH?: " + localStorage.play_audio.toUpperCase();
	
});

function toggle(){
	var tog = JSON.parse(localStorage.play_audio);
	tog = !tog;
	localStorage.play_audio = tog;
	document.getElementById("btnToggle").value = "OOH?: " + localStorage.play_audio.toUpperCase();
}