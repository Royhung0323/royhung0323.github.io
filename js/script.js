var audiolist =  document.getElementsByTagName("audio");
//讀取audio標籤集合

function Playmusic(musicObj)
{           
    var thisMusic = document.getElementById(musicObj);  
    //讀取音樂id   

    if(thisMusic.paused)  
    { //如果要播放的音樂還沒播放          
        [].forEach.call(audiolist, function(i) 
        { //如果有其他音樂播放，把其他音樂關閉  
        if(i !== thisMusic)
        {
            i.pause();
            i.currentTime = 0;
        } 
        })
        thisMusic.play(); //播放
    }
    else
    {
        thisMusic.pause(); //暫停
        thisMusic.currentTime = 0; //把音樂時間歸零
    }       
}