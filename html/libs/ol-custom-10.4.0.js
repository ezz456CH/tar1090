!(function (t, e) {
	'object' == typeof exports && 'undefined' != typeof module ? e(exports) : 'function' == typeof define && define.amd ? define(['exports'], e) : e(((t = 'undefined' != typeof globalThis ? globalThis : t || self).ol = {}));
})(this, function (t) {
	'use strict';
	var e = {
		$version: 8,
		$root: { version: { required: !0, type: 'enum', values: [8] }, name: { type: 'string' }, metadata: { type: '*' }, center: { type: 'array', value: 'number' }, centerAltitude: { type: 'number' }, zoom: { type: 'number' }, bearing: { type: 'number', default: 0, period: 360, units: 'degrees' }, pitch: { type: 'number', default: 0, units: 'degrees' }, roll: { type: 'number', default: 0, units: 'degrees' }, light: { type: 'light' }, sky: { type: 'sky' }, projection: { type: 'projection' }, terrain: { type: 'terrain' }, sources: { required: !0, type: 'sources' }, sprite: { type: 'sprite' }, glyphs: { type: 'string' }, transition: { type: 'transition' }, layers: { required: !0, type: 'array', value: 'layer' } },
		sources: { '*': { type: 'source' } },
		source: ['source_vector', 'source_raster', 'source_raster_dem', 'source_geojson', 'source_video', 'source_image'],
		source_vector: { type: { required: !0, type: 'enum', values: { vector: {} } }, url: { type: 'string' }, tiles: { type: 'array', value: 'string' }, bounds: { type: 'array', value: 'number', length: 4, default: [-180, -85.051129, 180, 85.051129] }, scheme: { type: 'enum', values: { xyz: {}, tms: {} }, default: 'xyz' }, minzoom: { type: 'number', default: 0 }, maxzoom: { type: 'number', default: 22 }, attribution: { type: 'string' }, promoteId: { type: 'promoteId' }, volatile: { type: 'boolean', default: !1 }, '*': { type: '*' } },
		source_raster: { type: { required: !0, type: 'enum', values: { raster: {} } }, url: { type: 'string' }, tiles: { type: 'array', value: 'string' }, bounds: { type: 'array', value: 'number', length: 4, default: [-180, -85.051129, 180, 85.051129] }, minzoom: { type: 'number', default: 0 }, maxzoom: { type: 'number', default: 22 }, tileSize: { type: 'number', default: 512, units: 'pixels' }, scheme: { type: 'enum', values: { xyz: {}, tms: {} }, default: 'xyz' }, attribution: { type: 'string' }, volatile: { type: 'boolean', default: !1 }, '*': { type: '*' } },
		source_raster_dem: {
			type: { required: !0, type: 'enum', values: { 'raster-dem': {} } },
			url: { type: 'string' },
			tiles: { type: 'array', value: 'string' },
			bounds: { type: 'array', value: 'number', length: 4, default: [-180, -85.051129, 180, 85.051129] },
			minzoom: { type: 'number', default: 0 },
			maxzoom: { type: 'number', default: 22 },
			tileSize: { type: 'number', default: 512, units: 'pixels' },
			attribution: { type: 'string' },
			encoding: { type: 'enum', values: { terrarium: {}, mapbox: {}, custom: {} }, default: 'mapbox' },
			redFactor: { type: 'number', default: 1 },
			blueFactor: { type: 'number', default: 1 },
			greenFactor: { type: 'number', default: 1 },
			baseShift: { type: 'number', default: 0 },
			volatile: { type: 'boolean', default: !1 },
			'*': { type: '*' },
		},
		source_geojson: { type: { required: !0, type: 'enum', values: { geojson: {} } }, data: { required: !0, type: '*' }, maxzoom: { type: 'number', default: 18 }, attribution: { type: 'string' }, buffer: { type: 'number', default: 128, maximum: 512, minimum: 0 }, filter: { type: '*' }, tolerance: { type: 'number', default: 0.375 }, cluster: { type: 'boolean', default: !1 }, clusterRadius: { type: 'number', default: 50, minimum: 0 }, clusterMaxZoom: { type: 'number' }, clusterMinPoints: { type: 'number' }, clusterProperties: { type: '*' }, lineMetrics: { type: 'boolean', default: !1 }, generateId: { type: 'boolean', default: !1 }, promoteId: { type: 'promoteId' } },
		source_video: { type: { required: !0, type: 'enum', values: { video: {} } }, urls: { required: !0, type: 'array', value: 'string' }, coordinates: { required: !0, type: 'array', length: 4, value: { type: 'array', length: 2, value: 'number' } } },
		source_image: { type: { required: !0, type: 'enum', values: { image: {} } }, url: { required: !0, type: 'string' }, coordinates: { required: !0, type: 'array', length: 4, value: { type: 'array', length: 2, value: 'number' } } },
		layer: { id: { type: 'string', required: !0 }, type: { type: 'enum', values: { fill: {}, line: {}, symbol: {}, circle: {}, heatmap: {}, 'fill-extrusion': {}, raster: {}, hillshade: {}, background: {} }, required: !0 }, metadata: { type: '*' }, source: { type: 'string' }, 'source-layer': { type: 'string' }, minzoom: { type: 'number', minimum: 0, maximum: 24 }, maxzoom: { type: 'number', minimum: 0, maximum: 24 }, filter: { type: 'filter' }, layout: { type: 'layout' }, paint: { type: 'paint' } },
		layout: ['layout_fill', 'layout_line', 'layout_circle', 'layout_heatmap', 'layout_fill-extrusion', 'layout_symbol', 'layout_raster', 'layout_hillshade', 'layout_background'],
		layout_background: { visibility: { type: 'enum', values: { visible: {}, none: {} }, default: 'visible', 'property-type': 'constant' } },
		layout_fill: { 'fill-sort-key': { type: 'number', expression: { interpolated: !1, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' }, visibility: { type: 'enum', values: { visible: {}, none: {} }, default: 'visible', 'property-type': 'constant' } },
		layout_circle: { 'circle-sort-key': { type: 'number', expression: { interpolated: !1, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' }, visibility: { type: 'enum', values: { visible: {}, none: {} }, default: 'visible', 'property-type': 'constant' } },
		layout_heatmap: { visibility: { type: 'enum', values: { visible: {}, none: {} }, default: 'visible', 'property-type': 'constant' } },
		'layout_fill-extrusion': { visibility: { type: 'enum', values: { visible: {}, none: {} }, default: 'visible', 'property-type': 'constant' } },
		layout_line: {
			'line-cap': { type: 'enum', values: { butt: {}, round: {}, square: {} }, default: 'butt', expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'line-join': { type: 'enum', values: { bevel: {}, round: {}, miter: {} }, default: 'miter', expression: { interpolated: !1, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' },
			'line-miter-limit': { type: 'number', default: 2, requires: [{ 'line-join': 'miter' }], expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'line-round-limit': { type: 'number', default: 1.05, requires: [{ 'line-join': 'round' }], expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'line-sort-key': { type: 'number', expression: { interpolated: !1, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' },
			visibility: { type: 'enum', values: { visible: {}, none: {} }, default: 'visible', 'property-type': 'constant' },
		},
		layout_symbol: {
			'symbol-placement': { type: 'enum', values: { point: {}, line: {}, 'line-center': {} }, default: 'point', expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'symbol-spacing': { type: 'number', default: 250, minimum: 1, units: 'pixels', requires: [{ 'symbol-placement': 'line' }], expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'symbol-avoid-edges': { type: 'boolean', default: !1, expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'symbol-sort-key': { type: 'number', expression: { interpolated: !1, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' },
			'symbol-z-order': { type: 'enum', values: { auto: {}, 'viewport-y': {}, source: {} }, default: 'auto', expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'icon-allow-overlap': { type: 'boolean', default: !1, requires: ['icon-image', { '!': 'icon-overlap' }], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'icon-overlap': { type: 'enum', values: { never: {}, always: {}, cooperative: {} }, requires: ['icon-image'], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'icon-ignore-placement': { type: 'boolean', default: !1, requires: ['icon-image'], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'icon-optional': { type: 'boolean', default: !1, requires: ['icon-image', 'text-field'], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'icon-rotation-alignment': { type: 'enum', values: { map: {}, viewport: {}, auto: {} }, default: 'auto', requires: ['icon-image'], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'icon-size': { type: 'number', default: 1, minimum: 0, units: 'factor of the original icon size', requires: ['icon-image'], expression: { interpolated: !0, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' },
			'icon-text-fit': { type: 'enum', values: { none: {}, width: {}, height: {}, both: {} }, default: 'none', requires: ['icon-image', 'text-field'], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'icon-text-fit-padding': { type: 'array', value: 'number', length: 4, default: [0, 0, 0, 0], units: 'pixels', requires: ['icon-image', 'text-field', { 'icon-text-fit': ['both', 'width', 'height'] }], expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'icon-image': { type: 'resolvedImage', tokens: !0, expression: { interpolated: !1, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' },
			'icon-rotate': { type: 'number', default: 0, period: 360, units: 'degrees', requires: ['icon-image'], expression: { interpolated: !0, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' },
			'icon-padding': { type: 'padding', default: [2], units: 'pixels', requires: ['icon-image'], expression: { interpolated: !0, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' },
			'icon-keep-upright': { type: 'boolean', default: !1, requires: ['icon-image', { 'icon-rotation-alignment': 'map' }, { 'symbol-placement': ['line', 'line-center'] }], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'icon-offset': { type: 'array', value: 'number', length: 2, default: [0, 0], requires: ['icon-image'], expression: { interpolated: !0, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' },
			'icon-anchor': { type: 'enum', values: { center: {}, left: {}, right: {}, top: {}, bottom: {}, 'top-left': {}, 'top-right': {}, 'bottom-left': {}, 'bottom-right': {} }, default: 'center', requires: ['icon-image'], expression: { interpolated: !1, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' },
			'icon-pitch-alignment': { type: 'enum', values: { map: {}, viewport: {}, auto: {} }, default: 'auto', requires: ['icon-image'], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'text-pitch-alignment': { type: 'enum', values: { map: {}, viewport: {}, auto: {} }, default: 'auto', requires: ['text-field'], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'text-rotation-alignment': { type: 'enum', values: { map: {}, viewport: {}, 'viewport-glyph': {}, auto: {} }, default: 'auto', requires: ['text-field'], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'text-field': { type: 'formatted', default: '', tokens: !0, expression: { interpolated: !1, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' },
			'text-font': { type: 'array', value: 'string', default: ['Open Sans Regular', 'Arial Unicode MS Regular'], requires: ['text-field'], expression: { interpolated: !1, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' },
			'text-size': { type: 'number', default: 16, minimum: 0, units: 'pixels', requires: ['text-field'], expression: { interpolated: !0, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' },
			'text-max-width': { type: 'number', default: 10, minimum: 0, units: 'ems', requires: ['text-field'], expression: { interpolated: !0, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' },
			'text-line-height': { type: 'number', default: 1.2, units: 'ems', requires: ['text-field'], expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'text-letter-spacing': { type: 'number', default: 0, units: 'ems', requires: ['text-field'], expression: { interpolated: !0, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' },
			'text-justify': { type: 'enum', values: { auto: {}, left: {}, center: {}, right: {} }, default: 'center', requires: ['text-field'], expression: { interpolated: !1, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' },
			'text-radial-offset': { type: 'number', units: 'ems', default: 0, requires: ['text-field'], 'property-type': 'data-driven', expression: { interpolated: !0, parameters: ['zoom', 'feature'] } },
			'text-variable-anchor': { type: 'array', value: 'enum', values: { center: {}, left: {}, right: {}, top: {}, bottom: {}, 'top-left': {}, 'top-right': {}, 'bottom-left': {}, 'bottom-right': {} }, requires: ['text-field', { 'symbol-placement': ['point'] }], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'text-variable-anchor-offset': { type: 'variableAnchorOffsetCollection', requires: ['text-field', { 'symbol-placement': ['point'] }], expression: { interpolated: !0, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' },
			'text-anchor': { type: 'enum', values: { center: {}, left: {}, right: {}, top: {}, bottom: {}, 'top-left': {}, 'top-right': {}, 'bottom-left': {}, 'bottom-right': {} }, default: 'center', requires: ['text-field', { '!': 'text-variable-anchor' }], expression: { interpolated: !1, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' },
			'text-max-angle': { type: 'number', default: 45, units: 'degrees', requires: ['text-field', { 'symbol-placement': ['line', 'line-center'] }], expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'text-writing-mode': { type: 'array', value: 'enum', values: { horizontal: {}, vertical: {} }, requires: ['text-field', { 'symbol-placement': ['point'] }], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'text-rotate': { type: 'number', default: 0, period: 360, units: 'degrees', requires: ['text-field'], expression: { interpolated: !0, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' },
			'text-padding': { type: 'number', default: 2, minimum: 0, units: 'pixels', requires: ['text-field'], expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'text-keep-upright': { type: 'boolean', default: !0, requires: ['text-field', { 'text-rotation-alignment': 'map' }, { 'symbol-placement': ['line', 'line-center'] }], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'text-transform': { type: 'enum', values: { none: {}, uppercase: {}, lowercase: {} }, default: 'none', requires: ['text-field'], expression: { interpolated: !1, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' },
			'text-offset': { type: 'array', value: 'number', units: 'ems', length: 2, default: [0, 0], requires: ['text-field', { '!': 'text-radial-offset' }], expression: { interpolated: !0, parameters: ['zoom', 'feature'] }, 'property-type': 'data-driven' },
			'text-allow-overlap': { type: 'boolean', default: !1, requires: ['text-field', { '!': 'text-overlap' }], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'text-overlap': { type: 'enum', values: { never: {}, always: {}, cooperative: {} }, requires: ['text-field'], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'text-ignore-placement': { type: 'boolean', default: !1, requires: ['text-field'], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'text-optional': { type: 'boolean', default: !1, requires: ['text-field', 'icon-image'], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			visibility: { type: 'enum', values: { visible: {}, none: {} }, default: 'visible', 'property-type': 'constant' },
		},
		layout_raster: { visibility: { type: 'enum', values: { visible: {}, none: {} }, default: 'visible', 'property-type': 'constant' } },
		layout_hillshade: { visibility: { type: 'enum', values: { visible: {}, none: {} }, default: 'visible', 'property-type': 'constant' } },
		filter: { type: 'array', value: '*' },
		filter_operator: { type: 'enum', values: { '==': {}, '!=': {}, '>': {}, '>=': {}, '<': {}, '<=': {}, in: {}, '!in': {}, all: {}, any: {}, none: {}, has: {}, '!has': {} } },
		geometry_type: { type: 'enum', values: { Point: {}, LineString: {}, Polygon: {} } },
		function: { expression: { type: 'expression' }, stops: { type: 'array', value: 'function_stop' }, base: { type: 'number', default: 1, minimum: 0 }, property: { type: 'string', default: '$zoom' }, type: { type: 'enum', values: { identity: {}, exponential: {}, interval: {}, categorical: {} }, default: 'exponential' }, colorSpace: { type: 'enum', values: { rgb: {}, lab: {}, hcl: {} }, default: 'rgb' }, default: { type: '*', required: !1 } },
		function_stop: { type: 'array', minimum: 0, maximum: 24, value: ['number', 'color'], length: 2 },
		expression: { type: 'array', value: '*', minimum: 1 },
		light: { anchor: { type: 'enum', default: 'viewport', values: { map: {}, viewport: {} }, 'property-type': 'data-constant', transition: !1, expression: { interpolated: !1, parameters: ['zoom'] } }, position: { type: 'array', default: [1.15, 210, 30], length: 3, value: 'number', 'property-type': 'data-constant', transition: !0, expression: { interpolated: !0, parameters: ['zoom'] } }, color: { type: 'color', 'property-type': 'data-constant', default: '#ffffff', expression: { interpolated: !0, parameters: ['zoom'] }, transition: !0 }, intensity: { type: 'number', 'property-type': 'data-constant', default: 0.5, minimum: 0, maximum: 1, expression: { interpolated: !0, parameters: ['zoom'] }, transition: !0 } },
		sky: {
			'sky-color': { type: 'color', 'property-type': 'data-constant', default: '#88C6FC', expression: { interpolated: !0, parameters: ['zoom'] }, transition: !0 },
			'horizon-color': { type: 'color', 'property-type': 'data-constant', default: '#ffffff', expression: { interpolated: !0, parameters: ['zoom'] }, transition: !0 },
			'fog-color': { type: 'color', 'property-type': 'data-constant', default: '#ffffff', expression: { interpolated: !0, parameters: ['zoom'] }, transition: !0 },
			'fog-ground-blend': { type: 'number', 'property-type': 'data-constant', default: 0.5, minimum: 0, maximum: 1, expression: { interpolated: !0, parameters: ['zoom'] }, transition: !0 },
			'horizon-fog-blend': { type: 'number', 'property-type': 'data-constant', default: 0.8, minimum: 0, maximum: 1, expression: { interpolated: !0, parameters: ['zoom'] }, transition: !0 },
			'sky-horizon-blend': { type: 'number', 'property-type': 'data-constant', default: 0.8, minimum: 0, maximum: 1, expression: { interpolated: !0, parameters: ['zoom'] }, transition: !0 },
			'atmosphere-blend': { type: 'number', 'property-type': 'data-constant', default: 0.8, minimum: 0, maximum: 1, expression: { interpolated: !0, parameters: ['zoom'] }, transition: !0 },
		},
		terrain: { source: { type: 'string', required: !0 }, exaggeration: { type: 'number', minimum: 0, default: 1 } },
		projection: { type: { type: 'projectionDefinition', default: 'mercator', 'property-type': 'data-constant', transition: !1, expression: { interpolated: !0, parameters: ['zoom'] } } },
		paint: ['paint_fill', 'paint_line', 'paint_circle', 'paint_heatmap', 'paint_fill-extrusion', 'paint_symbol', 'paint_raster', 'paint_hillshade', 'paint_background'],
		paint_fill: {
			'fill-antialias': { type: 'boolean', default: !0, expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'fill-opacity': { type: 'number', default: 1, minimum: 0, maximum: 1, transition: !0, expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'fill-color': { type: 'color', default: '#000000', transition: !0, requires: [{ '!': 'fill-pattern' }], expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'fill-outline-color': { type: 'color', transition: !0, requires: [{ '!': 'fill-pattern' }, { 'fill-antialias': !0 }], expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'fill-translate': { type: 'array', value: 'number', length: 2, default: [0, 0], transition: !0, units: 'pixels', expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'fill-translate-anchor': { type: 'enum', values: { map: {}, viewport: {} }, default: 'map', requires: ['fill-translate'], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'fill-pattern': { type: 'resolvedImage', transition: !0, expression: { interpolated: !1, parameters: ['zoom', 'feature'] }, 'property-type': 'cross-faded-data-driven' },
		},
		'paint_fill-extrusion': {
			'fill-extrusion-opacity': { type: 'number', default: 1, minimum: 0, maximum: 1, transition: !0, expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'fill-extrusion-color': { type: 'color', default: '#000000', transition: !0, requires: [{ '!': 'fill-extrusion-pattern' }], expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'fill-extrusion-translate': { type: 'array', value: 'number', length: 2, default: [0, 0], transition: !0, units: 'pixels', expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'fill-extrusion-translate-anchor': { type: 'enum', values: { map: {}, viewport: {} }, default: 'map', requires: ['fill-extrusion-translate'], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'fill-extrusion-pattern': { type: 'resolvedImage', transition: !0, expression: { interpolated: !1, parameters: ['zoom', 'feature'] }, 'property-type': 'cross-faded-data-driven' },
			'fill-extrusion-height': { type: 'number', default: 0, minimum: 0, units: 'meters', transition: !0, expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'fill-extrusion-base': { type: 'number', default: 0, minimum: 0, units: 'meters', transition: !0, requires: ['fill-extrusion-height'], expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'fill-extrusion-vertical-gradient': { type: 'boolean', default: !0, transition: !1, expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
		},
		paint_line: {
			'line-opacity': { type: 'number', default: 1, minimum: 0, maximum: 1, transition: !0, expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'line-color': { type: 'color', default: '#000000', transition: !0, requires: [{ '!': 'line-pattern' }], expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'line-translate': { type: 'array', value: 'number', length: 2, default: [0, 0], transition: !0, units: 'pixels', expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'line-translate-anchor': { type: 'enum', values: { map: {}, viewport: {} }, default: 'map', requires: ['line-translate'], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'line-width': { type: 'number', default: 1, minimum: 0, transition: !0, units: 'pixels', expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'line-gap-width': { type: 'number', default: 0, minimum: 0, transition: !0, units: 'pixels', expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'line-offset': { type: 'number', default: 0, transition: !0, units: 'pixels', expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'line-blur': { type: 'number', default: 0, minimum: 0, transition: !0, units: 'pixels', expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'line-dasharray': { type: 'array', value: 'number', minimum: 0, transition: !0, units: 'line widths', requires: [{ '!': 'line-pattern' }], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'cross-faded' },
			'line-pattern': { type: 'resolvedImage', transition: !0, expression: { interpolated: !1, parameters: ['zoom', 'feature'] }, 'property-type': 'cross-faded-data-driven' },
			'line-gradient': { type: 'color', transition: !1, requires: [{ '!': 'line-dasharray' }, { '!': 'line-pattern' }, { source: 'geojson', has: { lineMetrics: !0 } }], expression: { interpolated: !0, parameters: ['line-progress'] }, 'property-type': 'color-ramp' },
		},
		paint_circle: {
			'circle-radius': { type: 'number', default: 5, minimum: 0, transition: !0, units: 'pixels', expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'circle-color': { type: 'color', default: '#000000', transition: !0, expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'circle-blur': { type: 'number', default: 0, transition: !0, expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'circle-opacity': { type: 'number', default: 1, minimum: 0, maximum: 1, transition: !0, expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'circle-translate': { type: 'array', value: 'number', length: 2, default: [0, 0], transition: !0, units: 'pixels', expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'circle-translate-anchor': { type: 'enum', values: { map: {}, viewport: {} }, default: 'map', requires: ['circle-translate'], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'circle-pitch-scale': { type: 'enum', values: { map: {}, viewport: {} }, default: 'map', expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'circle-pitch-alignment': { type: 'enum', values: { map: {}, viewport: {} }, default: 'viewport', expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'circle-stroke-width': { type: 'number', default: 0, minimum: 0, transition: !0, units: 'pixels', expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'circle-stroke-color': { type: 'color', default: '#000000', transition: !0, expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'circle-stroke-opacity': { type: 'number', default: 1, minimum: 0, maximum: 1, transition: !0, expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
		},
		paint_heatmap: {
			'heatmap-radius': { type: 'number', default: 30, minimum: 1, transition: !0, units: 'pixels', expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'heatmap-weight': { type: 'number', default: 1, minimum: 0, transition: !1, expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'heatmap-intensity': { type: 'number', default: 1, minimum: 0, transition: !0, expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'heatmap-color': { type: 'color', default: ['interpolate', ['linear'], ['heatmap-density'], 0, 'rgba(0, 0, 255, 0)', 0.1, 'royalblue', 0.3, 'cyan', 0.5, 'lime', 0.7, 'yellow', 1, 'red'], transition: !1, expression: { interpolated: !0, parameters: ['heatmap-density'] }, 'property-type': 'color-ramp' },
			'heatmap-opacity': { type: 'number', default: 1, minimum: 0, maximum: 1, transition: !0, expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
		},
		paint_symbol: {
			'icon-opacity': { type: 'number', default: 1, minimum: 0, maximum: 1, transition: !0, requires: ['icon-image'], expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'icon-color': { type: 'color', default: '#000000', transition: !0, requires: ['icon-image'], expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'icon-halo-color': { type: 'color', default: 'rgba(0, 0, 0, 0)', transition: !0, requires: ['icon-image'], expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'icon-halo-width': { type: 'number', default: 0, minimum: 0, transition: !0, units: 'pixels', requires: ['icon-image'], expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'icon-halo-blur': { type: 'number', default: 0, minimum: 0, transition: !0, units: 'pixels', requires: ['icon-image'], expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'icon-translate': { type: 'array', value: 'number', length: 2, default: [0, 0], transition: !0, units: 'pixels', requires: ['icon-image'], expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'icon-translate-anchor': { type: 'enum', values: { map: {}, viewport: {} }, default: 'map', requires: ['icon-image', 'icon-translate'], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'text-opacity': { type: 'number', default: 1, minimum: 0, maximum: 1, transition: !0, requires: ['text-field'], expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'text-color': { type: 'color', default: '#000000', transition: !0, overridable: !0, requires: ['text-field'], expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'text-halo-color': { type: 'color', default: 'rgba(0, 0, 0, 0)', transition: !0, requires: ['text-field'], expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'text-halo-width': { type: 'number', default: 0, minimum: 0, transition: !0, units: 'pixels', requires: ['text-field'], expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'text-halo-blur': { type: 'number', default: 0, minimum: 0, transition: !0, units: 'pixels', requires: ['text-field'], expression: { interpolated: !0, parameters: ['zoom', 'feature', 'feature-state'] }, 'property-type': 'data-driven' },
			'text-translate': { type: 'array', value: 'number', length: 2, default: [0, 0], transition: !0, units: 'pixels', requires: ['text-field'], expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'text-translate-anchor': { type: 'enum', values: { map: {}, viewport: {} }, default: 'map', requires: ['text-field', 'text-translate'], expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
		},
		paint_raster: {
			'raster-opacity': { type: 'number', default: 1, minimum: 0, maximum: 1, transition: !0, expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'raster-hue-rotate': { type: 'number', default: 0, period: 360, transition: !0, units: 'degrees', expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'raster-brightness-min': { type: 'number', default: 0, minimum: 0, maximum: 1, transition: !0, expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'raster-brightness-max': { type: 'number', default: 1, minimum: 0, maximum: 1, transition: !0, expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'raster-saturation': { type: 'number', default: 0, minimum: -1, maximum: 1, transition: !0, expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'raster-contrast': { type: 'number', default: 0, minimum: -1, maximum: 1, transition: !0, expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'raster-resampling': { type: 'enum', values: { linear: {}, nearest: {} }, default: 'linear', expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'raster-fade-duration': { type: 'number', default: 300, minimum: 0, transition: !1, units: 'milliseconds', expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
		},
		paint_hillshade: {
			'hillshade-illumination-direction': { type: 'number', default: 335, minimum: 0, maximum: 359, transition: !1, expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'hillshade-illumination-anchor': { type: 'enum', values: { map: {}, viewport: {} }, default: 'viewport', expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'hillshade-exaggeration': { type: 'number', default: 0.5, minimum: 0, maximum: 1, transition: !0, expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'hillshade-shadow-color': { type: 'color', default: '#000000', transition: !0, expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'hillshade-highlight-color': { type: 'color', default: '#FFFFFF', transition: !0, expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
			'hillshade-accent-color': { type: 'color', default: '#000000', transition: !0, expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' },
		},
		paint_background: { 'background-color': { type: 'color', default: '#000000', transition: !0, requires: [{ '!': 'background-pattern' }], expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' }, 'background-pattern': { type: 'resolvedImage', transition: !0, expression: { interpolated: !1, parameters: ['zoom'] }, 'property-type': 'cross-faded' }, 'background-opacity': { type: 'number', default: 1, minimum: 0, maximum: 1, transition: !0, expression: { interpolated: !0, parameters: ['zoom'] }, 'property-type': 'data-constant' } },
		transition: { duration: { type: 'number', default: 300, minimum: 0, units: 'milliseconds' }, delay: { type: 'number', default: 0, minimum: 0, units: 'milliseconds' } },
		'property-type': { 'data-driven': { type: 'property-type' }, 'cross-faded': { type: 'property-type' }, 'cross-faded-data-driven': { type: 'property-type' }, 'color-ramp': { type: 'property-type' }, 'data-constant': { type: 'property-type' }, constant: { type: 'property-type' } },
		promoteId: { '*': { type: 'string' } },
	};
	const n = ['type', 'source', 'source-layer', 'minzoom', 'maxzoom', 'filter', 'layout'];
	function i(t, e) {
		const i = {};
		for (const e in t) 'ref' !== e && (i[e] = t[e]);
		return (
			n.forEach((t) => {
				t in e && (i[t] = e[t]);
			}),
			i
		);
	}
	function r(t) {
		t = t.slice();
		const e = Object.create(null);
		for (let n = 0; n < t.length; n++) e[t[n].id] = t[n];
		for (let n = 0; n < t.length; n++) 'ref' in t[n] && (t[n] = i(t[n], e[t[n].ref]));
		return t;
	}
	class s extends Error {
		constructor(t, e) {
			super(e), (this.message = e), (this.key = t);
		}
	}
	class o {
		constructor(t, e = []) {
			(this.parent = t), (this.bindings = {});
			for (const [t, n] of e) this.bindings[t] = n;
		}
		concat(t) {
			return new o(this, t);
		}
		get(t) {
			if (this.bindings[t]) return this.bindings[t];
			if (this.parent) return this.parent.get(t);
			throw new Error(`${t} not found in scope.`);
		}
		has(t) {
			return !!this.bindings[t] || (!!this.parent && this.parent.has(t));
		}
	}
	const a = { kind: 'null' },
		l = { kind: 'number' },
		h = { kind: 'string' },
		c = { kind: 'boolean' },
		u = { kind: 'color' },
		d = { kind: 'projectionDefinition' },
		g = { kind: 'object' },
		f = { kind: 'value' },
		p = { kind: 'collator' },
		m = { kind: 'formatted' },
		_ = { kind: 'padding' },
		y = { kind: 'resolvedImage' },
		x = { kind: 'variableAnchorOffsetCollection' };
	function v(t, e) {
		return { kind: 'array', itemType: t, N: e };
	}
	function w(t) {
		if ('array' === t.kind) {
			const e = w(t.itemType);
			return 'number' == typeof t.N ? `array<${e}, ${t.N}>` : 'value' === t.itemType.kind ? 'array' : `array<${e}>`;
		}
		return t.kind;
	}
	const b = [a, l, h, c, u, d, m, g, v(f), _, y, x];
	function S(t, e) {
		if ('error' === e.kind) return null;
		if ('array' === t.kind) {
			if ('array' === e.kind && ((0 === e.N && 'value' === e.itemType.kind) || !S(t.itemType, e.itemType)) && ('number' != typeof t.N || t.N === e.N)) return null;
		} else {
			if (t.kind === e.kind) return null;
			if ('value' === t.kind) for (const t of b) if (!S(t, e)) return null;
		}
		return `Expected ${w(t)} but found ${w(e)} instead.`;
	}
	function C(t, e) {
		return e.some((e) => e.kind === t.kind);
	}
	function E(t, e) {
		return e.some((e) => ('null' === e ? null === t : 'array' === e ? Array.isArray(t) : 'object' === e ? t && !Array.isArray(t) && 'object' == typeof t : e === typeof t));
	}
	function T(t, e) {
		return 'array' === t.kind && 'array' === e.kind ? t.itemType.kind === e.itemType.kind && 'number' == typeof t.N : t.kind === e.kind;
	}
	const P = 0.96422,
		R = 0.82521,
		F = 4 / 29,
		M = 6 / 29,
		I = 3 * M * M,
		k = M * M * M,
		L = Math.PI / 180,
		A = 180 / Math.PI;
	function D(t) {
		return (t %= 360) < 0 && (t += 360), t;
	}
	function O([t, e, n, i]) {
		let r, s;
		const o = G((0.2225045 * (t = z(t)) + 0.7168786 * (e = z(e)) + 0.0606169 * (n = z(n))) / 1);
		t === e && e === n ? (r = s = o) : ((r = G((0.4360747 * t + 0.3850649 * e + 0.1430804 * n) / P)), (s = G((0.0139322 * t + 0.0971045 * e + 0.7141733 * n) / R)));
		const a = 116 * o - 16;
		return [a < 0 ? 0 : a, 500 * (r - o), 200 * (o - s), i];
	}
	function z(t) {
		return t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
	}
	function G(t) {
		return t > k ? Math.pow(t, 1 / 3) : t / I + F;
	}
	function j([t, e, n, i]) {
		let r = (t + 16) / 116,
			s = isNaN(e) ? r : r + e / 500,
			o = isNaN(n) ? r : r - n / 200;
		return (r = 1 * U(r)), (s = P * U(s)), (o = R * U(o)), [N(3.1338561 * s - 1.6168667 * r - 0.4906146 * o), N(-0.9787684 * s + 1.9161415 * r + 0.033454 * o), N(0.0719453 * s - 0.2289914 * r + 1.4052427 * o), i];
	}
	function N(t) {
		return (t = t <= 0.00304 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055) < 0 ? 0 : t > 1 ? 1 : t;
	}
	function U(t) {
		return t > M ? t * t * t : I * (t - F);
	}
	function $(t) {
		if ('transparent' === (t = t.toLowerCase().trim())) return [0, 0, 0, 0];
		const e = q[t];
		if (e) {
			const [t, n, i] = e;
			return [t / 255, n / 255, i / 255, 1];
		}
		if (t.startsWith('#')) {
			if (/^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.test(t)) {
				const e = t.length < 6 ? 1 : 2;
				let n = 1;
				return [B(t.slice(n, (n += e))), B(t.slice(n, (n += e))), B(t.slice(n, (n += e))), B(t.slice(n, n + e) || 'ff')];
			}
		}
		if (t.startsWith('rgb')) {
			const e = /^rgba?\(\s*([\de.+-]+)(%)?(?:\s+|\s*(,)\s*)([\de.+-]+)(%)?(?:\s+|\s*(,)\s*)([\de.+-]+)(%)?(?:\s*([,\/])\s*([\de.+-]+)(%)?)?\s*\)$/,
				n = t.match(e);
			if (n) {
				const [t, e, i, r, s, o, a, l, h, c, u, d] = n,
					g = [r || ' ', a || ' ', c].join('');
				if ('  ' === g || '  /' === g || ',,' === g || ',,,' === g) {
					const t = [i, o, h].join(''),
						n = '%%%' === t ? 100 : '' === t ? 255 : 0;
					if (n) {
						const t = [W(+e / n, 0, 1), W(+s / n, 0, 1), W(+l / n, 0, 1), u ? V(+u, d) : 1];
						if (X(t)) return t;
					}
				}
				return;
			}
		}
		const n = t.match(/^hsla?\(\s*([\de.+-]+)(?:deg)?(?:\s+|\s*(,)\s*)([\de.+-]+)%(?:\s+|\s*(,)\s*)([\de.+-]+)%(?:\s*([,\/])\s*([\de.+-]+)(%)?)?\s*\)$/);
		if (n) {
			const [t, e, i, r, s, o, a, l, h] = n,
				c = [i || ' ', s || ' ', a].join('');
			if ('  ' === c || '  /' === c || ',,' === c || ',,,' === c) {
				const t = [+e, W(+r, 0, 100), W(+o, 0, 100), l ? V(+l, h) : 1];
				if (X(t))
					return (function ([t, e, n, i]) {
						function r(i) {
							const r = (i + t / 30) % 12,
								s = e * Math.min(n, 1 - n);
							return n - s * Math.max(-1, Math.min(r - 3, 9 - r, 1));
						}
						return (t = D(t)), (e /= 100), (n /= 100), [r(0), r(8), r(4), i];
					})(t);
			}
		}
	}
	function B(t) {
		return parseInt(t.padEnd(2, t), 16) / 255;
	}
	function V(t, e) {
		return W(e ? t / 100 : t, 0, 1);
	}
	function W(t, e, n) {
		return Math.min(Math.max(e, t), n);
	}
	function X(t) {
		return !t.some(Number.isNaN);
	}
	const q = {
		aliceblue: [240, 248, 255],
		antiquewhite: [250, 235, 215],
		aqua: [0, 255, 255],
		aquamarine: [127, 255, 212],
		azure: [240, 255, 255],
		beige: [245, 245, 220],
		bisque: [255, 228, 196],
		black: [0, 0, 0],
		blanchedalmond: [255, 235, 205],
		blue: [0, 0, 255],
		blueviolet: [138, 43, 226],
		brown: [165, 42, 42],
		burlywood: [222, 184, 135],
		cadetblue: [95, 158, 160],
		chartreuse: [127, 255, 0],
		chocolate: [210, 105, 30],
		coral: [255, 127, 80],
		cornflowerblue: [100, 149, 237],
		cornsilk: [255, 248, 220],
		crimson: [220, 20, 60],
		cyan: [0, 255, 255],
		darkblue: [0, 0, 139],
		darkcyan: [0, 139, 139],
		darkgoldenrod: [184, 134, 11],
		darkgray: [169, 169, 169],
		darkgreen: [0, 100, 0],
		darkgrey: [169, 169, 169],
		darkkhaki: [189, 183, 107],
		darkmagenta: [139, 0, 139],
		darkolivegreen: [85, 107, 47],
		darkorange: [255, 140, 0],
		darkorchid: [153, 50, 204],
		darkred: [139, 0, 0],
		darksalmon: [233, 150, 122],
		darkseagreen: [143, 188, 143],
		darkslateblue: [72, 61, 139],
		darkslategray: [47, 79, 79],
		darkslategrey: [47, 79, 79],
		darkturquoise: [0, 206, 209],
		darkviolet: [148, 0, 211],
		deeppink: [255, 20, 147],
		deepskyblue: [0, 191, 255],
		dimgray: [105, 105, 105],
		dimgrey: [105, 105, 105],
		dodgerblue: [30, 144, 255],
		firebrick: [178, 34, 34],
		floralwhite: [255, 250, 240],
		forestgreen: [34, 139, 34],
		fuchsia: [255, 0, 255],
		gainsboro: [220, 220, 220],
		ghostwhite: [248, 248, 255],
		gold: [255, 215, 0],
		goldenrod: [218, 165, 32],
		gray: [128, 128, 128],
		green: [0, 128, 0],
		greenyellow: [173, 255, 47],
		grey: [128, 128, 128],
		honeydew: [240, 255, 240],
		hotpink: [255, 105, 180],
		indianred: [205, 92, 92],
		indigo: [75, 0, 130],
		ivory: [255, 255, 240],
		khaki: [240, 230, 140],
		lavender: [230, 230, 250],
		lavenderblush: [255, 240, 245],
		lawngreen: [124, 252, 0],
		lemonchiffon: [255, 250, 205],
		lightblue: [173, 216, 230],
		lightcoral: [240, 128, 128],
		lightcyan: [224, 255, 255],
		lightgoldenrodyellow: [250, 250, 210],
		lightgray: [211, 211, 211],
		lightgreen: [144, 238, 144],
		lightgrey: [211, 211, 211],
		lightpink: [255, 182, 193],
		lightsalmon: [255, 160, 122],
		lightseagreen: [32, 178, 170],
		lightskyblue: [135, 206, 250],
		lightslategray: [119, 136, 153],
		lightslategrey: [119, 136, 153],
		lightsteelblue: [176, 196, 222],
		lightyellow: [255, 255, 224],
		lime: [0, 255, 0],
		limegreen: [50, 205, 50],
		linen: [250, 240, 230],
		magenta: [255, 0, 255],
		maroon: [128, 0, 0],
		mediumaquamarine: [102, 205, 170],
		mediumblue: [0, 0, 205],
		mediumorchid: [186, 85, 211],
		mediumpurple: [147, 112, 219],
		mediumseagreen: [60, 179, 113],
		mediumslateblue: [123, 104, 238],
		mediumspringgreen: [0, 250, 154],
		mediumturquoise: [72, 209, 204],
		mediumvioletred: [199, 21, 133],
		midnightblue: [25, 25, 112],
		mintcream: [245, 255, 250],
		mistyrose: [255, 228, 225],
		moccasin: [255, 228, 181],
		navajowhite: [255, 222, 173],
		navy: [0, 0, 128],
		oldlace: [253, 245, 230],
		olive: [128, 128, 0],
		olivedrab: [107, 142, 35],
		orange: [255, 165, 0],
		orangered: [255, 69, 0],
		orchid: [218, 112, 214],
		palegoldenrod: [238, 232, 170],
		palegreen: [152, 251, 152],
		paleturquoise: [175, 238, 238],
		palevioletred: [219, 112, 147],
		papayawhip: [255, 239, 213],
		peachpuff: [255, 218, 185],
		peru: [205, 133, 63],
		pink: [255, 192, 203],
		plum: [221, 160, 221],
		powderblue: [176, 224, 230],
		purple: [128, 0, 128],
		rebeccapurple: [102, 51, 153],
		red: [255, 0, 0],
		rosybrown: [188, 143, 143],
		royalblue: [65, 105, 225],
		saddlebrown: [139, 69, 19],
		salmon: [250, 128, 114],
		sandybrown: [244, 164, 96],
		seagreen: [46, 139, 87],
		seashell: [255, 245, 238],
		sienna: [160, 82, 45],
		silver: [192, 192, 192],
		skyblue: [135, 206, 235],
		slateblue: [106, 90, 205],
		slategray: [112, 128, 144],
		slategrey: [112, 128, 144],
		snow: [255, 250, 250],
		springgreen: [0, 255, 127],
		steelblue: [70, 130, 180],
		tan: [210, 180, 140],
		teal: [0, 128, 128],
		thistle: [216, 191, 216],
		tomato: [255, 99, 71],
		turquoise: [64, 224, 208],
		violet: [238, 130, 238],
		wheat: [245, 222, 179],
		white: [255, 255, 255],
		whitesmoke: [245, 245, 245],
		yellow: [255, 255, 0],
		yellowgreen: [154, 205, 50],
	};
	function Z(t, e, n) {
		return t + n * (e - t);
	}
	function K(t, e, n) {
		return t.map((t, i) => Z(t, e[i], n));
	}
	class Y {
		constructor(t, e, n, i = 1, r = !0) {
			(this.r = t), (this.g = e), (this.b = n), (this.a = i), r || ((this.r *= i), (this.g *= i), (this.b *= i), i || this.overwriteGetter('rgb', [t, e, n, i]));
		}
		static parse(t) {
			if (t instanceof Y) return t;
			if ('string' != typeof t) return;
			const e = $(t);
			return e ? new Y(...e, !1) : void 0;
		}
		get rgb() {
			const { r: t, g: e, b: n, a: i } = this,
				r = i || 1 / 0;
			return this.overwriteGetter('rgb', [t / r, e / r, n / r, i]);
		}
		get hcl() {
			return this.overwriteGetter(
				'hcl',
				(function (t) {
					const [e, n, i, r] = O(t),
						s = Math.sqrt(n * n + i * i);
					return [Math.round(1e4 * s) ? D(Math.atan2(i, n) * A) : NaN, s, e, r];
				})(this.rgb)
			);
		}
		get lab() {
			return this.overwriteGetter('lab', O(this.rgb));
		}
		overwriteGetter(t, e) {
			return Object.defineProperty(this, t, { value: e }), e;
		}
		toString() {
			const [t, e, n, i] = this.rgb;
			return `rgba(${[t, e, n].map((t) => Math.round(255 * t)).join(',')},${i})`;
		}
		static interpolate(t, e, n, i = 'rgb') {
			switch (i) {
				case 'rgb': {
					const [i, r, s, o] = K(t.rgb, e.rgb, n);
					return new Y(i, r, s, o, !1);
				}
				case 'hcl': {
					const [i, r, s, o] = t.hcl,
						[a, l, h, c] = e.hcl;
					let u, d;
					if (isNaN(i) || isNaN(a)) isNaN(i) ? (isNaN(a) ? (u = NaN) : ((u = a), (1 !== s && 0 !== s) || (d = l))) : ((u = i), (1 !== h && 0 !== h) || (d = r));
					else {
						let t = a - i;
						a > i && t > 180 ? (t -= 360) : a < i && i - a > 180 && (t += 360), (u = i + n * t);
					}
					const [g, f, p, m] = (function ([t, e, n, i]) {
						return (t = isNaN(t) ? 0 : t * L), j([n, Math.cos(t) * e, Math.sin(t) * e, i]);
					})([u, null != d ? d : Z(r, l, n), Z(s, h, n), Z(o, c, n)]);
					return new Y(g, f, p, m, !1);
				}
				case 'lab': {
					const [i, r, s, o] = j(K(t.lab, e.lab, n));
					return new Y(i, r, s, o, !1);
				}
			}
		}
	}
	(Y.black = new Y(0, 0, 0, 1)), (Y.white = new Y(1, 1, 1, 1)), (Y.transparent = new Y(0, 0, 0, 0)), (Y.red = new Y(1, 0, 0, 1));
	class H {
		constructor(t, e, n) {
			(this.sensitivity = t ? (e ? 'variant' : 'case') : e ? 'accent' : 'base'), (this.locale = n), (this.collator = new Intl.Collator(this.locale ? this.locale : [], { sensitivity: this.sensitivity, usage: 'search' }));
		}
		compare(t, e) {
			return this.collator.compare(t, e);
		}
		resolvedLocale() {
			return new Intl.Collator(this.locale ? this.locale : []).resolvedOptions().locale;
		}
	}
	const J = ['bottom', 'center', 'top'];
	class Q {
		constructor(t, e, n, i, r, s) {
			(this.text = t), (this.image = e), (this.scale = n), (this.fontStack = i), (this.textColor = r), (this.verticalAlign = s);
		}
	}
	class tt {
		constructor(t) {
			this.sections = t;
		}
		static fromString(t) {
			return new tt([new Q(t, null, null, null, null, null)]);
		}
		isEmpty() {
			return 0 === this.sections.length || !this.sections.some((t) => 0 !== t.text.length || (t.image && 0 !== t.image.name.length));
		}
		static factory(t) {
			return t instanceof tt ? t : tt.fromString(t);
		}
		toString() {
			return 0 === this.sections.length ? '' : this.sections.map((t) => t.text).join('');
		}
	}
	class et {
		constructor(t) {
			this.values = t.slice();
		}
		static parse(t) {
			if (t instanceof et) return t;
			if ('number' == typeof t) return new et([t, t, t, t]);
			if (Array.isArray(t) && !(t.length < 1 || t.length > 4)) {
				for (const e of t) if ('number' != typeof e) return;
				switch (t.length) {
					case 1:
						t = [t[0], t[0], t[0], t[0]];
						break;
					case 2:
						t = [t[0], t[1], t[0], t[1]];
						break;
					case 3:
						t = [t[0], t[1], t[2], t[1]];
				}
				return new et(t);
			}
		}
		toString() {
			return JSON.stringify(this.values);
		}
		static interpolate(t, e, n) {
			return new et(K(t.values, e.values, n));
		}
	}
	class nt {
		constructor(t) {
			(this.name = 'ExpressionEvaluationError'), (this.message = t);
		}
		toJSON() {
			return this.message;
		}
	}
	const it = new Set(['center', 'left', 'right', 'top', 'bottom', 'top-left', 'top-right', 'bottom-left', 'bottom-right']);
	class rt {
		constructor(t) {
			this.values = t.slice();
		}
		static parse(t) {
			if (t instanceof rt) return t;
			if (Array.isArray(t) && !(t.length < 1) && t.length % 2 == 0) {
				for (let e = 0; e < t.length; e += 2) {
					const n = t[e],
						i = t[e + 1];
					if ('string' != typeof n || !it.has(n)) return;
					if (!Array.isArray(i) || 2 !== i.length || 'number' != typeof i[0] || 'number' != typeof i[1]) return;
				}
				return new rt(t);
			}
		}
		toString() {
			return JSON.stringify(this.values);
		}
		static interpolate(t, e, n) {
			const i = t.values,
				r = e.values;
			if (i.length !== r.length) throw new nt(`Cannot interpolate values of different length. from: ${t.toString()}, to: ${e.toString()}`);
			const s = [];
			for (let t = 0; t < i.length; t += 2) {
				if (i[t] !== r[t]) throw new nt(`Cannot interpolate values containing mismatched anchors. from[${t}]: ${i[t]}, to[${t}]: ${r[t]}`);
				s.push(i[t]);
				const [e, o] = i[t + 1],
					[a, l] = r[t + 1];
				s.push([Z(e, a, n), Z(o, l, n)]);
			}
			return new rt(s);
		}
	}
	class st {
		constructor(t) {
			(this.name = t.name), (this.available = t.available);
		}
		toString() {
			return this.name;
		}
		static fromString(t) {
			return t ? new st({ name: t, available: !1 }) : null;
		}
	}
	class ot {
		constructor(t, e, n) {
			(this.from = t), (this.to = e), (this.transition = n);
		}
		static interpolate(t, e, n) {
			return new ot(t, e, n);
		}
		static parse(t) {
			return t instanceof ot ? t : Array.isArray(t) && 3 === t.length && 'string' == typeof t[0] && 'string' == typeof t[1] && 'number' == typeof t[2] ? new ot(t[0], t[1], t[2]) : 'object' == typeof t && 'string' == typeof t.from && 'string' == typeof t.to && 'number' == typeof t.transition ? new ot(t.from, t.to, t.transition) : 'string' == typeof t ? new ot(t, t, 1) : void 0;
		}
	}
	function at(t, e, n, i) {
		if (!('number' == typeof t && t >= 0 && t <= 255 && 'number' == typeof e && e >= 0 && e <= 255 && 'number' == typeof n && n >= 0 && n <= 255)) {
			return `Invalid rgba value [${('number' == typeof i ? [t, e, n, i] : [t, e, n]).join(', ')}]: 'r', 'g', and 'b' must be between 0 and 255.`;
		}
		return void 0 === i || ('number' == typeof i && i >= 0 && i <= 1) ? null : `Invalid rgba value [${[t, e, n, i].join(', ')}]: 'a' must be between 0 and 1.`;
	}
	function lt(t) {
		if (null === t || 'string' == typeof t || 'boolean' == typeof t || 'number' == typeof t || t instanceof ot || t instanceof Y || t instanceof H || t instanceof tt || t instanceof et || t instanceof rt || t instanceof st) return !0;
		if (Array.isArray(t)) {
			for (const e of t) if (!lt(e)) return !1;
			return !0;
		}
		if ('object' == typeof t) {
			for (const e in t) if (!lt(t[e])) return !1;
			return !0;
		}
		return !1;
	}
	function ht(t) {
		if (null === t) return a;
		if ('string' == typeof t) return h;
		if ('boolean' == typeof t) return c;
		if ('number' == typeof t) return l;
		if (t instanceof Y) return u;
		if (t instanceof ot) return d;
		if (t instanceof H) return p;
		if (t instanceof tt) return m;
		if (t instanceof et) return _;
		if (t instanceof rt) return x;
		if (t instanceof st) return y;
		if (Array.isArray(t)) {
			const e = t.length;
			let n;
			for (const e of t) {
				const t = ht(e);
				if (n) {
					if (n === t) continue;
					n = f;
					break;
				}
				n = t;
			}
			return v(n || f, e);
		}
		return g;
	}
	function ct(t) {
		const e = typeof t;
		return null === t ? '' : 'string' === e || 'number' === e || 'boolean' === e ? String(t) : t instanceof Y || t instanceof ot || t instanceof tt || t instanceof et || t instanceof rt || t instanceof st ? t.toString() : JSON.stringify(t);
	}
	class ut {
		constructor(t, e) {
			(this.type = t), (this.value = e);
		}
		static parse(t, e) {
			if (2 !== t.length) return e.error(`'literal' expression requires exactly one argument, but found ${t.length - 1} instead.`);
			if (!lt(t[1])) return e.error('invalid value');
			const n = t[1];
			let i = ht(n);
			const r = e.expectedType;
			return 'array' !== i.kind || 0 !== i.N || !r || 'array' !== r.kind || ('number' == typeof r.N && 0 !== r.N) || (i = r), new ut(i, n);
		}
		evaluate() {
			return this.value;
		}
		eachChild() {}
		outputDefined() {
			return !0;
		}
	}
	const dt = { string: h, number: l, boolean: c, object: g };
	class gt {
		constructor(t, e) {
			(this.type = t), (this.args = e);
		}
		static parse(t, e) {
			if (t.length < 2) return e.error('Expected at least one argument.');
			let n,
				i = 1;
			const r = t[0];
			if ('array' === r) {
				let r, s;
				if (t.length > 2) {
					const n = t[1];
					if ('string' != typeof n || !(n in dt) || 'object' === n) return e.error('The item type argument of "array" must be one of string, number, boolean', 1);
					(r = dt[n]), i++;
				} else r = f;
				if (t.length > 3) {
					if (null !== t[2] && ('number' != typeof t[2] || t[2] < 0 || t[2] !== Math.floor(t[2]))) return e.error('The length argument to "array" must be a positive integer literal', 2);
					(s = t[2]), i++;
				}
				n = v(r, s);
			} else {
				if (!dt[r]) throw new Error(`Types doesn't contain name = ${r}`);
				n = dt[r];
			}
			const s = [];
			for (; i < t.length; i++) {
				const n = e.parse(t[i], i, f);
				if (!n) return null;
				s.push(n);
			}
			return new gt(n, s);
		}
		evaluate(t) {
			for (let e = 0; e < this.args.length; e++) {
				const n = this.args[e].evaluate(t);
				if (!S(this.type, ht(n))) return n;
				if (e === this.args.length - 1) throw new nt(`Expected value to be of type ${w(this.type)}, but found ${w(ht(n))} instead.`);
			}
			throw new Error();
		}
		eachChild(t) {
			this.args.forEach(t);
		}
		outputDefined() {
			return this.args.every((t) => t.outputDefined());
		}
	}
	const ft = { 'to-boolean': c, 'to-color': u, 'to-number': l, 'to-string': h };
	class pt {
		constructor(t, e) {
			(this.type = t), (this.args = e);
		}
		static parse(t, e) {
			if (t.length < 2) return e.error('Expected at least one argument.');
			const n = t[0];
			if (!ft[n]) throw new Error(`Can't parse ${n} as it is not part of the known types`);
			if (('to-boolean' === n || 'to-string' === n) && 2 !== t.length) return e.error('Expected one argument.');
			const i = ft[n],
				r = [];
			for (let n = 1; n < t.length; n++) {
				const i = e.parse(t[n], n, f);
				if (!i) return null;
				r.push(i);
			}
			return new pt(i, r);
		}
		evaluate(t) {
			switch (this.type.kind) {
				case 'boolean':
					return Boolean(this.args[0].evaluate(t));
				case 'color': {
					let e, n;
					for (const i of this.args) {
						if (((e = i.evaluate(t)), (n = null), e instanceof Y)) return e;
						if ('string' == typeof e) {
							const n = t.parseColor(e);
							if (n) return n;
						} else if (Array.isArray(e) && ((n = e.length < 3 || e.length > 4 ? `Invalid rgba value ${JSON.stringify(e)}: expected an array containing either three or four numeric values.` : at(e[0], e[1], e[2], e[3])), !n)) return new Y(e[0] / 255, e[1] / 255, e[2] / 255, e[3]);
					}
					throw new nt(n || `Could not parse color from value '${'string' == typeof e ? e : JSON.stringify(e)}'`);
				}
				case 'padding': {
					let e;
					for (const n of this.args) {
						e = n.evaluate(t);
						const i = et.parse(e);
						if (i) return i;
					}
					throw new nt(`Could not parse padding from value '${'string' == typeof e ? e : JSON.stringify(e)}'`);
				}
				case 'variableAnchorOffsetCollection': {
					let e;
					for (const n of this.args) {
						e = n.evaluate(t);
						const i = rt.parse(e);
						if (i) return i;
					}
					throw new nt(`Could not parse variableAnchorOffsetCollection from value '${'string' == typeof e ? e : JSON.stringify(e)}'`);
				}
				case 'number': {
					let e = null;
					for (const n of this.args) {
						if (((e = n.evaluate(t)), null === e)) return 0;
						const i = Number(e);
						if (!isNaN(i)) return i;
					}
					throw new nt(`Could not convert ${JSON.stringify(e)} to number.`);
				}
				case 'formatted':
					return tt.fromString(ct(this.args[0].evaluate(t)));
				case 'resolvedImage':
					return st.fromString(ct(this.args[0].evaluate(t)));
				case 'projectionDefinition':
					return this.args[0].evaluate(t);
				default:
					return ct(this.args[0].evaluate(t));
			}
		}
		eachChild(t) {
			this.args.forEach(t);
		}
		outputDefined() {
			return this.args.every((t) => t.outputDefined());
		}
	}
	const mt = ['Unknown', 'Point', 'LineString', 'Polygon'];
	class _t {
		constructor() {
			(this.globals = null), (this.feature = null), (this.featureState = null), (this.formattedSection = null), (this._parseColorCache = {}), (this.availableImages = null), (this.canonical = null);
		}
		id() {
			return this.feature && 'id' in this.feature ? this.feature.id : null;
		}
		geometryType() {
			return this.feature ? ('number' == typeof this.feature.type ? mt[this.feature.type] : this.feature.type) : null;
		}
		geometry() {
			return this.feature && 'geometry' in this.feature ? this.feature.geometry : null;
		}
		canonicalID() {
			return this.canonical;
		}
		properties() {
			return (this.feature && this.feature.properties) || {};
		}
		parseColor(t) {
			let e = this._parseColorCache[t];
			return e || (e = this._parseColorCache[t] = Y.parse(t)), e;
		}
	}
	class yt {
		constructor(t, e, n = [], i, r = new o(), s = []) {
			(this.registry = t), (this.path = n), (this.key = n.map((t) => `[${t}]`).join('')), (this.scope = r), (this.errors = s), (this.expectedType = i), (this._isConstant = e);
		}
		parse(t, e, n, i, r = {}) {
			return e ? this.concat(e, n, i)._parse(t, r) : this._parse(t, r);
		}
		_parse(t, e) {
			function n(t, e, n) {
				return 'assert' === n ? new gt(e, [t]) : 'coerce' === n ? new pt(e, [t]) : t;
			}
			if (((null !== t && 'string' != typeof t && 'boolean' != typeof t && 'number' != typeof t) || (t = ['literal', t]), Array.isArray(t))) {
				if (0 === t.length) return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].');
				const i = t[0];
				if ('string' != typeof i) return this.error(`Expression name must be a string, but found ${typeof i} instead. If you wanted a literal array, use ["literal", [...]].`, 0), null;
				const r = this.registry[i];
				if (r) {
					let i = r.parse(t, this);
					if (!i) return null;
					if (this.expectedType) {
						const t = this.expectedType,
							r = i.type;
						if (('string' !== t.kind && 'number' !== t.kind && 'boolean' !== t.kind && 'object' !== t.kind && 'array' !== t.kind) || 'value' !== r.kind)
							if ('projectionDefinition' !== t.kind || ('string' !== r.kind && 'array' !== r.kind))
								if (('color' !== t.kind && 'formatted' !== t.kind && 'resolvedImage' !== t.kind) || ('value' !== r.kind && 'string' !== r.kind))
									if ('padding' !== t.kind || ('value' !== r.kind && 'number' !== r.kind && 'array' !== r.kind))
										if ('variableAnchorOffsetCollection' !== t.kind || ('value' !== r.kind && 'array' !== r.kind)) {
											if (this.checkSubtype(t, r)) return null;
										} else i = n(i, t, e.typeAnnotation || 'coerce');
									else i = n(i, t, e.typeAnnotation || 'coerce');
								else i = n(i, t, e.typeAnnotation || 'coerce');
							else i = n(i, t, e.typeAnnotation || 'coerce');
						else i = n(i, t, e.typeAnnotation || 'assert');
					}
					if (!(i instanceof ut) && 'resolvedImage' !== i.type.kind && this._isConstant(i)) {
						const t = new _t();
						try {
							i = new ut(i.type, i.evaluate(t));
						} catch (t) {
							return this.error(t.message), null;
						}
					}
					return i;
				}
				return this.error(`Unknown expression "${i}". If you wanted a literal array, use ["literal", [...]].`, 0);
			}
			return void 0 === t ? this.error("'undefined' value invalid. Use null instead.") : 'object' == typeof t ? this.error('Bare objects invalid. Use ["literal", {...}] instead.') : this.error(`Expected an array, but found ${typeof t} instead.`);
		}
		concat(t, e, n) {
			const i = 'number' == typeof t ? this.path.concat(t) : this.path,
				r = n ? this.scope.concat(n) : this.scope;
			return new yt(this.registry, this._isConstant, i, e || null, r, this.errors);
		}
		error(t, ...e) {
			const n = `${this.key}${e.map((t) => `[${t}]`).join('')}`;
			this.errors.push(new s(n, t));
		}
		checkSubtype(t, e) {
			const n = S(t, e);
			return n && this.error(n), n;
		}
	}
	class xt {
		constructor(t, e) {
			(this.type = e.type), (this.bindings = [].concat(t)), (this.result = e);
		}
		evaluate(t) {
			return this.result.evaluate(t);
		}
		eachChild(t) {
			for (const e of this.bindings) t(e[1]);
			t(this.result);
		}
		static parse(t, e) {
			if (t.length < 4) return e.error(`Expected at least 3 arguments, but found ${t.length - 1} instead.`);
			const n = [];
			for (let i = 1; i < t.length - 1; i += 2) {
				const r = t[i];
				if ('string' != typeof r) return e.error(`Expected string, but found ${typeof r} instead.`, i);
				if (/[^a-zA-Z0-9_]/.test(r)) return e.error("Variable names must contain only alphanumeric characters or '_'.", i);
				const s = e.parse(t[i + 1], i + 1);
				if (!s) return null;
				n.push([r, s]);
			}
			const i = e.parse(t[t.length - 1], t.length - 1, e.expectedType, n);
			return i ? new xt(n, i) : null;
		}
		outputDefined() {
			return this.result.outputDefined();
		}
	}
	class vt {
		constructor(t, e) {
			(this.type = e.type), (this.name = t), (this.boundExpression = e);
		}
		static parse(t, e) {
			if (2 !== t.length || 'string' != typeof t[1]) return e.error("'var' expression requires exactly one string literal argument.");
			const n = t[1];
			return e.scope.has(n) ? new vt(n, e.scope.get(n)) : e.error(`Unknown variable "${n}". Make sure "${n}" has been bound in an enclosing "let" expression before using it.`, 1);
		}
		evaluate(t) {
			return this.boundExpression.evaluate(t);
		}
		eachChild() {}
		outputDefined() {
			return !1;
		}
	}
	class wt {
		constructor(t, e, n) {
			(this.type = t), (this.index = e), (this.input = n);
		}
		static parse(t, e) {
			if (3 !== t.length) return e.error(`Expected 2 arguments, but found ${t.length - 1} instead.`);
			const n = e.parse(t[1], 1, l),
				i = e.parse(t[2], 2, v(e.expectedType || f));
			if (!n || !i) return null;
			const r = i.type;
			return new wt(r.itemType, n, i);
		}
		evaluate(t) {
			const e = this.index.evaluate(t),
				n = this.input.evaluate(t);
			if (e < 0) throw new nt(`Array index out of bounds: ${e} < 0.`);
			if (e >= n.length) throw new nt(`Array index out of bounds: ${e} > ${n.length - 1}.`);
			if (e !== Math.floor(e)) throw new nt(`Array index must be an integer, but found ${e} instead.`);
			return n[e];
		}
		eachChild(t) {
			t(this.index), t(this.input);
		}
		outputDefined() {
			return !1;
		}
	}
	class bt {
		constructor(t, e) {
			(this.type = c), (this.needle = t), (this.haystack = e);
		}
		static parse(t, e) {
			if (3 !== t.length) return e.error(`Expected 2 arguments, but found ${t.length - 1} instead.`);
			const n = e.parse(t[1], 1, f),
				i = e.parse(t[2], 2, f);
			return n && i ? (C(n.type, [c, h, l, a, f]) ? new bt(n, i) : e.error(`Expected first argument to be of type boolean, string, number or null, but found ${w(n.type)} instead`)) : null;
		}
		evaluate(t) {
			const e = this.needle.evaluate(t),
				n = this.haystack.evaluate(t);
			if (!n) return !1;
			if (!E(e, ['boolean', 'string', 'number', 'null'])) throw new nt(`Expected first argument to be of type boolean, string, number or null, but found ${w(ht(e))} instead.`);
			if (!E(n, ['string', 'array'])) throw new nt(`Expected second argument to be of type array or string, but found ${w(ht(n))} instead.`);
			return n.indexOf(e) >= 0;
		}
		eachChild(t) {
			t(this.needle), t(this.haystack);
		}
		outputDefined() {
			return !0;
		}
	}
	class St {
		constructor(t, e, n) {
			(this.type = l), (this.needle = t), (this.haystack = e), (this.fromIndex = n);
		}
		static parse(t, e) {
			if (t.length <= 2 || t.length >= 5) return e.error(`Expected 3 or 4 arguments, but found ${t.length - 1} instead.`);
			const n = e.parse(t[1], 1, f),
				i = e.parse(t[2], 2, f);
			if (!n || !i) return null;
			if (!C(n.type, [c, h, l, a, f])) return e.error(`Expected first argument to be of type boolean, string, number or null, but found ${w(n.type)} instead`);
			if (4 === t.length) {
				const r = e.parse(t[3], 3, l);
				return r ? new St(n, i, r) : null;
			}
			return new St(n, i);
		}
		evaluate(t) {
			const e = this.needle.evaluate(t),
				n = this.haystack.evaluate(t);
			if (!E(e, ['boolean', 'string', 'number', 'null'])) throw new nt(`Expected first argument to be of type boolean, string, number or null, but found ${w(ht(e))} instead.`);
			let i;
			if ((this.fromIndex && (i = this.fromIndex.evaluate(t)), E(n, ['string']))) {
				const t = n.indexOf(e, i);
				return -1 === t ? -1 : [...n.slice(0, t)].length;
			}
			if (E(n, ['array'])) return n.indexOf(e, i);
			throw new nt(`Expected second argument to be of type array or string, but found ${w(ht(n))} instead.`);
		}
		eachChild(t) {
			t(this.needle), t(this.haystack), this.fromIndex && t(this.fromIndex);
		}
		outputDefined() {
			return !1;
		}
	}
	class Ct {
		constructor(t, e, n, i, r, s) {
			(this.inputType = t), (this.type = e), (this.input = n), (this.cases = i), (this.outputs = r), (this.otherwise = s);
		}
		static parse(t, e) {
			if (t.length < 5) return e.error(`Expected at least 4 arguments, but found only ${t.length - 1}.`);
			if (t.length % 2 != 1) return e.error('Expected an even number of arguments.');
			let n, i;
			e.expectedType && 'value' !== e.expectedType.kind && (i = e.expectedType);
			const r = {},
				s = [];
			for (let o = 2; o < t.length - 1; o += 2) {
				let a = t[o];
				const l = t[o + 1];
				Array.isArray(a) || (a = [a]);
				const h = e.concat(o);
				if (0 === a.length) return h.error('Expected at least one branch label.');
				for (const t of a) {
					if ('number' != typeof t && 'string' != typeof t) return h.error('Branch labels must be numbers or strings.');
					if ('number' == typeof t && Math.abs(t) > Number.MAX_SAFE_INTEGER) return h.error(`Branch labels must be integers no larger than ${Number.MAX_SAFE_INTEGER}.`);
					if ('number' == typeof t && Math.floor(t) !== t) return h.error('Numeric branch labels must be integer values.');
					if (n) {
						if (h.checkSubtype(n, ht(t))) return null;
					} else n = ht(t);
					if (void 0 !== r[String(t)]) return h.error('Branch labels must be unique.');
					r[String(t)] = s.length;
				}
				const c = e.parse(l, o, i);
				if (!c) return null;
				(i = i || c.type), s.push(c);
			}
			const o = e.parse(t[1], 1, f);
			if (!o) return null;
			const a = e.parse(t[t.length - 1], t.length - 1, i);
			return a ? ('value' !== o.type.kind && e.concat(1).checkSubtype(n, o.type) ? null : new Ct(n, i, o, r, s, a)) : null;
		}
		evaluate(t) {
			const e = this.input.evaluate(t);
			return ((ht(e) === this.inputType && this.outputs[this.cases[e]]) || this.otherwise).evaluate(t);
		}
		eachChild(t) {
			t(this.input), this.outputs.forEach(t), t(this.otherwise);
		}
		outputDefined() {
			return this.outputs.every((t) => t.outputDefined()) && this.otherwise.outputDefined();
		}
	}
	class Et {
		constructor(t, e, n) {
			(this.type = t), (this.branches = e), (this.otherwise = n);
		}
		static parse(t, e) {
			if (t.length < 4) return e.error(`Expected at least 3 arguments, but found only ${t.length - 1}.`);
			if (t.length % 2 != 0) return e.error('Expected an odd number of arguments.');
			let n;
			e.expectedType && 'value' !== e.expectedType.kind && (n = e.expectedType);
			const i = [];
			for (let r = 1; r < t.length - 1; r += 2) {
				const s = e.parse(t[r], r, c);
				if (!s) return null;
				const o = e.parse(t[r + 1], r + 1, n);
				if (!o) return null;
				i.push([s, o]), (n = n || o.type);
			}
			const r = e.parse(t[t.length - 1], t.length - 1, n);
			if (!r) return null;
			if (!n) throw new Error("Can't infer output type");
			return new Et(n, i, r);
		}
		evaluate(t) {
			for (const [e, n] of this.branches) if (e.evaluate(t)) return n.evaluate(t);
			return this.otherwise.evaluate(t);
		}
		eachChild(t) {
			for (const [e, n] of this.branches) t(e), t(n);
			t(this.otherwise);
		}
		outputDefined() {
			return this.branches.every(([t, e]) => e.outputDefined()) && this.otherwise.outputDefined();
		}
	}
	class Tt {
		constructor(t, e, n, i) {
			(this.type = t), (this.input = e), (this.beginIndex = n), (this.endIndex = i);
		}
		static parse(t, e) {
			if (t.length <= 2 || t.length >= 5) return e.error(`Expected 3 or 4 arguments, but found ${t.length - 1} instead.`);
			const n = e.parse(t[1], 1, f),
				i = e.parse(t[2], 2, l);
			if (!n || !i) return null;
			if (!C(n.type, [v(f), h, f])) return e.error(`Expected first argument to be of type array or string, but found ${w(n.type)} instead`);
			if (4 === t.length) {
				const r = e.parse(t[3], 3, l);
				return r ? new Tt(n.type, n, i, r) : null;
			}
			return new Tt(n.type, n, i);
		}
		evaluate(t) {
			const e = this.input.evaluate(t),
				n = this.beginIndex.evaluate(t);
			let i;
			if ((this.endIndex && (i = this.endIndex.evaluate(t)), E(e, ['string']))) return [...e].slice(n, i).join('');
			if (E(e, ['array'])) return e.slice(n, i);
			throw new nt(`Expected first argument to be of type array or string, but found ${w(ht(e))} instead.`);
		}
		eachChild(t) {
			t(this.input), t(this.beginIndex), this.endIndex && t(this.endIndex);
		}
		outputDefined() {
			return !1;
		}
	}
	function Pt(t, e) {
		const n = t.length - 1;
		let i,
			r,
			s = 0,
			o = n,
			a = 0;
		for (; s <= o; )
			if (((a = Math.floor((s + o) / 2)), (i = t[a]), (r = t[a + 1]), i <= e)) {
				if (a === n || e < r) return a;
				s = a + 1;
			} else {
				if (!(i > e)) throw new nt('Input is not a number.');
				o = a - 1;
			}
		return 0;
	}
	class Rt {
		constructor(t, e, n) {
			(this.type = t), (this.input = e), (this.labels = []), (this.outputs = []);
			for (const [t, e] of n) this.labels.push(t), this.outputs.push(e);
		}
		static parse(t, e) {
			if (t.length - 1 < 4) return e.error(`Expected at least 4 arguments, but found only ${t.length - 1}.`);
			if ((t.length - 1) % 2 != 0) return e.error('Expected an even number of arguments.');
			const n = e.parse(t[1], 1, l);
			if (!n) return null;
			const i = [];
			let r = null;
			e.expectedType && 'value' !== e.expectedType.kind && (r = e.expectedType);
			for (let n = 1; n < t.length; n += 2) {
				const s = 1 === n ? -1 / 0 : t[n],
					o = t[n + 1],
					a = n,
					l = n + 1;
				if ('number' != typeof s) return e.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.', a);
				if (i.length && i[i.length - 1][0] >= s) return e.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.', a);
				const h = e.parse(o, l, r);
				if (!h) return null;
				(r = r || h.type), i.push([s, h]);
			}
			return new Rt(r, n, i);
		}
		evaluate(t) {
			const e = this.labels,
				n = this.outputs;
			if (1 === e.length) return n[0].evaluate(t);
			const i = this.input.evaluate(t);
			if (i <= e[0]) return n[0].evaluate(t);
			const r = e.length;
			if (i >= e[r - 1]) return n[r - 1].evaluate(t);
			return n[Pt(e, i)].evaluate(t);
		}
		eachChild(t) {
			t(this.input);
			for (const e of this.outputs) t(e);
		}
		outputDefined() {
			return this.outputs.every((t) => t.outputDefined());
		}
	}
	function Ft(t) {
		return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
	}
	var Mt, It;
	var kt = (function () {
			if (It) return Mt;
			function t(t, e, n, i) {
				(this.cx = 3 * t), (this.bx = 3 * (n - t) - this.cx), (this.ax = 1 - this.cx - this.bx), (this.cy = 3 * e), (this.by = 3 * (i - e) - this.cy), (this.ay = 1 - this.cy - this.by), (this.p1x = t), (this.p1y = e), (this.p2x = n), (this.p2y = i);
			}
			return (
				(It = 1),
				(Mt = t),
				(t.prototype = {
					sampleCurveX: function (t) {
						return ((this.ax * t + this.bx) * t + this.cx) * t;
					},
					sampleCurveY: function (t) {
						return ((this.ay * t + this.by) * t + this.cy) * t;
					},
					sampleCurveDerivativeX: function (t) {
						return (3 * this.ax * t + 2 * this.bx) * t + this.cx;
					},
					solveCurveX: function (t, e) {
						if ((void 0 === e && (e = 1e-6), t < 0)) return 0;
						if (t > 1) return 1;
						for (var n = t, i = 0; i < 8; i++) {
							var r = this.sampleCurveX(n) - t;
							if (Math.abs(r) < e) return n;
							var s = this.sampleCurveDerivativeX(n);
							if (Math.abs(s) < 1e-6) break;
							n -= r / s;
						}
						var o = 0,
							a = 1;
						for (n = t, i = 0; i < 20 && ((r = this.sampleCurveX(n)), !(Math.abs(r - t) < e)); i++) t > r ? (o = n) : (a = n), (n = 0.5 * (a - o) + o);
						return n;
					},
					solve: function (t, e) {
						return this.sampleCurveY(this.solveCurveX(t, e));
					},
				}),
				Mt
			);
		})(),
		Lt = Ft(kt);
	class At {
		constructor(t, e, n, i, r) {
			(this.type = t), (this.operator = e), (this.interpolation = n), (this.input = i), (this.labels = []), (this.outputs = []);
			for (const [t, e] of r) this.labels.push(t), this.outputs.push(e);
		}
		static interpolationFactor(t, e, n, i) {
			let r = 0;
			if ('exponential' === t.name) r = Dt(e, t.base, n, i);
			else if ('linear' === t.name) r = Dt(e, 1, n, i);
			else if ('cubic-bezier' === t.name) {
				const s = t.controlPoints;
				r = new Lt(s[0], s[1], s[2], s[3]).solve(Dt(e, 1, n, i));
			}
			return r;
		}
		static parse(t, e) {
			let [n, i, r, ...s] = t;
			if (!Array.isArray(i) || 0 === i.length) return e.error('Expected an interpolation type expression.', 1);
			if ('linear' === i[0]) i = { name: 'linear' };
			else if ('exponential' === i[0]) {
				const t = i[1];
				if ('number' != typeof t) return e.error('Exponential interpolation requires a numeric base.', 1, 1);
				i = { name: 'exponential', base: t };
			} else {
				if ('cubic-bezier' !== i[0]) return e.error(`Unknown interpolation type ${String(i[0])}`, 1, 0);
				{
					const t = i.slice(1);
					if (4 !== t.length || t.some((t) => 'number' != typeof t || t < 0 || t > 1)) return e.error('Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.', 1);
					i = { name: 'cubic-bezier', controlPoints: t };
				}
			}
			if (t.length - 1 < 4) return e.error(`Expected at least 4 arguments, but found only ${t.length - 1}.`);
			if ((t.length - 1) % 2 != 0) return e.error('Expected an even number of arguments.');
			if (((r = e.parse(r, 2, l)), !r)) return null;
			const o = [];
			let a = null;
			'interpolate-hcl' === n || 'interpolate-lab' === n ? (a = u) : e.expectedType && 'value' !== e.expectedType.kind && (a = e.expectedType);
			for (let t = 0; t < s.length; t += 2) {
				const n = s[t],
					i = s[t + 1],
					r = t + 3,
					l = t + 4;
				if ('number' != typeof n) return e.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.', r);
				if (o.length && o[o.length - 1][0] >= n) return e.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.', r);
				const h = e.parse(i, l, a);
				if (!h) return null;
				(a = a || h.type), o.push([n, h]);
			}
			return T(a, l) || T(a, d) || T(a, u) || T(a, _) || T(a, x) || T(a, v(l)) ? new At(a, n, i, r, o) : e.error(`Type ${w(a)} is not interpolatable.`);
		}
		evaluate(t) {
			const e = this.labels,
				n = this.outputs;
			if (1 === e.length) return n[0].evaluate(t);
			const i = this.input.evaluate(t);
			if (i <= e[0]) return n[0].evaluate(t);
			const r = e.length;
			if (i >= e[r - 1]) return n[r - 1].evaluate(t);
			const s = Pt(e, i),
				o = e[s],
				a = e[s + 1],
				l = At.interpolationFactor(this.interpolation, i, o, a),
				h = n[s].evaluate(t),
				c = n[s + 1].evaluate(t);
			switch (this.operator) {
				case 'interpolate':
					switch (this.type.kind) {
						case 'number':
							return Z(h, c, l);
						case 'color':
							return Y.interpolate(h, c, l);
						case 'padding':
							return et.interpolate(h, c, l);
						case 'variableAnchorOffsetCollection':
							return rt.interpolate(h, c, l);
						case 'array':
							return K(h, c, l);
						case 'projectionDefinition':
							return ot.interpolate(h, c, l);
					}
				case 'interpolate-hcl':
					return Y.interpolate(h, c, l, 'hcl');
				case 'interpolate-lab':
					return Y.interpolate(h, c, l, 'lab');
			}
		}
		eachChild(t) {
			t(this.input);
			for (const e of this.outputs) t(e);
		}
		outputDefined() {
			return this.outputs.every((t) => t.outputDefined());
		}
	}
	function Dt(t, e, n, i) {
		const r = i - n,
			s = t - n;
		return 0 === r ? 0 : 1 === e ? s / r : (Math.pow(e, s) - 1) / (Math.pow(e, r) - 1);
	}
	class Ot {
		constructor(t, e) {
			(this.type = t), (this.args = e);
		}
		static parse(t, e) {
			if (t.length < 2) return e.error('Expected at least one argument.');
			let n = null;
			const i = e.expectedType;
			i && 'value' !== i.kind && (n = i);
			const r = [];
			for (const i of t.slice(1)) {
				const t = e.parse(i, 1 + r.length, n, void 0, { typeAnnotation: 'omit' });
				if (!t) return null;
				(n = n || t.type), r.push(t);
			}
			if (!n) throw new Error('No output type');
			const s = i && r.some((t) => S(i, t.type));
			return new Ot(s ? f : n, r);
		}
		evaluate(t) {
			let e,
				n = null,
				i = 0;
			for (const r of this.args) if ((i++, (n = r.evaluate(t)), n && n instanceof st && !n.available && (e || (e = n.name), (n = null), i === this.args.length && (n = e)), null !== n)) break;
			return n;
		}
		eachChild(t) {
			this.args.forEach(t);
		}
		outputDefined() {
			return this.args.every((t) => t.outputDefined());
		}
	}
	function zt(t, e) {
		return '==' === t || '!=' === t ? 'boolean' === e.kind || 'string' === e.kind || 'number' === e.kind || 'null' === e.kind || 'value' === e.kind : 'string' === e.kind || 'number' === e.kind || 'value' === e.kind;
	}
	function Gt(t, e, n, i) {
		return 0 === i.compare(e, n);
	}
	function jt(t, e, n) {
		const i = '==' !== t && '!=' !== t;
		return class r {
			constructor(t, e, n) {
				(this.type = c), (this.lhs = t), (this.rhs = e), (this.collator = n), (this.hasUntypedArgument = 'value' === t.type.kind || 'value' === e.type.kind);
			}
			static parse(t, e) {
				if (3 !== t.length && 4 !== t.length) return e.error('Expected two or three arguments.');
				const n = t[0];
				let s = e.parse(t[1], 1, f);
				if (!s) return null;
				if (!zt(n, s.type)) return e.concat(1).error(`"${n}" comparisons are not supported for type '${w(s.type)}'.`);
				let o = e.parse(t[2], 2, f);
				if (!o) return null;
				if (!zt(n, o.type)) return e.concat(2).error(`"${n}" comparisons are not supported for type '${w(o.type)}'.`);
				if (s.type.kind !== o.type.kind && 'value' !== s.type.kind && 'value' !== o.type.kind) return e.error(`Cannot compare types '${w(s.type)}' and '${w(o.type)}'.`);
				i && ('value' === s.type.kind && 'value' !== o.type.kind ? (s = new gt(o.type, [s])) : 'value' !== s.type.kind && 'value' === o.type.kind && (o = new gt(s.type, [o])));
				let a = null;
				if (4 === t.length) {
					if ('string' !== s.type.kind && 'string' !== o.type.kind && 'value' !== s.type.kind && 'value' !== o.type.kind) return e.error('Cannot use collator to compare non-string types.');
					if (((a = e.parse(t[3], 3, p)), !a)) return null;
				}
				return new r(s, o, a);
			}
			evaluate(r) {
				const s = this.lhs.evaluate(r),
					o = this.rhs.evaluate(r);
				if (i && this.hasUntypedArgument) {
					const e = ht(s),
						n = ht(o);
					if (e.kind !== n.kind || ('string' !== e.kind && 'number' !== e.kind)) throw new nt(`Expected arguments for "${t}" to be (string, string) or (number, number), but found (${e.kind}, ${n.kind}) instead.`);
				}
				if (this.collator && !i && this.hasUntypedArgument) {
					const t = ht(s),
						n = ht(o);
					if ('string' !== t.kind || 'string' !== n.kind) return e(r, s, o);
				}
				return this.collator ? n(r, s, o, this.collator.evaluate(r)) : e(r, s, o);
			}
			eachChild(t) {
				t(this.lhs), t(this.rhs), this.collator && t(this.collator);
			}
			outputDefined() {
				return !0;
			}
		};
	}
	const Nt = jt(
			'==',
			function (t, e, n) {
				return e === n;
			},
			Gt
		),
		Ut = jt(
			'!=',
			function (t, e, n) {
				return e !== n;
			},
			function (t, e, n, i) {
				return !Gt(0, e, n, i);
			}
		),
		$t = jt(
			'<',
			function (t, e, n) {
				return e < n;
			},
			function (t, e, n, i) {
				return i.compare(e, n) < 0;
			}
		),
		Bt = jt(
			'>',
			function (t, e, n) {
				return e > n;
			},
			function (t, e, n, i) {
				return i.compare(e, n) > 0;
			}
		),
		Vt = jt(
			'<=',
			function (t, e, n) {
				return e <= n;
			},
			function (t, e, n, i) {
				return i.compare(e, n) <= 0;
			}
		),
		Wt = jt(
			'>=',
			function (t, e, n) {
				return e >= n;
			},
			function (t, e, n, i) {
				return i.compare(e, n) >= 0;
			}
		);
	class Xt {
		constructor(t, e, n) {
			(this.type = p), (this.locale = n), (this.caseSensitive = t), (this.diacriticSensitive = e);
		}
		static parse(t, e) {
			if (2 !== t.length) return e.error('Expected one argument.');
			const n = t[1];
			if ('object' != typeof n || Array.isArray(n)) return e.error('Collator options argument must be an object.');
			const i = e.parse(void 0 !== n['case-sensitive'] && n['case-sensitive'], 1, c);
			if (!i) return null;
			const r = e.parse(void 0 !== n['diacritic-sensitive'] && n['diacritic-sensitive'], 1, c);
			if (!r) return null;
			let s = null;
			return n.locale && ((s = e.parse(n.locale, 1, h)), !s) ? null : new Xt(i, r, s);
		}
		evaluate(t) {
			return new H(this.caseSensitive.evaluate(t), this.diacriticSensitive.evaluate(t), this.locale ? this.locale.evaluate(t) : null);
		}
		eachChild(t) {
			t(this.caseSensitive), t(this.diacriticSensitive), this.locale && t(this.locale);
		}
		outputDefined() {
			return !1;
		}
	}
	class qt {
		constructor(t, e, n, i, r) {
			(this.type = h), (this.number = t), (this.locale = e), (this.currency = n), (this.minFractionDigits = i), (this.maxFractionDigits = r);
		}
		static parse(t, e) {
			if (3 !== t.length) return e.error('Expected two arguments.');
			const n = e.parse(t[1], 1, l);
			if (!n) return null;
			const i = t[2];
			if ('object' != typeof i || Array.isArray(i)) return e.error('NumberFormat options argument must be an object.');
			let r = null;
			if (i.locale && ((r = e.parse(i.locale, 1, h)), !r)) return null;
			let s = null;
			if (i.currency && ((s = e.parse(i.currency, 1, h)), !s)) return null;
			let o = null;
			if (i['min-fraction-digits'] && ((o = e.parse(i['min-fraction-digits'], 1, l)), !o)) return null;
			let a = null;
			return i['max-fraction-digits'] && ((a = e.parse(i['max-fraction-digits'], 1, l)), !a) ? null : new qt(n, r, s, o, a);
		}
		evaluate(t) {
			return new Intl.NumberFormat(this.locale ? this.locale.evaluate(t) : [], { style: this.currency ? 'currency' : 'decimal', currency: this.currency ? this.currency.evaluate(t) : void 0, minimumFractionDigits: this.minFractionDigits ? this.minFractionDigits.evaluate(t) : void 0, maximumFractionDigits: this.maxFractionDigits ? this.maxFractionDigits.evaluate(t) : void 0 }).format(this.number.evaluate(t));
		}
		eachChild(t) {
			t(this.number), this.locale && t(this.locale), this.currency && t(this.currency), this.minFractionDigits && t(this.minFractionDigits), this.maxFractionDigits && t(this.maxFractionDigits);
		}
		outputDefined() {
			return !1;
		}
	}
	class Zt {
		constructor(t) {
			(this.type = m), (this.sections = t);
		}
		static parse(t, e) {
			if (t.length < 2) return e.error('Expected at least one argument.');
			const n = t[1];
			if (!Array.isArray(n) && 'object' == typeof n) return e.error('First argument must be an image or text section.');
			const i = [];
			let r = !1;
			for (let n = 1; n <= t.length - 1; ++n) {
				const s = t[n];
				if (r && 'object' == typeof s && !Array.isArray(s)) {
					r = !1;
					let t = null;
					if (s['font-scale'] && ((t = e.parse(s['font-scale'], 1, l)), !t)) return null;
					let n = null;
					if (s['text-font'] && ((n = e.parse(s['text-font'], 1, v(h))), !n)) return null;
					let o = null;
					if (s['text-color'] && ((o = e.parse(s['text-color'], 1, u)), !o)) return null;
					let a = null;
					if (s['vertical-align']) {
						if ('string' == typeof s['vertical-align'] && !J.includes(s['vertical-align'])) return e.error(`'vertical-align' must be one of: 'bottom', 'center', 'top' but found '${s['vertical-align']}' instead.`);
						if (((a = e.parse(s['vertical-align'], 1, h)), !a)) return null;
					}
					const c = i[i.length - 1];
					(c.scale = t), (c.font = n), (c.textColor = o), (c.verticalAlign = a);
				} else {
					const s = e.parse(t[n], 1, f);
					if (!s) return null;
					const o = s.type.kind;
					if ('string' !== o && 'value' !== o && 'null' !== o && 'resolvedImage' !== o) return e.error("Formatted text type must be 'string', 'value', 'image' or 'null'.");
					(r = !0), i.push({ content: s, scale: null, font: null, textColor: null, verticalAlign: null });
				}
			}
			return new Zt(i);
		}
		evaluate(t) {
			return new tt(
				this.sections.map((e) => {
					const n = e.content.evaluate(t);
					return ht(n) === y ? new Q('', n, null, null, null, e.verticalAlign ? e.verticalAlign.evaluate(t) : null) : new Q(ct(n), null, e.scale ? e.scale.evaluate(t) : null, e.font ? e.font.evaluate(t).join(',') : null, e.textColor ? e.textColor.evaluate(t) : null, e.verticalAlign ? e.verticalAlign.evaluate(t) : null);
				})
			);
		}
		eachChild(t) {
			for (const e of this.sections) t(e.content), e.scale && t(e.scale), e.font && t(e.font), e.textColor && t(e.textColor), e.verticalAlign && t(e.verticalAlign);
		}
		outputDefined() {
			return !1;
		}
	}
	class Kt {
		constructor(t) {
			(this.type = y), (this.input = t);
		}
		static parse(t, e) {
			if (2 !== t.length) return e.error('Expected two arguments.');
			const n = e.parse(t[1], 1, h);
			return n ? new Kt(n) : e.error('No image name provided.');
		}
		evaluate(t) {
			const e = this.input.evaluate(t),
				n = st.fromString(e);
			return n && t.availableImages && (n.available = t.availableImages.indexOf(e) > -1), n;
		}
		eachChild(t) {
			t(this.input);
		}
		outputDefined() {
			return !1;
		}
	}
	class Yt {
		constructor(t) {
			(this.type = l), (this.input = t);
		}
		static parse(t, e) {
			if (2 !== t.length) return e.error(`Expected 1 argument, but found ${t.length - 1} instead.`);
			const n = e.parse(t[1], 1);
			return n ? ('array' !== n.type.kind && 'string' !== n.type.kind && 'value' !== n.type.kind ? e.error(`Expected argument of type string or array, but found ${w(n.type)} instead.`) : new Yt(n)) : null;
		}
		evaluate(t) {
			const e = this.input.evaluate(t);
			if ('string' == typeof e) return [...e].length;
			if (Array.isArray(e)) return e.length;
			throw new nt(`Expected value to be of type string or array, but found ${w(ht(e))} instead.`);
		}
		eachChild(t) {
			t(this.input);
		}
		outputDefined() {
			return !1;
		}
	}
	const Ht = 8192;
	function Jt(t, e) {
		const n = (180 + t[0]) / 360;
		const i = ((r = t[1]), (180 - (180 / Math.PI) * Math.log(Math.tan(Math.PI / 4 + (r * Math.PI) / 360))) / 360);
		var r;
		const s = Math.pow(2, e.z);
		return [Math.round(n * s * Ht), Math.round(i * s * Ht)];
	}
	function Qt(t, e) {
		const n = Math.pow(2, e.z),
			i = (t[0] / Ht + e.x) / n,
			r = (t[1] / Ht + e.y) / n;
		return [((o = i), 360 * o - 180), ((s = r), (360 / Math.PI) * Math.atan(Math.exp(((180 - 360 * s) * Math.PI) / 180)) - 90)];
		var s, o;
	}
	function te(t, e) {
		(t[0] = Math.min(t[0], e[0])), (t[1] = Math.min(t[1], e[1])), (t[2] = Math.max(t[2], e[0])), (t[3] = Math.max(t[3], e[1]));
	}
	function ee(t, e) {
		return !(t[0] <= e[0]) && !(t[2] >= e[2]) && !(t[1] <= e[1]) && !(t[3] >= e[3]);
	}
	function ne(t, e, n) {
		return e[1] > t[1] != n[1] > t[1] && t[0] < ((n[0] - e[0]) * (t[1] - e[1])) / (n[1] - e[1]) + e[0];
	}
	function ie(t, e, n) {
		const i = t[0] - e[0],
			r = t[1] - e[1],
			s = t[0] - n[0],
			o = t[1] - n[1];
		return i * o - s * r == 0 && i * s <= 0 && r * o <= 0;
	}
	function re(t, e, n, i) {
		const r = [e[0] - t[0], e[1] - t[1]],
			s = [i[0] - n[0], i[1] - n[1]];
		return 0 != (o = s)[0] * (a = r)[1] - o[1] * a[0] && !(!ce(t, e, n, i) || !ce(n, i, t, e));
		var o, a;
	}
	function se(t, e, n) {
		for (const i of n) for (let n = 0; n < i.length - 1; ++n) if (re(t, e, i[n], i[n + 1])) return !0;
		return !1;
	}
	function oe(t, e, n = !1) {
		let i = !1;
		for (const r of e)
			for (let e = 0; e < r.length - 1; e++) {
				if (ie(t, r[e], r[e + 1])) return n;
				ne(t, r[e], r[e + 1]) && (i = !i);
			}
		return i;
	}
	function ae(t, e) {
		for (const n of e) if (oe(t, n)) return !0;
		return !1;
	}
	function le(t, e) {
		for (const n of t) if (!oe(n, e)) return !1;
		for (let n = 0; n < t.length - 1; ++n) if (se(t[n], t[n + 1], e)) return !1;
		return !0;
	}
	function he(t, e) {
		for (const n of e) if (le(t, n)) return !0;
		return !1;
	}
	function ce(t, e, n, i) {
		const r = t[0] - n[0],
			s = t[1] - n[1],
			o = e[0] - n[0],
			a = e[1] - n[1],
			l = i[0] - n[0],
			h = i[1] - n[1],
			c = r * h - l * s,
			u = o * h - l * a;
		return (c > 0 && u < 0) || (c < 0 && u > 0);
	}
	function ue(t, e, n) {
		const i = [];
		for (let r = 0; r < t.length; r++) {
			const s = [];
			for (let i = 0; i < t[r].length; i++) {
				const o = Jt(t[r][i], n);
				te(e, o), s.push(o);
			}
			i.push(s);
		}
		return i;
	}
	function de(t, e, n) {
		const i = [];
		for (let r = 0; r < t.length; r++) {
			const s = ue(t[r], e, n);
			i.push(s);
		}
		return i;
	}
	function ge(t, e, n, i) {
		if (t[0] < n[0] || t[0] > n[2]) {
			const e = 0.5 * i;
			let r = t[0] - n[0] > e ? -i : n[0] - t[0] > e ? i : 0;
			0 === r && (r = t[0] - n[2] > e ? -i : n[2] - t[0] > e ? i : 0), (t[0] += r);
		}
		te(e, t);
	}
	function fe(t, e, n, i) {
		const r = Math.pow(2, i.z) * Ht,
			s = [i.x * Ht, i.y * Ht],
			o = [];
		for (const i of t)
			for (const t of i) {
				const i = [t.x + s[0], t.y + s[1]];
				ge(i, e, n, r), o.push(i);
			}
		return o;
	}
	function pe(t, e, n, i) {
		const r = Math.pow(2, i.z) * Ht,
			s = [i.x * Ht, i.y * Ht],
			o = [];
		for (const n of t) {
			const t = [];
			for (const i of n) {
				const n = [i.x + s[0], i.y + s[1]];
				te(e, n), t.push(n);
			}
			o.push(t);
		}
		if (e[2] - e[0] <= r / 2) {
			!(function (t) {
				(t[0] = t[1] = 1 / 0), (t[2] = t[3] = -1 / 0);
			})(e);
			for (const t of o) for (const i of t) ge(i, e, n, r);
		}
		return o;
	}
	class me {
		constructor(t, e) {
			(this.type = c), (this.geojson = t), (this.geometries = e);
		}
		static parse(t, e) {
			if (2 !== t.length) return e.error(`'within' expression requires exactly one argument, but found ${t.length - 1} instead.`);
			if (lt(t[1])) {
				const e = t[1];
				if ('FeatureCollection' === e.type) {
					const t = [];
					for (const n of e.features) {
						const { type: e, coordinates: i } = n.geometry;
						'Polygon' === e && t.push(i), 'MultiPolygon' === e && t.push(...i);
					}
					if (t.length) {
						return new me(e, { type: 'MultiPolygon', coordinates: t });
					}
				} else if ('Feature' === e.type) {
					const t = e.geometry.type;
					if ('Polygon' === t || 'MultiPolygon' === t) return new me(e, e.geometry);
				} else if ('Polygon' === e.type || 'MultiPolygon' === e.type) return new me(e, e);
			}
			return e.error("'within' expression requires valid geojson object that contains polygon geometry type.");
		}
		evaluate(t) {
			if (null != t.geometry() && null != t.canonicalID()) {
				if ('Point' === t.geometryType())
					return (function (t, e) {
						const n = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
							i = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
							r = t.canonicalID();
						if ('Polygon' === e.type) {
							const s = ue(e.coordinates, i, r),
								o = fe(t.geometry(), n, i, r);
							if (!ee(n, i)) return !1;
							for (const t of o) if (!oe(t, s)) return !1;
						}
						if ('MultiPolygon' === e.type) {
							const s = de(e.coordinates, i, r),
								o = fe(t.geometry(), n, i, r);
							if (!ee(n, i)) return !1;
							for (const t of o) if (!ae(t, s)) return !1;
						}
						return !0;
					})(t, this.geometries);
				if ('LineString' === t.geometryType())
					return (function (t, e) {
						const n = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
							i = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
							r = t.canonicalID();
						if ('Polygon' === e.type) {
							const s = ue(e.coordinates, i, r),
								o = pe(t.geometry(), n, i, r);
							if (!ee(n, i)) return !1;
							for (const t of o) if (!le(t, s)) return !1;
						}
						if ('MultiPolygon' === e.type) {
							const s = de(e.coordinates, i, r),
								o = pe(t.geometry(), n, i, r);
							if (!ee(n, i)) return !1;
							for (const t of o) if (!he(t, s)) return !1;
						}
						return !0;
					})(t, this.geometries);
			}
			return !1;
		}
		eachChild() {}
		outputDefined() {
			return !0;
		}
	}
	class _e {
		constructor(t = [], e = (t, e) => (t < e ? -1 : t > e ? 1 : 0)) {
			if (((this.data = t), (this.length = this.data.length), (this.compare = e), this.length > 0)) for (let t = (this.length >> 1) - 1; t >= 0; t--) this._down(t);
		}
		push(t) {
			this.data.push(t), this._up(this.length++);
		}
		pop() {
			if (0 === this.length) return;
			const t = this.data[0],
				e = this.data.pop();
			return --this.length > 0 && ((this.data[0] = e), this._down(0)), t;
		}
		peek() {
			return this.data[0];
		}
		_up(t) {
			const { data: e, compare: n } = this,
				i = e[t];
			for (; t > 0; ) {
				const r = (t - 1) >> 1,
					s = e[r];
				if (n(i, s) >= 0) break;
				(e[t] = s), (t = r);
			}
			e[t] = i;
		}
		_down(t) {
			const { data: e, compare: n } = this,
				i = this.length >> 1,
				r = e[t];
			for (; t < i; ) {
				let i = 1 + (t << 1);
				const s = i + 1;
				if ((s < this.length && n(e[s], e[i]) < 0 && (i = s), n(e[i], r) >= 0)) break;
				(e[t] = e[i]), (t = i);
			}
			e[t] = r;
		}
	}
	function ye(t) {
		let e = 0;
		for (let n, i, r = 0, s = t.length, o = s - 1; r < s; o = r++) (n = t[r]), (i = t[o]), (e += (i.x - n.x) * (n.y + i.y));
		return e;
	}
	const xe = 1 / 298.257223563,
		ve = xe * (2 - xe),
		we = Math.PI / 180;
	class be {
		constructor(t) {
			const e = 6378.137 * we * 1e3,
				n = Math.cos(t * we),
				i = 1 / (1 - ve * (1 - n * n)),
				r = Math.sqrt(i);
			(this.kx = e * r * n), (this.ky = e * r * i * (1 - ve));
		}
		distance(t, e) {
			const n = this.wrap(t[0] - e[0]) * this.kx,
				i = (t[1] - e[1]) * this.ky;
			return Math.sqrt(n * n + i * i);
		}
		pointOnLine(t, e) {
			let n,
				i,
				r,
				s,
				o = 1 / 0;
			for (let a = 0; a < t.length - 1; a++) {
				let l = t[a][0],
					h = t[a][1],
					c = this.wrap(t[a + 1][0] - l) * this.kx,
					u = (t[a + 1][1] - h) * this.ky,
					d = 0;
				(0 === c && 0 === u) || ((d = (this.wrap(e[0] - l) * this.kx * c + (e[1] - h) * this.ky * u) / (c * c + u * u)), d > 1 ? ((l = t[a + 1][0]), (h = t[a + 1][1])) : d > 0 && ((l += (c / this.kx) * d), (h += (u / this.ky) * d))), (c = this.wrap(e[0] - l) * this.kx), (u = (e[1] - h) * this.ky);
				const g = c * c + u * u;
				g < o && ((o = g), (n = l), (i = h), (r = a), (s = d));
			}
			return { point: [n, i], index: r, t: Math.max(0, Math.min(1, s)) };
		}
		wrap(t) {
			for (; t < -180; ) t += 360;
			for (; t > 180; ) t -= 360;
			return t;
		}
	}
	function Se(t, e) {
		return e[0] - t[0];
	}
	function Ce(t) {
		return t[1] - t[0] + 1;
	}
	function Ee(t, e) {
		return t[1] >= t[0] && t[1] < e;
	}
	function Te(t, e) {
		if (t[0] > t[1]) return [null, null];
		const n = Ce(t);
		if (e) {
			if (2 === n) return [t, null];
			const e = Math.floor(n / 2);
			return [
				[t[0], t[0] + e],
				[t[0] + e, t[1]],
			];
		}
		if (1 === n) return [t, null];
		const i = Math.floor(n / 2) - 1;
		return [
			[t[0], t[0] + i],
			[t[0] + i + 1, t[1]],
		];
	}
	function Pe(t, e) {
		if (!Ee(e, t.length)) return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
		const n = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
		for (let i = e[0]; i <= e[1]; ++i) te(n, t[i]);
		return n;
	}
	function Re(t) {
		const e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
		for (const n of t) for (const t of n) te(e, t);
		return e;
	}
	function Fe(t) {
		return t[0] !== -1 / 0 && t[1] !== -1 / 0 && t[2] !== 1 / 0 && t[3] !== 1 / 0;
	}
	function Me(t, e, n) {
		if (!Fe(t) || !Fe(e)) return NaN;
		let i = 0,
			r = 0;
		return t[2] < e[0] && (i = e[0] - t[2]), t[0] > e[2] && (i = t[0] - e[2]), t[1] > e[3] && (r = t[1] - e[3]), t[3] < e[1] && (r = e[1] - t[3]), n.distance([0, 0], [i, r]);
	}
	function Ie(t, e, n) {
		const i = n.pointOnLine(e, t);
		return n.distance(t, i.point);
	}
	function ke(t, e, n, i, r) {
		const s = Math.min(Ie(t, [n, i], r), Ie(e, [n, i], r)),
			o = Math.min(Ie(n, [t, e], r), Ie(i, [t, e], r));
		return Math.min(s, o);
	}
	function Le(t, e, n, i, r) {
		if (!(Ee(e, t.length) && Ee(i, n.length))) return 1 / 0;
		let s = 1 / 0;
		for (let o = e[0]; o < e[1]; ++o) {
			const e = t[o],
				a = t[o + 1];
			for (let t = i[0]; t < i[1]; ++t) {
				const i = n[t],
					o = n[t + 1];
				if (re(e, a, i, o)) return 0;
				s = Math.min(s, ke(e, a, i, o, r));
			}
		}
		return s;
	}
	function Ae(t, e, n, i, r) {
		if (!(Ee(e, t.length) && Ee(i, n.length))) return NaN;
		let s = 1 / 0;
		for (let o = e[0]; o <= e[1]; ++o) for (let e = i[0]; e <= i[1]; ++e) if (((s = Math.min(s, r.distance(t[o], n[e]))), 0 === s)) return s;
		return s;
	}
	function De(t, e, n) {
		if (oe(t, e, !0)) return 0;
		let i = 1 / 0;
		for (const r of e) {
			const e = r[0],
				s = r[r.length - 1];
			if (e !== s && ((i = Math.min(i, Ie(t, [s, e], n))), 0 === i)) return i;
			const o = n.pointOnLine(r, t);
			if (((i = Math.min(i, n.distance(t, o.point))), 0 === i)) return i;
		}
		return i;
	}
	function Oe(t, e, n, i) {
		if (!Ee(e, t.length)) return NaN;
		for (let i = e[0]; i <= e[1]; ++i) if (oe(t[i], n, !0)) return 0;
		let r = 1 / 0;
		for (let s = e[0]; s < e[1]; ++s) {
			const e = t[s],
				o = t[s + 1];
			for (const t of n)
				for (let n = 0, s = t.length, a = s - 1; n < s; a = n++) {
					const s = t[a],
						l = t[n];
					if (re(e, o, s, l)) return 0;
					r = Math.min(r, ke(e, o, s, l, i));
				}
		}
		return r;
	}
	function ze(t, e) {
		for (const n of t) for (const t of n) if (oe(t, e, !0)) return !0;
		return !1;
	}
	function Ge(t, e, n, i = 1 / 0) {
		const r = Re(t),
			s = Re(e);
		if (i !== 1 / 0 && Me(r, s, n) >= i) return i;
		if (ee(r, s)) {
			if (ze(t, e)) return 0;
		} else if (ze(e, t)) return 0;
		let o = 1 / 0;
		for (const i of t)
			for (let t = 0, r = i.length, s = r - 1; t < r; s = t++) {
				const r = i[s],
					a = i[t];
				for (const t of e)
					for (let e = 0, i = t.length, s = i - 1; e < i; s = e++) {
						const i = t[s],
							l = t[e];
						if (re(r, a, i, l)) return 0;
						o = Math.min(o, ke(r, a, i, l, n));
					}
			}
		return o;
	}
	function je(t, e, n, i, r, s) {
		if (!s) return;
		const o = Me(Pe(i, s), r, n);
		o < e && t.push([o, s, [0, 0]]);
	}
	function Ne(t, e, n, i, r, s, o) {
		if (!s || !o) return;
		const a = Me(Pe(i, s), Pe(r, o), n);
		a < e && t.push([a, s, o]);
	}
	function Ue(t, e, n, i, r = 1 / 0) {
		let s = Math.min(i.distance(t[0], n[0][0]), r);
		if (0 === s) return s;
		const o = new _e([[0, [0, t.length - 1], [0, 0]]], Se),
			a = Re(n);
		for (; o.length > 0; ) {
			const r = o.pop();
			if (r[0] >= s) continue;
			const l = r[1],
				h = e ? 50 : 100;
			if (Ce(l) <= h) {
				if (!Ee(l, t.length)) return NaN;
				if (e) {
					const e = Oe(t, l, n, i);
					if (isNaN(e) || 0 === e) return e;
					s = Math.min(s, e);
				} else
					for (let e = l[0]; e <= l[1]; ++e) {
						const r = De(t[e], n, i);
						if (((s = Math.min(s, r)), 0 === s)) return 0;
					}
			} else {
				const n = Te(l, e);
				je(o, s, i, t, a, n[0]), je(o, s, i, t, a, n[1]);
			}
		}
		return s;
	}
	function $e(t, e, n, i, r, s = 1 / 0) {
		let o = Math.min(s, r.distance(t[0], n[0]));
		if (0 === o) return o;
		const a = new _e([[0, [0, t.length - 1], [0, n.length - 1]]], Se);
		for (; a.length > 0; ) {
			const s = a.pop();
			if (s[0] >= o) continue;
			const l = s[1],
				h = s[2],
				c = e ? 50 : 100,
				u = i ? 50 : 100;
			if (Ce(l) <= c && Ce(h) <= u) {
				if (!Ee(l, t.length) && Ee(h, n.length)) return NaN;
				let s;
				if (e && i) (s = Le(t, l, n, h, r)), (o = Math.min(o, s));
				else if (e && !i) {
					const e = t.slice(l[0], l[1] + 1);
					for (let t = h[0]; t <= h[1]; ++t) if (((s = Ie(n[t], e, r)), (o = Math.min(o, s)), 0 === o)) return o;
				} else if (!e && i) {
					const e = n.slice(h[0], h[1] + 1);
					for (let n = l[0]; n <= l[1]; ++n) if (((s = Ie(t[n], e, r)), (o = Math.min(o, s)), 0 === o)) return o;
				} else (s = Ae(t, l, n, h, r)), (o = Math.min(o, s));
			} else {
				const s = Te(l, e),
					c = Te(h, i);
				Ne(a, o, r, t, n, s[0], c[0]), Ne(a, o, r, t, n, s[0], c[1]), Ne(a, o, r, t, n, s[1], c[0]), Ne(a, o, r, t, n, s[1], c[1]);
			}
		}
		return o;
	}
	function Be(t, e) {
		const n = t.geometry();
		if (0 === n.length || 0 === n[0].length) return NaN;
		const i = (function (t) {
				if (t.length <= 1) return [t];
				const e = [];
				let n, i;
				for (const r of t) {
					const t = ye(r);
					0 !== t && ((r.area = Math.abs(t)), void 0 === i && (i = t < 0), i === t < 0 ? (n && e.push(n), (n = [r])) : n.push(r));
				}
				return n && e.push(n), e;
			})(n).map((e) => e.map((e) => e.map((e) => Qt([e.x, e.y], t.canonical)))),
			r = new be(i[0][0][0][1]);
		let s = 1 / 0;
		for (const t of e)
			for (const e of i) {
				switch (t.type) {
					case 'Point':
						s = Math.min(s, Ue([t.coordinates], !1, e, r, s));
						break;
					case 'LineString':
						s = Math.min(s, Ue(t.coordinates, !0, e, r, s));
						break;
					case 'Polygon':
						s = Math.min(s, Ge(e, t.coordinates, r, s));
				}
				if (0 === s) return s;
			}
		return s;
	}
	function Ve(t) {
		return 'MultiPolygon' === t.type ? t.coordinates.map((t) => ({ type: 'Polygon', coordinates: t })) : 'MultiLineString' === t.type ? t.coordinates.map((t) => ({ type: 'LineString', coordinates: t })) : 'MultiPoint' === t.type ? t.coordinates.map((t) => ({ type: 'Point', coordinates: t })) : [t];
	}
	class We {
		constructor(t, e) {
			(this.type = l), (this.geojson = t), (this.geometries = e);
		}
		static parse(t, e) {
			if (2 !== t.length) return e.error(`'distance' expression requires exactly one argument, but found ${t.length - 1} instead.`);
			if (lt(t[1])) {
				const e = t[1];
				if ('FeatureCollection' === e.type) return new We(e, e.features.map((t) => Ve(t.geometry)).flat());
				if ('Feature' === e.type) return new We(e, Ve(e.geometry));
				if ('type' in e && 'coordinates' in e) return new We(e, Ve(e));
			}
			return e.error("'distance' expression requires valid geojson object that contains polygon geometry type.");
		}
		evaluate(t) {
			if (null != t.geometry() && null != t.canonicalID()) {
				if ('Point' === t.geometryType())
					return (function (t, e) {
						const n = t.geometry(),
							i = n.flat().map((e) => Qt([e.x, e.y], t.canonical));
						if (0 === n.length) return NaN;
						const r = new be(i[0][1]);
						let s = 1 / 0;
						for (const t of e) {
							switch (t.type) {
								case 'Point':
									s = Math.min(s, $e(i, !1, [t.coordinates], !1, r, s));
									break;
								case 'LineString':
									s = Math.min(s, $e(i, !1, t.coordinates, !0, r, s));
									break;
								case 'Polygon':
									s = Math.min(s, Ue(i, !1, t.coordinates, r, s));
							}
							if (0 === s) return s;
						}
						return s;
					})(t, this.geometries);
				if ('LineString' === t.geometryType())
					return (function (t, e) {
						const n = t.geometry(),
							i = n.flat().map((e) => Qt([e.x, e.y], t.canonical));
						if (0 === n.length) return NaN;
						const r = new be(i[0][1]);
						let s = 1 / 0;
						for (const t of e) {
							switch (t.type) {
								case 'Point':
									s = Math.min(s, $e(i, !0, [t.coordinates], !1, r, s));
									break;
								case 'LineString':
									s = Math.min(s, $e(i, !0, t.coordinates, !0, r, s));
									break;
								case 'Polygon':
									s = Math.min(s, Ue(i, !0, t.coordinates, r, s));
							}
							if (0 === s) return s;
						}
						return s;
					})(t, this.geometries);
				if ('Polygon' === t.geometryType()) return Be(t, this.geometries);
			}
			return NaN;
		}
		eachChild() {}
		outputDefined() {
			return !0;
		}
	}
	const Xe = { '==': Nt, '!=': Ut, '>': Bt, '<': $t, '>=': Wt, '<=': Vt, array: gt, at: wt, boolean: gt, case: Et, coalesce: Ot, collator: Xt, format: Zt, image: Kt, in: bt, 'index-of': St, interpolate: At, 'interpolate-hcl': At, 'interpolate-lab': At, length: Yt, let: xt, literal: ut, match: Ct, number: gt, 'number-format': qt, object: gt, slice: Tt, step: Rt, string: gt, 'to-boolean': pt, 'to-color': pt, 'to-number': pt, 'to-string': pt, var: vt, within: me, distance: We };
	class qe {
		constructor(t, e, n, i) {
			(this.name = t), (this.type = e), (this._evaluate = n), (this.args = i);
		}
		evaluate(t) {
			return this._evaluate(t, this.args);
		}
		eachChild(t) {
			this.args.forEach(t);
		}
		outputDefined() {
			return !1;
		}
		static parse(t, e) {
			const n = t[0],
				i = qe.definitions[n];
			if (!i) return e.error(`Unknown expression "${n}". If you wanted a literal array, use ["literal", [...]].`, 0);
			const r = Array.isArray(i) ? i[0] : i.type,
				s = Array.isArray(i) ? [[i[1], i[2]]] : i.overloads,
				o = s.filter(([e]) => !Array.isArray(e) || e.length === t.length - 1);
			let a = null;
			for (const [i, s] of o) {
				a = new yt(e.registry, Je, e.path, null, e.scope);
				const o = [];
				let l = !1;
				for (let e = 1; e < t.length; e++) {
					const n = t[e],
						r = Array.isArray(i) ? i[e - 1] : i.type,
						s = a.parse(n, 1 + o.length, r);
					if (!s) {
						l = !0;
						break;
					}
					o.push(s);
				}
				if (!l)
					if (Array.isArray(i) && i.length !== o.length) a.error(`Expected ${i.length} arguments, but found ${o.length} instead.`);
					else {
						for (let t = 0; t < o.length; t++) {
							const e = Array.isArray(i) ? i[t] : i.type,
								n = o[t];
							a.concat(t + 1).checkSubtype(e, n.type);
						}
						if (0 === a.errors.length) return new qe(n, r, s, o);
					}
			}
			if (1 === o.length) e.errors.push(...a.errors);
			else {
				const n = (o.length ? o : s)
						.map(([t]) => {
							return (e = t), Array.isArray(e) ? `(${e.map(w).join(', ')})` : `(${w(e.type)}...)`;
							var e;
						})
						.join(' | '),
					i = [];
				for (let n = 1; n < t.length; n++) {
					const r = e.parse(t[n], 1 + i.length);
					if (!r) return null;
					i.push(w(r.type));
				}
				e.error(`Expected arguments of type ${n}, but found (${i.join(', ')}) instead.`);
			}
			return null;
		}
		static register(t, e) {
			qe.definitions = e;
			for (const n in e) t[n] = qe;
		}
	}
	function Ze(t, [e, n, i, r]) {
		(e = e.evaluate(t)), (n = n.evaluate(t)), (i = i.evaluate(t));
		const s = r ? r.evaluate(t) : 1,
			o = at(e, n, i, s);
		if (o) throw new nt(o);
		return new Y(e / 255, n / 255, i / 255, s, !1);
	}
	function Ke(t, e) {
		return t in e;
	}
	function Ye(t, e) {
		const n = e[t];
		return void 0 === n ? null : n;
	}
	function He(t) {
		return { type: t };
	}
	function Je(t) {
		if (t instanceof vt) return Je(t.boundExpression);
		if (t instanceof qe && 'error' === t.name) return !1;
		if (t instanceof Xt) return !1;
		if (t instanceof me) return !1;
		if (t instanceof We) return !1;
		const e = t instanceof pt || t instanceof gt;
		let n = !0;
		return (
			t.eachChild((t) => {
				n = e ? n && Je(t) : n && t instanceof ut;
			}),
			!!n && Qe(t) && en(t, ['zoom', 'heatmap-density', 'line-progress', 'accumulated', 'is-supported-script'])
		);
	}
	function Qe(t) {
		if (t instanceof qe) {
			if ('get' === t.name && 1 === t.args.length) return !1;
			if ('feature-state' === t.name) return !1;
			if ('has' === t.name && 1 === t.args.length) return !1;
			if ('properties' === t.name || 'geometry-type' === t.name || 'id' === t.name) return !1;
			if (/^filter-/.test(t.name)) return !1;
		}
		if (t instanceof me) return !1;
		if (t instanceof We) return !1;
		let e = !0;
		return (
			t.eachChild((t) => {
				e && !Qe(t) && (e = !1);
			}),
			e
		);
	}
	function tn(t) {
		if (t instanceof qe && 'feature-state' === t.name) return !1;
		let e = !0;
		return (
			t.eachChild((t) => {
				e && !tn(t) && (e = !1);
			}),
			e
		);
	}
	function en(t, e) {
		if (t instanceof qe && e.indexOf(t.name) >= 0) return !1;
		let n = !0;
		return (
			t.eachChild((t) => {
				n && !en(t, e) && (n = !1);
			}),
			n
		);
	}
	function nn(t) {
		return { result: 'success', value: t };
	}
	function rn(t) {
		return { result: 'error', value: t };
	}
	function sn(t) {
		return 'object' == typeof t && null !== t && !Array.isArray(t);
	}
	qe.register(Xe, {
		error: [
			{ kind: 'error' },
			[h],
			(t, [e]) => {
				throw new nt(e.evaluate(t));
			},
		],
		typeof: [h, [f], (t, [e]) => w(ht(e.evaluate(t)))],
		'to-rgba': [
			v(l, 4),
			[u],
			(t, [e]) => {
				const [n, i, r, s] = e.evaluate(t).rgb;
				return [255 * n, 255 * i, 255 * r, s];
			},
		],
		rgb: [u, [l, l, l], Ze],
		rgba: [u, [l, l, l, l], Ze],
		has: {
			type: c,
			overloads: [
				[[h], (t, [e]) => Ke(e.evaluate(t), t.properties())],
				[[h, g], (t, [e, n]) => Ke(e.evaluate(t), n.evaluate(t))],
			],
		},
		get: {
			type: f,
			overloads: [
				[[h], (t, [e]) => Ye(e.evaluate(t), t.properties())],
				[[h, g], (t, [e, n]) => Ye(e.evaluate(t), n.evaluate(t))],
			],
		},
		'feature-state': [f, [h], (t, [e]) => Ye(e.evaluate(t), t.featureState || {})],
		properties: [g, [], (t) => t.properties()],
		'geometry-type': [h, [], (t) => t.geometryType()],
		id: [f, [], (t) => t.id()],
		zoom: [l, [], (t) => t.globals.zoom],
		'heatmap-density': [l, [], (t) => t.globals.heatmapDensity || 0],
		'line-progress': [l, [], (t) => t.globals.lineProgress || 0],
		accumulated: [f, [], (t) => (void 0 === t.globals.accumulated ? null : t.globals.accumulated)],
		'+': [
			l,
			He(l),
			(t, e) => {
				let n = 0;
				for (const i of e) n += i.evaluate(t);
				return n;
			},
		],
		'*': [
			l,
			He(l),
			(t, e) => {
				let n = 1;
				for (const i of e) n *= i.evaluate(t);
				return n;
			},
		],
		'-': {
			type: l,
			overloads: [
				[[l, l], (t, [e, n]) => e.evaluate(t) - n.evaluate(t)],
				[[l], (t, [e]) => -e.evaluate(t)],
			],
		},
		'/': [l, [l, l], (t, [e, n]) => e.evaluate(t) / n.evaluate(t)],
		'%': [l, [l, l], (t, [e, n]) => e.evaluate(t) % n.evaluate(t)],
		ln2: [l, [], () => Math.LN2],
		pi: [l, [], () => Math.PI],
		e: [l, [], () => Math.E],
		'^': [l, [l, l], (t, [e, n]) => Math.pow(e.evaluate(t), n.evaluate(t))],
		sqrt: [l, [l], (t, [e]) => Math.sqrt(e.evaluate(t))],
		log10: [l, [l], (t, [e]) => Math.log(e.evaluate(t)) / Math.LN10],
		ln: [l, [l], (t, [e]) => Math.log(e.evaluate(t))],
		log2: [l, [l], (t, [e]) => Math.log(e.evaluate(t)) / Math.LN2],
		sin: [l, [l], (t, [e]) => Math.sin(e.evaluate(t))],
		cos: [l, [l], (t, [e]) => Math.cos(e.evaluate(t))],
		tan: [l, [l], (t, [e]) => Math.tan(e.evaluate(t))],
		asin: [l, [l], (t, [e]) => Math.asin(e.evaluate(t))],
		acos: [l, [l], (t, [e]) => Math.acos(e.evaluate(t))],
		atan: [l, [l], (t, [e]) => Math.atan(e.evaluate(t))],
		min: [l, He(l), (t, e) => Math.min(...e.map((e) => e.evaluate(t)))],
		max: [l, He(l), (t, e) => Math.max(...e.map((e) => e.evaluate(t)))],
		abs: [l, [l], (t, [e]) => Math.abs(e.evaluate(t))],
		round: [
			l,
			[l],
			(t, [e]) => {
				const n = e.evaluate(t);
				return n < 0 ? -Math.round(-n) : Math.round(n);
			},
		],
		floor: [l, [l], (t, [e]) => Math.floor(e.evaluate(t))],
		ceil: [l, [l], (t, [e]) => Math.ceil(e.evaluate(t))],
		'filter-==': [c, [h, f], (t, [e, n]) => t.properties()[e.value] === n.value],
		'filter-id-==': [c, [f], (t, [e]) => t.id() === e.value],
		'filter-type-==': [c, [h], (t, [e]) => t.geometryType() === e.value],
		'filter-<': [
			c,
			[h, f],
			(t, [e, n]) => {
				const i = t.properties()[e.value],
					r = n.value;
				return typeof i == typeof r && i < r;
			},
		],
		'filter-id-<': [
			c,
			[f],
			(t, [e]) => {
				const n = t.id(),
					i = e.value;
				return typeof n == typeof i && n < i;
			},
		],
		'filter->': [
			c,
			[h, f],
			(t, [e, n]) => {
				const i = t.properties()[e.value],
					r = n.value;
				return typeof i == typeof r && i > r;
			},
		],
		'filter-id->': [
			c,
			[f],
			(t, [e]) => {
				const n = t.id(),
					i = e.value;
				return typeof n == typeof i && n > i;
			},
		],
		'filter-<=': [
			c,
			[h, f],
			(t, [e, n]) => {
				const i = t.properties()[e.value],
					r = n.value;
				return typeof i == typeof r && i <= r;
			},
		],
		'filter-id-<=': [
			c,
			[f],
			(t, [e]) => {
				const n = t.id(),
					i = e.value;
				return typeof n == typeof i && n <= i;
			},
		],
		'filter->=': [
			c,
			[h, f],
			(t, [e, n]) => {
				const i = t.properties()[e.value],
					r = n.value;
				return typeof i == typeof r && i >= r;
			},
		],
		'filter-id->=': [
			c,
			[f],
			(t, [e]) => {
				const n = t.id(),
					i = e.value;
				return typeof n == typeof i && n >= i;
			},
		],
		'filter-has': [c, [f], (t, [e]) => e.value in t.properties()],
		'filter-has-id': [c, [], (t) => null !== t.id() && void 0 !== t.id()],
		'filter-type-in': [c, [v(h)], (t, [e]) => e.value.indexOf(t.geometryType()) >= 0],
		'filter-id-in': [c, [v(f)], (t, [e]) => e.value.indexOf(t.id()) >= 0],
		'filter-in-small': [c, [h, v(f)], (t, [e, n]) => n.value.indexOf(t.properties()[e.value]) >= 0],
		'filter-in-large': [
			c,
			[h, v(f)],
			(t, [e, n]) =>
				(function (t, e, n, i) {
					for (; n <= i; ) {
						const r = (n + i) >> 1;
						if (e[r] === t) return !0;
						e[r] > t ? (i = r - 1) : (n = r + 1);
					}
					return !1;
				})(t.properties()[e.value], n.value, 0, n.value.length - 1),
		],
		all: {
			type: c,
			overloads: [
				[[c, c], (t, [e, n]) => e.evaluate(t) && n.evaluate(t)],
				[
					He(c),
					(t, e) => {
						for (const n of e) if (!n.evaluate(t)) return !1;
						return !0;
					},
				],
			],
		},
		any: {
			type: c,
			overloads: [
				[[c, c], (t, [e, n]) => e.evaluate(t) || n.evaluate(t)],
				[
					He(c),
					(t, e) => {
						for (const n of e) if (n.evaluate(t)) return !0;
						return !1;
					},
				],
			],
		},
		'!': [c, [c], (t, [e]) => !e.evaluate(t)],
		'is-supported-script': [
			c,
			[h],
			(t, [e]) => {
				const n = t.globals && t.globals.isSupportedScript;
				return !n || n(e.evaluate(t));
			},
		],
		upcase: [h, [h], (t, [e]) => e.evaluate(t).toUpperCase()],
		downcase: [h, [h], (t, [e]) => e.evaluate(t).toLowerCase()],
		concat: [h, He(f), (t, e) => e.map((e) => ct(e.evaluate(t))).join('')],
		'resolved-locale': [h, [p], (t, [e]) => e.evaluate(t).resolvedLocale()],
	});
	class on {
		constructor(t, e) {
			var n;
			(this.expression = t), (this._warningHistory = {}), (this._evaluator = new _t()), (this._defaultValue = e ? ('color' === (n = e).type && sn(n.default) ? new Y(0, 0, 0, 0) : 'color' === n.type ? Y.parse(n.default) || null : 'padding' === n.type ? et.parse(n.default) || null : 'variableAnchorOffsetCollection' === n.type ? rt.parse(n.default) || null : 'projectionDefinition' === n.type ? ot.parse(n.default) || null : void 0 === n.default ? null : n.default) : null), (this._enumValues = e && 'enum' === e.type ? e.values : null);
		}
		evaluateWithoutErrorHandling(t, e, n, i, r, s) {
			return (this._evaluator.globals = t), (this._evaluator.feature = e), (this._evaluator.featureState = n), (this._evaluator.canonical = i), (this._evaluator.availableImages = r || null), (this._evaluator.formattedSection = s), this.expression.evaluate(this._evaluator);
		}
		evaluate(t, e, n, i, r, s) {
			(this._evaluator.globals = t), (this._evaluator.feature = e || null), (this._evaluator.featureState = n || null), (this._evaluator.canonical = i), (this._evaluator.availableImages = r || null), (this._evaluator.formattedSection = s || null);
			try {
				const t = this.expression.evaluate(this._evaluator);
				if (null == t || ('number' == typeof t && t != t)) return this._defaultValue;
				if (this._enumValues && !(t in this._enumValues))
					throw new nt(
						`Expected value to be one of ${Object.keys(this._enumValues)
							.map((t) => JSON.stringify(t))
							.join(', ')}, but found ${JSON.stringify(t)} instead.`
					);
				return t;
			} catch (t) {
				return this._warningHistory[t.message] || ((this._warningHistory[t.message] = !0), 'undefined' != typeof console && console.warn(t.message)), this._defaultValue;
			}
		}
	}
	function an(t, e) {
		const n = new yt(
				Xe,
				Je,
				[],
				e
					? (function (t) {
							const e = { color: u, string: h, number: l, enum: h, boolean: c, formatted: m, padding: _, projectionDefinition: d, resolvedImage: y, variableAnchorOffsetCollection: x };
							if ('array' === t.type) return v(e[t.value] || f, t.length);
							return e[t.type];
					  })(e)
					: void 0
			),
			i = n.parse(t, void 0, void 0, void 0, e && 'string' === e.type ? { typeAnnotation: 'coerce' } : void 0);
		return i ? nn(new on(i, e)) : rn(n.errors);
	}
	class ln {
		constructor(t, e) {
			(this.kind = t), (this._styleExpression = e), (this.isStateDependent = 'constant' !== t && !tn(e.expression));
		}
		evaluateWithoutErrorHandling(t, e, n, i, r, s) {
			return this._styleExpression.evaluateWithoutErrorHandling(t, e, n, i, r, s);
		}
		evaluate(t, e, n, i, r, s) {
			return this._styleExpression.evaluate(t, e, n, i, r, s);
		}
	}
	class hn {
		constructor(t, e, n, i) {
			(this.kind = t), (this.zoomStops = n), (this._styleExpression = e), (this.isStateDependent = 'camera' !== t && !tn(e.expression)), (this.interpolationType = i);
		}
		evaluateWithoutErrorHandling(t, e, n, i, r, s) {
			return this._styleExpression.evaluateWithoutErrorHandling(t, e, n, i, r, s);
		}
		evaluate(t, e, n, i, r, s) {
			return this._styleExpression.evaluate(t, e, n, i, r, s);
		}
		interpolationFactor(t, e, n) {
			return this.interpolationType ? At.interpolationFactor(this.interpolationType, t, e, n) : 0;
		}
	}
	function cn(t, e) {
		const n = an(t, e);
		if ('error' === n.result) return n;
		const i = n.value.expression,
			r = Qe(i);
		if (!r && 'data-driven' !== (o = e)['property-type'] && 'cross-faded-data-driven' !== o['property-type']) return rn([new s('', 'data expressions not supported')]);
		var o;
		const a = en(i, ['zoom']);
		if (
			!a &&
			!(function (t) {
				return !!t.expression && t.expression.parameters.indexOf('zoom') > -1;
			})(e)
		)
			return rn([new s('', 'zoom expressions not supported')]);
		const l = un(i);
		if (!l && !a) return rn([new s('', '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')]);
		if (l instanceof s) return rn([l]);
		if (
			l instanceof At &&
			!(function (t) {
				return !!t.expression && t.expression.interpolated;
			})(e)
		)
			return rn([new s('', '"interpolate" expressions cannot be used with this property')]);
		if (!l) return nn(new ln(r ? 'constant' : 'source', n.value));
		const h = l instanceof At ? l.interpolation : void 0;
		return nn(new hn(r ? 'camera' : 'composite', n.value, l.labels, h));
	}
	function un(t) {
		let e = null;
		if (t instanceof xt) e = un(t.result);
		else if (t instanceof Ot) {
			for (const n of t.args) if (((e = un(n)), e)) break;
		} else (t instanceof Rt || t instanceof At) && t.input instanceof qe && 'zoom' === t.input.name && (e = t);
		return (
			e instanceof s ||
				t.eachChild((t) => {
					const n = un(t);
					n instanceof s ? (e = n) : !e && n ? (e = new s('', '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')) : e && n && e !== n && (e = new s('', 'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'));
				}),
			e
		);
	}
	function dn(t) {
		if (!0 === t || !1 === t) return !0;
		if (!Array.isArray(t) || 0 === t.length) return !1;
		switch (t[0]) {
			case 'has':
				return t.length >= 2 && '$id' !== t[1] && '$type' !== t[1];
			case 'in':
				return t.length >= 3 && ('string' != typeof t[1] || Array.isArray(t[2]));
			case '!in':
			case '!has':
			case 'none':
				return !1;
			case '==':
			case '!=':
			case '>':
			case '>=':
			case '<':
			case '<=':
				return 3 !== t.length || Array.isArray(t[1]) || Array.isArray(t[2]);
			case 'any':
			case 'all':
				for (const e of t.slice(1)) if (!dn(e) && 'boolean' != typeof e) return !1;
				return !0;
			default:
				return !0;
		}
	}
	const gn = { type: 'boolean', default: !1, transition: !1, 'property-type': 'data-driven', expression: { interpolated: !1, parameters: ['zoom', 'feature'] } };
	function fn(t) {
		if (null == t) return { filter: () => !0, needGeometry: !1 };
		dn(t) || (t = _n(t));
		const e = an(t, gn);
		if ('error' === e.result) throw new Error(e.value.map((t) => `${t.key}: ${t.message}`).join(', '));
		return { filter: (t, n, i) => e.value.evaluate(t, n, {}, i), needGeometry: mn(t) };
	}
	function pn(t, e) {
		return t < e ? -1 : t > e ? 1 : 0;
	}
	function mn(t) {
		if (!Array.isArray(t)) return !1;
		if ('within' === t[0] || 'distance' === t[0]) return !0;
		for (let e = 1; e < t.length; e++) if (mn(t[e])) return !0;
		return !1;
	}
	function _n(t) {
		if (!t) return !0;
		const e = t[0];
		if (t.length <= 1) return 'any' !== e;
		var n;
		return '==' === e ? yn(t[1], t[2], '==') : '!=' === e ? wn(yn(t[1], t[2], '==')) : '<' === e || '>' === e || '<=' === e || '>=' === e ? yn(t[1], t[2], e) : 'any' === e ? ((n = t.slice(1)), ['any'].concat(n.map(_n))) : 'all' === e ? ['all'].concat(t.slice(1).map(_n)) : 'none' === e ? ['all'].concat(t.slice(1).map(_n).map(wn)) : 'in' === e ? xn(t[1], t.slice(2)) : '!in' === e ? wn(xn(t[1], t.slice(2))) : 'has' === e ? vn(t[1]) : '!has' !== e || wn(vn(t[1]));
	}
	function yn(t, e, n) {
		switch (t) {
			case '$type':
				return [`filter-type-${n}`, e];
			case '$id':
				return [`filter-id-${n}`, e];
			default:
				return [`filter-${n}`, t, e];
		}
	}
	function xn(t, e) {
		if (0 === e.length) return !1;
		switch (t) {
			case '$type':
				return ['filter-type-in', ['literal', e]];
			case '$id':
				return ['filter-id-in', ['literal', e]];
			default:
				return e.length > 200 && !e.some((t) => typeof t != typeof e[0]) ? ['filter-in-large', t, ['literal', e.sort(pn)]] : ['filter-in-small', t, ['literal', e]];
		}
	}
	function vn(t) {
		switch (t) {
			case '$type':
				return !0;
			case '$id':
				return ['filter-has-id'];
			default:
				return ['filter-has', t];
		}
	}
	function wn(t) {
		return ['!', t];
	}
	function bn(t) {
		return 'object' == typeof t ? ['literal', t] : t;
	}
	function Sn(t, e) {
		let n = t.stops;
		if (!n)
			return (function (t, e) {
				const n = ['get', t.property];
				if (void 0 === t.default) return 'string' === e.type ? ['string', n] : n;
				if ('enum' === e.type) return ['match', n, Object.keys(e.values), n, t.default];
				{
					const i = ['color' === e.type ? 'to-color' : e.type, n, bn(t.default)];
					return 'array' === e.type && i.splice(1, 0, e.value, e.length || null), i;
				}
			})(t, e);
		const i = n && 'object' == typeof n[0][0],
			r = i || void 0 !== t.property,
			s = i || !r;
		return (
			(n = n.map((t) => (!r && e.tokens && 'string' == typeof t[1] ? [t[0], Mn(t[1])] : [t[0], bn(t[1])]))),
			i
				? (function (t, e, n) {
						const i = {},
							r = {},
							s = [];
						for (let e = 0; e < n.length; e++) {
							const o = n[e],
								a = o[0].zoom;
							void 0 === i[a] && ((i[a] = { zoom: a, type: t.type, property: t.property, default: t.default }), (r[a] = []), s.push(a)), r[a].push([o[0].value, o[1]]);
						}
						const o = Fn({}, e);
						if ('exponential' === o) {
							const n = [Cn(t), ['linear'], ['zoom']];
							for (const t of s) {
								Rn(n, t, Tn(i[t], e, r[t]), !1);
							}
							return n;
						}
						{
							const t = ['step', ['zoom']];
							for (const n of s) {
								Rn(t, n, Tn(i[n], e, r[n]), !0);
							}
							return Pn(t), t;
						}
				  })(t, e, n)
				: s
				? (function (t, e, n, i = ['zoom']) {
						const r = Fn(t, e);
						let s,
							o = !1;
						if ('interval' === r) (s = ['step', i]), (o = !0);
						else {
							if ('exponential' !== r) throw new Error(`Unknown zoom function type "${r}"`);
							{
								const e = void 0 !== t.base ? t.base : 1;
								s = [Cn(t), 1 === e ? ['linear'] : ['exponential', e], i];
							}
						}
						for (const t of n) Rn(s, t[0], t[1], o);
						return Pn(s), s;
				  })(t, e, n)
				: Tn(t, e, n)
		);
	}
	function Cn(t) {
		switch (t.colorSpace) {
			case 'hcl':
				return 'interpolate-hcl';
			case 'lab':
				return 'interpolate-lab';
			default:
				return 'interpolate';
		}
	}
	function En(t, e) {
		const n = bn(((i = t.default), (r = e.default), void 0 !== i ? i : void 0 !== r ? r : void 0));
		var i, r;
		return void 0 === n && 'resolvedImage' === e.type ? '' : n;
	}
	function Tn(t, e, n) {
		const i = Fn(t, e),
			r = ['get', t.property];
		if ('categorical' === i && 'boolean' == typeof n[0][0]) {
			const i = ['case'];
			for (const t of n) i.push(['==', r, t[0]], t[1]);
			return i.push(En(t, e)), i;
		}
		if ('categorical' === i) {
			const i = ['match', r];
			for (const t of n) Rn(i, t[0], t[1], !1);
			return i.push(En(t, e)), i;
		}
		if ('interval' === i) {
			const e = ['step', ['number', r]];
			for (const t of n) Rn(e, t[0], t[1], !0);
			return Pn(e), void 0 === t.default ? e : ['case', ['==', ['typeof', r], 'number'], e, bn(t.default)];
		}
		if ('exponential' === i) {
			const e = void 0 !== t.base ? t.base : 1,
				i = [Cn(t), 1 === e ? ['linear'] : ['exponential', e], ['number', r]];
			for (const t of n) Rn(i, t[0], t[1], !1);
			return void 0 === t.default ? i : ['case', ['==', ['typeof', r], 'number'], i, bn(t.default)];
		}
		throw new Error(`Unknown property function type ${i}`);
	}
	function Pn(t) {
		'step' === t[0] && 3 === t.length && (t.push(0), t.push(t[3]));
	}
	function Rn(t, e, n, i) {
		(t.length > 3 && e === t[t.length - 2]) || ((i && 2 === t.length) || t.push(e), t.push(n));
	}
	function Fn(t, e) {
		return t.type ? t.type : e.expression.interpolated ? 'exponential' : 'interval';
	}
	function Mn(t) {
		const e = ['concat'],
			n = /{([^{}]+)}/g;
		let i = 0;
		for (let r = n.exec(t); null !== r; r = n.exec(t)) {
			const s = t.slice(i, n.lastIndex - r[0].length);
			(i = n.lastIndex), s.length > 0 && e.push(s), e.push(['get', r[1]]);
		}
		if (1 === e.length) return t;
		if (i < t.length) e.push(t.slice(i));
		else if (2 === e.length) return ['to-string', e[1]];
		return e;
	}
	const In = e;
	var kn = { thin: 100, hairline: 100, 'ultra-light': 200, 'extra-light': 200, light: 300, book: 300, regular: 400, normal: 400, plain: 400, roman: 400, standard: 400, medium: 500, 'semi-bold': 600, 'demi-bold': 600, bold: 700, 'extra-bold': 800, 'ultra-bold': 800, heavy: 900, black: 900, 'heavy-black': 900, fat: 900, poster: 900, 'ultra-black': 950, 'extra-black': 950 },
		Ln = ' ',
		An = /(italic|oblique)$/i,
		Dn = {};
	function On(t, e, n) {
		var i = Dn[t];
		if (!i) {
			Array.isArray(t) || (t = [t]);
			for (var r, s, o = 400, a = 'normal', l = [], h = 0, c = t.length; h < c; ++h) {
				var u = t[h].split(' '),
					d = u[u.length - 1].toLowerCase();
				for (var g in ('normal' == d || 'italic' == d || 'oblique' == d ? ((a = s ? a : d), (s = !0), u.pop(), (d = u[u.length - 1].toLowerCase())) : An.test(d) && ((d = d.replace(An, '')), (a = s ? a : u[u.length - 1].replace(d, '')), (s = !0)), kn)) {
					var f = u.length > 1 ? u[u.length - 2].toLowerCase() : '';
					if (d == g || d == g.replace('-', '') || f + '-' + d == g) {
						(o = r ? o : kn[g]), u.pop(), f && g.startsWith(f) && u.pop();
						break;
					}
				}
				r || 'number' != typeof d || ((o = d), (r = !0));
				var p = u.join(Ln).replace('Klokantech Noto Sans', 'Noto Sans');
				-1 !== p.indexOf(Ln) && (p = '"' + p + '"'), l.push(p);
			}
			i = Dn[t] = [a, o, l];
		}
		return i[0] + Ln + i[1] + Ln + e + 'px' + (n ? '/' + n : '') + Ln + i[2];
	}
	function zn(t, e) {
		return t > e ? 1 : t < e ? -1 : 0;
	}
	function Gn(t, e) {
		return t < e ? 1 : t > e ? -1 : 0;
	}
	function jn(t, e, n) {
		if (t[0] <= e) return 0;
		const i = t.length;
		if (e <= t[i - 1]) return i - 1;
		if ('function' == typeof n) {
			for (let r = 1; r < i; ++r) {
				const i = t[r];
				if (i === e) return r;
				if (i < e) return n(e, t[r - 1], i) > 0 ? r - 1 : r;
			}
			return i - 1;
		}
		if (n > 0) {
			for (let n = 1; n < i; ++n) if (t[n] < e) return n - 1;
			return i - 1;
		}
		if (n < 0) {
			for (let n = 1; n < i; ++n) if (t[n] <= e) return n;
			return i - 1;
		}
		for (let n = 1; n < i; ++n) {
			if (t[n] == e) return n;
			if (t[n] < e) return t[n - 1] - e < e - t[n] ? n - 1 : n;
		}
		return i - 1;
	}
	function Nn(t, e, n) {
		for (; e < n; ) {
			const i = t[e];
			(t[e] = t[n]), (t[n] = i), ++e, --n;
		}
	}
	function Un(t, e) {
		const n = Array.isArray(e) ? e : [e],
			i = n.length;
		for (let e = 0; e < i; e++) t[t.length] = n[e];
	}
	function $n(t, e) {
		const n = t.length;
		if (n !== e.length) return !1;
		for (let i = 0; i < n; i++) if (t[i] !== e[i]) return !1;
		return !0;
	}
	function Bn() {
		return !0;
	}
	function Vn() {
		return !1;
	}
	function Wn() {}
	function Xn(t) {
		let e, n, i;
		return function () {
			const r = Array.prototype.slice.call(arguments);
			return (n && this === i && $n(r, n)) || ((i = this), (n = r), (e = t.apply(this, arguments))), e;
		};
	}
	function qn(t) {
		return (function () {
			let e;
			try {
				e = t();
			} catch (t) {
				return Promise.reject(t);
			}
			return e instanceof Promise ? e : Promise.resolve(e);
		})();
	}
	var Zn = 'propertychange',
		Kn = 'change',
		Yn = 'error',
		Hn = 'contextmenu',
		Jn = 'click',
		Qn = 'dblclick',
		ti = 'dragenter',
		ei = 'dragover',
		ni = 'drop',
		ii = 'keydown',
		ri = 'keypress',
		si = 'load',
		oi = 'touchmove',
		ai = 'wheel';
	class li {
		constructor() {
			this.disposed = !1;
		}
		dispose() {
			this.disposed || ((this.disposed = !0), this.disposeInternal());
		}
		disposeInternal() {}
	}
	function hi(t) {
		for (const e in t) delete t[e];
	}
	function ci(t) {
		let e;
		for (e in t) return !1;
		return !e;
	}
	class ui {
		constructor(t) {
			this.propagationStopped, this.defaultPrevented, (this.type = t), (this.target = null);
		}
		preventDefault() {
			this.defaultPrevented = !0;
		}
		stopPropagation() {
			this.propagationStopped = !0;
		}
	}
	class di extends li {
		constructor(t) {
			super(), (this.eventTarget_ = t), (this.pendingRemovals_ = null), (this.dispatching_ = null), (this.listeners_ = null);
		}
		addEventListener(t, e) {
			if (!t || !e) return;
			const n = this.listeners_ || (this.listeners_ = {}),
				i = n[t] || (n[t] = []);
			i.includes(e) || i.push(e);
		}
		dispatchEvent(t) {
			const e = 'string' == typeof t,
				n = e ? t : t.type,
				i = this.listeners_ && this.listeners_[n];
			if (!i) return;
			const r = e ? new ui(t) : t;
			r.target || (r.target = this.eventTarget_ || this);
			const s = this.dispatching_ || (this.dispatching_ = {}),
				o = this.pendingRemovals_ || (this.pendingRemovals_ = {});
			let a;
			n in s || ((s[n] = 0), (o[n] = 0)), ++s[n];
			for (let t = 0, e = i.length; t < e; ++t)
				if (((a = 'handleEvent' in i[t] ? i[t].handleEvent(r) : i[t].call(this, r)), !1 === a || r.propagationStopped)) {
					a = !1;
					break;
				}
			if (0 == --s[n]) {
				let t = o[n];
				for (delete o[n]; t--; ) this.removeEventListener(n, Wn);
				delete s[n];
			}
			return a;
		}
		disposeInternal() {
			this.listeners_ && hi(this.listeners_);
		}
		getListeners(t) {
			return (this.listeners_ && this.listeners_[t]) || void 0;
		}
		hasListener(t) {
			return !!this.listeners_ && (t ? t in this.listeners_ : Object.keys(this.listeners_).length > 0);
		}
		removeEventListener(t, e) {
			if (!this.listeners_) return;
			const n = this.listeners_[t];
			if (!n) return;
			const i = n.indexOf(e);
			-1 !== i && (this.pendingRemovals_ && t in this.pendingRemovals_ ? ((n[i] = Wn), ++this.pendingRemovals_[t]) : (n.splice(i, 1), 0 === n.length && delete this.listeners_[t]));
		}
	}
	function gi(t, e, n, i, r) {
		if (r) {
			const r = n;
			n = function (s) {
				return t.removeEventListener(e, n), r.call(i ?? this, s);
			};
		} else i && i !== t && (n = n.bind(i));
		const s = { target: t, type: e, listener: n };
		return t.addEventListener(e, n), s;
	}
	function fi(t, e, n, i) {
		return gi(t, e, n, i, !0);
	}
	function pi(t) {
		t && t.target && (t.target.removeEventListener(t.type, t.listener), hi(t));
	}
	class mi extends di {
		constructor() {
			super(), (this.on = this.onInternal), (this.once = this.onceInternal), (this.un = this.unInternal), (this.revision_ = 0);
		}
		changed() {
			++this.revision_, this.dispatchEvent(Kn);
		}
		getRevision() {
			return this.revision_;
		}
		onInternal(t, e) {
			if (Array.isArray(t)) {
				const n = t.length,
					i = new Array(n);
				for (let r = 0; r < n; ++r) i[r] = gi(this, t[r], e);
				return i;
			}
			return gi(this, t, e);
		}
		onceInternal(t, e) {
			let n;
			if (Array.isArray(t)) {
				const i = t.length;
				n = new Array(i);
				for (let r = 0; r < i; ++r) n[r] = fi(this, t[r], e);
			} else n = fi(this, t, e);
			return (e.ol_key = n), n;
		}
		unInternal(t, e) {
			const n = e.ol_key;
			if (n) _i(n);
			else if (Array.isArray(t)) for (let n = 0, i = t.length; n < i; ++n) this.removeEventListener(t[n], e);
			else this.removeEventListener(t, e);
		}
	}
	function _i(t) {
		if (Array.isArray(t)) for (let e = 0, n = t.length; e < n; ++e) pi(t[e]);
		else pi(t);
	}
	mi.prototype.on, mi.prototype.once, mi.prototype.un;
	var yi = Object.freeze({ __proto__: null, default: mi, unByKey: _i });
	function xi() {
		throw new Error('Unimplemented abstract method.');
	}
	let vi = 0;
	function wi(t) {
		return t.ol_uid || (t.ol_uid = String(++vi));
	}
	class bi extends ui {
		constructor(t, e, n) {
			super(t), (this.key = e), (this.oldValue = n);
		}
	}
	class Si extends mi {
		constructor(t) {
			super(), this.on, this.once, this.un, wi(this), (this.values_ = null), void 0 !== t && this.setProperties(t);
		}
		get(t) {
			let e;
			return this.values_ && this.values_.hasOwnProperty(t) && (e = this.values_[t]), e;
		}
		getKeys() {
			return (this.values_ && Object.keys(this.values_)) || [];
		}
		getProperties() {
			return (this.values_ && Object.assign({}, this.values_)) || {};
		}
		getPropertiesInternal() {
			return this.values_;
		}
		hasProperties() {
			return !!this.values_;
		}
		notify(t, e) {
			let n;
			(n = `change:${t}`), this.hasListener(n) && this.dispatchEvent(new bi(n, t, e)), (n = Zn), this.hasListener(n) && this.dispatchEvent(new bi(n, t, e));
		}
		addChangeListener(t, e) {
			this.addEventListener(`change:${t}`, e);
		}
		removeChangeListener(t, e) {
			this.removeEventListener(`change:${t}`, e);
		}
		set(t, e, n) {
			const i = this.values_ || (this.values_ = {});
			if (n) i[t] = e;
			else {
				const n = i[t];
				(i[t] = e), n !== e && this.notify(t, n);
			}
		}
		setProperties(t, e) {
			for (const n in t) this.set(n, t[n], e);
		}
		applyProperties(t) {
			t.values_ && Object.assign(this.values_ || (this.values_ = {}), t.values_);
		}
		unset(t, e) {
			if (this.values_ && t in this.values_) {
				const n = this.values_[t];
				delete this.values_[t], ci(this.values_) && (this.values_ = null), e || this.notify(t, n);
			}
		}
	}
	function Ci(t, e) {
		if (!t) throw new Error(e);
	}
	class Ei extends Si {
		constructor(t) {
			if ((super(), this.on, this.once, this.un, (this.id_ = void 0), (this.geometryName_ = 'geometry'), (this.style_ = null), (this.styleFunction_ = void 0), (this.geometryChangeKey_ = null), this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), t))
				if ('function' == typeof t.getSimplifiedGeometry) {
					const e = t;
					this.setGeometry(e);
				} else {
					const e = t;
					this.setProperties(e);
				}
		}
		clone() {
			const t = new Ei(this.hasProperties() ? this.getProperties() : null);
			t.setGeometryName(this.getGeometryName());
			const e = this.getGeometry();
			e && t.setGeometry(e.clone());
			const n = this.getStyle();
			return n && t.setStyle(n), t;
		}
		getGeometry() {
			return this.get(this.geometryName_);
		}
		getId() {
			return this.id_;
		}
		getGeometryName() {
			return this.geometryName_;
		}
		getStyle() {
			return this.style_;
		}
		getStyleFunction() {
			return this.styleFunction_;
		}
		handleGeometryChange_() {
			this.changed();
		}
		handleGeometryChanged_() {
			this.geometryChangeKey_ && (pi(this.geometryChangeKey_), (this.geometryChangeKey_ = null));
			const t = this.getGeometry();
			t && (this.geometryChangeKey_ = gi(t, Kn, this.handleGeometryChange_, this)), this.changed();
		}
		setGeometry(t) {
			this.set(this.geometryName_, t);
		}
		setStyle(t) {
			(this.style_ = t),
				(this.styleFunction_ = t
					? (function (t) {
							if ('function' == typeof t) return t;
							let e;
							if (Array.isArray(t)) e = t;
							else {
								Ci('function' == typeof t.getZIndex, 'Expected an `ol/style/Style` or an array of `ol/style/Style.js`');
								e = [t];
							}
							return function () {
								return e;
							};
					  })(t)
					: void 0),
				this.changed();
		}
		setId(t) {
			(this.id_ = t), this.changed();
		}
		setGeometryName(t) {
			this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_), (this.geometryName_ = t), this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), this.handleGeometryChanged_();
		}
	}
	var Ti = 0,
		Pi = 1,
		Ri = 2,
		Fi = 4,
		Mi = 8,
		Ii = 16;
	function ki(t) {
		const e = Ni();
		for (let n = 0, i = t.length; n < i; ++n) qi(e, t[n]);
		return e;
	}
	function Li(t, e, n) {
		return n ? ((n[0] = t[0] - e), (n[1] = t[1] - e), (n[2] = t[2] + e), (n[3] = t[3] + e), n) : [t[0] - e, t[1] - e, t[2] + e, t[3] + e];
	}
	function Ai(t, e) {
		return e ? ((e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e) : t.slice();
	}
	function Di(t, e, n) {
		let i, r;
		return (i = e < t[0] ? t[0] - e : t[2] < e ? e - t[2] : 0), (r = n < t[1] ? t[1] - n : t[3] < n ? n - t[3] : 0), i * i + r * r;
	}
	function Oi(t, e) {
		return Gi(t, e[0], e[1]);
	}
	function zi(t, e) {
		return t[0] <= e[0] && e[2] <= t[2] && t[1] <= e[1] && e[3] <= t[3];
	}
	function Gi(t, e, n) {
		return t[0] <= e && e <= t[2] && t[1] <= n && n <= t[3];
	}
	function ji(t, e) {
		const n = t[0],
			i = t[1],
			r = t[2],
			s = t[3],
			o = e[0],
			a = e[1];
		let l = Ti;
		return o < n ? (l |= Ii) : o > r && (l |= Fi), a < i ? (l |= Mi) : a > s && (l |= Ri), l === Ti && (l = Pi), l;
	}
	function Ni() {
		return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
	}
	function Ui(t, e, n, i, r) {
		return r ? ((r[0] = t), (r[1] = e), (r[2] = n), (r[3] = i), r) : [t, e, n, i];
	}
	function $i(t) {
		return Ui(1 / 0, 1 / 0, -1 / 0, -1 / 0, t);
	}
	function Bi(t, e) {
		const n = t[0],
			i = t[1];
		return Ui(n, i, n, i, e);
	}
	function Vi(t, e, n, i, r) {
		return Zi($i(r), t, e, n, i);
	}
	function Wi(t, e) {
		return t[0] == e[0] && t[2] == e[2] && t[1] == e[1] && t[3] == e[3];
	}
	function Xi(t, e) {
		return e[0] < t[0] && (t[0] = e[0]), e[2] > t[2] && (t[2] = e[2]), e[1] < t[1] && (t[1] = e[1]), e[3] > t[3] && (t[3] = e[3]), t;
	}
	function qi(t, e) {
		e[0] < t[0] && (t[0] = e[0]), e[0] > t[2] && (t[2] = e[0]), e[1] < t[1] && (t[1] = e[1]), e[1] > t[3] && (t[3] = e[1]);
	}
	function Zi(t, e, n, i, r) {
		for (; n < i; n += r) Ki(t, e[n], e[n + 1]);
		return t;
	}
	function Ki(t, e, n) {
		(t[0] = Math.min(t[0], e)), (t[1] = Math.min(t[1], n)), (t[2] = Math.max(t[2], e)), (t[3] = Math.max(t[3], n));
	}
	function Yi(t, e) {
		let n;
		return (n = e(Ji(t))), n || ((n = e(Qi(t))), n || ((n = e(ar(t))), n || ((n = e(or(t))), n || !1)));
	}
	function Hi(t) {
		let e = 0;
		return cr(t) || (e = lr(t) * rr(t)), e;
	}
	function Ji(t) {
		return [t[0], t[1]];
	}
	function Qi(t) {
		return [t[2], t[1]];
	}
	function tr(t) {
		return [(t[0] + t[2]) / 2, (t[1] + t[3]) / 2];
	}
	function er(t, e) {
		let n;
		if ('bottom-left' === e) n = Ji(t);
		else if ('bottom-right' === e) n = Qi(t);
		else if ('top-left' === e) n = or(t);
		else {
			if ('top-right' !== e) throw new Error('Invalid corner');
			n = ar(t);
		}
		return n;
	}
	function nr(t, e, n, i, r) {
		const [s, o, a, l, h, c, u, d] = ir(t, e, n, i);
		return Ui(Math.min(s, a, h, u), Math.min(o, l, c, d), Math.max(s, a, h, u), Math.max(o, l, c, d), r);
	}
	function ir(t, e, n, i) {
		const r = (e * i[0]) / 2,
			s = (e * i[1]) / 2,
			o = Math.cos(n),
			a = Math.sin(n),
			l = r * o,
			h = r * a,
			c = s * o,
			u = s * a,
			d = t[0],
			g = t[1];
		return [d - l + u, g - h - c, d - l - u, g - h + c, d + l - u, g + h + c, d + l + u, g + h - c, d - l + u, g - h - c];
	}
	function rr(t) {
		return t[3] - t[1];
	}
	function sr(t, e, n) {
		const i = n || [1 / 0, 1 / 0, -1 / 0, -1 / 0];
		return hr(t, e) ? (t[0] > e[0] ? (i[0] = t[0]) : (i[0] = e[0]), t[1] > e[1] ? (i[1] = t[1]) : (i[1] = e[1]), t[2] < e[2] ? (i[2] = t[2]) : (i[2] = e[2]), t[3] < e[3] ? (i[3] = t[3]) : (i[3] = e[3])) : $i(i), i;
	}
	function or(t) {
		return [t[0], t[3]];
	}
	function ar(t) {
		return [t[2], t[3]];
	}
	function lr(t) {
		return t[2] - t[0];
	}
	function hr(t, e) {
		return t[0] <= e[2] && t[2] >= e[0] && t[1] <= e[3] && t[3] >= e[1];
	}
	function cr(t) {
		return t[2] < t[0] || t[3] < t[1];
	}
	function ur(t, e, n, i) {
		if (cr(t)) return $i(n);
		let r = [];
		if (i > 1) {
			const e = t[2] - t[0],
				n = t[3] - t[1];
			for (let s = 0; s < i; ++s) r.push(t[0] + (e * s) / i, t[1], t[2], t[1] + (n * s) / i, t[2] - (e * s) / i, t[3], t[0], t[3] - (n * s) / i);
		} else r = [t[0], t[1], t[2], t[1], t[2], t[3], t[0], t[3]];
		e(r, r, 2);
		const s = [],
			o = [];
		for (let t = 0, e = r.length; t < e; t += 2) s.push(r[t]), o.push(r[t + 1]);
		return (function (t, e, n) {
			return Ui(Math.min.apply(null, t), Math.min.apply(null, e), Math.max.apply(null, t), Math.max.apply(null, e), n);
		})(s, o, n);
	}
	function dr(t, e) {
		const n = e.getExtent(),
			i = tr(t);
		if (e.canWrapX() && (i[0] < n[0] || i[0] >= n[2])) {
			const e = lr(n),
				r = Math.floor((i[0] - n[0]) / e) * e;
			(t[0] -= r), (t[2] -= r);
		}
		return t;
	}
	function gr(t, e, n) {
		if (e.canWrapX()) {
			const i = e.getExtent();
			if (!isFinite(t[0]) || !isFinite(t[2])) return [[i[0], t[1], i[2], t[3]]];
			dr(t, e);
			const r = lr(i);
			if (lr(t) > r && !n) return [[i[0], t[1], i[2], t[3]]];
			if (t[0] < i[0])
				return [
					[t[0] + r, t[1], i[2], t[3]],
					[i[0], t[1], t[2], t[3]],
				];
			if (t[2] > i[2])
				return [
					[t[0], t[1], i[2], t[3]],
					[i[0], t[1], t[2] - r, t[3]],
				];
		}
		return [t];
	}
	function fr(t, e, n, i) {
		const r = [];
		let s = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
		for (let o = 0, a = n.length; o < a; ++o) {
			const a = n[o];
			(s = Vi(t, e, a[0], i)), r.push((s[0] + s[2]) / 2, (s[1] + s[3]) / 2), (e = a[a.length - 1]);
		}
		return r;
	}
	function pr(t, e, n, i, r) {
		return !Yi(r, function (r) {
			return !mr(t, e, n, i, r[0], r[1]);
		});
	}
	function mr(t, e, n, i, r, s) {
		let o = 0,
			a = t[n - i],
			l = t[n - i + 1];
		for (; e < n; e += i) {
			const n = t[e],
				i = t[e + 1];
			l <= s ? i > s && (n - a) * (s - l) - (r - a) * (i - l) > 0 && o++ : i <= s && (n - a) * (s - l) - (r - a) * (i - l) < 0 && o--, (a = n), (l = i);
		}
		return 0 !== o;
	}
	function _r(t, e, n, i, r, s) {
		if (0 === n.length) return !1;
		if (!mr(t, e, n[0], i, r, s)) return !1;
		for (let e = 1, o = n.length; e < o; ++e) if (mr(t, n[e - 1], n[e], i, r, s)) return !1;
		return !0;
	}
	function yr(t, e, n, i, r, s, o) {
		let a, l, h, c, u, d, g;
		const f = r[s + 1],
			p = [];
		for (let r = 0, s = n.length; r < s; ++r) {
			const s = n[r];
			for (c = t[s - i], d = t[s - i + 1], a = e; a < s; a += i) (u = t[a]), (g = t[a + 1]), ((f <= d && g <= f) || (d <= f && f <= g)) && ((h = ((f - d) / (g - d)) * (u - c) + c), p.push(h)), (c = u), (d = g);
		}
		let m = NaN,
			_ = -1 / 0;
		for (p.sort(zn), c = p[0], a = 1, l = p.length; a < l; ++a) {
			u = p[a];
			const r = Math.abs(u - c);
			r > _ && ((h = (c + u) / 2), _r(t, e, n, i, h, f) && ((m = h), (_ = r))), (c = u);
		}
		return isNaN(m) && (m = r[s]), o ? (o.push(m, f, _), o) : [m, f, _];
	}
	function xr(t, e, n, i, r) {
		let s = [];
		for (let o = 0, a = n.length; o < a; ++o) {
			const a = n[o];
			(s = yr(t, e, a, i, r, 2 * o, s)), (e = a[a.length - 1]);
		}
		return s;
	}
	function vr(t, e, n) {
		return Math.min(Math.max(t, e), n);
	}
	function wr(t, e, n, i, r, s) {
		const o = r - n,
			a = s - i;
		if (0 !== o || 0 !== a) {
			const l = ((t - n) * o + (e - i) * a) / (o * o + a * a);
			l > 1 ? ((n = r), (i = s)) : l > 0 && ((n += o * l), (i += a * l));
		}
		return br(t, e, n, i);
	}
	function br(t, e, n, i) {
		const r = n - t,
			s = i - e;
		return r * r + s * s;
	}
	function Sr(t) {
		return (180 * t) / Math.PI;
	}
	function Cr(t) {
		return (t * Math.PI) / 180;
	}
	function Er(t, e) {
		const n = t % e;
		return n * e < 0 ? n + e : n;
	}
	function Tr(t, e, n) {
		return t + n * (e - t);
	}
	function Pr(t, e) {
		const n = Math.pow(10, e);
		return Math.round(t * n) / n;
	}
	function Rr(t, e) {
		return Math.round(Pr(t, e));
	}
	function Fr(t, e) {
		return Math.floor(Pr(t, e));
	}
	function Mr(t, e) {
		return Math.ceil(Pr(t, e));
	}
	function Ir(t, e, n) {
		if (t >= e && t < n) return t;
		const i = n - e;
		return ((((t - e) % i) + i) % i) + e;
	}
	function kr(t, e, n, i, r, s, o) {
		let a, l;
		const h = (n - e) / i;
		if (1 === h) a = e;
		else if (2 === h) (a = e), (l = r);
		else if (0 !== h) {
			let s = t[e],
				o = t[e + 1],
				h = 0;
			const c = [0];
			for (let r = e + i; r < n; r += i) {
				const e = t[r],
					n = t[r + 1];
				(h += Math.sqrt((e - s) * (e - s) + (n - o) * (n - o))), c.push(h), (s = e), (o = n);
			}
			const u = r * h,
				d = (function (t, e, n) {
					let i, r;
					n = n || zn;
					let s = 0,
						o = t.length,
						a = !1;
					for (; s < o; ) (i = s + ((o - s) >> 1)), (r = +n(t[i], e)), r < 0 ? (s = i + 1) : ((o = i), (a = !r));
					return a ? s : ~s;
				})(c, u);
			d < 0 ? ((l = (u - c[-d - 2]) / (c[-d - 1] - c[-d - 2])), (a = e + (-d - 2) * i)) : (a = e + d * i);
		}
		(o = o > 1 ? o : 2), (s = s || new Array(o));
		for (let e = 0; e < o; ++e) s[e] = void 0 === a ? NaN : void 0 === l ? t[a + e] : Tr(t[a + e], t[a + i + e], l);
		return s;
	}
	function Lr(t, e, n, i, r, s) {
		if (n == e) return null;
		let o;
		if (r < t[e + i - 1]) return s ? ((o = t.slice(e, e + i)), (o[i - 1] = r), o) : null;
		if (t[n - 1] < r) return s ? ((o = t.slice(n - i, n)), (o[i - 1] = r), o) : null;
		if (r == t[e + i - 1]) return t.slice(e, e + i);
		let a = e / i,
			l = n / i;
		for (; a < l; ) {
			const e = (a + l) >> 1;
			r < t[(e + 1) * i - 1] ? (l = e) : (a = e + 1);
		}
		const h = t[a * i - 1];
		if (r == h) return t.slice((a - 1) * i, (a - 1) * i + i);
		const c = (r - h) / (t[(a + 1) * i - 1] - h);
		o = [];
		for (let e = 0; e < i - 1; ++e) o.push(Tr(t[(a - 1) * i + e], t[a * i + e], c));
		return o.push(r), o;
	}
	function Ar(t, e, n, i) {
		for (; e < n - i; ) {
			for (let r = 0; r < i; ++r) {
				const s = t[e + r];
				(t[e + r] = t[n - i + r]), (t[n - i + r] = s);
			}
			(e += i), (n -= i);
		}
	}
	function Dr(t, e, n, i) {
		let r = 0,
			s = t[n - i],
			o = t[n - i + 1];
		for (; e < n; e += i) {
			const n = t[e],
				i = t[e + 1];
			(r += (n - s) * (i + o)), (s = n), (o = i);
		}
		return 0 === r ? void 0 : r > 0;
	}
	function Or(t, e, n, i, r) {
		r = void 0 !== r && r;
		for (let s = 0, o = n.length; s < o; ++s) {
			const o = n[s],
				a = Dr(t, e, o, i);
			if (0 === s) {
				if ((r && a) || (!r && !a)) return !1;
			} else if ((r && !a) || (!r && a)) return !1;
			e = o;
		}
		return !0;
	}
	function zr(t, e, n, i, r) {
		for (let s = 0, o = n.length; s < o; ++s) {
			const o = n[s];
			if (!Or(t, e, o, i, r)) return !1;
			o.length && (e = o[o.length - 1]);
		}
		return !0;
	}
	function Gr(t, e, n, i, r) {
		r = void 0 !== r && r;
		for (let s = 0, o = n.length; s < o; ++s) {
			const o = n[s],
				a = Dr(t, e, o, i);
			(0 === s ? (r && a) || (!r && !a) : (r && !a) || (!r && a)) && Ar(t, e, o, i), (e = o);
		}
		return e;
	}
	function jr(t, e, n, i, r) {
		for (let s = 0, o = n.length; s < o; ++s) e = Gr(t, e, n[s], i, r);
		return e;
	}
	function Nr(t, e) {
		const n = [];
		let i,
			r = 0,
			s = 0;
		for (let o = 0, a = e.length; o < a; ++o) {
			const a = e[o],
				l = Dr(t, r, a, 2);
			if ((void 0 === i && (i = l), l === i)) n.push(e.slice(s, o + 1));
			else {
				if (0 === n.length) continue;
				n[n.length - 1].push(e[s]);
			}
			(s = o + 1), (r = a);
		}
		return n;
	}
	function Ur(t, e, n, i, r, s, o) {
		const a = (n - e) / i;
		if (a < 3) {
			for (; e < n; e += i) (s[o++] = t[e]), (s[o++] = t[e + 1]);
			return o;
		}
		const l = new Array(a);
		(l[0] = 1), (l[a - 1] = 1);
		const h = [e, n - i];
		let c = 0;
		for (; h.length > 0; ) {
			const n = h.pop(),
				s = h.pop();
			let o = 0;
			const a = t[s],
				u = t[s + 1],
				d = t[n],
				g = t[n + 1];
			for (let e = s + i; e < n; e += i) {
				const n = wr(t[e], t[e + 1], a, u, d, g);
				n > o && ((c = e), (o = n));
			}
			o > r && ((l[(c - e) / i] = 1), s + i < c && h.push(s, c), c + i < n && h.push(c, n));
		}
		for (let n = 0; n < a; ++n) l[n] && ((s[o++] = t[e + n * i]), (s[o++] = t[e + n * i + 1]));
		return o;
	}
	function $r(t, e, n, i, r, s, o, a) {
		for (let l = 0, h = n.length; l < h; ++l) {
			const h = n[l];
			(o = Ur(t, e, h, i, r, s, o)), a.push(o), (e = h);
		}
		return o;
	}
	function Br(t, e) {
		return e * Math.round(t / e);
	}
	function Vr(t, e, n, i, r, s, o) {
		if (e == n) return o;
		let a,
			l,
			h = Br(t[e], r),
			c = Br(t[e + 1], r);
		(e += i), (s[o++] = h), (s[o++] = c);
		do {
			if (((a = Br(t[e], r)), (l = Br(t[e + 1], r)), (e += i) == n)) return (s[o++] = a), (s[o++] = l), o;
		} while (a == h && l == c);
		for (; e < n; ) {
			const n = Br(t[e], r),
				u = Br(t[e + 1], r);
			if (((e += i), n == a && u == l)) continue;
			const d = a - h,
				g = l - c,
				f = n - h,
				p = u - c;
			d * p == g * f && ((d < 0 && f < d) || d == f || (d > 0 && f > d)) && ((g < 0 && p < g) || g == p || (g > 0 && p > g)) ? ((a = n), (l = u)) : ((s[o++] = a), (s[o++] = l), (h = a), (c = l), (a = n), (l = u));
		}
		return (s[o++] = a), (s[o++] = l), o;
	}
	function Wr(t, e, n, i, r, s, o, a) {
		for (let l = 0, h = n.length; l < h; ++l) {
			const h = n[l];
			(o = Vr(t, e, h, i, r, s, o)), a.push(o), (e = h);
		}
		return o;
	}
	function Xr(t, e, n, i, r, s, o) {
		(s = s || []), (o = o || 2);
		let a = 0;
		for (let l = e; l < n; l += i) {
			const e = t[l],
				n = t[l + 1];
			(s[a++] = r[0] * e + r[2] * n + r[4]), (s[a++] = r[1] * e + r[3] * n + r[5]);
			for (let e = 2; e < o; e++) s[a++] = t[l + e];
		}
		return s && s.length != a && (s.length = a), s;
	}
	function qr(t, e, n, i, r, s, o) {
		o = o || [];
		const a = Math.cos(r),
			l = Math.sin(r),
			h = s[0],
			c = s[1];
		let u = 0;
		for (let r = e; r < n; r += i) {
			const e = t[r] - h,
				n = t[r + 1] - c;
			(o[u++] = h + e * a - n * l), (o[u++] = c + e * l + n * a);
			for (let e = r + 2; e < r + i; ++e) o[u++] = t[e];
		}
		return o && o.length != u && (o.length = u), o;
	}
	function Zr(...t) {
		console.warn(...t);
	}
	function Kr(t, e) {
		const n = ('' + t).split('.'),
			i = ('' + e).split('.');
		for (let t = 0; t < Math.max(n.length, i.length); t++) {
			const e = parseInt(n[t] || '0', 10),
				r = parseInt(i[t] || '0', 10);
			if (e > r) return 1;
			if (r > e) return -1;
		}
		return 0;
	}
	function Yr(t, e) {
		const n = e.getRadius(),
			i = e.getCenter(),
			r = i[0],
			s = i[1];
		let o = t[0] - r;
		const a = t[1] - s;
		0 === o && 0 === a && (o = 1);
		const l = Math.sqrt(o * o + a * a);
		return [r + (n * o) / l, s + (n * a) / l];
	}
	function Hr(t, e) {
		const n = t[0],
			i = t[1],
			r = e[0],
			s = e[1],
			o = r[0],
			a = r[1],
			l = s[0],
			h = s[1],
			c = l - o,
			u = h - a,
			d = 0 === c && 0 === u ? 0 : (c * (n - o) + u * (i - a)) / (c * c + u * u || 0);
		let g, f;
		return d <= 0 ? ((g = o), (f = a)) : d >= 1 ? ((g = l), (f = h)) : ((g = o + d * c), (f = a + d * u)), [g, f];
	}
	function Jr(t, e) {
		let n = !0;
		for (let i = t.length - 1; i >= 0; --i)
			if (t[i] != e[i]) {
				n = !1;
				break;
			}
		return n;
	}
	function Qr(t, e) {
		const n = Math.cos(e),
			i = Math.sin(e),
			r = t[0] * n - t[1] * i,
			s = t[1] * n + t[0] * i;
		return (t[0] = r), (t[1] = s), t;
	}
	function ts(t, e) {
		const n = t[0] - e[0],
			i = t[1] - e[1];
		return n * n + i * i;
	}
	function es(t, e) {
		return Math.sqrt(ts(t, e));
	}
	function ns(t, e) {
		return ts(t, Hr(t, e));
	}
	function is(t, e) {
		if (e.canWrapX()) {
			const n = lr(e.getExtent()),
				i = rs(t, e, n);
			i && (t[0] -= i * n);
		}
		return t;
	}
	function rs(t, e, n) {
		const i = e.getExtent();
		let r = 0;
		return e.canWrapX() && (t[0] < i[0] || t[0] > i[2]) && ((n = n || lr(i)), (r = Math.floor((t[0] - i[0]) / n))), r;
	}
	const ss = { radians: 6370997 / (2 * Math.PI), degrees: (2 * Math.PI * 6370997) / 360, ft: 0.3048, m: 1, 'us-ft': 1200 / 3937 };
	class os {
		constructor(t) {
			(this.code_ = t.code), (this.units_ = t.units), (this.extent_ = void 0 !== t.extent ? t.extent : null), (this.worldExtent_ = void 0 !== t.worldExtent ? t.worldExtent : null), (this.axisOrientation_ = void 0 !== t.axisOrientation ? t.axisOrientation : 'enu'), (this.global_ = void 0 !== t.global && t.global), (this.canWrapX_ = !(!this.global_ || !this.extent_)), (this.getPointResolutionFunc_ = t.getPointResolution), (this.defaultTileGrid_ = null), (this.metersPerUnit_ = t.metersPerUnit);
		}
		canWrapX() {
			return this.canWrapX_;
		}
		getCode() {
			return this.code_;
		}
		getExtent() {
			return this.extent_;
		}
		getUnits() {
			return this.units_;
		}
		getMetersPerUnit() {
			return this.metersPerUnit_ || ss[this.units_];
		}
		getWorldExtent() {
			return this.worldExtent_;
		}
		getAxisOrientation() {
			return this.axisOrientation_;
		}
		isGlobal() {
			return this.global_;
		}
		setGlobal(t) {
			(this.global_ = t), (this.canWrapX_ = !(!t || !this.extent_));
		}
		getDefaultTileGrid() {
			return this.defaultTileGrid_;
		}
		setDefaultTileGrid(t) {
			this.defaultTileGrid_ = t;
		}
		setExtent(t) {
			(this.extent_ = t), (this.canWrapX_ = !(!this.global_ || !t));
		}
		setWorldExtent(t) {
			this.worldExtent_ = t;
		}
		setGetPointResolution(t) {
			this.getPointResolutionFunc_ = t;
		}
		getPointResolutionFunc() {
			return this.getPointResolutionFunc_;
		}
	}
	const as = 6378137,
		ls = Math.PI * as,
		hs = [-ls, -ls, ls, ls],
		cs = [-180, -85, 180, 85],
		us = as * Math.log(Math.tan(Math.PI / 2));
	class ds extends os {
		constructor(t) {
			super({
				code: t,
				units: 'm',
				extent: hs,
				global: !0,
				worldExtent: cs,
				getPointResolution: function (t, e) {
					return t / Math.cosh(e[1] / as);
				},
			});
		}
	}
	const gs = [new ds('EPSG:3857'), new ds('EPSG:102100'), new ds('EPSG:102113'), new ds('EPSG:900913'), new ds('http://www.opengis.net/def/crs/EPSG/0/3857'), new ds('http://www.opengis.net/gml/srs/epsg.xml#3857')];
	function fs(t, e, n, i) {
		const r = t.length;
		(n = n > 1 ? n : 2), (i = i ?? n), void 0 === e && (e = n > 2 ? t.slice() : new Array(r));
		for (let n = 0; n < r; n += i) {
			e[n] = (ls * t[n]) / 180;
			let i = as * Math.log(Math.tan((Math.PI * (+t[n + 1] + 90)) / 360));
			i > us ? (i = us) : i < -us && (i = -us), (e[n + 1] = i);
		}
		return e;
	}
	function ps(t, e, n, i) {
		const r = t.length;
		(n = n > 1 ? n : 2), (i = i ?? n), void 0 === e && (e = n > 2 ? t.slice() : new Array(r));
		for (let n = 0; n < r; n += i) (e[n] = (180 * t[n]) / ls), (e[n + 1] = (360 * Math.atan(Math.exp(t[n + 1] / as))) / Math.PI - 90);
		return e;
	}
	const ms = [-180, -90, 180, 90],
		_s = (6378137 * Math.PI) / 180;
	class ys extends os {
		constructor(t, e) {
			super({ code: t, units: 'degrees', extent: ms, axisOrientation: e, global: !0, metersPerUnit: _s, worldExtent: ms });
		}
	}
	const xs = [new ys('CRS:84'), new ys('EPSG:4326', 'neu'), new ys('urn:ogc:def:crs:OGC:1.3:CRS84'), new ys('urn:ogc:def:crs:OGC:2:84'), new ys('http://www.opengis.net/def/crs/OGC/1.3/CRS84'), new ys('http://www.opengis.net/gml/srs/epsg.xml#4326', 'neu'), new ys('http://www.opengis.net/def/crs/EPSG/0/4326', 'neu')];
	let vs = {};
	let ws = {};
	function bs(t, e, n) {
		const i = t.getCode(),
			r = e.getCode();
		i in ws || (ws[i] = {}), (ws[i][r] = n);
	}
	function Ss(t, e) {
		return t in ws && e in ws[t] ? ws[t][e] : null;
	}
	const Cs = 0.9996,
		Es = 0.00669438,
		Ts = Es * Es,
		Ps = Ts * Es,
		Rs = Es / (1 - Es),
		Fs = Math.sqrt(1 - Es),
		Ms = (1 - Fs) / (1 + Fs),
		Is = Ms * Ms,
		ks = Is * Ms,
		Ls = ks * Ms,
		As = Ls * Ms,
		Ds = 0.9983242984503243,
		Os = (15 * Ts) / 256 + (45 * Ps) / 1024,
		zs = (35 * Ps) / 3072,
		Gs = 1.5 * Ms - (27 / 32) * ks + (269 / 512) * As,
		js = (21 / 16) * Is - (55 / 32) * Ls,
		Ns = (151 / 96) * ks - (417 / 128) * As,
		Us = (1097 / 512) * Ls,
		$s = 6378137;
	function Bs(t, e, n) {
		const i = t - 5e5,
			r = (n.north ? e : e - 1e7) / Cs / ($s * Ds),
			s = r + Gs * Math.sin(2 * r) + js * Math.sin(4 * r) + Ns * Math.sin(6 * r) + Us * Math.sin(8 * r),
			o = Math.sin(s),
			a = o * o,
			l = Math.cos(s),
			h = o / l,
			c = h * h,
			u = c * c,
			d = 1 - Es * a,
			g = Math.sqrt(1 - Es * a),
			f = Rs * l ** 2,
			p = f * f,
			m = i / (($s / g) * Cs),
			_ = m * m,
			y = _ * m,
			x = y * m,
			v = x * m,
			w = s - (h / ((1 - Es) / d)) * (_ / 2 - (x / 24) * (5 + 3 * c + 10 * f - 4 * p - 9 * Rs)) + ((v * m) / 720) * (61 + 90 * c + 298 * f + 45 * u - 252 * Rs - 3 * p);
		let b = (m - (y / 6) * (1 + 2 * c + f) + (v / 120) * (5 - 2 * f + 28 * c - 3 * p + 8 * Rs + 24 * u)) / l;
		return (b = Ir(b + Cr(Ws(n.number)), -Math.PI, Math.PI)), [Sr(b), Sr(w)];
	}
	function Vs(t, e, n) {
		(t = Ir(t, -180, 180)), e < -80 ? (e = -80) : e > 84 && (e = 84);
		const i = Cr(e),
			r = Math.sin(i),
			s = Math.cos(i),
			o = r / s,
			a = o * o,
			l = a * a,
			h = Cr(t),
			c = Cr(Ws(n.number)),
			u = $s / Math.sqrt(1 - Es * r ** 2),
			d = Rs * s ** 2,
			g = s * Ir(h - c, -Math.PI, Math.PI),
			f = g * g,
			p = f * g,
			m = p * g,
			_ = m * g,
			y = _ * g,
			x = $s * (Ds * i - 0.002514607064228144 * Math.sin(2 * i) + Os * Math.sin(4 * i) - zs * Math.sin(6 * i)),
			v = Cs * u * (g + (p / 6) * (1 - a + d) + (_ / 120) * (5 - 18 * a + l + 72 * d - 58 * Rs)) + 5e5;
		let w = Cs * (x + u * o * (f / 2 + (m / 24) * (5 - a + 9 * d + 4 * d ** 2) + (y / 720) * (61 - 58 * a + l + 600 * d - 330 * Rs)));
		return n.north || (w += 1e7), [v, w];
	}
	function Ws(t) {
		return 6 * (t - 1) - 180 + 3;
	}
	const Xs = [/^EPSG:(\d+)$/, /^urn:ogc:def:crs:EPSG::(\d+)$/, /^http:\/\/www\.opengis\.net\/def\/crs\/EPSG\/0\/(\d+)$/];
	function qs(t) {
		let e = 0;
		for (const n of Xs) {
			const i = t.match(n);
			if (i) {
				e = parseInt(i[1]);
				break;
			}
		}
		if (!e) return null;
		let n = 0,
			i = !1;
		return e > 32700 && e < 32761 ? (n = e - 32700) : e > 32600 && e < 32661 && ((i = !0), (n = e - 32600)), n ? { number: n, north: i } : null;
	}
	function Zs(t, e) {
		return function (n, i, r, s) {
			const o = n.length;
			(r = r > 1 ? r : 2), (s = s ?? r), i || (i = r > 2 ? n.slice() : new Array(o));
			for (let r = 0; r < o; r += s) {
				const s = n[r],
					o = n[r + 1],
					a = t(s, o, e);
				(i[r] = a[0]), (i[r + 1] = a[1]);
			}
			return i;
		};
	}
	const Ks = 6371008.8;
	function Ys(t, e, n) {
		n = n || Ks;
		const i = Cr(t[1]),
			r = Cr(e[1]),
			s = (r - i) / 2,
			o = Cr(e[0] - t[0]) / 2,
			a = Math.sin(s) * Math.sin(s) + Math.sin(o) * Math.sin(o) * Math.cos(i) * Math.cos(r);
		return 2 * n * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	}
	function Hs(t, e) {
		let n = 0;
		for (let i = 0, r = t.length; i < r - 1; ++i) n += Ys(t[i], t[i + 1], e);
		return n;
	}
	function Js(t, e) {
		let n = 0;
		const i = t.length;
		let r = t[i - 1][0],
			s = t[i - 1][1];
		for (let e = 0; e < i; e++) {
			const i = t[e][0],
				o = t[e][1];
			(n += Cr(i - r) * (2 + Math.sin(Cr(s)) + Math.sin(Cr(o)))), (r = i), (s = o);
		}
		return (n * e * e) / 2;
	}
	var Qs = Object.freeze({
		__proto__: null,
		DEFAULT_RADIUS: Ks,
		getArea: function t(e, n) {
			const i = (n = n || {}).radius || Ks,
				r = n.projection || 'EPSG:3857',
				s = e.getType();
			'GeometryCollection' !== s && (e = e.clone().transform(r, 'EPSG:4326'));
			let o,
				a,
				l,
				h,
				c,
				u,
				d = 0;
			switch (s) {
				case 'Point':
				case 'MultiPoint':
				case 'LineString':
				case 'MultiLineString':
				case 'LinearRing':
					break;
				case 'Polygon':
					for (o = e.getCoordinates(), d = Math.abs(Js(o[0], i)), l = 1, h = o.length; l < h; ++l) d -= Math.abs(Js(o[l], i));
					break;
				case 'MultiPolygon':
					for (o = e.getCoordinates(), l = 0, h = o.length; l < h; ++l) for (a = o[l], d += Math.abs(Js(a[0], i)), c = 1, u = a.length; c < u; ++c) d -= Math.abs(Js(a[c], i));
					break;
				case 'GeometryCollection': {
					const i = e.getGeometries();
					for (l = 0, h = i.length; l < h; ++l) d += t(i[l], n);
					break;
				}
				default:
					throw new Error('Unsupported geometry type: ' + s);
			}
			return d;
		},
		getDistance: Ys,
		getLength: function t(e, n) {
			const i = (n = n || {}).radius || Ks,
				r = n.projection || 'EPSG:3857',
				s = e.getType();
			'GeometryCollection' !== s && (e = e.clone().transform(r, 'EPSG:4326'));
			let o,
				a,
				l,
				h,
				c,
				u,
				d = 0;
			switch (s) {
				case 'Point':
				case 'MultiPoint':
					break;
				case 'LineString':
				case 'LinearRing':
					(o = e.getCoordinates()), (d = Hs(o, i));
					break;
				case 'MultiLineString':
				case 'Polygon':
					for (o = e.getCoordinates(), l = 0, h = o.length; l < h; ++l) d += Hs(o[l], i);
					break;
				case 'MultiPolygon':
					for (o = e.getCoordinates(), l = 0, h = o.length; l < h; ++l) for (a = o[l], c = 0, u = a.length; c < u; ++c) d += Hs(a[c], i);
					break;
				case 'GeometryCollection': {
					const i = e.getGeometries();
					for (l = 0, h = i.length; l < h; ++l) d += t(i[l], n);
					break;
				}
				default:
					throw new Error('Unsupported geometry type: ' + s);
			}
			return d;
		},
		offset: function (t, e, n, i) {
			i = i || Ks;
			const r = Cr(t[1]),
				s = Cr(t[0]),
				o = e / i,
				a = Math.asin(Math.sin(r) * Math.cos(o) + Math.cos(r) * Math.sin(o) * Math.cos(n));
			return [Sr(s + Math.atan2(Math.sin(n) * Math.sin(o) * Math.cos(r), Math.cos(o) - Math.sin(r) * Math.sin(a))), Sr(a)];
		},
	});
	const to = [
			function (t) {
				const e = qs(t.getCode());
				return e ? { forward: Zs(Vs, e), inverse: Zs(Bs, e) } : null;
			},
		],
		eo = [
			function (t) {
				return qs(t) ? new os({ code: t, units: 'm' }) : null;
			},
		];
	let no = !0;
	function io(t) {
		no = !(void 0 === t || t);
	}
	function ro(t, e) {
		if (void 0 !== e) for (let n = 0, i = t.length; n < i; ++n) e[n] = t[n];
		else e = t.slice();
		return e;
	}
	function so(t) {
		!(function (t, e) {
			vs[t] = e;
		})(t.getCode(), t),
			bs(t, t, ro);
	}
	function oo(t) {
		t.forEach(so);
	}
	function ao(t) {
		if ('string' != typeof t) return t;
		const e = vs[(n = t)] || vs[n.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, 'EPSG:$3')] || null;
		var n;
		if (e) return e;
		for (const e of eo) {
			const n = e(t);
			if (n) return n;
		}
		return null;
	}
	function lo(t, e, n, i) {
		let r;
		const s = (t = ao(t)).getPointResolutionFunc();
		if (s) {
			if (((r = s(e, n)), i && i !== t.getUnits())) {
				const e = t.getMetersPerUnit();
				e && (r = (r * e) / ss[i]);
			}
		} else {
			const s = t.getUnits();
			if (('degrees' == s && !i) || 'degrees' == i) r = e;
			else {
				const o = mo(t, ao('EPSG:4326'));
				if (o || 'degrees' === s) {
					let t = [n[0] - e / 2, n[1], n[0] + e / 2, n[1], n[0], n[1] - e / 2, n[0], n[1] + e / 2];
					t = o(t, t, 2);
					r = (Ys(t.slice(0, 2), t.slice(2, 4)) + Ys(t.slice(4, 6), t.slice(6, 8))) / 2;
				} else r = e * t.getMetersPerUnit();
				const a = i ? ss[i] : t.getMetersPerUnit();
				void 0 !== a && (r /= a);
			}
		}
		return r;
	}
	function ho(t) {
		oo(t),
			t.forEach(function (e) {
				t.forEach(function (t) {
					e !== t && bs(e, t, ro);
				});
			});
	}
	function co(t, e, n, i) {
		t.forEach(function (t) {
			e.forEach(function (e) {
				bs(t, e, n), bs(e, t, i);
			});
		});
	}
	function uo(t, e) {
		return t ? ('string' == typeof t ? ao(t) : t) : ao(e);
	}
	function go(t) {
		return function (e, n, i, r) {
			const s = e.length;
			(i = void 0 !== i ? i : 2), (r = r ?? i), (n = void 0 !== n ? n : new Array(s));
			for (let o = 0; o < s; o += r) {
				const s = t(e.slice(o, o + i)),
					a = s.length;
				for (let t = 0, i = r; t < i; ++t) n[o + t] = t >= a ? e[o + t] : s[t];
			}
			return n;
		};
	}
	function fo(t, e) {
		return io(), xo(t, 'EPSG:4326', void 0 !== e ? e : 'EPSG:3857');
	}
	function po(t, e) {
		if (t === e) return !0;
		const n = t.getUnits() === e.getUnits();
		if (t.getCode() === e.getCode()) return n;
		return mo(t, e) === ro && n;
	}
	function mo(t, e) {
		const n = t.getCode(),
			i = e.getCode();
		let r = Ss(n, i);
		if (r) return r;
		let s = null,
			o = null;
		for (const n of to) s || (s = n(t)), o || (o = n(e));
		if (!s && !o) return null;
		const a = 'EPSG:4326';
		if (o)
			if (s) r = _o(s.inverse, o.forward);
			else {
				const t = Ss(n, a);
				t && (r = _o(t, o.forward));
			}
		else {
			const t = Ss(a, i);
			t && (r = _o(s.inverse, t));
		}
		return r && (so(t), so(e), bs(t, e, r)), r;
	}
	function _o(t, e) {
		return function (n, i, r, s) {
			return (i = t(n, i, r, s)), e(i, i, r, s);
		};
	}
	function yo(t, e) {
		return mo(ao(t), ao(e));
	}
	function xo(t, e, n) {
		const i = yo(e, n);
		if (!i) {
			const t = ao(e).getCode(),
				i = ao(n).getCode();
			throw new Error(`No transform available between ${t} and ${i}`);
		}
		return i(t, void 0, t.length);
	}
	function vo(t, e, n, i) {
		return ur(t, yo(e, n), void 0, i);
	}
	let wo = null;
	function bo(t) {
		wo = ao(t);
	}
	function So() {
		return wo;
	}
	function Co(t, e) {
		return wo ? xo(t, e, wo) : t;
	}
	function Eo(t, e) {
		return wo ? xo(t, wo, e) : (no && !Jr(t, [0, 0]) && t[0] >= -180 && t[0] <= 180 && t[1] >= -90 && t[1] <= 90 && ((no = !1), Zr('Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.')), t);
	}
	function To(t, e) {
		return wo ? vo(t, e, wo) : t;
	}
	function Po(t, e) {
		return wo ? vo(t, wo, e) : t;
	}
	function Ro(t, e) {
		if (!wo) return t;
		const n = ao(e).getMetersPerUnit(),
			i = wo.getMetersPerUnit();
		return n && i ? (t * n) / i : t;
	}
	function Fo() {
		ho(gs), ho(xs), co(xs, gs, fs, ps);
	}
	Fo();
	var Mo = Object.freeze({
		__proto__: null,
		METERS_PER_UNIT: ss,
		Projection: os,
		addCommon: Fo,
		addCoordinateTransforms: function (t, e, n, i) {
			const r = ao(t),
				s = ao(e);
			bs(r, s, go(n)), bs(s, r, go(i));
		},
		addEquivalentProjections: ho,
		addEquivalentTransforms: co,
		addProjection: so,
		addProjections: oo,
		clearAllProjections: function () {
			(vs = {}), (ws = {});
		},
		clearUserProjection: function () {
			wo = null;
		},
		cloneTransform: ro,
		createProjection: uo,
		createSafeCoordinateTransform: function (t, e, n) {
			return function (i) {
				let r, s;
				if (t.canWrapX()) {
					const e = t.getExtent(),
						o = lr(e);
					(s = rs((i = i.slice(0)), t, o)), s && (i[0] = i[0] - s * o), (i[0] = vr(i[0], e[0], e[2])), (i[1] = vr(i[1], e[1], e[3])), (r = n(i));
				} else r = n(i);
				return s && e.canWrapX() && (r[0] += s * lr(e.getExtent())), r;
			};
		},
		createTransformFromCoordinateTransform: go,
		disableCoordinateWarning: io,
		equivalent: po,
		fromLonLat: fo,
		fromUserCoordinate: Eo,
		fromUserExtent: Po,
		fromUserResolution: function (t, e) {
			if (!wo) return t;
			const n = ao(e).getMetersPerUnit(),
				i = wo.getMetersPerUnit();
			return n && i ? (t * i) / n : t;
		},
		get: ao,
		getPointResolution: lo,
		getTransform: yo,
		getTransformFromProjections: mo,
		getUserProjection: So,
		identityTransform: function (t, e) {
			if (void 0 !== e && t !== e) {
				for (let n = 0, i = t.length; n < i; ++n) e[n] = t[n];
				t = e;
			}
			return t;
		},
		setUserProjection: bo,
		toLonLat: function (t, e) {
			const n = xo(t, void 0 !== e ? e : 'EPSG:3857', 'EPSG:4326'),
				i = n[0];
			return (i < -180 || i > 180) && (n[0] = Er(i + 180, 360) - 180), n;
		},
		toUserCoordinate: Co,
		toUserExtent: To,
		toUserResolution: Ro,
		transform: xo,
		transformExtent: vo,
		transformWithProjections: function (t, e, n) {
			return mo(e, n)(t);
		},
		useGeographic: function () {
			bo('EPSG:4326');
		},
	});
	const Io = new Array(6);
	function ko(t) {
		return Ao(t, 1, 0, 0, 1, 0, 0);
	}
	function Lo(t, e) {
		const n = t[0],
			i = t[1],
			r = t[2],
			s = t[3],
			o = t[4],
			a = t[5],
			l = e[0],
			h = e[1],
			c = e[2],
			u = e[3],
			d = e[4],
			g = e[5];
		return (t[0] = n * l + r * h), (t[1] = i * l + s * h), (t[2] = n * c + r * u), (t[3] = i * c + s * u), (t[4] = n * d + r * g + o), (t[5] = i * d + s * g + a), t;
	}
	function Ao(t, e, n, i, r, s, o) {
		return (t[0] = e), (t[1] = n), (t[2] = i), (t[3] = r), (t[4] = s), (t[5] = o), t;
	}
	function Do(t, e) {
		const n = e[0],
			i = e[1];
		return (e[0] = t[0] * n + t[2] * i + t[4]), (e[1] = t[1] * n + t[3] * i + t[5]), e;
	}
	function Oo(t, e, n) {
		return Lo(t, Ao(Io, e, 0, 0, n, 0, 0));
	}
	function zo(t, e, n) {
		return Lo(t, Ao(Io, 1, 0, 0, 1, e, n));
	}
	function Go(t, e, n, i, r, s, o, a) {
		const l = Math.sin(s),
			h = Math.cos(s);
		return (t[0] = i * h), (t[1] = r * l), (t[2] = -i * l), (t[3] = r * h), (t[4] = o * i * h - a * i * l + e), (t[5] = o * r * l + a * r * h + n), t;
	}
	function jo(t, e) {
		const n = (i = e)[0] * i[3] - i[1] * i[2];
		var i;
		Ci(0 !== n, 'Transformation matrix cannot be inverted');
		const r = e[0],
			s = e[1],
			o = e[2],
			a = e[3],
			l = e[4],
			h = e[5];
		return (t[0] = a / n), (t[1] = -s / n), (t[2] = -o / n), (t[3] = r / n), (t[4] = (o * h - a * l) / n), (t[5] = -(r * h - s * l) / n), t;
	}
	const No = [1e6, 1e6, 1e6, 1e6, 2, 2];
	const Uo = [1, 0, 0, 1, 0, 0],
		$o = [NaN, NaN];
	class Bo extends Si {
		constructor() {
			super(),
				(this.extent_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0]),
				(this.extentRevision_ = -1),
				(this.simplifiedGeometryMaxMinSquaredTolerance = 0),
				(this.simplifiedGeometryRevision = 0),
				(this.simplifyTransformedInternal = Xn((t, e, n) => {
					if (!n) return this.getSimplifiedGeometry(e);
					const i = this.clone();
					return i.applyTransform(n), i.getSimplifiedGeometry(e);
				}));
		}
		simplifyTransformed(t, e) {
			return this.simplifyTransformedInternal(this.getRevision(), t, e);
		}
		clone() {
			return xi();
		}
		closestPointXY(t, e, n, i) {
			return xi();
		}
		containsXY(t, e) {
			return 0 === this.closestPointXY(t, e, $o, Number.MIN_VALUE);
		}
		getClosestPoint(t, e) {
			return (e = e || [NaN, NaN]), this.closestPointXY(t[0], t[1], e, 1 / 0), e;
		}
		intersectsCoordinate(t) {
			return this.containsXY(t[0], t[1]);
		}
		computeExtent(t) {
			return xi();
		}
		getExtent(t) {
			if (this.extentRevision_ != this.getRevision()) {
				const t = this.computeExtent(this.extent_);
				(isNaN(t[0]) || isNaN(t[1])) && $i(t), (this.extentRevision_ = this.getRevision());
			}
			return (function (t, e) {
				return e ? ((e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e) : t;
			})(this.extent_, t);
		}
		rotate(t, e) {
			xi();
		}
		scale(t, e, n) {
			xi();
		}
		simplify(t) {
			return this.getSimplifiedGeometry(t * t);
		}
		getSimplifiedGeometry(t) {
			return xi();
		}
		getType() {
			return xi();
		}
		applyTransform(t) {
			xi();
		}
		intersectsExtent(t) {
			return xi();
		}
		translate(t, e) {
			xi();
		}
		transform(t, e) {
			const n = ao(t),
				i =
					'tile-pixels' == n.getUnits()
						? function (t, i, r) {
								const s = n.getExtent(),
									o = n.getWorldExtent(),
									a = rr(o) / rr(s);
								Go(Uo, o[0], o[3], a, -a, 0, 0, 0);
								const l = Xr(t, 0, t.length, r, Uo, i),
									h = yo(n, e);
								return h ? h(l, l, r) : l;
						  }
						: yo(n, e);
			return this.applyTransform(i), this;
		}
	}
	class Vo extends Bo {
		constructor() {
			super(), (this.layout = 'XY'), (this.stride = 2), this.flatCoordinates;
		}
		computeExtent(t) {
			return Vi(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t);
		}
		getCoordinates() {
			return xi();
		}
		getFirstCoordinate() {
			return this.flatCoordinates.slice(0, this.stride);
		}
		getFlatCoordinates() {
			return this.flatCoordinates;
		}
		getLastCoordinate() {
			return this.flatCoordinates.slice(this.flatCoordinates.length - this.stride);
		}
		getLayout() {
			return this.layout;
		}
		getSimplifiedGeometry(t) {
			if ((this.simplifiedGeometryRevision !== this.getRevision() && ((this.simplifiedGeometryMaxMinSquaredTolerance = 0), (this.simplifiedGeometryRevision = this.getRevision())), t < 0 || (0 !== this.simplifiedGeometryMaxMinSquaredTolerance && t <= this.simplifiedGeometryMaxMinSquaredTolerance))) return this;
			const e = this.getSimplifiedGeometryInternal(t);
			return e.getFlatCoordinates().length < this.flatCoordinates.length ? e : ((this.simplifiedGeometryMaxMinSquaredTolerance = t), this);
		}
		getSimplifiedGeometryInternal(t) {
			return this;
		}
		getStride() {
			return this.stride;
		}
		setFlatCoordinates(t, e) {
			(this.stride = Xo(t)), (this.layout = t), (this.flatCoordinates = e);
		}
		setCoordinates(t, e) {
			xi();
		}
		setLayout(t, e, n) {
			let i;
			if (t) i = Xo(t);
			else {
				for (let t = 0; t < n; ++t) {
					if (0 === e.length) return (this.layout = 'XY'), void (this.stride = 2);
					e = e[0];
				}
				(i = e.length), (t = Wo(i));
			}
			(this.layout = t), (this.stride = i);
		}
		applyTransform(t) {
			this.flatCoordinates && (t(this.flatCoordinates, this.flatCoordinates, this.layout.startsWith('XYZ') ? 3 : 2, this.stride), this.changed());
		}
		rotate(t, e) {
			const n = this.getFlatCoordinates();
			if (n) {
				const i = this.getStride();
				qr(n, 0, n.length, i, t, e, n), this.changed();
			}
		}
		scale(t, e, n) {
			void 0 === e && (e = t), n || (n = tr(this.getExtent()));
			const i = this.getFlatCoordinates();
			if (i) {
				const r = this.getStride();
				!(function (t, e, n, i, r, s, o, a) {
					a = a || [];
					const l = o[0],
						h = o[1];
					let c = 0;
					for (let o = e; o < n; o += i) {
						const e = t[o] - l,
							n = t[o + 1] - h;
						(a[c++] = l + r * e), (a[c++] = h + s * n);
						for (let e = o + 2; e < o + i; ++e) a[c++] = t[e];
					}
					a && a.length != c && (a.length = c);
				})(i, 0, i.length, r, t, e, n, i),
					this.changed();
			}
		}
		translate(t, e) {
			const n = this.getFlatCoordinates();
			if (n) {
				const i = this.getStride();
				!(function (t, e, n, i, r, s, o) {
					o = o || [];
					let a = 0;
					for (let l = e; l < n; l += i) {
						(o[a++] = t[l] + r), (o[a++] = t[l + 1] + s);
						for (let e = l + 2; e < l + i; ++e) o[a++] = t[e];
					}
					o && o.length != a && (o.length = a);
				})(n, 0, n.length, i, t, e, n),
					this.changed();
			}
		}
	}
	function Wo(t) {
		let e;
		return 2 == t ? (e = 'XY') : 3 == t ? (e = 'XYZ') : 4 == t && (e = 'XYZM'), e;
	}
	function Xo(t) {
		let e;
		return 'XY' == t ? (e = 2) : 'XYZ' == t || 'XYM' == t ? (e = 3) : 'XYZM' == t && (e = 4), e;
	}
	function qo(t, e, n, i) {
		for (let i = 0, r = n.length; i < r; ++i) t[e++] = n[i];
		return e;
	}
	function Zo(t, e, n, i) {
		for (let r = 0, s = n.length; r < s; ++r) {
			const s = n[r];
			for (let n = 0; n < i; ++n) t[e++] = s[n];
		}
		return e;
	}
	function Ko(t, e, n, i, r) {
		r = r || [];
		let s = 0;
		for (let o = 0, a = n.length; o < a; ++o) {
			const a = Zo(t, e, n[o], i);
			(r[s++] = a), (e = a);
		}
		return (r.length = s), r;
	}
	function Yo(t, e, n, i, r) {
		r = r || [];
		let s = 0;
		for (let o = 0, a = n.length; o < a; ++o) {
			const a = Ko(t, e, n[o], i, r[s]);
			0 === a.length && (a[0] = e), (r[s++] = a), (e = a[a.length - 1]);
		}
		return (r.length = s), r;
	}
	class Ho extends Vo {
		constructor(t, e, n) {
			super(), void 0 !== n && void 0 === e ? this.setFlatCoordinates(n, t) : ((e = e || 0), this.setCenterAndRadius(t, e, n));
		}
		clone() {
			const t = new Ho(this.flatCoordinates.slice(), void 0, this.layout);
			return t.applyProperties(this), t;
		}
		closestPointXY(t, e, n, i) {
			const r = this.flatCoordinates,
				s = t - r[0],
				o = e - r[1],
				a = s * s + o * o;
			if (a < i) {
				if (0 === a) for (let t = 0; t < this.stride; ++t) n[t] = r[t];
				else {
					const t = this.getRadius() / Math.sqrt(a);
					(n[0] = r[0] + t * s), (n[1] = r[1] + t * o);
					for (let t = 2; t < this.stride; ++t) n[t] = r[t];
				}
				return (n.length = this.stride), a;
			}
			return i;
		}
		containsXY(t, e) {
			const n = this.flatCoordinates,
				i = t - n[0],
				r = e - n[1];
			return i * i + r * r <= this.getRadiusSquared_();
		}
		getCenter() {
			return this.flatCoordinates.slice(0, this.stride);
		}
		computeExtent(t) {
			const e = this.flatCoordinates,
				n = e[this.stride] - e[0];
			return Ui(e[0] - n, e[1] - n, e[0] + n, e[1] + n, t);
		}
		getRadius() {
			return Math.sqrt(this.getRadiusSquared_());
		}
		getRadiusSquared_() {
			const t = this.flatCoordinates[this.stride] - this.flatCoordinates[0],
				e = this.flatCoordinates[this.stride + 1] - this.flatCoordinates[1];
			return t * t + e * e;
		}
		getType() {
			return 'Circle';
		}
		intersectsExtent(t) {
			if (hr(t, this.getExtent())) {
				const e = this.getCenter();
				return (t[0] <= e[0] && t[2] >= e[0]) || (t[1] <= e[1] && t[3] >= e[1]) || Yi(t, this.intersectsCoordinate.bind(this));
			}
			return !1;
		}
		setCenter(t) {
			const e = this.stride,
				n = this.flatCoordinates[e] - this.flatCoordinates[0],
				i = t.slice();
			i[e] = i[0] + n;
			for (let n = 1; n < e; ++n) i[e + n] = t[n];
			this.setFlatCoordinates(this.layout, i), this.changed();
		}
		setCenterAndRadius(t, e, n) {
			this.setLayout(n, t, 0), this.flatCoordinates || (this.flatCoordinates = []);
			const i = this.flatCoordinates;
			let r = qo(i, 0, t, this.stride);
			i[r++] = i[0] + e;
			for (let t = 1, e = this.stride; t < e; ++t) i[r++] = i[t];
			(i.length = r), this.changed();
		}
		getCoordinates() {
			return null;
		}
		setCoordinates(t, e) {}
		setRadius(t) {
			(this.flatCoordinates[this.stride] = this.flatCoordinates[0] + t), this.changed();
		}
		rotate(t, e) {
			const n = this.getCenter(),
				i = this.getStride();
			this.setCenter(qr(n, 0, n.length, i, t, e, n)), this.changed();
		}
	}
	Ho.prototype.transform;
	class Jo extends Bo {
		constructor(t) {
			super(), (this.geometries_ = t), (this.changeEventsKeys_ = []), this.listenGeometriesChange_();
		}
		unlistenGeometriesChange_() {
			this.changeEventsKeys_.forEach(pi), (this.changeEventsKeys_.length = 0);
		}
		listenGeometriesChange_() {
			const t = this.geometries_;
			for (let e = 0, n = t.length; e < n; ++e) this.changeEventsKeys_.push(gi(t[e], Kn, this.changed, this));
		}
		clone() {
			const t = new Jo(Qo(this.geometries_));
			return t.applyProperties(this), t;
		}
		closestPointXY(t, e, n, i) {
			if (i < Di(this.getExtent(), t, e)) return i;
			const r = this.geometries_;
			for (let s = 0, o = r.length; s < o; ++s) i = r[s].closestPointXY(t, e, n, i);
			return i;
		}
		containsXY(t, e) {
			const n = this.geometries_;
			for (let i = 0, r = n.length; i < r; ++i) if (n[i].containsXY(t, e)) return !0;
			return !1;
		}
		computeExtent(t) {
			$i(t);
			const e = this.geometries_;
			for (let n = 0, i = e.length; n < i; ++n) Xi(t, e[n].getExtent());
			return t;
		}
		getGeometries() {
			return Qo(this.geometries_);
		}
		getGeometriesArray() {
			return this.geometries_;
		}
		getGeometriesArrayRecursive() {
			let t = [];
			const e = this.geometries_;
			for (let n = 0, i = e.length; n < i; ++n) e[n].getType() === this.getType() ? (t = t.concat(e[n].getGeometriesArrayRecursive())) : t.push(e[n]);
			return t;
		}
		getSimplifiedGeometry(t) {
			if ((this.simplifiedGeometryRevision !== this.getRevision() && ((this.simplifiedGeometryMaxMinSquaredTolerance = 0), (this.simplifiedGeometryRevision = this.getRevision())), t < 0 || (0 !== this.simplifiedGeometryMaxMinSquaredTolerance && t < this.simplifiedGeometryMaxMinSquaredTolerance))) return this;
			const e = [],
				n = this.geometries_;
			let i = !1;
			for (let r = 0, s = n.length; r < s; ++r) {
				const s = n[r],
					o = s.getSimplifiedGeometry(t);
				e.push(o), o !== s && (i = !0);
			}
			if (i) {
				return new Jo(e);
			}
			return (this.simplifiedGeometryMaxMinSquaredTolerance = t), this;
		}
		getType() {
			return 'GeometryCollection';
		}
		intersectsExtent(t) {
			const e = this.geometries_;
			for (let n = 0, i = e.length; n < i; ++n) if (e[n].intersectsExtent(t)) return !0;
			return !1;
		}
		isEmpty() {
			return 0 === this.geometries_.length;
		}
		rotate(t, e) {
			const n = this.geometries_;
			for (let i = 0, r = n.length; i < r; ++i) n[i].rotate(t, e);
			this.changed();
		}
		scale(t, e, n) {
			n || (n = tr(this.getExtent()));
			const i = this.geometries_;
			for (let r = 0, s = i.length; r < s; ++r) i[r].scale(t, e, n);
			this.changed();
		}
		setGeometries(t) {
			this.setGeometriesArray(Qo(t));
		}
		setGeometriesArray(t) {
			this.unlistenGeometriesChange_(), (this.geometries_ = t), this.listenGeometriesChange_(), this.changed();
		}
		applyTransform(t) {
			const e = this.geometries_;
			for (let n = 0, i = e.length; n < i; ++n) e[n].applyTransform(t);
			this.changed();
		}
		translate(t, e) {
			const n = this.geometries_;
			for (let i = 0, r = n.length; i < r; ++i) n[i].translate(t, e);
			this.changed();
		}
		disposeInternal() {
			this.unlistenGeometriesChange_(), super.disposeInternal();
		}
	}
	function Qo(t) {
		return t.map((t) => t.clone());
	}
	function ta(t, e, n, i) {
		let r = 0;
		const s = t[n - i],
			o = t[n - i + 1];
		let a = 0,
			l = 0;
		for (; e < n; e += i) {
			const n = t[e] - s,
				i = t[e + 1] - o;
			(r += l * n - a * i), (a = n), (l = i);
		}
		return r / 2;
	}
	function ea(t, e, n, i) {
		let r = 0;
		for (let s = 0, o = n.length; s < o; ++s) {
			const o = n[s];
			(r += ta(t, e, o, i)), (e = o);
		}
		return r;
	}
	function na(t, e, n, i, r, s, o) {
		const a = t[e],
			l = t[e + 1],
			h = t[n] - a,
			c = t[n + 1] - l;
		let u;
		if (0 === h && 0 === c) u = e;
		else {
			const d = ((r - a) * h + (s - l) * c) / (h * h + c * c);
			if (d > 1) u = n;
			else {
				if (d > 0) {
					for (let r = 0; r < i; ++r) o[r] = Tr(t[e + r], t[n + r], d);
					return void (o.length = i);
				}
				u = e;
			}
		}
		for (let e = 0; e < i; ++e) o[e] = t[u + e];
		o.length = i;
	}
	function ia(t, e, n, i, r) {
		let s = t[e],
			o = t[e + 1];
		for (e += i; e < n; e += i) {
			const n = t[e],
				i = t[e + 1],
				a = br(s, o, n, i);
			a > r && (r = a), (s = n), (o = i);
		}
		return r;
	}
	function ra(t, e, n, i, r) {
		for (let s = 0, o = n.length; s < o; ++s) {
			const o = n[s];
			(r = ia(t, e, o, i, r)), (e = o);
		}
		return r;
	}
	function sa(t, e, n, i, r, s, o, a, l, h, c) {
		if (e == n) return h;
		let u, d;
		if (0 === r) {
			if (((d = br(o, a, t[e], t[e + 1])), d < h)) {
				for (u = 0; u < i; ++u) l[u] = t[e + u];
				return (l.length = i), d;
			}
			return h;
		}
		c = c || [NaN, NaN];
		let g = e + i;
		for (; g < n; )
			if ((na(t, g - i, g, i, o, a, c), (d = br(o, a, c[0], c[1])), d < h)) {
				for (h = d, u = 0; u < i; ++u) l[u] = c[u];
				(l.length = i), (g += i);
			} else g += i * Math.max(((Math.sqrt(d) - Math.sqrt(h)) / r) | 0, 1);
		if (s && (na(t, n - i, e, i, o, a, c), (d = br(o, a, c[0], c[1])), d < h)) {
			for (h = d, u = 0; u < i; ++u) l[u] = c[u];
			l.length = i;
		}
		return h;
	}
	function oa(t, e, n, i, r, s, o, a, l, h, c) {
		c = c || [NaN, NaN];
		for (let u = 0, d = n.length; u < d; ++u) {
			const d = n[u];
			(h = sa(t, e, d, i, r, s, o, a, l, h, c)), (e = d);
		}
		return h;
	}
	function aa(t, e, n, i, r) {
		r = void 0 !== r ? r : [];
		let s = 0;
		for (let o = e; o < n; o += i) r[s++] = t.slice(o, o + i);
		return (r.length = s), r;
	}
	function la(t, e, n, i, r) {
		r = void 0 !== r ? r : [];
		let s = 0;
		for (let o = 0, a = n.length; o < a; ++o) {
			const a = n[o];
			(r[s++] = aa(t, e, a, i, r[s])), (e = a);
		}
		return (r.length = s), r;
	}
	function ha(t, e, n, i, r) {
		r = void 0 !== r ? r : [];
		let s = 0;
		for (let o = 0, a = n.length; o < a; ++o) {
			const a = n[o];
			(r[s++] = 1 === a.length && a[0] === e ? [] : la(t, e, a, i, r[s])), (e = a[a.length - 1]);
		}
		return (r.length = s), r;
	}
	class ca extends Vo {
		constructor(t, e) {
			super(), (this.maxDelta_ = -1), (this.maxDeltaRevision_ = -1), void 0 === e || Array.isArray(t[0]) ? this.setCoordinates(t, e) : this.setFlatCoordinates(e, t);
		}
		clone() {
			return new ca(this.flatCoordinates.slice(), this.layout);
		}
		closestPointXY(t, e, n, i) {
			return i < Di(this.getExtent(), t, e) ? i : (this.maxDeltaRevision_ != this.getRevision() && ((this.maxDelta_ = Math.sqrt(ia(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0))), (this.maxDeltaRevision_ = this.getRevision())), sa(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, !0, t, e, n, i));
		}
		getArea() {
			return ta(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
		}
		getCoordinates() {
			return aa(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
		}
		getSimplifiedGeometryInternal(t) {
			const e = [];
			return (e.length = Ur(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, 0)), new ca(e, 'XY');
		}
		getType() {
			return 'LinearRing';
		}
		intersectsExtent(t) {
			return !1;
		}
		setCoordinates(t, e) {
			this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), (this.flatCoordinates.length = Zo(this.flatCoordinates, 0, t, this.stride)), this.changed();
		}
	}
	function ua(t, e, n, i, r) {
		let s;
		for (e += i; e < n; e += i) if (((s = r(t.slice(e - i, e), t.slice(e, e + i))), s)) return s;
		return !1;
	}
	function da(t, e, n, i, r, s) {
		return (
			(s = s ?? Zi([1 / 0, 1 / 0, -1 / 0, -1 / 0], t, e, n, i)),
			!!hr(r, s) &&
				((s[0] >= r[0] && s[2] <= r[2]) ||
					(s[1] >= r[1] && s[3] <= r[3]) ||
					ua(t, e, n, i, function (t, e) {
						return (function (t, e, n) {
							let i = !1;
							const r = ji(t, e),
								s = ji(t, n);
							if (r === Pi || s === Pi) i = !0;
							else {
								const o = t[0],
									a = t[1],
									l = t[2],
									h = t[3],
									c = e[0],
									u = e[1],
									d = n[0],
									g = n[1],
									f = (g - u) / (d - c);
								let p, m;
								s & Ri && !(r & Ri) && ((p = d - (g - h) / f), (i = p >= o && p <= l)), i || !(s & Fi) || r & Fi || ((m = g - (d - l) * f), (i = m >= a && m <= h)), i || !(s & Mi) || r & Mi || ((p = d - (g - a) / f), (i = p >= o && p <= l)), i || !(s & Ii) || r & Ii || ((m = g - (d - o) * f), (i = m >= a && m <= h));
							}
							return i;
						})(r, t, e);
					}))
		);
	}
	function ga(t, e, n, i, r) {
		return !!da(t, e, n, i, r) || !!mr(t, e, n, i, r[0], r[1]) || !!mr(t, e, n, i, r[0], r[3]) || !!mr(t, e, n, i, r[2], r[1]) || !!mr(t, e, n, i, r[2], r[3]);
	}
	function fa(t, e, n, i, r) {
		if (!ga(t, e, n[0], i, r)) return !1;
		if (1 === n.length) return !0;
		for (let e = 1, s = n.length; e < s; ++e) if (pr(t, n[e - 1], n[e], i, r) && !da(t, n[e - 1], n[e], i, r)) return !1;
		return !0;
	}
	function pa(t, e, n, i) {
		let r = t[e],
			s = t[e + 1],
			o = 0;
		for (let a = e + i; a < n; a += i) {
			const e = t[a],
				n = t[a + 1];
			(o += Math.sqrt((e - r) * (e - r) + (n - s) * (n - s))), (r = e), (s = n);
		}
		return o;
	}
	class ma extends Vo {
		constructor(t, e) {
			super(), (this.flatMidpoint_ = null), (this.flatMidpointRevision_ = -1), (this.maxDelta_ = -1), (this.maxDeltaRevision_ = -1), void 0 === e || Array.isArray(t[0]) ? this.setCoordinates(t, e) : this.setFlatCoordinates(e, t);
		}
		appendCoordinate(t) {
			Un(this.flatCoordinates, t), this.changed();
		}
		clone() {
			const t = new ma(this.flatCoordinates.slice(), this.layout);
			return t.applyProperties(this), t;
		}
		closestPointXY(t, e, n, i) {
			return i < Di(this.getExtent(), t, e) ? i : (this.maxDeltaRevision_ != this.getRevision() && ((this.maxDelta_ = Math.sqrt(ia(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0))), (this.maxDeltaRevision_ = this.getRevision())), sa(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, !1, t, e, n, i));
		}
		forEachSegment(t) {
			return ua(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t);
		}
		getCoordinateAtM(t, e) {
			return 'XYM' != this.layout && 'XYZM' != this.layout ? null : ((e = void 0 !== e && e), Lr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e));
		}
		getCoordinates() {
			return aa(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
		}
		getCoordinateAt(t, e) {
			return kr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, this.stride);
		}
		getLength() {
			return pa(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
		}
		getFlatMidpoint() {
			return this.flatMidpointRevision_ != this.getRevision() && ((this.flatMidpoint_ = this.getCoordinateAt(0.5, this.flatMidpoint_ ?? void 0)), (this.flatMidpointRevision_ = this.getRevision())), this.flatMidpoint_;
		}
		getSimplifiedGeometryInternal(t) {
			const e = [];
			return (e.length = Ur(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, 0)), new ma(e, 'XY');
		}
		getType() {
			return 'LineString';
		}
		intersectsExtent(t) {
			return da(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, this.getExtent());
		}
		setCoordinates(t, e) {
			this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), (this.flatCoordinates.length = Zo(this.flatCoordinates, 0, t, this.stride)), this.changed();
		}
	}
	class _a extends Vo {
		constructor(t, e, n) {
			if ((super(), (this.ends_ = []), (this.maxDelta_ = -1), (this.maxDeltaRevision_ = -1), Array.isArray(t[0]))) this.setCoordinates(t, e);
			else if (void 0 !== e && n) this.setFlatCoordinates(e, t), (this.ends_ = n);
			else {
				const e = t,
					n = [],
					i = [];
				for (let t = 0, r = e.length; t < r; ++t) {
					Un(n, e[t].getFlatCoordinates()), i.push(n.length);
				}
				const r = 0 === e.length ? this.getLayout() : e[0].getLayout();
				this.setFlatCoordinates(r, n), (this.ends_ = i);
			}
		}
		appendLineString(t) {
			Un(this.flatCoordinates, t.getFlatCoordinates().slice()), this.ends_.push(this.flatCoordinates.length), this.changed();
		}
		clone() {
			const t = new _a(this.flatCoordinates.slice(), this.layout, this.ends_.slice());
			return t.applyProperties(this), t;
		}
		closestPointXY(t, e, n, i) {
			return i < Di(this.getExtent(), t, e) ? i : (this.maxDeltaRevision_ != this.getRevision() && ((this.maxDelta_ = Math.sqrt(ra(this.flatCoordinates, 0, this.ends_, this.stride, 0))), (this.maxDeltaRevision_ = this.getRevision())), oa(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !1, t, e, n, i));
		}
		getCoordinateAtM(t, e, n) {
			return ('XYM' != this.layout && 'XYZM' != this.layout) || 0 === this.flatCoordinates.length
				? null
				: ((e = void 0 !== e && e),
				  (n = void 0 !== n && n),
				  (function (t, e, n, i, r, s, o) {
						if (o) return Lr(t, e, n[n.length - 1], i, r, s);
						let a;
						if (r < t[i - 1]) return s ? ((a = t.slice(0, i)), (a[i - 1] = r), a) : null;
						if (t[t.length - 1] < r) return s ? ((a = t.slice(t.length - i)), (a[i - 1] = r), a) : null;
						for (let s = 0, o = n.length; s < o; ++s) {
							const o = n[s];
							if (e != o) {
								if (r < t[e + i - 1]) return null;
								if (r <= t[o - 1]) return Lr(t, e, o, i, r, !1);
								e = o;
							}
						}
						return null;
				  })(this.flatCoordinates, 0, this.ends_, this.stride, t, e, n));
		}
		getCoordinates() {
			return la(this.flatCoordinates, 0, this.ends_, this.stride);
		}
		getEnds() {
			return this.ends_;
		}
		getLineString(t) {
			return t < 0 || this.ends_.length <= t ? null : new ma(this.flatCoordinates.slice(0 === t ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout);
		}
		getLineStrings() {
			const t = this.flatCoordinates,
				e = this.ends_,
				n = this.layout,
				i = [];
			let r = 0;
			for (let s = 0, o = e.length; s < o; ++s) {
				const o = e[s],
					a = new ma(t.slice(r, o), n);
				i.push(a), (r = o);
			}
			return i;
		}
		getFlatMidpoints() {
			const t = [],
				e = this.flatCoordinates;
			let n = 0;
			const i = this.ends_,
				r = this.stride;
			for (let s = 0, o = i.length; s < o; ++s) {
				const o = i[s];
				Un(t, kr(e, n, o, r, 0.5)), (n = o);
			}
			return t;
		}
		getSimplifiedGeometryInternal(t) {
			const e = [],
				n = [];
			return (e.length = $r(this.flatCoordinates, 0, this.ends_, this.stride, t, e, 0, n)), new _a(e, 'XY', n);
		}
		getType() {
			return 'MultiLineString';
		}
		intersectsExtent(t) {
			return (function (t, e, n, i, r) {
				for (let s = 0, o = n.length; s < o; ++s) {
					if (da(t, e, n[s], i, r)) return !0;
					e = n[s];
				}
				return !1;
			})(this.flatCoordinates, 0, this.ends_, this.stride, t);
		}
		setCoordinates(t, e) {
			this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []);
			const n = Ko(this.flatCoordinates, 0, t, this.stride, this.ends_);
			(this.flatCoordinates.length = 0 === n.length ? 0 : n[n.length - 1]), this.changed();
		}
	}
	class ya extends Vo {
		constructor(t, e) {
			super(), this.setCoordinates(t, e);
		}
		clone() {
			const t = new ya(this.flatCoordinates.slice(), this.layout);
			return t.applyProperties(this), t;
		}
		closestPointXY(t, e, n, i) {
			const r = this.flatCoordinates,
				s = br(t, e, r[0], r[1]);
			if (s < i) {
				const t = this.stride;
				for (let e = 0; e < t; ++e) n[e] = r[e];
				return (n.length = t), s;
			}
			return i;
		}
		getCoordinates() {
			return this.flatCoordinates.slice();
		}
		computeExtent(t) {
			return Bi(this.flatCoordinates, t);
		}
		getType() {
			return 'Point';
		}
		intersectsExtent(t) {
			return Gi(t, this.flatCoordinates[0], this.flatCoordinates[1]);
		}
		setCoordinates(t, e) {
			this.setLayout(e, t, 0), this.flatCoordinates || (this.flatCoordinates = []), (this.flatCoordinates.length = qo(this.flatCoordinates, 0, t, this.stride)), this.changed();
		}
	}
	class xa extends Vo {
		constructor(t, e) {
			super(), e && !Array.isArray(t[0]) ? this.setFlatCoordinates(e, t) : this.setCoordinates(t, e);
		}
		appendPoint(t) {
			Un(this.flatCoordinates, t.getFlatCoordinates()), this.changed();
		}
		clone() {
			const t = new xa(this.flatCoordinates.slice(), this.layout);
			return t.applyProperties(this), t;
		}
		closestPointXY(t, e, n, i) {
			if (i < Di(this.getExtent(), t, e)) return i;
			const r = this.flatCoordinates,
				s = this.stride;
			for (let o = 0, a = r.length; o < a; o += s) {
				const a = br(t, e, r[o], r[o + 1]);
				if (a < i) {
					i = a;
					for (let t = 0; t < s; ++t) n[t] = r[o + t];
					n.length = s;
				}
			}
			return i;
		}
		getCoordinates() {
			return aa(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride);
		}
		getPoint(t) {
			const e = this.flatCoordinates.length / this.stride;
			return t < 0 || e <= t ? null : new ya(this.flatCoordinates.slice(t * this.stride, (t + 1) * this.stride), this.layout);
		}
		getPoints() {
			const t = this.flatCoordinates,
				e = this.layout,
				n = this.stride,
				i = [];
			for (let r = 0, s = t.length; r < s; r += n) {
				const s = new ya(t.slice(r, r + n), e);
				i.push(s);
			}
			return i;
		}
		getType() {
			return 'MultiPoint';
		}
		intersectsExtent(t) {
			const e = this.flatCoordinates,
				n = this.stride;
			for (let i = 0, r = e.length; i < r; i += n) {
				if (Gi(t, e[i], e[i + 1])) return !0;
			}
			return !1;
		}
		setCoordinates(t, e) {
			this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), (this.flatCoordinates.length = Zo(this.flatCoordinates, 0, t, this.stride)), this.changed();
		}
	}
	class va extends Vo {
		constructor(t, e, n) {
			super(), (this.ends_ = []), (this.flatInteriorPointRevision_ = -1), (this.flatInteriorPoint_ = null), (this.maxDelta_ = -1), (this.maxDeltaRevision_ = -1), (this.orientedRevision_ = -1), (this.orientedFlatCoordinates_ = null), void 0 !== e && n ? (this.setFlatCoordinates(e, t), (this.ends_ = n)) : this.setCoordinates(t, e);
		}
		appendLinearRing(t) {
			this.flatCoordinates ? Un(this.flatCoordinates, t.getFlatCoordinates()) : (this.flatCoordinates = t.getFlatCoordinates().slice()), this.ends_.push(this.flatCoordinates.length), this.changed();
		}
		clone() {
			const t = new va(this.flatCoordinates.slice(), this.layout, this.ends_.slice());
			return t.applyProperties(this), t;
		}
		closestPointXY(t, e, n, i) {
			return i < Di(this.getExtent(), t, e) ? i : (this.maxDeltaRevision_ != this.getRevision() && ((this.maxDelta_ = Math.sqrt(ra(this.flatCoordinates, 0, this.ends_, this.stride, 0))), (this.maxDeltaRevision_ = this.getRevision())), oa(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !0, t, e, n, i));
		}
		containsXY(t, e) {
			return _r(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, e);
		}
		getArea() {
			return ea(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride);
		}
		getCoordinates(t) {
			let e;
			return void 0 !== t ? ((e = this.getOrientedFlatCoordinates().slice()), Gr(e, 0, this.ends_, this.stride, t)) : (e = this.flatCoordinates), la(e, 0, this.ends_, this.stride);
		}
		getEnds() {
			return this.ends_;
		}
		getFlatInteriorPoint() {
			if (this.flatInteriorPointRevision_ != this.getRevision()) {
				const t = tr(this.getExtent());
				(this.flatInteriorPoint_ = yr(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, 0)), (this.flatInteriorPointRevision_ = this.getRevision());
			}
			return this.flatInteriorPoint_;
		}
		getInteriorPoint() {
			return new ya(this.getFlatInteriorPoint(), 'XYM');
		}
		getLinearRingCount() {
			return this.ends_.length;
		}
		getLinearRing(t) {
			return t < 0 || this.ends_.length <= t ? null : new ca(this.flatCoordinates.slice(0 === t ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout);
		}
		getLinearRings() {
			const t = this.layout,
				e = this.flatCoordinates,
				n = this.ends_,
				i = [];
			let r = 0;
			for (let s = 0, o = n.length; s < o; ++s) {
				const o = n[s],
					a = new ca(e.slice(r, o), t);
				i.push(a), (r = o);
			}
			return i;
		}
		getOrientedFlatCoordinates() {
			if (this.orientedRevision_ != this.getRevision()) {
				const t = this.flatCoordinates;
				Or(t, 0, this.ends_, this.stride) ? (this.orientedFlatCoordinates_ = t) : ((this.orientedFlatCoordinates_ = t.slice()), (this.orientedFlatCoordinates_.length = Gr(this.orientedFlatCoordinates_, 0, this.ends_, this.stride))), (this.orientedRevision_ = this.getRevision());
			}
			return this.orientedFlatCoordinates_;
		}
		getSimplifiedGeometryInternal(t) {
			const e = [],
				n = [];
			return (e.length = Wr(this.flatCoordinates, 0, this.ends_, this.stride, Math.sqrt(t), e, 0, n)), new va(e, 'XY', n);
		}
		getType() {
			return 'Polygon';
		}
		intersectsExtent(t) {
			return fa(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t);
		}
		setCoordinates(t, e) {
			this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []);
			const n = Ko(this.flatCoordinates, 0, t, this.stride, this.ends_);
			(this.flatCoordinates.length = 0 === n.length ? 0 : n[n.length - 1]), this.changed();
		}
	}
	function wa(t) {
		if (cr(t)) throw new Error('Cannot create polygon from empty extent');
		const e = t[0],
			n = t[1],
			i = t[2],
			r = t[3],
			s = [e, n, e, r, i, r, i, n, e, n];
		return new va(s, 'XY', [s.length]);
	}
	function ba(t, e, n) {
		e = e || 32;
		const i = t.getStride(),
			r = t.getLayout(),
			s = t.getCenter(),
			o = i * (e + 1),
			a = new Array(o);
		for (let t = 0; t < o; t += i) {
			(a[t] = 0), (a[t + 1] = 0);
			for (let e = 2; e < i; e++) a[t + e] = s[e];
		}
		const l = [a.length],
			h = new va(a, r, l);
		return (
			(function (t, e, n) {
				const i = t.getFlatCoordinates(),
					r = t.getStride(),
					s = i.length / r - 1,
					o = 0;
				for (let t = 0; t <= s; ++t) {
					const a = t * r,
						l = o + (2 * Er(t, s) * Math.PI) / s;
					(i[a] = e[0] + n * Math.cos(l)), (i[a + 1] = e[1] + n * Math.sin(l));
				}
				t.changed();
			})(h, s, t.getRadius()),
			h
		);
	}
	class Sa extends Vo {
		constructor(t, e, n) {
			if ((super(), (this.endss_ = []), (this.flatInteriorPointsRevision_ = -1), (this.flatInteriorPoints_ = null), (this.maxDelta_ = -1), (this.maxDeltaRevision_ = -1), (this.orientedRevision_ = -1), (this.orientedFlatCoordinates_ = null), !n && !Array.isArray(t[0]))) {
				const i = t,
					r = [],
					s = [];
				for (let t = 0, e = i.length; t < e; ++t) {
					const e = i[t],
						n = r.length,
						o = e.getEnds();
					for (let t = 0, e = o.length; t < e; ++t) o[t] += n;
					Un(r, e.getFlatCoordinates()), s.push(o);
				}
				(e = 0 === i.length ? this.getLayout() : i[0].getLayout()), (t = r), (n = s);
			}
			void 0 !== e && n ? (this.setFlatCoordinates(e, t), (this.endss_ = n)) : this.setCoordinates(t, e);
		}
		appendPolygon(t) {
			let e;
			if (this.flatCoordinates) {
				const n = this.flatCoordinates.length;
				Un(this.flatCoordinates, t.getFlatCoordinates()), (e = t.getEnds().slice());
				for (let t = 0, i = e.length; t < i; ++t) e[t] += n;
			} else (this.flatCoordinates = t.getFlatCoordinates().slice()), (e = t.getEnds().slice()), this.endss_.push();
			this.endss_.push(e), this.changed();
		}
		clone() {
			const t = this.endss_.length,
				e = new Array(t);
			for (let n = 0; n < t; ++n) e[n] = this.endss_[n].slice();
			const n = new Sa(this.flatCoordinates.slice(), this.layout, e);
			return n.applyProperties(this), n;
		}
		closestPointXY(t, e, n, i) {
			return i < Di(this.getExtent(), t, e)
				? i
				: (this.maxDeltaRevision_ != this.getRevision() &&
						((this.maxDelta_ = Math.sqrt(
							(function (t, e, n, i, r) {
								for (let s = 0, o = n.length; s < o; ++s) {
									const o = n[s];
									(r = ra(t, e, o, i, r)), (e = o[o.length - 1]);
								}
								return r;
							})(this.flatCoordinates, 0, this.endss_, this.stride, 0)
						)),
						(this.maxDeltaRevision_ = this.getRevision())),
				  (function (t, e, n, i, r, s, o, a, l, h, c) {
						c = c || [NaN, NaN];
						for (let u = 0, d = n.length; u < d; ++u) {
							const d = n[u];
							(h = oa(t, e, d, i, r, s, o, a, l, h, c)), (e = d[d.length - 1]);
						}
						return h;
				  })(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, this.maxDelta_, !0, t, e, n, i));
		}
		containsXY(t, e) {
			return (function (t, e, n, i, r, s) {
				if (0 === n.length) return !1;
				for (let o = 0, a = n.length; o < a; ++o) {
					const a = n[o];
					if (_r(t, e, a, i, r, s)) return !0;
					e = a[a.length - 1];
				}
				return !1;
			})(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t, e);
		}
		getArea() {
			return (function (t, e, n, i) {
				let r = 0;
				for (let s = 0, o = n.length; s < o; ++s) {
					const o = n[s];
					(r += ea(t, e, o, i)), (e = o[o.length - 1]);
				}
				return r;
			})(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride);
		}
		getCoordinates(t) {
			let e;
			return void 0 !== t ? ((e = this.getOrientedFlatCoordinates().slice()), jr(e, 0, this.endss_, this.stride, t)) : (e = this.flatCoordinates), ha(e, 0, this.endss_, this.stride);
		}
		getEndss() {
			return this.endss_;
		}
		getFlatInteriorPoints() {
			if (this.flatInteriorPointsRevision_ != this.getRevision()) {
				const t = fr(this.flatCoordinates, 0, this.endss_, this.stride);
				(this.flatInteriorPoints_ = xr(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t)), (this.flatInteriorPointsRevision_ = this.getRevision());
			}
			return this.flatInteriorPoints_;
		}
		getInteriorPoints() {
			return new xa(this.getFlatInteriorPoints().slice(), 'XYM');
		}
		getOrientedFlatCoordinates() {
			if (this.orientedRevision_ != this.getRevision()) {
				const t = this.flatCoordinates;
				zr(t, 0, this.endss_, this.stride) ? (this.orientedFlatCoordinates_ = t) : ((this.orientedFlatCoordinates_ = t.slice()), (this.orientedFlatCoordinates_.length = jr(this.orientedFlatCoordinates_, 0, this.endss_, this.stride))), (this.orientedRevision_ = this.getRevision());
			}
			return this.orientedFlatCoordinates_;
		}
		getSimplifiedGeometryInternal(t) {
			const e = [],
				n = [];
			return (
				(e.length = (function (t, e, n, i, r, s, o, a) {
					for (let l = 0, h = n.length; l < h; ++l) {
						const h = n[l],
							c = [];
						(o = Wr(t, e, h, i, r, s, o, c)), a.push(c), (e = h[h.length - 1]);
					}
					return o;
				})(this.flatCoordinates, 0, this.endss_, this.stride, Math.sqrt(t), e, 0, n)),
				new Sa(e, 'XY', n)
			);
		}
		getPolygon(t) {
			if (t < 0 || this.endss_.length <= t) return null;
			let e;
			if (0 === t) e = 0;
			else {
				const n = this.endss_[t - 1];
				e = n[n.length - 1];
			}
			const n = this.endss_[t].slice(),
				i = n[n.length - 1];
			if (0 !== e) for (let t = 0, i = n.length; t < i; ++t) n[t] -= e;
			return new va(this.flatCoordinates.slice(e, i), this.layout, n);
		}
		getPolygons() {
			const t = this.layout,
				e = this.flatCoordinates,
				n = this.endss_,
				i = [];
			let r = 0;
			for (let s = 0, o = n.length; s < o; ++s) {
				const o = n[s].slice(),
					a = o[o.length - 1];
				if (0 !== r) for (let t = 0, e = o.length; t < e; ++t) o[t] -= r;
				const l = new va(e.slice(r, a), t, o);
				i.push(l), (r = a);
			}
			return i;
		}
		getType() {
			return 'MultiPolygon';
		}
		intersectsExtent(t) {
			return (function (t, e, n, i, r) {
				for (let s = 0, o = n.length; s < o; ++s) {
					const o = n[s];
					if (fa(t, e, o, i, r)) return !0;
					e = o[o.length - 1];
				}
				return !1;
			})(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t);
		}
		setCoordinates(t, e) {
			this.setLayout(e, t, 3), this.flatCoordinates || (this.flatCoordinates = []);
			const n = Yo(this.flatCoordinates, 0, t, this.stride, this.endss_);
			if (0 === n.length) this.flatCoordinates.length = 0;
			else {
				const t = n[n.length - 1];
				this.flatCoordinates.length = 0 === t.length ? 0 : t[t.length - 1];
			}
			this.changed();
		}
	}
	const Ca = [1, 0, 0, 1, 0, 0];
	class Ea {
		constructor(t, e, n, i, r, s) {
			this.styleFunction, this.extent_, (this.id_ = s), (this.type_ = t), (this.flatCoordinates_ = e), (this.flatInteriorPoints_ = null), (this.flatMidpoints_ = null), (this.ends_ = n || null), (this.properties_ = r), this.squaredTolerance_, (this.stride_ = i), this.simplifiedGeometry_;
		}
		get(t) {
			return this.properties_[t];
		}
		getExtent() {
			return this.extent_ || (this.extent_ = 'Point' === this.type_ ? Bi(this.flatCoordinates_) : Vi(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2)), this.extent_;
		}
		getFlatInteriorPoint() {
			if (!this.flatInteriorPoints_) {
				const t = tr(this.getExtent());
				this.flatInteriorPoints_ = yr(this.flatCoordinates_, 0, this.ends_, 2, t, 0);
			}
			return this.flatInteriorPoints_;
		}
		getFlatInteriorPoints() {
			if (!this.flatInteriorPoints_) {
				const t = Nr(this.flatCoordinates_, this.ends_),
					e = fr(this.flatCoordinates_, 0, t, 2);
				this.flatInteriorPoints_ = xr(this.flatCoordinates_, 0, t, 2, e);
			}
			return this.flatInteriorPoints_;
		}
		getFlatMidpoint() {
			return this.flatMidpoints_ || (this.flatMidpoints_ = kr(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2, 0.5)), this.flatMidpoints_;
		}
		getFlatMidpoints() {
			if (!this.flatMidpoints_) {
				this.flatMidpoints_ = [];
				const t = this.flatCoordinates_;
				let e = 0;
				const n = this.ends_;
				for (let i = 0, r = n.length; i < r; ++i) {
					const r = n[i],
						s = kr(t, e, r, 2, 0.5);
					Un(this.flatMidpoints_, s), (e = r);
				}
			}
			return this.flatMidpoints_;
		}
		getId() {
			return this.id_;
		}
		getOrientedFlatCoordinates() {
			return this.flatCoordinates_;
		}
		getGeometry() {
			return this;
		}
		getSimplifiedGeometry(t) {
			return this;
		}
		simplifyTransformed(t, e) {
			return this;
		}
		getProperties() {
			return this.properties_;
		}
		getPropertiesInternal() {
			return this.properties_;
		}
		getStride() {
			return this.stride_;
		}
		getStyleFunction() {
			return this.styleFunction;
		}
		getType() {
			return this.type_;
		}
		transform(t) {
			const e = (t = ao(t)).getExtent(),
				n = t.getWorldExtent();
			if (e && n) {
				const t = rr(n) / rr(e);
				Go(Ca, n[0], n[3], t, -t, 0, 0, 0), Xr(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2, Ca, this.flatCoordinates_);
			}
		}
		applyTransform(t) {
			t(this.flatCoordinates_, this.flatCoordinates_, this.stride_);
		}
		clone() {
			return new Ea(this.type_, this.flatCoordinates_.slice(), this.ends_?.slice(), this.stride_, Object.assign({}, this.properties_), this.id_);
		}
		getEnds() {
			return this.ends_;
		}
		enableSimplifyTransformed() {
			return (
				(this.simplifyTransformed = Xn((t, e) => {
					if (t === this.squaredTolerance_) return this.simplifiedGeometry_;
					(this.simplifiedGeometry_ = this.clone()), e && this.simplifiedGeometry_.applyTransform(e);
					const n = this.simplifiedGeometry_.getFlatCoordinates();
					let i;
					switch (this.type_) {
						case 'LineString':
							(n.length = Ur(n, 0, this.simplifiedGeometry_.flatCoordinates_.length, this.simplifiedGeometry_.stride_, t, n, 0)), (i = [n.length]);
							break;
						case 'MultiLineString':
							(i = []), (n.length = $r(n, 0, this.simplifiedGeometry_.ends_, this.simplifiedGeometry_.stride_, t, n, 0, i));
							break;
						case 'Polygon':
							(i = []), (n.length = Wr(n, 0, this.simplifiedGeometry_.ends_, this.simplifiedGeometry_.stride_, Math.sqrt(t), n, 0, i));
					}
					return i && (this.simplifiedGeometry_ = new Ea(this.type_, n, i, 2, this.properties_, this.id_)), (this.squaredTolerance_ = t), this.simplifiedGeometry_;
				})),
				this
			);
		}
	}
	Ea.prototype.getFlatCoordinates = Ea.prototype.getOrientedFlatCoordinates;
	var Ta = 0,
		Pa = 1,
		Ra = 2,
		Fa = 3,
		Ma = 4,
		Ia = {
			aliceblue: [240, 248, 255],
			antiquewhite: [250, 235, 215],
			aqua: [0, 255, 255],
			aquamarine: [127, 255, 212],
			azure: [240, 255, 255],
			beige: [245, 245, 220],
			bisque: [255, 228, 196],
			black: [0, 0, 0],
			blanchedalmond: [255, 235, 205],
			blue: [0, 0, 255],
			blueviolet: [138, 43, 226],
			brown: [165, 42, 42],
			burlywood: [222, 184, 135],
			cadetblue: [95, 158, 160],
			chartreuse: [127, 255, 0],
			chocolate: [210, 105, 30],
			coral: [255, 127, 80],
			cornflowerblue: [100, 149, 237],
			cornsilk: [255, 248, 220],
			crimson: [220, 20, 60],
			cyan: [0, 255, 255],
			darkblue: [0, 0, 139],
			darkcyan: [0, 139, 139],
			darkgoldenrod: [184, 134, 11],
			darkgray: [169, 169, 169],
			darkgreen: [0, 100, 0],
			darkgrey: [169, 169, 169],
			darkkhaki: [189, 183, 107],
			darkmagenta: [139, 0, 139],
			darkolivegreen: [85, 107, 47],
			darkorange: [255, 140, 0],
			darkorchid: [153, 50, 204],
			darkred: [139, 0, 0],
			darksalmon: [233, 150, 122],
			darkseagreen: [143, 188, 143],
			darkslateblue: [72, 61, 139],
			darkslategray: [47, 79, 79],
			darkslategrey: [47, 79, 79],
			darkturquoise: [0, 206, 209],
			darkviolet: [148, 0, 211],
			deeppink: [255, 20, 147],
			deepskyblue: [0, 191, 255],
			dimgray: [105, 105, 105],
			dimgrey: [105, 105, 105],
			dodgerblue: [30, 144, 255],
			firebrick: [178, 34, 34],
			floralwhite: [255, 250, 240],
			forestgreen: [34, 139, 34],
			fuchsia: [255, 0, 255],
			gainsboro: [220, 220, 220],
			ghostwhite: [248, 248, 255],
			gold: [255, 215, 0],
			goldenrod: [218, 165, 32],
			gray: [128, 128, 128],
			green: [0, 128, 0],
			greenyellow: [173, 255, 47],
			grey: [128, 128, 128],
			honeydew: [240, 255, 240],
			hotpink: [255, 105, 180],
			indianred: [205, 92, 92],
			indigo: [75, 0, 130],
			ivory: [255, 255, 240],
			khaki: [240, 230, 140],
			lavender: [230, 230, 250],
			lavenderblush: [255, 240, 245],
			lawngreen: [124, 252, 0],
			lemonchiffon: [255, 250, 205],
			lightblue: [173, 216, 230],
			lightcoral: [240, 128, 128],
			lightcyan: [224, 255, 255],
			lightgoldenrodyellow: [250, 250, 210],
			lightgray: [211, 211, 211],
			lightgreen: [144, 238, 144],
			lightgrey: [211, 211, 211],
			lightpink: [255, 182, 193],
			lightsalmon: [255, 160, 122],
			lightseagreen: [32, 178, 170],
			lightskyblue: [135, 206, 250],
			lightslategray: [119, 136, 153],
			lightslategrey: [119, 136, 153],
			lightsteelblue: [176, 196, 222],
			lightyellow: [255, 255, 224],
			lime: [0, 255, 0],
			limegreen: [50, 205, 50],
			linen: [250, 240, 230],
			magenta: [255, 0, 255],
			maroon: [128, 0, 0],
			mediumaquamarine: [102, 205, 170],
			mediumblue: [0, 0, 205],
			mediumorchid: [186, 85, 211],
			mediumpurple: [147, 112, 219],
			mediumseagreen: [60, 179, 113],
			mediumslateblue: [123, 104, 238],
			mediumspringgreen: [0, 250, 154],
			mediumturquoise: [72, 209, 204],
			mediumvioletred: [199, 21, 133],
			midnightblue: [25, 25, 112],
			mintcream: [245, 255, 250],
			mistyrose: [255, 228, 225],
			moccasin: [255, 228, 181],
			navajowhite: [255, 222, 173],
			navy: [0, 0, 128],
			oldlace: [253, 245, 230],
			olive: [128, 128, 0],
			olivedrab: [107, 142, 35],
			orange: [255, 165, 0],
			orangered: [255, 69, 0],
			orchid: [218, 112, 214],
			palegoldenrod: [238, 232, 170],
			palegreen: [152, 251, 152],
			paleturquoise: [175, 238, 238],
			palevioletred: [219, 112, 147],
			papayawhip: [255, 239, 213],
			peachpuff: [255, 218, 185],
			peru: [205, 133, 63],
			pink: [255, 192, 203],
			plum: [221, 160, 221],
			powderblue: [176, 224, 230],
			purple: [128, 0, 128],
			rebeccapurple: [102, 51, 153],
			red: [255, 0, 0],
			rosybrown: [188, 143, 143],
			royalblue: [65, 105, 225],
			saddlebrown: [139, 69, 19],
			salmon: [250, 128, 114],
			sandybrown: [244, 164, 96],
			seagreen: [46, 139, 87],
			seashell: [255, 245, 238],
			sienna: [160, 82, 45],
			silver: [192, 192, 192],
			skyblue: [135, 206, 235],
			slateblue: [106, 90, 205],
			slategray: [112, 128, 144],
			slategrey: [112, 128, 144],
			snow: [255, 250, 250],
			springgreen: [0, 255, 127],
			steelblue: [70, 130, 180],
			tan: [210, 180, 140],
			teal: [0, 128, 128],
			thistle: [216, 191, 216],
			tomato: [255, 99, 71],
			turquoise: [64, 224, 208],
			violet: [238, 130, 238],
			wheat: [245, 222, 179],
			white: [255, 255, 255],
			whitesmoke: [245, 245, 245],
			yellow: [255, 255, 0],
			yellowgreen: [154, 205, 50],
		},
		ka = { red: 0, orange: 60, yellow: 120, green: 180, blue: 240, purple: 300 };
	const La = { name: 'rgb', min: [0, 0, 0], max: [255, 255, 255], channel: ['red', 'green', 'blue'], alias: ['RGB'] };
	var Aa = {
		name: 'hsl',
		min: [0, 0, 0],
		max: [360, 100, 100],
		channel: ['hue', 'saturation', 'lightness'],
		alias: ['HSL'],
		rgb: function (t) {
			var e,
				n,
				i,
				r,
				s,
				o = t[0] / 360,
				a = t[1] / 100,
				l = t[2] / 100,
				h = 0;
			if (0 === a) return [(s = 255 * l), s, s];
			for (e = 2 * l - (n = l < 0.5 ? l * (1 + a) : l + a - l * a), r = [0, 0, 0]; h < 3; ) (i = o + (1 / 3) * -(h - 1)) < 0 ? i++ : i > 1 && i--, (s = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e), (r[h++] = 255 * s);
			return r;
		},
	};
	function Da(t) {
		var e;
		Array.isArray(t) && t.raw && (t = String.raw(...arguments)), t instanceof Number && (t = +t);
		var n = (function (t) {
			var e,
				n,
				i = [],
				r = 1;
			if ('number' == typeof t) return { space: 'rgb', values: [t >>> 16, (65280 & t) >>> 8, 255 & t], alpha: 1 };
			if ('number' == typeof t) return { space: 'rgb', values: [t >>> 16, (65280 & t) >>> 8, 255 & t], alpha: 1 };
			if (((t = String(t).toLowerCase()), Ia[t])) (i = Ia[t].slice()), (n = 'rgb');
			else if ('transparent' === t) (r = 0), (n = 'rgb'), (i = [0, 0, 0]);
			else if ('#' === t[0]) {
				var s = t.slice(1),
					o = s.length;
				(r = 1), o <= 4 ? ((i = [parseInt(s[0] + s[0], 16), parseInt(s[1] + s[1], 16), parseInt(s[2] + s[2], 16)]), 4 === o && (r = parseInt(s[3] + s[3], 16) / 255)) : ((i = [parseInt(s[0] + s[1], 16), parseInt(s[2] + s[3], 16), parseInt(s[4] + s[5], 16)]), 8 === o && (r = parseInt(s[6] + s[7], 16) / 255)), i[0] || (i[0] = 0), i[1] || (i[1] = 0), i[2] || (i[2] = 0), (n = 'rgb');
			} else if ((e = /^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(t))) {
				var a = e[1],
					l = 'cmyk' === (n = a.replace(/a$/, '')) ? 4 : 'gray' === n ? 1 : 3;
				(i = e[2].trim().split(/\s*[,\/]\s*|\s+/)),
					'color' === n && (n = i.shift()),
					(r =
						(i = i.map(function (t, e) {
							if ('%' === t[t.length - 1]) return (t = parseFloat(t) / 100), 3 === e ? t : 'rgb' === n ? 255 * t : 'h' === n[0] ? 100 * t : 'l' !== n[0] || e ? ('lab' === n ? 125 * t : 'lch' === n ? (e < 2 ? 150 * t : 360 * t) : 'o' !== n[0] || e ? ('oklab' === n ? 0.4 * t : 'oklch' === n ? (e < 2 ? 0.4 * t : 360 * t) : t) : t) : 100 * t;
							if ('h' === n[e] || (2 === e && 'h' === n[n.length - 1])) {
								if (void 0 !== ka[t]) return ka[t];
								if (t.endsWith('deg')) return parseFloat(t);
								if (t.endsWith('turn')) return 360 * parseFloat(t);
								if (t.endsWith('grad')) return (360 * parseFloat(t)) / 400;
								if (t.endsWith('rad')) return (180 * parseFloat(t)) / Math.PI;
							}
							return 'none' === t ? 0 : parseFloat(t);
						})).length > l
							? i.pop()
							: 1);
			} else
				/[0-9](?:\s|\/|,)/.test(t) &&
					((i = t.match(/([0-9]+)/g).map(function (t) {
						return parseFloat(t);
					})),
					(n =
						t
							.match(/([a-z])/gi)
							?.join('')
							?.toLowerCase() || 'rgb'));
			return { space: n, values: i, alpha: r };
		})(t);
		if (!n.space) return [];
		const i = 'h' === n.space[0] ? Aa.min : La.min,
			r = 'h' === n.space[0] ? Aa.max : La.max;
		return ((e = Array(3))[0] = Math.min(Math.max(n.values[0], i[0]), r[0])), (e[1] = Math.min(Math.max(n.values[1], i[1]), r[1])), (e[2] = Math.min(Math.max(n.values[2], i[2]), r[2])), 'h' === n.space[0] && (e = Aa.rgb(e)), e.push(Math.min(Math.max(n.alpha, 0), 1)), e;
	}
	La.hsl = function (t) {
		var e,
			n,
			i = t[0] / 255,
			r = t[1] / 255,
			s = t[2] / 255,
			o = Math.min(i, r, s),
			a = Math.max(i, r, s),
			l = a - o;
		return a === o ? (e = 0) : i === a ? (e = (r - s) / l) : r === a ? (e = 2 + (s - i) / l) : s === a && (e = 4 + (i - r) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), (n = (o + a) / 2), [e, 100 * (a === o ? 0 : n <= 0.5 ? l / (a + o) : l / (2 - a - o)), 100 * n];
	};
	const Oa = { name: 'xyz', min: [0, 0, 0], channel: ['X', 'Y', 'Z'], alias: ['XYZ', 'ciexyz', 'cie1931'], whitepoint: { 2: { A: [109.85, 100, 35.585], C: [98.074, 100, 118.232], D50: [96.422, 100, 82.521], D55: [95.682, 100, 92.149], D65: [95.045592705167, 100, 108.9057750759878], D75: [94.972, 100, 122.638], F2: [99.187, 100, 67.395], F7: [95.044, 100, 108.755], F11: [100.966, 100, 64.37], E: [100, 100, 100] }, 10: { A: [111.144, 100, 35.2], C: [97.285, 100, 116.145], D50: [96.72, 100, 81.427], D55: [95.799, 100, 90.926], D65: [94.811, 100, 107.304], D75: [94.416, 100, 120.641], F2: [103.28, 100, 69.026], F7: [95.792, 100, 107.687], F11: [103.866, 100, 65.627], E: [100, 100, 100] } } };
	(Oa.max = Oa.whitepoint[2].D65),
		(Oa.rgb = function (t, e) {
			e = e || Oa.whitepoint[2].E;
			var n,
				i,
				r,
				s = t[0] / e[0],
				o = t[1] / e[1],
				a = t[2] / e[2];
			return (i = -0.96924363628087 * s + 1.87596750150772 * o + 0.041555057407175 * a), (r = 0.055630079696993 * s + -0.20397695888897 * o + 1.056971514242878 * a), (n = (n = 3.240969941904521 * s + -1.537383177570093 * o + -0.498610760293 * a) > 0.0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : (n *= 12.92)), (i = i > 0.0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - 0.055 : (i *= 12.92)), (r = r > 0.0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : (r *= 12.92)), [255 * (n = Math.min(Math.max(0, n), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (r = Math.min(Math.max(0, r), 1))];
		}),
		(La.xyz = function (t, e) {
			var n = t[0] / 255,
				i = t[1] / 255,
				r = t[2] / 255,
				s = 0.21263900587151 * (n = n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92) + 0.71516867876775 * (i = i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92) + 0.072192315360733 * (r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92),
				o = 0.019330818715591 * n + 0.11919477979462 * i + 0.95053215224966 * r;
			return [(0.41239079926595 * n + 0.35758433938387 * i + 0.18048078840183 * r) * (e = e || Oa.whitepoint[2].E)[0], s * e[1], o * e[2]];
		});
	var za = {
		name: 'luv',
		min: [0, -134, -140],
		max: [100, 224, 122],
		channel: ['lightness', 'u', 'v'],
		alias: ['LUV', 'cieluv', 'cie1976'],
		xyz: function (t, e, n) {
			var i, r, s, o, a, l, h, c, u;
			if (((s = t[0]), (o = t[1]), (a = t[2]), 0 === s)) return [0, 0, 0];
			return (e = e || 'D65'), (n = n || 2), (i = o / (13 * s) + (4 * (h = Oa.whitepoint[n][e][0])) / (h + 15 * (c = Oa.whitepoint[n][e][1]) + 3 * (u = Oa.whitepoint[n][e][2])) || 0), (r = a / (13 * s) + (9 * c) / (h + 15 * c + 3 * u) || 0), [(9 * (l = s > 8 ? c * Math.pow((s + 16) / 116, 3) : c * s * 0.0011070564598794539) * i) / (4 * r) || 0, l, (l * (12 - 3 * i - 20 * r)) / (4 * r) || 0];
		},
	};
	Oa.luv = function (t, e, n) {
		var i, r, s, o, a, l, h, c, u, d, g;
		(e = e || 'D65'), (n = n || 2), (d = (4 * (h = Oa.whitepoint[n][e][0])) / (h + 15 * (c = Oa.whitepoint[n][e][1]) + 3 * (u = Oa.whitepoint[n][e][2]))), (g = (9 * c) / (h + 15 * c + 3 * u)), (i = (4 * (o = t[0])) / (o + 15 * (a = t[1]) + 3 * (l = t[2])) || 0), (r = (9 * a) / (o + 15 * a + 3 * l) || 0);
		var f = a / c;
		return [(s = f <= 0.008856451679035631 ? 903.2962962962961 * f : 116 * Math.pow(f, 1 / 3) - 16), 13 * s * (i - d), 13 * s * (r - g)];
	};
	var Ga = {
		name: 'lchuv',
		channel: ['lightness', 'chroma', 'hue'],
		alias: ['LCHuv', 'cielchuv'],
		min: [0, 0, 0],
		max: [100, 100, 360],
		luv: function (t) {
			var e,
				n = t[0],
				i = t[1];
			return (e = (t[2] / 360) * 2 * Math.PI), [n, i * Math.cos(e), i * Math.sin(e)];
		},
		xyz: function (t) {
			return za.xyz(Ga.luv(t));
		},
	};
	(za.lchuv = function (t) {
		var e = t[0],
			n = t[1],
			i = t[2],
			r = Math.sqrt(n * n + i * i),
			s = (360 * Math.atan2(i, n)) / 2 / Math.PI;
		return s < 0 && (s += 360), [e, r, s];
	}),
		(Oa.lchuv = function (t) {
			return za.lchuv(Oa.luv(t));
		});
	const ja = [NaN, NaN, NaN, 0];
	const Na = {};
	let Ua = 0;
	function $a(t) {
		if (4 === t.length) return t;
		const e = t.slice();
		return (e[3] = 1), e;
	}
	function Ba(t) {
		const e = Oa.lchuv(La.xyz(t));
		return (e[3] = t[3]), e;
	}
	function Va(t) {
		if ('none' === t) return ja;
		if (Na.hasOwnProperty(t)) return Na[t];
		if (Ua >= 1024) {
			let t = 0;
			for (const e in Na) 3 & t++ || (delete Na[e], --Ua);
		}
		const e = Da(t);
		if (4 !== e.length) throw new Error('failed to parse "' + t + '" as color');
		for (const n of e) if (isNaN(n)) throw new Error('failed to parse "' + t + '" as color');
		return Xa(e), (Na[t] = e), ++Ua, e;
	}
	function Wa(t) {
		return Array.isArray(t) ? t : Va(t);
	}
	function Xa(t) {
		return (t[0] = vr((t[0] + 0.5) | 0, 0, 255)), (t[1] = vr((t[1] + 0.5) | 0, 0, 255)), (t[2] = vr((t[2] + 0.5) | 0, 0, 255)), (t[3] = vr(t[3], 0, 1)), t;
	}
	function qa(t) {
		let e = t[0];
		e != (0 | e) && (e = (e + 0.5) | 0);
		let n = t[1];
		n != (0 | n) && (n = (n + 0.5) | 0);
		let i = t[2];
		i != (0 | i) && (i = (i + 0.5) | 0);
		return 'rgba(' + e + ',' + n + ',' + i + ',' + (void 0 === t[3] ? 1 : Math.round(1e3 * t[3]) / 1e3) + ')';
	}
	const Za = 'undefined' != typeof navigator && void 0 !== navigator.userAgent ? navigator.userAgent.toLowerCase() : '',
		Ka = Za.includes('firefox'),
		Ya = Za.includes('safari') && !Za.includes('chrom') && (Za.includes('version/15.4') || /cpu (os|iphone os) 15_4 like mac os x/.test(Za)),
		Ha = Za.includes('webkit') && !Za.includes('edge'),
		Ja = Za.includes('macintosh'),
		Qa = 'undefined' != typeof devicePixelRatio ? devicePixelRatio : 1,
		tl = 'undefined' != typeof WorkerGlobalScope && 'undefined' != typeof OffscreenCanvas && self instanceof WorkerGlobalScope,
		el = 'undefined' != typeof Image && Image.prototype.decode,
		nl = 'function' == typeof createImageBitmap,
		il = (function () {
			let t = !1;
			try {
				const e = Object.defineProperty({}, 'passive', {
					get: function () {
						t = !0;
					},
				});
				window.addEventListener('_', null, e), window.removeEventListener('_', null, e);
			} catch {}
			return t;
		})();
	function rl(t, e, n, i) {
		let r;
		return (r = n && n.length ? n.shift() : tl ? new OffscreenCanvas(t || 300, e || 300) : document.createElement('canvas')), t && (r.width = t), e && (r.height = e), r.getContext('2d', i);
	}
	let sl;
	function ol() {
		return sl || (sl = rl(1, 1)), sl;
	}
	function al(t) {
		const e = t.canvas;
		(e.width = 1), (e.height = 1), t.clearRect(0, 0, 1, 1);
	}
	function ll(t) {
		let e = t.offsetWidth;
		const n = getComputedStyle(t);
		return (e += parseInt(n.marginLeft, 10) + parseInt(n.marginRight, 10)), e;
	}
	function hl(t) {
		let e = t.offsetHeight;
		const n = getComputedStyle(t);
		return (e += parseInt(n.marginTop, 10) + parseInt(n.marginBottom, 10)), e;
	}
	function cl(t, e) {
		const n = e.parentNode;
		n && n.replaceChild(t, e);
	}
	function ul(t) {
		for (; t.lastChild; ) t.lastChild.remove();
	}
	class dl extends di {
		constructor(t, e, n, i) {
			super(), (this.extent = t), (this.pixelRatio_ = n), (this.resolution = e), (this.state = 'function' == typeof i ? Ta : i), (this.image_ = null), (this.loader = 'function' == typeof i ? i : null);
		}
		changed() {
			this.dispatchEvent(Kn);
		}
		getExtent() {
			return this.extent;
		}
		getImage() {
			return this.image_;
		}
		getPixelRatio() {
			return this.pixelRatio_;
		}
		getResolution() {
			return this.resolution;
		}
		getState() {
			return this.state;
		}
		load() {
			if (this.state == Ta && this.loader) {
				(this.state = Pa), this.changed();
				const t = this.getResolution(),
					e = Array.isArray(t) ? t[0] : t;
				qn(() => this.loader(this.getExtent(), e, this.getPixelRatio()))
					.then((t) => {
						'image' in t && (this.image_ = t.image), 'extent' in t && (this.extent = t.extent), 'resolution' in t && (this.resolution = t.resolution), 'pixelRatio' in t && (this.pixelRatio_ = t.pixelRatio), (t instanceof HTMLImageElement || (nl && t instanceof ImageBitmap) || t instanceof HTMLCanvasElement || t instanceof HTMLVideoElement) && (this.image_ = t), (this.state = Ra);
					})
					.catch((t) => {
						(this.state = Fa), console.error(t);
					})
					.finally(() => this.changed());
			}
		}
		setImage(t) {
			this.image_ = t;
		}
		setResolution(t) {
			this.resolution = t;
		}
	}
	function gl(t, e) {
		return (
			e && (t.src = e),
			t.src && el
				? new Promise((e, n) =>
						t
							.decode()
							.then(() => e(t))
							.catch((i) => (t.complete && t.width ? e(t) : n(i)))
				  )
				: (function (t) {
						return new Promise((e, n) => {
							function i() {
								s(), e(t);
							}
							function r() {
								s(), n(new Error('Image load error'));
							}
							function s() {
								t.removeEventListener('load', i), t.removeEventListener('error', r);
							}
							t.addEventListener('load', i), t.addEventListener('error', r);
						});
				  })(t)
		);
	}
	function fl(t, e) {
		return (
			e && (t.src = e),
			t.src && el && nl
				? t
						.decode()
						.then(() => createImageBitmap(t))
						.catch((e) => {
							if (t.complete && t.width) return t;
							throw e;
						})
				: gl(t)
		);
	}
	function pl(t, e, n) {
		return e + ':' + t + ':' + (n ? Wa(n) : 'null');
	}
	const ml = new (class {
		constructor() {
			(this.cache_ = {}), (this.patternCache_ = {}), (this.cacheSize_ = 0), (this.maxCacheSize_ = 1024);
		}
		clear() {
			(this.cache_ = {}), (this.patternCache_ = {}), (this.cacheSize_ = 0);
		}
		canExpireCache() {
			return this.cacheSize_ > this.maxCacheSize_;
		}
		expire() {
			if (this.canExpireCache()) {
				let t = 0;
				for (const e in this.cache_) {
					const n = this.cache_[e];
					3 & t++ || n.hasListener() || (delete this.cache_[e], delete this.patternCache_[e], --this.cacheSize_);
				}
			}
		}
		get(t, e, n) {
			const i = pl(t, e, n);
			return i in this.cache_ ? this.cache_[i] : null;
		}
		getPattern(t, e, n) {
			const i = pl(t, e, n);
			return i in this.patternCache_ ? this.patternCache_[i] : null;
		}
		set(t, e, n, i, r) {
			const s = pl(t, e, n),
				o = s in this.cache_;
			(this.cache_[s] = i),
				r &&
					(i.getImageState() === Ta && i.load(),
					i.getImageState() === Pa
						? i.ready().then(() => {
								this.patternCache_[s] = ol().createPattern(i.getImage(1), 'repeat');
						  })
						: (this.patternCache_[s] = ol().createPattern(i.getImage(1), 'repeat'))),
				o || ++this.cacheSize_;
		}
		setSize(t) {
			(this.maxCacheSize_ = t), this.expire();
		}
	})();
	let _l = null;
	class yl extends di {
		constructor(t, e, n, i, r) {
			super(), (this.hitDetectionImage_ = null), (this.image_ = t), (this.crossOrigin_ = n), (this.canvas_ = {}), (this.color_ = r), (this.imageState_ = void 0 === i ? Ta : i), (this.size_ = t && t.width && t.height ? [t.width, t.height] : null), (this.src_ = e), this.tainted_, (this.ready_ = null);
		}
		initializeImage_() {
			(this.image_ = new Image()), null !== this.crossOrigin_ && (this.image_.crossOrigin = this.crossOrigin_);
		}
		isTainted_() {
			if (void 0 === this.tainted_ && this.imageState_ === Ra) {
				_l || (_l = rl(1, 1, void 0, { willReadFrequently: !0 })), _l.drawImage(this.image_, 0, 0);
				try {
					_l.getImageData(0, 0, 1, 1), (this.tainted_ = !1);
				} catch {
					(_l = null), (this.tainted_ = !0);
				}
			}
			return !0 === this.tainted_;
		}
		dispatchChangeEvent_() {
			this.dispatchEvent(Kn);
		}
		handleImageError_() {
			(this.imageState_ = Fa), this.dispatchChangeEvent_();
		}
		handleImageLoad_() {
			(this.imageState_ = Ra), (this.size_ = [this.image_.width, this.image_.height]), this.dispatchChangeEvent_();
		}
		getImage(t) {
			return this.image_ || this.initializeImage_(), this.replaceColor_(t), this.canvas_[t] ? this.canvas_[t] : this.image_;
		}
		getPixelRatio(t) {
			return this.replaceColor_(t), this.canvas_[t] ? t : 1;
		}
		getImageState() {
			return this.imageState_;
		}
		getHitDetectionImage() {
			if ((this.image_ || this.initializeImage_(), !this.hitDetectionImage_))
				if (this.isTainted_()) {
					const t = this.size_[0],
						e = this.size_[1],
						n = rl(t, e);
					n.fillRect(0, 0, t, e), (this.hitDetectionImage_ = n.canvas);
				} else this.hitDetectionImage_ = this.image_;
			return this.hitDetectionImage_;
		}
		getSize() {
			return this.size_;
		}
		getSrc() {
			return this.src_;
		}
		load() {
			if (this.imageState_ === Ta) {
				this.image_ || this.initializeImage_(), (this.imageState_ = Pa);
				try {
					void 0 !== this.src_ && (this.image_.src = this.src_);
				} catch {
					this.handleImageError_();
				}
				this.image_ instanceof HTMLImageElement &&
					gl(this.image_, this.src_)
						.then((t) => {
							(this.image_ = t), this.handleImageLoad_();
						})
						.catch(this.handleImageError_.bind(this));
			}
		}
		replaceColor_(t) {
			if (!this.color_ || this.canvas_[t] || this.imageState_ !== Ra) return;
			const e = this.image_,
				n = rl(Math.ceil(e.width * t), Math.ceil(e.height * t)),
				i = n.canvas;
			var r;
			n.scale(t, t), n.drawImage(e, 0, 0), (n.globalCompositeOperation = 'multiply'), (n.fillStyle = 'string' == typeof (r = this.color_) ? r : qa(r)), n.fillRect(0, 0, i.width / t, i.height / t), (n.globalCompositeOperation = 'destination-in'), n.drawImage(e, 0, 0), (this.canvas_[t] = i);
		}
		ready() {
			return (
				this.ready_ ||
					(this.ready_ = new Promise((t) => {
						if (this.imageState_ === Ra || this.imageState_ === Fa) t();
						else {
							const e = () => {
								(this.imageState_ !== Ra && this.imageState_ !== Fa) || (this.removeEventListener(Kn, e), t());
							};
							this.addEventListener(Kn, e);
						}
					})),
				this.ready_
			);
		}
	}
	function xl(t, e, n, i, r, s) {
		let o = void 0 === e ? void 0 : ml.get(e, n, r);
		return o || ((o = new yl(t, t && 'src' in t ? t.src || void 0 : e, n, i, r)), ml.set(e, n, r, o, s)), s && o && !ml.getPattern(e, n, r) && ml.set(e, n, r, o, s), o;
	}
	function vl(t) {
		return t
			? Array.isArray(t)
				? qa(t)
				: 'object' == typeof t && 'src' in t
				? (function (t) {
						if (!t.offset || !t.size) return ml.getPattern(t.src, 'anonymous', t.color);
						const e = t.src + ':' + t.offset,
							n = ml.getPattern(e, void 0, t.color);
						if (n) return n;
						const i = ml.get(t.src, 'anonymous', null);
						if (i.getImageState() !== Ra) return null;
						const r = rl(t.size[0], t.size[1]);
						return r.drawImage(i.getImage(1), t.offset[0], t.offset[1], t.size[0], t.size[1], 0, 0, t.size[0], t.size[1]), xl(r.canvas, e, void 0, Ra, t.color, !0), ml.getPattern(e, void 0, t.color);
				  })(t)
				: t
			: null;
	}
	const wl = 'ol-hidden',
		bl = 'ol-unselectable',
		Sl = 'ol-control',
		Cl = 'ol-collapsed',
		El = new RegExp(['^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)', '(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)', '(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)', '(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?', '(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))', '(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))', '?\\s*([-,\\"\\\'\\sa-z]+?)\\s*$'].join(''), 'i'),
		Tl = ['style', 'variant', 'weight', 'size', 'lineHeight', 'family'],
		Pl = function (t) {
			const e = t.match(El);
			if (!e) return null;
			const n = { lineHeight: 'normal', size: '1.2em', style: 'normal', weight: 'normal', variant: 'normal' };
			for (let t = 0, i = Tl.length; t < i; ++t) {
				const i = e[t + 1];
				void 0 !== i && (n[Tl[t]] = i);
			}
			return (n.families = n.family.split(/,\s?/)), n;
		},
		Rl = '10px sans-serif',
		Fl = '#000',
		Ml = 'round',
		Il = [],
		kl = 'round',
		Ll = '#000',
		Al = 'center',
		Dl = 'middle',
		Ol = [0, 0, 0, 0],
		zl = new Si();
	let Gl,
		jl = null;
	const Nl = {},
		Ul = (function () {
			const t = '32px ',
				e = ['monospace', 'serif'],
				n = e.length,
				i = 'wmytzilWMYTZIL@#/&?$%10';
			let r, s;
			function o(r, o, a) {
				let l = !0;
				for (let h = 0; h < n; ++h) {
					const n = e[h];
					if (((s = Vl(r + ' ' + o + ' ' + t + n, i)), a != n)) {
						const e = Vl(r + ' ' + o + ' ' + t + a + ',' + n, i);
						l = l && e != s;
					}
				}
				return !!l;
			}
			function a() {
				let t = !0;
				const e = zl.getKeys();
				for (let n = 0, i = e.length; n < i; ++n) {
					const i = e[n];
					if (zl.get(i) < 100) {
						const [e, n, r] = i.split('\n');
						o(e, n, r) ? (hi(Nl), (jl = null), (Gl = void 0), zl.set(i, 100)) : (zl.set(i, zl.get(i) + 1, !0), (t = !1));
					}
				}
				t && (clearInterval(r), (r = void 0));
			}
			return function (t) {
				const e = Pl(t);
				if (!e) return;
				const n = e.families;
				for (let t = 0, i = n.length; t < i; ++t) {
					const i = n[t],
						s = e.style + '\n' + e.weight + '\n' + i;
					void 0 === zl.get(s) && (zl.set(s, 100, !0), o(e.style, e.weight, i) || (zl.set(s, 0, !0), void 0 === r && (r = setInterval(a, 32))));
				}
			};
		})(),
		$l = (function () {
			let t;
			return function (e) {
				let n = Nl[e];
				if (null == n) {
					if (tl) {
						const t = Pl(e),
							i = Bl(e, 'Žg');
						n = (isNaN(Number(t.lineHeight)) ? 1.2 : Number(t.lineHeight)) * (i.actualBoundingBoxAscent + i.actualBoundingBoxDescent);
					} else t || ((t = document.createElement('div')), (t.innerHTML = 'M'), (t.style.minHeight = '0'), (t.style.maxHeight = 'none'), (t.style.height = 'auto'), (t.style.padding = '0'), (t.style.border = 'none'), (t.style.position = 'absolute'), (t.style.display = 'block'), (t.style.left = '-99999px')), (t.style.font = e), document.body.appendChild(t), (n = t.offsetHeight), document.body.removeChild(t);
					Nl[e] = n;
				}
				return n;
			};
		})();
	function Bl(t, e) {
		return jl || (jl = rl(1, 1)), t != Gl && ((jl.font = t), (Gl = jl.font)), jl.measureText(e);
	}
	function Vl(t, e) {
		return Bl(t, e).width;
	}
	function Wl(t, e, n) {
		if (e in n) return n[e];
		const i = e.split('\n').reduce((e, n) => Math.max(e, Vl(t, n)), 0);
		return (n[e] = i), i;
	}
	function Xl(t, e, n, i, r, s, o, a, l, h, c) {
		t.save(),
			1 !== n && (void 0 === t.globalAlpha ? (t.globalAlpha = (t) => (t.globalAlpha *= n)) : (t.globalAlpha *= n)),
			e && t.transform.apply(t, e),
			i.contextInstructions
				? (t.translate(l, h),
				  t.scale(c[0], c[1]),
				  (function (t, e) {
						const n = t.contextInstructions;
						for (let t = 0, i = n.length; t < i; t += 2) Array.isArray(n[t + 1]) ? e[n[t]].apply(e, n[t + 1]) : (e[n[t]] = n[t + 1]);
				  })(i, t))
				: c[0] < 0 || c[1] < 0
				? (t.translate(l, h), t.scale(c[0], c[1]), t.drawImage(i, r, s, o, a, 0, 0, o, a))
				: t.drawImage(i, r, s, o, a, l, h, o * c[0], a * c[1]),
			t.restore();
	}
	function ql(t) {
		return t[0] > 0 && t[1] > 0;
	}
	function Zl(t, e) {
		return Array.isArray(t) ? t : (void 0 === e ? (e = [t, t]) : ((e[0] = t), (e[1] = t)), e);
	}
	class Kl {
		constructor(t) {
			(this.opacity_ = t.opacity), (this.rotateWithView_ = t.rotateWithView), (this.rotation_ = t.rotation), (this.scale_ = t.scale), (this.scaleArray_ = Zl(t.scale)), (this.displacement_ = t.displacement), (this.declutterMode_ = t.declutterMode);
		}
		clone() {
			const t = this.getScale();
			return new Kl({ opacity: this.getOpacity(), scale: Array.isArray(t) ? t.slice() : t, rotation: this.getRotation(), rotateWithView: this.getRotateWithView(), displacement: this.getDisplacement().slice(), declutterMode: this.getDeclutterMode() });
		}
		getOpacity() {
			return this.opacity_;
		}
		getRotateWithView() {
			return this.rotateWithView_;
		}
		getRotation() {
			return this.rotation_;
		}
		getScale() {
			return this.scale_;
		}
		getScaleArray() {
			return this.scaleArray_;
		}
		getDisplacement() {
			return this.displacement_;
		}
		getDeclutterMode() {
			return this.declutterMode_;
		}
		getAnchor() {
			return xi();
		}
		getImage(t) {
			return xi();
		}
		getHitDetectionImage() {
			return xi();
		}
		getPixelRatio(t) {
			return 1;
		}
		getImageState() {
			return xi();
		}
		getImageSize() {
			return xi();
		}
		getOrigin() {
			return xi();
		}
		getSize() {
			return xi();
		}
		setDisplacement(t) {
			this.displacement_ = t;
		}
		setOpacity(t) {
			this.opacity_ = t;
		}
		setRotateWithView(t) {
			this.rotateWithView_ = t;
		}
		setRotation(t) {
			this.rotation_ = t;
		}
		setScale(t) {
			(this.scale_ = t), (this.scaleArray_ = Zl(t));
		}
		listenImageChange(t) {
			xi();
		}
		load() {
			xi();
		}
		unlistenImageChange(t) {
			xi();
		}
		ready() {
			return Promise.resolve();
		}
	}
	class Yl extends Kl {
		constructor(t) {
			super({ opacity: 1, rotateWithView: void 0 !== t.rotateWithView && t.rotateWithView, rotation: void 0 !== t.rotation ? t.rotation : 0, scale: void 0 !== t.scale ? t.scale : 1, displacement: void 0 !== t.displacement ? t.displacement : [0, 0], declutterMode: t.declutterMode }),
				(this.hitDetectionCanvas_ = null),
				(this.fill_ = void 0 !== t.fill ? t.fill : null),
				(this.origin_ = [0, 0]),
				(this.points_ = t.points),
				(this.radius = t.radius),
				(this.radius2_ = t.radius2),
				(this.angle_ = void 0 !== t.angle ? t.angle : 0),
				(this.stroke_ = void 0 !== t.stroke ? t.stroke : null),
				this.size_,
				this.renderOptions_,
				(this.imageState_ = this.fill_ && this.fill_.loading() ? Pa : Ra),
				this.imageState_ === Pa && this.ready().then(() => (this.imageState_ = Ra)),
				this.render();
		}
		clone() {
			const t = this.getScale(),
				e = new Yl({ fill: this.getFill() ? this.getFill().clone() : void 0, points: this.getPoints(), radius: this.getRadius(), radius2: this.getRadius2(), angle: this.getAngle(), stroke: this.getStroke() ? this.getStroke().clone() : void 0, rotation: this.getRotation(), rotateWithView: this.getRotateWithView(), scale: Array.isArray(t) ? t.slice() : t, displacement: this.getDisplacement().slice(), declutterMode: this.getDeclutterMode() });
			return e.setOpacity(this.getOpacity()), e;
		}
		getAnchor() {
			const t = this.size_,
				e = this.getDisplacement(),
				n = this.getScaleArray();
			return [t[0] / 2 - e[0] / n[0], t[1] / 2 + e[1] / n[1]];
		}
		getAngle() {
			return this.angle_;
		}
		getFill() {
			return this.fill_;
		}
		setFill(t) {
			(this.fill_ = t), this.render();
		}
		getHitDetectionImage() {
			return this.hitDetectionCanvas_ || (this.hitDetectionCanvas_ = this.createHitDetectionCanvas_(this.renderOptions_)), this.hitDetectionCanvas_;
		}
		getImage(t) {
			const e = this.fill_?.getKey(),
				n = `${t},${this.angle_},${this.radius},${this.radius2_},${this.points_},${e}` + Object.values(this.renderOptions_).join(',');
			let i = ml.get(n, null, null)?.getImage(1);
			if (!i) {
				const e = this.renderOptions_,
					r = Math.ceil(e.size * t),
					s = rl(r, r);
				this.draw_(e, s, t), (i = s.canvas), ml.set(n, null, null, new yl(i, void 0, null, Ra, null));
			}
			return i;
		}
		getPixelRatio(t) {
			return t;
		}
		getImageSize() {
			return this.size_;
		}
		getImageState() {
			return this.imageState_;
		}
		getOrigin() {
			return this.origin_;
		}
		getPoints() {
			return this.points_;
		}
		getRadius() {
			return this.radius;
		}
		getRadius2() {
			return this.radius2_;
		}
		getSize() {
			return this.size_;
		}
		getStroke() {
			return this.stroke_;
		}
		setStroke(t) {
			(this.stroke_ = t), this.render();
		}
		listenImageChange(t) {}
		load() {}
		unlistenImageChange(t) {}
		calculateLineJoinSize_(t, e, n) {
			if (0 === e || this.points_ === 1 / 0 || ('bevel' !== t && 'miter' !== t)) return e;
			let i = this.radius,
				r = void 0 === this.radius2_ ? i : this.radius2_;
			if (i < r) {
				const t = i;
				(i = r), (r = t);
			}
			const s = void 0 === this.radius2_ ? this.points_ : 2 * this.points_,
				o = (2 * Math.PI) / s,
				a = r * Math.sin(o),
				l = i - Math.sqrt(r * r - a * a),
				h = Math.sqrt(a * a + l * l),
				c = h / a;
			if ('miter' === t && c <= n) return c * e;
			const u = e / 2 / c,
				d = (e / 2) * (l / h),
				g = Math.sqrt((i + u) * (i + u) + d * d) - i;
			if (void 0 === this.radius2_ || 'bevel' === t) return 2 * g;
			const f = i * Math.sin(o),
				p = r - Math.sqrt(i * i - f * f),
				m = Math.sqrt(f * f + p * p) / f;
			if (m <= n) {
				const t = (m * e) / 2 - r - i;
				return 2 * Math.max(g, t);
			}
			return 2 * g;
		}
		createRenderOptions() {
			let t,
				e = Ml,
				n = kl,
				i = 0,
				r = null,
				s = 0,
				o = 0;
			this.stroke_ && ((t = vl(this.stroke_.getColor() ?? Ll)), (o = this.stroke_.getWidth() ?? 1), (r = this.stroke_.getLineDash()), (s = this.stroke_.getLineDashOffset() ?? 0), (n = this.stroke_.getLineJoin() ?? kl), (e = this.stroke_.getLineCap() ?? Ml), (i = this.stroke_.getMiterLimit() ?? 10));
			const a = this.calculateLineJoinSize_(n, o, i),
				l = Math.max(this.radius, this.radius2_ || 0);
			return { strokeStyle: t, strokeWidth: o, size: Math.ceil(2 * l + a), lineCap: e, lineDash: r, lineDashOffset: s, lineJoin: n, miterLimit: i };
		}
		render() {
			this.renderOptions_ = this.createRenderOptions();
			const t = this.renderOptions_.size;
			(this.hitDetectionCanvas_ = null), (this.size_ = [t, t]);
		}
		draw_(t, e, n) {
			if ((e.scale(n, n), e.translate(t.size / 2, t.size / 2), this.createPath_(e), this.fill_)) {
				let t = this.fill_.getColor();
				null === t && (t = Fl), (e.fillStyle = vl(t)), e.fill();
			}
			t.strokeStyle && ((e.strokeStyle = t.strokeStyle), (e.lineWidth = t.strokeWidth), t.lineDash && (e.setLineDash(t.lineDash), (e.lineDashOffset = t.lineDashOffset)), (e.lineCap = t.lineCap), (e.lineJoin = t.lineJoin), (e.miterLimit = t.miterLimit), e.stroke());
		}
		createHitDetectionCanvas_(t) {
			let e;
			if (this.fill_) {
				let n = this.fill_.getColor(),
					i = 0;
				'string' == typeof n && (n = Wa(n)), null === n ? (i = 1) : Array.isArray(n) && (i = 4 === n.length ? n[3] : 1), 0 === i && ((e = rl(t.size, t.size)), this.drawHitDetectionCanvas_(t, e));
			}
			return e ? e.canvas : this.getImage(1);
		}
		createPath_(t) {
			let e = this.points_;
			const n = this.radius;
			if (e === 1 / 0) t.arc(0, 0, n, 0, 2 * Math.PI);
			else {
				const i = void 0 === this.radius2_ ? n : this.radius2_;
				void 0 !== this.radius2_ && (e *= 2);
				const r = this.angle_ - Math.PI / 2,
					s = (2 * Math.PI) / e;
				for (let o = 0; o < e; o++) {
					const e = r + o * s,
						a = o % 2 == 0 ? n : i;
					t.lineTo(a * Math.cos(e), a * Math.sin(e));
				}
				t.closePath();
			}
		}
		drawHitDetectionCanvas_(t, e) {
			e.translate(t.size / 2, t.size / 2), this.createPath_(e), (e.fillStyle = Fl), e.fill(), t.strokeStyle && ((e.strokeStyle = t.strokeStyle), (e.lineWidth = t.strokeWidth), t.lineDash && (e.setLineDash(t.lineDash), (e.lineDashOffset = t.lineDashOffset)), (e.lineJoin = t.lineJoin), (e.miterLimit = t.miterLimit), e.stroke());
		}
		ready() {
			return this.fill_ ? this.fill_.ready() : Promise.resolve();
		}
	}
	class Hl extends Yl {
		constructor(t) {
			super({ points: 1 / 0, fill: (t = t || { radius: 5 }).fill, radius: t.radius, stroke: t.stroke, scale: void 0 !== t.scale ? t.scale : 1, rotation: void 0 !== t.rotation ? t.rotation : 0, rotateWithView: void 0 !== t.rotateWithView && t.rotateWithView, displacement: void 0 !== t.displacement ? t.displacement : [0, 0], declutterMode: t.declutterMode });
		}
		clone() {
			const t = this.getScale(),
				e = new Hl({ fill: this.getFill() ? this.getFill().clone() : void 0, stroke: this.getStroke() ? this.getStroke().clone() : void 0, radius: this.getRadius(), scale: Array.isArray(t) ? t.slice() : t, rotation: this.getRotation(), rotateWithView: this.getRotateWithView(), displacement: this.getDisplacement().slice(), declutterMode: this.getDeclutterMode() });
			return e.setOpacity(this.getOpacity()), e;
		}
		setRadius(t) {
			(this.radius = t), this.render();
		}
	}
	class Jl {
		constructor(t) {
			(t = t || {}), (this.patternImage_ = null), (this.color_ = null), void 0 !== t.color && this.setColor(t.color);
		}
		clone() {
			const t = this.getColor();
			return new Jl({ color: Array.isArray(t) ? t.slice() : t || void 0 });
		}
		getColor() {
			return this.color_;
		}
		setColor(t) {
			if (null !== t && 'object' == typeof t && 'src' in t) {
				const e = xl(null, t.src, 'anonymous', void 0, t.offset ? null : t.color ? t.color : null, !(t.offset && t.size));
				e.ready().then(() => {
					this.patternImage_ = null;
				}),
					e.getImageState() === Ta && e.load(),
					e.getImageState() === Pa && (this.patternImage_ = e);
			}
			this.color_ = t;
		}
		getKey() {
			const t = this.getColor();
			return t ? (t instanceof CanvasPattern || t instanceof CanvasGradient ? wi(t) : 'object' == typeof t && 'src' in t ? t.src + ':' + t.offset : Wa(t).toString()) : '';
		}
		loading() {
			return !!this.patternImage_;
		}
		ready() {
			return this.patternImage_ ? this.patternImage_.ready() : Promise.resolve();
		}
	}
	function Ql(t, e, n, i) {
		return void 0 !== n && void 0 !== i ? [n / t, i / e] : void 0 !== n ? n / t : void 0 !== i ? i / e : 1;
	}
	class th extends Kl {
		constructor(t) {
			const e = void 0 !== (t = t || {}).opacity ? t.opacity : 1,
				n = void 0 !== t.rotation ? t.rotation : 0,
				i = void 0 !== t.scale ? t.scale : 1,
				r = void 0 !== t.rotateWithView && t.rotateWithView;
			super({ opacity: e, rotation: n, scale: i, displacement: void 0 !== t.displacement ? t.displacement : [0, 0], rotateWithView: r, declutterMode: t.declutterMode }), (this.anchor_ = void 0 !== t.anchor ? t.anchor : [0.5, 0.5]), (this.normalizedAnchor_ = null), (this.anchorOrigin_ = void 0 !== t.anchorOrigin ? t.anchorOrigin : 'top-left'), (this.anchorXUnits_ = void 0 !== t.anchorXUnits ? t.anchorXUnits : 'fraction'), (this.anchorYUnits_ = void 0 !== t.anchorYUnits ? t.anchorYUnits : 'fraction'), (this.crossOrigin_ = void 0 !== t.crossOrigin ? t.crossOrigin : null);
			const s = void 0 !== t.img ? t.img : null;
			let o,
				a = t.src;
			if (
				(Ci(!(void 0 !== a && s), '`image` and `src` cannot be provided at the same time'),
				(void 0 !== a && 0 !== a.length) || !s || (a = s.src || wi(s)),
				Ci(void 0 !== a && a.length > 0, 'A defined and non-empty `src` or `image` must be provided'),
				Ci(!((void 0 !== t.width || void 0 !== t.height) && void 0 !== t.scale), '`width` or `height` cannot be provided together with `scale`'),
				void 0 !== t.src ? (o = Ta) : void 0 !== s && (o = 'complete' in s ? (s.complete ? (s.src ? Ra : Ta) : Pa) : Ra),
				(this.color_ = void 0 !== t.color ? Wa(t.color) : null),
				(this.iconImage_ = xl(s, a, this.crossOrigin_, o, this.color_)),
				(this.offset_ = void 0 !== t.offset ? t.offset : [0, 0]),
				(this.offsetOrigin_ = void 0 !== t.offsetOrigin ? t.offsetOrigin : 'top-left'),
				(this.origin_ = null),
				(this.size_ = void 0 !== t.size ? t.size : null),
				this.initialOptions_,
				void 0 !== t.width || void 0 !== t.height)
			) {
				let e, n;
				if (t.size) [e, n] = t.size;
				else {
					const i = this.getImage(1);
					if (i.width && i.height) (e = i.width), (n = i.height);
					else if (i instanceof HTMLImageElement) {
						this.initialOptions_ = t;
						const e = () => {
							if ((this.unlistenImageChange(e), !this.initialOptions_)) return;
							const n = this.iconImage_.getSize();
							this.setScale(Ql(n[0], n[1], t.width, t.height));
						};
						return void this.listenImageChange(e);
					}
				}
				void 0 !== e && this.setScale(Ql(e, n, t.width, t.height));
			}
		}
		clone() {
			let t, e, n;
			return (
				this.initialOptions_ ? ((e = this.initialOptions_.width), (n = this.initialOptions_.height)) : ((t = this.getScale()), (t = Array.isArray(t) ? t.slice() : t)),
				new th({ anchor: this.anchor_.slice(), anchorOrigin: this.anchorOrigin_, anchorXUnits: this.anchorXUnits_, anchorYUnits: this.anchorYUnits_, color: this.color_ && this.color_.slice ? this.color_.slice() : this.color_ || void 0, crossOrigin: this.crossOrigin_, offset: this.offset_.slice(), offsetOrigin: this.offsetOrigin_, opacity: this.getOpacity(), rotateWithView: this.getRotateWithView(), rotation: this.getRotation(), scale: t, width: e, height: n, size: null !== this.size_ ? this.size_.slice() : void 0, src: this.getSrc(), displacement: this.getDisplacement().slice(), declutterMode: this.getDeclutterMode() })
			);
		}
		getAnchor() {
			let t = this.normalizedAnchor_;
			if (!t) {
				t = this.anchor_;
				const e = this.getSize();
				if ('fraction' == this.anchorXUnits_ || 'fraction' == this.anchorYUnits_) {
					if (!e) return null;
					(t = this.anchor_.slice()), 'fraction' == this.anchorXUnits_ && (t[0] *= e[0]), 'fraction' == this.anchorYUnits_ && (t[1] *= e[1]);
				}
				if ('top-left' != this.anchorOrigin_) {
					if (!e) return null;
					t === this.anchor_ && (t = this.anchor_.slice()), ('top-right' != this.anchorOrigin_ && 'bottom-right' != this.anchorOrigin_) || (t[0] = -t[0] + e[0]), ('bottom-left' != this.anchorOrigin_ && 'bottom-right' != this.anchorOrigin_) || (t[1] = -t[1] + e[1]);
				}
				this.normalizedAnchor_ = t;
			}
			const e = this.getDisplacement(),
				n = this.getScaleArray();
			return [t[0] - e[0] / n[0], t[1] + e[1] / n[1]];
		}
		setAnchor(t) {
			(this.anchor_ = t), (this.normalizedAnchor_ = null);
		}
		getColor() {
			return this.color_;
		}
		getImage(t) {
			return this.iconImage_.getImage(t);
		}
		getPixelRatio(t) {
			return this.iconImage_.getPixelRatio(t);
		}
		getImageSize() {
			return this.iconImage_.getSize();
		}
		getImageState() {
			return this.iconImage_.getImageState();
		}
		getHitDetectionImage() {
			return this.iconImage_.getHitDetectionImage();
		}
		getOrigin() {
			if (this.origin_) return this.origin_;
			let t = this.offset_;
			if ('top-left' != this.offsetOrigin_) {
				const e = this.getSize(),
					n = this.iconImage_.getSize();
				if (!e || !n) return null;
				(t = t.slice()), ('top-right' != this.offsetOrigin_ && 'bottom-right' != this.offsetOrigin_) || (t[0] = n[0] - e[0] - t[0]), ('bottom-left' != this.offsetOrigin_ && 'bottom-right' != this.offsetOrigin_) || (t[1] = n[1] - e[1] - t[1]);
			}
			return (this.origin_ = t), this.origin_;
		}
		getSrc() {
			return this.iconImage_.getSrc();
		}
		getSize() {
			return this.size_ ? this.size_ : this.iconImage_.getSize();
		}
		getWidth() {
			const t = this.getScaleArray();
			return this.size_ ? this.size_[0] * t[0] : this.iconImage_.getImageState() == Ra ? this.iconImage_.getSize()[0] * t[0] : void 0;
		}
		getHeight() {
			const t = this.getScaleArray();
			return this.size_ ? this.size_[1] * t[1] : this.iconImage_.getImageState() == Ra ? this.iconImage_.getSize()[1] * t[1] : void 0;
		}
		setScale(t) {
			delete this.initialOptions_, super.setScale(t);
		}
		listenImageChange(t) {
			this.iconImage_.addEventListener(Kn, t);
		}
		load() {
			this.iconImage_.load();
		}
		unlistenImageChange(t) {
			this.iconImage_.removeEventListener(Kn, t);
		}
		ready() {
			return this.iconImage_.ready();
		}
	}
	class eh {
		constructor(t) {
			(t = t || {}), (this.color_ = void 0 !== t.color ? t.color : null), (this.lineCap_ = t.lineCap), (this.lineDash_ = void 0 !== t.lineDash ? t.lineDash : null), (this.lineDashOffset_ = t.lineDashOffset), (this.lineJoin_ = t.lineJoin), (this.miterLimit_ = t.miterLimit), (this.width_ = t.width);
		}
		clone() {
			const t = this.getColor();
			return new eh({ color: Array.isArray(t) ? t.slice() : t || void 0, lineCap: this.getLineCap(), lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0, lineDashOffset: this.getLineDashOffset(), lineJoin: this.getLineJoin(), miterLimit: this.getMiterLimit(), width: this.getWidth() });
		}
		getColor() {
			return this.color_;
		}
		getLineCap() {
			return this.lineCap_;
		}
		getLineDash() {
			return this.lineDash_;
		}
		getLineDashOffset() {
			return this.lineDashOffset_;
		}
		getLineJoin() {
			return this.lineJoin_;
		}
		getMiterLimit() {
			return this.miterLimit_;
		}
		getWidth() {
			return this.width_;
		}
		setColor(t) {
			this.color_ = t;
		}
		setLineCap(t) {
			this.lineCap_ = t;
		}
		setLineDash(t) {
			this.lineDash_ = t;
		}
		setLineDashOffset(t) {
			this.lineDashOffset_ = t;
		}
		setLineJoin(t) {
			this.lineJoin_ = t;
		}
		setMiterLimit(t) {
			this.miterLimit_ = t;
		}
		setWidth(t) {
			this.width_ = t;
		}
	}
	class nh {
		constructor(t) {
			(t = t || {}), (this.geometry_ = null), (this.geometryFunction_ = oh), void 0 !== t.geometry && this.setGeometry(t.geometry), (this.fill_ = void 0 !== t.fill ? t.fill : null), (this.image_ = void 0 !== t.image ? t.image : null), (this.renderer_ = void 0 !== t.renderer ? t.renderer : null), (this.hitDetectionRenderer_ = void 0 !== t.hitDetectionRenderer ? t.hitDetectionRenderer : null), (this.stroke_ = void 0 !== t.stroke ? t.stroke : null), (this.text_ = void 0 !== t.text ? t.text : null), (this.zIndex_ = t.zIndex);
		}
		clone() {
			let t = this.getGeometry();
			return t && 'object' == typeof t && (t = t.clone()), new nh({ geometry: t ?? void 0, fill: this.getFill() ? this.getFill().clone() : void 0, image: this.getImage() ? this.getImage().clone() : void 0, renderer: this.getRenderer() ?? void 0, stroke: this.getStroke() ? this.getStroke().clone() : void 0, text: this.getText() ? this.getText().clone() : void 0, zIndex: this.getZIndex() });
		}
		getRenderer() {
			return this.renderer_;
		}
		setRenderer(t) {
			this.renderer_ = t;
		}
		setHitDetectionRenderer(t) {
			this.hitDetectionRenderer_ = t;
		}
		getHitDetectionRenderer() {
			return this.hitDetectionRenderer_;
		}
		getGeometry() {
			return this.geometry_;
		}
		getGeometryFunction() {
			return this.geometryFunction_;
		}
		getFill() {
			return this.fill_;
		}
		setFill(t) {
			this.fill_ = t;
		}
		getImage() {
			return this.image_;
		}
		setImage(t) {
			this.image_ = t;
		}
		getStroke() {
			return this.stroke_;
		}
		setStroke(t) {
			this.stroke_ = t;
		}
		getText() {
			return this.text_;
		}
		setText(t) {
			this.text_ = t;
		}
		getZIndex() {
			return this.zIndex_;
		}
		setGeometry(t) {
			'function' == typeof t
				? (this.geometryFunction_ = t)
				: 'string' == typeof t
				? (this.geometryFunction_ = function (e) {
						return e.get(t);
				  })
				: t
				? void 0 !== t &&
				  (this.geometryFunction_ = function () {
						return t;
				  })
				: (this.geometryFunction_ = oh),
				(this.geometry_ = t);
		}
		setZIndex(t) {
			this.zIndex_ = t;
		}
	}
	let ih = null;
	function rh(t, e) {
		if (!ih) {
			const t = new Jl({ color: 'rgba(255,255,255,0.4)' }),
				e = new eh({ color: '#3399CC', width: 1.25 });
			ih = [new nh({ image: new Hl({ fill: t, stroke: e, radius: 5 }), fill: t, stroke: e })];
		}
		return ih;
	}
	function sh() {
		const t = {},
			e = [255, 255, 255, 1],
			n = [0, 153, 255, 1];
		return (t.Polygon = [new nh({ fill: new Jl({ color: [255, 255, 255, 0.5] }) })]), (t.MultiPolygon = t.Polygon), (t.LineString = [new nh({ stroke: new eh({ color: e, width: 5 }) }), new nh({ stroke: new eh({ color: n, width: 3 }) })]), (t.MultiLineString = t.LineString), (t.Circle = t.Polygon.concat(t.LineString)), (t.Point = [new nh({ image: new Hl({ radius: 6, fill: new Jl({ color: n }), stroke: new eh({ color: e, width: 1.5 }) }), zIndex: 1 / 0 })]), (t.MultiPoint = t.Point), (t.GeometryCollection = t.Polygon.concat(t.LineString, t.Point)), t;
	}
	function oh(t) {
		return t.getGeometry();
	}
	class ah {
		constructor(t) {
			(t = t || {}),
				(this.font_ = t.font),
				(this.rotation_ = t.rotation),
				(this.rotateWithView_ = t.rotateWithView),
				(this.keepUpright_ = t.keepUpright),
				(this.scale_ = t.scale),
				(this.scaleArray_ = Zl(void 0 !== t.scale ? t.scale : 1)),
				(this.text_ = t.text),
				(this.textAlign_ = t.textAlign),
				(this.justify_ = t.justify),
				(this.repeat_ = t.repeat),
				(this.textBaseline_ = t.textBaseline),
				(this.fill_ = void 0 !== t.fill ? t.fill : new Jl({ color: '#333' })),
				(this.maxAngle_ = void 0 !== t.maxAngle ? t.maxAngle : Math.PI / 4),
				(this.placement_ = void 0 !== t.placement ? t.placement : 'point'),
				(this.overflow_ = !!t.overflow),
				(this.stroke_ = void 0 !== t.stroke ? t.stroke : null),
				(this.offsetX_ = void 0 !== t.offsetX ? t.offsetX : 0),
				(this.offsetY_ = void 0 !== t.offsetY ? t.offsetY : 0),
				(this.backgroundFill_ = t.backgroundFill ? t.backgroundFill : null),
				(this.backgroundStroke_ = t.backgroundStroke ? t.backgroundStroke : null),
				(this.padding_ = void 0 === t.padding ? null : t.padding),
				(this.declutterMode_ = t.declutterMode);
		}
		clone() {
			const t = this.getScale();
			return new ah({
				font: this.getFont(),
				placement: this.getPlacement(),
				repeat: this.getRepeat(),
				maxAngle: this.getMaxAngle(),
				overflow: this.getOverflow(),
				rotation: this.getRotation(),
				rotateWithView: this.getRotateWithView(),
				keepUpright: this.getKeepUpright(),
				scale: Array.isArray(t) ? t.slice() : t,
				text: this.getText(),
				textAlign: this.getTextAlign(),
				justify: this.getJustify(),
				textBaseline: this.getTextBaseline(),
				fill: this.getFill() ? this.getFill().clone() : void 0,
				stroke: this.getStroke() ? this.getStroke().clone() : void 0,
				offsetX: this.getOffsetX(),
				offsetY: this.getOffsetY(),
				backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : void 0,
				backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : void 0,
				padding: this.getPadding() || void 0,
				declutterMode: this.getDeclutterMode(),
			});
		}
		getOverflow() {
			return this.overflow_;
		}
		getFont() {
			return this.font_;
		}
		getMaxAngle() {
			return this.maxAngle_;
		}
		getPlacement() {
			return this.placement_;
		}
		getRepeat() {
			return this.repeat_;
		}
		getOffsetX() {
			return this.offsetX_;
		}
		getOffsetY() {
			return this.offsetY_;
		}
		getFill() {
			return this.fill_;
		}
		getRotateWithView() {
			return this.rotateWithView_;
		}
		getKeepUpright() {
			return this.keepUpright_;
		}
		getRotation() {
			return this.rotation_;
		}
		getScale() {
			return this.scale_;
		}
		getScaleArray() {
			return this.scaleArray_;
		}
		getStroke() {
			return this.stroke_;
		}
		getText() {
			return this.text_;
		}
		getTextAlign() {
			return this.textAlign_;
		}
		getJustify() {
			return this.justify_;
		}
		getTextBaseline() {
			return this.textBaseline_;
		}
		getBackgroundFill() {
			return this.backgroundFill_;
		}
		getBackgroundStroke() {
			return this.backgroundStroke_;
		}
		getPadding() {
			return this.padding_;
		}
		getDeclutterMode() {
			return this.declutterMode_;
		}
		setOverflow(t) {
			this.overflow_ = t;
		}
		setFont(t) {
			this.font_ = t;
		}
		setMaxAngle(t) {
			this.maxAngle_ = t;
		}
		setOffsetX(t) {
			this.offsetX_ = t;
		}
		setOffsetY(t) {
			this.offsetY_ = t;
		}
		setPlacement(t) {
			this.placement_ = t;
		}
		setRepeat(t) {
			this.repeat_ = t;
		}
		setRotateWithView(t) {
			this.rotateWithView_ = t;
		}
		setKeepUpright(t) {
			this.keepUpright_ = t;
		}
		setFill(t) {
			this.fill_ = t;
		}
		setRotation(t) {
			this.rotation_ = t;
		}
		setScale(t) {
			(this.scale_ = t), (this.scaleArray_ = Zl(void 0 !== t ? t : 1));
		}
		setStroke(t) {
			this.stroke_ = t;
		}
		setText(t) {
			this.text_ = t;
		}
		setTextAlign(t) {
			this.textAlign_ = t;
		}
		setJustify(t) {
			this.justify_ = t;
		}
		setTextBaseline(t) {
			this.textBaseline_ = t;
		}
		setBackgroundFill(t) {
			this.backgroundFill_ = t;
		}
		setBackgroundStroke(t) {
			this.backgroundStroke_ = t;
		}
		setPadding(t) {
			this.padding_ = t;
		}
	}
	var lh = 'add',
		hh = 'remove';
	const ch = 'length';
	class uh extends ui {
		constructor(t, e, n) {
			super(t), (this.element = e), (this.index = n);
		}
	}
	class dh extends Si {
		constructor(t, e) {
			if ((super(), this.on, this.once, this.un, (e = e || {}), (this.unique_ = !!e.unique), (this.array_ = t || []), this.unique_)) for (let t = 0, e = this.array_.length; t < e; ++t) this.assertUnique_(this.array_[t], t);
			this.updateLength_();
		}
		clear() {
			for (; this.getLength() > 0; ) this.pop();
		}
		extend(t) {
			for (let e = 0, n = t.length; e < n; ++e) this.push(t[e]);
			return this;
		}
		forEach(t) {
			const e = this.array_;
			for (let n = 0, i = e.length; n < i; ++n) t(e[n], n, e);
		}
		getArray() {
			return this.array_;
		}
		item(t) {
			return this.array_[t];
		}
		getLength() {
			return this.get(ch);
		}
		insertAt(t, e) {
			if (t < 0 || t > this.getLength()) throw new Error('Index out of bounds: ' + t);
			this.unique_ && this.assertUnique_(e), this.array_.splice(t, 0, e), this.updateLength_(), this.dispatchEvent(new uh(lh, e, t));
		}
		pop() {
			return this.removeAt(this.getLength() - 1);
		}
		push(t) {
			this.unique_ && this.assertUnique_(t);
			const e = this.getLength();
			return this.insertAt(e, t), this.getLength();
		}
		remove(t) {
			const e = this.array_;
			for (let n = 0, i = e.length; n < i; ++n) if (e[n] === t) return this.removeAt(n);
		}
		removeAt(t) {
			if (t < 0 || t >= this.getLength()) return;
			const e = this.array_[t];
			return this.array_.splice(t, 1), this.updateLength_(), this.dispatchEvent(new uh(hh, e, t)), e;
		}
		setAt(t, e) {
			if (t >= this.getLength()) return void this.insertAt(t, e);
			if (t < 0) throw new Error('Index out of bounds: ' + t);
			this.unique_ && this.assertUnique_(e, t);
			const n = this.array_[t];
			(this.array_[t] = e), this.dispatchEvent(new uh(hh, n, t)), this.dispatchEvent(new uh(lh, e, t));
		}
		updateLength_() {
			this.set(ch, this.array_.length);
		}
		assertUnique_(t, e) {
			for (let n = 0, i = this.array_.length; n < i; ++n) if (this.array_[n] === t && n !== e) throw new Error('Duplicate item added to a unique collection');
		}
	}
	var gh = 'prerender',
		fh = 'postrender',
		ph = 'precompose',
		mh = 'postcompose',
		_h = 'rendercomplete';
	class yh {
		drawCustom(t, e, n, i, r) {}
		drawGeometry(t) {}
		setStyle(t) {}
		drawCircle(t, e, n) {}
		drawFeature(t, e, n) {}
		drawGeometryCollection(t, e, n) {}
		drawLineString(t, e, n) {}
		drawMultiLineString(t, e, n) {}
		drawMultiPoint(t, e, n) {}
		drawMultiPolygon(t, e, n) {}
		drawPoint(t, e, n) {}
		drawPolygon(t, e, n) {}
		drawText(t, e, n) {}
		setFillStrokeStyle(t, e) {}
		setImageStyle(t, e) {}
		setTextStyle(t, e) {}
	}
	class xh extends yh {
		constructor(t, e, n, i, r, s, o) {
			super(),
				(this.context_ = t),
				(this.pixelRatio_ = e),
				(this.extent_ = n),
				(this.transform_ = i),
				(this.transformRotation_ = i ? Pr(Math.atan2(i[1], i[0]), 10) : 0),
				(this.viewRotation_ = r),
				(this.squaredTolerance_ = s),
				(this.userTransform_ = o),
				(this.contextFillState_ = null),
				(this.contextStrokeState_ = null),
				(this.contextTextState_ = null),
				(this.fillState_ = null),
				(this.strokeState_ = null),
				(this.image_ = null),
				(this.imageAnchorX_ = 0),
				(this.imageAnchorY_ = 0),
				(this.imageHeight_ = 0),
				(this.imageOpacity_ = 0),
				(this.imageOriginX_ = 0),
				(this.imageOriginY_ = 0),
				(this.imageRotateWithView_ = !1),
				(this.imageRotation_ = 0),
				(this.imageScale_ = [0, 0]),
				(this.imageWidth_ = 0),
				(this.text_ = ''),
				(this.textOffsetX_ = 0),
				(this.textOffsetY_ = 0),
				(this.textRotateWithView_ = !1),
				(this.textRotation_ = 0),
				(this.textScale_ = [0, 0]),
				(this.textFillState_ = null),
				(this.textStrokeState_ = null),
				(this.textState_ = null),
				(this.pixelCoordinates_ = []),
				(this.tmpLocalTransform_ = [1, 0, 0, 1, 0, 0]);
		}
		drawImages_(t, e, n, i) {
			if (!this.image_) return;
			const r = Xr(t, e, n, i, this.transform_, this.pixelCoordinates_),
				s = this.context_,
				o = this.tmpLocalTransform_,
				a = s.globalAlpha;
			1 != this.imageOpacity_ && (s.globalAlpha = a * this.imageOpacity_);
			let l = this.imageRotation_;
			0 === this.transformRotation_ && (l -= this.viewRotation_), this.imageRotateWithView_ && (l += this.viewRotation_);
			for (let t = 0, e = r.length; t < e; t += 2) {
				const e = r[t] - this.imageAnchorX_,
					n = r[t + 1] - this.imageAnchorY_;
				if (0 !== l || 1 != this.imageScale_[0] || 1 != this.imageScale_[1]) {
					const t = e + this.imageAnchorX_,
						i = n + this.imageAnchorY_;
					Go(o, t, i, 1, 1, l, -t, -i), s.save(), s.transform.apply(s, o), s.translate(t, i), s.scale(this.imageScale_[0], this.imageScale_[1]), s.drawImage(this.image_, this.imageOriginX_, this.imageOriginY_, this.imageWidth_, this.imageHeight_, -this.imageAnchorX_, -this.imageAnchorY_, this.imageWidth_, this.imageHeight_), s.restore();
				} else s.drawImage(this.image_, this.imageOriginX_, this.imageOriginY_, this.imageWidth_, this.imageHeight_, e, n, this.imageWidth_, this.imageHeight_);
			}
			1 != this.imageOpacity_ && (s.globalAlpha = a);
		}
		drawText_(t, e, n, i) {
			if (!this.textState_ || '' === this.text_) return;
			this.textFillState_ && this.setContextFillState_(this.textFillState_), this.textStrokeState_ && this.setContextStrokeState_(this.textStrokeState_), this.setContextTextState_(this.textState_);
			const r = Xr(t, e, n, i, this.transform_, this.pixelCoordinates_),
				s = this.context_;
			let o = this.textRotation_;
			for (0 === this.transformRotation_ && (o -= this.viewRotation_), this.textRotateWithView_ && (o += this.viewRotation_); e < n; e += i) {
				const t = r[e] + this.textOffsetX_,
					n = r[e + 1] + this.textOffsetY_;
				0 !== o || 1 != this.textScale_[0] || 1 != this.textScale_[1] ? (s.save(), s.translate(t - this.textOffsetX_, n - this.textOffsetY_), s.rotate(o), s.translate(this.textOffsetX_, this.textOffsetY_), s.scale(this.textScale_[0], this.textScale_[1]), this.textStrokeState_ && s.strokeText(this.text_, 0, 0), this.textFillState_ && s.fillText(this.text_, 0, 0), s.restore()) : (this.textStrokeState_ && s.strokeText(this.text_, t, n), this.textFillState_ && s.fillText(this.text_, t, n));
			}
		}
		moveToLineTo_(t, e, n, i, r) {
			const s = this.context_,
				o = Xr(t, e, n, i, this.transform_, this.pixelCoordinates_);
			s.moveTo(o[0], o[1]);
			let a = o.length;
			r && (a -= 2);
			for (let t = 2; t < a; t += 2) s.lineTo(o[t], o[t + 1]);
			return r && s.closePath(), n;
		}
		drawRings_(t, e, n, i) {
			for (let r = 0, s = n.length; r < s; ++r) e = this.moveToLineTo_(t, e, n[r], i, !0);
			return e;
		}
		drawCircle(t) {
			if ((this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)), hr(this.extent_, t.getExtent()))) {
				if (this.fillState_ || this.strokeState_) {
					this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
					const e = (function (t, e, n) {
							const i = t.getFlatCoordinates();
							if (!i) return null;
							const r = t.getStride();
							return Xr(i, 0, i.length, r, e, n);
						})(t, this.transform_, this.pixelCoordinates_),
						n = e[2] - e[0],
						i = e[3] - e[1],
						r = Math.sqrt(n * n + i * i),
						s = this.context_;
					s.beginPath(), s.arc(e[0], e[1], r, 0, 2 * Math.PI), this.fillState_ && s.fill(), this.strokeState_ && s.stroke();
				}
				'' !== this.text_ && this.drawText_(t.getCenter(), 0, 2, 2);
			}
		}
		setStyle(t) {
			this.setFillStrokeStyle(t.getFill(), t.getStroke()), this.setImageStyle(t.getImage()), this.setTextStyle(t.getText());
		}
		setTransform(t) {
			this.transform_ = t;
		}
		drawGeometry(t) {
			switch (t.getType()) {
				case 'Point':
					this.drawPoint(t);
					break;
				case 'LineString':
					this.drawLineString(t);
					break;
				case 'Polygon':
					this.drawPolygon(t);
					break;
				case 'MultiPoint':
					this.drawMultiPoint(t);
					break;
				case 'MultiLineString':
					this.drawMultiLineString(t);
					break;
				case 'MultiPolygon':
					this.drawMultiPolygon(t);
					break;
				case 'GeometryCollection':
					this.drawGeometryCollection(t);
					break;
				case 'Circle':
					this.drawCircle(t);
			}
		}
		drawFeature(t, e) {
			const n = e.getGeometryFunction()(t);
			n && (this.setStyle(e), this.drawGeometry(n));
		}
		drawGeometryCollection(t) {
			const e = t.getGeometriesArray();
			for (let t = 0, n = e.length; t < n; ++t) this.drawGeometry(e[t]);
		}
		drawPoint(t) {
			this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
			const e = t.getFlatCoordinates(),
				n = t.getStride();
			this.image_ && this.drawImages_(e, 0, e.length, n), '' !== this.text_ && this.drawText_(e, 0, e.length, n);
		}
		drawMultiPoint(t) {
			this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
			const e = t.getFlatCoordinates(),
				n = t.getStride();
			this.image_ && this.drawImages_(e, 0, e.length, n), '' !== this.text_ && this.drawText_(e, 0, e.length, n);
		}
		drawLineString(t) {
			if ((this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)), hr(this.extent_, t.getExtent()))) {
				if (this.strokeState_) {
					this.setContextStrokeState_(this.strokeState_);
					const e = this.context_,
						n = t.getFlatCoordinates();
					e.beginPath(), this.moveToLineTo_(n, 0, n.length, t.getStride(), !1), e.stroke();
				}
				if ('' !== this.text_) {
					const e = t.getFlatMidpoint();
					this.drawText_(e, 0, 2, 2);
				}
			}
		}
		drawMultiLineString(t) {
			this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
			const e = t.getExtent();
			if (hr(this.extent_, e)) {
				if (this.strokeState_) {
					this.setContextStrokeState_(this.strokeState_);
					const e = this.context_,
						n = t.getFlatCoordinates();
					let i = 0;
					const r = t.getEnds(),
						s = t.getStride();
					e.beginPath();
					for (let t = 0, e = r.length; t < e; ++t) i = this.moveToLineTo_(n, i, r[t], s, !1);
					e.stroke();
				}
				if ('' !== this.text_) {
					const e = t.getFlatMidpoints();
					this.drawText_(e, 0, e.length, 2);
				}
			}
		}
		drawPolygon(t) {
			if ((this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)), hr(this.extent_, t.getExtent()))) {
				if (this.strokeState_ || this.fillState_) {
					this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
					const e = this.context_;
					e.beginPath(), this.drawRings_(t.getOrientedFlatCoordinates(), 0, t.getEnds(), t.getStride()), this.fillState_ && e.fill(), this.strokeState_ && e.stroke();
				}
				if ('' !== this.text_) {
					const e = t.getFlatInteriorPoint();
					this.drawText_(e, 0, 2, 2);
				}
			}
		}
		drawMultiPolygon(t) {
			if ((this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)), hr(this.extent_, t.getExtent()))) {
				if (this.strokeState_ || this.fillState_) {
					this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
					const e = this.context_,
						n = t.getOrientedFlatCoordinates();
					let i = 0;
					const r = t.getEndss(),
						s = t.getStride();
					e.beginPath();
					for (let t = 0, e = r.length; t < e; ++t) {
						const e = r[t];
						i = this.drawRings_(n, i, e, s);
					}
					this.fillState_ && e.fill(), this.strokeState_ && e.stroke();
				}
				if ('' !== this.text_) {
					const e = t.getFlatInteriorPoints();
					this.drawText_(e, 0, e.length, 2);
				}
			}
		}
		setContextFillState_(t) {
			const e = this.context_,
				n = this.contextFillState_;
			n ? n.fillStyle != t.fillStyle && ((n.fillStyle = t.fillStyle), (e.fillStyle = t.fillStyle)) : ((e.fillStyle = t.fillStyle), (this.contextFillState_ = { fillStyle: t.fillStyle }));
		}
		setContextStrokeState_(t) {
			const e = this.context_,
				n = this.contextStrokeState_;
			n
				? (n.lineCap != t.lineCap && ((n.lineCap = t.lineCap), (e.lineCap = t.lineCap)), $n(n.lineDash, t.lineDash) || e.setLineDash((n.lineDash = t.lineDash)), n.lineDashOffset != t.lineDashOffset && ((n.lineDashOffset = t.lineDashOffset), (e.lineDashOffset = t.lineDashOffset)), n.lineJoin != t.lineJoin && ((n.lineJoin = t.lineJoin), (e.lineJoin = t.lineJoin)), n.lineWidth != t.lineWidth && ((n.lineWidth = t.lineWidth), (e.lineWidth = t.lineWidth)), n.miterLimit != t.miterLimit && ((n.miterLimit = t.miterLimit), (e.miterLimit = t.miterLimit)), n.strokeStyle != t.strokeStyle && ((n.strokeStyle = t.strokeStyle), (e.strokeStyle = t.strokeStyle)))
				: ((e.lineCap = t.lineCap), e.setLineDash(t.lineDash), (e.lineDashOffset = t.lineDashOffset), (e.lineJoin = t.lineJoin), (e.lineWidth = t.lineWidth), (e.miterLimit = t.miterLimit), (e.strokeStyle = t.strokeStyle), (this.contextStrokeState_ = { lineCap: t.lineCap, lineDash: t.lineDash, lineDashOffset: t.lineDashOffset, lineJoin: t.lineJoin, lineWidth: t.lineWidth, miterLimit: t.miterLimit, strokeStyle: t.strokeStyle }));
		}
		setContextTextState_(t) {
			const e = this.context_,
				n = this.contextTextState_,
				i = t.textAlign ? t.textAlign : Al;
			n ? (n.font != t.font && ((n.font = t.font), (e.font = t.font)), n.textAlign != i && ((n.textAlign = i), (e.textAlign = i)), n.textBaseline != t.textBaseline && ((n.textBaseline = t.textBaseline), (e.textBaseline = t.textBaseline))) : ((e.font = t.font), (e.textAlign = i), (e.textBaseline = t.textBaseline), (this.contextTextState_ = { font: t.font, textAlign: i, textBaseline: t.textBaseline }));
		}
		setFillStrokeStyle(t, e) {
			if (t) {
				const e = t.getColor();
				this.fillState_ = { fillStyle: vl(e || Fl) };
			} else this.fillState_ = null;
			if (e) {
				const t = e.getColor(),
					n = e.getLineCap(),
					i = e.getLineDash(),
					r = e.getLineDashOffset(),
					s = e.getLineJoin(),
					o = e.getWidth(),
					a = e.getMiterLimit(),
					l = i || Il;
				this.strokeState_ = { lineCap: void 0 !== n ? n : Ml, lineDash: 1 === this.pixelRatio_ ? l : l.map((t) => t * this.pixelRatio_), lineDashOffset: (r || 0) * this.pixelRatio_, lineJoin: void 0 !== s ? s : kl, lineWidth: (void 0 !== o ? o : 1) * this.pixelRatio_, miterLimit: void 0 !== a ? a : 10, strokeStyle: vl(t || Ll) };
			} else this.strokeState_ = null;
		}
		setImageStyle(t) {
			let e;
			if (!t || !(e = t.getSize())) return void (this.image_ = null);
			const n = t.getPixelRatio(this.pixelRatio_),
				i = t.getAnchor(),
				r = t.getOrigin();
			(this.image_ = t.getImage(this.pixelRatio_)), (this.imageAnchorX_ = i[0] * n), (this.imageAnchorY_ = i[1] * n), (this.imageHeight_ = e[1] * n), (this.imageOpacity_ = t.getOpacity()), (this.imageOriginX_ = r[0]), (this.imageOriginY_ = r[1]), (this.imageRotateWithView_ = t.getRotateWithView()), (this.imageRotation_ = t.getRotation());
			const s = t.getScaleArray();
			(this.imageScale_ = [(s[0] * this.pixelRatio_) / n, (s[1] * this.pixelRatio_) / n]), (this.imageWidth_ = e[0] * n);
		}
		setTextStyle(t) {
			if (t) {
				const e = t.getFill();
				if (e) {
					const t = e.getColor();
					this.textFillState_ = { fillStyle: vl(t || Fl) };
				} else this.textFillState_ = null;
				const n = t.getStroke();
				if (n) {
					const t = n.getColor(),
						e = n.getLineCap(),
						i = n.getLineDash(),
						r = n.getLineDashOffset(),
						s = n.getLineJoin(),
						o = n.getWidth(),
						a = n.getMiterLimit();
					this.textStrokeState_ = { lineCap: void 0 !== e ? e : Ml, lineDash: i || Il, lineDashOffset: r || 0, lineJoin: void 0 !== s ? s : kl, lineWidth: void 0 !== o ? o : 1, miterLimit: void 0 !== a ? a : 10, strokeStyle: vl(t || Ll) };
				} else this.textStrokeState_ = null;
				const i = t.getFont(),
					r = t.getOffsetX(),
					s = t.getOffsetY(),
					o = t.getRotateWithView(),
					a = t.getRotation(),
					l = t.getScaleArray(),
					h = t.getText(),
					c = t.getTextAlign(),
					u = t.getTextBaseline();
				(this.textState_ = { font: void 0 !== i ? i : Rl, textAlign: void 0 !== c ? c : Al, textBaseline: void 0 !== u ? u : Dl }), (this.text_ = void 0 !== h ? (Array.isArray(h) ? h.reduce((t, e, n) => t + (n % 2 ? ' ' : e), '') : h) : ''), (this.textOffsetX_ = void 0 !== r ? this.pixelRatio_ * r : 0), (this.textOffsetY_ = void 0 !== s ? this.pixelRatio_ * s : 0), (this.textRotateWithView_ = void 0 !== o && o), (this.textRotation_ = void 0 !== a ? a : 0), (this.textScale_ = [this.pixelRatio_ * l[0], this.pixelRatio_ * l[1]]);
			} else this.text_ = '';
		}
	}
	const vh = {
		Point: function (t, e, n, i, r, s) {
			const o = n.getImage(),
				a = n.getText(),
				l = a && a.getText(),
				h = s && o && l ? {} : void 0;
			if (o) {
				if (o.getImageState() != Ra) return;
				const s = t.getBuilder(n.getZIndex(), 'Image');
				s.setImageStyle(o, h), s.drawPoint(e, i, r);
			}
			if (l) {
				const s = t.getBuilder(n.getZIndex(), 'Text');
				s.setTextStyle(a, h), s.drawText(e, i, r);
			}
		},
		LineString: function (t, e, n, i, r) {
			const s = n.getStroke();
			if (s) {
				const o = t.getBuilder(n.getZIndex(), 'LineString');
				o.setFillStrokeStyle(null, s), o.drawLineString(e, i, r);
			}
			const o = n.getText();
			if (o && o.getText()) {
				const s = t.getBuilder(n.getZIndex(), 'Text');
				s.setTextStyle(o), s.drawText(e, i, r);
			}
		},
		Polygon: function (t, e, n, i, r) {
			const s = n.getFill(),
				o = n.getStroke();
			if (s || o) {
				const a = t.getBuilder(n.getZIndex(), 'Polygon');
				a.setFillStrokeStyle(s, o), a.drawPolygon(e, i, r);
			}
			const a = n.getText();
			if (a && a.getText()) {
				const s = t.getBuilder(n.getZIndex(), 'Text');
				s.setTextStyle(a), s.drawText(e, i, r);
			}
		},
		MultiPoint: function (t, e, n, i, r, s) {
			const o = n.getImage(),
				a = o && 0 !== o.getOpacity(),
				l = n.getText(),
				h = l && l.getText(),
				c = s && a && h ? {} : void 0;
			if (a) {
				if (o.getImageState() != Ra) return;
				const s = t.getBuilder(n.getZIndex(), 'Image');
				s.setImageStyle(o, c), s.drawMultiPoint(e, i, r);
			}
			if (h) {
				const s = t.getBuilder(n.getZIndex(), 'Text');
				s.setTextStyle(l, c), s.drawText(e, i, r);
			}
		},
		MultiLineString: function (t, e, n, i, r) {
			const s = n.getStroke();
			if (s) {
				const o = t.getBuilder(n.getZIndex(), 'LineString');
				o.setFillStrokeStyle(null, s), o.drawMultiLineString(e, i, r);
			}
			const o = n.getText();
			if (o && o.getText()) {
				const s = t.getBuilder(n.getZIndex(), 'Text');
				s.setTextStyle(o), s.drawText(e, i, r);
			}
		},
		MultiPolygon: function (t, e, n, i, r) {
			const s = n.getFill(),
				o = n.getStroke();
			if (o || s) {
				const a = t.getBuilder(n.getZIndex(), 'Polygon');
				a.setFillStrokeStyle(s, o), a.drawMultiPolygon(e, i, r);
			}
			const a = n.getText();
			if (a && a.getText()) {
				const s = t.getBuilder(n.getZIndex(), 'Text');
				s.setTextStyle(a), s.drawText(e, i, r);
			}
		},
		GeometryCollection: function (t, e, n, i, r, s) {
			const o = e.getGeometriesArray();
			let a, l;
			for (a = 0, l = o.length; a < l; ++a) {
				(0, vh[o[a].getType()])(t, o[a], n, i, r, s);
			}
		},
		Circle: function (t, e, n, i, r) {
			const s = n.getFill(),
				o = n.getStroke();
			if (s || o) {
				const a = t.getBuilder(n.getZIndex(), 'Circle');
				a.setFillStrokeStyle(s, o), a.drawCircle(e, i, r);
			}
			const a = n.getText();
			if (a && a.getText()) {
				const r = t.getBuilder(n.getZIndex(), 'Text');
				r.setTextStyle(a), r.drawText(e, i);
			}
		},
	};
	function wh(t, e) {
		return parseInt(wi(t), 10) - parseInt(wi(e), 10);
	}
	function bh(t, e) {
		const n = Sh(t, e);
		return n * n;
	}
	function Sh(t, e) {
		return (0.5 * t) / e;
	}
	function Ch(t, e, n, i, r, s, o, a) {
		const l = [],
			h = n.getImage();
		if (h) {
			let t = !0;
			const e = h.getImageState();
			e == Ra || e == Fa ? (t = !1) : e == Ta && h.load(), t && l.push(h.ready());
		}
		const c = n.getFill();
		c && c.loading() && l.push(c.ready());
		const u = l.length > 0;
		return (
			u && Promise.all(l).then(() => r(null)),
			(function (t, e, n, i, r, s, o) {
				const a = n.getGeometryFunction()(e);
				if (!a) return;
				const l = a.simplifyTransformed(i, r),
					h = n.getRenderer();
				if (h) Eh(t, l, n, e, o);
				else {
					(0, vh[l.getType()])(t, l, n, e, o, s);
				}
			})(t, e, n, i, s, o, a),
			u
		);
	}
	function Eh(t, e, n, i, r) {
		if ('GeometryCollection' == e.getType()) {
			const s = e.getGeometries();
			for (let e = 0, o = s.length; e < o; ++e) Eh(t, s[e], n, i, r);
			return;
		}
		t.getBuilder(n.getZIndex(), 'Default').drawCustom(e, i, n.getRenderer(), n.getHitDetectionRenderer(), r);
	}
	function Th(t, e, n, i, r, s, o) {
		const a = new XMLHttpRequest();
		a.open('GET', 'function' == typeof t ? t(n, i, r) : t, !0),
			'arraybuffer' == e.getType() && (a.responseType = 'arraybuffer'),
			(a.withCredentials = false),
			(a.onload = function (t) {
				if (!a.status || (a.status >= 200 && a.status < 300)) {
					const t = e.getType();
					try {
						let i;
						'text' == t || 'json' == t ? (i = a.responseText) : 'xml' == t ? (i = a.responseXML || a.responseText) : 'arraybuffer' == t && (i = a.response), i ? s(e.readFeatures(i, { extent: n, featureProjection: r }), e.readProjection(i)) : o();
					} catch {
						o();
					}
				} else o();
			}),
			(a.onerror = o),
			a.send();
	}
	function Ph(t, e) {
		return function (n, i, r, s, o) {
			Th(
				t,
				e,
				n,
				i,
				r,
				(t, e) => {
					this.addFeatures(t), void 0 !== s && s(t);
				},
				o || Wn
			);
		};
	}
	function Rh(t, e) {
		return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
	}
	function Fh(t, e) {
		return [t];
	}
	function Mh(t, e, n = 0, i = t.length - 1, r = kh) {
		for (; i > n; ) {
			if (i - n > 600) {
				const s = i - n + 1,
					o = e - n + 1,
					a = Math.log(s),
					l = 0.5 * Math.exp((2 * a) / 3),
					h = 0.5 * Math.sqrt((a * l * (s - l)) / s) * (o - s / 2 < 0 ? -1 : 1);
				Mh(t, e, Math.max(n, Math.floor(e - (o * l) / s + h)), Math.min(i, Math.floor(e + ((s - o) * l) / s + h)), r);
			}
			const s = t[e];
			let o = n,
				a = i;
			for (Ih(t, n, e), r(t[i], s) > 0 && Ih(t, n, i); o < a; ) {
				for (Ih(t, o, a), o++, a--; r(t[o], s) < 0; ) o++;
				for (; r(t[a], s) > 0; ) a--;
			}
			0 === r(t[n], s) ? Ih(t, n, a) : (a++, Ih(t, a, i)), a <= e && (n = a + 1), e <= a && (i = a - 1);
		}
	}
	function Ih(t, e, n) {
		const i = t[e];
		(t[e] = t[n]), (t[n] = i);
	}
	function kh(t, e) {
		return t < e ? -1 : t > e ? 1 : 0;
	}
	let Lh = class {
		constructor(t = 9) {
			(this._maxEntries = Math.max(4, t)), (this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries))), this.clear();
		}
		all() {
			return this._all(this.data, []);
		}
		search(t) {
			let e = this.data;
			const n = [];
			if (!Vh(t, e)) return n;
			const i = this.toBBox,
				r = [];
			for (; e; ) {
				for (let s = 0; s < e.children.length; s++) {
					const o = e.children[s],
						a = e.leaf ? i(o) : o;
					Vh(t, a) && (e.leaf ? n.push(o) : Bh(t, a) ? this._all(o, n) : r.push(o));
				}
				e = r.pop();
			}
			return n;
		}
		collides(t) {
			let e = this.data;
			if (!Vh(t, e)) return !1;
			const n = [];
			for (; e; ) {
				for (let i = 0; i < e.children.length; i++) {
					const r = e.children[i],
						s = e.leaf ? this.toBBox(r) : r;
					if (Vh(t, s)) {
						if (e.leaf || Bh(t, s)) return !0;
						n.push(r);
					}
				}
				e = n.pop();
			}
			return !1;
		}
		load(t) {
			if (!t || !t.length) return this;
			if (t.length < this._minEntries) {
				for (let e = 0; e < t.length; e++) this.insert(t[e]);
				return this;
			}
			let e = this._build(t.slice(), 0, t.length - 1, 0);
			if (this.data.children.length)
				if (this.data.height === e.height) this._splitRoot(this.data, e);
				else {
					if (this.data.height < e.height) {
						const t = this.data;
						(this.data = e), (e = t);
					}
					this._insert(e, this.data.height - e.height - 1, !0);
				}
			else this.data = e;
			return this;
		}
		insert(t) {
			return t && this._insert(t, this.data.height - 1), this;
		}
		clear() {
			return (this.data = Wh([])), this;
		}
		remove(t, e) {
			if (!t) return this;
			let n = this.data;
			const i = this.toBBox(t),
				r = [],
				s = [];
			let o, a, l;
			for (; n || r.length; ) {
				if ((n || ((n = r.pop()), (a = r[r.length - 1]), (o = s.pop()), (l = !0)), n.leaf)) {
					const i = Ah(t, n.children, e);
					if (-1 !== i) return n.children.splice(i, 1), r.push(n), this._condense(r), this;
				}
				l || n.leaf || !Bh(n, i) ? (a ? (o++, (n = a.children[o]), (l = !1)) : (n = null)) : (r.push(n), s.push(o), (o = 0), (a = n), (n = n.children[0]));
			}
			return this;
		}
		toBBox(t) {
			return t;
		}
		compareMinX(t, e) {
			return t.minX - e.minX;
		}
		compareMinY(t, e) {
			return t.minY - e.minY;
		}
		toJSON() {
			return this.data;
		}
		fromJSON(t) {
			return (this.data = t), this;
		}
		_all(t, e) {
			const n = [];
			for (; t; ) t.leaf ? e.push(...t.children) : n.push(...t.children), (t = n.pop());
			return e;
		}
		_build(t, e, n, i) {
			const r = n - e + 1;
			let s,
				o = this._maxEntries;
			if (r <= o) return (s = Wh(t.slice(e, n + 1))), Dh(s, this.toBBox), s;
			i || ((i = Math.ceil(Math.log(r) / Math.log(o))), (o = Math.ceil(r / Math.pow(o, i - 1)))), (s = Wh([])), (s.leaf = !1), (s.height = i);
			const a = Math.ceil(r / o),
				l = a * Math.ceil(Math.sqrt(o));
			Xh(t, e, n, l, this.compareMinX);
			for (let r = e; r <= n; r += l) {
				const e = Math.min(r + l - 1, n);
				Xh(t, r, e, a, this.compareMinY);
				for (let n = r; n <= e; n += a) {
					const r = Math.min(n + a - 1, e);
					s.children.push(this._build(t, n, r, i - 1));
				}
			}
			return Dh(s, this.toBBox), s;
		}
		_chooseSubtree(t, e, n, i) {
			for (; i.push(e), !e.leaf && i.length - 1 !== n; ) {
				let n,
					i = 1 / 0,
					o = 1 / 0;
				for (let a = 0; a < e.children.length; a++) {
					const l = e.children[a],
						h = Nh(l),
						c = ((r = t), (s = l), (Math.max(s.maxX, r.maxX) - Math.min(s.minX, r.minX)) * (Math.max(s.maxY, r.maxY) - Math.min(s.minY, r.minY)) - h);
					c < o ? ((o = c), (i = h < i ? h : i), (n = l)) : c === o && h < i && ((i = h), (n = l));
				}
				e = n || e.children[0];
			}
			var r, s;
			return e;
		}
		_insert(t, e, n) {
			const i = n ? t : this.toBBox(t),
				r = [],
				s = this._chooseSubtree(i, this.data, e, r);
			for (s.children.push(t), zh(s, i); e >= 0 && r[e].children.length > this._maxEntries; ) this._split(r, e), e--;
			this._adjustParentBBoxes(i, r, e);
		}
		_split(t, e) {
			const n = t[e],
				i = n.children.length,
				r = this._minEntries;
			this._chooseSplitAxis(n, r, i);
			const s = this._chooseSplitIndex(n, r, i),
				o = Wh(n.children.splice(s, n.children.length - s));
			(o.height = n.height), (o.leaf = n.leaf), Dh(n, this.toBBox), Dh(o, this.toBBox), e ? t[e - 1].children.push(o) : this._splitRoot(n, o);
		}
		_splitRoot(t, e) {
			(this.data = Wh([t, e])), (this.data.height = t.height + 1), (this.data.leaf = !1), Dh(this.data, this.toBBox);
		}
		_chooseSplitIndex(t, e, n) {
			let i,
				r = 1 / 0,
				s = 1 / 0;
			for (let o = e; o <= n - e; o++) {
				const e = Oh(t, 0, o, this.toBBox),
					a = Oh(t, o, n, this.toBBox),
					l = $h(e, a),
					h = Nh(e) + Nh(a);
				l < r ? ((r = l), (i = o), (s = h < s ? h : s)) : l === r && h < s && ((s = h), (i = o));
			}
			return i || n - e;
		}
		_chooseSplitAxis(t, e, n) {
			const i = t.leaf ? this.compareMinX : Gh,
				r = t.leaf ? this.compareMinY : jh;
			this._allDistMargin(t, e, n, i) < this._allDistMargin(t, e, n, r) && t.children.sort(i);
		}
		_allDistMargin(t, e, n, i) {
			t.children.sort(i);
			const r = this.toBBox,
				s = Oh(t, 0, e, r),
				o = Oh(t, n - e, n, r);
			let a = Uh(s) + Uh(o);
			for (let i = e; i < n - e; i++) {
				const e = t.children[i];
				zh(s, t.leaf ? r(e) : e), (a += Uh(s));
			}
			for (let i = n - e - 1; i >= e; i--) {
				const e = t.children[i];
				zh(o, t.leaf ? r(e) : e), (a += Uh(o));
			}
			return a;
		}
		_adjustParentBBoxes(t, e, n) {
			for (let i = n; i >= 0; i--) zh(e[i], t);
		}
		_condense(t) {
			for (let e, n = t.length - 1; n >= 0; n--) 0 === t[n].children.length ? (n > 0 ? ((e = t[n - 1].children), e.splice(e.indexOf(t[n]), 1)) : this.clear()) : Dh(t[n], this.toBBox);
		}
	};
	function Ah(t, e, n) {
		if (!n) return e.indexOf(t);
		for (let i = 0; i < e.length; i++) if (n(t, e[i])) return i;
		return -1;
	}
	function Dh(t, e) {
		Oh(t, 0, t.children.length, e, t);
	}
	function Oh(t, e, n, i, r) {
		r || (r = Wh(null)), (r.minX = 1 / 0), (r.minY = 1 / 0), (r.maxX = -1 / 0), (r.maxY = -1 / 0);
		for (let s = e; s < n; s++) {
			const e = t.children[s];
			zh(r, t.leaf ? i(e) : e);
		}
		return r;
	}
	function zh(t, e) {
		return (t.minX = Math.min(t.minX, e.minX)), (t.minY = Math.min(t.minY, e.minY)), (t.maxX = Math.max(t.maxX, e.maxX)), (t.maxY = Math.max(t.maxY, e.maxY)), t;
	}
	function Gh(t, e) {
		return t.minX - e.minX;
	}
	function jh(t, e) {
		return t.minY - e.minY;
	}
	function Nh(t) {
		return (t.maxX - t.minX) * (t.maxY - t.minY);
	}
	function Uh(t) {
		return t.maxX - t.minX + (t.maxY - t.minY);
	}
	function $h(t, e) {
		const n = Math.max(t.minX, e.minX),
			i = Math.max(t.minY, e.minY),
			r = Math.min(t.maxX, e.maxX),
			s = Math.min(t.maxY, e.maxY);
		return Math.max(0, r - n) * Math.max(0, s - i);
	}
	function Bh(t, e) {
		return t.minX <= e.minX && t.minY <= e.minY && e.maxX <= t.maxX && e.maxY <= t.maxY;
	}
	function Vh(t, e) {
		return e.minX <= t.maxX && e.minY <= t.maxY && e.maxX >= t.minX && e.maxY >= t.minY;
	}
	function Wh(t) {
		return { children: t, height: 1, leaf: !0, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 };
	}
	function Xh(t, e, n, i, r) {
		const s = [e, n];
		for (; s.length; ) {
			if ((n = s.pop()) - (e = s.pop()) <= i) continue;
			const o = e + Math.ceil((n - e) / i / 2) * i;
			Mh(t, o, e, n, r), s.push(e, o, o, n);
		}
	}
	class qh {
		constructor(t) {
			(this.rbush_ = new Lh(t)), (this.items_ = {});
		}
		insert(t, e) {
			const n = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3], value: e };
			this.rbush_.insert(n), (this.items_[wi(e)] = n);
		}
		load(t, e) {
			const n = new Array(e.length);
			for (let i = 0, r = e.length; i < r; i++) {
				const r = t[i],
					s = e[i],
					o = { minX: r[0], minY: r[1], maxX: r[2], maxY: r[3], value: s };
				(n[i] = o), (this.items_[wi(s)] = o);
			}
			this.rbush_.load(n);
		}
		remove(t) {
			const e = wi(t),
				n = this.items_[e];
			return delete this.items_[e], null !== this.rbush_.remove(n);
		}
		update(t, e) {
			const n = this.items_[wi(e)];
			Wi([n.minX, n.minY, n.maxX, n.maxY], t) || (this.remove(e), this.insert(t, e));
		}
		getAll() {
			return this.rbush_.all().map(function (t) {
				return t.value;
			});
		}
		getInExtent(t) {
			const e = { minX: t[0], minY: t[1], maxX: t[2], maxY: t[3] };
			return this.rbush_.search(e).map(function (t) {
				return t.value;
			});
		}
		forEach(t) {
			return this.forEach_(this.getAll(), t);
		}
		forEachInExtent(t, e) {
			return this.forEach_(this.getInExtent(t), e);
		}
		forEach_(t, e) {
			let n;
			for (let i = 0, r = t.length; i < r; i++) if (((n = e(t[i])), n)) return n;
			return n;
		}
		isEmpty() {
			return ci(this.items_);
		}
		clear() {
			this.rbush_.clear(), (this.items_ = {});
		}
		getExtent(t) {
			const e = this.rbush_.toJSON();
			return Ui(e.minX, e.minY, e.maxX, e.maxY, t);
		}
		concat(t) {
			this.rbush_.load(t.rbush_.all());
			for (const e in t.items_) this.items_[e] = t.items_[e];
		}
	}
	class Zh extends Si {
		constructor(t) {
			super(), (this.projection = ao(t.projection)), (this.attributions_ = Kh(t.attributions)), (this.attributionsCollapsible_ = t.attributionsCollapsible ?? !0), (this.loading = !1), (this.state_ = void 0 !== t.state ? t.state : 'ready'), (this.wrapX_ = void 0 !== t.wrapX && t.wrapX), (this.interpolate_ = !!t.interpolate), (this.viewResolver = null), (this.viewRejector = null);
			const e = this;
			this.viewPromise_ = new Promise(function (t, n) {
				(e.viewResolver = t), (e.viewRejector = n);
			});
		}
		getAttributions() {
			return this.attributions_;
		}
		getAttributionsCollapsible() {
			return this.attributionsCollapsible_;
		}
		getProjection() {
			return this.projection;
		}
		getResolutions(t) {
			return null;
		}
		getView() {
			return this.viewPromise_;
		}
		getState() {
			return this.state_;
		}
		getWrapX() {
			return this.wrapX_;
		}
		getInterpolate() {
			return this.interpolate_;
		}
		refresh() {
			this.changed();
		}
		setAttributions(t) {
			(this.attributions_ = Kh(t)), this.changed();
		}
		setState(t) {
			(this.state_ = t), this.changed();
		}
	}
	function Kh(t) {
		return t ? ('function' == typeof t ? t : (Array.isArray(t) || (t = [t]), (e) => t)) : null;
	}
	var Yh = 'addfeature',
		Hh = 'changefeature',
		Jh = 'clear',
		Qh = 'removefeature',
		tc = 'featuresloadstart',
		ec = 'featuresloadend',
		nc = 'featuresloaderror';
	class ic extends ui {
		constructor(t, e, n) {
			super(t), (this.feature = e), (this.features = n);
		}
	}
	class rc extends Zh {
		constructor(t) {
			super({ attributions: (t = t || {}).attributions, interpolate: !0, projection: void 0, state: 'ready', wrapX: void 0 === t.wrapX || t.wrapX }), this.on, this.once, this.un, (this.loader_ = Wn), (this.format_ = t.format || null), (this.overlaps_ = void 0 === t.overlaps || t.overlaps), (this.url_ = t.url), void 0 !== t.loader ? (this.loader_ = t.loader) : void 0 !== this.url_ && (Ci(this.format_, '`format` must be set when `url` is set'), (this.loader_ = Ph(this.url_, this.format_))), (this.strategy_ = void 0 !== t.strategy ? t.strategy : Rh);
			const e = void 0 === t.useSpatialIndex || t.useSpatialIndex;
			let n, i;
			(this.featuresRtree_ = e ? new qh() : null), (this.loadedExtentsRtree_ = new qh()), (this.loadingExtentsCount_ = 0), (this.nullGeometryFeatures_ = {}), (this.idIndex_ = {}), (this.uidIndex_ = {}), (this.featureChangeKeys_ = {}), (this.featuresCollection_ = null), Array.isArray(t.features) ? (i = t.features) : t.features && ((n = t.features), (i = n.getArray())), e || void 0 !== n || (n = new dh(i)), void 0 !== i && this.addFeaturesInternal(i), void 0 !== n && this.bindFeaturesCollection_(n);
		}
		addFeature(t) {
			this.addFeatureInternal(t), this.changed();
		}
		addFeatureInternal(t) {
			const e = wi(t);
			if (!this.addToIndex_(e, t)) return void (this.featuresCollection_ && this.featuresCollection_.remove(t));
			this.setupChangeEvents_(e, t);
			const n = t.getGeometry();
			if (n) {
				const e = n.getExtent();
				this.featuresRtree_ && this.featuresRtree_.insert(e, t);
			} else this.nullGeometryFeatures_[e] = t;
			this.dispatchEvent(new ic(Yh, t));
		}
		setupChangeEvents_(t, e) {
			e instanceof Ea || (this.featureChangeKeys_[t] = [gi(e, Kn, this.handleFeatureChange_, this), gi(e, Zn, this.handleFeatureChange_, this)]);
		}
		addToIndex_(t, e) {
			let n = !0;
			if (void 0 !== e.getId()) {
				const t = String(e.getId());
				if (t in this.idIndex_)
					if (e instanceof Ea) {
						const i = this.idIndex_[t];
						i instanceof Ea ? (Array.isArray(i) ? i.push(e) : (this.idIndex_[t] = [i, e])) : (n = !1);
					} else n = !1;
				else this.idIndex_[t] = e;
			}
			return n && (Ci(!(t in this.uidIndex_), 'The passed `feature` was already added to the source'), (this.uidIndex_[t] = e)), n;
		}
		addFeatures(t) {
			this.addFeaturesInternal(t), this.changed();
		}
		addFeaturesInternal(t) {
			const e = [],
				n = [],
				i = [];
			for (let e = 0, i = t.length; e < i; e++) {
				const i = t[e],
					r = wi(i);
				this.addToIndex_(r, i) && n.push(i);
			}
			for (let t = 0, r = n.length; t < r; t++) {
				const r = n[t],
					s = wi(r);
				this.setupChangeEvents_(s, r);
				const o = r.getGeometry();
				if (o) {
					const t = o.getExtent();
					e.push(t), i.push(r);
				} else this.nullGeometryFeatures_[s] = r;
			}
			if ((this.featuresRtree_ && this.featuresRtree_.load(e, i), this.hasListener(Yh))) for (let t = 0, e = n.length; t < e; t++) this.dispatchEvent(new ic(Yh, n[t]));
		}
		bindFeaturesCollection_(t) {
			let e = !1;
			this.addEventListener(Yh, function (n) {
				e || ((e = !0), t.push(n.feature), (e = !1));
			}),
				this.addEventListener(Qh, function (n) {
					e || ((e = !0), t.remove(n.feature), (e = !1));
				}),
				t.addEventListener(lh, (t) => {
					e || ((e = !0), this.addFeature(t.element), (e = !1));
				}),
				t.addEventListener(hh, (t) => {
					e || ((e = !0), this.removeFeature(t.element), (e = !1));
				}),
				(this.featuresCollection_ = t);
		}
		clear(t) {
			if (t) {
				for (const t in this.featureChangeKeys_) {
					this.featureChangeKeys_[t].forEach(pi);
				}
				this.featuresCollection_ || ((this.featureChangeKeys_ = {}), (this.idIndex_ = {}), (this.uidIndex_ = {}));
			} else if (this.featuresRtree_) {
				this.featuresRtree_.forEach((t) => {
					this.removeFeatureInternal(t);
				});
				for (const t in this.nullGeometryFeatures_) this.removeFeatureInternal(this.nullGeometryFeatures_[t]);
			}
			this.featuresCollection_ && this.featuresCollection_.clear(), this.featuresRtree_ && this.featuresRtree_.clear(), (this.nullGeometryFeatures_ = {});
			const e = new ic(Jh);
			this.dispatchEvent(e), this.changed();
		}
		forEachFeature(t) {
			if (this.featuresRtree_) return this.featuresRtree_.forEach(t);
			this.featuresCollection_ && this.featuresCollection_.forEach(t);
		}
		forEachFeatureAtCoordinateDirect(t, e) {
			const n = [t[0], t[1], t[0], t[1]];
			return this.forEachFeatureInExtent(n, function (n) {
				const i = n.getGeometry();
				if (i instanceof Ea || i.intersectsCoordinate(t)) return e(n);
			});
		}
		forEachFeatureInExtent(t, e) {
			if (this.featuresRtree_) return this.featuresRtree_.forEachInExtent(t, e);
			this.featuresCollection_ && this.featuresCollection_.forEach(e);
		}
		forEachFeatureIntersectingExtent(t, e) {
			return this.forEachFeatureInExtent(t, function (n) {
				const i = n.getGeometry();
				if (i instanceof Ea || i.intersectsExtent(t)) {
					const t = e(n);
					if (t) return t;
				}
			});
		}
		getFeaturesCollection() {
			return this.featuresCollection_;
		}
		getFeatures() {
			let t;
			return this.featuresCollection_ ? (t = this.featuresCollection_.getArray().slice(0)) : this.featuresRtree_ && ((t = this.featuresRtree_.getAll()), ci(this.nullGeometryFeatures_) || Un(t, Object.values(this.nullGeometryFeatures_))), t;
		}
		getFeaturesAtCoordinate(t) {
			const e = [];
			return (
				this.forEachFeatureAtCoordinateDirect(t, function (t) {
					e.push(t);
				}),
				e
			);
		}
		getFeaturesInExtent(t, e) {
			if (this.featuresRtree_) {
				if (!(e && e.canWrapX() && this.getWrapX())) return this.featuresRtree_.getInExtent(t);
				const n = gr(t, e);
				return [].concat(...n.map((t) => this.featuresRtree_.getInExtent(t)));
			}
			return this.featuresCollection_ ? this.featuresCollection_.getArray().slice(0) : [];
		}
		getClosestFeatureToCoordinate(t, e) {
			const n = t[0],
				i = t[1];
			let r = null;
			const s = [NaN, NaN];
			let o = 1 / 0;
			const a = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
			return (
				(e = e || Bn),
				this.featuresRtree_.forEachInExtent(a, function (t) {
					if (e(t)) {
						const e = t.getGeometry(),
							l = o;
						if (((o = e instanceof Ea ? 0 : e.closestPointXY(n, i, s, o)), o < l)) {
							r = t;
							const e = Math.sqrt(o);
							(a[0] = n - e), (a[1] = i - e), (a[2] = n + e), (a[3] = i + e);
						}
					}
				}),
				r
			);
		}
		getExtent(t) {
			return this.featuresRtree_.getExtent(t);
		}
		getFeatureById(t) {
			const e = this.idIndex_[t.toString()];
			return void 0 !== e ? e : null;
		}
		getFeatureByUid(t) {
			const e = this.uidIndex_[t];
			return void 0 !== e ? e : null;
		}
		getFormat() {
			return this.format_;
		}
		getOverlaps() {
			return this.overlaps_;
		}
		getUrl() {
			return this.url_;
		}
		handleFeatureChange_(t) {
			const e = t.target,
				n = wi(e),
				i = e.getGeometry();
			if (i) {
				const t = i.getExtent();
				n in this.nullGeometryFeatures_ ? (delete this.nullGeometryFeatures_[n], this.featuresRtree_ && this.featuresRtree_.insert(t, e)) : this.featuresRtree_ && this.featuresRtree_.update(t, e);
			} else n in this.nullGeometryFeatures_ || (this.featuresRtree_ && this.featuresRtree_.remove(e), (this.nullGeometryFeatures_[n] = e));
			const r = e.getId();
			if (void 0 !== r) {
				const t = r.toString();
				this.idIndex_[t] !== e && (this.removeFromIdIndex_(e), (this.idIndex_[t] = e));
			} else this.removeFromIdIndex_(e), (this.uidIndex_[n] = e);
			this.changed(), this.dispatchEvent(new ic(Hh, e));
		}
		hasFeature(t) {
			const e = t.getId();
			return void 0 !== e ? e in this.idIndex_ : wi(t) in this.uidIndex_;
		}
		isEmpty() {
			return this.featuresRtree_ ? this.featuresRtree_.isEmpty() && ci(this.nullGeometryFeatures_) : !this.featuresCollection_ || 0 === this.featuresCollection_.getLength();
		}
		loadFeatures(t, e, n) {
			const i = this.loadedExtentsRtree_,
				r = this.strategy_(t, e, n);
			for (let t = 0, s = r.length; t < s; ++t) {
				const s = r[t];
				i.forEachInExtent(s, function (t) {
					return zi(t.extent, s);
				}) ||
					(++this.loadingExtentsCount_,
					this.dispatchEvent(new ic(tc)),
					this.loader_.call(
						this,
						s,
						e,
						n,
						(t) => {
							--this.loadingExtentsCount_, this.dispatchEvent(new ic(ec, void 0, t));
						},
						() => {
							--this.loadingExtentsCount_, this.dispatchEvent(new ic(nc));
						}
					),
					i.insert(s, { extent: s.slice() }));
			}
			this.loading = !(this.loader_.length < 4) && this.loadingExtentsCount_ > 0;
		}
		refresh() {
			this.clear(!0), this.loadedExtentsRtree_.clear(), super.refresh();
		}
		removeLoadedExtent(t) {
			const e = this.loadedExtentsRtree_,
				n = e.forEachInExtent(t, function (e) {
					if (Wi(e.extent, t)) return e;
				});
			n && e.remove(n);
		}
		removeFeatures(t) {
			let e = !1;
			for (let n = 0, i = t.length; n < i; ++n) e = this.removeFeatureInternal(t[n]) || e;
			e && this.changed();
		}
		removeFeature(t) {
			if (!t) return;
			this.removeFeatureInternal(t) && this.changed();
		}
		removeFeatureInternal(t) {
			const e = wi(t);
			if (!(e in this.uidIndex_)) return !1;
			e in this.nullGeometryFeatures_ ? delete this.nullGeometryFeatures_[e] : this.featuresRtree_ && this.featuresRtree_.remove(t);
			const n = this.featureChangeKeys_[e];
			n?.forEach(pi), delete this.featureChangeKeys_[e];
			const i = t.getId();
			if (void 0 !== i) {
				const e = i.toString(),
					n = this.idIndex_[e];
				n === t ? delete this.idIndex_[e] : Array.isArray(n) && (n.splice(n.indexOf(t), 1), 1 === n.length && (this.idIndex_[e] = n[0]));
			}
			return delete this.uidIndex_[e], this.hasListener(Qh) && this.dispatchEvent(new ic(Qh, t)), !0;
		}
		removeFromIdIndex_(t) {
			for (const e in this.idIndex_)
				if (this.idIndex_[e] === t) {
					delete this.idIndex_[e];
					break;
				}
		}
		setLoader(t) {
			this.loader_ = t;
		}
		setUrl(t) {
			Ci(this.format_, '`format` must be set when `url` is set'), (this.url_ = t), this.setLoader(Ph(t, this.format_));
		}
		setOverlaps(t) {
			(this.overlaps_ = t), this.changed();
		}
	}
	var sc = 0,
		oc = 1;
	const ac = 0,
		lc = 1,
		hc = 2,
		cc = 3,
		uc = 4,
		dc = 5,
		gc = 6,
		fc = 7,
		pc = 8,
		mc = 9,
		_c = 10,
		yc = 11,
		xc = 12,
		vc = [pc],
		wc = [xc],
		bc = [lc],
		Sc = [cc];
	class Cc extends yh {
		constructor(t, e, n, i) {
			super(), (this.tolerance = t), (this.maxExtent = e), (this.pixelRatio = i), (this.maxLineWidth = 0), (this.resolution = n), (this.beginGeometryInstruction1_ = null), (this.beginGeometryInstruction2_ = null), (this.bufferedMaxExtent_ = null), (this.instructions = []), (this.coordinates = []), (this.tmpCoordinate_ = []), (this.hitDetectionInstructions = []), (this.state = {});
		}
		applyPixelRatio(t) {
			const e = this.pixelRatio;
			return 1 == e
				? t
				: t.map(function (t) {
						return t * e;
				  });
		}
		appendFlatPointCoordinates(t, e) {
			const n = this.getBufferedMaxExtent(),
				i = this.tmpCoordinate_,
				r = this.coordinates;
			let s = r.length;
			for (let o = 0, a = t.length; o < a; o += e) (i[0] = t[o]), (i[1] = t[o + 1]), Oi(n, i) && ((r[s++] = i[0]), (r[s++] = i[1]));
			return s;
		}
		appendFlatLineCoordinates(t, e, n, i, r, s) {
			const o = this.coordinates;
			let a = o.length;
			const l = this.getBufferedMaxExtent();
			s && (e += i);
			let h = t[e],
				c = t[e + 1];
			const u = this.tmpCoordinate_;
			let d,
				g,
				f,
				p = !0;
			for (d = e + i; d < n; d += i) (u[0] = t[d]), (u[1] = t[d + 1]), (f = ji(l, u)), f !== g ? (p && ((o[a++] = h), (o[a++] = c), (p = !1)), (o[a++] = u[0]), (o[a++] = u[1])) : f === Pi ? ((o[a++] = u[0]), (o[a++] = u[1]), (p = !1)) : (p = !0), (h = u[0]), (c = u[1]), (g = f);
			return ((r && p) || d === e + i) && ((o[a++] = h), (o[a++] = c)), a;
		}
		drawCustomCoordinates_(t, e, n, i, r) {
			for (let s = 0, o = n.length; s < o; ++s) {
				const o = n[s],
					a = this.appendFlatLineCoordinates(t, e, o, i, !1, !1);
				r.push(a), (e = o);
			}
			return e;
		}
		drawCustom(t, e, n, i, r) {
			this.beginGeometry(t, e, r);
			const s = t.getType(),
				o = t.getStride(),
				a = this.coordinates.length;
			let l, h, c, u, d;
			switch (s) {
				case 'MultiPolygon':
					(l = t.getOrientedFlatCoordinates()), (u = []);
					const e = t.getEndss();
					d = 0;
					for (let t = 0, n = e.length; t < n; ++t) {
						const n = [];
						(d = this.drawCustomCoordinates_(l, d, e[t], o, n)), u.push(n);
					}
					this.instructions.push([uc, a, u, t, n, ha, r]), this.hitDetectionInstructions.push([uc, a, u, t, i || n, ha, r]);
					break;
				case 'Polygon':
				case 'MultiLineString':
					(c = []), (l = 'Polygon' == s ? t.getOrientedFlatCoordinates() : t.getFlatCoordinates()), (d = this.drawCustomCoordinates_(l, 0, t.getEnds(), o, c)), this.instructions.push([uc, a, c, t, n, la, r]), this.hitDetectionInstructions.push([uc, a, c, t, i || n, la, r]);
					break;
				case 'LineString':
				case 'Circle':
					(l = t.getFlatCoordinates()), (h = this.appendFlatLineCoordinates(l, 0, l.length, o, !1, !1)), this.instructions.push([uc, a, h, t, n, aa, r]), this.hitDetectionInstructions.push([uc, a, h, t, i || n, aa, r]);
					break;
				case 'MultiPoint':
					(l = t.getFlatCoordinates()), (h = this.appendFlatPointCoordinates(l, o)), h > a && (this.instructions.push([uc, a, h, t, n, aa, r]), this.hitDetectionInstructions.push([uc, a, h, t, i || n, aa, r]));
					break;
				case 'Point':
					(l = t.getFlatCoordinates()), this.coordinates.push(l[0], l[1]), (h = this.coordinates.length), this.instructions.push([uc, a, h, t, n, void 0, r]), this.hitDetectionInstructions.push([uc, a, h, t, i || n, void 0, r]);
			}
			this.endGeometry(e);
		}
		beginGeometry(t, e, n) {
			(this.beginGeometryInstruction1_ = [ac, e, 0, t, n]), this.instructions.push(this.beginGeometryInstruction1_), (this.beginGeometryInstruction2_ = [ac, e, 0, t, n]), this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
		}
		finish() {
			return { instructions: this.instructions, hitDetectionInstructions: this.hitDetectionInstructions, coordinates: this.coordinates };
		}
		reverseHitDetectionInstructions() {
			const t = this.hitDetectionInstructions;
			let e;
			t.reverse();
			const n = t.length;
			let i,
				r,
				s = -1;
			for (e = 0; e < n; ++e) (i = t[e]), (r = i[0]), r == fc ? (s = e) : r == ac && ((i[2] = e), Nn(this.hitDetectionInstructions, s, e), (s = -1));
		}
		fillStyleToState(t, e = {}) {
			if (t) {
				const n = t.getColor();
				(e.fillPatternScale = n && 'object' == typeof n && 'src' in n ? this.pixelRatio : 1), (e.fillStyle = vl(n || Fl));
			} else e.fillStyle = void 0;
			return e;
		}
		strokeStyleToState(t, e = {}) {
			if (t) {
				const n = t.getColor();
				e.strokeStyle = vl(n || Ll);
				const i = t.getLineCap();
				e.lineCap = void 0 !== i ? i : Ml;
				const r = t.getLineDash();
				e.lineDash = r ? r.slice() : Il;
				const s = t.getLineDashOffset();
				e.lineDashOffset = s || 0;
				const o = t.getLineJoin();
				e.lineJoin = void 0 !== o ? o : kl;
				const a = t.getWidth();
				e.lineWidth = void 0 !== a ? a : 1;
				const l = t.getMiterLimit();
				(e.miterLimit = void 0 !== l ? l : 10), e.lineWidth > this.maxLineWidth && ((this.maxLineWidth = e.lineWidth), (this.bufferedMaxExtent_ = null));
			} else (e.strokeStyle = void 0), (e.lineCap = void 0), (e.lineDash = null), (e.lineDashOffset = void 0), (e.lineJoin = void 0), (e.lineWidth = void 0), (e.miterLimit = void 0);
			return e;
		}
		setFillStrokeStyle(t, e) {
			const n = this.state;
			this.fillStyleToState(t, n), this.strokeStyleToState(e, n);
		}
		createFill(t) {
			const e = t.fillStyle,
				n = [_c, e];
			return 'string' != typeof e && n.push(t.fillPatternScale), n;
		}
		applyStroke(t) {
			this.instructions.push(this.createStroke(t));
		}
		createStroke(t) {
			return [yc, t.strokeStyle, t.lineWidth * this.pixelRatio, t.lineCap, t.lineJoin, t.miterLimit, t.lineDash ? this.applyPixelRatio(t.lineDash) : null, t.lineDashOffset * this.pixelRatio];
		}
		updateFillStyle(t, e) {
			const n = t.fillStyle;
			('string' == typeof n && t.currentFillStyle == n) || (void 0 !== n && this.instructions.push(e.call(this, t)), (t.currentFillStyle = n));
		}
		updateStrokeStyle(t, e) {
			const n = t.strokeStyle,
				i = t.lineCap,
				r = t.lineDash,
				s = t.lineDashOffset,
				o = t.lineJoin,
				a = t.lineWidth,
				l = t.miterLimit;
			(t.currentStrokeStyle != n || t.currentLineCap != i || (r != t.currentLineDash && !$n(t.currentLineDash, r)) || t.currentLineDashOffset != s || t.currentLineJoin != o || t.currentLineWidth != a || t.currentMiterLimit != l) && (void 0 !== n && e.call(this, t), (t.currentStrokeStyle = n), (t.currentLineCap = i), (t.currentLineDash = r), (t.currentLineDashOffset = s), (t.currentLineJoin = o), (t.currentLineWidth = a), (t.currentMiterLimit = l));
		}
		endGeometry(t) {
			(this.beginGeometryInstruction1_[2] = this.instructions.length), (this.beginGeometryInstruction1_ = null), (this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length), (this.beginGeometryInstruction2_ = null);
			const e = [fc, t];
			this.instructions.push(e), this.hitDetectionInstructions.push(e);
		}
		getBufferedMaxExtent() {
			if (!this.bufferedMaxExtent_ && ((this.bufferedMaxExtent_ = Ai(this.maxExtent)), this.maxLineWidth > 0)) {
				const t = (this.resolution * (this.maxLineWidth + 1)) / 2;
				Li(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_);
			}
			return this.bufferedMaxExtent_;
		}
	}
	class Ec extends Cc {
		constructor(t, e, n, i) {
			super(t, e, n, i);
		}
		drawFlatCoordinatess_(t, e, n, i) {
			const r = this.state,
				s = void 0 !== r.fillStyle,
				o = void 0 !== r.strokeStyle,
				a = n.length;
			this.instructions.push(bc), this.hitDetectionInstructions.push(bc);
			for (let r = 0; r < a; ++r) {
				const s = n[r],
					a = this.coordinates.length,
					l = this.appendFlatLineCoordinates(t, e, s, i, !0, !o),
					h = [mc, a, l];
				this.instructions.push(h), this.hitDetectionInstructions.push(h), o && (this.instructions.push(Sc), this.hitDetectionInstructions.push(Sc)), (e = s);
			}
			return s && (this.instructions.push(vc), this.hitDetectionInstructions.push(vc)), o && (this.instructions.push(wc), this.hitDetectionInstructions.push(wc)), e;
		}
		drawCircle(t, e, n) {
			const i = this.state,
				r = i.fillStyle,
				s = i.strokeStyle;
			if (void 0 === r && void 0 === s) return;
			this.setFillStrokeStyles_(), this.beginGeometry(t, e, n), void 0 !== i.fillStyle && this.hitDetectionInstructions.push([_c, Fl]), void 0 !== i.strokeStyle && this.hitDetectionInstructions.push([yc, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, Il, 0]);
			const o = t.getFlatCoordinates(),
				a = t.getStride(),
				l = this.coordinates.length;
			this.appendFlatLineCoordinates(o, 0, o.length, a, !1, !1);
			const h = [hc, l];
			this.instructions.push(bc, h), this.hitDetectionInstructions.push(bc, h), void 0 !== i.fillStyle && (this.instructions.push(vc), this.hitDetectionInstructions.push(vc)), void 0 !== i.strokeStyle && (this.instructions.push(wc), this.hitDetectionInstructions.push(wc)), this.endGeometry(e);
		}
		drawPolygon(t, e, n) {
			const i = this.state,
				r = i.fillStyle,
				s = i.strokeStyle;
			if (void 0 === r && void 0 === s) return;
			this.setFillStrokeStyles_(), this.beginGeometry(t, e, n), void 0 !== i.fillStyle && this.hitDetectionInstructions.push([_c, Fl]), void 0 !== i.strokeStyle && this.hitDetectionInstructions.push([yc, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, Il, 0]);
			const o = t.getEnds(),
				a = t.getOrientedFlatCoordinates(),
				l = t.getStride();
			this.drawFlatCoordinatess_(a, 0, o, l), this.endGeometry(e);
		}
		drawMultiPolygon(t, e, n) {
			const i = this.state,
				r = i.fillStyle,
				s = i.strokeStyle;
			if (void 0 === r && void 0 === s) return;
			this.setFillStrokeStyles_(), this.beginGeometry(t, e, n), void 0 !== i.fillStyle && this.hitDetectionInstructions.push([_c, Fl]), void 0 !== i.strokeStyle && this.hitDetectionInstructions.push([yc, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, Il, 0]);
			const o = t.getEndss(),
				a = t.getOrientedFlatCoordinates(),
				l = t.getStride();
			let h = 0;
			for (let t = 0, e = o.length; t < e; ++t) h = this.drawFlatCoordinatess_(a, h, o[t], l);
			this.endGeometry(e);
		}
		finish() {
			this.reverseHitDetectionInstructions(), (this.state = null);
			const t = this.tolerance;
			if (0 !== t) {
				const e = this.coordinates;
				for (let n = 0, i = e.length; n < i; ++n) e[n] = Br(e[n], t);
			}
			return super.finish();
		}
		setFillStrokeStyles_() {
			const t = this.state;
			void 0 !== t.fillStyle && this.updateFillStyle(t, this.createFill), void 0 !== t.strokeStyle && this.updateStrokeStyle(t, this.applyStroke);
		}
	}
	function Tc(t, e, n, i, r) {
		const s = [];
		let o = n,
			a = 0,
			l = e.slice(n, 2);
		for (; a < t && o + r < i; ) {
			const [n, i] = l.slice(-2),
				h = e[o + r],
				c = e[o + r + 1],
				u = Math.sqrt((h - n) * (h - n) + (c - i) * (c - i));
			if (((a += u), a >= t)) {
				const e = (t - a + u) / u,
					d = Tr(n, h, e),
					g = Tr(i, c, e);
				l.push(d, g), s.push(l), (l = [d, g]), a == t && (o += r), (a = 0);
			} else if (a < t) l.push(e[o + r], e[o + r + 1]), (o += r);
			else {
				const t = u - a,
					e = Tr(n, h, t / u),
					d = Tr(i, c, t / u);
				l.push(e, d), s.push(l), (l = [e, d]), (a = 0), (o += r);
			}
		}
		return a > 0 && s.push(l), s;
	}
	function Pc(t, e, n, i, r) {
		let s,
			o,
			a,
			l,
			h,
			c,
			u,
			d,
			g,
			f,
			p = n,
			m = n,
			_ = 0,
			y = 0,
			x = n;
		for (o = n; o < i; o += r) {
			const n = e[o],
				i = e[o + 1];
			void 0 !== h && ((g = n - h), (f = i - c), (l = Math.sqrt(g * g + f * f)), void 0 !== u && ((y += a), (s = Math.acos((u * g + d * f) / (a * l))), s > t && (y > _ && ((_ = y), (p = x), (m = o)), (y = 0), (x = o - r))), (a = l), (u = g), (d = f)), (h = n), (c = i);
		}
		return (y += l), y > _ ? [x, o] : [p, m];
	}
	const Rc = { left: 0, center: 0.5, right: 1, top: 0, middle: 0.5, hanging: 0.2, alphabetic: 0.8, ideographic: 0.8, bottom: 1 };
	const Fc = {
		Circle: Ec,
		Default: Cc,
		Image: class extends Cc {
			constructor(t, e, n, i) {
				super(t, e, n, i), (this.hitDetectionImage_ = null), (this.image_ = null), (this.imagePixelRatio_ = void 0), (this.anchorX_ = void 0), (this.anchorY_ = void 0), (this.height_ = void 0), (this.opacity_ = void 0), (this.originX_ = void 0), (this.originY_ = void 0), (this.rotateWithView_ = void 0), (this.rotation_ = void 0), (this.scale_ = void 0), (this.width_ = void 0), (this.declutterMode_ = void 0), (this.declutterImageWithText_ = void 0);
			}
			drawPoint(t, e, n) {
				if (!this.image_ || (this.maxExtent && !Oi(this.maxExtent, t.getFlatCoordinates()))) return;
				this.beginGeometry(t, e, n);
				const i = t.getFlatCoordinates(),
					r = t.getStride(),
					s = this.coordinates.length,
					o = this.appendFlatPointCoordinates(i, r);
				this.instructions.push([gc, s, o, this.image_, this.anchorX_ * this.imagePixelRatio_, this.anchorY_ * this.imagePixelRatio_, Math.ceil(this.height_ * this.imagePixelRatio_), this.opacity_, this.originX_ * this.imagePixelRatio_, this.originY_ * this.imagePixelRatio_, this.rotateWithView_, this.rotation_, [(this.scale_[0] * this.pixelRatio) / this.imagePixelRatio_, (this.scale_[1] * this.pixelRatio) / this.imagePixelRatio_], Math.ceil(this.width_ * this.imagePixelRatio_), this.declutterMode_, this.declutterImageWithText_]),
					this.hitDetectionInstructions.push([gc, s, o, this.hitDetectionImage_, this.anchorX_, this.anchorY_, this.height_, 1, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_, this.width_, this.declutterMode_, this.declutterImageWithText_]),
					this.endGeometry(e);
			}
			drawMultiPoint(t, e, n) {
				if (!this.image_) return;
				this.beginGeometry(t, e, n);
				const i = t.getFlatCoordinates(),
					r = [];
				for (let e = 0, n = i.length; e < n; e += t.getStride()) (this.maxExtent && !Oi(this.maxExtent, i.slice(e, e + 2))) || r.push(i[e], i[e + 1]);
				const s = this.coordinates.length,
					o = this.appendFlatPointCoordinates(r, 2);
				this.instructions.push([gc, s, o, this.image_, this.anchorX_ * this.imagePixelRatio_, this.anchorY_ * this.imagePixelRatio_, Math.ceil(this.height_ * this.imagePixelRatio_), this.opacity_, this.originX_ * this.imagePixelRatio_, this.originY_ * this.imagePixelRatio_, this.rotateWithView_, this.rotation_, [(this.scale_[0] * this.pixelRatio) / this.imagePixelRatio_, (this.scale_[1] * this.pixelRatio) / this.imagePixelRatio_], Math.ceil(this.width_ * this.imagePixelRatio_), this.declutterMode_, this.declutterImageWithText_]),
					this.hitDetectionInstructions.push([gc, s, o, this.hitDetectionImage_, this.anchorX_, this.anchorY_, this.height_, 1, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_, this.width_, this.declutterMode_, this.declutterImageWithText_]),
					this.endGeometry(e);
			}
			finish() {
				return this.reverseHitDetectionInstructions(), (this.anchorX_ = void 0), (this.anchorY_ = void 0), (this.hitDetectionImage_ = null), (this.image_ = null), (this.imagePixelRatio_ = void 0), (this.height_ = void 0), (this.scale_ = void 0), (this.opacity_ = void 0), (this.originX_ = void 0), (this.originY_ = void 0), (this.rotateWithView_ = void 0), (this.rotation_ = void 0), (this.width_ = void 0), super.finish();
			}
			setImageStyle(t, e) {
				const n = t.getAnchor(),
					i = t.getSize(),
					r = t.getOrigin();
				(this.imagePixelRatio_ = t.getPixelRatio(this.pixelRatio)), (this.anchorX_ = n[0]), (this.anchorY_ = n[1]), (this.hitDetectionImage_ = t.getHitDetectionImage()), (this.image_ = t.getImage(this.pixelRatio)), (this.height_ = i[1]), (this.opacity_ = t.getOpacity()), (this.originX_ = r[0]), (this.originY_ = r[1]), (this.rotateWithView_ = t.getRotateWithView()), (this.rotation_ = t.getRotation()), (this.scale_ = t.getScaleArray()), (this.width_ = i[0]), (this.declutterMode_ = t.getDeclutterMode()), (this.declutterImageWithText_ = e);
			}
		},
		LineString: class extends Cc {
			constructor(t, e, n, i) {
				super(t, e, n, i);
			}
			drawFlatCoordinates_(t, e, n, i) {
				const r = this.coordinates.length,
					s = this.appendFlatLineCoordinates(t, e, n, i, !1, !1),
					o = [mc, r, s];
				return this.instructions.push(o), this.hitDetectionInstructions.push(o), n;
			}
			drawLineString(t, e, n) {
				const i = this.state,
					r = i.strokeStyle,
					s = i.lineWidth;
				if (void 0 === r || void 0 === s) return;
				this.updateStrokeStyle(i, this.applyStroke), this.beginGeometry(t, e, n), this.hitDetectionInstructions.push([yc, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, Il, 0], bc);
				const o = t.getFlatCoordinates(),
					a = t.getStride();
				this.drawFlatCoordinates_(o, 0, o.length, a), this.hitDetectionInstructions.push(wc), this.endGeometry(e);
			}
			drawMultiLineString(t, e, n) {
				const i = this.state,
					r = i.strokeStyle,
					s = i.lineWidth;
				if (void 0 === r || void 0 === s) return;
				this.updateStrokeStyle(i, this.applyStroke), this.beginGeometry(t, e, n), this.hitDetectionInstructions.push([yc, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, Il, 0], bc);
				const o = t.getEnds(),
					a = t.getFlatCoordinates(),
					l = t.getStride();
				let h = 0;
				for (let t = 0, e = o.length; t < e; ++t) h = this.drawFlatCoordinates_(a, h, o[t], l);
				this.hitDetectionInstructions.push(wc), this.endGeometry(e);
			}
			finish() {
				const t = this.state;
				return null != t.lastStroke && t.lastStroke != this.coordinates.length && this.instructions.push(wc), this.reverseHitDetectionInstructions(), (this.state = null), super.finish();
			}
			applyStroke(t) {
				null != t.lastStroke && t.lastStroke != this.coordinates.length && (this.instructions.push(wc), (t.lastStroke = this.coordinates.length)), (t.lastStroke = 0), super.applyStroke(t), this.instructions.push(bc);
			}
		},
		Polygon: Ec,
		Text: class extends Cc {
			constructor(t, e, n, i) {
				super(t, e, n, i), (this.labels_ = null), (this.text_ = ''), (this.textOffsetX_ = 0), (this.textOffsetY_ = 0), (this.textRotateWithView_ = void 0), (this.textKeepUpright_ = void 0), (this.textRotation_ = 0), (this.textFillState_ = null), (this.fillStates = {}), (this.fillStates[Fl] = { fillStyle: Fl }), (this.textStrokeState_ = null), (this.strokeStates = {}), (this.textState_ = {}), (this.textStates = {}), (this.textKey_ = ''), (this.fillKey_ = ''), (this.strokeKey_ = ''), (this.declutterMode_ = void 0), (this.declutterImageWithText_ = void 0);
			}
			finish() {
				const t = super.finish();
				return (t.textStates = this.textStates), (t.fillStates = this.fillStates), (t.strokeStates = this.strokeStates), t;
			}
			drawText(t, e, n) {
				const i = this.textFillState_,
					r = this.textStrokeState_,
					s = this.textState_;
				if ('' === this.text_ || !s || (!i && !r)) return;
				const o = this.coordinates;
				let a = o.length;
				const l = t.getType();
				let h = null,
					c = t.getStride();
				if ('line' !== s.placement || ('LineString' != l && 'MultiLineString' != l && 'Polygon' != l && 'MultiPolygon' != l)) {
					let i = s.overflow ? null : [];
					switch (l) {
						case 'Point':
						case 'MultiPoint':
							h = t.getFlatCoordinates();
							break;
						case 'LineString':
							h = t.getFlatMidpoint();
							break;
						case 'Circle':
							h = t.getCenter();
							break;
						case 'MultiLineString':
							(h = t.getFlatMidpoints()), (c = 2);
							break;
						case 'Polygon':
							(h = t.getFlatInteriorPoint()), s.overflow || i.push(h[2] / this.resolution), (c = 3);
							break;
						case 'MultiPolygon':
							const e = t.getFlatInteriorPoints();
							h = [];
							for (let t = 0, n = e.length; t < n; t += 3) s.overflow || i.push(e[t + 2] / this.resolution), h.push(e[t], e[t + 1]);
							if (0 === h.length) return;
							c = 2;
					}
					const r = this.appendFlatPointCoordinates(h, c);
					if (r === a) return;
					if (i && (r - a) / 2 != h.length / c) {
						let t = a / 2;
						i = i.filter((e, n) => {
							const i = o[2 * (t + n)] === h[n * c] && o[2 * (t + n) + 1] === h[n * c + 1];
							return i || --t, i;
						});
					}
					this.saveTextStates_();
					const u = s.backgroundFill ? this.createFill(this.fillStyleToState(s.backgroundFill)) : null,
						d = s.backgroundStroke ? this.createStroke(this.strokeStyleToState(s.backgroundStroke)) : null;
					this.beginGeometry(t, e, n);
					let g = s.padding;
					if (g != Ol && (s.scale[0] < 0 || s.scale[1] < 0)) {
						let t = s.padding[0],
							e = s.padding[1],
							n = s.padding[2],
							i = s.padding[3];
						s.scale[0] < 0 && ((e = -e), (i = -i)), s.scale[1] < 0 && ((t = -t), (n = -n)), (g = [t, e, n, i]);
					}
					const f = this.pixelRatio;
					this.instructions.push([
						gc,
						a,
						r,
						null,
						NaN,
						NaN,
						NaN,
						1,
						0,
						0,
						this.textRotateWithView_,
						this.textRotation_,
						[1, 1],
						NaN,
						this.declutterMode_,
						this.declutterImageWithText_,
						g == Ol
							? Ol
							: g.map(function (t) {
									return t * f;
							  }),
						u,
						d,
						this.text_,
						this.textKey_,
						this.strokeKey_,
						this.fillKey_,
						this.textOffsetX_,
						this.textOffsetY_,
						i,
					]);
					const p = 1 / f,
						m = u ? u.slice(0) : null;
					m && (m[1] = Fl), this.hitDetectionInstructions.push([gc, a, r, null, NaN, NaN, NaN, 1, 0, 0, this.textRotateWithView_, this.textRotation_, [p, p], NaN, this.declutterMode_, this.declutterImageWithText_, g, m, d, this.text_, this.textKey_, this.strokeKey_, this.fillKey_ ? Fl : this.fillKey_, this.textOffsetX_, this.textOffsetY_, i]), this.endGeometry(e);
				} else {
					if (!hr(this.maxExtent, t.getExtent())) return;
					let i;
					if (((h = t.getFlatCoordinates()), 'LineString' == l)) i = [h.length];
					else if ('MultiLineString' == l) i = t.getEnds();
					else if ('Polygon' == l) i = t.getEnds().slice(0, 1);
					else if ('MultiPolygon' == l) {
						const e = t.getEndss();
						i = [];
						for (let t = 0, n = e.length; t < n; ++t) i.push(e[t][0]);
					}
					this.beginGeometry(t, e, n);
					const r = s.repeat,
						u = r ? void 0 : s.textAlign;
					let d = 0;
					for (let t = 0, e = i.length; t < e; ++t) {
						let e;
						e = r ? Tc(r * this.resolution, h, d, i[t], c) : [h.slice(d, i[t])];
						for (let n = 0, r = e.length; n < r; ++n) {
							const r = e[n];
							let l = 0,
								h = r.length;
							if (null == u) {
								const t = Pc(s.maxAngle, r, 0, r.length, 2);
								(l = t[0]), (h = t[1]);
							}
							for (let t = l; t < h; t += c) o.push(r[t], r[t + 1]);
							const g = o.length;
							(d = i[t]), this.drawChars_(a, g), (a = g);
						}
					}
					this.endGeometry(e);
				}
			}
			saveTextStates_() {
				const t = this.textStrokeState_,
					e = this.textState_,
					n = this.textFillState_,
					i = this.strokeKey_;
				t && (i in this.strokeStates || (this.strokeStates[i] = { strokeStyle: t.strokeStyle, lineCap: t.lineCap, lineDashOffset: t.lineDashOffset, lineWidth: t.lineWidth, lineJoin: t.lineJoin, miterLimit: t.miterLimit, lineDash: t.lineDash }));
				const r = this.textKey_;
				r in this.textStates || (this.textStates[r] = { font: e.font, textAlign: e.textAlign || Al, justify: e.justify, textBaseline: e.textBaseline || Dl, scale: e.scale });
				const s = this.fillKey_;
				n && (s in this.fillStates || (this.fillStates[s] = { fillStyle: n.fillStyle }));
			}
			drawChars_(t, e) {
				const n = this.textStrokeState_,
					i = this.textState_,
					r = this.strokeKey_,
					s = this.textKey_,
					o = this.fillKey_;
				this.saveTextStates_();
				const a = this.pixelRatio,
					l = Rc[i.textBaseline],
					h = this.textOffsetY_ * a,
					c = this.text_,
					u = n ? (n.lineWidth * Math.abs(i.scale[0])) / 2 : 0;
				this.instructions.push([dc, t, e, l, i.overflow, o, i.maxAngle, a, h, r, u * a, c, s, 1, this.declutterMode_, this.textKeepUpright_]), this.hitDetectionInstructions.push([dc, t, e, l, i.overflow, o ? Fl : o, i.maxAngle, a, h, r, u * a, c, s, 1 / a, this.declutterMode_, this.textKeepUpright_]);
			}
			setTextStyle(t, e) {
				let n, i, r;
				if (t) {
					const e = t.getFill();
					e ? ((i = this.textFillState_), i || ((i = {}), (this.textFillState_ = i)), (i.fillStyle = vl(e.getColor() || Fl))) : ((i = null), (this.textFillState_ = i));
					const s = t.getStroke();
					if (s) {
						(r = this.textStrokeState_), r || ((r = {}), (this.textStrokeState_ = r));
						const t = s.getLineDash(),
							e = s.getLineDashOffset(),
							n = s.getWidth(),
							i = s.getMiterLimit();
						(r.lineCap = s.getLineCap() || Ml), (r.lineDash = t ? t.slice() : Il), (r.lineDashOffset = void 0 === e ? 0 : e), (r.lineJoin = s.getLineJoin() || kl), (r.lineWidth = void 0 === n ? 1 : n), (r.miterLimit = void 0 === i ? 10 : i), (r.strokeStyle = vl(s.getColor() || Ll));
					} else (r = null), (this.textStrokeState_ = r);
					n = this.textState_;
					const o = t.getFont() || Rl;
					Ul(o);
					const a = t.getScaleArray();
					(n.overflow = t.getOverflow()), (n.font = o), (n.maxAngle = t.getMaxAngle()), (n.placement = t.getPlacement()), (n.textAlign = t.getTextAlign()), (n.repeat = t.getRepeat()), (n.justify = t.getJustify()), (n.textBaseline = t.getTextBaseline() || Dl), (n.backgroundFill = t.getBackgroundFill()), (n.backgroundStroke = t.getBackgroundStroke()), (n.padding = t.getPadding() || Ol), (n.scale = void 0 === a ? [1, 1] : a);
					const l = t.getOffsetX(),
						h = t.getOffsetY(),
						c = t.getRotateWithView(),
						u = t.getKeepUpright(),
						d = t.getRotation();
					(this.text_ = t.getText() || ''), (this.textOffsetX_ = void 0 === l ? 0 : l), (this.textOffsetY_ = void 0 === h ? 0 : h), (this.textRotateWithView_ = void 0 !== c && c), (this.textKeepUpright_ = void 0 === u || u), (this.textRotation_ = void 0 === d ? 0 : d), (this.strokeKey_ = r ? ('string' == typeof r.strokeStyle ? r.strokeStyle : wi(r.strokeStyle)) + r.lineCap + r.lineDashOffset + '|' + r.lineWidth + r.lineJoin + r.miterLimit + '[' + r.lineDash.join() + ']' : ''), (this.textKey_ = n.font + n.scale + (n.textAlign || '?') + (n.repeat || '?') + (n.justify || '?') + (n.textBaseline || '?')), (this.fillKey_ = i && i.fillStyle ? ('string' == typeof i.fillStyle ? i.fillStyle : '|' + wi(i.fillStyle)) : '');
				} else this.text_ = '';
				(this.declutterMode_ = t.getDeclutterMode()), (this.declutterImageWithText_ = e);
			}
		},
	};
	class Mc {
		constructor(t, e, n, i) {
			(this.tolerance_ = t), (this.maxExtent_ = e), (this.pixelRatio_ = i), (this.resolution_ = n), (this.buildersByZIndex_ = {});
		}
		finish() {
			const t = {};
			for (const e in this.buildersByZIndex_) {
				t[e] = t[e] || {};
				const n = this.buildersByZIndex_[e];
				for (const i in n) {
					const r = n[i].finish();
					t[e][i] = r;
				}
			}
			return t;
		}
		getBuilder(t, e) {
			const n = void 0 !== t ? t.toString() : '0';
			let i = this.buildersByZIndex_[n];
			void 0 === i && ((i = {}), (this.buildersByZIndex_[n] = i));
			let r = i[e];
			if (void 0 === r) {
				(r = new (0, Fc[e])(this.tolerance_, this.maxExtent_, this.resolution_, this.pixelRatio_)), (i[e] = r);
			}
			return r;
		}
	}
	function Ic(t, e, n, i, r, s, o, a, l, h, c, u, d = !0) {
		let g = t[e],
			f = t[e + 1],
			p = 0,
			m = 0,
			_ = 0,
			y = 0;
		function x() {
			(p = g), (m = f), (g = t[(e += i)]), (f = t[e + 1]), (y += _), (_ = Math.sqrt((g - p) * (g - p) + (f - m) * (f - m)));
		}
		do {
			x();
		} while (e < n - i && y + _ < s);
		let v = 0 === _ ? 0 : (s - y) / _;
		const w = Tr(p, g, v),
			b = Tr(m, f, v),
			S = e - i,
			C = y,
			E = s + a * l(h, r, c);
		for (; e < n - i && y + _ < E; ) x();
		v = 0 === _ ? 0 : (E - y) / _;
		const T = Tr(p, g, v),
			P = Tr(m, f, v);
		let R = !1;
		if (d)
			if (u) {
				const t = [w, b, T, P];
				qr(t, 0, 4, 2, u, t, t), (R = t[0] > t[2]);
			} else R = w > T;
		const F = Math.PI,
			M = [],
			I = S + i === e;
		let k;
		if (((_ = 0), (y = C), (g = t[(e = S)]), (f = t[e + 1]), I)) {
			x(), (k = Math.atan2(f - m, g - p)), R && (k += k > 0 ? -F : F);
			const t = (T + w) / 2,
				e = (P + b) / 2;
			return (M[0] = [t, e, (E - s) / 2, k, r]), M;
		}
		for (let t = 0, u = (r = r.replace(/\n/g, ' ')).length; t < u; ) {
			x();
			let d = Math.atan2(f - m, g - p);
			if ((R && (d += d > 0 ? -F : F), void 0 !== k)) {
				let t = d - k;
				if (((t += t > F ? -2 * F : t < -F ? 2 * F : 0), Math.abs(t) > o)) return null;
			}
			k = d;
			const w = t;
			let b = 0;
			for (; t < u; ++t) {
				const o = a * l(h, r[R ? u - t - 1 : t], c);
				if (e + i < n && y + _ < s + b + o / 2) break;
				b += o;
			}
			if (t === w) continue;
			const S = R ? r.substring(u - w, u - t) : r.substring(w, t);
			v = 0 === _ ? 0 : (s + b / 2 - y) / _;
			const C = Tr(p, g, v),
				E = Tr(m, f, v);
			M.push([C, E, b / 2, d, S]), (s += b);
		}
		return M;
	}
	class kc {
		constructor() {
			(this.instructions_ = []),
				(this.zIndex = 0),
				(this.offset_ = 0),
				(this.context_ = new Proxy(ol(), {
					get: (t, e) => {
						if ('function' == typeof ol()[e]) return this.instructions_[this.zIndex + this.offset_] || (this.instructions_[this.zIndex + this.offset_] = []), this.instructions_[this.zIndex + this.offset_].push(e), this.pushMethodArgs_;
					},
					set: (t, e, n) => (this.instructions_[this.zIndex + this.offset_] || (this.instructions_[this.zIndex + this.offset_] = []), this.instructions_[this.zIndex + this.offset_].push(e, n), !0),
				}));
		}
		pushMethodArgs_ = (...t) => (this.instructions_[this.zIndex + this.offset_].push(t), this);
		pushFunction(t) {
			this.instructions_[this.zIndex + this.offset_].push(t);
		}
		getContext() {
			return this.context_;
		}
		draw(t) {
			this.instructions_.forEach((e) => {
				for (let n = 0, i = e.length; n < i; ++n) {
					const i = e[n];
					if ('function' == typeof i) {
						i(t);
						continue;
					}
					const r = e[++n];
					if ('function' == typeof t[i]) t[i](...r);
					else {
						if ('function' == typeof r) {
							t[i] = r(t);
							continue;
						}
						t[i] = r;
					}
				}
			});
		}
		clear() {
			(this.instructions_.length = 0), (this.zIndex = 0), (this.offset_ = 0);
		}
		offset() {
			(this.offset_ = this.instructions_.length), (this.zIndex = 0);
		}
	}
	const Lc = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
		Ac = [],
		Dc = [],
		Oc = [],
		zc = [];
	function Gc(t) {
		return t[3].declutterBox;
	}
	const jc = new RegExp('[' + String.fromCharCode(1425) + '-' + String.fromCharCode(2303) + String.fromCharCode(64285) + '-' + String.fromCharCode(65023) + String.fromCharCode(65136) + '-' + String.fromCharCode(65276) + String.fromCharCode(67584) + '-' + String.fromCharCode(69631) + String.fromCharCode(124928) + '-' + String.fromCharCode(126975) + ']');
	function Nc(t, e) {
		return 'start' === e ? (e = jc.test(t) ? 'right' : 'left') : 'end' === e && (e = jc.test(t) ? 'left' : 'right'), Rc[e];
	}
	function Uc(t, e, n) {
		return n > 0 && t.push('\n', ''), t.push(e, ''), t;
	}
	class $c {
		constructor(t, e, n, i, r) {
			(this.overlaps = n), (this.pixelRatio = e), (this.resolution = t), this.alignAndScaleFill_, (this.instructions = i.instructions), (this.coordinates = i.coordinates), (this.coordinateCache_ = {}), (this.renderedTransform_ = [1, 0, 0, 1, 0, 0]), (this.hitDetectionInstructions = i.hitDetectionInstructions), (this.pixelCoordinates_ = null), (this.viewRotation_ = 0), (this.fillStates = i.fillStates || {}), (this.strokeStates = i.strokeStates || {}), (this.textStates = i.textStates || {}), (this.widths_ = {}), (this.labels_ = {}), (this.zIndexContext_ = r ? new kc() : null);
		}
		getZIndexContext() {
			return this.zIndexContext_;
		}
		createLabel(t, e, n, i) {
			const r = t + e + n + i;
			if (this.labels_[r]) return this.labels_[r];
			const s = i ? this.strokeStates[i] : null,
				o = n ? this.fillStates[n] : null,
				a = this.textStates[e],
				l = this.pixelRatio,
				h = [a.scale[0] * l, a.scale[1] * l],
				c = a.justify ? Rc[a.justify] : Nc(Array.isArray(t) ? t[0] : t, a.textAlign || Al),
				u = i && s.lineWidth ? s.lineWidth : 0,
				d = Array.isArray(t) ? t : String(t).split('\n').reduce(Uc, []),
				{
					width: g,
					height: f,
					widths: p,
					heights: m,
					lineWidths: _,
				} = (function (t, e) {
					const n = [],
						i = [],
						r = [];
					let s = 0,
						o = 0,
						a = 0,
						l = 0;
					for (let h = 0, c = e.length; h <= c; h += 2) {
						const u = e[h];
						if ('\n' === u || h === c) {
							(s = Math.max(s, o)), r.push(o), (o = 0), (a += l), (l = 0);
							continue;
						}
						const d = e[h + 1] || t.font,
							g = Vl(d, u);
						n.push(g), (o += g);
						const f = $l(d);
						i.push(f), (l = Math.max(l, f));
					}
					return { width: s, height: a, widths: n, heights: i, lineWidths: r };
				})(a, d),
				y = g + u,
				x = [],
				v = (y + 2) * h[0],
				w = (f + u) * h[1],
				b = { width: v < 0 ? Math.floor(v) : Math.ceil(v), height: w < 0 ? Math.floor(w) : Math.ceil(w), contextInstructions: x };
			(1 == h[0] && 1 == h[1]) || x.push('scale', h), i && (x.push('strokeStyle', s.strokeStyle), x.push('lineWidth', u), x.push('lineCap', s.lineCap), x.push('lineJoin', s.lineJoin), x.push('miterLimit', s.miterLimit), x.push('setLineDash', [s.lineDash]), x.push('lineDashOffset', s.lineDashOffset)), n && x.push('fillStyle', o.fillStyle), x.push('textBaseline', 'middle'), x.push('textAlign', 'center');
			const S = 0.5 - c;
			let C = c * y + S * u;
			const E = [],
				T = [];
			let P,
				R = 0,
				F = 0,
				M = 0,
				I = 0;
			for (let t = 0, e = d.length; t < e; t += 2) {
				const e = d[t];
				if ('\n' === e) {
					(F += R), (R = 0), (C = c * y + S * u), ++I;
					continue;
				}
				const r = d[t + 1] || a.font;
				r !== P && (i && E.push('font', r), n && T.push('font', r), (P = r)), (R = Math.max(R, m[M]));
				const s = [e, C + S * p[M] + c * (p[M] - _[I]), 0.5 * (u + R) + F];
				(C += p[M]), i && E.push('strokeText', s), n && T.push('fillText', s), ++M;
			}
			return Array.prototype.push.apply(x, E), Array.prototype.push.apply(x, T), (this.labels_[r] = b), b;
		}
		replayTextBackground_(t, e, n, i, r, s, o) {
			t.beginPath(), t.moveTo.apply(t, e), t.lineTo.apply(t, n), t.lineTo.apply(t, i), t.lineTo.apply(t, r), t.lineTo.apply(t, e), s && ((this.alignAndScaleFill_ = s[2]), (t.fillStyle = s[1]), this.fill_(t)), o && (this.setStrokeStyle_(t, o), t.stroke());
		}
		calculateImageOrLabelDimensions_(t, e, n, i, r, s, o, a, l, h, c, u, d, g, f, p) {
			let m = n - (o *= u[0]),
				_ = i - (a *= u[1]);
			const y = r + l > t ? t - l : r,
				x = s + h > e ? e - h : s,
				v = g[3] + y * u[0] + g[1],
				w = g[0] + x * u[1] + g[2],
				b = m - g[3],
				S = _ - g[0];
			let C;
			return (
				(f || 0 !== c) && ((Ac[0] = b), (zc[0] = b), (Ac[1] = S), (Dc[1] = S), (Dc[0] = b + v), (Oc[0] = Dc[0]), (Oc[1] = S + w), (zc[1] = Oc[1])),
				0 !== c ? ((C = Go([1, 0, 0, 1, 0, 0], n, i, 1, 1, c, -n, -i)), Do(C, Ac), Do(C, Dc), Do(C, Oc), Do(C, zc), Ui(Math.min(Ac[0], Dc[0], Oc[0], zc[0]), Math.min(Ac[1], Dc[1], Oc[1], zc[1]), Math.max(Ac[0], Dc[0], Oc[0], zc[0]), Math.max(Ac[1], Dc[1], Oc[1], zc[1]), Lc)) : Ui(Math.min(b, b + v), Math.min(S, S + w), Math.max(b, b + v), Math.max(S, S + w), Lc),
				d && ((m = Math.round(m)), (_ = Math.round(_))),
				{ drawImageX: m, drawImageY: _, drawImageW: y, drawImageH: x, originX: l, originY: h, declutterBox: { minX: Lc[0], minY: Lc[1], maxX: Lc[2], maxY: Lc[3], value: p }, canvasTransform: C, scale: u }
			);
		}
		replayImageOrLabel_(t, e, n, i, r, s, o) {
			const a = !(!s && !o),
				l = i.declutterBox,
				h = o ? (o[2] * i.scale[0]) / 2 : 0;
			return l.minX - h <= e[0] && l.maxX + h >= 0 && l.minY - h <= e[1] && l.maxY + h >= 0 && (a && this.replayTextBackground_(t, Ac, Dc, Oc, zc, s, o), Xl(t, i.canvasTransform, r, n, i.originX, i.originY, i.drawImageW, i.drawImageH, i.drawImageX, i.drawImageY, i.scale)), !0;
		}
		fill_(t) {
			const e = this.alignAndScaleFill_;
			if (e) {
				const n = Do(this.renderedTransform_, [0, 0]),
					i = 512 * this.pixelRatio;
				t.save(), t.translate(n[0] % i, n[1] % i), 1 !== e && t.scale(e, e), t.rotate(this.viewRotation_);
			}
			t.fill(), e && t.restore();
		}
		setStrokeStyle_(t, e) {
			(t.strokeStyle = e[1]), (t.lineWidth = e[2]), (t.lineCap = e[3]), (t.lineJoin = e[4]), (t.miterLimit = e[5]), (t.lineDashOffset = e[7]), t.setLineDash(e[6]);
		}
		drawLabelWithPointPlacement_(t, e, n, i) {
			const r = this.textStates[e],
				s = this.createLabel(t, e, i, n),
				o = this.strokeStates[n],
				a = this.pixelRatio,
				l = Nc(Array.isArray(t) ? t[0] : t, r.textAlign || Al),
				h = Rc[r.textBaseline || Dl],
				c = o && o.lineWidth ? o.lineWidth : 0;
			return { label: s, anchorX: l * (s.width / a - 2 * r.scale[0]) + 2 * (0.5 - l) * c, anchorY: (h * s.height) / a + 2 * (0.5 - h) * c };
		}
		execute_(t, e, n, i, r, s, o, a) {
			const l = this.zIndexContext_;
			let h;
			var c, u;
			this.pixelCoordinates_ && $n(n, this.renderedTransform_) ? (h = this.pixelCoordinates_) : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []), (h = Xr(this.coordinates, 0, this.coordinates.length, 2, n, this.pixelCoordinates_)), (c = this.renderedTransform_), (u = n), (c[0] = u[0]), (c[1] = u[1]), (c[2] = u[2]), (c[3] = u[3]), (c[4] = u[4]), (c[5] = u[5]));
			let d = 0;
			const g = i.length;
			let f,
				p,
				m,
				_,
				y,
				x,
				v,
				w,
				b,
				S,
				C,
				E,
				T,
				P = 0,
				R = 0,
				F = 0;
			const M = this.coordinateCache_,
				I = this.viewRotation_,
				k = Math.round(1e12 * Math.atan2(-n[1], n[0])) / 1e12,
				L = { context: t, pixelRatio: this.pixelRatio, resolution: this.resolution, rotation: I },
				A = this.instructions != i || this.overlaps ? 0 : 200;
			let D, O, z, G;
			for (; d < g; ) {
				const n = i[d];
				switch (n[0]) {
					case ac:
						(D = n[1]), (G = n[3]), D.getGeometry() ? (void 0 === o || hr(o, G.getExtent()) ? ++d : (d = n[2] + 1)) : (d = n[2]), l && (l.zIndex = n[4]);
						break;
					case lc:
						R > A && (this.fill_(t), (R = 0)), F > A && (t.stroke(), (F = 0)), R || F || (t.beginPath(), (y = NaN), (x = NaN)), ++d;
						break;
					case hc:
						P = n[1];
						const i = h[P],
							c = h[P + 1],
							u = h[P + 2] - i,
							g = h[P + 3] - c,
							j = Math.sqrt(u * u + g * g);
						t.moveTo(i + j, c), t.arc(i, c, j, 0, 2 * Math.PI, !0), ++d;
						break;
					case cc:
						t.closePath(), ++d;
						break;
					case uc:
						(P = n[1]), (f = n[2]);
						const N = n[3],
							U = n[4],
							$ = n[5];
						(L.geometry = N), (L.feature = D), d in M || (M[d] = []);
						const B = M[d];
						$ ? $(h, P, f, 2, B) : ((B[0] = h[P]), (B[1] = h[P + 1]), (B.length = 2)), l && (l.zIndex = n[6]), U(B, L), ++d;
						break;
					case gc:
						(P = n[1]), (f = n[2]), (b = n[3]), (p = n[4]), (m = n[5]);
						let V = n[6];
						const W = n[7],
							X = n[8],
							q = n[9],
							Z = n[10];
						let K = n[11];
						const Y = n[12];
						let H = n[13];
						_ = n[14] || 'declutter';
						const J = n[15];
						if (!b && n.length >= 20) {
							(S = n[19]), (C = n[20]), (E = n[21]), (T = n[22]);
							const t = this.drawLabelWithPointPlacement_(S, C, E, T);
							(b = t.label), (n[3] = b);
							const e = n[23];
							(p = (t.anchorX - e) * this.pixelRatio), (n[4] = p);
							const i = n[24];
							(m = (t.anchorY - i) * this.pixelRatio), (n[5] = m), (V = b.height), (n[6] = V), (H = b.width), (n[13] = H);
						}
						let Q, tt, et, nt;
						n.length > 25 && (Q = n[25]), n.length > 17 ? ((tt = n[16]), (et = n[17]), (nt = n[18])) : ((tt = Ol), (et = null), (nt = null)), Z && k ? (K += I) : Z || k || (K -= I);
						let it = 0;
						for (; P < f; P += 2) {
							if (Q && Q[it++] < H / this.pixelRatio) continue;
							const n = this.calculateImageOrLabelDimensions_(b.width, b.height, h[P], h[P + 1], H, V, p, m, X, q, K, Y, r, tt, !!et || !!nt, D),
								i = [t, e, b, n, W, et, nt];
							if (a) {
								let t, e, r, s, o;
								if (J) {
									const n = f - P;
									if (!J[n]) {
										J[n] = { args: i, declutterMode: _ };
										continue;
									}
									const s = J[n];
									(t = s.args), (e = s.declutterMode), delete J[n], (r = Gc(t));
								}
								if ((!t || ('declutter' === e && a.collides(r)) || (s = !0), ('declutter' === _ && a.collides(n.declutterBox)) || (o = !0), 'declutter' === e && 'declutter' === _)) {
									const t = s && o;
									(s = t), (o = t);
								}
								s && ('none' !== e && a.insert(r), this.replayImageOrLabel_.apply(this, t)), o && ('none' !== _ && a.insert(n.declutterBox), this.replayImageOrLabel_.apply(this, i));
							} else this.replayImageOrLabel_.apply(this, i);
						}
						++d;
						break;
					case dc:
						const rt = n[1],
							st = n[2],
							ot = n[3],
							at = n[4];
						T = n[5];
						const lt = n[6],
							ht = n[7],
							ct = n[8];
						E = n[9];
						const ut = n[10];
						(S = n[11]), (C = n[12]);
						const dt = [n[13], n[13]];
						_ = n[14] || 'declutter';
						const gt = n[15],
							ft = this.textStates[C],
							pt = ft.font,
							mt = [ft.scale[0] * ht, ft.scale[1] * ht];
						let _t;
						pt in this.widths_ ? (_t = this.widths_[pt]) : ((_t = {}), (this.widths_[pt] = _t));
						const yt = pa(h, rt, st, 2),
							xt = Math.abs(mt[0]) * Wl(pt, S, _t);
						if (at || xt <= yt) {
							const n = Ic(h, rt, st, 2, S, (yt - xt) * Nc(S, this.textStates[C].textAlign), lt, Math.abs(mt[0]), Wl, pt, _t, k ? 0 : this.viewRotation_, gt);
							t: if (n) {
								const i = [];
								let r, s, o, l, h;
								if (E)
									for (r = 0, s = n.length; r < s; ++r) {
										(h = n[r]), (o = h[4]), (l = this.createLabel(o, C, '', E)), (p = h[2] + (mt[0] < 0 ? -ut : ut)), (m = ot * l.height + (2 * (0.5 - ot) * ut * mt[1]) / mt[0] - ct);
										const s = this.calculateImageOrLabelDimensions_(l.width, l.height, h[0], h[1], l.width, l.height, p, m, 0, 0, h[3], dt, !1, Ol, !1, D);
										if (a && 'declutter' === _ && a.collides(s.declutterBox)) break t;
										i.push([t, e, l, s, 1, null, null]);
									}
								if (T)
									for (r = 0, s = n.length; r < s; ++r) {
										(h = n[r]), (o = h[4]), (l = this.createLabel(o, C, T, '')), (p = h[2]), (m = ot * l.height - ct);
										const s = this.calculateImageOrLabelDimensions_(l.width, l.height, h[0], h[1], l.width, l.height, p, m, 0, 0, h[3], dt, !1, Ol, !1, D);
										if (a && 'declutter' === _ && a.collides(s.declutterBox)) break t;
										i.push([t, e, l, s, 1, null, null]);
									}
								a && 'none' !== _ && a.load(i.map(Gc));
								for (let t = 0, e = i.length; t < e; ++t) this.replayImageOrLabel_.apply(this, i[t]);
							}
						}
						++d;
						break;
					case fc:
						if (void 0 !== s) {
							D = n[1];
							const t = s(D, G, _);
							if (t) return t;
						}
						++d;
						break;
					case pc:
						A ? R++ : this.fill_(t), ++d;
						break;
					case mc:
						for (P = n[1], f = n[2], O = h[P], z = h[P + 1], t.moveTo(O, z), y = (O + 0.5) | 0, x = (z + 0.5) | 0, P += 2; P < f; P += 2) (O = h[P]), (z = h[P + 1]), (v = (O + 0.5) | 0), (w = (z + 0.5) | 0), (P != f - 2 && v === y && w === x) || (t.lineTo(O, z), (y = v), (x = w));
						++d;
						break;
					case _c:
						(this.alignAndScaleFill_ = n[2]), R && (this.fill_(t), (R = 0), F && (t.stroke(), (F = 0))), (t.fillStyle = n[1]), ++d;
						break;
					case yc:
						F && (t.stroke(), (F = 0)), this.setStrokeStyle_(t, n), ++d;
						break;
					case xc:
						A ? F++ : t.stroke(), ++d;
						break;
					default:
						++d;
				}
			}
			R && this.fill_(t), F && t.stroke();
		}
		execute(t, e, n, i, r, s) {
			(this.viewRotation_ = i), this.execute_(t, e, n, this.instructions, r, void 0, void 0, s);
		}
		executeHitDetection(t, e, n, i, r) {
			return (this.viewRotation_ = n), this.execute_(t, [t.canvas.width, t.canvas.height], e, this.hitDetectionInstructions, !0, i, r);
		}
	}
	const Bc = ['Polygon', 'Circle', 'LineString', 'Image', 'Text', 'Default'],
		Vc = ['Image', 'Text'],
		Wc = Bc.filter((t) => !Vc.includes(t));
	class Xc {
		constructor(t, e, n, i, r, s, o) {
			(this.maxExtent_ = t), (this.overlaps_ = i), (this.pixelRatio_ = n), (this.resolution_ = e), (this.renderBuffer_ = s), (this.executorsByZIndex_ = {}), (this.hitDetectionContext_ = null), (this.hitDetectionTransform_ = [1, 0, 0, 1, 0, 0]), (this.renderedContext_ = null), (this.deferredZIndexContexts_ = {}), this.createExecutors_(r, o);
		}
		clip(t, e) {
			const n = this.getClipCoords(e);
			t.beginPath(), t.moveTo(n[0], n[1]), t.lineTo(n[2], n[3]), t.lineTo(n[4], n[5]), t.lineTo(n[6], n[7]), t.clip();
		}
		createExecutors_(t, e) {
			for (const n in t) {
				let i = this.executorsByZIndex_[n];
				void 0 === i && ((i = {}), (this.executorsByZIndex_[n] = i));
				const r = t[n];
				for (const t in r) {
					const n = r[t];
					i[t] = new $c(this.resolution_, this.pixelRatio_, this.overlaps_, n, e);
				}
			}
		}
		hasExecutors(t) {
			for (const e in this.executorsByZIndex_) {
				const n = this.executorsByZIndex_[e];
				for (let e = 0, i = t.length; e < i; ++e) if (t[e] in n) return !0;
			}
			return !1;
		}
		forEachFeatureAtCoordinate(t, e, n, i, r, s) {
			const o = 2 * (i = Math.round(i)) + 1,
				a = Go(this.hitDetectionTransform_, i + 0.5, i + 0.5, 1 / e, -1 / e, -n, -t[0], -t[1]),
				l = !this.hitDetectionContext_;
			l && (this.hitDetectionContext_ = rl(o, o, void 0, { willReadFrequently: !0 }));
			const h = this.hitDetectionContext_;
			let c;
			h.canvas.width !== o || h.canvas.height !== o ? ((h.canvas.width = o), (h.canvas.height = o)) : l || h.clearRect(0, 0, o, o), void 0 !== this.renderBuffer_ && ((c = [1 / 0, 1 / 0, -1 / 0, -1 / 0]), qi(c, t), Li(c, e * (this.renderBuffer_ + i), c));
			const u = (function (t) {
				if (void 0 !== qc[t]) return qc[t];
				const e = 2 * t + 1,
					n = t * t,
					i = new Array(n + 1);
				for (let r = 0; r <= t; ++r)
					for (let s = 0; s <= t; ++s) {
						const o = r * r + s * s;
						if (o > n) break;
						let a = i[o];
						a || ((a = []), (i[o] = a)), a.push(4 * ((t + r) * e + (t + s)) + 3), r > 0 && a.push(4 * ((t - r) * e + (t + s)) + 3), s > 0 && (a.push(4 * ((t + r) * e + (t - s)) + 3), r > 0 && a.push(4 * ((t - r) * e + (t - s)) + 3));
					}
				const r = [];
				for (let t = 0, e = i.length; t < e; ++t) i[t] && r.push(...i[t]);
				return (qc[t] = r), r;
			})(i);
			let d;
			function g(t, e, n) {
				const a = h.getImageData(0, 0, o, o).data;
				for (let l = 0, c = u.length; l < c; l++)
					if (a[u[l]] > 0) {
						if (!s || 'none' === n || ('Image' !== d && 'Text' !== d) || s.includes(t)) {
							const n = (u[l] - 3) / 4,
								s = i - (n % o),
								a = i - ((n / o) | 0),
								h = r(t, e, s * s + a * a);
							if (h) return h;
						}
						h.clearRect(0, 0, o, o);
						break;
					}
			}
			const f = Object.keys(this.executorsByZIndex_).map(Number);
			let p, m, _, y, x;
			for (f.sort(zn), p = f.length - 1; p >= 0; --p) {
				const t = f[p].toString();
				for (_ = this.executorsByZIndex_[t], m = Bc.length - 1; m >= 0; --m) if (((d = Bc[m]), (y = _[d]), void 0 !== y && ((x = y.executeHitDetection(h, a, n, g, c)), x))) return x;
			}
		}
		getClipCoords(t) {
			const e = this.maxExtent_;
			if (!e) return null;
			const n = e[0],
				i = e[1],
				r = e[2],
				s = e[3],
				o = [n, i, n, s, r, s, r, i];
			return Xr(o, 0, 8, 2, t, o), o;
		}
		isEmpty() {
			return ci(this.executorsByZIndex_);
		}
		execute(t, e, n, i, r, s, o) {
			const a = Object.keys(this.executorsByZIndex_).map(Number);
			a.sort(o ? Gn : zn), (s = s || Bc);
			const l = Bc.length;
			for (let h = 0, c = a.length; h < c; ++h) {
				const c = a[h].toString(),
					u = this.executorsByZIndex_[c];
				for (let c = 0, d = s.length; c < d; ++c) {
					const d = s[c],
						g = u[d];
					if (void 0 !== g) {
						const s = null === o ? void 0 : g.getZIndexContext(),
							u = s ? s.getContext() : t,
							f = this.maxExtent_ && 'Image' !== d && 'Text' !== d;
						if ((f && (u.save(), this.clip(u, n)), s && 'Text' !== d && 'Image' !== d ? s.pushFunction((t) => g.execute(t, e, n, i, r, o)) : g.execute(u, e, n, i, r, o), f && u.restore(), s)) {
							s.offset();
							const t = a[h] * l + c;
							this.deferredZIndexContexts_[t] || (this.deferredZIndexContexts_[t] = []), this.deferredZIndexContexts_[t].push(s);
						}
					}
				}
			}
			this.renderedContext_ = t;
		}
		getDeferredZIndexContexts() {
			return this.deferredZIndexContexts_;
		}
		getRenderedContext() {
			return this.renderedContext_;
		}
		renderDeferred() {
			const t = this.deferredZIndexContexts_,
				e = Object.keys(t).map(Number).sort(zn);
			for (let n = 0, i = e.length; n < i; ++n)
				t[e[n]].forEach((t) => {
					t.draw(this.renderedContext_), t.clear();
				}),
					(t[e[n]].length = 0);
		}
	}
	const qc = {};
	const Zc = 0.5;
	function Kc(t, e, n, i, r, s, o, a, l) {
		const h = l ? To(r, l) : r,
			c = rl(t[0] * Zc, t[1] * Zc);
		c.imageSmoothingEnabled = !1;
		const u = c.canvas,
			d = new xh(c, Zc, r, null, o, a, l ? mo(So(), l) : null),
			g = n.length,
			f = Math.floor(16777215 / g),
			p = {};
		for (let t = 1; t <= g; ++t) {
			const e = n[t - 1],
				r = e.getStyleFunction() || i;
			if (!r) continue;
			let o = r(e, s);
			if (!o) continue;
			Array.isArray(o) || (o = [o]);
			const a = (t * f).toString(16).padStart(7, '#00000');
			for (let t = 0, n = o.length; t < n; ++t) {
				const n = o[t],
					i = n.getGeometryFunction()(e);
				if (!i || !hr(h, i.getExtent())) continue;
				const r = n.clone(),
					s = r.getFill();
				s && s.setColor(a);
				const l = r.getStroke();
				l && (l.setColor(a), l.setLineDash(null)), r.setText(void 0);
				const c = n.getImage();
				if (c) {
					const t = c.getImageSize();
					if (!t) continue;
					const e = rl(t[0], t[1], void 0, { alpha: !1 }),
						n = e.canvas;
					(e.fillStyle = a), e.fillRect(0, 0, n.width, n.height), r.setImage(new th({ img: n, anchor: c.getAnchor(), anchorXUnits: 'pixels', anchorYUnits: 'pixels', offset: c.getOrigin(), opacity: 1, size: c.getSize(), scale: c.getScale(), rotation: c.getRotation(), rotateWithView: c.getRotateWithView() }));
				}
				const u = r.getZIndex() || 0;
				let d = p[u];
				d || ((d = {}), (p[u] = d), (d.Polygon = []), (d.Circle = []), (d.LineString = []), (d.Point = []));
				const g = i.getType();
				if ('GeometryCollection' === g) {
					const t = i.getGeometriesArrayRecursive();
					for (let e = 0, n = t.length; e < n; ++e) {
						const n = t[e];
						d[n.getType().replace('Multi', '')].push(n, r);
					}
				} else d[g.replace('Multi', '')].push(i, r);
			}
		}
		const m = Object.keys(p).map(Number).sort(zn);
		for (let t = 0, n = m.length; t < n; ++t) {
			const n = p[m[t]];
			for (const t in n) {
				const i = n[t];
				for (let t = 0, n = i.length; t < n; t += 2) {
					d.setStyle(i[t + 1]);
					for (let n = 0, r = e.length; n < r; ++n) d.setTransform(e[n]), d.drawGeometry(i[t]);
				}
			}
		}
		return c.getImageData(0, 0, u.width, u.height);
	}
	function Yc(t, e, n) {
		const i = [];
		if (n) {
			const r = Math.floor(Math.round(t[0]) * Zc),
				s = Math.floor(Math.round(t[1]) * Zc),
				o = 4 * (vr(r, 0, n.width - 1) + vr(s, 0, n.height - 1) * n.width),
				a = n.data[o],
				l = n.data[o + 1],
				h = n.data[o + 2] + 256 * (l + 256 * a),
				c = Math.floor(16777215 / e.length);
			h && h % c == 0 && i.push(e[h / c - 1]);
		}
		return i;
	}
	class Hc extends ui {
		constructor(t, e, n, i) {
			super(t), (this.inversePixelTransform = e), (this.frameState = n), (this.context = i);
		}
	}
	class Jc extends mi {
		constructor(t) {
			super(), (this.ready = !0), (this.boundHandleImageChange_ = this.handleImageChange_.bind(this)), (this.layer_ = t), (this.staleKeys_ = new Array()), (this.maxStaleKeys = 5);
		}
		getStaleKeys() {
			return this.staleKeys_;
		}
		prependStaleKey(t) {
			this.staleKeys_.unshift(t), this.staleKeys_.length > this.maxStaleKeys && (this.staleKeys_.length = this.maxStaleKeys);
		}
		getFeatures(t) {
			return xi();
		}
		getData(t) {
			return null;
		}
		prepareFrame(t) {
			return xi();
		}
		renderFrame(t, e) {
			return xi();
		}
		forEachFeatureAtCoordinate(t, e, n, i, r) {}
		getLayer() {
			return this.layer_;
		}
		handleFontsChanged() {}
		handleImageChange_(t) {
			const e = t.target;
			(e.getState() !== Ra && e.getState() !== Fa) || this.renderIfReadyAndVisible();
		}
		loadImage(t) {
			let e = t.getState();
			return e != Ra && e != Fa && t.addEventListener(Kn, this.boundHandleImageChange_), e == Ta && (t.load(), (e = t.getState())), e == Ra;
		}
		renderIfReadyAndVisible() {
			const t = this.getLayer();
			t && t.getVisible() && 'ready' === t.getSourceState() && t.changed();
		}
		renderDeferred(t) {}
		disposeInternal() {
			delete this.layer_, super.disposeInternal();
		}
	}
	const Qc = [];
	let tu = null;
	class eu extends Jc {
		constructor(t) {
			super(t), (this.container = null), this.renderedResolution, (this.tempTransform = [1, 0, 0, 1, 0, 0]), (this.pixelTransform = [1, 0, 0, 1, 0, 0]), (this.inversePixelTransform = [1, 0, 0, 1, 0, 0]), (this.context = null), (this.deferredContext_ = null), (this.containerReused = !1), (this.frameState = null);
		}
		getImageData(t, e, n) {
			let i;
			tu || (tu = rl(1, 1, void 0, { willReadFrequently: !0 })), tu.clearRect(0, 0, 1, 1);
			try {
				tu.drawImage(t, e, n, 1, 1, 0, 0, 1, 1), (i = tu.getImageData(0, 0, 1, 1).data);
			} catch {
				return (tu = null), null;
			}
			return i;
		}
		getBackground(t) {
			let e = this.getLayer().getBackground();
			return 'function' == typeof e && (e = e(t.viewState.resolution)), e || void 0;
		}
		useContainer(t, e, n) {
			const i = this.getLayer().getClassName();
			let r, s;
			if (t && t.className === i && (!n || (t && t.style.backgroundColor && $n(Wa(t.style.backgroundColor), Wa(n))))) {
				const e = t.firstElementChild;
				e instanceof HTMLCanvasElement && (s = e.getContext('2d'));
			}
			if ((s && s.canvas.style.transform === e ? ((this.container = t), (this.context = s), (this.containerReused = !0)) : this.containerReused ? ((this.container = null), (this.context = null), (this.containerReused = !1)) : this.container && (this.container.style.backgroundColor = null), !this.container)) {
				(r = document.createElement('div')), (r.className = i);
				let t = r.style;
				(t.position = 'absolute'), (t.width = '100%'), (t.height = '100%'), (s = rl());
				const e = s.canvas;
				r.appendChild(e), (t = e.style), (t.position = 'absolute'), (t.left = '0'), (t.transformOrigin = 'top left'), (this.container = r), (this.context = s);
			}
			this.containerReused || !n || this.container.style.backgroundColor || (this.container.style.backgroundColor = n);
		}
		clipUnrotated(t, e, n) {
			const i = or(n),
				r = ar(n),
				s = Qi(n),
				o = Ji(n);
			Do(e.coordinateToPixelTransform, i), Do(e.coordinateToPixelTransform, r), Do(e.coordinateToPixelTransform, s), Do(e.coordinateToPixelTransform, o);
			const a = this.inversePixelTransform;
			Do(a, i), Do(a, r), Do(a, s), Do(a, o), t.save(), t.beginPath(), t.moveTo(Math.round(i[0]), Math.round(i[1])), t.lineTo(Math.round(r[0]), Math.round(r[1])), t.lineTo(Math.round(s[0]), Math.round(s[1])), t.lineTo(Math.round(o[0]), Math.round(o[1])), t.clip();
		}
		prepareContainer(t, e) {
			const n = t.extent,
				i = t.viewState.resolution,
				r = t.viewState.rotation,
				s = t.pixelRatio,
				o = Math.round((lr(n) / i) * s),
				a = Math.round((rr(n) / i) * s);
			Go(this.pixelTransform, t.size[0] / 2, t.size[1] / 2, 1 / s, 1 / s, r, -o / 2, -a / 2), jo(this.inversePixelTransform, this.pixelTransform);
			const l = 'matrix(' + this.pixelTransform.map((t, e) => Math.round(t * No[e]) / No[e]).join(', ') + ')';
			if ((this.useContainer(e, l, this.getBackground(t)), !this.containerReused)) {
				const t = this.context.canvas;
				t.width != o || t.height != a ? ((t.width = o), (t.height = a)) : this.context.clearRect(0, 0, o, a), l !== t.style.transform && (t.style.transform = l);
			}
		}
		dispatchRenderEvent_(t, e, n) {
			const i = this.getLayer();
			if (i.hasListener(t)) {
				const r = new Hc(t, this.inversePixelTransform, n, e);
				i.dispatchEvent(r);
			}
		}
		preRender(t, e) {
			(this.frameState = e), e.declutter || this.dispatchRenderEvent_(gh, t, e);
		}
		postRender(t, e) {
			e.declutter || this.dispatchRenderEvent_(fh, t, e);
		}
		renderDeferredInternal(t) {}
		getRenderContext(t) {
			return t.declutter && !this.deferredContext_ && (this.deferredContext_ = new kc()), t.declutter ? this.deferredContext_.getContext() : this.context;
		}
		renderDeferred(t) {
			t.declutter && (this.dispatchRenderEvent_(gh, this.context, t), t.declutter && this.deferredContext_ && (this.deferredContext_.draw(this.context), this.deferredContext_.clear()), this.renderDeferredInternal(t), this.dispatchRenderEvent_(fh, this.context, t));
		}
		getRenderTransform(t, e, n, i, r, s, o) {
			const a = r / 2,
				l = s / 2,
				h = i / e,
				c = -h,
				u = -t[0] + o,
				d = -t[1];
			return Go(this.tempTransform, a, l, h, c, -n, u, d);
		}
		disposeInternal() {
			delete this.frameState, super.disposeInternal();
		}
	}
	class nu extends eu {
		constructor(t) {
			super(t), (this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this)), this.animatingOrInteracting_, (this.hitDetectionImageData_ = null), (this.clipped_ = !1), (this.renderedFeatures_ = null), (this.renderedRevision_ = -1), (this.renderedResolution_ = NaN), (this.renderedExtent_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0]), (this.wrappedRenderedExtent_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0]), this.renderedRotation_, (this.renderedCenter_ = null), (this.renderedProjection_ = null), (this.renderedPixelRatio_ = 1), (this.renderedRenderOrder_ = null), this.renderedFrameDeclutter_, (this.replayGroup_ = null), (this.replayGroupChanged = !0), (this.clipping = !0), (this.targetContext_ = null), (this.opacity_ = 1);
		}
		renderWorlds(t, e, n) {
			const i = e.extent,
				r = e.viewState,
				s = r.center,
				o = r.resolution,
				a = r.projection,
				l = r.rotation,
				h = a.getExtent(),
				c = this.getLayer().getSource(),
				u = this.getLayer().getDeclutter(),
				d = e.pixelRatio,
				g = e.viewHints,
				f = !(g[sc] || g[oc]),
				p = this.context,
				m = Math.round((lr(i) / o) * d),
				_ = Math.round((rr(i) / o) * d),
				y = c.getWrapX() && a.canWrapX(),
				x = y ? lr(h) : null,
				v = y ? Math.ceil((i[2] - h[2]) / x) + 1 : 1;
			let w = y ? Math.floor((i[0] - h[0]) / x) : 0;
			do {
				let i = this.getRenderTransform(s, o, 0, d, m, _, w * x);
				e.declutter && (i = i.slice(0)), t.execute(p, [p.canvas.width, p.canvas.height], i, l, f, void 0 === n ? Bc : n ? Vc : Wc, n ? u && e.declutter[u] : void 0);
			} while (++w < v);
		}
		setDrawContext_() {
			1 !== this.opacity_ && ((this.targetContext_ = this.context), (this.context = rl(this.context.canvas.width, this.context.canvas.height, Qc)));
		}
		resetDrawContext_() {
			if (1 !== this.opacity_) {
				const t = this.targetContext_.globalAlpha;
				(this.targetContext_.globalAlpha = this.opacity_), this.targetContext_.drawImage(this.context.canvas, 0, 0), (this.targetContext_.globalAlpha = t), al(this.context), Qc.push(this.context.canvas), (this.context = this.targetContext_), (this.targetContext_ = null);
			}
		}
		renderDeclutter(t) {
			this.replayGroup_ && this.getLayer().getDeclutter() && this.renderWorlds(this.replayGroup_, t, !0);
		}
		renderDeferredInternal(t) {
			this.replayGroup_ && (this.replayGroup_.renderDeferred(), this.clipped_ && this.context.restore(), this.resetDrawContext_());
		}
		renderFrame(t, e) {
			const n = t.layerStatesArray[t.layerIndex];
			this.opacity_ = n.opacity;
			const i = t.viewState;
			this.prepareContainer(t, e);
			const r = this.context,
				s = this.replayGroup_;
			let o = s && !s.isEmpty();
			if (!o) {
				if (!(this.getLayer().hasListener(gh) || this.getLayer().hasListener(fh))) return null;
			}
			this.setDrawContext_(), this.preRender(r, t);
			const a = i.projection;
			if (((this.clipped_ = !1), o && n.extent && this.clipping)) {
				const e = Po(n.extent, a);
				(o = hr(e, t.extent)), (this.clipped_ = o && !zi(e, t.extent)), this.clipped_ && this.clipUnrotated(r, t, e);
			}
			return o && this.renderWorlds(s, t, !this.getLayer().getDeclutter() && void 0), !t.declutter && this.clipped_ && r.restore(), this.postRender(r, t), this.renderedRotation_ !== i.rotation && ((this.renderedRotation_ = i.rotation), (this.hitDetectionImageData_ = null)), t.declutter || this.resetDrawContext_(), this.container;
		}
		getFeatures(t) {
			return new Promise((e) => {
				if (this.frameState && !this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
					const t = this.frameState.size.slice(),
						e = this.renderedCenter_,
						n = this.renderedResolution_,
						i = this.renderedRotation_,
						r = this.renderedProjection_,
						s = this.wrappedRenderedExtent_,
						o = this.getLayer(),
						a = [],
						l = t[0] * Zc,
						h = t[1] * Zc;
					a.push(this.getRenderTransform(e, n, i, Zc, l, h, 0).slice());
					const c = o.getSource(),
						u = r.getExtent();
					if (c.getWrapX() && r.canWrapX() && !zi(u, s)) {
						let t = s[0];
						const r = lr(u);
						let o,
							c = 0;
						for (; t < u[0]; ) --c, (o = r * c), a.push(this.getRenderTransform(e, n, i, Zc, l, h, o).slice()), (t += r);
						for (c = 0, t = s[2]; t > u[2]; ) ++c, (o = r * c), a.push(this.getRenderTransform(e, n, i, Zc, l, h, o).slice()), (t -= r);
					}
					const d = So();
					this.hitDetectionImageData_ = Kc(t, a, this.renderedFeatures_, o.getStyleFunction(), s, n, i, bh(n, this.renderedPixelRatio_), d ? r : null);
				}
				e(Yc(t, this.renderedFeatures_, this.hitDetectionImageData_));
			});
		}
		forEachFeatureAtCoordinate(t, e, n, i, r) {
			if (!this.replayGroup_) return;
			const s = e.viewState.resolution,
				o = e.viewState.rotation,
				a = this.getLayer(),
				l = {},
				h = this.getLayer().getDeclutter();
			return this.replayGroup_.forEachFeatureAtCoordinate(
				t,
				s,
				o,
				n,
				function (t, e, n) {
					const s = wi(t),
						o = l[s];
					if (o) {
						if (!0 !== o && n < o.distanceSq) {
							if (0 === n) return (l[s] = !0), r.splice(r.lastIndexOf(o), 1), i(t, a, e);
							(o.geometry = e), (o.distanceSq = n);
						}
					} else {
						if (0 === n) return (l[s] = !0), i(t, a, e);
						r.push((l[s] = { feature: t, layer: a, geometry: e, distanceSq: n, callback: i }));
					}
				},
				h ? e.declutter?.[h]?.all().map((t) => t.value) : null
			);
		}
		handleFontsChanged() {
			const t = this.getLayer();
			t.getVisible() && this.replayGroup_ && t.changed();
		}
		handleStyleImageChange_(t) {
			this.renderIfReadyAndVisible();
		}
		prepareFrame(t) {
			const e = this.getLayer(),
				n = e.getSource();
			if (!n) return !1;
			const i = t.viewHints[sc],
				r = t.viewHints[oc],
				s = e.getUpdateWhileAnimating(),
				o = e.getUpdateWhileInteracting();
			if ((this.ready && !s && i) || (!o && r)) return (this.animatingOrInteracting_ = !0), !0;
			this.animatingOrInteracting_ = !1;
			const a = t.extent,
				l = t.viewState,
				h = l.projection,
				c = l.resolution,
				u = t.pixelRatio,
				d = e.getRevision(),
				g = e.getRenderBuffer();
			let f = e.getRenderOrder();
			void 0 === f && (f = wh);
			const p = l.center.slice(),
				m = Li(a, g * c),
				_ = m.slice(),
				y = [m.slice()],
				x = h.getExtent();
			if (n.getWrapX() && h.canWrapX() && !zi(x, t.extent)) {
				const t = lr(x),
					e = Math.max(lr(m) / 2, t);
				(m[0] = x[0] - e), (m[2] = x[2] + e), is(p, h);
				const n = dr(y[0], h);
				n[0] < x[0] && n[2] < x[2] ? y.push([n[0] + t, n[1], n[2] + t, n[3]]) : n[0] > x[0] && n[2] > x[2] && y.push([n[0] - t, n[1], n[2] - t, n[3]]);
			}
			if (this.ready && this.renderedResolution_ == c && this.renderedRevision_ == d && this.renderedRenderOrder_ == f && this.renderedFrameDeclutter_ === !!t.declutter && zi(this.wrappedRenderedExtent_, m)) return $n(this.renderedExtent_, _) || ((this.hitDetectionImageData_ = null), (this.renderedExtent_ = _)), (this.renderedCenter_ = p), (this.replayGroupChanged = !1), !0;
			this.replayGroup_ = null;
			const v = new Mc(Sh(c, u), m, c, u),
				w = So();
			let b;
			if (w) {
				for (let t = 0, e = y.length; t < e; ++t) {
					const e = To(y[t], h);
					n.loadFeatures(e, Ro(c, h), w);
				}
				b = mo(w, h);
			} else for (let t = 0, e = y.length; t < e; ++t) n.loadFeatures(y[t], c, h);
			const S = bh(c, u);
			let C = !0;
			const E = (t, n) => {
					let i;
					const r = t.getStyleFunction() || e.getStyleFunction();
					if ((r && (i = r(t, c)), i)) {
						const e = this.renderFeature(t, S, i, v, b, this.getLayer().getDeclutter(), n);
						C = C && !e;
					}
				},
				T = To(m, h),
				P = n.getFeaturesInExtent(T);
			f && P.sort(f);
			for (let t = 0, e = P.length; t < e; ++t) E(P[t], t);
			(this.renderedFeatures_ = P), (this.ready = C);
			const R = v.finish(),
				F = new Xc(m, c, u, n.getOverlaps(), R, e.getRenderBuffer(), !!t.declutter);
			return (this.renderedResolution_ = c), (this.renderedRevision_ = d), (this.renderedRenderOrder_ = f), (this.renderedFrameDeclutter_ = !!t.declutter), (this.renderedExtent_ = _), (this.wrappedRenderedExtent_ = m), (this.renderedCenter_ = p), (this.renderedProjection_ = h), (this.renderedPixelRatio_ = u), (this.replayGroup_ = F), (this.hitDetectionImageData_ = null), (this.replayGroupChanged = !0), !0;
		}
		renderFeature(t, e, n, i, r, s, o) {
			if (!n) return !1;
			let a = !1;
			if (Array.isArray(n)) for (let l = 0, h = n.length; l < h; ++l) a = Ch(i, t, n[l], e, this.boundHandleStyleImageChange_, r, s, o) || a;
			else a = Ch(i, t, n, e, this.boundHandleStyleImageChange_, r, s, o);
			return a;
		}
	}
	let iu = 0;
	const ru = 1 << iu++,
		su = 1 << iu++,
		ou = 1 << iu++,
		au = 1 << iu++,
		lu = 1 << iu++,
		hu = 1 << iu++,
		cu = Math.pow(2, 6) - 1,
		uu = { [ru]: 'boolean', [su]: 'number', [ou]: 'string', [au]: 'color', [lu]: 'number[]', [hu]: 'size' },
		du = Object.keys(uu).map(Number).sort(zn);
	function gu(t) {
		const e = [];
		for (const n of du) fu(t, n) && e.push(uu[n]);
		return 0 === e.length ? 'untyped' : e.length < 3 ? e.join(' or ') : e.slice(0, -1).join(', ') + ', or ' + e[e.length - 1];
	}
	function fu(t, e) {
		return (t & e) === e;
	}
	function pu(t, e) {
		return t === e;
	}
	class mu {
		constructor(t, e) {
			if (
				!(function (t) {
					return t in uu;
				})(t)
			)
				throw new Error(`literal expressions must have a specific type, got ${gu(t)}`);
			(this.type = t), (this.value = e);
		}
	}
	class _u {
		constructor(t, e, ...n) {
			(this.type = t), (this.operator = e), (this.args = n);
		}
	}
	function yu() {
		return { variables: new Set(), properties: new Set(), featureId: !1, geometryType: !1, mapState: !1 };
	}
	function xu(t, e, n) {
		switch (typeof t) {
			case 'boolean':
				if (pu(e, ou)) return new mu(ou, t ? 'true' : 'false');
				if (!fu(e, ru)) throw new Error(`got a boolean, but expected ${gu(e)}`);
				return new mu(ru, t);
			case 'number':
				if (pu(e, hu)) return new mu(hu, Zl(t));
				if (pu(e, ru)) return new mu(ru, !!t);
				if (pu(e, ou)) return new mu(ou, t.toString());
				if (!fu(e, su)) throw new Error(`got a number, but expected ${gu(e)}`);
				return new mu(su, t);
			case 'string':
				if (pu(e, au)) return new mu(au, Va(t));
				if (pu(e, ru)) return new mu(ru, !!t);
				if (!fu(e, ou)) throw new Error(`got a string, but expected ${gu(e)}`);
				return new mu(ou, t);
		}
		if (!Array.isArray(t)) throw new Error('expression must be an array or a primitive value');
		if (0 === t.length) throw new Error('empty expression');
		if ('string' == typeof t[0])
			return (function (t, e, n) {
				const i = t[0],
					r = gd[i];
				if (!r) throw new Error(`unknown operator: ${i}`);
				return r(t, e, n);
			})(t, e, n);
		for (const e of t) if ('number' != typeof e) throw new Error('expected an array of numbers');
		if (pu(e, hu)) {
			if (2 !== t.length) throw new Error(`expected an array of two values for a size, got ${t.length}`);
			return new mu(hu, t);
		}
		if (pu(e, au)) {
			if (3 === t.length) return new mu(au, [...t, 1]);
			if (4 === t.length) return new mu(au, t);
			throw new Error(`expected an array of 3 or 4 values for a color, got ${t.length}`);
		}
		if (!fu(e, lu)) throw new Error(`got an array of numbers, but expected ${gu(e)}`);
		return new mu(lu, t);
	}
	const vu = 'get',
		wu = 'var',
		bu = 'concat',
		Su = 'geometry-type',
		Cu = 'line-metric',
		Eu = 'any',
		Tu = 'all',
		Pu = '!',
		Ru = 'resolution',
		Fu = 'zoom',
		Mu = 'time',
		Iu = '==',
		ku = '!=',
		Lu = '>',
		Au = '>=',
		Du = '<',
		Ou = '<=',
		zu = '*',
		Gu = '/',
		ju = '+',
		Nu = '-',
		Uu = 'clamp',
		$u = '%',
		Bu = '^',
		Vu = 'abs',
		Wu = 'floor',
		Xu = 'ceil',
		qu = 'round',
		Zu = 'sin',
		Ku = 'cos',
		Yu = 'atan',
		Hu = 'sqrt',
		Ju = 'match',
		Qu = 'between',
		td = 'interpolate',
		ed = 'coalesce',
		nd = 'case',
		id = 'in',
		rd = 'number',
		sd = 'string',
		od = 'array',
		ad = 'color',
		ld = 'id',
		hd = 'band',
		cd = 'palette',
		ud = 'to-string',
		dd = 'has',
		gd = {
			[vu]: wd(_d(1, 1 / 0), fd),
			[wu]: wd(_d(1, 1), function (t, e, n) {
				const i = t[1];
				if ('string' != typeof i) throw new Error('expected a string argument for var operation');
				return n.variables.add(i), [new mu(ou, i)];
			}),
			[dd]: wd(_d(1, 1 / 0), fd),
			[ld]: wd(function (t, e, n) {
				n.featureId = !0;
			}, md),
			[bu]: wd(_d(2, 1 / 0), xd(ou)),
			[Su]: wd(function (t, e, n) {
				n.geometryType = !0;
			}, md),
			[Cu]: wd(md),
			[Ru]: wd(pd, md),
			[Fu]: wd(pd, md),
			[Mu]: wd(pd, md),
			[Eu]: wd(_d(2, 1 / 0), xd(ru)),
			[Tu]: wd(_d(2, 1 / 0), xd(ru)),
			[Pu]: wd(_d(1, 1), xd(ru)),
			[Iu]: wd(_d(2, 2), xd(cu)),
			[ku]: wd(_d(2, 2), xd(cu)),
			[Lu]: wd(_d(2, 2), xd(su)),
			[Au]: wd(_d(2, 2), xd(su)),
			[Du]: wd(_d(2, 2), xd(su)),
			[Ou]: wd(_d(2, 2), xd(su)),
			[zu]: wd(_d(2, 1 / 0), yd),
			[ed]: wd(_d(2, 1 / 0), yd),
			[Gu]: wd(_d(2, 2), xd(su)),
			[ju]: wd(_d(2, 1 / 0), xd(su)),
			[Nu]: wd(_d(2, 2), xd(su)),
			[Uu]: wd(_d(3, 3), xd(su)),
			[$u]: wd(_d(2, 2), xd(su)),
			[Bu]: wd(_d(2, 2), xd(su)),
			[Vu]: wd(_d(1, 1), xd(su)),
			[Wu]: wd(_d(1, 1), xd(su)),
			[Xu]: wd(_d(1, 1), xd(su)),
			[qu]: wd(_d(1, 1), xd(su)),
			[Zu]: wd(_d(1, 1), xd(su)),
			[Ku]: wd(_d(1, 1), xd(su)),
			[Yu]: wd(_d(1, 2), xd(su)),
			[Hu]: wd(_d(1, 1), xd(su)),
			[Ju]: wd(_d(4, 1 / 0), vd, function (t, e, n) {
				const i = t.length - 1,
					r = ou | su | ru,
					s = xu(t[1], r, n),
					o = xu(t[t.length - 1], e, n),
					a = new Array(i - 2);
				for (let e = 0; e < i - 2; e += 2) {
					try {
						const i = xu(t[e + 2], s.type, n);
						a[e] = i;
					} catch (t) {
						throw new Error(`failed to parse argument ${e + 1} of match expression: ${t.message}`);
					}
					try {
						const i = xu(t[e + 3], o.type, n);
						a[e + 1] = i;
					} catch (t) {
						throw new Error(`failed to parse argument ${e + 2} of match expression: ${t.message}`);
					}
				}
				return [s, ...a, o];
			}),
			[Qu]: wd(_d(3, 3), xd(su)),
			[td]: wd(_d(6, 1 / 0), vd, function (t, e, n) {
				const i = t[1];
				let r;
				switch (i[0]) {
					case 'linear':
						r = 1;
						break;
					case 'exponential':
						const t = i[1];
						if ('number' != typeof t || t <= 0) throw new Error(`expected a number base for exponential interpolation, got ${JSON.stringify(t)} instead`);
						r = t;
						break;
					default:
						throw new Error(`invalid interpolation type: ${JSON.stringify(i)}`);
				}
				const s = new mu(su, r);
				let o;
				try {
					o = xu(t[2], su, n);
				} catch (t) {
					throw new Error(`failed to parse argument 1 in interpolate expression: ${t.message}`);
				}
				const a = new Array(t.length - 3);
				for (let i = 0; i < a.length; i += 2) {
					try {
						const e = xu(t[i + 3], su, n);
						a[i] = e;
					} catch (t) {
						throw new Error(`failed to parse argument ${i + 2} for interpolate expression: ${t.message}`);
					}
					try {
						const r = xu(t[i + 4], e, n);
						a[i + 1] = r;
					} catch (t) {
						throw new Error(`failed to parse argument ${i + 3} for interpolate expression: ${t.message}`);
					}
				}
				return [s, o, ...a];
			}),
			[nd]: wd(
				_d(3, 1 / 0),
				function (t, e, n) {
					const i = t[0],
						r = t.length - 1;
					if (r % 2 == 0) throw new Error(`expected an odd number of arguments for ${i}, got ${r} instead`);
				},
				function (t, e, n) {
					const i = xu(t[t.length - 1], e, n),
						r = new Array(t.length - 1);
					for (let e = 0; e < r.length - 1; e += 2) {
						try {
							const i = xu(t[e + 1], ru, n);
							r[e] = i;
						} catch (t) {
							throw new Error(`failed to parse argument ${e} of case expression: ${t.message}`);
						}
						try {
							const s = xu(t[e + 2], i.type, n);
							r[e + 1] = s;
						} catch (t) {
							throw new Error(`failed to parse argument ${e + 1} of case expression: ${t.message}`);
						}
					}
					return (r[r.length - 1] = i), r;
				}
			),
			[id]: wd(_d(2, 2), function (t, e, n) {
				let i,
					r = t[2];
				if (!Array.isArray(r)) throw new Error('the second argument for the "in" operator must be an array');
				if ('string' == typeof r[0]) {
					if ('literal' !== r[0]) throw new Error('for the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions');
					if (!Array.isArray(r[1])) throw new Error('failed to parse "in" expression: the literal operator must be followed by an array');
					(r = r[1]), (i = ou);
				} else i = su;
				const s = new Array(r.length);
				for (let t = 0; t < s.length; t++)
					try {
						const e = xu(r[t], i, n);
						s[t] = e;
					} catch (e) {
						throw new Error(`failed to parse haystack item ${t} for "in" expression: ${e.message}`);
					}
				return [xu(t[1], i, n), ...s];
			}),
			[rd]: wd(_d(1, 1 / 0), xd(cu)),
			[sd]: wd(_d(1, 1 / 0), xd(cu)),
			[od]: wd(_d(1, 1 / 0), xd(su)),
			[ad]: wd(_d(1, 4), xd(su)),
			[hd]: wd(_d(1, 3), xd(su)),
			[cd]: wd(_d(2, 2), function (t, e, n) {
				let i;
				try {
					i = xu(t[1], su, n);
				} catch (t) {
					throw new Error(`failed to parse first argument in palette expression: ${t.message}`);
				}
				const r = t[2];
				if (!Array.isArray(r)) throw new Error('the second argument of palette must be an array');
				const s = new Array(r.length);
				for (let t = 0; t < s.length; t++) {
					let e;
					try {
						e = xu(r[t], au, n);
					} catch (e) {
						throw new Error(`failed to parse color at index ${t} in palette expression: ${e.message}`);
					}
					if (!(e instanceof mu)) throw new Error(`the palette color at index ${t} must be a literal value`);
					s[t] = e;
				}
				return [i, ...s];
			}),
			[ud]: wd(_d(1, 1), xd(ru | su | ou | au)),
		};
	function fd(t, e, n) {
		const i = t.length - 1,
			r = new Array(i);
		for (let e = 0; e < i; ++e) {
			const i = t[e + 1];
			switch (typeof i) {
				case 'number':
					r[e] = new mu(su, i);
					break;
				case 'string':
					r[e] = new mu(ou, i);
					break;
				default:
					throw new Error(`expected a string key or numeric array index for a get operation, got ${i}`);
			}
			0 === e && n.properties.add(String(i));
		}
		return r;
	}
	function pd(t, e, n) {
		n.mapState = !0;
	}
	function md(t, e, n) {
		const i = t[0];
		if (1 !== t.length) throw new Error(`expected no arguments for ${i} operation`);
		return [];
	}
	function _d(t, e) {
		return function (n, i, r) {
			const s = n[0],
				o = n.length - 1;
			if (t === e) {
				if (o !== t) {
					throw new Error(`expected ${t} argument${1 === t ? '' : 's'} for ${s}, got ${o}`);
				}
			} else if (o < t || o > e) {
				throw new Error(`expected ${e === 1 / 0 ? `${t} or more` : `${t} to ${e}`} arguments for ${s}, got ${o}`);
			}
		};
	}
	function yd(t, e, n) {
		const i = t.length - 1,
			r = new Array(i);
		for (let s = 0; s < i; ++s) {
			const i = xu(t[s + 1], e, n);
			r[s] = i;
		}
		return r;
	}
	function xd(t) {
		return function (e, n, i) {
			const r = e.length - 1,
				s = new Array(r);
			for (let n = 0; n < r; ++n) {
				const r = xu(e[n + 1], t, i);
				s[n] = r;
			}
			return s;
		};
	}
	function vd(t, e, n) {
		const i = t[0],
			r = t.length - 1;
		if (r % 2 == 1) throw new Error(`expected an even number of arguments for operation ${i}, got ${r} instead`);
	}
	function wd(...t) {
		return function (e, n, i) {
			const r = e[0];
			let s;
			for (let r = 0; r < t.length; r++) {
				const o = t[r](e, n, i);
				if (r == t.length - 1) {
					if (!o) throw new Error('expected last argument validator to return the parsed args');
					s = o;
				}
			}
			return new _u(n, r, ...s);
		};
	}
	function bd(t) {
		if (!t) return '';
		const e = t.getType();
		switch (e) {
			case 'Point':
			case 'LineString':
			case 'Polygon':
				return e;
			case 'MultiPoint':
			case 'MultiLineString':
			case 'MultiPolygon':
				return e.substring(5);
			case 'Circle':
				return 'Polygon';
			case 'GeometryCollection':
				return bd(t.getGeometries()[0]);
			default:
				return '';
		}
	}
	function Sd(t, e, n) {
		return Cd(xu(t, e, n));
	}
	function Cd(t, e) {
		if (t instanceof mu) {
			if (t.type === au && 'string' == typeof t.value) {
				const e = Va(t.value);
				return function () {
					return e;
				};
			}
			return function () {
				return t.value;
			};
		}
		const n = t.operator;
		switch (n) {
			case rd:
			case sd:
			case ed:
				return (function (t) {
					const e = t.operator,
						n = t.args.length,
						i = new Array(n);
					for (let e = 0; e < n; ++e) i[e] = Cd(t.args[e]);
					switch (e) {
						case ed:
							return (t) => {
								for (let e = 0; e < n; ++e) {
									const n = i[e](t);
									if (null != n) return n;
								}
								throw new Error('Expected one of the values to be non-null');
							};
						case rd:
						case sd:
							return (t) => {
								for (let r = 0; r < n; ++r) {
									const n = i[r](t);
									if (typeof n === e) return n;
								}
								throw new Error(`Expected one of the values to be a ${e}`);
							};
						default:
							throw new Error(`Unsupported assertion operator ${e}`);
					}
				})(t);
			case vu:
			case wu:
			case dd:
				return (function (t) {
					const e = t.args[0],
						n = e.value;
					switch (t.operator) {
						case vu:
							return (e) => {
								const i = t.args;
								let r = e.properties[n];
								for (let t = 1, e = i.length; t < e; ++t) {
									r = r[i[t].value];
								}
								return r;
							};
						case wu:
							return (t) => t.variables[n];
						case dd:
							return (e) => {
								const i = t.args;
								if (!(n in e.properties)) return !1;
								let r = e.properties[n];
								for (let t = 1, e = i.length; t < e; ++t) {
									const e = i[t].value;
									if (!r || !Object.hasOwn(r, e)) return !1;
									r = r[e];
								}
								return !0;
							};
						default:
							throw new Error(`Unsupported accessor operator ${t.operator}`);
					}
				})(t);
			case ld:
				return (t) => t.featureId;
			case Su:
				return (t) => t.geometryType;
			case bu: {
				const e = t.args.map((t) => Cd(t));
				return (t) => ''.concat(...e.map((e) => e(t).toString()));
			}
			case Ru:
				return (t) => t.resolution;
			case Eu:
			case Tu:
			case Qu:
			case id:
			case Pu:
				return (function (t) {
					const e = t.operator,
						n = t.args.length,
						i = new Array(n);
					for (let e = 0; e < n; ++e) i[e] = Cd(t.args[e]);
					switch (e) {
						case Eu:
							return (t) => {
								for (let e = 0; e < n; ++e) if (i[e](t)) return !0;
								return !1;
							};
						case Tu:
							return (t) => {
								for (let e = 0; e < n; ++e) if (!i[e](t)) return !1;
								return !0;
							};
						case Qu:
							return (t) => {
								const e = i[0](t),
									n = i[1](t),
									r = i[2](t);
								return e >= n && e <= r;
							};
						case id:
							return (t) => {
								const e = i[0](t);
								for (let r = 1; r < n; ++r) if (e === i[r](t)) return !0;
								return !1;
							};
						case Pu:
							return (t) => !i[0](t);
						default:
							throw new Error(`Unsupported logical operator ${e}`);
					}
				})(t);
			case Iu:
			case ku:
			case Du:
			case Ou:
			case Lu:
			case Au:
				return (function (t) {
					const e = t.operator,
						n = Cd(t.args[0]),
						i = Cd(t.args[1]);
					switch (e) {
						case Iu:
							return (t) => n(t) === i(t);
						case ku:
							return (t) => n(t) !== i(t);
						case Du:
							return (t) => n(t) < i(t);
						case Ou:
							return (t) => n(t) <= i(t);
						case Lu:
							return (t) => n(t) > i(t);
						case Au:
							return (t) => n(t) >= i(t);
						default:
							throw new Error(`Unsupported comparison operator ${e}`);
					}
				})(t);
			case zu:
			case Gu:
			case ju:
			case Nu:
			case Uu:
			case $u:
			case Bu:
			case Vu:
			case Wu:
			case Xu:
			case qu:
			case Zu:
			case Ku:
			case Yu:
			case Hu:
				return (function (t) {
					const e = t.operator,
						n = t.args.length,
						i = new Array(n);
					for (let e = 0; e < n; ++e) i[e] = Cd(t.args[e]);
					switch (e) {
						case zu:
							return (t) => {
								let e = 1;
								for (let r = 0; r < n; ++r) e *= i[r](t);
								return e;
							};
						case Gu:
							return (t) => i[0](t) / i[1](t);
						case ju:
							return (t) => {
								let e = 0;
								for (let r = 0; r < n; ++r) e += i[r](t);
								return e;
							};
						case Nu:
							return (t) => i[0](t) - i[1](t);
						case Uu:
							return (t) => {
								const e = i[0](t),
									n = i[1](t);
								if (e < n) return n;
								const r = i[2](t);
								return e > r ? r : e;
							};
						case $u:
							return (t) => i[0](t) % i[1](t);
						case Bu:
							return (t) => Math.pow(i[0](t), i[1](t));
						case Vu:
							return (t) => Math.abs(i[0](t));
						case Wu:
							return (t) => Math.floor(i[0](t));
						case Xu:
							return (t) => Math.ceil(i[0](t));
						case qu:
							return (t) => Math.round(i[0](t));
						case Zu:
							return (t) => Math.sin(i[0](t));
						case Ku:
							return (t) => Math.cos(i[0](t));
						case Yu:
							return 2 === n ? (t) => Math.atan2(i[0](t), i[1](t)) : (t) => Math.atan(i[0](t));
						case Hu:
							return (t) => Math.sqrt(i[0](t));
						default:
							throw new Error(`Unsupported numeric operator ${e}`);
					}
				})(t);
			case nd:
				return (function (t) {
					const e = t.args.length,
						n = new Array(e);
					for (let i = 0; i < e; ++i) n[i] = Cd(t.args[i]);
					return (t) => {
						for (let i = 0; i < e - 1; i += 2) {
							if (n[i](t)) return n[i + 1](t);
						}
						return n[e - 1](t);
					};
				})(t);
			case Ju:
				return (function (t) {
					const e = t.args.length,
						n = new Array(e);
					for (let i = 0; i < e; ++i) n[i] = Cd(t.args[i]);
					return (t) => {
						const i = n[0](t);
						for (let r = 1; r < e; r += 2) if (i === n[r](t)) return n[r + 1](t);
						return n[e - 1](t);
					};
				})(t);
			case td:
				return (function (t) {
					const e = t.args.length,
						n = new Array(e);
					for (let i = 0; i < e; ++i) n[i] = Cd(t.args[i]);
					return (t) => {
						const i = n[0](t),
							r = n[1](t);
						let s, o;
						for (let a = 2; a < e; a += 2) {
							const e = n[a](t);
							let l = n[a + 1](t);
							const h = Array.isArray(l);
							if ((h && (l = $a(l)), e >= r)) return 2 === a ? l : h ? Td(i, r, s, o, e, l) : Ed(i, r, s, o, e, l);
							(s = e), (o = l);
						}
						return o;
					};
				})(t);
			case ud:
				return (function (t) {
					const e = t.operator,
						n = t.args.length,
						i = new Array(n);
					for (let e = 0; e < n; ++e) i[e] = Cd(t.args[e]);
					if (e === ud)
						return (e) => {
							const n = i[0](e);
							return t.args[0].type === au ? qa(n) : n.toString();
						};
					throw new Error(`Unsupported convert operator ${e}`);
				})(t);
			default:
				throw new Error(`Unsupported operator ${n}`);
		}
	}
	function Ed(t, e, n, i, r, s) {
		const o = r - n;
		if (0 === o) return i;
		const a = e - n;
		return i + (1 === t ? a / o : (Math.pow(t, a) - 1) / (Math.pow(t, o) - 1)) * (s - i);
	}
	function Td(t, e, n, i, r, s) {
		if (0 === r - n) return i;
		const o = Ba(i),
			a = Ba(s);
		let l = a[2] - o[2];
		l > 180 ? (l -= 360) : l < -180 && (l += 360);
		return Xa(
			(function (t) {
				const e = Oa.rgb(Ga.xyz(t));
				return (e[3] = t[3]), e;
			})([Ed(t, e, n, o[0], r, a[0]), Ed(t, e, n, o[1], r, a[1]), o[2] + Ed(t, e, n, 0, r, l), Ed(t, e, n, i[3], r, s[3])])
		);
	}
	function Pd(t) {
		return !0;
	}
	function Rd(t) {
		const e = yu(),
			n = (function (t, e) {
				const n = t.length,
					i = new Array(n);
				for (let r = 0; r < n; ++r) {
					const n = t[r],
						s = 'filter' in n ? Sd(n.filter, ru, e) : Pd;
					let o;
					if (Array.isArray(n.style)) {
						const t = n.style.length;
						o = new Array(t);
						for (let i = 0; i < t; ++i) o[i] = Md(n.style[i], e);
					} else o = [Md(n.style, e)];
					i[r] = { filter: s, styles: o };
				}
				return function (e) {
					const r = [];
					let s = !1;
					for (let o = 0; o < n; ++o) {
						if ((0, i[o].filter)(e) && (!t[o].else || !s)) {
							s = !0;
							for (const t of i[o].styles) {
								const n = t(e);
								n && r.push(n);
							}
						}
					}
					return r;
				};
			})(t, e),
			i = { variables: {}, properties: {}, resolution: NaN, featureId: null, geometryType: '' };
		return function (t, r) {
			if (((i.properties = t.getPropertiesInternal()), (i.resolution = r), e.featureId)) {
				const e = t.getId();
				i.featureId = void 0 !== e ? e : null;
			}
			return e.geometryType && (i.geometryType = bd(t.getGeometry())), n(i);
		};
	}
	function Fd(t) {
		const e = yu(),
			n = t.length,
			i = new Array(n);
		for (let r = 0; r < n; ++r) i[r] = Md(t[r], e);
		const r = { variables: {}, properties: {}, resolution: NaN, featureId: null, geometryType: '' },
			s = new Array(n);
		return function (t, o) {
			if (((r.properties = t.getPropertiesInternal()), (r.resolution = o), e.featureId)) {
				const e = t.getId();
				r.featureId = void 0 !== e ? e : null;
			}
			let a = 0;
			for (let t = 0; t < n; ++t) {
				const e = i[t](r);
				e && ((s[a] = e), (a += 1));
			}
			return (s.length = a), s;
		};
	}
	function Md(t, e) {
		const n = Id(t, '', e),
			i = kd(t, '', e),
			r = (function (t, e) {
				const n = 'text-',
					i = Ad(t, n + 'value', e);
				if (!i) return null;
				const r = Id(t, n, e),
					s = Id(t, n + 'background-', e),
					o = kd(t, n, e),
					a = kd(t, n + 'background-', e),
					l = Ad(t, n + 'font', e),
					h = Ld(t, n + 'max-angle', e),
					c = Ld(t, n + 'offset-x', e),
					u = Ld(t, n + 'offset-y', e),
					d = Dd(t, n + 'overflow', e),
					g = Ad(t, n + 'placement', e),
					f = Ld(t, n + 'repeat', e),
					p = Nd(t, n + 'scale', e),
					m = Dd(t, n + 'rotate-with-view', e),
					_ = Ld(t, n + 'rotation', e),
					y = Ad(t, n + 'align', e),
					x = Ad(t, n + 'justify', e),
					v = Ad(t, n + 'baseline', e),
					w = Dd(t, n + 'keep-upright', e),
					b = zd(t, n + 'padding', e),
					S = Vd(t, n + 'declutter-mode'),
					C = new ah({ declutterMode: S });
				return function (t) {
					if ((C.setText(i(t)), r && C.setFill(r(t)), s && C.setBackgroundFill(s(t)), o && C.setStroke(o(t)), a && C.setBackgroundStroke(a(t)), l && C.setFont(l(t)), h && C.setMaxAngle(h(t)), c && C.setOffsetX(c(t)), u && C.setOffsetY(u(t)), d && C.setOverflow(d(t)), g)) {
						const e = g(t);
						if ('point' !== e && 'line' !== e) throw new Error('Expected point or line for text-placement');
						C.setPlacement(e);
					}
					if ((f && C.setRepeat(f(t)), p && C.setScale(p(t)), m && C.setRotateWithView(m(t)), _ && C.setRotation(_(t)), y)) {
						const e = y(t);
						if ('left' !== e && 'center' !== e && 'right' !== e && 'end' !== e && 'start' !== e) throw new Error('Expected left, right, center, start, or end for text-align');
						C.setTextAlign(e);
					}
					if (x) {
						const e = x(t);
						if ('left' !== e && 'right' !== e && 'center' !== e) throw new Error('Expected left, right, or center for text-justify');
						C.setJustify(e);
					}
					if (v) {
						const e = v(t);
						if ('bottom' !== e && 'top' !== e && 'middle' !== e && 'alphabetic' !== e && 'hanging' !== e) throw new Error('Expected bottom, top, middle, alphabetic, or hanging for text-baseline');
						C.setTextBaseline(e);
					}
					return b && C.setPadding(b(t)), w && C.setKeepUpright(w(t)), C;
				};
			})(t, e),
			s = (function (t, e) {
				if ('icon-src' in t)
					return (function (t, e) {
						const n = 'icon-',
							i = n + 'src',
							r = Xd(t[i], i),
							s = Gd(t, n + 'anchor', e),
							o = Nd(t, n + 'scale', e),
							a = Ld(t, n + 'opacity', e),
							l = Gd(t, n + 'displacement', e),
							h = Ld(t, n + 'rotation', e),
							c = Dd(t, n + 'rotate-with-view', e),
							u = $d(t, n + 'anchor-origin'),
							d = Bd(t, n + 'anchor-x-units'),
							g = Bd(t, n + 'anchor-y-units'),
							f = (function (t, e) {
								const n = t[e];
								if (void 0 === n) return;
								return Zd(n, e);
							})(t, n + 'color'),
							p = (function (t, e) {
								const n = t[e];
								if (void 0 === n) return;
								if ('string' != typeof n) throw new Error(`Expected a string for ${e}`);
								return n;
							})(t, n + 'cross-origin'),
							m = (function (t, e) {
								const n = t[e];
								if (void 0 === n) return;
								return Wd(n, e);
							})(t, n + 'offset'),
							_ = $d(t, n + 'offset-origin'),
							y = Ud(t, n + 'width'),
							x = Ud(t, n + 'height'),
							v = (function (t, e) {
								const n = t[e];
								if (void 0 === n) return;
								if ('number' == typeof n) return Zl(n);
								if (!Array.isArray(n)) throw new Error(`Expected a number or size array for ${e}`);
								if (2 !== n.length || 'number' != typeof n[0] || 'number' != typeof n[1]) throw new Error(`Expected a number or size array for ${e}`);
								return n;
							})(t, n + 'size'),
							w = Vd(t, n + 'declutter-mode'),
							b = new th({ src: r, anchorOrigin: u, anchorXUnits: d, anchorYUnits: g, color: f, crossOrigin: p, offset: m, offsetOrigin: _, height: x, width: y, size: v, declutterMode: w });
						return function (t) {
							return a && b.setOpacity(a(t)), l && b.setDisplacement(l(t)), h && b.setRotation(h(t)), c && b.setRotateWithView(c(t)), o && b.setScale(o(t)), s && b.setAnchor(s(t)), b;
						};
					})(t, e);
				if ('shape-points' in t)
					return (function (t, e) {
						const n = 'shape-',
							i = n + 'points',
							r = n + 'radius',
							s = qd(t[i], i),
							o = qd(t[r], r),
							a = Id(t, n, e),
							l = kd(t, n, e),
							h = Nd(t, n + 'scale', e),
							c = Gd(t, n + 'displacement', e),
							u = Ld(t, n + 'rotation', e),
							d = Dd(t, n + 'rotate-with-view', e),
							g = Ud(t, n + 'radius2'),
							f = Ud(t, n + 'angle'),
							p = Vd(t, n + 'declutter-mode'),
							m = new Yl({ points: s, radius: o, radius2: g, angle: f, declutterMode: p });
						return function (t) {
							return a && m.setFill(a(t)), l && m.setStroke(l(t)), c && m.setDisplacement(c(t)), u && m.setRotation(u(t)), d && m.setRotateWithView(d(t)), h && m.setScale(h(t)), m;
						};
					})(t, e);
				if ('circle-radius' in t)
					return (function (t, e) {
						const n = 'circle-',
							i = Id(t, n, e),
							r = kd(t, n, e),
							s = Ld(t, n + 'radius', e),
							o = Nd(t, n + 'scale', e),
							a = Gd(t, n + 'displacement', e),
							l = Ld(t, n + 'rotation', e),
							h = Dd(t, n + 'rotate-with-view', e),
							c = Vd(t, n + 'declutter-mode'),
							u = new Hl({ radius: 5, declutterMode: c });
						return function (t) {
							return s && u.setRadius(s(t)), i && u.setFill(i(t)), r && u.setStroke(r(t)), a && u.setDisplacement(a(t)), l && u.setRotation(l(t)), h && u.setRotateWithView(h(t)), o && u.setScale(o(t)), u;
						};
					})(t, e);
				return null;
			})(t, e),
			o = Ld(t, 'z-index', e);
		if (!(n || i || r || s || ci(t))) throw new Error('No fill, stroke, point, or text symbolizer properties in style: ' + JSON.stringify(t));
		const a = new nh();
		return function (t) {
			let e = !0;
			if (n) {
				const i = n(t);
				i && (e = !1), a.setFill(i);
			}
			if (i) {
				const n = i(t);
				n && (e = !1), a.setStroke(n);
			}
			if (r) {
				const n = r(t);
				n && (e = !1), a.setText(n);
			}
			if (s) {
				const n = s(t);
				n && (e = !1), a.setImage(n);
			}
			return o && a.setZIndex(o(t)), e ? null : a;
		};
	}
	function Id(t, e, n) {
		let i;
		if (e + 'fill-pattern-src' in t)
			i = (function (t, e, n) {
				const i = Ad(t, e + 'pattern-src', n),
					r = jd(t, e + 'pattern-offset', n),
					s = jd(t, e + 'pattern-size', n),
					o = Od(t, e + 'color', n);
				return function (t) {
					return { src: i(t), offset: r && r(t), size: s && s(t), color: o && o(t) };
				};
			})(t, e + 'fill-', n);
		else {
			if ('none' === t[e + 'fill-color']) return (t) => null;
			i = Od(t, e + 'fill-color', n);
		}
		if (!i) return null;
		const r = new Jl();
		return function (t) {
			const e = i(t);
			return e === ja ? null : (r.setColor(e), r);
		};
	}
	function kd(t, e, n) {
		const i = Ld(t, e + 'stroke-width', n),
			r = Od(t, e + 'stroke-color', n);
		if (!i && !r) return null;
		const s = Ad(t, e + 'stroke-line-cap', n),
			o = Ad(t, e + 'stroke-line-join', n),
			a = zd(t, e + 'stroke-line-dash', n),
			l = Ld(t, e + 'stroke-line-dash-offset', n),
			h = Ld(t, e + 'stroke-miter-limit', n),
			c = new eh();
		return function (t) {
			if (r) {
				const e = r(t);
				if (e === ja) return null;
				c.setColor(e);
			}
			if ((i && c.setWidth(i(t)), s)) {
				const e = s(t);
				if ('butt' !== e && 'round' !== e && 'square' !== e) throw new Error('Expected butt, round, or square line cap');
				c.setLineCap(e);
			}
			if (o) {
				const e = o(t);
				if ('bevel' !== e && 'round' !== e && 'miter' !== e) throw new Error('Expected bevel, round, or miter line join');
				c.setLineJoin(e);
			}
			return a && c.setLineDash(a(t)), l && c.setLineDashOffset(l(t)), h && c.setMiterLimit(h(t)), c;
		};
	}
	function Ld(t, e, n) {
		if (!(e in t)) return;
		const i = Sd(t[e], su, n);
		return function (t) {
			return qd(i(t), e);
		};
	}
	function Ad(t, e, n) {
		if (!(e in t)) return null;
		const i = Sd(t[e], ou, n);
		return function (t) {
			return Xd(i(t), e);
		};
	}
	function Dd(t, e, n) {
		if (!(e in t)) return null;
		const i = Sd(t[e], ru, n);
		return function (t) {
			const n = i(t);
			if ('boolean' != typeof n) throw new Error(`Expected a boolean for ${e}`);
			return n;
		};
	}
	function Od(t, e, n) {
		if (!(e in t)) return null;
		const i = Sd(t[e], au, n);
		return function (t) {
			return Zd(i(t), e);
		};
	}
	function zd(t, e, n) {
		if (!(e in t)) return null;
		const i = Sd(t[e], lu, n);
		return function (t) {
			return Wd(i(t), e);
		};
	}
	function Gd(t, e, n) {
		if (!(e in t)) return null;
		const i = Sd(t[e], lu, n);
		return function (t) {
			const n = Wd(i(t), e);
			if (2 !== n.length) throw new Error(`Expected two numbers for ${e}`);
			return n;
		};
	}
	function jd(t, e, n) {
		if (!(e in t)) return null;
		const i = Sd(t[e], lu, n);
		return function (t) {
			return Kd(i(t), e);
		};
	}
	function Nd(t, e, n) {
		if (!(e in t)) return null;
		const i = Sd(t[e], lu | su, n);
		return function (t) {
			return (function (t, e) {
				if ('number' == typeof t) return t;
				return Kd(t, e);
			})(i(t), e);
		};
	}
	function Ud(t, e) {
		const n = t[e];
		if (void 0 !== n) {
			if ('number' != typeof n) throw new Error(`Expected a number for ${e}`);
			return n;
		}
	}
	function $d(t, e) {
		const n = t[e];
		if (void 0 !== n) {
			if ('bottom-left' !== n && 'bottom-right' !== n && 'top-left' !== n && 'top-right' !== n) throw new Error(`Expected bottom-left, bottom-right, top-left, or top-right for ${e}`);
			return n;
		}
	}
	function Bd(t, e) {
		const n = t[e];
		if (void 0 !== n) {
			if ('pixels' !== n && 'fraction' !== n) throw new Error(`Expected pixels or fraction for ${e}`);
			return n;
		}
	}
	function Vd(t, e) {
		const n = t[e];
		if (void 0 !== n) {
			if ('string' != typeof n) throw new Error(`Expected a string for ${e}`);
			if ('declutter' !== n && 'obstacle' !== n && 'none' !== n) throw new Error(`Expected declutter, obstacle, or none for ${e}`);
			return n;
		}
	}
	function Wd(t, e) {
		if (!Array.isArray(t)) throw new Error(`Expected an array for ${e}`);
		const n = t.length;
		for (let i = 0; i < n; ++i) if ('number' != typeof t[i]) throw new Error(`Expected an array of numbers for ${e}`);
		return t;
	}
	function Xd(t, e) {
		if ('string' != typeof t) throw new Error(`Expected a string for ${e}`);
		return t;
	}
	function qd(t, e) {
		if ('number' != typeof t) throw new Error(`Expected a number for ${e}`);
		return t;
	}
	function Zd(t, e) {
		if ('string' == typeof t) return t;
		const n = Wd(t, e),
			i = n.length;
		if (i < 3 || i > 4) throw new Error(`Expected a color with 3 or 4 values for ${e}`);
		return n;
	}
	function Kd(t, e) {
		const n = Wd(t, e);
		if (2 !== n.length) throw new Error(`Expected an array of two numbers for ${e}`);
		return n;
	}
	var Yd = { CENTER: 'center', RESOLUTION: 'resolution', ROTATION: 'rotation' };
	function Hd(t, e, n) {
		return function (i, r, s, o, a) {
			if (!i) return;
			if (!r && !e) return i;
			const l = e ? 0 : s[0] * r,
				h = e ? 0 : s[1] * r,
				c = a ? a[0] : 0,
				u = a ? a[1] : 0;
			let d = t[0] + l / 2 + c,
				g = t[2] - l / 2 + c,
				f = t[1] + h / 2 + u,
				p = t[3] - h / 2 + u;
			d > g && ((d = (g + d) / 2), (g = d)), f > p && ((f = (p + f) / 2), (p = f));
			let m = vr(i[0], d, g),
				_ = vr(i[1], f, p);
			if (o && n && r) {
				const t = 30 * r;
				(m += -t * Math.log(1 + Math.max(0, d - i[0]) / t) + t * Math.log(1 + Math.max(0, i[0] - g) / t)), (_ += -t * Math.log(1 + Math.max(0, f - i[1]) / t) + t * Math.log(1 + Math.max(0, i[1] - p) / t));
			}
			return [m, _];
		};
	}
	function Jd(t) {
		return t;
	}
	function Qd(t) {
		return Math.pow(t, 3);
	}
	function tg(t) {
		return 1 - Qd(1 - t);
	}
	function eg(t) {
		return 3 * t * t - 2 * t * t * t;
	}
	function ng(t) {
		return t;
	}
	function ig(t, e, n, i) {
		const r = lr(e) / n[0],
			s = rr(e) / n[1];
		return i ? Math.min(t, Math.max(r, s)) : Math.min(t, Math.min(r, s));
	}
	function rg(t, e, n) {
		let i = Math.min(t, e);
		return (i *= Math.log(1 + 50 * Math.max(0, t / e - 1)) / 50 + 1), n && ((i = Math.max(i, n)), (i /= Math.log(1 + 50 * Math.max(0, n / t - 1)) / 50 + 1)), vr(i, n / 2, 2 * e);
	}
	function sg(t, e, n, i, r) {
		return (
			(n = void 0 === n || n),
			function (s, o, a, l) {
				if (void 0 !== s) {
					const o = i ? ig(t, i, a, r) : t;
					return n && l ? rg(s, o, e) : vr(s, e, o);
				}
			}
		);
	}
	function og(t) {
		if (void 0 !== t) return 0;
	}
	function ag(t) {
		if (void 0 !== t) return t;
	}
	const lg = 256;
	class hg extends Si {
		constructor(t) {
			super(), this.on, this.once, this.un, (t = Object.assign({}, t)), (this.hints_ = [0, 0]), (this.animations_ = []), this.updateAnimationKey_, (this.projection_ = uo(t.projection, 'EPSG:3857')), (this.viewportSize_ = [100, 100]), (this.targetCenter_ = null), this.targetResolution_, this.targetRotation_, (this.nextCenter_ = null), this.nextResolution_, this.nextRotation_, (this.cancelAnchor_ = void 0), t.projection && io(), t.center && (t.center = Eo(t.center, this.projection_)), t.extent && (t.extent = Po(t.extent, this.projection_)), this.applyOptions_(t);
		}
		applyOptions_(t) {
			const e = Object.assign({}, t);
			for (const t in Yd) delete e[t];
			this.setProperties(e, !0);
			const n = (function (t) {
				let e, n, i;
				const r = 28,
					s = 2;
				let o = void 0 !== t.minZoom ? t.minZoom : 0,
					a = void 0 !== t.maxZoom ? t.maxZoom : r;
				const l = void 0 !== t.zoomFactor ? t.zoomFactor : s,
					h = void 0 !== t.multiWorld && t.multiWorld,
					c = void 0 === t.smoothResolutionConstraint || t.smoothResolutionConstraint,
					u = void 0 !== t.showFullExtent && t.showFullExtent,
					d = uo(t.projection, 'EPSG:3857'),
					g = d.getExtent();
				let f = t.constrainOnlyCenter,
					p = t.extent;
				h || p || !d.isGlobal() || ((f = !1), (p = g));
				if (void 0 !== t.resolutions) {
					const r = t.resolutions;
					(n = r[o]),
						(i = void 0 !== r[a] ? r[a] : r[r.length - 1]),
						(e = t.constrainResolution
							? (function (t, e, n, i) {
									return (
										(e = void 0 === e || e),
										function (r, s, o, a) {
											if (void 0 !== r) {
												const l = t[0],
													h = t[t.length - 1],
													c = n ? ig(l, n, o, i) : l;
												if (a) return e ? rg(r, c, h) : vr(r, h, c);
												const u = Math.min(c, r),
													d = Math.floor(jn(t, u, s));
												return t[d] > c && d < t.length - 1 ? t[d + 1] : t[d];
											}
										}
									);
							  })(r, c, !f && p, u)
							: sg(n, i, c, !f && p, u));
				} else {
					const h = (g ? Math.max(lr(g), rr(g)) : (360 * ss.degrees) / d.getMetersPerUnit()) / lg / Math.pow(s, 0),
						m = h / Math.pow(s, r - 0);
					(n = t.maxResolution),
						void 0 !== n ? (o = 0) : (n = h / Math.pow(l, o)),
						(i = t.minResolution),
						void 0 === i && (i = void 0 !== t.maxZoom ? (void 0 !== t.maxResolution ? n / Math.pow(l, a) : h / Math.pow(l, a)) : m),
						(a = o + Math.floor(Math.log(n / i) / Math.log(l))),
						(i = n / Math.pow(l, a - o)),
						(e = t.constrainResolution
							? (function (t, e, n, i, r, s) {
									return (
										(i = void 0 === i || i),
										(n = void 0 !== n ? n : 0),
										function (o, a, l, h) {
											if (void 0 !== o) {
												const c = r ? ig(e, r, l, s) : e;
												if (h) return i ? rg(o, c, n) : vr(o, n, c);
												const u = 1e-9,
													d = Math.ceil(Math.log(e / c) / Math.log(t) - u),
													g = -a * (0.5 - u) + 0.5,
													f = Math.min(c, o),
													p = Math.floor(Math.log(e / f) / Math.log(t) + g),
													m = Math.max(d, p);
												return vr(e / Math.pow(t, m), n, c);
											}
										}
									);
							  })(l, n, i, c, !f && p, u)
							: sg(n, i, c, !f && p, u));
				}
				return { constraint: e, maxResolution: n, minResolution: i, minZoom: o, zoomFactor: l };
			})(t);
			(this.maxResolution_ = n.maxResolution), (this.minResolution_ = n.minResolution), (this.zoomFactor_ = n.zoomFactor), (this.resolutions_ = t.resolutions), (this.padding_ = t.padding), (this.minZoom_ = n.minZoom);
			const i = (function (t) {
					if (void 0 !== t.extent) {
						const e = void 0 === t.smoothExtentConstraint || t.smoothExtentConstraint;
						return Hd(t.extent, t.constrainOnlyCenter, e);
					}
					const e = uo(t.projection, 'EPSG:3857');
					if (!0 !== t.multiWorld && e.isGlobal()) {
						const t = e.getExtent().slice();
						return (t[0] = -1 / 0), (t[2] = 1 / 0), Hd(t, !1, !1);
					}
					return Jd;
				})(t),
				r = n.constraint,
				s = (function (t) {
					const e = void 0 === t.enableRotation || t.enableRotation;
					if (e) {
						const e = t.constrainRotation;
						return void 0 === e || !0 === e
							? (function () {
									const t = Cr(5);
									return function (e, n) {
										return n || void 0 === e ? e : Math.abs(e) <= t ? 0 : e;
									};
							  })()
							: !1 === e
							? ag
							: 'number' == typeof e
							? (function (t) {
									const e = (2 * Math.PI) / t;
									return function (t, n) {
										return n ? t : void 0 !== t ? (t = Math.floor(t / e + 0.5) * e) : void 0;
									};
							  })(e)
							: ag;
					}
					return og;
				})(t);
			(this.constraints_ = { center: i, resolution: r, rotation: s }), this.setRotation(void 0 !== t.rotation ? t.rotation : 0), this.setCenterInternal(void 0 !== t.center ? t.center : null), void 0 !== t.resolution ? this.setResolution(t.resolution) : void 0 !== t.zoom && this.setZoom(t.zoom);
		}
		get padding() {
			return this.padding_;
		}
		set padding(t) {
			let e = this.padding_;
			this.padding_ = t;
			const n = this.getCenterInternal();
			if (n) {
				const i = t || [0, 0, 0, 0];
				e = e || [0, 0, 0, 0];
				const r = this.getResolution(),
					s = (r / 2) * (i[3] - e[3] + e[1] - i[1]),
					o = (r / 2) * (i[0] - e[0] + e[2] - i[2]);
				this.setCenterInternal([n[0] + s, n[1] - o]);
			}
		}
		getUpdatedOptions_(t) {
			const e = this.getProperties();
			return void 0 !== e.resolution ? (e.resolution = this.getResolution()) : (e.zoom = this.getZoom()), (e.center = this.getCenterInternal()), (e.rotation = this.getRotation()), Object.assign({}, e, t);
		}
		animate(t) {
			this.isDef() && !this.getAnimating() && this.resolveConstraints(0);
			const e = new Array(arguments.length);
			for (let t = 0; t < e.length; ++t) {
				let n = arguments[t];
				n.center && ((n = Object.assign({}, n)), (n.center = Eo(n.center, this.getProjection()))), n.anchor && ((n = Object.assign({}, n)), (n.anchor = Eo(n.anchor, this.getProjection()))), (e[t] = n);
			}
			this.animateInternal.apply(this, e);
		}
		animateInternal(t) {
			let e,
				n = arguments.length;
			n > 1 && 'function' == typeof arguments[n - 1] && ((e = arguments[n - 1]), --n);
			let i = 0;
			for (; i < n && !this.isDef(); ++i) {
				const t = arguments[i];
				t.center && this.setCenterInternal(t.center), void 0 !== t.zoom ? this.setZoom(t.zoom) : t.resolution && this.setResolution(t.resolution), void 0 !== t.rotation && this.setRotation(t.rotation);
			}
			if (i === n) return void (e && cg(e, !0));
			let r = Date.now(),
				s = this.targetCenter_.slice(),
				o = this.targetResolution_,
				a = this.targetRotation_;
			const l = [];
			for (; i < n; ++i) {
				const t = arguments[i],
					n = { start: r, complete: !1, anchor: t.anchor, duration: void 0 !== t.duration ? t.duration : 1e3, easing: t.easing || eg, callback: e };
				if ((t.center && ((n.sourceCenter = s), (n.targetCenter = t.center.slice()), (s = n.targetCenter)), void 0 !== t.zoom ? ((n.sourceResolution = o), (n.targetResolution = this.getResolutionForZoom(t.zoom)), (o = n.targetResolution)) : t.resolution && ((n.sourceResolution = o), (n.targetResolution = t.resolution), (o = n.targetResolution)), void 0 !== t.rotation)) {
					n.sourceRotation = a;
					const e = Er(t.rotation - a + Math.PI, 2 * Math.PI) - Math.PI;
					(n.targetRotation = a + e), (a = n.targetRotation);
				}
				ug(n) ? (n.complete = !0) : (r += n.duration), l.push(n);
			}
			this.animations_.push(l), this.setHint(sc, 1), this.updateAnimations_();
		}
		getAnimating() {
			return this.hints_[sc] > 0;
		}
		getInteracting() {
			return this.hints_[oc] > 0;
		}
		cancelAnimations() {
			let t;
			this.setHint(sc, -this.hints_[sc]);
			for (let e = 0, n = this.animations_.length; e < n; ++e) {
				const n = this.animations_[e];
				if ((n[0].callback && cg(n[0].callback, !1), !t))
					for (let e = 0, i = n.length; e < i; ++e) {
						const i = n[e];
						if (!i.complete) {
							t = i.anchor;
							break;
						}
					}
			}
			(this.animations_.length = 0), (this.cancelAnchor_ = t), (this.nextCenter_ = null), (this.nextResolution_ = NaN), (this.nextRotation_ = NaN);
		}
		updateAnimations_() {
			if ((void 0 !== this.updateAnimationKey_ && (cancelAnimationFrame(this.updateAnimationKey_), (this.updateAnimationKey_ = void 0)), !this.getAnimating())) return;
			const t = Date.now();
			let e = !1;
			for (let n = this.animations_.length - 1; n >= 0; --n) {
				const i = this.animations_[n];
				let r = !0;
				for (let n = 0, s = i.length; n < s; ++n) {
					const s = i[n];
					if (s.complete) continue;
					const o = t - s.start;
					let a = s.duration > 0 ? o / s.duration : 1;
					a >= 1 ? ((s.complete = !0), (a = 1)) : (r = !1);
					const l = s.easing(a);
					if (s.sourceCenter) {
						const t = s.sourceCenter[0],
							e = s.sourceCenter[1],
							n = s.targetCenter[0],
							i = s.targetCenter[1];
						this.nextCenter_ = s.targetCenter;
						const r = t + l * (n - t),
							o = e + l * (i - e);
						this.targetCenter_ = [r, o];
					}
					if (s.sourceResolution && s.targetResolution) {
						const t = 1 === l ? s.targetResolution : s.sourceResolution + l * (s.targetResolution - s.sourceResolution);
						if (s.anchor) {
							const e = this.getViewportSize_(this.getRotation()),
								n = this.constraints_.resolution(t, 0, e, !0);
							this.targetCenter_ = this.calculateCenterZoom(n, s.anchor);
						}
						(this.nextResolution_ = s.targetResolution), (this.targetResolution_ = t), this.applyTargetState_(!0);
					}
					if (void 0 !== s.sourceRotation && void 0 !== s.targetRotation) {
						const t = 1 === l ? Er(s.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : s.sourceRotation + l * (s.targetRotation - s.sourceRotation);
						if (s.anchor) {
							const e = this.constraints_.rotation(t, !0);
							this.targetCenter_ = this.calculateCenterRotate(e, s.anchor);
						}
						(this.nextRotation_ = s.targetRotation), (this.targetRotation_ = t);
					}
					if ((this.applyTargetState_(!0), (e = !0), !s.complete)) break;
				}
				if (r) {
					(this.animations_[n] = null), this.setHint(sc, -1), (this.nextCenter_ = null), (this.nextResolution_ = NaN), (this.nextRotation_ = NaN);
					const t = i[0].callback;
					t && cg(t, !0);
				}
			}
			(this.animations_ = this.animations_.filter(Boolean)), e && void 0 === this.updateAnimationKey_ && (this.updateAnimationKey_ = requestAnimationFrame(this.updateAnimations_.bind(this)));
		}
		calculateCenterRotate(t, e) {
			let n;
			const i = this.getCenterInternal();
			var r, s;
			return void 0 !== i && ((n = [i[0] - e[0], i[1] - e[1]]), Qr(n, t - this.getRotation()), (s = e), ((r = n)[0] += +s[0]), (r[1] += +s[1])), n;
		}
		calculateCenterZoom(t, e) {
			let n;
			const i = this.getCenterInternal(),
				r = this.getResolution();
			if (void 0 !== i && void 0 !== r) {
				n = [e[0] - (t * (e[0] - i[0])) / r, e[1] - (t * (e[1] - i[1])) / r];
			}
			return n;
		}
		getViewportSize_(t) {
			const e = this.viewportSize_;
			if (t) {
				const n = e[0],
					i = e[1];
				return [Math.abs(n * Math.cos(t)) + Math.abs(i * Math.sin(t)), Math.abs(n * Math.sin(t)) + Math.abs(i * Math.cos(t))];
			}
			return e;
		}
		setViewportSize(t) {
			(this.viewportSize_ = Array.isArray(t) ? t.slice() : [100, 100]), this.getAnimating() || this.resolveConstraints(0);
		}
		getCenter() {
			const t = this.getCenterInternal();
			return t ? Co(t, this.getProjection()) : t;
		}
		getCenterInternal() {
			return this.get(Yd.CENTER);
		}
		getConstraints() {
			return this.constraints_;
		}
		getConstrainResolution() {
			return this.get('constrainResolution');
		}
		getHints(t) {
			return void 0 !== t ? ((t[0] = this.hints_[0]), (t[1] = this.hints_[1]), t) : this.hints_.slice();
		}
		calculateExtent(t) {
			return To(this.calculateExtentInternal(t), this.getProjection());
		}
		calculateExtentInternal(t) {
			t = t || this.getViewportSizeMinusPadding_();
			const e = this.getCenterInternal();
			Ci(e, 'The view center is not defined');
			const n = this.getResolution();
			Ci(void 0 !== n, 'The view resolution is not defined');
			const i = this.getRotation();
			return Ci(void 0 !== i, 'The view rotation is not defined'), nr(e, n, i, t);
		}
		getMaxResolution() {
			return this.maxResolution_;
		}
		getMinResolution() {
			return this.minResolution_;
		}
		getMaxZoom() {
			return this.getZoomForResolution(this.minResolution_);
		}
		setMaxZoom(t) {
			this.applyOptions_(this.getUpdatedOptions_({ maxZoom: t }));
		}
		getMinZoom() {
			return this.getZoomForResolution(this.maxResolution_);
		}
		setMinZoom(t) {
			this.applyOptions_(this.getUpdatedOptions_({ minZoom: t }));
		}
		setConstrainResolution(t) {
			this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: t }));
		}
		getProjection() {
			return this.projection_;
		}
		getResolution() {
			return this.get(Yd.RESOLUTION);
		}
		getResolutions() {
			return this.resolutions_;
		}
		getResolutionForExtent(t, e) {
			return this.getResolutionForExtentInternal(Po(t, this.getProjection()), e);
		}
		getResolutionForExtentInternal(t, e) {
			e = e || this.getViewportSizeMinusPadding_();
			const n = lr(t) / e[0],
				i = rr(t) / e[1];
			return Math.max(n, i);
		}
		getResolutionForValueFunction(t) {
			t = t || 2;
			const e = this.getConstrainedResolution(this.maxResolution_),
				n = this.minResolution_,
				i = Math.log(e / n) / Math.log(t);
			return function (n) {
				return e / Math.pow(t, n * i);
			};
		}
		getRotation() {
			return this.get(Yd.ROTATION);
		}
		getValueForResolutionFunction(t) {
			const e = Math.log(t || 2),
				n = this.getConstrainedResolution(this.maxResolution_),
				i = this.minResolution_,
				r = Math.log(n / i) / e;
			return function (t) {
				return Math.log(n / t) / e / r;
			};
		}
		getViewportSizeMinusPadding_(t) {
			let e = this.getViewportSize_(t);
			const n = this.padding_;
			return n && (e = [e[0] - n[1] - n[3], e[1] - n[0] - n[2]]), e;
		}
		getState() {
			const t = this.getProjection(),
				e = this.getResolution(),
				n = this.getRotation();
			let i = this.getCenterInternal();
			const r = this.padding_;
			if (r) {
				const t = this.getViewportSizeMinusPadding_();
				i = dg(i, this.getViewportSize_(), [t[0] / 2 + r[3], t[1] / 2 + r[0]], e, n);
			}
			return { center: i.slice(0), projection: void 0 !== t ? t : null, resolution: e, nextCenter: this.nextCenter_, nextResolution: this.nextResolution_, nextRotation: this.nextRotation_, rotation: n, zoom: this.getZoom() };
		}
		getViewStateAndExtent() {
			return { viewState: this.getState(), extent: this.calculateExtent() };
		}
		getZoom() {
			let t;
			const e = this.getResolution();
			return void 0 !== e && (t = this.getZoomForResolution(e)), t;
		}
		getZoomForResolution(t) {
			let e,
				n,
				i = this.minZoom_ || 0;
			if (this.resolutions_) {
				const r = jn(this.resolutions_, t, 1);
				(i = r), (e = this.resolutions_[r]), (n = r == this.resolutions_.length - 1 ? 2 : e / this.resolutions_[r + 1]);
			} else (e = this.maxResolution_), (n = this.zoomFactor_);
			return i + Math.log(e / t) / Math.log(n);
		}
		getResolutionForZoom(t) {
			if (this.resolutions_?.length) {
				if (1 === this.resolutions_.length) return this.resolutions_[0];
				const e = vr(Math.floor(t), 0, this.resolutions_.length - 2),
					n = this.resolutions_[e] / this.resolutions_[e + 1];
				return this.resolutions_[e] / Math.pow(n, vr(t - e, 0, 1));
			}
			return this.maxResolution_ / Math.pow(this.zoomFactor_, t - this.minZoom_);
		}
		fit(t, e) {
			let n;
			if ((Ci(Array.isArray(t) || 'function' == typeof t.getSimplifiedGeometry, 'Invalid extent or geometry provided as `geometry`'), Array.isArray(t))) {
				Ci(!cr(t), 'Cannot fit empty extent provided as `geometry`');
				n = wa(Po(t, this.getProjection()));
			} else if ('Circle' === t.getType()) {
				const e = Po(t.getExtent(), this.getProjection());
				(n = wa(e)), n.rotate(this.getRotation(), tr(e));
			} else {
				const e = So();
				n = e ? t.clone().transform(e, this.getProjection()) : t;
			}
			this.fitInternal(n, e);
		}
		rotatedExtentForGeometry(t) {
			const e = this.getRotation(),
				n = Math.cos(e),
				i = Math.sin(-e),
				r = t.getFlatCoordinates(),
				s = t.getStride();
			let o = 1 / 0,
				a = 1 / 0,
				l = -1 / 0,
				h = -1 / 0;
			for (let t = 0, e = r.length; t < e; t += s) {
				const e = r[t] * n - r[t + 1] * i,
					s = r[t] * i + r[t + 1] * n;
				(o = Math.min(o, e)), (a = Math.min(a, s)), (l = Math.max(l, e)), (h = Math.max(h, s));
			}
			return [o, a, l, h];
		}
		fitInternal(t, e) {
			let n = (e = e || {}).size;
			n || (n = this.getViewportSizeMinusPadding_());
			const i = void 0 !== e.padding ? e.padding : [0, 0, 0, 0],
				r = void 0 !== e.nearest && e.nearest;
			let s;
			s = void 0 !== e.minResolution ? e.minResolution : void 0 !== e.maxZoom ? this.getResolutionForZoom(e.maxZoom) : 0;
			const o = this.rotatedExtentForGeometry(t);
			let a = this.getResolutionForExtentInternal(o, [n[0] - i[1] - i[3], n[1] - i[0] - i[2]]);
			(a = isNaN(a) ? s : Math.max(a, s)), (a = this.getConstrainedResolution(a, r ? 0 : 1));
			const l = this.getRotation(),
				h = Math.sin(l),
				c = Math.cos(l),
				u = tr(o);
			(u[0] += ((i[1] - i[3]) / 2) * a), (u[1] += ((i[0] - i[2]) / 2) * a);
			const d = u[0] * c - u[1] * h,
				g = u[1] * c + u[0] * h,
				f = this.getConstrainedCenter([d, g], a),
				p = e.callback ? e.callback : Wn;
			void 0 !== e.duration ? this.animateInternal({ resolution: a, center: f, duration: e.duration, easing: e.easing }, p) : ((this.targetResolution_ = a), (this.targetCenter_ = f), this.applyTargetState_(!1, !0), cg(p, !0));
		}
		centerOn(t, e, n) {
			this.centerOnInternal(Eo(t, this.getProjection()), e, n);
		}
		centerOnInternal(t, e, n) {
			this.setCenterInternal(dg(t, e, n, this.getResolution(), this.getRotation()));
		}
		calculateCenterShift(t, e, n, i) {
			let r;
			const s = this.padding_;
			if (s && t) {
				const o = this.getViewportSizeMinusPadding_(-n),
					a = dg(t, i, [o[0] / 2 + s[3], o[1] / 2 + s[0]], e, n);
				r = [t[0] - a[0], t[1] - a[1]];
			}
			return r;
		}
		isDef() {
			return !!this.getCenterInternal() && void 0 !== this.getResolution();
		}
		adjustCenter(t) {
			const e = Co(this.targetCenter_, this.getProjection());
			this.setCenter([e[0] + t[0], e[1] + t[1]]);
		}
		adjustCenterInternal(t) {
			const e = this.targetCenter_;
			this.setCenterInternal([e[0] + t[0], e[1] + t[1]]);
		}
		adjustResolution(t, e) {
			(e = e && Eo(e, this.getProjection())), this.adjustResolutionInternal(t, e);
		}
		adjustResolutionInternal(t, e) {
			const n = this.getAnimating() || this.getInteracting(),
				i = this.getViewportSize_(this.getRotation()),
				r = this.constraints_.resolution(this.targetResolution_ * t, 0, i, n);
			e && (this.targetCenter_ = this.calculateCenterZoom(r, e)), (this.targetResolution_ *= t), this.applyTargetState_();
		}
		adjustZoom(t, e) {
			this.adjustResolution(Math.pow(this.zoomFactor_, -t), e);
		}
		adjustRotation(t, e) {
			e && (e = Eo(e, this.getProjection())), this.adjustRotationInternal(t, e);
		}
		adjustRotationInternal(t, e) {
			const n = this.getAnimating() || this.getInteracting(),
				i = this.constraints_.rotation(this.targetRotation_ + t, n);
			e && (this.targetCenter_ = this.calculateCenterRotate(i, e)), (this.targetRotation_ += t), this.applyTargetState_();
		}
		setCenter(t) {
			this.setCenterInternal(t ? Eo(t, this.getProjection()) : t);
		}
		setCenterInternal(t) {
			(this.targetCenter_ = t), this.applyTargetState_();
		}
		setHint(t, e) {
			return (this.hints_[t] += e), this.changed(), this.hints_[t];
		}
		setResolution(t) {
			(this.targetResolution_ = t), this.applyTargetState_();
		}
		setRotation(t) {
			(this.targetRotation_ = t), this.applyTargetState_();
		}
		setZoom(t) {
			this.setResolution(this.getResolutionForZoom(t));
		}
		applyTargetState_(t, e) {
			const n = this.getAnimating() || this.getInteracting() || e,
				i = this.constraints_.rotation(this.targetRotation_, n),
				r = this.getViewportSize_(i),
				s = this.constraints_.resolution(this.targetResolution_, 0, r, n),
				o = this.constraints_.center(this.targetCenter_, s, r, n, this.calculateCenterShift(this.targetCenter_, s, i, r));
			this.get(Yd.ROTATION) !== i && this.set(Yd.ROTATION, i), this.get(Yd.RESOLUTION) !== s && (this.set(Yd.RESOLUTION, s), this.set('zoom', this.getZoom(), !0)), (o && this.get(Yd.CENTER) && Jr(this.get(Yd.CENTER), o)) || this.set(Yd.CENTER, o), this.getAnimating() && !t && this.cancelAnimations(), (this.cancelAnchor_ = void 0);
		}
		resolveConstraints(t, e, n) {
			t = void 0 !== t ? t : 200;
			const i = e || 0,
				r = this.constraints_.rotation(this.targetRotation_),
				s = this.getViewportSize_(r),
				o = this.constraints_.resolution(this.targetResolution_, i, s),
				a = this.constraints_.center(this.targetCenter_, o, s, !1, this.calculateCenterShift(this.targetCenter_, o, r, s));
			if (0 === t && !this.cancelAnchor_) return (this.targetResolution_ = o), (this.targetRotation_ = r), (this.targetCenter_ = a), void this.applyTargetState_();
			(n = n || (0 === t ? this.cancelAnchor_ : void 0)), (this.cancelAnchor_ = void 0), (this.getResolution() === o && this.getRotation() === r && this.getCenterInternal() && Jr(this.getCenterInternal(), a)) || (this.getAnimating() && this.cancelAnimations(), this.animateInternal({ rotation: r, center: a, resolution: o, duration: t, easing: tg, anchor: n }));
		}
		beginInteraction() {
			this.resolveConstraints(0), this.setHint(oc, 1);
		}
		endInteraction(t, e, n) {
			(n = n && Eo(n, this.getProjection())), this.endInteractionInternal(t, e, n);
		}
		endInteractionInternal(t, e, n) {
			this.getInteracting() && (this.setHint(oc, -1), this.resolveConstraints(t, e, n));
		}
		getConstrainedCenter(t, e) {
			const n = this.getViewportSize_(this.getRotation());
			return this.constraints_.center(t, e || this.getResolution(), n);
		}
		getConstrainedZoom(t, e) {
			const n = this.getResolutionForZoom(t);
			return this.getZoomForResolution(this.getConstrainedResolution(n, e));
		}
		getConstrainedResolution(t, e) {
			e = e || 0;
			const n = this.getViewportSize_(this.getRotation());
			return this.constraints_.resolution(t, e, n);
		}
	}
	function cg(t, e) {
		setTimeout(function () {
			t(e);
		}, 0);
	}
	function ug(t) {
		return !(t.sourceCenter && t.targetCenter && !Jr(t.sourceCenter, t.targetCenter)) && t.sourceResolution === t.targetResolution && t.sourceRotation === t.targetRotation;
	}
	function dg(t, e, n, i, r) {
		const s = Math.cos(-r);
		let o = Math.sin(-r),
			a = t[0] * s - t[1] * o,
			l = t[1] * s + t[0] * o;
		(a += (e[0] / 2 - n[0]) * i), (l += (n[1] - e[1] / 2) * i), (o = -o);
		return [a * s - l * o, l * s + a * o];
	}
	var gg = 'opacity',
		fg = 'visible',
		pg = 'extent',
		mg = 'zIndex',
		_g = 'maxResolution',
		yg = 'minResolution',
		xg = 'maxZoom',
		vg = 'minZoom',
		wg = 'source',
		bg = 'map';
	class Sg extends Si {
		constructor(t) {
			super(), this.on, this.once, this.un, (this.background_ = t.background);
			const e = Object.assign({}, t);
			'object' == typeof t.properties && (delete e.properties, Object.assign(e, t.properties)), (e[gg] = void 0 !== t.opacity ? t.opacity : 1), Ci('number' == typeof e[gg], 'Layer opacity must be a number'), (e[fg] = void 0 === t.visible || t.visible), (e[mg] = t.zIndex), (e[_g] = void 0 !== t.maxResolution ? t.maxResolution : 1 / 0), (e[yg] = void 0 !== t.minResolution ? t.minResolution : 0), (e[vg] = void 0 !== t.minZoom ? t.minZoom : -1 / 0), (e[xg] = void 0 !== t.maxZoom ? t.maxZoom : 1 / 0), (this.className_ = void 0 !== e.className ? e.className : 'ol-layer'), delete e.className, this.setProperties(e), (this.state_ = null);
		}
		getBackground() {
			return this.background_;
		}
		getClassName() {
			return this.className_;
		}
		getLayerState(t) {
			const e = this.state_ || { layer: this, managed: void 0 === t || t },
				n = this.getZIndex();
			return (e.opacity = vr(Math.round(100 * this.getOpacity()) / 100, 0, 1)), (e.visible = this.getVisible()), (e.extent = this.getExtent()), (e.zIndex = void 0 !== n || e.managed ? n : 1 / 0), (e.maxResolution = this.getMaxResolution()), (e.minResolution = Math.max(this.getMinResolution(), 0)), (e.minZoom = this.getMinZoom()), (e.maxZoom = this.getMaxZoom()), (this.state_ = e), e;
		}
		getLayersArray(t) {
			return xi();
		}
		getLayerStatesArray(t) {
			return xi();
		}
		getExtent() {
			return this.get(pg);
		}
		getMaxResolution() {
			return this.get(_g);
		}
		getMinResolution() {
			return this.get(yg);
		}
		getMinZoom() {
			return this.get(vg);
		}
		getMaxZoom() {
			return this.get(xg);
		}
		getOpacity() {
			return this.get(gg);
		}
		getSourceState() {
			return xi();
		}
		getVisible() {
			return this.get(fg);
		}
		getZIndex() {
			return this.get(mg);
		}
		setBackground(t) {
			(this.background_ = t), this.changed();
		}
		setExtent(t) {
			this.set(pg, t);
		}
		setMaxResolution(t) {
			this.set(_g, t);
		}
		setMinResolution(t) {
			this.set(yg, t);
		}
		setMaxZoom(t) {
			this.set(xg, t);
		}
		setMinZoom(t) {
			this.set(vg, t);
		}
		setOpacity(t) {
			Ci('number' == typeof t, 'Layer opacity must be a number'), this.set(gg, t);
		}
		setVisible(t) {
			this.set(fg, t);
		}
		setZIndex(t) {
			this.set(mg, t);
		}
		disposeInternal() {
			this.state_ && ((this.state_.layer = null), (this.state_ = null)), super.disposeInternal();
		}
	}
	class Cg extends Sg {
		constructor(t) {
			const e = Object.assign({}, t);
			delete e.source, super(e), this.on, this.once, this.un, (this.mapPrecomposeKey_ = null), (this.mapRenderKey_ = null), (this.sourceChangeKey_ = null), (this.renderer_ = null), (this.sourceReady_ = !1), (this.rendered = !1), t.render && (this.render = t.render), t.map && this.setMap(t.map), this.addChangeListener(wg, this.handleSourcePropertyChange_);
			const n = t.source ? t.source : null;
			this.setSource(n);
		}
		getLayersArray(t) {
			return (t = t || []).push(this), t;
		}
		getLayerStatesArray(t) {
			return (t = t || []).push(this.getLayerState()), t;
		}
		getSource() {
			return this.get(wg) || null;
		}
		getRenderSource() {
			return this.getSource();
		}
		getSourceState() {
			const t = this.getSource();
			return t ? t.getState() : 'undefined';
		}
		handleSourceChange_() {
			this.changed(), this.sourceReady_ || 'ready' !== this.getSource().getState() || ((this.sourceReady_ = !0), this.dispatchEvent('sourceready'));
		}
		handleSourcePropertyChange_() {
			this.sourceChangeKey_ && (pi(this.sourceChangeKey_), (this.sourceChangeKey_ = null)), (this.sourceReady_ = !1);
			const t = this.getSource();
			t &&
				((this.sourceChangeKey_ = gi(t, Kn, this.handleSourceChange_, this)),
				'ready' === t.getState() &&
					((this.sourceReady_ = !0),
					setTimeout(() => {
						this.dispatchEvent('sourceready');
					}, 0)),
				this.clearRenderer()),
				this.changed();
		}
		getFeatures(t) {
			return this.renderer_ ? this.renderer_.getFeatures(t) : Promise.resolve([]);
		}
		getData(t) {
			return this.renderer_ && this.rendered ? this.renderer_.getData(t) : null;
		}
		isVisible(t) {
			let e;
			const n = this.getMapInternal();
			let i;
			if ((!t && n && (t = n.getView()), (e = t instanceof hg ? { viewState: t.getState(), extent: t.calculateExtent() } : t), !e.layerStatesArray && n && (e.layerStatesArray = n.getLayerGroup().getLayerStatesArray()), e.layerStatesArray)) {
				if (((i = e.layerStatesArray.find((t) => t.layer === this)), !i)) return !1;
			} else i = this.getLayerState();
			const r = this.getExtent();
			return Eg(i, e.viewState) && (!r || hr(r, e.extent));
		}
		getAttributions(t) {
			if (!this.isVisible(t)) return [];
			const e = this.getSource()?.getAttributions();
			if (!e) return [];
			let n = e(t instanceof hg ? t.getViewStateAndExtent() : t);
			return Array.isArray(n) || (n = [n]), n;
		}
		render(t, e) {
			const n = this.getRenderer();
			return n.prepareFrame(t) ? ((this.rendered = !0), n.renderFrame(t, e)) : null;
		}
		unrender() {
			this.rendered = !1;
		}
		getDeclutter() {}
		renderDeclutter(t, e) {}
		renderDeferred(t) {
			const e = this.getRenderer();
			e && e.renderDeferred(t);
		}
		setMapInternal(t) {
			t || this.unrender(), this.set(bg, t);
		}
		getMapInternal() {
			return this.get(bg);
		}
		setMap(t) {
			this.mapPrecomposeKey_ && (pi(this.mapPrecomposeKey_), (this.mapPrecomposeKey_ = null)), t || this.changed(), this.mapRenderKey_ && (pi(this.mapRenderKey_), (this.mapRenderKey_ = null)), t && ((this.mapPrecomposeKey_ = gi(t, ph, this.handlePrecompose_, this)), (this.mapRenderKey_ = gi(this, Kn, t.render, t)), this.changed());
		}
		handlePrecompose_(t) {
			const e = t.frameState.layerStatesArray,
				n = this.getLayerState(!1);
			Ci(!e.some((t) => t.layer === n.layer), 'A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both.'), e.push(n);
		}
		setSource(t) {
			this.set(wg, t);
		}
		getRenderer() {
			return this.renderer_ || (this.renderer_ = this.createRenderer()), this.renderer_;
		}
		hasRenderer() {
			return !!this.renderer_;
		}
		createRenderer() {
			return null;
		}
		clearRenderer() {
			this.renderer_ && (this.renderer_.dispose(), delete this.renderer_);
		}
		disposeInternal() {
			this.clearRenderer(), this.setSource(null), super.disposeInternal();
		}
	}
	function Eg(t, e) {
		if (!t.visible) return !1;
		const n = e.resolution;
		if (n < t.minResolution || n >= t.maxResolution) return !1;
		const i = e.zoom;
		return i > t.minZoom && i <= t.maxZoom;
	}
	const Tg = 'renderOrder';
	class Pg extends Cg {
		constructor(t) {
			t = t || {};
			const e = Object.assign({}, t);
			delete e.style, delete e.renderBuffer, delete e.updateWhileAnimating, delete e.updateWhileInteracting, super(e), (this.declutter_ = t.declutter ? String(t.declutter) : void 0), (this.renderBuffer_ = void 0 !== t.renderBuffer ? t.renderBuffer : 100), (this.style_ = null), (this.styleFunction_ = void 0), this.setStyle(t.style), (this.updateWhileAnimating_ = void 0 !== t.updateWhileAnimating && t.updateWhileAnimating), (this.updateWhileInteracting_ = void 0 !== t.updateWhileInteracting && t.updateWhileInteracting);
		}
		getDeclutter() {
			return this.declutter_;
		}
		getFeatures(t) {
			return super.getFeatures(t);
		}
		getRenderBuffer() {
			return this.renderBuffer_;
		}
		getRenderOrder() {
			return this.get(Tg);
		}
		getStyle() {
			return this.style_;
		}
		getStyleFunction() {
			return this.styleFunction_;
		}
		getUpdateWhileAnimating() {
			return this.updateWhileAnimating_;
		}
		getUpdateWhileInteracting() {
			return this.updateWhileInteracting_;
		}
		renderDeclutter(t, e) {
			const n = this.getDeclutter();
			n in t.declutter == !1 && (t.declutter[n] = new Lh(9)), this.getRenderer().renderDeclutter(t, e);
		}
		setRenderOrder(t) {
			this.set(Tg, t);
		}
		setStyle(t) {
			this.style_ = void 0 === t ? rh : t;
			const e = (function (t) {
				if (void 0 === t) return rh;
				if (!t) return null;
				if ('function' == typeof t) return t;
				if (t instanceof nh) return t;
				if (!Array.isArray(t)) return Fd([t]);
				if (0 === t.length) return [];
				const e = t.length,
					n = t[0];
				if (n instanceof nh) {
					const n = new Array(e);
					for (let i = 0; i < e; ++i) {
						const e = t[i];
						if (!(e instanceof nh)) throw new Error('Expected a list of style instances');
						n[i] = e;
					}
					return n;
				}
				if ('style' in n) {
					const n = new Array(e);
					for (let i = 0; i < e; ++i) {
						const e = t[i];
						if (!('style' in e)) throw new Error('Expected a list of rules with a style property');
						n[i] = e;
					}
					return Rd(n);
				}
				const i = t;
				return Fd(i);
			})(t);
			(this.styleFunction_ =
				null === t
					? void 0
					: (function (t) {
							let e;
							if ('function' == typeof t) e = t;
							else {
								let n;
								Array.isArray(t) ? (n = t) : (Ci('function' == typeof t.getZIndex, 'Expected an `Style` or an array of `Style`'), (n = [t])),
									(e = function () {
										return n;
									});
							}
							return e;
					  })(e)),
				this.changed();
		}
		setDeclutter(t) {
			(this.declutter_ = t ? String(t) : void 0), this.changed();
		}
	}
	class Rg extends Pg {
		constructor(t) {
			super(t);
		}
		createRenderer() {
			return new nu(this);
		}
	}
	class Fg extends dl {
		constructor(t, e, n, i, r) {
			super(t, e, n, void 0 !== r ? Ta : Ra), (this.loader_ = void 0 !== r ? r : null), (this.canvas_ = i), (this.error_ = null);
		}
		getError() {
			return this.error_;
		}
		handleLoad_(t) {
			t ? ((this.error_ = t), (this.state = Fa)) : (this.state = Ra), this.changed();
		}
		load() {
			this.state == Ta && ((this.state = Pa), this.changed(), this.loader_(this.handleLoad_.bind(this)));
		}
		getImage() {
			return this.canvas_;
		}
	}
	var Mg = 0,
		Ig = 1,
		kg = 2,
		Lg = 3,
		Ag = 4;
	class Dg extends di {
		constructor(t, e, n) {
			super(), (n = n || {}), (this.tileCoord = t), (this.state = e), (this.key = ''), (this.transition_ = void 0 === n.transition ? 250 : n.transition), (this.transitionStarts_ = {}), (this.interpolate = !!n.interpolate);
		}
		changed() {
			this.dispatchEvent(Kn);
		}
		release() {
			this.setState(Ag);
		}
		getKey() {
			return this.key + '/' + this.tileCoord;
		}
		getTileCoord() {
			return this.tileCoord;
		}
		getState() {
			return this.state;
		}
		setState(t) {
			if (this.state !== Ag) {
				if (this.state !== Lg && this.state > t) throw new Error('Tile load sequence violation');
				(this.state = t), this.changed();
			}
		}
		load() {
			xi();
		}
		getAlpha(t, e) {
			if (!this.transition_) return 1;
			let n = this.transitionStarts_[t];
			if (n) {
				if (-1 === n) return 1;
			} else (n = e), (this.transitionStarts_[t] = n);
			const i = e - n + 1e3 / 60;
			return i >= this.transition_ ? 1 : Qd(i / this.transition_);
		}
		inTransition(t) {
			return !!this.transition_ && -1 !== this.transitionStarts_[t];
		}
		endTransition(t) {
			this.transition_ && (this.transitionStarts_[t] = -1);
		}
		disposeInternal() {
			this.release(), super.disposeInternal();
		}
	}
	class Og extends Dg {
		constructor(t, e, n, i, r, s) {
			super(t, e, s), (this.crossOrigin_ = i), (this.src_ = n), (this.key = n), (this.image_ = new Image()), null !== i && (this.image_.crossOrigin = i), (this.unlisten_ = null), (this.tileLoadFunction_ = r);
		}
		getImage() {
			return this.image_;
		}
		setImage(t) {
			(this.image_ = t), (this.state = kg), this.unlistenImage_(), this.changed();
		}
		handleImageError_() {
			(this.state = Lg),
				this.unlistenImage_(),
				(this.image_ = (function () {
					const t = rl(1, 1);
					return (t.fillStyle = 'rgba(0,0,0,0)'), t.fillRect(0, 0, 1, 1), t.canvas;
				})()),
				this.changed();
		}
		handleImageLoad_() {
			const t = this.image_;
			t.naturalWidth && t.naturalHeight ? (this.state = kg) : (this.state = Ag), this.unlistenImage_(), this.changed();
		}
		load() {
			this.state == Lg && ((this.state = Mg), (this.image_ = new Image()), null !== this.crossOrigin_ && (this.image_.crossOrigin = this.crossOrigin_)),
				this.state == Mg &&
					((this.state = Ig),
					this.changed(),
					this.tileLoadFunction_(this, this.src_),
					(this.unlisten_ = (function (t, e, n) {
						const i = t;
						let r = !0,
							s = !1,
							o = !1;
						const a = [
							fi(i, si, function () {
								(o = !0), s || e();
							}),
						];
						return (
							i.src && el
								? ((s = !0),
								  i
										.decode()
										.then(function () {
											r && e();
										})
										.catch(function (t) {
											r && (o ? e() : n());
										}))
								: a.push(fi(i, Yn, n)),
							function () {
								(r = !1), a.forEach(pi);
							}
						);
					})(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this))));
		}
		unlistenImage_() {
			this.unlisten_ && (this.unlisten_(), (this.unlisten_ = null));
		}
		disposeInternal() {
			this.unlistenImage_(), (this.image_ = null), super.disposeInternal();
		}
	}
	class zg {
		constructor(t, e, n) {
			(this.decay_ = t), (this.minVelocity_ = e), (this.delay_ = n), (this.points_ = []), (this.angle_ = 0), (this.initialVelocity_ = 0);
		}
		begin() {
			(this.points_.length = 0), (this.angle_ = 0), (this.initialVelocity_ = 0);
		}
		update(t, e) {
			this.points_.push(t, e, Date.now());
		}
		end() {
			if (this.points_.length < 6) return !1;
			const t = Date.now() - this.delay_,
				e = this.points_.length - 3;
			if (this.points_[e + 2] < t) return !1;
			let n = e - 3;
			for (; n > 0 && this.points_[n + 2] > t; ) n -= 3;
			const i = this.points_[e + 2] - this.points_[n + 2];
			if (i < 1e3 / 60) return !1;
			const r = this.points_[e] - this.points_[n],
				s = this.points_[e + 1] - this.points_[n + 1];
			return (this.angle_ = Math.atan2(s, r)), (this.initialVelocity_ = Math.sqrt(r * r + s * s) / i), this.initialVelocity_ > this.minVelocity_;
		}
		getDistance() {
			return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
		}
		getAngle() {
			return this.angle_;
		}
	}
	class Gg extends ui {
		constructor(t, e, n) {
			super(t), (this.map = e), (this.frameState = void 0 !== n ? n : null);
		}
	}
	class jg extends Gg {
		constructor(t, e, n, i, r, s) {
			super(t, e, r), (this.originalEvent = n), (this.pixel_ = null), (this.coordinate_ = null), (this.dragging = void 0 !== i && i), (this.activePointers = s);
		}
		get pixel() {
			return this.pixel_ || (this.pixel_ = this.map.getEventPixel(this.originalEvent)), this.pixel_;
		}
		set pixel(t) {
			this.pixel_ = t;
		}
		get coordinate() {
			return this.coordinate_ || (this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel)), this.coordinate_;
		}
		set coordinate(t) {
			this.coordinate_ = t;
		}
		preventDefault() {
			super.preventDefault(), 'preventDefault' in this.originalEvent && this.originalEvent.preventDefault();
		}
		stopPropagation() {
			super.stopPropagation(), 'stopPropagation' in this.originalEvent && this.originalEvent.stopPropagation();
		}
	}
	var Ng = { SINGLECLICK: 'singleclick', CLICK: Jn, DBLCLICK: Qn, POINTERDRAG: 'pointerdrag', POINTERMOVE: 'pointermove', POINTERDOWN: 'pointerdown', POINTERUP: 'pointerup', POINTEROVER: 'pointerover', POINTEROUT: 'pointerout', POINTERENTER: 'pointerenter', POINTERLEAVE: 'pointerleave', POINTERCANCEL: 'pointercancel' },
		Ug = 'pointermove',
		$g = 'pointerdown';
	class Bg extends di {
		constructor(t, e) {
			super(t), (this.map_ = t), this.clickTimeoutId_, (this.emulateClicks_ = !1), (this.dragging_ = !1), (this.dragListenerKeys_ = []), (this.moveTolerance_ = void 0 === e ? 1 : e), (this.down_ = null);
			const n = this.map_.getViewport();
			(this.activePointers_ = []), (this.trackedTouches_ = {}), (this.element_ = n), (this.pointerdownListenerKey_ = gi(n, $g, this.handlePointerDown_, this)), this.originalPointerMoveEvent_, (this.relayedListenerKey_ = gi(n, Ug, this.relayMoveEvent_, this)), (this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this)), this.element_.addEventListener(oi, this.boundHandleTouchMove_, !!il && { passive: !1 });
		}
		emulateClick_(t) {
			let e = new jg(Ng.CLICK, this.map_, t);
			this.dispatchEvent(e),
				void 0 !== this.clickTimeoutId_
					? (clearTimeout(this.clickTimeoutId_), (this.clickTimeoutId_ = void 0), (e = new jg(Ng.DBLCLICK, this.map_, t)), this.dispatchEvent(e))
					: (this.clickTimeoutId_ = setTimeout(() => {
							this.clickTimeoutId_ = void 0;
							const e = new jg(Ng.SINGLECLICK, this.map_, t);
							this.dispatchEvent(e);
					  }, 250));
		}
		updateActivePointers_(t) {
			const e = t,
				n = e.pointerId;
			if (e.type == Ng.POINTERUP || e.type == Ng.POINTERCANCEL) {
				delete this.trackedTouches_[n];
				for (const t in this.trackedTouches_)
					if (this.trackedTouches_[t].target !== e.target) {
						delete this.trackedTouches_[t];
						break;
					}
			} else (e.type != Ng.POINTERDOWN && e.type != Ng.POINTERMOVE) || (this.trackedTouches_[n] = e);
			this.activePointers_ = Object.values(this.trackedTouches_);
		}
		handlePointerUp_(t) {
			this.updateActivePointers_(t);
			const e = new jg(Ng.POINTERUP, this.map_, t, void 0, void 0, this.activePointers_);
			this.dispatchEvent(e), this.emulateClicks_ && !e.defaultPrevented && !this.dragging_ && this.isMouseActionButton_(t) && this.emulateClick_(this.down_), 0 === this.activePointers_.length && (this.dragListenerKeys_.forEach(pi), (this.dragListenerKeys_.length = 0), (this.dragging_ = !1), (this.down_ = null));
		}
		isMouseActionButton_(t) {
			return 0 === t.button;
		}
		handlePointerDown_(t) {
			(this.emulateClicks_ = 0 === this.activePointers_.length), this.updateActivePointers_(t);
			const e = new jg(Ng.POINTERDOWN, this.map_, t, void 0, void 0, this.activePointers_);
			if ((this.dispatchEvent(e), (this.down_ = new PointerEvent(t.type, t)), Object.defineProperty(this.down_, 'target', { writable: !1, value: t.target }), 0 === this.dragListenerKeys_.length)) {
				const t = this.map_.getOwnerDocument();
				this.dragListenerKeys_.push(gi(t, Ng.POINTERMOVE, this.handlePointerMove_, this), gi(t, Ng.POINTERUP, this.handlePointerUp_, this), gi(this.element_, Ng.POINTERCANCEL, this.handlePointerUp_, this)), this.element_.getRootNode && this.element_.getRootNode() !== t && this.dragListenerKeys_.push(gi(this.element_.getRootNode(), Ng.POINTERUP, this.handlePointerUp_, this));
			}
		}
		handlePointerMove_(t) {
			if (this.isMoving_(t)) {
				this.updateActivePointers_(t), (this.dragging_ = !0);
				const e = new jg(Ng.POINTERDRAG, this.map_, t, this.dragging_, void 0, this.activePointers_);
				this.dispatchEvent(e);
			}
		}
		relayMoveEvent_(t) {
			this.originalPointerMoveEvent_ = t;
			const e = !(!this.down_ || !this.isMoving_(t));
			this.dispatchEvent(new jg(Ng.POINTERMOVE, this.map_, t, e));
		}
		handleTouchMove_(t) {
			const e = this.originalPointerMoveEvent_;
			(e && !e.defaultPrevented) || ('boolean' == typeof t.cancelable && !0 !== t.cancelable) || t.preventDefault();
		}
		isMoving_(t) {
			return this.dragging_ || Math.abs(t.clientX - this.down_.clientX) > this.moveTolerance_ || Math.abs(t.clientY - this.down_.clientY) > this.moveTolerance_;
		}
		disposeInternal() {
			this.relayedListenerKey_ && (pi(this.relayedListenerKey_), (this.relayedListenerKey_ = null)), this.element_.removeEventListener(oi, this.boundHandleTouchMove_), this.pointerdownListenerKey_ && (pi(this.pointerdownListenerKey_), (this.pointerdownListenerKey_ = null)), this.dragListenerKeys_.forEach(pi), (this.dragListenerKeys_.length = 0), (this.element_ = null), super.disposeInternal();
		}
	}
	var Vg = 'postrender',
		Wg = 'movestart',
		Xg = 'moveend',
		qg = 'loadstart',
		Zg = 'loadend',
		Kg = 'layergroup',
		Yg = 'size',
		Hg = 'target',
		Jg = 'view';
	const Qg = 1 / 0;
	class tf {
		constructor(t, e) {
			(this.priorityFunction_ = t), (this.keyFunction_ = e), (this.elements_ = []), (this.priorities_ = []), (this.queuedElements_ = {});
		}
		clear() {
			(this.elements_.length = 0), (this.priorities_.length = 0), hi(this.queuedElements_);
		}
		dequeue() {
			const t = this.elements_,
				e = this.priorities_,
				n = t[0];
			1 == t.length ? ((t.length = 0), (e.length = 0)) : ((t[0] = t.pop()), (e[0] = e.pop()), this.siftUp_(0));
			const i = this.keyFunction_(n);
			return delete this.queuedElements_[i], n;
		}
		enqueue(t) {
			Ci(!(this.keyFunction_(t) in this.queuedElements_), 'Tried to enqueue an `element` that was already added to the queue');
			const e = this.priorityFunction_(t);
			return e != Qg && (this.elements_.push(t), this.priorities_.push(e), (this.queuedElements_[this.keyFunction_(t)] = !0), this.siftDown_(0, this.elements_.length - 1), !0);
		}
		getCount() {
			return this.elements_.length;
		}
		getLeftChildIndex_(t) {
			return 2 * t + 1;
		}
		getRightChildIndex_(t) {
			return 2 * t + 2;
		}
		getParentIndex_(t) {
			return (t - 1) >> 1;
		}
		heapify_() {
			let t;
			for (t = (this.elements_.length >> 1) - 1; t >= 0; t--) this.siftUp_(t);
		}
		isEmpty() {
			return 0 === this.elements_.length;
		}
		isKeyQueued(t) {
			return t in this.queuedElements_;
		}
		isQueued(t) {
			return this.isKeyQueued(this.keyFunction_(t));
		}
		siftUp_(t) {
			const e = this.elements_,
				n = this.priorities_,
				i = e.length,
				r = e[t],
				s = n[t],
				o = t;
			for (; t < i >> 1; ) {
				const r = this.getLeftChildIndex_(t),
					s = this.getRightChildIndex_(t),
					o = s < i && n[s] < n[r] ? s : r;
				(e[t] = e[o]), (n[t] = n[o]), (t = o);
			}
			(e[t] = r), (n[t] = s), this.siftDown_(o, t);
		}
		siftDown_(t, e) {
			const n = this.elements_,
				i = this.priorities_,
				r = n[e],
				s = i[e];
			for (; e > t; ) {
				const t = this.getParentIndex_(e);
				if (!(i[t] > s)) break;
				(n[e] = n[t]), (i[e] = i[t]), (e = t);
			}
			(n[e] = r), (i[e] = s);
		}
		reprioritize() {
			const t = this.priorityFunction_,
				e = this.elements_,
				n = this.priorities_;
			let i = 0;
			const r = e.length;
			let s, o, a;
			for (o = 0; o < r; ++o) (s = e[o]), (a = t(s)), a == Qg ? delete this.queuedElements_[this.keyFunction_(s)] : ((n[i] = a), (e[i++] = s));
			(e.length = i), (n.length = i), this.heapify_();
		}
	}
	class ef extends tf {
		constructor(t, e) {
			super(
				(e) => t.apply(null, e),
				(t) => t[0].getKey()
			),
				(this.boundHandleTileChange_ = this.handleTileChange.bind(this)),
				(this.tileChangeCallback_ = e),
				(this.tilesLoading_ = 0),
				(this.tilesLoadingKeys_ = {});
		}
		enqueue(t) {
			const e = super.enqueue(t);
			if (e) {
				t[0].addEventListener(Kn, this.boundHandleTileChange_);
			}
			return e;
		}
		getTilesLoading() {
			return this.tilesLoading_;
		}
		handleTileChange(t) {
			const e = t.target,
				n = e.getState();
			if (n === kg || n === Lg || n === Ag) {
				n !== Lg && e.removeEventListener(Kn, this.boundHandleTileChange_);
				const t = e.getKey();
				t in this.tilesLoadingKeys_ && (delete this.tilesLoadingKeys_[t], --this.tilesLoading_), this.tileChangeCallback_();
			}
		}
		loadMoreTiles(t, e) {
			let n = 0;
			for (; this.tilesLoading_ < t && n < e && this.getCount() > 0; ) {
				const t = this.dequeue()[0],
					e = t.getKey();
				t.getState() !== Mg || e in this.tilesLoadingKeys_ || ((this.tilesLoadingKeys_[e] = !0), ++this.tilesLoading_, ++n, t.load());
			}
		}
	}
	class nf extends Si {
		constructor(t) {
			super();
			const e = t.element;
			!e || t.target || e.style.pointerEvents || (e.style.pointerEvents = 'auto'), (this.element = e || null), (this.target_ = null), (this.map_ = null), (this.listenerKeys = []), t.render && (this.render = t.render), t.target && this.setTarget(t.target);
		}
		disposeInternal() {
			this.element?.remove(), super.disposeInternal();
		}
		getMap() {
			return this.map_;
		}
		setMap(t) {
			this.map_ && this.element?.remove();
			for (let t = 0, e = this.listenerKeys.length; t < e; ++t) pi(this.listenerKeys[t]);
			if (((this.listenerKeys.length = 0), (this.map_ = t), t)) {
				const e = this.target_ ?? t.getOverlayContainerStopEvent();
				this.element && e.appendChild(this.element), this.render !== Wn && this.listenerKeys.push(gi(t, Vg, this.render, this)), t.render();
			}
		}
		render(t) {}
		setTarget(t) {
			this.target_ = 'string' == typeof t ? document.getElementById(t) : t;
		}
	}
	var rf = Object.freeze({ __proto__: null, default: nf });
	class sf extends nf {
		constructor(t) {
			(t = t || {}), super({ element: document.createElement('div'), render: t.render, target: t.target }), (this.ulElement_ = document.createElement('ul')), (this.collapsed_ = void 0 === t.collapsed || t.collapsed), (this.userCollapsed_ = this.collapsed_), (this.overrideCollapsible_ = void 0 !== t.collapsible), (this.collapsible_ = void 0 === t.collapsible || t.collapsible), this.collapsible_ || (this.collapsed_ = !1), (this.attributions_ = t.attributions);
			const e = void 0 !== t.className ? t.className : 'ol-attribution',
				n = void 0 !== t.tipLabel ? t.tipLabel : 'Attributions',
				i = void 0 !== t.expandClassName ? t.expandClassName : e + '-expand',
				r = void 0 !== t.collapseLabel ? t.collapseLabel : '›',
				s = void 0 !== t.collapseClassName ? t.collapseClassName : e + '-collapse';
			'string' == typeof r ? ((this.collapseLabel_ = document.createElement('span')), (this.collapseLabel_.textContent = r), (this.collapseLabel_.className = s)) : (this.collapseLabel_ = r);
			const o = void 0 !== t.label ? t.label : 'i';
			'string' == typeof o ? ((this.label_ = document.createElement('span')), (this.label_.textContent = o), (this.label_.className = i)) : (this.label_ = o);
			const a = this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
			(this.toggleButton_ = document.createElement('button')), this.toggleButton_.setAttribute('type', 'button'), this.toggleButton_.setAttribute('aria-expanded', String(!this.collapsed_)), (this.toggleButton_.title = n), this.toggleButton_.appendChild(a), this.toggleButton_.addEventListener(Jn, this.handleClick_.bind(this), !1);
			const l = e + ' ' + bl + ' ' + Sl + (this.collapsed_ && this.collapsible_ ? ' ' + Cl : '') + (this.collapsible_ ? '' : ' ol-uncollapsible'),
				h = this.element;
			(h.className = l), h.appendChild(this.toggleButton_), h.appendChild(this.ulElement_), (this.renderedAttributions_ = []), (this.renderedVisible_ = !0);
		}
		collectSourceAttributions_(t) {
			const e = this.getMap().getAllLayers(),
				n = new Set(e.flatMap((e) => e.getAttributions(t)));
			if ((void 0 !== this.attributions_ && (Array.isArray(this.attributions_) ? this.attributions_.forEach((t) => n.add(t)) : n.add(this.attributions_)), !this.overrideCollapsible_)) {
				const t = !e.some((t) => !1 === t.getSource()?.getAttributionsCollapsible());
				this.setCollapsible(t);
			}
			return Array.from(n);
		}
		async updateElement_(t) {
			if (!t) return void (this.renderedVisible_ && ((this.element.style.display = 'none'), (this.renderedVisible_ = !1)));
			const e = await Promise.all(this.collectSourceAttributions_(t).map((t) => qn(() => t))),
				n = e.length > 0;
			if ((this.renderedVisible_ != n && ((this.element.style.display = n ? '' : 'none'), (this.renderedVisible_ = n)), !$n(e, this.renderedAttributions_))) {
				ul(this.ulElement_);
				for (let t = 0, n = e.length; t < n; ++t) {
					const n = document.createElement('li');
					(n.innerHTML = e[t]), this.ulElement_.appendChild(n);
				}
				this.renderedAttributions_ = e;
			}
		}
		handleClick_(t) {
			t.preventDefault(), this.handleToggle_(), (this.userCollapsed_ = this.collapsed_);
		}
		handleToggle_() {
			this.element.classList.toggle(Cl), this.collapsed_ ? cl(this.collapseLabel_, this.label_) : cl(this.label_, this.collapseLabel_), (this.collapsed_ = !this.collapsed_), this.toggleButton_.setAttribute('aria-expanded', String(!this.collapsed_));
		}
		getCollapsible() {
			return this.collapsible_;
		}
		setCollapsible(t) {
			this.collapsible_ !== t && ((this.collapsible_ = t), this.element.classList.toggle('ol-uncollapsible'), this.userCollapsed_ && this.handleToggle_());
		}
		setCollapsed(t) {
			(this.userCollapsed_ = t), this.collapsible_ && this.collapsed_ !== t && this.handleToggle_();
		}
		getCollapsed() {
			return this.collapsed_;
		}
		render(t) {
			this.updateElement_(t.frameState);
		}
	}
	class of extends nf {
		constructor(t) {
			(t = t || {}), super({ element: document.createElement('div'), render: t.render, target: t.target });
			const e = void 0 !== t.className ? t.className : 'ol-rotate',
				n = void 0 !== t.label ? t.label : '⇧',
				i = void 0 !== t.compassClassName ? t.compassClassName : 'ol-compass';
			(this.label_ = null), 'string' == typeof n ? ((this.label_ = document.createElement('span')), (this.label_.className = i), (this.label_.textContent = n)) : ((this.label_ = n), this.label_.classList.add(i));
			const r = t.tipLabel ? t.tipLabel : 'Reset rotation',
				s = document.createElement('button');
			(s.className = e + '-reset'), s.setAttribute('type', 'button'), (s.title = r), s.appendChild(this.label_), s.addEventListener(Jn, this.handleClick_.bind(this), !1);
			const o = e + ' ' + bl + ' ' + Sl,
				a = this.element;
			(a.className = o), a.appendChild(s), (this.callResetNorth_ = t.resetNorth ? t.resetNorth : void 0), (this.duration_ = void 0 !== t.duration ? t.duration : 250), (this.autoHide_ = void 0 === t.autoHide || t.autoHide), (this.rotation_ = void 0), this.autoHide_ && this.element.classList.add(wl);
		}
		handleClick_(t) {
			t.preventDefault(), void 0 !== this.callResetNorth_ ? this.callResetNorth_() : this.resetNorth_();
		}
		resetNorth_() {
			const t = this.getMap().getView();
			if (!t) return;
			const e = t.getRotation();
			void 0 !== e && (this.duration_ > 0 && e % (2 * Math.PI) != 0 ? t.animate({ rotation: 0, duration: this.duration_, easing: tg }) : t.setRotation(0));
		}
		render(t) {
			const e = t.frameState;
			if (!e) return;
			const n = e.viewState.rotation;
			if (n != this.rotation_) {
				const t = 'rotate(' + n + 'rad)';
				if (this.autoHide_) {
					const t = this.element.classList.contains(wl);
					t || 0 !== n ? t && 0 !== n && this.element.classList.remove(wl) : this.element.classList.add(wl);
				}
				this.label_.style.transform = t;
			}
			this.rotation_ = n;
		}
	}
	class af extends nf {
		constructor(t) {
			(t = t || {}), super({ element: document.createElement('div'), target: t.target });
			const e = void 0 !== t.className ? t.className : 'ol-zoom',
				n = void 0 !== t.delta ? t.delta : 1,
				i = void 0 !== t.zoomInClassName ? t.zoomInClassName : e + '-in',
				r = void 0 !== t.zoomOutClassName ? t.zoomOutClassName : e + '-out',
				s = void 0 !== t.zoomInLabel ? t.zoomInLabel : '+',
				o = void 0 !== t.zoomOutLabel ? t.zoomOutLabel : '–',
				a = void 0 !== t.zoomInTipLabel ? t.zoomInTipLabel : 'Zoom in',
				l = void 0 !== t.zoomOutTipLabel ? t.zoomOutTipLabel : 'Zoom out',
				h = document.createElement('button');
			(h.className = i), h.setAttribute('type', 'button'), (h.title = a), h.appendChild('string' == typeof s ? document.createTextNode(s) : s), h.addEventListener(Jn, this.handleClick_.bind(this, n), !1);
			const c = document.createElement('button');
			(c.className = r), c.setAttribute('type', 'button'), (c.title = l), c.appendChild('string' == typeof o ? document.createTextNode(o) : o), c.addEventListener(Jn, this.handleClick_.bind(this, -n), !1);
			const u = e + ' ' + bl + ' ' + Sl,
				d = this.element;
			(d.className = u), d.appendChild(h), d.appendChild(c), (this.duration_ = void 0 !== t.duration ? t.duration : 250);
		}
		handleClick_(t, e) {
			e.preventDefault(), this.zoomByDelta_(t);
		}
		zoomByDelta_(t) {
			const e = this.getMap().getView();
			if (!e) return;
			const n = e.getZoom();
			if (void 0 !== n) {
				const i = e.getConstrainedZoom(n + t);
				this.duration_ > 0 ? (e.getAnimating() && e.cancelAnimations(), e.animate({ zoom: i, duration: this.duration_, easing: tg })) : e.setZoom(i);
			}
		}
	}
	var lf = 'active';
	class hf extends Si {
		constructor(t) {
			super(), this.on, this.once, this.un, t && t.handleEvent && (this.handleEvent = t.handleEvent), (this.map_ = null), this.setActive(!0);
		}
		getActive() {
			return this.get(lf);
		}
		getMap() {
			return this.map_;
		}
		handleEvent(t) {
			return !0;
		}
		setActive(t) {
			this.set(lf, t);
		}
		setMap(t) {
			this.map_ = t;
		}
	}
	function cf(t, e, n, i) {
		const r = t.getZoom();
		if (void 0 === r) return;
		const s = t.getConstrainedZoom(r + e),
			o = t.getResolutionForZoom(s);
		t.getAnimating() && t.cancelAnimations(), t.animate({ resolution: o, anchor: n, duration: void 0 !== i ? i : 250, easing: tg });
	}
	class uf extends hf {
		constructor(t) {
			super(), (t = t || {}), (this.delta_ = t.delta ? t.delta : 1), (this.duration_ = void 0 !== t.duration ? t.duration : 250);
		}
		handleEvent(t) {
			let e = !1;
			if (t.type == Ng.DBLCLICK) {
				const n = t.originalEvent,
					i = t.map,
					r = t.coordinate,
					s = n.shiftKey ? -this.delta_ : this.delta_;
				cf(i.getView(), s, r, this.duration_), n.preventDefault(), (e = !0);
			}
			return !e;
		}
	}
	function df(t) {
		const e = arguments;
		return function (t) {
			let n = !0;
			for (let i = 0, r = e.length; i < r && ((n = n && e[i](t)), n); ++i);
			return n;
		};
	}
	const gf = function (t) {
			const e = t.originalEvent;
			return e.altKey && !(e.metaKey || e.ctrlKey) && e.shiftKey;
		},
		ff = function (t) {
			const e = t.map.getTargetElement(),
				n = e.getRootNode();
			return (
				!(n instanceof ShadowRoot ? n.host : e).hasAttribute('tabindex') ||
				(function (t) {
					const e = t.map.getTargetElement(),
						n = e.getRootNode(),
						i = t.map.getOwnerDocument().activeElement;
					return n instanceof ShadowRoot ? n.host.contains(i) : e.contains(i);
				})(t)
			);
		},
		pf = Bn,
		mf = function (t) {
			const e = t.originalEvent;
			return 0 == e.button && !(Ha && Ja && e.ctrlKey);
		},
		_f = Vn,
		yf = function (t) {
			return t.type == Ng.SINGLECLICK;
		},
		xf = function (t) {
			const e = t.originalEvent;
			return !e.altKey && !(e.metaKey || e.ctrlKey) && !e.shiftKey;
		},
		vf = function (t) {
			const e = t.originalEvent;
			return !e.altKey && !(e.metaKey || e.ctrlKey) && e.shiftKey;
		},
		wf = function (t) {
			const e = t.originalEvent,
				n = e.target.tagName;
			return 'INPUT' !== n && 'SELECT' !== n && 'TEXTAREA' !== n && !e.target.isContentEditable;
		},
		bf = function (t) {
			const e = t.originalEvent;
			return Ci(void 0 !== e, 'mapBrowserEvent must originate from a pointer event'), 'mouse' == e.pointerType;
		},
		Sf = function (t) {
			const e = t.originalEvent;
			return Ci(void 0 !== e, 'mapBrowserEvent must originate from a pointer event'), e.isPrimary && 0 === e.button;
		};
	class Cf extends hf {
		constructor(t) {
			super((t = t || {})), t.handleDownEvent && (this.handleDownEvent = t.handleDownEvent), t.handleDragEvent && (this.handleDragEvent = t.handleDragEvent), t.handleMoveEvent && (this.handleMoveEvent = t.handleMoveEvent), t.handleUpEvent && (this.handleUpEvent = t.handleUpEvent), t.stopDown && (this.stopDown = t.stopDown), (this.handlingDownUpSequence = !1), (this.targetPointers = []);
		}
		getPointerCount() {
			return this.targetPointers.length;
		}
		handleDownEvent(t) {
			return !1;
		}
		handleDragEvent(t) {}
		handleEvent(t) {
			if (!t.originalEvent) return !0;
			let e = !1;
			if ((this.updateTrackedPointers_(t), this.handlingDownUpSequence)) {
				if (t.type == Ng.POINTERDRAG) this.handleDragEvent(t), t.originalEvent.preventDefault();
				else if (t.type == Ng.POINTERUP) {
					const e = this.handleUpEvent(t);
					this.handlingDownUpSequence = e && this.targetPointers.length > 0;
				}
			} else if (t.type == Ng.POINTERDOWN) {
				const n = this.handleDownEvent(t);
				(this.handlingDownUpSequence = n), (e = this.stopDown(n));
			} else t.type == Ng.POINTERMOVE && this.handleMoveEvent(t);
			return !e;
		}
		handleMoveEvent(t) {}
		handleUpEvent(t) {
			return !1;
		}
		stopDown(t) {
			return t;
		}
		updateTrackedPointers_(t) {
			t.activePointers && (this.targetPointers = t.activePointers);
		}
	}
	function Ef(t) {
		const e = t.length;
		let n = 0,
			i = 0;
		for (let r = 0; r < e; r++) (n += t[r].clientX), (i += t[r].clientY);
		return { clientX: n / e, clientY: i / e };
	}
	class Tf extends Cf {
		constructor(t) {
			super({ stopDown: Vn }), (t = t || {}), (this.kinetic_ = t.kinetic), (this.lastCentroid = null), this.lastPointersCount_, (this.panning_ = !1);
			const e = t.condition ? t.condition : df(xf, Sf);
			(this.condition_ = t.onFocusOnly ? df(ff, e) : e), (this.noKinetic_ = !1);
		}
		handleDragEvent(t) {
			const e = t.map;
			this.panning_ || ((this.panning_ = !0), e.getView().beginInteraction());
			const n = this.targetPointers,
				i = e.getEventPixel(Ef(n));
			if (n.length == this.lastPointersCount_) {
				if ((this.kinetic_ && this.kinetic_.update(i[0], i[1]), this.lastCentroid)) {
					const e = [this.lastCentroid[0] - i[0], i[1] - this.lastCentroid[1]],
						n = t.map.getView();
					!(function (t, e) {
						(t[0] *= e), (t[1] *= e);
					})(e, n.getResolution()),
						Qr(e, n.getRotation()),
						n.adjustCenterInternal(e);
				}
			} else this.kinetic_ && this.kinetic_.begin();
			(this.lastCentroid = i), (this.lastPointersCount_ = n.length), t.originalEvent.preventDefault();
		}
		handleUpEvent(t) {
			const e = t.map,
				n = e.getView();
			if (0 === this.targetPointers.length) {
				if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
					const t = this.kinetic_.getDistance(),
						i = this.kinetic_.getAngle(),
						r = n.getCenterInternal(),
						s = e.getPixelFromCoordinateInternal(r),
						o = e.getCoordinateFromPixelInternal([s[0] - t * Math.cos(i), s[1] - t * Math.sin(i)]);
					n.animateInternal({ center: n.getConstrainedCenter(o), duration: 500, easing: tg });
				}
				return this.panning_ && ((this.panning_ = !1), n.endInteraction()), !1;
			}
			return this.kinetic_ && this.kinetic_.begin(), (this.lastCentroid = null), !0;
		}
		handleDownEvent(t) {
			if (this.targetPointers.length > 0 && this.condition_(t)) {
				const e = t.map.getView();
				return (this.lastCentroid = null), e.getAnimating() && e.cancelAnimations(), this.kinetic_ && this.kinetic_.begin(), (this.noKinetic_ = this.targetPointers.length > 1), !0;
			}
			return !1;
		}
	}
	class Pf extends Cf {
		constructor(t) {
			(t = t || {}), super({ stopDown: Vn }), (this.condition_ = t.condition ? t.condition : gf), (this.lastAngle_ = void 0), (this.duration_ = void 0 !== t.duration ? t.duration : 250);
		}
		handleDragEvent(t) {
			if (!bf(t)) return;
			const e = t.map,
				n = e.getView();
			if (n.getConstraints().rotation === og) return;
			const i = e.getSize(),
				r = t.pixel,
				s = Math.atan2(i[1] / 2 - r[1], r[0] - i[0] / 2);
			if (void 0 !== this.lastAngle_) {
				const t = s - this.lastAngle_;
				n.adjustRotationInternal(-t);
			}
			this.lastAngle_ = s;
		}
		handleUpEvent(t) {
			if (!bf(t)) return !0;
			return t.map.getView().endInteraction(this.duration_), !1;
		}
		handleDownEvent(t) {
			if (!bf(t)) return !1;
			if (mf(t) && this.condition_(t)) {
				return t.map.getView().beginInteraction(), (this.lastAngle_ = void 0), !0;
			}
			return !1;
		}
	}
	class Rf extends li {
		constructor(t) {
			super(), (this.geometry_ = null), (this.element_ = document.createElement('div')), (this.element_.style.position = 'absolute'), (this.element_.style.pointerEvents = 'auto'), (this.element_.className = 'ol-box ' + t), (this.map_ = null), (this.startPixel_ = null), (this.endPixel_ = null);
		}
		disposeInternal() {
			this.setMap(null);
		}
		render_() {
			const t = this.startPixel_,
				e = this.endPixel_,
				n = 'px',
				i = this.element_.style;
			(i.left = Math.min(t[0], e[0]) + n), (i.top = Math.min(t[1], e[1]) + n), (i.width = Math.abs(e[0] - t[0]) + n), (i.height = Math.abs(e[1] - t[1]) + n);
		}
		setMap(t) {
			if (this.map_) {
				this.map_.getOverlayContainer().removeChild(this.element_);
				const t = this.element_.style;
				(t.left = 'inherit'), (t.top = 'inherit'), (t.width = 'inherit'), (t.height = 'inherit');
			}
			(this.map_ = t), this.map_ && this.map_.getOverlayContainer().appendChild(this.element_);
		}
		setPixels(t, e) {
			(this.startPixel_ = t), (this.endPixel_ = e), this.createOrUpdateGeometry(), this.render_();
		}
		createOrUpdateGeometry() {
			if (!this.map_) return;
			const t = this.startPixel_,
				e = this.endPixel_,
				n = [t, [t[0], e[1]], e, [e[0], t[1]]].map(this.map_.getCoordinateFromPixelInternal, this.map_);
			(n[4] = n[0].slice()), this.geometry_ ? this.geometry_.setCoordinates([n]) : (this.geometry_ = new va([n]));
		}
		getGeometry() {
			return this.geometry_;
		}
	}
	const Ff = 'boxstart',
		Mf = 'boxdrag',
		If = 'boxend',
		kf = 'boxcancel';
	class Lf extends ui {
		constructor(t, e, n) {
			super(t), (this.coordinate = e), (this.mapBrowserEvent = n);
		}
	}
	class Af extends Cf {
		constructor(t) {
			super(), this.on, this.once, this.un, (t = t ?? {}), (this.box_ = new Rf(t.className || 'ol-dragbox')), (this.minArea_ = t.minArea ?? 64), t.onBoxEnd && (this.onBoxEnd = t.onBoxEnd), (this.startPixel_ = null), (this.condition_ = t.condition ?? mf), (this.boxEndCondition_ = t.boxEndCondition ?? this.defaultBoxEndCondition);
		}
		defaultBoxEndCondition(t, e, n) {
			const i = n[0] - e[0],
				r = n[1] - e[1];
			return i * i + r * r >= this.minArea_;
		}
		getGeometry() {
			return this.box_.getGeometry();
		}
		handleDragEvent(t) {
			this.startPixel_ && (this.box_.setPixels(this.startPixel_, t.pixel), this.dispatchEvent(new Lf(Mf, t.coordinate, t)));
		}
		handleUpEvent(t) {
			if (!this.startPixel_) return !1;
			const e = this.boxEndCondition_(t, this.startPixel_, t.pixel);
			return e && this.onBoxEnd(t), this.dispatchEvent(new Lf(e ? If : kf, t.coordinate, t)), this.box_.setMap(null), (this.startPixel_ = null), !1;
		}
		handleDownEvent(t) {
			return !!this.condition_(t) && ((this.startPixel_ = t.pixel), this.box_.setMap(t.map), this.box_.setPixels(this.startPixel_, this.startPixel_), this.dispatchEvent(new Lf(Ff, t.coordinate, t)), !0);
		}
		onBoxEnd(t) {}
		setActive(t) {
			t || (this.box_.setMap(null), this.startPixel_ && (this.dispatchEvent(new Lf(kf, this.startPixel_, null)), (this.startPixel_ = null))), super.setActive(t);
		}
		setMap(t) {
			this.getMap() && (this.box_.setMap(null), this.startPixel_ && (this.dispatchEvent(new Lf(kf, this.startPixel_, null)), (this.startPixel_ = null))), super.setMap(t);
		}
	}
	class Df extends Af {
		constructor(t) {
			super({ condition: (t = t || {}).condition ? t.condition : vf, className: t.className || 'ol-dragzoom', minArea: t.minArea }), (this.duration_ = void 0 !== t.duration ? t.duration : 200), (this.out_ = void 0 !== t.out && t.out);
		}
		onBoxEnd(t) {
			const e = this.getMap().getView();
			let n = this.getGeometry();
			if (this.out_) {
				const t = e.rotatedExtentForGeometry(n),
					i = e.getResolutionForExtentInternal(t),
					r = e.getResolution() / i;
				(n = n.clone()), n.scale(r * r);
			}
			e.fitInternal(n, { duration: this.duration_, easing: tg });
		}
	}
	var Of = 'ArrowLeft',
		zf = 'ArrowUp',
		Gf = 'ArrowRight',
		jf = 'ArrowDown';
	class Nf extends hf {
		constructor(t) {
			super(),
				(t = t || {}),
				(this.defaultCondition_ = function (t) {
					return xf(t) && wf(t);
				}),
				(this.condition_ = void 0 !== t.condition ? t.condition : this.defaultCondition_),
				(this.duration_ = void 0 !== t.duration ? t.duration : 100),
				(this.pixelDelta_ = void 0 !== t.pixelDelta ? t.pixelDelta : 128);
		}
		handleEvent(t) {
			let e = !1;
			if (t.type == ii) {
				const n = t.originalEvent,
					i = n.key;
				if (this.condition_(t) && (i == jf || i == Of || i == Gf || i == zf)) {
					const r = t.map.getView(),
						s = r.getResolution() * this.pixelDelta_;
					let o = 0,
						a = 0;
					i == jf ? (a = -s) : i == Of ? (o = -s) : i == Gf ? (o = s) : (a = s);
					const l = [o, a];
					Qr(l, r.getRotation()),
						(function (t, e, n) {
							const i = t.getCenterInternal();
							if (i) {
								const r = [i[0] + e[0], i[1] + e[1]];
								t.animateInternal({ duration: void 0 !== n ? n : 250, easing: ng, center: t.getConstrainedCenter(r) });
							}
						})(r, l, this.duration_),
						n.preventDefault(),
						(e = !0);
				}
			}
			return !e;
		}
	}
	class Uf extends hf {
		constructor(t) {
			super(),
				(t = t || {}),
				(this.condition_ = t.condition
					? t.condition
					: function (t) {
							return (
								!(function (t) {
									const e = t.originalEvent;
									return Ja ? e.metaKey : e.ctrlKey;
								})(t) && wf(t)
							);
					  }),
				(this.delta_ = t.delta ? t.delta : 1),
				(this.duration_ = void 0 !== t.duration ? t.duration : 100);
		}
		handleEvent(t) {
			let e = !1;
			if (t.type == ii || t.type == ri) {
				const n = t.originalEvent,
					i = n.key;
				if (this.condition_(t) && ('+' === i || '-' === i)) {
					const r = t.map,
						s = '+' === i ? this.delta_ : -this.delta_;
					cf(r.getView(), s, void 0, this.duration_), n.preventDefault(), (e = !0);
				}
			}
			return !e;
		}
	}
	class $f extends hf {
		constructor(t) {
			super((t = t || {})), (this.totalDelta_ = 0), (this.lastDelta_ = 0), (this.maxDelta_ = void 0 !== t.maxDelta ? t.maxDelta : 1), (this.duration_ = void 0 !== t.duration ? t.duration : 250), (this.timeout_ = void 0 !== t.timeout ? t.timeout : 80), (this.useAnchor_ = void 0 === t.useAnchor || t.useAnchor), (this.constrainResolution_ = void 0 !== t.constrainResolution && t.constrainResolution);
			const e = t.condition ? t.condition : pf;
			(this.condition_ = t.onFocusOnly ? df(ff, e) : e), (this.lastAnchor_ = null), (this.startTime_ = void 0), this.timeoutId_, (this.mode_ = void 0), (this.trackpadEventGap_ = 400), this.trackpadTimeoutId_, (this.deltaPerZoom_ = 300);
		}
		endInteraction_() {
			this.trackpadTimeoutId_ = void 0;
			const t = this.getMap();
			if (!t) return;
			t.getView().endInteraction(void 0, this.lastDelta_ ? (this.lastDelta_ > 0 ? 1 : -1) : 0, this.lastAnchor_ ? t.getCoordinateFromPixel(this.lastAnchor_) : null);
		}
		handleEvent(t) {
			if (!this.condition_(t)) return !0;
			if (t.type !== ai) return !0;
			const e = t.map,
				n = t.originalEvent;
			let i;
			if ((n.preventDefault(), this.useAnchor_ && (this.lastAnchor_ = t.pixel), t.type == ai && ((i = n.deltaY), Ka && n.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (i /= Qa), n.deltaMode === WheelEvent.DOM_DELTA_LINE && (i *= 40)), 0 === i)) return !1;
			this.lastDelta_ = i;
			const r = Date.now();
			void 0 === this.startTime_ && (this.startTime_ = r), (!this.mode_ || r - this.startTime_ > this.trackpadEventGap_) && (this.mode_ = Math.abs(i) < 4 ? 'trackpad' : 'wheel');
			const s = e.getView();
			if ('trackpad' === this.mode_ && !s.getConstrainResolution() && !this.constrainResolution_) return this.trackpadTimeoutId_ ? clearTimeout(this.trackpadTimeoutId_) : (s.getAnimating() && s.cancelAnimations(), s.beginInteraction()), (this.trackpadTimeoutId_ = setTimeout(this.endInteraction_.bind(this), this.timeout_)), s.adjustZoom(-i / this.deltaPerZoom_, this.lastAnchor_ ? e.getCoordinateFromPixel(this.lastAnchor_) : null), (this.startTime_ = r), !1;
			this.totalDelta_ += i;
			const o = Math.max(this.timeout_ - (r - this.startTime_), 0);
			return clearTimeout(this.timeoutId_), (this.timeoutId_ = setTimeout(this.handleWheelZoom_.bind(this, e), o)), !1;
		}
		handleWheelZoom_(t) {
			const e = t.getView();
			e.getAnimating() && e.cancelAnimations();
			let n = -vr(this.totalDelta_, -this.maxDelta_ * this.deltaPerZoom_, this.maxDelta_ * this.deltaPerZoom_) / this.deltaPerZoom_;
			(e.getConstrainResolution() || this.constrainResolution_) && (n = n ? (n > 0 ? 1 : -1) : 0), cf(e, n, this.lastAnchor_ ? t.getCoordinateFromPixel(this.lastAnchor_) : null, this.duration_), (this.mode_ = void 0), (this.totalDelta_ = 0), (this.lastAnchor_ = null), (this.startTime_ = void 0), (this.timeoutId_ = void 0);
		}
		setMouseAnchor(t) {
			(this.useAnchor_ = t), t || (this.lastAnchor_ = null);
		}
	}
	class Bf extends Cf {
		constructor(t) {
			const e = (t = t || {});
			e.stopDown || (e.stopDown = Vn), super(e), (this.anchor_ = null), (this.lastAngle_ = void 0), (this.rotating_ = !1), (this.rotationDelta_ = 0), (this.threshold_ = void 0 !== t.threshold ? t.threshold : 0.3), (this.duration_ = void 0 !== t.duration ? t.duration : 250);
		}
		handleDragEvent(t) {
			let e = 0;
			const n = this.targetPointers[0],
				i = this.targetPointers[1],
				r = Math.atan2(i.clientY - n.clientY, i.clientX - n.clientX);
			if (void 0 !== this.lastAngle_) {
				const t = r - this.lastAngle_;
				(this.rotationDelta_ += t), !this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_ && (this.rotating_ = !0), (e = t);
			}
			this.lastAngle_ = r;
			const s = t.map,
				o = s.getView();
			o.getConstraints().rotation !== og && ((this.anchor_ = s.getCoordinateFromPixelInternal(s.getEventPixel(Ef(this.targetPointers)))), this.rotating_ && (s.render(), o.adjustRotationInternal(e, this.anchor_)));
		}
		handleUpEvent(t) {
			if (this.targetPointers.length < 2) {
				return t.map.getView().endInteraction(this.duration_), !1;
			}
			return !0;
		}
		handleDownEvent(t) {
			if (this.targetPointers.length >= 2) {
				const e = t.map;
				return (this.anchor_ = null), (this.lastAngle_ = void 0), (this.rotating_ = !1), (this.rotationDelta_ = 0), this.handlingDownUpSequence || e.getView().beginInteraction(), !0;
			}
			return !1;
		}
	}
	class Vf extends Cf {
		constructor(t) {
			const e = (t = t || {});
			e.stopDown || (e.stopDown = Vn), super(e), (this.anchor_ = null), (this.duration_ = void 0 !== t.duration ? t.duration : 400), (this.lastDistance_ = void 0), (this.lastScaleDelta_ = 1);
		}
		handleDragEvent(t) {
			let e = 1;
			const n = this.targetPointers[0],
				i = this.targetPointers[1],
				r = n.clientX - i.clientX,
				s = n.clientY - i.clientY,
				o = Math.sqrt(r * r + s * s);
			void 0 !== this.lastDistance_ && (e = this.lastDistance_ / o), (this.lastDistance_ = o);
			const a = t.map,
				l = a.getView();
			1 != e && (this.lastScaleDelta_ = e), (this.anchor_ = a.getCoordinateFromPixelInternal(a.getEventPixel(Ef(this.targetPointers)))), a.render(), l.adjustResolutionInternal(e, this.anchor_);
		}
		handleUpEvent(t) {
			if (this.targetPointers.length < 2) {
				const e = t.map.getView(),
					n = this.lastScaleDelta_ > 1 ? 1 : -1;
				return e.endInteraction(this.duration_, n), !1;
			}
			return !0;
		}
		handleDownEvent(t) {
			if (this.targetPointers.length >= 2) {
				const e = t.map;
				return (this.anchor_ = null), (this.lastDistance_ = void 0), (this.lastScaleDelta_ = 1), this.handlingDownUpSequence || e.getView().beginInteraction(), !0;
			}
			return !1;
		}
	}
	function Wf(t) {
		t = t || {};
		const e = new dh(),
			n = new zg(-0.005, 0.05, 100);
		(void 0 === t.altShiftDragRotate || t.altShiftDragRotate) && e.push(new Pf());
		(void 0 === t.doubleClickZoom || t.doubleClickZoom) && e.push(new uf({ delta: t.zoomDelta, duration: t.zoomDuration }));
		(void 0 === t.dragPan || t.dragPan) && e.push(new Tf({ onFocusOnly: t.onFocusOnly, kinetic: n }));
		(void 0 === t.pinchRotate || t.pinchRotate) && e.push(new Bf());
		(void 0 === t.pinchZoom || t.pinchZoom) && e.push(new Vf({ duration: t.zoomDuration }));
		(void 0 === t.keyboard || t.keyboard) && (e.push(new Nf()), e.push(new Uf({ delta: t.zoomDelta, duration: t.zoomDuration })));
		(void 0 === t.mouseWheelZoom || t.mouseWheelZoom) && e.push(new $f({ onFocusOnly: t.onFocusOnly, duration: t.zoomDuration }));
		return (void 0 === t.shiftDragZoom || t.shiftDragZoom) && e.push(new Df({ duration: t.zoomDuration })), e;
	}
	class Xf extends ui {
		constructor(t, e) {
			super(t), (this.layer = e);
		}
	}
	const qf = 'layers';
	class Zf extends Sg {
		constructor(t) {
			t = t || {};
			const e = Object.assign({}, t);
			delete e.layers;
			let n = t.layers;
			super(e), this.on, this.once, this.un, (this.layersListenerKeys_ = []), (this.listenerKeys_ = {}), this.addChangeListener(qf, this.handleLayersChanged_), n ? (Array.isArray(n) ? (n = new dh(n.slice(), { unique: !0 })) : Ci('function' == typeof n.getArray, 'Expected `layers` to be an array or a `Collection`')) : (n = new dh(void 0, { unique: !0 })), this.setLayers(n);
		}
		handleLayerChange_() {
			this.changed();
		}
		handleLayersChanged_() {
			this.layersListenerKeys_.forEach(pi), (this.layersListenerKeys_.length = 0);
			const t = this.getLayers();
			this.layersListenerKeys_.push(gi(t, lh, this.handleLayersAdd_, this), gi(t, hh, this.handleLayersRemove_, this));
			for (const t in this.listenerKeys_) this.listenerKeys_[t].forEach(pi);
			hi(this.listenerKeys_);
			const e = t.getArray();
			for (let t = 0, n = e.length; t < n; t++) {
				const n = e[t];
				this.registerLayerListeners_(n), this.dispatchEvent(new Xf('addlayer', n));
			}
			this.changed();
		}
		registerLayerListeners_(t) {
			const e = [gi(t, Zn, this.handleLayerChange_, this), gi(t, Kn, this.handleLayerChange_, this)];
			t instanceof Zf && e.push(gi(t, 'addlayer', this.handleLayerGroupAdd_, this), gi(t, 'removelayer', this.handleLayerGroupRemove_, this)), (this.listenerKeys_[wi(t)] = e);
		}
		handleLayerGroupAdd_(t) {
			this.dispatchEvent(new Xf('addlayer', t.layer));
		}
		handleLayerGroupRemove_(t) {
			this.dispatchEvent(new Xf('removelayer', t.layer));
		}
		handleLayersAdd_(t) {
			const e = t.element;
			this.registerLayerListeners_(e), this.dispatchEvent(new Xf('addlayer', e)), this.changed();
		}
		handleLayersRemove_(t) {
			const e = t.element,
				n = wi(e);
			this.listenerKeys_[n].forEach(pi), delete this.listenerKeys_[n], this.dispatchEvent(new Xf('removelayer', e)), this.changed();
		}
		getLayers() {
			return this.get(qf);
		}
		setLayers(t) {
			const e = this.getLayers();
			if (e) {
				const t = e.getArray();
				for (let e = 0, n = t.length; e < n; ++e) this.dispatchEvent(new Xf('removelayer', t[e]));
			}
			this.set(qf, t);
		}
		getLayersArray(t) {
			return (
				(t = void 0 !== t ? t : []),
				this.getLayers().forEach(function (e) {
					e.getLayersArray(t);
				}),
				t
			);
		}
		getLayerStatesArray(t) {
			const e = void 0 !== t ? t : [],
				n = e.length;
			this.getLayers().forEach(function (t) {
				t.getLayerStatesArray(e);
			});
			const i = this.getLayerState();
			let r = i.zIndex;
			t || void 0 !== i.zIndex || (r = 0);
			for (let t = n, s = e.length; t < s; t++) {
				const n = e[t];
				(n.opacity *= i.opacity), (n.visible = n.visible && i.visible), (n.maxResolution = Math.min(n.maxResolution, i.maxResolution)), (n.minResolution = Math.max(n.minResolution, i.minResolution)), (n.minZoom = Math.max(n.minZoom, i.minZoom)), (n.maxZoom = Math.min(n.maxZoom, i.maxZoom)), void 0 !== i.extent && (void 0 !== n.extent ? (n.extent = sr(n.extent, i.extent)) : (n.extent = i.extent)), void 0 === n.zIndex && (n.zIndex = r);
			}
			return e;
		}
		getSourceState() {
			return 'ready';
		}
	}
	var Kf = Object.freeze({ __proto__: null, GroupEvent: Xf, default: Zf });
	class Yf extends li {
		constructor(t) {
			super(), (this.map_ = t);
		}
		dispatchRenderEvent(t, e) {
			xi();
		}
		calculateMatrices2D(t) {
			const e = t.viewState,
				n = t.coordinateToPixelTransform,
				i = t.pixelToCoordinateTransform;
			Go(n, t.size[0] / 2, t.size[1] / 2, 1 / e.resolution, -1 / e.resolution, -e.rotation, -e.center[0], -e.center[1]), jo(i, n);
		}
		forEachFeatureAtCoordinate(t, e, n, i, r, s, o, a) {
			let l;
			const h = e.viewState;
			function c(t, e, n, i) {
				return r.call(s, e, t ? n : null, i);
			}
			const u = h.projection,
				d = is(t.slice(), u),
				g = [[0, 0]];
			if (u.canWrapX() && i) {
				const t = lr(u.getExtent());
				g.push([-t, 0], [t, 0]);
			}
			const f = e.layerStatesArray,
				p = f.length,
				m = [],
				_ = [];
			for (let i = 0; i < g.length; i++)
				for (let r = p - 1; r >= 0; --r) {
					const s = f[r],
						u = s.layer;
					if (u.hasRenderer() && Eg(s, h) && o.call(a, u)) {
						const r = u.getRenderer(),
							o = u.getSource();
						if (r && o) {
							const a = o.getWrapX() ? d : t,
								h = c.bind(null, s.managed);
							(_[0] = a[0] + g[i][0]), (_[1] = a[1] + g[i][1]), (l = r.forEachFeatureAtCoordinate(_, e, n, h, m));
						}
						if (l) return l;
					}
				}
			if (0 === m.length) return;
			const y = 1 / m.length;
			return m.forEach((t, e) => (t.distanceSq += e * y)), m.sort((t, e) => t.distanceSq - e.distanceSq), m.some((t) => (l = t.callback(t.feature, t.layer, t.geometry))), l;
		}
		hasFeatureAtCoordinate(t, e, n, i, r, s) {
			return void 0 !== this.forEachFeatureAtCoordinate(t, e, n, i, Bn, this, r, s);
		}
		getMap() {
			return this.map_;
		}
		renderFrame(t) {
			xi();
		}
		scheduleExpireIconCache(t) {
			ml.canExpireCache() && t.postRenderFunctions.push(Hf);
		}
	}
	function Hf(t, e) {
		ml.expire();
	}
	class Jf extends Yf {
		constructor(t) {
			super(t), (this.fontChangeListenerKey_ = gi(zl, Zn, t.redrawText, t)), (this.element_ = document.createElement('div'));
			const e = this.element_.style;
			(e.position = 'absolute'), (e.width = '100%'), (e.height = '100%'), (e.zIndex = '0'), (this.element_.className = bl + ' ol-layers');
			const n = t.getViewport();
			n.insertBefore(this.element_, n.firstChild || null), (this.children_ = []), (this.renderedVisible_ = !0);
		}
		dispatchRenderEvent(t, e) {
			const n = this.getMap();
			if (n.hasListener(t)) {
				const i = new Hc(t, void 0, e);
				n.dispatchEvent(i);
			}
		}
		disposeInternal() {
			pi(this.fontChangeListenerKey_), this.element_.remove(), super.disposeInternal();
		}
		renderFrame(t) {
			if (!t) return void (this.renderedVisible_ && ((this.element_.style.display = 'none'), (this.renderedVisible_ = !1)));
			this.calculateMatrices2D(t), this.dispatchRenderEvent(ph, t);
			const e = t.layerStatesArray.sort((t, e) => t.zIndex - e.zIndex);
			e.some((t) => t.layer instanceof Pg && t.layer.getDeclutter()) && (t.declutter = {});
			const n = t.viewState;
			this.children_.length = 0;
			const i = [];
			let r = null;
			for (let s = 0, o = e.length; s < o; ++s) {
				const o = e[s];
				t.layerIndex = s;
				const a = o.layer,
					l = a.getSourceState();
				if (!Eg(o, n) || ('ready' != l && 'undefined' != l)) {
					a.unrender();
					continue;
				}
				const h = a.render(t, r);
				h && (h !== r && (this.children_.push(h), (r = h)), i.push(o));
			}
			this.declutter(t, i),
				(function (t, e) {
					const n = t.childNodes;
					for (let i = 0; ; ++i) {
						const r = n[i],
							s = e[i];
						if (!r && !s) break;
						r !== s && (r ? (s ? t.insertBefore(s, r) : (t.removeChild(r), --i)) : t.appendChild(s));
					}
				})(this.element_, this.children_),
				this.dispatchRenderEvent(mh, t),
				this.renderedVisible_ || ((this.element_.style.display = ''), (this.renderedVisible_ = !0)),
				this.scheduleExpireIconCache(t);
		}
		declutter(t, e) {
			if (t.declutter) {
				for (let n = e.length - 1; n >= 0; --n) {
					const i = e[n],
						r = i.layer;
					r.getDeclutter() && r.renderDeclutter(t, i);
				}
				e.forEach((e) => e.layer.renderDeferred(t));
			}
		}
	}
	function Qf(t) {
		t instanceof Cg ? t.setMapInternal(null) : t instanceof Zf && t.getLayers().forEach(Qf);
	}
	function tp(t, e) {
		if (t instanceof Cg) t.setMapInternal(e);
		else if (t instanceof Zf) {
			const n = t.getLayers().getArray();
			for (let t = 0, i = n.length; t < i; ++t) tp(n[t], e);
		}
	}
	class ep extends Si {
		constructor(t) {
			super(), (t = t || {}), this.on, this.once, this.un;
			const e = (function (t) {
				let e = null;
				void 0 !== t.keyboardEventTarget && (e = 'string' == typeof t.keyboardEventTarget ? document.getElementById(t.keyboardEventTarget) : t.keyboardEventTarget);
				const n = {},
					i = t.layers && 'function' == typeof t.layers.getLayers ? t.layers : new Zf({ layers: t.layers });
				let r, s, o;
				(n[Kg] = i), (n[Hg] = t.target), (n[Jg] = t.view instanceof hg ? t.view : new hg()), void 0 !== t.controls && (Array.isArray(t.controls) ? (r = new dh(t.controls.slice())) : (Ci('function' == typeof t.controls.getArray, 'Expected `controls` to be an array or an `ol/Collection.js`'), (r = t.controls)));
				void 0 !== t.interactions && (Array.isArray(t.interactions) ? (s = new dh(t.interactions.slice())) : (Ci('function' == typeof t.interactions.getArray, 'Expected `interactions` to be an array or an `ol/Collection.js`'), (s = t.interactions)));
				void 0 !== t.overlays ? (Array.isArray(t.overlays) ? (o = new dh(t.overlays.slice())) : (Ci('function' == typeof t.overlays.getArray, 'Expected `overlays` to be an array or an `ol/Collection.js`'), (o = t.overlays))) : (o = new dh());
				return { controls: r, interactions: s, keyboardEventTarget: e, overlays: o, values: n };
			})(t);
			(this.renderComplete_ = !1),
				(this.loaded_ = !0),
				(this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this)),
				(this.maxTilesLoading_ = void 0 !== t.maxTilesLoading ? t.maxTilesLoading : 16),
				(this.pixelRatio_ = void 0 !== t.pixelRatio ? t.pixelRatio : Qa),
				this.postRenderTimeoutHandle_,
				this.animationDelayKey_,
				(this.animationDelay_ = this.animationDelay_.bind(this)),
				(this.coordinateToPixelTransform_ = [1, 0, 0, 1, 0, 0]),
				(this.pixelToCoordinateTransform_ = [1, 0, 0, 1, 0, 0]),
				(this.frameIndex_ = 0),
				(this.frameState_ = null),
				(this.previousExtent_ = null),
				(this.viewPropertyListenerKey_ = null),
				(this.viewChangeListenerKey_ = null),
				(this.layerGroupPropertyListenerKeys_ = null),
				(this.viewport_ = document.createElement('div')),
				(this.viewport_.className = 'ol-viewport' + ('ontouchstart' in window ? ' ol-touch' : '')),
				(this.viewport_.style.position = 'relative'),
				(this.viewport_.style.overflow = 'hidden'),
				(this.viewport_.style.width = '100%'),
				(this.viewport_.style.height = '100%'),
				(this.overlayContainer_ = document.createElement('div')),
				(this.overlayContainer_.style.position = 'absolute'),
				(this.overlayContainer_.style.zIndex = '0'),
				(this.overlayContainer_.style.width = '100%'),
				(this.overlayContainer_.style.height = '100%'),
				(this.overlayContainer_.style.pointerEvents = 'none'),
				(this.overlayContainer_.className = 'ol-overlaycontainer'),
				this.viewport_.appendChild(this.overlayContainer_),
				(this.overlayContainerStopEvent_ = document.createElement('div')),
				(this.overlayContainerStopEvent_.style.position = 'absolute'),
				(this.overlayContainerStopEvent_.style.zIndex = '0'),
				(this.overlayContainerStopEvent_.style.width = '100%'),
				(this.overlayContainerStopEvent_.style.height = '100%'),
				(this.overlayContainerStopEvent_.style.pointerEvents = 'none'),
				(this.overlayContainerStopEvent_.className = 'ol-overlaycontainer-stopevent'),
				this.viewport_.appendChild(this.overlayContainerStopEvent_),
				(this.mapBrowserEventHandler_ = null),
				(this.moveTolerance_ = t.moveTolerance),
				(this.keyboardEventTarget_ = e.keyboardEventTarget),
				(this.targetChangeHandlerKeys_ = null),
				(this.targetElement_ = null),
				(this.resizeObserver_ = new ResizeObserver(() => this.updateSize())),
				(this.controls =
					e.controls ||
					(function (t) {
						t = t || {};
						const e = new dh();
						return (void 0 === t.zoom || t.zoom) && e.push(new af(t.zoomOptions)), (void 0 === t.rotate || t.rotate) && e.push(new of(t.rotateOptions)), (void 0 === t.attribution || t.attribution) && e.push(new sf(t.attributionOptions)), e;
					})()),
				(this.interactions = e.interactions || Wf({ onFocusOnly: !0 })),
				(this.overlays_ = e.overlays),
				(this.overlayIdIndex_ = {}),
				(this.renderer_ = null),
				(this.postRenderFunctions_ = []),
				(this.tileQueue_ = new ef(this.getTilePriority.bind(this), this.handleTileChange_.bind(this))),
				this.addChangeListener(Kg, this.handleLayerGroupChanged_),
				this.addChangeListener(Jg, this.handleViewChanged_),
				this.addChangeListener(Yg, this.handleSizeChanged_),
				this.addChangeListener(Hg, this.handleTargetChanged_),
				this.setProperties(e.values);
			const n = this;
			!t.view ||
				t.view instanceof hg ||
				t.view.then(function (t) {
					n.setView(new hg(t));
				}),
				this.controls.addEventListener(lh, (t) => {
					t.element.setMap(this);
				}),
				this.controls.addEventListener(hh, (t) => {
					t.element.setMap(null);
				}),
				this.interactions.addEventListener(lh, (t) => {
					t.element.setMap(this);
				}),
				this.interactions.addEventListener(hh, (t) => {
					t.element.setMap(null);
				}),
				this.overlays_.addEventListener(lh, (t) => {
					this.addOverlayInternal_(t.element);
				}),
				this.overlays_.addEventListener(hh, (t) => {
					const e = t.element.getId();
					void 0 !== e && delete this.overlayIdIndex_[e.toString()], t.element.setMap(null);
				}),
				this.controls.forEach((t) => {
					t.setMap(this);
				}),
				this.interactions.forEach((t) => {
					t.setMap(this);
				}),
				this.overlays_.forEach(this.addOverlayInternal_.bind(this));
		}
		addControl(t) {
			this.getControls().push(t);
		}
		addInteraction(t) {
			this.getInteractions().push(t);
		}
		addLayer(t) {
			this.getLayerGroup().getLayers().push(t);
		}
		handleLayerAdd_(t) {
			tp(t.layer, this);
		}
		addOverlay(t) {
			this.getOverlays().push(t);
		}
		addOverlayInternal_(t) {
			const e = t.getId();
			void 0 !== e && (this.overlayIdIndex_[e.toString()] = t), t.setMap(this);
		}
		disposeInternal() {
			this.controls.clear(), this.interactions.clear(), this.overlays_.clear(), this.resizeObserver_.disconnect(), this.setTarget(null), super.disposeInternal();
		}
		forEachFeatureAtPixel(t, e, n) {
			if (!this.frameState_ || !this.renderer_) return;
			const i = this.getCoordinateFromPixelInternal(t),
				r = void 0 !== (n = void 0 !== n ? n : {}).hitTolerance ? n.hitTolerance : 0,
				s = void 0 !== n.layerFilter ? n.layerFilter : Bn,
				o = !1 !== n.checkWrapped;
			return this.renderer_.forEachFeatureAtCoordinate(i, this.frameState_, r, o, e, null, s, null);
		}
		getFeaturesAtPixel(t, e) {
			const n = [];
			return (
				this.forEachFeatureAtPixel(
					t,
					function (t) {
						n.push(t);
					},
					e
				),
				n
			);
		}
		getAllLayers() {
			const t = [];
			return (
				(function e(n) {
					n.forEach(function (n) {
						n instanceof Zf ? e(n.getLayers()) : t.push(n);
					});
				})(this.getLayers()),
				t
			);
		}
		hasFeatureAtPixel(t, e) {
			if (!this.frameState_ || !this.renderer_) return !1;
			const n = this.getCoordinateFromPixelInternal(t),
				i = void 0 !== (e = void 0 !== e ? e : {}).layerFilter ? e.layerFilter : Bn,
				r = void 0 !== e.hitTolerance ? e.hitTolerance : 0,
				s = !1 !== e.checkWrapped;
			return this.renderer_.hasFeatureAtCoordinate(n, this.frameState_, r, s, i, null);
		}
		getEventCoordinate(t) {
			return this.getCoordinateFromPixel(this.getEventPixel(t));
		}
		getEventCoordinateInternal(t) {
			return this.getCoordinateFromPixelInternal(this.getEventPixel(t));
		}
		getEventPixel(t) {
			const e = this.viewport_.getBoundingClientRect(),
				n = this.getSize(),
				i = e.width / n[0],
				r = e.height / n[1],
				s = 'changedTouches' in t ? t.changedTouches[0] : t;
			return [(s.clientX - e.left) / i, (s.clientY - e.top) / r];
		}
		getTarget() {
			return this.get(Hg);
		}
		getTargetElement() {
			return this.targetElement_;
		}
		getCoordinateFromPixel(t) {
			return Co(this.getCoordinateFromPixelInternal(t), this.getView().getProjection());
		}
		getCoordinateFromPixelInternal(t) {
			const e = this.frameState_;
			return e ? Do(e.pixelToCoordinateTransform, t.slice()) : null;
		}
		getControls() {
			return this.controls;
		}
		getOverlays() {
			return this.overlays_;
		}
		getOverlayById(t) {
			const e = this.overlayIdIndex_[t.toString()];
			return void 0 !== e ? e : null;
		}
		getInteractions() {
			return this.interactions;
		}
		getLayerGroup() {
			return this.get(Kg);
		}
		setLayers(t) {
			const e = this.getLayerGroup();
			if (t instanceof dh) return void e.setLayers(t);
			const n = e.getLayers();
			n.clear(), n.extend(t);
		}
		getLayers() {
			return this.getLayerGroup().getLayers();
		}
		getLoadingOrNotReady() {
			const t = this.getLayerGroup().getLayerStatesArray();
			for (let e = 0, n = t.length; e < n; ++e) {
				const n = t[e];
				if (!n.visible) continue;
				const i = n.layer.getRenderer();
				if (i && !i.ready) return !0;
				const r = n.layer.getSource();
				if (r && r.loading) return !0;
			}
			return !1;
		}
		getPixelFromCoordinate(t) {
			const e = Eo(t, this.getView().getProjection());
			return this.getPixelFromCoordinateInternal(e);
		}
		getPixelFromCoordinateInternal(t) {
			const e = this.frameState_;
			return e ? Do(e.coordinateToPixelTransform, t.slice(0, 2)) : null;
		}
		getRenderer() {
			return this.renderer_;
		}
		getSize() {
			return this.get(Yg);
		}
		getView() {
			return this.get(Jg);
		}
		getViewport() {
			return this.viewport_;
		}
		getOverlayContainer() {
			return this.overlayContainer_;
		}
		getOverlayContainerStopEvent() {
			return this.overlayContainerStopEvent_;
		}
		getOwnerDocument() {
			const t = this.getTargetElement();
			return t ? t.ownerDocument : document;
		}
		getTilePriority(t, e, n, i) {
			return (function (t, e, n, i, r) {
				if (!t || !(n in t.wantedTiles)) return Qg;
				if (!t.wantedTiles[n][e.getKey()]) return Qg;
				const s = t.viewState.center,
					o = i[0] - s[0],
					a = i[1] - s[1];
				return 65536 * Math.log(r) + Math.sqrt(o * o + a * a) / r;
			})(this.frameState_, t, e, n, i);
		}
		handleBrowserEvent(t, e) {
			e = e || t.type;
			const n = new jg(e, this, t);
			this.handleMapBrowserEvent(n);
		}
		handleMapBrowserEvent(t) {
			if (!this.frameState_) return;
			const e = t.originalEvent,
				n = e.type;
			if (n === $g || n === ai || n === ii) {
				const t = this.getOwnerDocument(),
					n = this.viewport_.getRootNode ? this.viewport_.getRootNode() : t,
					i = e.target,
					r = n instanceof ShadowRoot ? (n.host === i ? n.host.ownerDocument : n) : n === t ? t.documentElement : n;
				if (this.overlayContainerStopEvent_.contains(i) || !r.contains(i)) return;
			}
			if (((t.frameState = this.frameState_), !1 !== this.dispatchEvent(t))) {
				const e = this.getInteractions().getArray().slice();
				for (let n = e.length - 1; n >= 0; n--) {
					const i = e[n];
					if (i.getMap() !== this || !i.getActive() || !this.getTargetElement()) continue;
					if (!i.handleEvent(t) || t.propagationStopped) break;
				}
			}
		}
		handlePostRender() {
			const t = this.frameState_,
				e = this.tileQueue_;
			if (!e.isEmpty()) {
				let n = this.maxTilesLoading_,
					i = n;
				if (t) {
					const e = t.viewHints;
					if (e[sc] || e[oc]) {
						const e = Date.now() - t.time > 8;
						(n = e ? 0 : 8), (i = e ? 0 : 2);
					}
				}
				e.getTilesLoading() < n && (e.reprioritize(), e.loadMoreTiles(n, i));
			}
			t && this.renderer_ && !t.animate && (this.renderComplete_ ? (this.hasListener(_h) && this.renderer_.dispatchRenderEvent(_h, t), !1 === this.loaded_ && ((this.loaded_ = !0), this.dispatchEvent(new Gg(Zg, this, t)))) : !0 === this.loaded_ && ((this.loaded_ = !1), this.dispatchEvent(new Gg(qg, this, t))));
			const n = this.postRenderFunctions_;
			if (t) for (let e = 0, i = n.length; e < i; ++e) n[e](this, t);
			n.length = 0;
		}
		handleSizeChanged_() {
			this.getView() && !this.getView().getAnimating() && this.getView().resolveConstraints(0), this.render();
		}
		handleTargetChanged_() {
			if (this.mapBrowserEventHandler_) {
				for (let t = 0, e = this.targetChangeHandlerKeys_.length; t < e; ++t) pi(this.targetChangeHandlerKeys_[t]);
				(this.targetChangeHandlerKeys_ = null), this.viewport_.removeEventListener(Hn, this.boundHandleBrowserEvent_), this.viewport_.removeEventListener(ai, this.boundHandleBrowserEvent_), this.mapBrowserEventHandler_.dispose(), (this.mapBrowserEventHandler_ = null), this.viewport_.remove();
			}
			if (this.targetElement_) {
				this.resizeObserver_.unobserve(this.targetElement_);
				const t = this.targetElement_.getRootNode();
				t instanceof ShadowRoot && this.resizeObserver_.unobserve(t.host), this.setSize(void 0);
			}
			const t = this.getTarget(),
				e = 'string' == typeof t ? document.getElementById(t) : t;
			if (((this.targetElement_ = e), e)) {
				e.appendChild(this.viewport_), this.renderer_ || (this.renderer_ = new Jf(this)), (this.mapBrowserEventHandler_ = new Bg(this, this.moveTolerance_));
				for (const t in Ng) this.mapBrowserEventHandler_.addEventListener(Ng[t], this.handleMapBrowserEvent.bind(this));
				let t;
				if ((this.viewport_.addEventListener(Hn, this.boundHandleBrowserEvent_, !1), this.viewport_.addEventListener(ai, this.boundHandleBrowserEvent_, !!il && { passive: !1 }), this.keyboardEventTarget_)) t = this.keyboardEventTarget_;
				else {
					const n = e.getRootNode();
					t = n instanceof ShadowRoot ? n.host : e;
				}
				this.targetChangeHandlerKeys_ = [gi(t, ii, this.handleBrowserEvent, this), gi(t, ri, this.handleBrowserEvent, this)];
				const n = e.getRootNode();
				n instanceof ShadowRoot && this.resizeObserver_.observe(n.host), this.resizeObserver_.observe(e);
			} else this.renderer_ && (clearTimeout(this.postRenderTimeoutHandle_), (this.postRenderTimeoutHandle_ = void 0), (this.postRenderFunctions_.length = 0), this.renderer_.dispose(), (this.renderer_ = null)), this.animationDelayKey_ && (cancelAnimationFrame(this.animationDelayKey_), (this.animationDelayKey_ = void 0));
			this.updateSize();
		}
		handleTileChange_() {
			this.render();
		}
		handleViewPropertyChanged_() {
			this.render();
		}
		handleViewChanged_() {
			this.viewPropertyListenerKey_ && (pi(this.viewPropertyListenerKey_), (this.viewPropertyListenerKey_ = null)), this.viewChangeListenerKey_ && (pi(this.viewChangeListenerKey_), (this.viewChangeListenerKey_ = null));
			const t = this.getView();
			t && (this.updateViewportSize_(this.getSize()), (this.viewPropertyListenerKey_ = gi(t, Zn, this.handleViewPropertyChanged_, this)), (this.viewChangeListenerKey_ = gi(t, Kn, this.handleViewPropertyChanged_, this)), t.resolveConstraints(0)), this.render();
		}
		handleLayerGroupChanged_() {
			this.layerGroupPropertyListenerKeys_ && (this.layerGroupPropertyListenerKeys_.forEach(pi), (this.layerGroupPropertyListenerKeys_ = null));
			const t = this.getLayerGroup();
			t && (this.handleLayerAdd_(new Xf('addlayer', t)), (this.layerGroupPropertyListenerKeys_ = [gi(t, Zn, this.render, this), gi(t, Kn, this.render, this), gi(t, 'addlayer', this.handleLayerAdd_, this), gi(t, 'removelayer', this.handleLayerRemove_, this)])), this.render();
		}
		isRendered() {
			return !!this.frameState_;
		}
		animationDelay_() {
			(this.animationDelayKey_ = void 0), this.renderFrame_(Date.now());
		}
		renderSync() {
			this.animationDelayKey_ && cancelAnimationFrame(this.animationDelayKey_), this.animationDelay_();
		}
		redrawText() {
			const t = this.getLayerGroup().getLayerStatesArray();
			for (let e = 0, n = t.length; e < n; ++e) {
				const n = t[e].layer;
				n.hasRenderer() && n.getRenderer().handleFontsChanged();
			}
		}
		render() {
			this.renderer_ && void 0 === this.animationDelayKey_ && (this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_));
		}
		removeControl(t) {
			return this.getControls().remove(t);
		}
		removeInteraction(t) {
			return this.getInteractions().remove(t);
		}
		removeLayer(t) {
			return this.getLayerGroup().getLayers().remove(t);
		}
		handleLayerRemove_(t) {
			Qf(t.layer);
		}
		removeOverlay(t) {
			return this.getOverlays().remove(t);
		}
		renderFrame_(t) {
			const e = this.getSize(),
				n = this.getView(),
				i = this.frameState_;
			let r = null;
			if (void 0 !== e && ql(e) && n && n.isDef()) {
				const i = n.getHints(this.frameState_ ? this.frameState_.viewHints : void 0),
					s = n.getState();
				if (((r = { animate: !1, coordinateToPixelTransform: this.coordinateToPixelTransform_, declutter: null, extent: nr(s.center, s.resolution, s.rotation, e), index: this.frameIndex_++, layerIndex: 0, layerStatesArray: this.getLayerGroup().getLayerStatesArray(), pixelRatio: this.pixelRatio_, pixelToCoordinateTransform: this.pixelToCoordinateTransform_, postRenderFunctions: [], size: e, tileQueue: this.tileQueue_, time: t, usedTiles: {}, viewState: s, viewHints: i, wantedTiles: {}, mapId: wi(this), renderTargets: {} }), s.nextCenter && s.nextResolution)) {
					const t = isNaN(s.nextRotation) ? s.rotation : s.nextRotation;
					r.nextExtent = nr(s.nextCenter, s.nextResolution, t, e);
				}
			}
			if (((this.frameState_ = r), this.renderer_.renderFrame(r), r)) {
				if ((r.animate && this.render(), Array.prototype.push.apply(this.postRenderFunctions_, r.postRenderFunctions), i)) {
					(!this.previousExtent_ || (!cr(this.previousExtent_) && !Wi(r.extent, this.previousExtent_))) && (this.dispatchEvent(new Gg(Wg, this, i)), (this.previousExtent_ = $i(this.previousExtent_)));
				}
				this.previousExtent_ && !r.viewHints[sc] && !r.viewHints[oc] && !Wi(r.extent, this.previousExtent_) && (this.dispatchEvent(new Gg(Xg, this, r)), Ai(r.extent, this.previousExtent_));
			}
			this.dispatchEvent(new Gg(Vg, this, r)),
				(this.renderComplete_ = (this.hasListener(qg) || this.hasListener(Zg) || this.hasListener(_h)) && !this.tileQueue_.getTilesLoading() && !this.tileQueue_.getCount() && !this.getLoadingOrNotReady()),
				this.postRenderTimeoutHandle_ ||
					(this.postRenderTimeoutHandle_ = setTimeout(() => {
						(this.postRenderTimeoutHandle_ = void 0), this.handlePostRender();
					}, 0));
		}
		setLayerGroup(t) {
			const e = this.getLayerGroup();
			e && this.handleLayerRemove_(new Xf('removelayer', e)), this.set(Kg, t);
		}
		setSize(t) {
			this.set(Yg, t);
		}
		setTarget(t) {
			this.set(Hg, t);
		}
		setView(t) {
			if (!t || t instanceof hg) return void this.set(Jg, t);
			this.set(Jg, new hg());
			const e = this;
			t.then(function (t) {
				e.setView(new hg(t));
			});
		}
		updateSize() {
			const t = this.getTargetElement();
			let e;
			if (t) {
				const n = getComputedStyle(t),
					i = t.offsetWidth - parseFloat(n.borderLeftWidth) - parseFloat(n.paddingLeft) - parseFloat(n.paddingRight) - parseFloat(n.borderRightWidth),
					r = t.offsetHeight - parseFloat(n.borderTopWidth) - parseFloat(n.paddingTop) - parseFloat(n.paddingBottom) - parseFloat(n.borderBottomWidth);
				isNaN(i) || isNaN(r) || ((e = [Math.max(0, i), Math.max(0, r)]), !ql(e) && (t.offsetWidth || t.offsetHeight || t.getClientRects().length) && Zr("No map visible because the map container's width or height are 0."));
			}
			const n = this.getSize();
			!e || (n && $n(e, n)) || (this.setSize(e), this.updateViewportSize_(e));
		}
		updateViewportSize_(t) {
			const e = this.getView();
			e && e.setViewportSize(t);
		}
	}
	const np = 'element',
		ip = 'map',
		rp = 'offset',
		sp = 'position',
		op = 'positioning';
	class ap {
		constructor(t, e, n, i) {
			(this.minX = t), (this.maxX = e), (this.minY = n), (this.maxY = i);
		}
		contains(t) {
			return this.containsXY(t[1], t[2]);
		}
		containsTileRange(t) {
			return this.minX <= t.minX && t.maxX <= this.maxX && this.minY <= t.minY && t.maxY <= this.maxY;
		}
		containsXY(t, e) {
			return this.minX <= t && t <= this.maxX && this.minY <= e && e <= this.maxY;
		}
		equals(t) {
			return this.minX == t.minX && this.minY == t.minY && this.maxX == t.maxX && this.maxY == t.maxY;
		}
		extend(t) {
			t.minX < this.minX && (this.minX = t.minX), t.maxX > this.maxX && (this.maxX = t.maxX), t.minY < this.minY && (this.minY = t.minY), t.maxY > this.maxY && (this.maxY = t.maxY);
		}
		getHeight() {
			return this.maxY - this.minY + 1;
		}
		getSize() {
			return [this.getWidth(), this.getHeight()];
		}
		getWidth() {
			return this.maxX - this.minX + 1;
		}
		intersects(t) {
			return this.minX <= t.maxX && this.maxX >= t.minX && this.minY <= t.maxY && this.maxY >= t.minY;
		}
	}
	function lp(t, e, n, i, r) {
		return void 0 !== r ? ((r.minX = t), (r.maxX = e), (r.minY = n), (r.maxY = i), r) : new ap(t, e, n, i);
	}
	const hp = [];
	class cp extends Dg {
		constructor(t, e, n, i, r) {
			super(t, e, { transition: 0 }), (this.context_ = null), (this.executorGroups = {}), (this.loadingSourceTiles = 0), (this.hitDetectionImageData = {}), (this.replayState_ = {}), (this.sourceTiles = []), (this.errorTileKeys = {}), this.wantedResolution, (this.getSourceTiles = i.bind(void 0, this)), (this.removeSourceTiles_ = r), (this.wrappedTileCoord = n);
		}
		getContext() {
			return this.context_ || (this.context_ = rl(1, 1, hp)), this.context_;
		}
		hasContext() {
			return !!this.context_;
		}
		getImage() {
			return this.hasContext() ? this.getContext().canvas : null;
		}
		getReplayState(t) {
			const e = wi(t);
			return e in this.replayState_ || (this.replayState_[e] = { dirty: !1, renderedRenderOrder: null, renderedResolution: NaN, renderedRevision: -1, renderedTileResolution: NaN, renderedTileRevision: -1, renderedTileZ: -1 }), this.replayState_[e];
		}
		load() {
			this.getSourceTiles();
		}
		release() {
			this.context_ && (al(this.context_), hp.push(this.context_.canvas), (this.context_ = null)), this.removeSourceTiles_(this), (this.sourceTiles.length = 0), super.release();
		}
	}
	let up = class extends Dg {
		constructor(t, e, n, i, r, s) {
			super(t, e, s), (this.extent = null), (this.format_ = i), (this.features_ = null), this.loader_, (this.projection = null), this.resolution, (this.tileLoadFunction_ = r), (this.url_ = n), (this.key = n);
		}
		getTileUrl() {
			return this.url_;
		}
		getFormat() {
			return this.format_;
		}
		getFeatures() {
			return this.features_;
		}
		load() {
			this.state == Mg && (this.setState(Ig), this.tileLoadFunction_(this, this.url_), this.loader_ && this.loader_(this.extent, this.resolution, this.projection));
		}
		onLoad(t, e) {
			this.setFeatures(t);
		}
		onError() {
			this.setState(Lg);
		}
		setFeatures(t) {
			(this.features_ = t), this.setState(kg);
		}
		setLoader(t) {
			this.loader_ = t;
		}
	};
	const dp = 'https://api.mapbox.com';
	function gp(t) {
		const e = 'mapbox://';
		return 0 !== t.indexOf(e) ? '' : t.slice(9);
	}
	function fp(t, e) {
		const n = gp(t);
		if (!n) return decodeURI(new URL(t, location.href).href);
		const i = 'styles/';
		if (0 !== n.indexOf(i)) throw new Error(`unexpected style url: ${t}`);
		const r = n.slice(7);
		return `${dp}/styles/v1/${r}?&access_token=${e}`;
	}
	const pp = ['a', 'b', 'c', 'd'];
	function mp(t, e, n, i) {
		const r = new URL(t, i),
			s = gp(t);
		if (!s) return e ? (r.searchParams.has(n) || r.searchParams.set(n, e), [decodeURI(r.href)]) : [decodeURI(r.href)];
		if ('mapbox.satellite' === s) {
			const t = window.devicePixelRatio >= 1.5 ? '@2x' : '';
			return [`https://api.mapbox.com/v4/${s}/{z}/{x}/{y}${t}.webp?access_token=${e}`];
		}
		return pp.map((t) => `https://${t}.tiles.mapbox.com/v4/${s}/{z}/{x}/{y}.vector.pbf?access_token=${e}`);
	}
	const _p = {},
		yp = {};
	let xp = 0;
	function vp(t) {
		return t.id || (t.id = xp++), t.id;
	}
	function wp(t, e) {
		return vp(t) + '.' + wi(e);
	}
	function bp(t) {
		let e = _p[t.id];
		return e || ((e = {}), (_p[vp(t)] = e)), e;
	}
	function Sp(t) {
		let e = yp[t.id];
		return e || ((e = {}), (yp[vp(t)] = e)), e;
	}
	function Cp(t) {
		return (t * Math.PI) / 180;
	}
	const Ep = (function () {
		const t = [];
		for (let e = 78271.51696402048; t.length <= 24; e /= 2) t.push(e);
		return t;
	})();
	function Tp(t, e) {
		if ('undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && 'undefined' != typeof OffscreenCanvas) return new OffscreenCanvas(t, e);
		const n = document.createElement('canvas');
		return (n.width = t), (n.height = e), n;
	}
	function Pp(t, e) {
		let n = 0;
		const i = e.length;
		for (; n < i; ++n) {
			if (e[n] < t && n + 1 < i) {
				const i = e[n] / e[n + 1];
				return n + Math.log(e[n] / t) / Math.log(i);
			}
		}
		return i - 1;
	}
	function Rp(t, e) {
		const n = Math.floor(t),
			i = Math.pow(2, t - n);
		return e[n] / i;
	}
	const Fp = {};
	function Mp(t, e, n = {}, i) {
		if (e in Fp) return i && (i.request = Fp[e][0]), Fp[e][1];
		const r = (n.transformRequest && n.transformRequest(e, t)) || e,
			s = qn(() => r).then(
				(t) => (
					t instanceof Request || (t = new Request(t)),
					t.headers.get('Accept') || t.headers.set('Accept', 'application/json'),
					i && (i.request = t),
					fetch(t)
						.then(function (t) {
							return delete Fp[e], t.ok ? t.json() : Promise.reject(new Error('Error fetching source ' + e));
						})
						.catch(function (t) {
							return delete Fp[e], Promise.reject(new Error('Error fetching source ' + e));
						})
				)
			);
		return (Fp[e] = [r, s]), s;
	}
	function Ip(t, e) {
		if ('string' != typeof t) return Promise.resolve(t);
		if (!t.trim().startsWith('{')) return Mp('Style', (t = fp(t, e.accessToken)), e);
		try {
			const e = JSON.parse(t);
			return Promise.resolve(e);
		} catch (t) {
			return Promise.reject(t);
		}
	}
	const kp = {};
	function Lp(t, e, n = {}) {
		const i = [e, JSON.stringify(t)].toString();
		let r = kp[i];
		if (!r || n.transformRequest) {
			let s;
			n.transformRequest &&
				(s = (t, e) => {
					const i = (n.transformRequest && n.transformRequest(e, 'Tiles')) || e;
					if (t instanceof up)
						t.setLoader((e, n, r) => {
							qn(() => i).then((n) => {
								fetch(n)
									.then((t) => t.arrayBuffer())
									.then((n) => {
										const i = t.getFormat().readFeatures(n, { extent: e, featureProjection: r });
										t.setFeatures(i);
									})
									.catch((e) => t.setState(Lg));
							});
						});
					else {
						const e = t.getImage();
						qn(() => i).then((n) => {
							n instanceof Request
								? fetch(n)
										.then((t) => t.blob())
										.then((t) => {
											const n = URL.createObjectURL(t);
											e.addEventListener('load', () => URL.revokeObjectURL(n)), e.addEventListener('error', () => URL.revokeObjectURL(n)), (e.src = n);
										})
										.catch((e) => t.setState(Lg))
								: (e.src = n);
						});
					}
				});
			const o = t.url;
			if (o && !t.tiles) {
				const i = mp(o, n.accessToken, n.accessTokenParam || 'access_token', e || location.href);
				if (o.startsWith('mapbox://')) r = Promise.resolve({ tileJson: Object.assign({}, t, { url: void 0, tiles: i }), tileLoadFunction: s });
				else {
					const t = {};
					r = Mp('Source', i[0], n, t).then(function (e) {
						return (
							(e.tiles = e.tiles.map(function (i) {
								return 'tms' === e.scheme && (i = i.replace('{y}', '{-y}')), mp(i, n.accessToken, n.accessTokenParam || 'access_token', t.request.url)[0];
							})),
							Promise.resolve({ tileJson: e, tileLoadFunction: s })
						);
					});
				}
			} else
				(t = Object.assign({}, t, {
					tiles: t.tiles.map(function (i) {
						return 'tms' === t.scheme && (i = i.replace('{y}', '{-y}')), mp(i, n.accessToken, n.accessTokenParam || 'access_token', e || location.href)[0];
					}),
				})),
					(r = Promise.resolve({ tileJson: Object.assign({}, t), tileLoadFunction: s }));
			kp[i] = r;
		}
		return r;
	}
	function Ap(t, e, n, i) {
		const r = [2 * n * e.pixelRatio + e.width, 2 * n * e.pixelRatio + e.height],
			s = Tp(r[0], r[1]),
			o = s.getContext('2d');
		o.drawImage(t, e.x, e.y, e.width, e.height, n * e.pixelRatio, n * e.pixelRatio, e.width, e.height);
		const a = o.getImageData(0, 0, r[0], r[1]);
		(o.globalCompositeOperation = 'destination-over'), (o.fillStyle = `rgba(${255 * i.r},${255 * i.g},${255 * i.b},${i.a})`);
		const l = a.data;
		for (let t = 0, i = a.width; t < i; ++t)
			for (let r = 0, s = a.height; r < s; ++r) {
				l[4 * (r * i + t) + 3] > 0 && o.arc(t, r, n * e.pixelRatio, 0, 2 * Math.PI);
			}
		return o.fill(), s;
	}
	function Dp(t, e, n) {
		const i = Math.max(0, Math.min(1, (n - t) / (e - t)));
		return i * i * (3 - 2 * i);
	}
	function Op(t, e, n) {
		const i = Tp(e.width, e.height),
			r = i.getContext('2d');
		r.drawImage(t, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height);
		const s = r.getImageData(0, 0, e.width, e.height),
			o = s.data;
		for (let t = 0, e = s.width; t < e; ++t)
			for (let i = 0, r = s.height; i < r; ++i) {
				const r = 4 * (i * e + t),
					s = 0.75,
					a = 0.1,
					l = Dp(s - a, s + a, o[r + 3] / 255);
				l > 0 ? ((o[r + 0] = Math.round(255 * n.r * l)), (o[r + 1] = Math.round(255 * n.g * l)), (o[r + 2] = Math.round(255 * n.b * l)), (o[r + 3] = Math.round(255 * l))) : (o[r + 3] = 0);
			}
		return r.putImageData(s, 0, 0), i;
	}
	const zp = Array(256).join(' ');
	function Gp(t, e) {
		if (e >= 0.05) {
			let n = '';
			const i = t.split('\n'),
				r = zp.slice(0, Math.round(e / 0.1));
			for (let t = 0, e = i.length; t < e; ++t) t > 0 && (n += '\n'), (n += i[t].split('').join(r));
			return n;
		}
		return t;
	}
	let jp;
	function Np() {
		return jp || (jp = Tp(1, 1).getContext('2d')), jp;
	}
	function Up(t, e) {
		return Np().measureText(t).width + (t.length - 1) * e;
	}
	const $p = {};
	function Bp(t, e, n, i) {
		if (-1 !== t.indexOf('\n')) {
			const r = t.split('\n'),
				s = [];
			for (let t = 0, o = r.length; t < o; ++t) s.push(Bp(r[t], e, n, i));
			return s.join('\n');
		}
		const r = n + ',' + e + ',' + t + ',' + i;
		let s = $p[r];
		if (!s) {
			const o = t.split(' ');
			if (o.length > 1) {
				const t = Np();
				t.font = e;
				const r = t.measureText('M').width * n;
				let a = '';
				const l = [];
				for (let t = 0, e = o.length; t < e; ++t) {
					const e = o[t],
						n = a + (a ? ' ' : '') + e;
					Up(n, i) <= r ? (a = n) : (a && l.push(a), (a = e));
				}
				a && l.push(a);
				for (let t = 0, e = l.length; t < e && e > 1; ++t) {
					const n = l[t];
					if (Up(n, i) < 0.35 * r) {
						const r = t > 0 ? Up(l[t - 1], i) : 1 / 0,
							s = t < e - 1 ? Up(l[t + 1], i) : 1 / 0;
						l.splice(t, 1), (e -= 1), r < s ? ((l[t - 1] += ' ' + n), (t -= 1)) : (l[t] = n + ' ' + l[t]);
					}
				}
				for (let t = 0, e = l.length - 1; t < e; ++t) {
					const n = l[t],
						s = l[t + 1];
					if (Up(n, i) > 0.7 * r && Up(s, i) < 0.6 * r) {
						const o = n.split(' '),
							a = o.pop();
						Up(a, i) < 0.2 * r && ((l[t] = o.join(' ')), (l[t + 1] = a + ' ' + s)), (e -= 1);
					}
				}
				s = l.join('\n');
			} else s = t;
			(s = Gp(s, i)), ($p[r] = s);
		}
		return s;
	}
	const Vp = /font-family: ?([^;]*);/,
		Wp = /("|')/g;
	let Xp;
	function qp(t) {
		if (!Xp) {
			Xp = {};
			const t = document.styleSheets;
			for (let e = 0, n = t.length; e < n; ++e) {
				const n = t[e];
				try {
					const t = n.rules || n.cssRules;
					if (t)
						for (let e = 0, n = t.length; e < n; ++e) {
							const n = t[e];
							if (5 == n.type) {
								const t = n.cssText.match(Vp);
								Xp[t[1].replace(Wp, '')] = !0;
							}
						}
				} catch {}
			}
		}
		return t in Xp;
	}
	const Zp = {};
	const Kp = { Point: 1, MultiPoint: 1, LineString: 2, MultiLineString: 2, Polygon: 3, MultiPolygon: 3 },
		Yp = { center: [0.5, 0.5], left: [0, 0.5], right: [1, 0.5], top: [0.5, 0], bottom: [0.5, 1], 'top-left': [0, 0], 'top-right': [1, 0], 'bottom-left': [0, 1], 'bottom-right': [1, 1] },
		Hp = {},
		Jp = { zoom: 0 };
	let Qp, tm;
	function em(t, e, n, i, r, s, o) {
		const a = t.id;
		s || ((s = {}), console.warn('No functionCache provided to getValue()')), s[a] || (s[a] = {});
		const l = s[a];
		if (!l[n]) {
			let i = (t[e] || Hp)[n];
			const r = In[`${e}_${t.type}`][n];
			void 0 === i && (i = r.default);
			let s = ((h = i), Array.isArray(h) && h.length > 0 && 'string' == typeof h[0] && h[0] in Xe);
			if ((!s && sn(i) && ((i = Sn(i, r)), (s = !0)), s)) {
				const t = (function (t, e) {
					const n = cn(t, e);
					if ('error' === n.result) throw new Error(n.value.map((t) => `${t.key}: ${t.message}`).join(', '));
					return n.value;
				})(i, r);
				l[n] = t.evaluate.bind(t);
			} else
				'color' == r.type && (i = Y.parse(i)),
					(l[n] = function () {
						return i;
					});
		}
		var h;
		return (Jp.zoom = i), l[n](Jp, r, o);
	}
	function nm(t, e, n, i, r) {
		if (!em(t, 'layout', `${i}-allow-overlap`, e, n, r)) return 'declutter';
		return em(t, 'layout', `${i}-ignore-placement`, e, n, r) ? 'none' : 'obstacle';
	}
	function im(t, e, n, i, r) {
		return r || console.warn('No filterCache provided to evaluateFilter()'), t in r || (r[t] = fn(e).filter), (Jp.zoom = i), r[t](Jp, n);
	}
	let rm = !1;
	function sm(t, e) {
		if (t) {
			if (!rm && (0 === t.a || 0 === e)) return;
			const n = t.a;
			return (e = void 0 === e ? 1 : e), 0 === n ? 'transparent' : 'rgba(' + Math.round((255 * t.r) / n) + ',' + Math.round((255 * t.g) / n) + ',' + Math.round((255 * t.b) / n) + ',' + n * e + ')';
		}
		return t;
	}
	const om = /\{[^{}}]*\}/g;
	function am(t, e) {
		return t.replace(om, function (t) {
			return e[t.slice(1, -1)] || '';
		});
	}
	let lm = !1;
	const hm = {};
	function cm(t, e, n, i = Ep, s = void 0, o = void 0, a = void 0, l = void 0) {
		if (('string' == typeof e && (e = JSON.parse(e)), 8 != e.version)) throw new Error('glStyle version 8 required.');
		let h, c, u;
		if (((hm[wp(e, t)] = Array.from(arguments)), o))
			if ('undefined' != typeof Image) {
				const e = new Image();
				let n;
				qn(() => o).then((t) => {
					t instanceof Request
						? fetch(t)
								.then((t) => t.blob())
								.then((t) => {
									(n = URL.createObjectURL(t)), (e.src = n);
								})
								.catch(() => {})
						: ((e.crossOrigin = 'anonymous'), (e.src = t), n && URL.revokeObjectURL(n));
				}),
					(e.onload = function () {
						(h = e), (c = [e.width, e.height]), t.changed(), (e.onload = null);
					});
			} else if ('undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope) {
				const t = self;
				t.postMessage({ action: 'loadImage', src: o }),
					t.addEventListener('message', function (t) {
						'imageLoaded' === t.data.action && t.data.src === o && ((h = t.data.image), (c = [h.width, h.height]));
					});
			}
		const d = r(e.layers),
			g = {},
			f = [],
			p = {},
			m = {},
			_ = bp(e),
			y = Sp(e);
		let x;
		for (let t = 0, i = d.length; t < i; ++t) {
			const i = d[t],
				r = i.id;
			if (('string' == typeof n && i.source == n) || (Array.isArray(n) && -1 !== n.indexOf(r))) {
				const n = i['source-layer'];
				if (x) {
					if (i.source !== x) throw new Error(`Layer "${r}" does not use source "${x}`);
				} else {
					x = i.source;
					const t = e.sources[x];
					if (!t) throw new Error(`Source "${x}" is not defined`);
					const n = t.type;
					if ('vector' !== n && 'geojson' !== n) throw new Error(`Source "${x}" is not of type "vector" or "geojson", but "${n}"`);
				}
				let s = g[n];
				s || ((s = []), (g[n] = s)), s.push({ layer: i, index: t }), f.push(r);
			}
		}
		const v = new eh(),
			w = new Jl(),
			b = [],
			S = function (n, r, o) {
				const d = n.getProperties(),
					f = g[d.layer];
				if (!f) return;
				let x = i.indexOf(r);
				-1 == x && (x = Pp(r, i));
				const S = Kp[n.getGeometry().getType()],
					C = { id: n.getId(), properties: d, type: S },
					E = t.get('mapbox-featurestate')[n.getId()];
				let T,
					P = -1;
				for (let i = 0, g = f.length; i < g; ++i) {
					const g = f[i],
						R = g.layer,
						F = R.id;
					if (void 0 !== o && o !== F) continue;
					const M = R.layout || Hp,
						I = R.paint || Hp;
					if ('none' === M.visibility || ('minzoom' in R && x < R.minzoom) || ('maxzoom' in R && x >= R.maxzoom)) continue;
					const k = R.filter;
					if (!k || im(F, k, C, x, y)) {
						let i, o, f, y, F, k;
						T = R;
						const L = g.index;
						if (3 == S && ('fill' == R.type || 'fill-extrusion' == R.type))
							if (((o = em(R, 'paint', R.type + '-opacity', x, C, _, E)), R.type + '-pattern' in I)) {
								const t = em(R, 'paint', R.type + '-pattern', x, C, _, E);
								if (t) {
									const e = 'string' == typeof t ? am(t, d) : t.toString();
									if (h && s && s[e]) {
										++P, (k = b[P]), (k && k.getFill() && !k.getStroke() && !k.getText()) || ((k = new nh({ fill: new Jl() })), (b[P] = k)), (f = k.getFill()), k.setZIndex(L);
										const t = e + '.' + o;
										let n = m[t];
										if (!n) {
											const i = s[e],
												r = Tp(i.width, i.height),
												a = r.getContext('2d');
											(a.globalAlpha = o), a.drawImage(h, i.x, i.y, i.width, i.height, 0, 0, i.width, i.height), (n = a.createPattern(r, 'repeat')), (m[t] = n);
										}
										f.setColor(n);
									}
								}
							} else (i = sm(em(R, 'paint', R.type + '-color', x, C, _, E), o)), R.type + '-outline-color' in I && (F = sm(em(R, 'paint', R.type + '-outline-color', x, C, _, E), o)), F || (F = i), (i || F) && (++P, (k = b[P]), (!k || (i && !k.getFill()) || (!i && k.getFill()) || (F && !k.getStroke()) || (!F && k.getStroke()) || k.getText()) && ((k = new nh({ fill: i ? new Jl() : void 0, stroke: F ? new eh() : void 0 })), (b[P] = k)), i && ((f = k.getFill()), f.setColor(i)), F && ((y = k.getStroke()), y.setColor(F), y.setWidth(0.5)), k.setZIndex(L));
						if (1 != S && 'line' == R.type) {
							i = 'line-pattern' in I ? void 0 : sm(em(R, 'paint', 'line-color', x, C, _, E), em(R, 'paint', 'line-opacity', x, C, _, E));
							const t = em(R, 'paint', 'line-width', x, C, _, E);
							i &&
								t > 0 &&
								(++P,
								(k = b[P]),
								(k && k.getStroke() && !k.getFill() && !k.getText()) || ((k = new nh({ stroke: new eh() })), (b[P] = k)),
								(y = k.getStroke()),
								y.setLineCap(em(R, 'layout', 'line-cap', x, C, _, E)),
								y.setLineJoin(em(R, 'layout', 'line-join', x, C, _, E)),
								y.setMiterLimit(em(R, 'layout', 'line-miter-limit', x, C, _, E)),
								y.setColor(i),
								y.setWidth(t),
								y.setLineDash(
									I['line-dasharray']
										? em(R, 'paint', 'line-dasharray', x, C, _, E).map(function (e) {
												return e * t;
										  })
										: null
								),
								k.setZIndex(L));
						}
						let A,
							D,
							O,
							z,
							G,
							j,
							N,
							U,
							$,
							B = !1,
							V = null,
							W = 0;
						if ((1 == S || 2 == S) && 'icon-image' in M) {
							const e = em(R, 'layout', 'icon-image', x, C, _, E);
							if (e) {
								let i;
								A = 'string' == typeof e ? am(e, d) : e.toString();
								const o = l ? l(t, A) : void 0;
								if ((h && s && s[A]) || o) {
									const t = em(R, 'layout', 'icon-rotation-alignment', x, C, _, E);
									if (2 == S) {
										const e = n.getGeometry();
										if (e.getFlatMidpoint || e.getFlatMidpoints) {
											const n = e.getExtent();
											if (Math.sqrt(Math.max(Math.pow((n[2] - n[0]) / r, 2), Math.pow((n[3] - n[1]) / r, 2))) > 150) {
												const n = 'MultiLineString' === e.getType() ? e.getFlatMidpoints() : e.getFlatMidpoint();
												tm || ((Qp = [NaN, NaN]), (tm = new Ea('Point', Qp, [], 2, {}, void 0))), (i = tm), (Qp[0] = n[0]), (Qp[1] = n[1]);
												if ('line' === em(R, 'layout', 'symbol-placement', x, C, _, E) && 'map' === t) {
													const t = e.getStride(),
														i = e.getFlatCoordinates();
													for (let e = 0, r = i.length - t; e < r; e += t) {
														const r = i[e],
															s = i[e + 1],
															o = i[e + t],
															a = i[e + t + 1],
															l = Math.min(r, o),
															h = Math.max(r, o),
															c = n[0],
															u = (a - s) * (c - r) - (o - r) * (n[1] - s);
														if (Math.abs(u) < 0.001 && c <= h && c >= l) {
															W = Math.atan2(s - a, o - r);
															break;
														}
													}
												}
											}
										}
									}
									if (2 !== S || i) {
										const e = em(R, 'layout', 'icon-size', x, C, _, E),
											n = void 0 !== I['icon-color'] ? em(R, 'paint', 'icon-color', x, C, _, E) : null;
										if (!n || 0 !== n.a) {
											const i = em(R, 'paint', 'icon-halo-color', x, C, _, E),
												r = em(R, 'paint', 'icon-halo-width', x, C, _, E);
											let a = `${A}.${e}.${r}.${i}`;
											if ((null !== n && (a += `.${n}`), (D = p[a]), !D)) {
												const l = nm(R, x, C, 'icon', _);
												let d;
												'icon-offset' in M && ((d = em(R, 'layout', 'icon-offset', x, C, _, E).slice(0)), (d[0] *= e), (d[1] *= -e));
												let g = n ? [255 * n.r, 255 * n.g, 255 * n.b, n.a] : void 0;
												if (o) {
													const n = { color: g, rotateWithView: 'map' === t, displacement: d, declutterMode: l, scale: e };
													'string' == typeof o ? (n.src = o) : ((n.img = o), (n.imgSize = [o.width, o.height])), (D = new th(n));
												} else {
													const o = s[A];
													let a, f, p;
													r ? (o.sdf ? ((a = Ap(Op(h, o, n || [0, 0, 0, 1]), { x: 0, y: 0, width: o.width, height: o.height, pixelRatio: o.pixelRatio }, r, i)), (g = void 0)) : (a = Ap(h, o, r, i))) : (o.sdf ? (u || (u = Op(h, { x: 0, y: 0, width: c[0], height: c[1] }, { r: 1, g: 1, b: 1 })), (a = u)) : (a = h), (f = [o.width, o.height]), (p = [o.x, o.y])), (D = new th({ color: g, img: a, imgSize: c, size: f, offset: p, rotateWithView: 'map' === t, scale: e / o.pixelRatio, displacement: d, declutterMode: l }));
												}
												p[a] = D;
											}
										}
										D && (++P, (k = b[P]), (k && k.getImage() && !k.getFill() && !k.getStroke()) || ((k = new nh()), (b[P] = k)), k.setGeometry(i), D.setRotation(W + Cp(em(R, 'layout', 'icon-rotate', x, C, _, E))), D.setOpacity(em(R, 'paint', 'icon-opacity', x, C, _, E)), D.setAnchor(Yp[em(R, 'layout', 'icon-anchor', x, C, _, E)]), k.setImage(D), (V = k.getText()), k.setText(void 0), k.setZIndex(L), (B = !0), (O = !1));
									} else O = !0;
								}
							}
						}
						if (1 == S && 'circle' === R.type) {
							++P, (k = b[P]), (k && k.getImage() && !k.getFill() && !k.getStroke()) || ((k = new nh()), (b[P] = k));
							const t = 'circle-radius' in I ? em(R, 'paint', 'circle-radius', x, C, _, E) : 5,
								e = sm(em(R, 'paint', 'circle-stroke-color', x, C, _, E), em(R, 'paint', 'circle-stroke-opacity', x, C, _, E)),
								n = em(R, 'paint', 'circle-translate', x, C, _, E),
								i = sm(em(R, 'paint', 'circle-color', x, C, _, E), em(R, 'paint', 'circle-opacity', x, C, _, E)),
								r = em(R, 'paint', 'circle-stroke-width', x, C, _, E),
								s = t + '.' + e + '.' + i + '.' + r + '.' + n[0] + '.' + n[1];
							(D = p[s]), D || ((D = new Hl({ radius: t, displacement: [n[0], -n[1]], stroke: e && r > 0 ? new eh({ width: r, color: e }) : void 0, fill: i ? new Jl({ color: i }) : void 0, declutterMode: 'none' })), (p[s] = D)), k.setImage(D), (V = k.getText()), k.setText(void 0), k.setGeometry(void 0), k.setZIndex(L), (B = !0);
						}
						if ('text-field' in M) {
							N = Math.round(em(R, 'layout', 'text-size', x, C, _, E));
							const t = em(R, 'layout', 'text-font', x, C, _, E);
							(j = em(R, 'layout', 'text-line-height', x, C, _, E)), (G = On(a ? a(t, e.metadata ? e.metadata['ol:webfonts'] : void 0) : t, N, j)), G.includes('sans-serif') || (G += ',sans-serif'), (U = em(R, 'layout', 'text-letter-spacing', x, C, _, E)), ($ = em(R, 'layout', 'text-max-width', x, C, _, E));
							const n = em(R, 'layout', 'text-field', x, C, _, E);
							(z =
								'object' == typeof n && n.sections
									? 1 === n.sections.length
										? n.toString()
										: n.sections.reduce((e, n, i) => {
												const r = n.fontStack ? n.fontStack.split(',') : t,
													s = On(a ? a(r) : r, N * (n.scale || 1), j);
												let o = n.text;
												if ('\n' === o) return e.push('\n', ''), e;
												if (2 == S) return e.push(Gp(o, U), s), e;
												o = Bp(o, s, $, U).split('\n');
												for (let t = 0, n = o.length; t < n; ++t) t > 0 && e.push('\n', ''), e.push(o[t], s);
												return e;
										  }, [])
									: am(n, d).trim()),
								(o = em(R, 'paint', 'text-opacity', x, C, _, E));
						}
						if (z && o && !O) {
							B || (++P, (k = b[P]), (k && k.getText() && !k.getFill() && !k.getStroke()) || ((k = new nh()), (b[P] = k)), k.setImage(void 0), k.setGeometry(void 0));
							const t = nm(R, x, C, 'text', _);
							k.getText() || k.setText(V), (V = k.getText()), (!V || ('getDeclutterMode' in V && V.getDeclutterMode() !== t)) && ((V = new ah({ padding: [2, 2, 2, 2], declutterMode: t })), k.setText(V));
							const e = em(R, 'layout', 'text-transform', x, C, _, E);
							'uppercase' == e ? (z = Array.isArray(z) ? z.map((t, e) => (e % 2 ? t : t.toUpperCase())) : z.toUpperCase()) : 'lowercase' == e && (z = Array.isArray(z) ? z.map((t, e) => (e % 2 ? t : t.toLowerCase())) : z.toLowerCase());
							const n = Array.isArray(z) ? z : 2 == S ? Gp(z, U) : Bp(z, G, $, U);
							if ((V.setText(n), V.setFont(G), V.setRotation(Cp(em(R, 'layout', 'text-rotate', x, C, _, E))), 'function' == typeof V.setKeepUpright)) {
								const t = em(R, 'layout', 'text-keep-upright', x, C, _, E);
								V.setKeepUpright(t);
							}
							const i = em(R, 'layout', 'text-anchor', x, C, _, E),
								r = B || 1 == S ? 'point' : em(R, 'layout', 'symbol-placement', x, C, _, E);
							let s;
							if (('line-center' === r ? (V.setPlacement('line'), (s = 'center')) : V.setPlacement(r), 'line' === r && 'function' == typeof V.setRepeat)) {
								const t = em(R, 'layout', 'symbol-spacing', x, C, _, E);
								V.setRepeat(2 * t);
							}
							V.setOverflow('point' === r);
							let a = em(R, 'paint', 'text-halo-width', x, C, _, E);
							const l = em(R, 'layout', 'text-offset', x, C, _, E),
								h = em(R, 'paint', 'text-translate', x, C, _, E);
							let c = 0,
								u = 0;
							if ('point' == r) {
								(s = 'center'), -1 !== i.indexOf('left') ? ((s = 'left'), (u = a)) : -1 !== i.indexOf('right') && ((s = 'right'), (u = -a));
								const t = em(R, 'layout', 'text-rotation-alignment', x, C, _, E);
								V.setRotateWithView('map' == t);
							} else V.setMaxAngle((Cp(em(R, 'layout', 'text-max-angle', x, C, _, E)) * z.length) / n.length), V.setRotateWithView(!1);
							V.setTextAlign(s);
							let d = 'middle';
							0 == i.indexOf('bottom') ? ((d = 'bottom'), (c = -a - 0.5 * (j - 1) * N)) : 0 == i.indexOf('top') && ((d = 'top'), (c = a + 0.5 * (j - 1) * N)), V.setTextBaseline(d);
							const g = em(R, 'layout', 'text-justify', x, C, _, E);
							V.setJustify('auto' === g ? void 0 : g), V.setOffsetX(l[0] * N + u + h[0]), V.setOffsetY(l[1] * N + c + h[1]), w.setColor(sm(em(R, 'paint', 'text-color', x, C, _, E), o)), V.setFill(w);
							const f = sm(em(R, 'paint', 'text-halo-color', x, C, _, E), o);
							if (f && a > 0) {
								v.setColor(f), (a *= 2);
								const t = 0.5 * N;
								v.setWidth(a <= t ? a : t), V.setStroke(v);
							} else V.setStroke(void 0);
							const p = em(R, 'layout', 'text-padding', x, C, _, E),
								m = V.getPadding();
							p !== m[0] && ((m[0] = p), (m[1] = p), (m[2] = p), (m[3] = p)), k.setZIndex(L);
						}
					}
				}
				return P > -1 ? ((b.length = P + 1), lm && ('set' in n ? n.set('mapbox-layer', T) : (n.getProperties()['mapbox-layer'] = T)), b) : void 0;
			};
		return t.setStyle(S), t.set('mapbox-source', x), t.set('mapbox-layers', f), t.set('mapbox-featurestate', t.get('mapbox-featurestate') || {}), S;
	}
	class um {
		constructor() {
			(this.dataProjection = void 0), (this.defaultFeatureProjection = void 0), (this.featureClass = Ei), (this.supportedMediaTypes = null);
		}
		getReadOptions(t, e) {
			if (e) {
				let n = e.dataProjection ? ao(e.dataProjection) : this.readProjection(t);
				e.extent && n && 'tile-pixels' === n.getUnits() && ((n = ao(n)), n.setWorldExtent(e.extent)), (e = { dataProjection: n, featureProjection: e.featureProjection });
			}
			return this.adaptOptions(e);
		}
		adaptOptions(t) {
			return Object.assign({ dataProjection: this.dataProjection, featureProjection: this.defaultFeatureProjection, featureClass: this.featureClass }, t);
		}
		getType() {
			return xi();
		}
		readFeature(t, e) {
			return xi();
		}
		readFeatures(t, e) {
			return xi();
		}
		readGeometry(t, e) {
			return xi();
		}
		readProjection(t) {
			return xi();
		}
		writeFeature(t, e) {
			return xi();
		}
		writeFeatures(t, e) {
			return xi();
		}
		writeGeometry(t, e) {
			return xi();
		}
	}
	function dm(t, e, n) {
		const i = n ? ao(n.featureProjection) : null,
			r = n ? ao(n.dataProjection) : null;
		let s = t;
		if (i && r && !po(i, r)) {
			e && (s = t.clone());
			const n = e ? i : r,
				o = e ? r : i;
			'tile-pixels' === n.getUnits() ? s.transform(n, o) : s.applyTransform(yo(n, o));
		}
		if (e && n && void 0 !== n.decimals) {
			const e = Math.pow(10, n.decimals),
				i = function (t) {
					for (let n = 0, i = t.length; n < i; ++n) t[n] = Math.round(t[n] * e) / e;
					return t;
				};
			s === t && (s = t.clone()), s.applyTransform(i);
		}
		return s;
	}
	const gm = { Point: ya, LineString: ma, Polygon: va, MultiPoint: xa, MultiLineString: _a, MultiPolygon: Sa };
	function fm(t, e) {
		const n = t.geometry;
		if (!n) return [];
		if (Array.isArray(n)) return n.map((e) => fm({ ...t, geometry: e })).flat();
		const i = 'MultiPolygon' === n.type ? 'Polygon' : n.type;
		if ('GeometryCollection' === i || 'Circle' === i) throw new Error('Unsupported geometry type: ' + i);
		const r = n.layout.length;
		return dm(
			new Ea(
				i,
				'Polygon' === i
					? (function (t, e, n) {
							return Array.isArray(e[0]) ? (zr(t, 0, e, n) || jr((t = t.slice()), 0, e, n), t) : (Or(t, 0, e, n) || Gr((t = t.slice()), 0, e, n), t);
					  })(n.flatCoordinates, n.ends, r)
					: n.flatCoordinates,
				n.ends?.flat(),
				r,
				t.properties || {},
				t.id
			).enableSimplifyTransformed(),
			!1,
			e
		);
	}
	function pm(t, e) {
		if (!t) return null;
		if (Array.isArray(t)) {
			const n = t.map((t) => pm(t, e));
			return new Jo(n);
		}
		return dm(new (0, gm[t.type])(t.flatCoordinates, t.layout || 'XY', t.ends), !1, e);
	}
	class mm extends um {
		constructor() {
			super();
		}
		getType() {
			return 'json';
		}
		readFeature(t, e) {
			return this.readFeatureFromObject(_m(t), this.getReadOptions(t, e));
		}
		readFeatures(t, e) {
			return this.readFeaturesFromObject(_m(t), this.getReadOptions(t, e));
		}
		readFeatureFromObject(t, e) {
			return xi();
		}
		readFeaturesFromObject(t, e) {
			return xi();
		}
		readGeometry(t, e) {
			return this.readGeometryFromObject(_m(t), this.getReadOptions(t, e));
		}
		readGeometryFromObject(t, e) {
			return xi();
		}
		readProjection(t) {
			return this.readProjectionFromObject(_m(t));
		}
		readProjectionFromObject(t) {
			return xi();
		}
		writeFeature(t, e) {
			return JSON.stringify(this.writeFeatureObject(t, e));
		}
		writeFeatureObject(t, e) {
			return xi();
		}
		writeFeatures(t, e) {
			return JSON.stringify(this.writeFeaturesObject(t, e));
		}
		writeFeaturesObject(t, e) {
			return xi();
		}
		writeGeometry(t, e) {
			return JSON.stringify(this.writeGeometryObject(t, e));
		}
		writeGeometryObject(t, e) {
			return xi();
		}
	}
	function _m(t) {
		if ('string' == typeof t) {
			const e = JSON.parse(t);
			return e || null;
		}
		return null !== t ? t : null;
	}
	class ym extends mm {
		constructor(t) {
			(t = t || {}), super(), (this.dataProjection = ao(t.dataProjection ? t.dataProjection : 'EPSG:4326')), t.featureProjection && (this.defaultFeatureProjection = ao(t.featureProjection)), t.featureClass && (this.featureClass = t.featureClass), (this.geometryName_ = t.geometryName), (this.extractGeometryName_ = t.extractGeometryName), (this.supportedMediaTypes = ['application/geo+json', 'application/vnd.geo+json']);
		}
		readFeatureFromObject(t, e) {
			let n = null;
			n = 'Feature' === t.type ? t : { type: 'Feature', geometry: t, properties: null };
			const i = xm(n.geometry);
			if (this.featureClass === Ea) return fm({ geometry: i, id: n.id, properties: n.properties }, e);
			const r = new Ei();
			return this.geometryName_ ? r.setGeometryName(this.geometryName_) : this.extractGeometryName_ && n.geometry_name && r.setGeometryName(n.geometry_name), r.setGeometry(pm(i, e)), 'id' in n && r.setId(n.id), n.properties && r.setProperties(n.properties, !0), r;
		}
		readFeaturesFromObject(t, e) {
			let n = null;
			if ('FeatureCollection' === t.type) {
				n = [];
				const i = t.features;
				for (let t = 0, r = i.length; t < r; ++t) {
					const r = this.readFeatureFromObject(i[t], e);
					r && n.push(r);
				}
			} else n = [this.readFeatureFromObject(t, e)];
			return n.flat();
		}
		readGeometryFromObject(t, e) {
			return (function (t, e) {
				const n = xm(t);
				return pm(n, e);
			})(t, e);
		}
		readProjectionFromObject(t) {
			const e = t.crs;
			let n;
			if (e)
				if ('name' == e.type) n = ao(e.properties.name);
				else {
					if ('EPSG' !== e.type) throw new Error('Unknown SRS type');
					n = ao('EPSG:' + e.properties.code);
				}
			else n = this.dataProjection;
			return n;
		}
		writeFeatureObject(t, e) {
			e = this.adaptOptions(e);
			const n = { type: 'Feature', geometry: null, properties: null },
				i = t.getId();
			if ((void 0 !== i && (n.id = i), !t.hasProperties())) return n;
			const r = t.getProperties(),
				s = t.getGeometry();
			return s && ((n.geometry = vm(s, e)), delete r[t.getGeometryName()]), ci(r) || (n.properties = r), n;
		}
		writeFeaturesObject(t, e) {
			e = this.adaptOptions(e);
			const n = [];
			for (let i = 0, r = t.length; i < r; ++i) n.push(this.writeFeatureObject(t[i], e));
			return { type: 'FeatureCollection', features: n };
		}
		writeGeometryObject(t, e) {
			return vm(t, this.adaptOptions(e));
		}
	}
	function xm(t, e) {
		if (!t) return null;
		let n;
		switch (t.type) {
			case 'Point':
				n = (function (t) {
					const e = t.coordinates;
					return { type: 'Point', flatCoordinates: e, layout: Wo(e.length) };
				})(t);
				break;
			case 'LineString':
				n = (function (t) {
					const e = t.coordinates,
						n = e.flat();
					return { type: 'LineString', flatCoordinates: n, ends: [n.length], layout: Wo(e[0]?.length || 2) };
				})(t);
				break;
			case 'Polygon':
				n = (function (t) {
					const e = t.coordinates,
						n = [],
						i = e[0]?.[0]?.length,
						r = Ko(n, 0, e, i);
					return { type: 'Polygon', flatCoordinates: n, ends: r, layout: Wo(i) };
				})(t);
				break;
			case 'MultiPoint':
				n = (function (t) {
					const e = t.coordinates;
					return { type: 'MultiPoint', flatCoordinates: e.flat(), layout: Wo(e[0]?.length || 2) };
				})(t);
				break;
			case 'MultiLineString':
				n = (function (t) {
					const e = t.coordinates,
						n = e[0]?.[0]?.length || 2,
						i = [],
						r = Ko(i, 0, e, n);
					return { type: 'MultiLineString', flatCoordinates: i, ends: r, layout: Wo(n) };
				})(t);
				break;
			case 'MultiPolygon':
				n = (function (t) {
					const e = t.coordinates,
						n = [],
						i = e[0]?.[0]?.[0].length || 2,
						r = Yo(n, 0, e, i);
					return { type: 'MultiPolygon', flatCoordinates: n, ends: r, layout: Wo(i) };
				})(t);
				break;
			case 'GeometryCollection':
				n = (function (t) {
					const e = t.geometries.map(function (t) {
						return xm(t);
					});
					return e;
				})(t);
				break;
			default:
				throw new Error('Unsupported GeoJSON type: ' + t.type);
		}
		return n;
	}
	function vm(t, e) {
		const n = (t = dm(t, !0, e)).getType();
		let i;
		switch (n) {
			case 'Point':
				i = (function (t) {
					return { type: 'Point', coordinates: t.getCoordinates() };
				})(t);
				break;
			case 'LineString':
				i = (function (t) {
					return { type: 'LineString', coordinates: t.getCoordinates() };
				})(t);
				break;
			case 'Polygon':
				i = (function (t, e) {
					let n;
					e && (n = e.rightHanded);
					return { type: 'Polygon', coordinates: t.getCoordinates(n) };
				})(t, e);
				break;
			case 'MultiPoint':
				i = (function (t) {
					return { type: 'MultiPoint', coordinates: t.getCoordinates() };
				})(t);
				break;
			case 'MultiLineString':
				i = (function (t) {
					return { type: 'MultiLineString', coordinates: t.getCoordinates() };
				})(t);
				break;
			case 'MultiPolygon':
				i = (function (t, e) {
					let n;
					e && (n = e.rightHanded);
					return { type: 'MultiPolygon', coordinates: t.getCoordinates(n) };
				})(t, e);
				break;
			case 'GeometryCollection':
				i = (function (t, e) {
					(e = Object.assign({}, e)), delete e.featureProjection;
					const n = t.getGeometriesArray().map(function (t) {
						return vm(t, e);
					});
					return { type: 'GeometryCollection', geometries: n };
				})(t, e);
				break;
			case 'Circle':
				i = { type: 'GeometryCollection', geometries: [] };
				break;
			default:
				throw new Error('Unsupported geometry type: ' + n);
		}
		return i;
	}
	const wm = 4294967296,
		bm = 1 / wm,
		Sm = 'undefined' == typeof TextDecoder ? null : new TextDecoder('utf-8');
	class Cm {
		constructor(t = new Uint8Array(16)) {
			(this.buf = ArrayBuffer.isView(t) ? t : new Uint8Array(t)), (this.dataView = new DataView(this.buf.buffer)), (this.pos = 0), (this.type = 0), (this.length = this.buf.length);
		}
		readFields(t, e, n = this.length) {
			for (; this.pos < n; ) {
				const n = this.readVarint(),
					i = n >> 3,
					r = this.pos;
				(this.type = 7 & n), t(i, e, this), this.pos === r && this.skip(n);
			}
			return e;
		}
		readMessage(t, e) {
			return this.readFields(t, e, this.readVarint() + this.pos);
		}
		readFixed32() {
			const t = this.dataView.getUint32(this.pos, !0);
			return (this.pos += 4), t;
		}
		readSFixed32() {
			const t = this.dataView.getInt32(this.pos, !0);
			return (this.pos += 4), t;
		}
		readFixed64() {
			const t = this.dataView.getUint32(this.pos, !0) + this.dataView.getUint32(this.pos + 4, !0) * wm;
			return (this.pos += 8), t;
		}
		readSFixed64() {
			const t = this.dataView.getUint32(this.pos, !0) + this.dataView.getInt32(this.pos + 4, !0) * wm;
			return (this.pos += 8), t;
		}
		readFloat() {
			const t = this.dataView.getFloat32(this.pos, !0);
			return (this.pos += 4), t;
		}
		readDouble() {
			const t = this.dataView.getFloat64(this.pos, !0);
			return (this.pos += 8), t;
		}
		readVarint(t) {
			const e = this.buf;
			let n, i;
			return (
				(i = e[this.pos++]),
				(n = 127 & i),
				i < 128
					? n
					: ((i = e[this.pos++]),
					  (n |= (127 & i) << 7),
					  i < 128
							? n
							: ((i = e[this.pos++]),
							  (n |= (127 & i) << 14),
							  i < 128
									? n
									: ((i = e[this.pos++]),
									  (n |= (127 & i) << 21),
									  i < 128
											? n
											: ((i = e[this.pos]),
											  (n |= (15 & i) << 28),
											  (function (t, e, n) {
													const i = n.buf;
													let r, s;
													if (((s = i[n.pos++]), (r = (112 & s) >> 4), s < 128)) return Em(t, r, e);
													if (((s = i[n.pos++]), (r |= (127 & s) << 3), s < 128)) return Em(t, r, e);
													if (((s = i[n.pos++]), (r |= (127 & s) << 10), s < 128)) return Em(t, r, e);
													if (((s = i[n.pos++]), (r |= (127 & s) << 17), s < 128)) return Em(t, r, e);
													if (((s = i[n.pos++]), (r |= (127 & s) << 24), s < 128)) return Em(t, r, e);
													if (((s = i[n.pos++]), (r |= (1 & s) << 31), s < 128)) return Em(t, r, e);
													throw new Error('Expected varint not more than 10 bytes');
											  })(n, t, this)))))
			);
		}
		readVarint64() {
			return this.readVarint(!0);
		}
		readSVarint() {
			const t = this.readVarint();
			return t % 2 == 1 ? (t + 1) / -2 : t / 2;
		}
		readBoolean() {
			return Boolean(this.readVarint());
		}
		readString() {
			const t = this.readVarint() + this.pos,
				e = this.pos;
			return (
				(this.pos = t),
				t - e >= 12 && Sm
					? Sm.decode(this.buf.subarray(e, t))
					: (function (t, e, n) {
							let i = '',
								r = e;
							for (; r < n; ) {
								const e = t[r];
								let s,
									o,
									a,
									l = null,
									h = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
								if (r + h > n) break;
								1 === h ? e < 128 && (l = e) : 2 === h ? ((s = t[r + 1]), 128 == (192 & s) && ((l = ((31 & e) << 6) | (63 & s)), l <= 127 && (l = null))) : 3 === h ? ((s = t[r + 1]), (o = t[r + 2]), 128 == (192 & s) && 128 == (192 & o) && ((l = ((15 & e) << 12) | ((63 & s) << 6) | (63 & o)), (l <= 2047 || (l >= 55296 && l <= 57343)) && (l = null))) : 4 === h && ((s = t[r + 1]), (o = t[r + 2]), (a = t[r + 3]), 128 == (192 & s) && 128 == (192 & o) && 128 == (192 & a) && ((l = ((15 & e) << 18) | ((63 & s) << 12) | ((63 & o) << 6) | (63 & a)), (l <= 65535 || l >= 1114112) && (l = null))),
									null === l ? ((l = 65533), (h = 1)) : l > 65535 && ((l -= 65536), (i += String.fromCharCode(((l >>> 10) & 1023) | 55296)), (l = 56320 | (1023 & l))),
									(i += String.fromCharCode(l)),
									(r += h);
							}
							return i;
					  })(this.buf, e, t)
			);
		}
		readBytes() {
			const t = this.readVarint() + this.pos,
				e = this.buf.subarray(this.pos, t);
			return (this.pos = t), e;
		}
		readPackedVarint(t = [], e) {
			const n = this.readPackedEnd();
			for (; this.pos < n; ) t.push(this.readVarint(e));
			return t;
		}
		readPackedSVarint(t = []) {
			const e = this.readPackedEnd();
			for (; this.pos < e; ) t.push(this.readSVarint());
			return t;
		}
		readPackedBoolean(t = []) {
			const e = this.readPackedEnd();
			for (; this.pos < e; ) t.push(this.readBoolean());
			return t;
		}
		readPackedFloat(t = []) {
			const e = this.readPackedEnd();
			for (; this.pos < e; ) t.push(this.readFloat());
			return t;
		}
		readPackedDouble(t = []) {
			const e = this.readPackedEnd();
			for (; this.pos < e; ) t.push(this.readDouble());
			return t;
		}
		readPackedFixed32(t = []) {
			const e = this.readPackedEnd();
			for (; this.pos < e; ) t.push(this.readFixed32());
			return t;
		}
		readPackedSFixed32(t = []) {
			const e = this.readPackedEnd();
			for (; this.pos < e; ) t.push(this.readSFixed32());
			return t;
		}
		readPackedFixed64(t = []) {
			const e = this.readPackedEnd();
			for (; this.pos < e; ) t.push(this.readFixed64());
			return t;
		}
		readPackedSFixed64(t = []) {
			const e = this.readPackedEnd();
			for (; this.pos < e; ) t.push(this.readSFixed64());
			return t;
		}
		readPackedEnd() {
			return 2 === this.type ? this.readVarint() + this.pos : this.pos + 1;
		}
		skip(t) {
			const e = 7 & t;
			if (0 === e) for (; this.buf[this.pos++] > 127; );
			else if (2 === e) this.pos = this.readVarint() + this.pos;
			else if (5 === e) this.pos += 4;
			else {
				if (1 !== e) throw new Error(`Unimplemented type: ${e}`);
				this.pos += 8;
			}
		}
		writeTag(t, e) {
			this.writeVarint((t << 3) | e);
		}
		realloc(t) {
			let e = this.length || 16;
			for (; e < this.pos + t; ) e *= 2;
			if (e !== this.length) {
				const t = new Uint8Array(e);
				t.set(this.buf), (this.buf = t), (this.dataView = new DataView(t.buffer)), (this.length = e);
			}
		}
		finish() {
			return (this.length = this.pos), (this.pos = 0), this.buf.subarray(0, this.length);
		}
		writeFixed32(t) {
			this.realloc(4), this.dataView.setInt32(this.pos, t, !0), (this.pos += 4);
		}
		writeSFixed32(t) {
			this.realloc(4), this.dataView.setInt32(this.pos, t, !0), (this.pos += 4);
		}
		writeFixed64(t) {
			this.realloc(8), this.dataView.setInt32(this.pos, -1 & t, !0), this.dataView.setInt32(this.pos + 4, Math.floor(t * bm), !0), (this.pos += 8);
		}
		writeSFixed64(t) {
			this.realloc(8), this.dataView.setInt32(this.pos, -1 & t, !0), this.dataView.setInt32(this.pos + 4, Math.floor(t * bm), !0), (this.pos += 8);
		}
		writeVarint(t) {
			(t = +t || 0) > 268435455 || t < 0
				? (function (t, e) {
						let n, i;
						t >= 0 ? ((n = t % 4294967296 | 0), (i = (t / 4294967296) | 0)) : ((n = ~(-t % 4294967296)), (i = ~(-t / 4294967296)), 4294967295 ^ n ? (n = (n + 1) | 0) : ((n = 0), (i = (i + 1) | 0)));
						if (t >= 0x10000000000000000 || t < -0x10000000000000000) throw new Error("Given varint doesn't fit into 10 bytes");
						e.realloc(10),
							(function (t, e, n) {
								(n.buf[n.pos++] = (127 & t) | 128), (t >>>= 7), (n.buf[n.pos++] = (127 & t) | 128), (t >>>= 7), (n.buf[n.pos++] = (127 & t) | 128), (t >>>= 7), (n.buf[n.pos++] = (127 & t) | 128), (t >>>= 7), (n.buf[n.pos] = 127 & t);
							})(n, 0, e),
							(function (t, e) {
								const n = (7 & t) << 4;
								if (((e.buf[e.pos++] |= n | ((t >>>= 3) ? 128 : 0)), !t)) return;
								if (((e.buf[e.pos++] = (127 & t) | ((t >>>= 7) ? 128 : 0)), !t)) return;
								if (((e.buf[e.pos++] = (127 & t) | ((t >>>= 7) ? 128 : 0)), !t)) return;
								if (((e.buf[e.pos++] = (127 & t) | ((t >>>= 7) ? 128 : 0)), !t)) return;
								if (((e.buf[e.pos++] = (127 & t) | ((t >>>= 7) ? 128 : 0)), !t)) return;
								e.buf[e.pos++] = 127 & t;
							})(i, e);
				  })(t, this)
				: (this.realloc(4), (this.buf[this.pos++] = (127 & t) | (t > 127 ? 128 : 0)), t <= 127 || ((this.buf[this.pos++] = (127 & (t >>>= 7)) | (t > 127 ? 128 : 0)), t <= 127 || ((this.buf[this.pos++] = (127 & (t >>>= 7)) | (t > 127 ? 128 : 0)), t <= 127 || (this.buf[this.pos++] = (t >>> 7) & 127))));
		}
		writeSVarint(t) {
			this.writeVarint(t < 0 ? 2 * -t - 1 : 2 * t);
		}
		writeBoolean(t) {
			this.writeVarint(+t);
		}
		writeString(t) {
			(t = String(t)), this.realloc(4 * t.length), this.pos++;
			const e = this.pos;
			this.pos = (function (t, e, n) {
				for (let i, r, s = 0; s < e.length; s++) {
					if (((i = e.charCodeAt(s)), i > 55295 && i < 57344)) {
						if (!r) {
							i > 56319 || s + 1 === e.length ? ((t[n++] = 239), (t[n++] = 191), (t[n++] = 189)) : (r = i);
							continue;
						}
						if (i < 56320) {
							(t[n++] = 239), (t[n++] = 191), (t[n++] = 189), (r = i);
							continue;
						}
						(i = ((r - 55296) << 10) | (i - 56320) | 65536), (r = null);
					} else r && ((t[n++] = 239), (t[n++] = 191), (t[n++] = 189), (r = null));
					i < 128 ? (t[n++] = i) : (i < 2048 ? (t[n++] = (i >> 6) | 192) : (i < 65536 ? (t[n++] = (i >> 12) | 224) : ((t[n++] = (i >> 18) | 240), (t[n++] = ((i >> 12) & 63) | 128)), (t[n++] = ((i >> 6) & 63) | 128)), (t[n++] = (63 & i) | 128));
				}
				return n;
			})(this.buf, t, this.pos);
			const n = this.pos - e;
			n >= 128 && Tm(e, n, this), (this.pos = e - 1), this.writeVarint(n), (this.pos += n);
		}
		writeFloat(t) {
			this.realloc(4), this.dataView.setFloat32(this.pos, t, !0), (this.pos += 4);
		}
		writeDouble(t) {
			this.realloc(8), this.dataView.setFloat64(this.pos, t, !0), (this.pos += 8);
		}
		writeBytes(t) {
			const e = t.length;
			this.writeVarint(e), this.realloc(e);
			for (let n = 0; n < e; n++) this.buf[this.pos++] = t[n];
		}
		writeRawMessage(t, e) {
			this.pos++;
			const n = this.pos;
			t(e, this);
			const i = this.pos - n;
			i >= 128 && Tm(n, i, this), (this.pos = n - 1), this.writeVarint(i), (this.pos += i);
		}
		writeMessage(t, e, n) {
			this.writeTag(t, 2), this.writeRawMessage(e, n);
		}
		writePackedVarint(t, e) {
			e.length && this.writeMessage(t, Pm, e);
		}
		writePackedSVarint(t, e) {
			e.length && this.writeMessage(t, Rm, e);
		}
		writePackedBoolean(t, e) {
			e.length && this.writeMessage(t, Im, e);
		}
		writePackedFloat(t, e) {
			e.length && this.writeMessage(t, Fm, e);
		}
		writePackedDouble(t, e) {
			e.length && this.writeMessage(t, Mm, e);
		}
		writePackedFixed32(t, e) {
			e.length && this.writeMessage(t, km, e);
		}
		writePackedSFixed32(t, e) {
			e.length && this.writeMessage(t, Lm, e);
		}
		writePackedFixed64(t, e) {
			e.length && this.writeMessage(t, Am, e);
		}
		writePackedSFixed64(t, e) {
			e.length && this.writeMessage(t, Dm, e);
		}
		writeBytesField(t, e) {
			this.writeTag(t, 2), this.writeBytes(e);
		}
		writeFixed32Field(t, e) {
			this.writeTag(t, 5), this.writeFixed32(e);
		}
		writeSFixed32Field(t, e) {
			this.writeTag(t, 5), this.writeSFixed32(e);
		}
		writeFixed64Field(t, e) {
			this.writeTag(t, 1), this.writeFixed64(e);
		}
		writeSFixed64Field(t, e) {
			this.writeTag(t, 1), this.writeSFixed64(e);
		}
		writeVarintField(t, e) {
			this.writeTag(t, 0), this.writeVarint(e);
		}
		writeSVarintField(t, e) {
			this.writeTag(t, 0), this.writeSVarint(e);
		}
		writeStringField(t, e) {
			this.writeTag(t, 2), this.writeString(e);
		}
		writeFloatField(t, e) {
			this.writeTag(t, 5), this.writeFloat(e);
		}
		writeDoubleField(t, e) {
			this.writeTag(t, 1), this.writeDouble(e);
		}
		writeBooleanField(t, e) {
			this.writeVarintField(t, +e);
		}
	}
	function Em(t, e, n) {
		return n ? 4294967296 * e + (t >>> 0) : 4294967296 * (e >>> 0) + (t >>> 0);
	}
	function Tm(t, e, n) {
		const i = e <= 16383 ? 1 : e <= 2097151 ? 2 : e <= 268435455 ? 3 : Math.floor(Math.log(e) / (7 * Math.LN2));
		n.realloc(i);
		for (let e = n.pos - 1; e >= t; e--) n.buf[e + i] = n.buf[e];
	}
	function Pm(t, e) {
		for (let n = 0; n < t.length; n++) e.writeVarint(t[n]);
	}
	function Rm(t, e) {
		for (let n = 0; n < t.length; n++) e.writeSVarint(t[n]);
	}
	function Fm(t, e) {
		for (let n = 0; n < t.length; n++) e.writeFloat(t[n]);
	}
	function Mm(t, e) {
		for (let n = 0; n < t.length; n++) e.writeDouble(t[n]);
	}
	function Im(t, e) {
		for (let n = 0; n < t.length; n++) e.writeBoolean(t[n]);
	}
	function km(t, e) {
		for (let n = 0; n < t.length; n++) e.writeFixed32(t[n]);
	}
	function Lm(t, e) {
		for (let n = 0; n < t.length; n++) e.writeSFixed32(t[n]);
	}
	function Am(t, e) {
		for (let n = 0; n < t.length; n++) e.writeFixed64(t[n]);
	}
	function Dm(t, e) {
		for (let n = 0; n < t.length; n++) e.writeSFixed64(t[n]);
	}
	class Om extends um {
		constructor(t) {
			super(), (t = t || {}), (this.dataProjection = new os({ code: '', units: 'tile-pixels' })), (this.featureClass = t.featureClass ? t.featureClass : Ea), (this.geometryName_ = t.geometryName), (this.layerName_ = t.layerName ? t.layerName : 'layer'), (this.layers_ = t.layers ? t.layers : null), (this.idProperty_ = t.idProperty), (this.supportedMediaTypes = ['application/vnd.mapbox-vector-tile', 'application/x-protobuf']);
		}
		readRawGeometry_(t, e, n, i) {
			t.pos = e.geometry;
			const r = t.readVarint() + t.pos;
			let s = 1,
				o = 0,
				a = 0,
				l = 0,
				h = 0,
				c = 0;
			for (; t.pos < r; ) {
				if (!o) {
					const e = t.readVarint();
					(s = 7 & e), (o = e >> 3);
				}
				if ((o--, 1 === s || 2 === s)) (a += t.readSVarint()), (l += t.readSVarint()), 1 === s && h > c && (i.push(h), (c = h)), n.push(a, l), (h += 2);
				else {
					if (7 !== s) throw new Error('Invalid command found in the PBF');
					h > c && (n.push(n[c], n[c + 1]), (h += 2));
				}
			}
			h > c && (i.push(h), (c = h));
		}
		createFeature_(t, e, n) {
			const i = e.type;
			if (0 === i) return null;
			let r;
			const s = e.properties;
			let o;
			this.idProperty_ ? ((o = s[this.idProperty_]), delete s[this.idProperty_]) : (o = e.id), (s[this.layerName_] = e.layer.name);
			const a = [],
				l = [];
			this.readRawGeometry_(t, e, a, l);
			const h = (function (t, e) {
				let n;
				1 === t ? (n = 1 === e ? 'Point' : 'MultiPoint') : 2 === t ? (n = 1 === e ? 'LineString' : 'MultiLineString') : 3 === t && (n = 'Polygon');
				return n;
			})(i, l.length);
			if (this.featureClass === Ea) (r = new this.featureClass(h, a, l, 2, s, o)), r.transform(n.dataProjection);
			else {
				let t;
				if ('Polygon' == h) {
					const e = Nr(a, l);
					t = e.length > 1 ? new Sa(a, 'XY', e) : new va(a, 'XY', l);
				} else t = 'Point' === h ? new ya(a, 'XY') : 'LineString' === h ? new ma(a, 'XY') : 'MultiPoint' === h ? new xa(a, 'XY') : 'MultiLineString' === h ? new _a(a, 'XY', l) : null;
				(r = new (0, this.featureClass)()), this.geometryName_ && r.setGeometryName(this.geometryName_);
				const e = dm(t, !1, n);
				r.setGeometry(e), void 0 !== o && r.setId(o), r.setProperties(s, !0);
			}
			return r;
		}
		getType() {
			return 'arraybuffer';
		}
		readFeatures(t, e) {
			const n = this.layers_,
				i = ao((e = this.adaptOptions(e)).dataProjection);
			i.setWorldExtent(e.extent), (e.dataProjection = i);
			const r = new Cm(t),
				s = r.readFields(zm, {}),
				o = [];
			for (const t in s) {
				if (n && !n.includes(t)) continue;
				const a = s[t],
					l = a ? [0, 0, a.extent, a.extent] : null;
				i.setExtent(l);
				for (let t = 0, n = a.length; t < n; ++t) {
					const n = Nm(r, a, t),
						i = this.createFeature_(r, n, e);
					null !== i && o.push(i);
				}
			}
			return o;
		}
		readProjection(t) {
			return this.dataProjection;
		}
		setLayers(t) {
			this.layers_ = t;
		}
	}
	function zm(t, e, n) {
		if (3 === t) {
			const t = { keys: [], values: [], features: [] },
				i = n.readVarint() + n.pos;
			n.readFields(Gm, t, i), (t.length = t.features.length), t.length && (e[t.name] = t);
		}
	}
	function Gm(t, e, n) {
		if (15 === t) e.version = n.readVarint();
		else if (1 === t) e.name = n.readString();
		else if (5 === t) e.extent = n.readVarint();
		else if (2 === t) e.features.push(n.pos);
		else if (3 === t) e.keys.push(n.readString());
		else if (4 === t) {
			let i = null;
			const r = n.readVarint() + n.pos;
			for (; n.pos < r; ) i = 1 === (t = n.readVarint() >> 3) ? n.readString() : 2 === t ? n.readFloat() : 3 === t ? n.readDouble() : 4 === t ? n.readVarint64() : 5 === t ? n.readVarint() : 6 === t ? n.readSVarint() : 7 === t ? n.readBoolean() : null;
			e.values.push(i);
		}
	}
	function jm(t, e, n) {
		if (1 == t) e.id = n.readVarint();
		else if (2 == t) {
			const t = n.readVarint() + n.pos;
			for (; n.pos < t; ) {
				const t = e.layer.keys[n.readVarint()],
					i = e.layer.values[n.readVarint()];
				e.properties[t] = i;
			}
		} else 3 == t ? (e.type = n.readVarint()) : 4 == t && (e.geometry = n.pos);
	}
	function Nm(t, e, n) {
		t.pos = e.features[n];
		const i = t.readVarint() + t.pos,
			r = { layer: e, type: 0, properties: {} };
		return t.readFields(jm, r, i), r;
	}
	class Um extends eu {
		constructor(t) {
			super(t), (this.image = null);
		}
		getImage() {
			return this.image ? this.image.getImage() : null;
		}
		prepareFrame(t) {
			const e = t.layerStatesArray[t.layerIndex],
				n = t.pixelRatio,
				i = t.viewState,
				r = i.resolution,
				s = this.getLayer().getSource(),
				o = t.viewHints;
			let a = t.extent;
			if ((void 0 !== e.extent && (a = sr(a, Po(e.extent, i.projection))), !o[sc] && !o[oc] && !cr(a)))
				if (s) {
					const t = i.projection,
						e = s.getImage(a, r, n, t);
					e && (this.loadImage(e) ? (this.image = e) : e.getState() === Ma && (this.image = null));
				} else this.image = null;
			return !!this.image;
		}
		getData(t) {
			const e = this.frameState;
			if (!e) return null;
			const n = this.getLayer(),
				i = Do(e.pixelToCoordinateTransform, t.slice()),
				r = n.getExtent();
			if (r && !Oi(r, i)) return null;
			const s = this.image.getExtent(),
				o = this.image.getImage(),
				a = lr(s),
				l = Math.floor(o.width * ((i[0] - s[0]) / a));
			if (l < 0 || l >= o.width) return null;
			const h = rr(s),
				c = Math.floor(o.height * ((s[3] - i[1]) / h));
			return c < 0 || c >= o.height ? null : this.getImageData(o, l, c);
		}
		renderFrame(t, e) {
			const n = this.image,
				i = n.getExtent(),
				r = n.getResolution(),
				[s, o] = Array.isArray(r) ? r : [r, r],
				a = n.getPixelRatio(),
				l = t.layerStatesArray[t.layerIndex],
				h = t.pixelRatio,
				c = t.viewState,
				u = c.center,
				d = c.resolution,
				g = (h * s) / (d * a),
				f = (h * o) / (d * a);
			this.prepareContainer(t, e);
			const p = this.context.canvas.width,
				m = this.context.canvas.height,
				_ = this.getRenderContext(t);
			let y = !1,
				x = !0;
			if (l.extent) {
				const e = Po(l.extent, c.projection);
				(x = hr(e, t.extent)), (y = x && !zi(e, t.extent)), y && this.clipUnrotated(_, t, e);
			}
			const v = n.getImage(),
				w = Go(this.tempTransform, p / 2, m / 2, g, f, 0, (a * (i[0] - u[0])) / s, (a * (u[1] - i[3])) / o);
			this.renderedResolution = (o * h) / a;
			const b = v.width * w[0],
				S = v.height * w[3];
			if ((this.getLayer().getSource().getInterpolate() || (_.imageSmoothingEnabled = !1), this.preRender(_, t), x && b >= 0.5 && S >= 0.5)) {
				const t = w[4],
					e = w[5],
					n = l.opacity;
				1 !== n && (_.save(), (_.globalAlpha = n)), _.drawImage(v, 0, 0, +v.width, +v.height, t, e, b, S), 1 !== n && _.restore();
			}
			return this.postRender(this.context, t), y && _.restore(), (_.imageSmoothingEnabled = !0), this.container;
		}
	}
	class $m extends Cg {
		constructor(t) {
			super((t = t || {}));
		}
	}
	class Bm extends $m {
		constructor(t) {
			super(t);
		}
		createRenderer() {
			return new Um(this);
		}
		getData(t) {
			return super.getData(t);
		}
	}
	function Vm(t) {
		return t instanceof Image || t instanceof HTMLCanvasElement || t instanceof HTMLVideoElement || t instanceof ImageBitmap ? t : null;
	}
	const Wm = new Error('disposed'),
		Xm = [256, 256];
	class qm extends Dg {
		constructor(t) {
			const e = Mg;
			super(t.tileCoord, e, { transition: t.transition, interpolate: t.interpolate }), (this.loader_ = t.loader), (this.data_ = null), (this.error_ = null), (this.size_ = t.size || null), (this.controller_ = t.controller || null);
		}
		getSize() {
			if (this.size_) return this.size_;
			const t = Vm(this.data_);
			return t ? [t.width, t.height] : Xm;
		}
		getData() {
			return this.data_;
		}
		getError() {
			return this.error_;
		}
		load() {
			if (this.state !== Mg && this.state !== Lg) return;
			(this.state = Ig), this.changed();
			const t = this;
			this.loader_()
				.then(function (e) {
					(t.data_ = e), (t.state = kg), t.changed();
				})
				.catch(function (e) {
					(t.error_ = e), (t.state = Lg), t.changed();
				});
		}
		disposeInternal() {
			this.controller_ && (this.controller_.abort(Wm), (this.controller_ = null)), super.disposeInternal();
		}
	}
	let Zm;
	const Km = [];
	function Ym(t, e, n, i, r) {
		t.beginPath(), t.moveTo(0, 0), t.lineTo(e, n), t.lineTo(i, r), t.closePath(), t.save(), t.clip(), t.fillRect(0, 0, Math.max(e, i) + 1, Math.max(n, r)), t.restore();
	}
	function Hm(t, e) {
		return Math.abs(t[4 * e] - 210) > 2 || Math.abs(t[4 * e + 3] - 191.25) > 2;
	}
	function Jm(t, e, n, i) {
		const r = xo(n, e, t);
		let s = lo(e, i, n);
		const o = e.getMetersPerUnit();
		void 0 !== o && (s *= o);
		const a = t.getMetersPerUnit();
		void 0 !== a && (s /= a);
		const l = t.getExtent();
		if (!l || Oi(l, r)) {
			const e = lo(t, s, r) / s;
			isFinite(e) && e > 0 && (s /= e);
		}
		return s;
	}
	function Qm(t, e, n, i, r, s, o, a, l, h, c, u, d, g) {
		const f = rl(Math.round(n * t), Math.round(n * e), Km);
		if ((u || (f.imageSmoothingEnabled = !1), 0 === l.length)) return f.canvas;
		function p(t) {
			return Math.round(t * n) / n;
		}
		f.scale(n, n), (f.globalCompositeOperation = 'lighter');
		const m = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
		let _;
		l.forEach(function (t, e, n) {
			Xi(m, t.extent);
		});
		const y = n / i,
			x = (u ? 1 : 1 + Math.pow(2, -24)) / y;
		(d && 1 === l.length && 0 === h) ||
			((_ = rl(Math.round(lr(m) * y), Math.round(rr(m) * y), Km)),
			u || (_.imageSmoothingEnabled = !1),
			l.forEach(function (t, e, n) {
				if (t.image.width > 0 && t.image.height > 0) {
					if (t.clipExtent) {
						_.save();
						const e = (t.clipExtent[0] - m[0]) * y,
							n = -(t.clipExtent[3] - m[3]) * y,
							i = lr(t.clipExtent) * y,
							r = rr(t.clipExtent) * y;
						_.rect(u ? e : Math.round(e), u ? n : Math.round(n), u ? i : Math.round(e + i) - Math.round(e), u ? r : Math.round(n + r) - Math.round(n)), _.clip();
					}
					const e = (t.extent[0] - m[0]) * y,
						n = -(t.extent[3] - m[3]) * y,
						i = lr(t.extent) * y,
						r = rr(t.extent) * y;
					_.drawImage(t.image, h, h, t.image.width - 2 * h, t.image.height - 2 * h, u ? e : Math.round(e), u ? n : Math.round(n), u ? i : Math.round(e + i) - Math.round(e), u ? r : Math.round(n + r) - Math.round(n)), t.clipExtent && _.restore();
				}
			}));
		const v = or(o);
		return (
			a.getTriangles().forEach(function (t, e, n) {
				const i = t.source,
					r = t.target;
				let o = i[0][0],
					a = i[0][1],
					h = i[1][0],
					c = i[1][1],
					d = i[2][0],
					g = i[2][1];
				const y = p((r[0][0] - v[0]) / s),
					w = p(-(r[0][1] - v[1]) / s),
					b = p((r[1][0] - v[0]) / s),
					S = p(-(r[1][1] - v[1]) / s),
					C = p((r[2][0] - v[0]) / s),
					E = p(-(r[2][1] - v[1]) / s),
					T = o,
					P = a;
				(o = 0), (a = 0), (h -= T), (c -= P), (d -= T), (g -= P);
				const R = (function (t) {
					const e = t.length;
					for (let n = 0; n < e; n++) {
						let i = n,
							r = Math.abs(t[n][n]);
						for (let s = n + 1; s < e; s++) {
							const e = Math.abs(t[s][n]);
							e > r && ((r = e), (i = s));
						}
						if (0 === r) return null;
						const s = t[i];
						(t[i] = t[n]), (t[n] = s);
						for (let i = n + 1; i < e; i++) {
							const r = -t[i][n] / t[n][n];
							for (let s = n; s < e + 1; s++) n == s ? (t[i][s] = 0) : (t[i][s] += r * t[n][s]);
						}
					}
					const n = new Array(e);
					for (let i = e - 1; i >= 0; i--) {
						n[i] = t[i][e] / t[i][i];
						for (let r = i - 1; r >= 0; r--) t[r][e] -= t[r][i] * n[i];
					}
					return n;
				})([
					[h, c, 0, 0, b - y],
					[d, g, 0, 0, C - y],
					[0, 0, h, c, S - w],
					[0, 0, d, g, E - w],
				]);
				if (!R) return;
				if (
					(f.save(),
					f.beginPath(),
					(function () {
						if (void 0 === Zm) {
							const t = rl(6, 6, Km);
							(t.globalCompositeOperation = 'lighter'), (t.fillStyle = 'rgba(210, 0, 0, 0.75)'), Ym(t, 4, 5, 4, 0), Ym(t, 4, 5, 0, 5);
							const e = t.getImageData(0, 0, 3, 3).data;
							(Zm = Hm(e, 0) || Hm(e, 4) || Hm(e, 8)), al(t), Km.push(t.canvas);
						}
						return Zm;
					})() || !u)
				) {
					f.moveTo(b, S);
					const t = 4,
						e = y - b,
						n = w - S;
					for (let i = 0; i < t; i++) f.lineTo(b + p(((i + 1) * e) / t), S + p((i * n) / (t - 1))), i != t - 1 && f.lineTo(b + p(((i + 1) * e) / t), S + p(((i + 1) * n) / (t - 1)));
					f.lineTo(C, E);
				} else f.moveTo(b, S), f.lineTo(y, w), f.lineTo(C, E);
				let F;
				if ((f.clip(), f.transform(R[0], R[2], R[1], R[3], y, w), f.translate(m[0] - T, m[3] - P), _)) (F = _.canvas), f.scale(x, -x);
				else {
					const t = l[0],
						e = t.extent;
					(F = t.image), f.scale(lr(e) / F.width, -rr(e) / F.height);
				}
				f.drawImage(F, 0, 0), f.restore();
			}),
			_ && (al(_), Km.push(_.canvas)),
			c &&
				(f.save(),
				(f.globalCompositeOperation = 'source-over'),
				(f.strokeStyle = 'black'),
				(f.lineWidth = 1),
				a.getTriangles().forEach(function (t, e, n) {
					const i = t.target,
						r = (i[0][0] - v[0]) / s,
						o = -(i[0][1] - v[1]) / s,
						a = (i[1][0] - v[0]) / s,
						l = -(i[1][1] - v[1]) / s,
						h = (i[2][0] - v[0]) / s,
						c = -(i[2][1] - v[1]) / s;
					f.beginPath(), f.moveTo(a, l), f.lineTo(r, o), f.lineTo(h, c), f.closePath(), f.stroke();
				}),
				f.restore()),
			f.canvas
		);
	}
	class t_ {
		constructor(t, e, n, i, r, s, o) {
			(this.sourceProj_ = t), (this.targetProj_ = e);
			let a = {};
			const l = o ? go((t) => Do(o, xo(t, this.targetProj_, this.sourceProj_))) : yo(this.targetProj_, this.sourceProj_);
			(this.transformInv_ = function (t) {
				const e = t[0] + '/' + t[1];
				return a[e] || (a[e] = l(t)), a[e];
			}),
				(this.maxSourceExtent_ = i),
				(this.errorThresholdSquared_ = r * r),
				(this.triangles_ = []),
				(this.wrapsXInSource_ = !1),
				(this.canWrapXInSource_ = this.sourceProj_.canWrapX() && !!i && !!this.sourceProj_.getExtent() && lr(i) >= lr(this.sourceProj_.getExtent())),
				(this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? lr(this.sourceProj_.getExtent()) : null),
				(this.targetWorldWidth_ = this.targetProj_.getExtent() ? lr(this.targetProj_.getExtent()) : null);
			const h = or(n),
				c = ar(n),
				u = Qi(n),
				d = Ji(n),
				g = this.transformInv_(h),
				f = this.transformInv_(c),
				p = this.transformInv_(u),
				m = this.transformInv_(d),
				_ = 10 + (s ? Math.max(0, Math.ceil(Math.log2(Hi(n) / (s * s * 256 * 256)))) : 0);
			if ((this.addQuad_(h, c, u, d, g, f, p, m, _), this.wrapsXInSource_)) {
				let t = 1 / 0;
				this.triangles_.forEach(function (e, n, i) {
					t = Math.min(t, e.source[0][0], e.source[1][0], e.source[2][0]);
				}),
					this.triangles_.forEach((e) => {
						if (Math.max(e.source[0][0], e.source[1][0], e.source[2][0]) - t > this.sourceWorldWidth_ / 2) {
							const n = [
								[e.source[0][0], e.source[0][1]],
								[e.source[1][0], e.source[1][1]],
								[e.source[2][0], e.source[2][1]],
							];
							n[0][0] - t > this.sourceWorldWidth_ / 2 && (n[0][0] -= this.sourceWorldWidth_), n[1][0] - t > this.sourceWorldWidth_ / 2 && (n[1][0] -= this.sourceWorldWidth_), n[2][0] - t > this.sourceWorldWidth_ / 2 && (n[2][0] -= this.sourceWorldWidth_);
							const i = Math.min(n[0][0], n[1][0], n[2][0]);
							Math.max(n[0][0], n[1][0], n[2][0]) - i < this.sourceWorldWidth_ / 2 && (e.source = n);
						}
					});
			}
			a = {};
		}
		addTriangle_(t, e, n, i, r, s) {
			this.triangles_.push({ source: [i, r, s], target: [t, e, n] });
		}
		addQuad_(t, e, n, i, r, s, o, a, l) {
			const h = ki([r, s, o, a]),
				c = this.sourceWorldWidth_ ? lr(h) / this.sourceWorldWidth_ : null,
				u = this.sourceWorldWidth_,
				d = this.sourceProj_.canWrapX() && c > 0.5 && c < 1;
			let g = !1;
			if (l > 0) {
				if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
					g = lr(ki([t, e, n, i])) / this.targetWorldWidth_ > 0.25 || g;
				}
				!d && this.sourceProj_.isGlobal() && c && (g = c > 0.25 || g);
			}
			if (!g && this.maxSourceExtent_ && isFinite(h[0]) && isFinite(h[1]) && isFinite(h[2]) && isFinite(h[3]) && !hr(h, this.maxSourceExtent_)) return;
			let f = 0;
			if (!(g || (isFinite(r[0]) && isFinite(r[1]) && isFinite(s[0]) && isFinite(s[1]) && isFinite(o[0]) && isFinite(o[1]) && isFinite(a[0]) && isFinite(a[1]))))
				if (l > 0) g = !0;
				else if (((f = (isFinite(r[0]) && isFinite(r[1]) ? 0 : 8) + (isFinite(s[0]) && isFinite(s[1]) ? 0 : 4) + (isFinite(o[0]) && isFinite(o[1]) ? 0 : 2) + (isFinite(a[0]) && isFinite(a[1]) ? 0 : 1)), 1 != f && 2 != f && 4 != f && 8 != f)) return;
			if (l > 0) {
				if (!g) {
					const e = [(t[0] + n[0]) / 2, (t[1] + n[1]) / 2],
						i = this.transformInv_(e);
					let s;
					if (d) {
						s = (Er(r[0], u) + Er(o[0], u)) / 2 - Er(i[0], u);
					} else s = (r[0] + o[0]) / 2 - i[0];
					const a = (r[1] + o[1]) / 2 - i[1];
					g = s * s + a * a > this.errorThresholdSquared_;
				}
				if (g) {
					if (Math.abs(t[0] - n[0]) <= Math.abs(t[1] - n[1])) {
						const h = [(e[0] + n[0]) / 2, (e[1] + n[1]) / 2],
							c = this.transformInv_(h),
							u = [(i[0] + t[0]) / 2, (i[1] + t[1]) / 2],
							d = this.transformInv_(u);
						this.addQuad_(t, e, h, u, r, s, c, d, l - 1), this.addQuad_(u, h, n, i, d, c, o, a, l - 1);
					} else {
						const h = [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2],
							c = this.transformInv_(h),
							u = [(n[0] + i[0]) / 2, (n[1] + i[1]) / 2],
							d = this.transformInv_(u);
						this.addQuad_(t, h, u, i, r, c, d, a, l - 1), this.addQuad_(h, e, n, u, c, s, o, d, l - 1);
					}
					return;
				}
			}
			if (d) {
				if (!this.canWrapXInSource_) return;
				this.wrapsXInSource_ = !0;
			}
			11 & f || this.addTriangle_(t, n, i, r, o, a), 14 & f || this.addTriangle_(t, n, e, r, o, s), f && (13 & f || this.addTriangle_(e, i, t, s, a, r), 7 & f || this.addTriangle_(e, i, n, s, a, o));
		}
		calculateSourceExtent() {
			const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
			return (
				this.triangles_.forEach(function (e, n, i) {
					const r = e.source;
					qi(t, r[0]), qi(t, r[1]), qi(t, r[2]);
				}),
				t
			);
		}
		getTriangles() {
			return this.triangles_;
		}
	}
	class e_ extends Dg {
		constructor(t, e, n, i, r, s, o, a, l, h, c, u) {
			super(r, Mg, u), (this.renderEdges_ = void 0 !== c && c), (this.pixelRatio_ = o), (this.gutter_ = a), (this.canvas_ = null), (this.sourceTileGrid_ = e), (this.targetTileGrid_ = i), (this.wrappedTileCoord_ = s || r), (this.sourceTiles_ = []), (this.sourcesListenerKeys_ = null), (this.sourceZ_ = 0), (this.clipExtent_ = t.canWrapX() ? t.getExtent() : void 0);
			const d = i.getTileCoordExtent(this.wrappedTileCoord_),
				g = this.targetTileGrid_.getExtent();
			let f = this.sourceTileGrid_.getExtent();
			const p = g ? sr(d, g) : d;
			if (0 === Hi(p)) return void (this.state = Ag);
			const m = t.getExtent();
			m && (f = f ? sr(f, m) : m);
			const _ = i.getResolution(this.wrappedTileCoord_[0]),
				y = (function (t, e, n, i) {
					const r = tr(n);
					let s = Jm(t, e, r, i);
					return (
						(!isFinite(s) || s <= 0) &&
							Yi(n, function (n) {
								return (s = Jm(t, e, n, i)), isFinite(s) && s > 0;
							}),
						s
					);
				})(t, n, p, _);
			if (!isFinite(y) || y <= 0) return void (this.state = Ag);
			const x = void 0 !== h ? h : 0.5;
			if (((this.triangulation_ = new t_(t, n, p, f, y * x, _)), 0 === this.triangulation_.getTriangles().length)) return void (this.state = Ag);
			this.sourceZ_ = e.getZForResolution(y);
			let v = this.triangulation_.calculateSourceExtent();
			if ((f && (t.canWrapX() ? ((v[1] = vr(v[1], f[1], f[3])), (v[3] = vr(v[3], f[1], f[3]))) : (v = sr(v, f))), Hi(v))) {
				let n = 0,
					i = 0;
				t.canWrapX() && ((n = lr(m)), (i = Math.floor((v[0] - m[0]) / n)));
				gr(v.slice(), t, !0).forEach((t) => {
					const r = e.getTileRangeForExtentAndZ(t, this.sourceZ_);
					for (let t = r.minX; t <= r.maxX; t++)
						for (let e = r.minY; e <= r.maxY; e++) {
							const r = l(this.sourceZ_, t, e, o);
							if (r) {
								const t = i * n;
								this.sourceTiles_.push({ tile: r, offset: t });
							}
						}
					++i;
				}),
					0 === this.sourceTiles_.length && (this.state = Ag);
			} else this.state = Ag;
		}
		getImage() {
			return this.canvas_;
		}
		reproject_() {
			const t = [];
			if (
				(this.sourceTiles_.forEach((e) => {
					const n = e.tile;
					if (n && n.getState() == kg) {
						const i = this.sourceTileGrid_.getTileCoordExtent(n.tileCoord);
						(i[0] += e.offset), (i[2] += e.offset);
						const r = this.clipExtent_?.slice();
						r && ((r[0] += e.offset), (r[2] += e.offset)), t.push({ extent: i, clipExtent: r, image: n.getImage() });
					}
				}),
				(this.sourceTiles_.length = 0),
				0 === t.length)
			)
				this.state = Lg;
			else {
				const e = this.wrappedTileCoord_[0],
					n = this.targetTileGrid_.getTileSize(e),
					i = 'number' == typeof n ? n : n[0],
					r = 'number' == typeof n ? n : n[1],
					s = this.targetTileGrid_.getResolution(e),
					o = this.sourceTileGrid_.getResolution(this.sourceZ_),
					a = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);
				(this.canvas_ = Qm(i, r, this.pixelRatio_, o, this.sourceTileGrid_.getExtent(), s, a, this.triangulation_, t, this.gutter_, this.renderEdges_, this.interpolate)), (this.state = kg);
			}
			this.changed();
		}
		load() {
			if (this.state == Mg) {
				(this.state = Ig), this.changed();
				let t = 0;
				(this.sourcesListenerKeys_ = []),
					this.sourceTiles_.forEach(({ tile: e }) => {
						const n = e.getState();
						if (n == Mg || n == Ig) {
							t++;
							const n = gi(e, Kn, (i) => {
								const r = e.getState();
								(r != kg && r != Lg && r != Ag) || (pi(n), t--, 0 === t && (this.unlistenSources_(), this.reproject_()));
							});
							this.sourcesListenerKeys_.push(n);
						}
					}),
					0 === t
						? setTimeout(this.reproject_.bind(this), 0)
						: this.sourceTiles_.forEach(function ({ tile: t }, e, n) {
								t.getState() == Mg && t.load();
						  });
			}
		}
		unlistenSources_() {
			this.sourcesListenerKeys_.forEach(pi), (this.sourcesListenerKeys_ = null);
		}
		release() {
			this.canvas_ && (al(this.canvas_.getContext('2d')), Km.push(this.canvas_), (this.canvas_ = null)), super.release();
		}
	}
	class n_ {
		constructor(t) {
			(this.highWaterMark = void 0 !== t ? t : 2048), (this.count_ = 0), (this.entries_ = {}), (this.oldest_ = null), (this.newest_ = null);
		}
		deleteOldest() {
			const t = this.pop();
			t instanceof li && t.dispose();
		}
		canExpireCache() {
			return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
		}
		expireCache(t) {
			for (; this.canExpireCache(); ) this.deleteOldest();
		}
		clear() {
			for (; this.oldest_; ) this.deleteOldest();
		}
		containsKey(t) {
			return this.entries_.hasOwnProperty(t);
		}
		forEach(t) {
			let e = this.oldest_;
			for (; e; ) t(e.value_, e.key_, this), (e = e.newer);
		}
		get(t, e) {
			const n = this.entries_[t];
			return Ci(void 0 !== n, 'Tried to get a value for a key that does not exist in the cache'), n === this.newest_ || (n === this.oldest_ ? ((this.oldest_ = this.oldest_.newer), (this.oldest_.older = null)) : ((n.newer.older = n.older), (n.older.newer = n.newer)), (n.newer = null), (n.older = this.newest_), (this.newest_.newer = n), (this.newest_ = n)), n.value_;
		}
		remove(t) {
			const e = this.entries_[t];
			return Ci(void 0 !== e, 'Tried to get a value for a key that does not exist in the cache'), e === this.newest_ ? ((this.newest_ = e.older), this.newest_ && (this.newest_.newer = null)) : e === this.oldest_ ? ((this.oldest_ = e.newer), this.oldest_ && (this.oldest_.older = null)) : ((e.newer.older = e.older), (e.older.newer = e.newer)), delete this.entries_[t], --this.count_, e.value_;
		}
		getCount() {
			return this.count_;
		}
		getKeys() {
			const t = new Array(this.count_);
			let e,
				n = 0;
			for (e = this.newest_; e; e = e.older) t[n++] = e.key_;
			return t;
		}
		getValues() {
			const t = new Array(this.count_);
			let e,
				n = 0;
			for (e = this.newest_; e; e = e.older) t[n++] = e.value_;
			return t;
		}
		peekLast() {
			return this.oldest_.value_;
		}
		peekLastKey() {
			return this.oldest_.key_;
		}
		peekFirstKey() {
			return this.newest_.key_;
		}
		peek(t) {
			return this.entries_[t]?.value_;
		}
		pop() {
			const t = this.oldest_;
			return delete this.entries_[t.key_], t.newer && (t.newer.older = null), (this.oldest_ = t.newer), this.oldest_ || (this.newest_ = null), --this.count_, t.value_;
		}
		replace(t, e) {
			this.get(t), (this.entries_[t].value_ = e);
		}
		set(t, e) {
			Ci(!(t in this.entries_), 'Tried to set a value for a key that is used already');
			const n = { key_: t, newer: null, older: this.newest_, value_: e };
			this.newest_ ? (this.newest_.newer = n) : (this.oldest_ = n), (this.newest_ = n), (this.entries_[t] = n), ++this.count_;
		}
		setSize(t) {
			this.highWaterMark = t;
		}
	}
	function i_(t, e, n, i) {
		return void 0 !== i ? ((i[0] = t), (i[1] = e), (i[2] = n), i) : [t, e, n];
	}
	function r_(t) {
		return (e = t[0]), (n = t[1]), (i = t[2]), (n << e) + i;
		var e, n, i;
	}
	function s_(t, e, n, i) {
		return `${t},${(function (t, e, n) {
			return t + '/' + e + '/' + n;
		})(e, n, i)}`;
	}
	function o_(t, e, n) {
		if (!(n in t)) return (t[n] = new Set([e])), !0;
		const i = t[n],
			r = i.has(e);
		return r || i.add(e), !r;
	}
	function a_(t, e, n) {
		const i = t[n];
		return !!i && i.delete(e);
	}
	function l_(t, e) {
		const n = t.layerStatesArray[t.layerIndex];
		n.extent && (e = sr(e, Po(n.extent, t.viewState.projection)));
		const i = n.layer.getRenderSource();
		if (!i.getWrapX()) {
			const n = i.getTileGridForProjection(t.viewState.projection).getExtent();
			n && (e = sr(e, n));
		}
		return e;
	}
	class h_ extends eu {
		constructor(t, e) {
			super(t), (e = e || {}), (this.extentChanged = !0), (this.renderComplete = !1), (this.renderedExtent_ = null), this.renderedPixelRatio, (this.renderedProjection = null), this.renderedRevision_, (this.renderedTiles = []), this.renderedSourceKey_, this.renderedSourceRevision_, (this.tempExtent = [1 / 0, 1 / 0, -1 / 0, -1 / 0]), (this.tempTileRange_ = new ap(0, 0, 0, 0)), (this.tempTileCoord_ = i_(0, 0, 0));
			const n = void 0 !== e.cacheSize ? e.cacheSize : 512;
			(this.tileCache_ = new n_(n)), (this.maxStaleKeys = 0.5 * n);
		}
		getTileCache() {
			return this.tileCache_;
		}
		getOrCreateTile(t, e, n, i) {
			const r = this.tileCache_,
				s = this.getLayer().getSource(),
				o = s_(s.getKey(), t, e, n);
			let a;
			if (r.containsKey(o)) a = r.get(o);
			else {
				if (((a = s.getTile(t, e, n, i.pixelRatio, i.viewState.projection)), !a)) return null;
				r.set(o, a);
			}
			return a;
		}
		getTile(t, e, n, i) {
			const r = this.getOrCreateTile(t, e, n, i);
			return r || null;
		}
		getData(t) {
			const e = this.frameState;
			if (!e) return null;
			const n = this.getLayer(),
				i = Do(e.pixelToCoordinateTransform, t.slice()),
				r = n.getExtent();
			if (r && !Oi(r, i)) return null;
			const s = e.viewState,
				o = n.getRenderSource(),
				a = o.getTileGridForProjection(s.projection),
				l = o.getTilePixelRatio(e.pixelRatio);
			for (let t = a.getZForResolution(s.resolution); t >= a.getMinZoom(); --t) {
				const n = a.getTileCoordForCoordAndZ(i, t),
					r = this.getTile(t, n[1], n[2], e);
				if (!r || r.getState() !== kg) continue;
				const h = a.getOrigin(t),
					c = Zl(a.getTileSize(t)),
					u = a.getResolution(t);
				let d;
				if (r instanceof Og || r instanceof e_) d = r.getImage();
				else {
					if (!(r instanceof qm)) continue;
					if (((d = Vm(r.getData())), !d)) continue;
				}
				const g = Math.floor(l * ((i[0] - h[0]) / u - n[1] * c[0])),
					f = Math.floor(l * ((h[1] - i[1]) / u - n[2] * c[1])),
					p = Math.round(l * o.getGutterForProjection(s.projection));
				return this.getImageData(d, g + p, f + p);
			}
			return null;
		}
		prepareFrame(t) {
			this.renderedProjection ? t.viewState.projection !== this.renderedProjection && (this.tileCache_.clear(), (this.renderedProjection = t.viewState.projection)) : (this.renderedProjection = t.viewState.projection);
			const e = this.getLayer().getSource();
			if (!e) return !1;
			const n = e.getRevision();
			return this.renderedRevision_ ? this.renderedRevision_ !== n && ((this.renderedRevision_ = n), this.renderedSourceKey_ === e.getKey() && this.tileCache_.clear()) : (this.renderedRevision_ = n), !0;
		}
		enqueueTiles(t, e, n, i, r) {
			const s = t.viewState,
				o = this.getLayer(),
				a = o.getRenderSource(),
				l = a.getTileGridForProjection(s.projection),
				h = wi(a);
			h in t.wantedTiles || (t.wantedTiles[h] = {});
			const c = t.wantedTiles[h],
				u = o.getMapInternal(),
				d = Math.max(n - r, l.getMinZoom(), l.getZForResolution(Math.min(o.getMaxResolution(), u ? u.getView().getResolutionForZoom(Math.max(o.getMinZoom(), 0)) : l.getResolution(0)), a.zDirection)),
				g = s.rotation,
				f = g ? ir(s.center, s.resolution, g, t.size) : void 0;
			for (let r = n; r >= d; --r) {
				const n = l.getTileRangeForExtentAndZ(e, r, this.tempTileRange_),
					s = l.getResolution(r);
				for (let e = n.minX; e <= n.maxX; ++e)
					for (let o = n.minY; o <= n.maxY; ++o) {
						if (g && !l.tileCoordIntersectsViewport([r, e, o], f)) continue;
						const n = this.getTile(r, e, o, t);
						if (!n) continue;
						if (!o_(i, n, r)) continue;
						const a = n.getKey();
						if (((c[a] = !0), n.getState() === Mg && !t.tileQueue.isKeyQueued(a))) {
							const i = i_(r, e, o, this.tempTileCoord_);
							t.tileQueue.enqueue([n, h, l.getTileCoordCenter(i), s]);
						}
					}
			}
		}
		findStaleTile_(t, e) {
			const n = this.tileCache_,
				i = t[0],
				r = t[1],
				s = t[2],
				o = this.getStaleKeys();
			for (let t = 0; t < o.length; ++t) {
				const a = s_(o[t], i, r, s);
				if (n.containsKey(a)) {
					const t = n.peek(a);
					if (t.getState() === kg) return t.endTransition(wi(this)), o_(e, t, i), !0;
				}
			}
			return !1;
		}
		findAltTiles_(t, e, n, i) {
			const r = t.getTileRangeForTileCoordAndZ(e, n, this.tempTileRange_);
			if (!r) return !1;
			let s = !0;
			const o = this.tileCache_,
				a = this.getLayer().getRenderSource().getKey();
			for (let t = r.minX; t <= r.maxX; ++t)
				for (let e = r.minY; e <= r.maxY; ++e) {
					const r = s_(a, n, t, e);
					let l = !1;
					if (o.containsKey(r)) {
						const t = o.peek(r);
						t.getState() === kg && (o_(i, t, n), (l = !0));
					}
					l || (s = !1);
				}
			return s;
		}
		renderFrame(t, e) {
			let n = !0;
			this.renderComplete = !0;
			const i = t.layerStatesArray[t.layerIndex],
				r = t.viewState,
				s = r.projection,
				o = r.resolution,
				a = r.center,
				l = t.pixelRatio,
				h = this.getLayer(),
				c = h.getSource(),
				u = c.getTileGridForProjection(s),
				d = u.getZForResolution(o, c.zDirection),
				g = u.getResolution(d),
				f = c.getKey();
			this.renderedSourceKey_ ? this.renderedSourceKey_ !== f && (this.prependStaleKey(this.renderedSourceKey_), (this.renderedSourceKey_ = f)) : (this.renderedSourceKey_ = f);
			let p = t.extent;
			const m = c.getTilePixelRatio(l);
			this.prepareContainer(t, e);
			const _ = this.context.canvas.width,
				y = this.context.canvas.height,
				x = i.extent && Po(i.extent, s);
			x && (p = sr(p, Po(i.extent, s)));
			const v = (g * _) / 2 / m,
				w = (g * y) / 2 / m,
				b = [a[0] - v, a[1] - w, a[0] + v, a[1] + w],
				S = {};
			this.renderedTiles.length = 0;
			const C = h.getPreload();
			if (t.nextExtent) {
				const e = u.getZForResolution(r.nextResolution, c.zDirection),
					n = l_(t, t.nextExtent);
				this.enqueueTiles(t, n, e, S, C);
			}
			const E = l_(t, p);
			if (
				(this.enqueueTiles(t, E, d, S, 0),
				C > 0 &&
					setTimeout(() => {
						this.enqueueTiles(t, E, d - 1, S, C - 1);
					}, 0),
				!(d in S))
			)
				return this.container;
			const T = wi(this),
				P = t.time;
			for (const e of S[d]) {
				const i = e.getState();
				if (i === Ag) continue;
				const r = e.tileCoord;
				if (i === kg) {
					if (1 === e.getAlpha(T, P)) {
						e.endTransition(T);
						continue;
					}
				}
				i !== Mg && (n = !1), i !== Lg && (this.renderComplete = !1);
				if (this.findStaleTile_(r, S)) {
					a_(S, e, d), (t.animate = !0);
					continue;
				}
				if (this.findAltTiles_(u, r, d + 1, S)) continue;
				const s = u.getMinZoom();
				for (let t = d - 1; t >= s; --t) {
					if (this.findAltTiles_(u, r, t, S)) break;
				}
			}
			const R = ((g / o) * l) / m,
				F = this.getRenderContext(t);
			Go(this.tempTransform, _ / 2, y / 2, R, R, 0, -_ / 2, -y / 2), i.extent && this.clipUnrotated(F, t, x), c.getInterpolate() || (F.imageSmoothingEnabled = !1), this.preRender(F, t);
			const M = Object.keys(S).map(Number);
			let I;
			M.sort(zn);
			const k = [],
				L = [];
			for (let e = M.length - 1; e >= 0; --e) {
				const n = M[e],
					i = c.getTilePixelSize(n, l, s),
					r = u.getResolution(n) / g,
					o = i[0] * r * R,
					a = i[1] * r * R,
					h = u.getTileCoordForCoordAndZ(or(b), n),
					d = u.getTileCoordExtent(h),
					f = Do(this.tempTransform, [(m * (d[0] - b[0])) / g, (m * (b[3] - d[3])) / g]),
					p = m * c.getGutterForProjection(s);
				for (const e of S[n]) {
					if (e.getState() !== kg) continue;
					const i = e.tileCoord,
						r = h[1] - i[1],
						s = Math.round(f[0] - (r - 1) * o),
						l = h[2] - i[2],
						u = Math.round(f[1] - (l - 1) * a),
						d = Math.round(f[0] - r * o),
						g = Math.round(f[1] - l * a),
						m = s - d,
						_ = u - g,
						y = 1 === M.length;
					let x = !1;
					I = [d, g, d + m, g, d + m, g + _, d, g + _];
					for (let t = 0, e = k.length; t < e; ++t)
						if (!y && n < L[t]) {
							const e = k[t];
							hr([d, g, d + m, g + _], [e[0], e[3], e[4], e[7]]) && (x || (F.save(), (x = !0)), F.beginPath(), F.moveTo(I[0], I[1]), F.lineTo(I[2], I[3]), F.lineTo(I[4], I[5]), F.lineTo(I[6], I[7]), F.moveTo(e[6], e[7]), F.lineTo(e[4], e[5]), F.lineTo(e[2], e[3]), F.lineTo(e[0], e[1]), F.clip());
						}
					k.push(I), L.push(n), this.drawTile(e, t, d, g, m, _, p, y), x && F.restore(), this.renderedTiles.unshift(e), this.updateUsedTiles(t.usedTiles, c, e);
				}
			}
			if (((this.renderedResolution = g), (this.extentChanged = !this.renderedExtent_ || !Wi(this.renderedExtent_, b)), (this.renderedExtent_ = b), (this.renderedPixelRatio = l), this.postRender(this.context, t), i.extent && F.restore(), (F.imageSmoothingEnabled = !0), this.renderComplete)) {
				const e = (t, e) => {
					const n = wi(c),
						i = e.wantedTiles[n],
						r = i ? Object.keys(i).length : 0;
					this.updateCacheSize(r), this.tileCache_.expireCache();
				};
				t.postRenderFunctions.push(e);
			}
			return this.renderComplete || n || (t.animate = !0), this.container;
		}
		updateCacheSize(t) {
			this.tileCache_.highWaterMark = Math.max(this.tileCache_.highWaterMark, 2 * t);
		}
		drawTile(t, e, n, i, r, s, o, a) {
			let l;
			if (t instanceof qm) {
				if (((l = Vm(t.getData())), !l)) throw new Error('Rendering array data is not yet supported');
			} else l = this.getTileImage(t);
			if (!l) return;
			const h = this.getRenderContext(e),
				c = wi(this),
				u = e.layerStatesArray[e.layerIndex],
				d = u.opacity * (a ? t.getAlpha(c, e.time) : 1),
				g = d !== h.globalAlpha;
			g && (h.save(), (h.globalAlpha = d)), h.drawImage(l, o, o, l.width - 2 * o, l.height - 2 * o, n, i, r, s), g && h.restore(), d !== u.opacity ? (e.animate = !0) : a && t.endTransition(c);
		}
		getImage() {
			const t = this.context;
			return t ? t.canvas : null;
		}
		getTileImage(t) {
			return t.getImage();
		}
		updateUsedTiles(t, e, n) {
			const i = wi(e);
			i in t || (t[i] = {}), (t[i][n.getKey()] = !0);
		}
	}
	var c_ = 'preload',
		u_ = 'useInterimTilesOnError';
	class d_ extends Cg {
		constructor(t) {
			t = t || {};
			const e = Object.assign({}, t),
				n = t.cacheSize;
			delete t.cacheSize, delete e.preload, delete e.useInterimTilesOnError, super(e), this.on, this.once, this.un, (this.cacheSize_ = n), this.setPreload(void 0 !== t.preload ? t.preload : 0), this.setUseInterimTilesOnError(void 0 === t.useInterimTilesOnError || t.useInterimTilesOnError);
		}
		getCacheSize() {
			return this.cacheSize_;
		}
		getPreload() {
			return this.get(c_);
		}
		setPreload(t) {
			this.set(c_, t);
		}
		getUseInterimTilesOnError() {
			return this.get(u_);
		}
		setUseInterimTilesOnError(t) {
			this.set(u_, t);
		}
		getData(t) {
			return super.getData(t);
		}
	}
	class g_ extends d_ {
		constructor(t) {
			super(t);
		}
		createRenderer() {
			return new h_(this, { cacheSize: this.getCacheSize() });
		}
	}
	const f_ = { image: ['Polygon', 'Circle', 'LineString', 'Image', 'Text'], hybrid: ['Polygon', 'LineString'], vector: [] },
		p_ = { hybrid: ['Image', 'Text', 'Default'], vector: ['Polygon', 'Circle', 'LineString', 'Image', 'Text', 'Default'] };
	class m_ extends h_ {
		constructor(t, e) {
			super(t, e), (this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this)), this.renderedLayerRevision_, (this.renderedPixelToCoordinateTransform_ = null), this.renderedRotation_, (this.renderedOpacity_ = 1), (this.tmpTransform_ = [1, 0, 0, 1, 0, 0]), (this.tileClipContexts_ = null);
		}
		drawTile(t, e, n, i, r, s, o, a) {
			this.updateExecutorGroup_(t, e.pixelRatio, e.viewState.projection), this.tileImageNeedsRender_(t) && this.renderTileImage_(t, e), super.drawTile(t, e, n, i, r, s, o, a);
		}
		getTile(t, e, n, i) {
			const r = this.getOrCreateTile(t, e, n, i);
			if (!r) return null;
			const s = i.viewState.resolution,
				o = i.viewHints;
			return (!!(o[sc] || o[oc]) && r.wantedResolution) || (r.wantedResolution = s), r;
		}
		prepareFrame(t) {
			const e = this.getLayer().getRevision();
			return this.renderedLayerRevision_ !== e && ((this.renderedLayerRevision_ = e), (this.renderedTiles.length = 0)), super.prepareFrame(t);
		}
		updateExecutorGroup_(t, e, n) {
			const i = this.getLayer(),
				r = i.getRevision(),
				s = i.getRenderOrder() || null,
				o = t.wantedResolution,
				a = t.getReplayState(i);
			if (!a.dirty && a.renderedResolution === o && a.renderedRevision == r && a.renderedRenderOrder == s) return;
			const l = i.getSource(),
				h = !!i.getDeclutter(),
				c = l.getTileGrid(),
				u = l.getTileGridForProjection(n).getTileCoordExtent(t.wrappedTileCoord),
				d = l.getSourceTiles(e, n, t),
				g = wi(i);
			delete t.hitDetectionImageData[g], (t.executorGroups[g] = []), (a.dirty = !1);
			for (let n = 0, r = d.length; n < r; ++n) {
				const r = d[n];
				if (r.getState() != kg) continue;
				const f = r.tileCoord,
					p = c.getTileCoordExtent(f),
					m = sr(u, p),
					_ = Li(m, i.getRenderBuffer() * o, this.tempExtent),
					y = Wi(p, m) ? null : _,
					x = new Mc(0, m, o, e),
					v = bh(o, e),
					w = function (t, e) {
						let n;
						const r = t.getStyleFunction() || i.getStyleFunction();
						if ((r && (n = r(t, o)), n)) {
							const i = this.renderFeature(t, v, n, x, h, e);
							a.dirty = a.dirty || i;
						}
					},
					b = r.getFeatures();
				s && s !== a.renderedRenderOrder && b.sort(s);
				for (let t = 0, e = b.length; t < e; ++t) {
					const e = b[t];
					(y && !hr(y, e.getGeometry().getExtent())) || w.call(this, e, t);
				}
				const S = x.finish(),
					C = 'vector' !== i.getRenderMode() && h && 1 === d.length ? null : m,
					E = new Xc(C, o, e, l.getOverlaps(), S, i.getRenderBuffer(), !0);
				t.executorGroups[g].push(E);
			}
			(a.renderedRevision = r), (a.renderedRenderOrder = s), (a.renderedResolution = o);
		}
		forEachFeatureAtCoordinate(t, e, n, i, r) {
			const s = e.viewState.resolution,
				o = e.viewState.rotation;
			n = null == n ? 0 : n;
			const a = this.getLayer(),
				l = a.getSource().getTileGridForProjection(e.viewState.projection),
				h = ki([t]);
			Li(h, s * n, h);
			const c = {},
				u = function (t, e, n) {
					let s = t.getId();
					void 0 === s && (s = wi(t));
					const o = c[s];
					if (o) {
						if (!0 !== o && n < o.distanceSq) {
							if (0 === n) return (c[s] = !0), r.splice(r.lastIndexOf(o), 1), i(t, a, e);
							(o.geometry = e), (o.distanceSq = n);
						}
					} else {
						if (0 === n) return (c[s] = !0), i(t, a, e);
						r.push((c[s] = { feature: t, layer: a, geometry: e, distanceSq: n, callback: i }));
					}
				},
				d = this.renderedTiles,
				g = wi(a),
				f = a.getDeclutter(),
				p = f ? e.declutter?.[f]?.all().map((t) => t.value) : null;
			let m;
			t: for (let e = 0, i = d.length; e < i; ++e) {
				const i = d[e];
				if (!hr(l.getTileCoordExtent(i.wrappedTileCoord), h)) continue;
				const r = i.executorGroups[g];
				for (let e = 0, i = r.length; e < i; ++e) if (((m = r[e].forEachFeatureAtCoordinate(t, s, o, n, u, p)), m)) break t;
			}
			return m;
		}
		getFeatures(t) {
			return 0 === this.renderedTiles.length
				? Promise.resolve([])
				: new Promise((e, n) => {
						const i = this.getLayer(),
							r = i.getSource(),
							s = this.renderedProjection,
							o = s.getExtent(),
							a = this.renderedResolution,
							l = r.getTileGridForProjection(s),
							h = Do(this.renderedPixelToCoordinateTransform_, t.slice()),
							c = l.getTileCoordForCoordAndResolution(h, a).toString(),
							u = this.renderedTiles.find((t) => t.tileCoord.toString() === c && t.getState() === kg);
						if (!u || u.loadingSourceTiles > 0) return void e([]);
						r.getWrapX() && s.canWrapX() && !zi(o, l.getTileCoordExtent(u.tileCoord)) && is(h, s);
						const d = wi(i),
							g = or(l.getTileCoordExtent(u.wrappedTileCoord)),
							f = [(h[0] - g[0]) / a, (g[1] - h[1]) / a],
							p = u.getSourceTiles().reduce((t, e) => t.concat(e.getFeatures()), []);
						let m = u.hitDetectionImageData[d];
						if (!m) {
							const t = Zl(l.getTileSize(l.getZForResolution(a, r.zDirection))),
								e = this.renderedRotation_;
							(m = Kc(t, [this.getRenderTransform(l.getTileCoordCenter(u.wrappedTileCoord), a, 0, Zc, t[0] * Zc, t[1] * Zc, 0)], p, i.getStyleFunction(), l.getTileCoordExtent(u.wrappedTileCoord), u.getReplayState(i).renderedResolution, e)), (u.hitDetectionImageData[d] = m);
						}
						e(Yc(f, p, m));
				  });
		}
		getFeaturesInExtent(t) {
			const e = [],
				n = this.getTileCache();
			if (0 === n.getCount()) return e;
			const i = this.getLayer().getSource().getTileGridForProjection(this.frameState.viewState.projection),
				r = i.getZForResolution(this.renderedResolution),
				s = {};
			return (
				n.forEach((n) => {
					if (n.tileCoord[0] !== r || n.getState() !== kg) return;
					const o = n.getSourceTiles();
					for (let n = 0, r = o.length; n < r; ++n) {
						const r = o[n],
							a = r.getKey();
						if (a in s) continue;
						s[a] = !0;
						const l = r.tileCoord;
						if (hr(t, i.getTileCoordExtent(l))) {
							const n = r.getFeatures();
							if (n)
								for (let i = 0, r = n.length; i < r; ++i) {
									const r = n[i],
										s = r.getGeometry();
									hr(t, s.getExtent()) && e.push(r);
								}
						}
					}
				}),
				e
			);
		}
		handleFontsChanged() {
			const t = this.getLayer();
			t.getVisible() && void 0 !== this.renderedLayerRevision_ && t.changed();
		}
		handleStyleImageChange_(t) {
			this.renderIfReadyAndVisible();
		}
		renderDeclutter(t, e) {
			const n = this.context,
				i = n.globalAlpha;
			n.globalAlpha = e.opacity;
			const r = t.viewHints,
				s = !(r[sc] || r[oc]),
				o = [this.context.canvas.width, this.context.canvas.height],
				a = this.getLayer().getDeclutter(),
				l = a ? t.declutter?.[a] : void 0,
				h = wi(this.getLayer()),
				c = this.renderedTiles;
			for (let e = 0, n = c.length; e < n; ++e) {
				const n = c[e],
					i = n.executorGroups[h];
				if (i) for (let e = i.length - 1; e >= 0; --e) i[e].execute(this.context, o, this.getTileRenderTransform(n, t), t.viewState.rotation, s, Vc, l);
			}
			n.globalAlpha = i;
		}
		renderDeferredInternal(t) {
			const e = this.renderedTiles,
				n = wi(this.getLayer()),
				i = e.reduce((t, e, i) => (e.executorGroups[n].forEach((e) => t.push({ executorGroup: e, index: i })), t), []),
				r = i.map(({ executorGroup: t }) => t.getDeferredZIndexContexts()),
				s = {};
			for (let t = 0, e = i.length; t < e; ++t) {
				const e = i[t].executorGroup.getDeferredZIndexContexts();
				for (const t in e) s[t] = !0;
			}
			Object.keys(s)
				.map(Number)
				.sort(zn)
				.forEach((t) => {
					r.forEach((e, n) => {
						e[t] &&
							(e[t].forEach((t) => {
								const { executorGroup: e, index: r } = i[n],
									s = e.getRenderedContext(),
									o = s.globalAlpha;
								s.globalAlpha = this.renderedOpacity_;
								const a = this.tileClipContexts_[r];
								a && a.draw(s), t.draw(s), a && s.restore(), (s.globalAlpha = o), t.clear();
							}),
							(e[t].length = 0));
					});
				});
		}
		getTileRenderTransform(t, e) {
			const n = e.pixelRatio,
				i = e.viewState,
				r = i.center,
				s = i.resolution,
				o = i.rotation,
				a = e.size,
				l = Math.round(a[0] * n),
				h = Math.round(a[1] * n),
				c = this.getLayer().getSource().getTileGridForProjection(e.viewState.projection),
				u = t.tileCoord,
				d = c.getTileCoordExtent(t.wrappedTileCoord),
				g = c.getTileCoordExtent(u, this.tempExtent)[0] - d[0];
			return Lo(Oo(this.inversePixelTransform.slice(), 1 / n, 1 / n), this.getRenderTransform(r, s, o, n, l, h, g));
		}
		postRender(t, e) {
			const n = e.viewHints,
				i = !(n[sc] || n[oc]);
			(this.renderedPixelToCoordinateTransform_ = e.pixelToCoordinateTransform.slice()), (this.renderedRotation_ = e.viewState.rotation), (this.renderedOpacity_ = e.layerStatesArray[e.layerIndex].opacity);
			const r = this.getLayer(),
				s = r.getRenderMode(),
				o = t.globalAlpha;
			t.globalAlpha = this.renderedOpacity_;
			const a = r.getDeclutter(),
				l = a ? p_[s].filter((t) => !Vc.includes(t)) : p_[s],
				h = e.viewState,
				c = h.rotation,
				u = r.getSource(),
				d = u.getTileGridForProjection(h.projection).getZForResolution(h.resolution, u.zDirection),
				g = this.renderedTiles,
				f = [],
				p = [],
				m = [],
				_ = wi(r);
			let y = !0;
			for (let n = g.length - 1; n >= 0; --n) {
				const s = g[n];
				y = y && !s.getReplayState(r).dirty;
				const o = s.executorGroups[_].filter((t) => t.hasExecutors(l));
				if (0 === o.length) continue;
				const h = this.getTileRenderTransform(s, e),
					u = s.tileCoord[0];
				let x = !1;
				const v = o[0].getClipCoords(h);
				let w,
					b = t;
				if (v) {
					(w = new kc()), (b = w.getContext());
					for (let t = 0, e = f.length; t < e; ++t)
						if (d !== u && u < p[t]) {
							const e = f[t];
							hr([v[0], v[3], v[4], v[7]], [e[0], e[3], e[4], e[7]]) && (x || (b.save(), (x = !0)), b.beginPath(), b.moveTo(v[0], v[1]), b.lineTo(v[2], v[3]), b.lineTo(v[4], v[5]), b.lineTo(v[6], v[7]), b.moveTo(e[6], e[7]), b.lineTo(e[4], e[5]), b.lineTo(e[2], e[3]), b.lineTo(e[0], e[1]), b.clip());
						}
					f.push(v), p.push(u);
				}
				for (let n = 0, r = o.length; n < r; ++n) {
					o[n].execute(t, [t.canvas.width, t.canvas.height], h, c, i, l, e.declutter?.[a]);
				}
				x && (b === t ? b.restore() : (m[n] = w));
			}
			(t.globalAlpha = o), (this.ready = y), (this.tileClipContexts_ = m), e.declutter || this.renderDeferredInternal(e), super.postRender(t, e);
		}
		renderFeature(t, e, n, i, r, s) {
			if (!n) return !1;
			let o = !1;
			if (Array.isArray(n)) for (let a = 0, l = n.length; a < l; ++a) o = Ch(i, t, n[a], e, this.boundHandleStyleImageChange_, void 0, r, s) || o;
			else o = Ch(i, t, n, e, this.boundHandleStyleImageChange_, void 0, r, s);
			return o;
		}
		tileImageNeedsRender_(t) {
			const e = this.getLayer();
			if ('vector' === e.getRenderMode()) return !1;
			const n = t.getReplayState(e),
				i = e.getRevision(),
				r = t.wantedResolution;
			return n.renderedTileResolution !== r || n.renderedTileRevision !== i;
		}
		renderTileImage_(t, e) {
			const n = this.getLayer(),
				i = t.getReplayState(n),
				r = n.getRevision(),
				s = t.executorGroups[wi(n)];
			i.renderedTileRevision = r;
			const o = t.wrappedTileCoord,
				a = o[0],
				l = n.getSource();
			let h = e.pixelRatio;
			const c = e.viewState.projection,
				u = l.getTileGridForProjection(c),
				d = u.getResolution(t.tileCoord[0]),
				g = (e.pixelRatio / t.wantedResolution) * d,
				f = u.getResolution(a),
				p = t.getContext();
			h = Math.round(Math.max(h, g / h));
			const m = l.getTilePixelSize(a, h, c);
			(p.canvas.width = m[0]), (p.canvas.height = m[1]);
			const _ = h / g;
			if (1 !== _) {
				const t = ko(this.tmpTransform_);
				Oo(t, _, _), p.setTransform.apply(p, t);
			}
			const y = u.getTileCoordExtent(o, this.tempExtent),
				x = g / f,
				v = ko(this.tmpTransform_);
			Oo(v, x, -x), zo(v, -y[0], -y[3]);
			for (let t = 0, e = s.length; t < e; ++t) {
				s[t].execute(p, [p.canvas.width * _, p.canvas.height * _], v, 0, !0, f_[n.getRenderMode()], null);
			}
			i.renderedTileResolution = t.wantedResolution;
		}
	}
	class __ extends Pg {
		constructor(t) {
			t = t || {};
			const e = Object.assign({}, t);
			delete e.preload;
			const n = void 0 === t.cacheSize ? 0 : t.cacheSize;
			delete t.cacheSize, delete e.useInterimTilesOnError, super(e), this.on, this.once, this.un, (this.cacheSize_ = n);
			const i = t.renderMode || 'hybrid';
			Ci('hybrid' == i || 'vector' == i, "`renderMode` must be `'hybrid'` or `'vector'`"), (this.renderMode_ = i), this.setPreload(t.preload ? t.preload : 0), this.setUseInterimTilesOnError(void 0 === t.useInterimTilesOnError || t.useInterimTilesOnError), this.getBackground, this.setBackground;
		}
		createRenderer() {
			return new m_(this, { cacheSize: this.cacheSize_ });
		}
		getFeatures(t) {
			return super.getFeatures(t);
		}
		getFeaturesInExtent(t) {
			return this.getRenderer().getFeaturesInExtent(t);
		}
		getRenderMode() {
			return this.renderMode_;
		}
		getPreload() {
			return this.get(c_);
		}
		getUseInterimTilesOnError() {
			return this.get(u_);
		}
		setPreload(t) {
			this.set(c_, t);
		}
		setUseInterimTilesOnError(t) {
			this.set(u_, t);
		}
	}
	function y_(t) {
		return Array.isArray(t) ? Math.min(...t) : t;
	}
	class x_ extends dl {
		constructor(t, e, n, i, r, s, o) {
			let a = t.getExtent();
			a && t.canWrapX() && ((a = a.slice()), (a[0] = -1 / 0), (a[2] = 1 / 0));
			let l = e.getExtent();
			l && e.canWrapX() && ((l = l.slice()), (l[0] = -1 / 0), (l[2] = 1 / 0));
			const h = l ? sr(n, l) : n,
				c = Jm(t, e, tr(h), i),
				u = new t_(t, e, h, a, 0.5 * c, i),
				d = u.calculateSourceExtent(),
				g = cr(d) ? null : s(d, c, r),
				f = g ? Ta : Ma,
				p = g ? g.getPixelRatio() : 1;
			super(n, i, p, f), (this.targetProj_ = e), (this.maxSourceExtent_ = a), (this.triangulation_ = u), (this.targetResolution_ = i), (this.targetExtent_ = n), (this.sourceImage_ = g), (this.sourcePixelRatio_ = p), (this.interpolate_ = o), (this.canvas_ = null), (this.sourceListenerKey_ = null);
		}
		disposeInternal() {
			this.state == Pa && this.unlistenSource_(), super.disposeInternal();
		}
		getImage() {
			return this.canvas_;
		}
		getProjection() {
			return this.targetProj_;
		}
		reproject_() {
			const t = this.sourceImage_.getState();
			if (t == Ra) {
				const t = lr(this.targetExtent_) / this.targetResolution_,
					e = rr(this.targetExtent_) / this.targetResolution_;
				this.canvas_ = Qm(t, e, this.sourcePixelRatio_, y_(this.sourceImage_.getResolution()), this.maxSourceExtent_, this.targetResolution_, this.targetExtent_, this.triangulation_, [{ extent: this.sourceImage_.getExtent(), image: this.sourceImage_.getImage() }], 0, void 0, this.interpolate_, !0);
			}
			(this.state = t), this.changed();
		}
		load() {
			if (this.state == Ta) {
				(this.state = Pa), this.changed();
				const t = this.sourceImage_.getState();
				t == Ra || t == Fa
					? this.reproject_()
					: ((this.sourceListenerKey_ = gi(this.sourceImage_, Kn, (t) => {
							const e = this.sourceImage_.getState();
							(e != Ra && e != Fa) || (this.unlistenSource_(), this.reproject_());
					  })),
					  this.sourceImage_.load());
			}
		}
		unlistenSource_() {
			pi(this.sourceListenerKey_), (this.sourceListenerKey_ = null);
		}
	}
	const v_ = 'imageloadstart',
		w_ = 'imageloadend',
		b_ = 'imageloaderror';
	class S_ extends ui {
		constructor(t, e) {
			super(t), (this.image = e);
		}
	}
	class C_ extends Zh {
		constructor(t) {
			super({ attributions: t.attributions, projection: t.projection, state: t.state, interpolate: void 0 === t.interpolate || t.interpolate }), this.on, this.once, this.un, (this.loader = t.loader || null), (this.resolutions_ = void 0 !== t.resolutions ? t.resolutions : null), (this.reprojectedImage_ = null), (this.reprojectedRevision_ = 0), (this.image = null), this.wantedExtent_, this.wantedResolution_, (this.static_ = !!t.loader && 0 === t.loader.length), (this.wantedProjection_ = null);
		}
		getResolutions() {
			return this.resolutions_;
		}
		setResolutions(t) {
			this.resolutions_ = t;
		}
		findNearestResolution(t) {
			const e = this.getResolutions();
			if (e) {
				t = e[jn(e, t, 0)];
			}
			return t;
		}
		getImage(t, e, n, i) {
			const r = this.getProjection();
			if (!r || !i || po(r, i)) return r && (i = r), this.getImageInternal(t, e, n, i);
			if (this.reprojectedImage_) {
				if (this.reprojectedRevision_ == this.getRevision() && po(this.reprojectedImage_.getProjection(), i) && this.reprojectedImage_.getResolution() == e && Wi(this.reprojectedImage_.getExtent(), t)) return this.reprojectedImage_;
				this.reprojectedImage_.dispose(), (this.reprojectedImage_ = null);
			}
			return (this.reprojectedImage_ = new x_(r, i, t, e, n, (t, e, n) => this.getImageInternal(t, e, n, r), this.getInterpolate())), (this.reprojectedRevision_ = this.getRevision()), this.reprojectedImage_;
		}
		getImageInternal(t, e, n, i) {
			if (this.loader) {
				const r = T_(t, e, n, 1),
					s = this.findNearestResolution(e);
				if (this.image && (this.static_ || (this.wantedProjection_ === i && ((this.wantedExtent_ && zi(this.wantedExtent_, r)) || zi(this.image.getExtent(), r)) && ((this.wantedResolution_ && y_(this.wantedResolution_) === s) || y_(this.image.getResolution()) === s)))) return this.image;
				(this.wantedProjection_ = i), (this.wantedExtent_ = r), (this.wantedResolution_ = s), (this.image = new dl(r, s, n, this.loader)), this.image.addEventListener(Kn, this.handleImageChange.bind(this));
			}
			return this.image;
		}
		handleImageChange(t) {
			const e = t.target;
			let n;
			switch (e.getState()) {
				case Pa:
					(this.loading = !0), (n = v_);
					break;
				case Ra:
					(this.loading = !1), (n = w_);
					break;
				case Fa:
					(this.loading = !1), (n = b_);
					break;
				default:
					return;
			}
			this.hasListener(n) && this.dispatchEvent(new S_(n, e));
		}
	}
	function E_(t, e) {
		t.getImage().src = e;
	}
	function T_(t, e, n, i) {
		const r = e / n,
			s = tr(t),
			o = Mr(lr(t) / r, 4),
			a = Mr(rr(t) / r, 4);
		return nr(s, r, 0, [o + 2 * Mr(((i - 1) * o) / 2, 4), a + 2 * Mr(((i - 1) * a) / 2, 4)]);
	}
	const P_ = [0, 0, 0];
	class R_ {
		constructor(t) {
			let e;
			if (
				((this.minZoom = void 0 !== t.minZoom ? t.minZoom : 0),
				(this.resolutions_ = t.resolutions),
				Ci(
					(function (t, e) {
						const n = e || zn;
						return t.every(function (e, i) {
							if (0 === i) return !0;
							const r = n(t[i - 1], e);
							return !(r > 0 || 0 === r);
						});
					})(this.resolutions_, (t, e) => e - t),
					'`resolutions` must be sorted in descending order'
				),
				!t.origins)
			)
				for (let t = 0, n = this.resolutions_.length - 1; t < n; ++t)
					if (e) {
						if (this.resolutions_[t] / this.resolutions_[t + 1] !== e) {
							e = void 0;
							break;
						}
					} else e = this.resolutions_[t] / this.resolutions_[t + 1];
			(this.zoomFactor_ = e), (this.maxZoom = this.resolutions_.length - 1), (this.origin_ = void 0 !== t.origin ? t.origin : null), (this.origins_ = null), void 0 !== t.origins && ((this.origins_ = t.origins), Ci(this.origins_.length == this.resolutions_.length, 'Number of `origins` and `resolutions` must be equal'));
			const n = t.extent;
			void 0 === n || this.origin_ || this.origins_ || (this.origin_ = or(n)),
				Ci((!this.origin_ && this.origins_) || (this.origin_ && !this.origins_), 'Either `origin` or `origins` must be configured, never both'),
				(this.tileSizes_ = null),
				void 0 !== t.tileSizes && ((this.tileSizes_ = t.tileSizes), Ci(this.tileSizes_.length == this.resolutions_.length, 'Number of `tileSizes` and `resolutions` must be equal')),
				(this.tileSize_ = void 0 !== t.tileSize ? t.tileSize : this.tileSizes_ ? null : lg),
				Ci((!this.tileSize_ && this.tileSizes_) || (this.tileSize_ && !this.tileSizes_), 'Either `tileSize` or `tileSizes` must be configured, never both'),
				(this.extent_ = void 0 !== n ? n : null),
				(this.fullTileRanges_ = null),
				(this.tmpSize_ = [0, 0]),
				(this.tmpExtent_ = [0, 0, 0, 0]),
				void 0 !== t.sizes
					? (this.fullTileRanges_ = t.sizes.map((t, e) => {
							const i = new ap(Math.min(0, t[0]), Math.max(t[0] - 1, -1), Math.min(0, t[1]), Math.max(t[1] - 1, -1));
							if (n) {
								const t = this.getTileRangeForExtentAndZ(n, e);
								(i.minX = Math.max(t.minX, i.minX)), (i.maxX = Math.min(t.maxX, i.maxX)), (i.minY = Math.max(t.minY, i.minY)), (i.maxY = Math.min(t.maxY, i.maxY));
							}
							return i;
					  }))
					: n && this.calculateTileRanges_(n);
		}
		forEachTileCoord(t, e, n) {
			const i = this.getTileRangeForExtentAndZ(t, e);
			for (let t = i.minX, r = i.maxX; t <= r; ++t) for (let r = i.minY, s = i.maxY; r <= s; ++r) n([e, t, r]);
		}
		forEachTileCoordParentTileRange(t, e, n, i) {
			let r,
				s,
				o,
				a = null,
				l = t[0] - 1;
			for (2 === this.zoomFactor_ ? ((s = t[1]), (o = t[2])) : (a = this.getTileCoordExtent(t, i)); l >= this.minZoom; ) {
				if ((void 0 !== s && void 0 !== o ? ((s = Math.floor(s / 2)), (o = Math.floor(o / 2)), (r = lp(s, s, o, o, n))) : (r = this.getTileRangeForExtentAndZ(a, l, n)), e(l, r))) return !0;
				--l;
			}
			return !1;
		}
		getExtent() {
			return this.extent_;
		}
		getMaxZoom() {
			return this.maxZoom;
		}
		getMinZoom() {
			return this.minZoom;
		}
		getOrigin(t) {
			return this.origin_ ? this.origin_ : this.origins_[t];
		}
		getResolution(t) {
			return this.resolutions_[t];
		}
		getResolutions() {
			return this.resolutions_;
		}
		getTileCoordChildTileRange(t, e, n) {
			if (t[0] < this.maxZoom) {
				if (2 === this.zoomFactor_) {
					const n = 2 * t[1],
						i = 2 * t[2];
					return lp(n, n + 1, i, i + 1, e);
				}
				const i = this.getTileCoordExtent(t, n || this.tmpExtent_);
				return this.getTileRangeForExtentAndZ(i, t[0] + 1, e);
			}
			return null;
		}
		getTileRangeForTileCoordAndZ(t, e, n) {
			if (e > this.maxZoom || e < this.minZoom) return null;
			const i = t[0],
				r = t[1],
				s = t[2];
			if (e === i) return lp(r, s, r, s, n);
			if (this.zoomFactor_) {
				const t = Math.pow(this.zoomFactor_, e - i),
					o = Math.floor(r * t),
					a = Math.floor(s * t);
				if (e < i) return lp(o, o, a, a, n);
				return lp(o, Math.floor(t * (r + 1)) - 1, a, Math.floor(t * (s + 1)) - 1, n);
			}
			const o = this.getTileCoordExtent(t, this.tmpExtent_);
			return this.getTileRangeForExtentAndZ(o, e, n);
		}
		getTileRangeForExtentAndZ(t, e, n) {
			this.getTileCoordForXYAndZ_(t[0], t[3], e, !1, P_);
			const i = P_[1],
				r = P_[2];
			this.getTileCoordForXYAndZ_(t[2], t[1], e, !0, P_);
			return lp(i, P_[1], r, P_[2], n);
		}
		getTileCoordCenter(t) {
			const e = this.getOrigin(t[0]),
				n = this.getResolution(t[0]),
				i = Zl(this.getTileSize(t[0]), this.tmpSize_);
			return [e[0] + (t[1] + 0.5) * i[0] * n, e[1] - (t[2] + 0.5) * i[1] * n];
		}
		getTileCoordExtent(t, e) {
			const n = this.getOrigin(t[0]),
				i = this.getResolution(t[0]),
				r = Zl(this.getTileSize(t[0]), this.tmpSize_),
				s = n[0] + t[1] * r[0] * i,
				o = n[1] - (t[2] + 1) * r[1] * i;
			return Ui(s, o, s + r[0] * i, o + r[1] * i, e);
		}
		getTileCoordForCoordAndResolution(t, e, n) {
			return this.getTileCoordForXYAndResolution_(t[0], t[1], e, !1, n);
		}
		getTileCoordForXYAndResolution_(t, e, n, i, r) {
			const s = this.getZForResolution(n),
				o = n / this.getResolution(s),
				a = this.getOrigin(s),
				l = Zl(this.getTileSize(s), this.tmpSize_);
			let h = (o * (t - a[0])) / n / l[0],
				c = (o * (a[1] - e)) / n / l[1];
			return i ? ((h = Mr(h, 5) - 1), (c = Mr(c, 5) - 1)) : ((h = Fr(h, 5)), (c = Fr(c, 5))), i_(s, h, c, r);
		}
		getTileCoordForXYAndZ_(t, e, n, i, r) {
			const s = this.getOrigin(n),
				o = this.getResolution(n),
				a = Zl(this.getTileSize(n), this.tmpSize_);
			let l = (t - s[0]) / o / a[0],
				h = (s[1] - e) / o / a[1];
			return i ? ((l = Mr(l, 5) - 1), (h = Mr(h, 5) - 1)) : ((l = Fr(l, 5)), (h = Fr(h, 5))), i_(n, l, h, r);
		}
		getTileCoordForCoordAndZ(t, e, n) {
			return this.getTileCoordForXYAndZ_(t[0], t[1], e, !1, n);
		}
		getTileCoordResolution(t) {
			return this.resolutions_[t[0]];
		}
		getTileSize(t) {
			return this.tileSize_ ? this.tileSize_ : this.tileSizes_[t];
		}
		getFullTileRange(t) {
			return this.fullTileRanges_ ? this.fullTileRanges_[t] : this.extent_ ? this.getTileRangeForExtentAndZ(this.extent_, t) : null;
		}
		getZForResolution(t, e) {
			return vr(jn(this.resolutions_, t, e || 0), this.minZoom, this.maxZoom);
		}
		tileCoordIntersectsViewport(t, e) {
			return ga(e, 0, e.length, 2, this.getTileCoordExtent(t));
		}
		calculateTileRanges_(t) {
			const e = this.resolutions_.length,
				n = new Array(e);
			for (let i = this.minZoom; i < e; ++i) n[i] = this.getTileRangeForExtentAndZ(t, i);
			this.fullTileRanges_ = n;
		}
	}
	function F_(t) {
		let e = t.getDefaultTileGrid();
		return e || ((e = A_(t)), t.setDefaultTileGrid(e)), e;
	}
	function M_(t, e, n) {
		const i = e[0],
			r = t.getTileCoordCenter(e),
			s = D_(n);
		if (!Oi(s, r)) {
			const e = lr(s),
				n = Math.ceil((s[0] - r[0]) / e);
			return (r[0] += e * n), t.getTileCoordForCoordAndZ(r, i);
		}
		return e;
	}
	function I_(t, e, n, i) {
		i = void 0 !== i ? i : 'top-left';
		const r = L_(t, e, n);
		return new R_({ extent: t, origin: er(t, i), resolutions: r, tileSize: n });
	}
	function k_(t) {
		const e = t || {},
			n = e.extent || ao('EPSG:3857').getExtent(),
			i = { extent: n, minZoom: e.minZoom, tileSize: e.tileSize, resolutions: L_(n, e.maxZoom, e.tileSize, e.maxResolution) };
		return new R_(i);
	}
	function L_(t, e, n, i) {
		(e = void 0 !== e ? e : 42), (n = Zl(void 0 !== n ? n : lg));
		const r = rr(t),
			s = lr(t);
		i = i > 0 ? i : Math.max(s / n[0], r / n[1]);
		const o = e + 1,
			a = new Array(o);
		for (let t = 0; t < o; ++t) a[t] = i / Math.pow(2, t);
		return a;
	}
	function A_(t, e, n, i) {
		return I_(D_(t), e, n, i);
	}
	function D_(t) {
		let e = (t = ao(t)).getExtent();
		if (!e) {
			const n = (180 * ss.degrees) / t.getMetersPerUnit();
			e = Ui(-n, -n, n, n);
		}
		return e;
	}
	var O_ = Object.freeze({
		__proto__: null,
		TileGrid: R_,
		WMTS: class extends R_ {
			constructor(t) {
				super({ extent: t.extent, origin: t.origin, origins: t.origins, resolutions: t.resolutions, tileSize: t.tileSize, tileSizes: t.tileSizes, sizes: t.sizes }), (this.matrixIds_ = t.matrixIds);
			}
			getMatrixId(t) {
				return this.matrixIds_[t];
			}
			getMatrixIds() {
				return this.matrixIds_;
			}
		},
		createForExtent: I_,
		createForProjection: A_,
		createXYZ: k_,
		extentFromProjection: D_,
		getForProjection: F_,
		wrapX: M_,
	});
	class z_ extends Zh {
		constructor(t) {
			super({ attributions: t.attributions, attributionsCollapsible: t.attributionsCollapsible, projection: t.projection, state: t.state, wrapX: t.wrapX, interpolate: t.interpolate }), this.on, this.once, this.un, (this.tilePixelRatio_ = void 0 !== t.tilePixelRatio ? t.tilePixelRatio : 1), (this.tileGrid = void 0 !== t.tileGrid ? t.tileGrid : null);
			const e = [256, 256];
			this.tileGrid && Zl(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), e), (this.tmpSize = [0, 0]), (this.key_ = t.key || wi(this)), (this.tileOptions = { transition: t.transition, interpolate: t.interpolate }), (this.zDirection = t.zDirection ? t.zDirection : 0);
		}
		getGutterForProjection(t) {
			return 0;
		}
		getKey() {
			return this.key_;
		}
		setKey(t) {
			this.key_ !== t && ((this.key_ = t), this.changed());
		}
		getResolutions(t) {
			const e = t ? this.getTileGridForProjection(t) : this.tileGrid;
			return e ? e.getResolutions() : null;
		}
		getTile(t, e, n, i, r) {
			return xi();
		}
		getTileGrid() {
			return this.tileGrid;
		}
		getTileGridForProjection(t) {
			return this.tileGrid ? this.tileGrid : F_(t);
		}
		getTilePixelRatio(t) {
			return this.tilePixelRatio_;
		}
		getTilePixelSize(t, e, n) {
			const i = this.getTileGridForProjection(n),
				r = this.getTilePixelRatio(e),
				s = Zl(i.getTileSize(t), this.tmpSize);
			return 1 == r ? s : ((o = s), (a = r), void 0 === (l = this.tmpSize) && (l = [0, 0]), (l[0] = (o[0] * a + 0.5) | 0), (l[1] = (o[1] * a + 0.5) | 0), l);
			var o, a, l;
		}
		getTileCoordForTileUrlFunction(t, e) {
			const n = void 0 !== e ? e : this.getProjection(),
				i = void 0 !== e ? this.getTileGridForProjection(n) : this.tileGrid || this.getTileGridForProjection(n);
			return (
				this.getWrapX() && n.isGlobal() && (t = M_(i, t, n)),
				(function (t, e) {
					const n = t[0],
						i = t[1],
						r = t[2];
					if (e.getMinZoom() > n || n > e.getMaxZoom()) return !1;
					const s = e.getFullTileRange(n);
					return !s || s.containsXY(i, r);
				})(t, i)
					? t
					: null
			);
		}
		clear() {}
		refresh() {
			this.clear(), super.refresh();
		}
	}
	class G_ extends ui {
		constructor(t, e) {
			super(t), (this.tile = e);
		}
	}
	function j_(t) {
		return function (e) {
			const n = e.buffers,
				i = e.meta,
				r = e.imageOps,
				s = e.width,
				o = e.height,
				a = n.length,
				l = n[0].byteLength;
			if (r) {
				const e = new Array(a);
				for (let t = 0; t < a; ++t) e[t] = new ImageData(new Uint8ClampedArray(n[t]), s, o);
				return t(e, i).data.buffer;
			}
			const h = new Uint8ClampedArray(l),
				c = new Array(a),
				u = new Array(a);
			for (let t = 0; t < a; ++t) (c[t] = new Uint8ClampedArray(n[t])), (u[t] = [0, 0, 0, 0]);
			for (let e = 0; e < l; e += 4) {
				for (let t = 0; t < a; ++t) {
					const n = c[t];
					(u[t][0] = n[e]), (u[t][1] = n[e + 1]), (u[t][2] = n[e + 2]), (u[t][3] = n[e + 3]);
				}
				const n = t(u, i);
				(h[e] = n[0]), (h[e + 1] = n[1]), (h[e + 2] = n[2]), (h[e + 3] = n[3]);
			}
			return h.buffer;
		};
	}
	function N_(t, e) {
		const n = Object.keys(t.lib || {})
				.map(function (e) {
					return 'const ' + e + ' = ' + t.lib[e].toString() + ';';
				})
				.concat(['const __minion__ = (' + j_.toString() + ')(', t.operation.toString(), ');', 'self.addEventListener("message", function(event) {', '  const buffer = __minion__(event.data);', '  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);', '});']),
			i = new Worker('undefined' == typeof Blob ? 'data:text/javascript;base64,' + Buffer.from(n.join('\n'), 'binary').toString('base64') : URL.createObjectURL(new Blob(n, { type: 'text/javascript' })));
		return i.addEventListener('message', e), i;
	}
	class U_ extends li {
		constructor(t) {
			let e;
			super(), (this.imageOps_ = !!t.imageOps), (e = 0 === t.threads ? 0 : this.imageOps_ ? 1 : t.threads || 1);
			const n = new Array(e);
			if (e) for (let i = 0; i < e; ++i) n[i] = N_(t, this.onWorkerMessage_.bind(this, i));
			else
				n[0] = (function (t, e) {
					const n = j_(t.operation);
					let i = !1;
					return {
						postMessage: function (t) {
							setTimeout(function () {
								i || e({ data: { buffer: n(t), meta: t.meta } });
							}, 0);
						},
						terminate: function () {
							i = !0;
						},
					};
				})(t, this.onWorkerMessage_.bind(this, 0));
			(this.workers_ = n), (this.queue_ = []), (this.maxQueueLength_ = t.queue || 1 / 0), (this.running_ = 0), (this.dataLookup_ = {}), (this.job_ = null);
		}
		process(t, e, n) {
			this.enqueue_({ inputs: t, meta: e, callback: n }), this.dispatch_();
		}
		enqueue_(t) {
			for (this.queue_.push(t); this.queue_.length > this.maxQueueLength_; ) this.queue_.shift().callback(null, null);
		}
		dispatch_() {
			if (this.running_ || 0 === this.queue_.length) return;
			const t = this.queue_.shift();
			this.job_ = t;
			const e = t.inputs[0].width,
				n = t.inputs[0].height,
				i = t.inputs.map(function (t) {
					return t.data.buffer;
				}),
				r = this.workers_.length;
			if (((this.running_ = r), 1 === r)) return void this.workers_[0].postMessage({ buffers: i, meta: t.meta, imageOps: this.imageOps_, width: e, height: n }, i);
			const s = t.inputs[0].data.length,
				o = 4 * Math.ceil(s / 4 / r);
			for (let s = 0; s < r; ++s) {
				const r = s * o,
					a = [];
				for (let t = 0, e = i.length; t < e; ++t) a.push(i[t].slice(r, r + o));
				this.workers_[s].postMessage({ buffers: a, meta: t.meta, imageOps: this.imageOps_, width: e, height: n }, a);
			}
		}
		onWorkerMessage_(t, e) {
			this.disposed || ((this.dataLookup_[t] = e.data), --this.running_, 0 === this.running_ && this.resolveJob_());
		}
		resolveJob_() {
			const t = this.job_,
				e = this.workers_.length;
			let n, i;
			if (1 === e) (n = new Uint8ClampedArray(this.dataLookup_[0].buffer)), (i = this.dataLookup_[0].meta);
			else {
				const r = t.inputs[0].data.length;
				(n = new Uint8ClampedArray(r)), (i = new Array(e));
				const s = 4 * Math.ceil(r / 4 / e);
				for (let t = 0; t < e; ++t) {
					const e = this.dataLookup_[t].buffer,
						r = t * s;
					n.set(new Uint8ClampedArray(e), r), (i[t] = this.dataLookup_[t].meta);
				}
			}
			(this.job_ = null), (this.dataLookup_ = {}), t.callback(null, new ImageData(n, t.inputs[0].width, t.inputs[0].height), i), this.dispatch_();
		}
		disposeInternal() {
			for (let t = 0; t < this.workers_.length; ++t) this.workers_[t].terminate();
			this.workers_.length = 0;
		}
	}
	const $_ = 'beforeoperations',
		B_ = 'afteroperations';
	class V_ extends ui {
		constructor(t, e, n) {
			super(t), (this.extent = e.extent), (this.resolution = e.viewState.resolution / e.pixelRatio), (this.data = n);
		}
	}
	class W_ extends C_ {
		constructor(t) {
			super({ projection: null }),
				this.on,
				this.once,
				this.un,
				(this.processor_ = null),
				(this.operationType_ = void 0 !== t.operationType ? t.operationType : 'pixel'),
				(this.threads_ = void 0 !== t.threads ? t.threads : 1),
				(this.layers_ = (function (t) {
					const e = t.length,
						n = new Array(e);
					for (let i = 0; i < e; ++i) n[i] = Z_(t[i]);
					return n;
				})(t.sources));
			const e = this.changed.bind(this);
			for (let t = 0, n = this.layers_.length; t < n; ++t) this.layers_[t].addEventListener(Kn, e);
			var n;
			(this.useResolutions_ = null !== t.resolutions),
				(this.tileQueue_ = new ef(function () {
					return 1;
				}, this.processSources_.bind(this))),
				this.requestedFrameState_,
				(this.renderedImageCanvas_ = null),
				this.renderedRevision_,
				(this.frameState_ = {
					animate: !1,
					coordinateToPixelTransform: [1, 0, 0, 1, 0, 0],
					declutter: null,
					extent: null,
					index: 0,
					layerIndex: 0,
					layerStatesArray:
						((n = this.layers_),
						n.map(function (t) {
							return t.getLayerState();
						})),
					pixelRatio: 1,
					pixelToCoordinateTransform: [1, 0, 0, 1, 0, 0],
					postRenderFunctions: [],
					size: [0, 0],
					tileQueue: this.tileQueue_,
					time: Date.now(),
					usedTiles: {},
					viewState: { rotation: 0 },
					viewHints: [],
					wantedTiles: {},
					mapId: wi(this),
					renderTargets: {},
				}),
				this.setAttributions(function (e) {
					const n = [];
					for (let i = 0, r = t.sources.length; i < r; ++i) {
						const r = t.sources[i],
							s = r instanceof Zh ? r : r.getSource();
						if (!s) continue;
						const o = s.getAttributions()?.(e);
						'string' == typeof o ? n.push(o) : void 0 !== o && n.push(...o);
					}
					return n;
				}),
				void 0 !== t.operation && this.setOperation(t.operation, t.lib);
		}
		setOperation(t, e) {
			this.processor_ && this.processor_.dispose(), (this.processor_ = new U_({ operation: t, imageOps: 'image' === this.operationType_, queue: 1, lib: e, threads: this.threads_ })), this.changed();
		}
		updateFrameState_(t, e, n) {
			const i = Object.assign({}, this.frameState_);
			i.viewState = Object.assign({}, i.viewState);
			const r = tr(t);
			(i.size[0] = Math.ceil(lr(t) / e)), (i.size[1] = Math.ceil(rr(t) / e)), (i.extent = [r[0] - (i.size[0] * e) / 2, r[1] - (i.size[1] * e) / 2, r[0] + (i.size[0] * e) / 2, r[1] + (i.size[1] * e) / 2]), (i.time = Date.now());
			const s = i.viewState;
			return (s.center = r), (s.projection = n), (s.resolution = e), i;
		}
		allSourcesReady_() {
			let t,
				e = !0;
			for (let n = 0, i = this.layers_.length; n < i; ++n)
				if (((t = this.layers_[n].getSource()), !t || 'ready' !== t.getState())) {
					e = !1;
					break;
				}
			return e;
		}
		getImage(t, e, n, i) {
			if (!this.allSourcesReady_()) return null;
			this.tileQueue_.loadMoreTiles(16, 16), (e = this.findNearestResolution(e));
			const r = this.updateFrameState_(t, e, i);
			if (((this.requestedFrameState_ = r), this.renderedImageCanvas_)) {
				const t = this.renderedImageCanvas_.getResolution(),
					n = this.renderedImageCanvas_.getExtent();
				(e === t && Wi(r.extent, n)) || (this.renderedImageCanvas_ = null);
			}
			return (this.renderedImageCanvas_ && this.getRevision() === this.renderedRevision_) || this.processSources_(), r.animate && requestAnimationFrame(this.changed.bind(this)), this.renderedImageCanvas_;
		}
		processSources_() {
			const t = this.requestedFrameState_,
				e = this.layers_.length,
				n = new Array(e);
			for (let i = 0; i < e; ++i) {
				(t.layerIndex = i), (t.renderTargets = {});
				const e = q_(this.layers_[i], t);
				if (!e) return;
				n[i] = e;
			}
			const i = {};
			this.dispatchEvent(new V_($_, t, i)), this.processor_.process(n, i, this.onWorkerComplete_.bind(this, t));
		}
		onWorkerComplete_(t, e, n, i) {
			if (e || !n) return;
			const r = t.extent,
				s = t.viewState.resolution;
			if (s !== this.requestedFrameState_.viewState.resolution || !Wi(r, this.requestedFrameState_.extent)) return;
			let o;
			if (this.renderedImageCanvas_) o = this.renderedImageCanvas_.getImage().getContext('2d');
			else {
				(o = rl(Math.round(lr(r) / s), Math.round(rr(r) / s))), (this.renderedImageCanvas_ = new Fg(r, s, 1, o.canvas));
			}
			o.putImageData(n, 0, 0), t.animate ? requestAnimationFrame(this.changed.bind(this)) : this.changed(), (this.renderedRevision_ = this.getRevision()), this.dispatchEvent(new V_(B_, t, i));
		}
		getResolutions(t) {
			if (!this.useResolutions_) return null;
			let e = super.getResolutions();
			if (!e)
				for (let n = 0, i = this.layers_.length; n < i; ++n) {
					if (((e = this.layers_[n].getSource().getResolutions(t)), e)) break;
				}
			return e;
		}
		disposeInternal() {
			this.processor_ && this.processor_.dispose(), super.disposeInternal();
		}
	}
	W_.prototype.dispose;
	let X_ = null;
	function q_(t, e) {
		const n = t.getRenderer();
		if (!n) throw new Error('Unsupported layer type: ' + t);
		if (!n.prepareFrame(e)) return null;
		const i = e.size[0],
			r = e.size[1];
		if (0 === i || 0 === r) return null;
		const s = n.renderFrame(e, null);
		let o;
		if (s instanceof HTMLCanvasElement) o = s;
		else {
			if ((s && (o = s.firstElementChild), !(o instanceof HTMLCanvasElement))) throw new Error('Unsupported rendered element: ' + o);
			if (o.width === i && o.height === r) {
				return o.getContext('2d').getImageData(0, 0, i, r);
			}
		}
		if (X_) {
			const t = X_.canvas;
			t.width !== i || t.height !== r ? (X_ = rl(i, r, void 0, { willReadFrequently: !0 })) : X_.clearRect(0, 0, i, r);
		} else X_ = rl(i, r, void 0, { willReadFrequently: !0 });
		return X_.drawImage(o, 0, 0, i, r), X_.getImageData(0, 0, i, r);
	}
	function Z_(t) {
		let e;
		return t instanceof Zh ? (t instanceof z_ ? (e = new g_({ source: t })) : t instanceof C_ && (e = new Bm({ source: t }))) : (e = t), e;
	}
	function K_(t, e) {
		const n = [];
		Object.keys(e).forEach(function (t) {
			null !== e[t] && void 0 !== e[t] && n.push(t + '=' + encodeURIComponent(e[t]));
		});
		const i = n.join('&');
		return (t = t.replace(/[?&]$/, '')), (t += t.includes('?') ? '&' : '?') + i;
	}
	const Y_ = /\{z\}/g,
		H_ = /\{x\}/g,
		J_ = /\{y\}/g,
		Q_ = /\{-y\}/g;
	function ty(t, e) {
		return function (n, i, r) {
			if (!n) return;
			let s;
			const o = n[0];
			if (e) {
				const t = e.getFullTileRange(o);
				t && (s = t.getHeight() - 1);
			}
			return (function (t, e, n, i, r) {
				return t
					.replace(Y_, e.toString())
					.replace(H_, n.toString())
					.replace(J_, i.toString())
					.replace(Q_, function () {
						if (void 0 === r) throw new Error('If the URL template has a {-y} placeholder, the grid extent must be known');
						return (r - i).toString();
					});
			})(t, o, n[1], n[2], s);
		};
	}
	function ey(t, e) {
		const n = t.length,
			i = new Array(n);
		for (let r = 0; r < n; ++r) i[r] = ty(t[r], e);
		return ny(i);
	}
	function ny(t) {
		return 1 === t.length
			? t[0]
			: function (e, n, i) {
					if (!e) return;
					const r = Er(r_(e), t.length);
					return t[r](e, n, i);
			  };
	}
	var iy = 'tileloadstart',
		ry = 'tileloadend',
		sy = 'tileloaderror';
	class oy extends z_ {
		constructor(t) {
			super({ attributions: t.attributions, cacheSize: t.cacheSize, projection: t.projection, state: t.state, tileGrid: t.tileGrid, tilePixelRatio: t.tilePixelRatio, wrapX: t.wrapX, transition: t.transition, interpolate: t.interpolate, key: t.key, attributionsCollapsible: t.attributionsCollapsible, zDirection: t.zDirection }), (this.generateTileUrlFunction_ = this.tileUrlFunction === oy.prototype.tileUrlFunction), (this.tileLoadFunction = t.tileLoadFunction), t.tileUrlFunction && (this.tileUrlFunction = t.tileUrlFunction), (this.urls = null), t.urls ? this.setUrls(t.urls) : t.url && this.setUrl(t.url), (this.tileLoadingKeys_ = {});
		}
		getTileLoadFunction() {
			return this.tileLoadFunction;
		}
		getTileUrlFunction() {
			return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction ? this.tileUrlFunction.bind(this) : this.tileUrlFunction;
		}
		getUrls() {
			return this.urls;
		}
		handleTileChange(t) {
			const e = t.target,
				n = wi(e),
				i = e.getState();
			let r;
			i == Ig ? ((this.tileLoadingKeys_[n] = !0), (r = iy)) : n in this.tileLoadingKeys_ && (delete this.tileLoadingKeys_[n], (r = i == Lg ? sy : i == kg ? ry : void 0)), null != r && this.dispatchEvent(new G_(r, e));
		}
		setTileLoadFunction(t) {
			(this.tileLoadFunction = t), this.changed();
		}
		setTileUrlFunction(t, e) {
			(this.tileUrlFunction = t), void 0 !== e ? this.setKey(e) : this.changed();
		}
		setUrl(t) {
			const e = (function (t) {
				const e = [];
				let n = /\{([a-z])-([a-z])\}/.exec(t);
				if (n) {
					const i = n[1].charCodeAt(0),
						r = n[2].charCodeAt(0);
					let s;
					for (s = i; s <= r; ++s) e.push(t.replace(n[0], String.fromCharCode(s)));
					return e;
				}
				if (((n = /\{(\d+)-(\d+)\}/.exec(t)), n)) {
					const i = parseInt(n[2], 10);
					for (let r = parseInt(n[1], 10); r <= i; r++) e.push(t.replace(n[0], r.toString()));
					return e;
				}
				return e.push(t), e;
			})(t);
			(this.urls = e), this.setUrls(e);
		}
		setUrls(t) {
			this.urls = t;
			const e = t.join('\n');
			this.generateTileUrlFunction_ ? this.setTileUrlFunction(ey(t, this.tileGrid), e) : this.setKey(e);
		}
		tileUrlFunction(t, e, n) {}
	}
	class ay extends oy {
		constructor(t) {
			super({ attributions: t.attributions, cacheSize: t.cacheSize, projection: t.projection, state: t.state, tileGrid: t.tileGrid, tileLoadFunction: t.tileLoadFunction ? t.tileLoadFunction : ly, tilePixelRatio: t.tilePixelRatio, tileUrlFunction: t.tileUrlFunction, url: t.url, urls: t.urls, wrapX: t.wrapX, transition: t.transition, interpolate: void 0 === t.interpolate || t.interpolate, key: t.key, attributionsCollapsible: t.attributionsCollapsible, zDirection: t.zDirection }),
				(this.crossOrigin = void 0 !== t.crossOrigin ? t.crossOrigin : null),
				(this.tileClass = void 0 !== t.tileClass ? t.tileClass : Og),
				(this.tileGridForProjection = {}),
				(this.reprojectionErrorThreshold_ = t.reprojectionErrorThreshold),
				(this.renderReprojectionEdges_ = !1);
		}
		getGutterForProjection(t) {
			return this.getProjection() && t && !po(this.getProjection(), t) ? 0 : this.getGutter();
		}
		getGutter() {
			return 0;
		}
		getKey() {
			let t = super.getKey();
			return this.getInterpolate() || (t += ':disable-interpolation'), t;
		}
		getTileGridForProjection(t) {
			const e = this.getProjection();
			if (this.tileGrid && (!e || po(e, t))) return this.tileGrid;
			const n = wi(t);
			return n in this.tileGridForProjection || (this.tileGridForProjection[n] = F_(t)), this.tileGridForProjection[n];
		}
		createTile_(t, e, n, i, r, s) {
			const o = [t, e, n],
				a = this.getTileCoordForTileUrlFunction(o, r),
				l = a ? this.tileUrlFunction(a, i, r) : void 0,
				h = new this.tileClass(o, void 0 !== l ? Mg : Ag, void 0 !== l ? l : '', this.crossOrigin, this.tileLoadFunction, this.tileOptions);
			return (h.key = s), h.addEventListener(Kn, this.handleTileChange.bind(this)), h;
		}
		getTile(t, e, n, i, r) {
			const s = this.getProjection();
			if (!s || !r || po(s, r)) return this.getTileInternal(t, e, n, i, s || r);
			const o = [t, e, n],
				a = this.getKey(),
				l = this.getTileGridForProjection(s),
				h = this.getTileGridForProjection(r),
				c = this.getTileCoordForTileUrlFunction(o, r),
				u = new e_(s, l, r, h, o, c, this.getTilePixelRatio(i), this.getGutter(), (t, e, n, i) => this.getTileInternal(t, e, n, i, s), this.reprojectionErrorThreshold_, this.renderReprojectionEdges_, this.tileOptions);
			return (u.key = a), u;
		}
		getTileInternal(t, e, n, i, r) {
			const s = this.getKey();
			return this.createTile_(t, e, n, i, r, s);
		}
		setRenderReprojectionEdges(t) {
			this.renderReprojectionEdges_ != t && ((this.renderReprojectionEdges_ = t), this.changed());
		}
		setTileGridForProjection(t, e) {
			const n = ao(t);
			if (n) {
				const t = wi(n);
				t in this.tileGridForProjection || (this.tileGridForProjection[t] = e);
			}
		}
	}
	function ly(t, e) {
		t.getImage().src = e;
	}
	class hy extends ay {
		constructor(t) {
			if ((super({ attributions: t.attributions, cacheSize: t.cacheSize, crossOrigin: t.crossOrigin, interpolate: t.interpolate, projection: ao('EPSG:3857'), reprojectionErrorThreshold: t.reprojectionErrorThreshold, state: 'loading', tileLoadFunction: t.tileLoadFunction, wrapX: void 0 === t.wrapX || t.wrapX, transition: t.transition, zDirection: t.zDirection }), (this.tileJSON_ = null), (this.tileSize_ = t.tileSize), t.url))
				if (t.jsonp)
					!(function (t, e, n) {
						const i = document.createElement('script'),
							r = 'olc_' + wi(e);
						function s() {
							delete window[r], i.parentNode.removeChild(i);
						}
						(i.async = !0), (i.src = t + (t.includes('?') ? '&' : '?') + 'callback=' + r);
						const o = setTimeout(function () {
							s(), n && n();
						}, 1e4);
						(window[r] = function (t) {
							clearTimeout(o), s(), e(t);
						}),
							document.head.appendChild(i);
					})(t.url, this.handleTileJSONResponse.bind(this), this.handleTileJSONError.bind(this));
				else {
					const e = new XMLHttpRequest();
					e.addEventListener('load', this.onXHRLoad_.bind(this)), e.addEventListener('error', this.onXHRError_.bind(this)), e.open('GET', t.url), e.send();
				}
			else {
				if (!t.tileJSON) throw new Error('Either `url` or `tileJSON` options must be provided');
				this.handleTileJSONResponse(t.tileJSON);
			}
		}
		onXHRLoad_(t) {
			const e = t.target;
			if (!e.status || (e.status >= 200 && e.status < 300)) {
				let t;
				try {
					t = JSON.parse(e.responseText);
				} catch {
					return void this.handleTileJSONError();
				}
				this.handleTileJSONResponse(t);
			} else this.handleTileJSONError();
		}
		onXHRError_(t) {
			this.handleTileJSONError();
		}
		getTileJSON() {
			return this.tileJSON_;
		}
		handleTileJSONResponse(t) {
			const e = ao('EPSG:4326'),
				n = this.getProjection();
			let i;
			if (void 0 !== t.bounds) {
				const r = mo(e, n);
				i = ur(t.bounds, r);
			}
			const r = D_(n),
				s = t.minzoom || 0,
				o = k_({ extent: r, maxZoom: t.maxzoom || 22, minZoom: s, tileSize: this.tileSize_ });
			if (((this.tileGrid = o), (this.tileUrlFunction = ey(t.tiles, o)), t.attribution && !this.getAttributions())) {
				const e = void 0 !== i ? i : r;
				this.setAttributions(function (n) {
					return hr(e, n.extent) ? [t.attribution] : null;
				});
			}
			(this.tileJSON_ = t), this.setState('ready');
		}
		handleTileJSONError() {
			this.setState('error');
		}
	}
	class cy extends oy {
		constructor(t) {
			const e = t.projection || 'EPSG:3857',
				n = t.extent || D_(e),
				i = t.tileGrid || k_({ extent: n, maxResolution: t.maxResolution, maxZoom: void 0 !== t.maxZoom ? t.maxZoom : 22, minZoom: t.minZoom, tileSize: t.tileSize || 512 });
			super({ attributions: t.attributions, attributionsCollapsible: t.attributionsCollapsible, cacheSize: t.cacheSize, interpolate: !0, projection: e, state: t.state, tileGrid: i, tileLoadFunction: t.tileLoadFunction ? t.tileLoadFunction : uy, tileUrlFunction: t.tileUrlFunction, url: t.url, urls: t.urls, wrapX: void 0 === t.wrapX || t.wrapX, transition: t.transition, zDirection: void 0 === t.zDirection ? 1 : t.zDirection }), (this.format_ = t.format ? t.format : null), (this.tileKeysBySourceTileUrl_ = {}), (this.sourceTiles_ = {}), (this.overlaps_ = null == t.overlaps || t.overlaps), (this.tileClass = t.tileClass ? t.tileClass : up), (this.tileGrids_ = {});
		}
		getOverlaps() {
			return this.overlaps_;
		}
		getSourceTiles(t, e, n) {
			if (n.getState() === Mg) {
				n.setState(Ig);
				const i = n.wrappedTileCoord,
					r = this.getTileGridForProjection(e),
					s = r.getTileCoordExtent(i),
					o = i[0],
					a = r.getResolution(o);
				Li(s, -a, s);
				const l = this.tileGrid,
					h = l.getExtent();
				h && sr(s, h, s);
				const c = l.getZForResolution(a, this.zDirection);
				l.forEachTileCoord(s, c, (i) => {
					const r = this.tileUrlFunction(i, t, e);
					this.sourceTiles_[r] || (this.sourceTiles_[r] = new this.tileClass(i, r ? Mg : Ag, r, this.format_, this.tileLoadFunction));
					const s = this.sourceTiles_[r];
					n.sourceTiles.push(s), this.tileKeysBySourceTileUrl_[r] || (this.tileKeysBySourceTileUrl_[r] = []), this.tileKeysBySourceTileUrl_[r].push(n.getKey());
					const o = s.getState();
					if (o < kg) {
						const t = (e) => {
							this.handleTileChange(e);
							const i = s.getState();
							if (i === kg || i === Lg) {
								const e = s.getKey();
								e in n.errorTileKeys ? s.getState() === kg && delete n.errorTileKeys[e] : n.loadingSourceTiles--, i === Lg ? (n.errorTileKeys[e] = !0) : s.removeEventListener(Kn, t), 0 === n.loadingSourceTiles && n.setState(ci(n.errorTileKeys) ? kg : Lg);
							}
						};
						s.addEventListener(Kn, t), n.loadingSourceTiles++;
					}
					o === Mg && ((s.extent = l.getTileCoordExtent(i)), (s.projection = e), (s.resolution = l.getResolution(i[0])), s.load());
				}),
					n.loadingSourceTiles || n.setState(n.sourceTiles.some((t) => t.getState() === Lg) ? Lg : kg);
			}
			return n.sourceTiles;
		}
		removeSourceTiles(t) {
			const e = t.getKey(),
				n = t.sourceTiles;
			for (let t = 0, i = n.length; t < i; ++t) {
				const i = n[t].getTileUrl();
				if (!this.tileKeysBySourceTileUrl_[i]) return;
				const r = this.tileKeysBySourceTileUrl_[i].indexOf(e);
				-1 !== r && (this.tileKeysBySourceTileUrl_[i].splice(r, 1), 0 === this.tileKeysBySourceTileUrl_[i].length && (delete this.tileKeysBySourceTileUrl_[i], delete this.sourceTiles_[i]));
			}
		}
		getTile(t, e, n, i, r) {
			const s = [t, e, n];
			let o = this.getTileCoordForTileUrlFunction(s, r);
			const a = this.getTileGrid().getExtent(),
				l = this.getTileGridForProjection(r);
			if (o && a) {
				const e = l.getTileCoordExtent(o);
				Li(e, -l.getResolution(t), e), hr(a, e) || (o = null);
			}
			let h = !0;
			if (null !== o) {
				const e = this.tileGrid,
					n = l.getResolution(t),
					s = e.getZForResolution(n, 1),
					a = l.getTileCoordExtent(o);
				Li(a, -n, a),
					e.forEachTileCoord(a, s, (t) => {
						h = h && !this.tileUrlFunction(t, i, r);
					});
			}
			const c = new cp(s, h ? Ag : Mg, o, this.getSourceTiles.bind(this, i, r), this.removeSourceTiles.bind(this));
			return (c.key = this.getKey()), c;
		}
		getTileGridForProjection(t) {
			const e = t.getCode();
			let n = this.tileGrids_[e];
			if (!n) {
				const t = this.tileGrid,
					i = t.getResolutions().slice(),
					r = i.map(function (e, n) {
						return t.getOrigin(n);
					}),
					s = i.map(function (e, n) {
						return t.getTileSize(n);
					}),
					o = 43;
				for (let t = i.length; t < o; ++t) i.push(i[t - 1] / 2), r.push(r[t - 1]), s.push(s[t - 1]);
				(n = new R_({ extent: t.getExtent(), origins: r, resolutions: i, tileSizes: s })), (this.tileGrids_[e] = n);
			}
			return n;
		}
		getTilePixelRatio(t) {
			return t;
		}
		getTilePixelSize(t, e, n) {
			const i = Zl(this.getTileGridForProjection(n).getTileSize(t), this.tmpSize);
			return [Math.round(i[0] * e), Math.round(i[1] * e)];
		}
		setOverlaps(t) {
			(this.overlaps_ = t), this.changed();
		}
	}
	function uy(t, e) {
		t.setLoader(function (n, i, r) {
			Th(e, t.getFormat(), n, i, r, t.onLoad.bind(t), t.onError.bind(t));
		});
	}
	function dy(t, e) {
		const n = t[0],
			i = n.width,
			r = n.height,
			s = n.data,
			o = new Uint8ClampedArray(s.length),
			a = 2 * e.resolution,
			l = i - 1,
			h = r - 1,
			c = [0, 0, 0, 0],
			u = 2 * Math.PI,
			d = Math.PI / 2,
			g = (Math.PI * e.sunEl) / 180,
			f = (Math.PI * e.sunAz) / 180,
			p = Math.cos(g),
			m = Math.sin(g),
			_ = e.highlightColor,
			y = e.shadowColor,
			x = e.accentColor,
			v = e.encoding;
		let w, b, S, C, E, T, P, R, F, M, I, k, L, A, D, O, z, G, j, N, U, $;
		function B(t, e = 'mapbox') {
			return 'mapbox' === e ? 0.1 * (256 * t[0] * 256 + 256 * t[1] + t[2]) - 1e4 : 'terrarium' === e ? 256 * t[0] + t[1] + t[2] / 256 - 32768 : void 0;
		}
		for (b = 0; b <= h; ++b)
			for (E = 0 === b ? 0 : b - 1, T = b === h ? h : b + 1, w = 0; w <= l; ++w)
				(S = 0 === w ? 0 : w - 1),
					(C = w === l ? l : w + 1),
					(P = 4 * (b * i + S)),
					(c[0] = s[P]),
					(c[1] = s[P + 1]),
					(c[2] = s[P + 2]),
					(c[3] = s[P + 3]),
					(R = e.vert * B(c, v)),
					(P = 4 * (b * i + C)),
					(c[0] = s[P]),
					(c[1] = s[P + 1]),
					(c[2] = s[P + 2]),
					(c[3] = s[P + 3]),
					(F = e.vert * B(c, v)),
					(M = (F - R) / a),
					(P = 4 * (E * i + w)),
					(c[0] = s[P]),
					(c[1] = s[P + 1]),
					(c[2] = s[P + 2]),
					(c[3] = s[P + 3]),
					(R = e.vert * B(c, v)),
					(P = 4 * (T * i + w)),
					(c[0] = s[P]),
					(c[1] = s[P + 1]),
					(c[2] = s[P + 2]),
					(c[3] = s[P + 3]),
					(F = e.vert * B(c, v)),
					(I = (F - R) / a),
					(L = Math.atan2(I, -M)),
					(L = L < 0 ? d - L : L > d ? u - L + d : d - L),
					(k = Math.atan(Math.sqrt(M * M + I * I))),
					($ = m * Math.cos(k) + p * Math.sin(k) * Math.cos(f - L)),
					(A = Math.cos(k)),
					(D = 255 * $),
					(j = Math.min(Math.max(2 * e.sunEl, 0), 1)),
					(N = 1.875 - 1.75 * e.opacity),
					(U = 0.5 !== e.opacity ? d * ((Math.pow(N, k) - 1) / (Math.pow(N, d) - 1)) : k),
					(z = { r: (1 - A) * x.r * j * 255, g: (1 - A) * x.g * j * 255, b: (1 - A) * x.b * j * 255, a: (1 - A) * x.a * j * 255 }),
					(O = Math.abs((((L + f) / Math.PI + 0.5) % 2) - 1)),
					(G = { r: (_.r * (1 - O) + y.r * O) * D, g: (_.g * (1 - O) + y.g * O) * D, b: (_.b * (1 - O) + y.b * O) * D, a: (_.a * (1 - O) + y.a * O) * D }),
					(P = 4 * (b * i + w)),
					(o[P] = z.r * (1 - O) + G.r),
					(o[P + 1] = z.g * (1 - O) + G.g),
					(o[P + 2] = z.b * (1 - O) + G.b),
					(o[P + 3] = s[P + 3] * e.opacity * j * Math.sin(U));
		return new ImageData(o, i, r);
	}
	function gy(t, e = 512) {
		return t.getExtent() ? k_({ extent: t.getExtent(), tileSize: e, maxZoom: 22 }).getResolutions() : Ep;
	}
	function fy(t, e) {
		if (!e.accessToken) {
			e = Object.assign({}, e);
			new URL(t).searchParams.forEach((t, n) => {
				(e.accessToken = t), (e.accessTokenParam = n);
			});
		}
		return e;
	}
	function py(t, e, n = '', i = {}, r = void 0) {
		let s,
			o,
			a,
			l,
			h = !0;
		return (
			'string' == typeof n || Array.isArray(n) ? (l = n) : ((a = n), (l = a.source || a.layers), (i = a)),
			'string' == typeof i ? ((s = i), (a = {})) : ((s = i.styleUrl), (a = i)),
			!1 === a.updateSource && (h = !1),
			r || (r = a.resolutions),
			s || 'string' != typeof e || e.trim().startsWith('{') || (s = e),
			s && ((s = s.startsWith('data:') ? location.href : fp(s, a.accessToken)), (a = fy(s, a))),
			new Promise(function (n, i) {
				Ip(e, a)
					.then(function (e) {
						if (8 != e.version) return i(new Error('glStyle version 8 required.'));
						if (!(t instanceof Rg || t instanceof __)) return i(new Error('Can only apply to VectorLayer or VectorTileLayer'));
						const c = t instanceof __ ? 'vector' : 'geojson';
						if (
							(l
								? (o = Array.isArray(l)
										? e.layers.find(function (t) {
												return t.id === l[0];
										  }).source
										: l)
								: ((o = Object.keys(e.sources).find(function (t) {
										return e.sources[t].type === c;
								  })),
								  (l = o)),
							!o)
						)
							return i(new Error(`No ${c} source found in the glStyle.`));
						function u() {
							if (!h) return Promise.resolve();
							if (t instanceof __)
								return by(e.sources[o], s, a).then(function (e) {
									const n = t.getSource();
									n ? e !== n && (n.setTileUrlFunction(e.getTileUrlFunction()), 'function' == typeof n.setUrls && 'function' == typeof e.getUrls && n.setUrls(e.getUrls()), n.format_ || (n.format_ = e.format_), n.getAttributions() || n.setAttributions(e.getAttributions()), n.getTileLoadFunction() === uy && n.setTileLoadFunction(e.getTileLoadFunction()), po(n.getProjection(), e.getProjection()) && (n.tileGrid = e.getTileGrid())) : t.setSource(e);
									const i = t.getSource().getTileGrid();
									!isFinite(t.getMaxResolution()) && !isFinite(t.getMinZoom()) && i.getMinZoom() > 0 && t.setMaxResolution(Rp(Math.max(0, i.getMinZoom() - 1e-12), i.getResolutions()));
								});
							const n = e.sources[o];
							let i = t.getSource();
							(i && i.get('mapbox-source') === n) || (i = Ty(n, s, a));
							const r = t.getSource();
							return r ? i !== r && (r.getAttributions() || r.setAttributions(i.getAttributions()), r.format_ || (r.format_ = i.getFormat()), (r.url_ = i.getUrl())) : t.setSource(i), Promise.resolve();
						}
						let d, g, f, p;
						function m() {
							if (p || (e.sprite && !g)) p ? (t.setStyle(p), u().then(n).catch(i)) : i(new Error('Something went wrong trying to apply style.'));
							else {
								if (a.projection && !r) {
									const t = ao(a.projection).getUnits();
									'm' !== t && (r = Ep.map((e) => e / ss[t]));
								}
								(p = cm(
									t,
									e,
									l,
									r,
									g,
									f,
									(t, e = a.webfonts) =>
										(function (t, e = 'https://cdn.jsdelivr.net/npm/@fontsource/{font-family}/{fontweight}{-fontstyle}.css') {
											const n = t.toString();
											if (n in Zp) return Zp[n];
											const i = [];
											for (let e = 0, n = t.length; e < n; ++e) {
												t[e] = t[e].replace('Arial Unicode MS', 'Arial');
												const n = On(t[e], 1);
												Ul(n);
												const r = n.split(' ');
												i.push([r.slice(3).join(' ').replace(/"/g, ''), r[1], r[0]]);
											}
											for (let t = 0, n = i.length; t < n; ++t) {
												const n = i[t],
													r = n[0];
												if (!qp(r) && 100 !== zl.get(`${n[2]}\n${n[1]} \n${r}`)) {
													const t = e.replace('{font-family}', r.replace(/ /g, '-').toLowerCase()).replace('{Font+Family}', r.replace(/ /g, '+')).replace('{fontweight}', n[1]).replace('{-fontstyle}', n[2].replace('normal', '').replace(/(.+)/, '-$1')).replace('{fontstyle}', n[2]);
													if (!document.querySelector('link[href="' + t + '"]')) {
														const e = document.createElement('link');
														(e.href = t), (e.rel = 'stylesheet'), document.head.appendChild(e);
													}
												}
											}
											return (Zp[n] = t), t;
										})(t, e),
									a.getImage
								)),
									t.getStyle() ? u().then(n).catch(i) : i(new Error(`Nothing to show for source [${o}]`));
							}
						}
						if (e.sprite) {
							const t = new URL(
								(function (t, e, n) {
									const i = gp(t);
									if (!i) return decodeURI(new URL(t, n).href);
									const r = 'sprites/';
									if (0 !== i.indexOf(r)) throw new Error(`unexpected sprites url: ${t}`);
									const s = i.slice(8);
									return `${dp}/styles/v1/${s}/sprite?access_token=${e}`;
								})(e.sprite, a.accessToken, s || location.href)
							);
							d = window.devicePixelRatio >= 1.5 ? 0.5 : 1;
							const n = 0.5 == d ? '@2x' : '';
							let r = t.origin + t.pathname + n + '.json' + t.search;
							new Promise(function (e, n) {
								Mp('Sprite', r, a)
									.then(e)
									.catch(function (i) {
										(r = t.origin + t.pathname + '.json' + t.search), Mp('Sprite', r, a).then(e).catch(n);
									});
							})
								.then(function (e) {
									if ((void 0 === e && i(new Error('No sprites found.')), (g = e), (f = t.origin + t.pathname + n + '.png' + t.search), a.transformRequest)) {
										const t = a.transformRequest(f, 'SpriteImage') || f;
										(t instanceof Request || t instanceof Promise) && (f = t);
									}
									m();
								})
								.catch(function (t) {
									i(new Error(`Sprites cannot be loaded: ${r}: ${t.message}`));
								});
						} else m();
					})
					.catch(i);
			})
		);
	}
	const my = {};
	function _y(t, e, n = {}) {
		return Ip(e, n).then(function (e) {
			!(function (t, e, n) {
				e.layers.some(function (e) {
					if ('background' === e.type) {
						if (t instanceof Cg)
							return (
								t.setBackground(function (t) {
									return vy(e, t, n, {});
								}),
								!0
							);
						if (t instanceof ep || t instanceof Zf) return t.getLayers().insertAt(0, wy(e, n, {})), !0;
					}
				});
			})(t, e, n);
		});
	}
	function yy(t, e) {
		let n;
		return (
			t.some(function (t) {
				if (t.id == e) return (n = t.source), !0;
			}),
			n
		);
	}
	function xy(t, e, n) {
		const i = new hy({ tileJSON: e, tileSize: t.tileSize || e.tileSize || 512 }),
			r = i.getTileJSON(),
			s = i.getTileGrid(),
			o = ao(n.projection || 'EPSG:3857'),
			a = (function (t, e) {
				const n = t.bounds;
				if (n) {
					const t = fo([n[0], n[1]], e),
						i = fo([n[2], n[3]], e);
					return [t[0], t[1], i[0], i[1]];
				}
				return ao(e).getExtent();
			})(r, o),
			l = o.getExtent(),
			h = r.minzoom || 0,
			c = r.maxzoom || 22,
			u = { attributions: i.getAttributions(), projection: o, tileGrid: new R_({ origin: l ? or(l) : s.getOrigin(0), extent: a || s.getExtent(), minZoom: h, resolutions: gy(o, e.tileSize).slice(0, c + 1), tileSize: s.getTileSize(0) }) };
		return Array.isArray(r.tiles) ? (u.urls = r.tiles) : (u.url = r.tiles), u;
	}
	function vy(t, e, n, i) {
		const r = { id: t.id, type: t.type },
			s = t.layout || {},
			o = t.paint || {};
		r.paint = o;
		const a = Pp(e, n.resolutions || Ep);
		let l;
		const h = em(r, 'paint', 'background-color', a, my, i);
		return void 0 !== o['background-opacity'] && (l = em(r, 'paint', 'background-opacity', a, my, i)), 'none' == s.visibility ? void 0 : sm(h, l);
	}
	function wy(t, e, n) {
		const i = document.createElement('div');
		return (
			(i.className = 'ol-mapbox-style-background'),
			(i.style.position = 'absolute'),
			(i.style.width = '100%'),
			(i.style.height = '100%'),
			new Cg({
				source: new Zh({}),
				render(r) {
					const s = vy(t, r.viewState.resolution, e, n);
					return (i.style.backgroundColor = s), i;
				},
			})
		);
	}
	function by(t, e, n) {
		return new Promise(function (i, r) {
			Lp(t, e, n)
				.then(function ({ tileJson: e, tileLoadFunction: r }) {
					const s = xy(t, e, n);
					(s.tileLoadFunction = r), (s.format = new Om()), i(new cy(s));
				})
				.catch(r);
		});
	}
	function Sy(t) {
		return `{bbox-${(t ? t.getCode() : 'EPSG:3857').toLowerCase().replace(/[^a-z0-9]/g, '-')}}`;
	}
	function Cy(t, e, n) {
		return new Promise(function (i, r) {
			Lp(t, e, n)
				.then(function ({ tileJson: e, tileLoadFunction: r }) {
					const s = new hy({ interpolate: void 0 === n.interpolate || n.interpolate, transition: 0, crossOrigin: 'anonymous', tileJSON: e });
					(s.tileGrid = xy(t, e, n).tileGrid), n.projection && (s.projection = ao(n.projection));
					const o = s.getTileUrlFunction();
					r && s.setTileLoadFunction(r),
						s.setTileUrlFunction(function (t, e, n) {
							const i = Sy(n);
							let r = o(t, e, n);
							if (-1 != r.indexOf(i)) {
								const e = s.getTileGrid().getTileCoordExtent(t);
								r = r.replace(i, e.toString());
							}
							return r;
						}),
						s.set('mapbox-source', t),
						i(s);
				})
				.catch(function (t) {
					r(t);
				});
		});
	}
	function Ey(t, e, n) {
		const i = new g_();
		return (
			Cy(t, e, n)
				.then(function (t) {
					i.setSource(t);
				})
				.catch(function () {
					i.setSource(void 0);
				}),
			i
		);
	}
	function Ty(t, e, n) {
		const i = n.projection ? new ym({ dataProjection: n.projection }) : new ym(),
			r = t.data,
			s = {};
		if ('string' == typeof r) {
			const [s] = mp(r, n.accessToken, n.accessTokenParam || 'access_token', e || location.href);
			if (/\{bbox-[0-9a-z-]+\}/.test(s)) {
				const e = (t, e, n) => {
						const i = Sy(n);
						return s.replace(i, `${t.join(',')}`);
					},
					r = new rc({
						attributions: t.attribution,
						format: i,
						loader: (t, i, s, o, a) => {
							Mp('GeoJSON', 'function' == typeof e ? e(t, i, s) : e, n)
								.then((t) => {
									const e = r.getFormat().readFeatures(t, { featureProjection: s });
									r.addFeatures(e), o(e);
								})
								.catch((e) => {
									r.removeLoadedExtent(t), a();
								});
						},
						strategy: Fh,
					});
				return r.set('mapbox-source', t), r;
			}
			const o = new rc({
				attributions: t.attribution,
				format: i,
				url: s,
				loader: (t, e, i, r, a) => {
					Mp('GeoJSON', s, n)
						.then((t) => {
							const e = o.getFormat().readFeatures(t, { featureProjection: i });
							o.addFeatures(e), r(e);
						})
						.catch((e) => {
							o.removeLoadedExtent(t), a();
						});
				},
			});
			return o;
		}
		s.features = i.readFeatures(r, { featureProjection: So() || 'EPSG:3857' });
		const o = new rc(Object.assign({ attributions: t.attribution, format: i }, s));
		return o.set('mapbox-source', t), o;
	}
	function Py(t, e, n) {
		let i = null;
		return function (r) {
			t.paint &&
				'raster-opacity' in t.paint &&
				r.frameState.viewState.zoom !== i &&
				((i = r.frameState.viewState.zoom),
				delete n[t.id],
				(function (t, e, n, i) {
					const r = em(t, 'paint', 'raster-opacity', n, my, i);
					e.setOpacity(r);
				})(t, e, i, n));
		};
	}
	function Ry(t, e, n, i) {
		const r = bp(t),
			s = t.layers,
			o = n.type,
			a = n.source || yy(s, n.ref),
			l = t.sources[a];
		let h;
		if ('background' == o) h = wy(n, i, r);
		else if ('vector' == l.type)
			h = (function (t, e, n) {
				const i = new __({ declutter: !0, visible: !1 });
				return (
					by(t, e, n)
						.then(function (e) {
							e.set('mapbox-source', t), i.setSource(e);
						})
						.catch(function (t) {
							i.setSource(void 0);
						}),
					i
				);
			})(l, e, i);
		else if ('raster' == l.type) (h = Ey(l, e, i)), h.setVisible(!n.layout || 'none' !== n.layout.visibility), h.on('prerender', Py(n, h, r));
		else if ('geojson' == l.type)
			h = (function (t, e, n) {
				return new Rg({ declutter: !0, source: Ty(t, e, n), visible: !1 });
			})(l, e, i);
		else if ('raster-dem' == l.type && 'hillshade' == n.type) {
			const t = (function (t, e, n) {
				const i = Ey(t, e, n);
				return new Bm({ source: new W_({ operationType: 'image', operation: dy, sources: [i] }) });
			})(l, e, i);
			(h = t),
				t.getSource().on('beforeoperations', function (t) {
					const e = t.data;
					e.resolution = lo(i.projection || 'EPSG:3857', t.resolution, tr(t.extent), 'm');
					const s = Pp(t.resolution, i.resolutions || Ep);
					(e.encoding = l.encoding), (e.vert = 5 * em(n, 'paint', 'hillshade-exaggeration', s, my, r)), (e.sunAz = em(n, 'paint', 'hillshade-illumination-direction', s, my, r)), (e.sunEl = 35), (e.opacity = 0.3), (e.highlightColor = em(n, 'paint', 'hillshade-highlight-color', s, my, r)), (e.shadowColor = em(n, 'paint', 'hillshade-shadow-color', s, my, r)), (e.accentColor = em(n, 'paint', 'hillshade-accent-color', s, my, r));
				}),
				h.setVisible(!n.layout || 'none' !== n.layout.visibility);
		}
		const c = a;
		return h && h.set('mapbox-source', c), h;
	}
	function Fy(t, e, n, i) {
		const r = [];
		let s = null;
		if (e instanceof ep) {
			if (((s = e.getView()), !s.isDef() && !s.getRotation() && !s.getResolutions())) {
				const t = i.projection ? ao(i.projection) : s.getProjection();
				(s = new hg(Object.assign(s.getProperties(), { maxResolution: Ep[0] / ss[t.getUnits()], projection: i.projection || s.getProjection() }))), e.setView(s);
			}
			'center' in t && !s.getCenter() && s.setCenter(fo(t.center, s.getProjection())), 'zoom' in t && void 0 === s.getZoom() && s.setResolution(Ep[0] / ss[s.getProjection().getUnits()] / Math.pow(2, t.zoom)), (s.getCenter() && void 0 !== s.getZoom()) || s.fit(s.getProjection().getExtent(), { nearest: !0, size: e.getSize() });
		}
		e.set('mapbox-style', t), e.set('mapbox-metadata', { styleUrl: n, options: i });
		const o = t.layers;
		let a,
			l,
			h,
			c = [];
		for (let s = 0, u = o.length; s < u; ++s) {
			const u = o[s],
				d = u.type;
			'heatmap' != d ? ((h = u.source || yy(o, u.ref)), (h && h == l) || (c.length && (r.push(Iy(a, c, t, n, e, i)), (c = [])), (a = Ry(t, n, u, i)), a instanceof Rg || a instanceof __ || (c = []), (l = a.get('mapbox-source'))), c.push(u.id)) : console.debug(`layers[${s}].type "${d}" not supported`);
		}
		return r.push(Iy(a, c, t, n, e, i)), Promise.all(r);
	}
	function My(t, e, n = {}) {
		let i, r;
		if (((r = 'string' == typeof t || t instanceof HTMLElement ? new ep({ target: t }) : t), 'string' == typeof e)) {
			const t = e.startsWith('data:') ? location.href : fp(e, n.accessToken);
			(n = fy(t, n)),
				(i = new Promise(function (i, s) {
					Ip(e, n)
						.then(function (e) {
							Fy(e, r, t, n)
								.then(function () {
									i(r);
								})
								.catch(s);
						})
						.catch(function (t) {
							s(new Error(`Could not load ${e}: ${t.message}`));
						});
				}));
		} else
			i = new Promise(function (t, i) {
				Fy(e, r, !n.styleUrl || n.styleUrl.startsWith('data:') ? location.href : fp(n.styleUrl, n.accessToken), n)
					.then(function () {
						t(r);
					})
					.catch(i);
			});
		return i;
	}
	function Iy(t, e, n, i, s, o = {}) {
		let a = 24,
			l = 0;
		const h = n.layers;
		for (let t = 0, n = h.length; t < n; ++t) {
			const n = h[t];
			-1 !== e.indexOf(n.id) && ((a = Math.min('minzoom' in n ? n.minzoom : 0, a)), (l = Math.max('maxzoom' in n ? n.maxzoom : 24, l)));
		}
		return new Promise(function (h, c) {
			const u = function () {
				const u = t.getSource();
				if (u && 'error' !== u.getState()) {
					if ('getTileGrid' in u) {
						const e = u.getTileGrid();
						if (e) {
							const n = e.getMinZoom();
							(a > 0 || n > 0) && t.setMaxResolution(Math.min(Rp(Math.max(0, a - 1e-12), Ep), Rp(Math.max(0, n - 1e-12), e.getResolutions()))), l < 24 && t.setMinResolution(Rp(l, Ep));
						}
					} else a > 0 && t.setMaxResolution(Rp(Math.max(0, a - 1e-12), Ep));
					u instanceof rc || u instanceof cy
						? py(t, n, e, Object.assign({ styleUrl: i }, o))
								.then(function () {
									!(function (t, e) {
										function n() {
											const n = e.get('mapbox-style');
											if (!n) return;
											const i = r(n.layers),
												s = t.get('mapbox-layers'),
												o = i
													.filter(function (t) {
														return s.includes(t.id);
													})
													.some(function (t) {
														return !t.layout || !t.layout.visibility || 'visible' === t.layout.visibility;
													});
											t.get('visible') !== o && t.setVisible(o);
										}
										t.on('change', n), n();
									})(t, s),
										h();
								})
								.catch(c)
						: h();
				} else c(new Error('Error accessing data for source ' + t.get('mapbox-source')));
			};
			t.set('mapbox-layers', e);
			const d = s.getLayers();
			-1 === d.getArray().indexOf(t) && d.push(t), t.getSource() ? u() : t.once('change:source', u);
		});
	}
	function ky(t, e) {
		const n = t.get('mapbox-style').layers.find(function (t) {
			return t.id === e;
		});
		return n;
	}
	function Ly(t, e) {
		const n = t.getLayers().getArray();
		for (let t = 0, i = n.length; t < i; ++t) {
			const i = n[t].get('mapbox-layers');
			if (i && -1 !== i.indexOf(e)) return n[t];
		}
	}
	function Ay(t, e) {
		const n = [],
			i = t.getLayers().getArray();
		for (let t = 0, r = i.length; t < r; ++t) i[t].get('mapbox-source') === e && n.push(i[t]);
		return n;
	}
	function Dy(t, e) {
		const n = t.getLayers().getArray();
		for (let t = 0, i = n.length; t < i; ++t) {
			const i = n[t].getSource();
			if (n[t].get('mapbox-source') === e) return i;
		}
	}
	class Oy extends ui {
		constructor(t) {
			super(Yn), (this.error = t);
		}
	}
	var zy = Object.freeze({
		__proto__: null,
		MapboxVectorLayer: class extends __ {
			constructor(t) {
				const e = !('declutter' in t) || t.declutter,
					n = new cy({ state: 'loading', format: new Om() });
				super({ source: n, background: !1 === t.background ? null : t.background, declutter: e, className: t.className, opacity: t.opacity, visible: t.visible, zIndex: t.zIndex, minResolution: t.minResolution, maxResolution: t.maxResolution, minZoom: t.minZoom, maxZoom: t.maxZoom, renderOrder: t.renderOrder, renderBuffer: t.renderBuffer, renderMode: t.renderMode, map: t.map, updateWhileAnimating: t.updateWhileAnimating, updateWhileInteracting: t.updateWhileInteracting, preload: t.preload, useInterimTilesOnError: t.useInterimTilesOnError, properties: t.properties }), t.accessToken && (this.accessToken = t.accessToken);
				const i = [py(this, t.styleUrl, t.layers || t.source, { accessToken: this.accessToken })];
				void 0 === this.getBackground() && i.push(_y(this, t.styleUrl, { accessToken: this.accessToken })),
					Promise.all(i)
						.then(() => {
							n.setState('ready');
						})
						.catch((t) => {
							this.dispatchEvent(new Oy(t));
							this.getSource().setState('error');
						});
			}
		},
		addMapboxLayer: function (t, e, n) {
			const i = t.get('mapbox-style'),
				r = i.layers;
			let s,
				o,
				a = -1;
			if (void 0 !== n) {
				const e = ky(t, n);
				if (void 0 === e) throw new Error(`Layer with id "${n}" not found.`);
				s = r.indexOf(e);
			} else s = r.length;
			if ((s > 0 && r[s - 1].source === e.source ? ((a = s - 1), (o = -1)) : s < r.length && r[s].source === e.source && ((a = s), (o = 0)), -1 === a)) {
				const { options: o, styleUrl: a } = t.get('mapbox-metadata'),
					l = Ry(i, a, e, o);
				if (n) {
					const e = Ly(t, n),
						i = t.getLayers().getArray().indexOf(e);
					t.getLayers().insertAt(i, l);
				}
				return r.splice(s, 0, e), Iy(l, [e.id], i, a, t, o);
			}
			if (r.some((t) => t.id === e.id)) throw new Error(`Layer with id "${e.id}" already exists.`);
			const l = r[a].id,
				h = hm[wp(t.get('mapbox-style'), Ly(t, l))];
			if ((r.splice(s, 0, e), h)) {
				const [t, n, i, r, s, a, c, u] = h;
				if (Array.isArray(i)) {
					const t = i.indexOf(l) + o;
					i.splice(t, 0, e.id);
				}
				cm(t, n, i, r, s, a, c, u);
			} else Ly(t, r[a].id).changed();
			return Promise.resolve();
		},
		apply: My,
		applyBackground: _y,
		applyStyle: py,
		default: My,
		getFeatureState: function (t, e) {
			const n = 'getLayers' in t ? Ay(t, e.source) : [t];
			for (let t = 0, i = n.length; t < i; ++t) {
				const i = n[t].get('mapbox-featurestate');
				if (i && i[e.id]) return i[e.id];
			}
		},
		getLayer: Ly,
		getLayers: Ay,
		getMapboxLayer: ky,
		getSource: Dy,
		getStyleForLayer: function (t, e, n, i) {
			const r = n.getStyleFunction();
			if (3 === r.length) return r(t, e, i);
		},
		recordStyleLayer: function (t = !1) {
			lm = t;
		},
		removeMapboxLayer: function (t, e) {
			const n = 'string' == typeof e ? e : e.id,
				i = Ly(t, n),
				r = i.get('mapbox-layers');
			if (1 === r.length) throw new Error('Cannot remove last Mapbox layer from an OpenLayers layer.');
			r.splice(r.indexOf(n), 1);
			const s = t.get('mapbox-style'),
				o = s.layers;
			o.splice(
				o.findIndex((t) => t.id === n),
				1
			);
			const a = hm[wp(s, i)];
			if (a) {
				const [t, e, i, r, s, o, l, h] = a;
				Array.isArray(i) &&
					i.splice(
						i.findIndex((t) => t === n),
						1
					),
					cm(t, e, i, r, s, o, l, h);
			} else Ly(t, n).changed();
		},
		renderTransparent: function (t) {
			t !== rm &&
				(!(function () {
					for (const t in _p) delete _p[t];
				})(),
				(rm = t));
		},
		setFeatureState: function (t, e, n) {
			const i = 'getLayers' in t ? Ay(t, e.source) : [t];
			for (let t = 0, r = i.length; t < r; ++t) {
				const r = i[t].get('mapbox-featurestate');
				if (!r) throw new Error(`Map or layer for source "${e.source}" not found.`);
				n ? (r[e.id] = n) : delete r[e.id], i[t].changed();
			}
		},
		stylefunction: cm,
		updateMapboxLayer: function (t, e) {
			const n = t.get('mapbox-style'),
				i = n.layers,
				r = i.findIndex(function (t) {
					return t.id === e.id;
				});
			if (-1 === r) throw new Error(`Layer with id "${e.id}" not found.`);
			if (i[r].source !== e.source) throw new Error('Updated layer and previous version must use the same source.');
			delete bp(n)[e.id], delete Sp(n)[e.id], (i[r] = e);
			const s = hm[wp(t.get('mapbox-style'), Ly(t, e.id))];
			s ? cm.apply(void 0, s) : Ly(t, e.id).changed();
		},
		updateMapboxSource: function (t, e, n) {
			const i = Dy(t, e),
				r = t
					.getLayers()
					.getArray()
					.filter(function (t) {
						return (t instanceof Rg || t instanceof g_ || t instanceof __) && t.getSource() === i;
					}),
				s = t.get('mapbox-metadata');
			let o;
			switch (n.type) {
				case 'vector':
					o = by(n, s.styleUrl, s.options);
					break;
				case 'geojson':
					o = Promise.resolve(Ty(n, s.styleUrl, s.options));
					break;
				case 'raster':
				case 'raster-dem':
					o = Cy(n, s.styleUrl, s.options);
					break;
				default:
					return Promise.reject(new Error('Unsupported source type ' + n.type));
			}
			return (
				o.then(function (t) {
					r.forEach(function (e) {
						e.setSource(t);
					});
				}),
				o
			);
		},
	});
	const Gy = 'units',
		jy = [1, 2, 5],
		Ny = 25.4 / 0.28;
	function Uy(t) {
		return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
	}
	function $y(t) {
		if (t.__esModule) return t;
		var e = t.default;
		if ('function' == typeof e) {
			var n = function t() {
				return this instanceof t ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
			};
			n.prototype = e.prototype;
		} else n = {};
		return (
			Object.defineProperty(n, '__esModule', { value: !0 }),
			Object.keys(t).forEach(function (e) {
				var i = Object.getOwnPropertyDescriptor(t, e);
				Object.defineProperty(
					n,
					e,
					i.get
						? i
						: {
								enumerable: !0,
								get: function () {
									return t[e];
								},
						  }
				);
			}),
			n
		);
	}
	var By,
		Vy = { exports: {} },
		Wy = $y(rf),
		Xy = $y(yi),
		qy = $y(Kf);
	var Zy =
			(By ||
				((By = 1),
				(function (t) {
					t.exports = (function (t, e, n) {
						(t = 'default' in t ? t.default : t), (n = 'default' in n ? n.default : n);
						const i = 'layer-switcher-';
						class r extends t {
							constructor(t) {
								const e = Object.assign({}, t),
									n = document.createElement('div');
								super({ element: n, target: e.target }),
									(this.activationMode = e.activationMode || 'mouseover'),
									(this.startActive = !0 === e.startActive),
									(this.label = void 0 !== e.label ? e.label : ''),
									(this.collapseLabel = void 0 !== e.collapseLabel ? e.collapseLabel : '»'),
									(this.tipLabel = e.tipLabel ? e.tipLabel : 'Legend'),
									(this.collapseTipLabel = e.collapseTipLabel ? e.collapseTipLabel : 'Collapse legend'),
									(this.groupSelectStyle = r.getGroupSelectStyle(e.groupSelectStyle)),
									(this.reverse = !1 !== e.reverse),
									(this.mapListeners = []),
									(this.hiddenClassName = 'ol-unselectable ol-control layer-switcher'),
									r.isTouchDevice_() && (this.hiddenClassName += ' touch'),
									(this.shownClassName = 'shown'),
									(n.className = this.hiddenClassName),
									(this.button = document.createElement('button')),
									n.appendChild(this.button),
									(this.panel = document.createElement('div')),
									(this.panel.className = 'panel'),
									n.appendChild(this.panel),
									r.enableTouchScroll_(this.panel),
									n.classList.add(i + 'group-select-style-' + this.groupSelectStyle),
									n.classList.add(i + 'activation-mode-' + this.activationMode),
									'click' === this.activationMode
										? (n.classList.add('activationModeClick'),
										  (this.button.onclick = (t) => {
												const e = t || window.event;
												this.element.classList.contains(this.shownClassName) ? this.hidePanel() : this.showPanel(), e.preventDefault();
										  }))
										: ((this.button.onmouseover = () => {
												this.showPanel();
										  }),
										  (this.button.onclick = (t) => {
												const e = t || window.event;
												this.showPanel(), e.preventDefault();
										  }),
										  (this.panel.onmouseout = (t) => {
												this.panel.contains(t.relatedTarget) || this.hidePanel();
										  })),
									this.updateButton();
							}
							setMap(t) {
								for (let t = 0; t < this.mapListeners.length; t++) e.unByKey(this.mapListeners[t]);
								(this.mapListeners.length = 0),
									super.setMap(t),
									t &&
										(this.startActive ? this.showPanel() : this.renderPanel(),
										'click' !== this.activationMode &&
											this.mapListeners.push(
												t.on('pointerdown', () => {
													this.hidePanel();
												})
											));
							}
							showPanel() {
								this.element.classList.contains(this.shownClassName) || (this.element.classList.add(this.shownClassName), this.updateButton(), this.renderPanel()), this.dispatchEvent('show');
							}
							hidePanel() {
								this.element.classList.contains(this.shownClassName) && (this.element.classList.remove(this.shownClassName), this.updateButton()), this.dispatchEvent('hide');
							}
							updateButton() {
								this.element.classList.contains(this.shownClassName) ? ((this.button.textContent = this.collapseLabel), this.button.setAttribute('title', this.collapseTipLabel), this.button.setAttribute('aria-label', this.collapseTipLabel)) : ((this.button.textContent = this.label), this.button.setAttribute('title', this.tipLabel), this.button.setAttribute('aria-label', this.tipLabel));
							}
							renderPanel() {
								this.dispatchEvent('render'), r.renderPanel(this.getMap(), this.panel, { groupSelectStyle: this.groupSelectStyle, reverse: this.reverse }), this.dispatchEvent('rendercomplete');
							}
							static renderPanel(t, e, n) {
								const i = new Event('render');
								for (e.dispatchEvent(i), (n = n || {}).groupSelectStyle = r.getGroupSelectStyle(n.groupSelectStyle), r.ensureTopVisibleBaseLayerShown(t, n.groupSelectStyle); e.firstChild; ) e.removeChild(e.firstChild);
								r.forEachRecursive(t, function (t, e, n) {
									t.set('indeterminate', !1);
								}),
									'children' === n.groupSelectStyle || 'none' === n.groupSelectStyle ? r.setGroupVisibility(t) : 'group' === n.groupSelectStyle && r.setChildVisibility(t);
								const s = document.createElement('ul');
								e.appendChild(s),
									r.renderLayers_(t, t, s, n, function (i) {
										r.renderPanel(t, e, n);
									});
								const o = new Event('rendercomplete');
								e.dispatchEvent(o);
							}
							static isBaseGroup(t) {
								if (t instanceof n) {
									const e = t.getLayers().getArray();
									return e.length && 'base' === e[0].get('type');
								}
								return !1;
							}
							static setGroupVisibility(t) {
								r.getGroupsAndLayers(t, function (t) {
									return t instanceof n && !t.get('combine') && !r.isBaseGroup(t);
								})
									.reverse()
									.forEach(function (t) {
										const e = t.getLayersArray().map(function (t) {
											return t.getVisible();
										});
										e.every(function (t) {
											return !0 === t;
										})
											? (t.setVisible(!0), t.set('indeterminate', !1))
											: e.every(function (t) {
													return !1 === t;
											  })
											? (t.setVisible(!1), t.set('indeterminate', !1))
											: (t.setVisible(!0), t.set('indeterminate', !0));
									});
							}
							static setChildVisibility(t) {
								r.getGroupsAndLayers(t, function (t) {
									return t instanceof n && !t.get('combine') && !r.isBaseGroup(t);
								}).forEach(function (t) {
									const e = t,
										n = e.getVisible(),
										i = e.get('indeterminate');
									e.getLayers()
										.getArray()
										.forEach(function (t) {
											t.set('indeterminate', !1), (n && !i) || !t.getVisible() || t.set('indeterminate', !0);
										});
								});
							}
							static ensureTopVisibleBaseLayerShown(t, e) {
								let n;
								r.forEachRecursive(t, function (t, e, i) {
									'base' === t.get('type') && t.getVisible() && (n = t);
								}),
									n && r.setVisible_(t, n, !0, e);
							}
							static getGroupsAndLayers(t, e) {
								const n = [];
								return (
									(e =
										e ||
										function (t, e, n) {
											return !0;
										}),
									r.forEachRecursive(t, function (t, i, r) {
										t.get('title') && e(t, i, r) && n.push(t);
									}),
									n
								);
							}
							static setVisible_(t, e, i, s) {
								e.setVisible(i),
									i &&
										'base' === e.get('type') &&
										r.forEachRecursive(t, function (t, n, i) {
											t != e && 'base' === t.get('type') && t.setVisible(!1);
										}),
									e instanceof n &&
										!e.get('combine') &&
										'children' === s &&
										e.getLayers().forEach((n) => {
											r.setVisible_(t, n, e.getVisible(), s);
										});
							}
							static renderLayer_(t, e, s, o, a) {
								const l = document.createElement('li'),
									h = e.get('title'),
									c = r.uuid(),
									u = document.createElement('label');
								if (e instanceof n && !e.get('combine')) {
									const n = r.isBaseGroup(e);
									if ((l.classList.add('group'), n && l.classList.add(i + 'base-group'), e.get('fold'))) {
										l.classList.add(i + 'fold'), l.classList.add(i + e.get('fold'));
										const t = document.createElement('button');
										(t.onclick = function (t) {
											const n = t || window.event;
											r.toggleFold_(e, l), n.preventDefault();
										}),
											l.appendChild(t);
									}
									if (!n && 'none' != o.groupSelectStyle) {
										const n = document.createElement('input');
										(n.type = 'checkbox'),
											(n.id = c),
											(n.checked = e.getVisible()),
											(n.indeterminate = e.get('indeterminate')),
											(n.onchange = function (n) {
												const i = n.target;
												r.setVisible_(t, e, i.checked, o.groupSelectStyle), a(e);
											}),
											l.appendChild(n),
											(u.htmlFor = c);
									}
									(u.innerHTML = h), l.appendChild(u);
									const s = document.createElement('ul');
									l.appendChild(s), r.renderLayers_(t, e, s, o, a);
								} else {
									l.className = 'layer';
									const n = document.createElement('input');
									'base' === e.get('type') ? (n.type = 'radio') : (n.type = 'checkbox'),
										(n.id = c),
										(n.checked = e.get('visible')),
										(n.indeterminate = e.get('indeterminate')),
										(n.onchange = function (n) {
											const i = n.target;
											r.setVisible_(t, e, i.checked, o.groupSelectStyle), a(e);
										}),
										l.appendChild(n),
										(u.htmlFor = c),
										(u.innerHTML = h);
									const i = t.getView().getResolution();
									if (i >= e.getMaxResolution() || i < e.getMinResolution()) u.className += ' disabled';
									else if (e.getMinZoom && e.getMaxZoom) {
										const n = t.getView().getZoom();
										(n <= e.getMinZoom() || n > e.getMaxZoom()) && (u.className += ' disabled');
									}
									l.appendChild(u);
								}
								return l;
							}
							static renderLayers_(t, e, n, i, s) {
								let o = e.getLayers().getArray().slice();
								i.reverse && (o = o.reverse());
								for (let e, a = 0; a < o.length; a++) (e = o[a]), e.get('title') && n.appendChild(r.renderLayer_(t, e, a, i, s));
							}
							static forEachRecursive(t, e) {
								t.getLayers().forEach(function (t, i, s) {
									e(t, i, s), t instanceof n && r.forEachRecursive(t, e);
								});
							}
							static uuid() {
								return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (t) {
									const e = (16 * Math.random()) | 0;
									return ('x' == t ? e : (3 & e) | 8).toString(16);
								});
							}
							static enableTouchScroll_(t) {
								if (r.isTouchDevice_()) {
									let e = 0;
									t.addEventListener(
										'touchstart',
										function (t) {
											e = this.scrollTop + t.touches[0].pageY;
										},
										!1
									),
										t.addEventListener(
											'touchmove',
											function (t) {
												this.scrollTop = e - t.touches[0].pageY;
											},
											!1
										);
								}
							}
							static isTouchDevice_() {
								try {
									return document.createEvent('TouchEvent'), !0;
								} catch (t) {
									return !1;
								}
							}
							static toggleFold_(t, e) {
								e.classList.remove(i + t.get('fold')), t.set('fold', 'open' === t.get('fold') ? 'close' : 'open'), e.classList.add(i + t.get('fold'));
							}
							static getGroupSelectStyle(t) {
								return ['none', 'children', 'group'].indexOf(t) >= 0 ? t : 'children';
							}
						}
						return window.ol && window.ol.control && (window.ol.control.LayerSwitcher = r), r;
					})(Wy, Xy, qy);
				})(Vy)),
			Vy.exports),
		Ky = Uy(Zy);
	const Yy = 'addfeatures';
	class Hy extends ui {
		constructor(t, e, n, i) {
			super(t), (this.features = n), (this.file = e), (this.projection = i);
		}
	}
	const Jy = 'drawstart',
		Qy = 'drawend',
		tx = 'drawabort';
	class ex extends ui {
		constructor(t, e) {
			super(t), (this.feature = e);
		}
	}
	function nx(t, e) {
		return br(t[0], t[1], e[0], e[1]);
	}
	function ix(t, e) {
		const n = t.length;
		return e < 0 ? t[e + n] : e >= n ? t[e - n] : t[e];
	}
	function rx(t, e, n) {
		let i, r;
		e < n ? ((i = e), (r = n)) : ((i = n), (r = e));
		const s = Math.ceil(i),
			o = Math.floor(r);
		if (s > o) {
			return nx(cx(t, i), cx(t, r));
		}
		let a = 0;
		if (i < s) {
			a += nx(cx(t, i), ix(t, s));
		}
		if (o < r) {
			a += nx(ix(t, o), cx(t, r));
		}
		for (let e = s; e < o - 1; ++e) {
			a += nx(ix(t, e), ix(t, e + 1));
		}
		return a;
	}
	function sx(t, e, n) {
		if (e instanceof ma) ax(t, e.getCoordinates(), !1, n);
		else if (e instanceof _a) {
			const i = e.getCoordinates();
			for (let e = 0, r = i.length; e < r; ++e) ax(t, i[e], !1, n);
		} else if (e instanceof va) {
			const i = e.getCoordinates();
			for (let e = 0, r = i.length; e < r; ++e) ax(t, i[e], !0, n);
		} else if (e instanceof Sa) {
			const i = e.getCoordinates();
			for (let e = 0, r = i.length; e < r; ++e) {
				const r = i[e];
				for (let e = 0, i = r.length; e < i; ++e) ax(t, r[e], !0, n);
			}
		} else if (e instanceof Jo) {
			const i = e.getGeometries();
			for (let e = 0; e < i.length; ++e) sx(t, i[e], n);
		} else;
	}
	const ox = { index: -1, endIndex: NaN };
	function ax(t, e, n, i) {
		const r = t[0],
			s = t[1];
		for (let t = 0, o = e.length - 1; t < o; ++t) {
			const o = hx(r, s, e[t], e[t + 1]);
			if (0 === o.squaredDistance) {
				const r = t + o.along;
				return void i.push({ coordinates: e, ring: n, startIndex: r, endIndex: r });
			}
		}
	}
	const lx = { along: 0, squaredDistance: 0 };
	function hx(t, e, n, i) {
		const r = n[0],
			s = n[1],
			o = i[0] - r,
			a = i[1] - s;
		let l = 0,
			h = r,
			c = s;
		return (0 === o && 0 === a) || ((l = vr(((t - r) * o + (e - s) * a) / (o * o + a * a), 0, 1)), (h += o * l), (c += a * l)), (lx.along = l), (lx.squaredDistance = Pr(br(t, e, h, c), 10)), lx;
	}
	function cx(t, e) {
		const n = t.length;
		let i = Math.floor(e);
		const r = e - i;
		i >= n ? (i -= n) : i < 0 && (i += n);
		let s = i + 1;
		s >= n && (s -= n);
		const o = t[i],
			a = o[0],
			l = o[1],
			h = t[s];
		return [a + (h[0] - a) * r, l + (h[1] - l) * r];
	}
	function ux() {
		const t = sh();
		return function (e, n) {
			return t[e.getGeometry().getType()];
		};
	}
	const dx = 'extentchanged';
	class gx extends ui {
		constructor(t) {
			super(dx), (this.extent = t);
		}
	}
	function fx() {
		const t = sh();
		return function (e, n) {
			return t.Polygon;
		};
	}
	function px() {
		const t = sh();
		return function (e, n) {
			return t.Point;
		};
	}
	function mx(t) {
		return function (e) {
			return ki([t, e]);
		};
	}
	function _x(t, e) {
		return t[0] == e[0]
			? function (n) {
					return ki([t, [n[0], e[1]]]);
			  }
			: t[1] == e[1]
			? function (n) {
					return ki([t, [e[0], n[1]]]);
			  }
			: null;
	}
	function yx(t) {
		return parseFloat(t);
	}
	function xx(t) {
		return (function (t) {
			return Pr(t, 5);
		})(t).toString();
	}
	function vx(t, e) {
		return !isNaN(t) && t !== yx(xx(e));
	}
	const wx = [0, 0, 0, 0],
		bx = [],
		Sx = 'modifystart',
		Cx = 'modifyend';
	class Ex extends ui {
		constructor(t, e, n) {
			super(t), (this.features = e), (this.mapBrowserEvent = n);
		}
	}
	function Tx(t, e) {
		return t.index - e.index;
	}
	function Px(t, e, n) {
		const i = e.geometry;
		if ('Circle' === i.getType()) {
			let r = i;
			if (1 === e.index) {
				const e = So();
				e && (r = r.clone().transform(e, n));
				const i = ts(r.getCenter(), Eo(t, n)),
					s = Math.sqrt(i) - r.getRadius();
				return s * s;
			}
		}
		const r = Eo(t, n);
		return (bx[0] = Eo(e.segment[0], n)), (bx[1] = Eo(e.segment[1], n)), ns(r, bx);
	}
	function Rx(t, e, n) {
		const i = e.geometry;
		if ('Circle' === i.getType() && 1 === e.index) {
			let e = i;
			const r = So();
			return r && (e = e.clone().transform(r, n)), Co(e.getClosestPoint(Eo(t, n)), n);
		}
		const r = Eo(t, n);
		return (bx[0] = Eo(e.segment[0], n)), (bx[1] = Eo(e.segment[1], n)), Co(Hr(r, bx), n);
	}
	function Fx() {
		const t = sh();
		return function (e, n) {
			return t.Point;
		};
	}
	const Mx = 'select';
	class Ix extends ui {
		constructor(t, e, n, i) {
			super(t), (this.selected = e), (this.deselected = n), (this.mapBrowserEvent = i);
		}
	}
	const kx = {};
	class Lx extends hf {
		constructor(t) {
			let e;
			if (
				(super(),
				this.on,
				this.once,
				this.un,
				(t = t || {}),
				(this.boundAddFeature_ = this.addFeature_.bind(this)),
				(this.boundRemoveFeature_ = this.removeFeature_.bind(this)),
				(this.condition_ = t.condition ? t.condition : yf),
				(this.addCondition_ = t.addCondition ? t.addCondition : _f),
				(this.removeCondition_ = t.removeCondition ? t.removeCondition : _f),
				(this.toggleCondition_ = t.toggleCondition ? t.toggleCondition : vf),
				(this.multi_ = !!t.multi && t.multi),
				(this.filter_ = t.filter ? t.filter : Bn),
				(this.hitTolerance_ = t.hitTolerance ? t.hitTolerance : 0),
				(this.style_ =
					void 0 !== t.style
						? t.style
						: (function () {
								const t = sh();
								return (
									Un(t.Polygon, t.LineString),
									Un(t.GeometryCollection, t.LineString),
									function (e) {
										return e.getGeometry() ? t[e.getGeometry().getType()] : null;
									}
								);
						  })()),
				(this.features_ = t.features || new dh()),
				t.layers)
			)
				if ('function' == typeof t.layers) e = t.layers;
				else {
					const n = t.layers;
					e = function (t) {
						return n.includes(t);
					};
				}
			else e = Bn;
			(this.layerFilter_ = e), (this.featureLayerAssociation_ = {});
		}
		addFeatureLayerAssociation_(t, e) {
			this.featureLayerAssociation_[wi(t)] = e;
		}
		getFeatures() {
			return this.features_;
		}
		getHitTolerance() {
			return this.hitTolerance_;
		}
		getLayer(t) {
			return this.featureLayerAssociation_[wi(t)];
		}
		setHitTolerance(t) {
			this.hitTolerance_ = t;
		}
		setMap(t) {
			this.getMap() && this.style_ && this.features_.forEach(this.restorePreviousStyle_.bind(this)), super.setMap(t), t ? (this.features_.addEventListener(lh, this.boundAddFeature_), this.features_.addEventListener(hh, this.boundRemoveFeature_), this.style_ && this.features_.forEach(this.applySelectedStyle_.bind(this))) : (this.features_.removeEventListener(lh, this.boundAddFeature_), this.features_.removeEventListener(hh, this.boundRemoveFeature_));
		}
		addFeature_(t) {
			const e = t.element;
			if ((this.style_ && this.applySelectedStyle_(e), !this.getLayer(e))) {
				const t = this.getMap()
					.getAllLayers()
					.find(function (t) {
						if (t instanceof Rg && t.getSource() && t.getSource().hasFeature(e)) return t;
					});
				t && this.addFeatureLayerAssociation_(e, t);
			}
		}
		removeFeature_(t) {
			this.style_ && this.restorePreviousStyle_(t.element);
		}
		getStyle() {
			return this.style_;
		}
		applySelectedStyle_(t) {
			const e = wi(t);
			e in kx || (kx[e] = t.getStyle()), t.setStyle(this.style_);
		}
		restorePreviousStyle_(t) {
			const e = this.getMap().getInteractions().getArray();
			for (let n = e.length - 1; n >= 0; --n) {
				const i = e[n];
				if (i !== this && i instanceof Lx && i.getStyle() && -1 !== i.getFeatures().getArray().lastIndexOf(t)) return void t.setStyle(i.getStyle());
			}
			const n = wi(t);
			t.setStyle(kx[n]), delete kx[n];
		}
		removeFeatureLayerAssociation_(t) {
			delete this.featureLayerAssociation_[wi(t)];
		}
		handleEvent(t) {
			if (!this.condition_(t)) return !0;
			const e = this.addCondition_(t),
				n = this.removeCondition_(t),
				i = this.toggleCondition_(t),
				r = !e && !n && !i,
				s = t.map,
				o = this.getFeatures(),
				a = [],
				l = [];
			if (r) {
				hi(this.featureLayerAssociation_),
					s.forEachFeatureAtPixel(
						t.pixel,
						(t, e) => {
							if (t instanceof Ei && this.filter_(t, e)) return this.addFeatureLayerAssociation_(t, e), l.push(t), !this.multi_;
						},
						{ layerFilter: this.layerFilter_, hitTolerance: this.hitTolerance_ }
					);
				for (let t = o.getLength() - 1; t >= 0; --t) {
					const e = o.item(t),
						n = l.indexOf(e);
					n > -1 ? l.splice(n, 1) : (o.remove(e), a.push(e));
				}
				0 !== l.length && o.extend(l);
			} else {
				s.forEachFeatureAtPixel(
					t.pixel,
					(t, r) => {
						if (t instanceof Ei && this.filter_(t, r)) return (!e && !i) || o.getArray().includes(t) ? (n || i) && o.getArray().includes(t) && (a.push(t), this.removeFeatureLayerAssociation_(t)) : (this.addFeatureLayerAssociation_(t, r), l.push(t)), !this.multi_;
					},
					{ layerFilter: this.layerFilter_, hitTolerance: this.hitTolerance_ }
				);
				for (let t = a.length - 1; t >= 0; --t) o.remove(a[t]);
				o.extend(l);
			}
			return (l.length > 0 || a.length > 0) && this.dispatchEvent(new Ix(Mx, l, a, t)), !0;
		}
	}
	const Ax = 'snap';
	class Dx extends ui {
		constructor(t, e) {
			super(t), (this.vertex = e.vertex), (this.vertexPixel = e.vertexPixel), (this.feature = e.feature), (this.segment = e.segment);
		}
	}
	function Ox(t) {
		return t.feature ? t.feature : t.element ? t.element : null;
	}
	const zx = [];
	const Gx = 'translatestart',
		jx = 'translating',
		Nx = 'translateend';
	class Ux extends ui {
		constructor(t, e, n, i, r) {
			super(t), (this.features = e), (this.coordinate = n), (this.startCoordinate = i), (this.mapBrowserEvent = r);
		}
	}
	var $x = Object.freeze({
		__proto__: null,
		DblClickDragZoom: class extends hf {
			constructor(t) {
				const e = t || {};
				super(e), e.stopDown && (this.stopDown = e.stopDown), (this.scaleDeltaByPixel_ = e.delta ? e.delta : 0.01), (this.duration_ = void 0 !== e.duration ? e.duration : 250), (this.handlingDownUpSequence_ = !1), (this.handlingDoubleDownSequence_ = !1), (this.doubleTapTimeoutId_ = void 0), (this.trackedPointers_ = {}), (this.targetPointers = []);
			}
			handleEvent(t) {
				if (!t.originalEvent) return !0;
				let e = !1;
				if ((this.updateTrackedPointers_(t), this.handlingDownUpSequence_)) {
					if (t.type == Ng.POINTERDRAG) this.handleDragEvent(t), t.originalEvent.preventDefault();
					else if (t.type == Ng.POINTERUP) {
						const e = this.handleUpEvent(t);
						this.handlingDownUpSequence_ = e;
					}
				} else if (t.type == Ng.POINTERDOWN)
					if (this.handlingDoubleDownSequence_) {
						this.handlingDoubleDownSequence_ = !1;
						const n = this.handleDownEvent(t);
						(this.handlingDownUpSequence_ = n), (e = this.stopDown(n));
					} else (e = this.stopDown(!1)), this.waitForDblTap_();
				return !e;
			}
			handleDragEvent(t) {
				let e = 1;
				const n = this.targetPointers[0],
					i = this.down_.originalEvent,
					r = -(n.clientY - i.clientY);
				void 0 !== this.lastDistance_ && (e = 1 - (this.lastDistance_ - r) * this.scaleDeltaByPixel_), (this.lastDistance_ = r), 1 != e && (this.lastScaleDelta_ = e);
				const s = t.map,
					o = s.getView();
				s.render(), o.adjustResolutionInternal(e);
			}
			handleDownEvent(t) {
				if (1 == this.targetPointers.length) {
					const e = t.map;
					return (this.anchor_ = null), (this.lastDistance_ = void 0), (this.lastScaleDelta_ = 1), (this.down_ = t), this.handlingDownUpSequence_ || e.getView().beginInteraction(), !0;
				}
				return !1;
			}
			handleUpEvent(t) {
				if (0 == this.targetPointers.length) {
					const e = t.map.getView(),
						n = this.lastScaleDelta_ > 1 ? 1 : -1;
					return e.endInteraction(this.duration_, n), (this.handlingDownUpSequence_ = !1), (this.handlingDoubleDownSequence_ = !1), !1;
				}
				return !0;
			}
			stopDown(t) {
				return t;
			}
			updateTrackedPointers_(t) {
				if (
					(function (t) {
						const e = t.type;
						return e === Ng.POINTERDOWN || e === Ng.POINTERDRAG || e === Ng.POINTERUP;
					})(t)
				) {
					const e = t.originalEvent,
						n = e.pointerId.toString();
					t.type == Ng.POINTERUP ? delete this.trackedPointers_[n] : (t.type == Ng.POINTERDOWN || n in this.trackedPointers_) && (this.trackedPointers_[n] = e), (this.targetPointers = Object.values(this.trackedPointers_));
				}
			}
			waitForDblTap_() {
				void 0 !== this.doubleTapTimeoutId_ ? (clearTimeout(this.doubleTapTimeoutId_), (this.doubleTapTimeoutId_ = void 0)) : ((this.handlingDoubleDownSequence_ = !0), (this.doubleTapTimeoutId_ = setTimeout(this.endInteraction_.bind(this), 250)));
			}
			endInteraction_() {
				(this.handlingDoubleDownSequence_ = !1), (this.doubleTapTimeoutId_ = void 0);
			}
		},
		DoubleClickZoom: uf,
		DragAndDrop: class extends hf {
			constructor(t) {
				(t = t || {}), super({ handleEvent: Bn }), this.on, this.once, this.un, (this.readAsBuffer_ = !1), (this.formats_ = []);
				const e = t.formatConstructors ? t.formatConstructors : [];
				for (let t = 0, n = e.length; t < n; ++t) {
					let n = e[t];
					'function' == typeof n && (n = new n()), this.formats_.push(n), (this.readAsBuffer_ = this.readAsBuffer_ || 'arraybuffer' === n.getType());
				}
				(this.projection_ = t.projection ? ao(t.projection) : null), (this.dropListenKeys_ = null), (this.source_ = t.source || null), (this.target = t.target ? t.target : null);
			}
			handleResult_(t, e) {
				const n = e.target.result,
					i = this.getMap();
				let r,
					s = this.projection_;
				if (!s && ((s = So()), !s)) {
					s = i.getView().getProjection();
				}
				const o = this.formats_;
				for (let e = 0, i = o.length; e < i; ++e) {
					const i = o[e];
					let a = n;
					this.readAsBuffer_ && 'arraybuffer' !== i.getType() && (void 0 === r && (r = new TextDecoder().decode(n)), (a = r));
					const l = this.tryReadFeatures_(i, a, { featureProjection: s });
					if (l && l.length > 0) {
						this.source_ && (this.source_.clear(), this.source_.addFeatures(l)), this.dispatchEvent(new Hy(Yy, t, l, s));
						break;
					}
				}
			}
			registerListeners_() {
				const t = this.getMap();
				if (t) {
					const e = this.target ? this.target : t.getViewport();
					this.dropListenKeys_ = [gi(e, ni, this.handleDrop, this), gi(e, ti, this.handleStop, this), gi(e, ei, this.handleStop, this), gi(e, ni, this.handleStop, this)];
				}
			}
			setActive(t) {
				!this.getActive() && t && this.registerListeners_(), this.getActive() && !t && this.unregisterListeners_(), super.setActive(t);
			}
			setMap(t) {
				this.unregisterListeners_(), super.setMap(t), this.getActive() && this.registerListeners_();
			}
			tryReadFeatures_(t, e, n) {
				try {
					return t.readFeatures(e, n);
				} catch {
					return null;
				}
			}
			unregisterListeners_() {
				this.dropListenKeys_ && (this.dropListenKeys_.forEach(pi), (this.dropListenKeys_ = null));
			}
			handleDrop(t) {
				const e = t.dataTransfer.files;
				for (let t = 0, n = e.length; t < n; ++t) {
					const n = e.item(t),
						i = new FileReader();
					i.addEventListener(si, this.handleResult_.bind(this, n)), this.readAsBuffer_ ? i.readAsArrayBuffer(n) : i.readAsText(n);
				}
			}
			handleStop(t) {
				t.stopPropagation(), t.preventDefault(), (t.dataTransfer.dropEffect = 'copy');
			}
		},
		DragBox: Af,
		DragPan: Tf,
		DragRotate: Pf,
		DragRotateAndZoom: class extends Cf {
			constructor(t) {
				super((t = t || {})), (this.condition_ = t.condition ? t.condition : vf), (this.lastAngle_ = void 0), (this.lastMagnitude_ = void 0), (this.lastScaleDelta_ = 0), (this.duration_ = void 0 !== t.duration ? t.duration : 400);
			}
			handleDragEvent(t) {
				if (!bf(t)) return;
				const e = t.map,
					n = e.getSize(),
					i = t.pixel,
					r = i[0] - n[0] / 2,
					s = n[1] / 2 - i[1],
					o = Math.atan2(s, r),
					a = Math.sqrt(r * r + s * s),
					l = e.getView();
				if (void 0 !== this.lastAngle_) {
					const t = this.lastAngle_ - o;
					l.adjustRotationInternal(t);
				}
				(this.lastAngle_ = o), void 0 !== this.lastMagnitude_ && l.adjustResolutionInternal(this.lastMagnitude_ / a), void 0 !== this.lastMagnitude_ && (this.lastScaleDelta_ = this.lastMagnitude_ / a), (this.lastMagnitude_ = a);
			}
			handleUpEvent(t) {
				if (!bf(t)) return !0;
				const e = t.map.getView(),
					n = this.lastScaleDelta_ > 1 ? 1 : -1;
				return e.endInteraction(this.duration_, n), (this.lastScaleDelta_ = 0), !1;
			}
			handleDownEvent(t) {
				return !!bf(t) && !!this.condition_(t) && (t.map.getView().beginInteraction(), (this.lastAngle_ = void 0), (this.lastMagnitude_ = void 0), !0);
			}
		},
		DragZoom: Df,
		Draw: class extends Cf {
			constructor(t) {
				const e = t;
				e.stopDown || (e.stopDown = Vn),
					super(e),
					this.on,
					this.once,
					this.un,
					(this.shouldHandle_ = !1),
					(this.downPx_ = null),
					this.downTimeout_,
					this.lastDragTime_,
					this.pointerType_,
					(this.freehand_ = !1),
					(this.source_ = t.source ? t.source : null),
					(this.features_ = t.features ? t.features : null),
					(this.snapTolerance_ = t.snapTolerance ? t.snapTolerance : 12),
					(this.type_ = t.type),
					(this.mode_ = (function (t) {
						switch (t) {
							case 'Point':
							case 'MultiPoint':
								return 'Point';
							case 'LineString':
							case 'MultiLineString':
								return 'LineString';
							case 'Polygon':
							case 'MultiPolygon':
								return 'Polygon';
							case 'Circle':
								return 'Circle';
							default:
								throw new Error('Invalid type: ' + t);
						}
					})(this.type_)),
					(this.stopClick_ = !!t.stopClick),
					(this.minPoints_ = t.minPoints ? t.minPoints : 'Polygon' === this.mode_ ? 3 : 2),
					(this.maxPoints_ = 'Circle' === this.mode_ ? 2 : t.maxPoints ? t.maxPoints : 1 / 0),
					(this.finishCondition_ = t.finishCondition ? t.finishCondition : Bn),
					(this.geometryLayout_ = t.geometryLayout ? t.geometryLayout : 'XY');
				let n = t.geometryFunction;
				if (!n) {
					const t = this.mode_;
					if ('Circle' === t)
						n = (t, e, n) => {
							const i = e || new Ho([NaN, NaN]),
								r = Eo(t[0], n),
								s = ts(r, Eo(t[t.length - 1], n));
							i.setCenterAndRadius(r, Math.sqrt(s), this.geometryLayout_);
							const o = So();
							return o && i.transform(n, o), i;
						};
					else {
						let e;
						'Point' === t ? (e = ya) : 'LineString' === t ? (e = ma) : 'Polygon' === t && (e = va), (n = (n, i, r) => (i ? ('Polygon' === t ? (n[0].length ? i.setCoordinates([n[0].concat([n[0][0]])], this.geometryLayout_) : i.setCoordinates([], this.geometryLayout_)) : i.setCoordinates(n, this.geometryLayout_)) : (i = new e(n, this.geometryLayout_)), i));
					}
				}
				(this.geometryFunction_ = n),
					(this.dragVertexDelay_ = void 0 !== t.dragVertexDelay ? t.dragVertexDelay : 500),
					(this.finishCoordinate_ = null),
					(this.sketchFeature_ = null),
					(this.sketchPoint_ = null),
					(this.sketchCoords_ = null),
					(this.sketchLine_ = null),
					(this.sketchLineCoords_ = null),
					(this.squaredClickTolerance_ = t.clickTolerance ? t.clickTolerance * t.clickTolerance : 36),
					(this.overlay_ = new Rg({ source: new rc({ useSpatialIndex: !1, wrapX: !!t.wrapX && t.wrapX }), style: t.style ? t.style : ux(), updateWhileInteracting: !0 })),
					(this.geometryName_ = t.geometryName),
					(this.condition_ = t.condition ? t.condition : xf),
					this.freehandCondition_,
					t.freehand ? (this.freehandCondition_ = pf) : (this.freehandCondition_ = t.freehandCondition ? t.freehandCondition : vf),
					this.traceCondition_,
					this.setTrace(t.trace || !1),
					(this.traceState_ = { active: !1 }),
					(this.traceSource_ = t.traceSource || t.source || null),
					this.addChangeListener(lf, this.updateState_);
			}
			setTrace(t) {
				let e;
				(e = t ? (!0 === t ? pf : t) : _f), (this.traceCondition_ = e);
			}
			setMap(t) {
				super.setMap(t), this.updateState_();
			}
			getOverlay() {
				return this.overlay_;
			}
			handleEvent(t) {
				t.originalEvent.type === Hn && t.originalEvent.preventDefault(), (this.freehand_ = 'Point' !== this.mode_ && this.freehandCondition_(t));
				let e = t.type === Ng.POINTERMOVE,
					n = !0;
				if (!this.freehand_ && this.lastDragTime_ && t.type === Ng.POINTERDRAG) {
					Date.now() - this.lastDragTime_ >= this.dragVertexDelay_ ? ((this.downPx_ = t.pixel), (this.shouldHandle_ = !this.freehand_), (e = !0)) : (this.lastDragTime_ = void 0), this.shouldHandle_ && void 0 !== this.downTimeout_ && (clearTimeout(this.downTimeout_), (this.downTimeout_ = void 0));
				}
				return this.freehand_ && t.type === Ng.POINTERDRAG && null !== this.sketchFeature_ ? (this.addToDrawing_(t.coordinate), (n = !1)) : this.freehand_ && t.type === Ng.POINTERDOWN ? (n = !1) : e && this.getPointerCount() < 2 ? ((n = t.type === Ng.POINTERMOVE), n && this.freehand_ ? (this.handlePointerMove_(t), this.shouldHandle_ && t.originalEvent.preventDefault()) : ('mouse' === t.originalEvent.pointerType || (t.type === Ng.POINTERDRAG && void 0 === this.downTimeout_)) && this.handlePointerMove_(t)) : t.type === Ng.DBLCLICK && (n = !1), super.handleEvent(t) && n;
			}
			handleDownEvent(t) {
				return (
					(this.shouldHandle_ = !this.freehand_),
					this.freehand_
						? ((this.downPx_ = t.pixel), this.finishCoordinate_ || this.startDrawing_(t.coordinate), !0)
						: this.condition_(t)
						? ((this.lastDragTime_ = Date.now()),
						  (this.downTimeout_ = setTimeout(() => {
								this.handlePointerMove_(new jg(Ng.POINTERMOVE, t.map, t.originalEvent, !1, t.frameState));
						  }, this.dragVertexDelay_)),
						  (this.downPx_ = t.pixel),
						  !0)
						: ((this.lastDragTime_ = void 0), !1)
				);
			}
			deactivateTrace_() {
				this.traceState_ = { active: !1 };
			}
			toggleTraceState_(t) {
				if (!this.traceSource_ || !this.traceCondition_(t)) return;
				if (this.traceState_.active) return void this.deactivateTrace_();
				const e = this.getMap(),
					n = ki([e.getCoordinateFromPixel([t.pixel[0] - this.snapTolerance_, t.pixel[1] + this.snapTolerance_]), e.getCoordinateFromPixel([t.pixel[0] + this.snapTolerance_, t.pixel[1] - this.snapTolerance_])]),
					i = this.traceSource_.getFeaturesInExtent(n);
				if (0 === i.length) return;
				const r = (function (t, e) {
					const n = [];
					for (let i = 0; i < e.length; ++i) sx(t, e[i].getGeometry(), n);
					return n;
				})(t.coordinate, i);
				r.length && (this.traceState_ = { active: !0, startPx: t.pixel.slice(), targets: r, targetIndex: -1 });
			}
			addOrRemoveTracedCoordinates_(t, e) {
				const n = t.startIndex <= t.endIndex;
				n === t.startIndex <= e ? ((n && e > t.endIndex) || (!n && e < t.endIndex) ? this.addTracedCoordinates_(t, t.endIndex, e) : ((n && e < t.endIndex) || (!n && e > t.endIndex)) && this.removeTracedCoordinates_(e, t.endIndex)) : (this.removeTracedCoordinates_(t.startIndex, t.endIndex), this.addTracedCoordinates_(t, t.startIndex, e));
			}
			removeTracedCoordinates_(t, e) {
				if (t === e) return;
				let n = 0;
				if (t < e) {
					const i = Math.ceil(t);
					let r = Math.floor(e);
					r === e && (r -= 1), (n = r - i + 1);
				} else {
					const i = Math.floor(t);
					let r = Math.ceil(e);
					r === e && (r += 1), (n = i - r + 1);
				}
				n > 0 && this.removeLastPoints_(n);
			}
			addTracedCoordinates_(t, e, n) {
				if (e === n) return;
				const i = [];
				if (e < n) {
					const r = Math.ceil(e);
					let s = Math.floor(n);
					s === n && (s -= 1);
					for (let e = r; e <= s; ++e) i.push(ix(t.coordinates, e));
				} else {
					const r = Math.floor(e);
					let s = Math.ceil(n);
					s === n && (s += 1);
					for (let e = r; e >= s; --e) i.push(ix(t.coordinates, e));
				}
				i.length && this.appendCoordinates(i);
			}
			updateTrace_(t) {
				const e = this.traceState_;
				if (!e.active) return;
				if (-1 === e.targetIndex && es(e.startPx, t.pixel) < this.snapTolerance_) return;
				const n = (function (t, e, n, i) {
					const r = t[0],
						s = t[1];
					let o = 1 / 0,
						a = -1,
						l = NaN;
					for (let t = 0; t < e.targets.length; ++t) {
						const n = e.targets[t],
							i = n.coordinates;
						let h,
							c = 1 / 0;
						for (let t = 0; t < i.length - 1; ++t) {
							const e = hx(r, s, i[t], i[t + 1]);
							e.squaredDistance < c && ((c = e.squaredDistance), (h = t + e.along));
						}
						c < o && ((o = c), n.ring && e.targetIndex === t && (n.endIndex > n.startIndex ? h < n.startIndex && (h += i.length) : n.endIndex < n.startIndex && h > n.startIndex && (h -= i.length)), (l = h), (a = t));
					}
					const h = e.targets[a];
					let c = h.ring;
					if (e.targetIndex === a && c) {
						const t = cx(h.coordinates, l);
						es(n.getPixelFromCoordinate(t), e.startPx) > i && (c = !1);
					}
					if (c) {
						const t = h.coordinates,
							e = t.length,
							n = h.startIndex,
							i = l;
						if (n < i) {
							const r = rx(t, n, i);
							rx(t, n, i - e) < r && (l -= e);
						} else {
							const r = rx(t, n, i);
							rx(t, n, i + e) < r && (l += e);
						}
					}
					return (ox.index = a), (ox.endIndex = l), ox;
				})(t.coordinate, e, this.getMap(), this.snapTolerance_);
				if (e.targetIndex !== n.index) {
					if (-1 !== e.targetIndex) {
						const t = e.targets[e.targetIndex];
						this.removeTracedCoordinates_(t.startIndex, t.endIndex);
					}
					const t = e.targets[n.index];
					this.addTracedCoordinates_(t, t.startIndex, n.endIndex);
				} else {
					const t = e.targets[e.targetIndex];
					this.addOrRemoveTracedCoordinates_(t, n.endIndex);
				}
				e.targetIndex = n.index;
				const i = e.targets[e.targetIndex];
				i.endIndex = n.endIndex;
				const r = cx(i.coordinates, i.endIndex),
					s = this.getMap().getPixelFromCoordinate(r);
				(t.coordinate = r), (t.pixel = [Math.round(s[0]), Math.round(s[1])]);
			}
			handleUpEvent(t) {
				let e = !0;
				if (0 === this.getPointerCount()) {
					this.downTimeout_ && (clearTimeout(this.downTimeout_), (this.downTimeout_ = void 0)), this.handlePointerMove_(t);
					const n = this.traceState_.active;
					if ((this.toggleTraceState_(t), this.shouldHandle_)) {
						const i = !this.finishCoordinate_;
						i && this.startDrawing_(t.coordinate), !i && this.freehand_ ? this.finishDrawing() : this.freehand_ || (i && 'Point' !== this.mode_) || (this.atFinish_(t.pixel, n) ? this.finishCondition_(t) && this.finishDrawing() : this.addToDrawing_(t.coordinate)), (e = !1);
					} else this.freehand_ && this.abortDrawing();
				}
				return !e && this.stopClick_ && t.preventDefault(), e;
			}
			handlePointerMove_(t) {
				if (((this.pointerType_ = t.originalEvent.pointerType), this.downPx_ && ((!this.freehand_ && this.shouldHandle_) || (this.freehand_ && !this.shouldHandle_)))) {
					const e = this.downPx_,
						n = t.pixel,
						i = e[0] - n[0],
						r = e[1] - n[1],
						s = i * i + r * r;
					if (((this.shouldHandle_ = this.freehand_ ? s > this.squaredClickTolerance_ : s <= this.squaredClickTolerance_), !this.shouldHandle_)) return;
				}
				this.finishCoordinate_ ? (this.updateTrace_(t), this.modifyDrawing_(t.coordinate)) : this.createOrUpdateSketchPoint_(t.coordinate.slice());
			}
			atFinish_(t, e) {
				let n = !1;
				if (this.sketchFeature_) {
					let i = !1,
						r = [this.finishCoordinate_];
					const s = this.mode_;
					if ('Point' === s) n = !0;
					else if ('Circle' === s) n = 2 === this.sketchCoords_.length;
					else if ('LineString' === s) i = !e && this.sketchCoords_.length > this.minPoints_;
					else if ('Polygon' === s) {
						const t = this.sketchCoords_;
						(i = t[0].length > this.minPoints_), (r = [t[0][0], t[0][t[0].length - 2]]), (r = e ? [t[0][0]] : [t[0][0], t[0][t[0].length - 2]]);
					}
					if (i) {
						const e = this.getMap();
						for (let i = 0, s = r.length; i < s; i++) {
							const s = r[i],
								o = e.getPixelFromCoordinate(s),
								a = t[0] - o[0],
								l = t[1] - o[1],
								h = this.freehand_ ? 1 : this.snapTolerance_;
							if (((n = Math.sqrt(a * a + l * l) <= h), n)) {
								this.finishCoordinate_ = s;
								break;
							}
						}
					}
				}
				return n;
			}
			createOrUpdateSketchPoint_(t) {
				if (this.sketchPoint_) {
					this.sketchPoint_.getGeometry().setCoordinates(t);
				} else (this.sketchPoint_ = new Ei(new ya(t))), this.updateSketchFeatures_();
			}
			createOrUpdateCustomSketchLine_(t) {
				this.sketchLine_ || (this.sketchLine_ = new Ei());
				const e = t.getLinearRing(0);
				let n = this.sketchLine_.getGeometry();
				n ? (n.setFlatCoordinates(e.getLayout(), e.getFlatCoordinates()), n.changed()) : ((n = new ma(e.getFlatCoordinates(), e.getLayout())), this.sketchLine_.setGeometry(n));
			}
			startDrawing_(t) {
				const e = this.getMap().getView().getProjection(),
					n = Xo(this.geometryLayout_);
				for (; t.length < n; ) t.push(0);
				(this.finishCoordinate_ = t), 'Point' === this.mode_ ? (this.sketchCoords_ = t.slice()) : 'Polygon' === this.mode_ ? ((this.sketchCoords_ = [[t.slice(), t.slice()]]), (this.sketchLineCoords_ = this.sketchCoords_[0])) : (this.sketchCoords_ = [t.slice(), t.slice()]), this.sketchLineCoords_ && (this.sketchLine_ = new Ei(new ma(this.sketchLineCoords_)));
				const i = this.geometryFunction_(this.sketchCoords_, void 0, e);
				(this.sketchFeature_ = new Ei()), this.geometryName_ && this.sketchFeature_.setGeometryName(this.geometryName_), this.sketchFeature_.setGeometry(i), this.updateSketchFeatures_(), this.dispatchEvent(new ex(Jy, this.sketchFeature_));
			}
			modifyDrawing_(t) {
				const e = this.getMap(),
					n = this.sketchFeature_.getGeometry(),
					i = e.getView().getProjection(),
					r = Xo(this.geometryLayout_);
				let s, o;
				for (; t.length < r; ) t.push(0);
				if (('Point' === this.mode_ ? (o = this.sketchCoords_) : 'Polygon' === this.mode_ ? ((s = this.sketchCoords_[0]), (o = s[s.length - 1]), this.atFinish_(e.getPixelFromCoordinate(t)) && (t = this.finishCoordinate_.slice())) : ((s = this.sketchCoords_), (o = s[s.length - 1])), (o[0] = t[0]), (o[1] = t[1]), this.geometryFunction_(this.sketchCoords_, n, i), this.sketchPoint_)) {
					this.sketchPoint_.getGeometry().setCoordinates(t);
				}
				if ('Polygon' === n.getType() && 'Polygon' !== this.mode_) this.createOrUpdateCustomSketchLine_(n);
				else if (this.sketchLineCoords_) {
					this.sketchLine_.getGeometry().setCoordinates(this.sketchLineCoords_);
				}
				this.updateSketchFeatures_();
			}
			addToDrawing_(t) {
				const e = this.sketchFeature_.getGeometry(),
					n = this.getMap().getView().getProjection();
				let i, r;
				const s = this.mode_;
				return 'LineString' === s || 'Circle' === s ? ((this.finishCoordinate_ = t.slice()), (r = this.sketchCoords_), r.length >= this.maxPoints_ && (this.freehand_ ? r.pop() : (i = !0)), r.push(t.slice()), this.geometryFunction_(r, e, n)) : 'Polygon' === s && ((r = this.sketchCoords_[0]), r.length >= this.maxPoints_ && (this.freehand_ ? r.pop() : (i = !0)), r.push(t.slice()), i && (this.finishCoordinate_ = r[0]), this.geometryFunction_(this.sketchCoords_, e, n)), this.createOrUpdateSketchPoint_(t.slice()), this.updateSketchFeatures_(), i ? this.finishDrawing() : this.sketchFeature_;
			}
			removeLastPoints_(t) {
				if (!this.sketchFeature_) return;
				const e = this.sketchFeature_.getGeometry(),
					n = this.getMap().getView().getProjection(),
					i = this.mode_;
				for (let r = 0; r < t; ++r) {
					let t;
					if ('LineString' === i || 'Circle' === i) {
						if (((t = this.sketchCoords_), t.splice(-2, 1), t.length >= 2)) {
							this.finishCoordinate_ = t[t.length - 2].slice();
							const e = this.finishCoordinate_.slice();
							(t[t.length - 1] = e), this.createOrUpdateSketchPoint_(e);
						}
						this.geometryFunction_(t, e, n), 'Polygon' === e.getType() && this.sketchLine_ && this.createOrUpdateCustomSketchLine_(e);
					} else if ('Polygon' === i) {
						(t = this.sketchCoords_[0]), t.splice(-2, 1);
						const i = this.sketchLine_.getGeometry();
						if (t.length >= 2) {
							const e = t[t.length - 2].slice();
							(t[t.length - 1] = e), this.createOrUpdateSketchPoint_(e);
						}
						i.setCoordinates(t), this.geometryFunction_(this.sketchCoords_, e, n);
					}
					if (1 === t.length) {
						this.abortDrawing();
						break;
					}
				}
				this.updateSketchFeatures_();
			}
			removeLastPoint() {
				this.removeLastPoints_(1);
			}
			finishDrawing() {
				const t = this.abortDrawing_();
				if (!t) return null;
				let e = this.sketchCoords_;
				const n = t.getGeometry(),
					i = this.getMap().getView().getProjection();
				return 'LineString' === this.mode_ ? (e.pop(), this.geometryFunction_(e, n, i)) : 'Polygon' === this.mode_ && (e[0].pop(), this.geometryFunction_(e, n, i), (e = n.getCoordinates())), 'MultiPoint' === this.type_ ? t.setGeometry(new xa([e])) : 'MultiLineString' === this.type_ ? t.setGeometry(new _a([e])) : 'MultiPolygon' === this.type_ && t.setGeometry(new Sa([e])), this.dispatchEvent(new ex(Qy, t)), this.features_ && this.features_.push(t), this.source_ && this.source_.addFeature(t), t;
			}
			abortDrawing_() {
				this.finishCoordinate_ = null;
				const t = this.sketchFeature_;
				return (this.sketchFeature_ = null), (this.sketchPoint_ = null), (this.sketchLine_ = null), this.overlay_.getSource().clear(!0), this.deactivateTrace_(), t;
			}
			abortDrawing() {
				const t = this.abortDrawing_();
				t && this.dispatchEvent(new ex(tx, t));
			}
			appendCoordinates(t) {
				const e = this.mode_,
					n = !this.sketchFeature_;
				let i;
				if ((n && this.startDrawing_(t[0]), 'LineString' === e || 'Circle' === e)) i = this.sketchCoords_;
				else {
					if ('Polygon' !== e) return;
					i = this.sketchCoords_ && this.sketchCoords_.length ? this.sketchCoords_[0] : [];
				}
				n && i.shift(), i.pop();
				for (let e = 0; e < t.length; e++) this.addToDrawing_(t[e]);
				const r = t[t.length - 1];
				(this.sketchFeature_ = this.addToDrawing_(r)), this.modifyDrawing_(r);
			}
			extend(t) {
				const e = t.getGeometry();
				(this.sketchFeature_ = t), (this.sketchCoords_ = e.getCoordinates());
				const n = this.sketchCoords_[this.sketchCoords_.length - 1];
				(this.finishCoordinate_ = n.slice()), this.sketchCoords_.push(n.slice()), (this.sketchPoint_ = new Ei(new ya(n))), this.updateSketchFeatures_(), this.dispatchEvent(new ex(Jy, this.sketchFeature_));
			}
			updateSketchFeatures_() {
				const t = [];
				this.sketchFeature_ && t.push(this.sketchFeature_), this.sketchLine_ && t.push(this.sketchLine_), this.sketchPoint_ && t.push(this.sketchPoint_);
				const e = this.overlay_.getSource();
				e.clear(!0), e.addFeatures(t);
			}
			updateState_() {
				const t = this.getMap(),
					e = this.getActive();
				(t && e) || this.abortDrawing(), this.overlay_.setMap(e ? t : null);
			}
		},
		Extent: class extends Cf {
			constructor(t) {
				super((t = t || {})),
					this.on,
					this.once,
					this.un,
					(this.condition_ = t.condition ? t.condition : pf),
					(this.extent_ = null),
					(this.pointerHandler_ = null),
					(this.pixelTolerance_ = void 0 !== t.pixelTolerance ? t.pixelTolerance : 10),
					(this.snappedToVertex_ = !1),
					(this.extentFeature_ = null),
					(this.vertexFeature_ = null),
					t || (t = {}),
					(this.extentOverlay_ = new Rg({ source: new rc({ useSpatialIndex: !1, wrapX: !!t.wrapX }), style: t.boxStyle ? t.boxStyle : fx(), updateWhileAnimating: !0, updateWhileInteracting: !0 })),
					(this.vertexOverlay_ = new Rg({ source: new rc({ useSpatialIndex: !1, wrapX: !!t.wrapX }), style: t.pointerStyle ? t.pointerStyle : px(), updateWhileAnimating: !0, updateWhileInteracting: !0 })),
					t.extent && this.setExtent(t.extent);
			}
			snapToVertex_(t, e) {
				const n = e.getCoordinateFromPixelInternal(t),
					i = function (t, e) {
						return ns(n, t) - ns(n, e);
					},
					r = this.getExtentInternal();
				if (r) {
					const s = (function (t) {
						return [
							[
								[t[0], t[1]],
								[t[0], t[3]],
							],
							[
								[t[0], t[3]],
								[t[2], t[3]],
							],
							[
								[t[2], t[3]],
								[t[2], t[1]],
							],
							[
								[t[2], t[1]],
								[t[0], t[1]],
							],
						];
					})(r);
					s.sort(i);
					const o = s[0];
					let a = Hr(n, o);
					const l = e.getPixelFromCoordinateInternal(a);
					if (es(t, l) <= this.pixelTolerance_) {
						const t = e.getPixelFromCoordinateInternal(o[0]),
							n = e.getPixelFromCoordinateInternal(o[1]),
							i = ts(l, t),
							r = ts(l, n),
							s = Math.sqrt(Math.min(i, r));
						return (this.snappedToVertex_ = s <= this.pixelTolerance_), this.snappedToVertex_ && (a = i > r ? o[1] : o[0]), a;
					}
				}
				return null;
			}
			handlePointerMove_(t) {
				const e = t.pixel,
					n = t.map;
				let i = this.snapToVertex_(e, n);
				i || (i = n.getCoordinateFromPixelInternal(e)), this.createOrUpdatePointerFeature_(i);
			}
			createOrUpdateExtentFeature_(t) {
				let e = this.extentFeature_;
				return e ? (t ? e.setGeometry(wa(t)) : e.setGeometry(void 0)) : ((e = new Ei(t ? wa(t) : {})), (this.extentFeature_ = e), this.extentOverlay_.getSource().addFeature(e)), e;
			}
			createOrUpdatePointerFeature_(t) {
				let e = this.vertexFeature_;
				if (e) {
					e.getGeometry().setCoordinates(t);
				} else (e = new Ei(new ya(t))), (this.vertexFeature_ = e), this.vertexOverlay_.getSource().addFeature(e);
				return e;
			}
			handleEvent(t) {
				return !t.originalEvent || !this.condition_(t) || (t.type != Ng.POINTERMOVE || this.handlingDownUpSequence || this.handlePointerMove_(t), super.handleEvent(t), !1);
			}
			handleDownEvent(t) {
				const e = t.pixel,
					n = t.map,
					i = this.getExtentInternal();
				let r = this.snapToVertex_(e, n);
				const s = function (t) {
					let e = null,
						n = null;
					return t[0] == i[0] ? (e = i[2]) : t[0] == i[2] && (e = i[0]), t[1] == i[1] ? (n = i[3]) : t[1] == i[3] && (n = i[1]), null !== e && null !== n ? [e, n] : null;
				};
				if (r && i) {
					const t = r[0] == i[0] || r[0] == i[2] ? r[0] : null,
						e = r[1] == i[1] || r[1] == i[3] ? r[1] : null;
					null !== t && null !== e ? (this.pointerHandler_ = mx(s(r))) : null !== t ? (this.pointerHandler_ = _x(s([t, i[1]]), s([t, i[3]]))) : null !== e && (this.pointerHandler_ = _x(s([i[0], e]), s([i[2], e])));
				} else (r = n.getCoordinateFromPixelInternal(e)), this.setExtent([r[0], r[1], r[0], r[1]]), (this.pointerHandler_ = mx(r));
				return !0;
			}
			handleDragEvent(t) {
				if (this.pointerHandler_) {
					const e = t.coordinate;
					this.setExtent(this.pointerHandler_(e)), this.createOrUpdatePointerFeature_(e);
				}
			}
			handleUpEvent(t) {
				this.pointerHandler_ = null;
				const e = this.getExtentInternal();
				return (e && 0 !== Hi(e)) || this.setExtent(null), !1;
			}
			setMap(t) {
				this.extentOverlay_.setMap(t), this.vertexOverlay_.setMap(t), super.setMap(t);
			}
			getExtent() {
				return To(this.getExtentInternal(), this.getMap().getView().getProjection());
			}
			getExtentInternal() {
				return this.extent_;
			}
			setExtent(t) {
				(this.extent_ = t || null), this.createOrUpdateExtentFeature_(t), this.dispatchEvent(new gx(this.extent_));
			}
		},
		Interaction: hf,
		KeyboardPan: Nf,
		KeyboardZoom: Uf,
		Link: class extends hf {
			constructor(t) {
				let e;
				super(), (e = !0 === (t = Object.assign({ animate: !0, params: ['x', 'y', 'z', 'r', 'l'], replace: !1, prefix: '' }, t || {})).animate ? { duration: 250 } : t.animate ? t.animate : null), (this.animationOptions_ = e), (this.params_ = t.params.reduce((t, e) => ((t[e] = !0), t), {})), (this.replace_ = t.replace), (this.prefix_ = t.prefix), (this.listenerKeys_ = []), (this.initial_ = !0), (this.updateState_ = this.updateState_.bind(this)), (this.trackedCallbacks_ = {}), (this.trackedValues_ = {});
			}
			getParamName_(t) {
				return this.prefix_ ? this.prefix_ + t : t;
			}
			get_(t, e) {
				return t.get(this.getParamName_(e));
			}
			set_(t, e, n) {
				e in this.params_ && t.set(this.getParamName_(e), n);
			}
			delete_(t, e) {
				e in this.params_ && t.delete(this.getParamName_(e));
			}
			setMap(t) {
				const e = this.getMap();
				super.setMap(t), t !== e && (e && this.unregisterListeners_(e), t && ((this.initial_ = !0), this.updateState_(), this.registerListeners_(t)));
			}
			registerListeners_(t) {
				this.listenerKeys_.push(gi(t, Xg, this.updateUrl_, this), gi(t.getLayerGroup(), Kn, this.updateUrl_, this), gi(t, 'change:layergroup', this.handleChangeLayerGroup_, this)), this.replace_ || addEventListener('popstate', this.updateState_);
			}
			unregisterListeners_(t) {
				for (let t = 0, e = this.listenerKeys_.length; t < e; ++t) pi(this.listenerKeys_[t]);
				(this.listenerKeys_.length = 0), this.replace_ || removeEventListener('popstate', this.updateState_);
				const e = new URL(window.location.href),
					n = e.searchParams;
				this.delete_(n, 'x'), this.delete_(n, 'y'), this.delete_(n, 'z'), this.delete_(n, 'r'), this.delete_(n, 'l'), window.history.replaceState(null, '', e);
			}
			handleChangeLayerGroup_() {
				const t = this.getMap();
				t && (this.unregisterListeners_(t), this.registerListeners_(t), (this.initial_ = !0), this.updateUrl_());
			}
			updateState_() {
				const t = new URL(window.location.href).searchParams;
				for (const e in this.trackedCallbacks_) {
					const n = t.get(e);
					e in this.trackedCallbacks_ && n !== this.trackedValues_[e] && ((this.trackedValues_[e] = n), this.trackedCallbacks_[e](n));
				}
				const e = this.getMap();
				if (!e) return;
				const n = e.getView();
				if (!n) return;
				let i = !1;
				const r = {},
					s = yx(this.get_(t, 'z'));
				'z' in this.params_ && vx(s, n.getZoom()) && ((i = !0), (r.zoom = s));
				const o = yx(this.get_(t, 'r'));
				'r' in this.params_ && vx(o, n.getRotation()) && ((i = !0), (r.rotation = o));
				const a = [yx(this.get_(t, 'x')), yx(this.get_(t, 'y'))];
				var l, h;
				('x' in this.params_ || 'y' in this.params_) && ((l = a), (h = n.getCenter()), vx(l[0], h[0]) || vx(l[1], h[1])) && ((i = !0), (r.center = a)), i && (!this.initial_ && this.animationOptions_ ? n.animate(Object.assign(r, this.animationOptions_)) : (r.center && n.setCenter(r.center), 'zoom' in r && n.setZoom(r.zoom), 'rotation' in r && n.setRotation(r.rotation)));
				const c = e.getAllLayers(),
					u = this.get_(t, 'l');
				if ('l' in this.params_ && u && u.length === c.length)
					for (let t = 0, e = c.length; t < e; ++t) {
						const e = parseInt(u[t]);
						if (!isNaN(e)) {
							const n = Boolean(e),
								i = c[t];
							i.getVisible() !== n && i.setVisible(n);
						}
					}
			}
			track(t, e) {
				this.trackedCallbacks_[t] = e;
				const n = new URL(window.location.href).searchParams.get(t);
				return (this.trackedValues_[t] = n), n;
			}
			update(t, e) {
				const n = new URL(window.location.href),
					i = n.searchParams;
				null === e ? i.delete(t) : i.set(t, e), t in this.trackedValues_ && (this.trackedValues_[t] = e), this.updateHistory_(n);
			}
			updateUrl_() {
				const t = this.getMap();
				if (!t) return;
				const e = t.getView();
				if (!e) return;
				const n = e.getCenter(),
					i = e.getZoom(),
					r = e.getRotation(),
					s = t.getAllLayers(),
					o = new Array(s.length);
				for (let t = 0, e = s.length; t < e; ++t) o[t] = s[t].getVisible() ? '1' : '0';
				const a = new URL(window.location.href),
					l = a.searchParams;
				this.set_(l, 'x', xx(n[0])), this.set_(l, 'y', xx(n[1])), this.set_(l, 'z', xx(i)), this.set_(l, 'r', xx(r)), this.set_(l, 'l', o.join('')), this.updateHistory_(a), (this.initial_ = !1);
			}
			updateHistory_(t) {
				t.href !== window.location.href && (this.initial_ || this.replace_ ? window.history.replaceState(history.state, '', t) : window.history.pushState(null, '', t));
			}
		},
		Modify: class extends Cf {
			constructor(t) {
				let e;
				if (
					(super(t),
					this.on,
					this.once,
					this.un,
					(this.boundHandleFeatureChange_ = this.handleFeatureChange_.bind(this)),
					(this.condition_ = t.condition ? t.condition : Sf),
					(this.defaultDeleteCondition_ = function (t) {
						return (
							(function (t) {
								const e = t.originalEvent;
								return e.altKey && !(e.metaKey || e.ctrlKey) && !e.shiftKey;
							})(t) && yf(t)
						);
					}),
					(this.deleteCondition_ = t.deleteCondition ? t.deleteCondition : this.defaultDeleteCondition_),
					(this.insertVertexCondition_ = t.insertVertexCondition ? t.insertVertexCondition : pf),
					(this.vertexFeature_ = null),
					(this.vertexSegments_ = null),
					(this.lastPixel_ = [0, 0]),
					(this.ignoreNextSingleClick_ = !1),
					(this.featuresBeingModified_ = null),
					(this.rBush_ = new qh()),
					(this.pixelTolerance_ = void 0 !== t.pixelTolerance ? t.pixelTolerance : 10),
					(this.snappedToVertex_ = !1),
					(this.changingFeature_ = !1),
					(this.dragSegments_ = []),
					(this.overlay_ = new Rg({ source: new rc({ useSpatialIndex: !1, wrapX: !!t.wrapX }), style: t.style ? t.style : Fx(), updateWhileAnimating: !0, updateWhileInteracting: !0 })),
					(this.SEGMENT_WRITERS_ = { Point: this.writePointGeometry_.bind(this), LineString: this.writeLineStringGeometry_.bind(this), LinearRing: this.writeLineStringGeometry_.bind(this), Polygon: this.writePolygonGeometry_.bind(this), MultiPoint: this.writeMultiPointGeometry_.bind(this), MultiLineString: this.writeMultiLineStringGeometry_.bind(this), MultiPolygon: this.writeMultiPolygonGeometry_.bind(this), Circle: this.writeCircleGeometry_.bind(this), GeometryCollection: this.writeGeometryCollectionGeometry_.bind(this) }),
					(this.source_ = null),
					(this.hitDetection_ = null),
					t.features ? (e = t.features) : t.source && ((this.source_ = t.source), (e = new dh(this.source_.getFeatures())), this.source_.addEventListener(Yh, this.handleSourceAdd_.bind(this)), this.source_.addEventListener(Qh, this.handleSourceRemove_.bind(this))),
					!e)
				)
					throw new Error('The modify interaction requires features, a source or a layer');
				t.hitDetection && (this.hitDetection_ = t.hitDetection), (this.features_ = e), this.features_.forEach(this.addFeature_.bind(this)), this.features_.addEventListener(lh, this.handleFeatureAdd_.bind(this)), this.features_.addEventListener(hh, this.handleFeatureRemove_.bind(this)), (this.lastPointerEvent_ = null), (this.delta_ = [0, 0]), (this.snapToPointer_ = void 0 === t.snapToPointer ? !this.hitDetection_ : t.snapToPointer);
			}
			addFeature_(t) {
				const e = t.getGeometry();
				if (e) {
					const n = this.SEGMENT_WRITERS_[e.getType()];
					n && n(t, e);
				}
				const n = this.getMap();
				n && n.isRendered() && this.getActive() && this.handlePointerAtPixel_(n.getCoordinateFromPixel(this.lastPixel_)), t.addEventListener(Kn, this.boundHandleFeatureChange_);
			}
			willModifyFeatures_(t, e) {
				if (!this.featuresBeingModified_) {
					this.featuresBeingModified_ = new dh();
					const n = this.featuresBeingModified_.getArray();
					for (let t = 0, i = e.length; t < i; ++t) {
						const i = e[t].feature;
						i && !n.includes(i) && this.featuresBeingModified_.push(i);
					}
					0 === this.featuresBeingModified_.getLength() ? (this.featuresBeingModified_ = null) : this.dispatchEvent(new Ex(Sx, this.featuresBeingModified_, t));
				}
			}
			removeFeature_(t) {
				this.removeFeatureSegmentData_(t), this.vertexFeature_ && 0 === this.features_.getLength() && (this.overlay_.getSource().removeFeature(this.vertexFeature_), (this.vertexFeature_ = null)), t.removeEventListener(Kn, this.boundHandleFeatureChange_);
			}
			removeFeatureSegmentData_(t) {
				const e = this.rBush_,
					n = [];
				e.forEach(function (e) {
					t === e.feature && n.push(e);
				});
				for (let t = n.length - 1; t >= 0; --t) {
					const i = n[t];
					for (let t = this.dragSegments_.length - 1; t >= 0; --t) this.dragSegments_[t][0] === i && this.dragSegments_.splice(t, 1);
					e.remove(i);
				}
			}
			setActive(t) {
				this.vertexFeature_ && !t && (this.overlay_.getSource().removeFeature(this.vertexFeature_), (this.vertexFeature_ = null)), super.setActive(t);
			}
			setMap(t) {
				this.overlay_.setMap(t), super.setMap(t);
			}
			getOverlay() {
				return this.overlay_;
			}
			handleSourceAdd_(t) {
				t.feature && this.features_.push(t.feature);
			}
			handleSourceRemove_(t) {
				t.feature && this.features_.remove(t.feature);
			}
			handleFeatureAdd_(t) {
				this.addFeature_(t.element);
			}
			handleFeatureChange_(t) {
				if (!this.changingFeature_) {
					const e = t.target;
					this.removeFeature_(e), this.addFeature_(e);
				}
			}
			handleFeatureRemove_(t) {
				this.removeFeature_(t.element);
			}
			writePointGeometry_(t, e) {
				const n = e.getCoordinates(),
					i = { feature: t, geometry: e, segment: [n, n] };
				this.rBush_.insert(e.getExtent(), i);
			}
			writeMultiPointGeometry_(t, e) {
				const n = e.getCoordinates();
				for (let i = 0, r = n.length; i < r; ++i) {
					const r = n[i],
						s = { feature: t, geometry: e, depth: [i], index: i, segment: [r, r] };
					this.rBush_.insert(e.getExtent(), s);
				}
			}
			writeLineStringGeometry_(t, e) {
				const n = e.getCoordinates();
				for (let i = 0, r = n.length - 1; i < r; ++i) {
					const r = n.slice(i, i + 2),
						s = { feature: t, geometry: e, index: i, segment: r };
					this.rBush_.insert(ki(r), s);
				}
			}
			writeMultiLineStringGeometry_(t, e) {
				const n = e.getCoordinates();
				for (let i = 0, r = n.length; i < r; ++i) {
					const r = n[i];
					for (let n = 0, s = r.length - 1; n < s; ++n) {
						const s = r.slice(n, n + 2),
							o = { feature: t, geometry: e, depth: [i], index: n, segment: s };
						this.rBush_.insert(ki(s), o);
					}
				}
			}
			writePolygonGeometry_(t, e) {
				const n = e.getCoordinates();
				for (let i = 0, r = n.length; i < r; ++i) {
					const r = n[i];
					for (let n = 0, s = r.length - 1; n < s; ++n) {
						const s = r.slice(n, n + 2),
							o = { feature: t, geometry: e, depth: [i], index: n, segment: s };
						this.rBush_.insert(ki(s), o);
					}
				}
			}
			writeMultiPolygonGeometry_(t, e) {
				const n = e.getCoordinates();
				for (let i = 0, r = n.length; i < r; ++i) {
					const r = n[i];
					for (let n = 0, s = r.length; n < s; ++n) {
						const s = r[n];
						for (let r = 0, o = s.length - 1; r < o; ++r) {
							const o = s.slice(r, r + 2),
								a = { feature: t, geometry: e, depth: [n, i], index: r, segment: o };
							this.rBush_.insert(ki(o), a);
						}
					}
				}
			}
			writeCircleGeometry_(t, e) {
				const n = e.getCenter(),
					i = { feature: t, geometry: e, index: 0, segment: [n, n] },
					r = { feature: t, geometry: e, index: 1, segment: [n, n] },
					s = [i, r];
				(i.featureSegments = s), (r.featureSegments = s), this.rBush_.insert(Bi(n), i);
				let o = e;
				const a = So();
				if (a && this.getMap()) {
					const t = this.getMap().getView().getProjection();
					(o = o.clone().transform(a, t)), (o = ba(o).transform(t, a));
				}
				this.rBush_.insert(o.getExtent(), r);
			}
			writeGeometryCollectionGeometry_(t, e) {
				const n = e.getGeometriesArray();
				for (let e = 0; e < n.length; ++e) {
					const i = n[e];
					(0, this.SEGMENT_WRITERS_[i.getType()])(t, i);
				}
			}
			createOrUpdateVertexFeature_(t, e, n, i) {
				let r = this.vertexFeature_;
				if (r) {
					r.getGeometry().setCoordinates(t);
				} else (r = new Ei(new ya(t))), (this.vertexFeature_ = r), this.overlay_.getSource().addFeature(r);
				return r.set('features', e), r.set('geometries', n), r.set('existing', i), r;
			}
			handleEvent(t) {
				if (!t.originalEvent) return !0;
				let e;
				return (this.lastPointerEvent_ = t), t.map.getView().getInteracting() || t.type != Ng.POINTERMOVE || this.handlingDownUpSequence || this.handlePointerMove_(t), this.vertexFeature_ && this.deleteCondition_(t) && (e = !(t.type != Ng.SINGLECLICK || !this.ignoreNextSingleClick_) || this.removePoint()), t.type == Ng.SINGLECLICK && (this.ignoreNextSingleClick_ = !1), super.handleEvent(t) && !e;
			}
			findInsertVerticesAndUpdateDragSegments_(t) {
				this.handlePointerAtPixel_(t), (this.dragSegments_.length = 0), (this.featuresBeingModified_ = null);
				const e = this.vertexFeature_;
				if (!e) return;
				const n = this.getMap().getView().getProjection(),
					i = [],
					r = e.getGeometry().getCoordinates(),
					s = ki([r]),
					o = this.rBush_.getInExtent(s),
					a = {};
				o.sort(Tx);
				for (let e = 0, s = o.length; e < s; ++e) {
					const s = o[e],
						l = s.segment;
					let h = wi(s.geometry);
					const c = s.depth;
					if ((c && (h += '-' + c.join('-')), a[h] || (a[h] = new Array(2)), 'Circle' !== s.geometry.getType() || 1 !== s.index))
						if (!Jr(l[0], r) || a[h][0])
							if (!Jr(l[1], r) || a[h][1]) !(wi(l) in this.vertexSegments_) || a[h][0] || a[h][1] || i.push(s);
							else {
								if (a[h][0] && 0 === a[h][0].index) {
									let t = s.geometry.getCoordinates();
									switch (s.geometry.getType()) {
										case 'LineString':
										case 'MultiLineString':
											continue;
										case 'MultiPolygon':
											t = t[c[1]];
										case 'Polygon':
											if (s.index !== t[c[0]].length - 2) continue;
									}
								}
								this.dragSegments_.push([s, 1]), (a[h][1] = s);
							}
						else this.dragSegments_.push([s, 0]), (a[h][0] = s);
					else {
						Jr(Rx(t, s, n), r) && !a[h][0] && (this.dragSegments_.push([s, 0]), (a[h][0] = s));
					}
				}
				return i;
			}
			handleDragEvent(t) {
				(this.ignoreNextSingleClick_ = !1),
					this.willModifyFeatures_(
						t,
						this.dragSegments_.map(([t]) => t)
					);
				const e = [t.coordinate[0] + this.delta_[0], t.coordinate[1] + this.delta_[1]],
					n = [],
					i = [];
				for (let r = 0, s = this.dragSegments_.length; r < s; ++r) {
					const s = this.dragSegments_[r],
						o = s[0],
						a = o.feature;
					n.includes(a) || n.push(a);
					const l = o.geometry;
					i.includes(l) || i.push(l);
					const h = o.depth;
					let c;
					const u = o.segment,
						d = s[1];
					for (; e.length < l.getStride(); ) e.push(u[d][e.length]);
					switch (l.getType()) {
						case 'Point':
							(c = e), (u[0] = e), (u[1] = e);
							break;
						case 'MultiPoint':
							(c = l.getCoordinates()), (c[o.index] = e), (u[0] = e), (u[1] = e);
							break;
						case 'LineString':
							(c = l.getCoordinates()), (c[o.index + d] = e), (u[d] = e);
							break;
						case 'MultiLineString':
						case 'Polygon':
							(c = l.getCoordinates()), (c[h[0]][o.index + d] = e), (u[d] = e);
							break;
						case 'MultiPolygon':
							(c = l.getCoordinates()), (c[h[1]][h[0]][o.index + d] = e), (u[d] = e);
							break;
						case 'Circle':
							const n = l;
							if (((u[0] = e), (u[1] = e), 0 === o.index)) (this.changingFeature_ = !0), n.setCenter(e), (this.changingFeature_ = !1);
							else {
								this.changingFeature_ = !0;
								const i = t.map.getView().getProjection();
								let r = es(Eo(n.getCenter(), i), Eo(e, i));
								const s = So();
								if (s) {
									const t = n.clone().transform(s, i);
									t.setRadius(r), (r = t.transform(i, s).getRadius());
								}
								n.setRadius(r), (this.changingFeature_ = !1);
							}
					}
					c && this.setGeometryCoordinates_(l, c);
				}
				this.createOrUpdateVertexFeature_(e, n, i, !0);
			}
			handleDownEvent(t) {
				if (!this.condition_(t)) return !1;
				const e = t.coordinate,
					n = this.findInsertVerticesAndUpdateDragSegments_(e);
				if (n?.length && this.insertVertexCondition_(t) && (this.willModifyFeatures_(t, n), this.vertexFeature_)) {
					const t = this.vertexFeature_.getGeometry().getCoordinates();
					for (let e = n.length - 1; e >= 0; --e) this.insertVertex_(n[e], t);
					this.ignoreNextSingleClick_ = !0;
				}
				return !!this.vertexFeature_;
			}
			handleUpEvent(t) {
				for (let e = this.dragSegments_.length - 1; e >= 0; --e) {
					const n = this.dragSegments_[e][0],
						i = n.geometry;
					if ('Circle' === i.getType()) {
						const e = i,
							r = e.getCenter(),
							s = n.featureSegments[0],
							o = n.featureSegments[1];
						(s.segment[0] = r), (s.segment[1] = r), (o.segment[0] = r), (o.segment[1] = r), this.rBush_.update(Bi(r), s);
						let a = e;
						const l = So();
						if (l) {
							const e = t.map.getView().getProjection();
							(a = a.clone().transform(l, e)), (a = ba(a).transform(e, l));
						}
						this.rBush_.update(a.getExtent(), o);
					} else this.rBush_.update(ki(n.segment), n);
				}
				return this.featuresBeingModified_ && (this.dispatchEvent(new Ex(Cx, this.featuresBeingModified_, t)), (this.featuresBeingModified_ = null)), !1;
			}
			handlePointerMove_(t) {
				(this.lastPixel_ = t.pixel), this.handlePointerAtPixel_(t.coordinate);
			}
			handlePointerAtPixel_(t) {
				const e = this.getMap(),
					n = e.getPixelFromCoordinate(t),
					i = e.getView().getProjection(),
					r = function (e, n) {
						return Px(t, e, i) - Px(t, n, i);
					};
				let s, o;
				if (this.hitDetection_) {
					const t = 'object' == typeof this.hitDetection_ ? (t) => t === this.hitDetection_ : void 0;
					e.forEachFeatureAtPixel(
						n,
						(t, e, n) => {
							n && 'Point' === n.getType() && (n = new ya(Co(n.getCoordinates(), i)));
							const r = n || t.getGeometry();
							if (r && 'Point' === r.getType() && t instanceof Ei && this.features_.getArray().includes(t)) {
								o = r;
								const e = t.getGeometry().getFlatCoordinates().slice(0, 2);
								s = [{ feature: t, geometry: o, segment: [e, e] }];
							}
							return !0;
						},
						{ layerFilter: t }
					);
				}
				if (!s) {
					const n = To(Li(Po(Bi(t, wx), i), e.getView().getResolution() * this.pixelTolerance_, wx), i);
					s = this.rBush_.getInExtent(n);
				}
				if (s && s.length > 0) {
					const a = s.sort(r)[0],
						l = a.segment;
					let h = Rx(t, a, i);
					const c = e.getPixelFromCoordinate(h);
					let u = es(n, c);
					if (o || u <= this.pixelTolerance_) {
						const n = {};
						if (((n[wi(l)] = !0), this.snapToPointer_ || ((this.delta_[0] = h[0] - t[0]), (this.delta_[1] = h[1] - t[1])), 'Circle' === a.geometry.getType() && 1 === a.index)) (this.snappedToVertex_ = !0), this.createOrUpdateVertexFeature_(h, [a.feature], [a.geometry], this.snappedToVertex_);
						else {
							const t = e.getPixelFromCoordinate(l[0]),
								i = e.getPixelFromCoordinate(l[1]),
								r = ts(c, t),
								o = ts(c, i);
							if (((u = Math.sqrt(Math.min(r, o))), (this.snappedToVertex_ = u <= this.pixelTolerance_), !this.snappedToVertex_ && !this.insertVertexCondition_(this.lastPointerEvent_))) return void (this.vertexFeature_ && (this.overlay_.getSource().removeFeature(this.vertexFeature_), (this.vertexFeature_ = null)));
							this.snappedToVertex_ && (h = r > o ? l[1] : l[0]), this.createOrUpdateVertexFeature_(h, [a.feature], [a.geometry], this.snappedToVertex_);
							const d = {};
							d[wi(a.geometry)] = !0;
							for (let t = 1, e = s.length; t < e; ++t) {
								const e = s[t].segment;
								if (!((Jr(l[0], e[0]) && Jr(l[1], e[1])) || (Jr(l[0], e[1]) && Jr(l[1], e[0])))) break;
								{
									const i = wi(s[t].geometry);
									i in d || ((d[i] = !0), (n[wi(e)] = !0));
								}
							}
						}
						return void (this.vertexSegments_ = n);
					}
				}
				this.vertexFeature_ && (this.overlay_.getSource().removeFeature(this.vertexFeature_), (this.vertexFeature_ = null));
			}
			insertVertex_(t, e) {
				const n = t.segment,
					i = t.feature,
					r = t.geometry,
					s = t.depth,
					o = t.index;
				let a;
				for (; e.length < r.getStride(); ) e.push(0);
				switch (r.getType()) {
					case 'MultiLineString':
					case 'Polygon':
						(a = r.getCoordinates()), a[s[0]].splice(o + 1, 0, e);
						break;
					case 'MultiPolygon':
						(a = r.getCoordinates()), a[s[1]][s[0]].splice(o + 1, 0, e);
						break;
					case 'LineString':
						(a = r.getCoordinates()), a.splice(o + 1, 0, e);
						break;
					default:
						return !1;
				}
				this.setGeometryCoordinates_(r, a);
				const l = this.rBush_;
				l.remove(t), this.updateSegmentIndices_(r, o, s, 1);
				const h = { segment: [n[0], e], feature: i, geometry: r, depth: s, index: o };
				l.insert(ki(h.segment), h), this.dragSegments_.push([h, 1]);
				const c = { segment: [e, n[1]], feature: i, geometry: r, depth: s, index: o + 1 };
				return l.insert(ki(c.segment), c), this.dragSegments_.push([c, 0]), !0;
			}
			updatePointer_(t) {
				return t && this.findInsertVerticesAndUpdateDragSegments_(t), this.vertexFeature_?.getGeometry().getCoordinates();
			}
			getPoint() {
				const t = this.vertexFeature_?.getGeometry().getCoordinates();
				return t ? Co(t, this.getMap().getView().getProjection()) : null;
			}
			canRemovePoint() {
				if (!this.vertexFeature_) return !1;
				if (this.vertexFeature_.get('geometries').every((t) => 'Circle' === t.getType() || t.getType().endsWith('Point'))) return !1;
				const t = this.vertexFeature_.getGeometry().getCoordinates();
				return this.rBush_.getInExtent(ki([t])).some(({ segment: e }) => Jr(e[0], t) || Jr(e[1], t));
			}
			removePoint(t) {
				if ((t && ((t = Eo(t, this.getMap().getView().getProjection())), this.updatePointer_(t)), !this.lastPointerEvent_ || (this.lastPointerEvent_ && this.lastPointerEvent_.type != Ng.POINTERDRAG))) {
					const t = this.lastPointerEvent_;
					this.willModifyFeatures_(
						t,
						this.dragSegments_.map(([t]) => t)
					);
					const e = this.removeVertex_();
					return this.featuresBeingModified_ && this.dispatchEvent(new Ex(Cx, this.featuresBeingModified_, t)), (this.featuresBeingModified_ = null), e;
				}
				return !1;
			}
			removeVertex_() {
				const t = this.dragSegments_,
					e = {};
				let n,
					i,
					r,
					s,
					o,
					a,
					l,
					h,
					c,
					u,
					d,
					g = !1;
				for (o = t.length - 1; o >= 0; --o) (r = t[o]), (u = r[0]), (d = wi(u.feature)), u.depth && (d += '-' + u.depth.join('-')), d in e || (e[d] = {}), 0 === r[1] ? ((e[d].right = u), (e[d].index = u.index)) : 1 == r[1] && ((e[d].left = u), (e[d].index = u.index + 1));
				for (d in e) {
					switch (((c = e[d].right), (l = e[d].left), (a = e[d].index), (h = a - 1), (u = void 0 !== l ? l : c), h < 0 && (h = 0), (s = u.geometry), (i = s.getCoordinates()), (n = i), (g = !1), s.getType())) {
						case 'MultiLineString':
							i[u.depth[0]].length > 2 && (i[u.depth[0]].splice(a, 1), (g = !0));
							break;
						case 'LineString':
							i.length > 2 && (i.splice(a, 1), (g = !0));
							break;
						case 'MultiPolygon':
							n = n[u.depth[1]];
						case 'Polygon':
							(n = n[u.depth[0]]), n.length > 4 && (a == n.length - 1 && (a = 0), n.splice(a, 1), (g = !0), 0 === a && (n.pop(), n.push(n[0]), (h = n.length - 1)));
					}
					if (g) {
						this.setGeometryCoordinates_(s, i);
						const e = [];
						if ((void 0 !== l && (this.rBush_.remove(l), e.push(l.segment[0])), void 0 !== c && (this.rBush_.remove(c), e.push(c.segment[1])), void 0 !== l && void 0 !== c)) {
							const t = { depth: u.depth, feature: u.feature, geometry: u.geometry, index: h, segment: e };
							this.rBush_.insert(ki(t.segment), t);
						}
						this.updateSegmentIndices_(s, a, u.depth, -1), this.vertexFeature_ && (this.overlay_.getSource().removeFeature(this.vertexFeature_), (this.vertexFeature_ = null)), (t.length = 0);
					}
				}
				return g;
			}
			canInsertPoint() {
				if (!this.vertexFeature_) return !1;
				if (this.vertexFeature_.get('geometries').every((t) => 'Circle' === t.getType() || t.getType().endsWith('Point'))) return !1;
				const t = this.vertexFeature_.getGeometry().getCoordinates();
				return this.rBush_.getInExtent(ki([t])).some(({ segment: e }) => !(Jr(e[0], t) || Jr(e[1], t)));
			}
			insertPoint(t) {
				const e = t ? Eo(t, this.getMap().getView().getProjection()) : this.vertexFeature_?.getGeometry().getCoordinates();
				if (!e) return !1;
				return this.findInsertVerticesAndUpdateDragSegments_(e).reduce((t, n) => t || this.insertVertex_(n, e), !1);
			}
			setGeometryCoordinates_(t, e) {
				(this.changingFeature_ = !0), t.setCoordinates(e), (this.changingFeature_ = !1);
			}
			updateSegmentIndices_(t, e, n, i) {
				this.rBush_.forEachInExtent(t.getExtent(), function (r) {
					r.geometry === t && (void 0 === n || void 0 === r.depth || $n(r.depth, n)) && r.index > e && (r.index += i);
				});
			}
		},
		MouseWheelZoom: $f,
		PinchRotate: Bf,
		PinchZoom: Vf,
		Pointer: Cf,
		Select: Lx,
		Snap: class extends Cf {
			constructor(t) {
				const e = (t = t || {});
				e.handleDownEvent || (e.handleDownEvent = Bn),
					e.stopDown || (e.stopDown = Vn),
					super(e),
					this.on,
					this.once,
					this.un,
					(this.source_ = t.source ? t.source : null),
					(this.vertex_ = void 0 === t.vertex || t.vertex),
					(this.edge_ = void 0 === t.edge || t.edge),
					(this.features_ = t.features ? t.features : null),
					(this.featuresListenerKeys_ = []),
					(this.featureChangeListenerKeys_ = {}),
					(this.indexedFeaturesExtents_ = {}),
					(this.pendingFeatures_ = {}),
					(this.pixelTolerance_ = void 0 !== t.pixelTolerance ? t.pixelTolerance : 10),
					(this.rBush_ = new qh()),
					(this.GEOMETRY_SEGMENTERS_ = { Point: this.segmentPointGeometry_.bind(this), LineString: this.segmentLineStringGeometry_.bind(this), LinearRing: this.segmentLineStringGeometry_.bind(this), Polygon: this.segmentPolygonGeometry_.bind(this), MultiPoint: this.segmentMultiPointGeometry_.bind(this), MultiLineString: this.segmentMultiLineStringGeometry_.bind(this), MultiPolygon: this.segmentMultiPolygonGeometry_.bind(this), GeometryCollection: this.segmentGeometryCollectionGeometry_.bind(this), Circle: this.segmentCircleGeometry_.bind(this) });
			}
			addFeature(t, e) {
				e = void 0 === e || e;
				const n = wi(t),
					i = t.getGeometry();
				if (i) {
					const e = this.GEOMETRY_SEGMENTERS_[i.getType()];
					if (e) {
						this.indexedFeaturesExtents_[n] = i.getExtent([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
						const r = [];
						if ((e(r, i), 1 === r.length)) this.rBush_.insert(ki(r[0]), { feature: t, segment: r[0] });
						else if (r.length > 1) {
							const e = r.map((t) => ki(t)),
								n = r.map((e) => ({ feature: t, segment: e }));
							this.rBush_.load(e, n);
						}
					}
				}
				e && (this.featureChangeListenerKeys_[n] = gi(t, Kn, this.handleFeatureChange_, this));
			}
			getFeatures_() {
				let t;
				return this.features_ ? (t = this.features_) : this.source_ && (t = this.source_.getFeatures()), t;
			}
			handleEvent(t) {
				const e = this.snapTo(t.pixel, t.coordinate, t.map);
				return e && ((t.coordinate = e.vertex.slice(0, 2)), (t.pixel = e.vertexPixel), this.dispatchEvent(new Dx(Ax, { vertex: t.coordinate, vertexPixel: t.pixel, feature: e.feature, segment: e.segment }))), super.handleEvent(t);
			}
			handleFeatureAdd_(t) {
				const e = Ox(t);
				e && this.addFeature(e);
			}
			handleFeatureRemove_(t) {
				const e = Ox(t);
				e && this.removeFeature(e);
			}
			handleFeatureChange_(t) {
				const e = t.target;
				if (this.handlingDownUpSequence) {
					const t = wi(e);
					t in this.pendingFeatures_ || (this.pendingFeatures_[t] = e);
				} else this.updateFeature_(e);
			}
			handleUpEvent(t) {
				const e = Object.values(this.pendingFeatures_);
				return e.length && (e.forEach(this.updateFeature_.bind(this)), (this.pendingFeatures_ = {})), !1;
			}
			removeFeature(t, e) {
				const n = void 0 === e || e,
					i = wi(t),
					r = this.indexedFeaturesExtents_[i];
				if (r) {
					const e = this.rBush_,
						n = [];
					e.forEachInExtent(r, function (e) {
						t === e.feature && n.push(e);
					});
					for (let t = n.length - 1; t >= 0; --t) e.remove(n[t]);
				}
				n && (pi(this.featureChangeListenerKeys_[i]), delete this.featureChangeListenerKeys_[i]);
			}
			setMap(t) {
				const e = this.getMap(),
					n = this.featuresListenerKeys_,
					i = this.getFeatures_();
				e && (n.forEach(pi), (n.length = 0), this.rBush_.clear(), Object.values(this.featureChangeListenerKeys_).forEach(pi), (this.featureChangeListenerKeys_ = {})), super.setMap(t), t && (this.features_ ? n.push(gi(this.features_, lh, this.handleFeatureAdd_, this), gi(this.features_, hh, this.handleFeatureRemove_, this)) : this.source_ && n.push(gi(this.source_, Yh, this.handleFeatureAdd_, this), gi(this.source_, Qh, this.handleFeatureRemove_, this)), i.forEach((t) => this.addFeature(t)));
			}
			snapTo(t, e, n) {
				const i = n.getView().getProjection(),
					r = Eo(e, i),
					s = To(Li(ki([r]), n.getView().getResolution() * this.pixelTolerance_), i),
					o = this.rBush_.getInExtent(s),
					a = o.length;
				if (0 === a) return null;
				let l,
					h,
					c = 1 / 0,
					u = null;
				const d = this.pixelTolerance_ * this.pixelTolerance_,
					g = () => {
						if (l) {
							const e = n.getPixelFromCoordinate(l);
							if (ts(t, e) <= d) return { vertex: l, vertexPixel: [Math.round(e[0]), Math.round(e[1])], feature: h, segment: u };
						}
						return null;
					};
				if (this.vertex_) {
					for (let t = 0; t < a; ++t) {
						const e = o[t];
						'Circle' !== e.feature.getGeometry().getType() &&
							e.segment.forEach((t) => {
								const n = Eo(t, i),
									s = ts(r, n);
								s < c && ((l = t), (c = s), (h = e.feature));
							});
					}
					const t = g();
					if (t) return t;
				}
				if (this.edge_) {
					for (let t = 0; t < a; ++t) {
						let e = null;
						const n = o[t];
						if ('Circle' === n.feature.getGeometry().getType()) {
							let t = n.feature.getGeometry();
							const s = So();
							s && (t = t.clone().transform(s, i)), (e = Yr(r, t));
						} else {
							const [t, s] = n.segment;
							s && ((zx[0] = Eo(t, i)), (zx[1] = Eo(s, i)), (e = Hr(r, zx)));
						}
						if (e) {
							const t = ts(r, e);
							t < c && ((l = Co(e, i)), (u = 'Circle' === n.feature.getGeometry().getType() ? null : n.segment), (c = t), (h = n.feature));
						}
					}
					const t = g();
					if (t) return t;
				}
				return null;
			}
			updateFeature_(t) {
				this.removeFeature(t, !1), this.addFeature(t, !1);
			}
			segmentCircleGeometry_(t, e) {
				const n = this.getMap().getView().getProjection();
				let i = e;
				const r = So();
				r && (i = i.clone().transform(r, n));
				const s = ba(i);
				r && s.transform(n, r);
				const o = s.getCoordinates()[0];
				for (let e = 0, n = o.length - 1; e < n; ++e) t.push(o.slice(e, e + 2));
			}
			segmentGeometryCollectionGeometry_(t, e) {
				const n = e.getGeometriesArray();
				for (let e = 0; e < n.length; ++e) {
					const i = this.GEOMETRY_SEGMENTERS_[n[e].getType()];
					i && i(t, n[e]);
				}
			}
			segmentLineStringGeometry_(t, e) {
				const n = e.getCoordinates();
				for (let e = 0, i = n.length - 1; e < i; ++e) t.push(n.slice(e, e + 2));
			}
			segmentMultiLineStringGeometry_(t, e) {
				const n = e.getCoordinates();
				for (let e = 0, i = n.length; e < i; ++e) {
					const i = n[e];
					for (let e = 0, n = i.length - 1; e < n; ++e) t.push(i.slice(e, e + 2));
				}
			}
			segmentMultiPointGeometry_(t, e) {
				e.getCoordinates().forEach((e) => {
					t.push([e]);
				});
			}
			segmentMultiPolygonGeometry_(t, e) {
				const n = e.getCoordinates();
				for (let e = 0, i = n.length; e < i; ++e) {
					const i = n[e];
					for (let e = 0, n = i.length; e < n; ++e) {
						const n = i[e];
						for (let e = 0, i = n.length - 1; e < i; ++e) t.push(n.slice(e, e + 2));
					}
				}
			}
			segmentPointGeometry_(t, e) {
				t.push([e.getCoordinates()]);
			}
			segmentPolygonGeometry_(t, e) {
				const n = e.getCoordinates();
				for (let e = 0, i = n.length; e < i; ++e) {
					const i = n[e];
					for (let e = 0, n = i.length - 1; e < n; ++e) t.push(i.slice(e, e + 2));
				}
			}
		},
		Translate: class extends Cf {
			constructor(t) {
				let e;
				if ((super((t = t || {})), this.on, this.once, this.un, (this.lastCoordinate_ = null), (this.startCoordinate_ = null), (this.features_ = void 0 !== t.features ? t.features : null), t.layers && !this.features_))
					if ('function' == typeof t.layers) e = t.layers;
					else {
						const n = t.layers;
						e = function (t) {
							return n.includes(t);
						};
					}
				else e = Bn;
				(this.layerFilter_ = e), (this.filter_ = t.filter && !this.features_ ? t.filter : Bn), (this.hitTolerance_ = t.hitTolerance ? t.hitTolerance : 0), (this.condition_ = t.condition ? t.condition : pf), (this.lastFeature_ = null), this.addChangeListener(lf, this.handleActiveChanged_);
			}
			handleDownEvent(t) {
				if (!t.originalEvent || !this.condition_(t)) return !1;
				if (((this.lastFeature_ = this.featuresAtPixel_(t.pixel, t.map)), !this.lastCoordinate_ && this.lastFeature_)) {
					(this.startCoordinate_ = t.coordinate), (this.lastCoordinate_ = t.coordinate), this.handleMoveEvent(t);
					const e = this.features_ || new dh([this.lastFeature_]);
					return this.dispatchEvent(new Ux(Gx, e, t.coordinate, this.startCoordinate_, t)), !0;
				}
				return !1;
			}
			handleUpEvent(t) {
				if (this.lastCoordinate_) {
					(this.lastCoordinate_ = null), this.handleMoveEvent(t);
					const e = this.features_ || new dh([this.lastFeature_]);
					return this.dispatchEvent(new Ux(Nx, e, t.coordinate, this.startCoordinate_, t)), (this.startCoordinate_ = null), !0;
				}
				return !1;
			}
			handleDragEvent(t) {
				if (this.lastCoordinate_) {
					const e = t.coordinate,
						n = t.map.getView().getProjection(),
						i = Eo(e, n),
						r = Eo(this.lastCoordinate_, n),
						s = i[0] - r[0],
						o = i[1] - r[1],
						a = this.features_ || new dh([this.lastFeature_]),
						l = So();
					a.forEach(function (t) {
						const e = t.getGeometry();
						l ? (e.transform(l, n), e.translate(s, o), e.transform(n, l)) : e.translate(s, o), t.setGeometry(e);
					}),
						(this.lastCoordinate_ = e),
						this.dispatchEvent(new Ux(jx, a, e, this.startCoordinate_, t));
				}
			}
			handleMoveEvent(t) {
				const e = t.map.getViewport();
				this.featuresAtPixel_(t.pixel, t.map) ? (e.classList.remove(this.lastCoordinate_ ? 'ol-grab' : 'ol-grabbing'), e.classList.add(this.lastCoordinate_ ? 'ol-grabbing' : 'ol-grab')) : e.classList.remove('ol-grab', 'ol-grabbing');
			}
			featuresAtPixel_(t, e) {
				return e.forEachFeatureAtPixel(
					t,
					(t, e) => {
						if (t instanceof Ei && this.filter_(t, e) && (!this.features_ || this.features_.getArray().includes(t))) return t;
					},
					{ layerFilter: this.layerFilter_, hitTolerance: this.hitTolerance_ }
				);
			}
			getHitTolerance() {
				return this.hitTolerance_;
			}
			setHitTolerance(t) {
				this.hitTolerance_ = t;
			}
			setMap(t) {
				const e = this.getMap();
				super.setMap(t), this.updateState_(e);
			}
			handleActiveChanged_() {
				this.updateState_(null);
			}
			updateState_(t) {
				let e = this.getMap();
				const n = this.getActive();
				if ((!e || !n) && ((e = e || t), e)) {
					e.getViewport().classList.remove('ol-grab', 'ol-grabbing');
				}
			}
		},
		defaults: Wf,
	});
	const Bx = 'http://www.w3.org/2001/XMLSchema-instance';
	function Vx(t, e) {
		return hv().createElementNS(t, e);
	}
	function Wx(t, e) {
		return Xx(t, e, []).join('');
	}
	function Xx(t, e, n) {
		if (t.nodeType == Node.CDATA_SECTION_NODE || t.nodeType == Node.TEXT_NODE) n.push(t.nodeValue);
		else {
			let i;
			for (i = t.firstChild; i; i = i.nextSibling) Xx(i, e, n);
		}
		return n;
	}
	function qx(t) {
		return 'documentElement' in t;
	}
	function Zx(t) {
		return new DOMParser().parseFromString(t, 'application/xml');
	}
	function Kx(t, e) {
		return function (n, i) {
			const r = t.call(e ?? this, n, i);
			if (void 0 !== r) {
				Un(i[i.length - 1], r);
			}
		};
	}
	function Yx(t, e) {
		return function (n, i) {
			const r = t.call(e ?? this, n, i);
			if (void 0 !== r) {
				i[i.length - 1].push(r);
			}
		};
	}
	function Hx(t, e) {
		return function (e, n) {
			const i = t.call(this, e, n);
			void 0 !== i && (n[n.length - 1] = i);
		};
	}
	function Jx(t, e, n) {
		return function (n, i) {
			const r = t.call(this, n, i);
			if (void 0 !== r) {
				i[i.length - 1][void 0 !== e ? e : n.localName] = r;
			}
		};
	}
	function Qx(t, e) {
		return function (e, n, i) {
			t.call(this, e, n, i);
			i[i.length - 1].node.appendChild(e);
		};
	}
	function tv(t, e) {
		return function (e, n, i) {
			const r = n[n.length - 1].node;
			let s = t;
			void 0 === s && (s = i);
			return Vx(r.namespaceURI, s);
		};
	}
	const ev = tv();
	function nv(t, e) {
		const n = e.length,
			i = new Array(n);
		for (let r = 0; r < n; ++r) i[r] = t[e[r]];
		return i;
	}
	function iv(t, e, n) {
		let i, r;
		for (n = void 0 !== n ? n : {}, i = 0, r = t.length; i < r; ++i) n[t[i]] = e;
		return n;
	}
	function rv(t, e, n, i) {
		let r;
		for (r = e.firstElementChild; r; r = r.nextElementSibling) {
			const e = t[r.namespaceURI];
			if (void 0 !== e) {
				const t = e[r.localName];
				void 0 !== t && t.call(i, r, n);
			}
		}
	}
	function sv(t, e, n, i, r) {
		return i.push(t), rv(e, n, i, r), i.pop();
	}
	function ov(t, e, n, i, r, s, o) {
		return (
			r.push(t),
			(function (t, e, n, i, r, s) {
				const o = (void 0 !== r ? r : n).length;
				let a, l;
				for (let h = 0; h < o; ++h) (a = n[h]), void 0 !== a && ((l = e.call(s, a, i, void 0 !== r ? r[h] : void 0)), void 0 !== l && t[l.namespaceURI][l.localName].call(s, l, a, i));
			})(e, n, i, r, s, o),
			r.pop()
		);
	}
	let av, lv;
	function hv() {
		return void 0 === lv && 'undefined' != typeof document && (lv = document.implementation.createDocument('', '', null)), lv;
	}
	class cv extends um {
		constructor() {
			super(), (this.xmlSerializer_ = (void 0 === av && 'undefined' != typeof XMLSerializer && (av = new XMLSerializer()), av));
		}
		getType() {
			return 'xml';
		}
		readFeature(t, e) {
			if (!t) return null;
			if ('string' == typeof t) {
				const n = Zx(t);
				return this.readFeatureFromDocument(n, e);
			}
			return qx(t) ? this.readFeatureFromDocument(t, e) : this.readFeatureFromNode(t, e);
		}
		readFeatureFromDocument(t, e) {
			const n = this.readFeaturesFromDocument(t, e);
			return n.length > 0 ? n[0] : null;
		}
		readFeatureFromNode(t, e) {
			return null;
		}
		readFeatures(t, e) {
			if (!t) return [];
			if ('string' == typeof t) {
				const n = Zx(t);
				return this.readFeaturesFromDocument(n, e);
			}
			return qx(t) ? this.readFeaturesFromDocument(t, e) : this.readFeaturesFromNode(t, e);
		}
		readFeaturesFromDocument(t, e) {
			const n = [];
			for (let i = t.firstChild; i; i = i.nextSibling) i.nodeType == Node.ELEMENT_NODE && Un(n, this.readFeaturesFromNode(i, e));
			return n;
		}
		readFeaturesFromNode(t, e) {
			return xi();
		}
		readGeometry(t, e) {
			if (!t) return null;
			if ('string' == typeof t) {
				const n = Zx(t);
				return this.readGeometryFromDocument(n, e);
			}
			return qx(t) ? this.readGeometryFromDocument(t, e) : this.readGeometryFromNode(t, e);
		}
		readGeometryFromDocument(t, e) {
			return null;
		}
		readGeometryFromNode(t, e) {
			return null;
		}
		readProjection(t) {
			if (!t) return null;
			if ('string' == typeof t) {
				const e = Zx(t);
				return this.readProjectionFromDocument(e);
			}
			return qx(t) ? this.readProjectionFromDocument(t) : this.readProjectionFromNode(t);
		}
		readProjectionFromDocument(t) {
			return this.dataProjection;
		}
		readProjectionFromNode(t) {
			return this.dataProjection;
		}
		writeFeature(t, e) {
			const n = this.writeFeatureNode(t, e);
			return this.xmlSerializer_.serializeToString(n);
		}
		writeFeatureNode(t, e) {
			return null;
		}
		writeFeatures(t, e) {
			const n = this.writeFeaturesNode(t, e);
			return this.xmlSerializer_.serializeToString(n);
		}
		writeFeaturesNode(t, e) {
			return null;
		}
		writeGeometry(t, e) {
			const n = this.writeGeometryNode(t, e);
			return this.xmlSerializer_.serializeToString(n);
		}
		writeGeometryNode(t, e) {
			return null;
		}
	}
	function uv(t) {
		return (function (t) {
			const e = /^\s*(true|1)|(false|0)\s*$/.exec(t);
			if (e) return void 0 !== e[1] || !1;
			return;
		})(Wx(t, !1));
	}
	function dv(t) {
		return (function (t) {
			const e = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(t);
			if (e) return parseFloat(e[1]);
			return;
		})(Wx(t, !1));
	}
	function gv(t) {
		return Wx(t, !1).trim();
	}
	function fv(t, e) {
		mv(t, e ? '1' : '0');
	}
	function pv(t, e) {
		const n = e.toPrecision();
		t.appendChild(hv().createTextNode(n));
	}
	function mv(t, e) {
		t.appendChild(hv().createTextNode(e));
	}
	const _v = ['http://www.google.com/kml/ext/2.2'],
		yv = [null, 'http://earth.google.com/kml/2.0', 'http://earth.google.com/kml/2.1', 'http://earth.google.com/kml/2.2', 'http://www.opengis.net/kml/2.2'],
		xv = { fraction: 'fraction', pixels: 'pixels', insetPixels: 'pixels' },
		vv = iv(
			yv,
			{
				ExtendedData: Sw,
				Region: Cw,
				MultiGeometry: Jx(fw, 'geometry'),
				LineString: Jx(uw, 'geometry'),
				LinearRing: Jx(dw, 'geometry'),
				Point: Jx(pw, 'geometry'),
				Polygon: Jx(_w, 'geometry'),
				Style: Jx(xw),
				StyleMap: function (t, e) {
					const n = Hv.call(this, t, e);
					if (!n) return;
					const i = e[e.length - 1];
					if (Array.isArray(n)) i.Style = n;
					else {
						if ('string' != typeof n) throw new Error('`styleMapValue` has an unknown type');
						i.styleUrl = n;
					}
				},
				address: Jx(gv),
				description: Jx(gv),
				name: Jx(gv),
				open: Jx(uv),
				phoneNumber: Jx(gv),
				styleUrl: Jx(Zv),
				visibility: Jx(uv),
			},
			iv(_v, {
				MultiTrack: Jx(function (t, e) {
					const n = sv([], rw, t, e);
					if (!n) return;
					return new _a(n);
				}, 'geometry'),
				Track: Jx(ow, 'geometry'),
			})
		),
		wv = iv(yv, {
			ExtendedData: Sw,
			Region: Cw,
			Link: function (t, e) {
				rv(bv, t, e);
			},
			address: Jx(gv),
			description: Jx(gv),
			name: Jx(gv),
			open: Jx(uv),
			phoneNumber: Jx(gv),
			visibility: Jx(uv),
		}),
		bv = iv(yv, { href: Jx(qv) }),
		Sv = iv(yv, { Altitude: Jx(dv), Longitude: Jx(dv), Latitude: Jx(dv), Tilt: Jx(dv), AltitudeMode: Jx(gv), Heading: Jx(dv), Roll: Jx(dv) }),
		Cv = iv(yv, {
			LatLonAltBox: function (t, e) {
				const n = sv({}, Pw, t, e);
				if (!n) return;
				const i = e[e.length - 1],
					r = [parseFloat(n.west), parseFloat(n.south), parseFloat(n.east), parseFloat(n.north)];
				(i.extent = r), (i.altitudeMode = n.altitudeMode), (i.minAltitude = parseFloat(n.minAltitude)), (i.maxAltitude = parseFloat(n.maxAltitude));
			},
			Lod: function (t, e) {
				const n = sv({}, Rw, t, e);
				if (!n) return;
				const i = e[e.length - 1];
				(i.minLodPixels = parseFloat(n.minLodPixels)), (i.maxLodPixels = parseFloat(n.maxLodPixels)), (i.minFadeExtent = parseFloat(n.minFadeExtent)), (i.maxFadeExtent = parseFloat(n.maxFadeExtent));
			},
		}),
		Ev = iv(yv, ['Document', 'Placemark']),
		Tv = iv(yv, {
			Document: Qx(function (t, e, n) {
				ov({ node: t }, Lw, Aw, e, n, void 0, this);
			}),
			Placemark: Qx(rb),
		});
	let Pv,
		Rv,
		Fv,
		Mv,
		Iv,
		kv,
		Lv,
		Av,
		Dv,
		Ov = null,
		zv = null,
		Gv = null,
		jv = null,
		Nv = null,
		Uv = null;
	function $v(t) {
		return 32 / Math.min(t[0], t[1]);
	}
	function Bv(t) {
		return t;
	}
	function Vv(t, e, n) {
		return Array.isArray(t) ? t : 'string' == typeof t ? Vv(n[t], e, n) : e;
	}
	function Wv(t) {
		const e = Wx(t, !1),
			n = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(e);
		if (n) {
			const t = n[1];
			return [parseInt(t.substr(6, 2), 16), parseInt(t.substr(4, 2), 16), parseInt(t.substr(2, 2), 16), parseInt(t.substr(0, 2), 16) / 255];
		}
	}
	function Xv(t) {
		let e = Wx(t, !1);
		const n = [];
		e = e.replace(/\s*,\s*/g, ',');
		const i = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?),([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s+|,|$)(?:([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s+|$))?\s*/i;
		let r;
		for (; (r = i.exec(e)); ) {
			const t = parseFloat(r[1]),
				i = parseFloat(r[2]),
				s = r[3] ? parseFloat(r[3]) : 0;
			n.push(t, i, s), (e = e.substr(r[0].length));
		}
		if ('' === e) return n;
	}
	function qv(t) {
		const e = Wx(t, !1).trim();
		let n = t.baseURI;
		if (((n && 'about:blank' != n) || (n = window.location.href), n)) {
			return new URL(e, n).href;
		}
		return e;
	}
	function Zv(t) {
		const e = Wx(t, !1)
			.trim()
			.replace(/^(?!.*#)/, '#');
		let n = t.baseURI;
		if (((n && 'about:blank' != n) || (n = window.location.href), n)) {
			return new URL(e, n).href;
		}
		return e;
	}
	function Kv(t) {
		return dv(t);
	}
	const Yv = iv(yv, {
		Pair: function (t, e) {
			const n = sv({}, Ew, t, e, this);
			if (!n) return;
			const i = n.key;
			if (i && 'normal' == i) {
				const t = n.styleUrl;
				t && (e[e.length - 1] = t);
				const i = n.Style;
				i && (e[e.length - 1] = i);
			}
		},
	});
	function Hv(t, e) {
		return sv(void 0, Yv, t, e, this);
	}
	const Jv = iv(yv, {
		Icon: Jx(function (t, e) {
			const n = sv({}, aw, t, e);
			if (n) return n;
			return null;
		}),
		color: Jx(Wv),
		heading: Jx(dv),
		hotSpot: Jx(function (t) {
			const e = t.getAttribute('xunits'),
				n = t.getAttribute('yunits');
			let i;
			return (i = 'insetPixels' !== e ? ('insetPixels' !== n ? 'bottom-left' : 'top-left') : 'insetPixels' !== n ? 'bottom-right' : 'top-right'), { x: parseFloat(t.getAttribute('x')), xunits: xv[e], y: parseFloat(t.getAttribute('y')), yunits: xv[n], origin: i };
		}),
		scale: Jx(Kv),
	});
	const Qv = iv(yv, { color: Jx(Wv), scale: Jx(Kv) });
	const tw = iv(yv, { color: Jx(Wv), width: Jx(dv) });
	const ew = iv(yv, { color: Jx(Wv), fill: Jx(uv), outline: Jx(uv) });
	const nw = iv(yv, { coordinates: Hx(Xv) });
	function iw(t, e) {
		return sv(null, nw, t, e);
	}
	const rw = iv(_v, { Track: Yx(ow) });
	const sw = iv(
		yv,
		{
			when: function (t, e) {
				const n = e[e.length - 1].whens,
					i = Wx(t, !1),
					r = Date.parse(i);
				n.push(isNaN(r) ? 0 : r);
			},
		},
		iv(_v, {
			coord: function (t, e) {
				const n = e[e.length - 1].coordinates,
					i = Wx(t, !1),
					r = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(i);
				if (r) {
					const t = parseFloat(r[1]),
						e = parseFloat(r[2]),
						i = parseFloat(r[3]);
					n.push([t, e, i]);
				} else n.push([]);
			},
		})
	);
	function ow(t, e) {
		const n = sv({ coordinates: [], whens: [] }, sw, t, e);
		if (!n) return;
		const i = [],
			r = n.coordinates,
			s = n.whens;
		for (let t = 0, e = Math.min(r.length, s.length); t < e; ++t) 3 == r[t].length && i.push(r[t][0], r[t][1], r[t][2], s[t]);
		return new ma(i, 'XYZM');
	}
	const aw = iv(yv, { href: Jx(qv) }, iv(_v, { x: Jx(dv), y: Jx(dv), w: Jx(dv), h: Jx(dv) }));
	const lw = iv(yv, { coordinates: Hx(Xv) });
	function hw(t, e) {
		return sv(null, lw, t, e);
	}
	const cw = iv(yv, { extrude: Jx(uv), tessellate: Jx(uv), altitudeMode: Jx(gv) });
	function uw(t, e) {
		const n = sv({}, cw, t, e),
			i = hw(t, e);
		if (i) {
			const t = new ma(i, 'XYZ');
			return t.setProperties(n, !0), t;
		}
	}
	function dw(t, e) {
		const n = sv({}, cw, t, e),
			i = hw(t, e);
		if (i) {
			const t = new va(i, 'XYZ', [i.length]);
			return t.setProperties(n, !0), t;
		}
	}
	const gw = iv(yv, { LineString: Yx(uw), LinearRing: Yx(dw), MultiGeometry: Yx(fw), Point: Yx(pw), Polygon: Yx(_w) });
	function fw(t, e) {
		const n = sv([], gw, t, e);
		if (!n) return null;
		if (0 === n.length) return new Jo(n);
		let i,
			r = !0;
		const s = n[0].getType();
		let o;
		for (let t = 1, e = n.length; t < e; ++t)
			if (((o = n[t]), o.getType() != s)) {
				r = !1;
				break;
			}
		if (r) {
			let t, e;
			if ('Point' == s) {
				const r = n[0];
				(t = r.getLayout()), (e = r.getFlatCoordinates());
				for (let t = 1, i = n.length; t < i; ++t) (o = n[t]), Un(e, o.getFlatCoordinates());
				(i = new xa(e, t)), vw(i, n);
			} else if ('LineString' == s) (i = new _a(n)), vw(i, n);
			else if ('Polygon' == s) (i = new Sa(n)), vw(i, n);
			else {
				if ('GeometryCollection' != s && !s.startsWith('Multi')) throw new Error('Unknown geometry type found');
				i = new Jo(n);
			}
		} else i = new Jo(n);
		return i;
	}
	function pw(t, e) {
		const n = sv({}, cw, t, e),
			i = hw(t, e);
		if (i) {
			const t = new ya(i, 'XYZ');
			return t.setProperties(n, !0), t;
		}
	}
	const mw = iv(yv, {
		innerBoundaryIs: function (t, e) {
			const n = sv([], Fw, t, e);
			if (n.length > 0) {
				e[e.length - 1].push(...n);
			}
		},
		outerBoundaryIs: function (t, e) {
			const n = sv(void 0, Mw, t, e);
			if (n) {
				e[e.length - 1][0] = n;
			}
		},
	});
	function _w(t, e) {
		const n = sv({}, cw, t, e),
			i = sv([null], mw, t, e);
		if (i && i[0]) {
			const t = i[0],
				e = [t.length];
			for (let n = 1, r = i.length; n < r; ++n) Un(t, i[n]), e.push(t.length);
			const r = new va(t, 'XYZ', e);
			return r.setProperties(n, !0), r;
		}
	}
	const yw = iv(yv, {
		IconStyle: function (t, e) {
			const n = sv({}, Jv, t, e);
			if (!n) return;
			const i = e[e.length - 1],
				r = 'Icon' in n ? n.Icon : {},
				s = !('Icon' in n) || Object.keys(r).length > 0;
			let o;
			const a = r.href;
			let l, h, c;
			a ? (o = a) : s && (o = kv);
			let u = 'bottom-left';
			const d = n.hotSpot;
			let g;
			d ? ((l = [d.x, d.y]), (h = d.xunits), (c = d.yunits), (u = d.origin)) : /^https?:\/\/maps\.(?:google|gstatic)\.com\//.test(o) && (o.includes('pushpin') ? ((l = Rv), (h = Fv), (c = Mv)) : o.includes('arrow-reverse') ? ((l = [54, 42]), (h = Fv), (c = Mv)) : o.includes('paddle') && ((l = [32, 1]), (h = Fv), (c = Mv)));
			const f = r.x,
				p = r.y;
			let m;
			void 0 !== f && void 0 !== p && (g = [f, p]);
			const _ = r.w,
				y = r.h;
			let x;
			void 0 !== _ && void 0 !== y && (m = [_, y]);
			const v = n.heading;
			void 0 !== v && (x = Cr(v));
			const w = n.scale,
				b = n.color;
			if (s) {
				o == kv && (m = Iv);
				const t = new th({ anchor: l, anchorOrigin: u, anchorXUnits: h, anchorYUnits: c, crossOrigin: this.crossOrigin_, offset: g, offsetOrigin: 'bottom-left', rotation: x, scale: w, size: m, src: this.iconUrlFunction_(o), color: b }),
					e = t.getScaleArray()[0],
					n = t.getSize();
				if (null === n) {
					const n = t.getImageState();
					if (n === Ta || n === Pa) {
						const i = function () {
							const n = t.getImageState();
							if (n !== Ta && n !== Pa) {
								const n = t.getSize();
								if (n && 2 == n.length) {
									const i = $v(n);
									t.setScale(e * i);
								}
								t.unlistenImageChange(i);
							}
						};
						t.listenImageChange(i), n === Ta && t.load();
					}
				} else if (2 == n.length) {
					const i = $v(n);
					t.setScale(e * i);
				}
				i.imageStyle = t;
			} else i.imageStyle = Lv;
		},
		LabelStyle: function (t, e) {
			const n = sv({}, Qv, t, e);
			if (!n) return;
			const i = e[e.length - 1],
				r = new ah({ fill: new Jl({ color: 'color' in n ? n.color : Pv }), scale: n.scale });
			i.textStyle = r;
		},
		LineStyle: function (t, e) {
			const n = sv({}, tw, t, e);
			if (!n) return;
			const i = e[e.length - 1],
				r = new eh({ color: 'color' in n ? n.color : Pv, width: 'width' in n ? n.width : 1 });
			i.strokeStyle = r;
		},
		PolyStyle: function (t, e) {
			const n = sv({}, ew, t, e);
			if (!n) return;
			const i = e[e.length - 1],
				r = new Jl({ color: 'color' in n ? n.color : Pv });
			i.fillStyle = r;
			const s = n.fill;
			void 0 !== s && (i.fill = s);
			const o = n.outline;
			void 0 !== o && (i.outline = o);
		},
	});
	function xw(t, e) {
		const n = sv({}, yw, t, e, this);
		if (!n) return null;
		let i = 'fillStyle' in n ? n.fillStyle : Ov;
		const r = n.fill;
		let s;
		void 0 === r || r || (i = null), 'imageStyle' in n ? n.imageStyle != Lv && (s = n.imageStyle) : (s = zv);
		const o = 'textStyle' in n ? n.textStyle : jv,
			a = 'strokeStyle' in n ? n.strokeStyle : Gv,
			l = n.outline;
		return void 0 === l || l
			? [new nh({ fill: i, image: s, stroke: a, text: o, zIndex: void 0 })]
			: [
					new nh({
						geometry: function (t) {
							const e = t.getGeometry(),
								n = e.getType();
							if ('GeometryCollection' === n) {
								return new Jo(
									e.getGeometriesArrayRecursive().filter(function (t) {
										const e = t.getType();
										return 'Polygon' !== e && 'MultiPolygon' !== e;
									})
								);
							}
							if ('Polygon' !== n && 'MultiPolygon' !== n) return e;
						},
						fill: i,
						image: s,
						stroke: a,
						text: o,
						zIndex: void 0,
					}),
					new nh({
						geometry: function (t) {
							const e = t.getGeometry(),
								n = e.getType();
							if ('GeometryCollection' === n) {
								return new Jo(
									e.getGeometriesArrayRecursive().filter(function (t) {
										const e = t.getType();
										return 'Polygon' === e || 'MultiPolygon' === e;
									})
								);
							}
							if ('Polygon' === n || 'MultiPolygon' === n) return e;
						},
						fill: i,
						stroke: null,
						zIndex: void 0,
					}),
			  ];
	}
	function vw(t, e) {
		const n = e.length,
			i = new Array(e.length),
			r = new Array(e.length),
			s = new Array(e.length);
		let o, a, l;
		(o = !1), (a = !1), (l = !1);
		for (let t = 0; t < n; ++t) {
			const n = e[t];
			(i[t] = n.get('extrude')), (r[t] = n.get('tessellate')), (s[t] = n.get('altitudeMode')), (o = o || void 0 !== i[t]), (a = a || void 0 !== r[t]), (l = l || s[t]);
		}
		o && t.set('extrude', i), a && t.set('tessellate', r), l && t.set('altitudeMode', s);
	}
	const ww = iv(yv, { displayName: Jx(gv), value: Jx(gv) });
	const bw = iv(yv, {
		Data: function (t, e) {
			const n = t.getAttribute('name');
			rv(ww, t, e);
			const i = e[e.length - 1];
			n && i.displayName
				? (i[n] = {
						value: i.value,
						displayName: i.displayName,
						toString: function () {
							return i.value;
						},
				  })
				: null !== n
				? (i[n] = i.value)
				: null !== i.displayName && (i[i.displayName] = i.value),
				delete i.value;
		},
		SchemaData: function (t, e) {
			rv(Tw, t, e);
		},
	});
	function Sw(t, e) {
		rv(bw, t, e);
	}
	function Cw(t, e) {
		rv(Cv, t, e);
	}
	const Ew = iv(yv, { Style: Jx(xw), key: Jx(gv), styleUrl: Jx(Zv) });
	const Tw = iv(yv, {
		SimpleData: function (t, e) {
			const n = t.getAttribute('name');
			if (null !== n) {
				const i = gv(t);
				e[e.length - 1][n] = i;
			}
		},
	});
	const Pw = iv(yv, { altitudeMode: Jx(gv), minAltitude: Jx(dv), maxAltitude: Jx(dv), north: Jx(dv), south: Jx(dv), east: Jx(dv), west: Jx(dv) });
	const Rw = iv(yv, { minLodPixels: Jx(dv), maxLodPixels: Jx(dv), minFadeExtent: Jx(dv), maxFadeExtent: Jx(dv) });
	const Fw = iv(yv, { LinearRing: Yx(iw) });
	const Mw = iv(yv, { LinearRing: Hx(iw) });
	function Iw(t, e) {
		const n = Wa(e),
			i = [255 * (4 == n.length ? n[3] : 1), n[2], n[1], n[0]];
		for (let t = 0; t < 4; ++t) {
			const e = Math.floor(i[t]).toString(16);
			i[t] = 1 == e.length ? '0' + e : e;
		}
		mv(t, i.join(''));
	}
	const kw = iv(yv, {
		Data: Qx(function (t, e, n) {
			t.setAttribute('name', e.name);
			const i = { node: t },
				r = e.value;
			'object' == typeof r ? (null !== r && r.displayName && ov(i, kw, ev, [r.displayName], n, ['displayName']), null !== r && r.value && ov(i, kw, ev, [r.value], n, ['value'])) : ov(i, kw, ev, [r], n, ['value']);
		}),
		value: Qx(function (t, e) {
			mv(t, e);
		}),
		displayName: Qx(function (t, e) {
			!(function (t, e) {
				t.appendChild(hv().createCDATASection(e));
			})(t, e);
		}),
	});
	const Lw = iv(yv, { Placemark: Qx(rb) }),
		Aw = function (t, e, n) {
			return Vx(e[e.length - 1].node.namespaceURI, 'Placemark');
		};
	const Dw = tv('Data');
	const Ow = iv(yv, ['href'], iv(_v, ['x', 'y', 'w', 'h'])),
		zw = iv(yv, { href: Qx(mv) }, iv(_v, { x: Qx(pv), y: Qx(pv), w: Qx(pv), h: Qx(pv) })),
		Gw = function (t, e, n) {
			return Vx(_v[0], 'gx:' + n);
		};
	const jw = iv(yv, ['scale', 'heading', 'Icon', 'color', 'hotSpot']),
		Nw = iv(yv, {
			Icon: Qx(function (t, e, n) {
				const i = { node: t },
					r = n[n.length - 1].node;
				let s = Ow[r.namespaceURI],
					o = nv(e, s);
				ov(i, zw, ev, o, n, s), (s = Ow[_v[0]]), (o = nv(e, s)), ov(i, zw, Gw, o, n, s);
			}),
			color: Qx(Iw),
			heading: Qx(pv),
			hotSpot: Qx(function (t, e) {
				t.setAttribute('x', String(e.x)), t.setAttribute('y', String(e.y)), t.setAttribute('xunits', e.xunits), t.setAttribute('yunits', e.yunits);
			}),
			scale: Qx(fb),
		});
	const Uw = iv(yv, ['color', 'scale']),
		$w = iv(yv, { color: Qx(Iw), scale: Qx(fb) });
	const Bw = iv(yv, ['color', 'width']),
		Vw = iv(yv, { color: Qx(Iw), width: Qx(pv) });
	const Ww = { Point: 'Point', LineString: 'LineString', LinearRing: 'LinearRing', Polygon: 'Polygon', MultiPoint: 'MultiGeometry', MultiLineString: 'MultiGeometry', MultiPolygon: 'MultiGeometry', GeometryCollection: 'MultiGeometry' },
		Xw = function (t, e, n) {
			if (t) {
				return Vx(e[e.length - 1].node.namespaceURI, Ww[t.getType()]);
			}
		},
		qw = tv('Point'),
		Zw = tv('LineString'),
		Kw = tv('LinearRing'),
		Yw = tv('Polygon'),
		Hw = iv(yv, { LineString: Qx(ab), Point: Qx(ab), Polygon: Qx(db), GeometryCollection: Qx(Jw) });
	function Jw(t, e, n) {
		const i = { node: t },
			r = e.getType();
		let s,
			o = [];
		if ('GeometryCollection' === r)
			e.getGeometriesArrayRecursive().forEach(function (t) {
				const e = t.getType();
				if ('MultiPoint' === e) o = o.concat(t.getPoints());
				else if ('MultiLineString' === e) o = o.concat(t.getLineStrings());
				else if ('MultiPolygon' === e) o = o.concat(t.getPolygons());
				else {
					if ('Point' !== e && 'LineString' !== e && 'Polygon' !== e) throw new Error('Unknown geometry type');
					o.push(t);
				}
			}),
				(s = Xw);
		else if ('MultiPoint' === r) (o = e.getPoints()), (s = qw);
		else if ('MultiLineString' === r) (o = e.getLineStrings()), (s = Zw);
		else {
			if ('MultiPolygon' !== r) throw new Error('Unknown geometry type');
			(o = e.getPolygons()), (s = Yw);
		}
		ov(i, Hw, s, o, n);
	}
	const Qw = iv(yv, { LinearRing: Qx(ab) });
	function tb(t, e, n) {
		ov({ node: t }, Qw, Kw, [e], n);
	}
	const eb = iv(yv, {
			ExtendedData: Qx(function (t, e, n) {
				const i = { node: t },
					r = e.names,
					s = e.values,
					o = r.length;
				for (let t = 0; t < o; t++) ov(i, kw, Dw, [{ name: r[t], value: s[t] }], n);
			}),
			MultiGeometry: Qx(Jw),
			LineString: Qx(ab),
			LinearRing: Qx(ab),
			Point: Qx(ab),
			Polygon: Qx(db),
			Style: Qx(function (t, e, n) {
				const i = { node: t },
					r = {};
				if (e.pointStyles.length) {
					const t = e.pointStyles[0].getText();
					t && (r.LabelStyle = t);
					const n = e.pointStyles[0].getImage();
					n && 'function' == typeof n.getSrc && (r.IconStyle = n);
				}
				if (e.lineStyles.length) {
					const t = e.lineStyles[0].getStroke();
					t && (r.LineStyle = t);
				}
				if (e.polyStyles.length) {
					const t = e.polyStyles[0].getStroke();
					t && !r.LineStyle && (r.LineStyle = t), (r.PolyStyle = e.polyStyles[0]);
				}
				const s = n[n.length - 1].node,
					o = pb[s.namespaceURI],
					a = nv(r, o);
				ov(i, mb, ev, a, n, o);
			}),
			address: Qx(mv),
			description: Qx(mv),
			name: Qx(mv),
			open: Qx(fv),
			phoneNumber: Qx(mv),
			styleUrl: Qx(mv),
			visibility: Qx(fv),
		}),
		nb = iv(yv, ['name', 'open', 'visibility', 'address', 'phoneNumber', 'description', 'styleUrl', 'Style']),
		ib = tv('ExtendedData');
	function rb(t, e, n) {
		const i = { node: t };
		e.getId() && t.setAttribute('id', e.getId());
		const r = e.getProperties(),
			s = { address: 1, description: 1, name: 1, open: 1, phoneNumber: 1, styleUrl: 1, visibility: 1 };
		s[e.getGeometryName()] = 1;
		const o = Object.keys(r || {})
				.sort()
				.filter(function (t) {
					return !s[t];
				}),
			a = e.getStyleFunction();
		if (a) {
			const t = a(e, 0);
			if (t) {
				const n = Array.isArray(t) ? t : [t];
				let i = n;
				if (
					(e.getGeometry() &&
						(i = n.filter(function (t) {
							const n = t.getGeometryFunction()(e);
							if (n) {
								const t = n.getType();
								return 'GeometryCollection' === t
									? n.getGeometriesArrayRecursive().filter(function (t) {
											const e = t.getType();
											return 'Point' === e || 'MultiPoint' === e;
									  }).length
									: 'Point' === t || 'MultiPoint' === t;
							}
						})),
					this.writeStyles_)
				) {
					let t = n,
						s = n;
					e.getGeometry() &&
						((t = n.filter(function (t) {
							const n = t.getGeometryFunction()(e);
							if (n) {
								const t = n.getType();
								return 'GeometryCollection' === t
									? n.getGeometriesArrayRecursive().filter(function (t) {
											const e = t.getType();
											return 'LineString' === e || 'MultiLineString' === e;
									  }).length
									: 'LineString' === t || 'MultiLineString' === t;
							}
						})),
						(s = n.filter(function (t) {
							const n = t.getGeometryFunction()(e);
							if (n) {
								const t = n.getType();
								return 'GeometryCollection' === t
									? n.getGeometriesArrayRecursive().filter(function (t) {
											const e = t.getType();
											return 'Polygon' === e || 'MultiPolygon' === e;
									  }).length
									: 'Polygon' === t || 'MultiPolygon' === t;
							}
						}))),
						(r.Style = { pointStyles: i, lineStyles: t, polyStyles: s });
				}
				if (i.length && void 0 === r.name) {
					const t = i[0].getText();
					t && (r.name = t.getText());
				}
			}
		}
		const l = n[n.length - 1].node,
			h = nb[l.namespaceURI],
			c = nv(r, h);
		if ((ov(i, eb, ev, c, n, h), o.length > 0)) {
			const t = nv(r, o);
			ov(i, eb, ib, [{ names: o, values: t }], n);
		}
		const u = n[0];
		let d = e.getGeometry();
		d && (d = dm(d, !0, u)), ov(i, eb, Xw, [d], n);
	}
	const sb = iv(yv, ['extrude', 'tessellate', 'altitudeMode', 'coordinates']),
		ob = iv(yv, {
			extrude: Qx(fv),
			tessellate: Qx(fv),
			altitudeMode: Qx(mv),
			coordinates: Qx(function (t, e, n) {
				const i = n[n.length - 1],
					r = i.layout,
					s = i.stride;
				let o;
				if ('XY' == r || 'XYM' == r) o = 2;
				else {
					if ('XYZ' != r && 'XYZM' != r) throw new Error('Invalid geometry layout');
					o = 3;
				}
				const a = e.length;
				let l = '';
				if (a > 0) {
					l += e[0];
					for (let t = 1; t < o; ++t) l += ',' + e[t];
					for (let t = s; t < a; t += s) {
						l += ' ' + e[t];
						for (let n = 1; n < o; ++n) l += ',' + e[t + n];
					}
				}
				mv(t, l);
			}),
		});
	function ab(t, e, n) {
		const i = e.getFlatCoordinates(),
			r = { node: t };
		(r.layout = e.getLayout()), (r.stride = e.getStride());
		const s = e.getProperties();
		s.coordinates = i;
		const o = n[n.length - 1].node,
			a = sb[o.namespaceURI],
			l = nv(s, a);
		ov(r, ob, ev, l, n, a);
	}
	const lb = iv(yv, ['color', 'fill', 'outline']),
		hb = iv(yv, { outerBoundaryIs: Qx(tb), innerBoundaryIs: Qx(tb) }),
		cb = tv('innerBoundaryIs'),
		ub = tv('outerBoundaryIs');
	function db(t, e, n) {
		const i = e.getLinearRings(),
			r = i.shift(),
			s = { node: t };
		ov(s, hb, cb, i, n), ov(s, hb, ub, [r], n);
	}
	const gb = iv(yv, { color: Qx(Iw), fill: Qx(fv), outline: Qx(fv) });
	function fb(t, e) {
		pv(t, Math.round(1e6 * e) / 1e6);
	}
	const pb = iv(yv, ['IconStyle', 'LabelStyle', 'LineStyle', 'PolyStyle']),
		mb = iv(yv, {
			IconStyle: Qx(function (t, e, n) {
				const i = { node: t },
					r = {},
					s = e.getSrc(),
					o = e.getSize(),
					a = e.getImageSize(),
					l = { href: s };
				if (o) {
					(l.w = o[0]), (l.h = o[1]);
					const t = e.getAnchor(),
						n = e.getOrigin();
					if ((n && a && 0 !== n[0] && n[1] !== o[1] && ((l.x = n[0]), (l.y = a[1] - (n[1] + o[1]))), t && (t[0] !== o[0] / 2 || t[1] !== o[1] / 2))) {
						const e = { x: t[0], xunits: 'pixels', y: o[1] - t[1], yunits: 'pixels' };
						r.hotSpot = e;
					}
				}
				r.Icon = l;
				let h = e.getScaleArray()[0],
					c = o;
				if ((null === c && (c = Iv), 2 == c.length)) {
					h /= $v(c);
				}
				1 !== h && (r.scale = h);
				const u = e.getRotation();
				0 !== u && (r.heading = u);
				const d = e.getColor();
				d && (r.color = d);
				const g = n[n.length - 1].node,
					f = jw[g.namespaceURI],
					p = nv(r, f);
				ov(i, Nw, ev, p, n, f);
			}),
			LabelStyle: Qx(function (t, e, n) {
				const i = { node: t },
					r = {},
					s = e.getFill();
				s && (r.color = s.getColor());
				const o = e.getScale();
				o && 1 !== o && (r.scale = o);
				const a = n[n.length - 1].node,
					l = Uw[a.namespaceURI],
					h = nv(r, l);
				ov(i, $w, ev, h, n, l);
			}),
			LineStyle: Qx(function (t, e, n) {
				const i = { node: t },
					r = { color: e.getColor(), width: Number(e.getWidth()) || 1 },
					s = n[n.length - 1].node,
					o = Bw[s.namespaceURI],
					a = nv(r, o);
				ov(i, Vw, ev, a, n, o);
			}),
			PolyStyle: Qx(function (t, e, n) {
				const i = { node: t },
					r = e.getFill(),
					s = e.getStroke(),
					o = { color: r ? r.getColor() : void 0, fill: !!r && void 0, outline: !!s && void 0 },
					a = n[n.length - 1].node,
					l = lb[a.namespaceURI],
					h = nv(o, l);
				ov(i, gb, ev, h, n, l);
			}),
		});
	const _b = 'GENERATE_POINT_BUFFERS';
	function yb(t, e) {
		const n = 256,
			i = 255;
		return ((e = e || [])[0] = Math.floor(t / n / n / n) / i), (e[1] = (Math.floor(t / n / n) % n) / i), (e[2] = (Math.floor(t / n) % n) / i), (e[3] = (t % n) / i), e;
	}
	const xb = 34962,
		vb = 34963,
		wb = ['experimental-webgl', 'webgl', 'webkit-3d', 'moz-webgl'];
	const bb = 35044;
	class Sb {
		constructor(t, e) {
			(this.array_ = null), (this.type_ = t), Ci(t === xb || t === vb, 'A `WebGLArrayBuffer` must either be of type `ELEMENT_ARRAY_BUFFER` or `ARRAY_BUFFER`'), (this.usage_ = void 0 !== e ? e : bb);
		}
		ofSize(t) {
			return (this.array_ = new (Cb(this.type_))(t)), this;
		}
		fromArray(t) {
			return (this.array_ = Cb(this.type_).from(t)), this;
		}
		fromArrayBuffer(t) {
			return (this.array_ = new (Cb(this.type_))(t)), this;
		}
		getType() {
			return this.type_;
		}
		getArray() {
			return this.array_;
		}
		setArray(t) {
			const e = Cb(this.type_);
			if (!(t instanceof e)) throw new Error(`Expected ${e}`);
			this.array_ = t;
		}
		getUsage() {
			return this.usage_;
		}
		getSize() {
			return this.array_ ? this.array_.length : 0;
		}
	}
	function Cb(t) {
		switch (t) {
			case xb:
				return Float32Array;
			case vb:
				return Uint32Array;
			default:
				return Float32Array;
		}
	}
	var Eb = 'webglcontextlost',
		Tb = 'webglcontextrestored';
	class Pb {
		constructor(t) {
			this.gl_ = t.webGlContext;
			const e = this.gl_;
			(this.scaleRatio_ = t.scaleRatio || 1), (this.renderTargetTexture_ = e.createTexture()), (this.renderTargetTextureSize_ = null), (this.frameBuffer_ = e.createFramebuffer()), (this.depthBuffer_ = e.createRenderbuffer());
			const n = e.createShader(e.VERTEX_SHADER);
			e.shaderSource(n, t.vertexShader || '\n  precision mediump float;\n\n  attribute vec2 a_position;\n  varying vec2 v_texCoord;\n  varying vec2 v_screenCoord;\n\n  uniform vec2 u_screenSize;\n\n  void main() {\n    v_texCoord = a_position * 0.5 + 0.5;\n    v_screenCoord = v_texCoord * u_screenSize;\n    gl_Position = vec4(a_position, 0.0, 1.0);\n  }\n'), e.compileShader(n);
			const i = e.createShader(e.FRAGMENT_SHADER);
			e.shaderSource(i, t.fragmentShader || '\n  precision mediump float;\n\n  uniform sampler2D u_image;\n  uniform float u_opacity;\n\n  varying vec2 v_texCoord;\n\n  void main() {\n    gl_FragColor = texture2D(u_image, v_texCoord) * u_opacity;\n  }\n'), e.compileShader(i), (this.renderTargetProgram_ = e.createProgram()), e.attachShader(this.renderTargetProgram_, n), e.attachShader(this.renderTargetProgram_, i), e.linkProgram(this.renderTargetProgram_), (this.renderTargetVerticesBuffer_ = e.createBuffer());
			e.bindBuffer(e.ARRAY_BUFFER, this.renderTargetVerticesBuffer_),
				e.bufferData(e.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1]), e.STATIC_DRAW),
				(this.renderTargetAttribLocation_ = e.getAttribLocation(this.renderTargetProgram_, 'a_position')),
				(this.renderTargetUniformLocation_ = e.getUniformLocation(this.renderTargetProgram_, 'u_screenSize')),
				(this.renderTargetOpacityLocation_ = e.getUniformLocation(this.renderTargetProgram_, 'u_opacity')),
				(this.renderTargetTextureLocation_ = e.getUniformLocation(this.renderTargetProgram_, 'u_image')),
				(this.uniforms_ = []),
				t.uniforms &&
					Object.keys(t.uniforms).forEach((n) => {
						this.uniforms_.push({ value: t.uniforms[n], location: e.getUniformLocation(this.renderTargetProgram_, n) });
					});
		}
		getRenderTargetTexture() {
			return this.renderTargetTexture_;
		}
		getGL() {
			return this.gl_;
		}
		init(t) {
			const e = this.getGL(),
				n = [e.drawingBufferWidth * this.scaleRatio_, e.drawingBufferHeight * this.scaleRatio_];
			if ((e.bindFramebuffer(e.FRAMEBUFFER, this.getFrameBuffer()), e.bindRenderbuffer(e.RENDERBUFFER, this.getDepthBuffer()), e.viewport(0, 0, n[0], n[1]), !this.renderTargetTextureSize_ || this.renderTargetTextureSize_[0] !== n[0] || this.renderTargetTextureSize_[1] !== n[1])) {
				this.renderTargetTextureSize_ = n;
				const t = 0,
					i = e.RGBA,
					r = 0,
					s = e.RGBA,
					o = e.UNSIGNED_BYTE,
					a = null;
				e.bindTexture(e.TEXTURE_2D, this.renderTargetTexture_), e.texImage2D(e.TEXTURE_2D, t, i, n[0], n[1], r, s, o, a), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.renderTargetTexture_, 0), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, n[0], n[1]), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, this.depthBuffer_);
			}
		}
		apply(t, e, n, i) {
			const r = this.getGL(),
				s = t.size;
			if ((r.bindFramebuffer(r.FRAMEBUFFER, e ? e.getFrameBuffer() : null), r.activeTexture(r.TEXTURE0), r.bindTexture(r.TEXTURE_2D, this.renderTargetTexture_), !e)) {
				const e = wi(r.canvas);
				if (!t.renderTargets[e]) {
					const n = r.getContextAttributes();
					n && n.preserveDrawingBuffer && (r.clearColor(0, 0, 0, 0), r.clearDepth(1), r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT)), (t.renderTargets[e] = !0);
				}
			}
			r.disable(r.DEPTH_TEST), r.enable(r.BLEND), r.blendFunc(r.ONE, r.ONE_MINUS_SRC_ALPHA), r.viewport(0, 0, r.drawingBufferWidth, r.drawingBufferHeight), r.bindBuffer(r.ARRAY_BUFFER, this.renderTargetVerticesBuffer_), r.useProgram(this.renderTargetProgram_), r.enableVertexAttribArray(this.renderTargetAttribLocation_), r.vertexAttribPointer(this.renderTargetAttribLocation_, 2, r.FLOAT, !1, 0, 0), r.uniform2f(this.renderTargetUniformLocation_, s[0], s[1]), r.uniform1i(this.renderTargetTextureLocation_, 0);
			const o = t.layerStatesArray[t.layerIndex].opacity;
			r.uniform1f(this.renderTargetOpacityLocation_, o), this.applyUniforms(t), n && n(r, t), r.drawArrays(r.TRIANGLES, 0, 6), i && i(r, t);
		}
		getFrameBuffer() {
			return this.frameBuffer_;
		}
		getDepthBuffer() {
			return this.depthBuffer_;
		}
		applyUniforms(t) {
			const e = this.getGL();
			let n,
				i = 1;
			this.uniforms_.forEach(function (r) {
				if (((n = 'function' == typeof r.value ? r.value(t) : r.value), n instanceof HTMLCanvasElement || n instanceof ImageData)) r.texture || (r.texture = e.createTexture()), e.activeTexture(e[`TEXTURE${i}`]), e.bindTexture(e.TEXTURE_2D, r.texture), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), n instanceof ImageData ? e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, n.width, n.height, 0, e.UNSIGNED_BYTE, new Uint8Array(n.data)) : e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, n), e.uniform1i(r.location, i++);
				else if (Array.isArray(n))
					switch (n.length) {
						case 2:
							return void e.uniform2f(r.location, n[0], n[1]);
						case 3:
							return void e.uniform3f(r.location, n[0], n[1], n[2]);
						case 4:
							return void e.uniform4f(r.location, n[0], n[1], n[2], n[3]);
						default:
							return;
					}
				else 'number' == typeof n && e.uniform1f(r.location, n);
			});
		}
	}
	const Rb = 'u_projectionMatrix',
		Fb = 'u_time',
		Mb = 'u_zoom',
		Ib = 'u_resolution',
		kb = 'u_rotation',
		Lb = 'u_viewportSizePx',
		Ab = 'u_pixelRatio',
		Db = 'u_hitDetection',
		Ob = 5121,
		zb = 5123,
		Gb = 5125,
		jb = 5126,
		Nb = {};
	function Ub(t) {
		return 'shared/' + t;
	}
	let $b = 0;
	function Bb(t) {
		let e = Nb[t];
		if (!e) {
			const n = document.createElement('canvas');
			(n.width = 1), (n.height = 1), (n.style.position = 'absolute'), (n.style.left = '0');
			const i = (function (t, e) {
				e = Object.assign({ preserveDrawingBuffer: !0, antialias: !Ya }, e);
				const n = wb.length;
				for (let i = 0; i < n; ++i)
					try {
						const n = t.getContext(wb[i], e);
						if (n) return n;
					} catch {}
				return null;
			})(n);
			(e = { users: 0, context: i }), (Nb[t] = e);
		}
		return (e.users += 1), e.context;
	}
	class Vb extends li {
		constructor(t) {
			super(),
				(t = t || {}),
				(this.boundHandleWebGLContextLost_ = this.handleWebGLContextLost.bind(this)),
				(this.boundHandleWebGLContextRestored_ = this.handleWebGLContextRestored.bind(this)),
				(this.canvasCacheKey_ = t.canvasCacheKey
					? Ub(t.canvasCacheKey)
					: (function () {
							const t = 'unique/' + $b;
							return ($b += 1), t;
					  })()),
				(this.gl_ = Bb(this.canvasCacheKey_)),
				(this.bufferCache_ = {}),
				(this.extensionCache_ = {}),
				(this.currentProgram_ = null),
				(this.needsToBeRecreated_ = !1);
			const e = this.gl_.canvas;
			e.addEventListener(Eb, this.boundHandleWebGLContextLost_),
				e.addEventListener(Tb, this.boundHandleWebGLContextRestored_),
				(this.offsetRotateMatrix_ = [1, 0, 0, 1, 0, 0]),
				(this.offsetScaleMatrix_ = [1, 0, 0, 1, 0, 0]),
				(this.tmpMat4_ = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
				(this.uniformLocationsByProgram_ = {}),
				(this.attribLocationsByProgram_ = {}),
				(this.uniforms_ = []),
				t.uniforms && this.setUniforms(t.uniforms),
				(this.postProcessPasses_ = t.postProcesses ? t.postProcesses.map((t) => new Pb({ webGlContext: this.gl_, scaleRatio: t.scaleRatio, vertexShader: t.vertexShader, fragmentShader: t.fragmentShader, uniforms: t.uniforms })) : [new Pb({ webGlContext: this.gl_ })]),
				(this.shaderCompileErrors_ = null),
				(this.startTime_ = Date.now());
		}
		setUniforms(t) {
			(this.uniforms_ = []), this.addUniforms(t);
		}
		addUniforms(t) {
			for (const e in t) this.uniforms_.push({ name: e, value: t[e] });
		}
		canvasCacheKeyMatches(t) {
			return this.canvasCacheKey_ === Ub(t);
		}
		getExtension(t) {
			if (t in this.extensionCache_) return this.extensionCache_[t];
			const e = this.gl_.getExtension(t);
			return (this.extensionCache_[t] = e), e;
		}
		bindBuffer(t) {
			const e = this.gl_,
				n = wi(t);
			let i = this.bufferCache_[n];
			if (!i) {
				(i = { buffer: t, webGlBuffer: e.createBuffer() }), (this.bufferCache_[n] = i);
			}
			e.bindBuffer(t.getType(), i.webGlBuffer);
		}
		flushBufferData(t) {
			const e = this.gl_;
			this.bindBuffer(t), e.bufferData(t.getType(), t.getArray(), t.getUsage());
		}
		deleteBuffer(t) {
			const e = wi(t);
			delete this.bufferCache_[e];
		}
		disposeInternal() {
			const t = this.gl_.canvas;
			t.removeEventListener(Eb, this.boundHandleWebGLContextLost_),
				t.removeEventListener(Tb, this.boundHandleWebGLContextRestored_),
				(function (t) {
					const e = Nb[t];
					if (!e) return;
					if (((e.users -= 1), e.users > 0)) return;
					const n = e.context,
						i = n.getExtension('WEBGL_lose_context');
					i && i.loseContext();
					const r = n.canvas;
					(r.width = 1), (r.height = 1), delete Nb[t];
				})(this.canvasCacheKey_),
				delete this.gl_;
		}
		prepareDraw(t, e, n) {
			const i = this.gl_,
				r = this.getCanvas(),
				s = t.size,
				o = t.pixelRatio;
			(r.width === s[0] * o && r.height === s[1] * o) || ((r.width = s[0] * o), (r.height = s[1] * o), (r.style.width = s[0] + 'px'), (r.style.height = s[1] + 'px'));
			for (let e = this.postProcessPasses_.length - 1; e >= 0; e--) this.postProcessPasses_[e].init(t);
			i.bindTexture(i.TEXTURE_2D, null), i.clearColor(0, 0, 0, 0), i.depthRange(0, 1), i.clearDepth(1), i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT), i.enable(i.BLEND), i.blendFunc(i.ONE, e ? i.ZERO : i.ONE_MINUS_SRC_ALPHA), n ? (i.enable(i.DEPTH_TEST), i.depthFunc(i.LEQUAL)) : i.disable(i.DEPTH_TEST);
		}
		bindFrameBuffer(t, e) {
			const n = this.getGL();
			n.bindFramebuffer(n.FRAMEBUFFER, t), e && n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, e, 0);
		}
		bindInitialFrameBuffer() {
			const t = this.getGL(),
				e = this.postProcessPasses_[0].getFrameBuffer();
			t.bindFramebuffer(t.FRAMEBUFFER, e);
			const n = this.postProcessPasses_[0].getRenderTargetTexture();
			t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n, 0);
		}
		bindTexture(t, e, n) {
			const i = this.gl_;
			i.activeTexture(i.TEXTURE0 + e), i.bindTexture(i.TEXTURE_2D, t), i.uniform1i(this.getUniformLocation(n), e);
		}
		bindAttribute(t, e, n) {
			const i = this.getGL();
			this.bindBuffer(t);
			const r = this.getAttributeLocation(e);
			i.enableVertexAttribArray(r), i.vertexAttribPointer(r, n, i.FLOAT, !1, 0, 0);
		}
		prepareDrawToRenderTarget(t, e, n, i) {
			const r = this.gl_,
				s = e.getSize();
			r.bindFramebuffer(r.FRAMEBUFFER, e.getFramebuffer()), r.bindRenderbuffer(r.RENDERBUFFER, e.getDepthbuffer()), r.viewport(0, 0, s[0], s[1]), r.bindTexture(r.TEXTURE_2D, e.getTexture()), r.clearColor(0, 0, 0, 0), r.depthRange(0, 1), r.clearDepth(1), r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT), r.enable(r.BLEND), r.blendFunc(r.ONE, n ? r.ZERO : r.ONE_MINUS_SRC_ALPHA), i ? (r.enable(r.DEPTH_TEST), r.depthFunc(r.LEQUAL)) : r.disable(r.DEPTH_TEST);
		}
		drawElements(t, e) {
			const n = this.gl_;
			this.getExtension('OES_element_index_uint');
			const i = n.UNSIGNED_INT,
				r = e - t,
				s = 4 * t;
			n.drawElements(n.TRIANGLES, r, i, s);
		}
		finalizeDraw(t, e, n) {
			for (let i = 0, r = this.postProcessPasses_.length; i < r; i++) i === r - 1 ? this.postProcessPasses_[i].apply(t, null, e, n) : this.postProcessPasses_[i].apply(t, this.postProcessPasses_[i + 1]);
		}
		getCanvas() {
			return this.gl_.canvas;
		}
		getGL() {
			return this.gl_;
		}
		applyFrameState(t) {
			const e = t.size,
				n = t.viewState.rotation,
				i = t.pixelRatio;
			this.setUniformFloatValue(Fb, 0.001 * (Date.now() - this.startTime_)), this.setUniformFloatValue(Mb, t.viewState.zoom), this.setUniformFloatValue(Ib, t.viewState.resolution), this.setUniformFloatValue(Ab, i), this.setUniformFloatVec2(Lb, [e[0], e[1]]), this.setUniformFloatValue(kb, n);
		}
		applyHitDetectionUniform(t) {
			const e = this.getUniformLocation(Db);
			this.getGL().uniform1i(e, t ? 1 : 0), t && this.setUniformFloatValue(Ab, 0.5);
		}
		applyUniforms(t) {
			const e = this.gl_;
			let n,
				i = 0;
			this.uniforms_.forEach((r) => {
				if (((n = 'function' == typeof r.value ? r.value(t) : r.value), n instanceof HTMLCanvasElement || n instanceof HTMLImageElement || n instanceof ImageData || n instanceof WebGLTexture)) {
					n instanceof WebGLTexture && !r.texture ? ((r.prevValue = void 0), (r.texture = n)) : r.texture || ((r.prevValue = void 0), (r.texture = e.createTexture())), this.bindTexture(r.texture, i, r.name), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
					const t = !(n instanceof HTMLImageElement) || n.complete;
					n instanceof WebGLTexture || !t || r.prevValue === n || ((r.prevValue = n), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, n)), i++;
				} else if (Array.isArray(n) && 6 === n.length)
					this.setUniformMatrixValue(
						r.name,
						(function (t, e) {
							return (t[0] = e[0]), (t[1] = e[1]), (t[4] = e[2]), (t[5] = e[3]), (t[12] = e[4]), (t[13] = e[5]), t;
						})(this.tmpMat4_, n)
					);
				else if (Array.isArray(n) && n.length <= 4)
					switch (n.length) {
						case 2:
							return void e.uniform2f(this.getUniformLocation(r.name), n[0], n[1]);
						case 3:
							return void e.uniform3f(this.getUniformLocation(r.name), n[0], n[1], n[2]);
						case 4:
							return void e.uniform4f(this.getUniformLocation(r.name), n[0], n[1], n[2], n[3]);
						default:
							return;
					}
				else 'number' == typeof n && e.uniform1f(this.getUniformLocation(r.name), n);
			});
		}
		useProgram(t, e) {
			this.gl_.useProgram(t), (this.currentProgram_ = t), e && (this.applyFrameState(e), this.applyUniforms(e));
		}
		compileShader(t, e) {
			const n = this.gl_,
				i = n.createShader(e);
			return n.shaderSource(i, t), n.compileShader(i), i;
		}
		getProgram(t, e) {
			const n = this.gl_,
				i = this.compileShader(t, n.FRAGMENT_SHADER),
				r = this.compileShader(e, n.VERTEX_SHADER),
				s = n.createProgram();
			if ((n.attachShader(s, i), n.attachShader(s, r), n.linkProgram(s), !n.getShaderParameter(i, n.COMPILE_STATUS))) {
				const t = `Fragment shader compilation failed: ${n.getShaderInfoLog(i)}`;
				throw new Error(t);
			}
			if ((n.deleteShader(i), !n.getShaderParameter(r, n.COMPILE_STATUS))) {
				const t = `Vertex shader compilation failed: ${n.getShaderInfoLog(r)}`;
				throw new Error(t);
			}
			if ((n.deleteShader(r), !n.getProgramParameter(s, n.LINK_STATUS))) {
				const t = `GL program linking failed: ${n.getProgramInfoLog(s)}`;
				throw new Error(t);
			}
			return s;
		}
		getUniformLocation(t) {
			const e = wi(this.currentProgram_);
			return void 0 === this.uniformLocationsByProgram_[e] && (this.uniformLocationsByProgram_[e] = {}), void 0 === this.uniformLocationsByProgram_[e][t] && (this.uniformLocationsByProgram_[e][t] = this.gl_.getUniformLocation(this.currentProgram_, t)), this.uniformLocationsByProgram_[e][t];
		}
		getAttributeLocation(t) {
			const e = wi(this.currentProgram_);
			return void 0 === this.attribLocationsByProgram_[e] && (this.attribLocationsByProgram_[e] = {}), void 0 === this.attribLocationsByProgram_[e][t] && (this.attribLocationsByProgram_[e][t] = this.gl_.getAttribLocation(this.currentProgram_, t)), this.attribLocationsByProgram_[e][t];
		}
		makeProjectionTransform(t, e) {
			const n = t.size,
				i = t.viewState.rotation,
				r = t.viewState.resolution,
				s = t.viewState.center;
			return Go(e, 0, 0, 2 / (r * n[0]), 2 / (r * n[1]), -i, -s[0], -s[1]), e;
		}
		setUniformFloatValue(t, e) {
			this.gl_.uniform1f(this.getUniformLocation(t), e);
		}
		setUniformFloatVec2(t, e) {
			this.gl_.uniform2fv(this.getUniformLocation(t), e);
		}
		setUniformFloatVec4(t, e) {
			this.gl_.uniform4fv(this.getUniformLocation(t), e);
		}
		setUniformMatrixValue(t, e) {
			this.gl_.uniformMatrix4fv(this.getUniformLocation(t), !1, e);
		}
		enableAttributeArray_(t, e, n, i, r) {
			const s = this.getAttributeLocation(t);
			s < 0 || (this.gl_.enableVertexAttribArray(s), this.gl_.vertexAttribPointer(s, e, n, !1, i, r));
		}
		enableAttributes(t) {
			const e = (function (t) {
				let e = 0;
				for (let n = 0; n < t.length; n++) {
					const i = t[n];
					e += i.size * Wb(i.type);
				}
				return e;
			})(t);
			let n = 0;
			for (let i = 0; i < t.length; i++) {
				const r = t[i];
				this.enableAttributeArray_(r.name, r.size, r.type || 5126, e, n), (n += r.size * Wb(r.type));
			}
		}
		handleWebGLContextLost(t) {
			hi(this.bufferCache_), (this.currentProgram_ = null), t.preventDefault();
		}
		handleWebGLContextRestored() {
			this.needsToBeRecreated_ = !0;
		}
		needsToBeRecreated() {
			return this.needsToBeRecreated_;
		}
		createTexture(t, e, n, i) {
			const r = this.gl_;
			n = n || r.createTexture();
			const s = i ? r.NEAREST : r.LINEAR;
			r.bindTexture(r.TEXTURE_2D, n), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, s), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, s), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE);
			const o = r.RGBA,
				a = r.RGBA,
				l = r.UNSIGNED_BYTE;
			return e instanceof Uint8Array ? r.texImage2D(r.TEXTURE_2D, 0, o, t[0], t[1], 0, a, l, e) : e ? r.texImage2D(r.TEXTURE_2D, 0, o, a, l, e) : r.texImage2D(r.TEXTURE_2D, 0, o, t[0], t[1], 0, a, l, null), n;
		}
	}
	function Wb(t) {
		switch (t) {
			case Ob:
				return Uint8Array.BYTES_PER_ELEMENT;
			case zb:
				return Uint16Array.BYTES_PER_ELEMENT;
			case Gb:
				return Uint32Array.BYTES_PER_ELEMENT;
			default:
				return Float32Array.BYTES_PER_ELEMENT;
		}
	}
	const Xb = new Uint8Array(4);
	class qb {
		constructor(t, e) {
			this.helper_ = t;
			const n = t.getGL();
			(this.texture_ = n.createTexture()), (this.framebuffer_ = n.createFramebuffer()), (this.depthbuffer_ = n.createRenderbuffer()), (this.size_ = e || [1, 1]), (this.data_ = new Uint8Array(0)), (this.dataCacheDirty_ = !0), this.updateSize_();
		}
		setSize(t) {
			$n(t, this.size_) || ((this.size_[0] = t[0]), (this.size_[1] = t[1]), this.updateSize_());
		}
		getSize() {
			return this.size_;
		}
		clearCachedData() {
			this.dataCacheDirty_ = !0;
		}
		readAll() {
			if (this.dataCacheDirty_) {
				const t = this.size_,
					e = this.helper_.getGL();
				e.bindFramebuffer(e.FRAMEBUFFER, this.framebuffer_), e.readPixels(0, 0, t[0], t[1], e.RGBA, e.UNSIGNED_BYTE, this.data_), (this.dataCacheDirty_ = !1);
			}
			return this.data_;
		}
		readPixel(t, e) {
			if (t < 0 || e < 0 || t > this.size_[0] || e >= this.size_[1]) return (Xb[0] = 0), (Xb[1] = 0), (Xb[2] = 0), (Xb[3] = 0), Xb;
			this.readAll();
			const n = Math.floor(t) + (this.size_[1] - Math.floor(e) - 1) * this.size_[0];
			return (Xb[0] = this.data_[4 * n]), (Xb[1] = this.data_[4 * n + 1]), (Xb[2] = this.data_[4 * n + 2]), (Xb[3] = this.data_[4 * n + 3]), Xb;
		}
		getTexture() {
			return this.texture_;
		}
		getFramebuffer() {
			return this.framebuffer_;
		}
		getDepthbuffer() {
			return this.depthbuffer_;
		}
		updateSize_() {
			const t = this.size_,
				e = this.helper_.getGL();
			(this.texture_ = this.helper_.createTexture(t, null, this.texture_)), e.bindFramebuffer(e.FRAMEBUFFER, this.framebuffer_), e.viewport(0, 0, t[0], t[1]), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture_, 0), e.bindRenderbuffer(e.RENDERBUFFER, this.depthbuffer_), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, t[0], t[1]), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, this.depthbuffer_), (this.data_ = new Uint8Array(t[0] * t[1] * 4));
		}
	}
	class Zb extends Jc {
		constructor(t, e) {
			super(t),
				(e = e || {}),
				(this.inversePixelTransform_ = [1, 0, 0, 1, 0, 0]),
				(this.postProcesses_ = e.postProcesses),
				(this.uniforms_ = e.uniforms),
				this.helper,
				(this.onMapChanged_ = () => {
					this.clearCache(), this.removeHelper();
				}),
				t.addChangeListener(bg, this.onMapChanged_),
				(this.dispatchPreComposeEvent = this.dispatchPreComposeEvent.bind(this)),
				(this.dispatchPostComposeEvent = this.dispatchPostComposeEvent.bind(this));
		}
		dispatchPreComposeEvent(t, e) {
			const n = this.getLayer();
			if (n.hasListener(ph)) {
				const i = new Hc(ph, void 0, e, t);
				n.dispatchEvent(i);
			}
		}
		dispatchPostComposeEvent(t, e) {
			const n = this.getLayer();
			if (n.hasListener(mh)) {
				const i = new Hc(mh, void 0, e, t);
				n.dispatchEvent(i);
			}
		}
		reset(t) {
			(this.uniforms_ = t.uniforms), this.helper && this.helper.setUniforms(this.uniforms_);
		}
		removeHelper() {
			this.helper && (this.helper.dispose(), delete this.helper);
		}
		prepareFrame(t) {
			if (this.getLayer().getRenderSource()) {
				let e,
					n = !0,
					i = -1;
				for (let r = 0, s = t.layerStatesArray.length; r < s; r++) {
					const s = t.layerStatesArray[r].layer,
						o = s.getRenderer();
					if (!(o instanceof Zb)) {
						n = !0;
						continue;
					}
					const a = s.getClassName();
					if (((n || a !== e) && ((i += 1), (n = !1)), (e = a), o === this)) break;
				}
				const r = 'map/' + t.mapId + '/group/' + i;
				(this.helper && this.helper.canvasCacheKeyMatches(r) && !this.helper.needsToBeRecreated()) || (this.removeHelper(), (this.helper = new Vb({ postProcesses: this.postProcesses_, uniforms: this.uniforms_, canvasCacheKey: r })), e && (this.helper.getCanvas().className = e), this.afterHelperCreated());
			}
			return this.prepareFrameInternal(t);
		}
		afterHelperCreated() {}
		prepareFrameInternal(t) {
			return !0;
		}
		clearCache() {}
		disposeInternal() {
			this.clearCache(), this.removeHelper(), this.getLayer()?.removeChangeListener(bg, this.onMapChanged_), super.disposeInternal();
		}
		dispatchRenderEvent_(t, e, n) {
			const i = this.getLayer();
			if (i.hasListener(t)) {
				Go(this.inversePixelTransform_, 0, 0, n.pixelRatio, -n.pixelRatio, 0, 0, -n.size[1]);
				const r = new Hc(t, this.inversePixelTransform_, n, e);
				i.dispatchEvent(r);
			}
		}
		preRender(t, e) {
			this.dispatchRenderEvent_(gh, t, e);
		}
		postRender(t, e) {
			this.dispatchRenderEvent_(fh, t, e);
		}
	}
	class Kb extends Zb {
		constructor(t, e) {
			const n = e.uniforms || {},
				i = [1, 0, 0, 1, 0, 0];
			(n[Rb] = i), super(t, { uniforms: n, postProcesses: e.postProcesses }), (this.sourceRevision_ = -1), (this.verticesBuffer_ = new Sb(xb, 35048)), (this.indicesBuffer_ = new Sb(vb, 35048)), (this.vertexShader_ = e.vertexShader), (this.fragmentShader_ = e.fragmentShader), this.program_, (this.hitDetectionEnabled_ = e.hitDetectionEnabled ?? !0);
			const r = e.attributes
				? e.attributes.map(function (t) {
						return { name: 'a_' + t.name, size: 1, type: jb };
				  })
				: [];
			(this.attributes = [
				{ name: 'a_position', size: 2, type: jb },
				{ name: 'a_index', size: 1, type: jb },
			]),
				this.hitDetectionEnabled_ && (this.attributes.push({ name: 'a_hitColor', size: 4, type: jb }), this.attributes.push({ name: 'a_featureUid', size: 1, type: jb })),
				this.attributes.push(...r),
				(this.customAttributes = e.attributes ? e.attributes : []),
				(this.previousExtent_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0]),
				(this.currentTransform_ = i),
				(this.renderTransform_ = [1, 0, 0, 1, 0, 0]),
				(this.invertRenderTransform_ = [1, 0, 0, 1, 0, 0]),
				(this.renderInstructions_ = new Float32Array(0)),
				this.hitRenderTarget_,
				(this.lastSentId = 0),
				(this.worker_ = (function () {
					const t =
						'const t="GENERATE_POLYGON_BUFFERS",e="GENERATE_POINT_BUFFERS",n="GENERATE_LINE_STRING_BUFFERS";function r(t,e,n=2){const r=e&&e.length,o=r?e[0]*n:t.length;let u=x(t,0,o,n,!0);const f=[];if(!u||u.next===u.prev)return f;let s,l,h;if(r&&(u=function(t,e,n,r){const o=[];for(let n=0,i=e.length;n<i;n++){const u=x(t,e[n]*r,n<i-1?e[n+1]*r:t.length,r,!1);u===u.next&&(u.steiner=!0),o.push(p(u))}o.sort(c);for(let t=0;t<o.length;t++)n=a(o[t],n);return n}(t,e,u,n)),t.length>80*n){s=1/0,l=1/0;let e=-1/0,r=-1/0;for(let x=n;x<o;x+=n){const n=t[x],o=t[x+1];n<s&&(s=n),o<l&&(l=o),n>e&&(e=n),o>r&&(r=o)}h=Math.max(e-s,r-l),h=0!==h?32767/h:0}return i(u,f,n,s,l,h,0),f}function x(t,e,n,r,x){let o;if(x===function(t,e,n,r){let x=0;for(let o=e,i=n-r;o<n;o+=r)x+=(t[i]-t[o])*(t[o+1]+t[i+1]),i=o;return x}(t,e,n,r)>0)for(let x=e;x<n;x+=r)o=I(x/r|0,t[x],t[x+1],o);else for(let x=n-r;x>=e;x-=r)o=I(x/r|0,t[x],t[x+1],o);return o&&m(o,o.next)&&(z(o),o=o.next),o}function o(t,e){if(!t)return t;e||(e=t);let n,r=t;do{if(n=!1,r.steiner||!m(r,r.next)&&0!==M(r.prev,r,r.next))r=r.next;else{if(z(r),r=e=r.prev,r===r.next)break;n=!0}}while(n||r!==e);return e}function i(t,e,n,r,x,c,a){if(!t)return;!a&&c&&function(t,e,n,r){let x=t;do{0===x.z&&(x.z=y(x.x,x.y,e,n,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==t);x.prevZ.nextZ=null,x.prevZ=null,function(t){let e,n=1;do{let r,x=t;t=null;let o=null;for(e=0;x;){e++;let i=x,u=0;for(let t=0;t<n&&(u++,i=i.nextZ,i);t++);let f=n;for(;u>0||f>0&&i;)0!==u&&(0===f||!i||x.z<=i.z)?(r=x,x=x.nextZ,u--):(r=i,i=i.nextZ,f--),o?o.nextZ=r:t=r,r.prevZ=o,o=r;x=i}o.nextZ=null,n*=2}while(e>1)}(x)}(t,r,x,c);let h=t;for(;t.prev!==t.next;){const y=t.prev,p=t.next;if(c?f(t,r,x,c):u(t))e.push(y.i,t.i,p.i),z(t),t=p.next,h=p.next;else if((t=p)===h){a?1===a?i(t=s(o(t),e),e,n,r,x,c,2):2===a&&l(t,e,n,r,x,c):i(o(t),e,n,r,x,c,1);break}}}function u(t){const e=t.prev,n=t,r=t.next;if(M(e,n,r)>=0)return!1;const x=e.x,o=n.x,i=r.x,u=e.y,f=n.y,s=r.y,l=Math.min(x,o,i),c=Math.min(u,f,s),a=Math.max(x,o,i),h=Math.max(u,f,s);let y=r.next;for(;y!==e;){if(y.x>=l&&y.x<=a&&y.y>=c&&y.y<=h&&g(x,u,o,f,i,s,y.x,y.y)&&M(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function f(t,e,n,r){const x=t.prev,o=t,i=t.next;if(M(x,o,i)>=0)return!1;const u=x.x,f=o.x,s=i.x,l=x.y,c=o.y,a=i.y,h=Math.min(u,f,s),p=Math.min(l,c,a),v=Math.max(u,f,s),b=Math.max(l,c,a),m=y(h,p,e,n,r),Z=y(v,b,e,n,r);let d=t.prevZ,w=t.nextZ;for(;d&&d.z>=m&&w&&w.z<=Z;){if(d.x>=h&&d.x<=v&&d.y>=p&&d.y<=b&&d!==x&&d!==i&&g(u,l,f,c,s,a,d.x,d.y)&&M(d.prev,d,d.next)>=0)return!1;if(d=d.prevZ,w.x>=h&&w.x<=v&&w.y>=p&&w.y<=b&&w!==x&&w!==i&&g(u,l,f,c,s,a,w.x,w.y)&&M(w.prev,w,w.next)>=0)return!1;w=w.nextZ}for(;d&&d.z>=m;){if(d.x>=h&&d.x<=v&&d.y>=p&&d.y<=b&&d!==x&&d!==i&&g(u,l,f,c,s,a,d.x,d.y)&&M(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;w&&w.z<=Z;){if(w.x>=h&&w.x<=v&&w.y>=p&&w.y<=b&&w!==x&&w!==i&&g(u,l,f,c,s,a,w.x,w.y)&&M(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function s(t,e){let n=t;do{const r=n.prev,x=n.next.next;!m(r,x)&&Z(r,n,n.next,x)&&A(r,x)&&A(x,r)&&(e.push(r.i,n.i,x.i),z(n),z(n.next),n=t=x),n=n.next}while(n!==t);return o(n)}function l(t,e,n,r,x,u){let f=t;do{let t=f.next.next;for(;t!==f.prev;){if(f.i!==t.i&&b(f,t)){let s=E(f,t);return f=o(f,f.next),s=o(s,s.next),i(f,e,n,r,x,u,0),void i(s,e,n,r,x,u,0)}t=t.next}f=f.next}while(f!==t)}function c(t,e){let n=t.x-e.x;if(0===n&&(n=t.y-e.y,0===n)){n=(t.next.y-t.y)/(t.next.x-t.x)-(e.next.y-e.y)/(e.next.x-e.x)}return n}function a(t,e){const n=function(t,e){let n=e;const r=t.x,x=t.y;let o,i=-1/0;if(m(t,n))return n;do{if(m(t,n.next))return n.next;if(x<=n.y&&x>=n.next.y&&n.next.y!==n.y){const t=n.x+(x-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(t<=r&&t>i&&(i=t,o=n.x<n.next.x?n:n.next,t===r))return o}n=n.next}while(n!==e);if(!o)return null;const u=o,f=o.x,s=o.y;let l=1/0;n=o;do{if(r>=n.x&&n.x>=f&&r!==n.x&&v(x<s?r:i,x,f,s,x<s?i:r,x,n.x,n.y)){const e=Math.abs(x-n.y)/(r-n.x);A(n,t)&&(e<l||e===l&&(n.x>o.x||n.x===o.x&&h(o,n)))&&(o=n,l=e)}n=n.next}while(n!==u);return o}(t,e);if(!n)return e;const r=E(n,t);return o(r,r.next),o(n,n.next)}function h(t,e){return M(t.prev,t,e.prev)<0&&M(e.next,t,t.next)<0}function y(t,e,n,r,x){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-n)*x|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-r)*x|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function p(t){let e=t,n=t;do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next}while(e!==t);return n}function v(t,e,n,r,x,o,i,u){return(x-i)*(e-u)>=(t-i)*(o-u)&&(t-i)*(r-u)>=(n-i)*(e-u)&&(n-i)*(o-u)>=(x-i)*(r-u)}function g(t,e,n,r,x,o,i,u){return!(t===i&&e===u)&&v(t,e,n,r,x,o,i,u)}function b(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Z(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}(t,e)&&(A(t,e)&&A(e,t)&&function(t,e){let n=t,r=!1;const x=(t.x+e.x)/2,o=(t.y+e.y)/2;do{n.y>o!=n.next.y>o&&n.next.y!==n.y&&x<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==t);return r}(t,e)&&(M(t.prev,t,e.prev)||M(t,e.prev,e))||m(t,e)&&M(t.prev,t,t.next)>0&&M(e.prev,e,e.next)>0)}function M(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function m(t,e){return t.x===e.x&&t.y===e.y}function Z(t,e,n,r){const x=w(M(t,e,n)),o=w(M(t,e,r)),i=w(M(n,r,t)),u=w(M(n,r,e));return x!==o&&i!==u||(!(0!==x||!d(t,n,e))||(!(0!==o||!d(t,r,e))||(!(0!==i||!d(n,t,r))||!(0!==u||!d(n,e,r)))))}function d(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function w(t){return t>0?1:t<0?-1:0}function A(t,e){return M(t.prev,t,t.next)<0?M(t,e,t.next)>=0&&M(t,t.prev,e)>=0:M(t,e,t.prev)<0||M(t,t.next,e)<0}function E(t,e){const n=F(t.i,t.x,t.y),r=F(e.i,e.x,e.y),x=t.next,o=e.prev;return t.next=e,e.prev=t,n.next=x,x.prev=n,r.next=n,n.prev=r,o.next=r,r.prev=o,r}function I(t,e,n,r){const x=F(t,e,n);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function z(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function F(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function P(t,e){const n=e[0],r=e[1];return e[0]=t[0]*n+t[2]*r+t[4],e[1]=t[1]*n+t[3]*r+t[5],e}function B(t,e){const n=(r=e)[0]*r[3]-r[1]*r[2];var r;!function(t,e){if(!t)throw new Error(e)}(0!==n,"Transformation matrix cannot be inverted");const x=e[0],o=e[1],i=e[2],u=e[3],f=e[4],s=e[5];return t[0]=u/n,t[1]=-o/n,t[2]=-i/n,t[3]=x/n,t[4]=(i*s-u*f)/n,t[5]=-(x*s-o*f)/n,t}new Array(6);const N=[],R={vertexPosition:0,indexPosition:0};function S(t,e,n,r,x){t[e+0]=n,t[e+1]=r,t[e+2]=x}function T(t,e,n,r,x,o){const i=3+x,u=t[e+0],f=t[e+1],s=N;s.length=x;for(let n=0;n<s.length;n++)s[n]=t[e+2+n];let l=o?o.vertexPosition:0,c=o?o.indexPosition:0;const a=l/i;return S(n,l,u,f,0),s.length&&n.set(s,l+3),l+=i,S(n,l,u,f,1),s.length&&n.set(s,l+3),l+=i,S(n,l,u,f,2),s.length&&n.set(s,l+3),l+=i,S(n,l,u,f,3),s.length&&n.set(s,l+3),l+=i,r[c++]=a,r[c++]=a+1,r[c++]=a+3,r[c++]=a+1,r[c++]=a+2,r[c++]=a+3,R.vertexPosition=l,R.indexPosition=c,R}function _(t,e,n,r,x,o,i,u,f,s,l){const c=10+u.length,a=o.length/c,h=[t[e+0],t[e+1]],y=[t[n],t[n+1]],p=t[e+2],v=t[n+2],g=P(f,[...h]),b=P(f,[...y]);function M(t,e,n){const r=Math.sqrt((e[0]-t[0])*(e[0]-t[0])+(e[1]-t[1])*(e[1]-t[1])),x=[(e[0]-t[0])/r,(e[1]-t[1])/r],o=[-x[1],x[0]],i=Math.sqrt((n[0]-t[0])*(n[0]-t[0])+(n[1]-t[1])*(n[1]-t[1])),u=[(n[0]-t[0])/i,(n[1]-t[1])/i],f=0===r||0===i?0:Math.acos((s=u[0]*x[0]+u[1]*x[1],l=-1,c=1,Math.min(Math.max(s,l),c)));var s,l,c;return u[0]*o[0]+u[1]*o[1]>0?f:2*Math.PI-f}let m=-1,Z=-1,d=l;const w=null!==x;if(null!==r){m=M(g,b,P(f,[...[t[r],t[r+1]]])),Math.cos(m)<=.985&&(d+=Math.tan((m-Math.PI)/2))}if(w){Z=M(b,g,P(f,[...[t[x],t[x+1]]])),Math.cos(Z)<=.985&&(d+=Math.tan((Math.PI-Z)/2))}function A(t,e){return 0===e?1e4*t:Math.sign(e)*(1e4*t+Math.abs(e))}return o.push(h[0],h[1],p,y[0],y[1],v,m,Z,s,A(0,l)),o.push(...u),o.push(h[0],h[1],p,y[0],y[1],v,m,Z,s,A(1,l)),o.push(...u),o.push(h[0],h[1],p,y[0],y[1],v,m,Z,s,A(2,l)),o.push(...u),o.push(h[0],h[1],p,y[0],y[1],v,m,Z,s,A(3,l)),o.push(...u),i.push(a,a+1,a+2,a+1,a+3,a+2),{length:s+Math.sqrt((b[0]-g[0])*(b[0]-g[0])+(b[1]-g[1])*(b[1]-g[1])),angle:d}}function O(t,e,n,x,o){const i=2+o;let u=e;const f=t.slice(u,u+o);u+=o;const s=t[u++];let l=0;const c=new Array(s-1);for(let e=0;e<s;e++)l+=t[u++],e<s-1&&(c[e]=l);const a=t.slice(u,u+2*l),h=r(a,c,2);for(let t=0;t<h.length;t++)x.push(h[t]+n.length/i);for(let t=0;t<a.length;t+=2)n.push(a[t],a[t+1],...f);return u+2*l}const U=self;U.onmessage=r=>{const x=r.data;switch(x.type){case e:{const t=3,e=2,n=x.customAttributesSize,r=e+n,o=new Float32Array(x.renderInstructions),i=o.length/r,u=4*i*(n+t),f=new Uint32Array(6*i),s=new Float32Array(u);let l;for(let t=0;t<o.length;t+=r)l=T(o,t,s,f,n,l);const c=Object.assign({vertexBuffer:s.buffer,indexBuffer:f.buffer,renderInstructions:o.buffer},x);U.postMessage(c,[s.buffer,f.buffer,o.buffer]);break}case n:{const t=[],e=[],n=x.customAttributesSize,r=3,o=new Float32Array(x.renderInstructions);let i=0;const u=[1,0,0,1,0,0];let f,s;for(B(u,x.renderInstructionsTransform);i<o.length;){s=Array.from(o.slice(i,i+n)),i+=n,f=o[i++];const x=i,l=i+(f-1)*r,c=o[x]===o[l]&&o[x+1]===o[l+1];let a=0,h=0;for(let n=0;n<f-1;n++){let y=null;n>0?y=i+(n-1)*r:c&&(y=l-r);let p=null;n<f-2?p=i+(n+2)*r:c&&(p=x+r);const v=_(o,i+n*r,i+(n+1)*r,y,p,t,e,s,u,a,h);a=v.length,h=v.angle}i+=f*r}const l=Uint32Array.from(e),c=Float32Array.from(t),a=Object.assign({vertexBuffer:c.buffer,indexBuffer:l.buffer,renderInstructions:o.buffer},x);U.postMessage(a,[c.buffer,l.buffer,o.buffer]);break}case t:{const t=[],e=[],n=x.customAttributesSize,r=new Float32Array(x.renderInstructions);let o=0;for(;o<r.length;)o=O(r,o,t,e,n);const i=Uint32Array.from(e),u=Float32Array.from(t),f=Object.assign({vertexBuffer:u.buffer,indexBuffer:i.buffer,renderInstructions:r.buffer},x);U.postMessage(f,[u.buffer,i.buffer,r.buffer]);break}}};';
					return new Worker('undefined' == typeof Blob ? 'data:application/javascript;base64,' + Buffer.from(t, 'binary').toString('base64') : URL.createObjectURL(new Blob([t], { type: 'application/javascript' })));
				})()),
				this.worker_.addEventListener('message', (t) => {
					const e = t.data;
					if (e.type === _b) {
						const n = e.projectionTransform;
						this.verticesBuffer_.fromArrayBuffer(e.vertexBuffer), this.helper.flushBufferData(this.verticesBuffer_), this.indicesBuffer_.fromArrayBuffer(e.indexBuffer), this.helper.flushBufferData(this.indicesBuffer_), (this.renderTransform_ = n), jo(this.invertRenderTransform_, this.renderTransform_), (this.renderInstructions_ = new Float32Array(t.data.renderInstructions)), e.id === this.lastSentId && (this.ready = !0), this.getLayer().changed();
					}
				}),
				(this.featureCache_ = {}),
				(this.featureCount_ = 0);
			const s = this.getLayer().getSource();
			(this.sourceListenKeys_ = [gi(s, Yh, this.handleSourceFeatureAdded_, this), gi(s, Hh, this.handleSourceFeatureChanged_, this), gi(s, Qh, this.handleSourceFeatureDelete_, this), gi(s, Jh, this.handleSourceFeatureClear_, this)]),
				s.forEachFeature((t) => {
					const e = t.getGeometry();
					e && 'Point' === e.getType() && ((this.featureCache_[wi(t)] = { feature: t, properties: t.getProperties(), flatCoordinates: e.getFlatCoordinates() }), this.featureCount_++);
				});
		}
		afterHelperCreated() {
			(this.program_ = this.helper.getProgram(this.fragmentShader_, this.vertexShader_)), this.hitDetectionEnabled_ && (this.hitRenderTarget_ = new qb(this.helper)), this.verticesBuffer_.getArray() && this.helper.flushBufferData(this.verticesBuffer_), this.indicesBuffer_.getArray() && this.helper.flushBufferData(this.indicesBuffer_);
		}
		handleSourceFeatureAdded_(t) {
			const e = t.feature,
				n = e.getGeometry();
			n && 'Point' === n.getType() && ((this.featureCache_[wi(e)] = { feature: e, properties: e.getProperties(), flatCoordinates: n.getFlatCoordinates() }), this.featureCount_++);
		}
		handleSourceFeatureChanged_(t) {
			const e = t.feature,
				n = wi(e),
				i = this.featureCache_[n],
				r = e.getGeometry();
			i ? (r && 'Point' === r.getType() ? ((i.properties = e.getProperties()), (i.flatCoordinates = r.getFlatCoordinates())) : (delete this.featureCache_[n], this.featureCount_--)) : r && 'Point' === r.getType() && ((this.featureCache_[n] = { feature: e, properties: e.getProperties(), flatCoordinates: r.getFlatCoordinates() }), this.featureCount_++);
		}
		handleSourceFeatureDelete_(t) {
			const e = wi(t.feature);
			e in this.featureCache_ && (delete this.featureCache_[e], this.featureCount_--);
		}
		handleSourceFeatureClear_() {
			(this.featureCache_ = {}), (this.featureCount_ = 0);
		}
		renderFrame(t) {
			const e = this.helper.getGL();
			this.preRender(e, t);
			const [n, i, r] = (function (t, e) {
				const n = t.viewState.projection,
					i = e.getSource().getWrapX() && n.canWrapX(),
					r = n.getExtent(),
					s = t.extent,
					o = i ? lr(r) : null,
					a = i ? Math.ceil((s[2] - r[2]) / o) + 1 : 1;
				return [i ? Math.floor((s[0] - r[0]) / o) : 0, a, o];
			})(t, this.getLayer());
			this.renderWorlds(t, !1, n, i, r), this.helper.finalizeDraw(t, this.dispatchPreComposeEvent, this.dispatchPostComposeEvent), this.hitDetectionEnabled_ && (this.renderWorlds(t, !0, n, i, r), this.hitRenderTarget_.clearCachedData()), this.postRender(e, t);
			return this.helper.getCanvas();
		}
		prepareFrameInternal(t) {
			const e = this.getLayer(),
				n = e.getSource(),
				i = t.viewState,
				r = !t.viewHints[sc] && !t.viewHints[oc],
				s = !Wi(this.previousExtent_, t.extent),
				o = this.sourceRevision_ < n.getRevision();
			if ((o && (this.sourceRevision_ = n.getRevision()), r && (s || o))) {
				const r = i.projection,
					s = i.resolution,
					o = e instanceof Pg ? e.getRenderBuffer() : 0,
					a = Li(t.extent, o * s);
				n.loadFeatures(a, s, r), this.rebuildBuffers_(t), (this.previousExtent_ = t.extent.slice());
			}
			return this.helper.useProgram(this.program_, t), this.helper.prepareDraw(t), this.helper.bindBuffer(this.verticesBuffer_), this.helper.bindBuffer(this.indicesBuffer_), this.helper.enableAttributes(this.attributes), !0;
		}
		rebuildBuffers_(t) {
			const e = [1, 0, 0, 1, 0, 0];
			this.helper.makeProjectionTransform(t, e);
			const n = So(),
				i = (this.hitDetectionEnabled_ ? 7 : 2) + this.customAttributes.length,
				r = i * this.featureCount_,
				s = this.renderInstructions_ && this.renderInstructions_.length === r ? this.renderInstructions_ : new Float32Array(r);
			this.renderInstructions_ = null;
			let o = [];
			const a = [];
			let l = -1;
			const h = t.viewState.projection;
			for (const t in this.featureCache_) {
				const i = this.featureCache_[t];
				if ((n ? (o = Eo(i.flatCoordinates, h)) : ((o[0] = i.flatCoordinates[0]), (o[1] = i.flatCoordinates[1])), Do(e, o), (s[++l] = o[0]), (s[++l] = o[1]), this.hitDetectionEnabled_)) {
					const e = yb(l + 5, a);
					(s[++l] = e[0]), (s[++l] = e[1]), (s[++l] = e[2]), (s[++l] = e[3]), (s[++l] = Number(t));
				}
				for (let t = 0; t < this.customAttributes.length; t++) {
					const e = this.customAttributes[t].callback(i.feature, i.properties);
					s[++l] = e;
				}
			}
			const c = { id: ++this.lastSentId, type: _b, renderInstructions: s.buffer, customAttributesSize: i - 2 };
			(c.projectionTransform = e), (this.ready = !1), this.worker_.postMessage(c, [s.buffer]);
		}
		forEachFeatureAtCoordinate(t, e, n, i, r) {
			if ((Ci(this.hitDetectionEnabled_, '`forEachFeatureAtCoordinate` cannot be used on a WebGL layer if the hit detection logic has been disabled using the `disableHitDetection: true` option.'), !this.renderInstructions_ || !this.hitDetectionEnabled_)) return;
			const s = Do(e.coordinateToPixelTransform, t.slice()),
				o = this.hitRenderTarget_.readPixel(s[0] / 2, s[1] / 2),
				a = (function (t) {
					let e = 0;
					const n = 256,
						i = 255;
					return (e += Math.round(t[0] * n * n * n * i)), (e += Math.round(t[1] * n * n * i)), (e += Math.round(t[2] * n * i)), (e += Math.round(t[3] * i)), e;
				})([o[0] / 255, o[1] / 255, o[2] / 255, o[3] / 255]),
				l = this.renderInstructions_[a],
				h = Math.floor(l).toString(),
				c = this.getLayer().getSource().getFeatureByUid(h);
			return c ? i(c, this.getLayer(), null) : void 0;
		}
		renderWorlds(t, e, n, i, r) {
			let s = n;
			this.helper.useProgram(this.program_, t), e && (this.hitRenderTarget_.setSize([Math.floor(t.size[0] / 2), Math.floor(t.size[1] / 2)]), this.helper.prepareDrawToRenderTarget(t, this.hitRenderTarget_, !0)), this.helper.bindBuffer(this.verticesBuffer_), this.helper.bindBuffer(this.indicesBuffer_), this.helper.enableAttributes(this.attributes);
			do {
				this.helper.makeProjectionTransform(t, this.currentTransform_), zo(this.currentTransform_, s * r, 0), Lo(this.currentTransform_, this.invertRenderTransform_), this.helper.applyUniforms(t), this.helper.applyHitDetectionUniform(e);
				const n = this.indicesBuffer_.getSize();
				this.helper.drawElements(0, n);
			} while (++s < i);
		}
		disposeInternal() {
			this.worker_.terminate(),
				this.sourceListenKeys_.forEach(function (t) {
					pi(t);
				}),
				(this.sourceListenKeys_ = null),
				super.disposeInternal();
		}
		renderDeclutter() {}
	}
	const Yb = 'u_tileTextures',
		Hb = 'u_texturePixelWidth',
		Jb = 'u_texturePixelHeight';
	class Qb {
		constructor(t, e) {
			(this.name = t), (this.data = e), (this.texture_ = null);
		}
		getTexture(t) {
			if (!this.texture_) {
				const e = t.createTexture();
				t.bindTexture(t.TEXTURE_2D, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.data.length / 4, 1, 0, t.RGBA, t.UNSIGNED_BYTE, this.data), (this.texture_ = e);
			}
			return this.texture_;
		}
		delete(t) {
			this.texture_ && t.deleteTexture(this.texture_), (this.texture_ = null);
		}
	}
	function tS(t) {
		const e = t.toString();
		return e.includes('.') ? e : e + '.0';
	}
	function eS(t) {
		if (t.length < 2 || t.length > 4) throw new Error('`formatArray` can only output `vec2`, `vec3` or `vec4` arrays.');
		return `vec${t.length}(${t.map(tS).join(', ')})`;
	}
	function nS(t) {
		const e = Wa(t),
			n = e.length > 3 ? e[3] : 1;
		return eS([e[0] / 255, e[1] / 255, e[2] / 255, n]);
	}
	const iS = {};
	let rS = 0;
	function sS(t) {
		return t in iS || (iS[t] = rS++), iS[t];
	}
	function oS(t) {
		return tS(sS(t));
	}
	function aS(t) {
		return 'u_var_' + t;
	}
	const lS = 'getBandValue',
		hS = 'featureId',
		cS = 'geometryType';
	function uS(t) {
		return (e, n, i) => {
			const r = n.args.length,
				s = new Array(r);
			for (let t = 0; t < r; ++t) s[t] = gS(n.args[t], i, e);
			return t(s, e);
		};
	}
	const dS = {
		[vu]: (t, e) => {
			const n = e.args[0].value;
			n in t.properties || (t.properties[n] = { name: n, type: e.type });
			return (t.inFragmentShader ? 'v_prop_' : 'a_prop_') + n;
		},
		[ld]: (t) => {
			t.featureId = !0;
			return (t.inFragmentShader ? 'v_' : 'a_') + hS;
		},
		[Su]: (t) => {
			t.geometryType = !0;
			return (t.inFragmentShader ? 'v_' : 'a_') + cS;
		},
		[Cu]: () => 'currentLineMetric',
		[wu]: (t, e) => {
			const n = e.args[0].value;
			return n in t.variables || (t.variables[n] = { name: n, type: e.type }), aS(n);
		},
		[Ru]: () => 'u_resolution',
		[Fu]: () => 'u_zoom',
		[Mu]: () => 'u_time',
		[Eu]: uS((t) => `(${t.join(' || ')})`),
		[Tu]: uS((t) => `(${t.join(' && ')})`),
		[Pu]: uS(([t]) => `(!${t})`),
		[Iu]: uS(([t, e]) => `(${t} == ${e})`),
		[ku]: uS(([t, e]) => `(${t} != ${e})`),
		[Lu]: uS(([t, e]) => `(${t} > ${e})`),
		[Au]: uS(([t, e]) => `(${t} >= ${e})`),
		[Du]: uS(([t, e]) => `(${t} < ${e})`),
		[Ou]: uS(([t, e]) => `(${t} <= ${e})`),
		[zu]: uS((t) => `(${t.join(' * ')})`),
		[Gu]: uS(([t, e]) => `(${t} / ${e})`),
		[ju]: uS((t) => `(${t.join(' + ')})`),
		[Nu]: uS(([t, e]) => `(${t} - ${e})`),
		[Uu]: uS(([t, e, n]) => `clamp(${t}, ${e}, ${n})`),
		[$u]: uS(([t, e]) => `mod(${t}, ${e})`),
		[Bu]: uS(([t, e]) => `pow(${t}, ${e})`),
		[Vu]: uS(([t]) => `abs(${t})`),
		[Wu]: uS(([t]) => `floor(${t})`),
		[Xu]: uS(([t]) => `ceil(${t})`),
		[qu]: uS(([t]) => `floor(${t} + 0.5)`),
		[Zu]: uS(([t]) => `sin(${t})`),
		[Ku]: uS(([t]) => `cos(${t})`),
		[Yu]: uS(([t, e]) => (void 0 !== e ? `atan(${t}, ${e})` : `atan(${t})`)),
		[Hu]: uS(([t]) => `sqrt(${t})`),
		[Ju]: uS((t) => {
			const e = t[0],
				n = t[t.length - 1];
			let i = null;
			for (let r = t.length - 3; r >= 1; r -= 2) {
				i = `(${e} == ${t[r]} ? ${t[r + 1]} : ${i || n})`;
			}
			return i;
		}),
		[Qu]: uS(([t, e, n]) => `(${t} >= ${e} && ${t} <= ${n})`),
		[td]: uS(([t, e, ...n]) => {
			let i = '';
			for (let r = 0; r < n.length - 2; r += 2) {
				const s = n[r],
					o = i || n[r + 1],
					a = n[r + 2],
					l = n[r + 3];
				let h;
				(h = t === tS(1) ? `(${e} - ${s}) / (${a} - ${s})` : `(pow(${t}, (${e} - ${s})) - 1.0) / (pow(${t}, (${a} - ${s})) - 1.0)`), (i = `mix(${o}, ${l}, clamp(${h}, 0.0, 1.0))`);
			}
			return i;
		}),
		[nd]: uS((t) => {
			const e = t[t.length - 1];
			let n = null;
			for (let i = t.length - 3; i >= 0; i -= 2) {
				n = `(${t[i]} ? ${t[i + 1]} : ${n || e})`;
			}
			return n;
		}),
		[id]: uS(([t, ...e], n) => {
			const i = (function (t, e) {
					return `operator_${t}_${Object.keys(e.functions).length}`;
				})('in', n),
				r = [];
			for (let t = 0; t < e.length; t += 1) r.push(`  if (inputValue == ${e[t]}) { return true; }`);
			return (n.functions[i] = `bool ${i}(float inputValue) {\n${r.join('\n')}\n  return false;\n}`), `${i}(${t})`;
		}),
		[od]: uS((t) => `vec${t.length}(${t.join(', ')})`),
		[ad]: uS((t) => {
			if (1 === t.length) return `vec4(vec3(${t[0]} / 255.0), 1.0)`;
			if (2 === t.length) return `vec4(vec3(${t[0]} / 255.0), ${t[1]})`;
			const e = t.slice(0, 3).map((t) => `${t} / 255.0`);
			if (3 === t.length) return `vec4(${e.join(', ')}, 1.0)`;
			const n = t[3];
			return `vec4(${e.join(', ')}, ${n})`;
		}),
		[hd]: uS(([t, e, n], i) => {
			if (!(lS in i.functions)) {
				let t = '';
				const e = i.bandCount || 1;
				for (let n = 0; n < e; n++) {
					const i = Math.floor(n / 4);
					let r = n % 4;
					n === e - 1 && 1 === r && (r = 3);
					t += `  if (band == ${n + 1}.0) {\n    return texture2D(${`${Yb}[${i}]`}, v_textureCoord + vec2(dx, dy))[${r}];\n  }\n`;
				}
				i.functions[lS] = `float getBandValue(float band, float xOffset, float yOffset) {\n  float dx = xOffset / ${Hb};\n  float dy = yOffset / ${Jb};\n${t}\n}`;
			}
			return `${lS}(${t}, ${e ?? '0.0'}, ${n ?? '0.0'})`;
		}),
		[cd]: (t, e) => {
			const [n, ...i] = e.args,
				r = i.length,
				s = new Uint8Array(4 * r);
			for (let t = 0; t < i.length; t++) {
				const e = Wa(i[t].value),
					n = 4 * t;
				(s[n] = e[0]), (s[n + 1] = e[1]), (s[n + 2] = e[2]), (s[n + 3] = 255 * e[3]);
			}
			t.paletteTextures || (t.paletteTextures = []);
			const o = `u_paletteTextures[${t.paletteTextures.length}]`,
				a = new Qb(o, s);
			t.paletteTextures.push(a);
			return `texture2D(${o}, vec2((${gS(n, su, t)} + 0.5) / ${r}.0, 0.5))`;
		},
	};
	function gS(t, e, n) {
		if (t instanceof _u) {
			const i = dS[t.operator];
			if (void 0 === i) throw new Error(`No compiler defined for this operator: ${JSON.stringify(t.operator)}`);
			return i(n, t, e);
		}
		if ((t.type & su) > 0) return tS(t.value);
		if ((t.type & ru) > 0) return t.value.toString();
		if ((t.type & ou) > 0) return oS(t.value.toString());
		if ((t.type & au) > 0) return nS(t.value);
		if ((t.type & lu) > 0) return eS(t.value);
		if ((t.type & hu) > 0) return eS(Zl(t.value));
		throw new Error(`Unexpected expression ${t.value} (expected type ${gu(e)})`);
	}
	const fS = '#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nuniform mat4 u_projectionMatrix;\nuniform mat4 u_screenToWorldMatrix;\nuniform vec2 u_viewportSizePx;\nuniform float u_pixelRatio;\nuniform float u_globalAlpha;\nuniform float u_time;\nuniform float u_zoom;\nuniform float u_resolution;\nuniform float u_rotation;\nuniform vec4 u_renderExtent;\nuniform vec2 u_patternOrigin;\nuniform float u_depth;\nuniform mediump int u_hitDetection;\n\nconst float PI = 3.141592653589793238;\nconst float TWO_PI = 2.0 * PI;\nfloat currentLineMetric = 0.; // an actual value will be used in the stroke shaders\n',
		pS = { 'fill-color': 'rgba(255,255,255,0.4)', 'stroke-color': '#3399CC', 'stroke-width': 1.25, 'circle-radius': 5, 'circle-fill-color': 'rgba(255,255,255,0.4)', 'circle-stroke-width': 1.25, 'circle-stroke-color': '#3399CC' };
	class mS {
		constructor() {
			(this.uniforms_ = []),
				(this.attributes_ = []),
				(this.varyings_ = []),
				(this.hasSymbol_ = !1),
				(this.symbolSizeExpression_ = `vec2(${tS(pS['circle-radius'])} + ${tS(0.5 * pS['circle-stroke-width'])})`),
				(this.symbolRotationExpression_ = '0.0'),
				(this.symbolOffsetExpression_ = 'vec2(0.0)'),
				(this.symbolColorExpression_ = nS(pS['circle-fill-color'])),
				(this.texCoordExpression_ = 'vec4(0.0, 0.0, 1.0, 1.0)'),
				(this.discardExpression_ = 'false'),
				(this.symbolRotateWithView_ = !1),
				(this.hasStroke_ = !1),
				(this.strokeWidthExpression_ = tS(pS['stroke-width'])),
				(this.strokeColorExpression_ = nS(pS['stroke-color'])),
				(this.strokeOffsetExpression_ = '0.'),
				(this.strokeCapExpression_ = oS('round')),
				(this.strokeJoinExpression_ = oS('round')),
				(this.strokeMiterLimitExpression_ = '10.'),
				(this.strokeDistanceFieldExpression_ = '-1000.'),
				(this.hasFill_ = !1),
				(this.fillColorExpression_ = nS(pS['fill-color'])),
				(this.vertexShaderFunctions_ = []),
				(this.fragmentShaderFunctions_ = []);
		}
		addUniform(t) {
			return this.uniforms_.push(t), this;
		}
		addAttribute(t) {
			return this.attributes_.push(t), this;
		}
		addVarying(t, e, n) {
			return this.varyings_.push({ name: t, type: e, expression: n }), this;
		}
		setSymbolSizeExpression(t) {
			return (this.hasSymbol_ = !0), (this.symbolSizeExpression_ = t), this;
		}
		getSymbolSizeExpression() {
			return this.symbolSizeExpression_;
		}
		setSymbolRotationExpression(t) {
			return (this.symbolRotationExpression_ = t), this;
		}
		setSymbolOffsetExpression(t) {
			return (this.symbolOffsetExpression_ = t), this;
		}
		getSymbolOffsetExpression() {
			return this.symbolOffsetExpression_;
		}
		setSymbolColorExpression(t) {
			return (this.hasSymbol_ = !0), (this.symbolColorExpression_ = t), this;
		}
		getSymbolColorExpression() {
			return this.symbolColorExpression_;
		}
		setTextureCoordinateExpression(t) {
			return (this.texCoordExpression_ = t), this;
		}
		setFragmentDiscardExpression(t) {
			return (this.discardExpression_ = t), this;
		}
		getFragmentDiscardExpression() {
			return this.discardExpression_;
		}
		setSymbolRotateWithView(t) {
			return (this.symbolRotateWithView_ = t), this;
		}
		setStrokeWidthExpression(t) {
			return (this.hasStroke_ = !0), (this.strokeWidthExpression_ = t), this;
		}
		setStrokeColorExpression(t) {
			return (this.hasStroke_ = !0), (this.strokeColorExpression_ = t), this;
		}
		getStrokeColorExpression() {
			return this.strokeColorExpression_;
		}
		setStrokeOffsetExpression(t) {
			return (this.strokeOffsetExpression_ = t), this;
		}
		setStrokeCapExpression(t) {
			return (this.strokeCapExpression_ = t), this;
		}
		setStrokeJoinExpression(t) {
			return (this.strokeJoinExpression_ = t), this;
		}
		setStrokeMiterLimitExpression(t) {
			return (this.strokeMiterLimitExpression_ = t), this;
		}
		setStrokeDistanceFieldExpression(t) {
			return (this.strokeDistanceFieldExpression_ = t), this;
		}
		setFillColorExpression(t) {
			return (this.hasFill_ = !0), (this.fillColorExpression_ = t), this;
		}
		getFillColorExpression() {
			return this.fillColorExpression_;
		}
		addVertexShaderFunction(t) {
			this.vertexShaderFunctions_.includes(t) || this.vertexShaderFunctions_.push(t);
		}
		addFragmentShaderFunction(t) {
			this.fragmentShaderFunctions_.includes(t) || this.fragmentShaderFunctions_.push(t);
		}
		getSymbolVertexShader() {
			return this.hasSymbol_
				? `${fS}\n${this.uniforms_
						.map(function (t) {
							return 'uniform ' + t + ';';
						})
						.join('\n')}\nattribute vec2 a_position;\nattribute float a_index;\nattribute vec4 a_hitColor;\n${this.attributes_
						.map(function (t) {
							return 'attribute ' + t + ';';
						})
						.join('\n')}\nvarying vec2 v_texCoord;\nvarying vec2 v_quadCoord;\nvarying vec4 v_hitColor;\nvarying vec2 v_centerPx;\nvarying float v_angle;\nvarying vec2 v_quadSizePx;\n${this.varyings_
						.map(function (t) {
							return 'varying ' + t.type + ' ' + t.name + ';';
						})
						.join('\n')}\n${this.vertexShaderFunctions_.join('\n')}\nvec2 pxToScreen(vec2 coordPx) {\n  vec2 scaled = coordPx / u_viewportSizePx / 0.5;\n  return scaled;\n}\n\nvec2 screenToPx(vec2 coordScreen) {\n  return (coordScreen * 0.5 + 0.5) * u_viewportSizePx;\n}\n\nvoid main(void) {\n  v_quadSizePx = ${this.symbolSizeExpression_};\n  vec2 halfSizePx = v_quadSizePx * 0.5;\n  vec2 centerOffsetPx = ${
						this.symbolOffsetExpression_
				  };\n  vec2 offsetPx = centerOffsetPx;\n  if (a_index == 0.0) {\n    offsetPx -= halfSizePx;\n  } else if (a_index == 1.0) {\n    offsetPx += halfSizePx * vec2(1., -1.);\n  } else if (a_index == 2.0) {\n    offsetPx += halfSizePx;\n  } else {\n    offsetPx += halfSizePx * vec2(-1., 1.);\n  }\n  float angle = ${this.symbolRotationExpression_};\n  ${this.symbolRotateWithView_ ? 'angle += u_rotation;' : ''}\n  float c = cos(-angle);\n  float s = sin(-angle);\n  offsetPx = vec2(c * offsetPx.x - s * offsetPx.y, s * offsetPx.x + c * offsetPx.y);\n  vec4 center = u_projectionMatrix * vec4(a_position, 0.0, 1.0);\n  gl_Position = center + vec4(pxToScreen(offsetPx), u_depth, 0.);\n  vec4 texCoord = ${
						this.texCoordExpression_
				  };\n  float u = a_index == 0.0 || a_index == 3.0 ? texCoord.s : texCoord.p;\n  float v = a_index == 2.0 || a_index == 3.0 ? texCoord.t : texCoord.q;\n  v_texCoord = vec2(u, v);\n  v_hitColor = a_hitColor;\n  v_angle = angle;\n  c = cos(-v_angle);\n  s = sin(-v_angle);\n  centerOffsetPx = vec2(c * centerOffsetPx.x - s * centerOffsetPx.y, s * centerOffsetPx.x + c * centerOffsetPx.y); \n  v_centerPx = screenToPx(center.xy) + centerOffsetPx;\n${this.varyings_
						.map(function (t) {
							return '  ' + t.name + ' = ' + t.expression + ';';
						})
						.join('\n')}\n}`
				: null;
		}
		getSymbolFragmentShader() {
			return this.hasSymbol_
				? `${fS}\n${this.uniforms_
						.map(function (t) {
							return 'uniform ' + t + ';';
						})
						.join('\n')}\nvarying vec2 v_texCoord;\nvarying vec4 v_hitColor;\nvarying vec2 v_centerPx;\nvarying float v_angle;\nvarying vec2 v_quadSizePx;\n${this.varyings_
						.map(function (t) {
							return 'varying ' + t.type + ' ' + t.name + ';';
						})
						.join('\n')}\n${this.fragmentShaderFunctions_.join('\n')}\n\nvoid main(void) {\n  if (${this.discardExpression_}) { discard; }\n  vec2 coordsPx = gl_FragCoord.xy / u_pixelRatio - v_centerPx; // relative to center\n  float c = cos(v_angle);\n  float s = sin(v_angle);\n  coordsPx = vec2(c * coordsPx.x - s * coordsPx.y, s * coordsPx.x + c * coordsPx.y);\n  gl_FragColor = ${this.symbolColorExpression_};\n  gl_FragColor.rgb *= gl_FragColor.a;\n  if (u_hitDetection > 0) {\n    if (gl_FragColor.a < 0.05) { discard; };\n    gl_FragColor = v_hitColor;\n  }\n}`
				: null;
		}
		getStrokeVertexShader() {
			return this.hasStroke_
				? `${fS}\n${this.uniforms_
						.map(function (t) {
							return 'uniform ' + t + ';';
						})
						.join('\n')}\nattribute vec2 a_segmentStart;\nattribute vec2 a_segmentEnd;\nattribute float a_measureStart;\nattribute float a_measureEnd;\nattribute float a_parameters;\nattribute float a_distance;\nattribute vec2 a_joinAngles;\nattribute vec4 a_hitColor;\n${this.attributes_
						.map(function (t) {
							return 'attribute ' + t + ';';
						})
						.join('\n')}\nvarying vec2 v_segmentStart;\nvarying vec2 v_segmentEnd;\nvarying float v_angleStart;\nvarying float v_angleEnd;\nvarying float v_width;\nvarying vec4 v_hitColor;\nvarying float v_distanceOffsetPx;\nvarying float v_measureStart;\nvarying float v_measureEnd;\n${this.varyings_
						.map(function (t) {
							return 'varying ' + t.type + ' ' + t.name + ';';
						})
						.join('\n')}\n${this.vertexShaderFunctions_.join(
						'\n'
				  )}\nvec2 worldToPx(vec2 worldPos) {\n  vec4 screenPos = u_projectionMatrix * vec4(worldPos, 0.0, 1.0);\n  return (0.5 * screenPos.xy + 0.5) * u_viewportSizePx;\n}\n\nvec4 pxToScreen(vec2 pxPos) {\n  vec2 screenPos = 2.0 * pxPos / u_viewportSizePx - 1.0;\n  return vec4(screenPos, u_depth, 1.0);\n}\n\nbool isCap(float joinAngle) {\n  return joinAngle < -0.1;\n}\n\nvec2 getJoinOffsetDirection(vec2 normalPx, float joinAngle) {\n  float halfAngle = joinAngle / 2.0;\n  float c = cos(halfAngle);\n  float s = sin(halfAngle);\n  vec2 angleBisectorNormal = vec2(s * normalPx.x + c * normalPx.y, -c * normalPx.x + s * normalPx.y);\n  float length = 1.0 / s;\n  return angleBisectorNormal * length;\n}\n\nvec2 getOffsetPoint(vec2 point, vec2 normal, float joinAngle, float offsetPx) {\n  // if on a cap or the join angle is too high, offset the line along the segment normal\n  if (cos(joinAngle) > 0.998 || isCap(joinAngle)) {\n    return point - normal * offsetPx;\n  }\n  // offset is applied along the inverted normal (positive offset goes "right" relative to line direction)\n  return point - getJoinOffsetDirection(normal, joinAngle) * offsetPx;\n}\n\nvoid main(void) {\n  v_angleStart = a_joinAngles.x;\n  v_angleEnd = a_joinAngles.y;\n  float vertexNumber = floor(abs(a_parameters) / 10000. + 0.5);\n  currentLineMetric = vertexNumber < 1.5 ? a_measureStart : a_measureEnd;\n  // we're reading the fractional part while keeping the sign (so -4.12 gives -0.12, 3.45 gives 0.45)\n  float angleTangentSum = fract(abs(a_parameters) / 10000.) * 10000. * sign(a_parameters);\n\n  float lineWidth = ${
						this.strokeWidthExpression_
				  };\n  float lineOffsetPx = ${
						this.strokeOffsetExpression_
				  };\n\n  // compute segment start/end in px with offset\n  vec2 segmentStartPx = worldToPx(a_segmentStart);\n  vec2 segmentEndPx = worldToPx(a_segmentEnd);\n  vec2 tangentPx = normalize(segmentEndPx - segmentStartPx);\n  vec2 normalPx = vec2(-tangentPx.y, tangentPx.x);\n  segmentStartPx = getOffsetPoint(segmentStartPx, normalPx, v_angleStart, lineOffsetPx),\n  segmentEndPx = getOffsetPoint(segmentEndPx, normalPx, v_angleEnd, lineOffsetPx);\n  \n  // compute current vertex position\n  float normalDir = vertexNumber < 0.5 || (vertexNumber > 1.5 && vertexNumber < 2.5) ? 1.0 : -1.0;\n  float tangentDir = vertexNumber < 1.5 ? 1.0 : -1.0;\n  float angle = vertexNumber < 1.5 ? v_angleStart : v_angleEnd;\n  vec2 joinDirection;\n  vec2 positionPx = vertexNumber < 1.5 ? segmentStartPx : segmentEndPx;\n  // if angle is too high, do not make a proper join\n  if (cos(angle) > 0.985 || isCap(angle)) {\n    joinDirection = normalPx * normalDir - tangentPx * tangentDir;\n  } else {\n    joinDirection = getJoinOffsetDirection(normalPx * normalDir, angle);\n  }\n  positionPx = positionPx + joinDirection * (lineWidth * 0.5 + 1.); // adding 1 pixel for antialiasing\n  gl_Position = pxToScreen(positionPx);\n\n  v_segmentStart = segmentStartPx;\n  v_segmentEnd = segmentEndPx;\n  v_width = lineWidth;\n  v_hitColor = a_hitColor;\n  v_distanceOffsetPx = a_distance / u_resolution - (lineOffsetPx * angleTangentSum);\n  v_measureStart = a_measureStart;\n  v_measureEnd = a_measureEnd;\n${this.varyings_
						.map(function (t) {
							return '  ' + t.name + ' = ' + t.expression + ';';
						})
						.join('\n')}\n}`
				: null;
		}
		getStrokeFragmentShader() {
			return this.hasStroke_
				? `${fS}\n${this.uniforms_
						.map(function (t) {
							return 'uniform ' + t + ';';
						})
						.join('\n')}\nvarying vec2 v_segmentStart;\nvarying vec2 v_segmentEnd;\nvarying float v_angleStart;\nvarying float v_angleEnd;\nvarying float v_width;\nvarying vec4 v_hitColor;\nvarying float v_distanceOffsetPx;\nvarying float v_measureStart;\nvarying float v_measureEnd;\n${this.varyings_
						.map(function (t) {
							return 'varying ' + t.type + ' ' + t.name + ';';
						})
						.join('\n')}\n${this.fragmentShaderFunctions_.join(
						'\n'
				  )}\n\nvec2 pxToWorld(vec2 pxPos) {\n  vec2 screenPos = 2.0 * pxPos / u_viewportSizePx - 1.0;\n  return (u_screenToWorldMatrix * vec4(screenPos, 0.0, 1.0)).xy;\n}\n\nbool isCap(float joinAngle) {\n  return joinAngle < -0.1;\n}\n\nfloat segmentDistanceField(vec2 point, vec2 start, vec2 end, float width) {\n  vec2 tangent = normalize(end - start);\n  vec2 normal = vec2(-tangent.y, tangent.x);\n  vec2 startToPoint = point - start;\n  return abs(dot(startToPoint, normal)) - width * 0.5;\n}\n\nfloat buttCapDistanceField(vec2 point, vec2 start, vec2 end) {\n  vec2 startToPoint = point - start;\n  vec2 tangent = normalize(end - start);\n  return dot(startToPoint, -tangent);\n}\n\nfloat squareCapDistanceField(vec2 point, vec2 start, vec2 end, float width) {\n  return buttCapDistanceField(point, start, end) - width * 0.5;\n}\n\nfloat roundCapDistanceField(vec2 point, vec2 start, vec2 end, float width) {\n  float onSegment = max(0., 1000. * dot(point - start, end - start)); // this is very high when inside the segment\n  return length(point - start) - width * 0.5 - onSegment;\n}\n\nfloat roundJoinDistanceField(vec2 point, vec2 start, vec2 end, float width) {\n  return roundCapDistanceField(point, start, end, width);\n}\n\nfloat bevelJoinField(vec2 point, vec2 start, vec2 end, float width, float joinAngle) {\n  vec2 startToPoint = point - start;\n  vec2 tangent = normalize(end - start);\n  float c = cos(joinAngle * 0.5);\n  float s = sin(joinAngle * 0.5);\n  float direction = -sign(sin(joinAngle));\n  vec2 bisector = vec2(c * tangent.x - s * tangent.y, s * tangent.x + c * tangent.y);\n  float radius = width * 0.5 * s;\n  return dot(startToPoint, bisector * direction) - radius;\n}\n\nfloat miterJoinDistanceField(vec2 point, vec2 start, vec2 end, float width, float joinAngle) {\n  if (cos(joinAngle) > 0.985) { // avoid risking a division by zero\n    return bevelJoinField(point, start, end, width, joinAngle);\n  }\n  float miterLength = 1. / sin(joinAngle * 0.5);\n  float miterLimit = ${
						this.strokeMiterLimitExpression_
				  };\n  if (miterLength > miterLimit) {\n    return bevelJoinField(point, start, end, width, joinAngle);\n  }\n  return -1000.;\n}\n\nfloat capDistanceField(vec2 point, vec2 start, vec2 end, float width, float capType) {\n   if (capType == ${oS('butt')}) {\n    return buttCapDistanceField(point, start, end);\n  } else if (capType == ${oS('square')}) {\n    return squareCapDistanceField(point, start, end, width);\n  }\n  return roundCapDistanceField(point, start, end, width);\n}\n\nfloat joinDistanceField(vec2 point, vec2 start, vec2 end, float width, float joinAngle, float joinType) {\n  if (joinType == ${oS('bevel')}) {\n    return bevelJoinField(point, start, end, width, joinAngle);\n  } else if (joinType == ${oS(
						'miter'
				  )}) {\n    return miterJoinDistanceField(point, start, end, width, joinAngle);\n  }\n  return roundJoinDistanceField(point, start, end, width);\n}\n\nfloat computeSegmentPointDistance(vec2 point, vec2 start, vec2 end, float width, float joinAngle, float capType, float joinType) {\n  if (isCap(joinAngle)) {\n    return capDistanceField(point, start, end, width, capType);\n  }\n  return joinDistanceField(point, start, end, width, joinAngle, joinType);\n}\n\nvoid main(void) {\n  vec2 currentPoint = gl_FragCoord.xy / u_pixelRatio;\n  #ifdef GL_FRAGMENT_PRECISION_HIGH\n  vec2 worldPos = pxToWorld(currentPoint);\n  if (\n    abs(u_renderExtent[0] - u_renderExtent[2]) > 0.0 && (\n      worldPos[0] < u_renderExtent[0] ||\n      worldPos[1] < u_renderExtent[1] ||\n      worldPos[0] > u_renderExtent[2] ||\n      worldPos[1] > u_renderExtent[3]\n    )\n  ) {\n    discard;\n  }\n  #endif\n\n  float segmentLength = length(v_segmentEnd - v_segmentStart);\n  vec2 segmentTangent = (v_segmentEnd - v_segmentStart) / segmentLength;\n  vec2 segmentNormal = vec2(-segmentTangent.y, segmentTangent.x);\n  vec2 startToPoint = currentPoint - v_segmentStart;\n  float lengthToPoint = max(0., min(dot(segmentTangent, startToPoint), segmentLength));\n  float currentLengthPx = lengthToPoint + v_distanceOffsetPx; \n  float currentRadiusPx = abs(dot(segmentNormal, startToPoint));\n  float currentRadiusRatio = dot(segmentNormal, startToPoint) * 2. / v_width;\n  currentLineMetric = mix(v_measureStart, v_measureEnd, lengthToPoint / segmentLength);\n\n  if (${
						this.discardExpression_
				  }) { discard; }\n\n  vec4 color = ${this.strokeColorExpression_};\n  float capType = ${this.strokeCapExpression_};\n  float joinType = ${this.strokeJoinExpression_};\n  float segmentStartDistance = computeSegmentPointDistance(currentPoint, v_segmentStart, v_segmentEnd, v_width, v_angleStart, capType, joinType);\n  float segmentEndDistance = computeSegmentPointDistance(currentPoint, v_segmentEnd, v_segmentStart, v_width, v_angleEnd, capType, joinType);\n  float distance = max(\n    segmentDistanceField(currentPoint, v_segmentStart, v_segmentEnd, v_width),\n    max(segmentStartDistance, segmentEndDistance)\n  );\n  distance = max(distance, ${
						this.strokeDistanceFieldExpression_
				  });\n  color.a *= smoothstep(0.5, -0.5, distance);\n  gl_FragColor = color;\n  gl_FragColor.a *= u_globalAlpha;\n  gl_FragColor.rgb *= gl_FragColor.a;\n  if (u_hitDetection > 0) {\n    if (gl_FragColor.a < 0.1) { discard; };\n    gl_FragColor = v_hitColor;\n  }\n}`
				: null;
		}
		getFillVertexShader() {
			return this.hasFill_
				? `${fS}\n${this.uniforms_
						.map(function (t) {
							return 'uniform ' + t + ';';
						})
						.join('\n')}\nattribute vec2 a_position;\nattribute vec4 a_hitColor;\n${this.attributes_
						.map(function (t) {
							return 'attribute ' + t + ';';
						})
						.join('\n')}\nvarying vec4 v_hitColor;\n${this.varyings_
						.map(function (t) {
							return 'varying ' + t.type + ' ' + t.name + ';';
						})
						.join('\n')}\n${this.vertexShaderFunctions_.join('\n')}\nvoid main(void) {\n  gl_Position = u_projectionMatrix * vec4(a_position, u_depth, 1.0);\n  v_hitColor = a_hitColor;\n${this.varyings_
						.map(function (t) {
							return '  ' + t.name + ' = ' + t.expression + ';';
						})
						.join('\n')}\n}`
				: null;
		}
		getFillFragmentShader() {
			return this.hasFill_
				? `${fS}\n${this.uniforms_
						.map(function (t) {
							return 'uniform ' + t + ';';
						})
						.join('\n')}\nvarying vec4 v_hitColor;\n${this.varyings_
						.map(function (t) {
							return 'varying ' + t.type + ' ' + t.name + ';';
						})
						.join('\n')}\n${this.fragmentShaderFunctions_.join(
						'\n'
				  )}\nvec2 pxToWorld(vec2 pxPos) {\n  vec2 screenPos = 2.0 * pxPos / u_viewportSizePx - 1.0;\n  return (u_screenToWorldMatrix * vec4(screenPos, 0.0, 1.0)).xy;\n}\n\nvec2 worldToPx(vec2 worldPos) {\n  vec4 screenPos = u_projectionMatrix * vec4(worldPos, 0.0, 1.0);\n  return (0.5 * screenPos.xy + 0.5) * u_viewportSizePx;\n}\n\nvoid main(void) {\n  vec2 pxPos = gl_FragCoord.xy / u_pixelRatio;\n  vec2 pxOrigin = worldToPx(u_patternOrigin);\n  #ifdef GL_FRAGMENT_PRECISION_HIGH\n  vec2 worldPos = pxToWorld(pxPos);\n  if (\n    abs(u_renderExtent[0] - u_renderExtent[2]) > 0.0 && (\n      worldPos[0] < u_renderExtent[0] ||\n      worldPos[1] < u_renderExtent[1] ||\n      worldPos[0] > u_renderExtent[2] ||\n      worldPos[1] > u_renderExtent[3]\n    )\n  ) {\n    discard;\n  }\n  #endif\n  if (${
						this.discardExpression_
				  }) { discard; }\n  gl_FragColor = ${this.fillColorExpression_};\n  gl_FragColor.a *= u_globalAlpha;\n  gl_FragColor.rgb *= gl_FragColor.a;\n  if (u_hitDetection > 0) {\n    if (gl_FragColor.a < 0.1) { discard; };\n    gl_FragColor = v_hitColor;\n  }\n}`
				: null;
		}
	}
	const _S = 'blur',
		yS = 'gradient',
		xS = 'radius',
		vS = ['#00f', '#0ff', '#0f0', '#ff0', '#f00'];
	function wS(t, e, n) {
		return (function (t, e, n, i) {
			return gS(xu(t, e, n), e, i);
		})(e, n, yu(), t);
	}
	function bS(t) {
		const e = Wa(t);
		return [256 * e[0] + e[1], 256 * e[2] + Math.round(255 * e[3])];
	}
	function SS(t) {
		return t === au || t === hu ? 2 : t === lu ? 4 : 1;
	}
	function CS(t) {
		const e = SS(t);
		return e > 1 ? `vec${e}` : 'float';
	}
	function ES(t) {
		return (
			JSON.stringify(t)
				.split('')
				.reduce((t, e) => (t << 5) - t + e.charCodeAt(0), 0) >>> 0
		).toString();
	}
	function TS(t, e, n, i) {
		if (`${i}radius` in t && 'icon-' !== i) {
			let r = wS(n, t[`${i}radius`], su);
			if (`${i}radius2` in t) {
				r = `max(${r}, ${wS(n, t[`${i}radius2`], su)})`;
			}
			`${i}stroke-width` in t && (r = `(${r} + ${wS(n, t[`${i}stroke-width`], su)} * 0.5)`), e.setSymbolSizeExpression(`vec2(${r} * 2. + 0.5)`);
		}
		if (`${i}scale` in t) {
			const r = wS(n, t[`${i}scale`], hu);
			e.setSymbolSizeExpression(`${e.getSymbolSizeExpression()} * ${r}`);
		}
		`${i}displacement` in t && e.setSymbolOffsetExpression(wS(n, t[`${i}displacement`], lu)), `${i}rotation` in t && e.setSymbolRotationExpression(wS(n, t[`${i}rotation`], su)), `${i}rotate-with-view` in t && e.setSymbolRotateWithView(!!t[`${i}rotate-with-view`]);
	}
	function PS(t, e, n, i, r) {
		let s = 'vec4(0.)';
		if ((null !== e && (s = e), null !== n && null !== i)) {
			s = `mix(${n}, ${s}, ${`smoothstep(-${i} + 0.63, -${i} - 0.58, ${t})`})`;
		}
		let o = `${s} * vec4(1.0, 1.0, 1.0, ${`(1.0 - smoothstep(-0.63, 0.58, ${t}))`})`;
		return null !== r && (o = `${o} * vec4(1.0, 1.0, 1.0, ${r})`), o;
	}
	function RS(t, e, n, i, r) {
		const s = new Image();
		(s.crossOrigin = void 0 === t[`${i}cross-origin`] ? 'anonymous' : t[`${i}cross-origin`]), Ci('string' == typeof t[`${i}src`], `WebGL layers do not support expressions for the ${i}src style property`), (s.src = t[`${i}src`]), (n[`u_texture${r}_size`] = () => (s.complete ? [s.width, s.height] : [0, 0])), e.addUniform(`vec2 u_texture${r}_size`);
		const o = `u_texture${r}_size`;
		return (n[`u_texture${r}`] = s), e.addUniform(`sampler2D u_texture${r}`), o;
	}
	function FS(t, e, n, i, r) {
		let s = wS(n, t[`${e}offset`], lu);
		if (`${e}offset-origin` in t)
			switch (t[`${e}offset-origin`]) {
				case 'top-right':
					s = `vec2(${i}.x, 0.) + ${r} * vec2(-1., 0.) + ${s} * vec2(-1., 1.)`;
					break;
				case 'bottom-left':
					s = `vec2(0., ${i}.y) + ${r} * vec2(0., -1.) + ${s} * vec2(1., -1.)`;
					break;
				case 'bottom-right':
					s = `${i} - ${r} - ${s}`;
			}
		return s;
	}
	function MS(t, e, n) {
		const i = { inFragmentShader: !1, variables: {}, properties: {}, functions: {}, bandCount: 0, featureId: !1, geometryType: !1 },
			r = { inFragmentShader: !1, variables: {}, properties: {}, functions: {}, bandCount: 0, featureId: !1, geometryType: !1, inFragmentShader: !0, variables: i.variables },
			s = new mS(),
			o = {};
		if (
			('icon-src' in t
				? (function (t, e, n, i, r) {
						let s = 'vec4(1.0)';
						'icon-color' in t && (s = wS(r, t['icon-color'], au)), 'icon-opacity' in t && (s = `${s} * vec4(1.0, 1.0, 1.0, ${wS(r, t['icon-opacity'], su)})`);
						const o = ES(t['icon-src']),
							a = RS(t, e, n, 'icon-', o);
						if ((e.setSymbolColorExpression(`${s} * texture2D(u_texture${o}, v_texCoord)`).setSymbolSizeExpression(a), 'icon-width' in t && 'icon-height' in t && e.setSymbolSizeExpression(`vec2(${wS(i, t['icon-width'], su)}, ${wS(i, t['icon-height'], su)})`), 'icon-offset' in t && 'icon-size' in t)) {
							const n = wS(i, t['icon-size'], lu),
								r = e.getSymbolSizeExpression();
							e.setSymbolSizeExpression(n);
							const s = FS(t, 'icon-', i, 'v_quadSizePx', n);
							e.setTextureCoordinateExpression(`(vec4((${s}).xyxy) + vec4(0., 0., ${n})) / (${r}).xyxy`);
						}
						if ((TS(t, e, i, 'icon-'), 'icon-anchor' in t)) {
							const n = wS(i, t['icon-anchor'], lu);
							let r,
								s = '1.0';
							'icon-scale' in t && (s = wS(i, t['icon-scale'], hu)), (r = 'pixels' === t['icon-anchor-x-units'] && 'pixels' === t['icon-anchor-y-units'] ? `${n} * ${s}` : 'pixels' === t['icon-anchor-x-units'] ? `${n} * vec2(vec2(${s}).x, v_quadSizePx.y)` : 'pixels' === t['icon-anchor-y-units'] ? `${n} * vec2(v_quadSizePx.x, vec2(${s}).x)` : `${n} * v_quadSizePx`);
							let o = `v_quadSizePx * vec2(0.5, -0.5) + ${r} * vec2(-1., 1.)`;
							if ('icon-anchor-origin' in t)
								switch (t['icon-anchor-origin']) {
									case 'top-right':
										o = `v_quadSizePx * -0.5 + ${r}`;
										break;
									case 'bottom-left':
										o = `v_quadSizePx * 0.5 - ${r}`;
										break;
									case 'bottom-right':
										o = `v_quadSizePx * vec2(-0.5, 0.5) + ${r} * vec2(1., -1.)`;
								}
							e.setSymbolOffsetExpression(`${e.getSymbolOffsetExpression()} + ${o}`);
						}
				  })(t, s, o, i, r)
				: 'shape-points' in t
				? (function (t, e, n, i, r) {
						(r.functions.round = 'float round(float v) {\n  return sign(v) * floor(abs(v) + 0.5);\n}'),
							(r.functions.starDistanceField =
								'float starDistanceField(vec2 point, float numPoints, float radius, float radius2, float angle) {\n  float startAngle = -PI * 0.5 + angle; // tip starts upwards and rotates clockwise with angle\n  float c = cos(startAngle);\n  float s = sin(startAngle);\n  vec2 pointRotated = vec2(c * point.x - s * point.y, s * point.x + c * point.y);\n  float alpha = TWO_PI / numPoints; // the angle of one sector\n  float beta = atan(pointRotated.y, pointRotated.x);\n  float gamma = round(beta / alpha) * alpha; // angle in sector\n  c = cos(-gamma);\n  s = sin(-gamma);\n  vec2 inSector = vec2(c * pointRotated.x - s * pointRotated.y, abs(s * pointRotated.x + c * pointRotated.y));\n  vec2 tipToPoint = inSector + vec2(-radius, 0.);\n  vec2 edgeNormal = vec2(radius2 * sin(alpha * 0.5), -radius2 * cos(alpha * 0.5) + radius);\n  return dot(normalize(edgeNormal), tipToPoint);\n}'),
							(r.functions.regularDistanceField =
								'float regularDistanceField(vec2 point, float numPoints, float radius, float angle) {\n  float startAngle = -PI * 0.5 + angle; // tip starts upwards and rotates clockwise with angle\n  float c = cos(startAngle);\n  float s = sin(startAngle);\n  vec2 pointRotated = vec2(c * point.x - s * point.y, s * point.x + c * point.y);\n  float alpha = TWO_PI / numPoints; // the angle of one sector\n  float radiusIn = radius * cos(PI / numPoints);\n  float beta = atan(pointRotated.y, pointRotated.x);\n  float gamma = round((beta - alpha * 0.5) / alpha) * alpha + alpha * 0.5; // angle in sector from mid\n  c = cos(-gamma);\n  s = sin(-gamma);\n  vec2 inSector = vec2(c * pointRotated.x - s * pointRotated.y, abs(s * pointRotated.x + c * pointRotated.y));\n  return inSector.x - radiusIn;\n}'),
							TS(t, e, i, 'shape-');
						let s = null;
						'shape-opacity' in t && (s = wS(r, t['shape-opacity'], su));
						let o = 'coordsPx';
						'shape-scale' in t && (o = `coordsPx / ${wS(r, t['shape-scale'], hu)}`);
						let a = null;
						'shape-fill-color' in t && (a = wS(r, t['shape-fill-color'], au));
						let l = null;
						'shape-stroke-color' in t && (l = wS(r, t['shape-stroke-color'], au));
						let h = null;
						'shape-stroke-width' in t && (h = wS(r, t['shape-stroke-width'], su));
						const c = wS(r, t['shape-points'], su);
						let u,
							d = '0.';
						'shape-angle' in t && (d = wS(r, t['shape-angle'], su));
						let g = wS(r, t['shape-radius'], su);
						if ((null !== h && (g = `${g} + ${h} * 0.5`), 'shape-radius2' in t)) {
							let e = wS(r, t['shape-radius2'], su);
							null !== h && (e = `${e} + ${h} * 0.5`), (u = `starDistanceField(${o}, ${c}, ${g}, ${e}, ${d})`);
						} else u = `regularDistanceField(${o}, ${c}, ${g}, ${d})`;
						const f = PS(u, a, l, h, s);
						e.setSymbolColorExpression(f);
				  })(t, s, 0, i, r)
				: 'circle-radius' in t &&
				  (function (t, e, n, i, r) {
						(r.functions.circleDistanceField = 'float circleDistanceField(vec2 point, float radius) {\n  return length(point) - radius;\n}'), TS(t, e, i, 'circle-');
						let s = null;
						'circle-opacity' in t && (s = wS(r, t['circle-opacity'], su));
						let o = 'coordsPx';
						'circle-scale' in t && (o = `coordsPx / ${wS(r, t['circle-scale'], hu)}`);
						let a = null;
						'circle-fill-color' in t && (a = wS(r, t['circle-fill-color'], au));
						let l = null;
						'circle-stroke-color' in t && (l = wS(r, t['circle-stroke-color'], au));
						let h = wS(r, t['circle-radius'], su),
							c = null;
						'circle-stroke-width' in t && ((c = wS(r, t['circle-stroke-width'], su)), (h = `(${h} + ${c} * 0.5)`));
						const u = PS(`circleDistanceField(${o}, ${h})`, a, l, c, s);
						e.setSymbolColorExpression(u);
				  })(t, s, 0, i, r),
			(function (t, e, n, i, r) {
				if (('stroke-color' in t && e.setStrokeColorExpression(wS(r, t['stroke-color'], au)), 'stroke-pattern-src' in t)) {
					const i = ES(t['stroke-pattern-src']),
						s = RS(t, e, n, 'stroke-pattern-', i);
					let o = s,
						a = 'vec2(0.)';
					'stroke-pattern-offset' in t && 'stroke-pattern-size' in t && ((o = wS(r, t['stroke-pattern-size'], lu)), (a = FS(t, 'stroke-pattern-', r, s, o)));
					let l = '0.';
					'stroke-pattern-spacing' in t && (l = wS(r, t['stroke-pattern-spacing'], su)),
						(r.functions.sampleStrokePattern =
							"vec4 sampleStrokePattern(sampler2D texture, vec2 textureSize, vec2 textureOffset, vec2 sampleSize, float spacingPx, float currentLengthPx, float currentRadiusRatio, float lineWidth) {\n  float currentLengthScaled = currentLengthPx * sampleSize.y / lineWidth;\n  float spacingScaled = spacingPx * sampleSize.y / lineWidth;\n  float uCoordPx = mod(currentLengthScaled, (sampleSize.x + spacingScaled));\n  // make sure that we're not sampling too close to the borders to avoid interpolation with outside pixels\n  uCoordPx = clamp(uCoordPx, 0.5, sampleSize.x - 0.5);\n  float vCoordPx = (-currentRadiusRatio * 0.5 + 0.5) * sampleSize.y;\n  vec2 texCoord = (vec2(uCoordPx, vCoordPx) + textureOffset) / textureSize;\n  return texture2D(texture, texCoord);\n}");
					const h = `u_texture${i}`;
					let c = '1.';
					'stroke-color' in t && (c = e.getStrokeColorExpression()), e.setStrokeColorExpression(`${c} * sampleStrokePattern(${h}, ${s}, ${a}, ${o}, ${l}, currentLengthPx, currentRadiusRatio, v_width)`);
				}
				if (('stroke-width' in t && e.setStrokeWidthExpression(wS(i, t['stroke-width'], su)), 'stroke-offset' in t && e.setStrokeOffsetExpression(wS(i, t['stroke-offset'], su)), 'stroke-line-cap' in t && e.setStrokeCapExpression(wS(i, t['stroke-line-cap'], ou)), 'stroke-line-join' in t && e.setStrokeJoinExpression(wS(i, t['stroke-line-join'], ou)), 'stroke-miter-limit' in t && e.setStrokeMiterLimitExpression(wS(i, t['stroke-miter-limit'], su)), 'stroke-line-dash' in t)) {
					r.functions.getSingleDashDistance = `float getSingleDashDistance(float distance, float radius, float dashOffset, float dashLength, float dashLengthTotal, float capType) {\n  float localDistance = mod(distance, dashLengthTotal);\n  float distanceSegment = abs(localDistance - dashOffset - dashLength * 0.5) - dashLength * 0.5;\n  distanceSegment = min(distanceSegment, dashLengthTotal - localDistance);\n  if (capType == ${oS('square')}) {\n    distanceSegment -= v_width * 0.5;\n  } else if (capType == ${oS('round')}) {\n    distanceSegment = min(distanceSegment, sqrt(distanceSegment * distanceSegment + radius * radius) - v_width * 0.5);\n  }\n  return distanceSegment;\n}`;
					let n = t['stroke-line-dash'].map((t) => wS(r, t, su));
					n.length % 2 == 1 && (n = [...n, ...n]);
					let s = '0.';
					'stroke-line-dash-offset' in t && (s = wS(i, t['stroke-line-dash-offset'], su));
					const o = `dashDistanceField_${ES(t['stroke-line-dash'])}`,
						a = n.map((t, e) => `float dashLength${e} = ${t};`),
						l = n.map((t, e) => `dashLength${e}`).join(' + ');
					let h = '0.',
						c = `getSingleDashDistance(distance, radius, ${h}, dashLength0, totalDashLength, capType)`;
					for (let t = 2; t < n.length; t += 2) (h = `${h} + dashLength${t - 2} + dashLength${t - 1}`), (c = `min(${c}, getSingleDashDistance(distance, radius, ${h}, dashLength${t}, totalDashLength, capType))`);
					(r.functions[o] = `float ${o}(float distance, float radius, float capType) {\n  ${a.join('\n  ')}\n  float totalDashLength = ${l};\n  return ${c};\n}`), e.setStrokeDistanceFieldExpression(`${o}(currentLengthPx + ${s}, currentRadiusPx, capType)`);
				}
			})(t, s, o, i, r),
			(function (t, e, n, i, r) {
				if (('fill-color' in t && e.setFillColorExpression(wS(r, t['fill-color'], au)), 'fill-pattern-src' in t)) {
					const i = ES(t['fill-pattern-src']),
						s = RS(t, e, n, 'fill-pattern-', i);
					let o = s,
						a = 'vec2(0.)';
					'fill-pattern-offset' in t && 'fill-pattern-size' in t && ((o = wS(r, t['fill-pattern-size'], lu)), (a = FS(t, 'fill-pattern-', r, s, o))),
						(r.functions.sampleFillPattern =
							"vec4 sampleFillPattern(sampler2D texture, vec2 textureSize, vec2 textureOffset, vec2 sampleSize, vec2 pxOrigin, vec2 pxPosition) {\n  float scaleRatio = pow(2., mod(u_zoom + 0.5, 1.) - 0.5);\n  vec2 pxRelativePos = pxPosition - pxOrigin;\n  // rotate the relative position from origin by the current view rotation\n  pxRelativePos = vec2(pxRelativePos.x * cos(u_rotation) - pxRelativePos.y * sin(u_rotation), pxRelativePos.x * sin(u_rotation) + pxRelativePos.y * cos(u_rotation));\n  // sample position is computed according to the sample offset & size\n  vec2 samplePos = mod(pxRelativePos / scaleRatio, sampleSize);\n  // also make sure that we're not sampling too close to the borders to avoid interpolation with outside pixels\n  samplePos = clamp(samplePos, vec2(0.5), sampleSize - vec2(0.5));\n  samplePos.y = sampleSize.y - samplePos.y; // invert y axis so that images appear upright\n  return texture2D(texture, (samplePos + textureOffset) / textureSize);\n}");
					const l = `u_texture${i}`;
					let h = '1.';
					'fill-color' in t && (h = e.getFillColorExpression()), e.setFillColorExpression(`${h} * sampleFillPattern(${l}, ${s}, ${a}, ${o}, pxOrigin, pxPos)`);
				}
			})(t, s, o, 0, r),
			n)
		) {
			const t = wS(r, n, ru);
			s.setFragmentDiscardExpression(`!${t}`);
		}
		for (const t in r.variables) {
			const n = r.variables[t],
				i = aS(n.name);
			let a = CS(n.type);
			n.type === au && (a = 'vec4'),
				s.addUniform(`${a} ${i}`),
				(o[i] = () => {
					const t = e[n.name];
					return 'number' == typeof t ? t : 'boolean' == typeof t ? (t ? 1 : 0) : n.type === au ? Wa(t || '#eee') : 'string' == typeof t ? sS(t) : t;
				});
		}
		for (const t in r.properties) {
			const e = r.properties[t];
			i.properties[t] || (i.properties[t] = e);
			let n = CS(e.type),
				o = `a_prop_${e.name}`;
			e.type === au && ((n = 'vec4'), (o = `unpackColor(${o})`), s.addVertexShaderFunction('vec4 unpackColor(vec2 packedColor) {\n  return vec4(\n    fract(floor(packedColor[0] / 256.0) / 256.0),\n    fract(packedColor[0] / 256.0),\n    fract(floor(packedColor[1] / 256.0) / 256.0),\n    fract(packedColor[1] / 256.0)\n  );\n}')), s.addVarying(`v_prop_${e.name}`, n, o);
		}
		for (const t in i.properties) {
			const e = i.properties[t];
			s.addAttribute(`${CS(e.type)} a_prop_${e.name}`);
		}
		for (const t in i.functions) s.addVertexShaderFunction(i.functions[t]);
		for (const t in r.functions) s.addFragmentShaderFunction(r.functions[t]);
		const a = {};
		for (const t in i.properties) {
			const e = i.properties[t],
				n = (t) => {
					const n = t.get(e.name);
					return e.type === au ? bS([...Wa(n || '#eee')]) : 'string' == typeof n ? sS(n) : 'boolean' == typeof n ? (n ? 1 : 0) : n;
				};
			a[`prop_${e.name}`] = { size: SS(e.type), callback: n };
		}
		function l(t, e, n, o) {
			const l = i[t],
				h = r[t];
			if (!l && !h) return;
			const c = CS(n),
				u = SS(n);
			s.addAttribute(`${c} a_${e}`), h && s.addVarying(`v_${e}`, c, `a_${e}`), (a[e] = { size: u, callback: o });
		}
		return (
			l('geometryType', cS, ou, (t) => sS(bd(t.getGeometry()))),
			l('featureId', hS, ou | su, (t) => {
				const e = t.getId() ?? null;
				return 'string' == typeof e ? sS(e) : e;
			}),
			{ builder: s, attributes: a, uniforms: o }
		);
	}
	class IS extends ay {
		constructor(t) {
			const e = void 0 !== (t = t || {}).projection ? t.projection : 'EPSG:3857',
				n = void 0 !== t.tileGrid ? t.tileGrid : k_({ extent: D_(e), maxResolution: t.maxResolution, maxZoom: t.maxZoom, minZoom: t.minZoom, tileSize: t.tileSize });
			super({ attributions: t.attributions, cacheSize: t.cacheSize, crossOrigin: t.crossOrigin, interpolate: t.interpolate, projection: e, reprojectionErrorThreshold: t.reprojectionErrorThreshold, tileGrid: n, tileLoadFunction: t.tileLoadFunction, tilePixelRatio: t.tilePixelRatio, tileUrlFunction: t.tileUrlFunction, url: t.url, urls: t.urls, wrapX: void 0 === t.wrapX || t.wrapX, transition: t.transition, attributionsCollapsible: t.attributionsCollapsible, zDirection: t.zDirection }), (this.gutter_ = void 0 !== t.gutter ? t.gutter : 0);
		}
		getGutter() {
			return this.gutter_;
		}
	}
	const kS = '1.3.0',
		LS = [101, 101];
	function AS(t, e, n, i, r) {
		(r.WIDTH = n[0]), (r.HEIGHT = n[1]);
		const s = i.getAxisOrientation(),
			o = Kr(r.VERSION, '1.3') >= 0;
		r[o ? 'CRS' : 'SRS'] = i.getCode();
		const a = o && s.startsWith('ne') ? [e[1], e[0], e[3], e[2]] : e;
		return (r.BBOX = a.join(',')), K_(t, r);
	}
	function DS(t, e, n, i, r, s, o) {
		s = Object.assign({ REQUEST: 'GetMap' }, s);
		const a = e / n,
			l = [Rr(lr(t) / a, 4), Rr(rr(t) / a, 4)];
		if (1 != n)
			switch (o) {
				case 'geoserver':
					const t = (90 * n + 0.5) | 0;
					'FORMAT_OPTIONS' in s ? (s.FORMAT_OPTIONS += ';dpi:' + t) : (s.FORMAT_OPTIONS = 'dpi:' + t);
					break;
				case 'mapserver':
					s.MAP_RESOLUTION = 90 * n;
					break;
				case 'carmentaserver':
				case 'qgis':
					s.DPI = 90 * n;
					break;
				default:
					throw new Error('Unknown `serverType` configured');
			}
		return AS(r, t, l, i, s);
	}
	function OS(t, e) {
		return Object.assign({ REQUEST: e, SERVICE: 'WMS', VERSION: kS, FORMAT: 'image/png', STYLES: '', TRANSPARENT: 'TRUE' }, t);
	}
	mi.unByKey = _i;
	let zS = {
			Control: nf,
			Zoom: af,
			Attribution: sf,
			ScaleLine: class extends nf {
				constructor(t) {
					t = t || {};
					const e = document.createElement('div');
					(e.style.pointerEvents = 'none'), super({ element: e, render: t.render, target: t.target }), this.on, this.once, this.un;
					const n = void 0 !== t.className ? t.className : t.bar ? 'ol-scale-bar' : 'ol-scale-line';
					(this.innerElement_ = document.createElement('div')), (this.innerElement_.className = n + '-inner'), (this.element.className = n + ' ' + bl), this.element.appendChild(this.innerElement_), (this.viewState_ = null), (this.minWidth_ = void 0 !== t.minWidth ? t.minWidth : 64), (this.maxWidth_ = t.maxWidth), (this.renderedVisible_ = !1), (this.renderedWidth_ = void 0), (this.renderedHTML_ = ''), this.addChangeListener(Gy, this.handleUnitsChanged_), this.setUnits(t.units || 'metric'), (this.scaleBar_ = t.bar || !1), (this.scaleBarSteps_ = t.steps || 4), (this.scaleBarText_ = t.text || !1), (this.dpi_ = t.dpi || void 0);
				}
				getUnits() {
					return this.get(Gy);
				}
				handleUnitsChanged_() {
					this.updateElement_();
				}
				setUnits(t) {
					this.set(Gy, t);
				}
				setDpi(t) {
					this.dpi_ = t;
				}
				updateElement_() {
					const t = this.viewState_;
					if (!t) return void (this.renderedVisible_ && ((this.element.style.display = 'none'), (this.renderedVisible_ = !1)));
					const e = t.center,
						n = t.projection,
						i = this.getUnits(),
						r = 'degrees' == i ? 'degrees' : 'm';
					let s = lo(n, t.resolution, e, r);
					const o = (this.minWidth_ * (this.dpi_ || Ny)) / Ny,
						a = void 0 !== this.maxWidth_ ? (this.maxWidth_ * (this.dpi_ || Ny)) / Ny : void 0;
					let l = o * s,
						h = '';
					if ('degrees' == i) {
						const t = ss.degrees;
						(l *= t), l < t / 60 ? ((h = '″'), (s *= 3600)) : l < t ? ((h = '′'), (s *= 60)) : (h = '°');
					} else if ('imperial' == i) l < 0.9144 ? ((h = 'in'), (s /= 0.0254)) : l < 1609.344 ? ((h = 'ft'), (s /= 0.3048)) : ((h = 'mi'), (s /= 1609.344));
					else if ('nautical' == i) (s /= 1852), (h = 'NM');
					else if ('metric' == i) l < 1e-6 ? ((h = 'nm'), (s *= 1e9)) : l < 0.001 ? ((h = 'μm'), (s *= 1e6)) : l < 1 ? ((h = 'mm'), (s *= 1e3)) : l < 1e3 ? (h = 'm') : ((h = 'km'), (s /= 1e3));
					else {
						if ('us' != i) throw new Error('Invalid units');
						l < 0.9144 ? ((h = 'in'), (s *= 39.37)) : l < 1609.344 ? ((h = 'ft'), (s /= 0.30480061)) : ((h = 'mi'), (s /= 1609.3472));
					}
					let c,
						u,
						d,
						g,
						f,
						p = 3 * Math.floor(Math.log(o * s) / Math.log(10)),
						m = 0;
					for (;;) {
						d = Math.floor(p / 3);
						const t = Math.pow(10, d);
						if (((c = jy[((p % 3) + 3) % 3] * t), (u = Math.round(c / s)), isNaN(u))) return (this.element.style.display = 'none'), void (this.renderedVisible_ = !1);
						if (void 0 !== a && u >= a) {
							(c = m), (u = g), (d = f);
							break;
						}
						if (u >= o) break;
						(m = c), (g = u), (f = d), ++p;
					}
					const _ = this.scaleBar_ ? this.createScaleBar(u, c, h) : c.toFixed(d < 0 ? -d : 0) + ' ' + h;
					this.renderedHTML_ != _ && ((this.innerElement_.innerHTML = _), (this.renderedHTML_ = _)), this.renderedWidth_ != u && ((this.innerElement_.style.width = u + 'px'), (this.renderedWidth_ = u)), this.renderedVisible_ || ((this.element.style.display = ''), (this.renderedVisible_ = !0));
				}
				createScaleBar(t, e, n) {
					const i = this.getScaleForResolution(),
						r = i < 1 ? Math.round(1 / i).toLocaleString() + ' : 1' : '1 : ' + Math.round(i).toLocaleString(),
						s = this.scaleBarSteps_,
						o = t / s,
						a = [this.createMarker('absolute')];
					for (let i = 0; i < s; ++i) {
						const r = i % 2 == 0 ? 'ol-scale-singlebar-odd' : 'ol-scale-singlebar-even';
						a.push(`<div><div class="ol-scale-singlebar ${r}" style="width: ${o}px;"></div>` + this.createMarker('relative') + (i % 2 == 0 || 2 === s ? this.createStepText(i, t, !1, e, n) : '') + '</div>');
					}
					a.push(this.createStepText(s, t, !0, e, n));
					return (this.scaleBarText_ ? `<div class="ol-scale-text" style="width: ${t}px;">` + r + '</div>' : '') + a.join('');
				}
				createMarker(t) {
					return `<div class="ol-scale-step-marker" style="position: ${t}; top: ${'absolute' === t ? 3 : -10}px;"></div>`;
				}
				createStepText(t, e, n, i, r) {
					const s = (0 === t ? 0 : Math.round((i / this.scaleBarSteps_) * t * 100) / 100) + (0 === t ? '' : ' ' + r);
					return `<div class="ol-scale-step-text" style="margin-left: ${0 === t ? -3 : (e / this.scaleBarSteps_) * -1}px;text-align: ${0 === t ? 'left' : 'center'};min-width: ${0 === t ? 0 : (e / this.scaleBarSteps_) * 2}px;left: ${n ? e + 'px' : 'unset'};">` + s + '</div>';
				}
				getScaleForResolution() {
					return lo(this.viewState_.projection, this.viewState_.resolution, this.viewState_.center, 'm') * (1e3 / 25.4) * (this.dpi_ || Ny);
				}
				render(t) {
					const e = t.frameState;
					(this.viewState_ = e ? e.viewState : null), this.updateElement_();
				}
			},
			LayerSwitcher: Ky,
		},
		GS = {
			GeoJSON: ym,
			KML: class extends cv {
				constructor(t) {
					super(),
						(t = t || {}),
						Uv || ((Pv = [255, 255, 255, 1]), (Ov = new Jl({ color: Pv })), (Rv = [20, 2]), (Fv = 'pixels'), (Mv = 'pixels'), (Iv = [64, 64]), (kv = 'https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png'), (zv = new th({ anchor: Rv, anchorOrigin: 'bottom-left', anchorXUnits: Fv, anchorYUnits: Mv, crossOrigin: 'anonymous', rotation: 0, scale: $v(Iv), size: Iv, src: kv })), (Lv = 'NO_IMAGE'), (Gv = new eh({ color: Pv, width: 1 })), (Av = new eh({ color: [51, 51, 51, 1], width: 2 })), (jv = new ah({ font: 'bold 16px Helvetica', fill: Ov, stroke: Av, scale: 0.8 })), (Nv = new nh({ fill: Ov, image: zv, text: jv, stroke: Gv, zIndex: 0 })), (Uv = [Nv])),
						(this.dataProjection = ao('EPSG:4326')),
						(this.defaultStyle_ = t.defaultStyle ? t.defaultStyle : Uv),
						(this.extractStyles_ = void 0 === t.extractStyles || t.extractStyles),
						(this.writeStyles_ = void 0 === t.writeStyles || t.writeStyles),
						(this.sharedStyles_ = {}),
						(this.showPointNames_ = void 0 === t.showPointNames || t.showPointNames),
						(this.crossOrigin_ = void 0 !== t.crossOrigin ? t.crossOrigin : 'anonymous'),
						(this.iconUrlFunction_ = t.iconUrlFunction ? t.iconUrlFunction : Bv),
						(this.supportedMediaTypes = ['application/vnd.google-earth.kml+xml']);
				}
				readDocumentOrFolder_(t, e) {
					const n = sv([], iv(yv, { Document: Kx(this.readDocumentOrFolder_, this), Folder: Kx(this.readDocumentOrFolder_, this), Placemark: Yx(this.readPlacemark_, this), Style: this.readSharedStyle_.bind(this), StyleMap: this.readSharedStyleMap_.bind(this) }), t, e, this);
					if (n) return n;
				}
				readPlacemark_(t, e) {
					const n = sv({ geometry: null }, vv, t, e, this);
					if (!n) return;
					const i = new Ei(),
						r = t.getAttribute('id');
					null !== r && i.setId(r);
					const s = e[0],
						o = n.geometry;
					if ((o && dm(o, !1, s), i.setGeometry(o), delete n.geometry, this.extractStyles_)) {
						const t = (function (t, e, n, i, r) {
							return function (s, o) {
								let a = r,
									l = '',
									h = [];
								if (a) {
									const t = s.getGeometry();
									if (t)
										if (t instanceof Jo)
											(h = t.getGeometriesArrayRecursive().filter(function (t) {
												const e = t.getType();
												return 'Point' === e || 'MultiPoint' === e;
											})),
												(a = h.length > 0);
										else {
											const e = t.getType();
											a = 'Point' === e || 'MultiPoint' === e;
										}
								}
								a && ((l = s.get('name')), (a = a && !!l), a && /&[^&]+;/.test(l) && (Dv || (Dv = document.createElement('textarea')), (Dv.innerHTML = l), (l = Dv.value)));
								let c = n;
								if ((t ? (c = t) : e && (c = Vv(e, n, i)), a)) {
									const t = (function (t, e) {
										const n = [0, 0];
										let i = 'start';
										const r = t.getImage();
										if (r) {
											const t = r.getSize();
											if (t && 2 == t.length) {
												const e = r.getScaleArray(),
													s = r.getAnchor();
												(n[0] = e[0] * (t[0] - s[0])), (n[1] = e[1] * (t[1] / 2 - s[1])), (i = 'left');
											}
										}
										let s = t.getText();
										s ? ((s = s.clone()), s.setFont(s.getFont() || jv.getFont()), s.setScale(s.getScale() || jv.getScale()), s.setFill(s.getFill() || jv.getFill()), s.setStroke(s.getStroke() || Av)) : (s = jv.clone());
										s.setText(e), s.setOffsetX(n[0]), s.setOffsetY(n[1]), s.setTextAlign(i);
										const o = new nh({ image: r, text: s });
										return o;
									})(c[0], l);
									if (h.length > 0) {
										t.setGeometry(new Jo(h));
										return [t, new nh({ geometry: c[0].getGeometry(), image: null, fill: c[0].getFill(), stroke: c[0].getStroke(), text: null })].concat(c.slice(1));
									}
									return t;
								}
								return c;
							};
						})(n.Style, n.styleUrl, this.defaultStyle_, this.sharedStyles_, this.showPointNames_);
						i.setStyle(t);
					}
					return delete n.Style, i.setProperties(n, !0), i;
				}
				readSharedStyle_(t, e) {
					const n = t.getAttribute('id');
					if (null !== n) {
						const i = xw.call(this, t, e);
						if (i) {
							let e,
								r = t.baseURI;
							if (((r && 'about:blank' != r) || (r = window.location.href), r)) {
								e = new URL('#' + n, r).href;
							} else e = '#' + n;
							this.sharedStyles_[e] = i;
						}
					}
				}
				readSharedStyleMap_(t, e) {
					const n = t.getAttribute('id');
					if (null === n) return;
					const i = Hv.call(this, t, e);
					if (!i) return;
					let r,
						s = t.baseURI;
					if (((s && 'about:blank' != s) || (s = window.location.href), s)) {
						r = new URL('#' + n, s).href;
					} else r = '#' + n;
					this.sharedStyles_[r] = i;
				}
				readFeatureFromNode(t, e) {
					if (!yv.includes(t.namespaceURI)) return null;
					const n = this.readPlacemark_(t, [this.getReadOptions(t, e)]);
					return n || null;
				}
				readFeaturesFromNode(t, e) {
					if (!yv.includes(t.namespaceURI)) return [];
					let n;
					const i = t.localName;
					if ('Document' == i || 'Folder' == i) return (n = this.readDocumentOrFolder_(t, [this.getReadOptions(t, e)])), n || [];
					if ('Placemark' == i) {
						const n = this.readPlacemark_(t, [this.getReadOptions(t, e)]);
						return n ? [n] : [];
					}
					if ('kml' == i) {
						n = [];
						for (let i = t.firstElementChild; i; i = i.nextElementSibling) {
							const t = this.readFeaturesFromNode(i, e);
							t && Un(n, t);
						}
						return n;
					}
					return [];
				}
				readName(t) {
					if (t) {
						if ('string' == typeof t) {
							const e = Zx(t);
							return this.readNameFromDocument(e);
						}
						return qx(t) ? this.readNameFromDocument(t) : this.readNameFromNode(t);
					}
				}
				readNameFromDocument(t) {
					for (let e = t.firstChild; e; e = e.nextSibling)
						if (e.nodeType == Node.ELEMENT_NODE) {
							const t = this.readNameFromNode(e);
							if (t) return t;
						}
				}
				readNameFromNode(t) {
					for (let e = t.firstElementChild; e; e = e.nextElementSibling) if (yv.includes(e.namespaceURI) && 'name' == e.localName) return gv(e);
					for (let e = t.firstElementChild; e; e = e.nextElementSibling) {
						const t = e.localName;
						if (yv.includes(e.namespaceURI) && ('Document' == t || 'Folder' == t || 'Placemark' == t || 'kml' == t)) {
							const t = this.readNameFromNode(e);
							if (t) return t;
						}
					}
				}
				readNetworkLinks(t) {
					const e = [];
					if ('string' == typeof t) {
						const n = Zx(t);
						Un(e, this.readNetworkLinksFromDocument(n));
					} else qx(t) ? Un(e, this.readNetworkLinksFromDocument(t)) : Un(e, this.readNetworkLinksFromNode(t));
					return e;
				}
				readNetworkLinksFromDocument(t) {
					const e = [];
					for (let n = t.firstChild; n; n = n.nextSibling) n.nodeType == Node.ELEMENT_NODE && Un(e, this.readNetworkLinksFromNode(n));
					return e;
				}
				readNetworkLinksFromNode(t) {
					const e = [];
					for (let n = t.firstElementChild; n; n = n.nextElementSibling)
						if (yv.includes(n.namespaceURI) && 'NetworkLink' == n.localName) {
							const t = sv({}, wv, n, []);
							e.push(t);
						}
					for (let n = t.firstElementChild; n; n = n.nextElementSibling) {
						const t = n.localName;
						!yv.includes(n.namespaceURI) || ('Document' != t && 'Folder' != t && 'kml' != t) || Un(e, this.readNetworkLinksFromNode(n));
					}
					return e;
				}
				readRegion(t) {
					const e = [];
					if ('string' == typeof t) {
						const n = Zx(t);
						Un(e, this.readRegionFromDocument(n));
					} else qx(t) ? Un(e, this.readRegionFromDocument(t)) : Un(e, this.readRegionFromNode(t));
					return e;
				}
				readRegionFromDocument(t) {
					const e = [];
					for (let n = t.firstChild; n; n = n.nextSibling) n.nodeType == Node.ELEMENT_NODE && Un(e, this.readRegionFromNode(n));
					return e;
				}
				readRegionFromNode(t) {
					const e = [];
					for (let n = t.firstElementChild; n; n = n.nextElementSibling)
						if (yv.includes(n.namespaceURI) && 'Region' == n.localName) {
							const t = sv({}, Cv, n, []);
							e.push(t);
						}
					for (let n = t.firstElementChild; n; n = n.nextElementSibling) {
						const t = n.localName;
						!yv.includes(n.namespaceURI) || ('Document' != t && 'Folder' != t && 'kml' != t) || Un(e, this.readRegionFromNode(n));
					}
					return e;
				}
				readCamera(t) {
					const e = [];
					if ('string' == typeof t) {
						const n = Zx(t);
						Un(e, this.readCameraFromDocument(n));
					} else qx(t) ? Un(e, this.readCameraFromDocument(t)) : Un(e, this.readCameraFromNode(t));
					return e;
				}
				readCameraFromDocument(t) {
					const e = [];
					for (let n = t.firstChild; n; n = n.nextSibling) n.nodeType === Node.ELEMENT_NODE && Un(e, this.readCameraFromNode(n));
					return e;
				}
				readCameraFromNode(t) {
					const e = [];
					for (let n = t.firstElementChild; n; n = n.nextElementSibling)
						if (yv.includes(n.namespaceURI) && 'Camera' === n.localName) {
							const t = sv({}, Sv, n, []);
							e.push(t);
						}
					for (let n = t.firstElementChild; n; n = n.nextElementSibling) {
						const t = n.localName;
						!yv.includes(n.namespaceURI) || ('Document' !== t && 'Folder' !== t && 'Placemark' !== t && 'kml' !== t) || Un(e, this.readCameraFromNode(n));
					}
					return e;
				}
				writeFeaturesNode(t, e) {
					e = this.adaptOptions(e);
					const n = Vx(yv[4], 'kml'),
						i = 'http://www.w3.org/2000/xmlns/';
					n.setAttributeNS(i, 'xmlns:gx', _v[0]), n.setAttributeNS(i, 'xmlns:xsi', Bx), n.setAttributeNS(Bx, 'xsi:schemaLocation', 'http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd');
					const r = { node: n },
						s = {};
					t.length > 1 ? (s.Document = t) : 1 == t.length && (s.Placemark = t[0]);
					const o = Ev[n.namespaceURI],
						a = nv(s, o);
					return ov(r, Tv, ev, a, [e], o, this), n;
				}
			},
			MVT: Om,
		},
		jS = {
			Group: Zf,
			Tile: g_,
			Vector: Rg,
			VectorTile: __,
			WebGLPoints: class extends Cg {
				constructor(t) {
					super(Object.assign({}, t)), (this.styleVariables_ = t.variables || {}), (this.parseResult_ = MS(t.style, this.styleVariables_, t.filter)), (this.hitDetectionDisabled_ = !!t.disableHitDetection);
				}
				createRenderer() {
					const t = Object.keys(this.parseResult_.attributes).map((t) => ({ name: t, ...this.parseResult_.attributes[t] }));
					return new Kb(this, { vertexShader: this.parseResult_.builder.getSymbolVertexShader(), fragmentShader: this.parseResult_.builder.getSymbolFragmentShader(), hitDetectionEnabled: !this.hitDetectionDisabled_, uniforms: this.parseResult_.uniforms, attributes: t });
				}
				updateStyleVariables(t) {
					Object.assign(this.styleVariables_, t), this.changed();
				}
			},
			Heatmap: class extends Pg {
				constructor(t) {
					t = t || {};
					const e = Object.assign({}, t);
					delete e.gradient, delete e.radius, delete e.blur, delete e.weight, super(e), (this.gradient_ = null), this.addChangeListener(yS, this.handleGradientChanged_), this.setGradient(t.gradient ? t.gradient : vS), this.setBlur(void 0 !== t.blur ? t.blur : 15), this.setRadius(void 0 !== t.radius ? t.radius : 8);
					const n = t.weight ? t.weight : 'weight';
					(this.weightFunction_ = 'string' == typeof n ? (t) => t.get(n) : n), this.setRenderOrder(null);
				}
				getBlur() {
					return this.get(_S);
				}
				getGradient() {
					return this.get(yS);
				}
				getRadius() {
					return this.get(xS);
				}
				handleGradientChanged_() {
					this.gradient_ = (function (t) {
						const e = 1,
							n = 256,
							i = rl(e, n),
							r = i.createLinearGradient(0, 0, e, n),
							s = 1 / (t.length - 1);
						for (let e = 0, n = t.length; e < n; ++e) r.addColorStop(e * s, t[e]);
						return (i.fillStyle = r), i.fillRect(0, 0, e, n), i.canvas;
					})(this.getGradient());
				}
				setBlur(t) {
					this.set(_S, t);
				}
				setGradient(t) {
					this.set(yS, t);
				}
				setRadius(t) {
					this.set(xS, t);
				}
				createRenderer() {
					const t = new mS().addAttribute('float a_weight').addVarying('v_weight', 'float', 'a_weight').addUniform('float u_size').addUniform('float u_blurSlope').setSymbolSizeExpression('vec2(u_size)').setSymbolColorExpression('vec4(smoothstep(0., 1., (1. - length(coordsPx * 2. / v_quadSizePx)) * u_blurSlope) * v_weight)');
					return new Kb(this, {
						className: this.getClassName(),
						attributes: [
							{
								name: 'weight',
								callback: (t) => {
									const e = this.weightFunction_(t);
									return void 0 !== e ? vr(e, 0, 1) : 1;
								},
							},
						],
						uniforms: { u_size: () => 2 * (this.get(xS) + this.get(_S)), u_blurSlope: () => this.get(xS) / Math.max(1, this.get(_S)) },
						hitDetectionEnabled: !0,
						vertexShader: t.getSymbolVertexShader(),
						fragmentShader: t.getSymbolFragmentShader(),
						postProcesses: [{ fragmentShader: '\n            precision mediump float;\n\n            uniform sampler2D u_image;\n            uniform sampler2D u_gradientTexture;\n            uniform float u_opacity;\n\n            varying vec2 v_texCoord;\n\n            void main() {\n              vec4 color = texture2D(u_image, v_texCoord);\n              gl_FragColor.a = color.a * u_opacity;\n              gl_FragColor.rgb = texture2D(u_gradientTexture, vec2(0.5, color.a)).rgb;\n              gl_FragColor.rgb *= gl_FragColor.a;\n            }', uniforms: { u_gradientTexture: () => this.gradient_, u_opacity: () => this.getOpacity() } }],
					});
				}
				renderDeclutter() {}
			},
			Image: Bm,
		},
		NS = { LineString: ma, Point: ya, MultiPoint: xa },
		US = { Icon: th, Style: nh, Text: ah, Stroke: eh, Fill: Jl, Circle: Hl },
		$S = {
			OSM: class extends IS {
				constructor(t) {
					let e;
					e = void 0 !== (t = t || {}).attributions ? t.attributions : ['&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.'];
					const n = void 0 !== t.crossOrigin ? t.crossOrigin : 'anonymous',
						i = void 0 !== t.url ? t.url : 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
					super({ attributions: e, attributionsCollapsible: !1, cacheSize: t.cacheSize, crossOrigin: n, interpolate: t.interpolate, maxZoom: void 0 !== t.maxZoom ? t.maxZoom : 19, reprojectionErrorThreshold: t.reprojectionErrorThreshold, tileLoadFunction: t.tileLoadFunction, transition: t.transition, url: i, wrapX: t.wrapX, zDirection: t.zDirection });
				}
			},
			XYZ: IS,
			TileWMS: class extends ay {
				constructor(t) {
					t = t || {};
					const e = Object.assign({}, t.params);
					super({ attributions: t.attributions, attributionsCollapsible: t.attributionsCollapsible, cacheSize: t.cacheSize, crossOrigin: t.crossOrigin, interpolate: t.interpolate, projection: t.projection, reprojectionErrorThreshold: t.reprojectionErrorThreshold, tileClass: t.tileClass, tileGrid: t.tileGrid, tileLoadFunction: t.tileLoadFunction, url: t.url, urls: t.urls, wrapX: void 0 === t.wrapX || t.wrapX, transition: t.transition, zDirection: t.zDirection }),
						(this.gutter_ = void 0 !== t.gutter ? t.gutter : 0),
						(this.params_ = e),
						(this.v13_ = !0),
						(this.serverType_ = t.serverType),
						(this.hidpi_ = void 0 === t.hidpi || t.hidpi),
						(this.tmpExtent_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0]),
						this.updateV13_(),
						this.setKey(this.getKeyForParams_());
				}
				getFeatureInfoUrl(t, e, n, i) {
					const r = ao(n),
						s = this.getProjection() || r;
					let o = this.getTileGrid();
					o || (o = this.getTileGridForProjection(s));
					const a = xo(t, r, s),
						l = Jm(s, r, t, e),
						h = o.getZForResolution(l, this.zDirection),
						c = o.getResolution(h),
						u = o.getTileCoordForCoordAndZ(a, h);
					if (o.getResolutions().length <= u[0]) return;
					let d = o.getTileCoordExtent(u, this.tmpExtent_);
					const g = this.gutter_;
					0 !== g && (d = Li(d, c * g, d));
					const f = { QUERY_LAYERS: this.params_.LAYERS };
					Object.assign(f, OS(this.params_, 'GetFeatureInfo'), i);
					const p = Math.floor((a[0] - d[0]) / c),
						m = Math.floor((d[3] - a[1]) / c);
					return (f[this.v13_ ? 'I' : 'X'] = p), (f[this.v13_ ? 'J' : 'Y'] = m), this.getRequestUrl_(u, d, 1, s || r, f);
				}
				getLegendUrl(t, e) {
					if (void 0 === this.urls[0]) return;
					const n = { SERVICE: 'WMS', VERSION: kS, REQUEST: 'GetLegendGraphic', FORMAT: 'image/png' };
					if (void 0 === e || void 0 === e.LAYER) {
						const t = this.params_.LAYERS;
						if (!(!Array.isArray(t) || 1 === t.length)) return;
						n.LAYER = t;
					}
					if (void 0 !== t) {
						const e = this.getProjection() ? this.getProjection().getMetersPerUnit() : 1,
							i = 28e-5;
						n.SCALE = (t * e) / i;
					}
					return Object.assign(n, e), K_(this.urls[0], n);
				}
				getGutter() {
					return this.gutter_;
				}
				getParams() {
					return this.params_;
				}
				getRequestUrl_(t, e, n, i, r) {
					const s = this.urls;
					if (!s) return;
					let o;
					if (1 == s.length) o = s[0];
					else {
						o = s[Er(r_(t), s.length)];
					}
					return DS(e, (this.tileGrid || this.getTileGridForProjection(i)).getResolution(t[0]), n, i, o, r, this.serverType_);
				}
				getTilePixelRatio(t) {
					return this.hidpi_ && void 0 !== this.serverType_ ? t : 1;
				}
				getKeyForParams_() {
					let t = 0;
					const e = [];
					for (const n in this.params_) e[t++] = n + '-' + this.params_[n];
					return e.join('/');
				}
				updateParams(t) {
					Object.assign(this.params_, t), this.updateV13_(), this.setKey(this.getKeyForParams_());
				}
				updateV13_() {
					const t = this.params_.VERSION || kS;
					this.v13_ = Kr(t, '1.3') >= 0;
				}
				tileUrlFunction(t, e, n) {
					let i = this.getTileGrid();
					if ((i || (i = this.getTileGridForProjection(n)), i.getResolutions().length <= t[0])) return;
					1 == e || (this.hidpi_ && void 0 !== this.serverType_) || (e = 1);
					const r = i.getResolution(t[0]);
					let s = i.getTileCoordExtent(t, this.tmpExtent_);
					const o = this.gutter_;
					0 !== o && (s = Li(s, r * o, s));
					const a = Object.assign({}, OS(this.params_, 'GetMap'));
					return this.getRequestUrl_(t, s, e, n, a);
				}
			},
			BingMaps: class extends ay {
				constructor(t) {
					const e = void 0 !== t.hidpi && t.hidpi;
					super({ cacheSize: t.cacheSize, crossOrigin: 'anonymous', interpolate: t.interpolate, projection: ao('EPSG:3857'), reprojectionErrorThreshold: t.reprojectionErrorThreshold, state: 'loading', tileLoadFunction: t.tileLoadFunction, tilePixelRatio: e ? 2 : 1, wrapX: void 0 === t.wrapX || t.wrapX, transition: t.transition, zDirection: t.zDirection }), (this.hidpi_ = e), (this.culture_ = void 0 !== t.culture ? t.culture : 'en-us'), (this.maxZoom_ = void 0 !== t.maxZoom ? t.maxZoom : -1), (this.apiKey_ = t.key), (this.imagerySet_ = t.imagerySet), (this.placeholderTiles_ = t.placeholderTiles);
					const n = 'https://dev.virtualearth.net/REST/v1/Imagery/Metadata/' + this.imagerySet_ + '?uriScheme=https&include=ImageryProviders&key=' + this.apiKey_ + '&c=' + this.culture_;
					fetch(n)
						.then((t) => t.json())
						.then((t) => this.handleImageryMetadataResponse(t));
				}
				getApiKey() {
					return this.apiKey_;
				}
				getImagerySet() {
					return this.imagerySet_;
				}
				handleImageryMetadataResponse(t) {
					if (200 != t.statusCode || 'OK' != t.statusDescription || 'ValidCredentials' != t.authenticationResultCode || 1 != t.resourceSets.length || 1 != t.resourceSets[0].resources.length) return void this.setState('error');
					const e = t.resourceSets[0].resources[0],
						n = -1 == this.maxZoom_ ? e.zoomMax : this.maxZoom_,
						i = D_(this.getProjection()),
						r = this.hidpi_ ? 2 : 1,
						s = e.imageWidth == e.imageHeight ? e.imageWidth / r : [e.imageWidth / r, e.imageHeight / r],
						o = k_({ extent: i, minZoom: e.zoomMin, maxZoom: n, tileSize: s });
					this.tileGrid = o;
					const a = this.culture_,
						l = this.hidpi_,
						h = this.placeholderTiles_;
					if (
						((this.tileUrlFunction = ny(
							e.imageUrlSubdomains.map(function (t) {
								const n = [0, 0, 0],
									i = e.imageUrl.replace('{subdomain}', t).replace('{culture}', a);
								return function (t, e, r) {
									if (!t) return;
									i_(t[0], t[1], t[2], n);
									const s = new URL(
											i.replace(
												'{quadkey}',
												(function (t) {
													const e = t[0],
														n = new Array(e);
													let i,
														r,
														s = 1 << (e - 1);
													for (i = 0; i < e; ++i) (r = 48), t[1] & s && (r += 1), t[2] & s && (r += 2), (n[i] = String.fromCharCode(r)), (s >>= 1);
													return n.join('');
												})(n)
											)
										),
										o = s.searchParams;
									return l && (o.set('dpi', 'd1'), o.set('device', 'mobile')), !0 === h ? o.delete('n') : !1 === h && o.set('n', 'z'), s.toString();
								};
							})
						)),
						e.imageryProviders)
					) {
						const t = mo(ao('EPSG:4326'), this.getProjection());
						this.setAttributions((n) => {
							const i = [],
								r = n.viewState,
								s = this.getTileGrid(),
								o = s.getZForResolution(r.resolution, this.zDirection),
								a = s.getTileCoordForCoordAndZ(r.center, o)[0];
							return (
								e.imageryProviders.map(function (e) {
									let r = !1;
									const s = e.coverageAreas;
									for (let e = 0, i = s.length; e < i; ++e) {
										const i = s[e];
										if (a >= i.zoomMin && a <= i.zoomMax) {
											const e = i.bbox;
											if (hr(ur([e[1], e[0], e[3], e[2]], t), n.extent)) {
												r = !0;
												break;
											}
										}
									}
									r && i.push(e.attribution);
								}),
								i.push('<a class="ol-attribution-bing-tos" href="https://www.microsoft.com/maps/product/terms.html" target="_blank">Terms of Use</a>'),
								i
							);
						});
					}
					this.setState('ready');
				}
			},
			Vector: rc,
			VectorTile: cy,
			ImageWMS: class extends C_ {
				constructor(t) {
					super({ attributions: (t = t || {}).attributions, interpolate: t.interpolate, projection: t.projection, resolutions: t.resolutions }), (this.crossOrigin_ = void 0 !== t.crossOrigin ? t.crossOrigin : null), (this.url_ = t.url), (this.imageLoadFunction_ = void 0 !== t.imageLoadFunction ? t.imageLoadFunction : E_), (this.params_ = Object.assign({}, t.params)), (this.serverType_ = t.serverType), (this.hidpi_ = void 0 === t.hidpi || t.hidpi), (this.renderedRevision_ = 0), (this.ratio_ = void 0 !== t.ratio ? t.ratio : 1.5), (this.loaderProjection_ = null);
				}
				getFeatureInfoUrl(t, e, n, i) {
					const r = ao(n),
						s = this.getProjection();
					s && s !== r && ((e = Jm(s, r, t, e)), (t = xo(t, r, s)));
					return (function (t, e, n) {
						if (void 0 === t.url) return;
						const i = ao(t.projection || 'EPSG:3857'),
							r = nr(e, n, 0, LS),
							s = { QUERY_LAYERS: t.params.LAYERS, INFO_FORMAT: 'application/json' };
						Object.assign(s, OS(t.params, 'GetFeatureInfo'), t.params);
						const o = Fr((e[0] - r[0]) / n, 4),
							a = Fr((r[3] - e[1]) / n, 4),
							l = Kr(s.VERSION, '1.3') >= 0;
						return (s[l ? 'I' : 'X'] = o), (s[l ? 'J' : 'Y'] = a), AS(t.url, r, LS, i, s);
					})({ url: this.url_, params: { ...this.params_, ...i }, projection: s || r }, t, e);
				}
				getLegendUrl(t, e) {
					return (function (t, e) {
						if (void 0 === t.url) return;
						const n = { SERVICE: 'WMS', VERSION: kS, REQUEST: 'GetLegendGraphic', FORMAT: 'image/png' };
						if (void 0 !== e) {
							const i = ao(t.projection || 'EPSG:3857').getMetersPerUnit() || 1,
								r = 28e-5;
							n.SCALE = (e * i) / r;
						}
						if ((Object.assign(n, t.params), void 0 !== t.params && void 0 === n.LAYER)) {
							const t = n.LAYERS;
							if (Array.isArray(t) && 1 === t.length) return;
							n.LAYER = t;
						}
						return K_(t.url, n);
					})({ url: this.url_, params: { ...this.params_, ...e } }, t);
				}
				getParams() {
					return this.params_;
				}
				getImageInternal(t, e, n, i) {
					return void 0 === this.url_
						? null
						: ((this.loader && this.loaderProjection_ === i) ||
								((this.loaderProjection_ = i),
								(this.loader = (function (t) {
									const e = void 0 === t.hidpi || t.hidpi,
										n = ao(t.projection || 'EPSG:3857'),
										i = t.ratio || 1.5,
										r = t.load || fl,
										s = t.crossOrigin ?? null;
									return (o, a, l) => {
										(o = T_(o, a, l, i)), 1 == l || (e && void 0 !== t.serverType) || (l = 1);
										const h = DS(o, a, l, n, t.url, OS(t.params, 'GetMap'), t.serverType),
											c = new Image();
										return (c.crossOrigin = s), r(c, h).then((t) => ({ image: t, extent: o, pixelRatio: l }));
									};
								})({ crossOrigin: this.crossOrigin_, params: this.params_, projection: i, serverType: this.serverType_, hidpi: this.hidpi_, url: this.url_, ratio: this.ratio_, load: (t, e) => (this.image.setImage(t), this.imageLoadFunction_(this.image, e), fl(t)) }))),
						  super.getImageInternal(t, e, n, i));
				}
				getImageLoadFunction() {
					return this.imageLoadFunction_;
				}
				getUrl() {
					return this.url_;
				}
				setImageLoadFunction(t) {
					(this.imageLoadFunction_ = t), this.changed();
				}
				setUrl(t) {
					t != this.url_ && ((this.url_ = t), (this.loader = null), this.changed());
				}
				updateParams(t) {
					Object.assign(this.params_, t), this.changed();
				}
				changed() {
					(this.image = null), super.changed();
				}
			},
			ImageStatic: class extends C_ {
				constructor(t) {
					const e = void 0 !== t.crossOrigin ? t.crossOrigin : null,
						n = void 0 !== t.imageLoadFunction ? t.imageLoadFunction : E_;
					super({ attributions: t.attributions, interpolate: t.interpolate, projection: ao(t.projection) }),
						(this.url_ = t.url),
						(this.imageExtent_ = t.imageExtent),
						(this.image = null),
						(this.image = new dl(
							this.imageExtent_,
							void 0,
							1,
							(function (t) {
								const e = t.load || fl,
									n = t.imageExtent,
									i = t.crossOrigin ?? null;
								return () => {
									const r = new Image();
									return (
										(r.crossOrigin = i),
										e(r, t.url).then((t) => {
											const e = lr(n) / t.width,
												i = rr(n) / t.height;
											return { image: t, extent: n, resolution: e !== i ? [e, i] : i, pixelRatio: 1 };
										})
									);
								};
							})({ url: t.url, imageExtent: t.imageExtent, crossOrigin: e, load: (t, e) => (this.image.setImage(t), n(this.image, e), fl(t)) })
						)),
						this.image.addEventListener(Kn, this.handleImageChange.bind(this));
				}
				getImageExtent() {
					return this.imageExtent_;
				}
				getImageInternal(t, e, n, i) {
					return hr(t, this.image.getExtent()) ? this.image : null;
				}
				getUrl() {
					return this.url_;
				}
			},
		};
	(t.Collection = dh),
		(t.Feature = Ei),
		(t.Map = ep),
		(t.Observable = mi),
		(t.Overlay = class extends Si {
			constructor(t) {
				super(),
					this.on,
					this.once,
					this.un,
					(this.options = t),
					(this.id = t.id),
					(this.insertFirst = void 0 === t.insertFirst || t.insertFirst),
					(this.stopEvent = void 0 === t.stopEvent || t.stopEvent),
					(this.element = document.createElement('div')),
					(this.element.className = void 0 !== t.className ? t.className : 'ol-overlay-container ol-selectable'),
					(this.element.style.position = 'absolute'),
					(this.element.style.pointerEvents = 'auto'),
					(this.autoPan = !0 === t.autoPan ? {} : t.autoPan || void 0),
					(this.rendered = { transform_: '', visible: !0 }),
					(this.mapPostrenderListenerKey = null),
					this.addChangeListener(np, this.handleElementChanged),
					this.addChangeListener(ip, this.handleMapChanged),
					this.addChangeListener(rp, this.handleOffsetChanged),
					this.addChangeListener(sp, this.handlePositionChanged),
					this.addChangeListener(op, this.handlePositioningChanged),
					void 0 !== t.element && this.setElement(t.element),
					this.setOffset(void 0 !== t.offset ? t.offset : [0, 0]),
					this.setPositioning(t.positioning || 'top-left'),
					void 0 !== t.position && this.setPosition(t.position);
			}
			getElement() {
				return this.get(np);
			}
			getId() {
				return this.id;
			}
			getMap() {
				return this.get(ip) || null;
			}
			getOffset() {
				return this.get(rp);
			}
			getPosition() {
				return this.get(sp);
			}
			getPositioning() {
				return this.get(op);
			}
			handleElementChanged() {
				ul(this.element);
				const t = this.getElement();
				t && this.element.appendChild(t);
			}
			handleMapChanged() {
				this.mapPostrenderListenerKey && (this.element?.remove(), pi(this.mapPostrenderListenerKey), (this.mapPostrenderListenerKey = null));
				const t = this.getMap();
				if (t) {
					(this.mapPostrenderListenerKey = gi(t, Vg, this.render, this)), this.updatePixelPosition();
					const e = this.stopEvent ? t.getOverlayContainerStopEvent() : t.getOverlayContainer();
					this.insertFirst ? e.insertBefore(this.element, e.childNodes[0] || null) : e.appendChild(this.element), this.performAutoPan();
				}
			}
			render() {
				this.updatePixelPosition();
			}
			handleOffsetChanged() {
				this.updatePixelPosition();
			}
			handlePositionChanged() {
				this.updatePixelPosition(), this.performAutoPan();
			}
			handlePositioningChanged() {
				this.updatePixelPosition();
			}
			setElement(t) {
				this.set(np, t);
			}
			setMap(t) {
				this.set(ip, t);
			}
			setOffset(t) {
				this.set(rp, t);
			}
			setPosition(t) {
				this.set(sp, t);
			}
			performAutoPan() {
				this.autoPan && this.panIntoView(this.autoPan);
			}
			panIntoView(t) {
				const e = this.getMap();
				if (!e || !e.getTargetElement() || !this.get(sp)) return;
				const n = this.getRect(e.getTargetElement(), e.getSize()),
					i = this.getElement(),
					r = this.getRect(i, [ll(i), hl(i)]),
					s = void 0 === (t = t || {}).margin ? 20 : t.margin;
				if (!zi(n, r)) {
					const i = r[0] - n[0],
						o = n[2] - r[2],
						a = r[1] - n[1],
						l = n[3] - r[3],
						h = [0, 0];
					if ((i < 0 ? (h[0] = i - s) : o < 0 && (h[0] = Math.abs(o) + s), a < 0 ? (h[1] = a - s) : l < 0 && (h[1] = Math.abs(l) + s), 0 !== h[0] || 0 !== h[1])) {
						const n = e.getView().getCenterInternal(),
							i = e.getPixelFromCoordinateInternal(n);
						if (!i) return;
						const r = [i[0] + h[0], i[1] + h[1]],
							s = t.animation || {};
						e.getView().animateInternal({ center: e.getCoordinateFromPixelInternal(r), duration: s.duration, easing: s.easing });
					}
				}
			}
			getRect(t, e) {
				const n = t.getBoundingClientRect(),
					i = n.left + window.pageXOffset,
					r = n.top + window.pageYOffset;
				return [i, r, i + e[0], r + e[1]];
			}
			setPositioning(t) {
				this.set(op, t);
			}
			setVisible(t) {
				this.rendered.visible !== t && ((this.element.style.display = t ? '' : 'none'), (this.rendered.visible = t));
			}
			updatePixelPosition() {
				const t = this.getMap(),
					e = this.getPosition();
				if (!t || !t.isRendered() || !e) return void this.setVisible(!1);
				const n = t.getPixelFromCoordinate(e),
					i = t.getSize();
				this.updateRenderedPosition(n, i);
			}
			updateRenderedPosition(t, e) {
				const n = this.element.style,
					i = this.getOffset(),
					r = this.getPositioning();
				this.setVisible(!0);
				let s = '0%',
					o = '0%';
				'bottom-right' == r || 'center-right' == r || 'top-right' == r ? (s = '-100%') : ('bottom-center' != r && 'center-center' != r && 'top-center' != r) || (s = '-50%'), 'bottom-left' == r || 'bottom-center' == r || 'bottom-right' == r ? (o = '-100%') : ('center-left' != r && 'center-center' != r && 'center-right' != r) || (o = '-50%');
				const a = `translate(${s}, ${o}) translate(${Math.round(t[0] + i[0]) + 'px'}, ${Math.round(t[1] + i[1]) + 'px'})`;
				this.rendered.transform_ != a && ((this.rendered.transform_ = a), (n.transform = a));
			}
			getOptions() {
				return this.options;
			}
		}),
		(t.View = hg),
		(t.control = zS),
		(t.format = GS),
		(t.geom = NS),
		(t.interaction = $x),
		(t.layer = jS),
		(t.mapboxStyle = zy),
		(t.proj = Mo),
		(t.source = $S),
		(t.sphere = Qs),
		(t.style = US),
		(t.tilegrid = O_);
});
//# sourceMappingURL=ol-custom.js.map
