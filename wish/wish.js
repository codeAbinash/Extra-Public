class Music{
    constructor(src){
        this.musicSource = src;
        this.music = document.createElement("audio");
        this.music.src = src;
        this.music.setAttribute("loop","true");
        document.body.appendChild(this.music);
    }
    play(){
        this.music.play();
    }
    pause(){
        this.music.pause();
    }
}

class Heart{
    constructor(n=30,size=1,speed=1,imgSrc="heart.svg",){
        speed = 1 / speed;
        for(let i=0;i<n;i++){
            let m = document.createElement("img");
            m.classList.add("heart");
            m.src = imgSrc;
            m.style.width =( Math.random() * 15 * size) + 10 + "px";
            m.style.animationDelay = Math.random() + "s";
            m.style.animationDuration =( Math.random() * 2 * speed + 2)+ "s";
            m.style.left = Math.random() * 100 + "%";
            m.style.transform = `rotate(${Math.random() * 360}deg)`
            document.body.appendChild(m);
        }
    }
}