var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Tipoderadio_1 = new ol.format.GeoJSON();
var features_Tipoderadio_1 = format_Tipoderadio_1.readFeatures(json_Tipoderadio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tipoderadio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tipoderadio_1.addFeatures(features_Tipoderadio_1);
var lyr_Tipoderadio_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tipoderadio_1, 
                style: style_Tipoderadio_1,
                interactive: true,
    title: 'Tipo de radio<br />\
    <img src="styles/legend/Tipoderadio_1_0.png" /> Rural<br />\
    <img src="styles/legend/Tipoderadio_1_1.png" /> Mixto<br />\
    <img src="styles/legend/Tipoderadio_1_2.png" /> Urbano<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_Tipoderadio_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Tipoderadio_1];
lyr_Tipoderadio_1.set('fieldAliases', {'CLAVERA': 'CLAVERA', 'COD_PART': 'COD_PART', 'COD_LOC': 'COD_LOC', 'FRACCION': 'FRACCION', 'RADIO': 'RADIO', 'TIPO': 'Tipo de radio', 'ID': 'ID', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'AREA m2': 'AREA m2', 'AREA km2': 'AREA km2', 'AREA Ha': 'AREA Ha', 'DENSI Ha': 'DENSI Ha', 'VIVIENDAS': 'VIVIENDAS', 'HOGARES': 'HOGARES', 'POBLACION': 'POBLACION', 'IVS': 'IVS', '%V_persp': '%V_persp', '%H_axred': '%H_axred', '%P_vul': '%P_vul', '%P_resto': '%P_resto', '%V_def': '%V_def', '%V_calcon': '%V_calcon', '%H_hacin': '%H_hacin', '%H_tenirr': '%H_tenirr', '%JH_ssec': '%JH_ssec', '%H_conNBI': '%H_conNBI', '%H_sinba': '%H_sinba', '%P_extranj': '%P_extranj', 'IVS sp': 'IVS sp', 'IVS pon': 'IVS pon', });
lyr_Tipoderadio_1.set('fieldImages', {'CLAVERA': 'Hidden', 'COD_PART': 'Hidden', 'COD_LOC': 'Hidden', 'FRACCION': 'Hidden', 'RADIO': 'Hidden', 'TIPO': 'TextEdit', 'ID': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'AREA m2': 'Hidden', 'AREA km2': 'Hidden', 'AREA Ha': 'Hidden', 'DENSI Ha': 'Hidden', 'VIVIENDAS': 'Hidden', 'HOGARES': 'Hidden', 'POBLACION': 'Hidden', 'IVS': 'Hidden', '%V_persp': 'Hidden', '%H_axred': 'Hidden', '%P_vul': 'Hidden', '%P_resto': 'Hidden', '%V_def': 'Hidden', '%V_calcon': 'Hidden', '%H_hacin': 'Hidden', '%H_tenirr': 'Hidden', '%JH_ssec': 'Hidden', '%H_conNBI': 'Hidden', '%H_sinba': 'Hidden', '%P_extranj': 'Hidden', 'IVS sp': 'Hidden', 'IVS pon': 'Hidden', });
lyr_Tipoderadio_1.set('fieldLabels', {'TIPO': 'header label', });
lyr_Tipoderadio_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});