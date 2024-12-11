var map = L.map('map', {
    center: [-17.98881452294453, -70.23928379711879],
    zoom: 17,
    minZoom: 0,
    maxZoom: 100,
    maxBounds: [[-17.9905174215,-70.2411892481], [-17.9871295687,-70.2371122904]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var bgoogleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
bgoogleSat.addTo(map);

var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleStreets.addTo(map);

var curvas = L.tileLayer.wms("http://localhost:8080/geoserver/web_catastro/wms?", {
	   layers: "web_catastro:curvas_nivel_c", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
curvas.addTo(map);

var area = L.tileLayer.wms("http://localhost:8080/geoserver/web_catastro/wms?", {
	   layers: "web_catastro:area_intervension_c", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
area.addTo(map);

var mz = L.tileLayer.wms("http://localhost:8080/geoserver/web_catastro/wms?", {
	   layers: "web_catastro:manzanas_c", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
mz.addTo(map);

var lotes = L.tileLayer.wms("http://localhost:8080/geoserver/web_catastro/wms?", {
	   layers: "web_catastro:lotes_c", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
lotes.addTo(map);

var averde = L.tileLayer.wms("http://localhost:8080/geoserver/web_catastro/wms?", {
	   layers: "web_catastro:vegetacion_c", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
averde.addTo(map);

var vias = L.tileLayer.wms("http://localhost:8080/geoserver/web_catastro/wms?", {
	   layers: "web_catastro:vias_c", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
vias.addTo(map);

var veredas = L.tileLayer.wms("http://localhost:8080/geoserver/web_catastro/wms?", {
	   layers: "web_catastro:veredas_c", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
veredas.addTo(map);

var baseMaps = {
    "OpenStreetMap": basemapOSM,
    "Google Satelite": bgoogleSat,
    "Google Streets": googleStreets
};

var overlayMaps = {
    "Curvas de nivel": curvas,
    "Manzanas Catastrales": mz,
    "Lotes Catastrales": lotes,
    "Areas Verdes": averde,
    "Veredas": veredas,
    "Vias": vias,
    "Zona Catastral": area
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);
