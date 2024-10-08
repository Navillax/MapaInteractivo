L.NumberedDivIcon = L.Icon.extend({
	options: {
    // EDIT THIS TO POINT TO THE FILE AT http://www.charliecroom.com/marker_hole.png (or your own marker)
    iconUrl: 'images/marker-hole.png',
    number: '',
    shadowUrl: null,
    iconSize: new L.Point( 50,50),
		iconAnchor: new L.Point(25, 70),
		popupAnchor: new L.Point(0, -33),
		popupAnchor: new L.Point(0, -75),
		className: 'leaflet-div-icon'
	},
	createIcon: function () {
		var div = document.createElement('div');
		var img = this._createImg(this.options['iconUrl']);
		var numdiv = document.createElement('div');
		numdiv.setAttribute ( "class", "number" );
		numdiv.innerHTML = this.options['number'] || '';
		div.appendChild ( img );
		div.appendChild ( numdiv );
		this._setIconStyles(div, 'icon');
		return div;
	},
	//you could change this to add a shadow like in the normal marker if you really wanted
	createShadow: function () {
		return null;
	}
});

//Make sure you downloaded the image file in numbered_markers.js

//Note that the text could also be letters instead of numbers if that's more appropriate
var marker = new L.Marker(new L.LatLng(0, 0), {
  icon:	new L.NumberedDivIcon({number: '1'})
});