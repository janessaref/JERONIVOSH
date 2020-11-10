

var background = $(".gameplay");
var quest = $(".quest");

$("#submit").on("click", event =>{
    event.preventDefault();
    $("#login").attr("display", "none");
    $("#start").attr("display", "block");
    let username = $("#userName").val().trim();
    let password = $("#password").val().trim();
    $.post("/api/create", {username: username, password: password})
    .then(begin());

})

$("#start").on("click", event =>{
    event.preventDefault();
    $("#start").attr("display", "none");
    $.post("/api/create")
    begin();
})


function begin() {
    var html =
        `
    <div class="container">

               
    <footer class="question footer fixed-bottom w-100 text-center">
        <div class="row">
        <h2 class="quest">Would you like to explore the city?</h2>
        </div>
        <br>
        <div class="row">
            <div class=" text-center">
                <div class="scene1A buttonC">Let's check it out.</div>
            </div>
        </div>
    </footer>
</div>
    
    `

    background.empty()
    background.append(html)
}



$(document).on("click", ".scene1A", function (event) {
    event.preventDefault();
    var html =
        `
    <div class="container">

               
    <footer class="question footer fixed-bottom w-100 text-center">
        <div class="row">
        <h2 class="quest">The trails are busy. You've never seen anything like this. Monstrous figures pass in a blur, their growls are loud and eyes are glowing. </h2>
        </div>
        <br>
        <div class="row">
            <div class="col-md-6">
                <div class="scene2A buttonC">Hide in the nearby alley.</div>
            </div>
            <div class="col-md-6">
                <div class="scene2B buttonC">Continue exploring.</div>
            </div>
        </div>
    </footer>
</div>
    
    `

    background.attr("class", "street")
    background.empty()
    background.append(html)

})

$(document).on("click", ".scene2A", function (event) {
    event.preventDefault();
    var html =
        `
    <div class="container">

               
    <footer class="question footer fixed-bottom w-100 text-center">
        <div class="row">
        <h2 class="quest">You made it to calm space in between the towering mountains that surround you. The rumble of the monsters recedes into the background. Your stomach is growling... You haven't eaten for days.
        You notice some rats feeding on scraps. Fixated on your prey, you...</h2>
        </div>
        <br>
        <div class="row">
            <div class="col-md-6 ">
                <div class="scene3A buttonC">Go straight for the pounce.</div>
            </div>
            <div class="col-md-6">
                <div class="scene3B buttonC">Play it slow, sneak up behind the dumpster.</div>
            </div>
        </div>
    </footer>
</div>
    
    `

    background.attr("class", "alley")
    background.empty()
    background.append(html)

})



$(document).on("click", ".scene2B", function (event) {
    event.preventDefault();
    var html =
        `
    <div class="container">

               
    <footer class="question footer fixed-bottom w-100 text-center">
        <div class="row">
        <h2 class="quest">You press forward on high alert. What is that beautiful light in the distance...

        You leap for your life, narrowly avoiding what seemed like sure death. The monster roared on, as if it did not even notice you. Lucky to have avoied the monster's gaze, you creep through the shadows
        to a narrow opening nearby.</h2>
        </div>
        <br>
        <div class="row">
            <div class="text-center">
                <div class="scene2A buttonC">Continue...</div>
            </div>
           
        </div>
    </footer>
</div>
    
    `

    background.attr("class", "car")
    background.empty()
    background.append(html)

})



$(document).on("click", ".scene3A", function (event) {
    event.preventDefault();
    var html =
        `
    <div class="container">

               
    <footer class="question footer fixed-bottom w-100 text-center">
        <div class="row">
        <h2 class="quest">The paltry rodents scurry away before you come within a paws length. They take their scraps with them and you are left alone in the dark, hungry for the night...</h2>
        </div>
        <br>
        <div class="row">
            <div class="text-center">
                <div class="continueB buttonC">Continue...</div>
            </div>
        </div>
    </footer>
</div>
    
    `

    background.attr("class", "alleyAfter")
    background.empty()
    background.append(html)

})

$(document).on("click", ".scene3B", function (event) {
    event.preventDefault();
    var html =
        `
    <div class="container">

               
    <footer class="question footer fixed-bottom w-100 text-center">
        <div class="row">
        <h2 class="quest">You sneak through the rough terrain, slowly creeping towards your prey. You wait for just the right moment and leap for your first chance of nourishment in days. 
        The furry creatures scamper away, leaving their meager scraps behind. The taste of rot will be enough to hold you over.</h2>
        </div>
        <br>
        <div class="row">
            <div class="text-center">
                <div class="continueB buttonC">Continue...</div>
                </div>
             </div>
            </footer>
        </div>
    
    `

    background.attr("class", "alleyAfter")
    background.empty()
    background.append(html)

})