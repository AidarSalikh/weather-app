export const ICON_MAP = new Map()

addMapping([1000, ], 'sun')//
addMapping([1003], 'cloud-sun')//
addMapping([1006, 1009, 1030], 'cloud') //
addMapping([1135, 1147, ], 'smog') //
addMapping([1063, 1183, 1186, 1189, 1240, 1261, 1273, 1276, 1279, 1282], 'light-rain') //
addMapping([1192, 1195, 1198, 1201, 1243, 1246, 1249, 1252, 1255, 1258, 1264, ], 'cloud-showers-heavy')//
addMapping([1066, 1069, 1072, 1114, 1117, 1150, 1153, 1168, 1171, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237], 'snow') //
addMapping([1087, ], 'cloud-bolt') //

function addMapping(values, icon) {
    values.forEach(value => {
        ICON_MAP.set(value, icon)
    })
}