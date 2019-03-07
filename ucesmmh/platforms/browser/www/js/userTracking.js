var userMarker
function trackLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.watchPosition(addpoint);
		} 
		else {
		document.getElementById('showLocation').innerHTML = "Geolocation is not supported by this browser.";
		}
	}

function addpoint (position) {
         		console.log(position.coords.longitude)
         		longitude = position.coords.longitude
         		latitude = position.coords.latitude
         		if (userMarker){
					mymap.removeLayer(userMarker);
					}
         		userMarker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap).bindPopup("<b>You were here</b>");
         		//mymap.panTo( L.LatLng(position.coords.latitude,position.coords.longitude));
         		mymap.flyTo([position.coords.latitude, position.coords.longitude], 18);
         		}


