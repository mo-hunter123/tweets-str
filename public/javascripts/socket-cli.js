/// TODO : needs to be moved and restructured


function getUrlsFromText(s) {
    var re = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%\/.\w-]*)?\??(?:[-+=&;%@.\w]*)#?\w*)?)/gm; 
    var m; 
    var arr = []
    while((m = re.exec(s)) !== null) {
        if(m.index === re.lastIndex) {
            re.lastIndex ++
        }
        arr.push(m[0])
    }

    return arr
}


var socket = io();

var tweetsArea = document.getElementById('tweets')


socket.on('tweet', function(tweet) { 

    // console.log(getUrlsFromText(tweet.text))
    console.log(tweet.text)
    const content = `
        <div class="tweet">
            <div class="box">
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64" >
                            <img src=${tweet.user.profile_image_url} alt="Image" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>${tweet.user.name}</strong> <small>@${tweet.user.screen_name}</small>
                                <br />
                                ${tweet.extended_tweet ? tweet.extended_tweet.full_text : tweet.text}
                            </p>
                        </div>
                        <div class="level-left">
                            <div class="level-item">
                                <span><small>${ tweet.created_at}</small></span>
                                <button class="btn"><a href="${getUrlsFromText(tweet.text)[0]}">See TWEET</a></button>
                            </div>  
                        </div>
                    </div>
                </article>
            </div>
        </div>
    `

    tweetsArea.innerHTML += content

    window.scrollTo(0, document.body.scrollHeight)

})