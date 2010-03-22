// load maps
var map;
var gmap_load = function(overlaySrc,districtId,centerX,centerY){
	if (GBrowserIsCompatible()) { 
		var geoXml;
		var geoCallback = function() {
			geoXml.gotoDefaultViewport(map);
		}
		geoXml = new GGeoXml(overlaySrc, geoCallback);
		var map = new GMap2(document.getElementById("nytint-map-"+districtId));
		map.setCenter(new GLatLng(centerY, centerX), 12);
		map.addMapType(G_PHYSICAL_MAP);
		map.setMapType(G_PHYSICAL_MAP);
		map.disableDoubleClickZoom();
		map.disableInfoWindow();
		map.addOverlay(geoXml);
	
		var icon = new GIcon( );
		icon.image = "http://www.nytimes.com/packages/html/maps/landlords/markerOrange.png";
		icon.iconSize = new GSize( 14, 14 );
		icon.iconAnchor = new GPoint( 7,7);
		icon.infoWindowAnchor = new GPoint( 7, 7 );
		var pnt = new GLatLng(40.720246, -73.988413);
		var opts = { icon:icon };
		var marker = new GMarker(pnt, opts);
		map.addOverlay(marker);
		map.disableDragging();
  	}
};
 
gmap_load('http://graphics8.nytimes.com/packages/xml/represent/163.xml','163',40.7195921503,-73.9855501485);
 
gmap_load('http://graphics8.nytimes.com/packages/xml/represent/35.xml','35',40.7073928891,-74.0080797617);
 
gmap_load('http://graphics8.nytimes.com/packages/xml/represent/56.xml','56',40.7039022408,-74.0074181232);
 
gmap_load('http://graphics8.nytimes.com/packages/xml/represent/119.xml','119',40.7050532682,-73.9943638935);
 
gmap_load('http://graphics8.nytimes.com/packages/xml/represent/147.xml','147',40.7610436375,-73.9477004962);
