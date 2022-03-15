
    function bee_generator(){
        let num = Math.floor(Math.random() * 10000);
        if (num == 0){
            num = 1;
        }
        
        var opening = "Awaken work bee # "+ num + "...";
        document.getElementById("bee_num").innerHTML = opening;
    }