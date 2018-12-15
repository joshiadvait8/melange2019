// Event detailsretrival using query

firebase.initializeApp(config);
  console.log(config);
const dbRefObject = firebase.database().ref().child('events');

dbRefObject.on('child_added',snap=>{
    let params = (new URL(document.location)).searchParams;
    let name = params.get("id");
    var eventId = snap.child("EventID").val();  
    var content = document.getElementById("eventid");
    if(eventId == name)
    {
        var eventDescription = snap.child("Description").val();
        var eventDate = snap.child("EventDate").val();
        var eventName = snap.child("EventName").val();
        var eventcomm = snap.child("MangingCommittee").val();
        var eventTiming = snap.child("EventTiming").val();
        var eventVenue = snap.child("Venue").val();
        console.log(eventName);
        content.innerHTML += '<div class="col-md-6">'+
            '<img src="img/speakers/1.jpg" alt="Speaker 1" class="img-fluid">'+
          '</div>'+

          '<div class="col-md-6">'+
            '<div class="details">'+
              '<h2>'+eventName+'</h2>'+
              '<div class="social">'+
                // <a href=""><i class="fa fa-twitter"></i></a>
                // <a href=""><i class="fa fa-facebook"></i></a>
                // <a href=""><i class="fa fa-google-plus"></i></a>
                // <a href=""><i class="fa fa-linkedin"></i></a>
             ' </div>'+
             '<p>'+eventDescription+'</p>'+
             '<p><strong>Managing Committee: </strong> <span id="eventVenue">'+eventcomm+'</span></p>'+ 
             '<p><strong>Venue: </strong> <span id="eventVenue">'+eventVenue+'</span></p>'+ 
              '<p><strong>Date: </strong> <span id="eventVenue">'+eventDate+'</span></p>'+ 
              '<p><strong>Time: </strong> <span id="eventVenue">'+eventTiming+'</span></p>'+ 
            '</div>'+
          '</div>';
        
    }
 
  
  
});