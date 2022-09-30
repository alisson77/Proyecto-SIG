var map = L.map('map').setView([9.85802,-83.90345], 13);

function fetchJSON(url) {
  return fetch(url)
    .then(function(response) {
      return response.json();
    });
}
var BarrerasF={
    "type": "FeatureCollection",
    "name": "barreras",
    "features": [
    { "type": "Feature", "properties": { "cat": 12, "osm_id": "3983175331", "name": null, "barrier": "lift_gate", "highway": null, "ref": null, "address": null, "is_in": null, "place": null, "man_made": null, "other_tags": null }, "geometry": { "type": "Point", "coordinates": [ -83.9046592, 9.8582258 ] } },
    { "type": "Feature", "properties": { "cat": 17, "osm_id": "6371153195", "name": null, "barrier": "lift_gate", "highway": null, "ref": null, "address": null, "is_in": null, "place": null, "man_made": null, "other_tags": null }, "geometry": { "type": "Point", "coordinates": [ -83.9046567, 9.8582974 ] } }
    ] 
};
L.geoJSON(BarrerasF).addTo(map); 

var callesF={
    "type": "FeatureCollection",
    "name": "Calles",
    "features": [
    { "type": "Feature", "properties": { "cat": 26, "osm_id": "107720833", "name": "Res San Remo", "highway": "residential", "waterway": null, "aerialway": null, "barrier": null, "man_made": null, "z_order": 3, "other_tags": "\"access\"=>\"private\"" }, "geometry": { "type": "LineString", "coordinates": [ [ -83.9036348, 9.8584032 ], [ -83.90372, 9.8576385 ] ] } },
    { "type": "Feature", "properties": { "cat": 30, "osm_id": "107720888", "name": "Res San Remo", "highway": "residential", "waterway": null, "aerialway": null, "barrier": null, "man_made": null, "z_order": 3, "other_tags": "\"access\"=>\"private\",\"oneway\"=>\"yes\",\"surface\"=>\"asphalt\"" }, "geometry": { "type": "LineString", "coordinates": [ [ -83.9047564, 9.8582349 ], [ -83.9046592, 9.8582258 ], [ -83.9046105, 9.8582197 ], [ -83.9041419, 9.8581612 ] ] } },
    { "type": "Feature", "properties": { "cat": 57, "osm_id": "680444197", "name": "Res San Remo", "highway": "residential", "waterway": null, "aerialway": null, "barrier": null, "man_made": null, "z_order": 3, "other_tags": "\"access\"=>\"private\",\"oneway\"=>\"yes\",\"surface\"=>\"asphalt\"" }, "geometry": { "type": "LineString", "coordinates": [ [ -83.9041324, 9.8582315 ], [ -83.9046567, 9.8582974 ], [ -83.9047573, 9.8583077 ] ] } },
    { "type": "Feature", "properties": { "cat": 58, "osm_id": "680444198", "name": "Res San Remo", "highway": "residential", "waterway": null, "aerialway": null, "barrier": null, "man_made": null, "z_order": 3, "other_tags": "\"access\"=>\"private\"" }, "geometry": { "type": "LineString", "coordinates": [ [ -83.9029047, 9.8575622 ], [ -83.9028762, 9.8575865 ], [ -83.9028279, 9.8580728 ], [ -83.9028382, 9.858111 ] ] } },
    { "type": "Feature", "properties": { "cat": 25, "osm_id": "107720828", "name": "Res San Remo", "highway": "residential", "waterway": null, "aerialway": null, "barrier": null, "man_made": null, "z_order": 3, "other_tags": "\"access\"=>\"private\"" }, "geometry": { "type": "LineString", "coordinates": [ [ -83.9041573, 9.8577112 ], [ -83.9041087, 9.8576843 ], [ -83.90372, 9.8576385 ] ] } },
    { "type": "Feature", "properties": { "cat": 25, "osm_id": "107720828", "name": "Res San Remo", "highway": "residential", "waterway": null, "aerialway": null, "barrier": null, "man_made": null, "z_order": 3, "other_tags": "\"access\"=>\"private\"" }, "geometry": { "type": "LineString", "coordinates": [ [ -83.90372, 9.8576385 ], [ -83.9029446, 9.8575495 ], [ -83.9029047, 9.8575622 ] ] } },
    { "type": "Feature", "properties": { "cat": 59, "osm_id": "680444199", "name": "Res San Remo", "highway": "residential", "waterway": null, "aerialway": null, "barrier": null, "man_made": null, "z_order": 3, "other_tags": "\"access\"=>\"private\"" }, "geometry": { "type": "LineString", "coordinates": [ [ -83.9028382, 9.858111 ], [ -83.9028856, 9.8581573 ], [ -83.9029121, 9.858166 ], [ -83.9031688, 9.8582502 ], [ -83.9036348, 9.8584032 ] ] } },
    { "type": "Feature", "properties": { "cat": 59, "osm_id": "680444199", "name": "Res San Remo", "highway": "residential", "waterway": null, "aerialway": null, "barrier": null, "man_made": null, "z_order": 3, "other_tags": "\"access\"=>\"private\"" }, "geometry": { "type": "LineString", "coordinates": [ [ -83.9036348, 9.8584032 ], [ -83.9040256, 9.8585326 ], [ -83.9040679, 9.8585253 ] ] } },
    { "type": "Feature", "properties": { "cat": 60, "osm_id": "680444200", "name": "Res San Remo", "highway": "residential", "waterway": null, "aerialway": null, "barrier": null, "man_made": null, "z_order": 3, "other_tags": "\"access\"=>\"private\"" }, "geometry": { "type": "LineString", "coordinates": [ [ -83.9040679, 9.8585253 ], [ -83.9040966, 9.8584969 ], [ -83.9041324, 9.8582315 ] ] } },
    { "type": "Feature", "properties": { "cat": 60, "osm_id": "680444200", "name": "Res San Remo", "highway": "residential", "waterway": null, "aerialway": null, "barrier": null, "man_made": null, "z_order": 3, "other_tags": "\"access\"=>\"private\"" }, "geometry": { "type": "LineString", "coordinates": [ [ -83.9041324, 9.8582315 ], [ -83.9041419, 9.8581612 ] ] } },
    { "type": "Feature", "properties": { "cat": 60, "osm_id": "680444200", "name": "Res San Remo", "highway": "residential", "waterway": null, "aerialway": null, "barrier": null, "man_made": null, "z_order": 3, "other_tags": "\"access\"=>\"private\"" }, "geometry": { "type": "LineString", "coordinates": [ [ -83.9041419, 9.8581612 ], [ -83.9041865, 9.8577623 ], [ -83.9041573, 9.8577112 ] ] } }
    ]
    };
    L.geoJSON(callesF).addTo(map); 

var casaF={
    "type": "FeatureCollection",
    "name": "casas",
    "features": [
    
    ]
    };
    L.geoJSON(casaF).addTo(map); 

var postesF={
    "type": "FeatureCollection",
    "name": "Postes",
    "features": [
    { "type": "Feature", "properties": { "cat": 20, "osm_id": "10052524746", "name": null, "barrier": null, "highway": null, "ref": "Poste", "address": null, "is_in": null, "place": null, "man_made": null, "other_tags": "\"power\"=>\"pole\"" }, "geometry": { "type": "Point", "coordinates": [ -83.9037366, 9.8584879 ] } },
    { "type": "Feature", "properties": { "cat": 21, "osm_id": "10052691870", "name": null, "barrier": null, "highway": null, "ref": "Poste", "address": null, "is_in": null, "place": null, "man_made": null, "other_tags": "\"power\"=>\"pole\"" }, "geometry": { "type": "Point", "coordinates": [ -83.9046105, 9.8582197 ] } },
    { "type": "Feature", "properties": { "cat": 22, "osm_id": "10052691871", "name": null, "barrier": null, "highway": null, "ref": "Poste", "address": null, "is_in": null, "place": null, "man_made": null, "other_tags": "\"power\"=>\"pole\"" }, "geometry": { "type": "Point", "coordinates": [ -83.9044406, 9.8581776 ] } },
    { "type": "Feature", "properties": { "cat": 23, "osm_id": "10052691872", "name": null, "barrier": null, "highway": null, "ref": "Poste", "address": null, "is_in": null, "place": null, "man_made": null, "other_tags": "\"power\"=>\"pole\"" }, "geometry": { "type": "Point", "coordinates": [ -83.9041026, 9.8581829 ] } },
    { "type": "Feature", "properties": { "cat": 24, "osm_id": "10052691873", "name": null, "barrier": null, "highway": null, "ref": "Poste", "address": null, "is_in": null, "place": null, "man_made": null, "other_tags": "\"power\"=>\"pole\"" }, "geometry": { "type": "Point", "coordinates": [ -83.9040409, 9.8585555 ] } },
    { "type": "Feature", "properties": { "cat": 25, "osm_id": "10052691874", "name": null, "barrier": null, "highway": null, "ref": "Poste", "address": null, "is_in": null, "place": null, "man_made": null, "other_tags": "\"power\"=>\"pole\"" }, "geometry": { "type": "Point", "coordinates": [ -83.9031688, 9.8582502 ] } },
    { "type": "Feature", "properties": { "cat": 26, "osm_id": "10052691875", "name": null, "barrier": null, "highway": null, "ref": "Poste", "address": null, "is_in": null, "place": null, "man_made": null, "other_tags": "\"power\"=>\"pole\"" }, "geometry": { "type": "Point", "coordinates": [ -83.9029121, 9.858166 ] } },
    { "type": "Feature", "properties": { "cat": 27, "osm_id": "10052691876", "name": null, "barrier": null, "highway": null, "ref": "Poste", "address": null, "is_in": null, "place": null, "man_made": null, "other_tags": "\"power\"=>\"pole\"" }, "geometry": { "type": "Point", "coordinates": [ -83.9027789, 9.8579517 ] } },
    { "type": "Feature", "properties": { "cat": 28, "osm_id": "10052691877", "name": null, "barrier": null, "highway": null, "ref": "Poste", "address": null, "is_in": null, "place": null, "man_made": null, "other_tags": "\"power\"=>\"pole\"" }, "geometry": { "type": "Point", "coordinates": [ -83.9028125, 9.8576623 ] } },
    { "type": "Feature", "properties": { "cat": 29, "osm_id": "10052691878", "name": null, "barrier": null, "highway": null, "ref": "Poste", "address": null, "is_in": null, "place": null, "man_made": null, "other_tags": "\"power\"=>\"pole\"" }, "geometry": { "type": "Point", "coordinates": [ -83.9030515, 9.8574927 ] } },
    { "type": "Feature", "properties": { "cat": 30, "osm_id": "10052691879", "name": null, "barrier": null, "highway": null, "ref": "Poste", "address": null, "is_in": null, "place": null, "man_made": null, "other_tags": "\"power\"=>\"pole\"" }, "geometry": { "type": "Point", "coordinates": [ -83.9036501, 9.8575619 ] } },
    { "type": "Feature", "properties": { "cat": 31, "osm_id": "10052691880", "name": null, "barrier": null, "highway": null, "ref": "Poste", "address": null, "is_in": null, "place": null, "man_made": null, "other_tags": "\"power\"=>\"pole\"" }, "geometry": { "type": "Point", "coordinates": [ -83.9042231, 9.8577357 ] } },
    { "type": "Feature", "properties": { "cat": 32, "osm_id": "10052691881", "name": null, "barrier": null, "highway": null, "ref": "Poste", "address": null, "is_in": null, "place": null, "man_made": null, "other_tags": "\"power\"=>\"pole\"" }, "geometry": { "type": "Point", "coordinates": [ -83.9036583, 9.858006 ] } }
    ]
    };
    L.geoJSON(postesF).addTo(map); 


