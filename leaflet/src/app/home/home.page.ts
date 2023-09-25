import { Component } from '@angular/core';
import * as L from 'leaflet';
import { Marker } from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map! : L.Map;

  constructor() {}
  // ngOnInit() {
   
  // }

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([51.505, -0.09], 10)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(this.map);

// Path ke gambar di dalam proyek Angular

const markerIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // Ganti dengan URL ikon marker default dari CDN
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png', // Ganti dengan URL ikon marker default 2x dari CDN
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png', // Ganti dengan URL bayangan marker default dari CDN
  iconSize: [45, 61], // Sesuaikan dengan ukuran ikon Anda
  iconAnchor: [21, 41], // Sesuaikan dengan titik penunjuk ikon Anda
});


const marker = L.marker([51.505, -0.09], { icon: markerIcon }).addTo(this.map).bindPopup('yipiiii di london nich').openPopup();


// Base maps
const streetMapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18
});

const satelliteMapLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

const terrainMapLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png', {
  attribution: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
});

const watercolorMapLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
  attribution: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
});

const darkMapLayer = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
});

// Add layers to map
streetMapLayer.addTo(this.map);

// Layer control
const baseMaps = {
  'Street Map': streetMapLayer,
  'Satellite Map': satelliteMapLayer,
  'Terrain Map': terrainMapLayer,
  'Watercolor Map': watercolorMapLayer,
  'Dark Map': darkMapLayer
};

L.control.layers(baseMaps).addTo(this.map);
  }
}

