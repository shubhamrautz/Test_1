const comments= document.getElementById("comments-icon")
let x=0
comments.onclick= ()=> {if(x==0){
    document.getElementById("comments").innerText=243
    comments.style.opacity = '1'
    x=1
}
else{
    document.getElementById("comments").innerText=242
    comments.style.opacity = '0.3'
    x=0
}    
}

const retweets= document.getElementById("retweet-icon")
let y=0
retweets.onclick= ()=> {if(y==0){
    document.getElementById("retweets").innerText=143
    retweets.style.opacity='1'
    y=1
}
else{
    document.getElementById("retweets").innerText=142
    y=0
    retweets.style.opacity='0.3'
}    
}

const likes= document.getElementById("likes-icon")
let z=0
likes.onclick= ()=> {if(z==0){
    document.getElementById("likes").innerText="2.6K"
    likes.style.opacity='1'
    z=1
}
else{
    document.getElementById("likes").innerText="2.6K"
    likes.style.opacity='0.3'
    z=0
}    
}