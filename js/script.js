// Initialize and add the map

function initMap(){
    // Your Location
    const loc = { lat: 19.042507, lng: 72.863775 };

    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'),
    {
       zoom: 20,
       center: loc 
    });

    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
}

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event){
    if(this.hash !== ''){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 130
        }, 800);

    }
});

window.addEventListener('scroll', () =>{

    if(window.scrollY > 150){
        document.querySelector('#navbar').style.opacity = 0.9;
    }else{
        document.querySelector('#navbar').style.opacity = 1;
    }

});