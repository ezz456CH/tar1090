! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).ol = {})
}(this, (function(t) {
	"use strict";
	var e = 0,
		i = 1,
		n = 2,
		r = 3,
		s = 4;

	function o() {
		throw new Error("Unimplemented abstract method.")
	}
	let a = 0;

	function l(t) {
		return t.ol_uid || (t.ol_uid = String(++a))
	}

	function h(t) {
		return t[0] > 0 && t[1] > 0
	}

	function u(t, e) {
		return Array.isArray(t) ? t : (void 0 === e ? e = [t, t] : (e[0] = t, e[1] = t), e)
	}
	class c {
		constructor(t) {
			this.opacity_ = t.opacity, this.rotateWithView_ = t.rotateWithView, this.rotation_ = t.rotation, this.scale_ = t.scale, this.scaleArray_ = u(t.scale), this.displacement_ = t.displacement, this.declutterMode_ = t.declutterMode
		}
		clone() {
			const t = this.getScale();
			return new c({
				opacity: this.getOpacity(),
				scale: Array.isArray(t) ? t.slice() : t,
				rotation: this.getRotation(),
				rotateWithView: this.getRotateWithView(),
				displacement: this.getDisplacement().slice(),
				declutterMode: this.getDeclutterMode()
			})
		}
		getOpacity() {
			return this.opacity_
		}
		getRotateWithView() {
			return this.rotateWithView_
		}
		getRotation() {
			return this.rotation_
		}
		getScale() {
			return this.scale_
		}
		getScaleArray() {
			return this.scaleArray_
		}
		getDisplacement() {
			return this.displacement_
		}
		getDeclutterMode() {
			return this.declutterMode_
		}
		getAnchor() {
			return o()
		}
		getImage(t) {
			return o()
		}
		getHitDetectionImage() {
			return o()
		}
		getPixelRatio(t) {
			return 1
		}
		getImageState() {
			return o()
		}
		getImageSize() {
			return o()
		}
		getOrigin() {
			return o()
		}
		getSize() {
			return o()
		}
		setDisplacement(t) {
			this.displacement_ = t
		}
		setOpacity(t) {
			this.opacity_ = t
		}
		setRotateWithView(t) {
			this.rotateWithView_ = t
		}
		setRotation(t) {
			this.rotation_ = t
		}
		setScale(t) {
			this.scale_ = t, this.scaleArray_ = u(t)
		}
		listenImageChange(t) {
			o()
		}
		load() {
			o()
		}
		unlistenImageChange(t) {
			o()
		}
	}
	var d = c,
		g = {
			name: "rgb",
			min: [0, 0, 0],
			max: [255, 255, 255],
			channel: ["red", "green", "blue"],
			alias: ["RGB"]
		},
		p = {
			name: "xyz",
			min: [0, 0, 0],
			channel: ["X", "Y", "Z"],
			alias: ["XYZ", "ciexyz", "cie1931"],
			whitepoint: {
				2: {
					A: [109.85, 100, 35.585],
					C: [98.074, 100, 118.232],
					D50: [96.422, 100, 82.521],
					D55: [95.682, 100, 92.149],
					D65: [95.045592705167, 100, 108.9057750759878],
					D75: [94.972, 100, 122.638],
					F2: [99.187, 100, 67.395],
					F7: [95.044, 100, 108.755],
					F11: [100.966, 100, 64.37],
					E: [100, 100, 100]
				},
				10: {
					A: [111.144, 100, 35.2],
					C: [97.285, 100, 116.145],
					D50: [96.72, 100, 81.427],
					D55: [95.799, 100, 90.926],
					D65: [94.811, 100, 107.304],
					D75: [94.416, 100, 120.641],
					F2: [103.28, 100, 69.026],
					F7: [95.792, 100, 107.687],
					F11: [103.866, 100, 65.627],
					E: [100, 100, 100]
				}
			}
		};
	p.max = p.whitepoint[2].D65, p.rgb = function(t, e) {
		e = e || p.whitepoint[2].E;
		var i, n, r, s = t[0] / e[0],
			o = t[1] / e[1],
			a = t[2] / e[2];
		return n = -.96924363628087 * s + 1.87596750150772 * o + .041555057407175 * a, r = .055630079696993 * s + -.20397695888897 * o + 1.056971514242878 * a, i = (i = 3.240969941904521 * s + -1.537383177570093 * o + -.498610760293 * a) > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : r *= 12.92, [255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))]
	}, g.xyz = function(t, e) {
		var i = t[0] / 255,
			n = t[1] / 255,
			r = t[2] / 255,
			s = .21263900587151 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .71516867876775 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .072192315360733 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92),
			o = .019330818715591 * i + .11919477979462 * n + .95053215224966 * r;
		return [(.41239079926595 * i + .35758433938387 * n + .18048078840183 * r) * (e = e || p.whitepoint[2].E)[0], s * e[1], o * e[2]]
	};
	var f = {
		name: "luv",
		min: [0, -134, -140],
		max: [100, 224, 122],
		channel: ["lightness", "u", "v"],
		alias: ["LUV", "cieluv", "cie1976"],
		xyz: function(t, e, i) {
			var n, r, s, o, a, l, h, u, c;
			if (s = t[0], o = t[1], a = t[2], 0 === s) return [0, 0, 0];
			return e = e || "D65", i = i || 2, n = o / (13 * s) + 4 * (h = p.whitepoint[i][e][0]) / (h + 15 * (u = p.whitepoint[i][e][1]) + 3 * (c = p.whitepoint[i][e][2])) || 0, r = a / (13 * s) + 9 * u / (h + 15 * u + 3 * c) || 0, [9 * (l = s > 8 ? u * Math.pow((s + 16) / 116, 3) : u * s * .0011070564598794539) * n / (4 * r) || 0, l, l * (12 - 3 * n - 20 * r) / (4 * r) || 0]
		}
	};
	p.luv = function(t, e, i) {
		var n, r, s, o, a, l, h, u, c, d, g;
		e = e || "D65", i = i || 2, d = 4 * (h = p.whitepoint[i][e][0]) / (h + 15 * (u = p.whitepoint[i][e][1]) + 3 * (c = p.whitepoint[i][e][2])), g = 9 * u / (h + 15 * u + 3 * c), n = 4 * (o = t[0]) / (o + 15 * (a = t[1]) + 3 * (l = t[2])) || 0, r = 9 * a / (o + 15 * a + 3 * l) || 0;
		var f = a / u;
		return [s = f <= .008856451679035631 ? 903.2962962962961 * f : 116 * Math.pow(f, 1 / 3) - 16, 13 * s * (n - d), 13 * s * (r - g)]
	};
	var m = {
		name: "lchuv",
		channel: ["lightness", "chroma", "hue"],
		alias: ["LCHuv", "cielchuv"],
		min: [0, 0, 0],
		max: [100, 100, 360],
		luv: function(t) {
			var e, i = t[0],
				n = t[1];
			return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)]
		},
		xyz: function(t) {
			return f.xyz(m.luv(t))
		}
	};
	f.lchuv = function(t) {
		var e = t[0],
			i = t[1],
			n = t[2],
			r = Math.sqrt(i * i + n * n),
			s = 360 * Math.atan2(n, i) / 2 / Math.PI;
		return s < 0 && (s += 360), [e, r, s]
	}, p.lchuv = function(t) {
		return f.lchuv(p.luv(t))
	};
	"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

	function _(t) {
		if (t.__esModule) return t;
		var e = Object.defineProperty({}, "__esModule", {
			value: !0
		});
		return Object.keys(t).forEach((function(i) {
			var n = Object.getOwnPropertyDescriptor(t, i);
			Object.defineProperty(e, i, n.get ? n : {
				enumerable: !0,
				get: function() {
					return t[i]
				}
			})
		})), e
	}
	var y = {
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
			yellowgreen: [154, 205, 50]
		},
		x = {
			red: 0,
			orange: 60,
			yellow: 120,
			green: 180,
			blue: 240,
			purple: 300
		};
	var v = {
		name: "hsl",
		min: [0, 0, 0],
		max: [360, 100, 100],
		channel: ["hue", "saturation", "lightness"],
		alias: ["HSL"],
		rgb: function(t) {
			var e, i, n, r, s, o = t[0] / 360,
				a = t[1] / 100,
				l = t[2] / 100,
				h = 0;
			if (0 === a) return [s = 255 * l, s, s];
			for (e = 2 * l - (i = l < .5 ? l * (1 + a) : l + a - l * a), r = [0, 0, 0]; h < 3;)(n = o + 1 / 3 * -(h - 1)) < 0 ? n++ : n > 1 && n--, s = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, r[h++] = 255 * s;
			return r
		}
	};

	function w(t) {
		var e;
		Array.isArray(t) && t.raw && (t = String.raw(...arguments)), t instanceof Number && (t = +t);
		var i = function(t) {
			var e, i, n = [],
				r = 1;
			if ("number" == typeof t) return {
				space: "rgb",
				values: [t >>> 16, (65280 & t) >>> 8, 255 & t],
				alpha: 1
			};
			if ("number" == typeof t) return {
				space: "rgb",
				values: [t >>> 16, (65280 & t) >>> 8, 255 & t],
				alpha: 1
			};
			if (t = String(t).toLowerCase(), y[t]) n = y[t].slice(), i = "rgb";
			else if ("transparent" === t) r = 0, i = "rgb", n = [0, 0, 0];
			else if ("#" === t[0]) {
				var s = t.slice(1),
					o = s.length;
				r = 1, o <= 4 ? (n = [parseInt(s[0] + s[0], 16), parseInt(s[1] + s[1], 16), parseInt(s[2] + s[2], 16)], 4 === o && (r = parseInt(s[3] + s[3], 16) / 255)) : (n = [parseInt(s[0] + s[1], 16), parseInt(s[2] + s[3], 16), parseInt(s[4] + s[5], 16)], 8 === o && (r = parseInt(s[6] + s[7], 16) / 255)), n[0] || (n[0] = 0), n[1] || (n[1] = 0), n[2] || (n[2] = 0), i = "rgb"
			} else if (e = /^((?:rgba?|hs[lvb]a?|hwba?|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms|oklch|oklab|color))\s*\(([^\)]*)\)/.exec(t)) {
				var a = e[1],
					l = "cmyk" === (i = a.replace(/a$/, "")) ? 4 : "gray" === i ? 1 : 3;
				n = e[2].trim().split(/\s*[,\/]\s*|\s+/), "color" === i && (i = n.shift()), r = (n = n.map((function(t, e) {
					if ("%" === t[t.length - 1]) return t = parseFloat(t) / 100, 3 === e ? t : "rgb" === i ? 255 * t : "h" === i[0] ? 100 * t : "l" !== i[0] || e ? "lab" === i ? 125 * t : "lch" === i ? e < 2 ? 150 * t : 360 * t : "o" !== i[0] || e ? "oklab" === i ? .4 * t : "oklch" === i ? e < 2 ? .4 * t : 360 * t : t : t : 100 * t;
					if ("h" === i[e] || 2 === e && "h" === i[i.length - 1]) {
						if (void 0 !== x[t]) return x[t];
						if (t.endsWith("deg")) return parseFloat(t);
						if (t.endsWith("turn")) return 360 * parseFloat(t);
						if (t.endsWith("grad")) return 360 * parseFloat(t) / 400;
						if (t.endsWith("rad")) return 180 * parseFloat(t) / Math.PI
					}
					return "none" === t ? 0 : parseFloat(t)
				}))).length > l ? n.pop() : 1
			} else /[0-9](?:\s|\/|,)/.test(t) && (n = t.match(/([0-9]+)/g).map((function(t) {
				return parseFloat(t)
			})), i = t.match(/([a-z])/gi)?.join("")?.toLowerCase() || "rgb");
			return {
				space: i,
				values: n,
				alpha: r
			}
		}(t);
		if (!i.space) return [];
		const n = "h" === i.space[0] ? v.min : g.min,
			r = "h" === i.space[0] ? v.max : g.max;
		return (e = Array(3))[0] = Math.min(Math.max(i.values[0], n[0]), r[0]), e[1] = Math.min(Math.max(i.values[1], n[1]), r[1]), e[2] = Math.min(Math.max(i.values[2], n[2]), r[2]), "h" === i.space[0] && (e = v.rgb(e)), e.push(Math.min(Math.max(i.alpha, 0), 1)), e
	}

	function b(t, e, i) {
		return Math.min(Math.max(t, e), i)
	}

	function S(t, e, i, n, r, s) {
		const o = r - i,
			a = s - n;
		if (0 !== o || 0 !== a) {
			const l = ((t - i) * o + (e - n) * a) / (o * o + a * a);
			l > 1 ? (i = r, n = s) : l > 0 && (i += o * l, n += a * l)
		}
		return E(t, e, i, n)
	}

	function E(t, e, i, n) {
		const r = i - t,
			s = n - e;
		return r * r + s * s
	}

	function C(t) {
		return 180 * t / Math.PI
	}

	function T(t) {
		return t * Math.PI / 180
	}

	function P(t, e) {
		const i = t % e;
		return i * e < 0 ? i + e : i
	}

	function R(t, e, i) {
		return t + i * (e - t)
	}

	function F(t, e) {
		const i = Math.pow(10, e);
		return Math.round(t * i) / i
	}

	function M(t, e) {
		return Math.round(F(t, e))
	}

	function I(t, e) {
		return Math.floor(F(t, e))
	}

	function L(t, e) {
		return Math.ceil(F(t, e))
	}

	function k(t) {
		return "string" == typeof t ? t : B(t)
	}
	g.hsl = function(t) {
		var e, i, n = t[0] / 255,
			r = t[1] / 255,
			s = t[2] / 255,
			o = Math.min(n, r, s),
			a = Math.max(n, r, s),
			l = a - o;
		return a === o ? e = 0 : n === a ? e = (r - s) / l : r === a ? e = 2 + (s - n) / l : s === a && (e = 4 + (n - r) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (o + a) / 2, [e, 100 * (a === o ? 0 : i <= .5 ? l / (a + o) : l / (2 - a - o)), 100 * i]
	};
	const A = 1024,
		D = {};
	let O = 0;

	function z(t) {
		if (4 === t.length) return t;
		const e = t.slice();
		return e[3] = 1, e
	}

	function G(t) {
		const e = p.lchuv(g.xyz(t));
		return e[3] = t[3], e
	}

	function N(t) {
		if (D.hasOwnProperty(t)) return D[t];
		if (O >= A) {
			let t = 0;
			for (const e in D) 0 == (3 & t++) && (delete D[e], --O)
		}
		const e = w(t);
		if (4 !== e.length) throw new Error('Failed to parse "' + t + '" as color');
		for (const i of e)
			if (isNaN(i)) throw new Error('Failed to parse "' + t + '" as color');
		return U(e), D[t] = e, ++O, e
	}

	function j(t) {
		return Array.isArray(t) ? t : N(t)
	}

	function U(t) {
		return t[0] = b(t[0] + .5 | 0, 0, 255), t[1] = b(t[1] + .5 | 0, 0, 255), t[2] = b(t[2] + .5 | 0, 0, 255), t[3] = b(t[3], 0, 1), t
	}

	function B(t) {
		let e = t[0];
		e != (0 | e) && (e = e + .5 | 0);
		let i = t[1];
		i != (0 | i) && (i = i + .5 | 0);
		let n = t[2];
		n != (0 | n) && (n = n + .5 | 0);
		return "rgba(" + e + "," + i + "," + n + "," + (void 0 === t[3] ? 1 : Math.round(100 * t[3]) / 100) + ")"
	}

	function $(t) {
		return Array.isArray(t) ? B(t) : t
	}
	const V = "undefined" != typeof navigator && void 0 !== navigator.userAgent ? navigator.userAgent.toLowerCase() : "",
		X = V.includes("firefox"),
		W = V.includes("safari") && !V.includes("chrom") && (V.includes("version/15.4") || /cpu (os|iphone os) 15_4 like mac os x/.test(V)),
		q = V.includes("webkit") && !V.includes("edge"),
		Z = V.includes("macintosh"),
		Y = "undefined" != typeof devicePixelRatio ? devicePixelRatio : 1,
		K = "undefined" != typeof WorkerGlobalScope && "undefined" != typeof OffscreenCanvas && self instanceof WorkerGlobalScope,
		H = "undefined" != typeof Image && Image.prototype.decode,
		J = "function" == typeof createImageBitmap,
		Q = function() {
			let t = !1;
			try {
				const e = Object.defineProperty({}, "passive", {
					get: function() {
						t = !0
					}
				});
				window.addEventListener("_", null, e), window.removeEventListener("_", null, e)
			} catch (t) {}
			return t
		}();

	function tt(t, e, i, n) {
		let r;
		return r = i && i.length ? i.shift() : K ? new OffscreenCanvas(t || 300, e || 300) : document.createElement("canvas"), t && (r.width = t), e && (r.height = e), r.getContext("2d", n)
	}

	function et(t) {
		const e = t.canvas;
		e.width = 1, e.height = 1, t.clearRect(0, 0, 1, 1)
	}

	function it(t) {
		let e = t.offsetWidth;
		const i = getComputedStyle(t);
		return e += parseInt(i.marginLeft, 10) + parseInt(i.marginRight, 10), e
	}

	function nt(t) {
		let e = t.offsetHeight;
		const i = getComputedStyle(t);
		return e += parseInt(i.marginTop, 10) + parseInt(i.marginBottom, 10), e
	}

	function rt(t, e) {
		const i = e.parentNode;
		i && i.replaceChild(t, e)
	}

	function st(t) {
		return t && t.parentNode ? t.parentNode.removeChild(t) : null
	}

	function ot(t) {
		for (; t.lastChild;) t.removeChild(t.lastChild)
	}
	var at = class {
			constructor(t) {
				this.propagationStopped, this.defaultPrevented, this.type = t, this.target = null
			}
			preventDefault() {
				this.defaultPrevented = !0
			}
			stopPropagation() {
				this.propagationStopped = !0
			}
		},
		lt = "propertychange";
	var ht = class {
		constructor() {
			this.disposed = !1
		}
		dispose() {
			this.disposed || (this.disposed = !0, this.disposeInternal())
		}
		disposeInternal() {}
	};

	function ut(t, e) {
		return t > e ? 1 : t < e ? -1 : 0
	}

	function ct(t, e, i) {
		if (t[0] <= e) return 0;
		const n = t.length;
		if (e <= t[n - 1]) return n - 1;
		if ("function" == typeof i) {
			for (let r = 1; r < n; ++r) {
				const n = t[r];
				if (n === e) return r;
				if (n < e) return i(e, t[r - 1], n) > 0 ? r - 1 : r
			}
			return n - 1
		}
		if (i > 0) {
			for (let i = 1; i < n; ++i)
				if (t[i] < e) return i - 1;
			return n - 1
		}
		if (i < 0) {
			for (let i = 1; i < n; ++i)
				if (t[i] <= e) return i;
			return n - 1
		}
		for (let i = 1; i < n; ++i) {
			if (t[i] == e) return i;
			if (t[i] < e) return t[i - 1] - e < e - t[i] ? i - 1 : i
		}
		return n - 1
	}

	function dt(t, e, i) {
		for (; e < i;) {
			const n = t[e];
			t[e] = t[i], t[i] = n, ++e, --i
		}
	}

	function gt(t, e) {
		const i = Array.isArray(e) ? e : [e],
			n = i.length;
		for (let e = 0; e < n; e++) t[t.length] = i[e]
	}

	function pt(t, e) {
		const i = t.length;
		if (i !== e.length) return !1;
		for (let n = 0; n < i; n++)
			if (t[n] !== e[n]) return !1;
		return !0
	}

	function ft() {
		return !0
	}

	function mt() {
		return !1
	}

	function _t() {}

	function yt(t) {
		let e, i, n, r = !1;
		return function() {
			const s = Array.prototype.slice.call(arguments);
			return r && this === n && pt(s, i) || (r = !0, n = this, i = s, e = t.apply(this, arguments)), e
		}
	}

	function xt(t) {
		return function() {
			let e;
			try {
				e = t()
			} catch (t) {
				return Promise.reject(t)
			}
			return e instanceof Promise ? e : Promise.resolve(e)
		}()
	}

	function vt(t) {
		for (const e in t) delete t[e]
	}

	function wt(t) {
		let e;
		for (e in t) return !1;
		return !e
	}
	var bt = class extends ht {
			constructor(t) {
				super(), this.eventTarget_ = t, this.pendingRemovals_ = null, this.dispatching_ = null, this.listeners_ = null
			}
			addEventListener(t, e) {
				if (!t || !e) return;
				const i = this.listeners_ || (this.listeners_ = {}),
					n = i[t] || (i[t] = []);
				n.includes(e) || n.push(e)
			}
			dispatchEvent(t) {
				const e = "string" == typeof t,
					i = e ? t : t.type,
					n = this.listeners_ && this.listeners_[i];
				if (!n) return;
				const r = e ? new at(t) : t;
				r.target || (r.target = this.eventTarget_ || this);
				const s = this.dispatching_ || (this.dispatching_ = {}),
					o = this.pendingRemovals_ || (this.pendingRemovals_ = {});
				let a;
				i in s || (s[i] = 0, o[i] = 0), ++s[i];
				for (let t = 0, e = n.length; t < e; ++t)
					if (a = "handleEvent" in n[t] ? n[t].handleEvent(r) : n[t].call(this, r), !1 === a || r.propagationStopped) {
						a = !1;
						break
					} if (0 == --s[i]) {
					let t = o[i];
					for (delete o[i]; t--;) this.removeEventListener(i, _t);
					delete s[i]
				}
				return a
			}
			disposeInternal() {
				this.listeners_ && vt(this.listeners_)
			}
			getListeners(t) {
				return this.listeners_ && this.listeners_[t] || void 0
			}
			hasListener(t) {
				return !!this.listeners_ && (t ? t in this.listeners_ : Object.keys(this.listeners_).length > 0)
			}
			removeEventListener(t, e) {
				if (!this.listeners_) return;
				const i = this.listeners_[t];
				if (!i) return;
				const n = i.indexOf(e); - 1 !== n && (this.pendingRemovals_ && t in this.pendingRemovals_ ? (i[n] = _t, ++this.pendingRemovals_[t]) : (i.splice(n, 1), 0 === i.length && delete this.listeners_[t]))
			}
		},
		St = "change",
		Et = "error",
		Ct = "contextmenu",
		Tt = "click",
		Pt = "dblclick",
		Rt = "dragenter",
		Ft = "dragover",
		Mt = "drop",
		It = "keydown",
		Lt = "keypress",
		kt = "load",
		At = "touchmove",
		Dt = "wheel";

	function Ot(t, e, i, n, r) {
		if (n && n !== t && (i = i.bind(n)), r) {
			const n = i;
			i = function() {
				t.removeEventListener(e, i), n.apply(this, arguments)
			}
		}
		const s = {
			target: t,
			type: e,
			listener: i
		};
		return t.addEventListener(e, i), s
	}

	function zt(t, e, i, n) {
		return Ot(t, e, i, n, !0)
	}

	function Gt(t) {
		t && t.target && (t.target.removeEventListener(t.type, t.listener), vt(t))
	}
	class Nt extends bt {
		constructor() {
			super(), this.on = this.onInternal, this.once = this.onceInternal, this.un = this.unInternal, this.revision_ = 0
		}
		changed() {
			++this.revision_, this.dispatchEvent(St)
		}
		getRevision() {
			return this.revision_
		}
		onInternal(t, e) {
			if (Array.isArray(t)) {
				const i = t.length,
					n = new Array(i);
				for (let r = 0; r < i; ++r) n[r] = Ot(this, t[r], e);
				return n
			}
			return Ot(this, t, e)
		}
		onceInternal(t, e) {
			let i;
			if (Array.isArray(t)) {
				const n = t.length;
				i = new Array(n);
				for (let r = 0; r < n; ++r) i[r] = zt(this, t[r], e)
			} else i = zt(this, t, e);
			return e.ol_key = i, i
		}
		unInternal(t, e) {
			const i = e.ol_key;
			if (i) jt(i);
			else if (Array.isArray(t))
				for (let i = 0, n = t.length; i < n; ++i) this.removeEventListener(t[i], e);
			else this.removeEventListener(t, e)
		}
	}

	function jt(t) {
		if (Array.isArray(t))
			for (let e = 0, i = t.length; e < i; ++e) Gt(t[e]);
		else Gt(t)
	}
	Nt.prototype.on, Nt.prototype.once, Nt.prototype.un;
	var Ut = Nt,
		Bt = Object.freeze({
			__proto__: null,
			unByKey: jt,
			default: Ut
		});
	class $t extends at {
		constructor(t, e, i) {
			super(t), this.key = e, this.oldValue = i
		}
	}
	var Vt = class extends Ut {
		constructor(t) {
			super(), this.on, this.once, this.un, l(this), this.values_ = null, void 0 !== t && this.setProperties(t)
		}
		get(t) {
			let e;
			return this.values_ && this.values_.hasOwnProperty(t) && (e = this.values_[t]), e
		}
		getKeys() {
			return this.values_ && Object.keys(this.values_) || []
		}
		getProperties() {
			return this.values_ && Object.assign({}, this.values_) || {}
		}
		getPropertiesInternal() {
			return this.values_
		}
		hasProperties() {
			return !!this.values_
		}
		notify(t, e) {
			let i;
			i = `change:${t}`, this.hasListener(i) && this.dispatchEvent(new $t(i, t, e)), i = lt, this.hasListener(i) && this.dispatchEvent(new $t(i, t, e))
		}
		addChangeListener(t, e) {
			this.addEventListener(`change:${t}`, e)
		}
		removeChangeListener(t, e) {
			this.removeEventListener(`change:${t}`, e)
		}
		set(t, e, i) {
			const n = this.values_ || (this.values_ = {});
			if (i) n[t] = e;
			else {
				const i = n[t];
				n[t] = e, i !== e && this.notify(t, i)
			}
		}
		setProperties(t, e) {
			for (const i in t) this.set(i, t[i], e)
		}
		applyProperties(t) {
			t.values_ && Object.assign(this.values_ || (this.values_ = {}), t.values_)
		}
		unset(t, e) {
			if (this.values_ && t in this.values_) {
				const i = this.values_[t];
				delete this.values_[t], wt(this.values_) && (this.values_ = null), e || this.notify(t, i)
			}
		}
	};
	const Xt = "ol-hidden",
		Wt = "ol-unselectable",
		qt = "ol-control",
		Zt = "ol-collapsed",
		Yt = new RegExp(["^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)", "(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)", "(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)", "(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?", "(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))", "(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))", "?\\s*([-,\\\"\\'\\sa-z]+?)\\s*$"].join(""), "i"),
		Kt = ["style", "variant", "weight", "size", "lineHeight", "family"],
		Ht = function(t) {
			const e = t.match(Yt);
			if (!e) return null;
			const i = {
				lineHeight: "normal",
				size: "1.2em",
				style: "normal",
				weight: "normal",
				variant: "normal"
			};
			for (let t = 0, n = Kt.length; t < n; ++t) {
				const n = e[t + 1];
				void 0 !== n && (i[Kt[t]] = n)
			}
			return i.families = i.family.split(/,\s?/), i
		},
		Jt = "10px sans-serif",
		Qt = "#000",
		te = "round",
		ee = [],
		ie = "round",
		ne = "#000",
		re = "center",
		se = "middle",
		oe = [0, 0, 0, 0],
		ae = new Vt;
	let le, he = null;
	const ue = {},
		ce = function() {
			const t = "32px ",
				e = ["monospace", "serif"],
				i = e.length,
				n = "wmytzilWMYTZIL@#/&?$%10";
			let r, s;

			function o(r, o, a) {
				let l = !0;
				for (let h = 0; h < i; ++h) {
					const i = e[h];
					if (s = pe(r + " " + o + " " + t + i, n), a != i) {
						const e = pe(r + " " + o + " " + t + a + "," + i, n);
						l = l && e != s
					}
				}
				return !!l
			}

			function a() {
				let t = !0;
				const e = ae.getKeys();
				for (let i = 0, n = e.length; i < n; ++i) {
					const n = e[i];
					ae.get(n) < 100 && (o.apply(this, n.split("\n")) ? (vt(ue), he = null, le = void 0, ae.set(n, 100)) : (ae.set(n, ae.get(n) + 1, !0), t = !1))
				}
				t && (clearInterval(r), r = void 0)
			}
			return function(t) {
				const e = Ht(t);
				if (!e) return;
				const i = e.families;
				for (let t = 0, n = i.length; t < n; ++t) {
					const n = i[t],
						s = e.style + "\n" + e.weight + "\n" + n;
					void 0 === ae.get(s) && (ae.set(s, 100, !0), o(e.style, e.weight, n) || (ae.set(s, 0, !0), void 0 === r && (r = setInterval(a, 32))))
				}
			}
		}(),
		de = function() {
			let t;
			return function(e) {
				let i = ue[e];
				if (null == i) {
					if (K) {
						const t = Ht(e),
							n = ge(e, "Žg");
						i = (isNaN(Number(t.lineHeight)) ? 1.2 : Number(t.lineHeight)) * (n.actualBoundingBoxAscent + n.actualBoundingBoxDescent)
					} else t || (t = document.createElement("div"), t.innerHTML = "M", t.style.minHeight = "0", t.style.maxHeight = "none", t.style.height = "auto", t.style.padding = "0", t.style.border = "none", t.style.position = "absolute", t.style.display = "block", t.style.left = "-99999px"), t.style.font = e, document.body.appendChild(t), i = t.offsetHeight, document.body.removeChild(t);
					ue[e] = i
				}
				return i
			}
		}();

	function ge(t, e) {
		return he || (he = tt(1, 1)), t != le && (he.font = t, le = he.font), he.measureText(e)
	}

	function pe(t, e) {
		return ge(t, e).width
	}

	function fe(t, e, i) {
		if (e in i) return i[e];
		const n = e.split("\n").reduce(((e, i) => Math.max(e, pe(t, i))), 0);
		return i[e] = n, n
	}

	function me(t, e, i, n, r, s, o, a, l, h, u) {
		t.save(), 1 !== i && (t.globalAlpha *= i), e && t.transform.apply(t, e), n.contextInstructions ? (t.translate(l, h), t.scale(u[0], u[1]), function(t, e) {
			const i = t.contextInstructions;
			for (let t = 0, n = i.length; t < n; t += 2) Array.isArray(i[t + 1]) ? e[i[t]].apply(e, i[t + 1]) : e[i[t]] = i[t + 1]
		}(n, t)) : u[0] < 0 || u[1] < 0 ? (t.translate(l, h), t.scale(u[0], u[1]), t.drawImage(n, r, s, o, a, 0, 0, o, a)) : t.drawImage(n, r, s, o, a, l, h, o * u[0], a * u[1]), t.restore()
	}
	class _e extends d {
		constructor(t) {
			super({
				opacity: 1,
				rotateWithView: void 0 !== t.rotateWithView && t.rotateWithView,
				rotation: void 0 !== t.rotation ? t.rotation : 0,
				scale: void 0 !== t.scale ? t.scale : 1,
				displacement: void 0 !== t.displacement ? t.displacement : [0, 0],
				declutterMode: t.declutterMode
			}), this.canvases_, this.hitDetectionCanvas_ = null, this.fill_ = void 0 !== t.fill ? t.fill : null, this.origin_ = [0, 0], this.points_ = t.points, this.radius_ = void 0 !== t.radius ? t.radius : t.radius1, this.radius2_ = t.radius2, this.angle_ = void 0 !== t.angle ? t.angle : 0, this.stroke_ = void 0 !== t.stroke ? t.stroke : null, this.size_, this.renderOptions_, this.render()
		}
		clone() {
			const t = this.getScale(),
				e = new _e({
					fill: this.getFill() ? this.getFill().clone() : void 0,
					points: this.getPoints(),
					radius: this.getRadius(),
					radius2: this.getRadius2(),
					angle: this.getAngle(),
					stroke: this.getStroke() ? this.getStroke().clone() : void 0,
					rotation: this.getRotation(),
					rotateWithView: this.getRotateWithView(),
					scale: Array.isArray(t) ? t.slice() : t,
					displacement: this.getDisplacement().slice(),
					declutterMode: this.getDeclutterMode()
				});
			return e.setOpacity(this.getOpacity()), e
		}
		getAnchor() {
			const t = this.size_,
				e = this.getDisplacement(),
				i = this.getScaleArray();
			return [t[0] / 2 - e[0] / i[0], t[1] / 2 + e[1] / i[1]]
		}
		getAngle() {
			return this.angle_
		}
		getFill() {
			return this.fill_
		}
		setFill(t) {
			this.fill_ = t, this.render()
		}
		getHitDetectionImage() {
			return this.hitDetectionCanvas_ || (this.hitDetectionCanvas_ = this.createHitDetectionCanvas_(this.renderOptions_)), this.hitDetectionCanvas_
		}
		getImage(t) {
			let e = this.canvases_[t];
			if (!e) {
				const i = this.renderOptions_,
					n = tt(i.size * t, i.size * t);
				this.draw_(i, n, t), e = n.canvas, this.canvases_[t] = e
			}
			return e
		}
		getPixelRatio(t) {
			return t
		}
		getImageSize() {
			return this.size_
		}
		getImageState() {
			return n
		}
		getOrigin() {
			return this.origin_
		}
		getPoints() {
			return this.points_
		}
		getRadius() {
			return this.radius_
		}
		getRadius2() {
			return this.radius2_
		}
		getSize() {
			return this.size_
		}
		getStroke() {
			return this.stroke_
		}
		setStroke(t) {
			this.stroke_ = t, this.render()
		}
		listenImageChange(t) {}
		load() {}
		unlistenImageChange(t) {}
		calculateLineJoinSize_(t, e, i) {
			if (0 === e || this.points_ === 1 / 0 || "bevel" !== t && "miter" !== t) return e;
			let n = this.radius_,
				r = void 0 === this.radius2_ ? n : this.radius2_;
			if (n < r) {
				const t = n;
				n = r, r = t
			}
			const s = void 0 === this.radius2_ ? this.points_ : 2 * this.points_,
				o = 2 * Math.PI / s,
				a = r * Math.sin(o),
				l = n - Math.sqrt(r * r - a * a),
				h = Math.sqrt(a * a + l * l),
				u = h / a;
			if ("miter" === t && u <= i) return u * e;
			const c = e / 2 / u,
				d = e / 2 * (l / h),
				g = Math.sqrt((n + c) * (n + c) + d * d) - n;
			if (void 0 === this.radius2_ || "bevel" === t) return 2 * g;
			const p = n * Math.sin(o),
				f = r - Math.sqrt(n * n - p * p),
				m = Math.sqrt(p * p + f * f) / p;
			if (m <= i) {
				const t = m * e / 2 - r - n;
				return 2 * Math.max(g, t)
			}
			return 2 * g
		}
		createRenderOptions() {
			let t, e = te,
				i = ie,
				n = 0,
				r = null,
				s = 0,
				o = 0;
			this.stroke_ && (t = $(this.stroke_.getColor() ?? ne), o = this.stroke_.getWidth() ?? 1, r = this.stroke_.getLineDash(), s = this.stroke_.getLineDashOffset() ?? 0, i = this.stroke_.getLineJoin() ?? ie, e = this.stroke_.getLineCap() ?? te, n = this.stroke_.getMiterLimit() ?? 10);
			const a = this.calculateLineJoinSize_(i, o, n),
				l = Math.max(this.radius_, this.radius2_ || 0);
			return {
				strokeStyle: t,
				strokeWidth: o,
				size: Math.ceil(2 * l + a),
				lineCap: e,
				lineDash: r,
				lineDashOffset: s,
				lineJoin: i,
				miterLimit: n
			}
		}
		render() {
			this.renderOptions_ = this.createRenderOptions();
			const t = this.renderOptions_.size;
			this.canvases_ = {}, this.hitDetectionCanvas_ = null, this.size_ = [t, t]
		}
		draw_(t, e, i) {
			if (e.scale(i, i), e.translate(t.size / 2, t.size / 2), this.createPath_(e), this.fill_) {
				let t = this.fill_.getColor();
				null === t && (t = Qt), e.fillStyle = $(t), e.fill()
			}
			t.strokeStyle && (e.strokeStyle = t.strokeStyle, e.lineWidth = t.strokeWidth, t.lineDash && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.lineCap = t.lineCap, e.lineJoin = t.lineJoin, e.miterLimit = t.miterLimit, e.stroke())
		}
		createHitDetectionCanvas_(t) {
			let e;
			if (this.fill_) {
				let i = this.fill_.getColor(),
					n = 0;
				"string" == typeof i && (i = j(i)), null === i ? n = 1 : Array.isArray(i) && (n = 4 === i.length ? i[3] : 1), 0 === n && (e = tt(t.size, t.size), this.drawHitDetectionCanvas_(t, e))
			}
			return e ? e.canvas : this.getImage(1)
		}
		createPath_(t) {
			let e = this.points_;
			const i = this.radius_;
			if (e === 1 / 0) t.arc(0, 0, i, 0, 2 * Math.PI);
			else {
				const n = void 0 === this.radius2_ ? i : this.radius2_;
				void 0 !== this.radius2_ && (e *= 2);
				const r = this.angle_ - Math.PI / 2,
					s = 2 * Math.PI / e;
				for (let o = 0; o < e; o++) {
					const e = r + o * s,
						a = o % 2 == 0 ? i : n;
					t.lineTo(a * Math.cos(e), a * Math.sin(e))
				}
				t.closePath()
			}
		}
		drawHitDetectionCanvas_(t, e) {
			e.translate(t.size / 2, t.size / 2), this.createPath_(e), e.fillStyle = Qt, e.fill(), t.strokeStyle && (e.strokeStyle = t.strokeStyle, e.lineWidth = t.strokeWidth, t.lineDash && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.lineJoin = t.lineJoin, e.miterLimit = t.miterLimit, e.stroke())
		}
	}
	var ye = _e;
	class xe extends ye {
		constructor(t) {
			super({
				points: 1 / 0,
				fill: (t = t || {
					radius: 5
				}).fill,
				radius: t.radius,
				stroke: t.stroke,
				scale: void 0 !== t.scale ? t.scale : 1,
				rotation: void 0 !== t.rotation ? t.rotation : 0,
				rotateWithView: void 0 !== t.rotateWithView && t.rotateWithView,
				displacement: void 0 !== t.displacement ? t.displacement : [0, 0],
				declutterMode: t.declutterMode
			})
		}
		clone() {
			const t = this.getScale(),
				e = new xe({
					fill: this.getFill() ? this.getFill().clone() : void 0,
					stroke: this.getStroke() ? this.getStroke().clone() : void 0,
					radius: this.getRadius(),
					scale: Array.isArray(t) ? t.slice() : t,
					rotation: this.getRotation(),
					rotateWithView: this.getRotateWithView(),
					displacement: this.getDisplacement().slice(),
					declutterMode: this.getDeclutterMode()
				});
			return e.setOpacity(this.getOpacity()), e
		}
		setRadius(t) {
			this.radius_ = t, this.render()
		}
	}
	var ve = xe;
	class we {
		constructor(t) {
			t = t || {}, this.color_ = void 0 !== t.color ? t.color : null
		}
		clone() {
			const t = this.getColor();
			return new we({
				color: Array.isArray(t) ? t.slice() : t || void 0
			})
		}
		getColor() {
			return this.color_
		}
		setColor(t) {
			this.color_ = t
		}
	}
	var be = we;

	function Se(t, e) {
		if (!t) throw new Error(e)
	}

	function Ee(t, e) {
		return e && (t.src = e), t.src && H ? new Promise(((e, i) => t.decode().then((() => e(t))).catch((n => t.complete && t.width ? e(t) : i(n))))) : function(t, e) {
			return new Promise(((i, n) => {
				function r() {
					o(), i(t)
				}

				function s() {
					o(), n(new Error("Image load error"))
				}

				function o() {
					t.removeEventListener("load", r), t.removeEventListener("error", s)
				}
				t.addEventListener("load", r), t.addEventListener("error", s), e && (t.src = e)
			}))
		}(t)
	}

	function Ce(t, e) {
		return e && (t.src = e), t.src && H && J ? t.decode().then((() => createImageBitmap(t))).catch((e => {
			if (t.complete && t.width) return t;
			throw e
		})) : Ee(t)
	}
	var Te = class extends bt {
		constructor(t, i, n, r) {
			super(), this.extent = t, this.pixelRatio_ = n, this.resolution = i, this.state = "function" == typeof r ? e : r, this.image_ = null, this.loader = "function" == typeof r ? r : null
		}
		changed() {
			this.dispatchEvent(St)
		}
		getExtent() {
			return this.extent
		}
		getImage() {
			return this.image_
		}
		getPixelRatio() {
			return this.pixelRatio_
		}
		getResolution() {
			return this.resolution
		}
		getState() {
			return this.state
		}
		load() {
			if (this.state == e && this.loader) {
				this.state = i, this.changed();
				const t = this.getResolution(),
					e = Array.isArray(t) ? t[0] : t;
				xt((() => this.loader(this.getExtent(), e, this.getPixelRatio()))).then((t => {
					"image" in t && (this.image_ = t.image), "extent" in t && (this.extent = t.extent), "resolution" in t && (this.resolution = t.resolution), "pixelRatio" in t && (this.pixelRatio_ = t.pixelRatio), (t instanceof HTMLImageElement || t instanceof ImageBitmap || t instanceof HTMLCanvasElement || t instanceof HTMLVideoElement) && (this.image_ = t), this.state = n
				})).catch((t => {
					this.state = r, console.error(t)
				})).finally((() => this.changed()))
			}
		}
		setImage(t) {
			this.image_ = t
		}
		setResolution(t) {
			this.resolution = t
		}
	};

	function Pe(t, e, i) {
		return e + ":" + t + ":" + (i ? k(i) : "null")
	}
	const Re = new class {
		constructor() {
			this.cache_ = {}, this.cacheSize_ = 0, this.maxCacheSize_ = 32
		}
		clear() {
			this.cache_ = {}, this.cacheSize_ = 0
		}
		canExpireCache() {
			return this.cacheSize_ > this.maxCacheSize_
		}
		expire() {
			if (this.canExpireCache()) {
				let t = 0;
				for (const e in this.cache_) {
					const i = this.cache_[e];
					0 != (3 & t++) || i.hasListener() || (delete this.cache_[e], --this.cacheSize_)
				}
			}
		}
		get(t, e, i) {
			const n = Pe(t, e, i);
			return n in this.cache_ ? this.cache_[n] : null
		}
		set(t, e, i, n) {
			const r = Pe(t, e, i);
			this.cache_[r] = n, ++this.cacheSize_
		}
		setSize(t) {
			this.maxCacheSize_ = t, this.expire()
		}
	};
	let Fe = null;
	class Me extends bt {
		constructor(t, i, n, r, s) {
			super(), this.hitDetectionImage_ = null, this.image_ = t, this.crossOrigin_ = n, this.canvas_ = {}, this.color_ = s, this.imageState_ = void 0 === r ? e : r, this.size_ = t && t.width && t.height ? [t.width, t.height] : null, this.src_ = i, this.tainted_
		}
		initializeImage_() {
			this.image_ = new Image, null !== this.crossOrigin_ && (this.image_.crossOrigin = this.crossOrigin_)
		}
		isTainted_() {
			if (void 0 === this.tainted_ && this.imageState_ === n) {
				Fe || (Fe = tt(1, 1, void 0, {
					willReadFrequently: !0
				})), Fe.drawImage(this.image_, 0, 0);
				try {
					Fe.getImageData(0, 0, 1, 1), this.tainted_ = !1
				} catch (t) {
					Fe = null, this.tainted_ = !0
				}
			}
			return !0 === this.tainted_
		}
		dispatchChangeEvent_() {
			this.dispatchEvent(St)
		}
		handleImageError_() {
			this.imageState_ = r, this.dispatchChangeEvent_()
		}
		handleImageLoad_() {
			this.imageState_ = n, this.size_ = [this.image_.width, this.image_.height], this.dispatchChangeEvent_()
		}
		getImage(t) {
			return this.image_ || this.initializeImage_(), this.replaceColor_(t), this.canvas_[t] ? this.canvas_[t] : this.image_
		}
		getPixelRatio(t) {
			return this.replaceColor_(t), this.canvas_[t] ? t : 1
		}
		getImageState() {
			return this.imageState_
		}
		getHitDetectionImage() {
			if (this.image_ || this.initializeImage_(), !this.hitDetectionImage_)
				if (this.isTainted_()) {
					const t = this.size_[0],
						e = this.size_[1],
						i = tt(t, e);
					i.fillRect(0, 0, t, e), this.hitDetectionImage_ = i.canvas
				} else this.hitDetectionImage_ = this.image_;
			return this.hitDetectionImage_
		}
		getSize() {
			return this.size_
		}
		getSrc() {
			return this.src_
		}
		load() {
			if (this.imageState_ === e) {
				this.image_ || this.initializeImage_(), this.imageState_ = i;
				try {
					void 0 !== this.src_ && (this.image_.src = this.src_)
				} catch (t) {
					this.handleImageError_()
				}
				this.image_ instanceof HTMLImageElement && Ee(this.image_, this.src_).then((t => {
					this.image_ = t, this.handleImageLoad_()
				})).catch(this.handleImageError_.bind(this))
			}
		}
		replaceColor_(t) {
			if (!this.color_ || this.canvas_[t] || this.imageState_ !== n) return;
			const e = this.image_,
				i = document.createElement("canvas");
			i.width = Math.ceil(e.width * t), i.height = Math.ceil(e.height * t);
			const r = i.getContext("2d");
			r.scale(t, t), r.drawImage(e, 0, 0), r.globalCompositeOperation = "multiply", r.fillStyle = k(this.color_), r.fillRect(0, 0, i.width / t, i.height / t), r.globalCompositeOperation = "destination-in", r.drawImage(e, 0, 0), this.canvas_[t] = i
		}
	}

	function Ie(t, e, i, n) {
		return void 0 !== i && void 0 !== n ? [i / t, n / e] : void 0 !== i ? i / t : void 0 !== n ? n / e : 1
	}
	class Le extends d {
		constructor(t) {
			const r = void 0 !== (t = t || {}).opacity ? t.opacity : 1,
				s = void 0 !== t.rotation ? t.rotation : 0,
				o = void 0 !== t.scale ? t.scale : 1,
				a = void 0 !== t.rotateWithView && t.rotateWithView;
			super({
				opacity: r,
				rotation: s,
				scale: o,
				displacement: void 0 !== t.displacement ? t.displacement : [0, 0],
				rotateWithView: a,
				declutterMode: t.declutterMode
			}), this.anchor_ = void 0 !== t.anchor ? t.anchor : [.5, .5], this.normalizedAnchor_ = null, this.anchorOrigin_ = void 0 !== t.anchorOrigin ? t.anchorOrigin : "top-left", this.anchorXUnits_ = void 0 !== t.anchorXUnits ? t.anchorXUnits : "fraction", this.anchorYUnits_ = void 0 !== t.anchorYUnits ? t.anchorYUnits : "fraction", this.crossOrigin_ = void 0 !== t.crossOrigin ? t.crossOrigin : null;
			const h = void 0 !== t.img ? t.img : null;
			let u, c = t.src;
			if (Se(!(void 0 !== c && h), "`image` and `src` cannot be provided at the same time"), void 0 !== c && 0 !== c.length || !h || (c = h.src || l(h)), Se(void 0 !== c && c.length > 0, "A defined and non-empty `src` or `image` must be provided"), Se(!((void 0 !== t.width || void 0 !== t.height) && void 0 !== t.scale), "`width` or `height` cannot be provided together with `scale`"), void 0 !== t.src ? u = e : void 0 !== h && (u = h instanceof HTMLImageElement ? h.complete ? h.src ? n : e : i : n), this.color_ = void 0 !== t.color ? j(t.color) : null, this.iconImage_ = function(t, e, i, n, r) {
					let s = void 0 === e ? void 0 : Re.get(e, i, r);
					return s || (s = new Me(t, t instanceof HTMLImageElement ? t.src || void 0 : e, i, n, r), Re.set(e, i, r, s)), s
				}(h, c, this.crossOrigin_, u, this.color_), this.offset_ = void 0 !== t.offset ? t.offset : [0, 0], this.offsetOrigin_ = void 0 !== t.offsetOrigin ? t.offsetOrigin : "top-left", this.origin_ = null, this.size_ = void 0 !== t.size ? t.size : null, void 0 !== t.width || void 0 !== t.height) {
				let e, i;
				if (t.size)[e, i] = t.size;
				else {
					const n = this.getImage(1);
					if (n.width && n.height) e = n.width, i = n.height;
					else if (n instanceof HTMLImageElement) {
						this.initialOptions_ = t;
						const e = () => {
							if (this.unlistenImageChange(e), !this.initialOptions_) return;
							const i = this.iconImage_.getSize();
							this.setScale(Ie(i[0], i[1], t.width, t.height))
						};
						return void this.listenImageChange(e)
					}
				}
				void 0 !== e && this.setScale(Ie(e, i, t.width, t.height))
			}
		}
		clone() {
			let t, e, i;
			return this.initialOptions_ ? (e = this.initialOptions_.width, i = this.initialOptions_.height) : (t = this.getScale(), t = Array.isArray(t) ? t.slice() : t), new Le({
				anchor: this.anchor_.slice(),
				anchorOrigin: this.anchorOrigin_,
				anchorXUnits: this.anchorXUnits_,
				anchorYUnits: this.anchorYUnits_,
				color: this.color_ && this.color_.slice ? this.color_.slice() : this.color_ || void 0,
				crossOrigin: this.crossOrigin_,
				offset: this.offset_.slice(),
				offsetOrigin: this.offsetOrigin_,
				opacity: this.getOpacity(),
				rotateWithView: this.getRotateWithView(),
				rotation: this.getRotation(),
				scale: t,
				width: e,
				height: i,
				size: null !== this.size_ ? this.size_.slice() : void 0,
				src: this.getSrc(),
				displacement: this.getDisplacement().slice(),
				declutterMode: this.getDeclutterMode()
			})
		}
		getAnchor() {
			let t = this.normalizedAnchor_;
			if (!t) {
				t = this.anchor_;
				const e = this.getSize();
				if ("fraction" == this.anchorXUnits_ || "fraction" == this.anchorYUnits_) {
					if (!e) return null;
					t = this.anchor_.slice(), "fraction" == this.anchorXUnits_ && (t[0] *= e[0]), "fraction" == this.anchorYUnits_ && (t[1] *= e[1])
				}
				if ("top-left" != this.anchorOrigin_) {
					if (!e) return null;
					t === this.anchor_ && (t = this.anchor_.slice()), "top-right" != this.anchorOrigin_ && "bottom-right" != this.anchorOrigin_ || (t[0] = -t[0] + e[0]), "bottom-left" != this.anchorOrigin_ && "bottom-right" != this.anchorOrigin_ || (t[1] = -t[1] + e[1])
				}
				this.normalizedAnchor_ = t
			}
			const e = this.getDisplacement(),
				i = this.getScaleArray();
			return [t[0] - e[0] / i[0], t[1] + e[1] / i[1]]
		}
		setAnchor(t) {
			this.anchor_ = t, this.normalizedAnchor_ = null
		}
		getColor() {
			return this.color_
		}
		getImage(t) {
			return this.iconImage_.getImage(t)
		}
		getPixelRatio(t) {
			return this.iconImage_.getPixelRatio(t)
		}
		getImageSize() {
			return this.iconImage_.getSize()
		}
		getImageState() {
			return this.iconImage_.getImageState()
		}
		getHitDetectionImage() {
			return this.iconImage_.getHitDetectionImage()
		}
		getOrigin() {
			if (this.origin_) return this.origin_;
			let t = this.offset_;
			if ("top-left" != this.offsetOrigin_) {
				const e = this.getSize(),
					i = this.iconImage_.getSize();
				if (!e || !i) return null;
				t = t.slice(), "top-right" != this.offsetOrigin_ && "bottom-right" != this.offsetOrigin_ || (t[0] = i[0] - e[0] - t[0]), "bottom-left" != this.offsetOrigin_ && "bottom-right" != this.offsetOrigin_ || (t[1] = i[1] - e[1] - t[1])
			}
			return this.origin_ = t, this.origin_
		}
		getSrc() {
			return this.iconImage_.getSrc()
		}
		getSize() {
			return this.size_ ? this.size_ : this.iconImage_.getSize()
		}
		getWidth() {
			const t = this.getScaleArray();
			return this.size_ ? this.size_[0] * t[0] : this.iconImage_.getImageState() == n ? this.iconImage_.getSize()[0] * t[0] : void 0
		}
		getHeight() {
			const t = this.getScaleArray();
			return this.size_ ? this.size_[1] * t[1] : this.iconImage_.getImageState() == n ? this.iconImage_.getSize()[1] * t[1] : void 0
		}
		setScale(t) {
			delete this.initialOptions_, super.setScale(t)
		}
		listenImageChange(t) {
			this.iconImage_.addEventListener(St, t)
		}
		load() {
			this.iconImage_.load()
		}
		unlistenImageChange(t) {
			this.iconImage_.removeEventListener(St, t)
		}
	}
	var ke = Le;
	class Ae extends Vt {
		constructor(t) {
			if (super(), this.on, this.once, this.un, this.id_ = void 0, this.geometryName_ = "geometry", this.style_ = null, this.styleFunction_ = void 0, this.geometryChangeKey_ = null, this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), t)
				if ("function" == typeof t.getSimplifiedGeometry) {
					const e = t;
					this.setGeometry(e)
				} else {
					const e = t;
					this.setProperties(e)
				}
		}
		clone() {
			const t = new Ae(this.hasProperties() ? this.getProperties() : null);
			t.setGeometryName(this.getGeometryName());
			const e = this.getGeometry();
			e && t.setGeometry(e.clone());
			const i = this.getStyle();
			return i && t.setStyle(i), t
		}
		getGeometry() {
			return this.get(this.geometryName_)
		}
		getId() {
			return this.id_
		}
		getGeometryName() {
			return this.geometryName_
		}
		getStyle() {
			return this.style_
		}
		getStyleFunction() {
			return this.styleFunction_
		}
		handleGeometryChange_() {
			this.changed()
		}
		handleGeometryChanged_() {
			this.geometryChangeKey_ && (Gt(this.geometryChangeKey_), this.geometryChangeKey_ = null);
			const t = this.getGeometry();
			t && (this.geometryChangeKey_ = Ot(t, St, this.handleGeometryChange_, this)), this.changed()
		}
		setGeometry(t) {
			this.set(this.geometryName_, t)
		}
		setStyle(t) {
			this.style_ = t, this.styleFunction_ = t ? function(t) {
				if ("function" == typeof t) return t;
				let e;
				if (Array.isArray(t)) e = t;
				else {
					Se("function" == typeof t.getZIndex, "Expected an `ol/style/Style` or an array of `ol/style/Style.js`");
					e = [t]
				}
				return function() {
					return e
				}
			}(t) : void 0, this.changed()
		}
		setId(t) {
			this.id_ = t, this.changed()
		}
		setGeometryName(t) {
			this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_), this.geometryName_ = t, this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), this.handleGeometryChanged_()
		}
	}
	var De = Ae;
	const Oe = new Array(6);

	function ze(t) {
		return Ne(t, 1, 0, 0, 1, 0, 0)
	}

	function Ge(t, e) {
		const i = t[0],
			n = t[1],
			r = t[2],
			s = t[3],
			o = t[4],
			a = t[5],
			l = e[0],
			h = e[1],
			u = e[2],
			c = e[3],
			d = e[4],
			g = e[5];
		return t[0] = i * l + r * h, t[1] = n * l + s * h, t[2] = i * u + r * c, t[3] = n * u + s * c, t[4] = i * d + r * g + o, t[5] = n * d + s * g + a, t
	}

	function Ne(t, e, i, n, r, s, o) {
		return t[0] = e, t[1] = i, t[2] = n, t[3] = r, t[4] = s, t[5] = o, t
	}

	function je(t, e) {
		const i = e[0],
			n = e[1];
		return e[0] = t[0] * i + t[2] * n + t[4], e[1] = t[1] * i + t[3] * n + t[5], e
	}

	function Ue(t, e, i) {
		return Ge(t, Ne(Oe, e, 0, 0, i, 0, 0))
	}

	function Be(t, e, i) {
		return Ge(t, Ne(Oe, 1, 0, 0, 1, e, i))
	}

	function $e(t, e, i, n, r, s, o, a) {
		const l = Math.sin(s),
			h = Math.cos(s);
		return t[0] = n * h, t[1] = r * l, t[2] = -n * l, t[3] = r * h, t[4] = o * n * h - a * n * l + e, t[5] = o * r * l + a * r * h + i, t
	}

	function Ve(t, e) {
		const i = (n = e)[0] * n[3] - n[1] * n[2];
		var n;
		Se(0 !== i, "Transformation matrix cannot be inverted");
		const r = e[0],
			s = e[1],
			o = e[2],
			a = e[3],
			l = e[4],
			h = e[5];
		return t[0] = a / i, t[1] = -s / i, t[2] = -o / i, t[3] = r / i, t[4] = (o * h - a * l) / i, t[5] = -(r * h - s * l) / i, t
	}
	let Xe;

	function We(t) {
		const e = "matrix(" + t.join(", ") + ")";
		if (K) return e;
		const i = Xe || (Xe = document.createElement("div"));
		return i.style.transform = e, i.style.transform
	}
	var qe = {
		UNKNOWN: 0,
		INTERSECTING: 1,
		ABOVE: 2,
		RIGHT: 4,
		BELOW: 8,
		LEFT: 16
	};

	function Ze(t) {
		const e = ii();
		for (let i = 0, n = t.length; i < n; ++i) hi(e, t[i]);
		return e
	}

	function Ye(t, e, i) {
		return i ? (i[0] = t[0] - e, i[1] = t[1] - e, i[2] = t[2] + e, i[3] = t[3] + e, i) : [t[0] - e, t[1] - e, t[2] + e, t[3] + e]
	}

	function Ke(t, e) {
		return e ? (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e) : t.slice()
	}

	function He(t, e, i) {
		let n, r;
		return n = e < t[0] ? t[0] - e : t[2] < e ? e - t[2] : 0, r = i < t[1] ? t[1] - i : t[3] < i ? i - t[3] : 0, n * n + r * r
	}

	function Je(t, e) {
		return ti(t, e[0], e[1])
	}

	function Qe(t, e) {
		return t[0] <= e[0] && e[2] <= t[2] && t[1] <= e[1] && e[3] <= t[3]
	}

	function ti(t, e, i) {
		return t[0] <= e && e <= t[2] && t[1] <= i && i <= t[3]
	}

	function ei(t, e) {
		const i = t[0],
			n = t[1],
			r = t[2],
			s = t[3],
			o = e[0],
			a = e[1];
		let l = qe.UNKNOWN;
		return o < i ? l |= qe.LEFT : o > r && (l |= qe.RIGHT), a < n ? l |= qe.BELOW : a > s && (l |= qe.ABOVE), l === qe.UNKNOWN && (l = qe.INTERSECTING), l
	}

	function ii() {
		return [1 / 0, 1 / 0, -1 / 0, -1 / 0]
	}

	function ni(t, e, i, n, r) {
		return r ? (r[0] = t, r[1] = e, r[2] = i, r[3] = n, r) : [t, e, i, n]
	}

	function ri(t) {
		return ni(1 / 0, 1 / 0, -1 / 0, -1 / 0, t)
	}

	function si(t, e) {
		const i = t[0],
			n = t[1];
		return ni(i, n, i, n, e)
	}

	function oi(t, e, i, n, r) {
		return ui(ri(r), t, e, i, n)
	}

	function ai(t, e) {
		return t[0] == e[0] && t[2] == e[2] && t[1] == e[1] && t[3] == e[3]
	}

	function li(t, e) {
		return e[0] < t[0] && (t[0] = e[0]), e[2] > t[2] && (t[2] = e[2]), e[1] < t[1] && (t[1] = e[1]), e[3] > t[3] && (t[3] = e[3]), t
	}

	function hi(t, e) {
		e[0] < t[0] && (t[0] = e[0]), e[0] > t[2] && (t[2] = e[0]), e[1] < t[1] && (t[1] = e[1]), e[1] > t[3] && (t[3] = e[1])
	}

	function ui(t, e, i, n, r) {
		for (; i < n; i += r) ci(t, e[i], e[i + 1]);
		return t
	}

	function ci(t, e, i) {
		t[0] = Math.min(t[0], e), t[1] = Math.min(t[1], i), t[2] = Math.max(t[2], e), t[3] = Math.max(t[3], i)
	}

	function di(t, e) {
		let i;
		return i = e(pi(t)), i || (i = e(fi(t)), i || (i = e(Si(t)), i || (i = e(bi(t)), i || !1)))
	}

	function gi(t) {
		let e = 0;
		return Ti(t) || (e = Ei(t) * vi(t)), e
	}

	function pi(t) {
		return [t[0], t[1]]
	}

	function fi(t) {
		return [t[2], t[1]]
	}

	function mi(t) {
		return [(t[0] + t[2]) / 2, (t[1] + t[3]) / 2]
	}

	function _i(t, e) {
		let i;
		if ("bottom-left" === e) i = pi(t);
		else if ("bottom-right" === e) i = fi(t);
		else if ("top-left" === e) i = bi(t);
		else {
			if ("top-right" !== e) throw new Error("Invalid corner");
			i = Si(t)
		}
		return i
	}

	function yi(t, e, i, n, r) {
		const [s, o, a, l, h, u, c, d] = xi(t, e, i, n);
		return ni(Math.min(s, a, h, c), Math.min(o, l, u, d), Math.max(s, a, h, c), Math.max(o, l, u, d), r)
	}

	function xi(t, e, i, n) {
		const r = e * n[0] / 2,
			s = e * n[1] / 2,
			o = Math.cos(i),
			a = Math.sin(i),
			l = r * o,
			h = r * a,
			u = s * o,
			c = s * a,
			d = t[0],
			g = t[1];
		return [d - l + c, g - h - u, d - l - c, g - h + u, d + l - c, g + h + u, d + l + c, g + h - u, d - l + c, g - h - u]
	}

	function vi(t) {
		return t[3] - t[1]
	}

	function wi(t, e, i) {
		const n = i || [1 / 0, 1 / 0, -1 / 0, -1 / 0];
		return Ci(t, e) ? (t[0] > e[0] ? n[0] = t[0] : n[0] = e[0], t[1] > e[1] ? n[1] = t[1] : n[1] = e[1], t[2] < e[2] ? n[2] = t[2] : n[2] = e[2], t[3] < e[3] ? n[3] = t[3] : n[3] = e[3]) : ri(n), n
	}

	function bi(t) {
		return [t[0], t[3]]
	}

	function Si(t) {
		return [t[2], t[3]]
	}

	function Ei(t) {
		return t[2] - t[0]
	}

	function Ci(t, e) {
		return t[0] <= e[2] && t[2] >= e[0] && t[1] <= e[3] && t[3] >= e[1]
	}

	function Ti(t) {
		return t[2] < t[0] || t[3] < t[1]
	}

	function Pi(t, e, i, n) {
		if (Ti(t)) return ri(i);
		let r = [];
		if (n > 1) {
			const e = t[2] - t[0],
				i = t[3] - t[1];
			for (let s = 0; s < n; ++s) r.push(t[0] + e * s / n, t[1], t[2], t[1] + i * s / n, t[2] - e * s / n, t[3], t[0], t[3] - i * s / n)
		} else r = [t[0], t[1], t[2], t[1], t[2], t[3], t[0], t[3]];
		e(r, r, 2);
		const s = [],
			o = [];
		for (let t = 0, e = r.length; t < e; t += 2) s.push(r[t]), o.push(r[t + 1]);
		return function(t, e, i) {
			return ni(Math.min.apply(null, t), Math.min.apply(null, e), Math.max.apply(null, t), Math.max.apply(null, e), i)
		}(s, o, i)
	}

	function Ri(t, e) {
		const i = e.getExtent(),
			n = mi(t);
		if (e.canWrapX() && (n[0] < i[0] || n[0] >= i[2])) {
			const e = Ei(i),
				r = Math.floor((n[0] - i[0]) / e) * e;
			t[0] -= r, t[2] -= r
		}
		return t
	}
	const Fi = {
		radians: 6370997 / (2 * Math.PI),
		degrees: 2 * Math.PI * 6370997 / 360,
		ft: .3048,
		m: 1,
		"us-ft": 1200 / 3937
	};
	var Mi = class {
		constructor(t) {
			this.code_ = t.code, this.units_ = t.units, this.extent_ = void 0 !== t.extent ? t.extent : null, this.worldExtent_ = void 0 !== t.worldExtent ? t.worldExtent : null, this.axisOrientation_ = void 0 !== t.axisOrientation ? t.axisOrientation : "enu", this.global_ = void 0 !== t.global && t.global, this.canWrapX_ = !(!this.global_ || !this.extent_), this.getPointResolutionFunc_ = t.getPointResolution, this.defaultTileGrid_ = null, this.metersPerUnit_ = t.metersPerUnit
		}
		canWrapX() {
			return this.canWrapX_
		}
		getCode() {
			return this.code_
		}
		getExtent() {
			return this.extent_
		}
		getUnits() {
			return this.units_
		}
		getMetersPerUnit() {
			return this.metersPerUnit_ || Fi[this.units_]
		}
		getWorldExtent() {
			return this.worldExtent_
		}
		getAxisOrientation() {
			return this.axisOrientation_
		}
		isGlobal() {
			return this.global_
		}
		setGlobal(t) {
			this.global_ = t, this.canWrapX_ = !(!t || !this.extent_)
		}
		getDefaultTileGrid() {
			return this.defaultTileGrid_
		}
		setDefaultTileGrid(t) {
			this.defaultTileGrid_ = t
		}
		setExtent(t) {
			this.extent_ = t, this.canWrapX_ = !(!this.global_ || !t)
		}
		setWorldExtent(t) {
			this.worldExtent_ = t
		}
		setGetPointResolution(t) {
			this.getPointResolutionFunc_ = t
		}
		getPointResolutionFunc() {
			return this.getPointResolutionFunc_
		}
	};
	const Ii = 6378137,
		Li = Math.PI * Ii,
		ki = [-Li, -Li, Li, Li],
		Ai = [-180, -85, 180, 85],
		Di = Ii * Math.log(Math.tan(Math.PI / 2));
	class Oi extends Mi {
		constructor(t) {
			super({
				code: t,
				units: "m",
				extent: ki,
				global: !0,
				worldExtent: Ai,
				getPointResolution: function(t, e) {
					return t / Math.cosh(e[1] / Ii)
				}
			})
		}
	}
	const zi = [new Oi("EPSG:3857"), new Oi("EPSG:102100"), new Oi("EPSG:102113"), new Oi("EPSG:900913"), new Oi("http://www.opengis.net/def/crs/EPSG/0/3857"), new Oi("http://www.opengis.net/gml/srs/epsg.xml#3857")];

	function Gi(t, e, i) {
		const n = t.length;
		i = i > 1 ? i : 2, void 0 === e && (e = i > 2 ? t.slice() : new Array(n));
		for (let r = 0; r < n; r += i) {
			e[r] = Li * t[r] / 180;
			let i = Ii * Math.log(Math.tan(Math.PI * (+t[r + 1] + 90) / 360));
			i > Di ? i = Di : i < -Di && (i = -Di), e[r + 1] = i
		}
		return e
	}

	function Ni(t, e, i) {
		const n = t.length;
		i = i > 1 ? i : 2, void 0 === e && (e = i > 2 ? t.slice() : new Array(n));
		for (let r = 0; r < n; r += i) e[r] = 180 * t[r] / Li, e[r + 1] = 360 * Math.atan(Math.exp(t[r + 1] / Ii)) / Math.PI - 90;
		return e
	}
	const ji = [-180, -90, 180, 90],
		Ui = 6378137 * Math.PI / 180;
	class Bi extends Mi {
		constructor(t, e) {
			super({
				code: t,
				units: "degrees",
				extent: ji,
				axisOrientation: e,
				global: !0,
				metersPerUnit: Ui,
				worldExtent: ji
			})
		}
	}
	const $i = [new Bi("CRS:84"), new Bi("EPSG:4326", "neu"), new Bi("urn:ogc:def:crs:OGC:1.3:CRS84"), new Bi("urn:ogc:def:crs:OGC:2:84"), new Bi("http://www.opengis.net/def/crs/OGC/1.3/CRS84"), new Bi("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new Bi("http://www.opengis.net/def/crs/EPSG/0/4326", "neu")];
	let Vi = {};
	let Xi = {};

	function Wi(t, e, i) {
		const n = t.getCode(),
			r = e.getCode();
		n in Xi || (Xi[n] = {}), Xi[n][r] = i
	}

	function qi(t, e) {
		const i = ("" + t).split("."),
			n = ("" + e).split(".");
		for (let t = 0; t < Math.max(i.length, n.length); t++) {
			const e = parseInt(i[t] || "0", 10),
				r = parseInt(n[t] || "0", 10);
			if (e > r) return 1;
			if (r > e) return -1
		}
		return 0
	}

	function Zi(t, e) {
		const i = e.getRadius(),
			n = e.getCenter(),
			r = n[0],
			s = n[1];
		let o = t[0] - r;
		const a = t[1] - s;
		0 === o && 0 === a && (o = 1);
		const l = Math.sqrt(o * o + a * a);
		return [r + i * o / l, s + i * a / l]
	}

	function Yi(t, e) {
		const i = t[0],
			n = t[1],
			r = e[0],
			s = e[1],
			o = r[0],
			a = r[1],
			l = s[0],
			h = s[1],
			u = l - o,
			c = h - a,
			d = 0 === u && 0 === c ? 0 : (u * (i - o) + c * (n - a)) / (u * u + c * c || 0);
		let g, p;
		return d <= 0 ? (g = o, p = a) : d >= 1 ? (g = l, p = h) : (g = o + d * u, p = a + d * c), [g, p]
	}

	function Ki(t, e) {
		let i = !0;
		for (let n = t.length - 1; n >= 0; --n)
			if (t[n] != e[n]) {
				i = !1;
				break
			} return i
	}

	function Hi(t, e) {
		const i = Math.cos(e),
			n = Math.sin(e),
			r = t[0] * i - t[1] * n,
			s = t[1] * i + t[0] * n;
		return t[0] = r, t[1] = s, t
	}

	function Ji(t, e) {
		const i = t[0] - e[0],
			n = t[1] - e[1];
		return i * i + n * n
	}

	function Qi(t, e) {
		return Math.sqrt(Ji(t, e))
	}

	function tn(t, e) {
		return Ji(t, Yi(t, e))
	}

	function en(t, e) {
		if (e.canWrapX()) {
			const i = Ei(e.getExtent()),
				n = nn(t, e, i);
			n && (t[0] -= n * i)
		}
		return t
	}

	function nn(t, e, i) {
		const n = e.getExtent();
		let r = 0;
		return e.canWrapX() && (t[0] < n[0] || t[0] > n[2]) && (i = i || Ei(n), r = Math.floor((t[0] - n[0]) / i)), r
	}
	const rn = 6371008.8;

	function sn(t, e, i) {
		i = i || rn;
		const n = T(t[1]),
			r = T(e[1]),
			s = (r - n) / 2,
			o = T(e[0] - t[0]) / 2,
			a = Math.sin(s) * Math.sin(s) + Math.sin(o) * Math.sin(o) * Math.cos(n) * Math.cos(r);
		return 2 * i * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
	}

	function on(t, e) {
		let i = 0;
		for (let n = 0, r = t.length; n < r - 1; ++n) i += sn(t[n], t[n + 1], e);
		return i
	}

	function an(t, e) {
		let i = 0;
		const n = t.length;
		let r = t[n - 1][0],
			s = t[n - 1][1];
		for (let e = 0; e < n; e++) {
			const n = t[e][0],
				o = t[e][1];
			i += T(n - r) * (2 + Math.sin(T(s)) + Math.sin(T(o))), r = n, s = o
		}
		return i * e * e / 2
	}
	var ln = Object.freeze({
		__proto__: null,
		DEFAULT_RADIUS: rn,
		getDistance: sn,
		getLength: function t(e, i) {
			const n = (i = i || {}).radius || rn,
				r = i.projection || "EPSG:3857",
				s = e.getType();
			"GeometryCollection" !== s && (e = e.clone().transform(r, "EPSG:4326"));
			let o, a, l, h, u, c, d = 0;
			switch (s) {
				case "Point":
				case "MultiPoint":
					break;
				case "LineString":
				case "LinearRing":
					o = e.getCoordinates(), d = on(o, n);
					break;
				case "MultiLineString":
				case "Polygon":
					for (o = e.getCoordinates(), l = 0, h = o.length; l < h; ++l) d += on(o[l], n);
					break;
				case "MultiPolygon":
					for (o = e.getCoordinates(), l = 0, h = o.length; l < h; ++l)
						for (a = o[l], u = 0, c = a.length; u < c; ++u) d += on(a[u], n);
					break;
				case "GeometryCollection": {
					const n = e.getGeometries();
					for (l = 0, h = n.length; l < h; ++l) d += t(n[l], i);
					break
				}
				default:
					throw new Error("Unsupported geometry type: " + s)
			}
			return d
		},
		getArea: function t(e, i) {
			const n = (i = i || {}).radius || rn,
				r = i.projection || "EPSG:3857",
				s = e.getType();
			"GeometryCollection" !== s && (e = e.clone().transform(r, "EPSG:4326"));
			let o, a, l, h, u, c, d = 0;
			switch (s) {
				case "Point":
				case "MultiPoint":
				case "LineString":
				case "MultiLineString":
				case "LinearRing":
					break;
				case "Polygon":
					for (o = e.getCoordinates(), d = Math.abs(an(o[0], n)), l = 1, h = o.length; l < h; ++l) d -= Math.abs(an(o[l], n));
					break;
				case "MultiPolygon":
					for (o = e.getCoordinates(), l = 0, h = o.length; l < h; ++l)
						for (a = o[l], d += Math.abs(an(a[0], n)), u = 1, c = a.length; u < c; ++u) d -= Math.abs(an(a[u], n));
					break;
				case "GeometryCollection": {
					const n = e.getGeometries();
					for (l = 0, h = n.length; l < h; ++l) d += t(n[l], i);
					break
				}
				default:
					throw new Error("Unsupported geometry type: " + s)
			}
			return d
		},
		offset: function(t, e, i, n) {
			n = n || rn;
			const r = T(t[1]),
				s = T(t[0]),
				o = e / n,
				a = Math.asin(Math.sin(r) * Math.cos(o) + Math.cos(r) * Math.sin(o) * Math.cos(i));
			return [C(s + Math.atan2(Math.sin(i) * Math.sin(o) * Math.cos(r), Math.cos(o) - Math.sin(r) * Math.sin(a))), C(a)]
		}
	});
	const hn = {
		info: 1,
		warn: 2,
		error: 3,
		none: 4
	};
	let un = hn.info;

	function cn(...t) {
		un > hn.warn || console.warn(...t)
	}
	let dn = !0;

	function gn(t) {
		dn = !(void 0 === t || t)
	}

	function pn(t, e) {
		if (void 0 !== e)
			for (let i = 0, n = t.length; i < n; ++i) e[i] = t[i];
		else e = t.slice();
		return e
	}

	function fn(t, e) {
		if (void 0 !== e && t !== e) {
			for (let i = 0, n = t.length; i < n; ++i) e[i] = t[i];
			t = e
		}
		return t
	}

	function mn(t) {
		! function(t, e) {
			Vi[t] = e
		}(t.getCode(), t), Wi(t, t, pn)
	}

	function _n(t) {
		t.forEach(mn)
	}

	function yn(t) {
		return "string" == typeof t ? Vi[e = t] || Vi[e.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] || null : t || null;
		var e
	}

	function xn(t, e, i, n) {
		let r;
		const s = (t = yn(t)).getPointResolutionFunc();
		if (s) {
			if (r = s(e, i), n && n !== t.getUnits()) {
				const e = t.getMetersPerUnit();
				e && (r = r * e / Fi[n])
			}
		} else {
			const s = t.getUnits();
			if ("degrees" == s && !n || "degrees" == n) r = e;
			else {
				const o = Tn(t, yn("EPSG:4326"));
				if (o === fn && "degrees" !== s) r = e * t.getMetersPerUnit();
				else {
					let t = [i[0] - e / 2, i[1], i[0] + e / 2, i[1], i[0], i[1] - e / 2, i[0], i[1] + e / 2];
					t = o(t, t, 2);
					r = (sn(t.slice(0, 2), t.slice(2, 4)) + sn(t.slice(4, 6), t.slice(6, 8))) / 2
				}
				const a = n ? Fi[n] : t.getMetersPerUnit();
				void 0 !== a && (r /= a)
			}
		}
		return r
	}

	function vn(t) {
		_n(t), t.forEach((function(e) {
			t.forEach((function(t) {
				e !== t && Wi(e, t, pn)
			}))
		}))
	}

	function wn(t, e, i, n) {
		t.forEach((function(t) {
			e.forEach((function(e) {
				Wi(t, e, i), Wi(e, t, n)
			}))
		}))
	}

	function bn(t, e) {
		return t ? "string" == typeof t ? yn(t) : t : yn(e)
	}

	function Sn(t) {
		return function(e, i, n) {
			const r = e.length;
			n = void 0 !== n ? n : 2, i = void 0 !== i ? i : new Array(r);
			for (let s = 0; s < r; s += n) {
				const r = t(e.slice(s, s + n)),
					o = r.length;
				for (let t = 0, a = n; t < a; ++t) i[s + t] = t >= o ? e[s + t] : r[t]
			}
			return i
		}
	}

	function En(t, e) {
		return gn(), Rn(t, "EPSG:4326", void 0 !== e ? e : "EPSG:3857")
	}

	function Cn(t, e) {
		if (t === e) return !0;
		const i = t.getUnits() === e.getUnits();
		if (t.getCode() === e.getCode()) return i;
		return Tn(t, e) === pn && i
	}

	function Tn(t, e) {
		let i = function(t, e) {
			let i;
			return t in Xi && e in Xi[t] && (i = Xi[t][e]), i
		}(t.getCode(), e.getCode());
		return i || (i = fn), i
	}

	function Pn(t, e) {
		return Tn(yn(t), yn(e))
	}

	function Rn(t, e, i) {
		return Pn(e, i)(t, void 0, t.length)
	}

	function Fn(t, e, i, n) {
		return Pi(t, Pn(e, i), void 0, n)
	}
	let Mn = null;

	function In(t) {
		Mn = yn(t)
	}

	function Ln() {
		return Mn
	}

	function kn(t, e) {
		return Mn ? Rn(t, e, Mn) : t
	}

	function An(t, e) {
		return Mn ? Rn(t, Mn, e) : (dn && !Ki(t, [0, 0]) && t[0] >= -180 && t[0] <= 180 && t[1] >= -90 && t[1] <= 90 && (dn = !1, cn("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.")), t)
	}

	function Dn(t, e) {
		return Mn ? Fn(t, e, Mn) : t
	}

	function On(t, e) {
		return Mn ? Fn(t, Mn, e) : t
	}

	function zn(t, e) {
		if (!Mn) return t;
		const i = yn(e).getMetersPerUnit(),
			n = Mn.getMetersPerUnit();
		return i && n ? t * i / n : t
	}

	function Gn() {
		vn(zi), vn($i), wn($i, zi, Gi, Ni)
	}
	Gn();
	var Nn = Object.freeze({
		__proto__: null,
		METERS_PER_UNIT: Fi,
		Projection: Mi,
		disableCoordinateWarning: gn,
		cloneTransform: pn,
		identityTransform: fn,
		addProjection: mn,
		addProjections: _n,
		get: yn,
		getPointResolution: xn,
		addEquivalentProjections: vn,
		addEquivalentTransforms: wn,
		clearAllProjections: function() {
			Vi = {}, Xi = {}
		},
		createProjection: bn,
		createTransformFromCoordinateTransform: Sn,
		addCoordinateTransforms: function(t, e, i, n) {
			const r = yn(t),
				s = yn(e);
			Wi(r, s, Sn(i)), Wi(s, r, Sn(n))
		},
		fromLonLat: En,
		toLonLat: function(t, e) {
			const i = Rn(t, void 0 !== e ? e : "EPSG:3857", "EPSG:4326"),
				n = i[0];
			return (n < -180 || n > 180) && (i[0] = P(n + 180, 360) - 180), i
		},
		equivalent: Cn,
		getTransformFromProjections: Tn,
		getTransform: Pn,
		transform: Rn,
		transformExtent: Fn,
		transformWithProjections: function(t, e, i) {
			return Tn(e, i)(t)
		},
		setUserProjection: In,
		clearUserProjection: function() {
			Mn = null
		},
		getUserProjection: Ln,
		useGeographic: function() {
			In("EPSG:4326")
		},
		toUserCoordinate: kn,
		fromUserCoordinate: An,
		toUserExtent: Dn,
		fromUserExtent: On,
		toUserResolution: zn,
		fromUserResolution: function(t, e) {
			if (!Mn) return t;
			const i = yn(e).getMetersPerUnit(),
				n = Mn.getMetersPerUnit();
			return i && n ? t * n / i : t
		},
		createSafeCoordinateTransform: function(t, e, i) {
			return function(n) {
				let r, s;
				if (t.canWrapX()) {
					const e = t.getExtent(),
						o = Ei(e);
					s = nn(n = n.slice(0), t, o), s && (n[0] = n[0] - s * o), n[0] = b(n[0], e[0], e[2]), n[1] = b(n[1], e[1], e[3]), r = i(n)
				} else r = i(n);
				return s && e.canWrapX() && (r[0] += s * Ei(e.getExtent())), r
			}
		},
		addCommon: Gn
	});

	function jn(t, e, i, n, r, s) {
		s = s || [];
		let o = 0;
		for (let a = e; a < i; a += n) {
			const e = t[a],
				i = t[a + 1];
			s[o++] = r[0] * e + r[2] * i + r[4], s[o++] = r[1] * e + r[3] * i + r[5]
		}
		return s && s.length != o && (s.length = o), s
	}

	function Un(t, e, i, n, r, s, o) {
		o = o || [];
		const a = Math.cos(r),
			l = Math.sin(r),
			h = s[0],
			u = s[1];
		let c = 0;
		for (let r = e; r < i; r += n) {
			const e = t[r] - h,
				i = t[r + 1] - u;
			o[c++] = h + e * a - i * l, o[c++] = u + e * l + i * a;
			for (let e = r + 2; e < r + n; ++e) o[c++] = t[e]
		}
		return o && o.length != c && (o.length = c), o
	}
	const Bn = [1, 0, 0, 1, 0, 0];
	var $n = class extends Vt {
		constructor() {
			super(), this.extent_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0], this.extentRevision_ = -1, this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = 0, this.simplifyTransformedInternal = yt(((t, e, i) => {
				if (!i) return this.getSimplifiedGeometry(e);
				const n = this.clone();
				return n.applyTransform(i), n.getSimplifiedGeometry(e)
			}))
		}
		simplifyTransformed(t, e) {
			return this.simplifyTransformedInternal(this.getRevision(), t, e)
		}
		clone() {
			return o()
		}
		closestPointXY(t, e, i, n) {
			return o()
		}
		containsXY(t, e) {
			const i = this.getClosestPoint([t, e]);
			return i[0] === t && i[1] === e
		}
		getClosestPoint(t, e) {
			return e = e || [NaN, NaN], this.closestPointXY(t[0], t[1], e, 1 / 0), e
		}
		intersectsCoordinate(t) {
			return this.containsXY(t[0], t[1])
		}
		computeExtent(t) {
			return o()
		}
		getExtent(t) {
			if (this.extentRevision_ != this.getRevision()) {
				const t = this.computeExtent(this.extent_);
				(isNaN(t[0]) || isNaN(t[1])) && ri(t), this.extentRevision_ = this.getRevision()
			}
			return function(t, e) {
				return e ? (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e) : t
			}(this.extent_, t)
		}
		rotate(t, e) {
			o()
		}
		scale(t, e, i) {
			o()
		}
		simplify(t) {
			return this.getSimplifiedGeometry(t * t)
		}
		getSimplifiedGeometry(t) {
			return o()
		}
		getType() {
			return o()
		}
		applyTransform(t) {
			o()
		}
		intersectsExtent(t) {
			return o()
		}
		translate(t, e) {
			o()
		}
		transform(t, e) {
			const i = yn(t),
				n = "tile-pixels" == i.getUnits() ? function(t, n, r) {
					const s = i.getExtent(),
						o = i.getWorldExtent(),
						a = vi(o) / vi(s);
					return $e(Bn, o[0], o[3], a, -a, 0, 0, 0), jn(t, 0, t.length, r, Bn, n), Pn(i, e)(t, n, r)
				} : Pn(i, e);
			return this.applyTransform(n), this
		}
	};
	class Vn extends $n {
		constructor() {
			super(), this.layout = "XY", this.stride = 2, this.flatCoordinates
		}
		computeExtent(t) {
			return oi(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t)
		}
		getCoordinates() {
			return o()
		}
		getFirstCoordinate() {
			return this.flatCoordinates.slice(0, this.stride)
		}
		getFlatCoordinates() {
			return this.flatCoordinates
		}
		getLastCoordinate() {
			return this.flatCoordinates.slice(this.flatCoordinates.length - this.stride)
		}
		getLayout() {
			return this.layout
		}
		getSimplifiedGeometry(t) {
			if (this.simplifiedGeometryRevision !== this.getRevision() && (this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = this.getRevision()), t < 0 || 0 !== this.simplifiedGeometryMaxMinSquaredTolerance && t <= this.simplifiedGeometryMaxMinSquaredTolerance) return this;
			const e = this.getSimplifiedGeometryInternal(t);
			return e.getFlatCoordinates().length < this.flatCoordinates.length ? e : (this.simplifiedGeometryMaxMinSquaredTolerance = t, this)
		}
		getSimplifiedGeometryInternal(t) {
			return this
		}
		getStride() {
			return this.stride
		}
		setFlatCoordinates(t, e) {
			this.stride = Wn(t), this.layout = t, this.flatCoordinates = e
		}
		setCoordinates(t, e) {
			o()
		}
		setLayout(t, e, i) {
			let n;
			if (t) n = Wn(t);
			else {
				for (let t = 0; t < i; ++t) {
					if (0 === e.length) return this.layout = "XY", void(this.stride = 2);
					e = e[0]
				}
				n = e.length, t = Xn(n)
			}
			this.layout = t, this.stride = n
		}
		applyTransform(t) {
			this.flatCoordinates && (t(this.flatCoordinates, this.flatCoordinates, this.stride), this.changed())
		}
		rotate(t, e) {
			const i = this.getFlatCoordinates();
			if (i) {
				const n = this.getStride();
				Un(i, 0, i.length, n, t, e, i), this.changed()
			}
		}
		scale(t, e, i) {
			void 0 === e && (e = t), i || (i = mi(this.getExtent()));
			const n = this.getFlatCoordinates();
			if (n) {
				const r = this.getStride();
				! function(t, e, i, n, r, s, o, a) {
					a = a || [];
					const l = o[0],
						h = o[1];
					let u = 0;
					for (let o = e; o < i; o += n) {
						const e = t[o] - l,
							i = t[o + 1] - h;
						a[u++] = l + r * e, a[u++] = h + s * i;
						for (let e = o + 2; e < o + n; ++e) a[u++] = t[e]
					}
					a && a.length != u && (a.length = u)
				}(n, 0, n.length, r, t, e, i, n), this.changed()
			}
		}
		translate(t, e) {
			const i = this.getFlatCoordinates();
			if (i) {
				const n = this.getStride();
				! function(t, e, i, n, r, s, o) {
					o = o || [];
					let a = 0;
					for (let l = e; l < i; l += n) {
						o[a++] = t[l] + r, o[a++] = t[l + 1] + s;
						for (let e = l + 2; e < l + n; ++e) o[a++] = t[e]
					}
					o && o.length != a && (o.length = a)
				}(i, 0, i.length, n, t, e, i), this.changed()
			}
		}
	}

	function Xn(t) {
		let e;
		return 2 == t ? e = "XY" : 3 == t ? e = "XYZ" : 4 == t && (e = "XYZM"), e
	}

	function Wn(t) {
		let e;
		return "XY" == t ? e = 2 : "XYZ" == t || "XYM" == t ? e = 3 : "XYZM" == t && (e = 4), e
	}

	function qn(t, e, i, n) {
		for (let n = 0, r = i.length; n < r; ++n) t[e++] = i[n];
		return e
	}

	function Zn(t, e, i, n) {
		for (let r = 0, s = i.length; r < s; ++r) {
			const s = i[r];
			for (let i = 0; i < n; ++i) t[e++] = s[i]
		}
		return e
	}

	function Yn(t, e, i, n, r) {
		r = r || [];
		let s = 0;
		for (let o = 0, a = i.length; o < a; ++o) {
			const a = Zn(t, e, i[o], n);
			r[s++] = a, e = a
		}
		return r.length = s, r
	}

	function Kn(t, e, i, n, r) {
		r = r || [];
		let s = 0;
		for (let o = 0, a = i.length; o < a; ++o) {
			const a = Yn(t, e, i[o], n, r[s]);
			0 === a.length && (a[0] = e), r[s++] = a, e = a[a.length - 1]
		}
		return r.length = s, r
	}
	class Hn extends Vn {
		constructor(t, e, i) {
			super(), void 0 !== i && void 0 === e ? this.setFlatCoordinates(i, t) : (e = e || 0, this.setCenterAndRadius(t, e, i))
		}
		clone() {
			const t = new Hn(this.flatCoordinates.slice(), void 0, this.layout);
			return t.applyProperties(this), t
		}
		closestPointXY(t, e, i, n) {
			const r = this.flatCoordinates,
				s = t - r[0],
				o = e - r[1],
				a = s * s + o * o;
			if (a < n) {
				if (0 === a)
					for (let t = 0; t < this.stride; ++t) i[t] = r[t];
				else {
					const t = this.getRadius() / Math.sqrt(a);
					i[0] = r[0] + t * s, i[1] = r[1] + t * o;
					for (let t = 2; t < this.stride; ++t) i[t] = r[t]
				}
				return i.length = this.stride, a
			}
			return n
		}
		containsXY(t, e) {
			const i = this.flatCoordinates,
				n = t - i[0],
				r = e - i[1];
			return n * n + r * r <= this.getRadiusSquared_()
		}
		getCenter() {
			return this.flatCoordinates.slice(0, this.stride)
		}
		computeExtent(t) {
			const e = this.flatCoordinates,
				i = e[this.stride] - e[0];
			return ni(e[0] - i, e[1] - i, e[0] + i, e[1] + i, t)
		}
		getRadius() {
			return Math.sqrt(this.getRadiusSquared_())
		}
		getRadiusSquared_() {
			const t = this.flatCoordinates[this.stride] - this.flatCoordinates[0],
				e = this.flatCoordinates[this.stride + 1] - this.flatCoordinates[1];
			return t * t + e * e
		}
		getType() {
			return "Circle"
		}
		intersectsExtent(t) {
			if (Ci(t, this.getExtent())) {
				const e = this.getCenter();
				return t[0] <= e[0] && t[2] >= e[0] || (t[1] <= e[1] && t[3] >= e[1] || di(t, this.intersectsCoordinate.bind(this)))
			}
			return !1
		}
		setCenter(t) {
			const e = this.stride,
				i = this.flatCoordinates[e] - this.flatCoordinates[0],
				n = t.slice();
			n[e] = n[0] + i;
			for (let i = 1; i < e; ++i) n[e + i] = t[i];
			this.setFlatCoordinates(this.layout, n), this.changed()
		}
		setCenterAndRadius(t, e, i) {
			this.setLayout(i, t, 0), this.flatCoordinates || (this.flatCoordinates = []);
			const n = this.flatCoordinates;
			let r = qn(n, 0, t, this.stride);
			n[r++] = n[0] + e;
			for (let t = 1, e = this.stride; t < e; ++t) n[r++] = n[t];
			n.length = r, this.changed()
		}
		getCoordinates() {
			return null
		}
		setCoordinates(t, e) {}
		setRadius(t) {
			this.flatCoordinates[this.stride] = this.flatCoordinates[0] + t, this.changed()
		}
		rotate(t, e) {
			const i = this.getCenter(),
				n = this.getStride();
			this.setCenter(Un(i, 0, i.length, n, t, e, i)), this.changed()
		}
	}
	Hn.prototype.transform;
	var Jn = Hn;
	class Qn extends $n {
		constructor(t) {
			super(), this.geometries_ = t || null, this.changeEventsKeys_ = [], this.listenGeometriesChange_()
		}
		unlistenGeometriesChange_() {
			this.changeEventsKeys_.forEach(Gt), this.changeEventsKeys_.length = 0
		}
		listenGeometriesChange_() {
			if (this.geometries_)
				for (let t = 0, e = this.geometries_.length; t < e; ++t) this.changeEventsKeys_.push(Ot(this.geometries_[t], St, this.changed, this))
		}
		clone() {
			const t = new Qn(null);
			return t.setGeometries(this.geometries_), t.applyProperties(this), t
		}
		closestPointXY(t, e, i, n) {
			if (n < He(this.getExtent(), t, e)) return n;
			const r = this.geometries_;
			for (let s = 0, o = r.length; s < o; ++s) n = r[s].closestPointXY(t, e, i, n);
			return n
		}
		containsXY(t, e) {
			const i = this.geometries_;
			for (let n = 0, r = i.length; n < r; ++n)
				if (i[n].containsXY(t, e)) return !0;
			return !1
		}
		computeExtent(t) {
			ri(t);
			const e = this.geometries_;
			for (let i = 0, n = e.length; i < n; ++i) li(t, e[i].getExtent());
			return t
		}
		getGeometries() {
			return tr(this.geometries_)
		}
		getGeometriesArray() {
			return this.geometries_
		}
		getGeometriesArrayRecursive() {
			let t = [];
			const e = this.geometries_;
			for (let i = 0, n = e.length; i < n; ++i) e[i].getType() === this.getType() ? t = t.concat(e[i].getGeometriesArrayRecursive()) : t.push(e[i]);
			return t
		}
		getSimplifiedGeometry(t) {
			if (this.simplifiedGeometryRevision !== this.getRevision() && (this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = this.getRevision()), t < 0 || 0 !== this.simplifiedGeometryMaxMinSquaredTolerance && t < this.simplifiedGeometryMaxMinSquaredTolerance) return this;
			const e = [],
				i = this.geometries_;
			let n = !1;
			for (let r = 0, s = i.length; r < s; ++r) {
				const s = i[r],
					o = s.getSimplifiedGeometry(t);
				e.push(o), o !== s && (n = !0)
			}
			if (n) {
				const t = new Qn(null);
				return t.setGeometriesArray(e), t
			}
			return this.simplifiedGeometryMaxMinSquaredTolerance = t, this
		}
		getType() {
			return "GeometryCollection"
		}
		intersectsExtent(t) {
			const e = this.geometries_;
			for (let i = 0, n = e.length; i < n; ++i)
				if (e[i].intersectsExtent(t)) return !0;
			return !1
		}
		isEmpty() {
			return 0 === this.geometries_.length
		}
		rotate(t, e) {
			const i = this.geometries_;
			for (let n = 0, r = i.length; n < r; ++n) i[n].rotate(t, e);
			this.changed()
		}
		scale(t, e, i) {
			i || (i = mi(this.getExtent()));
			const n = this.geometries_;
			for (let r = 0, s = n.length; r < s; ++r) n[r].scale(t, e, i);
			this.changed()
		}
		setGeometries(t) {
			this.setGeometriesArray(tr(t))
		}
		setGeometriesArray(t) {
			this.unlistenGeometriesChange_(), this.geometries_ = t, this.listenGeometriesChange_(), this.changed()
		}
		applyTransform(t) {
			const e = this.geometries_;
			for (let i = 0, n = e.length; i < n; ++i) e[i].applyTransform(t);
			this.changed()
		}
		translate(t, e) {
			const i = this.geometries_;
			for (let n = 0, r = i.length; n < r; ++n) i[n].translate(t, e);
			this.changed()
		}
		disposeInternal() {
			this.unlistenGeometriesChange_(), super.disposeInternal()
		}
	}

	function tr(t) {
		const e = [];
		for (let i = 0, n = t.length; i < n; ++i) e.push(t[i].clone());
		return e
	}
	var er = Qn;

	function ir(t, e, i, n, r, s, o) {
		const a = t[e],
			l = t[e + 1],
			h = t[i] - a,
			u = t[i + 1] - l;
		let c;
		if (0 === h && 0 === u) c = e;
		else {
			const d = ((r - a) * h + (s - l) * u) / (h * h + u * u);
			if (d > 1) c = i;
			else {
				if (d > 0) {
					for (let r = 0; r < n; ++r) o[r] = R(t[e + r], t[i + r], d);
					return void(o.length = n)
				}
				c = e
			}
		}
		for (let e = 0; e < n; ++e) o[e] = t[c + e];
		o.length = n
	}

	function nr(t, e, i, n, r) {
		let s = t[e],
			o = t[e + 1];
		for (e += n; e < i; e += n) {
			const i = t[e],
				n = t[e + 1],
				a = E(s, o, i, n);
			a > r && (r = a), s = i, o = n
		}
		return r
	}

	function rr(t, e, i, n, r) {
		for (let s = 0, o = i.length; s < o; ++s) {
			const o = i[s];
			r = nr(t, e, o, n, r), e = o
		}
		return r
	}

	function sr(t, e, i, n, r, s, o, a, l, h, u) {
		if (e == i) return h;
		let c, d;
		if (0 === r) {
			if (d = E(o, a, t[e], t[e + 1]), d < h) {
				for (c = 0; c < n; ++c) l[c] = t[e + c];
				return l.length = n, d
			}
			return h
		}
		u = u || [NaN, NaN];
		let g = e + n;
		for (; g < i;)
			if (ir(t, g - n, g, n, o, a, u), d = E(o, a, u[0], u[1]), d < h) {
				for (h = d, c = 0; c < n; ++c) l[c] = u[c];
				l.length = n, g += n
			} else g += n * Math.max((Math.sqrt(d) - Math.sqrt(h)) / r | 0, 1);
		if (s && (ir(t, i - n, e, n, o, a, u), d = E(o, a, u[0], u[1]), d < h)) {
			for (h = d, c = 0; c < n; ++c) l[c] = u[c];
			l.length = n
		}
		return h
	}

	function or(t, e, i, n, r, s, o, a, l, h, u) {
		u = u || [NaN, NaN];
		for (let c = 0, d = i.length; c < d; ++c) {
			const d = i[c];
			h = sr(t, e, d, n, r, s, o, a, l, h, u), e = d
		}
		return h
	}

	function ar(t, e, i, n, r, s, o) {
		const a = (i - e) / n;
		if (a < 3) {
			for (; e < i; e += n) s[o++] = t[e], s[o++] = t[e + 1];
			return o
		}
		const l = new Array(a);
		l[0] = 1, l[a - 1] = 1;
		const h = [e, i - n];
		let u = 0;
		for (; h.length > 0;) {
			const i = h.pop(),
				s = h.pop();
			let o = 0;
			const a = t[s],
				c = t[s + 1],
				d = t[i],
				g = t[i + 1];
			for (let e = s + n; e < i; e += n) {
				const i = S(t[e], t[e + 1], a, c, d, g);
				i > o && (u = e, o = i)
			}
			o > r && (l[(u - e) / n] = 1, s + n < u && h.push(s, u), u + n < i && h.push(u, i))
		}
		for (let i = 0; i < a; ++i) l[i] && (s[o++] = t[e + i * n], s[o++] = t[e + i * n + 1]);
		return o
	}

	function lr(t, e, i, n, r, s, o, a) {
		for (let l = 0, h = i.length; l < h; ++l) {
			const h = i[l];
			o = ar(t, e, h, n, r, s, o), a.push(o), e = h
		}
		return o
	}

	function hr(t, e) {
		return e * Math.round(t / e)
	}

	function ur(t, e, i, n, r, s, o) {
		if (e == i) return o;
		let a, l, h = hr(t[e], r),
			u = hr(t[e + 1], r);
		e += n, s[o++] = h, s[o++] = u;
		do {
			if (a = hr(t[e], r), l = hr(t[e + 1], r), (e += n) == i) return s[o++] = a, s[o++] = l, o
		} while (a == h && l == u);
		for (; e < i;) {
			const i = hr(t[e], r),
				c = hr(t[e + 1], r);
			if (e += n, i == a && c == l) continue;
			const d = a - h,
				g = l - u,
				p = i - h,
				f = c - u;
			d * f == g * p && (d < 0 && p < d || d == p || d > 0 && p > d) && (g < 0 && f < g || g == f || g > 0 && f > g) ? (a = i, l = c) : (s[o++] = a, s[o++] = l, h = a, u = l, a = i, l = c)
		}
		return s[o++] = a, s[o++] = l, o
	}

	function cr(t, e, i, n, r, s, o, a) {
		for (let l = 0, h = i.length; l < h; ++l) {
			const h = i[l];
			o = ur(t, e, h, n, r, s, o), a.push(o), e = h
		}
		return o
	}

	function dr(t, e, i, n, r) {
		r = void 0 !== r ? r : [];
		let s = 0;
		for (let o = e; o < i; o += n) r[s++] = t.slice(o, o + n);
		return r.length = s, r
	}

	function gr(t, e, i, n, r) {
		r = void 0 !== r ? r : [];
		let s = 0;
		for (let o = 0, a = i.length; o < a; ++o) {
			const a = i[o];
			r[s++] = dr(t, e, a, n, r[s]), e = a
		}
		return r.length = s, r
	}

	function pr(t, e, i, n, r) {
		r = void 0 !== r ? r : [];
		let s = 0;
		for (let o = 0, a = i.length; o < a; ++o) {
			const a = i[o];
			r[s++] = 1 === a.length && a[0] === e ? [] : gr(t, e, a, n, r[s]), e = a[a.length - 1]
		}
		return r.length = s, r
	}

	function fr(t, e, i, n) {
		let r = 0,
			s = t[i - n],
			o = t[i - n + 1];
		for (; e < i; e += n) {
			const i = t[e],
				n = t[e + 1];
			r += o * i - s * n, s = i, o = n
		}
		return r / 2
	}

	function mr(t, e, i, n) {
		let r = 0;
		for (let s = 0, o = i.length; s < o; ++s) {
			const o = i[s];
			r += fr(t, e, o, n), e = o
		}
		return r
	}
	class _r extends Vn {
		constructor(t, e) {
			super(), this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, void 0 === e || Array.isArray(t[0]) ? this.setCoordinates(t, e) : this.setFlatCoordinates(e, t)
		}
		clone() {
			return new _r(this.flatCoordinates.slice(), this.layout)
		}
		closestPointXY(t, e, i, n) {
			return n < He(this.getExtent(), t, e) ? n : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(nr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), sr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, !0, t, e, i, n))
		}
		getArea() {
			return fr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
		}
		getCoordinates() {
			return dr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
		}
		getSimplifiedGeometryInternal(t) {
			const e = [];
			return e.length = ar(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, 0), new _r(e, "XY")
		}
		getType() {
			return "LinearRing"
		}
		intersectsExtent(t) {
			return !1
		}
		setCoordinates(t, e) {
			this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Zn(this.flatCoordinates, 0, t, this.stride), this.changed()
		}
	}
	var yr = _r;

	function xr(t, e, i, n, r) {
		let s;
		for (e += n; e < i; e += n)
			if (s = r(t.slice(e - n, e), t.slice(e, e + n)), s) return s;
		return !1
	}

	function vr(t, e, i, n, r, s, o) {
		let a, l;
		const h = (i - e) / n;
		if (1 === h) a = e;
		else if (2 === h) a = e, l = r;
		else if (0 !== h) {
			let s = t[e],
				o = t[e + 1],
				h = 0;
			const u = [0];
			for (let r = e + n; r < i; r += n) {
				const e = t[r],
					i = t[r + 1];
				h += Math.sqrt((e - s) * (e - s) + (i - o) * (i - o)), u.push(h), s = e, o = i
			}
			const c = r * h,
				d = function(t, e, i) {
					let n, r;
					i = i || ut;
					let s = 0,
						o = t.length,
						a = !1;
					for (; s < o;) n = s + (o - s >> 1), r = +i(t[n], e), r < 0 ? s = n + 1 : (o = n, a = !r);
					return a ? s : ~s
				}(u, c);
			d < 0 ? (l = (c - u[-d - 2]) / (u[-d - 1] - u[-d - 2]), a = e + (-d - 2) * n) : a = e + d * n
		}
		o = o > 1 ? o : 2, s = s || new Array(o);
		for (let e = 0; e < o; ++e) s[e] = void 0 === a ? NaN : void 0 === l ? t[a + e] : R(t[a + e], t[a + n + e], l);
		return s
	}

	function wr(t, e, i, n, r, s) {
		if (i == e) return null;
		let o;
		if (r < t[e + n - 1]) return s ? (o = t.slice(e, e + n), o[n - 1] = r, o) : null;
		if (t[i - 1] < r) return s ? (o = t.slice(i - n, i), o[n - 1] = r, o) : null;
		if (r == t[e + n - 1]) return t.slice(e, e + n);
		let a = e / n,
			l = i / n;
		for (; a < l;) {
			const e = a + l >> 1;
			r < t[(e + 1) * n - 1] ? l = e : a = e + 1
		}
		const h = t[a * n - 1];
		if (r == h) return t.slice((a - 1) * n, (a - 1) * n + n);
		const u = (r - h) / (t[(a + 1) * n - 1] - h);
		o = [];
		for (let e = 0; e < n - 1; ++e) o.push(R(t[(a - 1) * n + e], t[a * n + e], u));
		return o.push(r), o
	}

	function br(t, e, i, n, r) {
		return !di(r, (function(r) {
			return !Sr(t, e, i, n, r[0], r[1])
		}))
	}

	function Sr(t, e, i, n, r, s) {
		let o = 0,
			a = t[i - n],
			l = t[i - n + 1];
		for (; e < i; e += n) {
			const i = t[e],
				n = t[e + 1];
			l <= s ? n > s && (i - a) * (s - l) - (r - a) * (n - l) > 0 && o++ : n <= s && (i - a) * (s - l) - (r - a) * (n - l) < 0 && o--, a = i, l = n
		}
		return 0 !== o
	}

	function Er(t, e, i, n, r, s) {
		if (0 === i.length) return !1;
		if (!Sr(t, e, i[0], n, r, s)) return !1;
		for (let e = 1, o = i.length; e < o; ++e)
			if (Sr(t, i[e - 1], i[e], n, r, s)) return !1;
		return !0
	}

	function Cr(t, e, i, n, r) {
		const s = ui([1 / 0, 1 / 0, -1 / 0, -1 / 0], t, e, i, n);
		return !!Ci(r, s) && (!!Qe(r, s) || (s[0] >= r[0] && s[2] <= r[2] || (s[1] >= r[1] && s[3] <= r[3] || xr(t, e, i, n, (function(t, e) {
			return function(t, e, i) {
				let n = !1;
				const r = ei(t, e),
					s = ei(t, i);
				if (r === qe.INTERSECTING || s === qe.INTERSECTING) n = !0;
				else {
					const o = t[0],
						a = t[1],
						l = t[2],
						h = t[3],
						u = e[0],
						c = e[1],
						d = i[0],
						g = i[1],
						p = (g - c) / (d - u);
					let f, m;
					s & qe.ABOVE && !(r & qe.ABOVE) && (f = d - (g - h) / p, n = f >= o && f <= l), n || !(s & qe.RIGHT) || r & qe.RIGHT || (m = g - (d - l) * p, n = m >= a && m <= h), n || !(s & qe.BELOW) || r & qe.BELOW || (f = d - (g - a) / p, n = f >= o && f <= l), n || !(s & qe.LEFT) || r & qe.LEFT || (m = g - (d - o) * p, n = m >= a && m <= h)
				}
				return n
			}(r, t, e)
		})))))
	}

	function Tr(t, e, i, n, r) {
		return !!Cr(t, e, i, n, r) || (!!Sr(t, e, i, n, r[0], r[1]) || (!!Sr(t, e, i, n, r[0], r[3]) || (!!Sr(t, e, i, n, r[2], r[1]) || !!Sr(t, e, i, n, r[2], r[3]))))
	}

	function Pr(t, e, i, n, r) {
		if (!Tr(t, e, i[0], n, r)) return !1;
		if (1 === i.length) return !0;
		for (let e = 1, s = i.length; e < s; ++e)
			if (br(t, i[e - 1], i[e], n, r) && !Cr(t, i[e - 1], i[e], n, r)) return !1;
		return !0
	}

	function Rr(t, e, i, n) {
		let r = t[e],
			s = t[e + 1],
			o = 0;
		for (let a = e + n; a < i; a += n) {
			const e = t[a],
				i = t[a + 1];
			o += Math.sqrt((e - r) * (e - r) + (i - s) * (i - s)), r = e, s = i
		}
		return o
	}
	class Fr extends Vn {
		constructor(t, e) {
			super(), this.flatMidpoint_ = null, this.flatMidpointRevision_ = -1, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, void 0 === e || Array.isArray(t[0]) ? this.setCoordinates(t, e) : this.setFlatCoordinates(e, t)
		}
		appendCoordinate(t) {
			gt(this.flatCoordinates, t), this.changed()
		}
		clone() {
			const t = new Fr(this.flatCoordinates.slice(), this.layout);
			return t.applyProperties(this), t
		}
		closestPointXY(t, e, i, n) {
			return n < He(this.getExtent(), t, e) ? n : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(nr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), sr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, this.maxDelta_, !1, t, e, i, n))
		}
		forEachSegment(t) {
			return xr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t)
		}
		getCoordinateAtM(t, e) {
			return "XYM" != this.layout && "XYZM" != this.layout ? null : (e = void 0 !== e && e, wr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e))
		}
		getCoordinates() {
			return dr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
		}
		getCoordinateAt(t, e) {
			return vr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, this.stride)
		}
		getLength() {
			return Rr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
		}
		getFlatMidpoint() {
			return this.flatMidpointRevision_ != this.getRevision() && (this.flatMidpoint_ = this.getCoordinateAt(.5, this.flatMidpoint_ ?? void 0), this.flatMidpointRevision_ = this.getRevision()), this.flatMidpoint_
		}
		getSimplifiedGeometryInternal(t) {
			const e = [];
			return e.length = ar(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t, e, 0), new Fr(e, "XY")
		}
		getType() {
			return "LineString"
		}
		intersectsExtent(t) {
			return Cr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride, t)
		}
		setCoordinates(t, e) {
			this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Zn(this.flatCoordinates, 0, t, this.stride), this.changed()
		}
	}
	var Mr = Fr;
	class Ir extends Vn {
		constructor(t, e, i) {
			if (super(), this.ends_ = [], this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, Array.isArray(t[0])) this.setCoordinates(t, e);
			else if (void 0 !== e && i) this.setFlatCoordinates(e, t), this.ends_ = i;
			else {
				const e = t,
					i = [],
					n = [];
				for (let t = 0, r = e.length; t < r; ++t) {
					gt(i, e[t].getFlatCoordinates()), n.push(i.length)
				}
				const r = 0 === e.length ? this.getLayout() : e[0].getLayout();
				this.setFlatCoordinates(r, i), this.ends_ = n
			}
		}
		appendLineString(t) {
			gt(this.flatCoordinates, t.getFlatCoordinates().slice()), this.ends_.push(this.flatCoordinates.length), this.changed()
		}
		clone() {
			const t = new Ir(this.flatCoordinates.slice(), this.layout, this.ends_.slice());
			return t.applyProperties(this), t
		}
		closestPointXY(t, e, i, n) {
			return n < He(this.getExtent(), t, e) ? n : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(rr(this.flatCoordinates, 0, this.ends_, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), or(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !1, t, e, i, n))
		}
		getCoordinateAtM(t, e, i) {
			return "XYM" != this.layout && "XYZM" != this.layout || 0 === this.flatCoordinates.length ? null : (e = void 0 !== e && e, i = void 0 !== i && i, function(t, e, i, n, r, s, o) {
				if (o) return wr(t, e, i[i.length - 1], n, r, s);
				let a;
				if (r < t[n - 1]) return s ? (a = t.slice(0, n), a[n - 1] = r, a) : null;
				if (t[t.length - 1] < r) return s ? (a = t.slice(t.length - n), a[n - 1] = r, a) : null;
				for (let s = 0, o = i.length; s < o; ++s) {
					const o = i[s];
					if (e != o) {
						if (r < t[e + n - 1]) return null;
						if (r <= t[o - 1]) return wr(t, e, o, n, r, !1);
						e = o
					}
				}
				return null
			}(this.flatCoordinates, 0, this.ends_, this.stride, t, e, i))
		}
		getCoordinates() {
			return gr(this.flatCoordinates, 0, this.ends_, this.stride)
		}
		getEnds() {
			return this.ends_
		}
		getLineString(t) {
			return t < 0 || this.ends_.length <= t ? null : new Mr(this.flatCoordinates.slice(0 === t ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout)
		}
		getLineStrings() {
			const t = this.flatCoordinates,
				e = this.ends_,
				i = this.layout,
				n = [];
			let r = 0;
			for (let s = 0, o = e.length; s < o; ++s) {
				const o = e[s],
					a = new Mr(t.slice(r, o), i);
				n.push(a), r = o
			}
			return n
		}
		getFlatMidpoints() {
			const t = [],
				e = this.flatCoordinates;
			let i = 0;
			const n = this.ends_,
				r = this.stride;
			for (let s = 0, o = n.length; s < o; ++s) {
				const o = n[s];
				gt(t, vr(e, i, o, r, .5)), i = o
			}
			return t
		}
		getSimplifiedGeometryInternal(t) {
			const e = [],
				i = [];
			return e.length = lr(this.flatCoordinates, 0, this.ends_, this.stride, t, e, 0, i), new Ir(e, "XY", i)
		}
		getType() {
			return "MultiLineString"
		}
		intersectsExtent(t) {
			return function(t, e, i, n, r) {
				for (let s = 0, o = i.length; s < o; ++s) {
					if (Cr(t, e, i[s], n, r)) return !0;
					e = i[s]
				}
				return !1
			}(this.flatCoordinates, 0, this.ends_, this.stride, t)
		}
		setCoordinates(t, e) {
			this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []);
			const i = Yn(this.flatCoordinates, 0, t, this.stride, this.ends_);
			this.flatCoordinates.length = 0 === i.length ? 0 : i[i.length - 1], this.changed()
		}
	}
	var Lr = Ir;
	class kr extends Vn {
		constructor(t, e) {
			super(), this.setCoordinates(t, e)
		}
		clone() {
			const t = new kr(this.flatCoordinates.slice(), this.layout);
			return t.applyProperties(this), t
		}
		closestPointXY(t, e, i, n) {
			const r = this.flatCoordinates,
				s = E(t, e, r[0], r[1]);
			if (s < n) {
				const t = this.stride;
				for (let e = 0; e < t; ++e) i[e] = r[e];
				return i.length = t, s
			}
			return n
		}
		getCoordinates() {
			return this.flatCoordinates.slice()
		}
		computeExtent(t) {
			return si(this.flatCoordinates, t)
		}
		getType() {
			return "Point"
		}
		intersectsExtent(t) {
			return ti(t, this.flatCoordinates[0], this.flatCoordinates[1])
		}
		setCoordinates(t, e) {
			this.setLayout(e, t, 0), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = qn(this.flatCoordinates, 0, t, this.stride), this.changed()
		}
	}
	var Ar = kr;
	class Dr extends Vn {
		constructor(t, e) {
			super(), e && !Array.isArray(t[0]) ? this.setFlatCoordinates(e, t) : this.setCoordinates(t, e)
		}
		appendPoint(t) {
			gt(this.flatCoordinates, t.getFlatCoordinates()), this.changed()
		}
		clone() {
			const t = new Dr(this.flatCoordinates.slice(), this.layout);
			return t.applyProperties(this), t
		}
		closestPointXY(t, e, i, n) {
			if (n < He(this.getExtent(), t, e)) return n;
			const r = this.flatCoordinates,
				s = this.stride;
			for (let o = 0, a = r.length; o < a; o += s) {
				const a = E(t, e, r[o], r[o + 1]);
				if (a < n) {
					n = a;
					for (let t = 0; t < s; ++t) i[t] = r[o + t];
					i.length = s
				}
			}
			return n
		}
		getCoordinates() {
			return dr(this.flatCoordinates, 0, this.flatCoordinates.length, this.stride)
		}
		getPoint(t) {
			const e = this.flatCoordinates.length / this.stride;
			return t < 0 || e <= t ? null : new Ar(this.flatCoordinates.slice(t * this.stride, (t + 1) * this.stride), this.layout)
		}
		getPoints() {
			const t = this.flatCoordinates,
				e = this.layout,
				i = this.stride,
				n = [];
			for (let r = 0, s = t.length; r < s; r += i) {
				const s = new Ar(t.slice(r, r + i), e);
				n.push(s)
			}
			return n
		}
		getType() {
			return "MultiPoint"
		}
		intersectsExtent(t) {
			const e = this.flatCoordinates,
				i = this.stride;
			for (let n = 0, r = e.length; n < r; n += i) {
				if (ti(t, e[n], e[n + 1])) return !0
			}
			return !1
		}
		setCoordinates(t, e) {
			this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Zn(this.flatCoordinates, 0, t, this.stride), this.changed()
		}
	}
	var Or = Dr;

	function zr(t, e, i, n, r, s, o) {
		let a, l, h, u, c, d, g;
		const p = r[s + 1],
			f = [];
		for (let r = 0, s = i.length; r < s; ++r) {
			const s = i[r];
			for (u = t[s - n], d = t[s - n + 1], a = e; a < s; a += n) c = t[a], g = t[a + 1], (p <= d && g <= p || d <= p && p <= g) && (h = (p - d) / (g - d) * (c - u) + u, f.push(h)), u = c, d = g
		}
		let m = NaN,
			_ = -1 / 0;
		for (f.sort(ut), u = f[0], a = 1, l = f.length; a < l; ++a) {
			c = f[a];
			const r = Math.abs(c - u);
			r > _ && (h = (u + c) / 2, Er(t, e, i, n, h, p) && (m = h, _ = r)), u = c
		}
		return isNaN(m) && (m = r[s]), o ? (o.push(m, p, _), o) : [m, p, _]
	}

	function Gr(t, e, i, n, r) {
		let s = [];
		for (let o = 0, a = i.length; o < a; ++o) {
			const a = i[o];
			s = zr(t, e, a, n, r, 2 * o, s), e = a[a.length - 1]
		}
		return s
	}

	function Nr(t, e, i, n) {
		for (; e < i - n;) {
			for (let r = 0; r < n; ++r) {
				const s = t[e + r];
				t[e + r] = t[i - n + r], t[i - n + r] = s
			}
			e += n, i -= n
		}
	}

	function jr(t, e, i, n) {
		let r = 0,
			s = t[i - n],
			o = t[i - n + 1];
		for (; e < i; e += n) {
			const i = t[e],
				n = t[e + 1];
			r += (i - s) * (n + o), s = i, o = n
		}
		return 0 === r ? void 0 : r > 0
	}

	function Ur(t, e, i, n, r) {
		r = void 0 !== r && r;
		for (let s = 0, o = i.length; s < o; ++s) {
			const o = i[s],
				a = jr(t, e, o, n);
			if (0 === s) {
				if (r && a || !r && !a) return !1
			} else if (r && !a || !r && a) return !1;
			e = o
		}
		return !0
	}

	function Br(t, e, i, n, r) {
		for (let s = 0, o = i.length; s < o; ++s) {
			const o = i[s];
			if (!Ur(t, e, o, n, r)) return !1;
			o.length && (e = o[o.length - 1])
		}
		return !0
	}

	function $r(t, e, i, n, r) {
		r = void 0 !== r && r;
		for (let s = 0, o = i.length; s < o; ++s) {
			const o = i[s],
				a = jr(t, e, o, n);
			(0 === s ? r && a || !r && !a : r && !a || !r && a) && Nr(t, e, o, n), e = o
		}
		return e
	}

	function Vr(t, e, i, n, r) {
		for (let s = 0, o = i.length; s < o; ++s) e = $r(t, e, i[s], n, r);
		return e
	}

	function Xr(t, e) {
		const i = [];
		let n, r = 0,
			s = 0;
		for (let o = 0, a = e.length; o < a; ++o) {
			const a = e[o],
				l = jr(t, r, a, 2);
			if (void 0 === n && (n = l), l === n) i.push(e.slice(s, o + 1));
			else {
				if (0 === i.length) continue;
				i[i.length - 1].push(e[s])
			}
			s = o + 1, r = a
		}
		return i
	}
	class Wr extends Vn {
		constructor(t, e, i) {
			super(), this.ends_ = [], this.flatInteriorPointRevision_ = -1, this.flatInteriorPoint_ = null, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, this.orientedRevision_ = -1, this.orientedFlatCoordinates_ = null, void 0 !== e && i ? (this.setFlatCoordinates(e, t), this.ends_ = i) : this.setCoordinates(t, e)
		}
		appendLinearRing(t) {
			this.flatCoordinates ? gt(this.flatCoordinates, t.getFlatCoordinates()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed()
		}
		clone() {
			const t = new Wr(this.flatCoordinates.slice(), this.layout, this.ends_.slice());
			return t.applyProperties(this), t
		}
		closestPointXY(t, e, i, n) {
			return n < He(this.getExtent(), t, e) ? n : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(rr(this.flatCoordinates, 0, this.ends_, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), or(this.flatCoordinates, 0, this.ends_, this.stride, this.maxDelta_, !0, t, e, i, n))
		}
		containsXY(t, e) {
			return Er(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, e)
		}
		getArea() {
			return mr(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride)
		}
		getCoordinates(t) {
			let e;
			return void 0 !== t ? (e = this.getOrientedFlatCoordinates().slice(), $r(e, 0, this.ends_, this.stride, t)) : e = this.flatCoordinates, gr(e, 0, this.ends_, this.stride)
		}
		getEnds() {
			return this.ends_
		}
		getFlatInteriorPoint() {
			if (this.flatInteriorPointRevision_ != this.getRevision()) {
				const t = mi(this.getExtent());
				this.flatInteriorPoint_ = zr(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t, 0), this.flatInteriorPointRevision_ = this.getRevision()
			}
			return this.flatInteriorPoint_
		}
		getInteriorPoint() {
			return new Ar(this.getFlatInteriorPoint(), "XYM")
		}
		getLinearRingCount() {
			return this.ends_.length
		}
		getLinearRing(t) {
			return t < 0 || this.ends_.length <= t ? null : new yr(this.flatCoordinates.slice(0 === t ? 0 : this.ends_[t - 1], this.ends_[t]), this.layout)
		}
		getLinearRings() {
			const t = this.layout,
				e = this.flatCoordinates,
				i = this.ends_,
				n = [];
			let r = 0;
			for (let s = 0, o = i.length; s < o; ++s) {
				const o = i[s],
					a = new yr(e.slice(r, o), t);
				n.push(a), r = o
			}
			return n
		}
		getOrientedFlatCoordinates() {
			if (this.orientedRevision_ != this.getRevision()) {
				const t = this.flatCoordinates;
				Ur(t, 0, this.ends_, this.stride) ? this.orientedFlatCoordinates_ = t : (this.orientedFlatCoordinates_ = t.slice(), this.orientedFlatCoordinates_.length = $r(this.orientedFlatCoordinates_, 0, this.ends_, this.stride)), this.orientedRevision_ = this.getRevision()
			}
			return this.orientedFlatCoordinates_
		}
		getSimplifiedGeometryInternal(t) {
			const e = [],
				i = [];
			return e.length = cr(this.flatCoordinates, 0, this.ends_, this.stride, Math.sqrt(t), e, 0, i), new Wr(e, "XY", i)
		}
		getType() {
			return "Polygon"
		}
		intersectsExtent(t) {
			return Pr(this.getOrientedFlatCoordinates(), 0, this.ends_, this.stride, t)
		}
		setCoordinates(t, e) {
			this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []);
			const i = Yn(this.flatCoordinates, 0, t, this.stride, this.ends_);
			this.flatCoordinates.length = 0 === i.length ? 0 : i[i.length - 1], this.changed()
		}
	}

	function qr(t) {
		if (Ti(t)) throw new Error("Cannot create polygon from empty extent");
		const e = t[0],
			i = t[1],
			n = t[2],
			r = t[3],
			s = [e, i, e, r, n, r, n, i, e, i];
		return new Wr(s, "XY", [s.length])
	}

	function Zr(t, e, i) {
		e = e || 32;
		const n = t.getStride(),
			r = t.getLayout(),
			s = t.getCenter(),
			o = n * (e + 1),
			a = new Array(o);
		for (let t = 0; t < o; t += n) {
			a[t] = 0, a[t + 1] = 0;
			for (let e = 2; e < n; e++) a[t + e] = s[e]
		}
		const l = [a.length],
			h = new Wr(a, r, l);
		return function(t, e, i, n) {
			const r = t.getFlatCoordinates(),
				s = t.getStride(),
				o = r.length / s - 1,
				a = n || 0;
			for (let t = 0; t <= o; ++t) {
				const n = t * s,
					l = a + 2 * P(t, o) * Math.PI / o;
				r[n] = e[0] + i * Math.cos(l), r[n + 1] = e[1] + i * Math.sin(l)
			}
			t.changed()
		}(h, s, t.getRadius(), i), h
	}

	function Yr(t, e, i, n) {
		const r = [];
		let s = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
		for (let o = 0, a = i.length; o < a; ++o) {
			const a = i[o];
			s = oi(t, e, a[0], n), r.push((s[0] + s[2]) / 2, (s[1] + s[3]) / 2), e = a[a.length - 1]
		}
		return r
	}
	class Kr extends Vn {
		constructor(t, e, i) {
			if (super(), this.endss_ = [], this.flatInteriorPointsRevision_ = -1, this.flatInteriorPoints_ = null, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, this.orientedRevision_ = -1, this.orientedFlatCoordinates_ = null, !i && !Array.isArray(t[0])) {
				const n = t,
					r = [],
					s = [];
				for (let t = 0, e = n.length; t < e; ++t) {
					const e = n[t],
						i = r.length,
						o = e.getEnds();
					for (let t = 0, e = o.length; t < e; ++t) o[t] += i;
					gt(r, e.getFlatCoordinates()), s.push(o)
				}
				e = 0 === n.length ? this.getLayout() : n[0].getLayout(), t = r, i = s
			}
			void 0 !== e && i ? (this.setFlatCoordinates(e, t), this.endss_ = i) : this.setCoordinates(t, e)
		}
		appendPolygon(t) {
			let e;
			if (this.flatCoordinates) {
				const i = this.flatCoordinates.length;
				gt(this.flatCoordinates, t.getFlatCoordinates()), e = t.getEnds().slice();
				for (let t = 0, n = e.length; t < n; ++t) e[t] += i
			} else this.flatCoordinates = t.getFlatCoordinates().slice(), e = t.getEnds().slice(), this.endss_.push();
			this.endss_.push(e), this.changed()
		}
		clone() {
			const t = this.endss_.length,
				e = new Array(t);
			for (let i = 0; i < t; ++i) e[i] = this.endss_[i].slice();
			const i = new Kr(this.flatCoordinates.slice(), this.layout, e);
			return i.applyProperties(this), i
		}
		closestPointXY(t, e, i, n) {
			return n < He(this.getExtent(), t, e) ? n : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(function(t, e, i, n, r) {
				for (let s = 0, o = i.length; s < o; ++s) {
					const o = i[s];
					r = rr(t, e, o, n, r), e = o[o.length - 1]
				}
				return r
			}(this.flatCoordinates, 0, this.endss_, this.stride, 0)), this.maxDeltaRevision_ = this.getRevision()), function(t, e, i, n, r, s, o, a, l, h, u) {
				u = u || [NaN, NaN];
				for (let c = 0, d = i.length; c < d; ++c) {
					const d = i[c];
					h = or(t, e, d, n, r, s, o, a, l, h, u), e = d[d.length - 1]
				}
				return h
			}(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, this.maxDelta_, !0, t, e, i, n))
		}
		containsXY(t, e) {
			return function(t, e, i, n, r, s) {
				if (0 === i.length) return !1;
				for (let o = 0, a = i.length; o < a; ++o) {
					const a = i[o];
					if (Er(t, e, a, n, r, s)) return !0;
					e = a[a.length - 1]
				}
				return !1
			}(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t, e)
		}
		getArea() {
			return function(t, e, i, n) {
				let r = 0;
				for (let s = 0, o = i.length; s < o; ++s) {
					const o = i[s];
					r += mr(t, e, o, n), e = o[o.length - 1]
				}
				return r
			}(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride)
		}
		getCoordinates(t) {
			let e;
			return void 0 !== t ? (e = this.getOrientedFlatCoordinates().slice(), Vr(e, 0, this.endss_, this.stride, t)) : e = this.flatCoordinates, pr(e, 0, this.endss_, this.stride)
		}
		getEndss() {
			return this.endss_
		}
		getFlatInteriorPoints() {
			if (this.flatInteriorPointsRevision_ != this.getRevision()) {
				const t = Yr(this.flatCoordinates, 0, this.endss_, this.stride);
				this.flatInteriorPoints_ = Gr(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t), this.flatInteriorPointsRevision_ = this.getRevision()
			}
			return this.flatInteriorPoints_
		}
		getInteriorPoints() {
			return new Or(this.getFlatInteriorPoints().slice(), "XYM")
		}
		getOrientedFlatCoordinates() {
			if (this.orientedRevision_ != this.getRevision()) {
				const t = this.flatCoordinates;
				Br(t, 0, this.endss_, this.stride) ? this.orientedFlatCoordinates_ = t : (this.orientedFlatCoordinates_ = t.slice(), this.orientedFlatCoordinates_.length = Vr(this.orientedFlatCoordinates_, 0, this.endss_, this.stride)), this.orientedRevision_ = this.getRevision()
			}
			return this.orientedFlatCoordinates_
		}
		getSimplifiedGeometryInternal(t) {
			const e = [],
				i = [];
			return e.length = function(t, e, i, n, r, s, o, a) {
				for (let l = 0, h = i.length; l < h; ++l) {
					const h = i[l],
						u = [];
					o = cr(t, e, h, n, r, s, o, u), a.push(u), e = h[h.length - 1]
				}
				return o
			}(this.flatCoordinates, 0, this.endss_, this.stride, Math.sqrt(t), e, 0, i), new Kr(e, "XY", i)
		}
		getPolygon(t) {
			if (t < 0 || this.endss_.length <= t) return null;
			let e;
			if (0 === t) e = 0;
			else {
				const i = this.endss_[t - 1];
				e = i[i.length - 1]
			}
			const i = this.endss_[t].slice(),
				n = i[i.length - 1];
			if (0 !== e)
				for (let t = 0, n = i.length; t < n; ++t) i[t] -= e;
			return new Wr(this.flatCoordinates.slice(e, n), this.layout, i)
		}
		getPolygons() {
			const t = this.layout,
				e = this.flatCoordinates,
				i = this.endss_,
				n = [];
			let r = 0;
			for (let s = 0, o = i.length; s < o; ++s) {
				const o = i[s].slice(),
					a = o[o.length - 1];
				if (0 !== r)
					for (let t = 0, e = o.length; t < e; ++t) o[t] -= r;
				const l = new Wr(e.slice(r, a), t, o);
				n.push(l), r = a
			}
			return n
		}
		getType() {
			return "MultiPolygon"
		}
		intersectsExtent(t) {
			return function(t, e, i, n, r) {
				for (let s = 0, o = i.length; s < o; ++s) {
					const o = i[s];
					if (Pr(t, e, o, n, r)) return !0;
					e = o[o.length - 1]
				}
				return !1
			}(this.getOrientedFlatCoordinates(), 0, this.endss_, this.stride, t)
		}
		setCoordinates(t, e) {
			this.setLayout(e, t, 3), this.flatCoordinates || (this.flatCoordinates = []);
			const i = Kn(this.flatCoordinates, 0, t, this.stride, this.endss_);
			if (0 === i.length) this.flatCoordinates.length = 0;
			else {
				const t = i[i.length - 1];
				this.flatCoordinates.length = 0 === t.length ? 0 : t[t.length - 1]
			}
			this.changed()
		}
	}
	var Hr = Kr;
	const Jr = [1, 0, 0, 1, 0, 0];
	class Qr {
		constructor(t, e, i, n, r, s) {
			this.styleFunction, this.extent_, this.id_ = s, this.type_ = t, this.flatCoordinates_ = e, this.flatInteriorPoints_ = null, this.flatMidpoints_ = null, this.ends_ = i, this.properties_ = r, this.squaredTolerance_, this.stride_ = n, this.simplifiedGeometry_
		}
		get(t) {
			return this.properties_[t]
		}
		getExtent() {
			return this.extent_ || (this.extent_ = "Point" === this.type_ ? si(this.flatCoordinates_) : oi(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2)), this.extent_
		}
		getFlatInteriorPoint() {
			if (!this.flatInteriorPoints_) {
				const t = mi(this.getExtent());
				this.flatInteriorPoints_ = zr(this.flatCoordinates_, 0, this.ends_, 2, t, 0)
			}
			return this.flatInteriorPoints_
		}
		getFlatInteriorPoints() {
			if (!this.flatInteriorPoints_) {
				const t = Xr(this.flatCoordinates_, this.ends_),
					e = Yr(this.flatCoordinates_, 0, t, 2);
				this.flatInteriorPoints_ = Gr(this.flatCoordinates_, 0, t, 2, e)
			}
			return this.flatInteriorPoints_
		}
		getFlatMidpoint() {
			return this.flatMidpoints_ || (this.flatMidpoints_ = vr(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2, .5)), this.flatMidpoints_
		}
		getFlatMidpoints() {
			if (!this.flatMidpoints_) {
				this.flatMidpoints_ = [];
				const t = this.flatCoordinates_;
				let e = 0;
				const i = this.ends_;
				for (let n = 0, r = i.length; n < r; ++n) {
					const r = i[n],
						s = vr(t, e, r, 2, .5);
					gt(this.flatMidpoints_, s), e = r
				}
			}
			return this.flatMidpoints_
		}
		getId() {
			return this.id_
		}
		getOrientedFlatCoordinates() {
			return this.flatCoordinates_
		}
		getGeometry() {
			return this
		}
		getSimplifiedGeometry(t) {
			return this
		}
		simplifyTransformed(t, e) {
			return this
		}
		getProperties() {
			return this.properties_
		}
		getPropertiesInternal() {
			return this.properties_
		}
		getStride() {
			return this.stride_
		}
		getStyleFunction() {
			return this.styleFunction
		}
		getType() {
			return this.type_
		}
		transform(t) {
			const e = (t = yn(t)).getExtent(),
				i = t.getWorldExtent();
			if (e && i) {
				const t = vi(i) / vi(e);
				$e(Jr, i[0], i[3], t, -t, 0, 0, 0), jn(this.flatCoordinates_, 0, this.flatCoordinates_.length, 2, Jr, this.flatCoordinates_)
			}
		}
		applyTransform(t) {
			t(this.flatCoordinates_, this.flatCoordinates_, this.stride_)
		}
		clone() {
			return new Qr(this.type_, this.flatCoordinates_.slice(), this.ends_.slice(), this.stride_, Object.assign({}, this.properties_), this.id_)
		}
		getEnds() {
			return this.ends_
		}
		enableSimplifyTransformed() {
			return this.simplifyTransformed = yt(((t, e) => {
				if (t === this.squaredTolerance_) return this.simplifiedGeometry_;
				this.simplifiedGeometry_ = this.clone(), e && this.simplifiedGeometry_.applyTransform(e);
				const i = this.simplifiedGeometry_.getFlatCoordinates();
				let n;
				switch (this.type_) {
					case "LineString":
						i.length = ar(i, 0, this.simplifiedGeometry_.flatCoordinates_.length, this.simplifiedGeometry_.stride_, t, i, 0), n = [i.length];
						break;
					case "MultiLineString":
						n = [], i.length = lr(i, 0, this.simplifiedGeometry_.ends_, this.simplifiedGeometry_.stride_, t, i, 0, n);
						break;
					case "Polygon":
						n = [], i.length = cr(i, 0, this.simplifiedGeometry_.ends_, this.simplifiedGeometry_.stride_, Math.sqrt(t), i, 0, n)
				}
				return n && (this.simplifiedGeometry_ = new Qr(this.type_, i, n, 2, this.properties_, this.id_)), this.squaredTolerance_ = t, this.simplifiedGeometry_
			})), this
		}
	}
	Qr.prototype.getFlatCoordinates = Qr.prototype.getOrientedFlatCoordinates;
	var ts = Qr;
	class es {
		constructor(t) {
			t = t || {}, this.color_ = void 0 !== t.color ? t.color : null, this.lineCap_ = t.lineCap, this.lineDash_ = void 0 !== t.lineDash ? t.lineDash : null, this.lineDashOffset_ = t.lineDashOffset, this.lineJoin_ = t.lineJoin, this.miterLimit_ = t.miterLimit, this.width_ = t.width
		}
		clone() {
			const t = this.getColor();
			return new es({
				color: Array.isArray(t) ? t.slice() : t || void 0,
				lineCap: this.getLineCap(),
				lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0,
				lineDashOffset: this.getLineDashOffset(),
				lineJoin: this.getLineJoin(),
				miterLimit: this.getMiterLimit(),
				width: this.getWidth()
			})
		}
		getColor() {
			return this.color_
		}
		getLineCap() {
			return this.lineCap_
		}
		getLineDash() {
			return this.lineDash_
		}
		getLineDashOffset() {
			return this.lineDashOffset_
		}
		getLineJoin() {
			return this.lineJoin_
		}
		getMiterLimit() {
			return this.miterLimit_
		}
		getWidth() {
			return this.width_
		}
		setColor(t) {
			this.color_ = t
		}
		setLineCap(t) {
			this.lineCap_ = t
		}
		setLineDash(t) {
			this.lineDash_ = t
		}
		setLineDashOffset(t) {
			this.lineDashOffset_ = t
		}
		setLineJoin(t) {
			this.lineJoin_ = t
		}
		setMiterLimit(t) {
			this.miterLimit_ = t
		}
		setWidth(t) {
			this.width_ = t
		}
	}
	var is = es;
	class ns {
		constructor(t) {
			t = t || {}, this.geometry_ = null, this.geometryFunction_ = as, void 0 !== t.geometry && this.setGeometry(t.geometry), this.fill_ = void 0 !== t.fill ? t.fill : null, this.image_ = void 0 !== t.image ? t.image : null, this.renderer_ = void 0 !== t.renderer ? t.renderer : null, this.hitDetectionRenderer_ = void 0 !== t.hitDetectionRenderer ? t.hitDetectionRenderer : null, this.stroke_ = void 0 !== t.stroke ? t.stroke : null, this.text_ = void 0 !== t.text ? t.text : null, this.zIndex_ = t.zIndex
		}
		clone() {
			let t = this.getGeometry();
			return t && "object" == typeof t && (t = t.clone()), new ns({
				geometry: t ?? void 0,
				fill: this.getFill() ? this.getFill().clone() : void 0,
				image: this.getImage() ? this.getImage().clone() : void 0,
				renderer: this.getRenderer() ?? void 0,
				stroke: this.getStroke() ? this.getStroke().clone() : void 0,
				text: this.getText() ? this.getText().clone() : void 0,
				zIndex: this.getZIndex()
			})
		}
		getRenderer() {
			return this.renderer_
		}
		setRenderer(t) {
			this.renderer_ = t
		}
		setHitDetectionRenderer(t) {
			this.hitDetectionRenderer_ = t
		}
		getHitDetectionRenderer() {
			return this.hitDetectionRenderer_
		}
		getGeometry() {
			return this.geometry_
		}
		getGeometryFunction() {
			return this.geometryFunction_
		}
		getFill() {
			return this.fill_
		}
		setFill(t) {
			this.fill_ = t
		}
		getImage() {
			return this.image_
		}
		setImage(t) {
			this.image_ = t
		}
		getStroke() {
			return this.stroke_
		}
		setStroke(t) {
			this.stroke_ = t
		}
		getText() {
			return this.text_
		}
		setText(t) {
			this.text_ = t
		}
		getZIndex() {
			return this.zIndex_
		}
		setGeometry(t) {
			"function" == typeof t ? this.geometryFunction_ = t : "string" == typeof t ? this.geometryFunction_ = function(e) {
				return e.get(t)
			} : t ? void 0 !== t && (this.geometryFunction_ = function() {
				return t
			}) : this.geometryFunction_ = as, this.geometry_ = t
		}
		setZIndex(t) {
			this.zIndex_ = t
		}
	}
	let rs = null;

	function ss(t, e) {
		if (!rs) {
			const t = new be({
					color: "rgba(255,255,255,0.4)"
				}),
				e = new is({
					color: "#3399CC",
					width: 1.25
				});
			rs = [new ns({
				image: new ve({
					fill: t,
					stroke: e,
					radius: 5
				}),
				fill: t,
				stroke: e
			})]
		}
		return rs
	}

	function os() {
		const t = {},
			e = [255, 255, 255, 1],
			i = [0, 153, 255, 1];
		return t.Polygon = [new ns({
			fill: new be({
				color: [255, 255, 255, .5]
			})
		})], t.MultiPolygon = t.Polygon, t.LineString = [new ns({
			stroke: new is({
				color: e,
				width: 5
			})
		}), new ns({
			stroke: new is({
				color: i,
				width: 3
			})
		})], t.MultiLineString = t.LineString, t.Circle = t.Polygon.concat(t.LineString), t.Point = [new ns({
			image: new ve({
				radius: 6,
				fill: new be({
					color: i
				}),
				stroke: new is({
					color: e,
					width: 1.5
				})
			}),
			zIndex: 1 / 0
		})], t.MultiPoint = t.Point, t.GeometryCollection = t.Polygon.concat(t.LineString, t.Point), t
	}

	function as(t) {
		return t.getGeometry()
	}
	var ls = ns;
	class hs {
		constructor(t) {
			t = t || {}, this.font_ = t.font, this.rotation_ = t.rotation, this.rotateWithView_ = t.rotateWithView, this.scale_ = t.scale, this.scaleArray_ = u(void 0 !== t.scale ? t.scale : 1), this.text_ = t.text, this.textAlign_ = t.textAlign, this.justify_ = t.justify, this.repeat_ = t.repeat, this.textBaseline_ = t.textBaseline, this.fill_ = void 0 !== t.fill ? t.fill : new be({
				color: "#333"
			}), this.maxAngle_ = void 0 !== t.maxAngle ? t.maxAngle : Math.PI / 4, this.placement_ = void 0 !== t.placement ? t.placement : "point", this.overflow_ = !!t.overflow, this.stroke_ = void 0 !== t.stroke ? t.stroke : null, this.offsetX_ = void 0 !== t.offsetX ? t.offsetX : 0, this.offsetY_ = void 0 !== t.offsetY ? t.offsetY : 0, this.backgroundFill_ = t.backgroundFill ? t.backgroundFill : null, this.backgroundStroke_ = t.backgroundStroke ? t.backgroundStroke : null, this.padding_ = void 0 === t.padding ? null : t.padding
		}
		clone() {
			const t = this.getScale();
			return new hs({
				font: this.getFont(),
				placement: this.getPlacement(),
				repeat: this.getRepeat(),
				maxAngle: this.getMaxAngle(),
				overflow: this.getOverflow(),
				rotation: this.getRotation(),
				rotateWithView: this.getRotateWithView(),
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
				padding: this.getPadding() || void 0
			})
		}
		getOverflow() {
			return this.overflow_
		}
		getFont() {
			return this.font_
		}
		getMaxAngle() {
			return this.maxAngle_
		}
		getPlacement() {
			return this.placement_
		}
		getRepeat() {
			return this.repeat_
		}
		getOffsetX() {
			return this.offsetX_
		}
		getOffsetY() {
			return this.offsetY_
		}
		getFill() {
			return this.fill_
		}
		getRotateWithView() {
			return this.rotateWithView_
		}
		getRotation() {
			return this.rotation_
		}
		getScale() {
			return this.scale_
		}
		getScaleArray() {
			return this.scaleArray_
		}
		getStroke() {
			return this.stroke_
		}
		getText() {
			return this.text_
		}
		getTextAlign() {
			return this.textAlign_
		}
		getJustify() {
			return this.justify_
		}
		getTextBaseline() {
			return this.textBaseline_
		}
		getBackgroundFill() {
			return this.backgroundFill_
		}
		getBackgroundStroke() {
			return this.backgroundStroke_
		}
		getPadding() {
			return this.padding_
		}
		setOverflow(t) {
			this.overflow_ = t
		}
		setFont(t) {
			this.font_ = t
		}
		setMaxAngle(t) {
			this.maxAngle_ = t
		}
		setOffsetX(t) {
			this.offsetX_ = t
		}
		setOffsetY(t) {
			this.offsetY_ = t
		}
		setPlacement(t) {
			this.placement_ = t
		}
		setRepeat(t) {
			this.repeat_ = t
		}
		setRotateWithView(t) {
			this.rotateWithView_ = t
		}
		setFill(t) {
			this.fill_ = t
		}
		setRotation(t) {
			this.rotation_ = t
		}
		setScale(t) {
			this.scale_ = t, this.scaleArray_ = u(void 0 !== t ? t : 1)
		}
		setStroke(t) {
			this.stroke_ = t
		}
		setText(t) {
			this.text_ = t
		}
		setTextAlign(t) {
			this.textAlign_ = t
		}
		setJustify(t) {
			this.justify_ = t
		}
		setTextBaseline(t) {
			this.textBaseline_ = t
		}
		setBackgroundFill(t) {
			this.backgroundFill_ = t
		}
		setBackgroundStroke(t) {
			this.backgroundStroke_ = t
		}
		setPadding(t) {
			this.padding_ = t
		}
	}
	var us = hs;
	class cs {
		constructor(t, e, i, n) {
			this.minX = t, this.maxX = e, this.minY = i, this.maxY = n
		}
		contains(t) {
			return this.containsXY(t[1], t[2])
		}
		containsTileRange(t) {
			return this.minX <= t.minX && t.maxX <= this.maxX && this.minY <= t.minY && t.maxY <= this.maxY
		}
		containsXY(t, e) {
			return this.minX <= t && t <= this.maxX && this.minY <= e && e <= this.maxY
		}
		equals(t) {
			return this.minX == t.minX && this.minY == t.minY && this.maxX == t.maxX && this.maxY == t.maxY
		}
		extend(t) {
			t.minX < this.minX && (this.minX = t.minX), t.maxX > this.maxX && (this.maxX = t.maxX), t.minY < this.minY && (this.minY = t.minY), t.maxY > this.maxY && (this.maxY = t.maxY)
		}
		getHeight() {
			return this.maxY - this.minY + 1
		}
		getSize() {
			return [this.getWidth(), this.getHeight()]
		}
		getWidth() {
			return this.maxX - this.minX + 1
		}
		intersects(t) {
			return this.minX <= t.maxX && this.maxX >= t.minX && this.minY <= t.maxY && this.maxY >= t.minY
		}
	}

	function ds(t, e, i, n, r) {
		return void 0 !== r ? (r.minX = t, r.maxX = e, r.minY = i, r.maxY = n, r) : new cs(t, e, i, n)
	}
	var gs = cs;
	const ps = 42,
		fs = 256;

	function ms(t, e, i, n) {
		return void 0 !== n ? (n[0] = t, n[1] = e, n[2] = i, n) : [t, e, i]
	}

	function _s(t, e, i) {
		return t + "/" + e + "/" + i
	}

	function ys(t) {
		return _s(t[0], t[1], t[2])
	}

	function xs(t) {
		return t.split("/").map(Number)
	}

	function vs(t) {
		return (t[1] << t[0]) + t[2]
	}
	const ws = [0, 0, 0];
	var bs = class {
			constructor(t) {
				let e;
				if (this.minZoom = void 0 !== t.minZoom ? t.minZoom : 0, this.resolutions_ = t.resolutions, Se(function(t, e, i) {
						const n = e || ut;
						return t.every((function(e, r) {
							if (0 === r) return !0;
							const s = n(t[r - 1], e);
							return !(s > 0 || i && 0 === s)
						}))
					}(this.resolutions_, ((t, e) => e - t), !0), "`resolutions` must be sorted in descending order"), !t.origins)
					for (let t = 0, i = this.resolutions_.length - 1; t < i; ++t)
						if (e) {
							if (this.resolutions_[t] / this.resolutions_[t + 1] !== e) {
								e = void 0;
								break
							}
						} else e = this.resolutions_[t] / this.resolutions_[t + 1];
				this.zoomFactor_ = e, this.maxZoom = this.resolutions_.length - 1, this.origin_ = void 0 !== t.origin ? t.origin : null, this.origins_ = null, void 0 !== t.origins && (this.origins_ = t.origins, Se(this.origins_.length == this.resolutions_.length, "Number of `origins` and `resolutions` must be equal"));
				const i = t.extent;
				void 0 === i || this.origin_ || this.origins_ || (this.origin_ = bi(i)), Se(!this.origin_ && this.origins_ || this.origin_ && !this.origins_, "Either `origin` or `origins` must be configured, never both"), this.tileSizes_ = null, void 0 !== t.tileSizes && (this.tileSizes_ = t.tileSizes, Se(this.tileSizes_.length == this.resolutions_.length, "Number of `tileSizes` and `resolutions` must be equal")), this.tileSize_ = void 0 !== t.tileSize ? t.tileSize : this.tileSizes_ ? null : fs, Se(!this.tileSize_ && this.tileSizes_ || this.tileSize_ && !this.tileSizes_, "Either `tileSize` or `tileSizes` must be configured, never both"), this.extent_ = void 0 !== i ? i : null, this.fullTileRanges_ = null, this.tmpSize_ = [0, 0], this.tmpExtent_ = [0, 0, 0, 0], void 0 !== t.sizes ? this.fullTileRanges_ = t.sizes.map(((t, e) => {
					const n = new gs(Math.min(0, t[0]), Math.max(t[0] - 1, -1), Math.min(0, t[1]), Math.max(t[1] - 1, -1));
					if (i) {
						const t = this.getTileRangeForExtentAndZ(i, e);
						n.minX = Math.max(t.minX, n.minX), n.maxX = Math.min(t.maxX, n.maxX), n.minY = Math.max(t.minY, n.minY), n.maxY = Math.min(t.maxY, n.maxY)
					}
					return n
				})) : i && this.calculateTileRanges_(i)
			}
			forEachTileCoord(t, e, i) {
				const n = this.getTileRangeForExtentAndZ(t, e);
				for (let t = n.minX, r = n.maxX; t <= r; ++t)
					for (let r = n.minY, s = n.maxY; r <= s; ++r) i([e, t, r])
			}
			forEachTileCoordParentTileRange(t, e, i, n) {
				let r, s, o, a = null,
					l = t[0] - 1;
				for (2 === this.zoomFactor_ ? (s = t[1], o = t[2]) : a = this.getTileCoordExtent(t, n); l >= this.minZoom;) {
					if (void 0 !== s && void 0 !== o ? (s = Math.floor(s / 2), o = Math.floor(o / 2), r = ds(s, s, o, o, i)) : r = this.getTileRangeForExtentAndZ(a, l, i), e(l, r)) return !0;
					--l
				}
				return !1
			}
			getExtent() {
				return this.extent_
			}
			getMaxZoom() {
				return this.maxZoom
			}
			getMinZoom() {
				return this.minZoom
			}
			getOrigin(t) {
				return this.origin_ ? this.origin_ : this.origins_[t]
			}
			getResolution(t) {
				return this.resolutions_[t]
			}
			getResolutions() {
				return this.resolutions_
			}
			getTileCoordChildTileRange(t, e, i) {
				if (t[0] < this.maxZoom) {
					if (2 === this.zoomFactor_) {
						const i = 2 * t[1],
							n = 2 * t[2];
						return ds(i, i + 1, n, n + 1, e)
					}
					const n = this.getTileCoordExtent(t, i || this.tmpExtent_);
					return this.getTileRangeForExtentAndZ(n, t[0] + 1, e)
				}
				return null
			}
			getTileRangeForTileCoordAndZ(t, e, i) {
				if (e > this.maxZoom || e < this.minZoom) return null;
				const n = t[0],
					r = t[1],
					s = t[2];
				if (e === n) return ds(r, s, r, s, i);
				if (this.zoomFactor_) {
					const t = Math.pow(this.zoomFactor_, e - n),
						o = Math.floor(r * t),
						a = Math.floor(s * t);
					if (e < n) return ds(o, o, a, a, i);
					return ds(o, Math.floor(t * (r + 1)) - 1, a, Math.floor(t * (s + 1)) - 1, i)
				}
				const o = this.getTileCoordExtent(t, this.tmpExtent_);
				return this.getTileRangeForExtentAndZ(o, e, i)
			}
			getTileRangeForExtentAndZ(t, e, i) {
				this.getTileCoordForXYAndZ_(t[0], t[3], e, !1, ws);
				const n = ws[1],
					r = ws[2];
				this.getTileCoordForXYAndZ_(t[2], t[1], e, !0, ws);
				return ds(n, ws[1], r, ws[2], i)
			}
			getTileCoordCenter(t) {
				const e = this.getOrigin(t[0]),
					i = this.getResolution(t[0]),
					n = u(this.getTileSize(t[0]), this.tmpSize_);
				return [e[0] + (t[1] + .5) * n[0] * i, e[1] - (t[2] + .5) * n[1] * i]
			}
			getTileCoordExtent(t, e) {
				const i = this.getOrigin(t[0]),
					n = this.getResolution(t[0]),
					r = u(this.getTileSize(t[0]), this.tmpSize_),
					s = i[0] + t[1] * r[0] * n,
					o = i[1] - (t[2] + 1) * r[1] * n;
				return ni(s, o, s + r[0] * n, o + r[1] * n, e)
			}
			getTileCoordForCoordAndResolution(t, e, i) {
				return this.getTileCoordForXYAndResolution_(t[0], t[1], e, !1, i)
			}
			getTileCoordForXYAndResolution_(t, e, i, n, r) {
				const s = this.getZForResolution(i),
					o = i / this.getResolution(s),
					a = this.getOrigin(s),
					l = u(this.getTileSize(s), this.tmpSize_);
				let h = o * (t - a[0]) / i / l[0],
					c = o * (a[1] - e) / i / l[1];
				return n ? (h = L(h, 5) - 1, c = L(c, 5) - 1) : (h = I(h, 5), c = I(c, 5)), ms(s, h, c, r)
			}
			getTileCoordForXYAndZ_(t, e, i, n, r) {
				const s = this.getOrigin(i),
					o = this.getResolution(i),
					a = u(this.getTileSize(i), this.tmpSize_);
				let l = (t - s[0]) / o / a[0],
					h = (s[1] - e) / o / a[1];
				return n ? (l = L(l, 5) - 1, h = L(h, 5) - 1) : (l = I(l, 5), h = I(h, 5)), ms(i, l, h, r)
			}
			getTileCoordForCoordAndZ(t, e, i) {
				return this.getTileCoordForXYAndZ_(t[0], t[1], e, !1, i)
			}
			getTileCoordResolution(t) {
				return this.resolutions_[t[0]]
			}
			getTileSize(t) {
				return this.tileSize_ ? this.tileSize_ : this.tileSizes_[t]
			}
			getFullTileRange(t) {
				return this.fullTileRanges_ ? this.fullTileRanges_[t] : this.extent_ ? this.getTileRangeForExtentAndZ(this.extent_, t) : null
			}
			getZForResolution(t, e) {
				return b(ct(this.resolutions_, t, e || 0), this.minZoom, this.maxZoom)
			}
			tileCoordIntersectsViewport(t, e) {
				return Tr(e, 0, e.length, 2, this.getTileCoordExtent(t))
			}
			calculateTileRanges_(t) {
				const e = this.resolutions_.length,
					i = new Array(e);
				for (let n = this.minZoom; n < e; ++n) i[n] = this.getTileRangeForExtentAndZ(t, n);
				this.fullTileRanges_ = i
			}
		},
		Ss = {
			IDLE: 0,
			LOADING: 1,
			LOADED: 2,
			ERROR: 3,
			EMPTY: 4
		},
		Es = "add",
		Cs = "remove";
	const Ts = "length";
	class Ps extends at {
		constructor(t, e, i) {
			super(t), this.element = e, this.index = i
		}
	}
	var Rs = class extends Vt {
			constructor(t, e) {
				if (super(), this.on, this.once, this.un, e = e || {}, this.unique_ = !!e.unique, this.array_ = t || [], this.unique_)
					for (let t = 0, e = this.array_.length; t < e; ++t) this.assertUnique_(this.array_[t], t);
				this.updateLength_()
			}
			clear() {
				for (; this.getLength() > 0;) this.pop()
			}
			extend(t) {
				for (let e = 0, i = t.length; e < i; ++e) this.push(t[e]);
				return this
			}
			forEach(t) {
				const e = this.array_;
				for (let i = 0, n = e.length; i < n; ++i) t(e[i], i, e)
			}
			getArray() {
				return this.array_
			}
			item(t) {
				return this.array_[t]
			}
			getLength() {
				return this.get(Ts)
			}
			insertAt(t, e) {
				if (t < 0 || t > this.getLength()) throw new Error("Index out of bounds: " + t);
				this.unique_ && this.assertUnique_(e), this.array_.splice(t, 0, e), this.updateLength_(), this.dispatchEvent(new Ps(Es, e, t))
			}
			pop() {
				return this.removeAt(this.getLength() - 1)
			}
			push(t) {
				this.unique_ && this.assertUnique_(t);
				const e = this.getLength();
				return this.insertAt(e, t), this.getLength()
			}
			remove(t) {
				const e = this.array_;
				for (let i = 0, n = e.length; i < n; ++i)
					if (e[i] === t) return this.removeAt(i)
			}
			removeAt(t) {
				if (t < 0 || t >= this.getLength()) return;
				const e = this.array_[t];
				return this.array_.splice(t, 1), this.updateLength_(), this.dispatchEvent(new Ps(Cs, e, t)), e
			}
			setAt(t, e) {
				if (t >= this.getLength()) return void this.insertAt(t, e);
				if (t < 0) throw new Error("Index out of bounds: " + t);
				this.unique_ && this.assertUnique_(e, t);
				const i = this.array_[t];
				this.array_[t] = e, this.dispatchEvent(new Ps(Cs, i, t)), this.dispatchEvent(new Ps(Es, e, t))
			}
			updateLength_() {
				this.set(Ts, this.array_.length)
			}
			assertUnique_(t, e) {
				for (let i = 0, n = this.array_.length; i < n; ++i)
					if (this.array_[i] === t && i !== e) throw new Error("Duplicate item added to a unique collection")
			}
		},
		Fs = "prerender",
		Ms = "postrender",
		Is = "precompose",
		Ls = "postcompose",
		ks = "rendercomplete",
		As = "opacity",
		Ds = "visible",
		Os = "extent",
		zs = "zIndex",
		Gs = "maxResolution",
		Ns = "minResolution",
		js = "maxZoom",
		Us = "minZoom",
		Bs = "source",
		$s = "map";
	var Vs = class extends Vt {
			constructor(t) {
				super(), this.on, this.once, this.un, this.background_ = t.background;
				const e = Object.assign({}, t);
				"object" == typeof t.properties && (delete e.properties, Object.assign(e, t.properties)), e[As] = void 0 !== t.opacity ? t.opacity : 1, Se("number" == typeof e[As], "Layer opacity must be a number"), e[Ds] = void 0 === t.visible || t.visible, e[zs] = t.zIndex, e[Gs] = void 0 !== t.maxResolution ? t.maxResolution : 1 / 0, e[Ns] = void 0 !== t.minResolution ? t.minResolution : 0, e[Us] = void 0 !== t.minZoom ? t.minZoom : -1 / 0, e[js] = void 0 !== t.maxZoom ? t.maxZoom : 1 / 0, this.className_ = void 0 !== e.className ? e.className : "ol-layer", delete e.className, this.setProperties(e), this.state_ = null
			}
			getBackground() {
				return this.background_
			}
			getClassName() {
				return this.className_
			}
			getLayerState(t) {
				const e = this.state_ || {
						layer: this,
						managed: void 0 === t || t
					},
					i = this.getZIndex();
				return e.opacity = b(Math.round(100 * this.getOpacity()) / 100, 0, 1), e.visible = this.getVisible(), e.extent = this.getExtent(), e.zIndex = void 0 !== i || e.managed ? i : 1 / 0, e.maxResolution = this.getMaxResolution(), e.minResolution = Math.max(this.getMinResolution(), 0), e.minZoom = this.getMinZoom(), e.maxZoom = this.getMaxZoom(), this.state_ = e, e
			}
			getLayersArray(t) {
				return o()
			}
			getLayerStatesArray(t) {
				return o()
			}
			getExtent() {
				return this.get(Os)
			}
			getMaxResolution() {
				return this.get(Gs)
			}
			getMinResolution() {
				return this.get(Ns)
			}
			getMinZoom() {
				return this.get(Us)
			}
			getMaxZoom() {
				return this.get(js)
			}
			getOpacity() {
				return this.get(As)
			}
			getSourceState() {
				return o()
			}
			getVisible() {
				return this.get(Ds)
			}
			getZIndex() {
				return this.get(zs)
			}
			setBackground(t) {
				this.background_ = t, this.changed()
			}
			setExtent(t) {
				this.set(Os, t)
			}
			setMaxResolution(t) {
				this.set(Gs, t)
			}
			setMinResolution(t) {
				this.set(Ns, t)
			}
			setMaxZoom(t) {
				this.set(js, t)
			}
			setMinZoom(t) {
				this.set(Us, t)
			}
			setOpacity(t) {
				Se("number" == typeof t, "Layer opacity must be a number"), this.set(As, t)
			}
			setVisible(t) {
				this.set(Ds, t)
			}
			setZIndex(t) {
				this.set(zs, t)
			}
			disposeInternal() {
				this.state_ && (this.state_.layer = null, this.state_ = null), super.disposeInternal()
			}
		},
		Xs = 0,
		Ws = 1,
		qs = {
			CENTER: "center",
			RESOLUTION: "resolution",
			ROTATION: "rotation"
		};

	function Zs(t, e, i) {
		return function(n, r, s, o, a) {
			if (!n) return;
			if (!r && !e) return n;
			const l = e ? 0 : s[0] * r,
				h = e ? 0 : s[1] * r,
				u = a ? a[0] : 0,
				c = a ? a[1] : 0;
			let d = t[0] + l / 2 + u,
				g = t[2] - l / 2 + u,
				p = t[1] + h / 2 + c,
				f = t[3] - h / 2 + c;
			d > g && (d = (g + d) / 2, g = d), p > f && (p = (f + p) / 2, f = p);
			let m = b(n[0], d, g),
				_ = b(n[1], p, f);
			if (o && i && r) {
				const t = 30 * r;
				m += -t * Math.log(1 + Math.max(0, d - n[0]) / t) + t * Math.log(1 + Math.max(0, n[0] - g) / t), _ += -t * Math.log(1 + Math.max(0, p - n[1]) / t) + t * Math.log(1 + Math.max(0, n[1] - f) / t)
			}
			return [m, _]
		}
	}

	function Ys(t) {
		return t
	}

	function Ks(t, e, i, n) {
		const r = Ei(e) / i[0],
			s = vi(e) / i[1];
		return n ? Math.min(t, Math.max(r, s)) : Math.min(t, Math.min(r, s))
	}

	function Hs(t, e, i) {
		let n = Math.min(t, e);
		return n *= Math.log(1 + 50 * Math.max(0, t / e - 1)) / 50 + 1, i && (n = Math.max(n, i), n /= Math.log(1 + 50 * Math.max(0, i / t - 1)) / 50 + 1), b(n, i / 2, 2 * e)
	}

	function Js(t, e, i, n, r) {
		return i = void 0 === i || i,
			function(s, o, a, l) {
				if (void 0 !== s) {
					const o = n ? Ks(t, n, a, r) : t;
					return i && l ? Hs(s, o, e) : b(s, e, o)
				}
			}
	}

	function Qs(t) {
		if (void 0 !== t) return 0
	}

	function to(t) {
		if (void 0 !== t) return t
	}

	function eo(t) {
		return Math.pow(t, 3)
	}

	function io(t) {
		return 1 - eo(1 - t)
	}

	function no(t) {
		return 3 * t * t - 2 * t * t * t
	}

	function ro(t) {
		return t
	}

	function so(t, e) {
		setTimeout((function() {
			t(e)
		}), 0)
	}

	function oo(t) {
		return !(t.sourceCenter && t.targetCenter && !Ki(t.sourceCenter, t.targetCenter)) && (t.sourceResolution === t.targetResolution && t.sourceRotation === t.targetRotation)
	}

	function ao(t, e, i, n, r) {
		const s = Math.cos(-r);
		let o = Math.sin(-r),
			a = t[0] * s - t[1] * o,
			l = t[1] * s + t[0] * o;
		a += (e[0] / 2 - i[0]) * n, l += (i[1] - e[1] / 2) * n, o = -o;
		return [a * s - l * o, l * s + a * o]
	}
	var lo = class extends Vt {
		constructor(t) {
			super(), this.on, this.once, this.un, t = Object.assign({}, t), this.hints_ = [0, 0], this.animations_ = [], this.updateAnimationKey_, this.projection_ = bn(t.projection, "EPSG:3857"), this.viewportSize_ = [100, 100], this.targetCenter_ = null, this.targetResolution_, this.targetRotation_, this.nextCenter_ = null, this.nextResolution_, this.nextRotation_, this.cancelAnchor_ = void 0, t.projection && gn(), t.center && (t.center = An(t.center, this.projection_)), t.extent && (t.extent = On(t.extent, this.projection_)), this.applyOptions_(t)
		}
		applyOptions_(t) {
			const e = Object.assign({}, t);
			for (const t in qs) delete e[t];
			this.setProperties(e, !0);
			const i = function(t) {
				let e, i, n;
				const r = 28,
					s = 2;
				let o = void 0 !== t.minZoom ? t.minZoom : 0,
					a = void 0 !== t.maxZoom ? t.maxZoom : r;
				const l = void 0 !== t.zoomFactor ? t.zoomFactor : s,
					h = void 0 !== t.multiWorld && t.multiWorld,
					u = void 0 === t.smoothResolutionConstraint || t.smoothResolutionConstraint,
					c = void 0 !== t.showFullExtent && t.showFullExtent,
					d = bn(t.projection, "EPSG:3857"),
					g = d.getExtent();
				let p = t.constrainOnlyCenter,
					f = t.extent;
				h || f || !d.isGlobal() || (p = !1, f = g);
				if (void 0 !== t.resolutions) {
					const r = t.resolutions;
					i = r[o], n = void 0 !== r[a] ? r[a] : r[r.length - 1], e = t.constrainResolution ? function(t, e, i, n) {
						return e = void 0 === e || e,
							function(r, s, o, a) {
								if (void 0 !== r) {
									const l = t[0],
										h = t[t.length - 1],
										u = i ? Ks(l, i, o, n) : l;
									if (a) return e ? Hs(r, u, h) : b(r, h, u);
									const c = Math.min(u, r),
										d = Math.floor(ct(t, c, s));
									return t[d] > u && d < t.length - 1 ? t[d + 1] : t[d]
								}
							}
					}(r, u, !p && f, c) : Js(i, n, u, !p && f, c)
				} else {
					const h = (g ? Math.max(Ei(g), vi(g)) : 360 * Fi.degrees / d.getMetersPerUnit()) / fs / Math.pow(s, 0),
						m = h / Math.pow(s, r - 0);
					i = t.maxResolution, void 0 !== i ? o = 0 : i = h / Math.pow(l, o), n = t.minResolution, void 0 === n && (n = void 0 !== t.maxZoom ? void 0 !== t.maxResolution ? i / Math.pow(l, a) : h / Math.pow(l, a) : m), a = o + Math.floor(Math.log(i / n) / Math.log(l)), n = i / Math.pow(l, a - o), e = t.constrainResolution ? function(t, e, i, n, r, s) {
						return n = void 0 === n || n, i = void 0 !== i ? i : 0,
							function(o, a, l, h) {
								if (void 0 !== o) {
									const u = r ? Ks(e, r, l, s) : e;
									if (h) return n ? Hs(o, u, i) : b(o, i, u);
									const c = 1e-9,
										d = Math.ceil(Math.log(e / u) / Math.log(t) - c),
										g = -a * (.5 - c) + .5,
										p = Math.min(u, o),
										f = Math.floor(Math.log(e / p) / Math.log(t) + g),
										m = Math.max(d, f);
									return b(e / Math.pow(t, m), i, u)
								}
							}
					}(l, i, n, u, !p && f, c) : Js(i, n, u, !p && f, c)
				}
				return {
					constraint: e,
					maxResolution: i,
					minResolution: n,
					minZoom: o,
					zoomFactor: l
				}
			}(t);
			this.maxResolution_ = i.maxResolution, this.minResolution_ = i.minResolution, this.zoomFactor_ = i.zoomFactor, this.resolutions_ = t.resolutions, this.padding_ = t.padding, this.minZoom_ = i.minZoom;
			const n = function(t) {
					if (void 0 !== t.extent) {
						const e = void 0 === t.smoothExtentConstraint || t.smoothExtentConstraint;
						return Zs(t.extent, t.constrainOnlyCenter, e)
					}
					const e = bn(t.projection, "EPSG:3857");
					if (!0 !== t.multiWorld && e.isGlobal()) {
						const t = e.getExtent().slice();
						return t[0] = -1 / 0, t[2] = 1 / 0, Zs(t, !1, !1)
					}
					return Ys
				}(t),
				r = i.constraint,
				s = function(t) {
					const e = void 0 === t.enableRotation || t.enableRotation;
					if (e) {
						const e = t.constrainRotation;
						return void 0 === e || !0 === e ? function(t) {
							const e = void 0 === t ? T(5) : t;
							return function(t, i) {
								return i || void 0 === t ? t : Math.abs(t) <= e ? 0 : t
							}
						}() : !1 === e ? to : "number" == typeof e ? function(t) {
							const e = 2 * Math.PI / t;
							return function(t, i) {
								return i ? t : void 0 !== t ? t = Math.floor(t / e + .5) * e : void 0
							}
						}(e) : to
					}
					return Qs
				}(t);
			this.constraints_ = {
				center: n,
				resolution: r,
				rotation: s
			}, this.setRotation(void 0 !== t.rotation ? t.rotation : 0), this.setCenterInternal(void 0 !== t.center ? t.center : null), void 0 !== t.resolution ? this.setResolution(t.resolution) : void 0 !== t.zoom && this.setZoom(t.zoom)
		}
		get padding() {
			return this.padding_
		}
		set padding(t) {
			let e = this.padding_;
			this.padding_ = t;
			const i = this.getCenterInternal();
			if (i) {
				const n = t || [0, 0, 0, 0];
				e = e || [0, 0, 0, 0];
				const r = this.getResolution(),
					s = r / 2 * (n[3] - e[3] + e[1] - n[1]),
					o = r / 2 * (n[0] - e[0] + e[2] - n[2]);
				this.setCenterInternal([i[0] + s, i[1] - o])
			}
		}
		getUpdatedOptions_(t) {
			const e = this.getProperties();
			return void 0 !== e.resolution ? e.resolution = this.getResolution() : e.zoom = this.getZoom(), e.center = this.getCenterInternal(), e.rotation = this.getRotation(), Object.assign({}, e, t)
		}
		animate(t) {
			this.isDef() && !this.getAnimating() && this.resolveConstraints(0);
			const e = new Array(arguments.length);
			for (let t = 0; t < e.length; ++t) {
				let i = arguments[t];
				i.center && (i = Object.assign({}, i), i.center = An(i.center, this.getProjection())), i.anchor && (i = Object.assign({}, i), i.anchor = An(i.anchor, this.getProjection())), e[t] = i
			}
			this.animateInternal.apply(this, e)
		}
		animateInternal(t) {
			let e, i = arguments.length;
			i > 1 && "function" == typeof arguments[i - 1] && (e = arguments[i - 1], --i);
			let n = 0;
			for (; n < i && !this.isDef(); ++n) {
				const t = arguments[n];
				t.center && this.setCenterInternal(t.center), void 0 !== t.zoom ? this.setZoom(t.zoom) : t.resolution && this.setResolution(t.resolution), void 0 !== t.rotation && this.setRotation(t.rotation)
			}
			if (n === i) return void(e && so(e, !0));
			let r = Date.now(),
				s = this.targetCenter_.slice(),
				o = this.targetResolution_,
				a = this.targetRotation_;
			const l = [];
			for (; n < i; ++n) {
				const t = arguments[n],
					i = {
						start: r,
						complete: !1,
						anchor: t.anchor,
						duration: void 0 !== t.duration ? t.duration : 1e3,
						easing: t.easing || no,
						callback: e
					};
				if (t.center && (i.sourceCenter = s, i.targetCenter = t.center.slice(), s = i.targetCenter), void 0 !== t.zoom ? (i.sourceResolution = o, i.targetResolution = this.getResolutionForZoom(t.zoom), o = i.targetResolution) : t.resolution && (i.sourceResolution = o, i.targetResolution = t.resolution, o = i.targetResolution), void 0 !== t.rotation) {
					i.sourceRotation = a;
					const e = P(t.rotation - a + Math.PI, 2 * Math.PI) - Math.PI;
					i.targetRotation = a + e, a = i.targetRotation
				}
				oo(i) ? i.complete = !0 : r += i.duration, l.push(i)
			}
			this.animations_.push(l), this.setHint(Xs, 1), this.updateAnimations_()
		}
		getAnimating() {
			return this.hints_[Xs] > 0
		}
		getInteracting() {
			return this.hints_[Ws] > 0
		}
		cancelAnimations() {
			let t;
			this.setHint(Xs, -this.hints_[Xs]);
			for (let e = 0, i = this.animations_.length; e < i; ++e) {
				const i = this.animations_[e];
				if (i[0].callback && so(i[0].callback, !1), !t)
					for (let e = 0, n = i.length; e < n; ++e) {
						const n = i[e];
						if (!n.complete) {
							t = n.anchor;
							break
						}
					}
			}
			this.animations_.length = 0, this.cancelAnchor_ = t, this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN
		}
		updateAnimations_() {
			if (void 0 !== this.updateAnimationKey_ && (cancelAnimationFrame(this.updateAnimationKey_), this.updateAnimationKey_ = void 0), !this.getAnimating()) return;
			const t = Date.now();
			let e = !1;
			for (let i = this.animations_.length - 1; i >= 0; --i) {
				const n = this.animations_[i];
				let r = !0;
				for (let i = 0, s = n.length; i < s; ++i) {
					const s = n[i];
					if (s.complete) continue;
					const o = t - s.start;
					let a = s.duration > 0 ? o / s.duration : 1;
					a >= 1 ? (s.complete = !0, a = 1) : r = !1;
					const l = s.easing(a);
					if (s.sourceCenter) {
						const t = s.sourceCenter[0],
							e = s.sourceCenter[1],
							i = s.targetCenter[0],
							n = s.targetCenter[1];
						this.nextCenter_ = s.targetCenter;
						const r = t + l * (i - t),
							o = e + l * (n - e);
						this.targetCenter_ = [r, o]
					}
					if (s.sourceResolution && s.targetResolution) {
						const t = 1 === l ? s.targetResolution : s.sourceResolution + l * (s.targetResolution - s.sourceResolution);
						if (s.anchor) {
							const e = this.getViewportSize_(this.getRotation()),
								i = this.constraints_.resolution(t, 0, e, !0);
							this.targetCenter_ = this.calculateCenterZoom(i, s.anchor)
						}
						this.nextResolution_ = s.targetResolution, this.targetResolution_ = t, this.applyTargetState_(!0)
					}
					if (void 0 !== s.sourceRotation && void 0 !== s.targetRotation) {
						const t = 1 === l ? P(s.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : s.sourceRotation + l * (s.targetRotation - s.sourceRotation);
						if (s.anchor) {
							const e = this.constraints_.rotation(t, !0);
							this.targetCenter_ = this.calculateCenterRotate(e, s.anchor)
						}
						this.nextRotation_ = s.targetRotation, this.targetRotation_ = t
					}
					if (this.applyTargetState_(!0), e = !0, !s.complete) break
				}
				if (r) {
					this.animations_[i] = null, this.setHint(Xs, -1), this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
					const t = n[0].callback;
					t && so(t, !0)
				}
			}
			this.animations_ = this.animations_.filter(Boolean), e && void 0 === this.updateAnimationKey_ && (this.updateAnimationKey_ = requestAnimationFrame(this.updateAnimations_.bind(this)))
		}
		calculateCenterRotate(t, e) {
			let i;
			const n = this.getCenterInternal();
			var r, s;
			return void 0 !== n && (i = [n[0] - e[0], n[1] - e[1]], Hi(i, t - this.getRotation()), s = e, (r = i)[0] += +s[0], r[1] += +s[1]), i
		}
		calculateCenterZoom(t, e) {
			let i;
			const n = this.getCenterInternal(),
				r = this.getResolution();
			if (void 0 !== n && void 0 !== r) {
				i = [e[0] - t * (e[0] - n[0]) / r, e[1] - t * (e[1] - n[1]) / r]
			}
			return i
		}
		getViewportSize_(t) {
			const e = this.viewportSize_;
			if (t) {
				const i = e[0],
					n = e[1];
				return [Math.abs(i * Math.cos(t)) + Math.abs(n * Math.sin(t)), Math.abs(i * Math.sin(t)) + Math.abs(n * Math.cos(t))]
			}
			return e
		}
		setViewportSize(t) {
			this.viewportSize_ = Array.isArray(t) ? t.slice() : [100, 100], this.getAnimating() || this.resolveConstraints(0)
		}
		getCenter() {
			const t = this.getCenterInternal();
			return t ? kn(t, this.getProjection()) : t
		}
		getCenterInternal() {
			return this.get(qs.CENTER)
		}
		getConstraints() {
			return this.constraints_
		}
		getConstrainResolution() {
			return this.get("constrainResolution")
		}
		getHints(t) {
			return void 0 !== t ? (t[0] = this.hints_[0], t[1] = this.hints_[1], t) : this.hints_.slice()
		}
		calculateExtent(t) {
			return Dn(this.calculateExtentInternal(t), this.getProjection())
		}
		calculateExtentInternal(t) {
			t = t || this.getViewportSizeMinusPadding_();
			const e = this.getCenterInternal();
			Se(e, "The view center is not defined");
			const i = this.getResolution();
			Se(void 0 !== i, "The view resolution is not defined");
			const n = this.getRotation();
			return Se(void 0 !== n, "The view rotation is not defined"), yi(e, i, n, t)
		}
		getMaxResolution() {
			return this.maxResolution_
		}
		getMinResolution() {
			return this.minResolution_
		}
		getMaxZoom() {
			return this.getZoomForResolution(this.minResolution_)
		}
		setMaxZoom(t) {
			this.applyOptions_(this.getUpdatedOptions_({
				maxZoom: t
			}))
		}
		getMinZoom() {
			return this.getZoomForResolution(this.maxResolution_)
		}
		setMinZoom(t) {
			this.applyOptions_(this.getUpdatedOptions_({
				minZoom: t
			}))
		}
		setConstrainResolution(t) {
			this.applyOptions_(this.getUpdatedOptions_({
				constrainResolution: t
			}))
		}
		getProjection() {
			return this.projection_
		}
		getResolution() {
			return this.get(qs.RESOLUTION)
		}
		getResolutions() {
			return this.resolutions_
		}
		getResolutionForExtent(t, e) {
			return this.getResolutionForExtentInternal(On(t, this.getProjection()), e)
		}
		getResolutionForExtentInternal(t, e) {
			e = e || this.getViewportSizeMinusPadding_();
			const i = Ei(t) / e[0],
				n = vi(t) / e[1];
			return Math.max(i, n)
		}
		getResolutionForValueFunction(t) {
			t = t || 2;
			const e = this.getConstrainedResolution(this.maxResolution_),
				i = this.minResolution_,
				n = Math.log(e / i) / Math.log(t);
			return function(i) {
				return e / Math.pow(t, i * n)
			}
		}
		getRotation() {
			return this.get(qs.ROTATION)
		}
		getValueForResolutionFunction(t) {
			const e = Math.log(t || 2),
				i = this.getConstrainedResolution(this.maxResolution_),
				n = this.minResolution_,
				r = Math.log(i / n) / e;
			return function(t) {
				return Math.log(i / t) / e / r
			}
		}
		getViewportSizeMinusPadding_(t) {
			let e = this.getViewportSize_(t);
			const i = this.padding_;
			return i && (e = [e[0] - i[1] - i[3], e[1] - i[0] - i[2]]), e
		}
		getState() {
			const t = this.getProjection(),
				e = this.getResolution(),
				i = this.getRotation();
			let n = this.getCenterInternal();
			const r = this.padding_;
			if (r) {
				const t = this.getViewportSizeMinusPadding_();
				n = ao(n, this.getViewportSize_(), [t[0] / 2 + r[3], t[1] / 2 + r[0]], e, i)
			}
			return {
				center: n.slice(0),
				projection: void 0 !== t ? t : null,
				resolution: e,
				nextCenter: this.nextCenter_,
				nextResolution: this.nextResolution_,
				nextRotation: this.nextRotation_,
				rotation: i,
				zoom: this.getZoom()
			}
		}
		getViewStateAndExtent() {
			return {
				viewState: this.getState(),
				extent: this.calculateExtent()
			}
		}
		getZoom() {
			let t;
			const e = this.getResolution();
			return void 0 !== e && (t = this.getZoomForResolution(e)), t
		}
		getZoomForResolution(t) {
			let e, i, n = this.minZoom_ || 0;
			if (this.resolutions_) {
				const r = ct(this.resolutions_, t, 1);
				n = r, e = this.resolutions_[r], i = r == this.resolutions_.length - 1 ? 2 : e / this.resolutions_[r + 1]
			} else e = this.maxResolution_, i = this.zoomFactor_;
			return n + Math.log(e / t) / Math.log(i)
		}
		getResolutionForZoom(t) {
			if (this.resolutions_) {
				if (this.resolutions_.length <= 1) return 0;
				const e = b(Math.floor(t), 0, this.resolutions_.length - 2),
					i = this.resolutions_[e] / this.resolutions_[e + 1];
				return this.resolutions_[e] / Math.pow(i, b(t - e, 0, 1))
			}
			return this.maxResolution_ / Math.pow(this.zoomFactor_, t - this.minZoom_)
		}
		fit(t, e) {
			let i;
			if (Se(Array.isArray(t) || "function" == typeof t.getSimplifiedGeometry, "Invalid extent or geometry provided as `geometry`"), Array.isArray(t)) {
				Se(!Ti(t), "Cannot fit empty extent provided as `geometry`");
				i = qr(On(t, this.getProjection()))
			} else if ("Circle" === t.getType()) {
				const e = On(t.getExtent(), this.getProjection());
				i = qr(e), i.rotate(this.getRotation(), mi(e))
			} else {
				const e = Ln();
				i = e ? t.clone().transform(e, this.getProjection()) : t
			}
			this.fitInternal(i, e)
		}
		rotatedExtentForGeometry(t) {
			const e = this.getRotation(),
				i = Math.cos(e),
				n = Math.sin(-e),
				r = t.getFlatCoordinates(),
				s = t.getStride();
			let o = 1 / 0,
				a = 1 / 0,
				l = -1 / 0,
				h = -1 / 0;
			for (let t = 0, e = r.length; t < e; t += s) {
				const e = r[t] * i - r[t + 1] * n,
					s = r[t] * n + r[t + 1] * i;
				o = Math.min(o, e), a = Math.min(a, s), l = Math.max(l, e), h = Math.max(h, s)
			}
			return [o, a, l, h]
		}
		fitInternal(t, e) {
			let i = (e = e || {}).size;
			i || (i = this.getViewportSizeMinusPadding_());
			const n = void 0 !== e.padding ? e.padding : [0, 0, 0, 0],
				r = void 0 !== e.nearest && e.nearest;
			let s;
			s = void 0 !== e.minResolution ? e.minResolution : void 0 !== e.maxZoom ? this.getResolutionForZoom(e.maxZoom) : 0;
			const o = this.rotatedExtentForGeometry(t);
			let a = this.getResolutionForExtentInternal(o, [i[0] - n[1] - n[3], i[1] - n[0] - n[2]]);
			a = isNaN(a) ? s : Math.max(a, s), a = this.getConstrainedResolution(a, r ? 0 : 1);
			const l = this.getRotation(),
				h = Math.sin(l),
				u = Math.cos(l),
				c = mi(o);
			c[0] += (n[1] - n[3]) / 2 * a, c[1] += (n[0] - n[2]) / 2 * a;
			const d = c[0] * u - c[1] * h,
				g = c[1] * u + c[0] * h,
				p = this.getConstrainedCenter([d, g], a),
				f = e.callback ? e.callback : _t;
			void 0 !== e.duration ? this.animateInternal({
				resolution: a,
				center: p,
				duration: e.duration,
				easing: e.easing
			}, f) : (this.targetResolution_ = a, this.targetCenter_ = p, this.applyTargetState_(!1, !0), so(f, !0))
		}
		centerOn(t, e, i) {
			this.centerOnInternal(An(t, this.getProjection()), e, i)
		}
		centerOnInternal(t, e, i) {
			this.setCenterInternal(ao(t, e, i, this.getResolution(), this.getRotation()))
		}
		calculateCenterShift(t, e, i, n) {
			let r;
			const s = this.padding_;
			if (s && t) {
				const o = this.getViewportSizeMinusPadding_(-i),
					a = ao(t, n, [o[0] / 2 + s[3], o[1] / 2 + s[0]], e, i);
				r = [t[0] - a[0], t[1] - a[1]]
			}
			return r
		}
		isDef() {
			return !!this.getCenterInternal() && void 0 !== this.getResolution()
		}
		adjustCenter(t) {
			const e = kn(this.targetCenter_, this.getProjection());
			this.setCenter([e[0] + t[0], e[1] + t[1]])
		}
		adjustCenterInternal(t) {
			const e = this.targetCenter_;
			this.setCenterInternal([e[0] + t[0], e[1] + t[1]])
		}
		adjustResolution(t, e) {
			e = e && An(e, this.getProjection()), this.adjustResolutionInternal(t, e)
		}
		adjustResolutionInternal(t, e) {
			const i = this.getAnimating() || this.getInteracting(),
				n = this.getViewportSize_(this.getRotation()),
				r = this.constraints_.resolution(this.targetResolution_ * t, 0, n, i);
			e && (this.targetCenter_ = this.calculateCenterZoom(r, e)), this.targetResolution_ *= t, this.applyTargetState_()
		}
		adjustZoom(t, e) {
			this.adjustResolution(Math.pow(this.zoomFactor_, -t), e)
		}
		adjustRotation(t, e) {
			e && (e = An(e, this.getProjection())), this.adjustRotationInternal(t, e)
		}
		adjustRotationInternal(t, e) {
			const i = this.getAnimating() || this.getInteracting(),
				n = this.constraints_.rotation(this.targetRotation_ + t, i);
			e && (this.targetCenter_ = this.calculateCenterRotate(n, e)), this.targetRotation_ += t, this.applyTargetState_()
		}
		setCenter(t) {
			this.setCenterInternal(t ? An(t, this.getProjection()) : t)
		}
		setCenterInternal(t) {
			this.targetCenter_ = t, this.applyTargetState_()
		}
		setHint(t, e) {
			return this.hints_[t] += e, this.changed(), this.hints_[t]
		}
		setResolution(t) {
			this.targetResolution_ = t, this.applyTargetState_()
		}
		setRotation(t) {
			this.targetRotation_ = t, this.applyTargetState_()
		}
		setZoom(t) {
			this.setResolution(this.getResolutionForZoom(t))
		}
		applyTargetState_(t, e) {
			const i = this.getAnimating() || this.getInteracting() || e,
				n = this.constraints_.rotation(this.targetRotation_, i),
				r = this.getViewportSize_(n),
				s = this.constraints_.resolution(this.targetResolution_, 0, r, i),
				o = this.constraints_.center(this.targetCenter_, s, r, i, this.calculateCenterShift(this.targetCenter_, s, n, r));
			this.get(qs.ROTATION) !== n && this.set(qs.ROTATION, n), this.get(qs.RESOLUTION) !== s && (this.set(qs.RESOLUTION, s), this.set("zoom", this.getZoom(), !0)), o && this.get(qs.CENTER) && Ki(this.get(qs.CENTER), o) || this.set(qs.CENTER, o), this.getAnimating() && !t && this.cancelAnimations(), this.cancelAnchor_ = void 0
		}
		resolveConstraints(t, e, i) {
			t = void 0 !== t ? t : 200;
			const n = e || 0,
				r = this.constraints_.rotation(this.targetRotation_),
				s = this.getViewportSize_(r),
				o = this.constraints_.resolution(this.targetResolution_, n, s),
				a = this.constraints_.center(this.targetCenter_, o, s, !1, this.calculateCenterShift(this.targetCenter_, o, r, s));
			if (0 === t && !this.cancelAnchor_) return this.targetResolution_ = o, this.targetRotation_ = r, this.targetCenter_ = a, void this.applyTargetState_();
			i = i || (0 === t ? this.cancelAnchor_ : void 0), this.cancelAnchor_ = void 0, this.getResolution() === o && this.getRotation() === r && this.getCenterInternal() && Ki(this.getCenterInternal(), a) || (this.getAnimating() && this.cancelAnimations(), this.animateInternal({
				rotation: r,
				center: a,
				resolution: o,
				duration: t,
				easing: io,
				anchor: i
			}))
		}
		beginInteraction() {
			this.resolveConstraints(0), this.setHint(Ws, 1)
		}
		endInteraction(t, e, i) {
			i = i && An(i, this.getProjection()), this.endInteractionInternal(t, e, i)
		}
		endInteractionInternal(t, e, i) {
			this.getInteracting() && (this.setHint(Ws, -1), this.resolveConstraints(t, e, i))
		}
		getConstrainedCenter(t, e) {
			const i = this.getViewportSize_(this.getRotation());
			return this.constraints_.center(t, e || this.getResolution(), i)
		}
		getConstrainedZoom(t, e) {
			const i = this.getResolutionForZoom(t);
			return this.getZoomForResolution(this.getConstrainedResolution(i, e))
		}
		getConstrainedResolution(t, e) {
			e = e || 0;
			const i = this.getViewportSize_(this.getRotation());
			return this.constraints_.resolution(t, e, i)
		}
	};

	function ho(t, e) {
		if (!t.visible) return !1;
		const i = e.resolution;
		if (i < t.minResolution || i >= t.maxResolution) return !1;
		const n = e.zoom;
		return n > t.minZoom && n <= t.maxZoom
	}
	var uo = class extends Vs {
		constructor(t) {
			const e = Object.assign({}, t);
			delete e.source, super(e), this.on, this.once, this.un, this.mapPrecomposeKey_ = null, this.mapRenderKey_ = null, this.sourceChangeKey_ = null, this.renderer_ = null, this.sourceReady_ = !1, this.rendered = !1, t.render && (this.render = t.render), t.map && this.setMap(t.map), this.addChangeListener(Bs, this.handleSourcePropertyChange_);
			const i = t.source ? t.source : null;
			this.setSource(i)
		}
		getLayersArray(t) {
			return (t = t || []).push(this), t
		}
		getLayerStatesArray(t) {
			return (t = t || []).push(this.getLayerState()), t
		}
		getSource() {
			return this.get(Bs) || null
		}
		getRenderSource() {
			return this.getSource()
		}
		getSourceState() {
			const t = this.getSource();
			return t ? t.getState() : "undefined"
		}
		handleSourceChange_() {
			this.changed(), this.sourceReady_ || "ready" !== this.getSource().getState() || (this.sourceReady_ = !0, this.dispatchEvent("sourceready"))
		}
		handleSourcePropertyChange_() {
			this.sourceChangeKey_ && (Gt(this.sourceChangeKey_), this.sourceChangeKey_ = null), this.sourceReady_ = !1;
			const t = this.getSource();
			t && (this.sourceChangeKey_ = Ot(t, St, this.handleSourceChange_, this), "ready" === t.getState() && (this.sourceReady_ = !0, setTimeout((() => {
				this.dispatchEvent("sourceready")
			}), 0))), this.changed()
		}
		getFeatures(t) {
			return this.renderer_ ? this.renderer_.getFeatures(t) : Promise.resolve([])
		}
		getData(t) {
			return this.renderer_ && this.rendered ? this.renderer_.getData(t) : null
		}
		isVisible(t) {
			let e;
			const i = this.getMapInternal();
			let n;
			!t && i && (t = i.getView()), e = t instanceof lo ? {
				viewState: t.getState(),
				extent: t.calculateExtent()
			} : t, !e.layerStatesArray && i && (e.layerStatesArray = i.getLayerGroup().getLayerStatesArray()), n = e.layerStatesArray ? e.layerStatesArray.find((t => t.layer === this)) : this.getLayerState();
			const r = this.getExtent();
			return ho(n, e.viewState) && (!r || Ci(r, e.extent))
		}
		getAttributions(t) {
			if (!this.isVisible(t)) return [];
			let e;
			const i = this.getSource();
			if (i && (e = i.getAttributions()), !e) return [];
			let n = e(t instanceof lo ? t.getViewStateAndExtent() : t);
			return Array.isArray(n) || (n = [n]), n
		}
		render(t, e) {
			const i = this.getRenderer();
			return i.prepareFrame(t) ? (this.rendered = !0, i.renderFrame(t, e)) : null
		}
		unrender() {
			this.rendered = !1
		}
		setMapInternal(t) {
			t || this.unrender(), this.set($s, t)
		}
		getMapInternal() {
			return this.get($s)
		}
		setMap(t) {
			this.mapPrecomposeKey_ && (Gt(this.mapPrecomposeKey_), this.mapPrecomposeKey_ = null), t || this.changed(), this.mapRenderKey_ && (Gt(this.mapRenderKey_), this.mapRenderKey_ = null), t && (this.mapPrecomposeKey_ = Ot(t, Is, (function(t) {
				const e = t.frameState.layerStatesArray,
					i = this.getLayerState(!1);
				Se(!e.some((function(t) {
					return t.layer === i.layer
				})), "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."), e.push(i)
			}), this), this.mapRenderKey_ = Ot(this, St, t.render, t), this.changed())
		}
		setSource(t) {
			this.set(Bs, t)
		}
		getRenderer() {
			return this.renderer_ || (this.renderer_ = this.createRenderer()), this.renderer_
		}
		hasRenderer() {
			return !!this.renderer_
		}
		createRenderer() {
			return null
		}
		disposeInternal() {
			this.renderer_ && (this.renderer_.dispose(), delete this.renderer_), this.setSource(null), super.disposeInternal()
		}
	};

	function co(t, e, i, n, r) {
		go(t, e, i || 0, n || t.length - 1, r || fo)
	}

	function go(t, e, i, n, r) {
		for (; n > i;) {
			if (n - i > 600) {
				var s = n - i + 1,
					o = e - i + 1,
					a = Math.log(s),
					l = .5 * Math.exp(2 * a / 3),
					h = .5 * Math.sqrt(a * l * (s - l) / s) * (o - s / 2 < 0 ? -1 : 1);
				go(t, e, Math.max(i, Math.floor(e - o * l / s + h)), Math.min(n, Math.floor(e + (s - o) * l / s + h)), r)
			}
			var u = t[e],
				c = i,
				d = n;
			for (po(t, i, e), r(t[n], u) > 0 && po(t, i, n); c < d;) {
				for (po(t, c, d), c++, d--; r(t[c], u) < 0;) c++;
				for (; r(t[d], u) > 0;) d--
			}
			0 === r(t[i], u) ? po(t, i, d) : po(t, ++d, n), d <= e && (i = d + 1), e <= d && (n = d - 1)
		}
	}

	function po(t, e, i) {
		var n = t[e];
		t[e] = t[i], t[i] = n
	}

	function fo(t, e) {
		return t < e ? -1 : t > e ? 1 : 0
	}
	class mo {
		constructor(t = 9) {
			this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(.4 * this._maxEntries)), this.clear()
		}
		all() {
			return this._all(this.data, [])
		}
		search(t) {
			let e = this.data;
			const i = [];
			if (!Po(t, e)) return i;
			const n = this.toBBox,
				r = [];
			for (; e;) {
				for (let s = 0; s < e.children.length; s++) {
					const o = e.children[s],
						a = e.leaf ? n(o) : o;
					Po(t, a) && (e.leaf ? i.push(o) : To(t, a) ? this._all(o, i) : r.push(o))
				}
				e = r.pop()
			}
			return i
		}
		collides(t) {
			let e = this.data;
			if (!Po(t, e)) return !1;
			const i = [];
			for (; e;) {
				for (let n = 0; n < e.children.length; n++) {
					const r = e.children[n],
						s = e.leaf ? this.toBBox(r) : r;
					if (Po(t, s)) {
						if (e.leaf || To(t, s)) return !0;
						i.push(r)
					}
				}
				e = i.pop()
			}
			return !1
		}
		load(t) {
			if (!t || !t.length) return this;
			if (t.length < this._minEntries) {
				for (let e = 0; e < t.length; e++) this.insert(t[e]);
				return this
			}
			let e = this._build(t.slice(), 0, t.length - 1, 0);
			if (this.data.children.length)
				if (this.data.height === e.height) this._splitRoot(this.data, e);
				else {
					if (this.data.height < e.height) {
						const t = this.data;
						this.data = e, e = t
					}
					this._insert(e, this.data.height - e.height - 1, !0)
				}
			else this.data = e;
			return this
		}
		insert(t) {
			return t && this._insert(t, this.data.height - 1), this
		}
		clear() {
			return this.data = Ro([]), this
		}
		remove(t, e) {
			if (!t) return this;
			let i = this.data;
			const n = this.toBBox(t),
				r = [],
				s = [];
			let o, a, l;
			for (; i || r.length;) {
				if (i || (i = r.pop(), a = r[r.length - 1], o = s.pop(), l = !0), i.leaf) {
					const n = _o(t, i.children, e);
					if (-1 !== n) return i.children.splice(n, 1), r.push(i), this._condense(r), this
				}
				l || i.leaf || !To(i, n) ? a ? (o++, i = a.children[o], l = !1) : i = null : (r.push(i), s.push(o), o = 0, a = i, i = i.children[0])
			}
			return this
		}
		toBBox(t) {
			return t
		}
		compareMinX(t, e) {
			return t.minX - e.minX
		}
		compareMinY(t, e) {
			return t.minY - e.minY
		}
		toJSON() {
			return this.data
		}
		fromJSON(t) {
			return this.data = t, this
		}
		_all(t, e) {
			const i = [];
			for (; t;) t.leaf ? e.push(...t.children) : i.push(...t.children), t = i.pop();
			return e
		}
		_build(t, e, i, n) {
			const r = i - e + 1;
			let s, o = this._maxEntries;
			if (r <= o) return s = Ro(t.slice(e, i + 1)), yo(s, this.toBBox), s;
			n || (n = Math.ceil(Math.log(r) / Math.log(o)), o = Math.ceil(r / Math.pow(o, n - 1))), s = Ro([]), s.leaf = !1, s.height = n;
			const a = Math.ceil(r / o),
				l = a * Math.ceil(Math.sqrt(o));
			Fo(t, e, i, l, this.compareMinX);
			for (let r = e; r <= i; r += l) {
				const e = Math.min(r + l - 1, i);
				Fo(t, r, e, a, this.compareMinY);
				for (let i = r; i <= e; i += a) {
					const r = Math.min(i + a - 1, e);
					s.children.push(this._build(t, i, r, n - 1))
				}
			}
			return yo(s, this.toBBox), s
		}
		_chooseSubtree(t, e, i, n) {
			for (; n.push(e), !e.leaf && n.length - 1 !== i;) {
				let i, n = 1 / 0,
					o = 1 / 0;
				for (let a = 0; a < e.children.length; a++) {
					const l = e.children[a],
						h = So(l),
						u = (r = t, s = l, (Math.max(s.maxX, r.maxX) - Math.min(s.minX, r.minX)) * (Math.max(s.maxY, r.maxY) - Math.min(s.minY, r.minY)) - h);
					u < o ? (o = u, n = h < n ? h : n, i = l) : u === o && h < n && (n = h, i = l)
				}
				e = i || e.children[0]
			}
			var r, s;
			return e
		}
		_insert(t, e, i) {
			const n = i ? t : this.toBBox(t),
				r = [],
				s = this._chooseSubtree(n, this.data, e, r);
			for (s.children.push(t), vo(s, n); e >= 0 && r[e].children.length > this._maxEntries;) this._split(r, e), e--;
			this._adjustParentBBoxes(n, r, e)
		}
		_split(t, e) {
			const i = t[e],
				n = i.children.length,
				r = this._minEntries;
			this._chooseSplitAxis(i, r, n);
			const s = this._chooseSplitIndex(i, r, n),
				o = Ro(i.children.splice(s, i.children.length - s));
			o.height = i.height, o.leaf = i.leaf, yo(i, this.toBBox), yo(o, this.toBBox), e ? t[e - 1].children.push(o) : this._splitRoot(i, o)
		}
		_splitRoot(t, e) {
			this.data = Ro([t, e]), this.data.height = t.height + 1, this.data.leaf = !1, yo(this.data, this.toBBox)
		}
		_chooseSplitIndex(t, e, i) {
			let n, r = 1 / 0,
				s = 1 / 0;
			for (let o = e; o <= i - e; o++) {
				const e = xo(t, 0, o, this.toBBox),
					a = xo(t, o, i, this.toBBox),
					l = Co(e, a),
					h = So(e) + So(a);
				l < r ? (r = l, n = o, s = h < s ? h : s) : l === r && h < s && (s = h, n = o)
			}
			return n || i - e
		}
		_chooseSplitAxis(t, e, i) {
			const n = t.leaf ? this.compareMinX : wo,
				r = t.leaf ? this.compareMinY : bo;
			this._allDistMargin(t, e, i, n) < this._allDistMargin(t, e, i, r) && t.children.sort(n)
		}
		_allDistMargin(t, e, i, n) {
			t.children.sort(n);
			const r = this.toBBox,
				s = xo(t, 0, e, r),
				o = xo(t, i - e, i, r);
			let a = Eo(s) + Eo(o);
			for (let n = e; n < i - e; n++) {
				const e = t.children[n];
				vo(s, t.leaf ? r(e) : e), a += Eo(s)
			}
			for (let n = i - e - 1; n >= e; n--) {
				const e = t.children[n];
				vo(o, t.leaf ? r(e) : e), a += Eo(o)
			}
			return a
		}
		_adjustParentBBoxes(t, e, i) {
			for (let n = i; n >= 0; n--) vo(e[n], t)
		}
		_condense(t) {
			for (let e, i = t.length - 1; i >= 0; i--) 0 === t[i].children.length ? i > 0 ? (e = t[i - 1].children, e.splice(e.indexOf(t[i]), 1)) : this.clear() : yo(t[i], this.toBBox)
		}
	}

	function _o(t, e, i) {
		if (!i) return e.indexOf(t);
		for (let n = 0; n < e.length; n++)
			if (i(t, e[n])) return n;
		return -1
	}

	function yo(t, e) {
		xo(t, 0, t.children.length, e, t)
	}

	function xo(t, e, i, n, r) {
		r || (r = Ro(null)), r.minX = 1 / 0, r.minY = 1 / 0, r.maxX = -1 / 0, r.maxY = -1 / 0;
		for (let s = e; s < i; s++) {
			const e = t.children[s];
			vo(r, t.leaf ? n(e) : e)
		}
		return r
	}

	function vo(t, e) {
		return t.minX = Math.min(t.minX, e.minX), t.minY = Math.min(t.minY, e.minY), t.maxX = Math.max(t.maxX, e.maxX), t.maxY = Math.max(t.maxY, e.maxY), t
	}

	function wo(t, e) {
		return t.minX - e.minX
	}

	function bo(t, e) {
		return t.minY - e.minY
	}

	function So(t) {
		return (t.maxX - t.minX) * (t.maxY - t.minY)
	}

	function Eo(t) {
		return t.maxX - t.minX + (t.maxY - t.minY)
	}

	function Co(t, e) {
		const i = Math.max(t.minX, e.minX),
			n = Math.max(t.minY, e.minY),
			r = Math.min(t.maxX, e.maxX),
			s = Math.min(t.maxY, e.maxY);
		return Math.max(0, r - i) * Math.max(0, s - n)
	}

	function To(t, e) {
		return t.minX <= e.minX && t.minY <= e.minY && e.maxX <= t.maxX && e.maxY <= t.maxY
	}

	function Po(t, e) {
		return e.minX <= t.maxX && e.minY <= t.maxY && e.maxX >= t.minX && e.maxY >= t.minY
	}

	function Ro(t) {
		return {
			children: t,
			height: 1,
			leaf: !0,
			minX: 1 / 0,
			minY: 1 / 0,
			maxX: -1 / 0,
			maxY: -1 / 0
		}
	}

	function Fo(t, e, i, n, r) {
		const s = [e, i];
		for (; s.length;) {
			if ((i = s.pop()) - (e = s.pop()) <= n) continue;
			const o = e + Math.ceil((i - e) / n / 2) * n;
			co(t, o, e, i, r), s.push(e, o, o, i)
		}
	}
	let Mo = 0;
	const Io = 0,
		Lo = 1 << Mo++,
		ko = 1 << Mo++,
		Ao = 1 << Mo++,
		Do = 1 << Mo++,
		Oo = 1 << Mo++,
		zo = Math.pow(2, 5) - 1,
		Go = {
			[Lo]: "boolean",
			[ko]: "number",
			[Ao]: "string",
			[Do]: "color",
			[Oo]: "number[]"
		},
		No = Object.keys(Go).map(Number).sort(ut);

	function jo(t) {
		const e = [];
		for (const n of No)(t & (i = n)) === i && e.push(Go[n]);
		var i;
		return 0 === e.length ? "untyped" : e.length < 3 ? e.join(" or ") : e.slice(0, -1).join(", ") + ", or " + e[e.length - 1]
	}

	function Uo(t, e) {
		return !!(t & e)
	}

	function Bo(t, e) {
		return t === e
	}
	class $o {
		constructor(t, e) {
			this.type = t, this.value = e
		}
	}
	class Vo {
		constructor(t, e, ...i) {
			this.type = t, this.operator = e, this.args = i
		}
	}

	function Xo() {
		return {
			variables: new Set,
			properties: new Set,
			featureId: !1,
			style: {}
		}
	}

	function Wo(t, e, i) {
		switch (typeof t) {
			case "boolean":
				return new $o(Lo, t);
			case "number":
				return new $o(ko, t);
			case "string": {
				let e = Ao;
				return function(t) {
					try {
						return N(t), !0
					} catch (t) {
						return !1
					}
				}(t) && (e |= Do), Bo(e & i, Io) || (e &= i), new $o(e, t)
			}
		}
		if (!Array.isArray(t)) throw new Error("Expression must be an array or a primitive value");
		if (0 === t.length) throw new Error("Empty expression");
		if ("string" == typeof t[0]) return function(t, e, i) {
			const n = t[0],
				r = Zo[n];
			if (!r) throw new Error(`Unknown operator: ${n}`);
			return r(t, e, i)
		}(t, e, i);
		for (const e of t)
			if ("number" != typeof e) throw new Error("Expected an array of numbers");
		let n = Oo;
		return 3 !== t.length && 4 !== t.length || (n |= Do), i && (n &= i), new $o(n, t)
	}
	const qo = {
			Get: "get",
			Var: "var",
			Concat: "concat",
			GeometryType: "geometry-type",
			Any: "any",
			All: "all",
			Not: "!",
			Resolution: "resolution",
			Zoom: "zoom",
			Time: "time",
			Equal: "==",
			NotEqual: "!=",
			GreaterThan: ">",
			GreaterThanOrEqualTo: ">=",
			LessThan: "<",
			LessThanOrEqualTo: "<=",
			Multiply: "*",
			Divide: "/",
			Add: "+",
			Subtract: "-",
			Clamp: "clamp",
			Mod: "%",
			Pow: "^",
			Abs: "abs",
			Floor: "floor",
			Ceil: "ceil",
			Round: "round",
			Sin: "sin",
			Cos: "cos",
			Atan: "atan",
			Sqrt: "sqrt",
			Match: "match",
			Between: "between",
			Interpolate: "interpolate",
			Case: "case",
			In: "in",
			Number: "number",
			String: "string",
			Array: "array",
			Color: "color",
			Id: "id",
			Band: "band",
			Palette: "palette"
		},
		Zo = {
			[qo.Get]: ta((([t, e]) => void 0 !== e ? function(t) {
				switch (t) {
					case "string":
						return Ao;
					case "color":
						return Do;
					case "number":
						return ko;
					case "boolean":
						return Lo;
					case "number[]":
						return Oo;
					default:
						throw new Error(`Unrecognized type hint: ${t}`)
				}
			}(e.value) : zo), Ko(1, 2), (function(t, e) {
				const i = Wo(t[1], e);
				if (!(i instanceof $o)) throw new Error("Expected a literal argument for get operation");
				if ("string" != typeof i.value) throw new Error("Expected a string argument for get operation");
				if (e.properties.add(i.value), 3 === t.length) {
					return [i, Wo(t[2], e)]
				}
				return [i]
			})),
			[qo.Var]: ta((([t]) => t.type), Ko(1, 1), (function(t, e, i, n) {
				const r = t[1];
				if ("string" != typeof r) throw new Error("Expected a string argument for var operation");
				if (e.variables.add(r), !("variables" in e.style) || void 0 === e.style.variables[r]) return [new $o(zo, r)];
				const s = Wo(e.style.variables[r], e);
				if (s.value = r, n && !Uo(n, s.type)) throw new Error(`The variable ${r} has type ${jo(s.type)} but the following type was expected: ${jo(n)}`);
				return [s]
			})),
			[qo.Id]: ta(ko | Ao, Yo, (function(t, e) {
				e.featureId = !0
			})),
			[qo.Concat]: ta(Ao, Ko(2, 1 / 0), Ho(zo)),
			[qo.GeometryType]: ta(Ao, Yo),
			[qo.Resolution]: ta(ko, Yo),
			[qo.Zoom]: ta(ko, Yo),
			[qo.Time]: ta(ko, Yo),
			[qo.Any]: ta(Lo, Ko(2, 1 / 0), Ho(Lo)),
			[qo.All]: ta(Lo, Ko(2, 1 / 0), Ho(Lo)),
			[qo.Not]: ta(Lo, Ko(1, 1), Ho(Lo)),
			[qo.Equal]: ta(Lo, Ko(2, 2), Ho(zo), Jo),
			[qo.NotEqual]: ta(Lo, Ko(2, 2), Ho(zo), Jo),
			[qo.GreaterThan]: ta(Lo, Ko(2, 2), Ho(zo), Jo),
			[qo.GreaterThanOrEqualTo]: ta(Lo, Ko(2, 2), Ho(zo), Jo),
			[qo.LessThan]: ta(Lo, Ko(2, 2), Ho(zo), Jo),
			[qo.LessThanOrEqualTo]: ta(Lo, Ko(2, 2), Ho(zo), Jo),
			[qo.Multiply]: ta((t => {
				let e = ko | Do;
				for (let i = 0; i < t.length; i++) e &= t[i].type;
				return e
			}), Ko(2, 1 / 0), Ho(ko | Do), Jo),
			[qo.Divide]: ta(ko, Ko(2, 2), Ho(ko)),
			[qo.Add]: ta(ko, Ko(2, 1 / 0), Ho(ko)),
			[qo.Subtract]: ta(ko, Ko(2, 2), Ho(ko)),
			[qo.Clamp]: ta(ko, Ko(3, 3), Ho(ko)),
			[qo.Mod]: ta(ko, Ko(2, 2), Ho(ko)),
			[qo.Pow]: ta(ko, Ko(2, 2), Ho(ko)),
			[qo.Abs]: ta(ko, Ko(1, 1), Ho(ko)),
			[qo.Floor]: ta(ko, Ko(1, 1), Ho(ko)),
			[qo.Ceil]: ta(ko, Ko(1, 1), Ho(ko)),
			[qo.Round]: ta(ko, Ko(1, 1), Ho(ko)),
			[qo.Sin]: ta(ko, Ko(1, 1), Ho(ko)),
			[qo.Cos]: ta(ko, Ko(1, 1), Ho(ko)),
			[qo.Atan]: ta(ko, Ko(1, 2), Ho(ko)),
			[qo.Sqrt]: ta(ko, Ko(1, 1), Ho(ko)),
			[qo.Match]: ta((t => {
				let e = zo;
				for (let i = 2; i < t.length; i += 2) e &= t[i].type;
				return e &= t[t.length - 1].type, e
			}), Ko(4, 1 / 0), Qo, (function(t, e, i, n) {
				const r = t.length - 1;
				let s = Wo(t[1], e).type;
				const o = Wo(t[t.length - 1], e);
				let a = void 0 !== n ? n & o.type : o.type;
				const l = new Array(r - 2);
				for (let i = 0; i < r - 2; i += 2) {
					const n = Wo(t[i + 2], e),
						r = Wo(t[i + 3], e);
					s &= n.type, a &= r.type, l[i] = n, l[i + 1] = r
				}
				const h = Ao | ko | Lo;
				if (!Uo(h, s)) throw new Error(`Expected an input of type ${jo(h)} for the interpolate operation, got ${jo(s)} instead`);
				if (Bo(a, Io)) throw new Error("Could not find a common output type for the following match operation: " + JSON.stringify(t));
				for (let i = 0; i < r - 2; i += 2) {
					const n = Wo(t[i + 2], e, s),
						r = Wo(t[i + 3], e, a);
					l[i] = n, l[i + 1] = r
				}
				return [Wo(t[1], e, s), ...l, Wo(t[t.length - 1], e, a)]
			})),
			[qo.Between]: ta(Lo, Ko(3, 3), Ho(ko)),
			[qo.Interpolate]: ta((t => {
				let e = Do | ko;
				for (let i = 3; i < t.length; i += 2) e &= t[i].type;
				return e
			}), Ko(6, 1 / 0), Qo, (function(t, e, i, n) {
				const r = t[1];
				let s;
				switch (r[0]) {
					case "linear":
						s = 1;
						break;
					case "exponential":
						if (s = r[1], "number" != typeof s) throw new Error(`Expected a number base for exponential interpolation, got ${JSON.stringify(s)} instead`);
						break;
					default:
						s = null
				}
				if (!s) throw new Error(`Invalid interpolation type: ${JSON.stringify(r)}`);
				s = Wo(s, e);
				let o = Wo(t[2], e);
				if (!Uo(ko, o.type)) throw new Error(`Expected an input of type number for the interpolate operation, got ${jo(o.type)} instead`);
				o = Wo(t[2], e, ko);
				const a = new Array(t.length - 3);
				for (let i = 0; i < a.length; i += 2) {
					let n = Wo(t[i + 3], e);
					if (!Uo(ko, n.type)) throw new Error(`Expected all stop input values in the interpolate operation to be of type number, got ${jo(n.type)} at position ${i + 2} instead`);
					let r = Wo(t[i + 4], e);
					if (!Uo(ko | Do, r.type)) throw new Error(`Expected all stop output values in the interpolate operation to be a number or color, got ${jo(r.type)} at position ${i + 3} instead`);
					n = Wo(t[i + 3], e, ko), r = Wo(t[i + 4], e, ko | Do), a[i] = n, a[i + 1] = r
				}
				return [s, o, ...a]
			})),
			[qo.Case]: ta((t => {
				let e = zo;
				for (let i = 1; i < t.length; i += 2) e &= t[i].type;
				return e &= t[t.length - 1].type, e
			}), Ko(3, 1 / 0), (function(t, e) {
				const i = t[0],
					n = t.length - 1;
				if (n % 2 == 0) throw new Error(`An odd amount of arguments was expected for operation ${i}, got ${JSON.stringify(n)} instead`)
			}), (function(t, e, i, n) {
				const r = Wo(t[t.length - 1], e);
				let s = void 0 !== n ? n & r.type : r.type;
				const o = new Array(t.length - 1);
				for (let i = 0; i < o.length - 1; i += 2) {
					const n = Wo(t[i + 1], e),
						r = Wo(t[i + 2], e);
					if (!Uo(Lo, n.type)) throw new Error(`Expected all conditions in the case operation to be of type boolean, got ${jo(n.type)} at position ${i} instead`);
					s &= r.type, o[i] = n, o[i + 1] = r
				}
				if (Bo(s, Io)) throw new Error("Could not find a common output type for the following case operation: " + JSON.stringify(t));
				for (let i = 0; i < o.length - 1; i += 2) o[i + 1] = Wo(t[i + 2], e, s);
				return o[o.length - 1] = Wo(t[t.length - 1], e, s), o
			})),
			[qo.In]: ta(Lo, Ko(2, 2), (function(t, e) {
				let i = t[2];
				if (!Array.isArray(i)) throw new Error('The "in" operator was provided a literal value which was not an array as second argument.');
				if ("string" == typeof i[0]) {
					if ("literal" !== i[0]) throw new Error('For the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions.');
					if (!Array.isArray(i[1])) throw new Error('The "in" operator was provided a literal value which was not an array as second argument.');
					i = i[1]
				}
				let n = Ao | ko;
				const r = new Array(i.length);
				for (let t = 0; t < r.length; t++) {
					const s = Wo(i[t], e);
					n &= s.type, r[t] = s
				}
				if (Bo(n, Io)) throw new Error("Could not find a common type for the following in operation: " + JSON.stringify(t));
				return [Wo(t[1], e, n), ...r]
			})),
			[qo.Number]: ta(ko, Ko(1, 1 / 0), Ho(zo)),
			[qo.String]: ta(Ao, Ko(1, 1 / 0), Ho(zo)),
			[qo.Array]: ta((t => 3 === t.length || 4 === t.length ? Oo | Do : Oo), Ko(1, 1 / 0), Ho(ko)),
			[qo.Color]: ta(Do, Ko(3, 4), Ho(ko)),
			[qo.Band]: ta(ko, Ko(1, 3), Ho(ko)),
			[qo.Palette]: ta(Do, Ko(2, 2), (function(t, e) {
				const i = Wo(t[1], e, ko);
				if (i.type !== ko) throw new Error(`The first argument of palette must be an number, got ${jo(i.type)} instead`);
				const n = t[2];
				if (!Array.isArray(n)) throw new Error("The second argument of palette must be an array");
				const r = new Array(n.length);
				for (let t = 0; t < r.length; t++) {
					const i = Wo(n[t], e, Do);
					if (!(i instanceof $o)) throw new Error(`The palette color at index ${t} must be a literal value`);
					if (!Uo(i.type, Do)) throw new Error(`The palette color at index ${t} should be of type color, got ${jo(i.type)} instead`);
					r[t] = i
				}
				return [i, ...r]
			}))
		};

	function Yo(t, e) {
		const i = t[0];
		if (1 !== t.length) throw new Error(`Expected no arguments for ${i} operation`);
		return []
	}

	function Ko(t, e) {
		return function(i, n) {
			const r = i[0],
				s = i.length - 1;
			if (t === e) {
				if (s !== t) {
					throw new Error(`Expected ${t} argument${1 === t ? "" : "s"} for ${r}, got ${s}`)
				}
			} else if (s < t || s > e) {
				throw new Error(`Expected ${e === 1 / 0 ? `${t} or more` : `${t} to ${e}`} arguments for ${r}, got ${s}`)
			}
		}
	}

	function Ho(t) {
		return function(e, i) {
			const n = e[0],
				r = e.length - 1,
				s = new Array(r);
			for (let o = 0; o < r; ++o) {
				const r = Wo(e[o + 1], i);
				if (!Uo(t, r.type)) {
					const e = jo(t),
						i = jo(r.type);
					throw new Error(`Unexpected type for argument ${o} of ${n} operation, got ${e} but expected ${i}`)
				}
				r.type &= t, s[o] = r
			}
			return s
		}
	}

	function Jo(t, e, i) {
		const n = t[0],
			r = t.length - 1;
		let s = zo;
		for (let t = 0; t < i.length; ++t) s &= i[t].type;
		if (s === Io) throw new Error(`No common type could be found for arguments of ${n} operation`);
		const o = new Array(r);
		for (let i = 0; i < r; ++i) o[i] = Wo(t[i + 1], e, s);
		return o
	}

	function Qo(t, e) {
		const i = t[0],
			n = t.length - 1;
		if (n % 2 == 1) throw new Error(`An even amount of arguments was expected for operation ${i}, got ${JSON.stringify(n)} instead`)
	}

	function ta(t, ...e) {
		return function(i, n, r) {
			const s = i[0];
			let o = [];
			for (let t = 0; t < e.length; t++) o = e[t](i, n, o, r) || o;
			let a = "function" == typeof t ? t(o) : t;
			if (void 0 !== r) {
				if (!Uo(a, r)) throw new Error(`The following expression was expected to return ${jo(r)}, but returns ${jo(a)} instead: ${JSON.stringify(i)}`);
				a &= r
			}
			if (a === Io) throw new Error(`No matching type was found for the following expression: ${JSON.stringify(i)}`);
			return new Vo(a, s, ...o)
		}
	}

	function ea(t, e, i) {
		const n = Wo(t, i);
		if (!Uo(e, n.type)) {
			const t = jo(e),
				i = jo(n.type);
			throw new Error(`Expected expression to be of type ${t}, got ${i}`)
		}
		return ia(n)
	}

	function ia(t, e) {
		if (t instanceof $o) {
			if (t.type === Do && "string" == typeof t.value) {
				const e = N(t.value);
				return function() {
					return e
				}
			}
			return function() {
				return t.value
			}
		}
		const i = t.operator;
		switch (i) {
			case qo.Number:
			case qo.String:
				return function(t, e) {
					const i = t.operator,
						n = t.args.length,
						r = new Array(n);
					for (let e = 0; e < n; ++e) r[e] = ia(t.args[e]);
					switch (i) {
						case qo.Number:
						case qo.String:
							return t => {
								for (let e = 0; e < n; ++e) {
									const n = r[e](t);
									if (typeof n === i) return n
								}
								throw new Error(`Expected one of the values to be a ${i}`)
							};
						default:
							throw new Error(`Unsupported assertion operator ${i}`)
					}
				}(t);
			case qo.Get:
			case qo.Var:
				return function(t, e) {
					const i = t.args[0],
						n = i.value;
					switch (t.operator) {
						case qo.Get:
							return t => t.properties[n];
						case qo.Var:
							return t => t.variables[n];
						default:
							throw new Error(`Unsupported accessor operator ${t.operator}`)
					}
				}(t);
			case qo.Id:
				return t => t.featureId;
			case qo.Concat: {
				const e = t.args.map((t => ia(t)));
				return t => "".concat(...e.map((e => e(t).toString())))
			}
			case qo.Resolution:
				return t => t.resolution;
			case qo.Any:
			case qo.All:
			case qo.Not:
				return function(t, e) {
					const i = t.operator,
						n = t.args.length,
						r = new Array(n);
					for (let e = 0; e < n; ++e) r[e] = ia(t.args[e]);
					switch (i) {
						case qo.Any:
							return t => {
								for (let e = 0; e < n; ++e)
									if (r[e](t)) return !0;
								return !1
							};
						case qo.All:
							return t => {
								for (let e = 0; e < n; ++e)
									if (!r[e](t)) return !1;
								return !0
							};
						case qo.Not:
							return t => !r[0](t);
						default:
							throw new Error(`Unsupported logical operator ${i}`)
					}
				}(t);
			case qo.Equal:
			case qo.NotEqual:
			case qo.LessThan:
			case qo.LessThanOrEqualTo:
			case qo.GreaterThan:
			case qo.GreaterThanOrEqualTo:
				return function(t, e) {
					const i = t.operator,
						n = ia(t.args[0]),
						r = ia(t.args[1]);
					switch (i) {
						case qo.Equal:
							return t => n(t) === r(t);
						case qo.NotEqual:
							return t => n(t) !== r(t);
						case qo.LessThan:
							return t => n(t) < r(t);
						case qo.LessThanOrEqualTo:
							return t => n(t) <= r(t);
						case qo.GreaterThan:
							return t => n(t) > r(t);
						case qo.GreaterThanOrEqualTo:
							return t => n(t) >= r(t);
						default:
							throw new Error(`Unsupported comparison operator ${i}`)
					}
				}(t);
			case qo.Multiply:
			case qo.Divide:
			case qo.Add:
			case qo.Subtract:
			case qo.Clamp:
			case qo.Mod:
			case qo.Pow:
			case qo.Abs:
			case qo.Floor:
			case qo.Ceil:
			case qo.Round:
			case qo.Sin:
			case qo.Cos:
			case qo.Atan:
			case qo.Sqrt:
				return function(t, e) {
					const i = t.operator,
						n = t.args.length,
						r = new Array(n);
					for (let e = 0; e < n; ++e) r[e] = ia(t.args[e]);
					switch (i) {
						case qo.Multiply:
							return t => {
								let e = 1;
								for (let i = 0; i < n; ++i) e *= r[i](t);
								return e
							};
						case qo.Divide:
							return t => r[0](t) / r[1](t);
						case qo.Add:
							return t => {
								let e = 0;
								for (let i = 0; i < n; ++i) e += r[i](t);
								return e
							};
						case qo.Subtract:
							return t => r[0](t) - r[1](t);
						case qo.Clamp:
							return t => {
								const e = r[0](t),
									i = r[1](t);
								if (e < i) return i;
								const n = r[2](t);
								return e > n ? n : e
							};
						case qo.Mod:
							return t => r[0](t) % r[1](t);
						case qo.Pow:
							return t => Math.pow(r[0](t), r[1](t));
						case qo.Abs:
							return t => Math.abs(r[0](t));
						case qo.Floor:
							return t => Math.floor(r[0](t));
						case qo.Ceil:
							return t => Math.ceil(r[0](t));
						case qo.Round:
							return t => Math.round(r[0](t));
						case qo.Sin:
							return t => Math.sin(r[0](t));
						case qo.Cos:
							return t => Math.cos(r[0](t));
						case qo.Atan:
							return 2 === n ? t => Math.atan2(r[0](t), r[1](t)) : t => Math.atan(r[0](t));
						case qo.Sqrt:
							return t => Math.sqrt(r[0](t));
						default:
							throw new Error(`Unsupported numeric operator ${i}`)
					}
				}(t);
			case qo.Match:
				return function(t, e) {
					const i = t.args.length,
						n = new Array(i);
					for (let e = 0; e < i; ++e) n[e] = ia(t.args[e]);
					return t => {
						const e = n[0](t);
						for (let r = 1; r < i; r += 2)
							if (e === n[r](t)) return n[r + 1](t);
						return n[i - 1](t)
					}
				}(t);
			case qo.Interpolate:
				return function(t, e) {
					const i = t.args.length,
						n = new Array(i);
					for (let e = 0; e < i; ++e) n[e] = ia(t.args[e]);
					return t => {
						const e = n[0](t),
							r = n[1](t);
						let s, o;
						for (let a = 2; a < i; a += 2) {
							const i = n[a](t);
							let l = n[a + 1](t);
							const h = Array.isArray(l);
							if (h && (l = z(l)), i >= r) return 2 === a ? l : h ? ra(e, r, s, o, i, l) : na(e, r, s, o, i, l);
							s = i, o = l
						}
						return o
					}
				}(t);
			default:
				throw new Error(`Unsupported operator ${i}`)
		}
	}

	function na(t, e, i, n, r, s) {
		const o = r - i;
		if (0 === o) return n;
		const a = e - i;
		return n + (1 === t ? a / o : (Math.pow(t, a) - 1) / (Math.pow(t, o) - 1)) * (s - n)
	}

	function ra(t, e, i, n, r, s) {
		if (0 === r - i) return n;
		const o = G(n),
			a = G(s);
		let l = a[2] - o[2];
		l > 180 ? l -= 360 : l < -180 && (l += 360);
		return U(function(t) {
			const e = p.rgb(m.xyz(t));
			return e[3] = t[3], e
		}([na(t, e, i, o[0], r, a[0]), na(t, e, i, o[1], r, a[1]), o[2] + na(t, e, i, 0, r, l), na(t, e, i, n[3], r, s[3])]))
	}

	function sa(t) {
		return !0
	}

	function oa(t) {
		const e = Xo(),
			i = function(t, e) {
				const i = t.length,
					n = new Array(i);
				for (let r = 0; r < i; ++r) {
					const i = t[r],
						s = "filter" in i ? ea(i.filter, Lo, e) : sa;
					let o;
					if (Array.isArray(i.style)) {
						const t = i.style.length;
						o = new Array(t);
						for (let n = 0; n < t; ++n) o[n] = la(i.style[n], e)
					} else o = [la(i.style, e)];
					n[r] = {
						filter: s,
						styles: o
					}
				}
				return function(e) {
					const r = [];
					let s = !1;
					for (let o = 0; o < i; ++o) {
						if ((0, n[o].filter)(e) && (!t[o].else || !s)) {
							s = !0;
							for (const t of n[o].styles) {
								const i = t(e);
								i && r.push(i)
							}
						}
					}
					return r
				}
			}(t, e),
			n = {
				variables: {},
				properties: {},
				resolution: NaN,
				featureId: null
			};
		return function(t, r) {
			if (n.properties = t.getPropertiesInternal(), n.resolution = r, e.featureId) {
				const e = t.getId();
				n.featureId = void 0 !== e ? e : null
			}
			return i(n)
		}
	}

	function aa(t) {
		const e = Xo(),
			i = t.length,
			n = new Array(i);
		for (let r = 0; r < i; ++r) n[r] = la(t[r], e);
		const r = {
				variables: {},
				properties: {},
				resolution: NaN,
				featureId: null
			},
			s = new Array(i);
		return function(t, o) {
			if (r.properties = t.getPropertiesInternal(), r.resolution = o, e.featureId) {
				const e = t.getId();
				r.featureId = void 0 !== e ? e : null
			}
			let a = 0;
			for (let t = 0; t < i; ++t) {
				const e = n[t](r);
				e && (s[a] = e, a += 1)
			}
			return s.length = a, s
		}
	}

	function la(t, e) {
		const i = ha(t, "", e),
			n = ua(t, "", e),
			r = function(t, e) {
				const i = "text-",
					n = da(t, i + "value", e);
				if (!n) return null;
				const r = ha(t, i, e),
					s = ha(t, i + "background-", e),
					o = ua(t, i, e),
					a = ua(t, i + "background-", e),
					l = da(t, i + "font", e),
					h = ca(t, i + "max-angle", e),
					u = ca(t, i + "offset-x", e),
					c = ca(t, i + "offset-y", e),
					d = ga(t, i + "overflow", e),
					g = da(t, i + "placement", e),
					p = ca(t, i + "repeat", e),
					f = _a(t, i + "scale", e),
					m = ga(t, i + "rotate-with-view", e),
					_ = ca(t, i + "rotation", e),
					y = da(t, i + "align", e),
					x = da(t, i + "justify", e),
					v = da(t, i + "baseline", e),
					w = fa(t, i + "padding", e),
					b = new us({});
				return function(t) {
					if (b.setText(n(t)), r && b.setFill(r(t)), s && b.setBackgroundFill(s(t)), o && b.setStroke(o(t)), a && b.setBackgroundStroke(a(t)), l && b.setFont(l(t)), h && b.setMaxAngle(h(t)), u && b.setOffsetX(u(t)), c && b.setOffsetY(c(t)), d && b.setOverflow(d(t)), g) {
						const e = g(t);
						if ("point" !== e && "line" !== e) throw new Error("Expected point or line for text-placement");
						b.setPlacement(e)
					}
					if (p && b.setRepeat(p(t)), f && b.setScale(f(t)), m && b.setRotateWithView(m(t)), _ && b.setRotation(_(t)), y) {
						const e = y(t);
						if ("left" !== e && "center" !== e && "right" !== e && "end" !== e && "start" !== e) throw new Error("Expected left, right, center, start, or end for text-align");
						b.setTextAlign(e)
					}
					if (x) {
						const e = x(t);
						if ("left" !== e && "right" !== e && "center" !== e) throw new Error("Expected left, right, or center for text-justify");
						b.setJustify(e)
					}
					if (v) {
						const e = v(t);
						if ("bottom" !== e && "top" !== e && "middle" !== e && "alphabetic" !== e && "hanging" !== e) throw new Error("Expected bottom, top, middle, alphabetic, or hanging for text-baseline");
						b.setTextBaseline(e)
					}
					return w && b.setPadding(w(t)), b
				}
			}(t, e),
			s = function(t, e) {
				if ("icon-src" in t) return function(t, e) {
					const i = "icon-",
						n = i + "src",
						r = Sa(t[n], n),
						s = ma(t, i + "anchor", e),
						o = _a(t, i + "scale", e),
						a = ca(t, i + "opacity", e),
						l = ma(t, i + "displacement", e),
						h = ca(t, i + "rotation", e),
						c = ga(t, i + "rotate-with-view", e),
						d = xa(t, i + "anchor-origin"),
						g = va(t, i + "anchor-x-units"),
						p = va(t, i + "anchor-y-units"),
						f = function(t, e) {
							const i = t[e];
							if (void 0 === i) return;
							return Ca(i, e)
						}(t, i + "color"),
						m = function(t, e) {
							const i = t[e];
							if (void 0 === i) return;
							if ("string" != typeof i) throw new Error(`Expected a string for ${e}`);
							return i
						}(t, i + "cross-origin"),
						_ = function(t, e) {
							const i = t[e];
							if (void 0 === i) return;
							return ba(i, e)
						}(t, i + "offset"),
						y = xa(t, i + "offset-origin"),
						x = ya(t, i + "width"),
						v = ya(t, i + "height"),
						w = function(t, e) {
							const i = t[e];
							if (void 0 === i) return;
							if ("number" == typeof i) return u(i);
							if (!Array.isArray(i)) throw new Error(`Expected a number or size array for ${e}`);
							if (2 !== i.length || "number" != typeof i[0] || "number" != typeof i[1]) throw new Error(`Expected a number or size array for ${e}`);
							return i
						}(t, i + "size"),
						b = wa(t, i + "declutter"),
						S = new ke({
							src: r,
							anchorOrigin: d,
							anchorXUnits: g,
							anchorYUnits: p,
							color: f,
							crossOrigin: m,
							offset: _,
							offsetOrigin: y,
							height: v,
							width: x,
							size: w,
							declutterMode: b
						});
					return function(t) {
						return a && S.setOpacity(a(t)), l && S.setDisplacement(l(t)), h && S.setRotation(h(t)), c && S.setRotateWithView(c(t)), o && S.setScale(o(t)), s && S.setAnchor(s(t)), S
					}
				}(t, e);
				if ("shape-points" in t) return function(t, e) {
					const i = "shape-",
						n = i + "points",
						r = Ea(t[n], n),
						s = ha(t, i, e),
						o = ua(t, i, e),
						a = _a(t, i + "scale", e),
						l = ma(t, i + "displacement", e),
						h = ca(t, i + "rotation", e),
						u = ga(t, i + "rotate-with-view", e),
						c = ya(t, i + "radius"),
						d = ya(t, i + "radius1"),
						g = ya(t, i + "radius2"),
						p = ya(t, i + "angle"),
						f = wa(t, i + "declutter-mode"),
						m = new ye({
							points: r,
							radius: c,
							radius1: d,
							radius2: g,
							angle: p,
							declutterMode: f
						});
					return function(t) {
						return s && m.setFill(s(t)), o && m.setStroke(o(t)), l && m.setDisplacement(l(t)), h && m.setRotation(h(t)), u && m.setRotateWithView(u(t)), a && m.setScale(a(t)), m
					}
				}(t, e);
				if ("circle-radius" in t) return function(t, e) {
					const i = "circle-",
						n = ha(t, i, e),
						r = ua(t, i, e),
						s = ca(t, i + "radius", e),
						o = _a(t, i + "scale", e),
						a = ma(t, i + "displacement", e),
						l = ca(t, i + "rotation", e),
						h = ga(t, i + "rotate-with-view", e),
						u = wa(t, i + "declutter-mode"),
						c = new ve({
							radius: 5,
							declutterMode: u
						});
					return function(t) {
						return s && c.setRadius(s(t)), n && c.setFill(n(t)), r && c.setStroke(r(t)), a && c.setDisplacement(a(t)), l && c.setRotation(l(t)), h && c.setRotateWithView(h(t)), o && c.setScale(o(t)), c
					}
				}(t, e);
				return null
			}(t, e),
			o = ca(t, "z-index", e);
		if (!(i || n || r || s || wt(t))) throw new Error("No fill, stroke, point, or text symbolizer properties in style: " + JSON.stringify(t));
		const a = new ls;
		return function(t) {
			let e = !0;
			if (i) {
				const n = i(t);
				n && (e = !1), a.setFill(n)
			}
			if (n) {
				const i = n(t);
				i && (e = !1), a.setStroke(i)
			}
			if (r) {
				const i = r(t);
				i && (e = !1), a.setText(i)
			}
			if (s) {
				const i = s(t);
				i && (e = !1), a.setImage(i)
			}
			return o && a.setZIndex(o(t)), e ? null : a
		}
	}

	function ha(t, e, i) {
		const n = pa(t, e + "fill-color", i);
		if (!n) return null;
		const r = new be;
		return function(t) {
			const e = n(t);
			return "none" === e ? null : (r.setColor(e), r)
		}
	}

	function ua(t, e, i) {
		const n = ca(t, e + "stroke-width", i),
			r = pa(t, e + "stroke-color", i);
		if (!n && !r) return null;
		const s = da(t, e + "stroke-line-cap", i),
			o = da(t, e + "stroke-line-join", i),
			a = fa(t, e + "stroke-line-dash", i),
			l = ca(t, e + "stroke-line-dash-offset", i),
			h = ca(t, e + "stroke-miter-limit", i),
			u = new is;
		return function(t) {
			if (r) {
				const e = r(t);
				if ("none" === e) return null;
				u.setColor(e)
			}
			if (n && u.setWidth(n(t)), s) {
				const e = s(t);
				if ("butt" !== e && "round" !== e && "square" !== e) throw new Error("Expected butt, round, or square line cap");
				u.setLineCap(e)
			}
			if (o) {
				const e = o(t);
				if ("bevel" !== e && "round" !== e && "miter" !== e) throw new Error("Expected bevel, round, or miter line join");
				u.setLineJoin(e)
			}
			return a && u.setLineDash(a(t)), l && u.setLineDashOffset(l(t)), h && u.setMiterLimit(h(t)), u
		}
	}

	function ca(t, e, i) {
		if (!(e in t)) return;
		const n = ea(t[e], ko, i);
		return function(t) {
			return Ea(n(t), e)
		}
	}

	function da(t, e, i) {
		if (!(e in t)) return null;
		const n = ea(t[e], Ao, i);
		return function(t) {
			return Sa(n(t), e)
		}
	}

	function ga(t, e, i) {
		if (!(e in t)) return null;
		const n = ea(t[e], Lo, i);
		return function(t) {
			const i = n(t);
			if ("boolean" != typeof i) throw new Error(`Expected a boolean for ${e}`);
			return i
		}
	}

	function pa(t, e, i) {
		if (!(e in t)) return null;
		const n = ea(t[e], Do | Ao, i);
		return function(t) {
			return Ca(n(t), e)
		}
	}

	function fa(t, e, i) {
		if (!(e in t)) return null;
		const n = ea(t[e], Oo, i);
		return function(t) {
			return ba(n(t), e)
		}
	}

	function ma(t, e, i) {
		if (!(e in t)) return null;
		const n = ea(t[e], Oo, i);
		return function(t) {
			const i = ba(n(t), e);
			if (2 !== i.length) throw new Error(`Expected two numbers for ${e}`);
			return i
		}
	}

	function _a(t, e, i) {
		if (!(e in t)) return null;
		const n = ea(t[e], Oo | ko, i);
		return function(t) {
			return function(t, e) {
				if ("number" == typeof t) return t;
				const i = ba(t, e);
				if (2 !== i.length) throw new Error(`Expected an array of two numbers for ${e}`);
				return i
			}(n(t), e)
		}
	}

	function ya(t, e) {
		const i = t[e];
		if (void 0 !== i) {
			if ("number" != typeof i) throw new Error(`Expected a number for ${e}`);
			return i
		}
	}

	function xa(t, e) {
		const i = t[e];
		if (void 0 !== i) {
			if ("bottom-left" !== i && "bottom-right" !== i && "top-left" !== i && "top-right" !== i) throw new Error(`Expected bottom-left, bottom-right, top-left, or top-right for ${e}`);
			return i
		}
	}

	function va(t, e) {
		const i = t[e];
		if (void 0 !== i) {
			if ("pixels" !== i && "fraction" !== i) throw new Error(`Expected pixels or fraction for ${e}`);
			return i
		}
	}

	function wa(t, e) {
		const i = t[e];
		if (void 0 !== i) {
			if ("string" != typeof i) throw new Error(`Expected a string for ${e}`);
			if ("declutter" !== i && "obstacle" !== i && "none" !== i) throw new Error(`Expected declutter, obstacle, or none for ${e}`);
			return i
		}
	}

	function ba(t, e) {
		if (!Array.isArray(t)) throw new Error(`Expected an array for ${e}`);
		const i = t.length;
		for (let n = 0; n < i; ++n)
			if ("number" != typeof t[n]) throw new Error(`Expected an array of numbers for ${e}`);
		return t
	}

	function Sa(t, e) {
		if ("string" != typeof t) throw new Error(`Expected a string for ${e}`);
		return t
	}

	function Ea(t, e) {
		if ("number" != typeof t) throw new Error(`Expected a number for ${e}`);
		return t
	}

	function Ca(t, e) {
		if ("string" == typeof t) return t;
		const i = ba(t, e),
			n = i.length;
		if (n < 3 || n > 4) throw new Error(`Expected a color with 3 or 4 values for ${e}`);
		return i
	}
	const Ta = "renderOrder";
	var Pa = class extends uo {
		constructor(t) {
			t = t || {};
			const e = Object.assign({}, t);
			delete e.style, delete e.renderBuffer, delete e.updateWhileAnimating, delete e.updateWhileInteracting, super(e), this.declutter_ = void 0 !== t.declutter && t.declutter, this.renderBuffer_ = void 0 !== t.renderBuffer ? t.renderBuffer : 100, this.style_ = null, this.styleFunction_ = void 0, this.setStyle(t.style), this.updateWhileAnimating_ = void 0 !== t.updateWhileAnimating && t.updateWhileAnimating, this.updateWhileInteracting_ = void 0 !== t.updateWhileInteracting && t.updateWhileInteracting
		}
		getDeclutter() {
			return this.declutter_
		}
		getFeatures(t) {
			return super.getFeatures(t)
		}
		getRenderBuffer() {
			return this.renderBuffer_
		}
		getRenderOrder() {
			return this.get(Ta)
		}
		getStyle() {
			return this.style_
		}
		getStyleFunction() {
			return this.styleFunction_
		}
		getUpdateWhileAnimating() {
			return this.updateWhileAnimating_
		}
		getUpdateWhileInteracting() {
			return this.updateWhileInteracting_
		}
		renderDeclutter(t) {
			t.declutterTree || (t.declutterTree = new mo(9)), this.getRenderer().renderDeclutter(t)
		}
		setRenderOrder(t) {
			this.set(Ta, t)
		}
		setStyle(t) {
			this.style_ = function(t) {
				if (void 0 === t) return ss;
				if (!t) return null;
				if ("function" == typeof t) return t;
				if (t instanceof ls) return t;
				if (!Array.isArray(t)) return aa([t]);
				if (0 === t.length) return [];
				const e = t.length,
					i = t[0];
				if (i instanceof ls) {
					const i = new Array(e);
					for (let n = 0; n < e; ++n) {
						const e = t[n];
						if (!(e instanceof ls)) throw new Error("Expected a list of style instances");
						i[n] = e
					}
					return i
				}
				if ("style" in i) {
					const i = new Array(e);
					for (let n = 0; n < e; ++n) {
						const e = t[n];
						if (!("style" in e)) throw new Error("Expected a list of rules with a style property");
						i[n] = e
					}
					return oa(i)
				}
				const n = t;
				return aa(n)
			}(t), this.styleFunction_ = null === t ? void 0 : function(t) {
				let e;
				if ("function" == typeof t) e = t;
				else {
					let i;
					Array.isArray(t) ? i = t : (Se("function" == typeof t.getZIndex, "Expected an `Style` or an array of `Style`"), i = [t]), e = function() {
						return i
					}
				}
				return e
			}(this.style_), this.changed()
		}
	};
	const Ra = {
			BEGIN_GEOMETRY: 0,
			BEGIN_PATH: 1,
			CIRCLE: 2,
			CLOSE_PATH: 3,
			CUSTOM: 4,
			DRAW_CHARS: 5,
			DRAW_IMAGE: 6,
			END_GEOMETRY: 7,
			FILL: 8,
			MOVE_TO_LINE_TO: 9,
			SET_FILL_STYLE: 10,
			SET_STROKE_STYLE: 11,
			STROKE: 12
		},
		Fa = [Ra.FILL],
		Ma = [Ra.STROKE],
		Ia = [Ra.BEGIN_PATH],
		La = [Ra.CLOSE_PATH];
	var ka = Ra;
	var Aa = class {
		drawCustom(t, e, i, n) {}
		drawGeometry(t) {}
		setStyle(t) {}
		drawCircle(t, e) {}
		drawFeature(t, e) {}
		drawGeometryCollection(t, e) {}
		drawLineString(t, e) {}
		drawMultiLineString(t, e) {}
		drawMultiPoint(t, e) {}
		drawMultiPolygon(t, e) {}
		drawPoint(t, e) {}
		drawPolygon(t, e) {}
		drawText(t, e) {}
		setFillStrokeStyle(t, e) {}
		setImageStyle(t, e) {}
		setTextStyle(t, e) {}
	};
	var Da = class extends Aa {
		constructor(t, e, i, n) {
			super(), this.tolerance = t, this.maxExtent = e, this.pixelRatio = n, this.maxLineWidth = 0, this.resolution = i, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_ = null, this.bufferedMaxExtent_ = null, this.instructions = [], this.coordinates = [], this.tmpCoordinate_ = [], this.hitDetectionInstructions = [], this.state = {}
		}
		applyPixelRatio(t) {
			const e = this.pixelRatio;
			return 1 == e ? t : t.map((function(t) {
				return t * e
			}))
		}
		appendFlatPointCoordinates(t, e) {
			const i = this.getBufferedMaxExtent(),
				n = this.tmpCoordinate_,
				r = this.coordinates;
			let s = r.length;
			for (let o = 0, a = t.length; o < a; o += e) n[0] = t[o], n[1] = t[o + 1], Je(i, n) && (r[s++] = n[0], r[s++] = n[1]);
			return s
		}
		appendFlatLineCoordinates(t, e, i, n, r, s) {
			const o = this.coordinates;
			let a = o.length;
			const l = this.getBufferedMaxExtent();
			s && (e += n);
			let h = t[e],
				u = t[e + 1];
			const c = this.tmpCoordinate_;
			let d, g, p, f = !0;
			for (d = e + n; d < i; d += n) c[0] = t[d], c[1] = t[d + 1], p = ei(l, c), p !== g ? (f && (o[a++] = h, o[a++] = u, f = !1), o[a++] = c[0], o[a++] = c[1]) : p === qe.INTERSECTING ? (o[a++] = c[0], o[a++] = c[1], f = !1) : f = !0, h = c[0], u = c[1], g = p;
			return (r && f || d === e + n) && (o[a++] = h, o[a++] = u), a
		}
		drawCustomCoordinates_(t, e, i, n, r) {
			for (let s = 0, o = i.length; s < o; ++s) {
				const o = i[s],
					a = this.appendFlatLineCoordinates(t, e, o, n, !1, !1);
				r.push(a), e = o
			}
			return e
		}
		drawCustom(t, e, i, n) {
			this.beginGeometry(t, e);
			const r = t.getType(),
				s = t.getStride(),
				o = this.coordinates.length;
			let a, l, h, u, c;
			switch (r) {
				case "MultiPolygon":
					a = t.getOrientedFlatCoordinates(), u = [];
					const e = t.getEndss();
					c = 0;
					for (let t = 0, i = e.length; t < i; ++t) {
						const i = [];
						c = this.drawCustomCoordinates_(a, c, e[t], s, i), u.push(i)
					}
					this.instructions.push([ka.CUSTOM, o, u, t, i, pr]), this.hitDetectionInstructions.push([ka.CUSTOM, o, u, t, n || i, pr]);
					break;
				case "Polygon":
				case "MultiLineString":
					h = [], a = "Polygon" == r ? t.getOrientedFlatCoordinates() : t.getFlatCoordinates(), c = this.drawCustomCoordinates_(a, 0, t.getEnds(), s, h), this.instructions.push([ka.CUSTOM, o, h, t, i, gr]), this.hitDetectionInstructions.push([ka.CUSTOM, o, h, t, n || i, gr]);
					break;
				case "LineString":
				case "Circle":
					a = t.getFlatCoordinates(), l = this.appendFlatLineCoordinates(a, 0, a.length, s, !1, !1), this.instructions.push([ka.CUSTOM, o, l, t, i, dr]), this.hitDetectionInstructions.push([ka.CUSTOM, o, l, t, n || i, dr]);
					break;
				case "MultiPoint":
					a = t.getFlatCoordinates(), l = this.appendFlatPointCoordinates(a, s), l > o && (this.instructions.push([ka.CUSTOM, o, l, t, i, dr]), this.hitDetectionInstructions.push([ka.CUSTOM, o, l, t, n || i, dr]));
					break;
				case "Point":
					a = t.getFlatCoordinates(), this.coordinates.push(a[0], a[1]), l = this.coordinates.length, this.instructions.push([ka.CUSTOM, o, l, t, i]), this.hitDetectionInstructions.push([ka.CUSTOM, o, l, t, n || i])
			}
			this.endGeometry(e)
		}
		beginGeometry(t, e) {
			this.beginGeometryInstruction1_ = [ka.BEGIN_GEOMETRY, e, 0, t], this.instructions.push(this.beginGeometryInstruction1_), this.beginGeometryInstruction2_ = [ka.BEGIN_GEOMETRY, e, 0, t], this.hitDetectionInstructions.push(this.beginGeometryInstruction2_)
		}
		finish() {
			return {
				instructions: this.instructions,
				hitDetectionInstructions: this.hitDetectionInstructions,
				coordinates: this.coordinates
			}
		}
		reverseHitDetectionInstructions() {
			const t = this.hitDetectionInstructions;
			let e;
			t.reverse();
			const i = t.length;
			let n, r, s = -1;
			for (e = 0; e < i; ++e) n = t[e], r = n[0], r == ka.END_GEOMETRY ? s = e : r == ka.BEGIN_GEOMETRY && (n[2] = e, dt(this.hitDetectionInstructions, s, e), s = -1)
		}
		setFillStrokeStyle(t, e) {
			const i = this.state;
			if (t) {
				const e = t.getColor();
				i.fillStyle = $(e || Qt)
			} else i.fillStyle = void 0;
			if (e) {
				const t = e.getColor();
				i.strokeStyle = $(t || ne);
				const n = e.getLineCap();
				i.lineCap = void 0 !== n ? n : te;
				const r = e.getLineDash();
				i.lineDash = r ? r.slice() : ee;
				const s = e.getLineDashOffset();
				i.lineDashOffset = s || 0;
				const o = e.getLineJoin();
				i.lineJoin = void 0 !== o ? o : ie;
				const a = e.getWidth();
				i.lineWidth = void 0 !== a ? a : 1;
				const l = e.getMiterLimit();
				i.miterLimit = void 0 !== l ? l : 10, i.lineWidth > this.maxLineWidth && (this.maxLineWidth = i.lineWidth, this.bufferedMaxExtent_ = null)
			} else i.strokeStyle = void 0, i.lineCap = void 0, i.lineDash = null, i.lineDashOffset = void 0, i.lineJoin = void 0, i.lineWidth = void 0, i.miterLimit = void 0
		}
		createFill(t) {
			const e = t.fillStyle,
				i = [ka.SET_FILL_STYLE, e];
			return "string" != typeof e && i.push(!0), i
		}
		applyStroke(t) {
			this.instructions.push(this.createStroke(t))
		}
		createStroke(t) {
			return [ka.SET_STROKE_STYLE, t.strokeStyle, t.lineWidth * this.pixelRatio, t.lineCap, t.lineJoin, t.miterLimit, this.applyPixelRatio(t.lineDash), t.lineDashOffset * this.pixelRatio]
		}
		updateFillStyle(t, e) {
			const i = t.fillStyle;
			"string" == typeof i && t.currentFillStyle == i || (void 0 !== i && this.instructions.push(e.call(this, t)), t.currentFillStyle = i)
		}
		updateStrokeStyle(t, e) {
			const i = t.strokeStyle,
				n = t.lineCap,
				r = t.lineDash,
				s = t.lineDashOffset,
				o = t.lineJoin,
				a = t.lineWidth,
				l = t.miterLimit;
			(t.currentStrokeStyle != i || t.currentLineCap != n || r != t.currentLineDash && !pt(t.currentLineDash, r) || t.currentLineDashOffset != s || t.currentLineJoin != o || t.currentLineWidth != a || t.currentMiterLimit != l) && (void 0 !== i && e.call(this, t), t.currentStrokeStyle = i, t.currentLineCap = n, t.currentLineDash = r, t.currentLineDashOffset = s, t.currentLineJoin = o, t.currentLineWidth = a, t.currentMiterLimit = l)
		}
		endGeometry(t) {
			this.beginGeometryInstruction1_[2] = this.instructions.length, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length, this.beginGeometryInstruction2_ = null;
			const e = [ka.END_GEOMETRY, t];
			this.instructions.push(e), this.hitDetectionInstructions.push(e)
		}
		getBufferedMaxExtent() {
			if (!this.bufferedMaxExtent_ && (this.bufferedMaxExtent_ = Ke(this.maxExtent), this.maxLineWidth > 0)) {
				const t = this.resolution * (this.maxLineWidth + 1) / 2;
				Ye(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_)
			}
			return this.bufferedMaxExtent_
		}
	};
	var Oa = class extends Da {
		constructor(t, e, i, n) {
			super(t, e, i, n), this.hitDetectionImage_ = null, this.image_ = null, this.imagePixelRatio_ = void 0, this.anchorX_ = void 0, this.anchorY_ = void 0, this.height_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.scale_ = void 0, this.width_ = void 0, this.declutterMode_ = void 0, this.declutterImageWithText_ = void 0
		}
		drawPoint(t, e) {
			if (!this.image_) return;
			this.beginGeometry(t, e);
			const i = t.getFlatCoordinates(),
				n = t.getStride(),
				r = this.coordinates.length,
				s = this.appendFlatPointCoordinates(i, n);
			this.instructions.push([ka.DRAW_IMAGE, r, s, this.image_, this.anchorX_ * this.imagePixelRatio_, this.anchorY_ * this.imagePixelRatio_, Math.ceil(this.height_ * this.imagePixelRatio_), this.opacity_, this.originX_ * this.imagePixelRatio_, this.originY_ * this.imagePixelRatio_, this.rotateWithView_, this.rotation_, [this.scale_[0] * this.pixelRatio / this.imagePixelRatio_, this.scale_[1] * this.pixelRatio / this.imagePixelRatio_], Math.ceil(this.width_ * this.imagePixelRatio_), this.declutterMode_, this.declutterImageWithText_]), this.hitDetectionInstructions.push([ka.DRAW_IMAGE, r, s, this.hitDetectionImage_, this.anchorX_, this.anchorY_, this.height_, 1, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_, this.width_, this.declutterMode_, this.declutterImageWithText_]), this.endGeometry(e)
		}
		drawMultiPoint(t, e) {
			if (!this.image_) return;
			this.beginGeometry(t, e);
			const i = t.getFlatCoordinates(),
				n = t.getStride(),
				r = this.coordinates.length,
				s = this.appendFlatPointCoordinates(i, n);
			this.instructions.push([ka.DRAW_IMAGE, r, s, this.image_, this.anchorX_ * this.imagePixelRatio_, this.anchorY_ * this.imagePixelRatio_, Math.ceil(this.height_ * this.imagePixelRatio_), this.opacity_, this.originX_ * this.imagePixelRatio_, this.originY_ * this.imagePixelRatio_, this.rotateWithView_, this.rotation_, [this.scale_[0] * this.pixelRatio / this.imagePixelRatio_, this.scale_[1] * this.pixelRatio / this.imagePixelRatio_], Math.ceil(this.width_ * this.imagePixelRatio_), this.declutterMode_, this.declutterImageWithText_]), this.hitDetectionInstructions.push([ka.DRAW_IMAGE, r, s, this.hitDetectionImage_, this.anchorX_, this.anchorY_, this.height_, 1, this.originX_, this.originY_, this.rotateWithView_, this.rotation_, this.scale_, this.width_, this.declutterMode_, this.declutterImageWithText_]), this.endGeometry(e)
		}
		finish() {
			return this.reverseHitDetectionInstructions(), this.anchorX_ = void 0, this.anchorY_ = void 0, this.hitDetectionImage_ = null, this.image_ = null, this.imagePixelRatio_ = void 0, this.height_ = void 0, this.scale_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.width_ = void 0, super.finish()
		}
		setImageStyle(t, e) {
			const i = t.getAnchor(),
				n = t.getSize(),
				r = t.getOrigin();
			this.imagePixelRatio_ = t.getPixelRatio(this.pixelRatio), this.anchorX_ = i[0], this.anchorY_ = i[1], this.hitDetectionImage_ = t.getHitDetectionImage(), this.image_ = t.getImage(this.pixelRatio), this.height_ = n[1], this.opacity_ = t.getOpacity(), this.originX_ = r[0], this.originY_ = r[1], this.rotateWithView_ = t.getRotateWithView(), this.rotation_ = t.getRotation(), this.scale_ = t.getScaleArray(), this.width_ = n[0], this.declutterMode_ = t.getDeclutterMode(), this.declutterImageWithText_ = e
		}
	};
	var za = class extends Da {
		constructor(t, e, i, n) {
			super(t, e, i, n)
		}
		drawFlatCoordinates_(t, e, i, n) {
			const r = this.coordinates.length,
				s = this.appendFlatLineCoordinates(t, e, i, n, !1, !1),
				o = [ka.MOVE_TO_LINE_TO, r, s];
			return this.instructions.push(o), this.hitDetectionInstructions.push(o), i
		}
		drawLineString(t, e) {
			const i = this.state,
				n = i.strokeStyle,
				r = i.lineWidth;
			if (void 0 === n || void 0 === r) return;
			this.updateStrokeStyle(i, this.applyStroke), this.beginGeometry(t, e), this.hitDetectionInstructions.push([ka.SET_STROKE_STYLE, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, ee, 0], Ia);
			const s = t.getFlatCoordinates(),
				o = t.getStride();
			this.drawFlatCoordinates_(s, 0, s.length, o), this.hitDetectionInstructions.push(Ma), this.endGeometry(e)
		}
		drawMultiLineString(t, e) {
			const i = this.state,
				n = i.strokeStyle,
				r = i.lineWidth;
			if (void 0 === n || void 0 === r) return;
			this.updateStrokeStyle(i, this.applyStroke), this.beginGeometry(t, e), this.hitDetectionInstructions.push([ka.SET_STROKE_STYLE, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, ee, 0], Ia);
			const s = t.getEnds(),
				o = t.getFlatCoordinates(),
				a = t.getStride();
			let l = 0;
			for (let t = 0, e = s.length; t < e; ++t) l = this.drawFlatCoordinates_(o, l, s[t], a);
			this.hitDetectionInstructions.push(Ma), this.endGeometry(e)
		}
		finish() {
			const t = this.state;
			return null != t.lastStroke && t.lastStroke != this.coordinates.length && this.instructions.push(Ma), this.reverseHitDetectionInstructions(), this.state = null, super.finish()
		}
		applyStroke(t) {
			null != t.lastStroke && t.lastStroke != this.coordinates.length && (this.instructions.push(Ma), t.lastStroke = this.coordinates.length), t.lastStroke = 0, super.applyStroke(t), this.instructions.push(Ia)
		}
	};
	var Ga = class extends Da {
		constructor(t, e, i, n) {
			super(t, e, i, n)
		}
		drawFlatCoordinatess_(t, e, i, n) {
			const r = this.state,
				s = void 0 !== r.fillStyle,
				o = void 0 !== r.strokeStyle,
				a = i.length;
			this.instructions.push(Ia), this.hitDetectionInstructions.push(Ia);
			for (let r = 0; r < a; ++r) {
				const s = i[r],
					a = this.coordinates.length,
					l = this.appendFlatLineCoordinates(t, e, s, n, !0, !o),
					h = [ka.MOVE_TO_LINE_TO, a, l];
				this.instructions.push(h), this.hitDetectionInstructions.push(h), o && (this.instructions.push(La), this.hitDetectionInstructions.push(La)), e = s
			}
			return s && (this.instructions.push(Fa), this.hitDetectionInstructions.push(Fa)), o && (this.instructions.push(Ma), this.hitDetectionInstructions.push(Ma)), e
		}
		drawCircle(t, e) {
			const i = this.state,
				n = i.fillStyle,
				r = i.strokeStyle;
			if (void 0 === n && void 0 === r) return;
			this.setFillStrokeStyles_(), this.beginGeometry(t, e), void 0 !== i.fillStyle && this.hitDetectionInstructions.push([ka.SET_FILL_STYLE, Qt]), void 0 !== i.strokeStyle && this.hitDetectionInstructions.push([ka.SET_STROKE_STYLE, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, ee, 0]);
			const s = t.getFlatCoordinates(),
				o = t.getStride(),
				a = this.coordinates.length;
			this.appendFlatLineCoordinates(s, 0, s.length, o, !1, !1);
			const l = [ka.CIRCLE, a];
			this.instructions.push(Ia, l), this.hitDetectionInstructions.push(Ia, l), void 0 !== i.fillStyle && (this.instructions.push(Fa), this.hitDetectionInstructions.push(Fa)), void 0 !== i.strokeStyle && (this.instructions.push(Ma), this.hitDetectionInstructions.push(Ma)), this.endGeometry(e)
		}
		drawPolygon(t, e) {
			const i = this.state,
				n = i.fillStyle,
				r = i.strokeStyle;
			if (void 0 === n && void 0 === r) return;
			this.setFillStrokeStyles_(), this.beginGeometry(t, e), void 0 !== i.fillStyle && this.hitDetectionInstructions.push([ka.SET_FILL_STYLE, Qt]), void 0 !== i.strokeStyle && this.hitDetectionInstructions.push([ka.SET_STROKE_STYLE, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, ee, 0]);
			const s = t.getEnds(),
				o = t.getOrientedFlatCoordinates(),
				a = t.getStride();
			this.drawFlatCoordinatess_(o, 0, s, a), this.endGeometry(e)
		}
		drawMultiPolygon(t, e) {
			const i = this.state,
				n = i.fillStyle,
				r = i.strokeStyle;
			if (void 0 === n && void 0 === r) return;
			this.setFillStrokeStyles_(), this.beginGeometry(t, e), void 0 !== i.fillStyle && this.hitDetectionInstructions.push([ka.SET_FILL_STYLE, Qt]), void 0 !== i.strokeStyle && this.hitDetectionInstructions.push([ka.SET_STROKE_STYLE, i.strokeStyle, i.lineWidth, i.lineCap, i.lineJoin, i.miterLimit, ee, 0]);
			const s = t.getEndss(),
				o = t.getOrientedFlatCoordinates(),
				a = t.getStride();
			let l = 0;
			for (let t = 0, e = s.length; t < e; ++t) l = this.drawFlatCoordinatess_(o, l, s[t], a);
			this.endGeometry(e)
		}
		finish() {
			this.reverseHitDetectionInstructions(), this.state = null;
			const t = this.tolerance;
			if (0 !== t) {
				const e = this.coordinates;
				for (let i = 0, n = e.length; i < n; ++i) e[i] = hr(e[i], t)
			}
			return super.finish()
		}
		setFillStrokeStyles_() {
			const t = this.state;
			void 0 !== t.fillStyle && this.updateFillStyle(t, this.createFill), void 0 !== t.strokeStyle && this.updateStrokeStyle(t, this.applyStroke)
		}
	};

	function Na(t, e, i, n, r) {
		const s = [];
		let o = i,
			a = 0,
			l = e.slice(i, 2);
		for (; a < t && o + r < n;) {
			const [i, n] = l.slice(-2), h = e[o + r], u = e[o + r + 1], c = Math.sqrt((h - i) * (h - i) + (u - n) * (u - n));
			if (a += c, a >= t) {
				const e = (t - a + c) / c,
					d = R(i, h, e),
					g = R(n, u, e);
				l.push(d, g), s.push(l), l = [d, g], a == t && (o += r), a = 0
			} else if (a < t) l.push(e[o + r], e[o + r + 1]), o += r;
			else {
				const t = c - a,
					e = R(i, h, t / c),
					d = R(n, u, t / c);
				l.push(e, d), s.push(l), l = [e, d], a = 0, o += r
			}
		}
		return a > 0 && s.push(l), s
	}

	function ja(t, e, i, n, r) {
		let s, o, a, l, h, u, c, d, g, p, f = i,
			m = i,
			_ = 0,
			y = 0,
			x = i;
		for (o = i; o < n; o += r) {
			const i = e[o],
				n = e[o + 1];
			void 0 !== h && (g = i - h, p = n - u, l = Math.sqrt(g * g + p * p), void 0 !== c && (y += a, s = Math.acos((c * g + d * p) / (a * l)), s > t && (y > _ && (_ = y, f = x, m = o), y = 0, x = o - r)), a = l, c = g, d = p), h = i, u = n
		}
		return y += l, y > _ ? [x, o] : [f, m]
	}
	const Ua = {
		left: 0,
		center: .5,
		right: 1,
		top: 0,
		middle: .5,
		hanging: .2,
		alphabetic: .8,
		ideographic: .8,
		bottom: 1
	};
	const Ba = {
		Circle: Ga,
		Default: Da,
		Image: Oa,
		LineString: za,
		Polygon: Ga,
		Text: class extends Da {
			constructor(t, e, i, n) {
				super(t, e, i, n), this.labels_ = null, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = void 0, this.textRotation_ = 0, this.textFillState_ = null, this.fillStates = {}, this.fillStates[Qt] = {
					fillStyle: Qt
				}, this.textStrokeState_ = null, this.strokeStates = {}, this.textState_ = {}, this.textStates = {}, this.textKey_ = "", this.fillKey_ = "", this.strokeKey_ = "", this.declutterImageWithText_ = void 0
			}
			finish() {
				const t = super.finish();
				return t.textStates = this.textStates, t.fillStates = this.fillStates, t.strokeStates = this.strokeStates, t
			}
			drawText(t, e) {
				const i = this.textFillState_,
					n = this.textStrokeState_,
					r = this.textState_;
				if ("" === this.text_ || !r || !i && !n) return;
				const s = this.coordinates;
				let o = s.length;
				const a = t.getType();
				let l = null,
					h = t.getStride();
				if ("line" !== r.placement || "LineString" != a && "MultiLineString" != a && "Polygon" != a && "MultiPolygon" != a) {
					let i = r.overflow ? null : [];
					switch (a) {
						case "Point":
						case "MultiPoint":
							l = t.getFlatCoordinates();
							break;
						case "LineString":
							l = t.getFlatMidpoint();
							break;
						case "Circle":
							l = t.getCenter();
							break;
						case "MultiLineString":
							l = t.getFlatMidpoints(), h = 2;
							break;
						case "Polygon":
							l = t.getFlatInteriorPoint(), r.overflow || i.push(l[2] / this.resolution), h = 3;
							break;
						case "MultiPolygon":
							const e = t.getFlatInteriorPoints();
							l = [];
							for (let t = 0, n = e.length; t < n; t += 3) r.overflow || i.push(e[t + 2] / this.resolution), l.push(e[t], e[t + 1]);
							if (0 === l.length) return;
							h = 2
					}
					const n = this.appendFlatPointCoordinates(l, h);
					if (n === o) return;
					if (i && (n - o) / 2 != l.length / h) {
						let t = o / 2;
						i = i.filter(((e, i) => {
							const n = s[2 * (t + i)] === l[i * h] && s[2 * (t + i) + 1] === l[i * h + 1];
							return n || --t, n
						}))
					}
					this.saveTextStates_(), (r.backgroundFill || r.backgroundStroke) && (this.setFillStrokeStyle(r.backgroundFill, r.backgroundStroke), r.backgroundFill && this.updateFillStyle(this.state, this.createFill), r.backgroundStroke && (this.updateStrokeStyle(this.state, this.applyStroke), this.hitDetectionInstructions.push(this.createStroke(this.state)))), this.beginGeometry(t, e);
					let u = r.padding;
					if (u != oe && (r.scale[0] < 0 || r.scale[1] < 0)) {
						let t = r.padding[0],
							e = r.padding[1],
							i = r.padding[2],
							n = r.padding[3];
						r.scale[0] < 0 && (e = -e, n = -n), r.scale[1] < 0 && (t = -t, i = -i), u = [t, e, i, n]
					}
					const c = this.pixelRatio;
					this.instructions.push([ka.DRAW_IMAGE, o, n, null, NaN, NaN, NaN, 1, 0, 0, this.textRotateWithView_, this.textRotation_, [1, 1], NaN, void 0, this.declutterImageWithText_, u == oe ? oe : u.map((function(t) {
						return t * c
					})), !!r.backgroundFill, !!r.backgroundStroke, this.text_, this.textKey_, this.strokeKey_, this.fillKey_, this.textOffsetX_, this.textOffsetY_, i]);
					const d = 1 / c,
						g = this.state.fillStyle;
					r.backgroundFill && (this.state.fillStyle = Qt, this.hitDetectionInstructions.push(this.createFill(this.state))), this.hitDetectionInstructions.push([ka.DRAW_IMAGE, o, n, null, NaN, NaN, NaN, 1, 0, 0, this.textRotateWithView_, this.textRotation_, [d, d], NaN, void 0, this.declutterImageWithText_, u, !!r.backgroundFill, !!r.backgroundStroke, this.text_, this.textKey_, this.strokeKey_, this.fillKey_ ? Qt : this.fillKey_, this.textOffsetX_, this.textOffsetY_, i]), r.backgroundFill && (this.state.fillStyle = g, this.hitDetectionInstructions.push(this.createFill(this.state))), this.endGeometry(e)
				} else {
					if (!Ci(this.getBufferedMaxExtent(), t.getExtent())) return;
					let i;
					if (l = t.getFlatCoordinates(), "LineString" == a) i = [l.length];
					else if ("MultiLineString" == a) i = t.getEnds();
					else if ("Polygon" == a) i = t.getEnds().slice(0, 1);
					else if ("MultiPolygon" == a) {
						const e = t.getEndss();
						i = [];
						for (let t = 0, n = e.length; t < n; ++t) i.push(e[t][0])
					}
					this.beginGeometry(t, e);
					const n = r.repeat,
						u = n ? void 0 : r.textAlign;
					let c = 0;
					for (let t = 0, e = i.length; t < e; ++t) {
						let e;
						e = n ? Na(n * this.resolution, l, c, i[t], h) : [l.slice(c, i[t])];
						for (let n = 0, a = e.length; n < a; ++n) {
							const a = e[n];
							let l = 0,
								d = a.length;
							if (null == u) {
								const t = ja(r.maxAngle, a, 0, a.length, 2);
								l = t[0], d = t[1]
							}
							for (let t = l; t < d; t += h) s.push(a[t], a[t + 1]);
							const g = s.length;
							c = i[t], this.drawChars_(o, g), o = g
						}
					}
					this.endGeometry(e)
				}
			}
			saveTextStates_() {
				const t = this.textStrokeState_,
					e = this.textState_,
					i = this.textFillState_,
					n = this.strokeKey_;
				t && (n in this.strokeStates || (this.strokeStates[n] = {
					strokeStyle: t.strokeStyle,
					lineCap: t.lineCap,
					lineDashOffset: t.lineDashOffset,
					lineWidth: t.lineWidth,
					lineJoin: t.lineJoin,
					miterLimit: t.miterLimit,
					lineDash: t.lineDash
				}));
				const r = this.textKey_;
				r in this.textStates || (this.textStates[r] = {
					font: e.font,
					textAlign: e.textAlign || re,
					justify: e.justify,
					textBaseline: e.textBaseline || se,
					scale: e.scale
				});
				const s = this.fillKey_;
				i && (s in this.fillStates || (this.fillStates[s] = {
					fillStyle: i.fillStyle
				}))
			}
			drawChars_(t, e) {
				const i = this.textStrokeState_,
					n = this.textState_,
					r = this.strokeKey_,
					s = this.textKey_,
					o = this.fillKey_;
				this.saveTextStates_();
				const a = this.pixelRatio,
					l = Ua[n.textBaseline],
					h = this.textOffsetY_ * a,
					u = this.text_,
					c = i ? i.lineWidth * Math.abs(n.scale[0]) / 2 : 0;
				this.instructions.push([ka.DRAW_CHARS, t, e, l, n.overflow, o, n.maxAngle, a, h, r, c * a, u, s, 1]), this.hitDetectionInstructions.push([ka.DRAW_CHARS, t, e, l, n.overflow, o ? Qt : o, n.maxAngle, a, h, r, c * a, u, s, 1 / a])
			}
			setTextStyle(t, e) {
				let i, n, r;
				if (t) {
					const e = t.getFill();
					e ? (n = this.textFillState_, n || (n = {}, this.textFillState_ = n), n.fillStyle = $(e.getColor() || Qt)) : (n = null, this.textFillState_ = n);
					const s = t.getStroke();
					if (s) {
						r = this.textStrokeState_, r || (r = {}, this.textStrokeState_ = r);
						const t = s.getLineDash(),
							e = s.getLineDashOffset(),
							i = s.getWidth(),
							n = s.getMiterLimit();
						r.lineCap = s.getLineCap() || te, r.lineDash = t ? t.slice() : ee, r.lineDashOffset = void 0 === e ? 0 : e, r.lineJoin = s.getLineJoin() || ie, r.lineWidth = void 0 === i ? 1 : i, r.miterLimit = void 0 === n ? 10 : n, r.strokeStyle = $(s.getColor() || ne)
					} else r = null, this.textStrokeState_ = r;
					i = this.textState_;
					const o = t.getFont() || Jt;
					ce(o);
					const a = t.getScaleArray();
					i.overflow = t.getOverflow(), i.font = o, i.maxAngle = t.getMaxAngle(), i.placement = t.getPlacement(), i.textAlign = t.getTextAlign(), i.repeat = t.getRepeat(), i.justify = t.getJustify(), i.textBaseline = t.getTextBaseline() || se, i.backgroundFill = t.getBackgroundFill(), i.backgroundStroke = t.getBackgroundStroke(), i.padding = t.getPadding() || oe, i.scale = void 0 === a ? [1, 1] : a;
					const h = t.getOffsetX(),
						u = t.getOffsetY(),
						c = t.getRotateWithView(),
						d = t.getRotation();
					this.text_ = t.getText() || "", this.textOffsetX_ = void 0 === h ? 0 : h, this.textOffsetY_ = void 0 === u ? 0 : u, this.textRotateWithView_ = void 0 !== c && c, this.textRotation_ = void 0 === d ? 0 : d, this.strokeKey_ = r ? ("string" == typeof r.strokeStyle ? r.strokeStyle : l(r.strokeStyle)) + r.lineCap + r.lineDashOffset + "|" + r.lineWidth + r.lineJoin + r.miterLimit + "[" + r.lineDash.join() + "]" : "", this.textKey_ = i.font + i.scale + (i.textAlign || "?") + (i.repeat || "?") + (i.justify || "?") + (i.textBaseline || "?"), this.fillKey_ = n ? "string" == typeof n.fillStyle ? n.fillStyle : "|" + l(n.fillStyle) : ""
				} else this.text_ = "";
				this.declutterImageWithText_ = e
			}
		}
	};
	var $a = class {
		constructor(t, e, i, n) {
			this.tolerance_ = t, this.maxExtent_ = e, this.pixelRatio_ = n, this.resolution_ = i, this.buildersByZIndex_ = {}
		}
		finish() {
			const t = {};
			for (const e in this.buildersByZIndex_) {
				t[e] = t[e] || {};
				const i = this.buildersByZIndex_[e];
				for (const n in i) {
					const r = i[n].finish();
					t[e][n] = r
				}
			}
			return t
		}
		getBuilder(t, e) {
			const i = void 0 !== t ? t.toString() : "0";
			let n = this.buildersByZIndex_[i];
			void 0 === n && (n = {}, this.buildersByZIndex_[i] = n);
			let r = n[e];
			if (void 0 === r) {
				r = new(0, Ba[e])(this.tolerance_, this.maxExtent_, this.resolution_, this.pixelRatio_), n[e] = r
			}
			return r
		}
	};
	var Va = class extends Ut {
		constructor(t) {
			super(), this.ready = !0, this.boundHandleImageChange_ = this.handleImageChange_.bind(this), this.layer_ = t, this.declutterExecutorGroup = null
		}
		getFeatures(t) {
			return o()
		}
		getData(t) {
			return null
		}
		prepareFrame(t) {
			return o()
		}
		renderFrame(t, e) {
			return o()
		}
		loadedTileCallback(t, e, i) {
			t[e] || (t[e] = {}), t[e][i.tileCoord.toString()] = i
		}
		createLoadedTileFinder(t, e, i) {
			return (n, r) => {
				const s = this.loadedTileCallback.bind(this, i, n);
				return t.forEachLoadedTile(e, n, r, s)
			}
		}
		forEachFeatureAtCoordinate(t, e, i, n, r) {}
		getLayer() {
			return this.layer_
		}
		handleFontsChanged() {}
		handleImageChange_(t) {
			const e = t.target;
			e.getState() !== n && e.getState() !== r || this.renderIfReadyAndVisible()
		}
		loadImage(t) {
			let i = t.getState();
			return i != n && i != r && t.addEventListener(St, this.boundHandleImageChange_), i == e && (t.load(), i = t.getState()), i == n
		}
		renderIfReadyAndVisible() {
			const t = this.getLayer();
			t && t.getVisible() && "ready" === t.getSourceState() && t.changed()
		}
		disposeInternal() {
			delete this.layer_, super.disposeInternal()
		}
	};
	var Xa = class extends at {
		constructor(t, e, i, n) {
			super(t), this.inversePixelTransform = e, this.frameState = i, this.context = n
		}
	};
	const Wa = [];
	let qa = null;
	var Za = class extends Va {
		constructor(t) {
			super(t), this.container = null, this.renderedResolution, this.tempTransform = [1, 0, 0, 1, 0, 0], this.pixelTransform = [1, 0, 0, 1, 0, 0], this.inversePixelTransform = [1, 0, 0, 1, 0, 0], this.context = null, this.containerReused = !1, this.pixelContext_ = null, this.frameState = null
		}
		getImageData(t, e, i) {
			let n;
			qa || (qa = tt(1, 1, void 0, {
				willReadFrequently: !0
			})), qa.clearRect(0, 0, 1, 1);
			try {
				qa.drawImage(t, e, i, 1, 1, 0, 0, 1, 1), n = qa.getImageData(0, 0, 1, 1).data
			} catch (t) {
				return qa = null, null
			}
			return n
		}
		getBackground(t) {
			let e = this.getLayer().getBackground();
			return "function" == typeof e && (e = e(t.viewState.resolution)), e || void 0
		}
		useContainer(t, e, i) {
			const n = this.getLayer().getClassName();
			let r, s;
			if (t && t.className === n && (!i || t && t.style.backgroundColor && pt(j(t.style.backgroundColor), j(i)))) {
				const e = t.firstElementChild;
				e instanceof HTMLCanvasElement && (s = e.getContext("2d"))
			}
			if (s && s.canvas.style.transform === e ? (this.container = t, this.context = s, this.containerReused = !0) : this.containerReused ? (this.container = null, this.context = null, this.containerReused = !1) : this.container && (this.container.style.backgroundColor = null), !this.container) {
				r = document.createElement("div"), r.className = n;
				let t = r.style;
				t.position = "absolute", t.width = "100%", t.height = "100%", s = tt();
				const e = s.canvas;
				r.appendChild(e), t = e.style, t.position = "absolute", t.left = "0", t.transformOrigin = "top left", this.container = r, this.context = s
			}
			this.containerReused || !i || this.container.style.backgroundColor || (this.container.style.backgroundColor = i)
		}
		clipUnrotated(t, e, i) {
			const n = bi(i),
				r = Si(i),
				s = fi(i),
				o = pi(i);
			je(e.coordinateToPixelTransform, n), je(e.coordinateToPixelTransform, r), je(e.coordinateToPixelTransform, s), je(e.coordinateToPixelTransform, o);
			const a = this.inversePixelTransform;
			je(a, n), je(a, r), je(a, s), je(a, o), t.save(), t.beginPath(), t.moveTo(Math.round(n[0]), Math.round(n[1])), t.lineTo(Math.round(r[0]), Math.round(r[1])), t.lineTo(Math.round(s[0]), Math.round(s[1])), t.lineTo(Math.round(o[0]), Math.round(o[1])), t.clip()
		}
		dispatchRenderEvent_(t, e, i) {
			const n = this.getLayer();
			if (n.hasListener(t)) {
				const r = new Xa(t, this.inversePixelTransform, i, e);
				n.dispatchEvent(r)
			}
		}
		preRender(t, e) {
			this.frameState = e, this.dispatchRenderEvent_(Fs, t, e)
		}
		postRender(t, e) {
			this.dispatchRenderEvent_(Ms, t, e)
		}
		getRenderTransform(t, e, i, n, r, s, o) {
			const a = r / 2,
				l = s / 2,
				h = n / e,
				u = -h,
				c = -t[0] + o,
				d = -t[1];
			return $e(this.tempTransform, a, l, h, u, -i, c, d)
		}
		disposeInternal() {
			delete this.frameState, super.disposeInternal()
		}
	};

	function Ya(t, e, i, n, r, s, o, a, l, h, u, c) {
		let d = t[e],
			g = t[e + 1],
			p = 0,
			f = 0,
			m = 0,
			_ = 0;

		function y() {
			p = d, f = g, d = t[e += n], g = t[e + 1], _ += m, m = Math.sqrt((d - p) * (d - p) + (g - f) * (g - f))
		}
		do {
			y()
		} while (e < i - n && _ + m < s);
		let x = 0 === m ? 0 : (s - _) / m;
		const v = R(p, d, x),
			w = R(f, g, x),
			b = e - n,
			S = _,
			E = s + a * l(h, r, u);
		for (; e < i - n && _ + m < E;) y();
		x = 0 === m ? 0 : (E - _) / m;
		const C = R(p, d, x),
			T = R(f, g, x);
		let P;
		if (c) {
			const t = [v, w, C, T];
			Un(t, 0, 4, 2, c, t, t), P = t[0] > t[2]
		} else P = v > C;
		const F = Math.PI,
			M = [],
			I = b + n === e;
		let L;
		if (m = 0, _ = S, d = t[e = b], g = t[e + 1], I) {
			y(), L = Math.atan2(g - f, d - p), P && (L += L > 0 ? -F : F);
			const t = (C + v) / 2,
				e = (T + w) / 2;
			return M[0] = [t, e, (E - s) / 2, L, r], M
		}
		for (let t = 0, c = (r = r.replace(/\n/g, " ")).length; t < c;) {
			y();
			let v = Math.atan2(g - f, d - p);
			if (P && (v += v > 0 ? -F : F), void 0 !== L) {
				let t = v - L;
				if (t += t > F ? -2 * F : t < -F ? 2 * F : 0, Math.abs(t) > o) return null
			}
			L = v;
			const w = t;
			let b = 0;
			for (; t < c; ++t) {
				const o = a * l(h, r[P ? c - t - 1 : t], u);
				if (e + n < i && _ + m < s + b + o / 2) break;
				b += o
			}
			if (t === w) continue;
			const S = P ? r.substring(c - w, c - t) : r.substring(w, t);
			x = 0 === m ? 0 : (s + b / 2 - _) / m;
			const E = R(p, d, x),
				C = R(f, g, x);
			M.push([E, C, b / 2, v, S]), s += b
		}
		return M
	}
	const Ka = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
		Ha = [],
		Ja = [],
		Qa = [],
		tl = [];

	function el(t) {
		return t[3].declutterBox
	}
	const il = new RegExp("[" + String.fromCharCode(1425) + "-" + String.fromCharCode(2303) + String.fromCharCode(64285) + "-" + String.fromCharCode(65023) + String.fromCharCode(65136) + "-" + String.fromCharCode(65276) + String.fromCharCode(67584) + "-" + String.fromCharCode(69631) + String.fromCharCode(124928) + "-" + String.fromCharCode(126975) + "]");

	function nl(t, e) {
		return "start" === e ? e = il.test(t) ? "right" : "left" : "end" === e && (e = il.test(t) ? "left" : "right"), Ua[e]
	}

	function rl(t, e, i) {
		return i > 0 && t.push("\n", ""), t.push(e, ""), t
	}
	var sl = class {
		constructor(t, e, i, n) {
			this.overlaps = i, this.pixelRatio = e, this.resolution = t, this.alignFill_, this.instructions = n.instructions, this.coordinates = n.coordinates, this.coordinateCache_ = {}, this.renderedTransform_ = [1, 0, 0, 1, 0, 0], this.hitDetectionInstructions = n.hitDetectionInstructions, this.pixelCoordinates_ = null, this.viewRotation_ = 0, this.fillStates = n.fillStates || {}, this.strokeStates = n.strokeStates || {}, this.textStates = n.textStates || {}, this.widths_ = {}, this.labels_ = {}
		}
		createLabel(t, e, i, n) {
			const r = t + e + i + n;
			if (this.labels_[r]) return this.labels_[r];
			const s = n ? this.strokeStates[n] : null,
				o = i ? this.fillStates[i] : null,
				a = this.textStates[e],
				l = this.pixelRatio,
				h = [a.scale[0] * l, a.scale[1] * l],
				u = Array.isArray(t),
				c = a.justify ? Ua[a.justify] : nl(Array.isArray(t) ? t[0] : t, a.textAlign || re),
				d = n && s.lineWidth ? s.lineWidth : 0,
				g = u ? t : t.split("\n").reduce(rl, []),
				{
					width: p,
					height: f,
					widths: m,
					heights: _,
					lineWidths: y
				} = function(t, e) {
					const i = [],
						n = [],
						r = [];
					let s = 0,
						o = 0,
						a = 0,
						l = 0;
					for (let h = 0, u = e.length; h <= u; h += 2) {
						const c = e[h];
						if ("\n" === c || h === u) {
							s = Math.max(s, o), r.push(o), o = 0, a += l;
							continue
						}
						const d = e[h + 1] || t.font,
							g = pe(d, c);
						i.push(g), o += g;
						const p = de(d);
						n.push(p), l = Math.max(l, p)
					}
					return {
						width: s,
						height: a,
						widths: i,
						heights: n,
						lineWidths: r
					}
				}(a, g),
				x = p + d,
				v = [],
				w = (x + 2) * h[0],
				b = (f + d) * h[1],
				S = {
					width: w < 0 ? Math.floor(w) : Math.ceil(w),
					height: b < 0 ? Math.floor(b) : Math.ceil(b),
					contextInstructions: v
				};
			1 == h[0] && 1 == h[1] || v.push("scale", h), n && (v.push("strokeStyle", s.strokeStyle), v.push("lineWidth", d), v.push("lineCap", s.lineCap), v.push("lineJoin", s.lineJoin), v.push("miterLimit", s.miterLimit), v.push("setLineDash", [s.lineDash]), v.push("lineDashOffset", s.lineDashOffset)), i && v.push("fillStyle", o.fillStyle), v.push("textBaseline", "middle"), v.push("textAlign", "center");
			const E = .5 - c;
			let C = c * x + E * d;
			const T = [],
				P = [];
			let R, F = 0,
				M = 0,
				I = 0,
				L = 0;
			for (let t = 0, e = g.length; t < e; t += 2) {
				const e = g[t];
				if ("\n" === e) {
					M += F, F = 0, C = c * x + E * d, ++L;
					continue
				}
				const r = g[t + 1] || a.font;
				r !== R && (n && T.push("font", r), i && P.push("font", r), R = r), F = Math.max(F, _[I]);
				const s = [e, C + E * m[I] + c * (m[I] - y[L]), .5 * (d + F) + M];
				C += m[I], n && T.push("strokeText", s), i && P.push("fillText", s), ++I
			}
			return Array.prototype.push.apply(v, T), Array.prototype.push.apply(v, P), this.labels_[r] = S, S
		}
		replayTextBackground_(t, e, i, n, r, s, o) {
			t.beginPath(), t.moveTo.apply(t, e), t.lineTo.apply(t, i), t.lineTo.apply(t, n), t.lineTo.apply(t, r), t.lineTo.apply(t, e), s && (this.alignFill_ = s[2], this.fill_(t)), o && (this.setStrokeStyle_(t, o), t.stroke())
		}
		calculateImageOrLabelDimensions_(t, e, i, n, r, s, o, a, l, h, u, c, d, g, p, f) {
			let m = i - (o *= c[0]),
				_ = n - (a *= c[1]);
			const y = r + l > t ? t - l : r,
				x = s + h > e ? e - h : s,
				v = g[3] + y * c[0] + g[1],
				w = g[0] + x * c[1] + g[2],
				b = m - g[3],
				S = _ - g[0];
			let E;
			return (p || 0 !== u) && (Ha[0] = b, tl[0] = b, Ha[1] = S, Ja[1] = S, Ja[0] = b + v, Qa[0] = Ja[0], Qa[1] = S + w, tl[1] = Qa[1]), 0 !== u ? (E = $e([1, 0, 0, 1, 0, 0], i, n, 1, 1, u, -i, -n), je(E, Ha), je(E, Ja), je(E, Qa), je(E, tl), ni(Math.min(Ha[0], Ja[0], Qa[0], tl[0]), Math.min(Ha[1], Ja[1], Qa[1], tl[1]), Math.max(Ha[0], Ja[0], Qa[0], tl[0]), Math.max(Ha[1], Ja[1], Qa[1], tl[1]), Ka)) : ni(Math.min(b, b + v), Math.min(S, S + w), Math.max(b, b + v), Math.max(S, S + w), Ka), d && (m = Math.round(m), _ = Math.round(_)), {
				drawImageX: m,
				drawImageY: _,
				drawImageW: y,
				drawImageH: x,
				originX: l,
				originY: h,
				declutterBox: {
					minX: Ka[0],
					minY: Ka[1],
					maxX: Ka[2],
					maxY: Ka[3],
					value: f
				},
				canvasTransform: E,
				scale: c
			}
		}
		replayImageOrLabel_(t, e, i, n, r, s, o) {
			const a = !(!s && !o),
				l = n.declutterBox,
				h = t.canvas,
				u = o ? o[2] * n.scale[0] / 2 : 0;
			return l.minX - u <= h.width / e && l.maxX + u >= 0 && l.minY - u <= h.height / e && l.maxY + u >= 0 && (a && this.replayTextBackground_(t, Ha, Ja, Qa, tl, s, o), me(t, n.canvasTransform, r, i, n.originX, n.originY, n.drawImageW, n.drawImageH, n.drawImageX, n.drawImageY, n.scale)), !0
		}
		fill_(t) {
			if (this.alignFill_) {
				const e = je(this.renderedTransform_, [0, 0]),
					i = 512 * this.pixelRatio;
				t.save(), t.translate(e[0] % i, e[1] % i), t.rotate(this.viewRotation_)
			}
			t.fill(), this.alignFill_ && t.restore()
		}
		setStrokeStyle_(t, e) {
			t.strokeStyle = e[1], t.lineWidth = e[2], t.lineCap = e[3], t.lineJoin = e[4], t.miterLimit = e[5], t.lineDashOffset = e[7], t.setLineDash(e[6])
		}
		drawLabelWithPointPlacement_(t, e, i, n) {
			const r = this.textStates[e],
				s = this.createLabel(t, e, n, i),
				o = this.strokeStates[i],
				a = this.pixelRatio,
				l = nl(Array.isArray(t) ? t[0] : t, r.textAlign || re),
				h = Ua[r.textBaseline || se],
				u = o && o.lineWidth ? o.lineWidth : 0;
			return {
				label: s,
				anchorX: l * (s.width / a - 2 * r.scale[0]) + 2 * (.5 - l) * u,
				anchorY: h * s.height / a + 2 * (.5 - h) * u
			}
		}
		execute_(t, e, i, n, r, s, o, a) {
			let l;
			var h, u;
			this.pixelCoordinates_ && pt(i, this.renderedTransform_) ? l = this.pixelCoordinates_ : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []), l = jn(this.coordinates, 0, this.coordinates.length, 2, i, this.pixelCoordinates_), h = this.renderedTransform_, u = i, h[0] = u[0], h[1] = u[1], h[2] = u[2], h[3] = u[3], h[4] = u[4], h[5] = u[5]);
			let c = 0;
			const d = n.length;
			let g, p, f, m, _, y, x, v, w, b, S, E, C = 0,
				T = 0,
				P = 0,
				R = null,
				F = null;
			const M = this.coordinateCache_,
				I = this.viewRotation_,
				L = Math.round(1e12 * Math.atan2(-i[1], i[0])) / 1e12,
				k = {
					context: t,
					pixelRatio: this.pixelRatio,
					resolution: this.resolution,
					rotation: I
				},
				A = this.instructions != n || this.overlaps ? 0 : 200;
			let D, O, z, G;
			for (; c < d;) {
				const i = n[c];
				switch (i[0]) {
					case ka.BEGIN_GEOMETRY:
						D = i[1], G = i[3], D.getGeometry() ? void 0 === o || Ci(o, G.getExtent()) ? ++c : c = i[2] + 1 : c = i[2];
						break;
					case ka.BEGIN_PATH:
						T > A && (this.fill_(t), T = 0), P > A && (t.stroke(), P = 0), T || P || (t.beginPath(), m = NaN, _ = NaN), ++c;
						break;
					case ka.CIRCLE:
						C = i[1];
						const n = l[C],
							h = l[C + 1],
							u = l[C + 2] - n,
							d = l[C + 3] - h,
							N = Math.sqrt(u * u + d * d);
						t.moveTo(n + N, h), t.arc(n, h, N, 0, 2 * Math.PI, !0), ++c;
						break;
					case ka.CLOSE_PATH:
						t.closePath(), ++c;
						break;
					case ka.CUSTOM:
						C = i[1], g = i[2];
						const j = i[3],
							U = i[4],
							B = 6 == i.length ? i[5] : void 0;
						k.geometry = j, k.feature = D, c in M || (M[c] = []);
						const $ = M[c];
						B ? B(l, C, g, 2, $) : ($[0] = l[C], $[1] = l[C + 1], $.length = 2), U($, k), ++c;
						break;
					case ka.DRAW_IMAGE:
						C = i[1], g = i[2], v = i[3], p = i[4], f = i[5];
						let V = i[6];
						const X = i[7],
							W = i[8],
							q = i[9],
							Z = i[10];
						let Y = i[11];
						const K = i[12];
						let H = i[13];
						const J = i[14],
							Q = i[15];
						if (!v && i.length >= 20) {
							w = i[19], b = i[20], S = i[21], E = i[22];
							const t = this.drawLabelWithPointPlacement_(w, b, S, E);
							v = t.label, i[3] = v;
							const e = i[23];
							p = (t.anchorX - e) * this.pixelRatio, i[4] = p;
							const n = i[24];
							f = (t.anchorY - n) * this.pixelRatio, i[5] = f, V = v.height, i[6] = V, H = v.width, i[13] = H
						}
						let tt, et, it, nt;
						i.length > 25 && (tt = i[25]), i.length > 17 ? (et = i[16], it = i[17], nt = i[18]) : (et = oe, it = !1, nt = !1), Z && L ? Y += I : Z || L || (Y -= I);
						let rt = 0;
						for (; C < g; C += 2) {
							if (tt && tt[rt++] < H / this.pixelRatio) continue;
							const i = this.calculateImageOrLabelDimensions_(v.width, v.height, l[C], l[C + 1], H, V, p, f, W, q, Y, K, r, et, it || nt, D),
								n = [t, e, v, i, X, it ? R : null, nt ? F : null];
							if (a) {
								if ("none" === J) continue;
								if ("obstacle" === J) {
									a.insert(i.declutterBox);
									continue
								} {
									let t, e;
									if (Q) {
										const i = g - C;
										if (!Q[i]) {
											Q[i] = n;
											continue
										}
										if (t = Q[i], delete Q[i], e = el(t), a.collides(e)) continue
									}
									if (a.collides(i.declutterBox)) continue;
									t && (a.insert(e), this.replayImageOrLabel_.apply(this, t)), a.insert(i.declutterBox)
								}
							}
							this.replayImageOrLabel_.apply(this, n)
						}++c;
						break;
					case ka.DRAW_CHARS:
						const st = i[1],
							ot = i[2],
							at = i[3],
							lt = i[4];
						E = i[5];
						const ht = i[6],
							ut = i[7],
							ct = i[8];
						S = i[9];
						const dt = i[10];
						w = i[11], b = i[12];
						const gt = [i[13], i[13]],
							pt = this.textStates[b],
							ft = pt.font,
							mt = [pt.scale[0] * ut, pt.scale[1] * ut];
						let _t;
						ft in this.widths_ ? _t = this.widths_[ft] : (_t = {}, this.widths_[ft] = _t);
						const yt = Rr(l, st, ot, 2),
							xt = Math.abs(mt[0]) * fe(ft, w, _t);
						if (lt || xt <= yt) {
							const i = Ya(l, st, ot, 2, w, (yt - xt) * nl(w, this.textStates[b].textAlign), ht, Math.abs(mt[0]), fe, ft, _t, L ? 0 : this.viewRotation_);
							t: if (i) {
								const n = [];
								let r, s, o, l, h;
								if (S)
									for (r = 0, s = i.length; r < s; ++r) {
										h = i[r], o = h[4], l = this.createLabel(o, b, "", S), p = h[2] + (mt[0] < 0 ? -dt : dt), f = at * l.height + 2 * (.5 - at) * dt * mt[1] / mt[0] - ct;
										const s = this.calculateImageOrLabelDimensions_(l.width, l.height, h[0], h[1], l.width, l.height, p, f, 0, 0, h[3], gt, !1, oe, !1, D);
										if (a && a.collides(s.declutterBox)) break t;
										n.push([t, e, l, s, 1, null, null])
									}
								if (E)
									for (r = 0, s = i.length; r < s; ++r) {
										h = i[r], o = h[4], l = this.createLabel(o, b, E, ""), p = h[2], f = at * l.height - ct;
										const s = this.calculateImageOrLabelDimensions_(l.width, l.height, h[0], h[1], l.width, l.height, p, f, 0, 0, h[3], gt, !1, oe, !1, D);
										if (a && a.collides(s.declutterBox)) break t;
										n.push([t, e, l, s, 1, null, null])
									}
								a && a.load(n.map(el));
								for (let t = 0, e = n.length; t < e; ++t) this.replayImageOrLabel_.apply(this, n[t])
							}
						}++c;
						break;
					case ka.END_GEOMETRY:
						if (void 0 !== s) {
							D = i[1];
							const t = s(D, G);
							if (t) return t
						}++c;
						break;
					case ka.FILL:
						A ? T++ : this.fill_(t), ++c;
						break;
					case ka.MOVE_TO_LINE_TO:
						for (C = i[1], g = i[2], O = l[C], z = l[C + 1], y = O + .5 | 0, x = z + .5 | 0, y === m && x === _ || (t.moveTo(O, z), m = y, _ = x), C += 2; C < g; C += 2) O = l[C], z = l[C + 1], y = O + .5 | 0, x = z + .5 | 0, C != g - 2 && y === m && x === _ || (t.lineTo(O, z), m = y, _ = x);
						++c;
						break;
					case ka.SET_FILL_STYLE:
						R = i, this.alignFill_ = i[2], T && (this.fill_(t), T = 0, P && (t.stroke(), P = 0)), t.fillStyle = i[1], ++c;
						break;
					case ka.SET_STROKE_STYLE:
						F = i, P && (t.stroke(), P = 0), this.setStrokeStyle_(t, i), ++c;
						break;
					case ka.STROKE:
						A ? P++ : t.stroke(), ++c;
						break;
					default:
						++c
				}
			}
			T && this.fill_(t), P && t.stroke()
		}
		execute(t, e, i, n, r, s) {
			this.viewRotation_ = n, this.execute_(t, e, i, this.instructions, r, void 0, void 0, s)
		}
		executeHitDetection(t, e, i, n, r) {
			return this.viewRotation_ = i, this.execute_(t, 1, e, this.hitDetectionInstructions, !0, n, r)
		}
	};
	const ol = ["Polygon", "Circle", "LineString", "Image", "Text", "Default"];
	const al = {};
	var ll = class {
		constructor(t, e, i, n, r, s) {
			this.maxExtent_ = t, this.overlaps_ = n, this.pixelRatio_ = i, this.resolution_ = e, this.renderBuffer_ = s, this.executorsByZIndex_ = {}, this.hitDetectionContext_ = null, this.hitDetectionTransform_ = [1, 0, 0, 1, 0, 0], this.createExecutors_(r)
		}
		clip(t, e) {
			const i = this.getClipCoords(e);
			t.beginPath(), t.moveTo(i[0], i[1]), t.lineTo(i[2], i[3]), t.lineTo(i[4], i[5]), t.lineTo(i[6], i[7]), t.clip()
		}
		createExecutors_(t) {
			for (const e in t) {
				let i = this.executorsByZIndex_[e];
				void 0 === i && (i = {}, this.executorsByZIndex_[e] = i);
				const n = t[e];
				for (const t in n) {
					const e = n[t];
					i[t] = new sl(this.resolution_, this.pixelRatio_, this.overlaps_, e)
				}
			}
		}
		hasExecutors(t) {
			for (const e in this.executorsByZIndex_) {
				const i = this.executorsByZIndex_[e];
				for (let e = 0, n = t.length; e < n; ++e)
					if (t[e] in i) return !0
			}
			return !1
		}
		forEachFeatureAtCoordinate(t, e, i, n, r, s) {
			const o = 2 * (n = Math.round(n)) + 1,
				a = $e(this.hitDetectionTransform_, n + .5, n + .5, 1 / e, -1 / e, -i, -t[0], -t[1]),
				l = !this.hitDetectionContext_;
			l && (this.hitDetectionContext_ = tt(o, o, void 0, {
				willReadFrequently: !0
			}));
			const h = this.hitDetectionContext_;
			let u;
			h.canvas.width !== o || h.canvas.height !== o ? (h.canvas.width = o, h.canvas.height = o) : l || h.clearRect(0, 0, o, o), void 0 !== this.renderBuffer_ && (u = [1 / 0, 1 / 0, -1 / 0, -1 / 0], hi(u, t), Ye(u, e * (this.renderBuffer_ + n), u));
			const c = function(t) {
				if (void 0 !== al[t]) return al[t];
				const e = 2 * t + 1,
					i = t * t,
					n = new Array(i + 1);
				for (let r = 0; r <= t; ++r)
					for (let s = 0; s <= t; ++s) {
						const o = r * r + s * s;
						if (o > i) break;
						let a = n[o];
						a || (a = [], n[o] = a), a.push(4 * ((t + r) * e + (t + s)) + 3), r > 0 && a.push(4 * ((t - r) * e + (t + s)) + 3), s > 0 && (a.push(4 * ((t + r) * e + (t - s)) + 3), r > 0 && a.push(4 * ((t - r) * e + (t - s)) + 3))
					}
				const r = [];
				for (let t = 0, e = n.length; t < e; ++t) n[t] && r.push(...n[t]);
				return al[t] = r, r
			}(n);
			let d;

			function g(t, e) {
				const i = h.getImageData(0, 0, o, o).data;
				for (let a = 0, l = c.length; a < l; a++)
					if (i[c[a]] > 0) {
						if (!s || "Image" !== d && "Text" !== d || s.includes(t)) {
							const i = (c[a] - 3) / 4,
								s = n - i % o,
								l = n - (i / o | 0),
								h = r(t, e, s * s + l * l);
							if (h) return h
						}
						h.clearRect(0, 0, o, o);
						break
					}
			}
			const p = Object.keys(this.executorsByZIndex_).map(Number);
			let f, m, _, y, x;
			for (p.sort(ut), f = p.length - 1; f >= 0; --f) {
				const t = p[f].toString();
				for (_ = this.executorsByZIndex_[t], m = ol.length - 1; m >= 0; --m)
					if (d = ol[m], y = _[d], void 0 !== y && (x = y.executeHitDetection(h, a, i, g, u), x)) return x
			}
		}
		getClipCoords(t) {
			const e = this.maxExtent_;
			if (!e) return null;
			const i = e[0],
				n = e[1],
				r = e[2],
				s = e[3],
				o = [i, n, i, s, r, s, r, n];
			return jn(o, 0, 8, 2, t, o), o
		}
		isEmpty() {
			return wt(this.executorsByZIndex_)
		}
		execute(t, e, i, n, r, s, o) {
			const a = Object.keys(this.executorsByZIndex_).map(Number);
			let l, h, u, c, d, g;
			for (a.sort(ut), this.maxExtent_ && (t.save(), this.clip(t, i)), s = s || ol, o && a.reverse(), l = 0, h = a.length; l < h; ++l) {
				const h = a[l].toString();
				for (d = this.executorsByZIndex_[h], u = 0, c = s.length; u < c; ++u) {
					g = d[s[u]], void 0 !== g && g.execute(t, e, i, n, r, o)
				}
			}
			this.maxExtent_ && t.restore()
		}
	};
	var hl = class extends Aa {
		constructor(t, e, i, n, r, s, o) {
			super(), this.context_ = t, this.pixelRatio_ = e, this.extent_ = i, this.transform_ = n, this.transformRotation_ = n ? F(Math.atan2(n[1], n[0]), 10) : 0, this.viewRotation_ = r, this.squaredTolerance_ = s, this.userTransform_ = o, this.contextFillState_ = null, this.contextStrokeState_ = null, this.contextTextState_ = null, this.fillState_ = null, this.strokeState_ = null, this.image_ = null, this.imageAnchorX_ = 0, this.imageAnchorY_ = 0, this.imageHeight_ = 0, this.imageOpacity_ = 0, this.imageOriginX_ = 0, this.imageOriginY_ = 0, this.imageRotateWithView_ = !1, this.imageRotation_ = 0, this.imageScale_ = [0, 0], this.imageWidth_ = 0, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = !1, this.textRotation_ = 0, this.textScale_ = [0, 0], this.textFillState_ = null, this.textStrokeState_ = null, this.textState_ = null, this.pixelCoordinates_ = [], this.tmpLocalTransform_ = [1, 0, 0, 1, 0, 0]
		}
		drawImages_(t, e, i, n) {
			if (!this.image_) return;
			const r = jn(t, e, i, n, this.transform_, this.pixelCoordinates_),
				s = this.context_,
				o = this.tmpLocalTransform_,
				a = s.globalAlpha;
			1 != this.imageOpacity_ && (s.globalAlpha = a * this.imageOpacity_);
			let l = this.imageRotation_;
			0 === this.transformRotation_ && (l -= this.viewRotation_), this.imageRotateWithView_ && (l += this.viewRotation_);
			for (let t = 0, e = r.length; t < e; t += 2) {
				const e = r[t] - this.imageAnchorX_,
					i = r[t + 1] - this.imageAnchorY_;
				if (0 !== l || 1 != this.imageScale_[0] || 1 != this.imageScale_[1]) {
					const t = e + this.imageAnchorX_,
						n = i + this.imageAnchorY_;
					$e(o, t, n, 1, 1, l, -t, -n), s.save(), s.transform.apply(s, o), s.translate(t, n), s.scale(this.imageScale_[0], this.imageScale_[1]), s.drawImage(this.image_, this.imageOriginX_, this.imageOriginY_, this.imageWidth_, this.imageHeight_, -this.imageAnchorX_, -this.imageAnchorY_, this.imageWidth_, this.imageHeight_), s.restore()
				} else s.drawImage(this.image_, this.imageOriginX_, this.imageOriginY_, this.imageWidth_, this.imageHeight_, e, i, this.imageWidth_, this.imageHeight_)
			}
			1 != this.imageOpacity_ && (s.globalAlpha = a)
		}
		drawText_(t, e, i, n) {
			if (!this.textState_ || "" === this.text_) return;
			this.textFillState_ && this.setContextFillState_(this.textFillState_), this.textStrokeState_ && this.setContextStrokeState_(this.textStrokeState_), this.setContextTextState_(this.textState_);
			const r = jn(t, e, i, n, this.transform_, this.pixelCoordinates_),
				s = this.context_;
			let o = this.textRotation_;
			for (0 === this.transformRotation_ && (o -= this.viewRotation_), this.textRotateWithView_ && (o += this.viewRotation_); e < i; e += n) {
				const t = r[e] + this.textOffsetX_,
					i = r[e + 1] + this.textOffsetY_;
				0 !== o || 1 != this.textScale_[0] || 1 != this.textScale_[1] ? (s.save(), s.translate(t - this.textOffsetX_, i - this.textOffsetY_), s.rotate(o), s.translate(this.textOffsetX_, this.textOffsetY_), s.scale(this.textScale_[0], this.textScale_[1]), this.textStrokeState_ && s.strokeText(this.text_, 0, 0), this.textFillState_ && s.fillText(this.text_, 0, 0), s.restore()) : (this.textStrokeState_ && s.strokeText(this.text_, t, i), this.textFillState_ && s.fillText(this.text_, t, i))
			}
		}
		moveToLineTo_(t, e, i, n, r) {
			const s = this.context_,
				o = jn(t, e, i, n, this.transform_, this.pixelCoordinates_);
			s.moveTo(o[0], o[1]);
			let a = o.length;
			r && (a -= 2);
			for (let t = 2; t < a; t += 2) s.lineTo(o[t], o[t + 1]);
			return r && s.closePath(), i
		}
		drawRings_(t, e, i, n) {
			for (let r = 0, s = i.length; r < s; ++r) e = this.moveToLineTo_(t, e, i[r], n, !0);
			return e
		}
		drawCircle(t) {
			if (this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)), Ci(this.extent_, t.getExtent())) {
				if (this.fillState_ || this.strokeState_) {
					this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
					const e = function(t, e, i) {
							const n = t.getFlatCoordinates();
							if (!n) return null;
							const r = t.getStride();
							return jn(n, 0, n.length, r, e, i)
						}(t, this.transform_, this.pixelCoordinates_),
						i = e[2] - e[0],
						n = e[3] - e[1],
						r = Math.sqrt(i * i + n * n),
						s = this.context_;
					s.beginPath(), s.arc(e[0], e[1], r, 0, 2 * Math.PI), this.fillState_ && s.fill(), this.strokeState_ && s.stroke()
				}
				"" !== this.text_ && this.drawText_(t.getCenter(), 0, 2, 2)
			}
		}
		setStyle(t) {
			this.setFillStrokeStyle(t.getFill(), t.getStroke()), this.setImageStyle(t.getImage()), this.setTextStyle(t.getText())
		}
		setTransform(t) {
			this.transform_ = t
		}
		drawGeometry(t) {
			switch (t.getType()) {
				case "Point":
					this.drawPoint(t);
					break;
				case "LineString":
					this.drawLineString(t);
					break;
				case "Polygon":
					this.drawPolygon(t);
					break;
				case "MultiPoint":
					this.drawMultiPoint(t);
					break;
				case "MultiLineString":
					this.drawMultiLineString(t);
					break;
				case "MultiPolygon":
					this.drawMultiPolygon(t);
					break;
				case "GeometryCollection":
					this.drawGeometryCollection(t);
					break;
				case "Circle":
					this.drawCircle(t)
			}
		}
		drawFeature(t, e) {
			const i = e.getGeometryFunction()(t);
			i && (this.setStyle(e), this.drawGeometry(i))
		}
		drawGeometryCollection(t) {
			const e = t.getGeometriesArray();
			for (let t = 0, i = e.length; t < i; ++t) this.drawGeometry(e[t])
		}
		drawPoint(t) {
			this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
			const e = t.getFlatCoordinates(),
				i = t.getStride();
			this.image_ && this.drawImages_(e, 0, e.length, i), "" !== this.text_ && this.drawText_(e, 0, e.length, i)
		}
		drawMultiPoint(t) {
			this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
			const e = t.getFlatCoordinates(),
				i = t.getStride();
			this.image_ && this.drawImages_(e, 0, e.length, i), "" !== this.text_ && this.drawText_(e, 0, e.length, i)
		}
		drawLineString(t) {
			if (this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)), Ci(this.extent_, t.getExtent())) {
				if (this.strokeState_) {
					this.setContextStrokeState_(this.strokeState_);
					const e = this.context_,
						i = t.getFlatCoordinates();
					e.beginPath(), this.moveToLineTo_(i, 0, i.length, t.getStride(), !1), e.stroke()
				}
				if ("" !== this.text_) {
					const e = t.getFlatMidpoint();
					this.drawText_(e, 0, 2, 2)
				}
			}
		}
		drawMultiLineString(t) {
			this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_));
			const e = t.getExtent();
			if (Ci(this.extent_, e)) {
				if (this.strokeState_) {
					this.setContextStrokeState_(this.strokeState_);
					const e = this.context_,
						i = t.getFlatCoordinates();
					let n = 0;
					const r = t.getEnds(),
						s = t.getStride();
					e.beginPath();
					for (let t = 0, e = r.length; t < e; ++t) n = this.moveToLineTo_(i, n, r[t], s, !1);
					e.stroke()
				}
				if ("" !== this.text_) {
					const e = t.getFlatMidpoints();
					this.drawText_(e, 0, e.length, 2)
				}
			}
		}
		drawPolygon(t) {
			if (this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)), Ci(this.extent_, t.getExtent())) {
				if (this.strokeState_ || this.fillState_) {
					this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
					const e = this.context_;
					e.beginPath(), this.drawRings_(t.getOrientedFlatCoordinates(), 0, t.getEnds(), t.getStride()), this.fillState_ && e.fill(), this.strokeState_ && e.stroke()
				}
				if ("" !== this.text_) {
					const e = t.getFlatInteriorPoint();
					this.drawText_(e, 0, 2, 2)
				}
			}
		}
		drawMultiPolygon(t) {
			if (this.squaredTolerance_ && (t = t.simplifyTransformed(this.squaredTolerance_, this.userTransform_)), Ci(this.extent_, t.getExtent())) {
				if (this.strokeState_ || this.fillState_) {
					this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
					const e = this.context_,
						i = t.getOrientedFlatCoordinates();
					let n = 0;
					const r = t.getEndss(),
						s = t.getStride();
					e.beginPath();
					for (let t = 0, e = r.length; t < e; ++t) {
						const e = r[t];
						n = this.drawRings_(i, n, e, s)
					}
					this.fillState_ && e.fill(), this.strokeState_ && e.stroke()
				}
				if ("" !== this.text_) {
					const e = t.getFlatInteriorPoints();
					this.drawText_(e, 0, e.length, 2)
				}
			}
		}
		setContextFillState_(t) {
			const e = this.context_,
				i = this.contextFillState_;
			i ? i.fillStyle != t.fillStyle && (i.fillStyle = t.fillStyle, e.fillStyle = t.fillStyle) : (e.fillStyle = t.fillStyle, this.contextFillState_ = {
				fillStyle: t.fillStyle
			})
		}
		setContextStrokeState_(t) {
			const e = this.context_,
				i = this.contextStrokeState_;
			i ? (i.lineCap != t.lineCap && (i.lineCap = t.lineCap, e.lineCap = t.lineCap), pt(i.lineDash, t.lineDash) || e.setLineDash(i.lineDash = t.lineDash), i.lineDashOffset != t.lineDashOffset && (i.lineDashOffset = t.lineDashOffset, e.lineDashOffset = t.lineDashOffset), i.lineJoin != t.lineJoin && (i.lineJoin = t.lineJoin, e.lineJoin = t.lineJoin), i.lineWidth != t.lineWidth && (i.lineWidth = t.lineWidth, e.lineWidth = t.lineWidth), i.miterLimit != t.miterLimit && (i.miterLimit = t.miterLimit, e.miterLimit = t.miterLimit), i.strokeStyle != t.strokeStyle && (i.strokeStyle = t.strokeStyle, e.strokeStyle = t.strokeStyle)) : (e.lineCap = t.lineCap, e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset, e.lineJoin = t.lineJoin, e.lineWidth = t.lineWidth, e.miterLimit = t.miterLimit, e.strokeStyle = t.strokeStyle, this.contextStrokeState_ = {
				lineCap: t.lineCap,
				lineDash: t.lineDash,
				lineDashOffset: t.lineDashOffset,
				lineJoin: t.lineJoin,
				lineWidth: t.lineWidth,
				miterLimit: t.miterLimit,
				strokeStyle: t.strokeStyle
			})
		}
		setContextTextState_(t) {
			const e = this.context_,
				i = this.contextTextState_,
				n = t.textAlign ? t.textAlign : re;
			i ? (i.font != t.font && (i.font = t.font, e.font = t.font), i.textAlign != n && (i.textAlign = n, e.textAlign = n), i.textBaseline != t.textBaseline && (i.textBaseline = t.textBaseline, e.textBaseline = t.textBaseline)) : (e.font = t.font, e.textAlign = n, e.textBaseline = t.textBaseline, this.contextTextState_ = {
				font: t.font,
				textAlign: n,
				textBaseline: t.textBaseline
			})
		}
		setFillStrokeStyle(t, e) {
			if (t) {
				const e = t.getColor();
				this.fillState_ = {
					fillStyle: $(e || Qt)
				}
			} else this.fillState_ = null;
			if (e) {
				const t = e.getColor(),
					i = e.getLineCap(),
					n = e.getLineDash(),
					r = e.getLineDashOffset(),
					s = e.getLineJoin(),
					o = e.getWidth(),
					a = e.getMiterLimit(),
					l = n || ee;
				this.strokeState_ = {
					lineCap: void 0 !== i ? i : te,
					lineDash: 1 === this.pixelRatio_ ? l : l.map((t => t * this.pixelRatio_)),
					lineDashOffset: (r || 0) * this.pixelRatio_,
					lineJoin: void 0 !== s ? s : ie,
					lineWidth: (void 0 !== o ? o : 1) * this.pixelRatio_,
					miterLimit: void 0 !== a ? a : 10,
					strokeStyle: $(t || ne)
				}
			} else this.strokeState_ = null
		}
		setImageStyle(t) {
			let e;
			if (!t || !(e = t.getSize())) return void(this.image_ = null);
			const i = t.getPixelRatio(this.pixelRatio_),
				n = t.getAnchor(),
				r = t.getOrigin();
			this.image_ = t.getImage(this.pixelRatio_), this.imageAnchorX_ = n[0] * i, this.imageAnchorY_ = n[1] * i, this.imageHeight_ = e[1] * i, this.imageOpacity_ = t.getOpacity(), this.imageOriginX_ = r[0], this.imageOriginY_ = r[1], this.imageRotateWithView_ = t.getRotateWithView(), this.imageRotation_ = t.getRotation();
			const s = t.getScaleArray();
			this.imageScale_ = [s[0] * this.pixelRatio_ / i, s[1] * this.pixelRatio_ / i], this.imageWidth_ = e[0] * i
		}
		setTextStyle(t) {
			if (t) {
				const e = t.getFill();
				if (e) {
					const t = e.getColor();
					this.textFillState_ = {
						fillStyle: $(t || Qt)
					}
				} else this.textFillState_ = null;
				const i = t.getStroke();
				if (i) {
					const t = i.getColor(),
						e = i.getLineCap(),
						n = i.getLineDash(),
						r = i.getLineDashOffset(),
						s = i.getLineJoin(),
						o = i.getWidth(),
						a = i.getMiterLimit();
					this.textStrokeState_ = {
						lineCap: void 0 !== e ? e : te,
						lineDash: n || ee,
						lineDashOffset: r || 0,
						lineJoin: void 0 !== s ? s : ie,
						lineWidth: void 0 !== o ? o : 1,
						miterLimit: void 0 !== a ? a : 10,
						strokeStyle: $(t || ne)
					}
				} else this.textStrokeState_ = null;
				const n = t.getFont(),
					r = t.getOffsetX(),
					s = t.getOffsetY(),
					o = t.getRotateWithView(),
					a = t.getRotation(),
					l = t.getScaleArray(),
					h = t.getText(),
					u = t.getTextAlign(),
					c = t.getTextBaseline();
				this.textState_ = {
					font: void 0 !== n ? n : Jt,
					textAlign: void 0 !== u ? u : re,
					textBaseline: void 0 !== c ? c : se
				}, this.text_ = void 0 !== h ? Array.isArray(h) ? h.reduce(((t, e, i) => t + (i % 2 ? " " : e)), "") : h : "", this.textOffsetX_ = void 0 !== r ? this.pixelRatio_ * r : 0, this.textOffsetY_ = void 0 !== s ? this.pixelRatio_ * s : 0, this.textRotateWithView_ = void 0 !== o && o, this.textRotation_ = void 0 !== a ? a : 0, this.textScale_ = [this.pixelRatio_ * l[0], this.pixelRatio_ * l[1]]
			} else this.text_ = ""
		}
	};
	const ul = .5;

	function cl(t, e, i, n, r, s, o) {
		const a = tt(t[0] * ul, t[1] * ul);
		a.imageSmoothingEnabled = !1;
		const l = a.canvas,
			h = new hl(a, ul, r, null, o),
			u = i.length,
			c = Math.floor(16777215 / u),
			d = {};
		for (let t = 1; t <= u; ++t) {
			const e = i[t - 1],
				o = e.getStyleFunction() || n;
			if (!o) continue;
			let a = o(e, s);
			if (!a) continue;
			Array.isArray(a) || (a = [a]);
			const l = (t * c).toString(16).padStart(7, "#00000");
			for (let t = 0, i = a.length; t < i; ++t) {
				const i = a[t],
					n = i.getGeometryFunction()(e);
				if (!n || !Ci(r, n.getExtent())) continue;
				const s = i.clone(),
					o = s.getFill();
				o && o.setColor(l);
				const h = s.getStroke();
				h && (h.setColor(l), h.setLineDash(null)), s.setText(void 0);
				const u = i.getImage();
				if (u) {
					const t = u.getImageSize();
					if (!t) continue;
					const e = tt(t[0], t[1], void 0, {
							alpha: !1
						}),
						i = e.canvas;
					e.fillStyle = l, e.fillRect(0, 0, i.width, i.height), s.setImage(new ke({
						img: i,
						anchor: u.getAnchor(),
						anchorXUnits: "pixels",
						anchorYUnits: "pixels",
						offset: u.getOrigin(),
						opacity: 1,
						size: u.getSize(),
						scale: u.getScale(),
						rotation: u.getRotation(),
						rotateWithView: u.getRotateWithView()
					}))
				}
				const c = s.getZIndex() || 0;
				let g = d[c];
				g || (g = {}, d[c] = g, g.Polygon = [], g.Circle = [], g.LineString = [], g.Point = []);
				const p = n.getType();
				if ("GeometryCollection" === p) {
					const t = n.getGeometriesArrayRecursive();
					for (let e = 0, i = t.length; e < i; ++e) {
						const i = t[e];
						g[i.getType().replace("Multi", "")].push(i, s)
					}
				} else g[p.replace("Multi", "")].push(n, s)
			}
		}
		const g = Object.keys(d).map(Number).sort(ut);
		for (let t = 0, i = g.length; t < i; ++t) {
			const i = d[g[t]];
			for (const t in i) {
				const n = i[t];
				for (let t = 0, i = n.length; t < i; t += 2) {
					h.setStyle(n[t + 1]);
					for (let i = 0, r = e.length; i < r; ++i) h.setTransform(e[i]), h.drawGeometry(n[t])
				}
			}
		}
		return a.getImageData(0, 0, l.width, l.height)
	}

	function dl(t, e, i) {
		const n = [];
		if (i) {
			const r = Math.floor(Math.round(t[0]) * ul),
				s = Math.floor(Math.round(t[1]) * ul),
				o = 4 * (b(r, 0, i.width - 1) + b(s, 0, i.height - 1) * i.width),
				a = i.data[o],
				l = i.data[o + 1],
				h = i.data[o + 2] + 256 * (l + 256 * a),
				u = Math.floor(16777215 / e.length);
			h && h % u == 0 && n.push(e[h / u - 1])
		}
		return n
	}
	const gl = .5,
		pl = {
			Point: function(t, e, i, r, s) {
				const o = i.getImage(),
					a = i.getText();
				let l;
				if (o) {
					if (o.getImageState() != n) return;
					let h = t;
					if (s) {
						const n = o.getDeclutterMode();
						if ("none" !== n)
							if (h = s, "obstacle" === n) {
								const n = t.getBuilder(i.getZIndex(), "Image");
								n.setImageStyle(o, l), n.drawPoint(e, r)
							} else a && a.getText() && (l = {})
					}
					const u = h.getBuilder(i.getZIndex(), "Image");
					u.setImageStyle(o, l), u.drawPoint(e, r)
				}
				if (a && a.getText()) {
					let n = t;
					s && (n = s);
					const o = n.getBuilder(i.getZIndex(), "Text");
					o.setTextStyle(a, l), o.drawText(e, r)
				}
			},
			LineString: function(t, e, i, n, r) {
				const s = i.getStroke();
				if (s) {
					const r = t.getBuilder(i.getZIndex(), "LineString");
					r.setFillStrokeStyle(null, s), r.drawLineString(e, n)
				}
				const o = i.getText();
				if (o && o.getText()) {
					const s = (r || t).getBuilder(i.getZIndex(), "Text");
					s.setTextStyle(o), s.drawText(e, n)
				}
			},
			Polygon: function(t, e, i, n, r) {
				const s = i.getFill(),
					o = i.getStroke();
				if (s || o) {
					const r = t.getBuilder(i.getZIndex(), "Polygon");
					r.setFillStrokeStyle(s, o), r.drawPolygon(e, n)
				}
				const a = i.getText();
				if (a && a.getText()) {
					const s = (r || t).getBuilder(i.getZIndex(), "Text");
					s.setTextStyle(a), s.drawText(e, n)
				}
			},
			MultiPoint: function(t, e, i, r, s) {
				const o = i.getImage(),
					a = i.getText();
				let l;
				if (o) {
					if (o.getImageState() != n) return;
					let h = t;
					if (s) {
						const n = o.getDeclutterMode();
						if ("none" !== n)
							if (h = s, "obstacle" === n) {
								const n = t.getBuilder(i.getZIndex(), "Image");
								n.setImageStyle(o, l), n.drawMultiPoint(e, r)
							} else a && a.getText() && (l = {})
					}
					const u = h.getBuilder(i.getZIndex(), "Image");
					u.setImageStyle(o, l), u.drawMultiPoint(e, r)
				}
				if (a && a.getText()) {
					let n = t;
					s && (n = s);
					const o = n.getBuilder(i.getZIndex(), "Text");
					o.setTextStyle(a, l), o.drawText(e, r)
				}
			},
			MultiLineString: function(t, e, i, n, r) {
				const s = i.getStroke();
				if (s) {
					const r = t.getBuilder(i.getZIndex(), "LineString");
					r.setFillStrokeStyle(null, s), r.drawMultiLineString(e, n)
				}
				const o = i.getText();
				if (o && o.getText()) {
					const s = (r || t).getBuilder(i.getZIndex(), "Text");
					s.setTextStyle(o), s.drawText(e, n)
				}
			},
			MultiPolygon: function(t, e, i, n, r) {
				const s = i.getFill(),
					o = i.getStroke();
				if (o || s) {
					const r = t.getBuilder(i.getZIndex(), "Polygon");
					r.setFillStrokeStyle(s, o), r.drawMultiPolygon(e, n)
				}
				const a = i.getText();
				if (a && a.getText()) {
					const s = (r || t).getBuilder(i.getZIndex(), "Text");
					s.setTextStyle(a), s.drawText(e, n)
				}
			},
			GeometryCollection: function(t, e, i, n, r) {
				const s = e.getGeometriesArray();
				let o, a;
				for (o = 0, a = s.length; o < a; ++o) {
					(0, pl[s[o].getType()])(t, s[o], i, n, r)
				}
			},
			Circle: function(t, e, i, n, r) {
				const s = i.getFill(),
					o = i.getStroke();
				if (s || o) {
					const r = t.getBuilder(i.getZIndex(), "Circle");
					r.setFillStrokeStyle(s, o), r.drawCircle(e, n)
				}
				const a = i.getText();
				if (a && a.getText()) {
					const s = (r || t).getBuilder(i.getZIndex(), "Text");
					s.setTextStyle(a), s.drawText(e, n)
				}
			}
		};

	function fl(t, e) {
		return parseInt(l(t), 10) - parseInt(l(e), 10)
	}

	function ml(t, e) {
		const i = _l(t, e);
		return i * i
	}

	function _l(t, e) {
		return gl * t / e
	}

	function yl(t, i, s, o, a, l, h) {
		let u = !1;
		const c = s.getImage();
		if (c) {
			const t = c.getImageState();
			t == n || t == r ? c.unlistenImageChange(a) : (t == e && c.load(), c.listenImageChange(a), u = !0)
		}
		return function(t, e, i, n, r, s) {
			const o = i.getGeometryFunction()(e);
			if (!o) return;
			const a = o.simplifyTransformed(n, r),
				l = i.getRenderer();
			if (l) xl(t, a, i, e);
			else {
				(0, pl[a.getType()])(t, a, i, e, s)
			}
		}(t, i, s, o, l, h), u
	}

	function xl(t, e, i, n) {
		if ("GeometryCollection" == e.getType()) {
			const r = e.getGeometries();
			for (let e = 0, s = r.length; e < s; ++e) xl(t, r[e], i, n);
			return
		}
		t.getBuilder(i.getZIndex(), "Default").drawCustom(e, n, i.getRenderer(), i.getHitDetectionRenderer())
	}
	var vl = class extends Za {
		constructor(t) {
			super(t), this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this), this.animatingOrInteracting_, this.hitDetectionImageData_ = null, this.renderedFeatures_ = null, this.renderedRevision_ = -1, this.renderedResolution_ = NaN, this.renderedExtent_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0], this.wrappedRenderedExtent_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0], this.renderedRotation_, this.renderedCenter_ = null, this.renderedProjection_ = null, this.renderedRenderOrder_ = null, this.replayGroup_ = null, this.replayGroupChanged = !0, this.declutterExecutorGroup = null, this.clipping = !0, this.compositionContext_ = null, this.opacity_ = 1
		}
		renderWorlds(t, e, i) {
			const n = e.extent,
				r = e.viewState,
				s = r.center,
				o = r.resolution,
				a = r.projection,
				l = r.rotation,
				h = a.getExtent(),
				u = this.getLayer().getSource(),
				c = e.pixelRatio,
				d = e.viewHints,
				g = !(d[Xs] || d[Ws]),
				p = this.compositionContext_,
				f = Math.round(e.size[0] * c),
				m = Math.round(e.size[1] * c),
				_ = u.getWrapX() && a.canWrapX(),
				y = _ ? Ei(h) : null,
				x = _ ? Math.ceil((n[2] - h[2]) / y) + 1 : 1;
			let v = _ ? Math.floor((n[0] - h[0]) / y) : 0;
			do {
				const e = this.getRenderTransform(s, o, l, c, f, m, v * y);
				t.execute(p, 1, e, l, g, void 0, i)
			} while (++v < x)
		}
		setupCompositionContext_() {
			if (1 !== this.opacity_) {
				const t = tt(this.context.canvas.width, this.context.canvas.height, Wa);
				this.compositionContext_ = t
			} else this.compositionContext_ = this.context
		}
		releaseCompositionContext_() {
			if (1 !== this.opacity_) {
				const t = this.context.globalAlpha;
				this.context.globalAlpha = this.opacity_, this.context.drawImage(this.compositionContext_.canvas, 0, 0), this.context.globalAlpha = t, et(this.compositionContext_), Wa.push(this.compositionContext_.canvas), this.compositionContext_ = null
			}
		}
		renderDeclutter(t) {
			this.declutterExecutorGroup && (this.setupCompositionContext_(), this.renderWorlds(this.declutterExecutorGroup, t, t.declutterTree), this.releaseCompositionContext_())
		}
		renderFrame(t, e) {
			const i = t.pixelRatio,
				n = t.layerStatesArray[t.layerIndex];
			! function(t, e, i) {
				Ne(t, e, 0, 0, i, 0, 0)
			}(this.pixelTransform, 1 / i, 1 / i), Ve(this.inversePixelTransform, this.pixelTransform);
			const r = We(this.pixelTransform);
			this.useContainer(e, r, this.getBackground(t));
			const s = this.context,
				o = s.canvas,
				a = this.replayGroup_,
				l = this.declutterExecutorGroup;
			let h = a && !a.isEmpty() || l && !l.isEmpty();
			if (!h) {
				if (!(this.getLayer().hasListener(Fs) || this.getLayer().hasListener(Ms))) return null
			}
			const u = Math.round(t.size[0] * i),
				c = Math.round(t.size[1] * i);
			o.width != u || o.height != c ? (o.width = u, o.height = c, o.style.transform !== r && (o.style.transform = r)) : this.containerReused || s.clearRect(0, 0, u, c), this.preRender(s, t);
			const d = t.viewState,
				g = d.projection;
			this.opacity_ = n.opacity, this.setupCompositionContext_();
			let p = !1;
			if (h && n.extent && this.clipping) {
				const e = On(n.extent, g);
				h = Ci(e, t.extent), p = h && !Qe(e, t.extent), p && this.clipUnrotated(this.compositionContext_, t, e)
			}
			return h && this.renderWorlds(a, t), p && this.compositionContext_.restore(), this.releaseCompositionContext_(), this.postRender(s, t), this.renderedRotation_ !== d.rotation && (this.renderedRotation_ = d.rotation, this.hitDetectionImageData_ = null), this.container
		}
		getFeatures(t) {
			return new Promise((e => {
				if (!this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
					const t = [this.context.canvas.width, this.context.canvas.height];
					je(this.pixelTransform, t);
					const e = this.renderedCenter_,
						i = this.renderedResolution_,
						n = this.renderedRotation_,
						r = this.renderedProjection_,
						s = this.wrappedRenderedExtent_,
						o = this.getLayer(),
						a = [],
						l = t[0] * ul,
						h = t[1] * ul;
					a.push(this.getRenderTransform(e, i, n, ul, l, h, 0).slice());
					const u = o.getSource(),
						c = r.getExtent();
					if (u.getWrapX() && r.canWrapX() && !Qe(c, s)) {
						let t = s[0];
						const r = Ei(c);
						let o, u = 0;
						for (; t < c[0];) --u, o = r * u, a.push(this.getRenderTransform(e, i, n, ul, l, h, o).slice()), t += r;
						for (u = 0, t = s[2]; t > c[2];) ++u, o = r * u, a.push(this.getRenderTransform(e, i, n, ul, l, h, o).slice()), t -= r
					}
					this.hitDetectionImageData_ = cl(t, a, this.renderedFeatures_, o.getStyleFunction(), s, i, n)
				}
				e(dl(t, this.renderedFeatures_, this.hitDetectionImageData_))
			}))
		}
		forEachFeatureAtCoordinate(t, e, i, n, r) {
			if (!this.replayGroup_) return;
			const s = e.viewState.resolution,
				o = e.viewState.rotation,
				a = this.getLayer(),
				h = {},
				u = function(t, e, i) {
					const s = l(t),
						o = h[s];
					if (o) {
						if (!0 !== o && i < o.distanceSq) {
							if (0 === i) return h[s] = !0, r.splice(r.lastIndexOf(o), 1), n(t, a, e);
							o.geometry = e, o.distanceSq = i
						}
					} else {
						if (0 === i) return h[s] = !0, n(t, a, e);
						r.push(h[s] = {
							feature: t,
							layer: a,
							geometry: e,
							distanceSq: i,
							callback: n
						})
					}
				};
			let c;
			const d = [this.replayGroup_];
			return this.declutterExecutorGroup && d.push(this.declutterExecutorGroup), d.some((n => c = n.forEachFeatureAtCoordinate(t, s, o, i, u, n === this.declutterExecutorGroup && e.declutterTree ? e.declutterTree.all().map((t => t.value)) : null))), c
		}
		handleFontsChanged() {
			const t = this.getLayer();
			t.getVisible() && this.replayGroup_ && t.changed()
		}
		handleStyleImageChange_(t) {
			this.renderIfReadyAndVisible()
		}
		prepareFrame(t) {
			const e = this.getLayer(),
				i = e.getSource();
			if (!i) return !1;
			const n = t.viewHints[Xs],
				r = t.viewHints[Ws],
				s = e.getUpdateWhileAnimating(),
				o = e.getUpdateWhileInteracting();
			if (this.ready && !s && n || !o && r) return this.animatingOrInteracting_ = !0, !0;
			this.animatingOrInteracting_ = !1;
			const a = t.extent,
				l = t.viewState,
				h = l.projection,
				u = l.resolution,
				c = t.pixelRatio,
				d = e.getRevision(),
				g = e.getRenderBuffer();
			let p = e.getRenderOrder();
			void 0 === p && (p = fl);
			const f = l.center.slice(),
				m = Ye(a, g * u),
				_ = m.slice(),
				y = [m.slice()],
				x = h.getExtent();
			if (i.getWrapX() && h.canWrapX() && !Qe(x, t.extent)) {
				const t = Ei(x),
					e = Math.max(Ei(m) / 2, t);
				m[0] = x[0] - e, m[2] = x[2] + e, en(f, h);
				const i = Ri(y[0], h);
				i[0] < x[0] && i[2] < x[2] ? y.push([i[0] + t, i[1], i[2] + t, i[3]]) : i[0] > x[0] && i[2] > x[2] && y.push([i[0] - t, i[1], i[2] - t, i[3]])
			}
			if (this.ready && this.renderedResolution_ == u && this.renderedRevision_ == d && this.renderedRenderOrder_ == p && Qe(this.wrappedRenderedExtent_, m)) return pt(this.renderedExtent_, _) || (this.hitDetectionImageData_ = null, this.renderedExtent_ = _), this.renderedCenter_ = f, this.replayGroupChanged = !1, !0;
			this.replayGroup_ = null;
			const v = new $a(_l(u, c), m, u, c);
			let w;
			this.getLayer().getDeclutter() && (w = new $a(_l(u, c), m, u, c));
			const b = Ln();
			let S;
			if (b) {
				for (let t = 0, e = y.length; t < e; ++t) {
					const e = Dn(y[t], h);
					i.loadFeatures(e, zn(u, h), b)
				}
				S = Tn(b, h)
			} else
				for (let t = 0, e = y.length; t < e; ++t) i.loadFeatures(y[t], u, h);
			const E = ml(u, c);
			let C = !0;
			const T = t => {
					let i;
					const n = t.getStyleFunction() || e.getStyleFunction();
					if (n && (i = n(t, u)), i) {
						const e = this.renderFeature(t, E, i, v, S, w);
						C = C && !e
					}
				},
				P = Dn(m, h),
				R = i.getFeaturesInExtent(P);
			p && R.sort(p);
			for (let t = 0, e = R.length; t < e; ++t) T(R[t]);
			this.renderedFeatures_ = R, this.ready = C;
			const F = v.finish(),
				M = new ll(m, u, c, i.getOverlaps(), F, e.getRenderBuffer());
			return w && (this.declutterExecutorGroup = new ll(m, u, c, i.getOverlaps(), w.finish(), e.getRenderBuffer())), this.renderedResolution_ = u, this.renderedRevision_ = d, this.renderedRenderOrder_ = p, this.renderedExtent_ = _, this.wrappedRenderedExtent_ = m, this.renderedCenter_ = f, this.renderedProjection_ = h, this.replayGroup_ = M, this.hitDetectionImageData_ = null, this.replayGroupChanged = !0, !0
		}
		renderFeature(t, e, i, n, r, s) {
			if (!i) return !1;
			let o = !1;
			if (Array.isArray(i))
				for (let a = 0, l = i.length; a < l; ++a) o = yl(n, t, i[a], e, this.boundHandleStyleImageChange_, r, s) || o;
			else o = yl(n, t, i, e, this.boundHandleStyleImageChange_, r, s);
			return o
		}
	};
	var wl = class extends Pa {
		constructor(t) {
			super(t)
		}
		createRenderer() {
			return new vl(this)
		}
	};
	var bl = class {
		constructor(t) {
			this.rbush_ = new mo(t), this.items_ = {}
		}
		insert(t, e) {
			const i = {
				minX: t[0],
				minY: t[1],
				maxX: t[2],
				maxY: t[3],
				value: e
			};
			this.rbush_.insert(i), this.items_[l(e)] = i
		}
		load(t, e) {
			const i = new Array(e.length);
			for (let n = 0, r = e.length; n < r; n++) {
				const r = t[n],
					s = e[n],
					o = {
						minX: r[0],
						minY: r[1],
						maxX: r[2],
						maxY: r[3],
						value: s
					};
				i[n] = o, this.items_[l(s)] = o
			}
			this.rbush_.load(i)
		}
		remove(t) {
			const e = l(t),
				i = this.items_[e];
			return delete this.items_[e], null !== this.rbush_.remove(i)
		}
		update(t, e) {
			const i = this.items_[l(e)];
			ai([i.minX, i.minY, i.maxX, i.maxY], t) || (this.remove(e), this.insert(t, e))
		}
		getAll() {
			return this.rbush_.all().map((function(t) {
				return t.value
			}))
		}
		getInExtent(t) {
			const e = {
				minX: t[0],
				minY: t[1],
				maxX: t[2],
				maxY: t[3]
			};
			return this.rbush_.search(e).map((function(t) {
				return t.value
			}))
		}
		forEach(t) {
			return this.forEach_(this.getAll(), t)
		}
		forEachInExtent(t, e) {
			return this.forEach_(this.getInExtent(t), e)
		}
		forEach_(t, e) {
			let i;
			for (let n = 0, r = t.length; n < r; n++)
				if (i = e(t[n]), i) return i;
			return i
		}
		isEmpty() {
			return wt(this.items_)
		}
		clear() {
			this.rbush_.clear(), this.items_ = {}
		}
		getExtent(t) {
			const e = this.rbush_.toJSON();
			return ni(e.minX, e.minY, e.maxX, e.maxY, t)
		}
		concat(t) {
			this.rbush_.load(t.rbush_.all());
			for (const e in t.items_) this.items_[e] = t.items_[e]
		}
	};

	function Sl(t) {
		return t ? Array.isArray(t) ? function(e) {
			return t
		} : "function" == typeof t ? t : function(e) {
			return [t]
		} : null
	}
	var El = class extends Vt {
			constructor(t) {
				super(), this.projection = yn(t.projection), this.attributions_ = Sl(t.attributions), this.attributionsCollapsible_ = void 0 === t.attributionsCollapsible || t.attributionsCollapsible, this.loading = !1, this.state_ = void 0 !== t.state ? t.state : "ready", this.wrapX_ = void 0 !== t.wrapX && t.wrapX, this.interpolate_ = !!t.interpolate, this.viewResolver = null, this.viewRejector = null;
				const e = this;
				this.viewPromise_ = new Promise((function(t, i) {
					e.viewResolver = t, e.viewRejector = i
				}))
			}
			getAttributions() {
				return this.attributions_
			}
			getAttributionsCollapsible() {
				return this.attributionsCollapsible_
			}
			getProjection() {
				return this.projection
			}
			getResolutions(t) {
				return null
			}
			getView() {
				return this.viewPromise_
			}
			getState() {
				return this.state_
			}
			getWrapX() {
				return this.wrapX_
			}
			getInterpolate() {
				return this.interpolate_
			}
			refresh() {
				this.changed()
			}
			setAttributions(t) {
				this.attributions_ = Sl(t), this.changed()
			}
			setState(t) {
				this.state_ = t, this.changed()
			}
		},
		Cl = "addfeature",
		Tl = "changefeature",
		Pl = "clear",
		Rl = "removefeature",
		Fl = "featuresloadstart",
		Ml = "featuresloadend",
		Il = "featuresloaderror";

	function Ll(t, e) {
		return [
			[-1 / 0, -1 / 0, 1 / 0, 1 / 0]
		]
	}

	function kl(t, e) {
		return [t]
	}
	let Al = !1;

	function Dl(t, e, i, n, r, s, o) {
		const a = new XMLHttpRequest;
		a.open("GET", "function" == typeof t ? t(i, n, r) : t, !0), "arraybuffer" == e.getType() && (a.responseType = "arraybuffer"), a.withCredentials = Al, a.onload = function(t) {
			if (!a.status || a.status >= 200 && a.status < 300) {
				const t = e.getType();
				let n;
				"json" == t ? n = JSON.parse(a.responseText) : "text" == t ? n = a.responseText : "xml" == t ? (n = a.responseXML, n || (n = (new DOMParser).parseFromString(a.responseText, "application/xml"))) : "arraybuffer" == t && (n = a.response), n ? s(e.readFeatures(n, {
					extent: i,
					featureProjection: r
				}), e.readProjection(n)) : o()
			} else o()
		}, a.onerror = o, a.send()
	}

	function Ol(t, e) {
		return function(i, n, r, s, o) {
			const a = this;
			Dl(t, e, i, n, r, (function(t, e) {
				a.addFeatures(t), void 0 !== s && s(t)
			}), o || _t)
		}
	}
	class zl extends at {
		constructor(t, e, i) {
			super(t), this.feature = e, this.features = i
		}
	}
	var Gl = class extends El {
		constructor(t) {
			super({
				attributions: (t = t || {}).attributions,
				interpolate: !0,
				projection: void 0,
				state: "ready",
				wrapX: void 0 === t.wrapX || t.wrapX
			}), this.on, this.once, this.un, this.loader_ = _t, this.format_ = t.format, this.overlaps_ = void 0 === t.overlaps || t.overlaps, this.url_ = t.url, void 0 !== t.loader ? this.loader_ = t.loader : void 0 !== this.url_ && (Se(this.format_, "`format` must be set when `url` is set"), this.loader_ = Ol(this.url_, this.format_)), this.strategy_ = void 0 !== t.strategy ? t.strategy : Ll;
			const e = void 0 === t.useSpatialIndex || t.useSpatialIndex;
			let i, n;
			this.featuresRtree_ = e ? new bl : null, this.loadedExtentsRtree_ = new bl, this.loadingExtentsCount_ = 0, this.nullGeometryFeatures_ = {}, this.idIndex_ = {}, this.uidIndex_ = {}, this.featureChangeKeys_ = {}, this.featuresCollection_ = null, Array.isArray(t.features) ? n = t.features : t.features && (i = t.features, n = i.getArray()), e || void 0 !== i || (i = new Rs(n)), void 0 !== n && this.addFeaturesInternal(n), void 0 !== i && this.bindFeaturesCollection_(i)
		}
		addFeature(t) {
			this.addFeatureInternal(t), this.changed()
		}
		addFeatureInternal(t) {
			const e = l(t);
			if (!this.addToIndex_(e, t)) return void(this.featuresCollection_ && this.featuresCollection_.remove(t));
			this.setupChangeEvents_(e, t);
			const i = t.getGeometry();
			if (i) {
				const e = i.getExtent();
				this.featuresRtree_ && this.featuresRtree_.insert(e, t)
			} else this.nullGeometryFeatures_[e] = t;
			this.dispatchEvent(new zl(Cl, t))
		}
		setupChangeEvents_(t, e) {
			e instanceof ts || (this.featureChangeKeys_[t] = [Ot(e, St, this.handleFeatureChange_, this), Ot(e, lt, this.handleFeatureChange_, this)])
		}
		addToIndex_(t, e) {
			let i = !0;
			if (void 0 !== e.getId()) {
				const t = String(e.getId());
				if (t in this.idIndex_)
					if (e instanceof ts) {
						const n = this.idIndex_[t];
						n instanceof ts ? Array.isArray(n) ? n.push(e) : this.idIndex_[t] = [n, e] : i = !1
					} else i = !1;
				else this.idIndex_[t] = e
			}
			return i && (Se(!(t in this.uidIndex_), "The passed `feature` was already added to the source"), this.uidIndex_[t] = e), i
		}
		addFeatures(t) {
			this.addFeaturesInternal(t), this.changed()
		}
		addFeaturesInternal(t) {
			const e = [],
				i = [],
				n = [];
			for (let e = 0, n = t.length; e < n; e++) {
				const n = t[e],
					r = l(n);
				this.addToIndex_(r, n) && i.push(n)
			}
			for (let t = 0, r = i.length; t < r; t++) {
				const r = i[t],
					s = l(r);
				this.setupChangeEvents_(s, r);
				const o = r.getGeometry();
				if (o) {
					const t = o.getExtent();
					e.push(t), n.push(r)
				} else this.nullGeometryFeatures_[s] = r
			}
			if (this.featuresRtree_ && this.featuresRtree_.load(e, n), this.hasListener(Cl))
				for (let t = 0, e = i.length; t < e; t++) this.dispatchEvent(new zl(Cl, i[t]))
		}
		bindFeaturesCollection_(t) {
			let e = !1;
			this.addEventListener(Cl, (function(i) {
				e || (e = !0, t.push(i.feature), e = !1)
			})), this.addEventListener(Rl, (function(i) {
				e || (e = !0, t.remove(i.feature), e = !1)
			})), t.addEventListener(Es, (t => {
				e || (e = !0, this.addFeature(t.element), e = !1)
			})), t.addEventListener(Cs, (t => {
				e || (e = !0, this.removeFeature(t.element), e = !1)
			})), this.featuresCollection_ = t
		}
		clear(t) {
			if (t) {
				for (const t in this.featureChangeKeys_) {
					this.featureChangeKeys_[t].forEach(Gt)
				}
				this.featuresCollection_ || (this.featureChangeKeys_ = {}, this.idIndex_ = {}, this.uidIndex_ = {})
			} else if (this.featuresRtree_) {
				const t = t => {
					this.removeFeatureInternal(t)
				};
				this.featuresRtree_.forEach(t);
				for (const t in this.nullGeometryFeatures_) this.removeFeatureInternal(this.nullGeometryFeatures_[t])
			}
			this.featuresCollection_ && this.featuresCollection_.clear(), this.featuresRtree_ && this.featuresRtree_.clear(), this.nullGeometryFeatures_ = {};
			const e = new zl(Pl);
			this.dispatchEvent(e), this.changed()
		}
		forEachFeature(t) {
			if (this.featuresRtree_) return this.featuresRtree_.forEach(t);
			this.featuresCollection_ && this.featuresCollection_.forEach(t)
		}
		forEachFeatureAtCoordinateDirect(t, e) {
			const i = [t[0], t[1], t[0], t[1]];
			return this.forEachFeatureInExtent(i, (function(i) {
				const n = i.getGeometry();
				if (n instanceof ts || n.intersectsCoordinate(t)) return e(i)
			}))
		}
		forEachFeatureInExtent(t, e) {
			if (this.featuresRtree_) return this.featuresRtree_.forEachInExtent(t, e);
			this.featuresCollection_ && this.featuresCollection_.forEach(e)
		}
		forEachFeatureIntersectingExtent(t, e) {
			return this.forEachFeatureInExtent(t, (function(i) {
				const n = i.getGeometry();
				if (n instanceof ts || n.intersectsExtent(t)) {
					const t = e(i);
					if (t) return t
				}
			}))
		}
		getFeaturesCollection() {
			return this.featuresCollection_
		}
		getFeatures() {
			let t;
			return this.featuresCollection_ ? t = this.featuresCollection_.getArray().slice(0) : this.featuresRtree_ && (t = this.featuresRtree_.getAll(), wt(this.nullGeometryFeatures_) || gt(t, Object.values(this.nullGeometryFeatures_))), t
		}
		getFeaturesAtCoordinate(t) {
			const e = [];
			return this.forEachFeatureAtCoordinateDirect(t, (function(t) {
				e.push(t)
			})), e
		}
		getFeaturesInExtent(t, e) {
			if (this.featuresRtree_) {
				if (!(e && e.canWrapX() && this.getWrapX())) return this.featuresRtree_.getInExtent(t);
				const i = function(t, e) {
					if (e.canWrapX()) {
						const i = e.getExtent();
						if (!isFinite(t[0]) || !isFinite(t[2])) return [
							[i[0], t[1], i[2], t[3]]
						];
						Ri(t, e);
						const n = Ei(i);
						if (Ei(t) > n) return [
							[i[0], t[1], i[2], t[3]]
						];
						if (t[0] < i[0]) return [
							[t[0] + n, t[1], i[2], t[3]],
							[i[0], t[1], t[2], t[3]]
						];
						if (t[2] > i[2]) return [
							[t[0], t[1], i[2], t[3]],
							[i[0], t[1], t[2] - n, t[3]]
						]
					}
					return [t]
				}(t, e);
				return [].concat(...i.map((t => this.featuresRtree_.getInExtent(t))))
			}
			return this.featuresCollection_ ? this.featuresCollection_.getArray().slice(0) : []
		}
		getClosestFeatureToCoordinate(t, e) {
			const i = t[0],
				n = t[1];
			let r = null;
			const s = [NaN, NaN];
			let o = 1 / 0;
			const a = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
			return e = e || ft, this.featuresRtree_.forEachInExtent(a, (function(t) {
				if (e(t)) {
					const e = t.getGeometry(),
						l = o;
					if (o = e instanceof ts ? 0 : e.closestPointXY(i, n, s, o), o < l) {
						r = t;
						const e = Math.sqrt(o);
						a[0] = i - e, a[1] = n - e, a[2] = i + e, a[3] = n + e
					}
				}
			})), r
		}
		getExtent(t) {
			return this.featuresRtree_.getExtent(t)
		}
		getFeatureById(t) {
			const e = this.idIndex_[t.toString()];
			return void 0 !== e ? e : null
		}
		getFeatureByUid(t) {
			const e = this.uidIndex_[t];
			return void 0 !== e ? e : null
		}
		getFormat() {
			return this.format_
		}
		getOverlaps() {
			return this.overlaps_
		}
		getUrl() {
			return this.url_
		}
		handleFeatureChange_(t) {
			const e = t.target,
				i = l(e),
				n = e.getGeometry();
			if (n) {
				const t = n.getExtent();
				i in this.nullGeometryFeatures_ ? (delete this.nullGeometryFeatures_[i], this.featuresRtree_ && this.featuresRtree_.insert(t, e)) : this.featuresRtree_ && this.featuresRtree_.update(t, e)
			} else i in this.nullGeometryFeatures_ || (this.featuresRtree_ && this.featuresRtree_.remove(e), this.nullGeometryFeatures_[i] = e);
			const r = e.getId();
			if (void 0 !== r) {
				const t = r.toString();
				this.idIndex_[t] !== e && (this.removeFromIdIndex_(e), this.idIndex_[t] = e)
			} else this.removeFromIdIndex_(e), this.uidIndex_[i] = e;
			this.changed(), this.dispatchEvent(new zl(Tl, e))
		}
		hasFeature(t) {
			const e = t.getId();
			return void 0 !== e ? e in this.idIndex_ : l(t) in this.uidIndex_
		}
		isEmpty() {
			return this.featuresRtree_ ? this.featuresRtree_.isEmpty() && wt(this.nullGeometryFeatures_) : !this.featuresCollection_ || 0 === this.featuresCollection_.getLength()
		}
		loadFeatures(t, e, i) {
			const n = this.loadedExtentsRtree_,
				r = this.strategy_(t, e, i);
			for (let t = 0, s = r.length; t < s; ++t) {
				const s = r[t];
				n.forEachInExtent(s, (function(t) {
					return Qe(t.extent, s)
				})) || (++this.loadingExtentsCount_, this.dispatchEvent(new zl(Fl)), this.loader_.call(this, s, e, i, (t => {
					--this.loadingExtentsCount_, this.dispatchEvent(new zl(Ml, void 0, t))
				}), (() => {
					--this.loadingExtentsCount_, this.dispatchEvent(new zl(Il))
				})), n.insert(s, {
					extent: s.slice()
				}))
			}
			this.loading = !(this.loader_.length < 4) && this.loadingExtentsCount_ > 0
		}
		refresh() {
			this.clear(!0), this.loadedExtentsRtree_.clear(), super.refresh()
		}
		removeLoadedExtent(t) {
			const e = this.loadedExtentsRtree_;
			let i;
			e.forEachInExtent(t, (function(e) {
				if (ai(e.extent, t)) return i = e, !0
			})), i && e.remove(i)
		}
		removeFeature(t) {
			if (!t) return;
			const e = l(t);
			e in this.nullGeometryFeatures_ ? delete this.nullGeometryFeatures_[e] : this.featuresRtree_ && this.featuresRtree_.remove(t);
			this.removeFeatureInternal(t) && this.changed()
		}
		removeFeatureInternal(t) {
			const e = l(t),
				i = this.featureChangeKeys_[e];
			if (!i) return;
			i.forEach(Gt), delete this.featureChangeKeys_[e];
			const n = t.getId();
			return void 0 !== n && delete this.idIndex_[n.toString()], delete this.uidIndex_[e], this.dispatchEvent(new zl(Rl, t)), t
		}
		removeFromIdIndex_(t) {
			let e = !1;
			for (const i in this.idIndex_) {
				const n = this.idIndex_[i];
				if (t instanceof ts && Array.isArray(n) && n.includes(t)) n.splice(n.indexOf(t), 1);
				else if (this.idIndex_[i] === t) {
					delete this.idIndex_[i], e = !0;
					break
				}
			}
			return e
		}
		setLoader(t) {
			this.loader_ = t
		}
		setUrl(t) {
			Se(this.format_, "`format` must be set when `url` is set"), this.url_ = t, this.setLoader(Ol(t, this.format_))
		}
	};
	var Nl = class extends bt {
		constructor(t, e, i) {
			super(), i = i || {}, this.tileCoord = t, this.state = e, this.interimTile = null, this.key = "", this.transition_ = void 0 === i.transition ? 250 : i.transition, this.transitionStarts_ = {}, this.interpolate = !!i.interpolate
		}
		changed() {
			this.dispatchEvent(St)
		}
		release() {
			this.state === Ss.ERROR && this.setState(Ss.EMPTY)
		}
		getKey() {
			return this.key + "/" + this.tileCoord
		}
		getInterimTile() {
			let t = this.interimTile;
			if (!t) return this;
			do {
				if (t.getState() == Ss.LOADED) return this.transition_ = 0, t;
				t = t.interimTile
			} while (t);
			return this
		}
		refreshInterimChain() {
			let t = this.interimTile;
			if (!t) return;
			let e = this;
			do {
				if (t.getState() == Ss.LOADED) {
					t.interimTile = null;
					break
				}
				t.getState() == Ss.LOADING ? e = t : t.getState() == Ss.IDLE ? e.interimTile = t.interimTile : e = t, t = e.interimTile
			} while (t)
		}
		getTileCoord() {
			return this.tileCoord
		}
		getState() {
			return this.state
		}
		setState(t) {
			if (this.state !== Ss.ERROR && this.state > t) throw new Error("Tile load sequence violation");
			this.state = t, this.changed()
		}
		load() {
			o()
		}
		getAlpha(t, e) {
			if (!this.transition_) return 1;
			let i = this.transitionStarts_[t];
			if (i) {
				if (-1 === i) return 1
			} else i = e, this.transitionStarts_[t] = i;
			const n = e - i + 1e3 / 60;
			return n >= this.transition_ ? 1 : eo(n / this.transition_)
		}
		inTransition(t) {
			return !!this.transition_ && -1 !== this.transitionStarts_[t]
		}
		endTransition(t) {
			this.transition_ && (this.transitionStarts_[t] = -1)
		}
	};
	var jl = class extends Nl {
		constructor(t, e, i, n, r, s) {
			super(t, e, s), this.crossOrigin_ = n, this.src_ = i, this.key = i, this.image_ = new Image, null !== n && (this.image_.crossOrigin = n), this.unlisten_ = null, this.tileLoadFunction_ = r
		}
		getImage() {
			return this.image_
		}
		setImage(t) {
			this.image_ = t, this.state = Ss.LOADED, this.unlistenImage_(), this.changed()
		}
		handleImageError_() {
			this.state = Ss.ERROR, this.unlistenImage_(), this.image_ = function() {
				const t = tt(1, 1);
				return t.fillStyle = "rgba(0,0,0,0)", t.fillRect(0, 0, 1, 1), t.canvas
			}(), this.changed()
		}
		handleImageLoad_() {
			const t = this.image_;
			t.naturalWidth && t.naturalHeight ? this.state = Ss.LOADED : this.state = Ss.EMPTY, this.unlistenImage_(), this.changed()
		}
		load() {
			this.state == Ss.ERROR && (this.state = Ss.IDLE, this.image_ = new Image, null !== this.crossOrigin_ && (this.image_.crossOrigin = this.crossOrigin_)), this.state == Ss.IDLE && (this.state = Ss.LOADING, this.changed(), this.tileLoadFunction_(this, this.src_), this.unlisten_ = function(t, e, i) {
				const n = t;
				let r = !0,
					s = !1,
					o = !1;
				const a = [zt(n, kt, (function() {
					o = !0, s || e()
				}))];
				return n.src && H ? (s = !0, n.decode().then((function() {
						r && e()
					})).catch((function(t) {
						r && (o ? e() : i())
					}))) : a.push(zt(n, Et, i)),
					function() {
						r = !1, a.forEach(Gt)
					}
			}(this.image_, this.handleImageLoad_.bind(this), this.handleImageError_.bind(this)))
		}
		unlistenImage_() {
			this.unlisten_ && (this.unlisten_(), this.unlisten_ = null)
		}
	};
	var Ul = class {
		constructor(t, e, i) {
			this.decay_ = t, this.minVelocity_ = e, this.delay_ = i, this.points_ = [], this.angle_ = 0, this.initialVelocity_ = 0
		}
		begin() {
			this.points_.length = 0, this.angle_ = 0, this.initialVelocity_ = 0
		}
		update(t, e) {
			this.points_.push(t, e, Date.now())
		}
		end() {
			if (this.points_.length < 6) return !1;
			const t = Date.now() - this.delay_,
				e = this.points_.length - 3;
			if (this.points_[e + 2] < t) return !1;
			let i = e - 3;
			for (; i > 0 && this.points_[i + 2] > t;) i -= 3;
			const n = this.points_[e + 2] - this.points_[i + 2];
			if (n < 1e3 / 60) return !1;
			const r = this.points_[e] - this.points_[i],
				s = this.points_[e + 1] - this.points_[i + 1];
			return this.angle_ = Math.atan2(s, r), this.initialVelocity_ = Math.sqrt(r * r + s * s) / n, this.initialVelocity_ > this.minVelocity_
		}
		getDistance() {
			return (this.minVelocity_ - this.initialVelocity_) / this.decay_
		}
		getAngle() {
			return this.angle_
		}
	};

	function Bl(t, e) {
		Re.expire()
	}
	var $l = class extends ht {
		constructor(t) {
			super(), this.map_ = t
		}
		dispatchRenderEvent(t, e) {
			o()
		}
		calculateMatrices2D(t) {
			const e = t.viewState,
				i = t.coordinateToPixelTransform,
				n = t.pixelToCoordinateTransform;
			$e(i, t.size[0] / 2, t.size[1] / 2, 1 / e.resolution, -1 / e.resolution, -e.rotation, -e.center[0], -e.center[1]), Ve(n, i)
		}
		forEachFeatureAtCoordinate(t, e, i, n, r, s, o, a) {
			let l;
			const h = e.viewState;

			function u(t, e, i, n) {
				return r.call(s, e, t ? i : null, n)
			}
			const c = h.projection,
				d = en(t.slice(), c),
				g = [
					[0, 0]
				];
			if (c.canWrapX() && n) {
				const t = Ei(c.getExtent());
				g.push([-t, 0], [t, 0])
			}
			const p = e.layerStatesArray,
				f = p.length,
				m = [],
				_ = [];
			for (let n = 0; n < g.length; n++)
				for (let r = f - 1; r >= 0; --r) {
					const s = p[r],
						c = s.layer;
					if (c.hasRenderer() && ho(s, h) && o.call(a, c)) {
						const r = c.getRenderer(),
							o = c.getSource();
						if (r && o) {
							const a = o.getWrapX() ? d : t,
								h = u.bind(null, s.managed);
							_[0] = a[0] + g[n][0], _[1] = a[1] + g[n][1], l = r.forEachFeatureAtCoordinate(_, e, i, h, m)
						}
						if (l) return l
					}
				}
			if (0 === m.length) return;
			const y = 1 / m.length;
			return m.forEach(((t, e) => t.distanceSq += e * y)), m.sort(((t, e) => t.distanceSq - e.distanceSq)), m.some((t => l = t.callback(t.feature, t.layer, t.geometry))), l
		}
		hasFeatureAtCoordinate(t, e, i, n, r, s) {
			return void 0 !== this.forEachFeatureAtCoordinate(t, e, i, n, ft, this, r, s)
		}
		getMap() {
			return this.map_
		}
		renderFrame(t) {
			o()
		}
		flushDeclutterItems(t) {}
		scheduleExpireIconCache(t) {
			Re.canExpireCache() && t.postRenderFunctions.push(Bl)
		}
	};
	var Vl = class extends $l {
		constructor(t) {
			super(t), this.fontChangeListenerKey_ = Ot(ae, lt, t.redrawText.bind(t)), this.element_ = document.createElement("div");
			const e = this.element_.style;
			e.position = "absolute", e.width = "100%", e.height = "100%", e.zIndex = "0", this.element_.className = Wt + " ol-layers";
			const i = t.getViewport();
			i.insertBefore(this.element_, i.firstChild || null), this.children_ = [], this.renderedVisible_ = !0, this.declutterLayers_ = []
		}
		dispatchRenderEvent(t, e) {
			const i = this.getMap();
			if (i.hasListener(t)) {
				const n = new Xa(t, void 0, e);
				i.dispatchEvent(n)
			}
		}
		disposeInternal() {
			Gt(this.fontChangeListenerKey_), this.element_.parentNode.removeChild(this.element_), super.disposeInternal()
		}
		renderFrame(t) {
			if (!t) return void(this.renderedVisible_ && (this.element_.style.display = "none", this.renderedVisible_ = !1));
			this.calculateMatrices2D(t), this.dispatchRenderEvent(Is, t);
			const e = t.layerStatesArray.sort((function(t, e) {
					return t.zIndex - e.zIndex
				})),
				i = t.viewState;
			this.children_.length = 0;
			const n = this.declutterLayers_;
			n.length = 0;
			let r = null;
			for (let s = 0, o = e.length; s < o; ++s) {
				const o = e[s];
				t.layerIndex = s;
				const a = o.layer,
					l = a.getSourceState();
				if (!ho(o, i) || "ready" != l && "undefined" != l) {
					a.unrender();
					continue
				}
				const h = a.render(t, r);
				h && (h !== r && (this.children_.push(h), r = h), "getDeclutter" in a && n.push(a))
			}
			this.flushDeclutterItems(t),
				function(t, e) {
					const i = t.childNodes;
					for (let n = 0;; ++n) {
						const r = i[n],
							s = e[n];
						if (!r && !s) break;
						r !== s && (r ? s ? t.insertBefore(s, r) : (t.removeChild(r), --n) : t.appendChild(s))
					}
				}(this.element_, this.children_), this.dispatchRenderEvent(Ls, t), this.renderedVisible_ || (this.element_.style.display = "", this.renderedVisible_ = !0), this.scheduleExpireIconCache(t)
		}
		flushDeclutterItems(t) {
			const e = this.declutterLayers_;
			for (let i = e.length - 1; i >= 0; --i) e[i].renderDeclutter(t);
			e.length = 0
		}
	};
	class Xl extends at {
		constructor(t, e) {
			super(t), this.layer = e
		}
	}
	const Wl = "layers";
	class ql extends Vs {
		constructor(t) {
			t = t || {};
			const e = Object.assign({}, t);
			delete e.layers;
			let i = t.layers;
			super(e), this.on, this.once, this.un, this.layersListenerKeys_ = [], this.listenerKeys_ = {}, this.addChangeListener(Wl, this.handleLayersChanged_), i ? Array.isArray(i) ? i = new Rs(i.slice(), {
				unique: !0
			}) : Se("function" == typeof i.getArray, "Expected `layers` to be an array or a `Collection`") : i = new Rs(void 0, {
				unique: !0
			}), this.setLayers(i)
		}
		handleLayerChange_() {
			this.changed()
		}
		handleLayersChanged_() {
			this.layersListenerKeys_.forEach(Gt), this.layersListenerKeys_.length = 0;
			const t = this.getLayers();
			this.layersListenerKeys_.push(Ot(t, Es, this.handleLayersAdd_, this), Ot(t, Cs, this.handleLayersRemove_, this));
			for (const t in this.listenerKeys_) this.listenerKeys_[t].forEach(Gt);
			vt(this.listenerKeys_);
			const e = t.getArray();
			for (let t = 0, i = e.length; t < i; t++) {
				const i = e[t];
				this.registerLayerListeners_(i), this.dispatchEvent(new Xl("addlayer", i))
			}
			this.changed()
		}
		registerLayerListeners_(t) {
			const e = [Ot(t, lt, this.handleLayerChange_, this), Ot(t, St, this.handleLayerChange_, this)];
			t instanceof ql && e.push(Ot(t, "addlayer", this.handleLayerGroupAdd_, this), Ot(t, "removelayer", this.handleLayerGroupRemove_, this)), this.listenerKeys_[l(t)] = e
		}
		handleLayerGroupAdd_(t) {
			this.dispatchEvent(new Xl("addlayer", t.layer))
		}
		handleLayerGroupRemove_(t) {
			this.dispatchEvent(new Xl("removelayer", t.layer))
		}
		handleLayersAdd_(t) {
			const e = t.element;
			this.registerLayerListeners_(e), this.dispatchEvent(new Xl("addlayer", e)), this.changed()
		}
		handleLayersRemove_(t) {
			const e = t.element,
				i = l(e);
			this.listenerKeys_[i].forEach(Gt), delete this.listenerKeys_[i], this.dispatchEvent(new Xl("removelayer", e)), this.changed()
		}
		getLayers() {
			return this.get(Wl)
		}
		setLayers(t) {
			const e = this.getLayers();
			if (e) {
				const t = e.getArray();
				for (let e = 0, i = t.length; e < i; ++e) this.dispatchEvent(new Xl("removelayer", t[e]))
			}
			this.set(Wl, t)
		}
		getLayersArray(t) {
			return t = void 0 !== t ? t : [], this.getLayers().forEach((function(e) {
				e.getLayersArray(t)
			})), t
		}
		getLayerStatesArray(t) {
			const e = void 0 !== t ? t : [],
				i = e.length;
			this.getLayers().forEach((function(t) {
				t.getLayerStatesArray(e)
			}));
			const n = this.getLayerState();
			let r = n.zIndex;
			t || void 0 !== n.zIndex || (r = 0);
			for (let t = i, s = e.length; t < s; t++) {
				const i = e[t];
				i.opacity *= n.opacity, i.visible = i.visible && n.visible, i.maxResolution = Math.min(i.maxResolution, n.maxResolution), i.minResolution = Math.max(i.minResolution, n.minResolution), i.minZoom = Math.max(i.minZoom, n.minZoom), i.maxZoom = Math.min(i.maxZoom, n.maxZoom), void 0 !== n.extent && (void 0 !== i.extent ? i.extent = wi(i.extent, n.extent) : i.extent = n.extent), void 0 === i.zIndex && (i.zIndex = r)
			}
			return e
		}
		getSourceState() {
			return "ready"
		}
	}
	var Zl = ql,
		Yl = Object.freeze({
			__proto__: null,
			GroupEvent: Xl,
			default: Zl
		});
	var Kl = class extends at {
		constructor(t, e, i) {
			super(t), this.map = e, this.frameState = void 0 !== i ? i : null
		}
	};
	var Hl = class extends Kl {
			constructor(t, e, i, n, r, s) {
				super(t, e, r), this.originalEvent = i, this.pixel_ = null, this.coordinate_ = null, this.dragging = void 0 !== n && n, this.activePointers = s
			}
			get pixel() {
				return this.pixel_ || (this.pixel_ = this.map.getEventPixel(this.originalEvent)), this.pixel_
			}
			set pixel(t) {
				this.pixel_ = t
			}
			get coordinate() {
				return this.coordinate_ || (this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel)), this.coordinate_
			}
			set coordinate(t) {
				this.coordinate_ = t
			}
			preventDefault() {
				super.preventDefault(), "preventDefault" in this.originalEvent && this.originalEvent.preventDefault()
			}
			stopPropagation() {
				super.stopPropagation(), "stopPropagation" in this.originalEvent && this.originalEvent.stopPropagation()
			}
		},
		Jl = {
			SINGLECLICK: "singleclick",
			CLICK: Tt,
			DBLCLICK: Pt,
			POINTERDRAG: "pointerdrag",
			POINTERMOVE: "pointermove",
			POINTERDOWN: "pointerdown",
			POINTERUP: "pointerup",
			POINTEROVER: "pointerover",
			POINTEROUT: "pointerout",
			POINTERENTER: "pointerenter",
			POINTERLEAVE: "pointerleave",
			POINTERCANCEL: "pointercancel"
		},
		Ql = "pointermove",
		th = "pointerdown";
	var eh = class extends bt {
			constructor(t, e) {
				super(t), this.map_ = t, this.clickTimeoutId_, this.emulateClicks_ = !1, this.dragging_ = !1, this.dragListenerKeys_ = [], this.moveTolerance_ = void 0 === e ? 1 : e, this.down_ = null;
				const i = this.map_.getViewport();
				this.activePointers_ = [], this.trackedTouches_ = {}, this.element_ = i, this.pointerdownListenerKey_ = Ot(i, th, this.handlePointerDown_, this), this.originalPointerMoveEvent_, this.relayedListenerKey_ = Ot(i, Ql, this.relayMoveEvent_, this), this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this), this.element_.addEventListener(At, this.boundHandleTouchMove_, !!Q && {
					passive: !1
				})
			}
			emulateClick_(t) {
				let e = new Hl(Jl.CLICK, this.map_, t);
				this.dispatchEvent(e), void 0 !== this.clickTimeoutId_ ? (clearTimeout(this.clickTimeoutId_), this.clickTimeoutId_ = void 0, e = new Hl(Jl.DBLCLICK, this.map_, t), this.dispatchEvent(e)) : this.clickTimeoutId_ = setTimeout((() => {
					this.clickTimeoutId_ = void 0;
					const e = new Hl(Jl.SINGLECLICK, this.map_, t);
					this.dispatchEvent(e)
				}), 250)
			}
			updateActivePointers_(t) {
				const e = t,
					i = e.pointerId;
				if (e.type == Jl.POINTERUP || e.type == Jl.POINTERCANCEL) {
					delete this.trackedTouches_[i];
					for (const t in this.trackedTouches_)
						if (this.trackedTouches_[t].target !== e.target) {
							delete this.trackedTouches_[t];
							break
						}
				} else e.type != Jl.POINTERDOWN && e.type != Jl.POINTERMOVE || (this.trackedTouches_[i] = e);
				this.activePointers_ = Object.values(this.trackedTouches_)
			}
			handlePointerUp_(t) {
				this.updateActivePointers_(t);
				const e = new Hl(Jl.POINTERUP, this.map_, t, void 0, void 0, this.activePointers_);
				this.dispatchEvent(e), this.emulateClicks_ && !e.defaultPrevented && !this.dragging_ && this.isMouseActionButton_(t) && this.emulateClick_(this.down_), 0 === this.activePointers_.length && (this.dragListenerKeys_.forEach(Gt), this.dragListenerKeys_.length = 0, this.dragging_ = !1, this.down_ = null)
			}
			isMouseActionButton_(t) {
				return 0 === t.button
			}
			handlePointerDown_(t) {
				this.emulateClicks_ = 0 === this.activePointers_.length, this.updateActivePointers_(t);
				const e = new Hl(Jl.POINTERDOWN, this.map_, t, void 0, void 0, this.activePointers_);
				if (this.dispatchEvent(e), this.down_ = new PointerEvent(t.type, t), Object.defineProperty(this.down_, "target", {
						writable: !1,
						value: t.target
					}), 0 === this.dragListenerKeys_.length) {
					const t = this.map_.getOwnerDocument();
					this.dragListenerKeys_.push(Ot(t, Jl.POINTERMOVE, this.handlePointerMove_, this), Ot(t, Jl.POINTERUP, this.handlePointerUp_, this), Ot(this.element_, Jl.POINTERCANCEL, this.handlePointerUp_, this)), this.element_.getRootNode && this.element_.getRootNode() !== t && this.dragListenerKeys_.push(Ot(this.element_.getRootNode(), Jl.POINTERUP, this.handlePointerUp_, this))
				}
			}
			handlePointerMove_(t) {
				if (this.isMoving_(t)) {
					this.updateActivePointers_(t), this.dragging_ = !0;
					const e = new Hl(Jl.POINTERDRAG, this.map_, t, this.dragging_, void 0, this.activePointers_);
					this.dispatchEvent(e)
				}
			}
			relayMoveEvent_(t) {
				this.originalPointerMoveEvent_ = t;
				const e = !(!this.down_ || !this.isMoving_(t));
				this.dispatchEvent(new Hl(Jl.POINTERMOVE, this.map_, t, e))
			}
			handleTouchMove_(t) {
				const e = this.originalPointerMoveEvent_;
				e && !e.defaultPrevented || "boolean" == typeof t.cancelable && !0 !== t.cancelable || t.preventDefault()
			}
			isMoving_(t) {
				return this.dragging_ || Math.abs(t.clientX - this.down_.clientX) > this.moveTolerance_ || Math.abs(t.clientY - this.down_.clientY) > this.moveTolerance_
			}
			disposeInternal() {
				this.relayedListenerKey_ && (Gt(this.relayedListenerKey_), this.relayedListenerKey_ = null), this.element_.removeEventListener(At, this.boundHandleTouchMove_), this.pointerdownListenerKey_ && (Gt(this.pointerdownListenerKey_), this.pointerdownListenerKey_ = null), this.dragListenerKeys_.forEach(Gt), this.dragListenerKeys_.length = 0, this.element_ = null, super.disposeInternal()
			}
		},
		ih = "postrender",
		nh = "movestart",
		rh = "moveend",
		sh = "loadstart",
		oh = "loadend",
		ah = "layergroup",
		lh = "size",
		hh = "target",
		uh = "view";
	const ch = 1 / 0;
	var dh = class {
		constructor(t, e) {
			this.priorityFunction_ = t, this.keyFunction_ = e, this.elements_ = [], this.priorities_ = [], this.queuedElements_ = {}
		}
		clear() {
			this.elements_.length = 0, this.priorities_.length = 0, vt(this.queuedElements_)
		}
		dequeue() {
			const t = this.elements_,
				e = this.priorities_,
				i = t[0];
			1 == t.length ? (t.length = 0, e.length = 0) : (t[0] = t.pop(), e[0] = e.pop(), this.siftUp_(0));
			const n = this.keyFunction_(i);
			return delete this.queuedElements_[n], i
		}
		enqueue(t) {
			Se(!(this.keyFunction_(t) in this.queuedElements_), "Tried to enqueue an `element` that was already added to the queue");
			const e = this.priorityFunction_(t);
			return e != ch && (this.elements_.push(t), this.priorities_.push(e), this.queuedElements_[this.keyFunction_(t)] = !0, this.siftDown_(0, this.elements_.length - 1), !0)
		}
		getCount() {
			return this.elements_.length
		}
		getLeftChildIndex_(t) {
			return 2 * t + 1
		}
		getRightChildIndex_(t) {
			return 2 * t + 2
		}
		getParentIndex_(t) {
			return t - 1 >> 1
		}
		heapify_() {
			let t;
			for (t = (this.elements_.length >> 1) - 1; t >= 0; t--) this.siftUp_(t)
		}
		isEmpty() {
			return 0 === this.elements_.length
		}
		isKeyQueued(t) {
			return t in this.queuedElements_
		}
		isQueued(t) {
			return this.isKeyQueued(this.keyFunction_(t))
		}
		siftUp_(t) {
			const e = this.elements_,
				i = this.priorities_,
				n = e.length,
				r = e[t],
				s = i[t],
				o = t;
			for (; t < n >> 1;) {
				const r = this.getLeftChildIndex_(t),
					s = this.getRightChildIndex_(t),
					o = s < n && i[s] < i[r] ? s : r;
				e[t] = e[o], i[t] = i[o], t = o
			}
			e[t] = r, i[t] = s, this.siftDown_(o, t)
		}
		siftDown_(t, e) {
			const i = this.elements_,
				n = this.priorities_,
				r = i[e],
				s = n[e];
			for (; e > t;) {
				const t = this.getParentIndex_(e);
				if (!(n[t] > s)) break;
				i[e] = i[t], n[e] = n[t], e = t
			}
			i[e] = r, n[e] = s
		}
		reprioritize() {
			const t = this.priorityFunction_,
				e = this.elements_,
				i = this.priorities_;
			let n = 0;
			const r = e.length;
			let s, o, a;
			for (o = 0; o < r; ++o) s = e[o], a = t(s), a == ch ? delete this.queuedElements_[this.keyFunction_(s)] : (i[n] = a, e[n++] = s);
			e.length = n, i.length = n, this.heapify_()
		}
	};
	var gh = class extends dh {
		constructor(t, e) {
			super((function(e) {
				return t.apply(null, e)
			}), (function(t) {
				return t[0].getKey()
			})), this.boundHandleTileChange_ = this.handleTileChange.bind(this), this.tileChangeCallback_ = e, this.tilesLoading_ = 0, this.tilesLoadingKeys_ = {}
		}
		enqueue(t) {
			const e = super.enqueue(t);
			if (e) {
				t[0].addEventListener(St, this.boundHandleTileChange_)
			}
			return e
		}
		getTilesLoading() {
			return this.tilesLoading_
		}
		handleTileChange(t) {
			const e = t.target,
				i = e.getState();
			if (i === Ss.LOADED || i === Ss.ERROR || i === Ss.EMPTY) {
				i !== Ss.ERROR && e.removeEventListener(St, this.boundHandleTileChange_);
				const t = e.getKey();
				t in this.tilesLoadingKeys_ && (delete this.tilesLoadingKeys_[t], --this.tilesLoading_), this.tileChangeCallback_()
			}
		}
		loadMoreTiles(t, e) {
			let i, n, r, s = 0;
			for (; this.tilesLoading_ < t && s < e && this.getCount() > 0;) n = this.dequeue()[0], r = n.getKey(), i = n.getState(), i !== Ss.IDLE || r in this.tilesLoadingKeys_ || (this.tilesLoadingKeys_[r] = !0, ++this.tilesLoading_, ++s, n.load())
		}
	};
	class ph extends Vt {
		constructor(t) {
			super();
			const e = t.element;
			!e || t.target || e.style.pointerEvents || (e.style.pointerEvents = "auto"), this.element = e || null, this.target_ = null, this.map_ = null, this.listenerKeys = [], t.render && (this.render = t.render), t.target && this.setTarget(t.target)
		}
		disposeInternal() {
			st(this.element), super.disposeInternal()
		}
		getMap() {
			return this.map_
		}
		setMap(t) {
			this.map_ && st(this.element);
			for (let t = 0, e = this.listenerKeys.length; t < e; ++t) Gt(this.listenerKeys[t]);
			if (this.listenerKeys.length = 0, this.map_ = t, t) {
				(this.target_ ? this.target_ : t.getOverlayContainerStopEvent()).appendChild(this.element), this.render !== _t && this.listenerKeys.push(Ot(t, ih, this.render, this)), t.render()
			}
		}
		render(t) {}
		setTarget(t) {
			this.target_ = "string" == typeof t ? document.getElementById(t) : t
		}
	}
	var fh = Object.freeze({
		__proto__: null,
		default: ph
	});
	var mh = class extends ph {
		constructor(t) {
			t = t || {}, super({
				element: document.createElement("div"),
				render: t.render,
				target: t.target
			}), this.ulElement_ = document.createElement("ul"), this.collapsed_ = void 0 === t.collapsed || t.collapsed, this.userCollapsed_ = this.collapsed_, this.overrideCollapsible_ = void 0 !== t.collapsible, this.collapsible_ = void 0 === t.collapsible || t.collapsible, this.collapsible_ || (this.collapsed_ = !1);
			const e = void 0 !== t.className ? t.className : "ol-attribution",
				i = void 0 !== t.tipLabel ? t.tipLabel : "Attributions",
				n = void 0 !== t.expandClassName ? t.expandClassName : e + "-expand",
				r = void 0 !== t.collapseLabel ? t.collapseLabel : '<i class="fa-solid fa-caret-right"></i>',
				s = void 0 !== t.collapseClassName ? t.collapseClassName : e + "-collapse";
			"string" == typeof r ? (this.collapseLabel_ = document.createElement("span"), this.collapseLabel_.textContent = r, this.collapseLabel_.className = s) : this.collapseLabel_ = r;
			const o = void 0 !== t.label ? t.label : "i";
			"string" == typeof o ? (this.label_ = document.createElement("span"), this.label_.textContent = o, this.label_.className = n) : this.label_ = o;
			const a = this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
			this.toggleButton_ = document.createElement("button"), this.toggleButton_.setAttribute("type", "button"), this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_)), this.toggleButton_.title = i, this.toggleButton_.appendChild(a), this.toggleButton_.addEventListener(Tt, this.handleClick_.bind(this), !1);
			const l = e + " " + Wt + " " + qt + (this.collapsed_ && this.collapsible_ ? " " + Zt : "") + (this.collapsible_ ? "" : " ol-uncollapsible"),
				h = this.element;
			h.className = l, h.appendChild(this.toggleButton_), h.appendChild(this.ulElement_), this.renderedAttributions_ = [], this.renderedVisible_ = !0
		}
		collectSourceAttributions_(t) {
			const e = Array.from(new Set(this.getMap().getAllLayers().flatMap((e => e.getAttributions(t))))),
				i = !this.getMap().getAllLayers().some((t => t.getSource() && !1 === t.getSource().getAttributionsCollapsible()));
			return this.overrideCollapsible_ || this.setCollapsible(i), e
		}
		updateElement_(t) {
			if (!t) return void(this.renderedVisible_ && (this.element.style.display = "none", this.renderedVisible_ = !1));
			const e = this.collectSourceAttributions_(t),
				i = e.length > 0;
			if (this.renderedVisible_ != i && (this.element.style.display = i ? "" : "none", this.renderedVisible_ = i), !pt(e, this.renderedAttributions_)) {
				ot(this.ulElement_);
				for (let t = 0, i = e.length; t < i; ++t) {
					const i = document.createElement("li");
					i.innerHTML = e[t], this.ulElement_.appendChild(i)
				}
				this.renderedAttributions_ = e
			}
		}
		handleClick_(t) {
			t.preventDefault(), this.handleToggle_(), this.userCollapsed_ = this.collapsed_
		}
		handleToggle_() {
			this.element.classList.toggle(Zt), this.collapsed_ ? rt(this.collapseLabel_, this.label_) : rt(this.label_, this.collapseLabel_), this.collapsed_ = !this.collapsed_, this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_))
		}
		getCollapsible() {
			return this.collapsible_
		}
		setCollapsible(t) {
			this.collapsible_ !== t && (this.collapsible_ = t, this.element.classList.toggle("ol-uncollapsible"), this.userCollapsed_ && this.handleToggle_())
		}
		setCollapsed(t) {
			this.userCollapsed_ = t, this.collapsible_ && this.collapsed_ !== t && this.handleToggle_()
		}
		getCollapsed() {
			return this.collapsed_
		}
		render(t) {
			this.updateElement_(t.frameState)
		}
	};
	var _h = class extends ph {
		constructor(t) {
			t = t || {}, super({
				element: document.createElement("div"),
				render: t.render,
				target: t.target
			});
			const e = void 0 !== t.className ? t.className : "ol-rotate",
				i = void 0 !== t.label ? t.label : "⇧",
				n = void 0 !== t.compassClassName ? t.compassClassName : "ol-compass";
			this.label_ = null, "string" == typeof i ? (this.label_ = document.createElement("span"), this.label_.className = n, this.label_.textContent = i) : (this.label_ = i, this.label_.classList.add(n));
			const r = t.tipLabel ? t.tipLabel : "Reset rotation",
				s = document.createElement("button");
			s.className = e + "-reset", s.setAttribute("type", "button"), s.title = r, s.appendChild(this.label_), s.addEventListener(Tt, this.handleClick_.bind(this), !1);
			const o = e + " " + Wt + " " + qt,
				a = this.element;
			a.className = o, a.appendChild(s), this.callResetNorth_ = t.resetNorth ? t.resetNorth : void 0, this.duration_ = void 0 !== t.duration ? t.duration : 250, this.autoHide_ = void 0 === t.autoHide || t.autoHide, this.rotation_ = void 0, this.autoHide_ && this.element.classList.add(Xt)
		}
		handleClick_(t) {
			t.preventDefault(), void 0 !== this.callResetNorth_ ? this.callResetNorth_() : this.resetNorth_()
		}
		resetNorth_() {
			const t = this.getMap().getView();
			if (!t) return;
			const e = t.getRotation();
			void 0 !== e && (this.duration_ > 0 && e % (2 * Math.PI) != 0 ? t.animate({
				rotation: 0,
				duration: this.duration_,
				easing: io
			}) : t.setRotation(0))
		}
		render(t) {
			const e = t.frameState;
			if (!e) return;
			const i = e.viewState.rotation;
			if (i != this.rotation_) {
				const t = "rotate(" + i + "rad)";
				if (this.autoHide_) {
					const t = this.element.classList.contains(Xt);
					t || 0 !== i ? t && 0 !== i && this.element.classList.remove(Xt) : this.element.classList.add(Xt)
				}
				this.label_.style.transform = t
			}
			this.rotation_ = i
		}
	};
	var yh = class extends ph {
		constructor(t) {
			t = t || {}, super({
				element: document.createElement("div"),
				target: t.target
			});
			const e = void 0 !== t.className ? t.className : "ol-zoom",
				i = void 0 !== t.delta ? t.delta : 1,
				n = void 0 !== t.zoomInClassName ? t.zoomInClassName : e + "-in",
				r = void 0 !== t.zoomOutClassName ? t.zoomOutClassName : e + "-out",
				s = void 0 !== t.zoomInLabel ? t.zoomInLabel : "+",
				o = void 0 !== t.zoomOutLabel ? t.zoomOutLabel : "–",
				a = void 0 !== t.zoomInTipLabel ? t.zoomInTipLabel : "Zoom in",
				l = void 0 !== t.zoomOutTipLabel ? t.zoomOutTipLabel : "Zoom out",
				h = document.createElement("button");
			h.className = n, h.setAttribute("type", "button"), h.title = a, h.appendChild("string" == typeof s ? document.createTextNode(s) : s), h.addEventListener(Tt, this.handleClick_.bind(this, i), !1);
			const u = document.createElement("button");
			u.className = r, u.setAttribute("type", "button"), u.title = l, u.appendChild("string" == typeof o ? document.createTextNode(o) : o), u.addEventListener(Tt, this.handleClick_.bind(this, -i), !1);
			const c = e + " " + Wt + " " + qt,
				d = this.element;
			d.className = c, d.appendChild(h), d.appendChild(u), this.duration_ = void 0 !== t.duration ? t.duration : 250
		}
		handleClick_(t, e) {
			e.preventDefault(), this.zoomByDelta_(t)
		}
		zoomByDelta_(t) {
			const e = this.getMap().getView();
			if (!e) return;
			const i = e.getZoom();
			if (void 0 !== i) {
				const n = e.getConstrainedZoom(i + t);
				this.duration_ > 0 ? (e.getAnimating() && e.cancelAnimations(), e.animate({
					zoom: n,
					duration: this.duration_,
					easing: io
				})) : e.setZoom(n)
			}
		}
	};
	var xh = "active";

	function vh(t, e, i, n) {
		const r = t.getZoom();
		if (void 0 === r) return;
		const s = t.getConstrainedZoom(r + e),
			o = t.getResolutionForZoom(s);
		t.getAnimating() && t.cancelAnimations(), t.animate({
			resolution: o,
			anchor: i,
			duration: void 0 !== n ? n : 250,
			easing: io
		})
	}
	var wh = class extends Vt {
		constructor(t) {
			super(), this.on, this.once, this.un, t && t.handleEvent && (this.handleEvent = t.handleEvent), this.map_ = null, this.setActive(!0)
		}
		getActive() {
			return this.get(xh)
		}
		getMap() {
			return this.map_
		}
		handleEvent(t) {
			return !0
		}
		setActive(t) {
			this.set(xh, t)
		}
		setMap(t) {
			this.map_ = t
		}
	};
	var bh = class extends wh {
		constructor(t) {
			super(), t = t || {}, this.delta_ = t.delta ? t.delta : 1, this.duration_ = void 0 !== t.duration ? t.duration : 250
		}
		handleEvent(t) {
			let e = !1;
			if (t.type == Jl.DBLCLICK) {
				const i = t.originalEvent,
					n = t.map,
					r = t.coordinate,
					s = i.shiftKey ? -this.delta_ : this.delta_;
				vh(n.getView(), s, r, this.duration_), i.preventDefault(), e = !0
			}
			return !e
		}
	};

	function Sh(t) {
		const e = t.length;
		let i = 0,
			n = 0;
		for (let r = 0; r < e; r++) i += t[r].clientX, n += t[r].clientY;
		return {
			clientX: i / e,
			clientY: n / e
		}
	}
	var Eh = class extends wh {
		constructor(t) {
			super(t = t || {}), t.handleDownEvent && (this.handleDownEvent = t.handleDownEvent), t.handleDragEvent && (this.handleDragEvent = t.handleDragEvent), t.handleMoveEvent && (this.handleMoveEvent = t.handleMoveEvent), t.handleUpEvent && (this.handleUpEvent = t.handleUpEvent), t.stopDown && (this.stopDown = t.stopDown), this.handlingDownUpSequence = !1, this.targetPointers = []
		}
		getPointerCount() {
			return this.targetPointers.length
		}
		handleDownEvent(t) {
			return !1
		}
		handleDragEvent(t) {}
		handleEvent(t) {
			if (!t.originalEvent) return !0;
			let e = !1;
			if (this.updateTrackedPointers_(t), this.handlingDownUpSequence) {
				if (t.type == Jl.POINTERDRAG) this.handleDragEvent(t), t.originalEvent.preventDefault();
				else if (t.type == Jl.POINTERUP) {
					const e = this.handleUpEvent(t);
					this.handlingDownUpSequence = e && this.targetPointers.length > 0
				}
			} else if (t.type == Jl.POINTERDOWN) {
				const i = this.handleDownEvent(t);
				this.handlingDownUpSequence = i, e = this.stopDown(i)
			} else t.type == Jl.POINTERMOVE && this.handleMoveEvent(t);
			return !e
		}
		handleMoveEvent(t) {}
		handleUpEvent(t) {
			return !1
		}
		stopDown(t) {
			return t
		}
		updateTrackedPointers_(t) {
			t.activePointers && (this.targetPointers = t.activePointers)
		}
	};

	function Ch(t) {
		const e = arguments;
		return function(t) {
			let i = !0;
			for (let n = 0, r = e.length; n < r && (i = i && e[n](t), i); ++n);
			return i
		}
	}
	const Th = function(t) {
			const e = t.originalEvent;
			return e.altKey && !(e.metaKey || e.ctrlKey) && e.shiftKey
		},
		Ph = function(t) {
			return !t.map.getTargetElement().hasAttribute("tabindex") || function(t) {
				const e = t.map.getTargetElement(),
					i = t.map.getOwnerDocument().activeElement;
				return e.contains(i)
			}(t)
		},
		Rh = ft,
		Fh = function(t) {
			const e = t.originalEvent;
			return 0 == e.button && !(q && Z && e.ctrlKey)
		},
		Mh = mt,
		Ih = function(t) {
			return t.type == Jl.SINGLECLICK
		},
		Lh = function(t) {
			const e = t.originalEvent;
			return !e.altKey && !(e.metaKey || e.ctrlKey) && !e.shiftKey
		},
		kh = function(t) {
			const e = t.originalEvent;
			return !e.altKey && !(e.metaKey || e.ctrlKey) && e.shiftKey
		},
		Ah = function(t) {
			const e = t.originalEvent,
				i = e.target.tagName;
			return "INPUT" !== i && "SELECT" !== i && "TEXTAREA" !== i && !e.target.isContentEditable
		},
		Dh = function(t) {
			const e = t.originalEvent;
			return Se(void 0 !== e, "mapBrowserEvent must originate from a pointer event"), "mouse" == e.pointerType
		},
		Oh = function(t) {
			const e = t.originalEvent;
			return Se(void 0 !== e, "mapBrowserEvent must originate from a pointer event"), e.isPrimary && 0 === e.button
		};
	var zh = class extends Eh {
		constructor(t) {
			super({
				stopDown: mt
			}), t = t || {}, this.kinetic_ = t.kinetic, this.lastCentroid = null, this.lastPointersCount_, this.panning_ = !1;
			const e = t.condition ? t.condition : Ch(Lh, Oh);
			this.condition_ = t.onFocusOnly ? Ch(Ph, e) : e, this.noKinetic_ = !1
		}
		handleDragEvent(t) {
			const e = t.map;
			this.panning_ || (this.panning_ = !0, e.getView().beginInteraction());
			const i = this.targetPointers,
				n = e.getEventPixel(Sh(i));
			if (i.length == this.lastPointersCount_) {
				if (this.kinetic_ && this.kinetic_.update(n[0], n[1]), this.lastCentroid) {
					const e = [this.lastCentroid[0] - n[0], n[1] - this.lastCentroid[1]],
						i = t.map.getView();
					! function(t, e) {
						t[0] *= e, t[1] *= e
					}(e, i.getResolution()), Hi(e, i.getRotation()), i.adjustCenterInternal(e)
				}
			} else this.kinetic_ && this.kinetic_.begin();
			this.lastCentroid = n, this.lastPointersCount_ = i.length, t.originalEvent.preventDefault()
		}
		handleUpEvent(t) {
			const e = t.map,
				i = e.getView();
			if (0 === this.targetPointers.length) {
				if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
					const t = this.kinetic_.getDistance(),
						n = this.kinetic_.getAngle(),
						r = i.getCenterInternal(),
						s = e.getPixelFromCoordinateInternal(r),
						o = e.getCoordinateFromPixelInternal([s[0] - t * Math.cos(n), s[1] - t * Math.sin(n)]);
					i.animateInternal({
						center: i.getConstrainedCenter(o),
						duration: 500,
						easing: io
					})
				}
				return this.panning_ && (this.panning_ = !1, i.endInteraction()), !1
			}
			return this.kinetic_ && this.kinetic_.begin(), this.lastCentroid = null, !0
		}
		handleDownEvent(t) {
			if (this.targetPointers.length > 0 && this.condition_(t)) {
				const e = t.map.getView();
				return this.lastCentroid = null, e.getAnimating() && e.cancelAnimations(), this.kinetic_ && this.kinetic_.begin(), this.noKinetic_ = this.targetPointers.length > 1, !0
			}
			return !1
		}
	};
	var Gh = class extends Eh {
		constructor(t) {
			t = t || {}, super({
				stopDown: mt
			}), this.condition_ = t.condition ? t.condition : Th, this.lastAngle_ = void 0, this.duration_ = void 0 !== t.duration ? t.duration : 250
		}
		handleDragEvent(t) {
			if (!Dh(t)) return;
			const e = t.map,
				i = e.getView();
			if (i.getConstraints().rotation === Qs) return;
			const n = e.getSize(),
				r = t.pixel,
				s = Math.atan2(n[1] / 2 - r[1], r[0] - n[0] / 2);
			if (void 0 !== this.lastAngle_) {
				const t = s - this.lastAngle_;
				i.adjustRotationInternal(-t)
			}
			this.lastAngle_ = s
		}
		handleUpEvent(t) {
			if (!Dh(t)) return !0;
			return t.map.getView().endInteraction(this.duration_), !1
		}
		handleDownEvent(t) {
			if (!Dh(t)) return !1;
			if (Fh(t) && this.condition_(t)) {
				return t.map.getView().beginInteraction(), this.lastAngle_ = void 0, !0
			}
			return !1
		}
	};
	var Nh = class extends ht {
		constructor(t) {
			super(), this.geometry_ = null, this.element_ = document.createElement("div"), this.element_.style.position = "absolute", this.element_.style.pointerEvents = "auto", this.element_.className = "ol-box " + t, this.map_ = null, this.startPixel_ = null, this.endPixel_ = null
		}
		disposeInternal() {
			this.setMap(null)
		}
		render_() {
			const t = this.startPixel_,
				e = this.endPixel_,
				i = "px",
				n = this.element_.style;
			n.left = Math.min(t[0], e[0]) + i, n.top = Math.min(t[1], e[1]) + i, n.width = Math.abs(e[0] - t[0]) + i, n.height = Math.abs(e[1] - t[1]) + i
		}
		setMap(t) {
			if (this.map_) {
				this.map_.getOverlayContainer().removeChild(this.element_);
				const t = this.element_.style;
				t.left = "inherit", t.top = "inherit", t.width = "inherit", t.height = "inherit"
			}
			this.map_ = t, this.map_ && this.map_.getOverlayContainer().appendChild(this.element_)
		}
		setPixels(t, e) {
			this.startPixel_ = t, this.endPixel_ = e, this.createOrUpdateGeometry(), this.render_()
		}
		createOrUpdateGeometry() {
			const t = this.startPixel_,
				e = this.endPixel_,
				i = [t, [t[0], e[1]], e, [e[0], t[1]]].map(this.map_.getCoordinateFromPixelInternal, this.map_);
			i[4] = i[0].slice(), this.geometry_ ? this.geometry_.setCoordinates([i]) : this.geometry_ = new Wr([i])
		}
		getGeometry() {
			return this.geometry_
		}
	};
	const jh = "boxstart",
		Uh = "boxdrag",
		Bh = "boxend",
		$h = "boxcancel";
	class Vh extends at {
		constructor(t, e, i) {
			super(t), this.coordinate = e, this.mapBrowserEvent = i
		}
	}
	var Xh = class extends Eh {
		constructor(t) {
			super(), this.on, this.once, this.un, t = t || {}, this.box_ = new Nh(t.className || "ol-dragbox"), this.minArea_ = void 0 !== t.minArea ? t.minArea : 64, t.onBoxEnd && (this.onBoxEnd = t.onBoxEnd), this.startPixel_ = null, this.condition_ = t.condition ? t.condition : Fh, this.boxEndCondition_ = t.boxEndCondition ? t.boxEndCondition : this.defaultBoxEndCondition
		}
		defaultBoxEndCondition(t, e, i) {
			const n = i[0] - e[0],
				r = i[1] - e[1];
			return n * n + r * r >= this.minArea_
		}
		getGeometry() {
			return this.box_.getGeometry()
		}
		handleDragEvent(t) {
			this.box_.setPixels(this.startPixel_, t.pixel), this.dispatchEvent(new Vh(Uh, t.coordinate, t))
		}
		handleUpEvent(t) {
			this.box_.setMap(null);
			const e = this.boxEndCondition_(t, this.startPixel_, t.pixel);
			return e && this.onBoxEnd(t), this.dispatchEvent(new Vh(e ? Bh : $h, t.coordinate, t)), !1
		}
		handleDownEvent(t) {
			return !!this.condition_(t) && (this.startPixel_ = t.pixel, this.box_.setMap(t.map), this.box_.setPixels(this.startPixel_, this.startPixel_), this.dispatchEvent(new Vh(jh, t.coordinate, t)), !0)
		}
		onBoxEnd(t) {}
	};
	var Wh = class extends Xh {
			constructor(t) {
				super({
					condition: (t = t || {}).condition ? t.condition : kh,
					className: t.className || "ol-dragzoom",
					minArea: t.minArea
				}), this.duration_ = void 0 !== t.duration ? t.duration : 200, this.out_ = void 0 !== t.out && t.out
			}
			onBoxEnd(t) {
				const e = this.getMap().getView();
				let i = this.getGeometry();
				if (this.out_) {
					const t = e.rotatedExtentForGeometry(i),
						n = e.getResolutionForExtentInternal(t),
						r = e.getResolution() / n;
					i = i.clone(), i.scale(r * r)
				}
				e.fitInternal(i, {
					duration: this.duration_,
					easing: io
				})
			}
		},
		qh = "ArrowLeft",
		Zh = "ArrowUp",
		Yh = "ArrowRight",
		Kh = "ArrowDown";
	var Hh = class extends wh {
		constructor(t) {
			super(), t = t || {}, this.defaultCondition_ = function(t) {
				return Lh(t) && Ah(t)
			}, this.condition_ = void 0 !== t.condition ? t.condition : this.defaultCondition_, this.duration_ = void 0 !== t.duration ? t.duration : 100, this.pixelDelta_ = void 0 !== t.pixelDelta ? t.pixelDelta : 128
		}
		handleEvent(t) {
			let e = !1;
			if (t.type == It) {
				const i = t.originalEvent,
					n = i.key;
				if (this.condition_(t) && (n == Kh || n == qh || n == Yh || n == Zh)) {
					const r = t.map.getView(),
						s = r.getResolution() * this.pixelDelta_;
					let o = 0,
						a = 0;
					n == Kh ? a = -s : n == qh ? o = -s : n == Yh ? o = s : a = s;
					const l = [o, a];
					Hi(l, r.getRotation()),
						function(t, e, i) {
							const n = t.getCenterInternal();
							if (n) {
								const r = [n[0] + e[0], n[1] + e[1]];
								t.animateInternal({
									duration: void 0 !== i ? i : 250,
									easing: ro,
									center: t.getConstrainedCenter(r)
								})
							}
						}(r, l, this.duration_), i.preventDefault(), e = !0
				}
			}
			return !e
		}
	};
	var Jh = class extends wh {
		constructor(t) {
			super(), t = t || {}, this.condition_ = t.condition ? t.condition : function(t) {
				return ! function(t) {
					const e = t.originalEvent;
					return Z ? e.metaKey : e.ctrlKey
				}(t) && Ah(t)
			}, this.delta_ = t.delta ? t.delta : 1, this.duration_ = void 0 !== t.duration ? t.duration : 100
		}
		handleEvent(t) {
			let e = !1;
			if (t.type == It || t.type == Lt) {
				const i = t.originalEvent,
					n = i.key;
				if (this.condition_(t) && ("+" === n || "-" === n)) {
					const r = t.map,
						s = "+" === n ? this.delta_ : -this.delta_;
					vh(r.getView(), s, void 0, this.duration_), i.preventDefault(), e = !0
				}
			}
			return !e
		}
	};
	var Qh = class extends wh {
		constructor(t) {
			super(t = t || {}), this.totalDelta_ = 0, this.lastDelta_ = 0, this.maxDelta_ = void 0 !== t.maxDelta ? t.maxDelta : 1, this.duration_ = void 0 !== t.duration ? t.duration : 250, this.timeout_ = void 0 !== t.timeout ? t.timeout : 80, this.useAnchor_ = void 0 === t.useAnchor || t.useAnchor, this.constrainResolution_ = void 0 !== t.constrainResolution && t.constrainResolution;
			const e = t.condition ? t.condition : Rh;
			this.condition_ = t.onFocusOnly ? Ch(Ph, e) : e, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_, this.mode_ = void 0, this.trackpadEventGap_ = 400, this.trackpadTimeoutId_, this.deltaPerZoom_ = 300
		}
		endInteraction_() {
			this.trackpadTimeoutId_ = void 0;
			const t = this.getMap();
			if (!t) return;
			t.getView().endInteraction(void 0, this.lastDelta_ ? this.lastDelta_ > 0 ? 1 : -1 : 0, this.lastAnchor_)
		}
		handleEvent(t) {
			if (!this.condition_(t)) return !0;
			if (t.type !== Dt) return !0;
			const e = t.map,
				i = t.originalEvent;
			let n;
			if (i.preventDefault(), this.useAnchor_ && (this.lastAnchor_ = t.coordinate), t.type == Dt && (n = i.deltaY, X && i.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (n /= Y), i.deltaMode === WheelEvent.DOM_DELTA_LINE && (n *= 40)), 0 === n) return !1;
			this.lastDelta_ = n;
			const r = Date.now();
			void 0 === this.startTime_ && (this.startTime_ = r), (!this.mode_ || r - this.startTime_ > this.trackpadEventGap_) && (this.mode_ = Math.abs(n) < 4 ? "trackpad" : "wheel");
			const s = e.getView();
			if ("trackpad" === this.mode_ && !s.getConstrainResolution() && !this.constrainResolution_) return this.trackpadTimeoutId_ ? clearTimeout(this.trackpadTimeoutId_) : (s.getAnimating() && s.cancelAnimations(), s.beginInteraction()), this.trackpadTimeoutId_ = setTimeout(this.endInteraction_.bind(this), this.timeout_), s.adjustZoom(-n / this.deltaPerZoom_, this.lastAnchor_), this.startTime_ = r, !1;
			this.totalDelta_ += n;
			const o = Math.max(this.timeout_ - (r - this.startTime_), 0);
			return clearTimeout(this.timeoutId_), this.timeoutId_ = setTimeout(this.handleWheelZoom_.bind(this, e), o), !1
		}
		handleWheelZoom_(t) {
			const e = t.getView();
			e.getAnimating() && e.cancelAnimations();
			let i = -b(this.totalDelta_, -this.maxDelta_ * this.deltaPerZoom_, this.maxDelta_ * this.deltaPerZoom_) / this.deltaPerZoom_;
			(e.getConstrainResolution() || this.constrainResolution_) && (i = i ? i > 0 ? 1 : -1 : 0), vh(e, i, this.lastAnchor_, this.duration_), this.mode_ = void 0, this.totalDelta_ = 0, this.lastAnchor_ = null, this.startTime_ = void 0, this.timeoutId_ = void 0
		}
		setMouseAnchor(t) {
			this.useAnchor_ = t, t || (this.lastAnchor_ = null)
		}
	};
	var tu = class extends Eh {
		constructor(t) {
			const e = t = t || {};
			e.stopDown || (e.stopDown = mt), super(e), this.anchor_ = null, this.lastAngle_ = void 0, this.rotating_ = !1, this.rotationDelta_ = 0, this.threshold_ = void 0 !== t.threshold ? t.threshold : .3, this.duration_ = void 0 !== t.duration ? t.duration : 250
		}
		handleDragEvent(t) {
			let e = 0;
			const i = this.targetPointers[0],
				n = this.targetPointers[1],
				r = Math.atan2(n.clientY - i.clientY, n.clientX - i.clientX);
			if (void 0 !== this.lastAngle_) {
				const t = r - this.lastAngle_;
				this.rotationDelta_ += t, !this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_ && (this.rotating_ = !0), e = t
			}
			this.lastAngle_ = r;
			const s = t.map,
				o = s.getView();
			o.getConstraints().rotation !== Qs && (this.anchor_ = s.getCoordinateFromPixelInternal(s.getEventPixel(Sh(this.targetPointers))), this.rotating_ && (s.render(), o.adjustRotationInternal(e, this.anchor_)))
		}
		handleUpEvent(t) {
			if (this.targetPointers.length < 2) {
				return t.map.getView().endInteraction(this.duration_), !1
			}
			return !0
		}
		handleDownEvent(t) {
			if (this.targetPointers.length >= 2) {
				const e = t.map;
				return this.anchor_ = null, this.lastAngle_ = void 0, this.rotating_ = !1, this.rotationDelta_ = 0, this.handlingDownUpSequence || e.getView().beginInteraction(), !0
			}
			return !1
		}
	};
	var eu = class extends Eh {
		constructor(t) {
			const e = t = t || {};
			e.stopDown || (e.stopDown = mt), super(e), this.anchor_ = null, this.duration_ = void 0 !== t.duration ? t.duration : 400, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1
		}
		handleDragEvent(t) {
			let e = 1;
			const i = this.targetPointers[0],
				n = this.targetPointers[1],
				r = i.clientX - n.clientX,
				s = i.clientY - n.clientY,
				o = Math.sqrt(r * r + s * s);
			void 0 !== this.lastDistance_ && (e = this.lastDistance_ / o), this.lastDistance_ = o;
			const a = t.map,
				l = a.getView();
			1 != e && (this.lastScaleDelta_ = e), this.anchor_ = a.getCoordinateFromPixelInternal(a.getEventPixel(Sh(this.targetPointers))), a.render(), l.adjustResolutionInternal(e, this.anchor_)
		}
		handleUpEvent(t) {
			if (this.targetPointers.length < 2) {
				const e = t.map.getView(),
					i = this.lastScaleDelta_ > 1 ? 1 : -1;
				return e.endInteraction(this.duration_, i), !1
			}
			return !0
		}
		handleDownEvent(t) {
			if (this.targetPointers.length >= 2) {
				const e = t.map;
				return this.anchor_ = null, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1, this.handlingDownUpSequence || e.getView().beginInteraction(), !0
			}
			return !1
		}
	};

	function iu(t) {
		t = t || {};
		const e = new Rs,
			i = new Ul(-.005, .05, 100);
		(void 0 === t.altShiftDragRotate || t.altShiftDragRotate) && e.push(new Gh);
		(void 0 === t.doubleClickZoom || t.doubleClickZoom) && e.push(new bh({
			delta: t.zoomDelta,
			duration: t.zoomDuration
		}));
		(void 0 === t.dragPan || t.dragPan) && e.push(new zh({
			onFocusOnly: t.onFocusOnly,
			kinetic: i
		}));
		(void 0 === t.pinchRotate || t.pinchRotate) && e.push(new tu);
		(void 0 === t.pinchZoom || t.pinchZoom) && e.push(new eu({
			duration: t.zoomDuration
		}));
		(void 0 === t.keyboard || t.keyboard) && (e.push(new Hh), e.push(new Jh({
			delta: t.zoomDelta,
			duration: t.zoomDuration
		})));
		(void 0 === t.mouseWheelZoom || t.mouseWheelZoom) && e.push(new Qh({
			onFocusOnly: t.onFocusOnly,
			duration: t.zoomDuration
		}));
		return (void 0 === t.shiftDragZoom || t.shiftDragZoom) && e.push(new Wh({
			duration: t.zoomDuration
		})), e
	}

	function nu(t) {
		t instanceof uo ? t.setMapInternal(null) : t instanceof Zl && t.getLayers().forEach(nu)
	}

	function ru(t, e) {
		if (t instanceof uo) t.setMapInternal(e);
		else if (t instanceof Zl) {
			const i = t.getLayers().getArray();
			for (let t = 0, n = i.length; t < n; ++t) ru(i[t], e)
		}
	}
	var su = class extends Vt {
		constructor(t) {
			super(), t = t || {}, this.on, this.once, this.un;
			const e = function(t) {
				let e = null;
				void 0 !== t.keyboardEventTarget && (e = "string" == typeof t.keyboardEventTarget ? document.getElementById(t.keyboardEventTarget) : t.keyboardEventTarget);
				const i = {},
					n = t.layers && "function" == typeof t.layers.getLayers ? t.layers : new Zl({
						layers: t.layers
					});
				let r, s, o;
				i[ah] = n, i[hh] = t.target, i[uh] = t.view instanceof lo ? t.view : new lo, void 0 !== t.controls && (Array.isArray(t.controls) ? r = new Rs(t.controls.slice()) : (Se("function" == typeof t.controls.getArray, "Expected `controls` to be an array or an `ol/Collection.js`"), r = t.controls));
				void 0 !== t.interactions && (Array.isArray(t.interactions) ? s = new Rs(t.interactions.slice()) : (Se("function" == typeof t.interactions.getArray, "Expected `interactions` to be an array or an `ol/Collection.js`"), s = t.interactions));
				void 0 !== t.overlays ? Array.isArray(t.overlays) ? o = new Rs(t.overlays.slice()) : (Se("function" == typeof t.overlays.getArray, "Expected `overlays` to be an array or an `ol/Collection.js`"), o = t.overlays) : o = new Rs;
				return {
					controls: r,
					interactions: s,
					keyboardEventTarget: e,
					overlays: o,
					values: i
				}
			}(t);
			this.renderComplete_, this.loaded_ = !0, this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this), this.maxTilesLoading_ = void 0 !== t.maxTilesLoading ? t.maxTilesLoading : 16, this.pixelRatio_ = void 0 !== t.pixelRatio ? t.pixelRatio : Y, this.postRenderTimeoutHandle_, this.animationDelayKey_, this.animationDelay_ = this.animationDelay_.bind(this), this.coordinateToPixelTransform_ = [1, 0, 0, 1, 0, 0], this.pixelToCoordinateTransform_ = [1, 0, 0, 1, 0, 0], this.frameIndex_ = 0, this.frameState_ = null, this.previousExtent_ = null, this.viewPropertyListenerKey_ = null, this.viewChangeListenerKey_ = null, this.layerGroupPropertyListenerKeys_ = null, this.viewport_ = document.createElement("div"), this.viewport_.className = "ol-viewport" + ("ontouchstart" in window ? " ol-touch" : ""), this.viewport_.style.position = "relative", this.viewport_.style.overflow = "hidden", this.viewport_.style.width = "100%", this.viewport_.style.height = "100%", this.overlayContainer_ = document.createElement("div"), this.overlayContainer_.style.position = "absolute", this.overlayContainer_.style.zIndex = "0", this.overlayContainer_.style.width = "100%", this.overlayContainer_.style.height = "100%", this.overlayContainer_.style.pointerEvents = "none", this.overlayContainer_.className = "ol-overlaycontainer", this.viewport_.appendChild(this.overlayContainer_), this.overlayContainerStopEvent_ = document.createElement("div"), this.overlayContainerStopEvent_.style.position = "absolute", this.overlayContainerStopEvent_.style.zIndex = "0", this.overlayContainerStopEvent_.style.width = "100%", this.overlayContainerStopEvent_.style.height = "100%", this.overlayContainerStopEvent_.style.pointerEvents = "none", this.overlayContainerStopEvent_.className = "ol-overlaycontainer-stopevent", this.viewport_.appendChild(this.overlayContainerStopEvent_), this.mapBrowserEventHandler_ = null, this.moveTolerance_ = t.moveTolerance, this.keyboardEventTarget_ = e.keyboardEventTarget, this.targetChangeHandlerKeys_ = null, this.targetElement_ = null, this.resizeObserver_ = new ResizeObserver((() => this.updateSize())), this.controls = e.controls || function(t) {
				t = t || {};
				const e = new Rs;
				return (void 0 === t.zoom || t.zoom) && e.push(new yh(t.zoomOptions)), (void 0 === t.rotate || t.rotate) && e.push(new _h(t.rotateOptions)), (void 0 === t.attribution || t.attribution) && e.push(new mh(t.attributionOptions)), e
			}(), this.interactions = e.interactions || iu({
				onFocusOnly: !0
			}), this.overlays_ = e.overlays, this.overlayIdIndex_ = {}, this.renderer_ = null, this.postRenderFunctions_ = [], this.tileQueue_ = new gh(this.getTilePriority.bind(this), this.handleTileChange_.bind(this)), this.addChangeListener(ah, this.handleLayerGroupChanged_), this.addChangeListener(uh, this.handleViewChanged_), this.addChangeListener(lh, this.handleSizeChanged_), this.addChangeListener(hh, this.handleTargetChanged_), this.setProperties(e.values);
			const i = this;
			!t.view || t.view instanceof lo || t.view.then((function(t) {
				i.setView(new lo(t))
			})), this.controls.addEventListener(Es, (t => {
				t.element.setMap(this)
			})), this.controls.addEventListener(Cs, (t => {
				t.element.setMap(null)
			})), this.interactions.addEventListener(Es, (t => {
				t.element.setMap(this)
			})), this.interactions.addEventListener(Cs, (t => {
				t.element.setMap(null)
			})), this.overlays_.addEventListener(Es, (t => {
				this.addOverlayInternal_(t.element)
			})), this.overlays_.addEventListener(Cs, (t => {
				const e = t.element.getId();
				void 0 !== e && delete this.overlayIdIndex_[e.toString()], t.element.setMap(null)
			})), this.controls.forEach((t => {
				t.setMap(this)
			})), this.interactions.forEach((t => {
				t.setMap(this)
			})), this.overlays_.forEach(this.addOverlayInternal_.bind(this))
		}
		addControl(t) {
			this.getControls().push(t)
		}
		addInteraction(t) {
			this.getInteractions().push(t)
		}
		addLayer(t) {
			this.getLayerGroup().getLayers().push(t)
		}
		handleLayerAdd_(t) {
			ru(t.layer, this)
		}
		addOverlay(t) {
			this.getOverlays().push(t)
		}
		addOverlayInternal_(t) {
			const e = t.getId();
			void 0 !== e && (this.overlayIdIndex_[e.toString()] = t), t.setMap(this)
		}
		disposeInternal() {
			this.controls.clear(), this.interactions.clear(), this.overlays_.clear(), this.resizeObserver_.disconnect(), this.setTarget(null), super.disposeInternal()
		}
		forEachFeatureAtPixel(t, e, i) {
			if (!this.frameState_ || !this.renderer_) return;
			const n = this.getCoordinateFromPixelInternal(t),
				r = void 0 !== (i = void 0 !== i ? i : {}).hitTolerance ? i.hitTolerance : 0,
				s = void 0 !== i.layerFilter ? i.layerFilter : ft,
				o = !1 !== i.checkWrapped;
			return this.renderer_.forEachFeatureAtCoordinate(n, this.frameState_, r, o, e, null, s, null)
		}
		getFeaturesAtPixel(t, e) {
			const i = [];
			return this.forEachFeatureAtPixel(t, (function(t) {
				i.push(t)
			}), e), i
		}
		getAllLayers() {
			const t = [];
			return function e(i) {
				i.forEach((function(i) {
					i instanceof Zl ? e(i.getLayers()) : t.push(i)
				}))
			}(this.getLayers()), t
		}
		hasFeatureAtPixel(t, e) {
			if (!this.frameState_ || !this.renderer_) return !1;
			const i = this.getCoordinateFromPixelInternal(t),
				n = void 0 !== (e = void 0 !== e ? e : {}).layerFilter ? e.layerFilter : ft,
				r = void 0 !== e.hitTolerance ? e.hitTolerance : 0,
				s = !1 !== e.checkWrapped;
			return this.renderer_.hasFeatureAtCoordinate(i, this.frameState_, r, s, n, null)
		}
		getEventCoordinate(t) {
			return this.getCoordinateFromPixel(this.getEventPixel(t))
		}
		getEventCoordinateInternal(t) {
			return this.getCoordinateFromPixelInternal(this.getEventPixel(t))
		}
		getEventPixel(t) {
			const e = this.viewport_.getBoundingClientRect(),
				i = this.getSize(),
				n = e.width / i[0],
				r = e.height / i[1],
				s = "changedTouches" in t ? t.changedTouches[0] : t;
			return [(s.clientX - e.left) / n, (s.clientY - e.top) / r]
		}
		getTarget() {
			return this.get(hh)
		}
		getTargetElement() {
			return this.targetElement_
		}
		getCoordinateFromPixel(t) {
			return kn(this.getCoordinateFromPixelInternal(t), this.getView().getProjection())
		}
		getCoordinateFromPixelInternal(t) {
			const e = this.frameState_;
			return e ? je(e.pixelToCoordinateTransform, t.slice()) : null
		}
		getControls() {
			return this.controls
		}
		getOverlays() {
			return this.overlays_
		}
		getOverlayById(t) {
			const e = this.overlayIdIndex_[t.toString()];
			return void 0 !== e ? e : null
		}
		getInteractions() {
			return this.interactions
		}
		getLayerGroup() {
			return this.get(ah)
		}
		setLayers(t) {
			const e = this.getLayerGroup();
			if (t instanceof Rs) return void e.setLayers(t);
			const i = e.getLayers();
			i.clear(), i.extend(t)
		}
		getLayers() {
			return this.getLayerGroup().getLayers()
		}
		getLoadingOrNotReady() {
			const t = this.getLayerGroup().getLayerStatesArray();
			for (let e = 0, i = t.length; e < i; ++e) {
				const i = t[e];
				if (!i.visible) continue;
				const n = i.layer.getRenderer();
				if (n && !n.ready) return !0;
				const r = i.layer.getSource();
				if (r && r.loading) return !0
			}
			return !1
		}
		getPixelFromCoordinate(t) {
			const e = An(t, this.getView().getProjection());
			return this.getPixelFromCoordinateInternal(e)
		}
		getPixelFromCoordinateInternal(t) {
			const e = this.frameState_;
			return e ? je(e.coordinateToPixelTransform, t.slice(0, 2)) : null
		}
		getRenderer() {
			return this.renderer_
		}
		getSize() {
			return this.get(lh)
		}
		getView() {
			return this.get(uh)
		}
		getViewport() {
			return this.viewport_
		}
		getOverlayContainer() {
			return this.overlayContainer_
		}
		getOverlayContainerStopEvent() {
			return this.overlayContainerStopEvent_
		}
		getOwnerDocument() {
			const t = this.getTargetElement();
			return t ? t.ownerDocument : document
		}
		getTilePriority(t, e, i, n) {
			return function(t, e, i, n, r) {
				if (!t || !(i in t.wantedTiles)) return ch;
				if (!t.wantedTiles[i][e.getKey()]) return ch;
				const s = t.viewState.center,
					o = n[0] - s[0],
					a = n[1] - s[1];
				return 65536 * Math.log(r) + Math.sqrt(o * o + a * a) / r
			}(this.frameState_, t, e, i, n)
		}
		handleBrowserEvent(t, e) {
			e = e || t.type;
			const i = new Hl(e, this, t);
			this.handleMapBrowserEvent(i)
		}
		handleMapBrowserEvent(t) {
			if (!this.frameState_) return;
			const e = t.originalEvent,
				i = e.type;
			if (i === th || i === Dt || i === It) {
				const t = this.getOwnerDocument(),
					i = this.viewport_.getRootNode ? this.viewport_.getRootNode() : t,
					n = e.target;
				if (this.overlayContainerStopEvent_.contains(n) || !(i === t ? t.documentElement : i).contains(n)) return
			}
			if (t.frameState = this.frameState_, !1 !== this.dispatchEvent(t)) {
				const e = this.getInteractions().getArray().slice();
				for (let i = e.length - 1; i >= 0; i--) {
					const n = e[i];
					if (n.getMap() !== this || !n.getActive() || !this.getTargetElement()) continue;
					if (!n.handleEvent(t) || t.propagationStopped) break
				}
			}
		}
		handlePostRender() {
			const t = this.frameState_,
				e = this.tileQueue_;
			if (!e.isEmpty()) {
				let i = this.maxTilesLoading_,
					n = i;
				if (t) {
					const e = t.viewHints;
					if (e[Xs] || e[Ws]) {
						const e = Date.now() - t.time > 8;
						i = e ? 0 : 8, n = e ? 0 : 2
					}
				}
				e.getTilesLoading() < i && (e.reprioritize(), e.loadMoreTiles(i, n))
			}
			t && this.renderer_ && !t.animate && (!0 === this.renderComplete_ ? (this.hasListener(ks) && this.renderer_.dispatchRenderEvent(ks, t), !1 === this.loaded_ && (this.loaded_ = !0, this.dispatchEvent(new Kl(oh, this, t)))) : !0 === this.loaded_ && (this.loaded_ = !1, this.dispatchEvent(new Kl(sh, this, t))));
			const i = this.postRenderFunctions_;
			for (let e = 0, n = i.length; e < n; ++e) i[e](this, t);
			i.length = 0
		}
		handleSizeChanged_() {
			this.getView() && !this.getView().getAnimating() && this.getView().resolveConstraints(0), this.render()
		}
		handleTargetChanged_() {
			if (this.mapBrowserEventHandler_) {
				for (let t = 0, e = this.targetChangeHandlerKeys_.length; t < e; ++t) Gt(this.targetChangeHandlerKeys_[t]);
				this.targetChangeHandlerKeys_ = null, this.viewport_.removeEventListener(Ct, this.boundHandleBrowserEvent_), this.viewport_.removeEventListener(Dt, this.boundHandleBrowserEvent_), this.mapBrowserEventHandler_.dispose(), this.mapBrowserEventHandler_ = null, st(this.viewport_)
			}
			if (this.targetElement_) {
				this.resizeObserver_.unobserve(this.targetElement_);
				const t = this.targetElement_.getRootNode();
				t instanceof ShadowRoot && this.resizeObserver_.unobserve(t.host), this.setSize(void 0)
			}
			const t = this.getTarget(),
				e = "string" == typeof t ? document.getElementById(t) : t;
			if (this.targetElement_ = e, e) {
				e.appendChild(this.viewport_), this.renderer_ || (this.renderer_ = new Vl(this)), this.mapBrowserEventHandler_ = new eh(this, this.moveTolerance_);
				for (const t in Jl) this.mapBrowserEventHandler_.addEventListener(Jl[t], this.handleMapBrowserEvent.bind(this));
				this.viewport_.addEventListener(Ct, this.boundHandleBrowserEvent_, !1), this.viewport_.addEventListener(Dt, this.boundHandleBrowserEvent_, !!Q && {
					passive: !1
				});
				const t = this.keyboardEventTarget_ ? this.keyboardEventTarget_ : e;
				this.targetChangeHandlerKeys_ = [Ot(t, It, this.handleBrowserEvent, this), Ot(t, Lt, this.handleBrowserEvent, this)];
				const i = e.getRootNode();
				i instanceof ShadowRoot && this.resizeObserver_.observe(i.host), this.resizeObserver_.observe(e)
			} else this.renderer_ && (clearTimeout(this.postRenderTimeoutHandle_), this.postRenderTimeoutHandle_ = void 0, this.postRenderFunctions_.length = 0, this.renderer_.dispose(), this.renderer_ = null), this.animationDelayKey_ && (cancelAnimationFrame(this.animationDelayKey_), this.animationDelayKey_ = void 0);
			this.updateSize()
		}
		handleTileChange_() {
			this.render()
		}
		handleViewPropertyChanged_() {
			this.render()
		}
		handleViewChanged_() {
			this.viewPropertyListenerKey_ && (Gt(this.viewPropertyListenerKey_), this.viewPropertyListenerKey_ = null), this.viewChangeListenerKey_ && (Gt(this.viewChangeListenerKey_), this.viewChangeListenerKey_ = null);
			const t = this.getView();
			t && (this.updateViewportSize_(this.getSize()), this.viewPropertyListenerKey_ = Ot(t, lt, this.handleViewPropertyChanged_, this), this.viewChangeListenerKey_ = Ot(t, St, this.handleViewPropertyChanged_, this), t.resolveConstraints(0)), this.render()
		}
		handleLayerGroupChanged_() {
			this.layerGroupPropertyListenerKeys_ && (this.layerGroupPropertyListenerKeys_.forEach(Gt), this.layerGroupPropertyListenerKeys_ = null);
			const t = this.getLayerGroup();
			t && (this.handleLayerAdd_(new Xl("addlayer", t)), this.layerGroupPropertyListenerKeys_ = [Ot(t, lt, this.render, this), Ot(t, St, this.render, this), Ot(t, "addlayer", this.handleLayerAdd_, this), Ot(t, "removelayer", this.handleLayerRemove_, this)]), this.render()
		}
		isRendered() {
			return !!this.frameState_
		}
		animationDelay_() {
			this.animationDelayKey_ = void 0, this.renderFrame_(Date.now())
		}
		renderSync() {
			this.animationDelayKey_ && cancelAnimationFrame(this.animationDelayKey_), this.animationDelay_()
		}
		redrawText() {
			const t = this.getLayerGroup().getLayerStatesArray();
			for (let e = 0, i = t.length; e < i; ++e) {
				const i = t[e].layer;
				i.hasRenderer() && i.getRenderer().handleFontsChanged()
			}
		}
		render() {
			this.renderer_ && void 0 === this.animationDelayKey_ && (this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_))
		}
		flushDeclutterItems() {
			const t = this.frameState_;
			t && this.renderer_.flushDeclutterItems(t)
		}
		removeControl(t) {
			return this.getControls().remove(t)
		}
		removeInteraction(t) {
			return this.getInteractions().remove(t)
		}
		removeLayer(t) {
			return this.getLayerGroup().getLayers().remove(t)
		}
		handleLayerRemove_(t) {
			nu(t.layer)
		}
		removeOverlay(t) {
			return this.getOverlays().remove(t)
		}
		renderFrame_(t) {
			const e = this.getSize(),
				i = this.getView(),
				n = this.frameState_;
			let r = null;
			if (void 0 !== e && h(e) && i && i.isDef()) {
				const n = i.getHints(this.frameState_ ? this.frameState_.viewHints : void 0),
					s = i.getState();
				if (r = {
						animate: !1,
						coordinateToPixelTransform: this.coordinateToPixelTransform_,
						declutterTree: null,
						extent: yi(s.center, s.resolution, s.rotation, e),
						index: this.frameIndex_++,
						layerIndex: 0,
						layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
						pixelRatio: this.pixelRatio_,
						pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
						postRenderFunctions: [],
						size: e,
						tileQueue: this.tileQueue_,
						time: t,
						usedTiles: {},
						viewState: s,
						viewHints: n,
						wantedTiles: {},
						mapId: l(this),
						renderTargets: {}
					}, s.nextCenter && s.nextResolution) {
					const t = isNaN(s.nextRotation) ? s.rotation : s.nextRotation;
					r.nextExtent = yi(s.nextCenter, s.nextResolution, t, e)
				}
			}
			if (this.frameState_ = r, this.renderer_.renderFrame(r), r) {
				if (r.animate && this.render(), Array.prototype.push.apply(this.postRenderFunctions_, r.postRenderFunctions), n) {
					(!this.previousExtent_ || !Ti(this.previousExtent_) && !ai(r.extent, this.previousExtent_)) && (this.dispatchEvent(new Kl(nh, this, n)), this.previousExtent_ = ri(this.previousExtent_))
				}
				this.previousExtent_ && !r.viewHints[Xs] && !r.viewHints[Ws] && !ai(r.extent, this.previousExtent_) && (this.dispatchEvent(new Kl(rh, this, r)), Ke(r.extent, this.previousExtent_))
			}
			this.dispatchEvent(new Kl(ih, this, r)), this.renderComplete_ = this.hasListener(sh) || this.hasListener(oh) || this.hasListener(ks) ? !this.tileQueue_.getTilesLoading() && !this.tileQueue_.getCount() && !this.getLoadingOrNotReady() : void 0, this.postRenderTimeoutHandle_ || (this.postRenderTimeoutHandle_ = setTimeout((() => {
				this.postRenderTimeoutHandle_ = void 0, this.handlePostRender()
			}), 0))
		}
		setLayerGroup(t) {
			const e = this.getLayerGroup();
			e && this.handleLayerRemove_(new Xl("removelayer", e)), this.set(ah, t)
		}
		setSize(t) {
			this.set(lh, t)
		}
		setTarget(t) {
			this.set(hh, t)
		}
		setView(t) {
			if (!t || t instanceof lo) return void this.set(uh, t);
			this.set(uh, new lo);
			const e = this;
			t.then((function(t) {
				e.setView(new lo(t))
			}))
		}
		updateSize() {
			const t = this.getTargetElement();
			let e;
			if (t) {
				const i = getComputedStyle(t),
					n = t.offsetWidth - parseFloat(i.borderLeftWidth) - parseFloat(i.paddingLeft) - parseFloat(i.paddingRight) - parseFloat(i.borderRightWidth),
					r = t.offsetHeight - parseFloat(i.borderTopWidth) - parseFloat(i.paddingTop) - parseFloat(i.paddingBottom) - parseFloat(i.borderBottomWidth);
				isNaN(n) || isNaN(r) || (e = [n, r], !h(e) && (t.offsetWidth || t.offsetHeight || t.getClientRects().length) && cn("No map visible because the map container's width or height are 0."))
			}
			const i = this.getSize();
			!e || i && pt(e, i) || (this.setSize(e), this.updateViewportSize_(e))
		}
		updateViewportSize_(t) {
			const e = this.getView();
			e && e.setViewportSize(t)
		}
	};
	const ou = "element",
		au = "map",
		lu = "offset",
		hu = "position",
		uu = "positioning";
	var cu = class extends Vt {
		constructor(t) {
			super(), this.on, this.once, this.un, this.options = t, this.id = t.id, this.insertFirst = void 0 === t.insertFirst || t.insertFirst, this.stopEvent = void 0 === t.stopEvent || t.stopEvent, this.element = document.createElement("div"), this.element.className = void 0 !== t.className ? t.className : "ol-overlay-container ol-selectable", this.element.style.position = "absolute", this.element.style.pointerEvents = "auto", this.autoPan = !0 === t.autoPan ? {} : t.autoPan || void 0, this.rendered = {
				transform_: "",
				visible: !0
			}, this.mapPostrenderListenerKey = null, this.addChangeListener(ou, this.handleElementChanged), this.addChangeListener(au, this.handleMapChanged), this.addChangeListener(lu, this.handleOffsetChanged), this.addChangeListener(hu, this.handlePositionChanged), this.addChangeListener(uu, this.handlePositioningChanged), void 0 !== t.element && this.setElement(t.element), this.setOffset(void 0 !== t.offset ? t.offset : [0, 0]), this.setPositioning(t.positioning || "top-left"), void 0 !== t.position && this.setPosition(t.position)
		}
		getElement() {
			return this.get(ou)
		}
		getId() {
			return this.id
		}
		getMap() {
			return this.get(au) || null
		}
		getOffset() {
			return this.get(lu)
		}
		getPosition() {
			return this.get(hu)
		}
		getPositioning() {
			return this.get(uu)
		}
		handleElementChanged() {
			ot(this.element);
			const t = this.getElement();
			t && this.element.appendChild(t)
		}
		handleMapChanged() {
			this.mapPostrenderListenerKey && (st(this.element), Gt(this.mapPostrenderListenerKey), this.mapPostrenderListenerKey = null);
			const t = this.getMap();
			if (t) {
				this.mapPostrenderListenerKey = Ot(t, ih, this.render, this), this.updatePixelPosition();
				const e = this.stopEvent ? t.getOverlayContainerStopEvent() : t.getOverlayContainer();
				this.insertFirst ? e.insertBefore(this.element, e.childNodes[0] || null) : e.appendChild(this.element), this.performAutoPan()
			}
		}
		render() {
			this.updatePixelPosition()
		}
		handleOffsetChanged() {
			this.updatePixelPosition()
		}
		handlePositionChanged() {
			this.updatePixelPosition(), this.performAutoPan()
		}
		handlePositioningChanged() {
			this.updatePixelPosition()
		}
		setElement(t) {
			this.set(ou, t)
		}
		setMap(t) {
			this.set(au, t)
		}
		setOffset(t) {
			this.set(lu, t)
		}
		setPosition(t) {
			this.set(hu, t)
		}
		performAutoPan() {
			this.autoPan && this.panIntoView(this.autoPan)
		}
		panIntoView(t) {
			const e = this.getMap();
			if (!e || !e.getTargetElement() || !this.get(hu)) return;
			const i = this.getRect(e.getTargetElement(), e.getSize()),
				n = this.getElement(),
				r = this.getRect(n, [it(n), nt(n)]),
				s = void 0 === (t = t || {}).margin ? 20 : t.margin;
			if (!Qe(i, r)) {
				const n = r[0] - i[0],
					o = i[2] - r[2],
					a = r[1] - i[1],
					l = i[3] - r[3],
					h = [0, 0];
				if (n < 0 ? h[0] = n - s : o < 0 && (h[0] = Math.abs(o) + s), a < 0 ? h[1] = a - s : l < 0 && (h[1] = Math.abs(l) + s), 0 !== h[0] || 0 !== h[1]) {
					const i = e.getView().getCenterInternal(),
						n = e.getPixelFromCoordinateInternal(i);
					if (!n) return;
					const r = [n[0] + h[0], n[1] + h[1]],
						s = t.animation || {};
					e.getView().animateInternal({
						center: e.getCoordinateFromPixelInternal(r),
						duration: s.duration,
						easing: s.easing
					})
				}
			}
		}
		getRect(t, e) {
			const i = t.getBoundingClientRect(),
				n = i.left + window.pageXOffset,
				r = i.top + window.pageYOffset;
			return [n, r, n + e[0], r + e[1]]
		}
		setPositioning(t) {
			this.set(uu, t)
		}
		setVisible(t) {
			this.rendered.visible !== t && (this.element.style.display = t ? "" : "none", this.rendered.visible = t)
		}
		updatePixelPosition() {
			const t = this.getMap(),
				e = this.getPosition();
			if (!t || !t.isRendered() || !e) return void this.setVisible(!1);
			const i = t.getPixelFromCoordinate(e),
				n = t.getSize();
			this.updateRenderedPosition(i, n)
		}
		updateRenderedPosition(t, e) {
			const i = this.element.style,
				n = this.getOffset(),
				r = this.getPositioning();
			this.setVisible(!0);
			let s = "0%",
				o = "0%";
			"bottom-right" == r || "center-right" == r || "top-right" == r ? s = "-100%" : "bottom-center" != r && "center-center" != r && "top-center" != r || (s = "-50%"), "bottom-left" == r || "bottom-center" == r || "bottom-right" == r ? o = "-100%" : "center-left" != r && "center-center" != r && "center-right" != r || (o = "-50%");
			const a = `translate(${s}, ${o}) translate(${Math.round(t[0] + n[0]) + "px"}, ${Math.round(t[1] + n[1]) + "px"})`;
			this.rendered.transform_ != a && (this.rendered.transform_ = a, i.transform = a)
		}
		getOptions() {
			return this.options
		}
	};
	var du = class {
		constructor(t) {
			this.highWaterMark = void 0 !== t ? t : 2048, this.count_ = 0, this.entries_ = {}, this.oldest_ = null, this.newest_ = null
		}
		canExpireCache() {
			return this.highWaterMark > 0 && this.getCount() > this.highWaterMark
		}
		expireCache(t) {
			for (; this.canExpireCache();) this.pop()
		}
		clear() {
			this.count_ = 0, this.entries_ = {}, this.oldest_ = null, this.newest_ = null
		}
		containsKey(t) {
			return this.entries_.hasOwnProperty(t)
		}
		forEach(t) {
			let e = this.oldest_;
			for (; e;) t(e.value_, e.key_, this), e = e.newer
		}
		get(t, e) {
			const i = this.entries_[t];
			return Se(void 0 !== i, "Tried to get a value for a key that does not exist in the cache"), i === this.newest_ || (i === this.oldest_ ? (this.oldest_ = this.oldest_.newer, this.oldest_.older = null) : (i.newer.older = i.older, i.older.newer = i.newer), i.newer = null, i.older = this.newest_, this.newest_.newer = i, this.newest_ = i), i.value_
		}
		remove(t) {
			const e = this.entries_[t];
			return Se(void 0 !== e, "Tried to get a value for a key that does not exist in the cache"), e === this.newest_ ? (this.newest_ = e.older, this.newest_ && (this.newest_.newer = null)) : e === this.oldest_ ? (this.oldest_ = e.newer, this.oldest_ && (this.oldest_.older = null)) : (e.newer.older = e.older, e.older.newer = e.newer), delete this.entries_[t], --this.count_, e.value_
		}
		getCount() {
			return this.count_
		}
		getKeys() {
			const t = new Array(this.count_);
			let e, i = 0;
			for (e = this.newest_; e; e = e.older) t[i++] = e.key_;
			return t
		}
		getValues() {
			const t = new Array(this.count_);
			let e, i = 0;
			for (e = this.newest_; e; e = e.older) t[i++] = e.value_;
			return t
		}
		peekLast() {
			return this.oldest_.value_
		}
		peekLastKey() {
			return this.oldest_.key_
		}
		peekFirstKey() {
			return this.newest_.key_
		}
		peek(t) {
			return this.entries_[t]?.value_
		}
		pop() {
			const t = this.oldest_;
			return delete this.entries_[t.key_], t.newer && (t.newer.older = null), this.oldest_ = t.newer, this.oldest_ || (this.newest_ = null), --this.count_, t.value_
		}
		replace(t, e) {
			this.get(t), this.entries_[t].value_ = e
		}
		set(t, e) {
			Se(!(t in this.entries_), "Tried to set a value for a key that is used already");
			const i = {
				key_: t,
				newer: null,
				older: this.newest_,
				value_: e
			};
			this.newest_ ? this.newest_.newer = i : this.oldest_ = i, this.newest_ = i, this.entries_[t] = i, ++this.count_
		}
		setSize(t) {
			this.highWaterMark = t
		}
	};
	var gu = class extends du {
		clear() {
			for (; this.getCount() > 0;) this.pop().release();
			super.clear()
		}
		expireCache(t) {
			for (; this.canExpireCache();) {
				if (this.peekLast().getKey() in t) break;
				this.pop().release()
			}
		}
		pruneExceptNewestZ() {
			if (0 === this.getCount()) return;
			const t = xs(this.peekFirstKey())[0];
			this.forEach((e => {
				e.tileCoord[0] !== t && (this.remove(ys(e.tileCoord)), e.release())
			}))
		}
	};
	const pu = [];
	var fu = class extends Nl {
		constructor(t, e, i, n) {
			super(t, e, {
				transition: 0
			}), this.context_ = {}, this.executorGroups = {}, this.declutterExecutorGroups = {}, this.loadingSourceTiles = 0, this.hitDetectionImageData = {}, this.replayState_ = {}, this.sourceTiles = [], this.errorTileKeys = {}, this.wantedResolution, this.getSourceTiles = n.bind(void 0, this), this.wrappedTileCoord = i
		}
		getContext(t) {
			const e = l(t);
			return e in this.context_ || (this.context_[e] = tt(1, 1, pu)), this.context_[e]
		}
		hasContext(t) {
			return l(t) in this.context_
		}
		getImage(t) {
			return this.hasContext(t) ? this.getContext(t).canvas : null
		}
		getReplayState(t) {
			const e = l(t);
			return e in this.replayState_ || (this.replayState_[e] = {
				dirty: !1,
				renderedRenderOrder: null,
				renderedResolution: NaN,
				renderedRevision: -1,
				renderedTileResolution: NaN,
				renderedTileRevision: -1,
				renderedTileZ: -1
			}), this.replayState_[e]
		}
		load() {
			this.getSourceTiles()
		}
		release() {
			for (const t in this.context_) {
				const e = this.context_[t];
				et(e), pu.push(e.canvas), delete this.context_[t]
			}
			super.release()
		}
	};
	var mu = class extends Nl {
		constructor(t, e, i, n, r, s) {
			super(t, e, s), this.extent = null, this.format_ = n, this.features_ = null, this.loader_, this.projection = null, this.resolution, this.tileLoadFunction_ = r, this.url_ = i, this.key = i
		}
		getFormat() {
			return this.format_
		}
		getFeatures() {
			return this.features_
		}
		load() {
			this.state == Ss.IDLE && (this.setState(Ss.LOADING), this.tileLoadFunction_(this, this.url_), this.loader_ && this.loader_(this.extent, this.resolution, this.projection))
		}
		onLoad(t, e) {
			this.setFeatures(t)
		}
		onError() {
			this.setState(Ss.ERROR)
		}
		setFeatures(t) {
			this.features_ = t, this.setState(Ss.LOADED)
		}
		setLoader(t) {
			this.loader_ = t
		}
	};

	function _u(t, e) {
		const i = /\{z\}/g,
			n = /\{x\}/g,
			r = /\{y\}/g,
			s = /\{-y\}/g;
		return function(o, a, l) {
			if (o) return t.replace(i, o[0].toString()).replace(n, o[1].toString()).replace(r, o[2].toString()).replace(s, (function() {
				const t = o[0],
					i = e.getFullTileRange(t);
				if (!i) throw new Error("The {-y} placeholder requires a tile grid with extent");
				return (i.getHeight() - o[2] - 1).toString()
			}))
		}
	}

	function yu(t, e) {
		const i = t.length,
			n = new Array(i);
		for (let r = 0; r < i; ++r) n[r] = _u(t[r], e);
		return xu(n)
	}

	function xu(t) {
		return 1 === t.length ? t[0] : function(e, i, n) {
			if (!e) return;
			const r = P(vs(e), t.length);
			return t[r](e, i, n)
		}
	}

	function vu(t) {
		const e = [];
		let i = /\{([a-z])-([a-z])\}/.exec(t);
		if (i) {
			const n = i[1].charCodeAt(0),
				r = i[2].charCodeAt(0);
			let s;
			for (s = n; s <= r; ++s) e.push(t.replace(i[0], String.fromCharCode(s)));
			return e
		}
		if (i = /\{(\d+)-(\d+)\}/.exec(t), i) {
			const n = parseInt(i[2], 10);
			for (let r = parseInt(i[1], 10); r <= n; r++) e.push(t.replace(i[0], r.toString()));
			return e
		}
		return e.push(t), e
	}
	var wu = class {
		constructor() {
			this.dataProjection = void 0, this.defaultFeatureProjection = void 0, this.featureClass = De, this.supportedMediaTypes = null
		}
		getReadOptions(t, e) {
			if (e) {
				let i = e.dataProjection ? yn(e.dataProjection) : this.readProjection(t);
				e.extent && i && "tile-pixels" === i.getUnits() && (i = yn(i), i.setWorldExtent(e.extent)), e = {
					dataProjection: i,
					featureProjection: e.featureProjection
				}
			}
			return this.adaptOptions(e)
		}
		adaptOptions(t) {
			return Object.assign({
				dataProjection: this.dataProjection,
				featureProjection: this.defaultFeatureProjection,
				featureClass: this.featureClass
			}, t)
		}
		getType() {
			return o()
		}
		readFeature(t, e) {
			return o()
		}
		readFeatures(t, e) {
			return o()
		}
		readGeometry(t, e) {
			return o()
		}
		readProjection(t) {
			return o()
		}
		writeFeature(t, e) {
			return o()
		}
		writeFeatures(t, e) {
			return o()
		}
		writeGeometry(t, e) {
			return o()
		}
	};

	function bu(t, e, i) {
		const n = i ? yn(i.featureProjection) : null,
			r = i ? yn(i.dataProjection) : null;
		let s = t;
		if (n && r && !Cn(n, r)) {
			e && (s = t.clone());
			const i = e ? n : r,
				o = e ? r : n;
			"tile-pixels" === i.getUnits() ? s.transform(i, o) : s.applyTransform(Pn(i, o))
		}
		if (e && i && void 0 !== i.decimals) {
			const e = Math.pow(10, i.decimals),
				n = function(t) {
					for (let i = 0, n = t.length; i < n; ++i) t[i] = Math.round(t[i] * e) / e;
					return t
				};
			s === t && (s = t.clone()), s.applyTransform(n)
		}
		return s
	}
	const Su = {
		Point: Ar,
		LineString: Mr,
		Polygon: Wr,
		MultiPoint: Or,
		MultiLineString: Lr,
		MultiPolygon: Hr
	};

	function Eu(t, e) {
		const i = t.geometry;
		if (!i) return [];
		if (Array.isArray(i)) return i.map((e => Eu({
			...t,
			geometry: e
		}))).flat();
		const n = "MultiPolygon" === i.type ? "Polygon" : i.type;
		if ("GeometryCollection" === n || "Circle" === n) throw new Error("Unsupported geometry type: " + n);
		const r = i.layout.length;
		return bu(new ts(n, "Polygon" === n ? function(t, e, i) {
			return Array.isArray(e[0]) ? (Br(t, 0, e, i) || Vr(t = t.slice(), 0, e, i), t) : (Ur(t, 0, e, i) || $r(t = t.slice(), 0, e, i), t)
		}(i.flatCoordinates, i.ends, r) : i.flatCoordinates, i.ends?.flat(), r, t.properties || {}, t.id).enableSimplifyTransformed(), !1, e)
	}

	function Cu(t, e) {
		if (!t) return null;
		if (Array.isArray(t)) {
			const i = t.map((t => Cu(t, e)));
			return new er(i)
		}
		return bu(new(0, Su[t.type])(t.flatCoordinates, t.layout, t.ends), !1, e)
	}

	function Tu(t) {
		if ("string" == typeof t) {
			const e = JSON.parse(t);
			return e || null
		}
		return null !== t ? t : null
	}
	var Pu = class extends wu {
		constructor() {
			super()
		}
		getType() {
			return "json"
		}
		readFeature(t, e) {
			return this.readFeatureFromObject(Tu(t), this.getReadOptions(t, e))
		}
		readFeatures(t, e) {
			return this.readFeaturesFromObject(Tu(t), this.getReadOptions(t, e))
		}
		readFeatureFromObject(t, e) {
			return o()
		}
		readFeaturesFromObject(t, e) {
			return o()
		}
		readGeometry(t, e) {
			return this.readGeometryFromObject(Tu(t), this.getReadOptions(t, e))
		}
		readGeometryFromObject(t, e) {
			return o()
		}
		readProjection(t) {
			return this.readProjectionFromObject(Tu(t))
		}
		readProjectionFromObject(t) {
			return o()
		}
		writeFeature(t, e) {
			return JSON.stringify(this.writeFeatureObject(t, e))
		}
		writeFeatureObject(t, e) {
			return o()
		}
		writeFeatures(t, e) {
			return JSON.stringify(this.writeFeaturesObject(t, e))
		}
		writeFeaturesObject(t, e) {
			return o()
		}
		writeGeometry(t, e) {
			return JSON.stringify(this.writeGeometryObject(t, e))
		}
		writeGeometryObject(t, e) {
			return o()
		}
	};

	function Ru(t, e) {
		if (!t) return null;
		let i;
		switch (t.type) {
			case "Point":
				i = function(t) {
					const e = t.coordinates;
					return {
						type: "Point",
						flatCoordinates: e,
						layout: Xn(e.length)
					}
				}(t);
				break;
			case "LineString":
				i = function(t) {
					const e = t.coordinates,
						i = e.flat();
					return {
						type: "LineString",
						flatCoordinates: i,
						ends: [i.length],
						layout: Xn(e[0].length)
					}
				}(t);
				break;
			case "Polygon":
				i = function(t) {
					const e = t.coordinates,
						i = [],
						n = e[0][0].length,
						r = Yn(i, 0, e, n);
					return {
						type: "Polygon",
						flatCoordinates: i,
						ends: r,
						layout: Xn(n)
					}
				}(t);
				break;
			case "MultiPoint":
				i = function(t) {
					const e = t.coordinates;
					return {
						type: "MultiPoint",
						flatCoordinates: e.flat(),
						layout: Xn(e[0].length)
					}
				}(t);
				break;
			case "MultiLineString":
				i = function(t) {
					const e = t.coordinates,
						i = e[0][0].length,
						n = [],
						r = Yn(n, 0, e, i);
					return {
						type: "MultiLineString",
						flatCoordinates: n,
						ends: r,
						layout: Xn(i)
					}
				}(t);
				break;
			case "MultiPolygon":
				i = function(t) {
					const e = t.coordinates,
						i = [],
						n = e[0][0][0].length,
						r = Kn(i, 0, e, n);
					return {
						type: "MultiPolygon",
						flatCoordinates: i,
						ends: r,
						layout: Xn(n)
					}
				}(t);
				break;
			case "GeometryCollection":
				i = function(t, e) {
					const i = t.geometries.map((function(t) {
						return Ru(t)
					}));
					return i
				}(t);
				break;
			default:
				throw new Error("Unsupported GeoJSON type: " + t.type)
		}
		return i
	}

	function Fu(t, e) {
		const i = (t = bu(t, !0, e)).getType();
		let n;
		switch (i) {
			case "Point":
				n = function(t, e) {
					return {
						type: "Point",
						coordinates: t.getCoordinates()
					}
				}(t);
				break;
			case "LineString":
				n = function(t, e) {
					return {
						type: "LineString",
						coordinates: t.getCoordinates()
					}
				}(t);
				break;
			case "Polygon":
				n = function(t, e) {
					let i;
					e && (i = e.rightHanded);
					return {
						type: "Polygon",
						coordinates: t.getCoordinates(i)
					}
				}(t, e);
				break;
			case "MultiPoint":
				n = function(t, e) {
					return {
						type: "MultiPoint",
						coordinates: t.getCoordinates()
					}
				}(t);
				break;
			case "MultiLineString":
				n = function(t, e) {
					return {
						type: "MultiLineString",
						coordinates: t.getCoordinates()
					}
				}(t);
				break;
			case "MultiPolygon":
				n = function(t, e) {
					let i;
					e && (i = e.rightHanded);
					return {
						type: "MultiPolygon",
						coordinates: t.getCoordinates(i)
					}
				}(t, e);
				break;
			case "GeometryCollection":
				n = function(t, e) {
					e = Object.assign({}, e), delete e.featureProjection;
					const i = t.getGeometriesArray().map((function(t) {
						return Fu(t, e)
					}));
					return {
						type: "GeometryCollection",
						geometries: i
					}
				}(t, e);
				break;
			case "Circle":
				n = {
					type: "GeometryCollection",
					geometries: []
				};
				break;
			default:
				throw new Error("Unsupported geometry type: " + i)
		}
		return n
	}
	var Mu = class extends Pu {
		constructor(t) {
			t = t || {}, super(), this.dataProjection = yn(t.dataProjection ? t.dataProjection : "EPSG:4326"), t.featureProjection && (this.defaultFeatureProjection = yn(t.featureProjection)), t.featureClass && (this.featureClass = t.featureClass), this.geometryName_ = t.geometryName, this.extractGeometryName_ = t.extractGeometryName, this.supportedMediaTypes = ["application/geo+json", "application/vnd.geo+json"]
		}
		readFeatureFromObject(t, e) {
			let i = null;
			i = "Feature" === t.type ? t : {
				type: "Feature",
				geometry: t,
				properties: null
			};
			const n = Ru(i.geometry);
			if (this.featureClass === ts) return Eu({
				geometry: n,
				id: i.id,
				properties: i.properties
			}, e);
			const r = new De;
			return this.geometryName_ ? r.setGeometryName(this.geometryName_) : this.extractGeometryName_ && "geometry_name" in i !== void 0 && r.setGeometryName(i.geometry_name), r.setGeometry(Cu(n, e)), "id" in i && r.setId(i.id), i.properties && r.setProperties(i.properties, !0), r
		}
		readFeaturesFromObject(t, e) {
			let i = null;
			if ("FeatureCollection" === t.type) {
				i = [];
				const n = t.features;
				for (let t = 0, r = n.length; t < r; ++t) {
					const r = this.readFeatureFromObject(n[t], e);
					r && i.push(r)
				}
			} else i = [this.readFeatureFromObject(t, e)];
			return i.flat()
		}
		readGeometryFromObject(t, e) {
			return function(t, e) {
				const i = Ru(t);
				return Cu(i, e)
			}(t, e)
		}
		readProjectionFromObject(t) {
			const e = t.crs;
			let i;
			if (e)
				if ("name" == e.type) i = yn(e.properties.name);
				else {
					if ("EPSG" !== e.type) throw new Error("Unknown SRS type");
					i = yn("EPSG:" + e.properties.code)
				}
			else i = this.dataProjection;
			return i
		}
		writeFeatureObject(t, e) {
			e = this.adaptOptions(e);
			const i = {
					type: "Feature",
					geometry: null,
					properties: null
				},
				n = t.getId();
			if (void 0 !== n && (i.id = n), !t.hasProperties()) return i;
			const r = t.getProperties(),
				s = t.getGeometry();
			return s && (i.geometry = Fu(s, e), delete r[t.getGeometryName()]), wt(r) || (i.properties = r), i
		}
		writeFeaturesObject(t, e) {
			e = this.adaptOptions(e);
			const i = [];
			for (let n = 0, r = t.length; n < r; ++n) i.push(this.writeFeatureObject(t[n], e));
			return {
				type: "FeatureCollection",
				features: i
			}
		}
		writeGeometryObject(t, e) {
			return Fu(t, this.adaptOptions(e))
		}
	};
	var Iu = class extends uo {
		constructor(t) {
			super(t = t || {})
		}
	};
	var Lu = class extends Za {
		constructor(t) {
			super(t), this.image_ = null
		}
		getImage() {
			return this.image_ ? this.image_.getImage() : null
		}
		prepareFrame(t) {
			const e = t.layerStatesArray[t.layerIndex],
				i = t.pixelRatio,
				n = t.viewState,
				r = n.resolution,
				o = this.getLayer().getSource(),
				a = t.viewHints;
			let l = t.extent;
			if (void 0 !== e.extent && (l = wi(l, On(e.extent, n.projection))), !a[Xs] && !a[Ws] && !Ti(l))
				if (o) {
					const t = n.projection,
						e = o.getImage(l, r, i, t);
					e && (this.loadImage(e) ? this.image_ = e : e.getState() === s && (this.image_ = null))
				} else this.image_ = null;
			return !!this.image_
		}
		getData(t) {
			const e = this.frameState;
			if (!e) return null;
			const i = this.getLayer(),
				n = je(e.pixelToCoordinateTransform, t.slice()),
				r = i.getExtent();
			if (r && !Je(r, n)) return null;
			const s = this.image_.getExtent(),
				o = this.image_.getImage(),
				a = Ei(s),
				l = Math.floor(o.width * ((n[0] - s[0]) / a));
			if (l < 0 || l >= o.width) return null;
			const h = vi(s),
				u = Math.floor(o.height * ((s[3] - n[1]) / h));
			return u < 0 || u >= o.height ? null : this.getImageData(o, l, u)
		}
		renderFrame(t, e) {
			const i = this.image_,
				n = i.getExtent(),
				r = i.getResolution(),
				[s, o] = Array.isArray(r) ? r : [r, r],
				a = i.getPixelRatio(),
				l = t.layerStatesArray[t.layerIndex],
				h = t.pixelRatio,
				u = t.viewState,
				c = u.center,
				d = u.resolution,
				g = h * s / (d * a),
				p = h * o / (d * a),
				f = t.extent,
				m = u.resolution,
				_ = u.rotation,
				y = Math.round(Ei(f) / m * h),
				x = Math.round(vi(f) / m * h);
			$e(this.pixelTransform, t.size[0] / 2, t.size[1] / 2, 1 / h, 1 / h, _, -y / 2, -x / 2), Ve(this.inversePixelTransform, this.pixelTransform);
			const v = We(this.pixelTransform);
			this.useContainer(e, v, this.getBackground(t));
			const w = this.context,
				b = w.canvas;
			b.width != y || b.height != x ? (b.width = y, b.height = x) : this.containerReused || w.clearRect(0, 0, y, x);
			let S = !1,
				E = !0;
			if (l.extent) {
				const e = On(l.extent, u.projection);
				E = Ci(e, t.extent), S = E && !Qe(e, t.extent), S && this.clipUnrotated(w, t, e)
			}
			const C = i.getImage(),
				T = $e(this.tempTransform, y / 2, x / 2, g, p, 0, a * (n[0] - c[0]) / s, a * (c[1] - n[3]) / o);
			this.renderedResolution = o * h / a;
			const P = C.width * T[0],
				R = C.height * T[3];
			if (this.getLayer().getSource().getInterpolate() || (w.imageSmoothingEnabled = !1), this.preRender(w, t), E && P >= .5 && R >= .5) {
				const t = T[4],
					e = T[5],
					i = l.opacity;
				let n;
				1 !== i && (n = w.globalAlpha, w.globalAlpha = i), w.drawImage(C, 0, 0, +C.width, +C.height, t, e, P, R), 1 !== i && (w.globalAlpha = n)
			}
			return this.postRender(w, t), S && w.restore(), w.imageSmoothingEnabled = !0, v !== b.style.transform && (b.style.transform = v), this.container
		}
	};
	var ku = class extends Iu {
			constructor(t) {
				super(t)
			}
			createRenderer() {
				return new Lu(this)
			}
			getData(t) {
				return super.getData(t)
			}
		},
		Au = {
			/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
			read: function(t, e, i, n, r) {
				var s, o, a = 8 * r - n - 1,
					l = (1 << a) - 1,
					h = l >> 1,
					u = -7,
					c = i ? r - 1 : 0,
					d = i ? -1 : 1,
					g = t[e + c];
				for (c += d, s = g & (1 << -u) - 1, g >>= -u, u += a; u > 0; s = 256 * s + t[e + c], c += d, u -= 8);
				for (o = s & (1 << -u) - 1, s >>= -u, u += n; u > 0; o = 256 * o + t[e + c], c += d, u -= 8);
				if (0 === s) s = 1 - h;
				else {
					if (s === l) return o ? NaN : 1 / 0 * (g ? -1 : 1);
					o += Math.pow(2, n), s -= h
				}
				return (g ? -1 : 1) * o * Math.pow(2, s - n)
			},
			write: function(t, e, i, n, r, s) {
				var o, a, l, h = 8 * s - r - 1,
					u = (1 << h) - 1,
					c = u >> 1,
					d = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
					g = n ? 0 : s - 1,
					p = n ? 1 : -1,
					f = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
				for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, o = u) : (o = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), (e += o + c >= 1 ? d / l : d * Math.pow(2, 1 - c)) * l >= 2 && (o++, l /= 2), o + c >= u ? (a = 0, o = u) : o + c >= 1 ? (a = (e * l - 1) * Math.pow(2, r), o += c) : (a = e * Math.pow(2, c - 1) * Math.pow(2, r), o = 0)); r >= 8; t[i + g] = 255 & a, g += p, a /= 256, r -= 8);
				for (o = o << r | a, h += r; h > 0; t[i + g] = 255 & o, g += p, o /= 256, h -= 8);
				t[i + g - p] |= 128 * f
			}
		},
		Du = zu,
		Ou = Au;

	function zu(t) {
		this.buf = ArrayBuffer.isView && ArrayBuffer.isView(t) ? t : new Uint8Array(t || 0), this.pos = 0, this.type = 0, this.length = this.buf.length
	}
	zu.Varint = 0, zu.Fixed64 = 1, zu.Bytes = 2, zu.Fixed32 = 5;
	var Gu = 4294967296,
		Nu = 1 / Gu,
		ju = "undefined" == typeof TextDecoder ? null : new TextDecoder("utf8");

	function Uu(t) {
		return t.type === zu.Bytes ? t.readVarint() + t.pos : t.pos + 1
	}

	function Bu(t, e, i) {
		return i ? 4294967296 * e + (t >>> 0) : 4294967296 * (e >>> 0) + (t >>> 0)
	}

	function $u(t, e, i) {
		var n = e <= 16383 ? 1 : e <= 2097151 ? 2 : e <= 268435455 ? 3 : Math.floor(Math.log(e) / (7 * Math.LN2));
		i.realloc(n);
		for (var r = i.pos - 1; r >= t; r--) i.buf[r + n] = i.buf[r]
	}

	function Vu(t, e) {
		for (var i = 0; i < t.length; i++) e.writeVarint(t[i])
	}

	function Xu(t, e) {
		for (var i = 0; i < t.length; i++) e.writeSVarint(t[i])
	}

	function Wu(t, e) {
		for (var i = 0; i < t.length; i++) e.writeFloat(t[i])
	}

	function qu(t, e) {
		for (var i = 0; i < t.length; i++) e.writeDouble(t[i])
	}

	function Zu(t, e) {
		for (var i = 0; i < t.length; i++) e.writeBoolean(t[i])
	}

	function Yu(t, e) {
		for (var i = 0; i < t.length; i++) e.writeFixed32(t[i])
	}

	function Ku(t, e) {
		for (var i = 0; i < t.length; i++) e.writeSFixed32(t[i])
	}

	function Hu(t, e) {
		for (var i = 0; i < t.length; i++) e.writeFixed64(t[i])
	}

	function Ju(t, e) {
		for (var i = 0; i < t.length; i++) e.writeSFixed64(t[i])
	}

	function Qu(t, e) {
		return (t[e] | t[e + 1] << 8 | t[e + 2] << 16) + 16777216 * t[e + 3]
	}

	function tc(t, e, i) {
		t[i] = e, t[i + 1] = e >>> 8, t[i + 2] = e >>> 16, t[i + 3] = e >>> 24
	}

	function ec(t, e) {
		return (t[e] | t[e + 1] << 8 | t[e + 2] << 16) + (t[e + 3] << 24)
	}
	zu.prototype = {
		destroy: function() {
			this.buf = null
		},
		readFields: function(t, e, i) {
			for (i = i || this.length; this.pos < i;) {
				var n = this.readVarint(),
					r = n >> 3,
					s = this.pos;
				this.type = 7 & n, t(r, e, this), this.pos === s && this.skip(n)
			}
			return e
		},
		readMessage: function(t, e) {
			return this.readFields(t, e, this.readVarint() + this.pos)
		},
		readFixed32: function() {
			var t = Qu(this.buf, this.pos);
			return this.pos += 4, t
		},
		readSFixed32: function() {
			var t = ec(this.buf, this.pos);
			return this.pos += 4, t
		},
		readFixed64: function() {
			var t = Qu(this.buf, this.pos) + Qu(this.buf, this.pos + 4) * Gu;
			return this.pos += 8, t
		},
		readSFixed64: function() {
			var t = Qu(this.buf, this.pos) + ec(this.buf, this.pos + 4) * Gu;
			return this.pos += 8, t
		},
		readFloat: function() {
			var t = Ou.read(this.buf, this.pos, !0, 23, 4);
			return this.pos += 4, t
		},
		readDouble: function() {
			var t = Ou.read(this.buf, this.pos, !0, 52, 8);
			return this.pos += 8, t
		},
		readVarint: function(t) {
			var e, i, n = this.buf;
			return e = 127 & (i = n[this.pos++]), i < 128 ? e : (e |= (127 & (i = n[this.pos++])) << 7, i < 128 ? e : (e |= (127 & (i = n[this.pos++])) << 14, i < 128 ? e : (e |= (127 & (i = n[this.pos++])) << 21, i < 128 ? e : function(t, e, i) {
				var n, r, s = i.buf;
				if (r = s[i.pos++], n = (112 & r) >> 4, r < 128) return Bu(t, n, e);
				if (r = s[i.pos++], n |= (127 & r) << 3, r < 128) return Bu(t, n, e);
				if (r = s[i.pos++], n |= (127 & r) << 10, r < 128) return Bu(t, n, e);
				if (r = s[i.pos++], n |= (127 & r) << 17, r < 128) return Bu(t, n, e);
				if (r = s[i.pos++], n |= (127 & r) << 24, r < 128) return Bu(t, n, e);
				if (r = s[i.pos++], n |= (1 & r) << 31, r < 128) return Bu(t, n, e);
				throw new Error("Expected varint not more than 10 bytes")
			}(e |= (15 & (i = n[this.pos])) << 28, t, this))))
		},
		readVarint64: function() {
			return this.readVarint(!0)
		},
		readSVarint: function() {
			var t = this.readVarint();
			return t % 2 == 1 ? (t + 1) / -2 : t / 2
		},
		readBoolean: function() {
			return Boolean(this.readVarint())
		},
		readString: function() {
			var t = this.readVarint() + this.pos,
				e = this.pos;
			return this.pos = t, t - e >= 12 && ju ? function(t, e, i) {
				return ju.decode(t.subarray(e, i))
			}(this.buf, e, t) : function(t, e, i) {
				var n = "",
					r = e;
				for (; r < i;) {
					var s, o, a, l = t[r],
						h = null,
						u = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
					if (r + u > i) break;
					1 === u ? l < 128 && (h = l) : 2 === u ? 128 == (192 & (s = t[r + 1])) && (h = (31 & l) << 6 | 63 & s) <= 127 && (h = null) : 3 === u ? (s = t[r + 1], o = t[r + 2], 128 == (192 & s) && 128 == (192 & o) && ((h = (15 & l) << 12 | (63 & s) << 6 | 63 & o) <= 2047 || h >= 55296 && h <= 57343) && (h = null)) : 4 === u && (s = t[r + 1], o = t[r + 2], a = t[r + 3], 128 == (192 & s) && 128 == (192 & o) && 128 == (192 & a) && ((h = (15 & l) << 18 | (63 & s) << 12 | (63 & o) << 6 | 63 & a) <= 65535 || h >= 1114112) && (h = null)), null === h ? (h = 65533, u = 1) : h > 65535 && (h -= 65536, n += String.fromCharCode(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), n += String.fromCharCode(h), r += u
				}
				return n
			}(this.buf, e, t)
		},
		readBytes: function() {
			var t = this.readVarint() + this.pos,
				e = this.buf.subarray(this.pos, t);
			return this.pos = t, e
		},
		readPackedVarint: function(t, e) {
			if (this.type !== zu.Bytes) return t.push(this.readVarint(e));
			var i = Uu(this);
			for (t = t || []; this.pos < i;) t.push(this.readVarint(e));
			return t
		},
		readPackedSVarint: function(t) {
			if (this.type !== zu.Bytes) return t.push(this.readSVarint());
			var e = Uu(this);
			for (t = t || []; this.pos < e;) t.push(this.readSVarint());
			return t
		},
		readPackedBoolean: function(t) {
			if (this.type !== zu.Bytes) return t.push(this.readBoolean());
			var e = Uu(this);
			for (t = t || []; this.pos < e;) t.push(this.readBoolean());
			return t
		},
		readPackedFloat: function(t) {
			if (this.type !== zu.Bytes) return t.push(this.readFloat());
			var e = Uu(this);
			for (t = t || []; this.pos < e;) t.push(this.readFloat());
			return t
		},
		readPackedDouble: function(t) {
			if (this.type !== zu.Bytes) return t.push(this.readDouble());
			var e = Uu(this);
			for (t = t || []; this.pos < e;) t.push(this.readDouble());
			return t
		},
		readPackedFixed32: function(t) {
			if (this.type !== zu.Bytes) return t.push(this.readFixed32());
			var e = Uu(this);
			for (t = t || []; this.pos < e;) t.push(this.readFixed32());
			return t
		},
		readPackedSFixed32: function(t) {
			if (this.type !== zu.Bytes) return t.push(this.readSFixed32());
			var e = Uu(this);
			for (t = t || []; this.pos < e;) t.push(this.readSFixed32());
			return t
		},
		readPackedFixed64: function(t) {
			if (this.type !== zu.Bytes) return t.push(this.readFixed64());
			var e = Uu(this);
			for (t = t || []; this.pos < e;) t.push(this.readFixed64());
			return t
		},
		readPackedSFixed64: function(t) {
			if (this.type !== zu.Bytes) return t.push(this.readSFixed64());
			var e = Uu(this);
			for (t = t || []; this.pos < e;) t.push(this.readSFixed64());
			return t
		},
		skip: function(t) {
			var e = 7 & t;
			if (e === zu.Varint)
				for (; this.buf[this.pos++] > 127;);
			else if (e === zu.Bytes) this.pos = this.readVarint() + this.pos;
			else if (e === zu.Fixed32) this.pos += 4;
			else {
				if (e !== zu.Fixed64) throw new Error("Unimplemented type: " + e);
				this.pos += 8
			}
		},
		writeTag: function(t, e) {
			this.writeVarint(t << 3 | e)
		},
		realloc: function(t) {
			for (var e = this.length || 16; e < this.pos + t;) e *= 2;
			if (e !== this.length) {
				var i = new Uint8Array(e);
				i.set(this.buf), this.buf = i, this.length = e
			}
		},
		finish: function() {
			return this.length = this.pos, this.pos = 0, this.buf.subarray(0, this.length)
		},
		writeFixed32: function(t) {
			this.realloc(4), tc(this.buf, t, this.pos), this.pos += 4
		},
		writeSFixed32: function(t) {
			this.realloc(4), tc(this.buf, t, this.pos), this.pos += 4
		},
		writeFixed64: function(t) {
			this.realloc(8), tc(this.buf, -1 & t, this.pos), tc(this.buf, Math.floor(t * Nu), this.pos + 4), this.pos += 8
		},
		writeSFixed64: function(t) {
			this.realloc(8), tc(this.buf, -1 & t, this.pos), tc(this.buf, Math.floor(t * Nu), this.pos + 4), this.pos += 8
		},
		writeVarint: function(t) {
			(t = +t || 0) > 268435455 || t < 0 ? function(t, e) {
				var i, n;
				t >= 0 ? (i = t % 4294967296 | 0, n = t / 4294967296 | 0) : (n = ~(-t / 4294967296), 4294967295 ^ (i = ~(-t % 4294967296)) ? i = i + 1 | 0 : (i = 0, n = n + 1 | 0));
				if (t >= 0x10000000000000000 || t < -0x10000000000000000) throw new Error("Given varint doesn't fit into 10 bytes");
				e.realloc(10),
					function(t, e, i) {
						i.buf[i.pos++] = 127 & t | 128, t >>>= 7, i.buf[i.pos++] = 127 & t | 128, t >>>= 7, i.buf[i.pos++] = 127 & t | 128, t >>>= 7, i.buf[i.pos++] = 127 & t | 128, t >>>= 7, i.buf[i.pos] = 127 & t
					}(i, 0, e),
					function(t, e) {
						var i = (7 & t) << 4;
						if (e.buf[e.pos++] |= i | ((t >>>= 3) ? 128 : 0), !t) return;
						if (e.buf[e.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0), !t) return;
						if (e.buf[e.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0), !t) return;
						if (e.buf[e.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0), !t) return;
						if (e.buf[e.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0), !t) return;
						e.buf[e.pos++] = 127 & t
					}(n, e)
			}(t, this) : (this.realloc(4), this.buf[this.pos++] = 127 & t | (t > 127 ? 128 : 0), t <= 127 || (this.buf[this.pos++] = 127 & (t >>>= 7) | (t > 127 ? 128 : 0), t <= 127 || (this.buf[this.pos++] = 127 & (t >>>= 7) | (t > 127 ? 128 : 0), t <= 127 || (this.buf[this.pos++] = t >>> 7 & 127))))
		},
		writeSVarint: function(t) {
			this.writeVarint(t < 0 ? 2 * -t - 1 : 2 * t)
		},
		writeBoolean: function(t) {
			this.writeVarint(Boolean(t))
		},
		writeString: function(t) {
			t = String(t), this.realloc(4 * t.length), this.pos++;
			var e = this.pos;
			this.pos = function(t, e, i) {
				for (var n, r, s = 0; s < e.length; s++) {
					if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
						if (!r) {
							n > 56319 || s + 1 === e.length ? (t[i++] = 239, t[i++] = 191, t[i++] = 189) : r = n;
							continue
						}
						if (n < 56320) {
							t[i++] = 239, t[i++] = 191, t[i++] = 189, r = n;
							continue
						}
						n = r - 55296 << 10 | n - 56320 | 65536, r = null
					} else r && (t[i++] = 239, t[i++] = 191, t[i++] = 189, r = null);
					n < 128 ? t[i++] = n : (n < 2048 ? t[i++] = n >> 6 | 192 : (n < 65536 ? t[i++] = n >> 12 | 224 : (t[i++] = n >> 18 | 240, t[i++] = n >> 12 & 63 | 128), t[i++] = n >> 6 & 63 | 128), t[i++] = 63 & n | 128)
				}
				return i
			}(this.buf, t, this.pos);
			var i = this.pos - e;
			i >= 128 && $u(e, i, this), this.pos = e - 1, this.writeVarint(i), this.pos += i
		},
		writeFloat: function(t) {
			this.realloc(4), Ou.write(this.buf, t, this.pos, !0, 23, 4), this.pos += 4
		},
		writeDouble: function(t) {
			this.realloc(8), Ou.write(this.buf, t, this.pos, !0, 52, 8), this.pos += 8
		},
		writeBytes: function(t) {
			var e = t.length;
			this.writeVarint(e), this.realloc(e);
			for (var i = 0; i < e; i++) this.buf[this.pos++] = t[i]
		},
		writeRawMessage: function(t, e) {
			this.pos++;
			var i = this.pos;
			t(e, this);
			var n = this.pos - i;
			n >= 128 && $u(i, n, this), this.pos = i - 1, this.writeVarint(n), this.pos += n
		},
		writeMessage: function(t, e, i) {
			this.writeTag(t, zu.Bytes), this.writeRawMessage(e, i)
		},
		writePackedVarint: function(t, e) {
			e.length && this.writeMessage(t, Vu, e)
		},
		writePackedSVarint: function(t, e) {
			e.length && this.writeMessage(t, Xu, e)
		},
		writePackedBoolean: function(t, e) {
			e.length && this.writeMessage(t, Zu, e)
		},
		writePackedFloat: function(t, e) {
			e.length && this.writeMessage(t, Wu, e)
		},
		writePackedDouble: function(t, e) {
			e.length && this.writeMessage(t, qu, e)
		},
		writePackedFixed32: function(t, e) {
			e.length && this.writeMessage(t, Yu, e)
		},
		writePackedSFixed32: function(t, e) {
			e.length && this.writeMessage(t, Ku, e)
		},
		writePackedFixed64: function(t, e) {
			e.length && this.writeMessage(t, Hu, e)
		},
		writePackedSFixed64: function(t, e) {
			e.length && this.writeMessage(t, Ju, e)
		},
		writeBytesField: function(t, e) {
			this.writeTag(t, zu.Bytes), this.writeBytes(e)
		},
		writeFixed32Field: function(t, e) {
			this.writeTag(t, zu.Fixed32), this.writeFixed32(e)
		},
		writeSFixed32Field: function(t, e) {
			this.writeTag(t, zu.Fixed32), this.writeSFixed32(e)
		},
		writeFixed64Field: function(t, e) {
			this.writeTag(t, zu.Fixed64), this.writeFixed64(e)
		},
		writeSFixed64Field: function(t, e) {
			this.writeTag(t, zu.Fixed64), this.writeSFixed64(e)
		},
		writeVarintField: function(t, e) {
			this.writeTag(t, zu.Varint), this.writeVarint(e)
		},
		writeSVarintField: function(t, e) {
			this.writeTag(t, zu.Varint), this.writeSVarint(e)
		},
		writeStringField: function(t, e) {
			this.writeTag(t, zu.Bytes), this.writeString(e)
		},
		writeFloatField: function(t, e) {
			this.writeTag(t, zu.Fixed32), this.writeFloat(e)
		},
		writeDoubleField: function(t, e) {
			this.writeTag(t, zu.Fixed64), this.writeDouble(e)
		},
		writeBooleanField: function(t, e) {
			this.writeVarintField(t, Boolean(e))
		}
	};

	function ic(t, e, i) {
		if (3 === t) {
			const t = {
					keys: [],
					values: [],
					features: []
				},
				n = i.readVarint() + i.pos;
			i.readFields(nc, t, n), t.length = t.features.length, t.length && (e[t.name] = t)
		}
	}

	function nc(t, e, i) {
		if (15 === t) e.version = i.readVarint();
		else if (1 === t) e.name = i.readString();
		else if (5 === t) e.extent = i.readVarint();
		else if (2 === t) e.features.push(i.pos);
		else if (3 === t) e.keys.push(i.readString());
		else if (4 === t) {
			let n = null;
			const r = i.readVarint() + i.pos;
			for (; i.pos < r;) n = 1 === (t = i.readVarint() >> 3) ? i.readString() : 2 === t ? i.readFloat() : 3 === t ? i.readDouble() : 4 === t ? i.readVarint64() : 5 === t ? i.readVarint() : 6 === t ? i.readSVarint() : 7 === t ? i.readBoolean() : null;
			e.values.push(n)
		}
	}

	function rc(t, e, i) {
		if (1 == t) e.id = i.readVarint();
		else if (2 == t) {
			const t = i.readVarint() + i.pos;
			for (; i.pos < t;) {
				const t = e.layer.keys[i.readVarint()],
					n = e.layer.values[i.readVarint()];
				e.properties[t] = n
			}
		} else 3 == t ? e.type = i.readVarint() : 4 == t && (e.geometry = i.pos)
	}

	function sc(t, e, i) {
		t.pos = e.features[i];
		const n = t.readVarint() + t.pos,
			r = {
				layer: e,
				type: 0,
				properties: {}
			};
		return t.readFields(rc, r, n), r
	}
	var oc = class extends wu {
		constructor(t) {
			super(), t = t || {}, this.dataProjection = new Mi({
				code: "",
				units: "tile-pixels"
			}), this.featureClass_ = t.featureClass ? t.featureClass : ts, this.geometryName_ = t.geometryName, this.layerName_ = t.layerName ? t.layerName : "layer", this.layers_ = t.layers ? t.layers : null, this.idProperty_ = t.idProperty, this.supportedMediaTypes = ["application/vnd.mapbox-vector-tile", "application/x-protobuf"]
		}
		readRawGeometry_(t, e, i, n) {
			t.pos = e.geometry;
			const r = t.readVarint() + t.pos;
			let s = 1,
				o = 0,
				a = 0,
				l = 0,
				h = 0,
				u = 0;
			for (; t.pos < r;) {
				if (!o) {
					const e = t.readVarint();
					s = 7 & e, o = e >> 3
				}
				if (o--, 1 === s || 2 === s) a += t.readSVarint(), l += t.readSVarint(), 1 === s && h > u && (n.push(h), u = h), i.push(a, l), h += 2;
				else {
					if (7 !== s) throw new Error("Invalid command found in the PBF");
					h > u && (i.push(i[u], i[u + 1]), h += 2)
				}
			}
			h > u && (n.push(h), u = h)
		}
		createFeature_(t, e, i) {
			const n = e.type;
			if (0 === n) return null;
			let r;
			const s = e.properties;
			let o;
			this.idProperty_ ? (o = s[this.idProperty_], delete s[this.idProperty_]) : o = e.id, s[this.layerName_] = e.layer.name;
			const a = [],
				l = [];
			this.readRawGeometry_(t, e, a, l);
			const h = function(t, e) {
				let i;
				1 === t ? i = 1 === e ? "Point" : "MultiPoint" : 2 === t ? i = 1 === e ? "LineString" : "MultiLineString" : 3 === t && (i = "Polygon");
				return i
			}(n, l.length);
			if (this.featureClass_ === ts) r = new this.featureClass_(h, a, l, 2, s, o), r.transform(i.dataProjection);
			else {
				let t;
				if ("Polygon" == h) {
					const e = Xr(a, l);
					t = e.length > 1 ? new Hr(a, "XY", e) : new Wr(a, "XY", l)
				} else t = "Point" === h ? new Ar(a, "XY") : "LineString" === h ? new Mr(a, "XY") : "MultiPoint" === h ? new Or(a, "XY") : "MultiLineString" === h ? new Lr(a, "XY", l) : null;
				r = new(0, this.featureClass_), this.geometryName_ && r.setGeometryName(this.geometryName_);
				const e = bu(t, !1, i);
				r.setGeometry(e), void 0 !== o && r.setId(o), r.setProperties(s, !0)
			}
			return r
		}
		getType() {
			return "arraybuffer"
		}
		readFeatures(t, e) {
			const i = this.layers_,
				n = yn((e = this.adaptOptions(e)).dataProjection);
			n.setWorldExtent(e.extent), e.dataProjection = n;
			const r = new Du(t),
				s = r.readFields(ic, {}),
				o = [];
			for (const t in s) {
				if (i && !i.includes(t)) continue;
				const a = s[t],
					l = a ? [0, 0, a.extent, a.extent] : null;
				n.setExtent(l);
				for (let t = 0, i = a.length; t < i; ++t) {
					const i = sc(r, a, t),
						n = this.createFeature_(r, i, e);
					null !== n && o.push(n)
				}
			}
			return o
		}
		readProjection(t) {
			return this.dataProjection
		}
		setLayers(t) {
			this.layers_ = t
		}
	};
	var ac = class {
		constructor(t, e, i, n, r, s) {
			this.sourceProj_ = t, this.targetProj_ = e;
			let o = {};
			const a = Pn(this.targetProj_, this.sourceProj_);
			this.transformInv_ = function(t) {
				const e = t[0] + "/" + t[1];
				return o[e] || (o[e] = a(t)), o[e]
			}, this.maxSourceExtent_ = n, this.errorThresholdSquared_ = r * r, this.triangles_ = [], this.wrapsXInSource_ = !1, this.canWrapXInSource_ = this.sourceProj_.canWrapX() && !!n && !!this.sourceProj_.getExtent() && Ei(n) >= Ei(this.sourceProj_.getExtent()), this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? Ei(this.sourceProj_.getExtent()) : null, this.targetWorldWidth_ = this.targetProj_.getExtent() ? Ei(this.targetProj_.getExtent()) : null;
			const l = bi(i),
				h = Si(i),
				u = fi(i),
				c = pi(i),
				d = this.transformInv_(l),
				g = this.transformInv_(h),
				p = this.transformInv_(u),
				f = this.transformInv_(c),
				m = 10 + (s ? Math.max(0, Math.ceil(Math.log2(gi(i) / (s * s * 256 * 256)))) : 0);
			if (this.addQuad_(l, h, u, c, d, g, p, f, m), this.wrapsXInSource_) {
				let t = 1 / 0;
				this.triangles_.forEach((function(e, i, n) {
					t = Math.min(t, e.source[0][0], e.source[1][0], e.source[2][0])
				})), this.triangles_.forEach((e => {
					if (Math.max(e.source[0][0], e.source[1][0], e.source[2][0]) - t > this.sourceWorldWidth_ / 2) {
						const i = [
							[e.source[0][0], e.source[0][1]],
							[e.source[1][0], e.source[1][1]],
							[e.source[2][0], e.source[2][1]]
						];
						i[0][0] - t > this.sourceWorldWidth_ / 2 && (i[0][0] -= this.sourceWorldWidth_), i[1][0] - t > this.sourceWorldWidth_ / 2 && (i[1][0] -= this.sourceWorldWidth_), i[2][0] - t > this.sourceWorldWidth_ / 2 && (i[2][0] -= this.sourceWorldWidth_);
						const n = Math.min(i[0][0], i[1][0], i[2][0]);
						Math.max(i[0][0], i[1][0], i[2][0]) - n < this.sourceWorldWidth_ / 2 && (e.source = i)
					}
				}))
			}
			o = {}
		}
		addTriangle_(t, e, i, n, r, s) {
			this.triangles_.push({
				source: [n, r, s],
				target: [t, e, i]
			})
		}
		addQuad_(t, e, i, n, r, s, o, a, l) {
			const h = Ze([r, s, o, a]),
				u = this.sourceWorldWidth_ ? Ei(h) / this.sourceWorldWidth_ : null,
				c = this.sourceWorldWidth_,
				d = this.sourceProj_.canWrapX() && u > .5 && u < 1;
			let g = !1;
			if (l > 0) {
				if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
					g = Ei(Ze([t, e, i, n])) / this.targetWorldWidth_ > .25 || g
				}!d && this.sourceProj_.isGlobal() && u && (g = u > .25 || g)
			}
			if (!g && this.maxSourceExtent_ && isFinite(h[0]) && isFinite(h[1]) && isFinite(h[2]) && isFinite(h[3]) && !Ci(h, this.maxSourceExtent_)) return;
			let p = 0;
			if (!(g || isFinite(r[0]) && isFinite(r[1]) && isFinite(s[0]) && isFinite(s[1]) && isFinite(o[0]) && isFinite(o[1]) && isFinite(a[0]) && isFinite(a[1])))
				if (l > 0) g = !0;
				else if (p = (isFinite(r[0]) && isFinite(r[1]) ? 0 : 8) + (isFinite(s[0]) && isFinite(s[1]) ? 0 : 4) + (isFinite(o[0]) && isFinite(o[1]) ? 0 : 2) + (isFinite(a[0]) && isFinite(a[1]) ? 0 : 1), 1 != p && 2 != p && 4 != p && 8 != p) return;
			if (l > 0) {
				if (!g) {
					const e = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2],
						n = this.transformInv_(e);
					let s;
					if (d) {
						s = (P(r[0], c) + P(o[0], c)) / 2 - P(n[0], c)
					} else s = (r[0] + o[0]) / 2 - n[0];
					const a = (r[1] + o[1]) / 2 - n[1];
					g = s * s + a * a > this.errorThresholdSquared_
				}
				if (g) {
					if (Math.abs(t[0] - i[0]) <= Math.abs(t[1] - i[1])) {
						const h = [(e[0] + i[0]) / 2, (e[1] + i[1]) / 2],
							u = this.transformInv_(h),
							c = [(n[0] + t[0]) / 2, (n[1] + t[1]) / 2],
							d = this.transformInv_(c);
						this.addQuad_(t, e, h, c, r, s, u, d, l - 1), this.addQuad_(c, h, i, n, d, u, o, a, l - 1)
					} else {
						const h = [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2],
							u = this.transformInv_(h),
							c = [(i[0] + n[0]) / 2, (i[1] + n[1]) / 2],
							d = this.transformInv_(c);
						this.addQuad_(t, h, c, n, r, u, d, a, l - 1), this.addQuad_(h, e, i, c, u, s, o, d, l - 1)
					}
					return
				}
			}
			if (d) {
				if (!this.canWrapXInSource_) return;
				this.wrapsXInSource_ = !0
			}
			0 == (11 & p) && this.addTriangle_(t, i, n, r, o, a), 0 == (14 & p) && this.addTriangle_(t, i, e, r, o, s), p && (0 == (13 & p) && this.addTriangle_(e, n, t, s, a, r), 0 == (7 & p) && this.addTriangle_(e, n, i, s, a, o))
		}
		calculateSourceExtent() {
			const t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
			return this.triangles_.forEach((function(e, i, n) {
				const r = e.source;
				hi(t, r[0]), hi(t, r[1]), hi(t, r[2])
			})), t
		}
		getTriangles() {
			return this.triangles_
		}
	};
	let lc;
	const hc = [];

	function uc(t, e, i, n, r) {
		t.beginPath(), t.moveTo(0, 0), t.lineTo(e, i), t.lineTo(n, r), t.closePath(), t.save(), t.clip(), t.fillRect(0, 0, Math.max(e, n) + 1, Math.max(i, r)), t.restore()
	}

	function cc(t, e) {
		return Math.abs(t[4 * e] - 210) > 2 || Math.abs(t[4 * e + 3] - 191.25) > 2
	}

	function dc(t, e, i, n) {
		const r = Rn(i, e, t);
		let s = xn(e, n, i);
		const o = e.getMetersPerUnit();
		void 0 !== o && (s *= o);
		const a = t.getMetersPerUnit();
		void 0 !== a && (s /= a);
		const l = t.getExtent();
		if (!l || Je(l, r)) {
			const e = xn(t, s, r) / s;
			isFinite(e) && e > 0 && (s /= e)
		}
		return s
	}

	function gc(t, e, i, n, r, s, o, a, l, h, u, c, d) {
		const g = tt(Math.round(i * t), Math.round(i * e), hc);
		if (c || (g.imageSmoothingEnabled = !1), 0 === l.length) return g.canvas;

		function p(t) {
			return Math.round(t * i) / i
		}
		g.scale(i, i), g.globalCompositeOperation = "lighter";
		const f = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
		let m;
		if (l.forEach((function(t, e, i) {
				li(f, t.extent)
			})), !d || 1 !== l.length || 0 !== h) {
			const t = Ei(f),
				e = vi(f);
			m = tt(Math.round(i * t / n), Math.round(i * e / n), hc), c || (m.imageSmoothingEnabled = !1);
			const r = i / n;
			l.forEach((function(t, e, i) {
				const n = t.extent[0] - f[0],
					s = -(t.extent[3] - f[3]),
					o = Ei(t.extent),
					a = vi(t.extent);
				t.image.width > 0 && t.image.height > 0 && m.drawImage(t.image, h, h, t.image.width - 2 * h, t.image.height - 2 * h, n * r, s * r, o * r, a * r)
			}))
		}
		const _ = bi(o);
		return a.getTriangles().forEach((function(t, e, r) {
			const o = t.source,
				a = t.target;
			let h = o[0][0],
				u = o[0][1],
				d = o[1][0],
				y = o[1][1],
				x = o[2][0],
				v = o[2][1];
			const w = p((a[0][0] - _[0]) / s),
				b = p(-(a[0][1] - _[1]) / s),
				S = p((a[1][0] - _[0]) / s),
				E = p(-(a[1][1] - _[1]) / s),
				C = p((a[2][0] - _[0]) / s),
				T = p(-(a[2][1] - _[1]) / s),
				P = h,
				R = u;
			h = 0, u = 0, d -= P, y -= R, x -= P, v -= R;
			const F = function(t) {
				const e = t.length;
				for (let i = 0; i < e; i++) {
					let n = i,
						r = Math.abs(t[i][i]);
					for (let s = i + 1; s < e; s++) {
						const e = Math.abs(t[s][i]);
						e > r && (r = e, n = s)
					}
					if (0 === r) return null;
					const s = t[n];
					t[n] = t[i], t[i] = s;
					for (let n = i + 1; n < e; n++) {
						const r = -t[n][i] / t[i][i];
						for (let s = i; s < e + 1; s++) i == s ? t[n][s] = 0 : t[n][s] += r * t[i][s]
					}
				}
				const i = new Array(e);
				for (let n = e - 1; n >= 0; n--) {
					i[n] = t[n][e] / t[n][n];
					for (let r = n - 1; r >= 0; r--) t[r][e] -= t[r][n] * i[n]
				}
				return i
			}([
				[d, y, 0, 0, S - w],
				[x, v, 0, 0, C - w],
				[0, 0, d, y, E - b],
				[0, 0, x, v, T - b]
			]);
			if (!F) return;
			if (g.save(), g.beginPath(), function() {
					if (void 0 === lc) {
						const t = tt(6, 6, hc);
						t.globalCompositeOperation = "lighter", t.fillStyle = "rgba(210, 0, 0, 0.75)", uc(t, 4, 5, 4, 0), uc(t, 4, 5, 0, 5);
						const e = t.getImageData(0, 0, 3, 3).data;
						lc = cc(e, 0) || cc(e, 4) || cc(e, 8), et(t), hc.push(t.canvas)
					}
					return lc
				}() || !c) {
				g.moveTo(S, E);
				const t = 4,
					e = w - S,
					i = b - E;
				for (let n = 0; n < t; n++) g.lineTo(S + p((n + 1) * e / t), E + p(n * i / (t - 1))), n != t - 1 && g.lineTo(S + p((n + 1) * e / t), E + p((n + 1) * i / (t - 1)));
				g.lineTo(C, T)
			} else g.moveTo(S, E), g.lineTo(w, b), g.lineTo(C, T);
			let M;
			if (g.clip(), g.transform(F[0], F[2], F[1], F[3], w, b), g.translate(f[0] - P, f[3] - R), m) M = m.canvas, g.scale(n / i, -n / i);
			else {
				const t = l[0],
					e = t.extent;
				M = t.image, g.scale(Ei(e) / M.width, -vi(e) / M.height)
			}
			g.drawImage(M, 0, 0), g.restore()
		})), m && (et(m), hc.push(m.canvas)), u && (g.save(), g.globalCompositeOperation = "source-over", g.strokeStyle = "black", g.lineWidth = 1, a.getTriangles().forEach((function(t, e, i) {
			const n = t.target,
				r = (n[0][0] - _[0]) / s,
				o = -(n[0][1] - _[1]) / s,
				a = (n[1][0] - _[0]) / s,
				l = -(n[1][1] - _[1]) / s,
				h = (n[2][0] - _[0]) / s,
				u = -(n[2][1] - _[1]) / s;
			g.beginPath(), g.moveTo(a, l), g.lineTo(r, o), g.lineTo(h, u), g.closePath(), g.stroke()
		})), g.restore()), g.canvas
	}

	function pc(t) {
		return Array.isArray(t) ? Math.min(...t) : t
	}
	var fc = class extends Te {
		constructor(t, i, n, r, o, a, l) {
			let h = t.getExtent();
			h && t.canWrapX() && (h = h.slice(), h[0] = -1 / 0, h[2] = 1 / 0);
			let u = i.getExtent();
			u && i.canWrapX() && (u = u.slice(), u[0] = -1 / 0, u[2] = 1 / 0);
			const c = u ? wi(n, u) : n,
				d = dc(t, i, mi(c), r),
				g = new ac(t, i, c, h, .5 * d, r),
				p = g.calculateSourceExtent(),
				f = Ti(p) ? null : a(p, d, o),
				m = f ? e : s,
				_ = f ? f.getPixelRatio() : 1;
			super(n, r, _, m), this.targetProj_ = i, this.maxSourceExtent_ = h, this.triangulation_ = g, this.targetResolution_ = r, this.targetExtent_ = n, this.sourceImage_ = f, this.sourcePixelRatio_ = _, this.interpolate_ = l, this.canvas_ = null, this.sourceListenerKey_ = null
		}
		disposeInternal() {
			this.state == i && this.unlistenSource_(), super.disposeInternal()
		}
		getImage() {
			return this.canvas_
		}
		getProjection() {
			return this.targetProj_
		}
		reproject_() {
			const t = this.sourceImage_.getState();
			if (t == n) {
				const t = Ei(this.targetExtent_) / this.targetResolution_,
					e = vi(this.targetExtent_) / this.targetResolution_;
				this.canvas_ = gc(t, e, this.sourcePixelRatio_, pc(this.sourceImage_.getResolution()), this.maxSourceExtent_, this.targetResolution_, this.targetExtent_, this.triangulation_, [{
					extent: this.sourceImage_.getExtent(),
					image: this.sourceImage_.getImage()
				}], 0, void 0, this.interpolate_, !0)
			}
			this.state = t, this.changed()
		}
		load() {
			if (this.state == e) {
				this.state = i, this.changed();
				const t = this.sourceImage_.getState();
				t == n || t == r ? this.reproject_() : (this.sourceListenerKey_ = Ot(this.sourceImage_, St, (function(t) {
					const e = this.sourceImage_.getState();
					e != n && e != r || (this.unlistenSource_(), this.reproject_())
				}), this), this.sourceImage_.load())
			}
		}
		unlistenSource_() {
			Gt(this.sourceListenerKey_), this.sourceListenerKey_ = null
		}
	};
	const mc = 4,
		_c = "imageloadstart",
		yc = "imageloadend",
		xc = "imageloaderror";
	class vc extends at {
		constructor(t, e) {
			super(t), this.image = e
		}
	}

	function wc(t, e) {
		t.getImage().src = e
	}

	function bc(t, e, i, n) {
		const r = e / i,
			s = mi(t),
			o = L(Ei(t) / r, mc),
			a = L(vi(t) / r, mc);
		return yi(s, r, 0, [o + 2 * L((n - 1) * o / 2, mc), a + 2 * L((n - 1) * a / 2, mc)])
	}
	var Sc = class extends El {
			constructor(t) {
				super({
					attributions: t.attributions,
					projection: t.projection,
					state: t.state,
					interpolate: void 0 === t.interpolate || t.interpolate
				}), this.on, this.once, this.un, this.loader = t.loader || null, this.resolutions_ = void 0 !== t.resolutions ? t.resolutions : null, this.reprojectedImage_ = null, this.reprojectedRevision_ = 0, this.image = null, this.wantedExtent_, this.wantedResolution_, this.static_ = !!t.loader && 0 === t.loader.length, this.wantedProjection_ = null
			}
			getResolutions() {
				return this.resolutions_
			}
			setResolutions(t) {
				this.resolutions_ = t
			}
			findNearestResolution(t) {
				const e = this.getResolutions();
				if (e) {
					t = e[ct(e, t, 0)]
				}
				return t
			}
			getImage(t, e, i, n) {
				const r = this.getProjection();
				if (!r || !n || Cn(r, n)) return r && (n = r), this.getImageInternal(t, e, i, n);
				if (this.reprojectedImage_) {
					if (this.reprojectedRevision_ == this.getRevision() && Cn(this.reprojectedImage_.getProjection(), n) && this.reprojectedImage_.getResolution() == e && ai(this.reprojectedImage_.getExtent(), t)) return this.reprojectedImage_;
					this.reprojectedImage_.dispose(), this.reprojectedImage_ = null
				}
				return this.reprojectedImage_ = new fc(r, n, t, e, i, ((t, e, i) => this.getImageInternal(t, e, i, r)), this.getInterpolate()), this.reprojectedRevision_ = this.getRevision(), this.reprojectedImage_
			}
			getImageInternal(t, e, i, n) {
				if (this.loader) {
					const r = bc(t, e, i, 1),
						s = this.findNearestResolution(e);
					if (this.image && (this.static_ || this.wantedProjection_ === n && (this.wantedExtent_ && Qe(this.wantedExtent_, r) || Qe(this.image.getExtent(), r)) && (this.wantedResolution_ && pc(this.wantedResolution_) === s || pc(this.image.getResolution()) === s))) return this.image;
					this.wantedProjection_ = n, this.wantedExtent_ = r, this.wantedResolution_ = s, this.image = new Te(r, s, i, this.loader), this.image.addEventListener(St, this.handleImageChange.bind(this))
				}
				return this.image
			}
			handleImageChange(t) {
				const e = t.target;
				let s;
				switch (e.getState()) {
					case i:
						this.loading = !0, s = _c;
						break;
					case n:
						this.loading = !1, s = yc;
						break;
					case r:
						this.loading = !1, s = xc;
						break;
					default:
						return
				}
				this.hasListener(s) && this.dispatchEvent(new vc(s, e))
			}
		},
		Ec = "preload",
		Cc = "useInterimTilesOnError";
	var Tc = class extends uo {
		constructor(t) {
			t = t || {};
			const e = Object.assign({}, t);
			delete e.preload, delete e.useInterimTilesOnError, super(e), this.on, this.once, this.un, this.setPreload(void 0 !== t.preload ? t.preload : 0), this.setUseInterimTilesOnError(void 0 === t.useInterimTilesOnError || t.useInterimTilesOnError)
		}
		getPreload() {
			return this.get(Ec)
		}
		setPreload(t) {
			this.set(Ec, t)
		}
		getUseInterimTilesOnError() {
			return this.get(Cc)
		}
		setUseInterimTilesOnError(t) {
			this.set(Cc, t)
		}
		getData(t) {
			return super.getData(t)
		}
	};
	var Pc = class extends Nl {
		constructor(t, e, i, n, r, s, o, a, l, h, u, c) {
			super(r, Ss.IDLE, c), this.renderEdges_ = void 0 !== u && u, this.pixelRatio_ = o, this.gutter_ = a, this.canvas_ = null, this.sourceTileGrid_ = e, this.targetTileGrid_ = n, this.wrappedTileCoord_ = s || r, this.sourceTiles_ = [], this.sourcesListenerKeys_ = null, this.sourceZ_ = 0;
			const d = n.getTileCoordExtent(this.wrappedTileCoord_),
				g = this.targetTileGrid_.getExtent();
			let p = this.sourceTileGrid_.getExtent();
			const f = g ? wi(d, g) : d;
			if (0 === gi(f)) return void(this.state = Ss.EMPTY);
			const m = t.getExtent();
			m && (p = p ? wi(p, m) : m);
			const _ = n.getResolution(this.wrappedTileCoord_[0]),
				y = function(t, e, i, n) {
					const r = mi(i);
					let s = dc(t, e, r, n);
					return (!isFinite(s) || s <= 0) && di(i, (function(i) {
						return s = dc(t, e, i, n), isFinite(s) && s > 0
					})), s
				}(t, i, f, _);
			if (!isFinite(y) || y <= 0) return void(this.state = Ss.EMPTY);
			const x = void 0 !== h ? h : .5;
			if (this.triangulation_ = new ac(t, i, f, p, y * x, _), 0 === this.triangulation_.getTriangles().length) return void(this.state = Ss.EMPTY);
			this.sourceZ_ = e.getZForResolution(y);
			let v = this.triangulation_.calculateSourceExtent();
			if (p && (t.canWrapX() ? (v[1] = b(v[1], p[1], p[3]), v[3] = b(v[3], p[1], p[3])) : v = wi(v, p)), gi(v)) {
				const t = e.getTileRangeForExtentAndZ(v, this.sourceZ_);
				for (let e = t.minX; e <= t.maxX; e++)
					for (let i = t.minY; i <= t.maxY; i++) {
						const t = l(this.sourceZ_, e, i, o);
						t && this.sourceTiles_.push(t)
					}
				0 === this.sourceTiles_.length && (this.state = Ss.EMPTY)
			} else this.state = Ss.EMPTY
		}
		getImage() {
			return this.canvas_
		}
		reproject_() {
			const t = [];
			if (this.sourceTiles_.forEach((e => {
					e && e.getState() == Ss.LOADED && t.push({
						extent: this.sourceTileGrid_.getTileCoordExtent(e.tileCoord),
						image: e.getImage()
					})
				})), this.sourceTiles_.length = 0, 0 === t.length) this.state = Ss.ERROR;
			else {
				const e = this.wrappedTileCoord_[0],
					i = this.targetTileGrid_.getTileSize(e),
					n = "number" == typeof i ? i : i[0],
					r = "number" == typeof i ? i : i[1],
					s = this.targetTileGrid_.getResolution(e),
					o = this.sourceTileGrid_.getResolution(this.sourceZ_),
					a = this.targetTileGrid_.getTileCoordExtent(this.wrappedTileCoord_);
				this.canvas_ = gc(n, r, this.pixelRatio_, o, this.sourceTileGrid_.getExtent(), s, a, this.triangulation_, t, this.gutter_, this.renderEdges_, this.interpolate), this.state = Ss.LOADED
			}
			this.changed()
		}
		load() {
			if (this.state == Ss.IDLE) {
				this.state = Ss.LOADING, this.changed();
				let t = 0;
				this.sourcesListenerKeys_ = [], this.sourceTiles_.forEach((e => {
					const i = e.getState();
					if (i == Ss.IDLE || i == Ss.LOADING) {
						t++;
						const i = Ot(e, St, (function(n) {
							const r = e.getState();
							r != Ss.LOADED && r != Ss.ERROR && r != Ss.EMPTY || (Gt(i), t--, 0 === t && (this.unlistenSources_(), this.reproject_()))
						}), this);
						this.sourcesListenerKeys_.push(i)
					}
				})), 0 === t ? setTimeout(this.reproject_.bind(this), 0) : this.sourceTiles_.forEach((function(t, e, i) {
					t.getState() == Ss.IDLE && t.load()
				}))
			}
		}
		unlistenSources_() {
			this.sourcesListenerKeys_.forEach(Gt), this.sourcesListenerKeys_ = null
		}
		release() {
			this.canvas_ && (et(this.canvas_.getContext("2d")), hc.push(this.canvas_), this.canvas_ = null), super.release()
		}
	};
	var Rc = class extends Za {
		constructor(t) {
			super(t), this.extentChanged = !0, this.renderedExtent_ = null, this.renderedPixelRatio, this.renderedProjection = null, this.renderedRevision, this.renderedTiles = [], this.newTiles_ = !1, this.tmpExtent = [1 / 0, 1 / 0, -1 / 0, -1 / 0], this.tmpTileRange_ = new gs(0, 0, 0, 0)
		}
		isDrawableTile(t) {
			const e = this.getLayer(),
				i = t.getState(),
				n = e.getUseInterimTilesOnError();
			return i == Ss.LOADED || i == Ss.EMPTY || i == Ss.ERROR && !n
		}
		getTile(t, e, i, n) {
			const r = n.pixelRatio,
				s = n.viewState.projection,
				o = this.getLayer();
			let a = o.getSource().getTile(t, e, i, r, s);
			return a.getState() == Ss.ERROR && o.getUseInterimTilesOnError() && o.getPreload() > 0 && (this.newTiles_ = !0), this.isDrawableTile(a) || (a = a.getInterimTile()), a
		}
		getData(t) {
			const e = this.frameState;
			if (!e) return null;
			const i = this.getLayer(),
				n = je(e.pixelToCoordinateTransform, t.slice()),
				r = i.getExtent();
			if (r && !Je(r, n)) return null;
			const s = e.pixelRatio,
				o = e.viewState.projection,
				a = e.viewState,
				l = i.getRenderSource(),
				h = l.getTileGridForProjection(a.projection),
				c = l.getTilePixelRatio(e.pixelRatio);
			for (let t = h.getZForResolution(a.resolution); t >= h.getMinZoom(); --t) {
				const e = h.getTileCoordForCoordAndZ(n, t),
					i = l.getTile(t, e[1], e[2], s, o);
				if (!(i instanceof jl || i instanceof Pc) || i instanceof Pc && i.getState() === Ss.EMPTY) return null;
				if (i.getState() !== Ss.LOADED) continue;
				const r = h.getOrigin(t),
					d = u(h.getTileSize(t)),
					g = h.getResolution(t),
					p = Math.floor(c * ((n[0] - r[0]) / g - e[1] * d[0])),
					f = Math.floor(c * ((r[1] - n[1]) / g - e[2] * d[1])),
					m = Math.round(c * l.getGutterForProjection(a.projection));
				return this.getImageData(i.getImage(), p + m, f + m)
			}
			return null
		}
		loadedTileCallback(t, e, i) {
			return !!this.isDrawableTile(i) && super.loadedTileCallback(t, e, i)
		}
		prepareFrame(t) {
			return !!this.getLayer().getSource()
		}
		renderFrame(t, e) {
			const i = t.layerStatesArray[t.layerIndex],
				n = t.viewState,
				r = n.projection,
				s = n.resolution,
				o = n.center,
				a = n.rotation,
				h = t.pixelRatio,
				u = this.getLayer(),
				c = u.getSource(),
				d = c.getRevision(),
				g = c.getTileGridForProjection(r),
				p = g.getZForResolution(s, c.zDirection),
				f = g.getResolution(p);
			let m = t.extent;
			const _ = t.viewState.resolution,
				y = c.getTilePixelRatio(h),
				x = Math.round(Ei(m) / _ * h),
				v = Math.round(vi(m) / _ * h),
				w = i.extent && On(i.extent, r);
			w && (m = wi(m, On(i.extent, r)));
			const b = f * x / 2 / y,
				S = f * v / 2 / y,
				E = [o[0] - b, o[1] - S, o[0] + b, o[1] + S],
				C = g.getTileRangeForExtentAndZ(m, p),
				T = {};
			T[p] = {};
			const P = this.createLoadedTileFinder(c, r, T),
				R = this.tmpExtent,
				F = this.tmpTileRange_;
			this.newTiles_ = !1;
			const M = a ? xi(n.center, _, a, t.size) : void 0;
			for (let e = C.minX; e <= C.maxX; ++e)
				for (let n = C.minY; n <= C.maxY; ++n) {
					if (a && !g.tileCoordIntersectsViewport([p, e, n], M)) continue;
					const r = this.getTile(p, e, n, t);
					if (this.isDrawableTile(r)) {
						const e = l(this);
						if (r.getState() == Ss.LOADED) {
							T[p][r.tileCoord.toString()] = r;
							let t = r.inTransition(e);
							t && 1 !== i.opacity && (r.endTransition(e), t = !1), this.newTiles_ || !t && this.renderedTiles.includes(r) || (this.newTiles_ = !0)
						}
						if (1 === r.getAlpha(e, t.time)) continue
					}
					const s = g.getTileCoordChildTileRange(r.tileCoord, F, R);
					let o = !1;
					s && (o = P(p + 1, s)), o || g.forEachTileCoordParentTileRange(r.tileCoord, P, F, R)
				}
			const I = f / s * h / y;
			$e(this.pixelTransform, t.size[0] / 2, t.size[1] / 2, 1 / h, 1 / h, a, -x / 2, -v / 2);
			const L = We(this.pixelTransform);
			this.useContainer(e, L, this.getBackground(t));
			const k = this.context,
				A = k.canvas;
			Ve(this.inversePixelTransform, this.pixelTransform), $e(this.tempTransform, x / 2, v / 2, I, I, 0, -x / 2, -v / 2), A.width != x || A.height != v ? (A.width = x, A.height = v) : this.containerReused || k.clearRect(0, 0, x, v), w && this.clipUnrotated(k, t, w), c.getInterpolate() || (k.imageSmoothingEnabled = !1), this.preRender(k, t), this.renderedTiles.length = 0;
			let D, O, z, G = Object.keys(T).map(Number);
			G.sort(ut), 1 !== i.opacity || this.containerReused && !c.getOpaque(t.viewState.projection) ? (D = [], O = []) : G = G.reverse();
			for (let e = G.length - 1; e >= 0; --e) {
				const i = G[e],
					n = c.getTilePixelSize(i, h, r),
					s = g.getResolution(i) / f,
					o = n[0] * s * I,
					a = n[1] * s * I,
					u = g.getTileCoordForCoordAndZ(bi(E), i),
					d = g.getTileCoordExtent(u),
					m = je(this.tempTransform, [y * (d[0] - E[0]) / f, y * (E[3] - d[3]) / f]),
					_ = y * c.getGutterForProjection(r),
					x = T[i];
				for (const e in x) {
					const n = x[e],
						r = n.tileCoord,
						s = u[1] - r[1],
						h = Math.round(m[0] - (s - 1) * o),
						d = u[2] - r[2],
						g = Math.round(m[1] - (d - 1) * a),
						f = Math.round(m[0] - s * o),
						y = Math.round(m[1] - d * a),
						v = h - f,
						w = g - y,
						b = p === i,
						S = b && 1 !== n.getAlpha(l(this), t.time);
					let E = !1;
					if (!S)
						if (D) {
							z = [f, y, f + v, y, f + v, y + w, f, y + w];
							for (let t = 0, e = D.length; t < e; ++t)
								if (p !== i && i < O[t]) {
									const e = D[t];
									Ci([f, y, f + v, y + w], [e[0], e[3], e[4], e[7]]) && (E || (k.save(), E = !0), k.beginPath(), k.moveTo(z[0], z[1]), k.lineTo(z[2], z[3]), k.lineTo(z[4], z[5]), k.lineTo(z[6], z[7]), k.moveTo(e[6], e[7]), k.lineTo(e[4], e[5]), k.lineTo(e[2], e[3]), k.lineTo(e[0], e[1]), k.clip())
								} D.push(z), O.push(i)
						} else k.clearRect(f, y, v, w);
					this.drawTileImage(n, t, f, y, v, w, _, b), D && !S ? (E && k.restore(), this.renderedTiles.unshift(n)) : this.renderedTiles.push(n), this.updateUsedTiles(t.usedTiles, c, n)
				}
			}
			return this.renderedRevision = d, this.renderedResolution = f, this.extentChanged = !this.renderedExtent_ || !ai(this.renderedExtent_, E), this.renderedExtent_ = E, this.renderedPixelRatio = h, this.renderedProjection = r, this.manageTilePyramid(t, c, g, h, r, m, p, u.getPreload()), this.scheduleExpireCache(t, c), this.postRender(k, t), i.extent && k.restore(), k.imageSmoothingEnabled = !0, L !== A.style.transform && (A.style.transform = L), this.container
		}
		drawTileImage(t, e, i, n, r, s, o, a) {
			const h = this.getTileImage(t);
			if (!h) return;
			const u = l(this),
				c = e.layerStatesArray[e.layerIndex],
				d = c.opacity * (a ? t.getAlpha(u, e.time) : 1),
				g = d !== this.context.globalAlpha;
			g && (this.context.save(), this.context.globalAlpha = d), this.context.drawImage(h, o, o, h.width - 2 * o, h.height - 2 * o, i, n, r, s), g && this.context.restore(), d !== c.opacity ? e.animate = !0 : a && t.endTransition(u)
		}
		getImage() {
			const t = this.context;
			return t ? t.canvas : null
		}
		getTileImage(t) {
			return t.getImage()
		}
		scheduleExpireCache(t, e) {
			if (e.canExpireCache()) {
				const i = function(t, e, i) {
					const n = l(t);
					n in i.usedTiles && t.expireCache(i.viewState.projection, i.usedTiles[n])
				}.bind(null, e);
				t.postRenderFunctions.push(i)
			}
		}
		updateUsedTiles(t, e, i) {
			const n = l(e);
			n in t || (t[n] = {}), t[n][i.getKey()] = !0
		}
		manageTilePyramid(t, e, i, n, r, s, o, a, h) {
			const u = l(e);
			u in t.wantedTiles || (t.wantedTiles[u] = {});
			const c = t.wantedTiles[u],
				d = t.tileQueue,
				g = i.getMinZoom(),
				p = t.viewState.rotation,
				f = p ? xi(t.viewState.center, t.viewState.resolution, p, t.size) : void 0;
			let m, _, y, x, v, w, b = 0;
			for (w = g; w <= o; ++w)
				for (_ = i.getTileRangeForExtentAndZ(s, w, _), y = i.getResolution(w), x = _.minX; x <= _.maxX; ++x)
					for (v = _.minY; v <= _.maxY; ++v) p && !i.tileCoordIntersectsViewport([w, x, v], f) || (o - w <= a ? (++b, m = e.getTile(w, x, v, n, r), m.getState() == Ss.IDLE && (c[m.getKey()] = !0, d.isKeyQueued(m.getKey()) || d.enqueue([m, u, i.getTileCoordCenter(m.tileCoord), y])), void 0 !== h && h(m)) : e.useTile(w, x, v, r));
			e.updateCacheSize(b, r)
		}
	};
	var Fc = class extends Tc {
		constructor(t) {
			super(t)
		}
		createRenderer() {
			return new Rc(this)
		}
	};
	var Mc = class extends bs {
		constructor(t) {
			super({
				extent: t.extent,
				origin: t.origin,
				origins: t.origins,
				resolutions: t.resolutions,
				tileSize: t.tileSize,
				tileSizes: t.tileSizes,
				sizes: t.sizes
			}), this.matrixIds_ = t.matrixIds
		}
		getMatrixId(t) {
			return this.matrixIds_[t]
		}
		getMatrixIds() {
			return this.matrixIds_
		}
	};

	function Ic(t) {
		let e = t.getDefaultTileGrid();
		return e || (e = Oc(t), t.setDefaultTileGrid(e)), e
	}

	function Lc(t, e, i) {
		const n = e[0],
			r = t.getTileCoordCenter(e),
			s = zc(i);
		if (!Je(s, r)) {
			const e = Ei(s),
				i = Math.ceil((s[0] - r[0]) / e);
			return r[0] += e * i, t.getTileCoordForCoordAndZ(r, n)
		}
		return e
	}

	function kc(t, e, i, n) {
		n = void 0 !== n ? n : "top-left";
		const r = Dc(t, e, i);
		return new bs({
			extent: t,
			origin: _i(t, n),
			resolutions: r,
			tileSize: i
		})
	}

	function Ac(t) {
		const e = t || {},
			i = e.extent || yn("EPSG:3857").getExtent(),
			n = {
				extent: i,
				minZoom: e.minZoom,
				tileSize: e.tileSize,
				resolutions: Dc(i, e.maxZoom, e.tileSize, e.maxResolution)
			};
		return new bs(n)
	}

	function Dc(t, e, i, n) {
		e = void 0 !== e ? e : ps, i = u(void 0 !== i ? i : fs);
		const r = vi(t),
			s = Ei(t);
		n = n > 0 ? n : Math.max(s / i[0], r / i[1]);
		const o = e + 1,
			a = new Array(o);
		for (let t = 0; t < o; ++t) a[t] = n / Math.pow(2, t);
		return a
	}

	function Oc(t, e, i, n) {
		return kc(zc(t), e, i, n)
	}

	function zc(t) {
		let e = (t = yn(t)).getExtent();
		if (!e) {
			const i = 180 * Fi.degrees / t.getMetersPerUnit();
			e = ni(-i, -i, i, i)
		}
		return e
	}
	var Gc = Object.freeze({
		__proto__: null,
		TileGrid: bs,
		getForProjection: Ic,
		wrapX: Lc,
		createForExtent: kc,
		createXYZ: Ac,
		createForProjection: Oc,
		extentFromProjection: zc,
		WMTS: Mc
	});
	class Nc extends at {
		constructor(t, e) {
			super(t), this.tile = e
		}
	}
	var jc = class extends El {
			constructor(t) {
				super({
					attributions: t.attributions,
					attributionsCollapsible: t.attributionsCollapsible,
					projection: t.projection,
					state: t.state,
					wrapX: t.wrapX,
					interpolate: t.interpolate
				}), this.on, this.once, this.un, this.opaque_ = void 0 !== t.opaque && t.opaque, this.tilePixelRatio_ = void 0 !== t.tilePixelRatio ? t.tilePixelRatio : 1, this.tileGrid = void 0 !== t.tileGrid ? t.tileGrid : null;
				const e = [256, 256];
				this.tileGrid && u(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), e), this.tileCache = new gu(t.cacheSize || 0), this.tmpSize = [0, 0], this.key_ = t.key || "", this.tileOptions = {
					transition: t.transition,
					interpolate: t.interpolate
				}, this.zDirection = t.zDirection ? t.zDirection : 0
			}
			canExpireCache() {
				return this.tileCache.canExpireCache()
			}
			expireCache(t, e) {
				const i = this.getTileCacheForProjection(t);
				i && i.expireCache(e)
			}
			forEachLoadedTile(t, e, i, n) {
				const r = this.getTileCacheForProjection(t);
				if (!r) return !1;
				let s, o, a, l = !0;
				for (let t = i.minX; t <= i.maxX; ++t)
					for (let h = i.minY; h <= i.maxY; ++h) o = _s(e, t, h), a = !1, r.containsKey(o) && (s = r.get(o), a = s.getState() === Ss.LOADED, a && (a = !1 !== n(s))), a || (l = !1);
				return l
			}
			getGutterForProjection(t) {
				return 0
			}
			getKey() {
				return this.key_
			}
			setKey(t) {
				this.key_ !== t && (this.key_ = t, this.changed())
			}
			getOpaque(t) {
				return this.opaque_
			}
			getResolutions(t) {
				const e = t ? this.getTileGridForProjection(t) : this.tileGrid;
				return e ? e.getResolutions() : null
			}
			getTile(t, e, i, n, r) {
				return o()
			}
			getTileGrid() {
				return this.tileGrid
			}
			getTileGridForProjection(t) {
				return this.tileGrid ? this.tileGrid : Ic(t)
			}
			getTileCacheForProjection(t) {
				const e = this.getProjection();
				return Se(null === e || Cn(e, t), "A VectorTile source can only be rendered if it has a projection compatible with the view projection."), this.tileCache
			}
			getTilePixelRatio(t) {
				return this.tilePixelRatio_
			}
			getTilePixelSize(t, e, i) {
				const n = this.getTileGridForProjection(i),
					r = this.getTilePixelRatio(e),
					s = u(n.getTileSize(t), this.tmpSize);
				return 1 == r ? s : (o = s, a = r, void 0 === (l = this.tmpSize) && (l = [0, 0]), l[0] = o[0] * a + .5 | 0, l[1] = o[1] * a + .5 | 0, l);
				var o, a, l
			}
			getTileCoordForTileUrlFunction(t, e) {
				e = void 0 !== e ? e : this.getProjection();
				const i = this.getTileGridForProjection(e);
				return this.getWrapX() && e.isGlobal() && (t = Lc(i, t, e)),
					function(t, e) {
						const i = t[0],
							n = t[1],
							r = t[2];
						if (e.getMinZoom() > i || i > e.getMaxZoom()) return !1;
						const s = e.getFullTileRange(i);
						return !s || s.containsXY(n, r)
					}(t, i) ? t : null
			}
			clear() {
				this.tileCache.clear()
			}
			refresh() {
				this.clear(), super.refresh()
			}
			updateCacheSize(t, e) {
				const i = this.getTileCacheForProjection(e);
				t > i.highWaterMark && (i.highWaterMark = t)
			}
			useTile(t, e, i, n) {}
		},
		Uc = "tileloadstart",
		Bc = "tileloadend",
		$c = "tileloaderror";
	class Vc extends jc {
		constructor(t) {
			super({
				attributions: t.attributions,
				cacheSize: t.cacheSize,
				opaque: t.opaque,
				projection: t.projection,
				state: t.state,
				tileGrid: t.tileGrid,
				tilePixelRatio: t.tilePixelRatio,
				wrapX: t.wrapX,
				transition: t.transition,
				interpolate: t.interpolate,
				key: t.key,
				attributionsCollapsible: t.attributionsCollapsible,
				zDirection: t.zDirection
			}), this.generateTileUrlFunction_ = this.tileUrlFunction === Vc.prototype.tileUrlFunction, this.tileLoadFunction = t.tileLoadFunction, t.tileUrlFunction && (this.tileUrlFunction = t.tileUrlFunction), this.urls = null, t.urls ? this.setUrls(t.urls) : t.url && this.setUrl(t.url), this.tileLoadingKeys_ = {}
		}
		getTileLoadFunction() {
			return this.tileLoadFunction
		}
		getTileUrlFunction() {
			return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction ? this.tileUrlFunction.bind(this) : this.tileUrlFunction
		}
		getUrls() {
			return this.urls
		}
		handleTileChange(t) {
			const e = t.target,
				i = l(e),
				n = e.getState();
			let r;
			n == Ss.LOADING ? (this.tileLoadingKeys_[i] = !0, r = Uc) : i in this.tileLoadingKeys_ && (delete this.tileLoadingKeys_[i], r = n == Ss.ERROR ? $c : n == Ss.LOADED ? Bc : void 0), null != r && this.dispatchEvent(new Nc(r, e))
		}
		setTileLoadFunction(t) {
			this.tileCache.clear(), this.tileLoadFunction = t, this.changed()
		}
		setTileUrlFunction(t, e) {
			this.tileUrlFunction = t, this.tileCache.pruneExceptNewestZ(), void 0 !== e ? this.setKey(e) : this.changed()
		}
		setUrl(t) {
			const e = vu(t);
			this.urls = e, this.setUrls(e)
		}
		setUrls(t) {
			this.urls = t;
			const e = t.join("\n");
			this.generateTileUrlFunction_ ? this.setTileUrlFunction(yu(t, this.tileGrid), e) : this.setKey(e)
		}
		tileUrlFunction(t, e, i) {}
		useTile(t, e, i) {
			const n = _s(t, e, i);
			this.tileCache.containsKey(n) && this.tileCache.get(n)
		}
	}
	var Xc = Vc;

	function Wc(t, e) {
		t.getImage().src = e
	}
	var qc = class extends Xc {
		constructor(t) {
			super({
				attributions: t.attributions,
				cacheSize: t.cacheSize,
				opaque: t.opaque,
				projection: t.projection,
				state: t.state,
				tileGrid: t.tileGrid,
				tileLoadFunction: t.tileLoadFunction ? t.tileLoadFunction : Wc,
				tilePixelRatio: t.tilePixelRatio,
				tileUrlFunction: t.tileUrlFunction,
				url: t.url,
				urls: t.urls,
				wrapX: t.wrapX,
				transition: t.transition,
				interpolate: void 0 === t.interpolate || t.interpolate,
				key: t.key,
				attributionsCollapsible: t.attributionsCollapsible,
				zDirection: t.zDirection
			}), this.crossOrigin = void 0 !== t.crossOrigin ? t.crossOrigin : null, this.tileClass = void 0 !== t.tileClass ? t.tileClass : jl, this.tileCacheForProjection = {}, this.tileGridForProjection = {}, this.reprojectionErrorThreshold_ = t.reprojectionErrorThreshold, this.renderReprojectionEdges_ = !1
		}
		canExpireCache() {
			if (this.tileCache.canExpireCache()) return !0;
			for (const t in this.tileCacheForProjection)
				if (this.tileCacheForProjection[t].canExpireCache()) return !0;
			return !1
		}
		expireCache(t, e) {
			const i = this.getTileCacheForProjection(t);
			this.tileCache.expireCache(this.tileCache == i ? e : {});
			for (const t in this.tileCacheForProjection) {
				const n = this.tileCacheForProjection[t];
				n.expireCache(n == i ? e : {})
			}
		}
		getGutterForProjection(t) {
			return this.getProjection() && t && !Cn(this.getProjection(), t) ? 0 : this.getGutter()
		}
		getGutter() {
			return 0
		}
		getKey() {
			let t = super.getKey();
			return this.getInterpolate() || (t += ":disable-interpolation"), t
		}
		getOpaque(t) {
			return !(this.getProjection() && t && !Cn(this.getProjection(), t)) && super.getOpaque(t)
		}
		getTileGridForProjection(t) {
			const e = this.getProjection();
			if (this.tileGrid && (!e || Cn(e, t))) return this.tileGrid;
			const i = l(t);
			return i in this.tileGridForProjection || (this.tileGridForProjection[i] = Ic(t)), this.tileGridForProjection[i]
		}
		getTileCacheForProjection(t) {
			const e = this.getProjection();
			if (!e || Cn(e, t)) return this.tileCache;
			const i = l(t);
			return i in this.tileCacheForProjection || (this.tileCacheForProjection[i] = new gu(this.tileCache.highWaterMark)), this.tileCacheForProjection[i]
		}
		createTile_(t, e, i, n, r, s) {
			const o = [t, e, i],
				a = this.getTileCoordForTileUrlFunction(o, r),
				l = a ? this.tileUrlFunction(a, n, r) : void 0,
				h = new this.tileClass(o, void 0 !== l ? Ss.IDLE : Ss.EMPTY, void 0 !== l ? l : "", this.crossOrigin, this.tileLoadFunction, this.tileOptions);
			return h.key = s, h.addEventListener(St, this.handleTileChange.bind(this)), h
		}
		getTile(t, e, i, n, r) {
			const s = this.getProjection();
			if (!s || !r || Cn(s, r)) return this.getTileInternal(t, e, i, n, s || r);
			const o = this.getTileCacheForProjection(r),
				a = [t, e, i];
			let l;
			const h = ys(a);
			o.containsKey(h) && (l = o.get(h));
			const u = this.getKey();
			if (l && l.key == u) return l;
			const c = this.getTileGridForProjection(s),
				d = this.getTileGridForProjection(r),
				g = this.getTileCoordForTileUrlFunction(a, r),
				p = new Pc(s, c, r, d, a, g, this.getTilePixelRatio(n), this.getGutter(), ((t, e, i, n) => this.getTileInternal(t, e, i, n, s)), this.reprojectionErrorThreshold_, this.renderReprojectionEdges_, this.tileOptions);
			return p.key = u, l ? (p.interimTile = l, p.refreshInterimChain(), o.replace(h, p)) : o.set(h, p), p
		}
		getTileInternal(t, e, i, n, r) {
			let s = null;
			const o = _s(t, e, i),
				a = this.getKey();
			if (this.tileCache.containsKey(o)) {
				if (s = this.tileCache.get(o), s.key != a) {
					const l = s;
					s = this.createTile_(t, e, i, n, r, a), l.getState() == Ss.IDLE ? s.interimTile = l.interimTile : s.interimTile = l, s.refreshInterimChain(), this.tileCache.replace(o, s)
				}
			} else s = this.createTile_(t, e, i, n, r, a), this.tileCache.set(o, s);
			return s
		}
		setRenderReprojectionEdges(t) {
			if (this.renderReprojectionEdges_ != t) {
				this.renderReprojectionEdges_ = t;
				for (const t in this.tileCacheForProjection) this.tileCacheForProjection[t].clear();
				this.changed()
			}
		}
		setTileGridForProjection(t, e) {
			const i = yn(t);
			if (i) {
				const t = l(i);
				t in this.tileGridForProjection || (this.tileGridForProjection[t] = e)
			}
		}
		clear() {
			super.clear();
			for (const t in this.tileCacheForProjection) this.tileCacheForProjection[t].clear()
		}
	};
	var Zc = class extends qc {
		constructor(t) {
			if (super({
					attributions: t.attributions,
					cacheSize: t.cacheSize,
					crossOrigin: t.crossOrigin,
					interpolate: t.interpolate,
					projection: yn("EPSG:3857"),
					reprojectionErrorThreshold: t.reprojectionErrorThreshold,
					state: "loading",
					tileLoadFunction: t.tileLoadFunction,
					wrapX: void 0 === t.wrapX || t.wrapX,
					transition: t.transition,
					zDirection: t.zDirection
				}), this.tileJSON_ = null, this.tileSize_ = t.tileSize, t.url)
				if (t.jsonp) ! function(t, e, i, n) {
					const r = document.createElement("script"),
						s = "olc_" + l(e);

					function o() {
						delete window[s], r.parentNode.removeChild(r)
					}
					r.async = !0, r.src = t + (t.includes("?") ? "&" : "?") + (n || "callback") + "=" + s;
					const a = setTimeout((function() {
						o(), i && i()
					}), 1e4);
					window[s] = function(t) {
						clearTimeout(a), o(), e(t)
					}, document.head.appendChild(r)
				}(t.url, this.handleTileJSONResponse.bind(this), this.handleTileJSONError.bind(this));
				else {
					const e = new XMLHttpRequest;
					e.addEventListener("load", this.onXHRLoad_.bind(this)), e.addEventListener("error", this.onXHRError_.bind(this)), e.open("GET", t.url), e.send()
				}
			else {
				if (!t.tileJSON) throw new Error("Either `url` or `tileJSON` options must be provided");
				this.handleTileJSONResponse(t.tileJSON)
			}
		}
		onXHRLoad_(t) {
			const e = t.target;
			if (!e.status || e.status >= 200 && e.status < 300) {
				let t;
				try {
					t = JSON.parse(e.responseText)
				} catch (t) {
					return void this.handleTileJSONError()
				}
				this.handleTileJSONResponse(t)
			} else this.handleTileJSONError()
		}
		onXHRError_(t) {
			this.handleTileJSONError()
		}
		getTileJSON() {
			return this.tileJSON_
		}
		handleTileJSONResponse(t) {
			const e = yn("EPSG:4326"),
				i = this.getProjection();
			let n;
			if (void 0 !== t.bounds) {
				const r = Tn(e, i);
				n = Pi(t.bounds, r)
			}
			const r = zc(i),
				s = t.minzoom || 0,
				o = Ac({
					extent: r,
					maxZoom: t.maxzoom || 22,
					minZoom: s,
					tileSize: this.tileSize_
				});
			if (this.tileGrid = o, this.tileUrlFunction = yu(t.tiles, o), t.attribution && !this.getAttributions()) {
				const e = void 0 !== n ? n : r;
				this.setAttributions((function(i) {
					return Ci(e, i.extent) ? [t.attribution] : null
				}))
			}
			this.tileJSON_ = t, this.setState("ready")
		}
		handleTileJSONError() {
			this.setState("error")
		}
	};
	const Yc = {
			image: ["Polygon", "Circle", "LineString", "Image", "Text"],
			hybrid: ["Polygon", "LineString"],
			vector: []
		},
		Kc = {
			hybrid: ["Image", "Text", "Default"],
			vector: ["Polygon", "Circle", "LineString", "Image", "Text", "Default"]
		};
	var Hc = class extends Rc {
		constructor(t) {
			super(t), this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this), this.renderedLayerRevision_, this.renderedPixelToCoordinateTransform_ = null, this.renderedRotation_, this.tmpTransform_ = [1, 0, 0, 1, 0, 0]
		}
		prepareTile(t, e, i) {
			let n;
			const r = t.getState();
			return r !== Ss.LOADED && r !== Ss.ERROR || (this.updateExecutorGroup_(t, e, i), this.tileImageNeedsRender_(t) && (n = !0)), n
		}
		getTile(t, e, i, n) {
			const r = n.pixelRatio,
				s = n.viewState,
				o = s.resolution,
				a = s.projection,
				l = this.getLayer(),
				h = l.getSource().getTile(t, e, i, r, a),
				u = n.viewHints,
				c = !(u[Xs] || u[Ws]);
			!c && h.wantedResolution || (h.wantedResolution = o);
			return this.prepareTile(h, r, a) && (c || Date.now() - n.time < 8) && "vector" !== l.getRenderMode() && this.renderTileImage_(h, n), super.getTile(t, e, i, n)
		}
		isDrawableTile(t) {
			const e = this.getLayer();
			return super.isDrawableTile(t) && ("vector" === e.getRenderMode() ? l(e) in t.executorGroups : t.hasContext(e))
		}
		getTileImage(t) {
			return t.getImage(this.getLayer())
		}
		prepareFrame(t) {
			const e = this.getLayer().getRevision();
			return this.renderedLayerRevision_ !== e && (this.renderedLayerRevision_ = e, this.renderedTiles.length = 0), super.prepareFrame(t)
		}
		updateExecutorGroup_(t, e, i) {
			const n = this.getLayer(),
				r = n.getRevision(),
				s = n.getRenderOrder() || null,
				o = t.wantedResolution,
				a = t.getReplayState(n);
			if (!a.dirty && a.renderedResolution === o && a.renderedRevision == r && a.renderedRenderOrder == s) return;
			const h = n.getSource(),
				u = n.getDeclutter(),
				c = h.getTileGrid(),
				d = h.getTileGridForProjection(i).getTileCoordExtent(t.wrappedTileCoord),
				g = h.getSourceTiles(e, i, t),
				p = l(n);
			delete t.hitDetectionImageData[p], t.executorGroups[p] = [], u && (t.declutterExecutorGroups[p] = []), a.dirty = !1;
			for (let i = 0, r = g.length; i < r; ++i) {
				const r = g[i];
				if (r.getState() != Ss.LOADED) continue;
				const l = r.tileCoord,
					f = c.getTileCoordExtent(l),
					m = wi(d, f),
					_ = Ye(m, n.getRenderBuffer() * o, this.tmpExtent),
					y = ai(f, m) ? null : _,
					x = new $a(0, _, o, e),
					v = u ? new $a(0, m, o, e) : void 0,
					w = ml(o, e),
					b = function(t) {
						let e;
						const i = t.getStyleFunction() || n.getStyleFunction();
						if (i && (e = i(t, o)), e) {
							const i = this.renderFeature(t, w, e, x, v);
							a.dirty = a.dirty || i
						}
					},
					S = r.getFeatures();
				s && s !== a.renderedRenderOrder && S.sort(s);
				for (let t = 0, e = S.length; t < e; ++t) {
					const e = S[t];
					y && !Ci(y, e.getGeometry().getExtent()) || b.call(this, e)
				}
				const E = x.finish(),
					C = "vector" !== n.getRenderMode() && u && 1 === g.length ? null : m,
					T = new ll(C, o, e, h.getOverlaps(), E, n.getRenderBuffer());
				if (t.executorGroups[p].push(T), v) {
					const i = new ll(null, o, e, h.getOverlaps(), v.finish(), n.getRenderBuffer());
					t.declutterExecutorGroups[p].push(i)
				}
			}
			a.renderedRevision = r, a.renderedRenderOrder = s, a.renderedResolution = o
		}
		forEachFeatureAtCoordinate(t, e, i, n, r) {
			const s = e.viewState.resolution,
				o = e.viewState.rotation;
			i = null == i ? 0 : i;
			const a = this.getLayer(),
				h = a.getSource().getTileGridForProjection(e.viewState.projection),
				u = Ze([t]);
			Ye(u, s * i, u);
			const c = {},
				d = function(t, e, i) {
					let s = t.getId();
					void 0 === s && (s = l(t));
					const o = c[s];
					if (o) {
						if (!0 !== o && i < o.distanceSq) {
							if (0 === i) return c[s] = !0, r.splice(r.lastIndexOf(o), 1), n(t, a, e);
							o.geometry = e, o.distanceSq = i
						}
					} else {
						if (0 === i) return c[s] = !0, n(t, a, e);
						r.push(c[s] = {
							feature: t,
							layer: a,
							geometry: e,
							distanceSq: i,
							callback: n
						})
					}
				},
				g = this.renderedTiles;
			let p;
			for (let n = 0, r = g.length; !p && n < r; ++n) {
				const r = g[n];
				if (!Ci(h.getTileCoordExtent(r.wrappedTileCoord), u)) continue;
				const c = l(a),
					f = [r.executorGroups[c]],
					m = r.declutterExecutorGroups[c];
				m && f.push(m), f.some((n => {
					const r = n === m ? e.declutterTree.all().map((t => t.value)) : null;
					for (let e = 0, a = n.length; e < a; ++e) {
						const a = n[e];
						if (p = a.forEachFeatureAtCoordinate(t, s, o, i, d, r), p) return !0
					}
				}))
			}
			return p
		}
		getFeatures(t) {
			return new Promise(((e, i) => {
				const n = this.getLayer(),
					r = l(n),
					s = n.getSource(),
					o = this.renderedProjection,
					a = o.getExtent(),
					h = this.renderedResolution,
					c = s.getTileGridForProjection(o),
					d = je(this.renderedPixelToCoordinateTransform_, t.slice()),
					g = c.getTileCoordForCoordAndResolution(d, h);
				let p;
				for (let t = 0, e = this.renderedTiles.length; t < e; ++t)
					if (g.toString() === this.renderedTiles[t].tileCoord.toString()) {
						if (p = this.renderedTiles[t], p.getState() === Ss.LOADED) {
							const t = c.getTileCoordExtent(p.tileCoord);
							s.getWrapX() && o.canWrapX() && !Qe(a, t) && en(d, o);
							break
						}
						p = void 0
					} if (!p || p.loadingSourceTiles > 0) return void e([]);
				const f = bi(c.getTileCoordExtent(p.wrappedTileCoord)),
					m = [(d[0] - f[0]) / h, (f[1] - d[1]) / h],
					_ = p.getSourceTiles().reduce((function(t, e) {
						return t.concat(e.getFeatures())
					}), []);
				let y = p.hitDetectionImageData[r];
				if (!y) {
					const t = u(c.getTileSize(c.getZForResolution(h, s.zDirection))),
						e = this.renderedRotation_;
					y = cl(t, [this.getRenderTransform(c.getTileCoordCenter(p.wrappedTileCoord), h, 0, ul, t[0] * ul, t[1] * ul, 0)], _, n.getStyleFunction(), c.getTileCoordExtent(p.wrappedTileCoord), p.getReplayState(n).renderedResolution, e), p.hitDetectionImageData[r] = y
				}
				e(dl(m, _, y))
			}))
		}
		handleFontsChanged() {
			const t = this.getLayer();
			t.getVisible() && void 0 !== this.renderedLayerRevision_ && t.changed()
		}
		handleStyleImageChange_(t) {
			this.renderIfReadyAndVisible()
		}
		renderDeclutter(t) {
			const e = this.context,
				i = e.globalAlpha;
			e.globalAlpha = this.getLayer().getOpacity();
			const n = t.viewHints,
				r = !(n[Xs] || n[Ws]),
				s = this.renderedTiles;
			for (let e = 0, i = s.length; e < i; ++e) {
				const i = s[e],
					n = i.declutterExecutorGroups[l(this.getLayer())];
				if (n)
					for (let e = n.length - 1; e >= 0; --e) n[e].execute(this.context, 1, this.getTileRenderTransform(i, t), t.viewState.rotation, r, void 0, t.declutterTree)
			}
			e.globalAlpha = i
		}
		getTileRenderTransform(t, e) {
			const i = e.pixelRatio,
				n = e.viewState,
				r = n.center,
				s = n.resolution,
				o = n.rotation,
				a = e.size,
				l = Math.round(a[0] * i),
				h = Math.round(a[1] * i),
				u = this.getLayer().getSource().getTileGridForProjection(e.viewState.projection),
				c = t.tileCoord,
				d = u.getTileCoordExtent(t.wrappedTileCoord),
				g = u.getTileCoordExtent(c, this.tmpExtent)[0] - d[0];
			return Ge(Ue(this.inversePixelTransform.slice(), 1 / i, 1 / i), this.getRenderTransform(r, s, o, i, l, h, g))
		}
		postRender(t, e) {
			const i = e.viewHints,
				n = !(i[Xs] || i[Ws]);
			this.renderedPixelToCoordinateTransform_ = e.pixelToCoordinateTransform.slice(), this.renderedRotation_ = e.viewState.rotation;
			const r = this.getLayer(),
				s = r.getRenderMode(),
				o = t.globalAlpha;
			t.globalAlpha = r.getOpacity();
			const a = Kc[s],
				h = e.viewState,
				u = h.rotation,
				c = r.getSource(),
				d = c.getTileGridForProjection(h.projection).getZForResolution(h.resolution, c.zDirection),
				g = this.renderedTiles,
				p = [],
				f = [];
			let m = !0;
			for (let i = g.length - 1; i >= 0; --i) {
				const s = g[i];
				m = m && !s.getReplayState(r).dirty;
				const o = s.executorGroups[l(r)].filter((t => t.hasExecutors(a)));
				if (0 === o.length) continue;
				const h = this.getTileRenderTransform(s, e),
					c = s.tileCoord[0];
				let _ = !1;
				const y = o[0].getClipCoords(h);
				if (y) {
					for (let e = 0, i = p.length; e < i; ++e)
						if (d !== c && c < f[e]) {
							const i = p[e];
							Ci([y[0], y[3], y[4], y[7]], [i[0], i[3], i[4], i[7]]) && (_ || (t.save(), _ = !0), t.beginPath(), t.moveTo(y[0], y[1]), t.lineTo(y[2], y[3]), t.lineTo(y[4], y[5]), t.lineTo(y[6], y[7]), t.moveTo(i[6], i[7]), t.lineTo(i[4], i[5]), t.lineTo(i[2], i[3]), t.lineTo(i[0], i[1]), t.clip())
						} p.push(y), f.push(c)
				}
				for (let e = 0, i = o.length; e < i; ++e) {
					o[e].execute(t, 1, h, u, n, a)
				}
				_ && t.restore()
			}
			t.globalAlpha = o, this.ready = m, super.postRender(t, e)
		}
		renderFeature(t, e, i, n, r) {
			if (!i) return !1;
			let s = !1;
			if (Array.isArray(i))
				for (let o = 0, a = i.length; o < a; ++o) s = yl(n, t, i[o], e, this.boundHandleStyleImageChange_, void 0, r) || s;
			else s = yl(n, t, i, e, this.boundHandleStyleImageChange_, void 0, r);
			return s
		}
		tileImageNeedsRender_(t) {
			const e = this.getLayer();
			if ("vector" === e.getRenderMode()) return !1;
			const i = t.getReplayState(e),
				n = e.getRevision(),
				r = t.wantedResolution;
			return i.renderedTileResolution !== r || i.renderedTileRevision !== n
		}
		renderTileImage_(t, e) {
			const i = this.getLayer(),
				n = t.getReplayState(i),
				r = i.getRevision(),
				s = t.executorGroups[l(i)];
			n.renderedTileRevision = r;
			const o = t.wrappedTileCoord,
				a = o[0],
				h = i.getSource();
			let u = e.pixelRatio;
			const c = e.viewState.projection,
				d = h.getTileGridForProjection(c),
				g = d.getResolution(t.tileCoord[0]),
				p = e.pixelRatio / t.wantedResolution * g,
				f = d.getResolution(a),
				m = t.getContext(i);
			u = Math.round(Math.max(u, p / u));
			const _ = h.getTilePixelSize(a, u, c);
			m.canvas.width = _[0], m.canvas.height = _[1];
			const y = u / p;
			if (1 !== y) {
				const t = ze(this.tmpTransform_);
				Ue(t, y, y), m.setTransform.apply(m, t)
			}
			const x = d.getTileCoordExtent(o, this.tmpExtent),
				v = p / f,
				w = ze(this.tmpTransform_);
			Ue(w, v, -v), Be(w, -x[0], -x[3]);
			for (let t = 0, e = s.length; t < e; ++t) {
				s[t].execute(m, y, w, 0, !0, Yc[i.getRenderMode()])
			}
			n.renderedTileResolution = t.wantedResolution
		}
	};
	var Jc = class extends Pa {
		constructor(t) {
			t = t || {};
			const e = Object.assign({}, t);
			delete e.preload, delete e.useInterimTilesOnError, super(e), this.on, this.once, this.un;
			const i = t.renderMode || "hybrid";
			Se("hybrid" == i || "vector" == i, "`renderMode` must be `'hybrid'` or `'vector'`"), this.renderMode_ = i, this.setPreload(t.preload ? t.preload : 0), this.setUseInterimTilesOnError(void 0 === t.useInterimTilesOnError || t.useInterimTilesOnError), this.getBackground, this.setBackground
		}
		createRenderer() {
			return new Hc(this)
		}
		getFeatures(t) {
			return super.getFeatures(t)
		}
		getRenderMode() {
			return this.renderMode_
		}
		getPreload() {
			return this.get(Ec)
		}
		getUseInterimTilesOnError() {
			return this.get(Cc)
		}
		setPreload(t) {
			this.set(Ec, t)
		}
		setUseInterimTilesOnError(t) {
			this.set(Cc, t)
		}
	};
	var Qc = class extends Xc {
		constructor(t) {
			const e = t.projection || "EPSG:3857",
				i = t.extent || zc(e),
				n = t.tileGrid || Ac({
					extent: i,
					maxResolution: t.maxResolution,
					maxZoom: void 0 !== t.maxZoom ? t.maxZoom : 22,
					minZoom: t.minZoom,
					tileSize: t.tileSize || 512
				});
			super({
				attributions: t.attributions,
				attributionsCollapsible: t.attributionsCollapsible,
				cacheSize: t.cacheSize,
				interpolate: !0,
				opaque: !1,
				projection: e,
				state: t.state,
				tileGrid: n,
				tileLoadFunction: t.tileLoadFunction ? t.tileLoadFunction : td,
				tileUrlFunction: t.tileUrlFunction,
				url: t.url,
				urls: t.urls,
				wrapX: void 0 === t.wrapX || t.wrapX,
				transition: t.transition,
				zDirection: void 0 === t.zDirection ? 1 : t.zDirection
			}), this.format_ = t.format ? t.format : null, this.sourceTileCache = new gu(this.tileCache.highWaterMark), this.overlaps_ = null == t.overlaps || t.overlaps, this.tileClass = t.tileClass ? t.tileClass : mu, this.tileGrids_ = {}
		}
		getFeaturesInExtent(t) {
			const e = [],
				i = this.tileCache;
			if (0 === i.getCount()) return e;
			const n = xs(i.peekFirstKey())[0],
				r = this.tileGrid;
			return i.forEach((function(i) {
				if (i.tileCoord[0] !== n || i.getState() !== Ss.LOADED) return;
				const s = i.getSourceTiles();
				for (let i = 0, n = s.length; i < n; ++i) {
					const n = s[i],
						o = n.tileCoord;
					if (Ci(t, r.getTileCoordExtent(o))) {
						const i = n.getFeatures();
						if (i)
							for (let n = 0, r = i.length; n < r; ++n) {
								const r = i[n],
									s = r.getGeometry();
								Ci(t, s.getExtent()) && e.push(r)
							}
					}
				}
			})), e
		}
		getOverlaps() {
			return this.overlaps_
		}
		clear() {
			this.tileCache.clear(), this.sourceTileCache.clear()
		}
		expireCache(t, e) {
			const i = this.getTileCacheForProjection(t),
				n = Object.keys(e).reduce(((t, e) => {
					const n = function(t) {
							const [e, i, n] = t.substring(t.lastIndexOf("/") + 1, t.length).split(",").map(Number);
							return _s(e, i, n)
						}(e),
						r = i.peek(n);
					if (r) {
						const e = r.sourceTiles;
						for (let i = 0, n = e.length; i < n; ++i) t[e[i].getKey()] = !0
					}
					return t
				}), {});
			super.expireCache(t, e), this.sourceTileCache.expireCache(n)
		}
		getSourceTiles(t, e, i) {
			if (i.getState() === Ss.IDLE) {
				i.setState(Ss.LOADING);
				const n = i.wrappedTileCoord,
					r = this.getTileGridForProjection(e),
					s = r.getTileCoordExtent(n),
					o = n[0],
					a = r.getResolution(o);
				Ye(s, -a, s);
				const l = this.tileGrid,
					h = l.getExtent();
				h && wi(s, h, s);
				const u = l.getZForResolution(a, this.zDirection);
				l.forEachTileCoord(s, u, (n => {
					const r = this.tileUrlFunction(n, t, e),
						s = this.sourceTileCache.containsKey(r) ? this.sourceTileCache.get(r) : new this.tileClass(n, r ? Ss.IDLE : Ss.EMPTY, r, this.format_, this.tileLoadFunction);
					i.sourceTiles.push(s);
					const o = s.getState();
					if (o < Ss.LOADED) {
						const t = e => {
							this.handleTileChange(e);
							const n = s.getState();
							if (n === Ss.LOADED || n === Ss.ERROR) {
								const e = s.getKey();
								e in i.errorTileKeys ? s.getState() === Ss.LOADED && delete i.errorTileKeys[e] : i.loadingSourceTiles--, n === Ss.ERROR ? i.errorTileKeys[e] = !0 : s.removeEventListener(St, t), 0 === i.loadingSourceTiles && i.setState(wt(i.errorTileKeys) ? Ss.LOADED : Ss.ERROR)
							}
						};
						s.addEventListener(St, t), i.loadingSourceTiles++
					}
					o === Ss.IDLE && (s.extent = l.getTileCoordExtent(n), s.projection = e, s.resolution = l.getResolution(n[0]), this.sourceTileCache.set(r, s), s.load())
				})), i.loadingSourceTiles || i.setState(i.sourceTiles.some((t => t.getState() === Ss.ERROR)) ? Ss.ERROR : Ss.LOADED)
			}
			return i.sourceTiles
		}
		getTile(t, e, i, n, r) {
			const s = _s(t, e, i),
				o = this.getKey();
			let a;
			if (this.tileCache.containsKey(s) && (a = this.tileCache.get(s), a.key === o)) return a;
			const l = [t, e, i];
			let h = this.getTileCoordForTileUrlFunction(l, r);
			const u = this.getTileGrid().getExtent(),
				c = this.getTileGridForProjection(r);
			if (h && u) {
				const e = c.getTileCoordExtent(h);
				Ye(e, -c.getResolution(t), e), Ci(u, e) || (h = null)
			}
			let d = !0;
			if (null !== h) {
				const e = this.tileGrid,
					i = c.getResolution(t),
					s = e.getZForResolution(i, 1),
					o = c.getTileCoordExtent(h);
				Ye(o, -i, o), e.forEachTileCoord(o, s, (t => {
					d = d && !this.tileUrlFunction(t, n, r)
				}))
			}
			const g = new fu(l, d ? Ss.EMPTY : Ss.IDLE, h, this.getSourceTiles.bind(this, n, r));
			return g.key = o, a ? (g.interimTile = a, g.refreshInterimChain(), this.tileCache.replace(s, g)) : this.tileCache.set(s, g), g
		}
		getTileGridForProjection(t) {
			const e = t.getCode();
			let i = this.tileGrids_[e];
			if (!i) {
				const t = this.tileGrid,
					n = t.getResolutions().slice(),
					r = n.map((function(e, i) {
						return t.getOrigin(i)
					})),
					s = n.map((function(e, i) {
						return t.getTileSize(i)
					})),
					o = ps + 1;
				for (let t = n.length; t < o; ++t) n.push(n[t - 1] / 2), r.push(r[t - 1]), s.push(s[t - 1]);
				i = new bs({
					extent: t.getExtent(),
					origins: r,
					resolutions: n,
					tileSizes: s
				}), this.tileGrids_[e] = i
			}
			return i
		}
		getTilePixelRatio(t) {
			return t
		}
		getTilePixelSize(t, e, i) {
			const n = u(this.getTileGridForProjection(i).getTileSize(t), this.tmpSize);
			return [Math.round(n[0] * e), Math.round(n[1] * e)]
		}
		updateCacheSize(t, e) {
			super.updateCacheSize(2 * t, e), this.sourceTileCache.highWaterMark = this.getTileCacheForProjection(e).highWaterMark
		}
	};

	function td(t, e) {
		t.setLoader((function(i, n, r) {
			Dl(e, t.getFormat(), i, n, r, t.onLoad.bind(t), t.onError.bind(t))
		}))
	}

	function ed(t) {
		return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
	}
	var id, nd = {
		transparent: [0, 0, 0, 0],
		aliceblue: [240, 248, 255, 1],
		antiquewhite: [250, 235, 215, 1],
		aqua: [0, 255, 255, 1],
		aquamarine: [127, 255, 212, 1],
		azure: [240, 255, 255, 1],
		beige: [245, 245, 220, 1],
		bisque: [255, 228, 196, 1],
		black: [0, 0, 0, 1],
		blanchedalmond: [255, 235, 205, 1],
		blue: [0, 0, 255, 1],
		blueviolet: [138, 43, 226, 1],
		brown: [165, 42, 42, 1],
		burlywood: [222, 184, 135, 1],
		cadetblue: [95, 158, 160, 1],
		chartreuse: [127, 255, 0, 1],
		chocolate: [210, 105, 30, 1],
		coral: [255, 127, 80, 1],
		cornflowerblue: [100, 149, 237, 1],
		cornsilk: [255, 248, 220, 1],
		crimson: [220, 20, 60, 1],
		cyan: [0, 255, 255, 1],
		darkblue: [0, 0, 139, 1],
		darkcyan: [0, 139, 139, 1],
		darkgoldenrod: [184, 134, 11, 1],
		darkgray: [169, 169, 169, 1],
		darkgreen: [0, 100, 0, 1],
		darkgrey: [169, 169, 169, 1],
		darkkhaki: [189, 183, 107, 1],
		darkmagenta: [139, 0, 139, 1],
		darkolivegreen: [85, 107, 47, 1],
		darkorange: [255, 140, 0, 1],
		darkorchid: [153, 50, 204, 1],
		darkred: [139, 0, 0, 1],
		darksalmon: [233, 150, 122, 1],
		darkseagreen: [143, 188, 143, 1],
		darkslateblue: [72, 61, 139, 1],
		darkslategray: [47, 79, 79, 1],
		darkslategrey: [47, 79, 79, 1],
		darkturquoise: [0, 206, 209, 1],
		darkviolet: [148, 0, 211, 1],
		deeppink: [255, 20, 147, 1],
		deepskyblue: [0, 191, 255, 1],
		dimgray: [105, 105, 105, 1],
		dimgrey: [105, 105, 105, 1],
		dodgerblue: [30, 144, 255, 1],
		firebrick: [178, 34, 34, 1],
		floralwhite: [255, 250, 240, 1],
		forestgreen: [34, 139, 34, 1],
		fuchsia: [255, 0, 255, 1],
		gainsboro: [220, 220, 220, 1],
		ghostwhite: [248, 248, 255, 1],
		gold: [255, 215, 0, 1],
		goldenrod: [218, 165, 32, 1],
		gray: [128, 128, 128, 1],
		green: [0, 128, 0, 1],
		greenyellow: [173, 255, 47, 1],
		grey: [128, 128, 128, 1],
		honeydew: [240, 255, 240, 1],
		hotpink: [255, 105, 180, 1],
		indianred: [205, 92, 92, 1],
		indigo: [75, 0, 130, 1],
		ivory: [255, 255, 240, 1],
		khaki: [240, 230, 140, 1],
		lavender: [230, 230, 250, 1],
		lavenderblush: [255, 240, 245, 1],
		lawngreen: [124, 252, 0, 1],
		lemonchiffon: [255, 250, 205, 1],
		lightblue: [173, 216, 230, 1],
		lightcoral: [240, 128, 128, 1],
		lightcyan: [224, 255, 255, 1],
		lightgoldenrodyellow: [250, 250, 210, 1],
		lightgray: [211, 211, 211, 1],
		lightgreen: [144, 238, 144, 1],
		lightgrey: [211, 211, 211, 1],
		lightpink: [255, 182, 193, 1],
		lightsalmon: [255, 160, 122, 1],
		lightseagreen: [32, 178, 170, 1],
		lightskyblue: [135, 206, 250, 1],
		lightslategray: [119, 136, 153, 1],
		lightslategrey: [119, 136, 153, 1],
		lightsteelblue: [176, 196, 222, 1],
		lightyellow: [255, 255, 224, 1],
		lime: [0, 255, 0, 1],
		limegreen: [50, 205, 50, 1],
		linen: [250, 240, 230, 1],
		magenta: [255, 0, 255, 1],
		maroon: [128, 0, 0, 1],
		mediumaquamarine: [102, 205, 170, 1],
		mediumblue: [0, 0, 205, 1],
		mediumorchid: [186, 85, 211, 1],
		mediumpurple: [147, 112, 219, 1],
		mediumseagreen: [60, 179, 113, 1],
		mediumslateblue: [123, 104, 238, 1],
		mediumspringgreen: [0, 250, 154, 1],
		mediumturquoise: [72, 209, 204, 1],
		mediumvioletred: [199, 21, 133, 1],
		midnightblue: [25, 25, 112, 1],
		mintcream: [245, 255, 250, 1],
		mistyrose: [255, 228, 225, 1],
		moccasin: [255, 228, 181, 1],
		navajowhite: [255, 222, 173, 1],
		navy: [0, 0, 128, 1],
		oldlace: [253, 245, 230, 1],
		olive: [128, 128, 0, 1],
		olivedrab: [107, 142, 35, 1],
		orange: [255, 165, 0, 1],
		orangered: [255, 69, 0, 1],
		orchid: [218, 112, 214, 1],
		palegoldenrod: [238, 232, 170, 1],
		palegreen: [152, 251, 152, 1],
		paleturquoise: [175, 238, 238, 1],
		palevioletred: [219, 112, 147, 1],
		papayawhip: [255, 239, 213, 1],
		peachpuff: [255, 218, 185, 1],
		peru: [205, 133, 63, 1],
		pink: [255, 192, 203, 1],
		plum: [221, 160, 221, 1],
		powderblue: [176, 224, 230, 1],
		purple: [128, 0, 128, 1],
		rebeccapurple: [102, 51, 153, 1],
		red: [255, 0, 0, 1],
		rosybrown: [188, 143, 143, 1],
		royalblue: [65, 105, 225, 1],
		saddlebrown: [139, 69, 19, 1],
		salmon: [250, 128, 114, 1],
		sandybrown: [244, 164, 96, 1],
		seagreen: [46, 139, 87, 1],
		seashell: [255, 245, 238, 1],
		sienna: [160, 82, 45, 1],
		silver: [192, 192, 192, 1],
		skyblue: [135, 206, 235, 1],
		slateblue: [106, 90, 205, 1],
		slategray: [112, 128, 144, 1],
		slategrey: [112, 128, 144, 1],
		snow: [255, 250, 250, 1],
		springgreen: [0, 255, 127, 1],
		steelblue: [70, 130, 180, 1],
		tan: [210, 180, 140, 1],
		teal: [0, 128, 128, 1],
		thistle: [216, 191, 216, 1],
		tomato: [255, 99, 71, 1],
		turquoise: [64, 224, 208, 1],
		violet: [238, 130, 238, 1],
		wheat: [245, 222, 179, 1],
		white: [255, 255, 255, 1],
		whitesmoke: [245, 245, 245, 1],
		yellow: [255, 255, 0, 1],
		yellowgreen: [154, 205, 50, 1]
	};

	function rd(t) {
		return (t = Math.round(t)) < 0 ? 0 : t > 255 ? 255 : t
	}

	function sd(t) {
		return t < 0 ? 0 : t > 1 ? 1 : t
	}

	function od(t) {
		return "%" === t[t.length - 1] ? rd(parseFloat(t) / 100 * 255) : rd(parseInt(t))
	}

	function ad(t) {
		return "%" === t[t.length - 1] ? sd(parseFloat(t) / 100) : sd(parseFloat(t))
	}

	function ld(t, e, i) {
		return i < 0 ? i += 1 : i > 1 && (i -= 1), 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
	}
	try {
		id = {}.parseCSSColor = function(t) {
			var e, i = t.replace(/ /g, "").toLowerCase();
			if (i in nd) return nd[i].slice();
			if ("#" === i[0]) return 4 === i.length ? (e = parseInt(i.substr(1), 16)) >= 0 && e <= 4095 ? [(3840 & e) >> 4 | (3840 & e) >> 8, 240 & e | (240 & e) >> 4, 15 & e | (15 & e) << 4, 1] : null : 7 === i.length && (e = parseInt(i.substr(1), 16)) >= 0 && e <= 16777215 ? [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 1] : null;
			var n = i.indexOf("("),
				r = i.indexOf(")");
			if (-1 !== n && r + 1 === i.length) {
				var s = i.substr(0, n),
					o = i.substr(n + 1, r - (n + 1)).split(","),
					a = 1;
				switch (s) {
					case "rgba":
						if (4 !== o.length) return null;
						a = ad(o.pop());
					case "rgb":
						return 3 !== o.length ? null : [od(o[0]), od(o[1]), od(o[2]), a];
					case "hsla":
						if (4 !== o.length) return null;
						a = ad(o.pop());
					case "hsl":
						if (3 !== o.length) return null;
						var l = (parseFloat(o[0]) % 360 + 360) % 360 / 360,
							h = ad(o[1]),
							u = ad(o[2]),
							c = u <= .5 ? u * (h + 1) : u + h - u * h,
							d = 2 * u - c;
						return [rd(255 * ld(d, c, l + 1 / 3)), rd(255 * ld(d, c, l)), rd(255 * ld(d, c, l - 1 / 3)), a];
					default:
						return null
				}
			}
			return null
		}
	} catch (t) {}
	class hd {
		constructor(t, e, i, n = 1) {
			this.r = t, this.g = e, this.b = i, this.a = n
		}
		static parse(t) {
			if (!t) return;
			if (t instanceof hd) return t;
			if ("string" != typeof t) return;
			const e = id(t);
			return e ? new hd(e[0] / 255 * e[3], e[1] / 255 * e[3], e[2] / 255 * e[3], e[3]) : void 0
		}
		toString() {
			const [t, e, i, n] = this.toArray();
			return `rgba(${Math.round(t)},${Math.round(e)},${Math.round(i)},${n})`
		}
		toArray() {
			const {
				r: t,
				g: e,
				b: i,
				a: n
			} = this;
			return 0 === n ? [0, 0, 0, 0] : [255 * t / n, 255 * e / n, 255 * i / n, n]
		}
		toArray01() {
			const {
				r: t,
				g: e,
				b: i,
				a: n
			} = this;
			return 0 === n ? [0, 0, 0, 0] : [t / n, e / n, i / n, n]
		}
		toArray01PremultipliedAlpha() {
			const {
				r: t,
				g: e,
				b: i,
				a: n
			} = this;
			return [t, e, i, n]
		}
	}
	hd.black = new hd(0, 0, 0, 1), hd.white = new hd(1, 1, 1, 1), hd.transparent = new hd(0, 0, 0, 0), hd.red = new hd(1, 0, 0, 1), hd.blue = new hd(0, 0, 1, 1);
	var ud = hd;

	function cd(t) {
		return "object" == typeof t ? ["literal", t] : t
	}

	function dd(t, e) {
		let i = t.stops;
		if (!i) return function(t, e) {
			const i = ["get", t.property];
			if (void 0 === t.default) return "string" === e.type ? ["string", i] : i;
			if ("enum" === e.type) return ["match", i, Object.keys(e.values), i, t.default];
			{
				const n = ["color" === e.type ? "to-color" : e.type, i, cd(t.default)];
				return "array" === e.type && n.splice(1, 0, e.value, e.length || null), n
			}
		}(t, e);
		const n = i && "object" == typeof i[0][0],
			r = n || void 0 !== t.property,
			s = n || !r;
		return i = i.map((t => !r && e.tokens && "string" == typeof t[1] ? [t[0], xd(t[1])] : [t[0], cd(t[1])])), n ? function(t, e, i) {
			const n = {},
				r = {},
				s = [];
			for (let e = 0; e < i.length; e++) {
				const o = i[e],
					a = o[0].zoom;
				void 0 === n[a] && (n[a] = {
					zoom: a,
					type: t.type,
					property: t.property,
					default: t.default
				}, r[a] = [], s.push(a)), r[a].push([o[0].value, o[1]])
			}
			const o = yd({}, e);
			if ("exponential" === o) {
				const i = [gd(t), ["linear"],
					["zoom"]
				];
				for (const t of s) {
					_d(i, t, fd(n[t], e, r[t]), !1)
				}
				return i
			} {
				const t = ["step", ["zoom"]];
				for (const i of s) {
					_d(t, i, fd(n[i], e, r[i]), !0)
				}
				return md(t), t
			}
		}(t, e, i) : s ? function(t, e, i, n = ["zoom"]) {
			const r = yd(t, e);
			let s, o = !1;
			if ("interval" === r) s = ["step", n], o = !0;
			else {
				if ("exponential" !== r) throw new Error(`Unknown zoom function type "${r}"`);
				{
					const e = void 0 !== t.base ? t.base : 1;
					s = [gd(t), 1 === e ? ["linear"] : ["exponential", e], n]
				}
			}
			for (const t of i) _d(s, t[0], t[1], o);
			return md(s), s
		}(t, e, i) : fd(t, e, i)
	}

	function gd(t) {
		switch (t.colorSpace) {
			case "hcl":
				return "interpolate-hcl";
			case "lab":
				return "interpolate-lab";
			default:
				return "interpolate"
		}
	}

	function pd(t, e) {
		const i = cd((n = t.default, r = e.default, void 0 !== n ? n : void 0 !== r ? r : void 0));
		var n, r;
		return void 0 === i && "resolvedImage" === e.type ? "" : i
	}

	function fd(t, e, i) {
		const n = yd(t, e),
			r = ["get", t.property];
		if ("categorical" === n && "boolean" == typeof i[0][0]) {
			const n = ["case"];
			for (const t of i) n.push(["==", r, t[0]], t[1]);
			return n.push(pd(t, e)), n
		}
		if ("categorical" === n) {
			const n = ["match", r];
			for (const t of i) _d(n, t[0], t[1], !1);
			return n.push(pd(t, e)), n
		}
		if ("interval" === n) {
			const e = ["step", ["number", r]];
			for (const t of i) _d(e, t[0], t[1], !0);
			return md(e), void 0 === t.default ? e : ["case", ["==", ["typeof", r], "number"], e, cd(t.default)]
		}
		if ("exponential" === n) {
			const e = void 0 !== t.base ? t.base : 1,
				n = [gd(t), 1 === e ? ["linear"] : ["exponential", e],
					["number", r]
				];
			for (const t of i) _d(n, t[0], t[1], !1);
			return void 0 === t.default ? n : ["case", ["==", ["typeof", r], "number"], n, cd(t.default)]
		}
		throw new Error(`Unknown property function type ${n}`)
	}

	function md(t) {
		"step" === t[0] && 3 === t.length && (t.push(0), t.push(t[3]))
	}

	function _d(t, e, i, n) {
		t.length > 3 && e === t[t.length - 2] || (n && 2 === t.length || t.push(e), t.push(i))
	}

	function yd(t, e) {
		return t.type ? t.type : e.expression.interpolated ? "exponential" : "interval"
	}

	function xd(t) {
		const e = ["concat"],
			i = /{([^{}]+)}/g;
		let n = 0;
		for (let r = i.exec(t); null !== r; r = i.exec(t)) {
			const s = t.slice(n, i.lastIndex - r[0].length);
			n = i.lastIndex, s.length > 0 && e.push(s), e.push(["get", r[1]])
		}
		if (1 === e.length) return t;
		if (n < t.length) e.push(t.slice(n));
		else if (2 === e.length) return ["to-string", e[1]];
		return e
	}
	class vd extends Error {
		constructor(t, e) {
			super(e), this.message = e, this.key = t
		}
	}
	var wd = vd;
	class bd {
		constructor(t, e = []) {
			this.parent = t, this.bindings = {};
			for (const [t, i] of e) this.bindings[t] = i
		}
		concat(t) {
			return new bd(this, t)
		}
		get(t) {
			if (this.bindings[t]) return this.bindings[t];
			if (this.parent) return this.parent.get(t);
			throw new Error(`${t} not found in scope.`)
		}
		has(t) {
			return !!this.bindings[t] || !!this.parent && this.parent.has(t)
		}
	}
	var Sd = bd;
	const Ed = {
			kind: "null"
		},
		Cd = {
			kind: "number"
		},
		Td = {
			kind: "string"
		},
		Pd = {
			kind: "boolean"
		},
		Rd = {
			kind: "color"
		},
		Fd = {
			kind: "object"
		},
		Md = {
			kind: "value"
		},
		Id = {
			kind: "collator"
		},
		Ld = {
			kind: "formatted"
		},
		kd = {
			kind: "resolvedImage"
		};

	function Ad(t, e) {
		return {
			kind: "array",
			itemType: t,
			N: e
		}
	}

	function Dd(t) {
		if ("array" === t.kind) {
			const e = Dd(t.itemType);
			return "number" == typeof t.N ? `array<${e}, ${t.N}>` : "value" === t.itemType.kind ? "array" : `array<${e}>`
		}
		return t.kind
	}
	const Od = [Ed, Cd, Td, Pd, Rd, Ld, Fd, Ad(Md), kd];

	function zd(t, e) {
		if ("error" === e.kind) return null;
		if ("array" === t.kind) {
			if ("array" === e.kind && (0 === e.N && "value" === e.itemType.kind || !zd(t.itemType, e.itemType)) && ("number" != typeof t.N || t.N === e.N)) return null
		} else {
			if (t.kind === e.kind) return null;
			if ("value" === t.kind)
				for (const t of Od)
					if (!zd(t, e)) return null
		}
		return `Expected ${Dd(t)} but found ${Dd(e)} instead.`
	}

	function Gd(t, e) {
		return e.some((e => e.kind === t.kind))
	}

	function Nd(t, e) {
		return e.some((e => "null" === e ? null === t : "array" === e ? Array.isArray(t) : "object" === e ? t && !Array.isArray(t) && "object" == typeof t : e === typeof t))
	}
	class jd {
		constructor(t, e, i) {
			this.sensitivity = t ? e ? "variant" : "case" : e ? "accent" : "base", this.locale = i, this.collator = new Intl.Collator(this.locale ? this.locale : [], {
				sensitivity: this.sensitivity,
				usage: "search"
			})
		}
		compare(t, e) {
			return this.collator.compare(t, e)
		}
		resolvedLocale() {
			return new Intl.Collator(this.locale ? this.locale : []).resolvedOptions().locale
		}
	}
	class Ud {
		constructor(t, e, i, n, r) {
			this.text = t.normalize ? t.normalize() : t, this.image = e, this.scale = i, this.fontStack = n, this.textColor = r
		}
	}
	class Bd {
		constructor(t) {
			this.sections = t
		}
		static fromString(t) {
			return new Bd([new Ud(t, null, null, null, null)])
		}
		isEmpty() {
			return 0 === this.sections.length || !this.sections.some((t => 0 !== t.text.length || t.image && 0 !== t.image.name.length))
		}
		static factory(t) {
			return t instanceof Bd ? t : Bd.fromString(t)
		}
		toString() {
			return 0 === this.sections.length ? "" : this.sections.map((t => t.text)).join("")
		}
		serialize() {
			const t = ["format"];
			for (const e of this.sections) {
				if (e.image) {
					t.push(["image", e.image.name]);
					continue
				}
				t.push(e.text);
				const i = {};
				e.fontStack && (i["text-font"] = ["literal", e.fontStack.split(",")]), e.scale && (i["font-scale"] = e.scale), e.textColor && (i["text-color"] = ["rgba"].concat(e.textColor.toArray())), t.push(i)
			}
			return t
		}
	}
	class $d {
		constructor(t) {
			this.name = t.name, this.available = t.available
		}
		toString() {
			return this.name
		}
		static fromString(t) {
			return t ? new $d({
				name: t,
				available: !1
			}) : null
		}
		serialize() {
			return ["image", this.name]
		}
	}

	function Vd(t, e, i, n) {
		if (!("number" == typeof t && t >= 0 && t <= 255 && "number" == typeof e && e >= 0 && e <= 255 && "number" == typeof i && i >= 0 && i <= 255)) {
			return `Invalid rgba value [${("number" == typeof n ? [t, e, i, n] : [t, e, i]).join(", ")}]: 'r', 'g', and 'b' must be between 0 and 255.`
		}
		return void 0 === n || "number" == typeof n && n >= 0 && n <= 1 ? null : `Invalid rgba value [${[t, e, i, n].join(", ")}]: 'a' must be between 0 and 1.`
	}

	function Xd(t) {
		if (null === t) return !0;
		if ("string" == typeof t) return !0;
		if ("boolean" == typeof t) return !0;
		if ("number" == typeof t) return !0;
		if (t instanceof ud) return !0;
		if (t instanceof jd) return !0;
		if (t instanceof Bd) return !0;
		if (t instanceof $d) return !0;
		if (Array.isArray(t)) {
			for (const e of t)
				if (!Xd(e)) return !1;
			return !0
		}
		if ("object" == typeof t) {
			for (const e in t)
				if (!Xd(t[e])) return !1;
			return !0
		}
		return !1
	}

	function Wd(t) {
		if (null === t) return Ed;
		if ("string" == typeof t) return Td;
		if ("boolean" == typeof t) return Pd;
		if ("number" == typeof t) return Cd;
		if (t instanceof ud) return Rd;
		if (t instanceof jd) return Id;
		if (t instanceof Bd) return Ld;
		if (t instanceof $d) return kd;
		if (Array.isArray(t)) {
			const e = t.length;
			let i;
			for (const e of t) {
				const t = Wd(e);
				if (i) {
					if (i === t) continue;
					i = Md;
					break
				}
				i = t
			}
			return Ad(i || Md, e)
		}
		return Fd
	}

	function qd(t) {
		const e = typeof t;
		return null === t ? "" : "string" === e || "number" === e || "boolean" === e ? String(t) : t instanceof ud || t instanceof Bd || t instanceof $d ? t.toString() : JSON.stringify(t)
	}
	class Zd {
		constructor(t, e) {
			this.type = t, this.value = e
		}
		static parse(t, e) {
			if (2 !== t.length) return e.error(`'literal' expression requires exactly one argument, but found ${t.length - 1} instead.`);
			if (!Xd(t[1])) return e.error("invalid value");
			const i = t[1];
			let n = Wd(i);
			const r = e.expectedType;
			return "array" !== n.kind || 0 !== n.N || !r || "array" !== r.kind || "number" == typeof r.N && 0 !== r.N || (n = r), new Zd(n, i)
		}
		evaluate() {
			return this.value
		}
		eachChild() {}
		outputDefined() {
			return !0
		}
		serialize() {
			return "array" === this.type.kind || "object" === this.type.kind ? ["literal", this.value] : this.value instanceof ud ? ["rgba"].concat(this.value.toArray()) : this.value instanceof Bd ? this.value.serialize() : this.value
		}
	}
	var Yd = Zd;
	var Kd = class {
		constructor(t) {
			this.name = "ExpressionEvaluationError", this.message = t
		}
		toJSON() {
			return this.message
		}
	};
	const Hd = {
		string: Td,
		number: Cd,
		boolean: Pd,
		object: Fd
	};
	class Jd {
		constructor(t, e) {
			this.type = t, this.args = e
		}
		static parse(t, e) {
			if (t.length < 2) return e.error("Expected at least one argument.");
			let i, n = 1;
			const r = t[0];
			if ("array" === r) {
				let r, s;
				if (t.length > 2) {
					const i = t[1];
					if ("string" != typeof i || !(i in Hd) || "object" === i) return e.error('The item type argument of "array" must be one of string, number, boolean', 1);
					r = Hd[i], n++
				} else r = Md;
				if (t.length > 3) {
					if (null !== t[2] && ("number" != typeof t[2] || t[2] < 0 || t[2] !== Math.floor(t[2]))) return e.error('The length argument to "array" must be a positive integer literal', 2);
					s = t[2], n++
				}
				i = Ad(r, s)
			} else i = Hd[r];
			const s = [];
			for (; n < t.length; n++) {
				const i = e.parse(t[n], n, Md);
				if (!i) return null;
				s.push(i)
			}
			return new Jd(i, s)
		}
		evaluate(t) {
			for (let e = 0; e < this.args.length; e++) {
				const i = this.args[e].evaluate(t);
				if (!zd(this.type, Wd(i))) return i;
				if (e === this.args.length - 1) throw new Kd(`Expected value to be of type ${Dd(this.type)}, but found ${Dd(Wd(i))} instead.`)
			}
			return null
		}
		eachChild(t) {
			this.args.forEach(t)
		}
		outputDefined() {
			return this.args.every((t => t.outputDefined()))
		}
		serialize() {
			const t = this.type,
				e = [t.kind];
			if ("array" === t.kind) {
				const i = t.itemType;
				if ("string" === i.kind || "number" === i.kind || "boolean" === i.kind) {
					e.push(i.kind);
					const n = t.N;
					("number" == typeof n || this.args.length > 1) && e.push(n)
				}
			}
			return e.concat(this.args.map((t => t.serialize())))
		}
	}
	var Qd = Jd;
	class tg {
		constructor(t) {
			this.type = Ld, this.sections = t
		}
		static parse(t, e) {
			if (t.length < 2) return e.error("Expected at least one argument.");
			const i = t[1];
			if (!Array.isArray(i) && "object" == typeof i) return e.error("First argument must be an image or text section.");
			const n = [];
			let r = !1;
			for (let i = 1; i <= t.length - 1; ++i) {
				const s = t[i];
				if (r && "object" == typeof s && !Array.isArray(s)) {
					r = !1;
					let t = null;
					if (s["font-scale"] && (t = e.parse(s["font-scale"], 1, Cd), !t)) return null;
					let i = null;
					if (s["text-font"] && (i = e.parse(s["text-font"], 1, Ad(Td)), !i)) return null;
					let o = null;
					if (s["text-color"] && (o = e.parse(s["text-color"], 1, Rd), !o)) return null;
					const a = n[n.length - 1];
					a.scale = t, a.font = i, a.textColor = o
				} else {
					const s = e.parse(t[i], 1, Md);
					if (!s) return null;
					const o = s.type.kind;
					if ("string" !== o && "value" !== o && "null" !== o && "resolvedImage" !== o) return e.error("Formatted text type must be 'string', 'value', 'image' or 'null'.");
					r = !0, n.push({
						content: s,
						scale: null,
						font: null,
						textColor: null
					})
				}
			}
			return new tg(n)
		}
		evaluate(t) {
			return new Bd(this.sections.map((e => {
				const i = e.content.evaluate(t);
				return Wd(i) === kd ? new Ud("", i, null, null, null) : new Ud(qd(i), null, e.scale ? e.scale.evaluate(t) : null, e.font ? e.font.evaluate(t).join(",") : null, e.textColor ? e.textColor.evaluate(t) : null)
			})))
		}
		eachChild(t) {
			for (const e of this.sections) t(e.content), e.scale && t(e.scale), e.font && t(e.font), e.textColor && t(e.textColor)
		}
		outputDefined() {
			return !1
		}
		serialize() {
			const t = ["format"];
			for (const e of this.sections) {
				t.push(e.content.serialize());
				const i = {};
				e.scale && (i["font-scale"] = e.scale.serialize()), e.font && (i["text-font"] = e.font.serialize()), e.textColor && (i["text-color"] = e.textColor.serialize()), t.push(i)
			}
			return t
		}
	}
	class eg {
		constructor(t) {
			this.type = kd, this.input = t
		}
		static parse(t, e) {
			if (2 !== t.length) return e.error("Expected two arguments.");
			const i = e.parse(t[1], 1, Td);
			return i ? new eg(i) : e.error("No image name provided.")
		}
		evaluate(t) {
			const e = this.input.evaluate(t),
				i = $d.fromString(e);
			return i && t.availableImages && (i.available = t.availableImages.indexOf(e) > -1), i
		}
		eachChild(t) {
			t(this.input)
		}
		outputDefined() {
			return !1
		}
		serialize() {
			return ["image", this.input.serialize()]
		}
	}
	const ig = {
		"to-boolean": Pd,
		"to-color": Rd,
		"to-number": Cd,
		"to-string": Td
	};
	class ng {
		constructor(t, e) {
			this.type = t, this.args = e
		}
		static parse(t, e) {
			if (t.length < 2) return e.error("Expected at least one argument.");
			const i = t[0];
			if (("to-boolean" === i || "to-string" === i) && 2 !== t.length) return e.error("Expected one argument.");
			const n = ig[i],
				r = [];
			for (let i = 1; i < t.length; i++) {
				const n = e.parse(t[i], i, Md);
				if (!n) return null;
				r.push(n)
			}
			return new ng(n, r)
		}
		evaluate(t) {
			if ("boolean" === this.type.kind) return Boolean(this.args[0].evaluate(t));
			if ("color" === this.type.kind) {
				let e, i;
				for (const n of this.args) {
					if (e = n.evaluate(t), i = null, e instanceof ud) return e;
					if ("string" == typeof e) {
						const i = t.parseColor(e);
						if (i) return i
					} else if (Array.isArray(e) && (i = e.length < 3 || e.length > 4 ? `Invalid rbga value ${JSON.stringify(e)}: expected an array containing either three or four numeric values.` : Vd(e[0], e[1], e[2], e[3]), !i)) return new ud(e[0] / 255, e[1] / 255, e[2] / 255, e[3])
				}
				throw new Kd(i || `Could not parse color from value '${"string" == typeof e ? e : String(JSON.stringify(e))}'`)
			}
			if ("number" === this.type.kind) {
				let e = null;
				for (const i of this.args) {
					if (e = i.evaluate(t), null === e) return 0;
					const n = Number(e);
					if (!isNaN(n)) return n
				}
				throw new Kd(`Could not convert ${JSON.stringify(e)} to number.`)
			}
			return "formatted" === this.type.kind ? Bd.fromString(qd(this.args[0].evaluate(t))) : "resolvedImage" === this.type.kind ? $d.fromString(qd(this.args[0].evaluate(t))) : qd(this.args[0].evaluate(t))
		}
		eachChild(t) {
			this.args.forEach(t)
		}
		outputDefined() {
			return this.args.every((t => t.outputDefined()))
		}
		serialize() {
			if ("formatted" === this.type.kind) return new tg([{
				content: this.args[0],
				scale: null,
				font: null,
				textColor: null
			}]).serialize();
			if ("resolvedImage" === this.type.kind) return new eg(this.args[0]).serialize();
			const t = [`to-${this.type.kind}`];
			return this.eachChild((e => {
				t.push(e.serialize())
			})), t
		}
	}
	var rg = ng;
	const sg = ["Unknown", "Point", "LineString", "Polygon"];
	var og = class {
		constructor() {
			this.globals = null, this.feature = null, this.featureState = null, this.formattedSection = null, this._parseColorCache = {}, this.availableImages = null, this.canonical = null, this.featureTileCoord = null, this.featureDistanceData = null
		}
		id() {
			return this.feature && void 0 !== this.feature.id ? this.feature.id : null
		}
		geometryType() {
			return this.feature ? "number" == typeof this.feature.type ? sg[this.feature.type] : this.feature.type : null
		}
		geometry() {
			return this.feature && "geometry" in this.feature ? this.feature.geometry : null
		}
		canonicalID() {
			return this.canonical
		}
		properties() {
			return this.feature && this.feature.properties || {}
		}
		distanceFromCenter() {
			if (this.featureTileCoord && this.featureDistanceData) {
				const t = this.featureDistanceData.center,
					e = this.featureDistanceData.scale,
					{
						x: i,
						y: n
					} = this.featureTileCoord,
					r = i * e - t[0],
					s = n * e - t[1];
				return this.featureDistanceData.bearing[0] * r + this.featureDistanceData.bearing[1] * s
			}
			return 0
		}
		parseColor(t) {
			let e = this._parseColorCache[t];
			return e || (e = this._parseColorCache[t] = ud.parse(t)), e
		}
	};
	class ag {
		constructor(t, e, i, n) {
			this.name = t, this.type = e, this._evaluate = i, this.args = n
		}
		evaluate(t) {
			return this._evaluate(t, this.args)
		}
		eachChild(t) {
			this.args.forEach(t)
		}
		outputDefined() {
			return !1
		}
		serialize() {
			return [this.name].concat(this.args.map((t => t.serialize())))
		}
		static parse(t, e) {
			const i = t[0],
				n = ag.definitions[i];
			if (!n) return e.error(`Unknown expression "${i}". If you wanted a literal array, use ["literal", [...]].`, 0);
			const r = Array.isArray(n) ? n[0] : n.type,
				s = Array.isArray(n) ? [
					[n[1], n[2]]
				] : n.overloads,
				o = s.filter((([e]) => !Array.isArray(e) || e.length === t.length - 1));
			let a = null;
			for (const [n, s] of o) {
				a = new Og(e.registry, e.path, null, e.scope);
				const o = [];
				let l = !1;
				for (let e = 1; e < t.length; e++) {
					const i = t[e],
						r = Array.isArray(n) ? n[e - 1] : n.type,
						s = a.parse(i, 1 + o.length, r);
					if (!s) {
						l = !0;
						break
					}
					o.push(s)
				}
				if (!l)
					if (Array.isArray(n) && n.length !== o.length) a.error(`Expected ${n.length} arguments, but found ${o.length} instead.`);
					else {
						for (let t = 0; t < o.length; t++) {
							const e = Array.isArray(n) ? n[t] : n.type,
								i = o[t];
							a.concat(t + 1).checkSubtype(e, i.type)
						}
						if (0 === a.errors.length) return new ag(i, r, s, o)
					}
			}
			if (1 === o.length) e.errors.push(...a.errors);
			else {
				const i = (o.length ? o : s).map((([t]) => {
						return e = t, Array.isArray(e) ? `(${e.map(Dd).join(", ")})` : `(${Dd(e.type)}...)`;
						var e
					})).join(" | "),
					n = [];
				for (let i = 1; i < t.length; i++) {
					const r = e.parse(t[i], 1 + n.length);
					if (!r) return null;
					n.push(Dd(r.type))
				}
				e.error(`Expected arguments of type ${i}, but found (${n.join(", ")}) instead.`)
			}
			return null
		}
		static register(t, e) {
			ag.definitions = e;
			for (const i in e) t[i] = ag
		}
	}
	var lg = ag;
	class hg {
		constructor(t, e, i) {
			this.type = Id, this.locale = i, this.caseSensitive = t, this.diacriticSensitive = e
		}
		static parse(t, e) {
			if (2 !== t.length) return e.error("Expected one argument.");
			const i = t[1];
			if ("object" != typeof i || Array.isArray(i)) return e.error("Collator options argument must be an object.");
			const n = e.parse(void 0 !== i["case-sensitive"] && i["case-sensitive"], 1, Pd);
			if (!n) return null;
			const r = e.parse(void 0 !== i["diacritic-sensitive"] && i["diacritic-sensitive"], 1, Pd);
			if (!r) return null;
			let s = null;
			return i.locale && (s = e.parse(i.locale, 1, Td), !s) ? null : new hg(n, r, s)
		}
		evaluate(t) {
			return new jd(this.caseSensitive.evaluate(t), this.diacriticSensitive.evaluate(t), this.locale ? this.locale.evaluate(t) : null)
		}
		eachChild(t) {
			t(this.caseSensitive), t(this.diacriticSensitive), this.locale && t(this.locale)
		}
		outputDefined() {
			return !1
		}
		serialize() {
			const t = {};
			return t["case-sensitive"] = this.caseSensitive.serialize(), t["diacritic-sensitive"] = this.diacriticSensitive.serialize(), this.locale && (t.locale = this.locale.serialize()), ["collator", t]
		}
	}
	const ug = 8192;

	function cg(t, e) {
		t[0] = Math.min(t[0], e[0]), t[1] = Math.min(t[1], e[1]), t[2] = Math.max(t[2], e[0]), t[3] = Math.max(t[3], e[1])
	}

	function dg(t, e) {
		return !(t[0] <= e[0]) && (!(t[2] >= e[2]) && (!(t[1] <= e[1]) && !(t[3] >= e[3])))
	}

	function gg(t, e) {
		const i = (180 + t[0]) / 360;
		const n = (r = t[1], (180 - 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + r * Math.PI / 360))) / 360);
		var r;
		const s = Math.pow(2, e.z);
		return [Math.round(i * s * ug), Math.round(n * s * ug)]
	}

	function pg(t, e, i) {
		const n = t[0] - e[0],
			r = t[1] - e[1],
			s = t[0] - i[0],
			o = t[1] - i[1];
		return n * o - s * r == 0 && n * s <= 0 && r * o <= 0
	}

	function fg(t, e, i) {
		return e[1] > t[1] != i[1] > t[1] && t[0] < (i[0] - e[0]) * (t[1] - e[1]) / (i[1] - e[1]) + e[0]
	}

	function mg(t, e) {
		let i = !1;
		for (let n = 0, r = e.length; n < r; n++) {
			const r = e[n];
			for (let e = 0, n = r.length; e < n - 1; e++) {
				if (pg(t, r[e], r[e + 1])) return !1;
				fg(t, r[e], r[e + 1]) && (i = !i)
			}
		}
		return i
	}

	function _g(t, e) {
		for (let i = 0; i < e.length; i++)
			if (mg(t, e[i])) return !0;
		return !1
	}

	function yg(t, e, i, n) {
		const r = t[0] - i[0],
			s = t[1] - i[1],
			o = e[0] - i[0],
			a = e[1] - i[1],
			l = n[0] - i[0],
			h = n[1] - i[1],
			u = r * h - l * s,
			c = o * h - l * a;
		return u > 0 && c < 0 || u < 0 && c > 0
	}

	function xg(t, e, i, n) {
		const r = [e[0] - t[0], e[1] - t[1]],
			s = [n[0] - i[0], n[1] - i[1]];
		return 0 != (o = s)[0] * (a = r)[1] - o[1] * a[0] && !(!yg(t, e, i, n) || !yg(i, n, t, e));
		var o, a
	}

	function vg(t, e, i) {
		for (const n of i)
			for (let i = 0; i < n.length - 1; ++i)
				if (xg(t, e, n[i], n[i + 1])) return !0;
		return !1
	}

	function wg(t, e) {
		for (let i = 0; i < t.length; ++i)
			if (!mg(t[i], e)) return !1;
		for (let i = 0; i < t.length - 1; ++i)
			if (vg(t[i], t[i + 1], e)) return !1;
		return !0
	}

	function bg(t, e) {
		for (let i = 0; i < e.length; i++)
			if (wg(t, e[i])) return !0;
		return !1
	}

	function Sg(t, e, i) {
		const n = [];
		for (let r = 0; r < t.length; r++) {
			const s = [];
			for (let n = 0; n < t[r].length; n++) {
				const o = gg(t[r][n], i);
				cg(e, o), s.push(o)
			}
			n.push(s)
		}
		return n
	}

	function Eg(t, e, i) {
		const n = [];
		for (let r = 0; r < t.length; r++) {
			const s = Sg(t[r], e, i);
			n.push(s)
		}
		return n
	}

	function Cg(t, e, i, n) {
		if (t[0] < i[0] || t[0] > i[2]) {
			const e = .5 * n;
			let r = t[0] - i[0] > e ? -n : i[0] - t[0] > e ? n : 0;
			0 === r && (r = t[0] - i[2] > e ? -n : i[2] - t[0] > e ? n : 0), t[0] += r
		}
		cg(e, t)
	}

	function Tg(t, e, i, n) {
		const r = Math.pow(2, n.z) * ug,
			s = [n.x * ug, n.y * ug],
			o = [];
		if (!t) return o;
		for (const n of t)
			for (const t of n) {
				const n = [t.x + s[0], t.y + s[1]];
				Cg(n, e, i, r), o.push(n)
			}
		return o
	}

	function Pg(t, e, i, n) {
		const r = Math.pow(2, n.z) * ug,
			s = [n.x * ug, n.y * ug],
			o = [];
		if (!t) return o;
		for (const i of t) {
			const t = [];
			for (const n of i) {
				const i = [n.x + s[0], n.y + s[1]];
				cg(e, i), t.push(i)
			}
			o.push(t)
		}
		if (e[2] - e[0] <= r / 2) {
			! function(t) {
				t[0] = t[1] = 1 / 0, t[2] = t[3] = -1 / 0
			}(e);
			for (const t of o)
				for (const n of t) Cg(n, e, i, r)
		}
		return o
	}
	class Rg {
		constructor(t, e) {
			this.type = Pd, this.geojson = t, this.geometries = e
		}
		static parse(t, e) {
			if (2 !== t.length) return e.error(`'within' expression requires exactly one argument, but found ${t.length - 1} instead.`);
			if (Xd(t[1])) {
				const e = t[1];
				if ("FeatureCollection" === e.type)
					for (let t = 0; t < e.features.length; ++t) {
						const i = e.features[t].geometry.type;
						if ("Polygon" === i || "MultiPolygon" === i) return new Rg(e, e.features[t].geometry)
					} else if ("Feature" === e.type) {
						const t = e.geometry.type;
						if ("Polygon" === t || "MultiPolygon" === t) return new Rg(e, e.geometry)
					} else if ("Polygon" === e.type || "MultiPolygon" === e.type) return new Rg(e, e)
			}
			return e.error("'within' expression requires valid geojson object that contains polygon geometry type.")
		}
		evaluate(t) {
			if (null != t.geometry() && null != t.canonicalID()) {
				if ("Point" === t.geometryType()) return function(t, e) {
					const i = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
						n = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
						r = t.canonicalID();
					if (!r) return !1;
					if ("Polygon" === e.type) {
						const s = Sg(e.coordinates, n, r),
							o = Tg(t.geometry(), i, n, r);
						if (!dg(i, n)) return !1;
						for (const t of o)
							if (!mg(t, s)) return !1
					}
					if ("MultiPolygon" === e.type) {
						const s = Eg(e.coordinates, n, r),
							o = Tg(t.geometry(), i, n, r);
						if (!dg(i, n)) return !1;
						for (const t of o)
							if (!_g(t, s)) return !1
					}
					return !0
				}(t, this.geometries);
				if ("LineString" === t.geometryType()) return function(t, e) {
					const i = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
						n = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
						r = t.canonicalID();
					if (!r) return !1;
					if ("Polygon" === e.type) {
						const s = Sg(e.coordinates, n, r),
							o = Pg(t.geometry(), i, n, r);
						if (!dg(i, n)) return !1;
						for (const t of o)
							if (!wg(t, s)) return !1
					}
					if ("MultiPolygon" === e.type) {
						const s = Eg(e.coordinates, n, r),
							o = Pg(t.geometry(), i, n, r);
						if (!dg(i, n)) return !1;
						for (const t of o)
							if (!bg(t, s)) return !1
					}
					return !0
				}(t, this.geometries)
			}
			return !1
		}
		eachChild() {}
		outputDefined() {
			return !0
		}
		serialize() {
			return ["within", this.geojson]
		}
	}
	var Fg = Rg;

	function Mg(t) {
		if (t instanceof lg) {
			if ("get" === t.name && 1 === t.args.length) return !1;
			if ("feature-state" === t.name) return !1;
			if ("has" === t.name && 1 === t.args.length) return !1;
			if ("properties" === t.name || "geometry-type" === t.name || "id" === t.name) return !1;
			if (/^filter-/.test(t.name)) return !1
		}
		if (t instanceof Fg) return !1;
		let e = !0;
		return t.eachChild((t => {
			e && !Mg(t) && (e = !1)
		})), e
	}

	function Ig(t) {
		if (t instanceof lg && "feature-state" === t.name) return !1;
		let e = !0;
		return t.eachChild((t => {
			e && !Ig(t) && (e = !1)
		})), e
	}

	function Lg(t, e) {
		if (t instanceof lg && e.indexOf(t.name) >= 0) return !1;
		let i = !0;
		return t.eachChild((t => {
			i && !Lg(t, e) && (i = !1)
		})), i
	}
	class kg {
		constructor(t, e) {
			this.type = e.type, this.name = t, this.boundExpression = e
		}
		static parse(t, e) {
			if (2 !== t.length || "string" != typeof t[1]) return e.error("'var' expression requires exactly one string literal argument.");
			const i = t[1];
			return e.scope.has(i) ? new kg(i, e.scope.get(i)) : e.error(`Unknown variable "${i}". Make sure "${i}" has been bound in an enclosing "let" expression before using it.`, 1)
		}
		evaluate(t) {
			return this.boundExpression.evaluate(t)
		}
		eachChild() {}
		outputDefined() {
			return !1
		}
		serialize() {
			return ["var", this.name]
		}
	}
	var Ag = kg;
	class Dg {
		constructor(t, e = [], i, n = new Sd, r = []) {
			this.registry = t, this.path = e, this.key = e.map((t => `[${t}]`)).join(""), this.scope = n, this.errors = r, this.expectedType = i
		}
		parse(t, e, i, n, r = {}) {
			return e ? this.concat(e, i, n)._parse(t, r) : this._parse(t, r)
		}
		_parse(t, e) {
			function i(t, e, i) {
				return "assert" === i ? new Qd(e, [t]) : "coerce" === i ? new rg(e, [t]) : t
			}
			if (null !== t && "string" != typeof t && "boolean" != typeof t && "number" != typeof t || (t = ["literal", t]), Array.isArray(t)) {
				if (0 === t.length) return this.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].');
				const n = t[0];
				if ("string" != typeof n) return this.error(`Expression name must be a string, but found ${typeof n} instead. If you wanted a literal array, use ["literal", [...]].`, 0), null;
				const r = this.registry[n];
				if (r) {
					let n = r.parse(t, this);
					if (!n) return null;
					if (this.expectedType) {
						const t = this.expectedType,
							r = n.type;
						if ("string" !== t.kind && "number" !== t.kind && "boolean" !== t.kind && "object" !== t.kind && "array" !== t.kind || "value" !== r.kind)
							if ("color" !== t.kind && "formatted" !== t.kind && "resolvedImage" !== t.kind || "value" !== r.kind && "string" !== r.kind) {
								if (this.checkSubtype(t, r)) return null
							} else n = i(n, t, e.typeAnnotation || "coerce");
						else n = i(n, t, e.typeAnnotation || "assert")
					}
					if (!(n instanceof Yd) && "resolvedImage" !== n.type.kind && zg(n)) {
						const t = new og;
						try {
							n = new Yd(n.type, n.evaluate(t))
						} catch (t) {
							return this.error(t.message), null
						}
					}
					return n
				}
				return this.error(`Unknown expression "${n}". If you wanted a literal array, use ["literal", [...]].`, 0)
			}
			return void 0 === t ? this.error("'undefined' value invalid. Use null instead.") : "object" == typeof t ? this.error('Bare objects invalid. Use ["literal", {...}] instead.') : this.error(`Expected an array, but found ${typeof t} instead.`)
		}
		concat(t, e, i) {
			const n = "number" == typeof t ? this.path.concat(t) : this.path,
				r = i ? this.scope.concat(i) : this.scope;
			return new Dg(this.registry, n, e || null, r, this.errors)
		}
		error(t, ...e) {
			const i = `${this.key}${e.map((t => `[${t}]`)).join("")}`;
			this.errors.push(new wd(i, t))
		}
		checkSubtype(t, e) {
			const i = zd(t, e);
			return i && this.error(i), i
		}
	}
	var Og = Dg;

	function zg(t) {
		if (t instanceof Ag) return zg(t.boundExpression);
		if (t instanceof lg && "error" === t.name) return !1;
		if (t instanceof hg) return !1;
		if (t instanceof Fg) return !1;
		const e = t instanceof rg || t instanceof Qd;
		let i = !0;
		return t.eachChild((t => {
			i = e ? i && zg(t) : i && t instanceof Yd
		})), !!i && (Mg(t) && Lg(t, ["zoom", "heatmap-density", "line-progress", "sky-radial-progress", "accumulated", "is-supported-script", "pitch", "distance-from-center"]))
	}

	function Gg(t, e) {
		const i = t.length - 1;
		let n, r, s = 0,
			o = i,
			a = 0;
		for (; s <= o;)
			if (a = Math.floor((s + o) / 2), n = t[a], r = t[a + 1], n <= e) {
				if (a === i || e < r) return a;
				s = a + 1
			} else {
				if (!(n > e)) throw new Kd("Input is not a number.");
				o = a - 1
			} return 0
	}
	class Ng {
		constructor(t, e, i) {
			this.type = t, this.input = e, this.labels = [], this.outputs = [];
			for (const [t, e] of i) this.labels.push(t), this.outputs.push(e)
		}
		static parse(t, e) {
			if (t.length - 1 < 4) return e.error(`Expected at least 4 arguments, but found only ${t.length - 1}.`);
			if ((t.length - 1) % 2 != 0) return e.error("Expected an even number of arguments.");
			const i = e.parse(t[1], 1, Cd);
			if (!i) return null;
			const n = [];
			let r = null;
			e.expectedType && "value" !== e.expectedType.kind && (r = e.expectedType);
			for (let i = 1; i < t.length; i += 2) {
				const s = 1 === i ? -1 / 0 : t[i],
					o = t[i + 1],
					a = i,
					l = i + 1;
				if ("number" != typeof s) return e.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.', a);
				if (n.length && n[n.length - 1][0] >= s) return e.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.', a);
				const h = e.parse(o, l, r);
				if (!h) return null;
				r = r || h.type, n.push([s, h])
			}
			return new Ng(r, i, n)
		}
		evaluate(t) {
			const e = this.labels,
				i = this.outputs;
			if (1 === e.length) return i[0].evaluate(t);
			const n = this.input.evaluate(t);
			if (n <= e[0]) return i[0].evaluate(t);
			const r = e.length;
			if (n >= e[r - 1]) return i[r - 1].evaluate(t);
			return i[Gg(e, n)].evaluate(t)
		}
		eachChild(t) {
			t(this.input);
			for (const e of this.outputs) t(e)
		}
		outputDefined() {
			return this.outputs.every((t => t.outputDefined()))
		}
		serialize() {
			const t = ["step", this.input.serialize()];
			for (let e = 0; e < this.labels.length; e++) e > 0 && t.push(this.labels[e]), t.push(this.outputs[e].serialize());
			return t
		}
	}
	var jg = Ng,
		Ug = Bg;

	function Bg(t, e, i, n) {
		this.cx = 3 * t, this.bx = 3 * (i - t) - this.cx, this.ax = 1 - this.cx - this.bx, this.cy = 3 * e, this.by = 3 * (n - e) - this.cy, this.ay = 1 - this.cy - this.by, this.p1x = t, this.p1y = n, this.p2x = i, this.p2y = n
	}
	Bg.prototype.sampleCurveX = function(t) {
		return ((this.ax * t + this.bx) * t + this.cx) * t
	}, Bg.prototype.sampleCurveY = function(t) {
		return ((this.ay * t + this.by) * t + this.cy) * t
	}, Bg.prototype.sampleCurveDerivativeX = function(t) {
		return (3 * this.ax * t + 2 * this.bx) * t + this.cx
	}, Bg.prototype.solveCurveX = function(t, e) {
		var i, n, r, s, o;
		for (void 0 === e && (e = 1e-6), r = t, o = 0; o < 8; o++) {
			if (s = this.sampleCurveX(r) - t, Math.abs(s) < e) return r;
			var a = this.sampleCurveDerivativeX(r);
			if (Math.abs(a) < 1e-6) break;
			r -= s / a
		}
		if ((r = t) < (i = 0)) return i;
		if (r > (n = 1)) return n;
		for (; i < n;) {
			if (s = this.sampleCurveX(r), Math.abs(s - t) < e) return r;
			t > s ? i = r : n = r, r = .5 * (n - i) + i
		}
		return r
	}, Bg.prototype.solve = function(t, e) {
		return this.sampleCurveY(this.solveCurveX(t, e))
	};
	var $g = ed(Ug);

	function Vg(t, e, i) {
		return t * (1 - i) + e * i
	}
	var Xg = Object.freeze({
		__proto__: null,
		number: Vg,
		color: function(t, e, i) {
			return new ud(Vg(t.r, e.r, i), Vg(t.g, e.g, i), Vg(t.b, e.b, i), Vg(t.a, e.a, i))
		},
		array: function(t, e, i) {
			return t.map(((t, n) => Vg(t, e[n], i)))
		}
	});
	const Wg = .95047,
		qg = 1,
		Zg = 1.08883,
		Yg = 4 / 29,
		Kg = 6 / 29,
		Hg = 3 * Kg * Kg,
		Jg = Kg * Kg * Kg,
		Qg = Math.PI / 180,
		tp = 180 / Math.PI;

	function ep(t) {
		return t > Jg ? Math.pow(t, 1 / 3) : t / Hg + Yg
	}

	function ip(t) {
		return t > Kg ? t * t * t : Hg * (t - Yg)
	}

	function np(t) {
		return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
	}

	function rp(t) {
		return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
	}

	function sp(t) {
		const e = rp(t.r),
			i = rp(t.g),
			n = rp(t.b),
			r = ep((.4124564 * e + .3575761 * i + .1804375 * n) / Wg),
			s = ep((.2126729 * e + .7151522 * i + .072175 * n) / qg);
		return {
			l: 116 * s - 16,
			a: 500 * (r - s),
			b: 200 * (s - ep((.0193339 * e + .119192 * i + .9503041 * n) / Zg)),
			alpha: t.a
		}
	}

	function op(t) {
		let e = (t.l + 16) / 116,
			i = isNaN(t.a) ? e : e + t.a / 500,
			n = isNaN(t.b) ? e : e - t.b / 200;
		return e = qg * ip(e), i = Wg * ip(i), n = Zg * ip(n), new ud(np(3.2404542 * i - 1.5371385 * e - .4985314 * n), np(-.969266 * i + 1.8760108 * e + .041556 * n), np(.0556434 * i - .2040259 * e + 1.0572252 * n), t.alpha)
	}

	function ap(t, e, i) {
		const n = e - t;
		return t + i * (n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n)
	}
	const lp = {
			forward: sp,
			reverse: op,
			interpolate: function(t, e, i) {
				return {
					l: Vg(t.l, e.l, i),
					a: Vg(t.a, e.a, i),
					b: Vg(t.b, e.b, i),
					alpha: Vg(t.alpha, e.alpha, i)
				}
			}
		},
		hp = {
			forward: function(t) {
				const {
					l: e,
					a: i,
					b: n
				} = sp(t), r = Math.atan2(n, i) * tp;
				return {
					h: r < 0 ? r + 360 : r,
					c: Math.sqrt(i * i + n * n),
					l: e,
					alpha: t.a
				}
			},
			reverse: function(t) {
				const e = t.h * Qg,
					i = t.c;
				return op({
					l: t.l,
					a: Math.cos(e) * i,
					b: Math.sin(e) * i,
					alpha: t.alpha
				})
			},
			interpolate: function(t, e, i) {
				return {
					h: ap(t.h, e.h, i),
					c: Vg(t.c, e.c, i),
					l: Vg(t.l, e.l, i),
					alpha: Vg(t.alpha, e.alpha, i)
				}
			}
		};
	class up {
		constructor(t, e, i, n, r) {
			this.type = t, this.operator = e, this.interpolation = i, this.input = n, this.labels = [], this.outputs = [];
			for (const [t, e] of r) this.labels.push(t), this.outputs.push(e)
		}
		static interpolationFactor(t, e, i, n) {
			let r = 0;
			if ("exponential" === t.name) r = cp(e, t.base, i, n);
			else if ("linear" === t.name) r = cp(e, 1, i, n);
			else if ("cubic-bezier" === t.name) {
				const s = t.controlPoints;
				r = new $g(s[0], s[1], s[2], s[3]).solve(cp(e, 1, i, n))
			}
			return r
		}
		static parse(t, e) {
			let [i, n, r, ...s] = t;
			if (!Array.isArray(n) || 0 === n.length) return e.error("Expected an interpolation type expression.", 1);
			if ("linear" === n[0]) n = {
				name: "linear"
			};
			else if ("exponential" === n[0]) {
				const t = n[1];
				if ("number" != typeof t) return e.error("Exponential interpolation requires a numeric base.", 1, 1);
				n = {
					name: "exponential",
					base: t
				}
			} else {
				if ("cubic-bezier" !== n[0]) return e.error(`Unknown interpolation type ${String(n[0])}`, 1, 0);
				{
					const t = n.slice(1);
					if (4 !== t.length || t.some((t => "number" != typeof t || t < 0 || t > 1))) return e.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.", 1);
					n = {
						name: "cubic-bezier",
						controlPoints: t
					}
				}
			}
			if (t.length - 1 < 4) return e.error(`Expected at least 4 arguments, but found only ${t.length - 1}.`);
			if ((t.length - 1) % 2 != 0) return e.error("Expected an even number of arguments.");
			if (r = e.parse(r, 2, Cd), !r) return null;
			const o = [];
			let a = null;
			"interpolate-hcl" === i || "interpolate-lab" === i ? a = Rd : e.expectedType && "value" !== e.expectedType.kind && (a = e.expectedType);
			for (let t = 0; t < s.length; t += 2) {
				const i = s[t],
					n = s[t + 1],
					r = t + 3,
					l = t + 4;
				if ("number" != typeof i) return e.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.', r);
				if (o.length && o[o.length - 1][0] >= i) return e.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.', r);
				const h = e.parse(n, l, a);
				if (!h) return null;
				a = a || h.type, o.push([i, h])
			}
			return "number" === a.kind || "color" === a.kind || "array" === a.kind && "number" === a.itemType.kind && "number" == typeof a.N ? new up(a, i, n, r, o) : e.error(`Type ${Dd(a)} is not interpolatable.`)
		}
		evaluate(t) {
			const e = this.labels,
				i = this.outputs;
			if (1 === e.length) return i[0].evaluate(t);
			const n = this.input.evaluate(t);
			if (n <= e[0]) return i[0].evaluate(t);
			const r = e.length;
			if (n >= e[r - 1]) return i[r - 1].evaluate(t);
			const s = Gg(e, n),
				o = e[s],
				a = e[s + 1],
				l = up.interpolationFactor(this.interpolation, n, o, a),
				h = i[s].evaluate(t),
				u = i[s + 1].evaluate(t);
			return "interpolate" === this.operator ? Xg[this.type.kind.toLowerCase()](h, u, l) : "interpolate-hcl" === this.operator ? hp.reverse(hp.interpolate(hp.forward(h), hp.forward(u), l)) : lp.reverse(lp.interpolate(lp.forward(h), lp.forward(u), l))
		}
		eachChild(t) {
			t(this.input);
			for (const e of this.outputs) t(e)
		}
		outputDefined() {
			return this.outputs.every((t => t.outputDefined()))
		}
		serialize() {
			let t;
			t = "linear" === this.interpolation.name ? ["linear"] : "exponential" === this.interpolation.name ? 1 === this.interpolation.base ? ["linear"] : ["exponential", this.interpolation.base] : ["cubic-bezier"].concat(this.interpolation.controlPoints);
			const e = [this.operator, t, this.input.serialize()];
			for (let t = 0; t < this.labels.length; t++) e.push(this.labels[t], this.outputs[t].serialize());
			return e
		}
	}

	function cp(t, e, i, n) {
		const r = n - i,
			s = t - i;
		return 0 === r ? 0 : 1 === e ? s / r : (Math.pow(e, s) - 1) / (Math.pow(e, r) - 1)
	}
	var dp = up;
	class gp {
		constructor(t, e) {
			this.type = t, this.args = e
		}
		static parse(t, e) {
			if (t.length < 2) return e.error("Expectected at least one argument.");
			let i = null;
			const n = e.expectedType;
			n && "value" !== n.kind && (i = n);
			const r = [];
			for (const n of t.slice(1)) {
				const t = e.parse(n, 1 + r.length, i, void 0, {
					typeAnnotation: "omit"
				});
				if (!t) return null;
				i = i || t.type, r.push(t)
			}
			const s = n && r.some((t => zd(n, t.type)));
			return new gp(s ? Md : i, r)
		}
		evaluate(t) {
			let e, i = null,
				n = 0;
			for (const r of this.args) {
				if (n++, i = r.evaluate(t), i && i instanceof $d && !i.available && (e || (e = i), i = null, n === this.args.length)) return e;
				if (null !== i) break
			}
			return i
		}
		eachChild(t) {
			this.args.forEach(t)
		}
		outputDefined() {
			return this.args.every((t => t.outputDefined()))
		}
		serialize() {
			const t = ["coalesce"];
			return this.eachChild((e => {
				t.push(e.serialize())
			})), t
		}
	}
	var pp = gp;
	class fp {
		constructor(t, e) {
			this.type = e.type, this.bindings = [].concat(t), this.result = e
		}
		evaluate(t) {
			return this.result.evaluate(t)
		}
		eachChild(t) {
			for (const e of this.bindings) t(e[1]);
			t(this.result)
		}
		static parse(t, e) {
			if (t.length < 4) return e.error(`Expected at least 3 arguments, but found ${t.length - 1} instead.`);
			const i = [];
			for (let n = 1; n < t.length - 1; n += 2) {
				const r = t[n];
				if ("string" != typeof r) return e.error(`Expected string, but found ${typeof r} instead.`, n);
				if (/[^a-zA-Z0-9_]/.test(r)) return e.error("Variable names must contain only alphanumeric characters or '_'.", n);
				const s = e.parse(t[n + 1], n + 1);
				if (!s) return null;
				i.push([r, s])
			}
			const n = e.parse(t[t.length - 1], t.length - 1, e.expectedType, i);
			return n ? new fp(i, n) : null
		}
		outputDefined() {
			return this.result.outputDefined()
		}
		serialize() {
			const t = ["let"];
			for (const [e, i] of this.bindings) t.push(e, i.serialize());
			return t.push(this.result.serialize()), t
		}
	}
	var mp = fp;
	class _p {
		constructor(t, e, i) {
			this.type = t, this.index = e, this.input = i
		}
		static parse(t, e) {
			if (3 !== t.length) return e.error(`Expected 2 arguments, but found ${t.length - 1} instead.`);
			const i = e.parse(t[1], 1, Cd),
				n = e.parse(t[2], 2, Ad(e.expectedType || Md));
			if (!i || !n) return null;
			const r = n.type;
			return new _p(r.itemType, i, n)
		}
		evaluate(t) {
			const e = this.index.evaluate(t),
				i = this.input.evaluate(t);
			if (e < 0) throw new Kd(`Array index out of bounds: ${e} < 0.`);
			if (e >= i.length) throw new Kd(`Array index out of bounds: ${e} > ${i.length - 1}.`);
			if (e !== Math.floor(e)) throw new Kd(`Array index must be an integer, but found ${e} instead.`);
			return i[e]
		}
		eachChild(t) {
			t(this.index), t(this.input)
		}
		outputDefined() {
			return !1
		}
		serialize() {
			return ["at", this.index.serialize(), this.input.serialize()]
		}
	}
	var yp = _p;
	class xp {
		constructor(t, e) {
			this.type = Pd, this.needle = t, this.haystack = e
		}
		static parse(t, e) {
			if (3 !== t.length) return e.error(`Expected 2 arguments, but found ${t.length - 1} instead.`);
			const i = e.parse(t[1], 1, Md),
				n = e.parse(t[2], 2, Md);
			return i && n ? Gd(i.type, [Pd, Td, Cd, Ed, Md]) ? new xp(i, n) : e.error(`Expected first argument to be of type boolean, string, number or null, but found ${Dd(i.type)} instead`) : null
		}
		evaluate(t) {
			const e = this.needle.evaluate(t),
				i = this.haystack.evaluate(t);
			if (null == i) return !1;
			if (!Nd(e, ["boolean", "string", "number", "null"])) throw new Kd(`Expected first argument to be of type boolean, string, number or null, but found ${Dd(Wd(e))} instead.`);
			if (!Nd(i, ["string", "array"])) throw new Kd(`Expected second argument to be of type array or string, but found ${Dd(Wd(i))} instead.`);
			return i.indexOf(e) >= 0
		}
		eachChild(t) {
			t(this.needle), t(this.haystack)
		}
		outputDefined() {
			return !0
		}
		serialize() {
			return ["in", this.needle.serialize(), this.haystack.serialize()]
		}
	}
	var vp = xp;
	class wp {
		constructor(t, e, i) {
			this.type = Cd, this.needle = t, this.haystack = e, this.fromIndex = i
		}
		static parse(t, e) {
			if (t.length <= 2 || t.length >= 5) return e.error(`Expected 3 or 4 arguments, but found ${t.length - 1} instead.`);
			const i = e.parse(t[1], 1, Md),
				n = e.parse(t[2], 2, Md);
			if (!i || !n) return null;
			if (!Gd(i.type, [Pd, Td, Cd, Ed, Md])) return e.error(`Expected first argument to be of type boolean, string, number or null, but found ${Dd(i.type)} instead`);
			if (4 === t.length) {
				const r = e.parse(t[3], 3, Cd);
				return r ? new wp(i, n, r) : null
			}
			return new wp(i, n)
		}
		evaluate(t) {
			const e = this.needle.evaluate(t),
				i = this.haystack.evaluate(t);
			if (!Nd(e, ["boolean", "string", "number", "null"])) throw new Kd(`Expected first argument to be of type boolean, string, number or null, but found ${Dd(Wd(e))} instead.`);
			if (!Nd(i, ["string", "array"])) throw new Kd(`Expected second argument to be of type array or string, but found ${Dd(Wd(i))} instead.`);
			if (this.fromIndex) {
				const n = this.fromIndex.evaluate(t);
				return i.indexOf(e, n)
			}
			return i.indexOf(e)
		}
		eachChild(t) {
			t(this.needle), t(this.haystack), this.fromIndex && t(this.fromIndex)
		}
		outputDefined() {
			return !1
		}
		serialize() {
			if (null != this.fromIndex && void 0 !== this.fromIndex) {
				const t = this.fromIndex.serialize();
				return ["index-of", this.needle.serialize(), this.haystack.serialize(), t]
			}
			return ["index-of", this.needle.serialize(), this.haystack.serialize()]
		}
	}
	var bp = wp;
	class Sp {
		constructor(t, e, i, n, r, s) {
			this.inputType = t, this.type = e, this.input = i, this.cases = n, this.outputs = r, this.otherwise = s
		}
		static parse(t, e) {
			if (t.length < 5) return e.error(`Expected at least 4 arguments, but found only ${t.length - 1}.`);
			if (t.length % 2 != 1) return e.error("Expected an even number of arguments.");
			let i, n;
			e.expectedType && "value" !== e.expectedType.kind && (n = e.expectedType);
			const r = {},
				s = [];
			for (let o = 2; o < t.length - 1; o += 2) {
				let a = t[o];
				const l = t[o + 1];
				Array.isArray(a) || (a = [a]);
				const h = e.concat(o);
				if (0 === a.length) return h.error("Expected at least one branch label.");
				for (const t of a) {
					if ("number" != typeof t && "string" != typeof t) return h.error("Branch labels must be numbers or strings.");
					if ("number" == typeof t && Math.abs(t) > Number.MAX_SAFE_INTEGER) return h.error(`Branch labels must be integers no larger than ${Number.MAX_SAFE_INTEGER}.`);
					if ("number" == typeof t && Math.floor(t) !== t) return h.error("Numeric branch labels must be integer values.");
					if (i) {
						if (h.checkSubtype(i, Wd(t))) return null
					} else i = Wd(t);
					if (void 0 !== r[String(t)]) return h.error("Branch labels must be unique.");
					r[String(t)] = s.length
				}
				const u = e.parse(l, o, n);
				if (!u) return null;
				n = n || u.type, s.push(u)
			}
			const o = e.parse(t[1], 1, Md);
			if (!o) return null;
			const a = e.parse(t[t.length - 1], t.length - 1, n);
			return a ? "value" !== o.type.kind && e.concat(1).checkSubtype(i, o.type) ? null : new Sp(i, n, o, r, s, a) : null
		}
		evaluate(t) {
			const e = this.input.evaluate(t);
			return (Wd(e) === this.inputType && this.outputs[this.cases[e]] || this.otherwise).evaluate(t)
		}
		eachChild(t) {
			t(this.input), this.outputs.forEach(t), t(this.otherwise)
		}
		outputDefined() {
			return this.outputs.every((t => t.outputDefined())) && this.otherwise.outputDefined()
		}
		serialize() {
			const t = ["match", this.input.serialize()],
				e = Object.keys(this.cases).sort(),
				i = [],
				n = {};
			for (const t of e) {
				const e = n[this.cases[t]];
				void 0 === e ? (n[this.cases[t]] = i.length, i.push([this.cases[t],
					[t]
				])) : i[e][1].push(t)
			}
			const r = t => "number" === this.inputType.kind ? Number(t) : t;
			for (const [e, n] of i) 1 === n.length ? t.push(r(n[0])) : t.push(n.map(r)), t.push(this.outputs[e].serialize());
			return t.push(this.otherwise.serialize()), t
		}
	}
	var Ep = Sp;
	class Cp {
		constructor(t, e, i) {
			this.type = t, this.branches = e, this.otherwise = i
		}
		static parse(t, e) {
			if (t.length < 4) return e.error(`Expected at least 3 arguments, but found only ${t.length - 1}.`);
			if (t.length % 2 != 0) return e.error("Expected an odd number of arguments.");
			let i;
			e.expectedType && "value" !== e.expectedType.kind && (i = e.expectedType);
			const n = [];
			for (let r = 1; r < t.length - 1; r += 2) {
				const s = e.parse(t[r], r, Pd);
				if (!s) return null;
				const o = e.parse(t[r + 1], r + 1, i);
				if (!o) return null;
				n.push([s, o]), i = i || o.type
			}
			const r = e.parse(t[t.length - 1], t.length - 1, i);
			return r ? new Cp(i, n, r) : null
		}
		evaluate(t) {
			for (const [e, i] of this.branches)
				if (e.evaluate(t)) return i.evaluate(t);
			return this.otherwise.evaluate(t)
		}
		eachChild(t) {
			for (const [e, i] of this.branches) t(e), t(i);
			t(this.otherwise)
		}
		outputDefined() {
			return this.branches.every((([t, e]) => e.outputDefined())) && this.otherwise.outputDefined()
		}
		serialize() {
			const t = ["case"];
			return this.eachChild((e => {
				t.push(e.serialize())
			})), t
		}
	}
	var Tp = Cp;
	class Pp {
		constructor(t, e, i, n) {
			this.type = t, this.input = e, this.beginIndex = i, this.endIndex = n
		}
		static parse(t, e) {
			if (t.length <= 2 || t.length >= 5) return e.error(`Expected 3 or 4 arguments, but found ${t.length - 1} instead.`);
			const i = e.parse(t[1], 1, Md),
				n = e.parse(t[2], 2, Cd);
			if (!i || !n) return null;
			if (!Gd(i.type, [Ad(Md), Td, Md])) return e.error(`Expected first argument to be of type array or string, but found ${Dd(i.type)} instead`);
			if (4 === t.length) {
				const r = e.parse(t[3], 3, Cd);
				return r ? new Pp(i.type, i, n, r) : null
			}
			return new Pp(i.type, i, n)
		}
		evaluate(t) {
			const e = this.input.evaluate(t),
				i = this.beginIndex.evaluate(t);
			if (!Nd(e, ["string", "array"])) throw new Kd(`Expected first argument to be of type array or string, but found ${Dd(Wd(e))} instead.`);
			if (this.endIndex) {
				const n = this.endIndex.evaluate(t);
				return e.slice(i, n)
			}
			return e.slice(i)
		}
		eachChild(t) {
			t(this.input), t(this.beginIndex), this.endIndex && t(this.endIndex)
		}
		outputDefined() {
			return !1
		}
		serialize() {
			if (null != this.endIndex && void 0 !== this.endIndex) {
				const t = this.endIndex.serialize();
				return ["slice", this.input.serialize(), this.beginIndex.serialize(), t]
			}
			return ["slice", this.input.serialize(), this.beginIndex.serialize()]
		}
	}
	var Rp = Pp;

	function Fp(t, e) {
		return "==" === t || "!=" === t ? "boolean" === e.kind || "string" === e.kind || "number" === e.kind || "null" === e.kind || "value" === e.kind : "string" === e.kind || "number" === e.kind || "value" === e.kind
	}

	function Mp(t, e, i, n) {
		return 0 === n.compare(e, i)
	}

	function Ip(t, e, i) {
		const n = "==" !== t && "!=" !== t;
		return class r {
			constructor(t, e, i) {
				this.type = Pd, this.lhs = t, this.rhs = e, this.collator = i, this.hasUntypedArgument = "value" === t.type.kind || "value" === e.type.kind
			}
			static parse(t, e) {
				if (3 !== t.length && 4 !== t.length) return e.error("Expected two or three arguments.");
				const i = t[0];
				let s = e.parse(t[1], 1, Md);
				if (!s) return null;
				if (!Fp(i, s.type)) return e.concat(1).error(`"${i}" comparisons are not supported for type '${Dd(s.type)}'.`);
				let o = e.parse(t[2], 2, Md);
				if (!o) return null;
				if (!Fp(i, o.type)) return e.concat(2).error(`"${i}" comparisons are not supported for type '${Dd(o.type)}'.`);
				if (s.type.kind !== o.type.kind && "value" !== s.type.kind && "value" !== o.type.kind) return e.error(`Cannot compare types '${Dd(s.type)}' and '${Dd(o.type)}'.`);
				n && ("value" === s.type.kind && "value" !== o.type.kind ? s = new Qd(o.type, [s]) : "value" !== s.type.kind && "value" === o.type.kind && (o = new Qd(s.type, [o])));
				let a = null;
				if (4 === t.length) {
					if ("string" !== s.type.kind && "string" !== o.type.kind && "value" !== s.type.kind && "value" !== o.type.kind) return e.error("Cannot use collator to compare non-string types.");
					if (a = e.parse(t[3], 3, Id), !a) return null
				}
				return new r(s, o, a)
			}
			evaluate(r) {
				const s = this.lhs.evaluate(r),
					o = this.rhs.evaluate(r);
				if (n && this.hasUntypedArgument) {
					const e = Wd(s),
						i = Wd(o);
					if (e.kind !== i.kind || "string" !== e.kind && "number" !== e.kind) throw new Kd(`Expected arguments for "${t}" to be (string, string) or (number, number), but found (${e.kind}, ${i.kind}) instead.`)
				}
				if (this.collator && !n && this.hasUntypedArgument) {
					const t = Wd(s),
						i = Wd(o);
					if ("string" !== t.kind || "string" !== i.kind) return e(r, s, o)
				}
				return this.collator ? i(r, s, o, this.collator.evaluate(r)) : e(r, s, o)
			}
			eachChild(t) {
				t(this.lhs), t(this.rhs), this.collator && t(this.collator)
			}
			outputDefined() {
				return !0
			}
			serialize() {
				const e = [t];
				return this.eachChild((t => {
					e.push(t.serialize())
				})), e
			}
		}
	}
	const Lp = Ip("==", (function(t, e, i) {
			return e === i
		}), Mp),
		kp = Ip("!=", (function(t, e, i) {
			return e !== i
		}), (function(t, e, i, n) {
			return !Mp(0, e, i, n)
		})),
		Ap = Ip("<", (function(t, e, i) {
			return e < i
		}), (function(t, e, i, n) {
			return n.compare(e, i) < 0
		})),
		Dp = Ip(">", (function(t, e, i) {
			return e > i
		}), (function(t, e, i, n) {
			return n.compare(e, i) > 0
		})),
		Op = Ip("<=", (function(t, e, i) {
			return e <= i
		}), (function(t, e, i, n) {
			return n.compare(e, i) <= 0
		})),
		zp = Ip(">=", (function(t, e, i) {
			return e >= i
		}), (function(t, e, i, n) {
			return n.compare(e, i) >= 0
		}));
	class Gp {
		constructor(t, e, i, n, r, s) {
			this.type = Td, this.number = t, this.locale = e, this.currency = i, this.unit = n, this.minFractionDigits = r, this.maxFractionDigits = s
		}
		static parse(t, e) {
			if (3 !== t.length) return e.error("Expected two arguments.");
			const i = e.parse(t[1], 1, Cd);
			if (!i) return null;
			const n = t[2];
			if ("object" != typeof n || Array.isArray(n)) return e.error("NumberFormat options argument must be an object.");
			let r = null;
			if (n.locale && (r = e.parse(n.locale, 1, Td), !r)) return null;
			let s = null;
			if (n.currency && (s = e.parse(n.currency, 1, Td), !s)) return null;
			let o = null;
			if (n.unit && (o = e.parse(n.unit, 1, Td), !o)) return null;
			let a = null;
			if (n["min-fraction-digits"] && (a = e.parse(n["min-fraction-digits"], 1, Cd), !a)) return null;
			let l = null;
			return n["max-fraction-digits"] && (l = e.parse(n["max-fraction-digits"], 1, Cd), !l) ? null : new Gp(i, r, s, o, a, l)
		}
		evaluate(t) {
			return new Intl.NumberFormat(this.locale ? this.locale.evaluate(t) : [], {
				style: (this.currency ? "currency" : this.unit && "unit") || "decimal",
				currency: this.currency ? this.currency.evaluate(t) : void 0,
				unit: this.unit ? this.unit.evaluate(t) : void 0,
				minimumFractionDigits: this.minFractionDigits ? this.minFractionDigits.evaluate(t) : void 0,
				maximumFractionDigits: this.maxFractionDigits ? this.maxFractionDigits.evaluate(t) : void 0
			}).format(this.number.evaluate(t))
		}
		eachChild(t) {
			t(this.number), this.locale && t(this.locale), this.currency && t(this.currency), this.unit && t(this.unit), this.minFractionDigits && t(this.minFractionDigits), this.maxFractionDigits && t(this.maxFractionDigits)
		}
		outputDefined() {
			return !1
		}
		serialize() {
			const t = {};
			return this.locale && (t.locale = this.locale.serialize()), this.currency && (t.currency = this.currency.serialize()), this.unit && (t.unit = this.unit.serialize()), this.minFractionDigits && (t["min-fraction-digits"] = this.minFractionDigits.serialize()), this.maxFractionDigits && (t["max-fraction-digits"] = this.maxFractionDigits.serialize()), ["number-format", this.number.serialize(), t]
		}
	}
	class Np {
		constructor(t) {
			this.type = Cd, this.input = t
		}
		static parse(t, e) {
			if (2 !== t.length) return e.error(`Expected 1 argument, but found ${t.length - 1} instead.`);
			const i = e.parse(t[1], 1);
			return i ? "array" !== i.type.kind && "string" !== i.type.kind && "value" !== i.type.kind ? e.error(`Expected argument of type string or array, but found ${Dd(i.type)} instead.`) : new Np(i) : null
		}
		evaluate(t) {
			const e = this.input.evaluate(t);
			if ("string" == typeof e) return e.length;
			if (Array.isArray(e)) return e.length;
			throw new Kd(`Expected value to be of type string or array, but found ${Dd(Wd(e))} instead.`)
		}
		eachChild(t) {
			t(this.input)
		}
		outputDefined() {
			return !1
		}
		serialize() {
			const t = ["length"];
			return this.eachChild((e => {
				t.push(e.serialize())
			})), t
		}
	}
	const jp = {
		"==": Lp,
		"!=": kp,
		">": Dp,
		"<": Ap,
		">=": zp,
		"<=": Op,
		array: Qd,
		at: yp,
		boolean: Qd,
		case: Tp,
		coalesce: pp,
		collator: hg,
		format: tg,
		image: eg,
		in: vp,
		"index-of": bp,
		interpolate: dp,
		"interpolate-hcl": dp,
		"interpolate-lab": dp,
		length: Np,
		let: mp,
		literal: Yd,
		match: Ep,
		number: Qd,
		"number-format": Gp,
		object: Qd,
		slice: Rp,
		step: jg,
		string: Qd,
		"to-boolean": rg,
		"to-color": rg,
		"to-number": rg,
		"to-string": rg,
		var: Ag,
		within: Fg
	};

	function Up(t, [e, i, n, r]) {
		e = e.evaluate(t), i = i.evaluate(t), n = n.evaluate(t);
		const s = r ? r.evaluate(t) : 1,
			o = Vd(e, i, n, s);
		if (o) throw new Kd(o);
		return new ud(e / 255 * s, i / 255 * s, n / 255 * s, s)
	}

	function Bp(t, e) {
		return t in e
	}

	function $p(t, e) {
		const i = e[t];
		return void 0 === i ? null : i
	}

	function Vp(t) {
		return {
			type: t
		}
	}
	lg.register(jp, {
		error: [{
				kind: "error"
			},
			[Td], (t, [e]) => {
				throw new Kd(e.evaluate(t))
			}
		],
		typeof: [Td, [Md], (t, [e]) => Dd(Wd(e.evaluate(t)))],
		"to-rgba": [Ad(Cd, 4), [Rd], (t, [e]) => e.evaluate(t).toArray()],
		rgb: [Rd, [Cd, Cd, Cd], Up],
		rgba: [Rd, [Cd, Cd, Cd, Cd], Up],
		has: {
			type: Pd,
			overloads: [
				[
					[Td], (t, [e]) => Bp(e.evaluate(t), t.properties())
				],
				[
					[Td, Fd], (t, [e, i]) => Bp(e.evaluate(t), i.evaluate(t))
				]
			]
		},
		get: {
			type: Md,
			overloads: [
				[
					[Td], (t, [e]) => $p(e.evaluate(t), t.properties())
				],
				[
					[Td, Fd], (t, [e, i]) => $p(e.evaluate(t), i.evaluate(t))
				]
			]
		},
		"feature-state": [Md, [Td], (t, [e]) => $p(e.evaluate(t), t.featureState || {})],
		properties: [Fd, [], t => t.properties()],
		"geometry-type": [Td, [], t => t.geometryType()],
		id: [Md, [], t => t.id()],
		zoom: [Cd, [], t => t.globals.zoom],
		pitch: [Cd, [], t => t.globals.pitch || 0],
		"distance-from-center": [Cd, [], t => t.distanceFromCenter()],
		"heatmap-density": [Cd, [], t => t.globals.heatmapDensity || 0],
		"line-progress": [Cd, [], t => t.globals.lineProgress || 0],
		"sky-radial-progress": [Cd, [], t => t.globals.skyRadialProgress || 0],
		accumulated: [Md, [], t => void 0 === t.globals.accumulated ? null : t.globals.accumulated],
		"+": [Cd, Vp(Cd), (t, e) => {
			let i = 0;
			for (const n of e) i += n.evaluate(t);
			return i
		}],
		"*": [Cd, Vp(Cd), (t, e) => {
			let i = 1;
			for (const n of e) i *= n.evaluate(t);
			return i
		}],
		"-": {
			type: Cd,
			overloads: [
				[
					[Cd, Cd], (t, [e, i]) => e.evaluate(t) - i.evaluate(t)
				],
				[
					[Cd], (t, [e]) => -e.evaluate(t)
				]
			]
		},
		"/": [Cd, [Cd, Cd], (t, [e, i]) => e.evaluate(t) / i.evaluate(t)],
		"%": [Cd, [Cd, Cd], (t, [e, i]) => e.evaluate(t) % i.evaluate(t)],
		ln2: [Cd, [], () => Math.LN2],
		pi: [Cd, [], () => Math.PI],
		e: [Cd, [], () => Math.E],
		"^": [Cd, [Cd, Cd], (t, [e, i]) => Math.pow(e.evaluate(t), i.evaluate(t))],
		sqrt: [Cd, [Cd], (t, [e]) => Math.sqrt(e.evaluate(t))],
		log10: [Cd, [Cd], (t, [e]) => Math.log(e.evaluate(t)) / Math.LN10],
		ln: [Cd, [Cd], (t, [e]) => Math.log(e.evaluate(t))],
		log2: [Cd, [Cd], (t, [e]) => Math.log(e.evaluate(t)) / Math.LN2],
		sin: [Cd, [Cd], (t, [e]) => Math.sin(e.evaluate(t))],
		cos: [Cd, [Cd], (t, [e]) => Math.cos(e.evaluate(t))],
		tan: [Cd, [Cd], (t, [e]) => Math.tan(e.evaluate(t))],
		asin: [Cd, [Cd], (t, [e]) => Math.asin(e.evaluate(t))],
		acos: [Cd, [Cd], (t, [e]) => Math.acos(e.evaluate(t))],
		atan: [Cd, [Cd], (t, [e]) => Math.atan(e.evaluate(t))],
		min: [Cd, Vp(Cd), (t, e) => Math.min(...e.map((e => e.evaluate(t))))],
		max: [Cd, Vp(Cd), (t, e) => Math.max(...e.map((e => e.evaluate(t))))],
		abs: [Cd, [Cd], (t, [e]) => Math.abs(e.evaluate(t))],
		round: [Cd, [Cd], (t, [e]) => {
			const i = e.evaluate(t);
			return i < 0 ? -Math.round(-i) : Math.round(i)
		}],
		floor: [Cd, [Cd], (t, [e]) => Math.floor(e.evaluate(t))],
		ceil: [Cd, [Cd], (t, [e]) => Math.ceil(e.evaluate(t))],
		"filter-==": [Pd, [Td, Md], (t, [e, i]) => t.properties()[e.value] === i.value],
		"filter-id-==": [Pd, [Md], (t, [e]) => t.id() === e.value],
		"filter-type-==": [Pd, [Td], (t, [e]) => t.geometryType() === e.value],
		"filter-<": [Pd, [Td, Md], (t, [e, i]) => {
			const n = t.properties()[e.value],
				r = i.value;
			return typeof n == typeof r && n < r
		}],
		"filter-id-<": [Pd, [Md], (t, [e]) => {
			const i = t.id(),
				n = e.value;
			return typeof i == typeof n && i < n
		}],
		"filter->": [Pd, [Td, Md], (t, [e, i]) => {
			const n = t.properties()[e.value],
				r = i.value;
			return typeof n == typeof r && n > r
		}],
		"filter-id->": [Pd, [Md], (t, [e]) => {
			const i = t.id(),
				n = e.value;
			return typeof i == typeof n && i > n
		}],
		"filter-<=": [Pd, [Td, Md], (t, [e, i]) => {
			const n = t.properties()[e.value],
				r = i.value;
			return typeof n == typeof r && n <= r
		}],
		"filter-id-<=": [Pd, [Md], (t, [e]) => {
			const i = t.id(),
				n = e.value;
			return typeof i == typeof n && i <= n
		}],
		"filter->=": [Pd, [Td, Md], (t, [e, i]) => {
			const n = t.properties()[e.value],
				r = i.value;
			return typeof n == typeof r && n >= r
		}],
		"filter-id->=": [Pd, [Md], (t, [e]) => {
			const i = t.id(),
				n = e.value;
			return typeof i == typeof n && i >= n
		}],
		"filter-has": [Pd, [Md], (t, [e]) => e.value in t.properties()],
		"filter-has-id": [Pd, [], t => null !== t.id() && void 0 !== t.id()],
		"filter-type-in": [Pd, [Ad(Td)], (t, [e]) => e.value.indexOf(t.geometryType()) >= 0],
		"filter-id-in": [Pd, [Ad(Md)], (t, [e]) => e.value.indexOf(t.id()) >= 0],
		"filter-in-small": [Pd, [Td, Ad(Md)], (t, [e, i]) => i.value.indexOf(t.properties()[e.value]) >= 0],
		"filter-in-large": [Pd, [Td, Ad(Md)], (t, [e, i]) => function(t, e, i, n) {
			for (; i <= n;) {
				const r = i + n >> 1;
				if (e[r] === t) return !0;
				e[r] > t ? n = r - 1 : i = r + 1
			}
			return !1
		}(t.properties()[e.value], i.value, 0, i.value.length - 1)],
		all: {
			type: Pd,
			overloads: [
				[
					[Pd, Pd], (t, [e, i]) => e.evaluate(t) && i.evaluate(t)
				],
				[Vp(Pd), (t, e) => {
					for (const i of e)
						if (!i.evaluate(t)) return !1;
					return !0
				}]
			]
		},
		any: {
			type: Pd,
			overloads: [
				[
					[Pd, Pd], (t, [e, i]) => e.evaluate(t) || i.evaluate(t)
				],
				[Vp(Pd), (t, e) => {
					for (const i of e)
						if (i.evaluate(t)) return !0;
					return !1
				}]
			]
		},
		"!": [Pd, [Pd], (t, [e]) => !e.evaluate(t)],
		"is-supported-script": [Pd, [Td], (t, [e]) => {
			const i = t.globals && t.globals.isSupportedScript;
			return !i || i(e.evaluate(t))
		}],
		upcase: [Td, [Td], (t, [e]) => e.evaluate(t).toUpperCase()],
		downcase: [Td, [Td], (t, [e]) => e.evaluate(t).toLowerCase()],
		concat: [Td, Vp(Md), (t, e) => e.map((e => qd(e.evaluate(t)))).join("")],
		"resolved-locale": [Td, [Id], (t, [e]) => e.evaluate(t).resolvedLocale()]
	});
	var Xp = jp;

	function Wp(t) {
		return {
			result: "success",
			value: t
		}
	}

	function qp(t) {
		return {
			result: "error",
			value: t
		}
	}

	function Zp(t) {
		return "object" == typeof t && null !== t && !Array.isArray(t)
	}
	class Yp {
		constructor(t, e) {
			this.expression = t, this._warningHistory = {}, this._evaluator = new og, this._defaultValue = e ? function(t) {
				return "color" === t.type && (Zp(t.default) || Array.isArray(t.default)) ? new ud(0, 0, 0, 0) : "color" === t.type ? ud.parse(t.default) || null : void 0 === t.default ? null : t.default
			}(e) : null, this._enumValues = e && "enum" === e.type ? e.values : null
		}
		evaluateWithoutErrorHandling(t, e, i, n, r, s, o, a) {
			return this._evaluator.globals = t, this._evaluator.feature = e, this._evaluator.featureState = i, this._evaluator.canonical = n || null, this._evaluator.availableImages = r || null, this._evaluator.formattedSection = s, this._evaluator.featureTileCoord = o || null, this._evaluator.featureDistanceData = a || null, this.expression.evaluate(this._evaluator)
		}
		evaluate(t, e, i, n, r, s, o, a) {
			this._evaluator.globals = t, this._evaluator.feature = e || null, this._evaluator.featureState = i || null, this._evaluator.canonical = n || null, this._evaluator.availableImages = r || null, this._evaluator.formattedSection = s || null, this._evaluator.featureTileCoord = o || null, this._evaluator.featureDistanceData = a || null;
			try {
				const t = this.expression.evaluate(this._evaluator);
				if (null == t || "number" == typeof t && t != t) return this._defaultValue;
				if (this._enumValues && !(t in this._enumValues)) throw new Kd(`Expected value to be one of ${Object.keys(this._enumValues).map((t => JSON.stringify(t))).join(", ")}, but found ${JSON.stringify(t)} instead.`);
				return t
			} catch (t) {
				return this._warningHistory[t.message] || (this._warningHistory[t.message] = !0, "undefined" != typeof console && console.warn(t.message)), this._defaultValue
			}
		}
	}

	function Kp(t, e) {
		const i = new Og(Xp, [], e ? function(t) {
				const e = {
					color: Rd,
					string: Td,
					number: Cd,
					enum: Td,
					boolean: Pd,
					formatted: Ld,
					resolvedImage: kd
				};
				if ("array" === t.type) return Ad(e[t.value] || Md, t.length);
				return e[t.type]
			}(e) : void 0),
			n = i.parse(t, void 0, void 0, void 0, e && "string" === e.type ? {
				typeAnnotation: "coerce"
			} : void 0);
		return n ? Wp(new Yp(n, e)) : qp(i.errors)
	}
	class Hp {
		constructor(t, e) {
			this.kind = t, this._styleExpression = e, this.isStateDependent = "constant" !== t && !Ig(e.expression)
		}
		evaluateWithoutErrorHandling(t, e, i, n, r, s) {
			return this._styleExpression.evaluateWithoutErrorHandling(t, e, i, n, r, s)
		}
		evaluate(t, e, i, n, r, s) {
			return this._styleExpression.evaluate(t, e, i, n, r, s)
		}
	}
	class Jp {
		constructor(t, e, i, n) {
			this.kind = t, this.zoomStops = i, this._styleExpression = e, this.isStateDependent = "camera" !== t && !Ig(e.expression), this.interpolationType = n
		}
		evaluateWithoutErrorHandling(t, e, i, n, r, s) {
			return this._styleExpression.evaluateWithoutErrorHandling(t, e, i, n, r, s)
		}
		evaluate(t, e, i, n, r, s) {
			return this._styleExpression.evaluate(t, e, i, n, r, s)
		}
		interpolationFactor(t, e, i) {
			return this.interpolationType ? dp.interpolationFactor(this.interpolationType, t, e, i) : 0
		}
	}

	function Qp(t, e) {
		if ("error" === (t = Kp(t, e)).result) return t;
		const i = t.value.expression,
			n = Mg(i);
		if (!n && ! function(t) {
				return "data-driven" === t["property-type"]
			}(e)) return qp([new wd("", "data expressions not supported")]);
		const r = Lg(i, ["zoom", "pitch", "distance-from-center"]);
		if (!r && ! function(t) {
				return !!t.expression && t.expression.parameters.indexOf("zoom") > -1
			}(e)) return qp([new wd("", "zoom expressions not supported")]);
		const s = tf(i);
		if (!s && !r) return qp([new wd("", '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')]);
		if (s instanceof wd) return qp([s]);
		if (s instanceof dp && ! function(t) {
				return !!t.expression && t.expression.interpolated
			}(e)) return qp([new wd("", '"interpolate" expressions cannot be used with this property')]);
		if (!s) return Wp(new Hp(n ? "constant" : "source", t.value));
		const o = s instanceof dp ? s.interpolation : void 0;
		return Wp(new Jp(n ? "camera" : "composite", t.value, s.labels, o))
	}

	function tf(t) {
		let e = null;
		if (t instanceof mp) e = tf(t.result);
		else if (t instanceof pp) {
			for (const i of t.args)
				if (e = tf(i), e) break
		} else(t instanceof jg || t instanceof dp) && t.input instanceof lg && "zoom" === t.input.name && (e = t);
		return e instanceof wd || t.eachChild((t => {
			const i = tf(t);
			i instanceof wd ? e = i : !e && i ? e = new wd("", '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.') : e && i && e !== i && (e = new wd("", 'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'))
		})), e
	}

	function ef(t) {
		if (Array.isArray(t)) return t.map(ef);
		if (t instanceof Object && !(t instanceof Number || t instanceof String || t instanceof Boolean)) {
			const e = {};
			for (const i in t) e[i] = ef(t[i]);
			return e
		}
		return function(t) {
			return t instanceof Number || t instanceof String || t instanceof Boolean ? t.valueOf() : t
		}(t)
	}
	var nf = {
		$version: 8,
		$root: {
			version: {
				required: !0,
				type: "enum",
				values: [8]
			},
			name: {
				type: "string"
			},
			metadata: {
				type: "*"
			},
			center: {
				type: "array",
				value: "number"
			},
			zoom: {
				type: "number"
			},
			bearing: {
				type: "number",
				default: 0,
				period: 360,
				units: "degrees"
			},
			pitch: {
				type: "number",
				default: 0,
				units: "degrees"
			},
			light: {
				type: "light"
			},
			terrain: {
				type: "terrain"
			},
			fog: {
				type: "fog"
			},
			sources: {
				required: !0,
				type: "sources"
			},
			sprite: {
				type: "string"
			},
			glyphs: {
				type: "string"
			},
			transition: {
				type: "transition"
			},
			projection: {
				type: "projection"
			},
			layers: {
				required: !0,
				type: "array",
				value: "layer"
			}
		},
		sources: {
			"*": {
				type: "source"
			}
		},
		source: ["source_vector", "source_raster", "source_raster_dem", "source_geojson", "source_video", "source_image"],
		source_vector: {
			type: {
				required: !0,
				type: "enum",
				values: {
					vector: {}
				}
			},
			url: {
				type: "string"
			},
			tiles: {
				type: "array",
				value: "string"
			},
			bounds: {
				type: "array",
				value: "number",
				length: 4,
				default: [-180, -85.051129, 180, 85.051129]
			},
			scheme: {
				type: "enum",
				values: {
					xyz: {},
					tms: {}
				},
				default: "xyz"
			},
			minzoom: {
				type: "number",
				default: 0
			},
			maxzoom: {
				type: "number",
				default: 22
			},
			attribution: {
				type: "string"
			},
			promoteId: {
				type: "promoteId"
			},
			volatile: {
				type: "boolean",
				default: !1
			},
			"*": {
				type: "*"
			}
		},
		source_raster: {
			type: {
				required: !0,
				type: "enum",
				values: {
					raster: {}
				}
			},
			url: {
				type: "string"
			},
			tiles: {
				type: "array",
				value: "string"
			},
			bounds: {
				type: "array",
				value: "number",
				length: 4,
				default: [-180, -85.051129, 180, 85.051129]
			},
			minzoom: {
				type: "number",
				default: 0
			},
			maxzoom: {
				type: "number",
				default: 22
			},
			tileSize: {
				type: "number",
				default: 512,
				units: "pixels"
			},
			scheme: {
				type: "enum",
				values: {
					xyz: {},
					tms: {}
				},
				default: "xyz"
			},
			attribution: {
				type: "string"
			},
			volatile: {
				type: "boolean",
				default: !1
			},
			"*": {
				type: "*"
			}
		},
		source_raster_dem: {
			type: {
				required: !0,
				type: "enum",
				values: {
					"raster-dem": {}
				}
			},
			url: {
				type: "string"
			},
			tiles: {
				type: "array",
				value: "string"
			},
			bounds: {
				type: "array",
				value: "number",
				length: 4,
				default: [-180, -85.051129, 180, 85.051129]
			},
			minzoom: {
				type: "number",
				default: 0
			},
			maxzoom: {
				type: "number",
				default: 22
			},
			tileSize: {
				type: "number",
				default: 512,
				units: "pixels"
			},
			attribution: {
				type: "string"
			},
			encoding: {
				type: "enum",
				values: {
					terrarium: {},
					mapbox: {}
				},
				default: "mapbox"
			},
			volatile: {
				type: "boolean",
				default: !1
			},
			"*": {
				type: "*"
			}
		},
		source_geojson: {
			type: {
				required: !0,
				type: "enum",
				values: {
					geojson: {}
				}
			},
			data: {
				type: "*"
			},
			maxzoom: {
				type: "number",
				default: 18
			},
			attribution: {
				type: "string"
			},
			buffer: {
				type: "number",
				default: 128,
				maximum: 512,
				minimum: 0
			},
			filter: {
				type: "*"
			},
			tolerance: {
				type: "number",
				default: .375
			},
			cluster: {
				type: "boolean",
				default: !1
			},
			clusterRadius: {
				type: "number",
				default: 50,
				minimum: 0
			},
			clusterMaxZoom: {
				type: "number"
			},
			clusterMinPoints: {
				type: "number"
			},
			clusterProperties: {
				type: "*"
			},
			lineMetrics: {
				type: "boolean",
				default: !1
			},
			generateId: {
				type: "boolean",
				default: !1
			},
			promoteId: {
				type: "promoteId"
			}
		},
		source_video: {
			type: {
				required: !0,
				type: "enum",
				values: {
					video: {}
				}
			},
			urls: {
				required: !0,
				type: "array",
				value: "string"
			},
			coordinates: {
				required: !0,
				type: "array",
				length: 4,
				value: {
					type: "array",
					length: 2,
					value: "number"
				}
			}
		},
		source_image: {
			type: {
				required: !0,
				type: "enum",
				values: {
					image: {}
				}
			},
			url: {
				required: !0,
				type: "string"
			},
			coordinates: {
				required: !0,
				type: "array",
				length: 4,
				value: {
					type: "array",
					length: 2,
					value: "number"
				}
			}
		},
		layer: {
			id: {
				type: "string",
				required: !0
			},
			type: {
				type: "enum",
				values: {
					fill: {},
					line: {},
					symbol: {},
					circle: {},
					heatmap: {},
					"fill-extrusion": {},
					raster: {},
					hillshade: {},
					background: {},
					sky: {}
				},
				required: !0
			},
			metadata: {
				type: "*"
			},
			source: {
				type: "string"
			},
			"source-layer": {
				type: "string"
			},
			minzoom: {
				type: "number",
				minimum: 0,
				maximum: 24
			},
			maxzoom: {
				type: "number",
				minimum: 0,
				maximum: 24
			},
			filter: {
				type: "filter"
			},
			layout: {
				type: "layout"
			},
			paint: {
				type: "paint"
			}
		},
		layout: ["layout_fill", "layout_line", "layout_circle", "layout_heatmap", "layout_fill-extrusion", "layout_symbol", "layout_raster", "layout_hillshade", "layout_background", "layout_sky"],
		layout_background: {
			visibility: {
				type: "enum",
				values: {
					visible: {},
					none: {}
				},
				default: "visible",
				"property-type": "constant"
			}
		},
		layout_sky: {
			visibility: {
				type: "enum",
				values: {
					visible: {},
					none: {}
				},
				default: "visible",
				"property-type": "constant"
			}
		},
		layout_fill: {
			"fill-sort-key": {
				type: "number",
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			visibility: {
				type: "enum",
				values: {
					visible: {},
					none: {}
				},
				default: "visible",
				"property-type": "constant"
			}
		},
		layout_circle: {
			"circle-sort-key": {
				type: "number",
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			visibility: {
				type: "enum",
				values: {
					visible: {},
					none: {}
				},
				default: "visible",
				"property-type": "constant"
			}
		},
		layout_heatmap: {
			visibility: {
				type: "enum",
				values: {
					visible: {},
					none: {}
				},
				default: "visible",
				"property-type": "constant"
			}
		},
		"layout_fill-extrusion": {
			visibility: {
				type: "enum",
				values: {
					visible: {},
					none: {}
				},
				default: "visible",
				"property-type": "constant"
			},
			"fill-extrusion-edge-radius": {
				type: "number",
				private: !0,
				default: 0,
				minimum: 0,
				maximum: 1,
				"property-type": "constant"
			}
		},
		layout_line: {
			"line-cap": {
				type: "enum",
				values: {
					butt: {},
					round: {},
					square: {}
				},
				default: "butt",
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"line-join": {
				type: "enum",
				values: {
					bevel: {},
					round: {},
					miter: {}
				},
				default: "miter",
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"line-miter-limit": {
				type: "number",
				default: 2,
				requires: [{
					"line-join": "miter"
				}],
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"line-round-limit": {
				type: "number",
				default: 1.05,
				requires: [{
					"line-join": "round"
				}],
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"line-sort-key": {
				type: "number",
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			visibility: {
				type: "enum",
				values: {
					visible: {},
					none: {}
				},
				default: "visible",
				"property-type": "constant"
			}
		},
		layout_symbol: {
			"symbol-placement": {
				type: "enum",
				values: {
					point: {},
					line: {},
					"line-center": {}
				},
				default: "point",
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"symbol-spacing": {
				type: "number",
				default: 250,
				minimum: 1,
				units: "pixels",
				requires: [{
					"symbol-placement": "line"
				}],
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"symbol-avoid-edges": {
				type: "boolean",
				default: !1,
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"symbol-sort-key": {
				type: "number",
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"symbol-z-order": {
				type: "enum",
				values: {
					auto: {},
					"viewport-y": {},
					source: {}
				},
				default: "auto",
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"icon-allow-overlap": {
				type: "boolean",
				default: !1,
				requires: ["icon-image"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"icon-ignore-placement": {
				type: "boolean",
				default: !1,
				requires: ["icon-image"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"icon-optional": {
				type: "boolean",
				default: !1,
				requires: ["icon-image", "text-field"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"icon-rotation-alignment": {
				type: "enum",
				values: {
					map: {},
					viewport: {},
					auto: {}
				},
				default: "auto",
				requires: ["icon-image"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"icon-size": {
				type: "number",
				default: 1,
				minimum: 0,
				units: "factor of the original icon size",
				requires: ["icon-image"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"icon-text-fit": {
				type: "enum",
				values: {
					none: {},
					width: {},
					height: {},
					both: {}
				},
				default: "none",
				requires: ["icon-image", "text-field"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"icon-text-fit-padding": {
				type: "array",
				value: "number",
				length: 4,
				default: [0, 0, 0, 0],
				units: "pixels",
				requires: ["icon-image", "text-field", {
					"icon-text-fit": ["both", "width", "height"]
				}],
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"icon-image": {
				type: "resolvedImage",
				tokens: !0,
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"icon-rotate": {
				type: "number",
				default: 0,
				period: 360,
				units: "degrees",
				requires: ["icon-image"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"icon-padding": {
				type: "number",
				default: 2,
				minimum: 0,
				units: "pixels",
				requires: ["icon-image"],
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"icon-keep-upright": {
				type: "boolean",
				default: !1,
				requires: ["icon-image", {
					"icon-rotation-alignment": "map"
				}, {
					"symbol-placement": ["line", "line-center"]
				}],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"icon-offset": {
				type: "array",
				value: "number",
				length: 2,
				default: [0, 0],
				requires: ["icon-image"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"icon-anchor": {
				type: "enum",
				values: {
					center: {},
					left: {},
					right: {},
					top: {},
					bottom: {},
					"top-left": {},
					"top-right": {},
					"bottom-left": {},
					"bottom-right": {}
				},
				default: "center",
				requires: ["icon-image"],
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"icon-pitch-alignment": {
				type: "enum",
				values: {
					map: {},
					viewport: {},
					auto: {}
				},
				default: "auto",
				requires: ["icon-image"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-pitch-alignment": {
				type: "enum",
				values: {
					map: {},
					viewport: {},
					auto: {}
				},
				default: "auto",
				requires: ["text-field"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-rotation-alignment": {
				type: "enum",
				values: {
					map: {},
					viewport: {},
					auto: {}
				},
				default: "auto",
				requires: ["text-field"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-field": {
				type: "formatted",
				default: "",
				tokens: !0,
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-font": {
				type: "array",
				value: "string",
				default: ["Open Sans Regular", "Arial Unicode MS Regular"],
				requires: ["text-field"],
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-size": {
				type: "number",
				default: 16,
				minimum: 0,
				units: "pixels",
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-max-width": {
				type: "number",
				default: 10,
				minimum: 0,
				units: "ems",
				requires: ["text-field", {
					"symbol-placement": ["point"]
				}],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-line-height": {
				type: "number",
				default: 1.2,
				units: "ems",
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-letter-spacing": {
				type: "number",
				default: 0,
				units: "ems",
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-justify": {
				type: "enum",
				values: {
					auto: {},
					left: {},
					center: {},
					right: {}
				},
				default: "center",
				requires: ["text-field"],
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-radial-offset": {
				type: "number",
				units: "ems",
				default: 0,
				requires: ["text-field"],
				"property-type": "data-driven",
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				}
			},
			"text-variable-anchor": {
				type: "array",
				value: "enum",
				values: {
					center: {},
					left: {},
					right: {},
					top: {},
					bottom: {},
					"top-left": {},
					"top-right": {},
					"bottom-left": {},
					"bottom-right": {}
				},
				requires: ["text-field", {
					"symbol-placement": ["point"]
				}],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-anchor": {
				type: "enum",
				values: {
					center: {},
					left: {},
					right: {},
					top: {},
					bottom: {},
					"top-left": {},
					"top-right": {},
					"bottom-left": {},
					"bottom-right": {}
				},
				default: "center",
				requires: ["text-field", {
					"!": "text-variable-anchor"
				}],
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-max-angle": {
				type: "number",
				default: 45,
				units: "degrees",
				requires: ["text-field", {
					"symbol-placement": ["line", "line-center"]
				}],
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-writing-mode": {
				type: "array",
				value: "enum",
				values: {
					horizontal: {},
					vertical: {}
				},
				requires: ["text-field"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-rotate": {
				type: "number",
				default: 0,
				period: 360,
				units: "degrees",
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-padding": {
				type: "number",
				default: 2,
				minimum: 0,
				units: "pixels",
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-keep-upright": {
				type: "boolean",
				default: !0,
				requires: ["text-field", {
					"text-rotation-alignment": "map"
				}, {
					"symbol-placement": ["line", "line-center"]
				}],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-transform": {
				type: "enum",
				values: {
					none: {},
					uppercase: {},
					lowercase: {}
				},
				default: "none",
				requires: ["text-field"],
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-offset": {
				type: "array",
				value: "number",
				units: "ems",
				length: 2,
				default: [0, 0],
				requires: ["text-field", {
					"!": "text-radial-offset"
				}],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"text-allow-overlap": {
				type: "boolean",
				default: !1,
				requires: ["text-field"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-ignore-placement": {
				type: "boolean",
				default: !1,
				requires: ["text-field"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-optional": {
				type: "boolean",
				default: !1,
				requires: ["text-field", "icon-image"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			visibility: {
				type: "enum",
				values: {
					visible: {},
					none: {}
				},
				default: "visible",
				"property-type": "constant"
			}
		},
		layout_raster: {
			visibility: {
				type: "enum",
				values: {
					visible: {},
					none: {}
				},
				default: "visible",
				"property-type": "constant"
			}
		},
		layout_hillshade: {
			visibility: {
				type: "enum",
				values: {
					visible: {},
					none: {}
				},
				default: "visible",
				"property-type": "constant"
			}
		},
		filter: {
			type: "array",
			value: "*"
		},
		filter_symbol: {
			type: "boolean",
			default: !1,
			transition: !1,
			"property-type": "data-driven",
			expression: {
				interpolated: !1,
				parameters: ["zoom", "feature", "pitch", "distance-from-center"]
			}
		},
		filter_fill: {
			type: "boolean",
			default: !1,
			transition: !1,
			"property-type": "data-driven",
			expression: {
				interpolated: !1,
				parameters: ["zoom", "feature"]
			}
		},
		filter_line: {
			type: "boolean",
			default: !1,
			transition: !1,
			"property-type": "data-driven",
			expression: {
				interpolated: !1,
				parameters: ["zoom", "feature"]
			}
		},
		filter_circle: {
			type: "boolean",
			default: !1,
			transition: !1,
			"property-type": "data-driven",
			expression: {
				interpolated: !1,
				parameters: ["zoom", "feature"]
			}
		},
		"filter_fill-extrusion": {
			type: "boolean",
			default: !1,
			transition: !1,
			"property-type": "data-driven",
			expression: {
				interpolated: !1,
				parameters: ["zoom", "feature"]
			}
		},
		filter_heatmap: {
			type: "boolean",
			default: !1,
			transition: !1,
			"property-type": "data-driven",
			expression: {
				interpolated: !1,
				parameters: ["zoom", "feature"]
			}
		},
		filter_operator: {
			type: "enum",
			values: {
				"==": {},
				"!=": {},
				">": {},
				">=": {},
				"<": {},
				"<=": {},
				in: {},
				"!in": {},
				all: {},
				any: {},
				none: {},
				has: {},
				"!has": {},
				within: {}
			}
		},
		geometry_type: {
			type: "enum",
			values: {
				Point: {},
				LineString: {},
				Polygon: {}
			}
		},
		function: {
			expression: {
				type: "expression"
			},
			stops: {
				type: "array",
				value: "function_stop"
			},
			base: {
				type: "number",
				default: 1,
				minimum: 0
			},
			property: {
				type: "string",
				default: "$zoom"
			},
			type: {
				type: "enum",
				values: {
					identity: {},
					exponential: {},
					interval: {},
					categorical: {}
				},
				default: "exponential"
			},
			colorSpace: {
				type: "enum",
				values: {
					rgb: {},
					lab: {},
					hcl: {}
				},
				default: "rgb"
			},
			default: {
				type: "*",
				required: !1
			}
		},
		function_stop: {
			type: "array",
			minimum: 0,
			maximum: 24,
			value: ["number", "color"],
			length: 2
		},
		expression: {
			type: "array",
			value: "*",
			minimum: 1
		},
		expression_name: {
			type: "enum",
			values: {
				let: {
					group: "Variable binding"
				},
				var: {
					group: "Variable binding"
				},
				literal: {
					group: "Types"
				},
				array: {
					group: "Types"
				},
				at: {
					group: "Lookup"
				},
				in: {
					group: "Lookup"
				},
				"index-of": {
					group: "Lookup"
				},
				slice: {
					group: "Lookup"
				},
				case: {
					group: "Decision"
				},
				match: {
					group: "Decision"
				},
				coalesce: {
					group: "Decision"
				},
				step: {
					group: "Ramps, scales, curves"
				},
				interpolate: {
					group: "Ramps, scales, curves"
				},
				"interpolate-hcl": {
					group: "Ramps, scales, curves"
				},
				"interpolate-lab": {
					group: "Ramps, scales, curves"
				},
				ln2: {
					group: "Math"
				},
				pi: {
					group: "Math"
				},
				e: {
					group: "Math"
				},
				typeof: {
					group: "Types"
				},
				string: {
					group: "Types"
				},
				number: {
					group: "Types"
				},
				boolean: {
					group: "Types"
				},
				object: {
					group: "Types"
				},
				collator: {
					group: "Types"
				},
				format: {
					group: "Types"
				},
				image: {
					group: "Types"
				},
				"number-format": {
					group: "Types"
				},
				"to-string": {
					group: "Types"
				},
				"to-number": {
					group: "Types"
				},
				"to-boolean": {
					group: "Types"
				},
				"to-rgba": {
					group: "Color"
				},
				"to-color": {
					group: "Types"
				},
				rgb: {
					group: "Color"
				},
				rgba: {
					group: "Color"
				},
				get: {
					group: "Lookup"
				},
				has: {
					group: "Lookup"
				},
				length: {
					group: "Lookup"
				},
				properties: {
					group: "Feature data"
				},
				"feature-state": {
					group: "Feature data"
				},
				"geometry-type": {
					group: "Feature data"
				},
				id: {
					group: "Feature data"
				},
				zoom: {
					group: "Camera"
				},
				pitch: {
					group: "Camera"
				},
				"distance-from-center": {
					group: "Camera"
				},
				"heatmap-density": {
					group: "Heatmap"
				},
				"line-progress": {
					group: "Feature data"
				},
				"sky-radial-progress": {
					group: "sky"
				},
				accumulated: {
					group: "Feature data"
				},
				"+": {
					group: "Math"
				},
				"*": {
					group: "Math"
				},
				"-": {
					group: "Math"
				},
				"/": {
					group: "Math"
				},
				"%": {
					group: "Math"
				},
				"^": {
					group: "Math"
				},
				sqrt: {
					group: "Math"
				},
				log10: {
					group: "Math"
				},
				ln: {
					group: "Math"
				},
				log2: {
					group: "Math"
				},
				sin: {
					group: "Math"
				},
				cos: {
					group: "Math"
				},
				tan: {
					group: "Math"
				},
				asin: {
					group: "Math"
				},
				acos: {
					group: "Math"
				},
				atan: {
					group: "Math"
				},
				min: {
					group: "Math"
				},
				max: {
					group: "Math"
				},
				round: {
					group: "Math"
				},
				abs: {
					group: "Math"
				},
				ceil: {
					group: "Math"
				},
				floor: {
					group: "Math"
				},
				distance: {
					group: "Math"
				},
				"==": {
					group: "Decision"
				},
				"!=": {
					group: "Decision"
				},
				">": {
					group: "Decision"
				},
				"<": {
					group: "Decision"
				},
				">=": {
					group: "Decision"
				},
				"<=": {
					group: "Decision"
				},
				all: {
					group: "Decision"
				},
				any: {
					group: "Decision"
				},
				"!": {
					group: "Decision"
				},
				within: {
					group: "Decision"
				},
				"is-supported-script": {
					group: "String"
				},
				upcase: {
					group: "String"
				},
				downcase: {
					group: "String"
				},
				concat: {
					group: "String"
				},
				"resolved-locale": {
					group: "String"
				}
			}
		},
		fog: {
			range: {
				type: "array",
				default: [.5, 10],
				minimum: -20,
				maximum: 20,
				length: 2,
				value: "number",
				"property-type": "data-constant",
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				}
			},
			color: {
				type: "color",
				"property-type": "data-constant",
				default: "#ffffff",
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				transition: !0
			},
			"high-color": {
				type: "color",
				"property-type": "data-constant",
				default: "#245cdf",
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				transition: !0
			},
			"space-color": {
				type: "color",
				"property-type": "data-constant",
				default: ["interpolate", ["linear"],
					["zoom"], 4, "#010b19", 7, "#367ab9"
				],
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				transition: !0
			},
			"horizon-blend": {
				type: "number",
				"property-type": "data-constant",
				default: ["interpolate", ["linear"],
					["zoom"], 4, .2, 7, .1
				],
				minimum: 0,
				maximum: 1,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				transition: !0
			},
			"star-intensity": {
				type: "number",
				"property-type": "data-constant",
				default: ["interpolate", ["linear"],
					["zoom"], 5, .35, 6, 0
				],
				minimum: 0,
				maximum: 1,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				transition: !0
			}
		},
		light: {
			anchor: {
				type: "enum",
				default: "viewport",
				values: {
					map: {},
					viewport: {}
				},
				"property-type": "data-constant",
				transition: !1,
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				}
			},
			position: {
				type: "array",
				default: [1.15, 210, 30],
				length: 3,
				value: "number",
				"property-type": "data-constant",
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				}
			},
			color: {
				type: "color",
				"property-type": "data-constant",
				default: "#ffffff",
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				transition: !0
			},
			intensity: {
				type: "number",
				"property-type": "data-constant",
				default: .5,
				minimum: 0,
				maximum: 1,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				transition: !0
			}
		},
		projection: {
			name: {
				type: "enum",
				values: {
					albers: {},
					equalEarth: {},
					equirectangular: {},
					lambertConformalConic: {},
					mercator: {},
					naturalEarth: {},
					winkelTripel: {},
					globe: {}
				},
				default: "mercator",
				required: !0
			},
			center: {
				type: "array",
				length: 2,
				value: "number",
				"property-type": "data-constant",
				minimum: [-180, -90],
				maximum: [180, 90],
				transition: !1,
				requires: [{
					name: ["albers", "lambertConformalConic"]
				}]
			},
			parallels: {
				type: "array",
				length: 2,
				value: "number",
				"property-type": "data-constant",
				minimum: [-90, -90],
				maximum: [90, 90],
				transition: !1,
				requires: [{
					name: ["albers", "lambertConformalConic"]
				}]
			}
		},
		terrain: {
			source: {
				type: "string",
				required: !0
			},
			exaggeration: {
				type: "number",
				"property-type": "data-constant",
				default: 1,
				minimum: 0,
				maximum: 1e3,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				transition: !0,
				requires: ["source"]
			}
		},
		paint: ["paint_fill", "paint_line", "paint_circle", "paint_heatmap", "paint_fill-extrusion", "paint_symbol", "paint_raster", "paint_hillshade", "paint_background", "paint_sky"],
		paint_fill: {
			"fill-antialias": {
				type: "boolean",
				default: !0,
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"fill-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"fill-color": {
				type: "color",
				default: "#000000",
				transition: !0,
				requires: [{
					"!": "fill-pattern"
				}],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"fill-outline-color": {
				type: "color",
				transition: !0,
				requires: [{
					"!": "fill-pattern"
				}, {
					"fill-antialias": !0
				}],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"fill-translate": {
				type: "array",
				value: "number",
				length: 2,
				default: [0, 0],
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"fill-translate-anchor": {
				type: "enum",
				values: {
					map: {},
					viewport: {}
				},
				default: "map",
				requires: ["fill-translate"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"fill-pattern": {
				type: "resolvedImage",
				transition: !1,
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			}
		},
		"paint_fill-extrusion": {
			"fill-extrusion-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"fill-extrusion-color": {
				type: "color",
				default: "#000000",
				transition: !0,
				requires: [{
					"!": "fill-extrusion-pattern"
				}],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"fill-extrusion-translate": {
				type: "array",
				value: "number",
				length: 2,
				default: [0, 0],
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"fill-extrusion-translate-anchor": {
				type: "enum",
				values: {
					map: {},
					viewport: {}
				},
				default: "map",
				requires: ["fill-extrusion-translate"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"fill-extrusion-pattern": {
				type: "resolvedImage",
				transition: !1,
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"fill-extrusion-height": {
				type: "number",
				default: 0,
				minimum: 0,
				units: "meters",
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"fill-extrusion-base": {
				type: "number",
				default: 0,
				minimum: 0,
				units: "meters",
				transition: !0,
				requires: ["fill-extrusion-height"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"fill-extrusion-vertical-gradient": {
				type: "boolean",
				default: !0,
				transition: !1,
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"fill-extrusion-ambient-occlusion-intensity": {
				"property-type": "data-constant",
				type: "number",
				private: !0,
				default: 0,
				minimum: 0,
				maximum: 1,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				transition: !0
			},
			"fill-extrusion-ambient-occlusion-radius": {
				"property-type": "data-constant",
				type: "number",
				private: !0,
				default: 3,
				minimum: 0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				transition: !0,
				requires: ["fill-extrusion-edge-radius"]
			}
		},
		paint_line: {
			"line-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"line-color": {
				type: "color",
				default: "#000000",
				transition: !0,
				requires: [{
					"!": "line-pattern"
				}],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"line-translate": {
				type: "array",
				value: "number",
				length: 2,
				default: [0, 0],
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"line-translate-anchor": {
				type: "enum",
				values: {
					map: {},
					viewport: {}
				},
				default: "map",
				requires: ["line-translate"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"line-width": {
				type: "number",
				default: 1,
				minimum: 0,
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"line-gap-width": {
				type: "number",
				default: 0,
				minimum: 0,
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"line-offset": {
				type: "number",
				default: 0,
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"line-blur": {
				type: "number",
				default: 0,
				minimum: 0,
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"line-dasharray": {
				type: "array",
				value: "number",
				minimum: 0,
				transition: !1,
				units: "line widths",
				requires: [{
					"!": "line-pattern"
				}],
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"line-pattern": {
				type: "resolvedImage",
				transition: !1,
				expression: {
					interpolated: !1,
					parameters: ["zoom", "feature"]
				},
				"property-type": "data-driven"
			},
			"line-gradient": {
				type: "color",
				transition: !1,
				requires: [{
					"!": "line-pattern"
				}, {
					source: "geojson",
					has: {
						lineMetrics: !0
					}
				}],
				expression: {
					interpolated: !0,
					parameters: ["line-progress"]
				},
				"property-type": "color-ramp"
			},
			"line-trim-offset": {
				type: "array",
				value: "number",
				length: 2,
				default: [0, 0],
				minimum: [0, 0],
				maximum: [1, 1],
				transition: !1,
				requires: [{
					source: "geojson",
					has: {
						lineMetrics: !0
					}
				}],
				"property-type": "constant"
			}
		},
		paint_circle: {
			"circle-radius": {
				type: "number",
				default: 5,
				minimum: 0,
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"circle-color": {
				type: "color",
				default: "#000000",
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"circle-blur": {
				type: "number",
				default: 0,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"circle-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"circle-translate": {
				type: "array",
				value: "number",
				length: 2,
				default: [0, 0],
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"circle-translate-anchor": {
				type: "enum",
				values: {
					map: {},
					viewport: {}
				},
				default: "map",
				requires: ["circle-translate"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"circle-pitch-scale": {
				type: "enum",
				values: {
					map: {},
					viewport: {}
				},
				default: "map",
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"circle-pitch-alignment": {
				type: "enum",
				values: {
					map: {},
					viewport: {}
				},
				default: "viewport",
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"circle-stroke-width": {
				type: "number",
				default: 0,
				minimum: 0,
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"circle-stroke-color": {
				type: "color",
				default: "#000000",
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"circle-stroke-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			}
		},
		paint_heatmap: {
			"heatmap-radius": {
				type: "number",
				default: 30,
				minimum: 1,
				transition: !0,
				units: "pixels",
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"heatmap-weight": {
				type: "number",
				default: 1,
				minimum: 0,
				transition: !1,
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"heatmap-intensity": {
				type: "number",
				default: 1,
				minimum: 0,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"heatmap-color": {
				type: "color",
				default: ["interpolate", ["linear"],
					["heatmap-density"], 0, "rgba(0, 0, 255, 0)", .1, "royalblue", .3, "cyan", .5, "lime", .7, "yellow", 1, "red"
				],
				transition: !1,
				expression: {
					interpolated: !0,
					parameters: ["heatmap-density"]
				},
				"property-type": "color-ramp"
			},
			"heatmap-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			}
		},
		paint_symbol: {
			"icon-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				requires: ["icon-image"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"icon-color": {
				type: "color",
				default: "#000000",
				transition: !0,
				requires: ["icon-image"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"icon-halo-color": {
				type: "color",
				default: "rgba(0, 0, 0, 0)",
				transition: !0,
				requires: ["icon-image"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"icon-halo-width": {
				type: "number",
				default: 0,
				minimum: 0,
				transition: !0,
				units: "pixels",
				requires: ["icon-image"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"icon-halo-blur": {
				type: "number",
				default: 0,
				minimum: 0,
				transition: !0,
				units: "pixels",
				requires: ["icon-image"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"icon-translate": {
				type: "array",
				value: "number",
				length: 2,
				default: [0, 0],
				transition: !0,
				units: "pixels",
				requires: ["icon-image"],
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"icon-translate-anchor": {
				type: "enum",
				values: {
					map: {},
					viewport: {}
				},
				default: "map",
				requires: ["icon-image", "icon-translate"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"text-color": {
				type: "color",
				default: "#000000",
				transition: !0,
				overridable: !0,
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"text-halo-color": {
				type: "color",
				default: "rgba(0, 0, 0, 0)",
				transition: !0,
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"text-halo-width": {
				type: "number",
				default: 0,
				minimum: 0,
				transition: !0,
				units: "pixels",
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"text-halo-blur": {
				type: "number",
				default: 0,
				minimum: 0,
				transition: !0,
				units: "pixels",
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: ["zoom", "feature", "feature-state"]
				},
				"property-type": "data-driven"
			},
			"text-translate": {
				type: "array",
				value: "number",
				length: 2,
				default: [0, 0],
				transition: !0,
				units: "pixels",
				requires: ["text-field"],
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"text-translate-anchor": {
				type: "enum",
				values: {
					map: {},
					viewport: {}
				},
				default: "map",
				requires: ["text-field", "text-translate"],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			}
		},
		paint_raster: {
			"raster-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"raster-hue-rotate": {
				type: "number",
				default: 0,
				period: 360,
				transition: !0,
				units: "degrees",
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"raster-brightness-min": {
				type: "number",
				default: 0,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"raster-brightness-max": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"raster-saturation": {
				type: "number",
				default: 0,
				minimum: -1,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"raster-contrast": {
				type: "number",
				default: 0,
				minimum: -1,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"raster-resampling": {
				type: "enum",
				values: {
					linear: {},
					nearest: {}
				},
				default: "linear",
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"raster-fade-duration": {
				type: "number",
				default: 300,
				minimum: 0,
				transition: !1,
				units: "milliseconds",
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			}
		},
		paint_hillshade: {
			"hillshade-illumination-direction": {
				type: "number",
				default: 335,
				minimum: 0,
				maximum: 359,
				transition: !1,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"hillshade-illumination-anchor": {
				type: "enum",
				values: {
					map: {},
					viewport: {}
				},
				default: "viewport",
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"hillshade-exaggeration": {
				type: "number",
				default: .5,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"hillshade-shadow-color": {
				type: "color",
				default: "#000000",
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"hillshade-highlight-color": {
				type: "color",
				default: "#FFFFFF",
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"hillshade-accent-color": {
				type: "color",
				default: "#000000",
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			}
		},
		paint_background: {
			"background-color": {
				type: "color",
				default: "#000000",
				transition: !0,
				requires: [{
					"!": "background-pattern"
				}],
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"background-pattern": {
				type: "resolvedImage",
				transition: !1,
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"background-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			}
		},
		paint_sky: {
			"sky-type": {
				type: "enum",
				values: {
					gradient: {},
					atmosphere: {}
				},
				default: "atmosphere",
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"sky-atmosphere-sun": {
				type: "array",
				value: "number",
				length: 2,
				units: "degrees",
				minimum: [0, 0],
				maximum: [360, 180],
				transition: !1,
				requires: [{
					"sky-type": "atmosphere"
				}],
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"sky-atmosphere-sun-intensity": {
				type: "number",
				requires: [{
					"sky-type": "atmosphere"
				}],
				default: 10,
				minimum: 0,
				maximum: 100,
				transition: !1,
				"property-type": "data-constant"
			},
			"sky-gradient-center": {
				type: "array",
				requires: [{
					"sky-type": "gradient"
				}],
				value: "number",
				default: [0, 0],
				length: 2,
				units: "degrees",
				minimum: [0, 0],
				maximum: [360, 180],
				transition: !1,
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"sky-gradient-radius": {
				type: "number",
				requires: [{
					"sky-type": "gradient"
				}],
				default: 90,
				minimum: 0,
				maximum: 180,
				transition: !1,
				expression: {
					interpolated: !1,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			},
			"sky-gradient": {
				type: "color",
				default: ["interpolate", ["linear"],
					["sky-radial-progress"], .8, "#87ceeb", 1, "white"
				],
				transition: !1,
				requires: [{
					"sky-type": "gradient"
				}],
				expression: {
					interpolated: !0,
					parameters: ["sky-radial-progress"]
				},
				"property-type": "color-ramp"
			},
			"sky-atmosphere-halo-color": {
				type: "color",
				default: "white",
				transition: !1,
				requires: [{
					"sky-type": "atmosphere"
				}],
				"property-type": "data-constant"
			},
			"sky-atmosphere-color": {
				type: "color",
				default: "white",
				transition: !1,
				requires: [{
					"sky-type": "atmosphere"
				}],
				"property-type": "data-constant"
			},
			"sky-opacity": {
				type: "number",
				default: 1,
				minimum: 0,
				maximum: 1,
				transition: !0,
				expression: {
					interpolated: !0,
					parameters: ["zoom"]
				},
				"property-type": "data-constant"
			}
		},
		transition: {
			duration: {
				type: "number",
				default: 300,
				minimum: 0,
				units: "milliseconds"
			},
			delay: {
				type: "number",
				default: 0,
				minimum: 0,
				units: "milliseconds"
			}
		},
		"property-type": {
			"data-driven": {
				type: "property-type"
			},
			"color-ramp": {
				type: "property-type"
			},
			"data-constant": {
				type: "property-type"
			},
			constant: {
				type: "property-type"
			}
		},
		promoteId: {
			"*": {
				type: "string"
			}
		}
	};

	function rf(t) {
		if (!0 === t || !1 === t) return !0;
		if (!Array.isArray(t) || 0 === t.length) return !1;
		switch (t[0]) {
			case "has":
				return t.length >= 2 && "$id" !== t[1] && "$type" !== t[1];
			case "in":
				return t.length >= 3 && ("string" != typeof t[1] || Array.isArray(t[2]));
			case "!in":
			case "!has":
			case "none":
				return !1;
			case "==":
			case "!=":
			case ">":
			case ">=":
			case "<":
			case "<=":
				return 3 !== t.length || Array.isArray(t[1]) || Array.isArray(t[2]);
			case "any":
			case "all":
				for (const e of t.slice(1))
					if (!rf(e) && "boolean" != typeof e) return !1;
				return !0;
			default:
				return !0
		}
	}

	function sf(t, e = "fill") {
		if (null == t) return {
			filter: () => !0,
			needGeometry: !1,
			needFeature: !1
		};
		rf(t) || (t = df(t));
		const i = t;
		let n = !0;
		try {
			n = function(t) {
				if (!lf(t)) return t;
				let e = ef(t);
				return af(e), e = of(e), e
			}(i)
		} catch (t) {
			console.warn(`Failed to extract static filter. Filter will continue working, but at higher memory usage and slower framerate.\nThis is most likely a bug, please report this via https://github.com/mapbox/mapbox-gl-js/issues/new?assignees=&labels=&template=Bug_report.md\nand paste the contents of this message in the report.\nThank you!\nFilter Expression:\n${JSON.stringify(i, null, 2)}\n        `)
		}
		const r = nf[`filter_${e}`],
			s = Kp(n, r);
		let o = null;
		if ("error" === s.result) throw new Error(s.value.map((t => `${t.key}: ${t.message}`)).join(", "));
		o = (t, e, i) => s.value.evaluate(t, e, {}, i);
		let a = null,
			l = null;
		if (n !== i) {
			const t = Kp(i, r);
			if ("error" === t.result) throw new Error(t.value.map((t => `${t.key}: ${t.message}`)).join(", "));
			a = (e, i, n, r, s) => t.value.evaluate(e, i, {}, n, void 0, void 0, r, s), l = !Mg(t.value.expression)
		}
		return {
			filter: o,
			dynamicFilter: a || void 0,
			needGeometry: cf(n),
			needFeature: !!l
		}
	}

	function of(t) {
		if (!Array.isArray(t)) return t;
		const e = function(t) {
			if (hf.has(t[0]))
				for (let e = 1; e < t.length; e++) {
					if (lf(t[e])) return !0
				}
			return t
		}(t);
		return !0 === e ? e : e.map((t => of(t)))
	}

	function af(t) {
		let e = !1;
		const i = [];
		if ("case" === t[0]) {
			for (let n = 1; n < t.length - 1; n += 2) e = e || lf(t[n]), i.push(t[n + 1]);
			i.push(t[t.length - 1])
		} else if ("match" === t[0]) {
			e = e || lf(t[1]);
			for (let e = 2; e < t.length - 1; e += 2) i.push(t[e + 1]);
			i.push(t[t.length - 1])
		} else if ("step" === t[0]) {
			e = e || lf(t[1]);
			for (let e = 1; e < t.length - 1; e += 2) i.push(t[e + 1])
		}
		e && (t.length = 0, t.push("any", ...i));
		for (let e = 1; e < t.length; e++) af(t[e])
	}

	function lf(t) {
		if (!Array.isArray(t)) return !1;
		if ("pitch" === (e = t[0]) || "distance-from-center" === e) return !0;
		var e;
		for (let e = 1; e < t.length; e++) {
			if (lf(t[e])) return !0
		}
		return !1
	}
	const hf = new Set(["in", "==", "!=", ">", ">=", "<", "<=", "to-boolean"]);

	function uf(t, e) {
		return t < e ? -1 : t > e ? 1 : 0
	}

	function cf(t) {
		if (!Array.isArray(t)) return !1;
		if ("within" === t[0]) return !0;
		for (let e = 1; e < t.length; e++)
			if (cf(t[e])) return !0;
		return !1
	}

	function df(t) {
		if (!t) return !0;
		const e = t[0];
		if (t.length <= 1) return "any" !== e;
		var i;
		return "==" === e ? gf(t[1], t[2], "==") : "!=" === e ? mf(gf(t[1], t[2], "==")) : "<" === e || ">" === e || "<=" === e || ">=" === e ? gf(t[1], t[2], e) : "any" === e ? (i = t.slice(1), ["any"].concat(i.map(df))) : "all" === e ? ["all"].concat(t.slice(1).map(df)) : "none" === e ? ["all"].concat(t.slice(1).map(df).map(mf)) : "in" === e ? pf(t[1], t.slice(2)) : "!in" === e ? mf(pf(t[1], t.slice(2))) : "has" === e ? ff(t[1]) : "!has" === e ? mf(ff(t[1])) : "within" !== e || t
	}

	function gf(t, e, i) {
		switch (t) {
			case "$type":
				return [`filter-type-${i}`, e];
			case "$id":
				return [`filter-id-${i}`, e];
			default:
				return [`filter-${i}`, t, e]
		}
	}

	function pf(t, e) {
		if (0 === e.length) return !1;
		switch (t) {
			case "$type":
				return ["filter-type-in", ["literal", e]];
			case "$id":
				return ["filter-id-in", ["literal", e]];
			default:
				return e.length > 200 && !e.some((t => typeof t != typeof e[0])) ? ["filter-in-large", t, ["literal", e.sort(uf)]] : ["filter-in-small", t, ["literal", e]]
		}
	}

	function ff(t) {
		switch (t) {
			case "$type":
				return !0;
			case "$id":
				return ["filter-has-id"];
			default:
				return ["filter-has", t]
		}
	}

	function mf(t) {
		return ["!", t]
	}
	var _f = ["type", "source", "source-layer", "minzoom", "maxzoom", "filter", "layout"];

	function yf(t, e) {
		const i = {};
		for (const e in t) "ref" !== e && (i[e] = t[e]);
		return _f.forEach((t => {
			t in e && (i[t] = e[t])
		})), i
	}
	var xf = {
			thin: 100,
			hairline: 100,
			"ultra-light": 100,
			"extra-light": 100,
			light: 200,
			book: 300,
			regular: 400,
			normal: 400,
			plain: 400,
			roman: 400,
			standard: 400,
			medium: 500,
			"semi-bold": 600,
			"demi-bold": 600,
			bold: 700,
			heavy: 800,
			black: 800,
			"extra-bold": 800,
			"ultra-black": 900,
			"extra-black": 900,
			"ultra-bold": 900,
			"heavy-black": 900,
			fat: 900,
			poster: 900
		},
		vf = " ",
		wf = /(italic|oblique)$/i,
		bf = {},
		Sf = function(t, e, i) {
			var n = bf[t];
			if (!n) {
				Array.isArray(t) || (t = [t]);
				for (var r = 400, s = "normal", o = [], a = 0, l = t.length; a < l; ++a) {
					var h = t[a].split(" "),
						u = h[h.length - 1].toLowerCase();
					for (var c in "normal" == u || "italic" == u || "oblique" == u ? (s = u, h.pop(), u = h[h.length - 1].toLowerCase()) : wf.test(u) && (u = u.replace(wf, ""), s = h[h.length - 1].replace(u, "")), xf) {
						var d = h.length > 1 ? h[h.length - 2].toLowerCase() : "";
						if (u == c || u == c.replace("-", "") || d + "-" + u == c) {
							r = xf[c], h.pop(), d && c.startsWith(d) && h.pop();
							break
						}
					}
					"number" == typeof u && (r = u);
					var g = h.join(vf).replace("Klokantech Noto Sans", "Noto Sans"); - 1 !== g.indexOf(vf) && (g = '"' + g + '"'), o.push(g)
				}
				n = bf[t] = [s, r, o]
			}
			return n[0] + vf + n[1] + vf + e + "px" + (i ? "/" + i : "") + vf + n[2]
		},
		Ef = ed(Sf);
	const Cf = "https://api.mapbox.com";

	function Tf(t) {
		const e = "mapbox://";
		return 0 !== t.indexOf(e) ? "" : t.slice(9)
	}

	function Pf(t, e) {
		const i = Tf(t);
		if (!i) return decodeURI(new URL(t, location.href).href);
		const n = "styles/";
		if (0 !== i.indexOf(n)) throw new Error(`unexpected style url: ${t}`);
		const r = i.slice(7);
		return `${Cf}/styles/v1/${r}?&access_token=${e}`
	}

	function Rf(t, e, i, n) {
		const r = new URL(t, n),
			s = Tf(t);
		if (!s) return e ? (r.searchParams.has(i) || r.searchParams.set(i, e), decodeURI(r.href)) : decodeURI(r.href);
		if ("mapbox.satellite" === s) {
			return `https://api.mapbox.com/v4/${s}/{z}/{x}/{y}${window.devicePixelRatio >= 1.5 ? "@2x" : ""}.webp?access_token=${e}`
		}
		return `https://{a-d}.tiles.mapbox.com/v4/${s}/{z}/{x}/{y}.vector.pbf?access_token=${e}`
	}
	const Ff = {},
		Mf = {};
	let If = 0;

	function Lf(t) {
		return t.id || (t.id = If++), t.id
	}

	function kf(t) {
		return t * Math.PI / 180
	}
	const Af = function() {
		const t = [];
		for (let e = 78271.51696402048; t.length <= 24; e /= 2) t.push(e);
		return t
	}();

	function Df(t, e) {
		if ("undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "undefined" != typeof OffscreenCanvas) return new OffscreenCanvas(t, e);
		const i = document.createElement("canvas");
		return i.width = t, i.height = e, i
	}
	new bs({
		extent: yn("EPSG:3857").getExtent(),
		resolutions: Af
	});
	const Of = {};

	function zf(t, e, i = {}, n) {
		if (e in Of) return n && (n.request = Of[e][0]), Of[e][1];
		const r = i.transformRequest && i.transformRequest(e, t) || e,
			s = xt((() => r)).then((t => (t instanceof Request || (t = new Request(t)), t.headers.get("Accept") || t.headers.set("Accept", "application/json"), n && (n.request = t), fetch(t).then((function(t) {
				return delete Of[e], t.ok ? t.json() : Promise.reject(new Error("Error fetching source " + e))
			})).catch((function(t) {
				return delete Of[e], Promise.reject(new Error("Error fetching source " + e))
			})))));
		return Of[e] = [r, s], s
	}
	const Gf = {};

	function Nf(t, e, i, n) {
		const r = document.createElement("canvas"),
			s = [2 * i * e.pixelRatio + e.width, 2 * i * e.pixelRatio + e.height];
		r.width = s[0], r.height = s[1];
		const o = r.getContext("2d");
		o.drawImage(t, e.x, e.y, e.width, e.height, i * e.pixelRatio, i * e.pixelRatio, e.width, e.height);
		const a = o.getImageData(0, 0, s[0], s[1]);
		o.globalCompositeOperation = "destination-over", o.fillStyle = `rgba(${255 * n.r},${255 * n.g},${255 * n.b},${n.a})`;
		const l = a.data;
		for (let t = 0, n = a.width; t < n; ++t)
			for (let r = 0, s = a.height; r < s; ++r) {
				l[4 * (r * n + t) + 3] > 0 && o.arc(t, r, i * e.pixelRatio, 0, 2 * Math.PI)
			}
		return o.fill(), r
	}

	function jf(t, e, i) {
		const n = Math.max(0, Math.min(1, (i - t) / (e - t)));
		return n * n * (3 - 2 * n)
	}

	function Uf(t, e, i) {
		const n = document.createElement("canvas");
		n.width = e.width, n.height = e.height;
		const r = n.getContext("2d");
		r.drawImage(t, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height);
		const s = r.getImageData(0, 0, e.width, e.height),
			o = s.data;
		for (let t = 0, e = s.width; t < e; ++t)
			for (let n = 0, r = s.height; n < r; ++n) {
				const r = 4 * (n * e + t),
					s = .75,
					a = .1,
					l = jf(s - a, s + a, o[r + 3] / 255);
				l > 0 ? (o[r + 0] = Math.round(255 * i.r * l), o[r + 1] = Math.round(255 * i.g * l), o[r + 2] = Math.round(255 * i.b * l), o[r + 3] = Math.round(255 * l)) : o[r + 3] = 0
			}
		return r.putImageData(s, 0, 0), n
	}
	const Bf = Array(256).join(" ");

	function $f(t, e) {
		if (e >= .05) {
			let i = "";
			const n = t.split("\n"),
				r = Bf.slice(0, Math.round(e / .1));
			for (let t = 0, e = n.length; t < e; ++t) t > 0 && (i += "\n"), i += n[t].split("").join(r);
			return i
		}
		return t
	}
	let Vf;

	function Xf() {
		return Vf || (Vf = Df(1, 1).getContext("2d")), Vf
	}

	function Wf(t, e) {
		return Xf().measureText(t).width + (t.length - 1) * e
	}
	const qf = {};

	function Zf(t, e, i, n) {
		if (-1 !== t.indexOf("\n")) {
			const r = t.split("\n"),
				s = [];
			for (let t = 0, o = r.length; t < o; ++t) s.push(Zf(r[t], e, i, n));
			return s.join("\n")
		}
		const r = i + "," + e + "," + t + "," + n;
		let s = qf[r];
		if (!s) {
			const o = t.split(" ");
			if (o.length > 1) {
				const t = Xf();
				t.font = e;
				const r = t.measureText("M").width * i;
				let a = "";
				const l = [];
				for (let t = 0, e = o.length; t < e; ++t) {
					const e = o[t],
						i = a + (a ? " " : "") + e;
					Wf(i, n) <= r ? a = i : (a && l.push(a), a = e)
				}
				a && l.push(a);
				for (let t = 0, e = l.length; t < e && e > 1; ++t) {
					const i = l[t];
					if (Wf(i, n) < .35 * r) {
						const r = t > 0 ? Wf(l[t - 1], n) : 1 / 0,
							s = t < e - 1 ? Wf(l[t + 1], n) : 1 / 0;
						l.splice(t, 1), e -= 1, r < s ? (l[t - 1] += " " + i, t -= 1) : l[t] = i + " " + l[t]
					}
				}
				for (let t = 0, e = l.length - 1; t < e; ++t) {
					const i = l[t],
						s = l[t + 1];
					if (Wf(i, n) > .7 * r && Wf(s, n) < .6 * r) {
						const o = i.split(" "),
							a = o.pop();
						Wf(a, n) < .2 * r && (l[t] = o.join(" "), l[t + 1] = a + " " + s), e -= 1
					}
				}
				s = l.join("\n")
			} else s = t;
			s = $f(s, n), qf[r] = s
		}
		return s
	}
	const Yf = /font-family: ?([^;]*);/,
		Kf = /("|')/g;
	let Hf;

	function Jf(t) {
		if (!Hf) {
			Hf = {};
			const t = document.styleSheets;
			for (let e = 0, i = t.length; e < i; ++e) {
				const i = t[e];
				try {
					const t = i.rules || i.cssRules;
					if (t)
						for (let e = 0, i = t.length; e < i; ++e) {
							const i = t[e];
							if (5 == i.type) {
								const t = i.cssText.match(Yf);
								Hf[t[1].replace(Kf, "")] = !0
							}
						}
				} catch (t) {}
			}
		}
		return t in Hf
	}
	const Qf = {};

	function tm(t, e = "https://cdn.jsdelivr.net/npm/@fontsource/{font-family}/{fontweight}{-fontstyle}.css") {
		const i = t.toString();
		if (i in Qf) return Qf[i];
		const n = [];
		for (let e = 0, i = t.length; e < i; ++e) {
			t[e] = t[e].replace("Arial Unicode MS", "Arial");
			const i = t[e],
				r = Ef(i, 1);
			ce(r);
			const s = r.split(" ");
			n.push([s.slice(3).join(" ").replace(/"/g, ""), s[1], s[0]])
		}
		for (let t = 0, i = n.length; t < i; ++t) {
			const i = n[t],
				r = i[0];
			if (!Jf(r) && 100 !== ae.get(`${i[2]}\n${i[1]} \n${r}`)) {
				const t = e.replace("{font-family}", r.replace(/ /g, "-").toLowerCase()).replace("{Font+Family}", r.replace(/ /g, "+")).replace("{fontweight}", i[1]).replace("{-fontstyle}", i[2].replace("normal", "").replace(/(.+)/, "-$1")).replace("{fontstyle}", i[2]);
				if (!document.querySelector('link[href="' + t + '"]')) {
					const e = document.createElement("link");
					e.href = t, e.rel = "stylesheet", document.head.appendChild(e)
				}
			}
		}
		return Qf[i] = t, t
	}
	const em = {
			Point: 1,
			MultiPoint: 1,
			LineString: 2,
			MultiLineString: 2,
			Polygon: 3,
			MultiPolygon: 3
		},
		im = {
			center: [.5, .5],
			left: [0, .5],
			right: [1, .5],
			top: [.5, 0],
			bottom: [.5, 1],
			"top-left": [0, 0],
			"top-right": [1, 0],
			"bottom-left": [0, 1],
			"bottom-right": [1, 1]
		},
		nm = function(t, e) {
			const i = Qp(t, e);
			if ("error" === i.result) throw new Error(i.value.map((t => `${t.key}: ${t.message}`)).join(", "));
			return i.value
		},
		rm = {},
		sm = {
			zoom: 0
		};
	let om, am;

	function lm(t, e, i, n, r, s, o) {
		const a = t.id;
		s || (s = {}, console.warn("No functionCache provided to getValue()")), s[a] || (s[a] = {});
		const l = s[a];
		if (!l[i]) {
			let n = (t[e] || rm)[i];
			const r = nf[`${e}_${t.type}`][i];
			void 0 === n && (n = r.default);
			let s = (h = n, Array.isArray(h) && h.length > 0 && "string" == typeof h[0] && h[0] in Xp);
			if (!s && Zp(n) && (n = dd(n, r), s = !0), s) {
				const t = nm(n, r);
				l[i] = t.evaluate.bind(t)
			} else "color" == r.type && (n = ud.parse(n)), l[i] = function() {
				return n
			}
		}
		var h;
		return sm.zoom = n, l[i](sm, r, o)
	}

	function hm(t, e, i, n) {
		if (!lm(t, "layout", "icon-allow-overlap", e, i, n)) return "declutter";
		return lm(t, "layout", "icon-ignore-placement", e, i, n) ? "none" : "obstacle"
	}

	function um(t, e, i, n, r) {
		return r || console.warn("No filterCache provided to evaluateFilter()"), t in r || (r[t] = sf(e).filter), sm.zoom = n, r[t](sm, i)
	}

	function cm(t, e) {
		if (t) {
			if (0 === t.a || 0 === e) return;
			const i = t.a;
			return e = void 0 === e ? 1 : e, 0 === i ? "transparent" : "rgba(" + Math.round(255 * t.r / i) + "," + Math.round(255 * t.g / i) + "," + Math.round(255 * t.b / i) + "," + i * e + ")"
		}
		return t
	}
	const dm = /\{[^{}}]*\}/g;

	function gm(t, e) {
		return t.replace(dm, (function(t) {
			return e[t.slice(1, -1)] || ""
		}))
	}
	const pm = {};

	function fm(t, e, i, n = Af, r = void 0, s = void 0, o = void 0, a = void 0) {
		if ("string" == typeof e && (e = JSON.parse(e)), 8 != e.version) throw new Error("glStyle version 8 required.");
		let h, u, c;
		if (pm[function(t, e) {
				return Lf(t) + "." + l(e)
			}(e, t)] = Array.from(arguments), s)
			if ("undefined" != typeof Image) {
				const e = new Image;
				let i;
				xt((() => s)).then((t => {
					t instanceof Request ? fetch(t).then((t => t.blob())).then((t => {
						i = URL.createObjectURL(t), e.src = i
					})).catch((() => {})) : (e.crossOrigin = "anonymous", e.src = t, i && URL.revokeObjectURL(i))
				})), e.onload = function() {
					h = e, u = [e.width, e.height], t.changed(), e.onload = null
				}
			} else if ("undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope) {
			const t = self;
			t.postMessage({
				action: "loadImage",
				src: s
			}), t.addEventListener("message", (function(t) {
				"imageLoaded" === t.data.action && t.data.src === s && (h = t.data.image, u = [h.width, h.height])
			}))
		}
		const d = function(t) {
				t = t.slice();
				const e = Object.create(null);
				for (let i = 0; i < t.length; i++) e[t[i].id] = t[i];
				for (let i = 0; i < t.length; i++) "ref" in t[i] && (t[i] = yf(t[i], e[t[i].ref]));
				return t
			}(e.layers),
			g = {},
			p = [],
			f = {},
			m = {},
			_ = function(t) {
				let e = Ff[t.id];
				return e || (e = {}, Ff[Lf(t)] = e), e
			}(e),
			y = function(t) {
				let e = Mf[t.id];
				return e || (e = {}, Mf[Lf(t)] = e), e
			}(e);
		let x;
		for (let t = 0, n = d.length; t < n; ++t) {
			const n = d[t],
				r = n.id;
			if ("string" == typeof i && n.source == i || -1 !== i.indexOf(r)) {
				const i = n["source-layer"];
				if (x) {
					if (n.source !== x) throw new Error(`Layer "${r}" does not use source "${x}`)
				} else {
					x = n.source;
					const t = e.sources[x];
					if (!t) throw new Error(`Source "${x}" is not defined`);
					const i = t.type;
					if ("vector" !== i && "geojson" !== i) throw new Error(`Source "${x}" is not of type "vector" or "geojson", but "${i}"`)
				}
				let s = g[i];
				s || (s = [], g[i] = s), s.push({
					layer: n,
					index: t
				}), p.push(r)
			}
		}
		const v = new is,
			w = new be,
			b = [],
			S = function(i, s, l) {
				const d = i.getProperties(),
					p = g[d.layer];
				if (!p) return;
				let x = n.indexOf(s); - 1 == x && (x = function(t, e) {
					let i = 0;
					const n = e.length;
					for (; i < n; ++i)
						if (e[i] < t && i + 1 < n) {
							const n = e[i] / e[i + 1];
							return i + Math.log(e[i] / t) / Math.log(n)
						} return n - 1
				}(s, n));
				const S = em[i.getGeometry().getType()],
					E = {
						id: i.getId(),
						properties: d,
						type: S
					},
					C = t.get("mapbox-featurestate")[i.getId()];
				let T = -1;
				for (let n = 0, g = p.length; n < g; ++n) {
					const g = p[n],
						P = g.layer,
						R = P.id;
					if (void 0 !== l && l !== R) continue;
					const F = P.layout || rm,
						M = P.paint || rm;
					if ("none" === F.visibility || "minzoom" in P && x < P.minzoom || "maxzoom" in P && x >= P.maxzoom) continue;
					const I = P.filter;
					if (!I || um(R, I, E, x, y)) {
						let n, l, p, y, R, I;
						const L = g.index;
						if (3 == S && ("fill" == P.type || "fill-extrusion" == P.type))
							if (l = lm(P, "paint", P.type + "-opacity", x, E, _, C), P.type + "-pattern" in M) {
								const t = lm(P, "paint", P.type + "-pattern", x, E, _, C);
								if (t) {
									const e = "string" == typeof t ? gm(t, d) : t.toString();
									if (h && r && r[e]) {
										++T, I = b[T], I && I.getFill() && !I.getStroke() && !I.getText() || (I = new ls({
											fill: new be
										}), b[T] = I), p = I.getFill(), I.setZIndex(L);
										const t = e + "." + l;
										let i = m[t];
										if (!i) {
											const n = r[e],
												s = Df(n.width, n.height),
												o = s.getContext("2d");
											o.globalAlpha = l, o.drawImage(h, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), i = o.createPattern(s, "repeat"), m[t] = i
										}
										p.setColor(i)
									}
								}
							} else n = cm(lm(P, "paint", P.type + "-color", x, E, _, C), l), P.type + "-outline-color" in M && (R = cm(lm(P, "paint", P.type + "-outline-color", x, E, _, C), l)), R || (R = n), (n || R) && (++T, I = b[T], (!I || n && !I.getFill() || !n && I.getFill() || R && !I.getStroke() || !R && I.getStroke() || I.getText()) && (I = new ls({
								fill: n ? new be : void 0,
								stroke: R ? new is : void 0
							}), b[T] = I), n && (p = I.getFill(), p.setColor(n)), R && (y = I.getStroke(), y.setColor(R), y.setWidth(.5)), I.setZIndex(L));
						if (1 != S && "line" == P.type) {
							n = !("line-pattern" in M) && "line-color" in M ? cm(lm(P, "paint", "line-color", x, E, _, C), lm(P, "paint", "line-opacity", x, E, _, C)) : void 0;
							const t = lm(P, "paint", "line-width", x, E, _, C);
							n && t > 0 && (++T, I = b[T], I && I.getStroke() && !I.getFill() && !I.getText() || (I = new ls({
								stroke: new is
							}), b[T] = I), y = I.getStroke(), y.setLineCap(lm(P, "layout", "line-cap", x, E, _, C)), y.setLineJoin(lm(P, "layout", "line-join", x, E, _, C)), y.setMiterLimit(lm(P, "layout", "line-miter-limit", x, E, _, C)), y.setColor(n), y.setWidth(t), y.setLineDash(M["line-dasharray"] ? lm(P, "paint", "line-dasharray", x, E, _, C).map((function(e) {
								return e * t
							})) : null), I.setZIndex(L))
						}
						let k, A, D, O, z, G, N, j, U, B = !1,
							$ = null,
							V = 0;
						if ((1 == S || 2 == S) && "icon-image" in F) {
							const e = lm(P, "layout", "icon-image", x, E, _, C);
							if (e) {
								let n;
								k = "string" == typeof e ? gm(e, d) : e.toString();
								const o = a ? a(t, k) : void 0;
								if (h && r && r[k] || o) {
									const t = lm(P, "layout", "icon-rotation-alignment", x, E, _, C);
									if (2 == S) {
										const e = i.getGeometry();
										if (e.getFlatMidpoint || e.getFlatMidpoints) {
											const i = e.getExtent();
											if (Math.sqrt(Math.max(Math.pow((i[2] - i[0]) / s, 2), Math.pow((i[3] - i[1]) / s, 2))) > 150) {
												const i = "MultiLineString" === e.getType() ? e.getFlatMidpoints() : e.getFlatMidpoint();
												am || (om = [NaN, NaN], am = new ts("Point", om, [], {}, null)), n = am, om[0] = i[0], om[1] = i[1];
												if ("line" === lm(P, "layout", "symbol-placement", x, E, _, C) && "map" === t) {
													const t = e.getStride(),
														n = e.getFlatCoordinates();
													for (let e = 0, r = n.length - t; e < r; e += t) {
														const r = n[e],
															s = n[e + 1],
															o = n[e + t],
															a = n[e + t + 1],
															l = Math.min(r, o),
															h = Math.min(s, a),
															u = Math.max(r, o),
															c = Math.max(s, a);
														if (i[0] >= l && i[0] <= u && i[1] >= h && i[1] <= c) {
															V = Math.atan2(s - a, o - r);
															break
														}
													}
												}
											}
										}
									}
									if (2 !== S || n) {
										const e = lm(P, "layout", "icon-size", x, E, _, C),
											i = void 0 !== M["icon-color"] ? lm(P, "paint", "icon-color", x, E, _, C) : null;
										if (!i || 0 !== i.a) {
											const n = lm(P, "paint", "icon-halo-color", x, E, _, C),
												s = lm(P, "paint", "icon-halo-width", x, E, _, C);
											let a = `${k}.${e}.${s}.${n}`;
											if (null !== i && (a += `.${i}`), A = f[a], !A) {
												const l = hm(P, x, E, _);
												let d;
												"icon-offset" in F && (d = lm(P, "layout", "icon-offset", x, E, _, C).slice(0), d[1] *= -1);
												let g = i ? [255 * i.r, 255 * i.g, 255 * i.b, i.a] : void 0;
												if (o) {
													const i = {
														color: g,
														rotateWithView: "map" === t,
														displacement: d,
														declutterMode: l,
														scale: e
													};
													"string" == typeof o ? i.src = o : (i.img = o, i.imgSize = [o.width, o.height]), A = new ke(i)
												} else {
													const o = r[k];
													let a, p, f;
													s ? o.sdf ? (a = Nf(Uf(h, o, i), {
														x: 0,
														y: 0,
														width: o.width,
														height: o.height,
														pixelRatio: o.pixelRatio
													}, s, n), g = void 0) : a = Nf(h, o, s, n) : (o.sdf ? (c || (c = Uf(h, {
														x: 0,
														y: 0,
														width: u[0],
														height: u[1]
													}, {
														r: 1,
														g: 1,
														b: 1,
														a: 1
													})), a = c) : a = h, p = [o.width, o.height], f = [o.x, o.y]), A = new ke({
														color: g,
														img: a,
														imgSize: u,
														size: p,
														offset: f,
														rotateWithView: "map" === t,
														scale: e / o.pixelRatio,
														displacement: d,
														declutterMode: l
													})
												}
												f[a] = A
											}
										}
										A && (++T, I = b[T], I && I.getImage() && !I.getFill() && !I.getStroke() || (I = new ls, b[T] = I), I.setGeometry(n), A.setRotation(V + kf(lm(P, "layout", "icon-rotate", x, E, _, C))), A.setOpacity(lm(P, "paint", "icon-opacity", x, E, _, C)), A.setAnchor(im[lm(P, "layout", "icon-anchor", x, E, _, C)]), I.setImage(A), $ = I.getText(), I.setText(void 0), I.setZIndex(L), B = !0, D = !1)
									} else D = !0
								}
							}
						}
						if (1 == S && "circle" === P.type) {
							++T, I = b[T], I && I.getImage() && !I.getFill() && !I.getStroke() || (I = new ls, b[T] = I);
							const t = "circle-radius" in M ? lm(P, "paint", "circle-radius", x, E, _, C) : 5,
								e = cm(lm(P, "paint", "circle-stroke-color", x, E, _, C), lm(P, "paint", "circle-stroke-opacity", x, E, _, C)),
								i = cm(lm(P, "paint", "circle-color", x, E, _, C), lm(P, "paint", "circle-opacity", x, E, _, C)),
								n = lm(P, "paint", "circle-stroke-width", x, E, _, C),
								r = t + "." + e + "." + i + "." + n;
							A = f[r], A || (A = new ve({
								radius: t,
								stroke: e && n > 0 ? new is({
									width: n,
									color: e
								}) : void 0,
								fill: i ? new be({
									color: i
								}) : void 0,
								declutterMode: "none"
							}), f[r] = A), I.setImage(A), $ = I.getText(), I.setText(void 0), I.setGeometry(void 0), I.setZIndex(L), B = !0
						}
						if ("text-field" in F) {
							N = Math.round(lm(P, "layout", "text-size", x, E, _, C));
							const t = lm(P, "layout", "text-font", x, E, _, C);
							G = lm(P, "layout", "text-line-height", x, E, _, C), z = Ef(o ? o(t, e.metadata ? e.metadata["ol:webfonts"] : void 0) : t, N, G), z.includes("sans-serif") || (z += ",sans-serif"), j = lm(P, "layout", "text-letter-spacing", x, E, _, C), U = lm(P, "layout", "text-max-width", x, E, _, C);
							const i = lm(P, "layout", "text-field", x, E, _, C);
							O = "object" == typeof i && i.sections ? 1 === i.sections.length ? i.toString() : i.sections.reduce(((e, i, n) => {
								const r = i.fontStack ? i.fontStack.split(",") : t,
									s = Ef(o ? o(r) : r, N * (i.scale || 1), G);
								let a = i.text;
								if ("\n" === a) return e.push("\n", ""), e;
								if (2 != S) {
									a = Zf(a, s, U, j).split("\n");
									for (let t = 0, i = a.length; t < i; ++t) t > 0 && e.push("\n", ""), e.push(a[t], s);
									return e
								}
								e.push($f(a, j), s)
							}), []) : gm(i, d).trim(), l = lm(P, "paint", "text-opacity", x, E, _, C)
						}
						if (O && l && !D) {
							B || (++T, I = b[T], I && I.getText() && !I.getFill() && !I.getStroke() || (I = new ls, b[T] = I), I.setImage(void 0), I.setGeometry(void 0)), I.getText() || I.setText($ || new us({
								padding: [2, 2, 2, 2]
							})), $ = I.getText();
							const t = F["text-transform"];
							"uppercase" == t ? O = Array.isArray(O) ? O.map(((t, e) => e % 2 ? t : t.toUpperCase())) : O.toUpperCase() : "lowercase" == t && (O = Array.isArray(O) ? O.map(((t, e) => e % 2 ? t : t.toLowerCase())) : O.toLowerCase());
							const e = Array.isArray(O) ? O : 2 == S ? $f(O, j) : Zf(O, z, U, j);
							$.setText(e), $.setFont(z), $.setRotation(kf(lm(P, "layout", "text-rotate", x, E, _, C)));
							const i = lm(P, "layout", "text-anchor", x, E, _, C),
								n = B || 1 == S ? "point" : lm(P, "layout", "symbol-placement", x, E, _, C);
							let r;
							if ("line-center" === n ? ($.setPlacement("line"), r = "center") : $.setPlacement(n), "line" === n && "function" == typeof $.setRepeat) {
								const t = lm(P, "layout", "symbol-spacing", x, E, _, C);
								$.setRepeat(2 * t)
							}
							$.setOverflow("point" === n);
							let s = lm(P, "paint", "text-halo-width", x, E, _, C);
							const o = lm(P, "layout", "text-offset", x, E, _, C),
								a = lm(P, "paint", "text-translate", x, E, _, C);
							let h = 0,
								u = 0;
							if ("point" == n) {
								r = "center", -1 !== i.indexOf("left") ? (r = "left", u = s) : -1 !== i.indexOf("right") && (r = "right", u = -s);
								const t = lm(P, "layout", "text-rotation-alignment", x, E, _, C);
								$.setRotateWithView("map" == t)
							} else $.setMaxAngle(kf(lm(P, "layout", "text-max-angle", x, E, _, C)) * O.length / e.length), $.setRotateWithView(!1);
							$.setTextAlign(r);
							let c = "middle";
							0 == i.indexOf("bottom") ? (c = "bottom", h = -s - .5 * (G - 1) * N) : 0 == i.indexOf("top") && (c = "top", h = s + .5 * (G - 1) * N), $.setTextBaseline(c);
							const d = lm(P, "layout", "text-justify", x, E, _, C);
							$.setJustify("auto" === d ? void 0 : d), $.setOffsetX(o[0] * N + u + a[0]), $.setOffsetY(o[1] * N + h + a[1]), w.setColor(cm(lm(P, "paint", "text-color", x, E, _, C), l)), $.setFill(w);
							const g = cm(lm(P, "paint", "text-halo-color", x, E, _, C), l);
							if (g) {
								v.setColor(g), s *= 2;
								const t = .5 * N;
								v.setWidth(s <= t ? s : t), $.setStroke(v)
							} else $.setStroke(void 0);
							const p = lm(P, "layout", "text-padding", x, E, _, C),
								f = $.getPadding();
							p !== f[0] && (f[0] = p, f[1] = p, f[2] = p, f[3] = p), I.setZIndex(L)
						}
					}
				}
				return T > -1 ? (b.length = T + 1, b) : void 0
			};
		return t.setStyle(S), t.set("mapbox-source", x), t.set("mapbox-layers", p), t.set("mapbox-featurestate", t.get("mapbox-featurestate") || {}), S
	}

	function mm(t, e = 512) {
		return t.getExtent() ? Ac({
			extent: t.getExtent(),
			tileSize: e,
			maxZoom: 22
		}).getResolutions() : Af
	}
	const _m = "units",
		ym = [1, 2, 5],
		xm = 25.4 / .28;
	var vm = class extends ph {
			constructor(t) {
				t = t || {};
				const e = document.createElement("div");
				e.style.pointerEvents = "none", super({
					element: e,
					render: t.render,
					target: t.target
				}), this.on, this.once, this.un;
				const i = void 0 !== t.className ? t.className : t.bar ? "ol-scale-bar" : "ol-scale-line";
				this.innerElement_ = document.createElement("div"), this.innerElement_.className = i + "-inner", this.element.className = i + " " + Wt, this.element.appendChild(this.innerElement_), this.viewState_ = null, this.minWidth_ = void 0 !== t.minWidth ? t.minWidth : 64, this.maxWidth_ = t.maxWidth, this.renderedVisible_ = !1, this.renderedWidth_ = void 0, this.renderedHTML_ = "", this.addChangeListener(_m, this.handleUnitsChanged_), this.setUnits(t.units || "metric"), this.scaleBar_ = t.bar || !1, this.scaleBarSteps_ = t.steps || 4, this.scaleBarText_ = t.text || !1, this.dpi_ = t.dpi || void 0
			}
			getUnits() {
				return this.get(_m)
			}
			handleUnitsChanged_() {
				this.updateElement_()
			}
			setUnits(t) {
				this.set(_m, t)
			}
			setDpi(t) {
				this.dpi_ = t
			}
			updateElement_() {
				const t = this.viewState_;
				if (!t) return void(this.renderedVisible_ && (this.element.style.display = "none", this.renderedVisible_ = !1));
				const e = t.center,
					i = t.projection,
					n = this.getUnits(),
					r = "degrees" == n ? "degrees" : "m";
				let s = xn(i, t.resolution, e, r);
				const o = this.minWidth_ * (this.dpi_ || xm) / xm,
					a = void 0 !== this.maxWidth_ ? this.maxWidth_ * (this.dpi_ || xm) / xm : void 0;
				let l = o * s,
					h = "";
				if ("degrees" == n) {
					const t = Fi.degrees;
					l *= t, l < t / 60 ? (h = "″", s *= 3600) : l < t ? (h = "′", s *= 60) : h = "°"
				} else if ("imperial" == n) l < .9144 ? (h = "in", s /= .0254) : l < 1609.344 ? (h = "ft", s /= .3048) : (h = "mi", s /= 1609.344);
				else if ("nautical" == n) s /= 1852, h = "NM";
				else if ("metric" == n) l < .001 ? (h = "μm", s *= 1e6) : l < 1 ? (h = "mm", s *= 1e3) : l < 1e3 ? h = "m" : (h = "km", s /= 1e3);
				else {
					if ("us" != n) throw new Error("Invalid units");
					l < .9144 ? (h = "in", s *= 39.37) : l < 1609.344 ? (h = "ft", s /= .30480061) : (h = "mi", s /= 1609.3472)
				}
				let u, c, d, g, p, f, m = 3 * Math.floor(Math.log(o * s) / Math.log(10));
				for (;;) {
					d = Math.floor(m / 3);
					const t = Math.pow(10, d);
					if (u = ym[(m % 3 + 3) % 3] * t, c = Math.round(u / s), isNaN(c)) return this.element.style.display = "none", void(this.renderedVisible_ = !1);
					if (void 0 !== a && c >= a) {
						u = g, c = p, d = f;
						break
					}
					if (c >= o) break;
					g = u, p = c, f = d, ++m
				}
				const _ = this.scaleBar_ ? this.createScaleBar(c, u, h) : u.toFixed(d < 0 ? -d : 0) + " " + h;
				this.renderedHTML_ != _ && (this.innerElement_.innerHTML = _, this.renderedHTML_ = _), this.renderedWidth_ != c && (this.innerElement_.style.width = c + "px", this.renderedWidth_ = c), this.renderedVisible_ || (this.element.style.display = "", this.renderedVisible_ = !0)
			}
			createScaleBar(t, e, i) {
				const n = this.getScaleForResolution(),
					r = n < 1 ? Math.round(1 / n).toLocaleString() + " : 1" : "1 : " + Math.round(n).toLocaleString(),
					s = this.scaleBarSteps_,
					o = t / s,
					a = [this.createMarker("absolute")];
				for (let n = 0; n < s; ++n) {
					const r = n % 2 == 0 ? "ol-scale-singlebar-odd" : "ol-scale-singlebar-even";
					a.push(`<div><div class="ol-scale-singlebar ${r}" style="width: ${o}px;"></div>` + this.createMarker("relative") + (n % 2 == 0 || 2 === s ? this.createStepText(n, t, !1, e, i) : "") + "</div>")
				}
				a.push(this.createStepText(s, t, !0, e, i));
				return (this.scaleBarText_ ? `<div class="ol-scale-text" style="width: ${t}px;">` + r + "</div>" : "") + a.join("")
			}
			createMarker(t) {
				return `<div class="ol-scale-step-marker" style="position: ${t}; top: ${"absolute" === t ? 3 : -10}px;"></div>`
			}
			createStepText(t, e, i, n, r) {
				const s = (0 === t ? 0 : Math.round(n / this.scaleBarSteps_ * t * 100) / 100) + (0 === t ? "" : " " + r);
				return `<div class="ol-scale-step-text" style="margin-left: ${0 === t ? -3 : e / this.scaleBarSteps_ * -1}px;text-align: ${0 === t ? "left" : "center"};min-width: ${0 === t ? 0 : e / this.scaleBarSteps_ * 2}px;left: ${i ? e + "px" : "unset"};">` + s + "</div>"
			}
			getScaleForResolution() {
				return xn(this.viewState_.projection, this.viewState_.resolution, this.viewState_.center, "m") * (1e3 / 25.4) * (this.dpi_ || xm)
			}
			render(t) {
				const e = t.frameState;
				this.viewState_ = e ? e.viewState : null, this.updateElement_()
			}
		},
		wm = {
			exports: {}
		},
		bm = _(fh),
		Sm = _(Bt),
		Em = _(Yl);
	! function(t, e) {
		t.exports = function(t, e, i) {
			t = "default" in t ? t.default : t, i = "default" in i ? i.default : i;
			const n = "layer-switcher-";
			class r extends t {
				constructor(t) {
					const e = Object.assign({}, t),
						i = document.createElement("div");
					super({
						element: i,
						target: e.target
					}), this.activationMode = e.activationMode || "mouseover", this.startActive = !0 === e.startActive, this.label = void 0 !== e.label ? e.label : "",
                    this.collapseLabel = void 0 !== e.collapseLabel ? e.collapseLabel : '<i class="fa-solid fa-caret-right"></i>',
                    this.tipLabel = e.tipLabel ? e.tipLabel : "Legend", this.collapseTipLabel = e.collapseTipLabel ? e.collapseTipLabel : "Collapse legend", this.groupSelectStyle = r.getGroupSelectStyle(e.groupSelectStyle), this.reverse = !1 !== e.reverse, this.mapListeners = [], this.hiddenClassName = "ol-unselectable ol-control layer-switcher", r.isTouchDevice_() && (this.hiddenClassName += " touch"), this.shownClassName = "shown", i.className = this.hiddenClassName, this.button = document.createElement("button"), i.appendChild(this.button), this.panel = document.createElement("div"), this.panel.className = "panel", i.appendChild(this.panel), r.enableTouchScroll_(this.panel), i.classList.add(n + "group-select-style-" + this.groupSelectStyle), i.classList.add(n + "activation-mode-" + this.activationMode), "click" === this.activationMode ? (i.classList.add("activationModeClick"), this.button.onclick = t => {
						const e = t || window.event;
						this.element.classList.contains(this.shownClassName) ? this.hidePanel() : this.showPanel(), e.preventDefault()
					}) : (this.button.onmouseover = () => {
						this.showPanel()
					}, this.button.onclick = t => {
						const e = t || window.event;
						this.showPanel(), e.preventDefault()
					}, this.panel.onmouseout = t => {
						this.panel.contains(t.relatedTarget) || this.hidePanel()
					}), this.updateButton()
				}
				setMap(t) {
					for (let t = 0; t < this.mapListeners.length; t++) e.unByKey(this.mapListeners[t]);
					this.mapListeners.length = 0, super.setMap(t), t && (this.startActive ? this.showPanel() : this.renderPanel(), "click" !== this.activationMode && this.mapListeners.push(t.on("pointerdown", (() => {
						this.hidePanel()
					}))))
				}
				showPanel() {
					this.element.classList.contains(this.shownClassName) || (this.element.classList.add(this.shownClassName), this.updateButton(), this.renderPanel()), this.dispatchEvent("show")
				}
				hidePanel() {
					this.element.classList.contains(this.shownClassName) && (this.element.classList.remove(this.shownClassName), this.updateButton()), this.dispatchEvent("hide")
				}
				updateButton() {
					this.element.classList.contains(this.shownClassName) ? (this.button.textContent = this.collapseLabel, this.button.setAttribute("title", this.collapseTipLabel), this.button.setAttribute("aria-label", this.collapseTipLabel)) : (this.button.textContent = this.label, this.button.setAttribute("title", this.tipLabel), this.button.setAttribute("aria-label", this.tipLabel))
				}
				renderPanel() {
					this.dispatchEvent("render"), r.renderPanel(this.getMap(), this.panel, {
						groupSelectStyle: this.groupSelectStyle,
						reverse: this.reverse
					}), this.dispatchEvent("rendercomplete")
				}
				static renderPanel(t, e, i) {
					const n = new Event("render");
					for (e.dispatchEvent(n), (i = i || {}).groupSelectStyle = r.getGroupSelectStyle(i.groupSelectStyle), r.ensureTopVisibleBaseLayerShown(t, i.groupSelectStyle); e.firstChild;) e.removeChild(e.firstChild);
					r.forEachRecursive(t, (function(t, e, i) {
						t.set("indeterminate", !1)
					})), "children" === i.groupSelectStyle || "none" === i.groupSelectStyle ? r.setGroupVisibility(t) : "group" === i.groupSelectStyle && r.setChildVisibility(t);
					const s = document.createElement("ul");
					e.appendChild(s), r.renderLayers_(t, t, s, i, (function(n) {
						r.renderPanel(t, e, i)
					}));
					const o = new Event("rendercomplete");
					e.dispatchEvent(o)
				}
				static isBaseGroup(t) {
					if (t instanceof i) {
						const e = t.getLayers().getArray();
						return e.length && "base" === e[0].get("type")
					}
					return !1
				}
				static setGroupVisibility(t) {
					r.getGroupsAndLayers(t, (function(t) {
						return t instanceof i && !t.get("combine") && !r.isBaseGroup(t)
					})).reverse().forEach((function(t) {
						const e = t.getLayersArray().map((function(t) {
							return t.getVisible()
						}));
						e.every((function(t) {
							return !0 === t
						})) ? (t.setVisible(!0), t.set("indeterminate", !1)) : e.every((function(t) {
							return !1 === t
						})) ? (t.setVisible(!1), t.set("indeterminate", !1)) : (t.setVisible(!0), t.set("indeterminate", !0))
					}))
				}
				static setChildVisibility(t) {
					r.getGroupsAndLayers(t, (function(t) {
						return t instanceof i && !t.get("combine") && !r.isBaseGroup(t)
					})).forEach((function(t) {
						const e = t,
							i = e.getVisible(),
							n = e.get("indeterminate");
						e.getLayers().getArray().forEach((function(t) {
							t.set("indeterminate", !1), i && !n || !t.getVisible() || t.set("indeterminate", !0)
						}))
					}))
				}
				static ensureTopVisibleBaseLayerShown(t, e) {
					let i;
					r.forEachRecursive(t, (function(t, e, n) {
						"base" === t.get("type") && t.getVisible() && (i = t)
					})), i && r.setVisible_(t, i, !0, e)
				}
				static getGroupsAndLayers(t, e) {
					const i = [];
					return e = e || function(t, e, i) {
						return !0
					}, r.forEachRecursive(t, (function(t, n, r) {
						t.get("title") && e(t, n, r) && i.push(t)
					})), i
				}
				static setVisible_(t, e, n, s) {
					e.setVisible(n), n && "base" === e.get("type") && r.forEachRecursive(t, (function(t, i, n) {
						t != e && "base" === t.get("type") && t.setVisible(!1)
					})), e instanceof i && !e.get("combine") && "children" === s && e.getLayers().forEach((i => {
						r.setVisible_(t, i, e.getVisible(), s)
					}))
				}
				static renderLayer_(t, e, s, o, a) {
					const l = document.createElement("li"),
						h = e.get("title"),
						u = r.uuid(),
						c = document.createElement("label");
					if (e instanceof i && !e.get("combine")) {
						const i = r.isBaseGroup(e);
						if (l.classList.add("group"), i && l.classList.add(n + "base-group"), e.get("fold")) {
							l.classList.add(n + "fold"), l.classList.add(n + e.get("fold"));
							const t = document.createElement("button");
							t.onclick = function(t) {
								const i = t || window.event;
								r.toggleFold_(e, l), i.preventDefault()
							}, l.appendChild(t)
						}
						if (!i && "none" != o.groupSelectStyle) {
							const i = document.createElement("input");
							i.type = "checkbox", i.id = u, i.checked = e.getVisible(), i.indeterminate = e.get("indeterminate"), i.onchange = function(i) {
								const n = i.target;
								r.setVisible_(t, e, n.checked, o.groupSelectStyle), a(e)
							}, l.appendChild(i), c.htmlFor = u
						}
						c.innerHTML = h, l.appendChild(c);
						const s = document.createElement("ul");
						l.appendChild(s), r.renderLayers_(t, e, s, o, a)
					} else {
						l.className = "layer";
						const i = document.createElement("input");
						"base" === e.get("type") ? i.type = "radio" : i.type = "checkbox", i.id = u, i.checked = e.get("visible"), i.indeterminate = e.get("indeterminate"), i.onchange = function(i) {
							const n = i.target;
							r.setVisible_(t, e, n.checked, o.groupSelectStyle), a(e)
						}, l.appendChild(i), c.htmlFor = u, c.innerHTML = h;
						const n = t.getView().getResolution();
						if (n >= e.getMaxResolution() || n < e.getMinResolution()) c.className += " disabled";
						else if (e.getMinZoom && e.getMaxZoom) {
							const i = t.getView().getZoom();
							(i <= e.getMinZoom() || i > e.getMaxZoom()) && (c.className += " disabled")
						}
						l.appendChild(c)
					}
					return l
				}
				static renderLayers_(t, e, i, n, s) {
					let o = e.getLayers().getArray().slice();
					n.reverse && (o = o.reverse());
					for (let e, a = 0; a < o.length; a++) e = o[a], e.get("title") && i.appendChild(r.renderLayer_(t, e, a, n, s))
				}
				static forEachRecursive(t, e) {
					t.getLayers().forEach((function(t, n, s) {
						e(t, n, s), t instanceof i && r.forEachRecursive(t, e)
					}))
				}
				static uuid() {
					return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
						const e = 16 * Math.random() | 0;
						return ("x" == t ? e : 3 & e | 8).toString(16)
					}))
				}
				static enableTouchScroll_(t) {
					if (r.isTouchDevice_()) {
						let e = 0;
						t.addEventListener("touchstart", (function(t) {
							e = this.scrollTop + t.touches[0].pageY
						}), !1), t.addEventListener("touchmove", (function(t) {
							this.scrollTop = e - t.touches[0].pageY
						}), !1)
					}
				}
				static isTouchDevice_() {
					try {
						return document.createEvent("TouchEvent"), !0
					} catch (t) {
						return !1
					}
				}
				static toggleFold_(t, e) {
					e.classList.remove(n + t.get("fold")), t.set("fold", "open" === t.get("fold") ? "close" : "open"), e.classList.add(n + t.get("fold"))
				}
				static getGroupSelectStyle(t) {
					return ["none", "children", "group"].indexOf(t) >= 0 ? t : "children"
				}
			}
			return window.ol && window.ol.control && (window.ol.control.LayerSwitcher = r), r
		}(bm, Sm, Em)
	}(wm);
	var Cm = wm.exports;
	var Tm = class extends wh {
		constructor(t) {
			const e = t || {};
			super(e), e.stopDown && (this.stopDown = e.stopDown), this.scaleDeltaByPixel_ = e.delta ? e.delta : .01, this.duration_ = void 0 !== e.duration ? e.duration : 250, this.handlingDownUpSequence_ = !1, this.handlingDoubleDownSequence_ = !1, this.doubleTapTimeoutId_ = void 0, this.trackedPointers_ = {}, this.targetPointers = []
		}
		handleEvent(t) {
			if (!t.originalEvent) return !0;
			let e = !1;
			if (this.updateTrackedPointers_(t), this.handlingDownUpSequence_) {
				if (t.type == Jl.POINTERDRAG) this.handleDragEvent(t), t.originalEvent.preventDefault();
				else if (t.type == Jl.POINTERUP) {
					const e = this.handleUpEvent(t);
					this.handlingDownUpSequence_ = e
				}
			} else if (t.type == Jl.POINTERDOWN)
				if (this.handlingDoubleDownSequence_) {
					this.handlingDoubleDownSequence_ = !1;
					const i = this.handleDownEvent(t);
					this.handlingDownUpSequence_ = i, e = this.stopDown(i)
				} else e = this.stopDown(!1), this.waitForDblTap_();
			return !e
		}
		handleDragEvent(t) {
			let e = 1;
			const i = this.targetPointers[0],
				n = this.down_.originalEvent,
				r = i.clientY - n.clientY;
			void 0 !== this.lastDistance_ && (e = 1 - (this.lastDistance_ - r) * this.scaleDeltaByPixel_), this.lastDistance_ = r, 1 != e && (this.lastScaleDelta_ = e);
			const s = t.map,
				o = s.getView();
			s.render(), o.adjustResolutionInternal(e)
		}
		handleDownEvent(t) {
			if (1 == this.targetPointers.length) {
				const e = t.map;
				return this.anchor_ = null, this.lastDistance_ = void 0, this.lastScaleDelta_ = 1, this.down_ = t, this.handlingDownUpSequence_ || e.getView().beginInteraction(), !0
			}
			return !1
		}
		handleUpEvent(t) {
			if (0 == this.targetPointers.length) {
				const e = t.map.getView(),
					i = this.lastScaleDelta_ > 1 ? 1 : -1;
				return e.endInteraction(this.duration_, i), this.handlingDownUpSequence_ = !1, this.handlingDoubleDownSequence_ = !1, !1
			}
			return !0
		}
		stopDown(t) {
			return t
		}
		updateTrackedPointers_(t) {
			if (function(t) {
					const e = t.type;
					return e === Jl.POINTERDOWN || e === Jl.POINTERDRAG || e === Jl.POINTERUP
				}(t)) {
				const e = t.originalEvent,
					i = e.pointerId.toString();
				t.type == Jl.POINTERUP ? delete this.trackedPointers_[i] : (t.type == Jl.POINTERDOWN || i in this.trackedPointers_) && (this.trackedPointers_[i] = e), this.targetPointers = Object.values(this.trackedPointers_)
			}
		}
		waitForDblTap_() {
			void 0 !== this.doubleTapTimeoutId_ ? (clearTimeout(this.doubleTapTimeoutId_), this.doubleTapTimeoutId_ = void 0) : (this.handlingDoubleDownSequence_ = !0, this.doubleTapTimeoutId_ = setTimeout(this.endInteraction_.bind(this), 250))
		}
		endInteraction_() {
			this.handlingDoubleDownSequence_ = !1, this.doubleTapTimeoutId_ = void 0
		}
	};
	const Pm = "addfeatures";
	class Rm extends at {
		constructor(t, e, i, n) {
			super(t), this.features = i, this.file = e, this.projection = n
		}
	}
	var Fm = class extends wh {
		constructor(t) {
			t = t || {}, super({
				handleEvent: ft
			}), this.on, this.once, this.un, this.readAsBuffer_ = !1, this.formats_ = [];
			const e = t.formatConstructors ? t.formatConstructors : [];
			for (let t = 0, i = e.length; t < i; ++t) {
				let i = e[t];
				"function" == typeof i && (i = new i), this.formats_.push(i), this.readAsBuffer_ = this.readAsBuffer_ || "arraybuffer" === i.getType()
			}
			this.projection_ = t.projection ? yn(t.projection) : null, this.dropListenKeys_ = null, this.source_ = t.source || null, this.target = t.target ? t.target : null
		}
		handleResult_(t, e) {
			const i = e.target.result,
				n = this.getMap();
			let r, s = this.projection_;
			if (!s && (s = Ln(), !s)) {
				s = n.getView().getProjection()
			}
			const o = this.formats_;
			for (let e = 0, n = o.length; e < n; ++e) {
				const n = o[e];
				let a = i;
				this.readAsBuffer_ && "arraybuffer" !== n.getType() && (void 0 === r && (r = (new TextDecoder).decode(i)), a = r);
				const l = this.tryReadFeatures_(n, a, {
					featureProjection: s
				});
				if (l && l.length > 0) {
					this.source_ && (this.source_.clear(), this.source_.addFeatures(l)), this.dispatchEvent(new Rm(Pm, t, l, s));
					break
				}
			}
		}
		registerListeners_() {
			const t = this.getMap();
			if (t) {
				const e = this.target ? this.target : t.getViewport();
				this.dropListenKeys_ = [Ot(e, Mt, this.handleDrop, this), Ot(e, Rt, this.handleStop, this), Ot(e, Ft, this.handleStop, this), Ot(e, Mt, this.handleStop, this)]
			}
		}
		setActive(t) {
			!this.getActive() && t && this.registerListeners_(), this.getActive() && !t && this.unregisterListeners_(), super.setActive(t)
		}
		setMap(t) {
			this.unregisterListeners_(), super.setMap(t), this.getActive() && this.registerListeners_()
		}
		tryReadFeatures_(t, e, i) {
			try {
				return t.readFeatures(e, i)
			} catch (t) {
				return null
			}
		}
		unregisterListeners_() {
			this.dropListenKeys_ && (this.dropListenKeys_.forEach(Gt), this.dropListenKeys_ = null)
		}
		handleDrop(t) {
			const e = t.dataTransfer.files;
			for (let t = 0, i = e.length; t < i; ++t) {
				const i = e.item(t),
					n = new FileReader;
				n.addEventListener(kt, this.handleResult_.bind(this, i)), this.readAsBuffer_ ? n.readAsArrayBuffer(i) : n.readAsText(i)
			}
		}
		handleStop(t) {
			t.stopPropagation(), t.preventDefault(), t.dataTransfer.dropEffect = "copy"
		}
	};
	var Mm = class extends Eh {
		constructor(t) {
			super(t = t || {}), this.condition_ = t.condition ? t.condition : kh, this.lastAngle_ = void 0, this.lastMagnitude_ = void 0, this.lastScaleDelta_ = 0, this.duration_ = void 0 !== t.duration ? t.duration : 400
		}
		handleDragEvent(t) {
			if (!Dh(t)) return;
			const e = t.map,
				i = e.getSize(),
				n = t.pixel,
				r = n[0] - i[0] / 2,
				s = i[1] / 2 - n[1],
				o = Math.atan2(s, r),
				a = Math.sqrt(r * r + s * s),
				l = e.getView();
			if (void 0 !== this.lastAngle_) {
				const t = this.lastAngle_ - o;
				l.adjustRotationInternal(t)
			}
			this.lastAngle_ = o, void 0 !== this.lastMagnitude_ && l.adjustResolutionInternal(this.lastMagnitude_ / a), void 0 !== this.lastMagnitude_ && (this.lastScaleDelta_ = this.lastMagnitude_ / a), this.lastMagnitude_ = a
		}
		handleUpEvent(t) {
			if (!Dh(t)) return !0;
			const e = t.map.getView(),
				i = this.lastScaleDelta_ > 1 ? 1 : -1;
			return e.endInteraction(this.duration_, i), this.lastScaleDelta_ = 0, !1
		}
		handleDownEvent(t) {
			return !!Dh(t) && (!!this.condition_(t) && (t.map.getView().beginInteraction(), this.lastAngle_ = void 0, this.lastMagnitude_ = void 0, !0))
		}
	};
	const Im = "drawstart",
		Lm = "drawend",
		km = "drawabort";
	class Am extends at {
		constructor(t, e) {
			super(t), this.feature = e
		}
	}

	function Dm(t, e) {
		return E(t[0], t[1], e[0], e[1])
	}

	function Om(t, e) {
		const i = t.length;
		return e < 0 ? t[e + i] : e >= i ? t[e - i] : t[e]
	}

	function zm(t, e, i) {
		let n, r;
		e < i ? (n = e, r = i) : (n = i, r = e);
		const s = Math.ceil(n),
			o = Math.floor(r);
		if (s > o) {
			return Dm($m(t, n), $m(t, r))
		}
		let a = 0;
		if (n < s) {
			a += Dm($m(t, n), Om(t, s))
		}
		if (o < r) {
			a += Dm(Om(t, o), $m(t, r))
		}
		for (let e = s; e < o - 1; ++e) {
			a += Dm(Om(t, e), Om(t, e + 1))
		}
		return a
	}

	function Gm(t, e, i) {
		if (e instanceof Mr) jm(t, e.getCoordinates(), !1, i);
		else if (e instanceof Lr) {
			const n = e.getCoordinates();
			for (let e = 0, r = n.length; e < r; ++e) jm(t, n[e], !1, i)
		} else if (e instanceof Wr) {
			const n = e.getCoordinates();
			for (let e = 0, r = n.length; e < r; ++e) jm(t, n[e], !0, i)
		} else if (e instanceof Hr) {
			const n = e.getCoordinates();
			for (let e = 0, r = n.length; e < r; ++e) {
				const r = n[e];
				for (let e = 0, n = r.length; e < n; ++e) jm(t, r[e], !0, i)
			}
		} else if (e instanceof er) {
			const n = e.getGeometries();
			for (let e = 0; e < n.length; ++e) Gm(t, n[e], i)
		} else;
	}
	const Nm = {
		index: -1,
		endIndex: NaN
	};

	function jm(t, e, i, n) {
		const r = t[0],
			s = t[1];
		for (let t = 0, o = e.length - 1; t < o; ++t) {
			const o = Bm(r, s, e[t], e[t + 1]);
			if (0 === o.squaredDistance) {
				const r = t + o.along;
				return void n.push({
					coordinates: e,
					ring: i,
					startIndex: r,
					endIndex: r
				})
			}
		}
	}
	const Um = {
		along: 0,
		squaredDistance: 0
	};

	function Bm(t, e, i, n) {
		const r = i[0],
			s = i[1],
			o = n[0] - r,
			a = n[1] - s;
		let l = 0,
			h = r,
			u = s;
		return 0 === o && 0 === a || (l = b(((t - r) * o + (e - s) * a) / (o * o + a * a), 0, 1), h += o * l, u += a * l), Um.along = l, Um.squaredDistance = F(E(t, e, h, u), 10), Um
	}

	function $m(t, e) {
		const i = t.length;
		let n = Math.floor(e);
		const r = e - n;
		n >= i ? n -= i : n < 0 && (n += i);
		let s = n + 1;
		s >= i && (s -= i);
		const o = t[n],
			a = o[0],
			l = o[1],
			h = t[s];
		return [a + (h[0] - a) * r, l + (h[1] - l) * r]
	}

	function Vm() {
		const t = os();
		return function(e, i) {
			return t[e.getGeometry().getType()]
		}
	}
	var Xm = class extends Eh {
		constructor(t) {
			const e = t;
			e.stopDown || (e.stopDown = mt), super(e), this.on, this.once, this.un, this.shouldHandle_ = !1, this.downPx_ = null, this.downTimeout_, this.lastDragTime_, this.pointerType_, this.freehand_ = !1, this.source_ = t.source ? t.source : null, this.features_ = t.features ? t.features : null, this.snapTolerance_ = t.snapTolerance ? t.snapTolerance : 12, this.type_ = t.type, this.mode_ = function(t) {
				switch (t) {
					case "Point":
					case "MultiPoint":
						return "Point";
					case "LineString":
					case "MultiLineString":
						return "LineString";
					case "Polygon":
					case "MultiPolygon":
						return "Polygon";
					case "Circle":
						return "Circle";
					default:
						throw new Error("Invalid type: " + t)
				}
			}(this.type_), this.stopClick_ = !!t.stopClick, this.minPoints_ = t.minPoints ? t.minPoints : "Polygon" === this.mode_ ? 3 : 2, this.maxPoints_ = "Circle" === this.mode_ ? 2 : t.maxPoints ? t.maxPoints : 1 / 0, this.finishCondition_ = t.finishCondition ? t.finishCondition : ft, this.geometryLayout_ = t.geometryLayout ? t.geometryLayout : "XY";
			let i = t.geometryFunction;
			if (!i) {
				const t = this.mode_;
				if ("Circle" === t) i = function(t, e, i) {
					const n = e || new Jn([NaN, NaN]),
						r = An(t[0], i),
						s = Ji(r, An(t[t.length - 1], i));
					n.setCenterAndRadius(r, Math.sqrt(s), this.geometryLayout_);
					const o = Ln();
					return o && n.transform(i, o), n
				};
				else {
					let e;
					"Point" === t ? e = Ar : "LineString" === t ? e = Mr : "Polygon" === t && (e = Wr), i = function(i, n, r) {
						return n ? "Polygon" === t ? i[0].length ? n.setCoordinates([i[0].concat([i[0][0]])], this.geometryLayout_) : n.setCoordinates([], this.geometryLayout_) : n.setCoordinates(i, this.geometryLayout_) : n = new e(i, this.geometryLayout_), n
					}
				}
			}
			this.geometryFunction_ = i, this.dragVertexDelay_ = void 0 !== t.dragVertexDelay ? t.dragVertexDelay : 500, this.finishCoordinate_ = null, this.sketchFeature_ = null, this.sketchPoint_ = null, this.sketchCoords_ = null, this.sketchLine_ = null, this.sketchLineCoords_ = null, this.squaredClickTolerance_ = t.clickTolerance ? t.clickTolerance * t.clickTolerance : 36, this.overlay_ = new wl({
				source: new Gl({
					useSpatialIndex: !1,
					wrapX: !!t.wrapX && t.wrapX
				}),
				style: t.style ? t.style : Vm(),
				updateWhileInteracting: !0
			}), this.geometryName_ = t.geometryName, this.condition_ = t.condition ? t.condition : Lh, this.freehandCondition_, t.freehand ? this.freehandCondition_ = Rh : this.freehandCondition_ = t.freehandCondition ? t.freehandCondition : kh, this.traceCondition_, this.setTrace(t.trace || !1), this.traceState_ = {
				active: !1
			}, this.traceSource_ = t.traceSource || t.source || null, this.addChangeListener(xh, this.updateState_)
		}
		setTrace(t) {
			let e;
			e = t ? !0 === t ? Rh : t : Mh, this.traceCondition_ = e
		}
		setMap(t) {
			super.setMap(t), this.updateState_()
		}
		getOverlay() {
			return this.overlay_
		}
		handleEvent(t) {
			t.originalEvent.type === Ct && t.originalEvent.preventDefault(), this.freehand_ = "Point" !== this.mode_ && this.freehandCondition_(t);
			let e = t.type === Jl.POINTERMOVE,
				i = !0;
			if (!this.freehand_ && this.lastDragTime_ && t.type === Jl.POINTERDRAG) {
				Date.now() - this.lastDragTime_ >= this.dragVertexDelay_ ? (this.downPx_ = t.pixel, this.shouldHandle_ = !this.freehand_, e = !0) : this.lastDragTime_ = void 0, this.shouldHandle_ && void 0 !== this.downTimeout_ && (clearTimeout(this.downTimeout_), this.downTimeout_ = void 0)
			}
			return this.freehand_ && t.type === Jl.POINTERDRAG && null !== this.sketchFeature_ ? (this.addToDrawing_(t.coordinate), i = !1) : this.freehand_ && t.type === Jl.POINTERDOWN ? i = !1 : e && this.getPointerCount() < 2 ? (i = t.type === Jl.POINTERMOVE, i && this.freehand_ ? (this.handlePointerMove_(t), this.shouldHandle_ && t.originalEvent.preventDefault()) : ("mouse" === t.originalEvent.pointerType || t.type === Jl.POINTERDRAG && void 0 === this.downTimeout_) && this.handlePointerMove_(t)) : t.type === Jl.DBLCLICK && (i = !1), super.handleEvent(t) && i
		}
		handleDownEvent(t) {
			return this.shouldHandle_ = !this.freehand_, this.freehand_ ? (this.downPx_ = t.pixel, this.finishCoordinate_ || this.startDrawing_(t.coordinate), !0) : this.condition_(t) ? (this.lastDragTime_ = Date.now(), this.downTimeout_ = setTimeout((() => {
				this.handlePointerMove_(new Hl(Jl.POINTERMOVE, t.map, t.originalEvent, !1, t.frameState))
			}), this.dragVertexDelay_), this.downPx_ = t.pixel, !0) : (this.lastDragTime_ = void 0, !1)
		}
		deactivateTrace_() {
			this.traceState_ = {
				active: !1
			}
		}
		toggleTraceState_(t) {
			if (!this.traceSource_ || !this.traceCondition_(t)) return;
			if (this.traceState_.active) return void this.deactivateTrace_();
			const e = this.getMap(),
				i = Ze([e.getCoordinateFromPixel([t.pixel[0] - this.snapTolerance_, t.pixel[1] + this.snapTolerance_]), e.getCoordinateFromPixel([t.pixel[0] + this.snapTolerance_, t.pixel[1] - this.snapTolerance_])]),
				n = this.traceSource_.getFeaturesInExtent(i);
			if (0 === n.length) return;
			const r = function(t, e) {
				const i = [];
				for (let n = 0; n < e.length; ++n) Gm(t, e[n].getGeometry(), i);
				return i
			}(t.coordinate, n);
			r.length && (this.traceState_ = {
				active: !0,
				startPx: t.pixel.slice(),
				targets: r,
				targetIndex: -1
			})
		}
		addOrRemoveTracedCoordinates_(t, e) {
			const i = t.startIndex <= t.endIndex;
			i === t.startIndex <= e ? i && e > t.endIndex || !i && e < t.endIndex ? this.addTracedCoordinates_(t, t.endIndex, e) : (i && e < t.endIndex || !i && e > t.endIndex) && this.removeTracedCoordinates_(e, t.endIndex) : (this.removeTracedCoordinates_(t.startIndex, t.endIndex), this.addTracedCoordinates_(t, t.startIndex, e))
		}
		removeTracedCoordinates_(t, e) {
			if (t === e) return;
			let i = 0;
			if (t < e) {
				const n = Math.ceil(t);
				let r = Math.floor(e);
				r === e && (r -= 1), i = r - n + 1
			} else {
				const n = Math.floor(t);
				let r = Math.ceil(e);
				r === e && (r += 1), i = n - r + 1
			}
			i > 0 && this.removeLastPoints_(i)
		}
		addTracedCoordinates_(t, e, i) {
			if (e === i) return;
			const n = [];
			if (e < i) {
				const r = Math.ceil(e);
				let s = Math.floor(i);
				s === i && (s -= 1);
				for (let e = r; e <= s; ++e) n.push(Om(t.coordinates, e))
			} else {
				const r = Math.floor(e);
				let s = Math.ceil(i);
				s === i && (s += 1);
				for (let e = r; e >= s; --e) n.push(Om(t.coordinates, e))
			}
			n.length && this.appendCoordinates(n)
		}
		updateTrace_(t) {
			const e = this.traceState_;
			if (!e.active) return;
			if (-1 === e.targetIndex && Qi(e.startPx, t.pixel) < this.snapTolerance_) return;
			const i = function(t, e, i, n) {
				const r = t[0],
					s = t[1];
				let o = 1 / 0,
					a = -1,
					l = NaN;
				for (let t = 0; t < e.targets.length; ++t) {
					const i = e.targets[t],
						n = i.coordinates;
					let h, u = 1 / 0;
					for (let t = 0; t < n.length - 1; ++t) {
						const e = Bm(r, s, n[t], n[t + 1]);
						e.squaredDistance < u && (u = e.squaredDistance, h = t + e.along)
					}
					u < o && (o = u, i.ring && e.targetIndex === t && (i.endIndex > i.startIndex ? h < i.startIndex && (h += n.length) : i.endIndex < i.startIndex && h > i.startIndex && (h -= n.length)), l = h, a = t)
				}
				const h = e.targets[a];
				let u = h.ring;
				if (e.targetIndex === a && u) {
					const t = $m(h.coordinates, l);
					Qi(i.getPixelFromCoordinate(t), e.startPx) > n && (u = !1)
				}
				if (u) {
					const t = h.coordinates,
						e = t.length,
						i = h.startIndex,
						n = l;
					if (i < n) {
						const r = zm(t, i, n);
						zm(t, i, n - e) < r && (l -= e)
					} else {
						const r = zm(t, i, n);
						zm(t, i, n + e) < r && (l += e)
					}
				}
				return Nm.index = a, Nm.endIndex = l, Nm
			}(t.coordinate, e, this.getMap(), this.snapTolerance_);
			if (e.targetIndex !== i.index) {
				if (-1 !== e.targetIndex) {
					const t = e.targets[e.targetIndex];
					this.removeTracedCoordinates_(t.startIndex, t.endIndex)
				}
				const t = e.targets[i.index];
				this.addTracedCoordinates_(t, t.startIndex, i.endIndex)
			} else {
				const t = e.targets[e.targetIndex];
				this.addOrRemoveTracedCoordinates_(t, i.endIndex)
			}
			e.targetIndex = i.index;
			const n = e.targets[e.targetIndex];
			n.endIndex = i.endIndex;
			const r = $m(n.coordinates, n.endIndex),
				s = this.getMap().getPixelFromCoordinate(r);
			t.coordinate = r, t.pixel = [Math.round(s[0]), Math.round(s[1])]
		}
		handleUpEvent(t) {
			let e = !0;
			if (0 === this.getPointerCount()) {
				this.downTimeout_ && (clearTimeout(this.downTimeout_), this.downTimeout_ = void 0), this.handlePointerMove_(t);
				const i = this.traceState_.active;
				if (this.toggleTraceState_(t), this.shouldHandle_) {
					const n = !this.finishCoordinate_;
					n && this.startDrawing_(t.coordinate), !n && this.freehand_ ? this.finishDrawing() : this.freehand_ || n && "Point" !== this.mode_ || (this.atFinish_(t.pixel, i) ? this.finishCondition_(t) && this.finishDrawing() : this.addToDrawing_(t.coordinate)), e = !1
				} else this.freehand_ && this.abortDrawing()
			}
			return !e && this.stopClick_ && t.preventDefault(), e
		}
		handlePointerMove_(t) {
			if (this.pointerType_ = t.originalEvent.pointerType, this.downPx_ && (!this.freehand_ && this.shouldHandle_ || this.freehand_ && !this.shouldHandle_)) {
				const e = this.downPx_,
					i = t.pixel,
					n = e[0] - i[0],
					r = e[1] - i[1],
					s = n * n + r * r;
				if (this.shouldHandle_ = this.freehand_ ? s > this.squaredClickTolerance_ : s <= this.squaredClickTolerance_, !this.shouldHandle_) return
			}
			this.finishCoordinate_ ? (this.updateTrace_(t), this.modifyDrawing_(t.coordinate)) : this.createOrUpdateSketchPoint_(t.coordinate.slice())
		}
		atFinish_(t, e) {
			let i = !1;
			if (this.sketchFeature_) {
				let n = !1,
					r = [this.finishCoordinate_];
				const s = this.mode_;
				if ("Point" === s) i = !0;
				else if ("Circle" === s) i = 2 === this.sketchCoords_.length;
				else if ("LineString" === s) n = !e && this.sketchCoords_.length > this.minPoints_;
				else if ("Polygon" === s) {
					const t = this.sketchCoords_;
					n = t[0].length > this.minPoints_, r = [t[0][0], t[0][t[0].length - 2]], r = e ? [t[0][0]] : [t[0][0], t[0][t[0].length - 2]]
				}
				if (n) {
					const e = this.getMap();
					for (let n = 0, s = r.length; n < s; n++) {
						const s = r[n],
							o = e.getPixelFromCoordinate(s),
							a = t[0] - o[0],
							l = t[1] - o[1],
							h = this.freehand_ ? 1 : this.snapTolerance_;
						if (i = Math.sqrt(a * a + l * l) <= h, i) {
							this.finishCoordinate_ = s;
							break
						}
					}
				}
			}
			return i
		}
		createOrUpdateSketchPoint_(t) {
			if (this.sketchPoint_) {
				this.sketchPoint_.getGeometry().setCoordinates(t)
			} else this.sketchPoint_ = new De(new Ar(t)), this.updateSketchFeatures_()
		}
		createOrUpdateCustomSketchLine_(t) {
			this.sketchLine_ || (this.sketchLine_ = new De);
			const e = t.getLinearRing(0);
			let i = this.sketchLine_.getGeometry();
			i ? (i.setFlatCoordinates(e.getLayout(), e.getFlatCoordinates()), i.changed()) : (i = new Mr(e.getFlatCoordinates(), e.getLayout()), this.sketchLine_.setGeometry(i))
		}
		startDrawing_(t) {
			const e = this.getMap().getView().getProjection(),
				i = Wn(this.geometryLayout_);
			for (; t.length < i;) t.push(0);
			this.finishCoordinate_ = t, "Point" === this.mode_ ? this.sketchCoords_ = t.slice() : "Polygon" === this.mode_ ? (this.sketchCoords_ = [
				[t.slice(), t.slice()]
			], this.sketchLineCoords_ = this.sketchCoords_[0]) : this.sketchCoords_ = [t.slice(), t.slice()], this.sketchLineCoords_ && (this.sketchLine_ = new De(new Mr(this.sketchLineCoords_)));
			const n = this.geometryFunction_(this.sketchCoords_, void 0, e);
			this.sketchFeature_ = new De, this.geometryName_ && this.sketchFeature_.setGeometryName(this.geometryName_), this.sketchFeature_.setGeometry(n), this.updateSketchFeatures_(), this.dispatchEvent(new Am(Im, this.sketchFeature_))
		}
		modifyDrawing_(t) {
			const e = this.getMap(),
				i = this.sketchFeature_.getGeometry(),
				n = e.getView().getProjection(),
				r = Wn(this.geometryLayout_);
			let s, o;
			for (; t.length < r;) t.push(0);
			if ("Point" === this.mode_ ? o = this.sketchCoords_ : "Polygon" === this.mode_ ? (s = this.sketchCoords_[0], o = s[s.length - 1], this.atFinish_(e.getPixelFromCoordinate(t)) && (t = this.finishCoordinate_.slice())) : (s = this.sketchCoords_, o = s[s.length - 1]), o[0] = t[0], o[1] = t[1], this.geometryFunction_(this.sketchCoords_, i, n), this.sketchPoint_) {
				this.sketchPoint_.getGeometry().setCoordinates(t)
			}
			if ("Polygon" === i.getType() && "Polygon" !== this.mode_) this.createOrUpdateCustomSketchLine_(i);
			else if (this.sketchLineCoords_) {
				this.sketchLine_.getGeometry().setCoordinates(this.sketchLineCoords_)
			}
			this.updateSketchFeatures_()
		}
		addToDrawing_(t) {
			const e = this.sketchFeature_.getGeometry(),
				i = this.getMap().getView().getProjection();
			let n, r;
			const s = this.mode_;
			"LineString" === s || "Circle" === s ? (this.finishCoordinate_ = t.slice(), r = this.sketchCoords_, r.length >= this.maxPoints_ && (this.freehand_ ? r.pop() : n = !0), r.push(t.slice()), this.geometryFunction_(r, e, i)) : "Polygon" === s && (r = this.sketchCoords_[0], r.length >= this.maxPoints_ && (this.freehand_ ? r.pop() : n = !0), r.push(t.slice()), n && (this.finishCoordinate_ = r[0]), this.geometryFunction_(this.sketchCoords_, e, i)), this.createOrUpdateSketchPoint_(t.slice()), this.updateSketchFeatures_(), n && this.finishDrawing()
		}
		removeLastPoints_(t) {
			if (!this.sketchFeature_) return;
			const e = this.sketchFeature_.getGeometry(),
				i = this.getMap().getView().getProjection(),
				n = this.mode_;
			for (let r = 0; r < t; ++r) {
				let t;
				if ("LineString" === n || "Circle" === n) {
					if (t = this.sketchCoords_, t.splice(-2, 1), t.length >= 2) {
						this.finishCoordinate_ = t[t.length - 2].slice();
						const e = this.finishCoordinate_.slice();
						t[t.length - 1] = e, this.createOrUpdateSketchPoint_(e)
					}
					this.geometryFunction_(t, e, i), "Polygon" === e.getType() && this.sketchLine_ && this.createOrUpdateCustomSketchLine_(e)
				} else if ("Polygon" === n) {
					t = this.sketchCoords_[0], t.splice(-2, 1);
					const n = this.sketchLine_.getGeometry();
					if (t.length >= 2) {
						const e = t[t.length - 2].slice();
						t[t.length - 1] = e, this.createOrUpdateSketchPoint_(e)
					}
					n.setCoordinates(t), this.geometryFunction_(this.sketchCoords_, e, i)
				}
				if (1 === t.length) {
					this.abortDrawing();
					break
				}
			}
			this.updateSketchFeatures_()
		}
		removeLastPoint() {
			this.removeLastPoints_(1)
		}
		finishDrawing() {
			const t = this.abortDrawing_();
			if (!t) return;
			let e = this.sketchCoords_;
			const i = t.getGeometry(),
				n = this.getMap().getView().getProjection();
			"LineString" === this.mode_ ? (e.pop(), this.geometryFunction_(e, i, n)) : "Polygon" === this.mode_ && (e[0].pop(), this.geometryFunction_(e, i, n), e = i.getCoordinates()), "MultiPoint" === this.type_ ? t.setGeometry(new Or([e])) : "MultiLineString" === this.type_ ? t.setGeometry(new Lr([e])) : "MultiPolygon" === this.type_ && t.setGeometry(new Hr([e])), this.dispatchEvent(new Am(Lm, t)), this.features_ && this.features_.push(t), this.source_ && this.source_.addFeature(t)
		}
		abortDrawing_() {
			this.finishCoordinate_ = null;
			const t = this.sketchFeature_;
			return this.sketchFeature_ = null, this.sketchPoint_ = null, this.sketchLine_ = null, this.overlay_.getSource().clear(!0), this.deactivateTrace_(), t
		}
		abortDrawing() {
			const t = this.abortDrawing_();
			t && this.dispatchEvent(new Am(km, t))
		}
		appendCoordinates(t) {
			const e = this.mode_,
				i = !this.sketchFeature_;
			let n;
			if (i && this.startDrawing_(t[0]), "LineString" === e || "Circle" === e) n = this.sketchCoords_;
			else {
				if ("Polygon" !== e) return;
				n = this.sketchCoords_ && this.sketchCoords_.length ? this.sketchCoords_[0] : []
			}
			i && n.shift(), n.pop();
			for (let e = 0; e < t.length; e++) this.addToDrawing_(t[e]);
			const r = t[t.length - 1];
			this.addToDrawing_(r), this.modifyDrawing_(r)
		}
		extend(t) {
			const e = t.getGeometry();
			this.sketchFeature_ = t, this.sketchCoords_ = e.getCoordinates();
			const i = this.sketchCoords_[this.sketchCoords_.length - 1];
			this.finishCoordinate_ = i.slice(), this.sketchCoords_.push(i.slice()), this.sketchPoint_ = new De(new Ar(i)), this.updateSketchFeatures_(), this.dispatchEvent(new Am(Im, this.sketchFeature_))
		}
		updateSketchFeatures_() {
			const t = [];
			this.sketchFeature_ && t.push(this.sketchFeature_), this.sketchLine_ && t.push(this.sketchLine_), this.sketchPoint_ && t.push(this.sketchPoint_);
			const e = this.overlay_.getSource();
			e.clear(!0), e.addFeatures(t)
		}
		updateState_() {
			const t = this.getMap(),
				e = this.getActive();
			t && e || this.abortDrawing(), this.overlay_.setMap(e ? t : null)
		}
	};
	const Wm = "extentchanged";
	class qm extends at {
		constructor(t) {
			super(Wm), this.extent = t
		}
	}

	function Zm() {
		const t = os();
		return function(e, i) {
			return t.Polygon
		}
	}

	function Ym() {
		const t = os();
		return function(e, i) {
			return t.Point
		}
	}

	function Km(t) {
		return function(e) {
			return Ze([t, e])
		}
	}

	function Hm(t, e) {
		return t[0] == e[0] ? function(i) {
			return Ze([t, [i[0], e[1]]])
		} : t[1] == e[1] ? function(i) {
			return Ze([t, [e[0], i[1]]])
		} : null
	}
	var Jm = class extends Eh {
		constructor(t) {
			super(t = t || {}), this.on, this.once, this.un, this.condition_ = t.condition ? t.condition : Rh, this.extent_ = null, this.pointerHandler_ = null, this.pixelTolerance_ = void 0 !== t.pixelTolerance ? t.pixelTolerance : 10, this.snappedToVertex_ = !1, this.extentFeature_ = null, this.vertexFeature_ = null, t || (t = {}), this.extentOverlay_ = new wl({
				source: new Gl({
					useSpatialIndex: !1,
					wrapX: !!t.wrapX
				}),
				style: t.boxStyle ? t.boxStyle : Zm(),
				updateWhileAnimating: !0,
				updateWhileInteracting: !0
			}), this.vertexOverlay_ = new wl({
				source: new Gl({
					useSpatialIndex: !1,
					wrapX: !!t.wrapX
				}),
				style: t.pointerStyle ? t.pointerStyle : Ym(),
				updateWhileAnimating: !0,
				updateWhileInteracting: !0
			}), t.extent && this.setExtent(t.extent)
		}
		snapToVertex_(t, e) {
			const i = e.getCoordinateFromPixelInternal(t),
				n = function(t, e) {
					return tn(i, t) - tn(i, e)
				},
				r = this.getExtentInternal();
			if (r) {
				const s = function(t) {
					return [
						[
							[t[0], t[1]],
							[t[0], t[3]]
						],
						[
							[t[0], t[3]],
							[t[2], t[3]]
						],
						[
							[t[2], t[3]],
							[t[2], t[1]]
						],
						[
							[t[2], t[1]],
							[t[0], t[1]]
						]
					]
				}(r);
				s.sort(n);
				const o = s[0];
				let a = Yi(i, o);
				const l = e.getPixelFromCoordinateInternal(a);
				if (Qi(t, l) <= this.pixelTolerance_) {
					const t = e.getPixelFromCoordinateInternal(o[0]),
						i = e.getPixelFromCoordinateInternal(o[1]),
						n = Ji(l, t),
						r = Ji(l, i),
						s = Math.sqrt(Math.min(n, r));
					return this.snappedToVertex_ = s <= this.pixelTolerance_, this.snappedToVertex_ && (a = n > r ? o[1] : o[0]), a
				}
			}
			return null
		}
		handlePointerMove_(t) {
			const e = t.pixel,
				i = t.map;
			let n = this.snapToVertex_(e, i);
			n || (n = i.getCoordinateFromPixelInternal(e)), this.createOrUpdatePointerFeature_(n)
		}
		createOrUpdateExtentFeature_(t) {
			let e = this.extentFeature_;
			return e ? t ? e.setGeometry(qr(t)) : e.setGeometry(void 0) : (e = new De(t ? qr(t) : {}), this.extentFeature_ = e, this.extentOverlay_.getSource().addFeature(e)), e
		}
		createOrUpdatePointerFeature_(t) {
			let e = this.vertexFeature_;
			if (e) {
				e.getGeometry().setCoordinates(t)
			} else e = new De(new Ar(t)), this.vertexFeature_ = e, this.vertexOverlay_.getSource().addFeature(e);
			return e
		}
		handleEvent(t) {
			return !t.originalEvent || !this.condition_(t) || (t.type != Jl.POINTERMOVE || this.handlingDownUpSequence || this.handlePointerMove_(t), super.handleEvent(t), !1)
		}
		handleDownEvent(t) {
			const e = t.pixel,
				i = t.map,
				n = this.getExtentInternal();
			let r = this.snapToVertex_(e, i);
			const s = function(t) {
				let e = null,
					i = null;
				return t[0] == n[0] ? e = n[2] : t[0] == n[2] && (e = n[0]), t[1] == n[1] ? i = n[3] : t[1] == n[3] && (i = n[1]), null !== e && null !== i ? [e, i] : null
			};
			if (r && n) {
				const t = r[0] == n[0] || r[0] == n[2] ? r[0] : null,
					e = r[1] == n[1] || r[1] == n[3] ? r[1] : null;
				null !== t && null !== e ? this.pointerHandler_ = Km(s(r)) : null !== t ? this.pointerHandler_ = Hm(s([t, n[1]]), s([t, n[3]])) : null !== e && (this.pointerHandler_ = Hm(s([n[0], e]), s([n[2], e])))
			} else r = i.getCoordinateFromPixelInternal(e), this.setExtent([r[0], r[1], r[0], r[1]]), this.pointerHandler_ = Km(r);
			return !0
		}
		handleDragEvent(t) {
			if (this.pointerHandler_) {
				const e = t.coordinate;
				this.setExtent(this.pointerHandler_(e)), this.createOrUpdatePointerFeature_(e)
			}
		}
		handleUpEvent(t) {
			this.pointerHandler_ = null;
			const e = this.getExtentInternal();
			return e && 0 !== gi(e) || this.setExtent(null), !1
		}
		setMap(t) {
			this.extentOverlay_.setMap(t), this.vertexOverlay_.setMap(t), super.setMap(t)
		}
		getExtent() {
			return Dn(this.getExtentInternal(), this.getMap().getView().getProjection())
		}
		getExtentInternal() {
			return this.extent_
		}
		setExtent(t) {
			this.extent_ = t || null, this.createOrUpdateExtentFeature_(t), this.dispatchEvent(new qm(this.extent_))
		}
	};

	function Qm(t) {
		return parseFloat(t)
	}

	function t_(t) {
		return function(t) {
			return F(t, 5)
		}(t).toString()
	}

	function e_(t, e) {
		return !isNaN(t) && t !== Qm(t_(e))
	}
	var i_ = class extends wh {
		constructor(t) {
			let e;
			super(), e = !0 === (t = Object.assign({
				animate: !0,
				params: ["x", "y", "z", "r", "l"],
				replace: !1,
				prefix: ""
			}, t || {})).animate ? {
				duration: 250
			} : t.animate ? t.animate : null, this.animationOptions_ = e, this.params_ = t.params.reduce(((t, e) => (t[e] = !0, t)), {}), this.replace_ = t.replace, this.prefix_ = t.prefix, this.listenerKeys_ = [], this.initial_ = !0, this.updateState_ = this.updateState_.bind(this), this.trackedCallbacks_ = {}, this.trackedValues_ = {}
		}
		getParamName_(t) {
			return this.prefix_ ? this.prefix_ + t : t
		}
		get_(t, e) {
			return t.get(this.getParamName_(e))
		}
		set_(t, e, i) {
			e in this.params_ && t.set(this.getParamName_(e), i)
		}
		delete_(t, e) {
			e in this.params_ && t.delete(this.getParamName_(e))
		}
		setMap(t) {
			const e = this.getMap();
			super.setMap(t), t !== e && (e && this.unregisterListeners_(e), t && (this.initial_ = !0, this.updateState_(), this.registerListeners_(t)))
		}
		registerListeners_(t) {
			this.listenerKeys_.push(Ot(t, rh, this.updateUrl_, this), Ot(t.getLayerGroup(), St, this.updateUrl_, this), Ot(t, "change:layergroup", this.handleChangeLayerGroup_, this)), this.replace_ || addEventListener("popstate", this.updateState_)
		}
		unregisterListeners_(t) {
			for (let t = 0, e = this.listenerKeys_.length; t < e; ++t) Gt(this.listenerKeys_[t]);
			this.listenerKeys_.length = 0, this.replace_ || removeEventListener("popstate", this.updateState_);
			const e = new URL(window.location.href),
				i = e.searchParams;
			this.delete_(i, "x"), this.delete_(i, "y"), this.delete_(i, "z"), this.delete_(i, "r"), this.delete_(i, "l"), window.history.replaceState(null, "", e)
		}
		handleChangeLayerGroup_() {
			const t = this.getMap();
			t && (this.unregisterListeners_(t), this.registerListeners_(t), this.initial_ = !0, this.updateUrl_())
		}
		updateState_() {
			const t = new URL(window.location.href).searchParams;
			for (const e in this.trackedCallbacks_) {
				const i = t.get(e);
				e in this.trackedCallbacks_ && i !== this.trackedValues_[e] && (this.trackedValues_[e] = i, this.trackedCallbacks_[e](i))
			}
			const e = this.getMap();
			if (!e) return;
			const i = e.getView();
			if (!i) return;
			let n = !1;
			const r = {},
				s = Qm(this.get_(t, "z"));
			"z" in this.params_ && e_(s, i.getZoom()) && (n = !0, r.zoom = s);
			const o = Qm(this.get_(t, "r"));
			"r" in this.params_ && e_(o, i.getRotation()) && (n = !0, r.rotation = o);
			const a = [Qm(this.get_(t, "x")), Qm(this.get_(t, "y"))];
			var l, h;
			("x" in this.params_ || "y" in this.params_) && (l = a, h = i.getCenter(), e_(l[0], h[0]) || e_(l[1], h[1])) && (n = !0, r.center = a), n && (!this.initial_ && this.animationOptions_ ? i.animate(Object.assign(r, this.animationOptions_)) : (r.center && i.setCenter(r.center), "zoom" in r && i.setZoom(r.zoom), "rotation" in r && i.setRotation(r.rotation)));
			const u = e.getAllLayers(),
				c = this.get_(t, "l");
			if ("l" in this.params_ && c && c.length === u.length)
				for (let t = 0, e = u.length; t < e; ++t) {
					const e = parseInt(c[t]);
					if (!isNaN(e)) {
						const i = Boolean(e),
							n = u[t];
						n.getVisible() !== i && n.setVisible(i)
					}
				}
		}
		track(t, e) {
			this.trackedCallbacks_[t] = e;
			const i = new URL(window.location.href).searchParams.get(t);
			return this.trackedValues_[t] = i, i
		}
		update(t, e) {
			const i = new URL(window.location.href),
				n = i.searchParams;
			null === e ? n.delete(t) : n.set(t, e), t in this.trackedValues_ && (this.trackedValues_[t] = e), this.updateHistory_(i)
		}
		updateUrl_() {
			const t = this.getMap();
			if (!t) return;
			const e = t.getView();
			if (!e) return;
			const i = e.getCenter(),
				n = e.getZoom(),
				r = e.getRotation(),
				s = t.getAllLayers(),
				o = new Array(s.length);
			for (let t = 0, e = s.length; t < e; ++t) o[t] = s[t].getVisible() ? "1" : "0";
			const a = new URL(window.location.href),
				l = a.searchParams;
			this.set_(l, "x", t_(i[0])), this.set_(l, "y", t_(i[1])), this.set_(l, "z", t_(n)), this.set_(l, "r", t_(r)), this.set_(l, "l", o.join("")), this.updateHistory_(a), this.initial_ = !1
		}
		updateHistory_(t) {
			t.href !== window.location.href && (this.initial_ || this.replace_ ? window.history.replaceState(history.state, "", t) : window.history.pushState(null, "", t))
		}
	};
	const n_ = [0, 0, 0, 0],
		r_ = [],
		s_ = "modifystart",
		o_ = "modifyend";
	class a_ extends at {
		constructor(t, e, i) {
			super(t), this.features = e, this.mapBrowserEvent = i
		}
	}

	function l_(t, e) {
		return t.index - e.index
	}

	function h_(t, e, i) {
		const n = e.geometry;
		if ("Circle" === n.getType()) {
			let r = n;
			if (1 === e.index) {
				const e = Ln();
				e && (r = r.clone().transform(e, i));
				const n = Ji(r.getCenter(), An(t, i)),
					s = Math.sqrt(n) - r.getRadius();
				return s * s
			}
		}
		const r = An(t, i);
		return r_[0] = An(e.segment[0], i), r_[1] = An(e.segment[1], i), tn(r, r_)
	}

	function u_(t, e, i) {
		const n = e.geometry;
		if ("Circle" === n.getType() && 1 === e.index) {
			let e = n;
			const r = Ln();
			return r && (e = e.clone().transform(r, i)), kn(e.getClosestPoint(An(t, i)), i)
		}
		const r = An(t, i);
		return r_[0] = An(e.segment[0], i), r_[1] = An(e.segment[1], i), kn(Yi(r, r_), i)
	}

	function c_() {
		const t = os();
		return function(e, i) {
			return t.Point
		}
	}
	var d_ = class extends Eh {
		constructor(t) {
			let e;
			if (super(t), this.on, this.once, this.un, this.boundHandleFeatureChange_ = this.handleFeatureChange_.bind(this), this.condition_ = t.condition ? t.condition : Oh, this.defaultDeleteCondition_ = function(t) {
					return function(t) {
						const e = t.originalEvent;
						return e.altKey && !(e.metaKey || e.ctrlKey) && !e.shiftKey
					}(t) && Ih(t)
				}, this.deleteCondition_ = t.deleteCondition ? t.deleteCondition : this.defaultDeleteCondition_, this.insertVertexCondition_ = t.insertVertexCondition ? t.insertVertexCondition : Rh, this.vertexFeature_ = null, this.vertexSegments_ = null, this.lastPixel_ = [0, 0], this.ignoreNextSingleClick_ = !1, this.featuresBeingModified_ = null, this.rBush_ = new bl, this.pixelTolerance_ = void 0 !== t.pixelTolerance ? t.pixelTolerance : 10, this.snappedToVertex_ = !1, this.changingFeature_ = !1, this.dragSegments_ = [], this.overlay_ = new wl({
					source: new Gl({
						useSpatialIndex: !1,
						wrapX: !!t.wrapX
					}),
					style: t.style ? t.style : c_(),
					updateWhileAnimating: !0,
					updateWhileInteracting: !0
				}), this.SEGMENT_WRITERS_ = {
					Point: this.writePointGeometry_.bind(this),
					LineString: this.writeLineStringGeometry_.bind(this),
					LinearRing: this.writeLineStringGeometry_.bind(this),
					Polygon: this.writePolygonGeometry_.bind(this),
					MultiPoint: this.writeMultiPointGeometry_.bind(this),
					MultiLineString: this.writeMultiLineStringGeometry_.bind(this),
					MultiPolygon: this.writeMultiPolygonGeometry_.bind(this),
					Circle: this.writeCircleGeometry_.bind(this),
					GeometryCollection: this.writeGeometryCollectionGeometry_.bind(this)
				}, this.source_ = null, this.hitDetection_ = null, t.features ? e = t.features : t.source && (this.source_ = t.source, e = new Rs(this.source_.getFeatures()), this.source_.addEventListener(Cl, this.handleSourceAdd_.bind(this)), this.source_.addEventListener(Rl, this.handleSourceRemove_.bind(this))), !e) throw new Error("The modify interaction requires features, a source or a layer");
			t.hitDetection && (this.hitDetection_ = t.hitDetection), this.features_ = e, this.features_.forEach(this.addFeature_.bind(this)), this.features_.addEventListener(Es, this.handleFeatureAdd_.bind(this)), this.features_.addEventListener(Cs, this.handleFeatureRemove_.bind(this)), this.lastPointerEvent_ = null, this.delta_ = [0, 0], this.snapToPointer_ = void 0 === t.snapToPointer ? !this.hitDetection_ : t.snapToPointer
		}
		addFeature_(t) {
			const e = t.getGeometry();
			if (e) {
				const i = this.SEGMENT_WRITERS_[e.getType()];
				i && i(t, e)
			}
			const i = this.getMap();
			i && i.isRendered() && this.getActive() && this.handlePointerAtPixel_(this.lastPixel_, i), t.addEventListener(St, this.boundHandleFeatureChange_)
		}
		willModifyFeatures_(t, e) {
			if (!this.featuresBeingModified_) {
				this.featuresBeingModified_ = new Rs;
				const i = this.featuresBeingModified_.getArray();
				for (let t = 0, n = e.length; t < n; ++t) {
					const n = e[t];
					for (let t = 0, e = n.length; t < e; ++t) {
						const e = n[t].feature;
						e && !i.includes(e) && this.featuresBeingModified_.push(e)
					}
				}
				0 === this.featuresBeingModified_.getLength() ? this.featuresBeingModified_ = null : this.dispatchEvent(new a_(s_, this.featuresBeingModified_, t))
			}
		}
		removeFeature_(t) {
			this.removeFeatureSegmentData_(t), this.vertexFeature_ && 0 === this.features_.getLength() && (this.overlay_.getSource().removeFeature(this.vertexFeature_), this.vertexFeature_ = null), t.removeEventListener(St, this.boundHandleFeatureChange_)
		}
		removeFeatureSegmentData_(t) {
			const e = this.rBush_,
				i = [];
			e.forEach((function(e) {
				t === e.feature && i.push(e)
			}));
			for (let t = i.length - 1; t >= 0; --t) {
				const n = i[t];
				for (let t = this.dragSegments_.length - 1; t >= 0; --t) this.dragSegments_[t][0] === n && this.dragSegments_.splice(t, 1);
				e.remove(n)
			}
		}
		setActive(t) {
			this.vertexFeature_ && !t && (this.overlay_.getSource().removeFeature(this.vertexFeature_), this.vertexFeature_ = null), super.setActive(t)
		}
		setMap(t) {
			this.overlay_.setMap(t), super.setMap(t)
		}
		getOverlay() {
			return this.overlay_
		}
		handleSourceAdd_(t) {
			t.feature && this.features_.push(t.feature)
		}
		handleSourceRemove_(t) {
			t.feature && this.features_.remove(t.feature)
		}
		handleFeatureAdd_(t) {
			this.addFeature_(t.element)
		}
		handleFeatureChange_(t) {
			if (!this.changingFeature_) {
				const e = t.target;
				this.removeFeature_(e), this.addFeature_(e)
			}
		}
		handleFeatureRemove_(t) {
			this.removeFeature_(t.element)
		}
		writePointGeometry_(t, e) {
			const i = e.getCoordinates(),
				n = {
					feature: t,
					geometry: e,
					segment: [i, i]
				};
			this.rBush_.insert(e.getExtent(), n)
		}
		writeMultiPointGeometry_(t, e) {
			const i = e.getCoordinates();
			for (let n = 0, r = i.length; n < r; ++n) {
				const r = i[n],
					s = {
						feature: t,
						geometry: e,
						depth: [n],
						index: n,
						segment: [r, r]
					};
				this.rBush_.insert(e.getExtent(), s)
			}
		}
		writeLineStringGeometry_(t, e) {
			const i = e.getCoordinates();
			for (let n = 0, r = i.length - 1; n < r; ++n) {
				const r = i.slice(n, n + 2),
					s = {
						feature: t,
						geometry: e,
						index: n,
						segment: r
					};
				this.rBush_.insert(Ze(r), s)
			}
		}
		writeMultiLineStringGeometry_(t, e) {
			const i = e.getCoordinates();
			for (let n = 0, r = i.length; n < r; ++n) {
				const r = i[n];
				for (let i = 0, s = r.length - 1; i < s; ++i) {
					const s = r.slice(i, i + 2),
						o = {
							feature: t,
							geometry: e,
							depth: [n],
							index: i,
							segment: s
						};
					this.rBush_.insert(Ze(s), o)
				}
			}
		}
		writePolygonGeometry_(t, e) {
			const i = e.getCoordinates();
			for (let n = 0, r = i.length; n < r; ++n) {
				const r = i[n];
				for (let i = 0, s = r.length - 1; i < s; ++i) {
					const s = r.slice(i, i + 2),
						o = {
							feature: t,
							geometry: e,
							depth: [n],
							index: i,
							segment: s
						};
					this.rBush_.insert(Ze(s), o)
				}
			}
		}
		writeMultiPolygonGeometry_(t, e) {
			const i = e.getCoordinates();
			for (let n = 0, r = i.length; n < r; ++n) {
				const r = i[n];
				for (let i = 0, s = r.length; i < s; ++i) {
					const s = r[i];
					for (let r = 0, o = s.length - 1; r < o; ++r) {
						const o = s.slice(r, r + 2),
							a = {
								feature: t,
								geometry: e,
								depth: [i, n],
								index: r,
								segment: o
							};
						this.rBush_.insert(Ze(o), a)
					}
				}
			}
		}
		writeCircleGeometry_(t, e) {
			const i = e.getCenter(),
				n = {
					feature: t,
					geometry: e,
					index: 0,
					segment: [i, i]
				},
				r = {
					feature: t,
					geometry: e,
					index: 1,
					segment: [i, i]
				},
				s = [n, r];
			n.featureSegments = s, r.featureSegments = s, this.rBush_.insert(si(i), n);
			let o = e;
			const a = Ln();
			if (a && this.getMap()) {
				const t = this.getMap().getView().getProjection();
				o = o.clone().transform(a, t), o = Zr(o).transform(t, a)
			}
			this.rBush_.insert(o.getExtent(), r)
		}
		writeGeometryCollectionGeometry_(t, e) {
			const i = e.getGeometriesArray();
			for (let e = 0; e < i.length; ++e) {
				const n = i[e];
				(0, this.SEGMENT_WRITERS_[n.getType()])(t, n)
			}
		}
		createOrUpdateVertexFeature_(t, e, i) {
			let n = this.vertexFeature_;
			if (n) {
				n.getGeometry().setCoordinates(t)
			} else n = new De(new Ar(t)), this.vertexFeature_ = n, this.overlay_.getSource().addFeature(n);
			return n.set("features", e), n.set("geometries", i), n
		}
		handleEvent(t) {
			if (!t.originalEvent) return !0;
			let e;
			return this.lastPointerEvent_ = t, t.map.getView().getInteracting() || t.type != Jl.POINTERMOVE || this.handlingDownUpSequence || this.handlePointerMove_(t), this.vertexFeature_ && this.deleteCondition_(t) && (e = !(t.type != Jl.SINGLECLICK || !this.ignoreNextSingleClick_) || this.removePoint()), t.type == Jl.SINGLECLICK && (this.ignoreNextSingleClick_ = !1), super.handleEvent(t) && !e
		}
		handleDragEvent(t) {
			this.ignoreNextSingleClick_ = !1, this.willModifyFeatures_(t, this.dragSegments_);
			const e = [t.coordinate[0] + this.delta_[0], t.coordinate[1] + this.delta_[1]],
				i = [],
				n = [];
			for (let r = 0, s = this.dragSegments_.length; r < s; ++r) {
				const s = this.dragSegments_[r],
					o = s[0],
					a = o.feature;
				i.includes(a) || i.push(a);
				const l = o.geometry;
				n.includes(l) || n.push(l);
				const h = o.depth;
				let u;
				const c = o.segment,
					d = s[1];
				for (; e.length < l.getStride();) e.push(c[d][e.length]);
				switch (l.getType()) {
					case "Point":
						u = e, c[0] = e, c[1] = e;
						break;
					case "MultiPoint":
						u = l.getCoordinates(), u[o.index] = e, c[0] = e, c[1] = e;
						break;
					case "LineString":
						u = l.getCoordinates(), u[o.index + d] = e, c[d] = e;
						break;
					case "MultiLineString":
					case "Polygon":
						u = l.getCoordinates(), u[h[0]][o.index + d] = e, c[d] = e;
						break;
					case "MultiPolygon":
						u = l.getCoordinates(), u[h[1]][h[0]][o.index + d] = e, c[d] = e;
						break;
					case "Circle":
						if (c[0] = e, c[1] = e, 0 === o.index) this.changingFeature_ = !0, l.setCenter(e), this.changingFeature_ = !1;
						else {
							this.changingFeature_ = !0;
							const i = t.map.getView().getProjection();
							let n = Qi(An(l.getCenter(), i), An(e, i));
							const r = Ln();
							if (r) {
								const t = l.clone().transform(r, i);
								t.setRadius(n), n = t.transform(i, r).getRadius()
							}
							l.setRadius(n), this.changingFeature_ = !1
						}
				}
				u && this.setGeometryCoordinates_(l, u)
			}
			this.createOrUpdateVertexFeature_(e, i, n)
		}
		handleDownEvent(t) {
			if (!this.condition_(t)) return !1;
			const e = t.coordinate;
			this.handlePointerAtPixel_(t.pixel, t.map, e), this.dragSegments_.length = 0, this.featuresBeingModified_ = null;
			const i = this.vertexFeature_;
			if (i) {
				const n = t.map.getView().getProjection(),
					r = [],
					s = i.getGeometry().getCoordinates(),
					o = Ze([s]),
					a = this.rBush_.getInExtent(o),
					h = {};
				a.sort(l_);
				for (let i = 0, o = a.length; i < o; ++i) {
					const o = a[i],
						u = o.segment;
					let c = l(o.geometry);
					const d = o.depth;
					if (d && (c += "-" + d.join("-")), h[c] || (h[c] = new Array(2)), "Circle" !== o.geometry.getType() || 1 !== o.index)
						if (!Ki(u[0], s) || h[c][0])
							if (!Ki(u[1], s) || h[c][1]) l(u) in this.vertexSegments_ && !h[c][0] && !h[c][1] && this.insertVertexCondition_(t) && r.push(o);
							else {
								if (h[c][0] && 0 === h[c][0].index) {
									let t = o.geometry.getCoordinates();
									switch (o.geometry.getType()) {
										case "LineString":
										case "MultiLineString":
											continue;
										case "MultiPolygon":
											t = t[d[1]];
										case "Polygon":
											if (o.index !== t[d[0]].length - 2) continue
									}
								}
								this.dragSegments_.push([o, 1]), h[c][1] = o
							}
					else this.dragSegments_.push([o, 0]), h[c][0] = o;
					else {
						Ki(u_(e, o, n), s) && !h[c][0] && (this.dragSegments_.push([o, 0]), h[c][0] = o)
					}
				}
				r.length && this.willModifyFeatures_(t, [r]);
				for (let t = r.length - 1; t >= 0; --t) this.insertVertex_(r[t], s)
			}
			return !!this.vertexFeature_
		}
		handleUpEvent(t) {
			for (let e = this.dragSegments_.length - 1; e >= 0; --e) {
				const i = this.dragSegments_[e][0],
					n = i.geometry;
				if ("Circle" === n.getType()) {
					const e = n.getCenter(),
						r = i.featureSegments[0],
						s = i.featureSegments[1];
					r.segment[0] = e, r.segment[1] = e, s.segment[0] = e, s.segment[1] = e, this.rBush_.update(si(e), r);
					let o = n;
					const a = Ln();
					if (a) {
						const e = t.map.getView().getProjection();
						o = o.clone().transform(a, e), o = Zr(o).transform(e, a)
					}
					this.rBush_.update(o.getExtent(), s)
				} else this.rBush_.update(Ze(i.segment), i)
			}
			return this.featuresBeingModified_ && (this.dispatchEvent(new a_(o_, this.featuresBeingModified_, t)), this.featuresBeingModified_ = null), !1
		}
		handlePointerMove_(t) {
			this.lastPixel_ = t.pixel, this.handlePointerAtPixel_(t.pixel, t.map, t.coordinate)
		}
		handlePointerAtPixel_(t, e, i) {
			const n = i || e.getCoordinateFromPixel(t),
				r = e.getView().getProjection(),
				s = function(t, e) {
					return h_(n, t, r) - h_(n, e, r)
				};
			let o, a;
			if (this.hitDetection_) {
				const i = "object" == typeof this.hitDetection_ ? t => t === this.hitDetection_ : void 0;
				e.forEachFeatureAtPixel(t, ((t, e, i) => {
					i && "Point" === i.getType() && (i = new Ar(kn(i.getCoordinates(), r)));
					const n = i || t.getGeometry();
					if (t instanceof De && this.features_.getArray().includes(t)) {
						a = n;
						const e = t.getGeometry().getFlatCoordinates().slice(0, 2);
						o = [{
							feature: t,
							geometry: a,
							segment: [e, e]
						}]
					}
					return !0
				}), {
					layerFilter: i
				})
			}
			if (!o) {
				const t = Dn(Ye(On(si(n, n_), r), e.getView().getResolution() * this.pixelTolerance_, n_), r);
				o = this.rBush_.getInExtent(t)
			}
			if (o && o.length > 0) {
				const i = o.sort(s)[0],
					h = i.segment;
				let u = u_(n, i, r);
				const c = e.getPixelFromCoordinate(u);
				let d = Qi(t, c);
				if (a || d <= this.pixelTolerance_) {
					const t = {};
					if (t[l(h)] = !0, this.snapToPointer_ || (this.delta_[0] = u[0] - n[0], this.delta_[1] = u[1] - n[1]), "Circle" === i.geometry.getType() && 1 === i.index) this.snappedToVertex_ = !0, this.createOrUpdateVertexFeature_(u, [i.feature], [i.geometry]);
					else {
						const n = e.getPixelFromCoordinate(h[0]),
							r = e.getPixelFromCoordinate(h[1]),
							s = Ji(c, n),
							a = Ji(c, r);
						d = Math.sqrt(Math.min(s, a)), this.snappedToVertex_ = d <= this.pixelTolerance_, this.snappedToVertex_ && (u = s > a ? h[1] : h[0]), this.createOrUpdateVertexFeature_(u, [i.feature], [i.geometry]);
						const g = {};
						g[l(i.geometry)] = !0;
						for (let e = 1, i = o.length; e < i; ++e) {
							const i = o[e].segment;
							if (!(Ki(h[0], i[0]) && Ki(h[1], i[1]) || Ki(h[0], i[1]) && Ki(h[1], i[0]))) break;
							{
								const n = l(o[e].geometry);
								n in g || (g[n] = !0, t[l(i)] = !0)
							}
						}
					}
					return void(this.vertexSegments_ = t)
				}
			}
			this.vertexFeature_ && (this.overlay_.getSource().removeFeature(this.vertexFeature_), this.vertexFeature_ = null)
		}
		insertVertex_(t, e) {
			const i = t.segment,
				n = t.feature,
				r = t.geometry,
				s = t.depth,
				o = t.index;
			let a;
			for (; e.length < r.getStride();) e.push(0);
			switch (r.getType()) {
				case "MultiLineString":
				case "Polygon":
					a = r.getCoordinates(), a[s[0]].splice(o + 1, 0, e);
					break;
				case "MultiPolygon":
					a = r.getCoordinates(), a[s[1]][s[0]].splice(o + 1, 0, e);
					break;
				case "LineString":
					a = r.getCoordinates(), a.splice(o + 1, 0, e);
					break;
				default:
					return
			}
			this.setGeometryCoordinates_(r, a);
			const l = this.rBush_;
			l.remove(t), this.updateSegmentIndices_(r, o, s, 1);
			const h = {
				segment: [i[0], e],
				feature: n,
				geometry: r,
				depth: s,
				index: o
			};
			l.insert(Ze(h.segment), h), this.dragSegments_.push([h, 1]);
			const u = {
				segment: [e, i[1]],
				feature: n,
				geometry: r,
				depth: s,
				index: o + 1
			};
			l.insert(Ze(u.segment), u), this.dragSegments_.push([u, 0]), this.ignoreNextSingleClick_ = !0
		}
		removePoint() {
			if (this.lastPointerEvent_ && this.lastPointerEvent_.type != Jl.POINTERDRAG) {
				const t = this.lastPointerEvent_;
				this.willModifyFeatures_(t, this.dragSegments_);
				const e = this.removeVertex_();
				return this.featuresBeingModified_ && this.dispatchEvent(new a_(o_, this.featuresBeingModified_, t)), this.featuresBeingModified_ = null, e
			}
			return !1
		}
		removeVertex_() {
			const t = this.dragSegments_,
				e = {};
			let i, n, r, s, o, a, h, u, c, d, g, p = !1;
			for (o = t.length - 1; o >= 0; --o) r = t[o], d = r[0], g = l(d.feature), d.depth && (g += "-" + d.depth.join("-")), g in e || (e[g] = {}), 0 === r[1] ? (e[g].right = d, e[g].index = d.index) : 1 == r[1] && (e[g].left = d, e[g].index = d.index + 1);
			for (g in e) {
				switch (c = e[g].right, h = e[g].left, a = e[g].index, u = a - 1, d = void 0 !== h ? h : c, u < 0 && (u = 0), s = d.geometry, n = s.getCoordinates(), i = n, p = !1, s.getType()) {
					case "MultiLineString":
						n[d.depth[0]].length > 2 && (n[d.depth[0]].splice(a, 1), p = !0);
						break;
					case "LineString":
						n.length > 2 && (n.splice(a, 1), p = !0);
						break;
					case "MultiPolygon":
						i = i[d.depth[1]];
					case "Polygon":
						i = i[d.depth[0]], i.length > 4 && (a == i.length - 1 && (a = 0), i.splice(a, 1), p = !0, 0 === a && (i.pop(), i.push(i[0]), u = i.length - 1))
				}
				if (p) {
					this.setGeometryCoordinates_(s, n);
					const e = [];
					if (void 0 !== h && (this.rBush_.remove(h), e.push(h.segment[0])), void 0 !== c && (this.rBush_.remove(c), e.push(c.segment[1])), void 0 !== h && void 0 !== c) {
						const t = {
							depth: d.depth,
							feature: d.feature,
							geometry: d.geometry,
							index: u,
							segment: e
						};
						this.rBush_.insert(Ze(t.segment), t)
					}
					this.updateSegmentIndices_(s, a, d.depth, -1), this.vertexFeature_ && (this.overlay_.getSource().removeFeature(this.vertexFeature_), this.vertexFeature_ = null), t.length = 0
				}
			}
			return p
		}
		setGeometryCoordinates_(t, e) {
			this.changingFeature_ = !0, t.setCoordinates(e), this.changingFeature_ = !1
		}
		updateSegmentIndices_(t, e, i, n) {
			this.rBush_.forEachInExtent(t.getExtent(), (function(r) {
				r.geometry === t && (void 0 === i || void 0 === r.depth || pt(r.depth, i)) && r.index > e && (r.index += n)
			}))
		}
	};
	const g_ = "select";
	class p_ extends at {
		constructor(t, e, i, n) {
			super(t), this.selected = e, this.deselected = i, this.mapBrowserEvent = n
		}
	}
	const f_ = {};
	class m_ extends wh {
		constructor(t) {
			let e;
			if (super(), this.on, this.once, this.un, t = t || {}, this.boundAddFeature_ = this.addFeature_.bind(this), this.boundRemoveFeature_ = this.removeFeature_.bind(this), this.condition_ = t.condition ? t.condition : Ih, this.addCondition_ = t.addCondition ? t.addCondition : Mh, this.removeCondition_ = t.removeCondition ? t.removeCondition : Mh, this.toggleCondition_ = t.toggleCondition ? t.toggleCondition : kh, this.multi_ = !!t.multi && t.multi, this.filter_ = t.filter ? t.filter : ft, this.hitTolerance_ = t.hitTolerance ? t.hitTolerance : 0, this.style_ = void 0 !== t.style ? t.style : function() {
					const t = os();
					return gt(t.Polygon, t.LineString), gt(t.GeometryCollection, t.LineString),
						function(e) {
							return e.getGeometry() ? t[e.getGeometry().getType()] : null
						}
				}(), this.features_ = t.features || new Rs, t.layers)
				if ("function" == typeof t.layers) e = t.layers;
				else {
					const i = t.layers;
					e = function(t) {
						return i.includes(t)
					}
				}
			else e = ft;
			this.layerFilter_ = e, this.featureLayerAssociation_ = {}
		}
		addFeatureLayerAssociation_(t, e) {
			this.featureLayerAssociation_[l(t)] = e
		}
		getFeatures() {
			return this.features_
		}
		getHitTolerance() {
			return this.hitTolerance_
		}
		getLayer(t) {
			return this.featureLayerAssociation_[l(t)]
		}
		setHitTolerance(t) {
			this.hitTolerance_ = t
		}
		setMap(t) {
			this.getMap() && this.style_ && this.features_.forEach(this.restorePreviousStyle_.bind(this)), super.setMap(t), t ? (this.features_.addEventListener(Es, this.boundAddFeature_), this.features_.addEventListener(Cs, this.boundRemoveFeature_), this.style_ && this.features_.forEach(this.applySelectedStyle_.bind(this))) : (this.features_.removeEventListener(Es, this.boundAddFeature_), this.features_.removeEventListener(Cs, this.boundRemoveFeature_))
		}
		addFeature_(t) {
			const e = t.element;
			if (this.style_ && this.applySelectedStyle_(e), !this.getLayer(e)) {
				const t = this.getMap().getAllLayers().find((function(t) {
					if (t instanceof wl && t.getSource() && t.getSource().hasFeature(e)) return t
				}));
				t && this.addFeatureLayerAssociation_(e, t)
			}
		}
		removeFeature_(t) {
			this.style_ && this.restorePreviousStyle_(t.element)
		}
		getStyle() {
			return this.style_
		}
		applySelectedStyle_(t) {
			const e = l(t);
			e in f_ || (f_[e] = t.getStyle()), t.setStyle(this.style_)
		}
		restorePreviousStyle_(t) {
			const e = this.getMap().getInteractions().getArray();
			for (let i = e.length - 1; i >= 0; --i) {
				const n = e[i];
				if (n !== this && n instanceof m_ && n.getStyle() && -1 !== n.getFeatures().getArray().lastIndexOf(t)) return void t.setStyle(n.getStyle())
			}
			const i = l(t);
			t.setStyle(f_[i]), delete f_[i]
		}
		removeFeatureLayerAssociation_(t) {
			delete this.featureLayerAssociation_[l(t)]
		}
		handleEvent(t) {
			if (!this.condition_(t)) return !0;
			const e = this.addCondition_(t),
				i = this.removeCondition_(t),
				n = this.toggleCondition_(t),
				r = !e && !i && !n,
				s = t.map,
				o = this.getFeatures(),
				a = [],
				l = [];
			if (r) {
				vt(this.featureLayerAssociation_), s.forEachFeatureAtPixel(t.pixel, ((t, e) => {
					if (t instanceof De && this.filter_(t, e)) return this.addFeatureLayerAssociation_(t, e), l.push(t), !this.multi_
				}), {
					layerFilter: this.layerFilter_,
					hitTolerance: this.hitTolerance_
				});
				for (let t = o.getLength() - 1; t >= 0; --t) {
					const e = o.item(t),
						i = l.indexOf(e);
					i > -1 ? l.splice(i, 1) : (o.remove(e), a.push(e))
				}
				0 !== l.length && o.extend(l)
			} else {
				s.forEachFeatureAtPixel(t.pixel, ((t, r) => {
					if (t instanceof De && this.filter_(t, r)) return !e && !n || o.getArray().includes(t) ? (i || n) && o.getArray().includes(t) && (a.push(t), this.removeFeatureLayerAssociation_(t)) : (this.addFeatureLayerAssociation_(t, r), l.push(t)), !this.multi_
				}), {
					layerFilter: this.layerFilter_,
					hitTolerance: this.hitTolerance_
				});
				for (let t = a.length - 1; t >= 0; --t) o.remove(a[t]);
				o.extend(l)
			}
			return (l.length > 0 || a.length > 0) && this.dispatchEvent(new p_(g_, l, a, t)), !0
		}
	}
	var __ = m_;
	const y_ = "snap";
	class x_ extends at {
		constructor(t, e) {
			super(t), this.vertex = e.vertex, this.vertexPixel = e.vertexPixel, this.feature = e.feature, this.segment = e.segment
		}
	}

	function v_(t) {
		return t.feature ? t.feature : t.element ? t.element : null
	}
	const w_ = [];
	var b_ = class extends Eh {
		constructor(t) {
			const e = t = t || {};
			e.handleDownEvent || (e.handleDownEvent = ft), e.stopDown || (e.stopDown = mt), super(e), this.on, this.once, this.un, this.source_ = t.source ? t.source : null, this.vertex_ = void 0 === t.vertex || t.vertex, this.edge_ = void 0 === t.edge || t.edge, this.features_ = t.features ? t.features : null, this.featuresListenerKeys_ = [], this.featureChangeListenerKeys_ = {}, this.indexedFeaturesExtents_ = {}, this.pendingFeatures_ = {}, this.pixelTolerance_ = void 0 !== t.pixelTolerance ? t.pixelTolerance : 10, this.rBush_ = new bl, this.GEOMETRY_SEGMENTERS_ = {
				Point: this.segmentPointGeometry_.bind(this),
				LineString: this.segmentLineStringGeometry_.bind(this),
				LinearRing: this.segmentLineStringGeometry_.bind(this),
				Polygon: this.segmentPolygonGeometry_.bind(this),
				MultiPoint: this.segmentMultiPointGeometry_.bind(this),
				MultiLineString: this.segmentMultiLineStringGeometry_.bind(this),
				MultiPolygon: this.segmentMultiPolygonGeometry_.bind(this),
				GeometryCollection: this.segmentGeometryCollectionGeometry_.bind(this),
				Circle: this.segmentCircleGeometry_.bind(this)
			}
		}
		addFeature(t, e) {
			e = void 0 === e || e;
			const i = l(t),
				n = t.getGeometry();
			if (n) {
				const e = this.GEOMETRY_SEGMENTERS_[n.getType()];
				if (e) {
					this.indexedFeaturesExtents_[i] = n.getExtent([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
					const r = [];
					if (e(r, n), 1 === r.length) this.rBush_.insert(Ze(r[0]), {
						feature: t,
						segment: r[0]
					});
					else if (r.length > 1) {
						const e = r.map((t => Ze(t))),
							i = r.map((e => ({
								feature: t,
								segment: e
							})));
						this.rBush_.load(e, i)
					}
				}
			}
			e && (this.featureChangeListenerKeys_[i] = Ot(t, St, this.handleFeatureChange_, this))
		}
		getFeatures_() {
			let t;
			return this.features_ ? t = this.features_ : this.source_ && (t = this.source_.getFeatures()), t
		}
		handleEvent(t) {
			const e = this.snapTo(t.pixel, t.coordinate, t.map);
			return e && (t.coordinate = e.vertex.slice(0, 2), t.pixel = e.vertexPixel, this.dispatchEvent(new x_(y_, {
				vertex: t.coordinate,
				vertexPixel: t.pixel,
				feature: e.feature,
				segment: e.segment
			}))), super.handleEvent(t)
		}
		handleFeatureAdd_(t) {
			const e = v_(t);
			e && this.addFeature(e)
		}
		handleFeatureRemove_(t) {
			const e = v_(t);
			e && this.removeFeature(e)
		}
		handleFeatureChange_(t) {
			const e = t.target;
			if (this.handlingDownUpSequence) {
				const t = l(e);
				t in this.pendingFeatures_ || (this.pendingFeatures_[t] = e)
			} else this.updateFeature_(e)
		}
		handleUpEvent(t) {
			const e = Object.values(this.pendingFeatures_);
			return e.length && (e.forEach(this.updateFeature_.bind(this)), this.pendingFeatures_ = {}), !1
		}
		removeFeature(t, e) {
			const i = void 0 === e || e,
				n = l(t),
				r = this.indexedFeaturesExtents_[n];
			if (r) {
				const e = this.rBush_,
					i = [];
				e.forEachInExtent(r, (function(e) {
					t === e.feature && i.push(e)
				}));
				for (let t = i.length - 1; t >= 0; --t) e.remove(i[t])
			}
			i && (Gt(this.featureChangeListenerKeys_[n]), delete this.featureChangeListenerKeys_[n])
		}
		setMap(t) {
			const e = this.getMap(),
				i = this.featuresListenerKeys_,
				n = this.getFeatures_();
			e && (i.forEach(Gt), i.length = 0, this.rBush_.clear(), Object.values(this.featureChangeListenerKeys_).forEach(Gt), this.featureChangeListenerKeys_ = {}), super.setMap(t), t && (this.features_ ? i.push(Ot(this.features_, Es, this.handleFeatureAdd_, this), Ot(this.features_, Cs, this.handleFeatureRemove_, this)) : this.source_ && i.push(Ot(this.source_, Cl, this.handleFeatureAdd_, this), Ot(this.source_, Rl, this.handleFeatureRemove_, this)), n.forEach((t => this.addFeature(t))))
		}
		snapTo(t, e, i) {
			const n = i.getView().getProjection(),
				r = An(e, n),
				s = Dn(Ye(Ze([r]), i.getView().getResolution() * this.pixelTolerance_), n),
				o = this.rBush_.getInExtent(s),
				a = o.length;
			if (0 === a) return null;
			let l, h, u = 1 / 0,
				c = null;
			const d = this.pixelTolerance_ * this.pixelTolerance_,
				g = () => {
					if (l) {
						const e = i.getPixelFromCoordinate(l);
						if (Ji(t, e) <= d) return {
							vertex: l,
							vertexPixel: [Math.round(e[0]), Math.round(e[1])],
							feature: h,
							segment: c
						}
					}
					return null
				};
			if (this.vertex_) {
				for (let t = 0; t < a; ++t) {
					const e = o[t];
					"Circle" !== e.feature.getGeometry().getType() && e.segment.forEach((t => {
						const i = An(t, n),
							s = Ji(r, i);
						s < u && (l = t, u = s, h = e.feature)
					}))
				}
				const t = g();
				if (t) return t
			}
			if (this.edge_) {
				for (let t = 0; t < a; ++t) {
					let e = null;
					const i = o[t];
					if ("Circle" === i.feature.getGeometry().getType()) {
						let t = i.feature.getGeometry();
						const s = Ln();
						s && (t = t.clone().transform(s, n)), e = Zi(r, t)
					} else {
						const [t, s] = i.segment;
						s && (w_[0] = An(t, n), w_[1] = An(s, n), e = Yi(r, w_))
					}
					if (e) {
						const t = Ji(r, e);
						t < u && (l = kn(e, n), c = "Circle" === i.feature.getGeometry().getType() ? null : i.segment, u = t)
					}
				}
				const t = g();
				if (t) return t
			}
			return null
		}
		updateFeature_(t) {
			this.removeFeature(t, !1), this.addFeature(t, !1)
		}
		segmentCircleGeometry_(t, e) {
			const i = this.getMap().getView().getProjection();
			let n = e;
			const r = Ln();
			r && (n = n.clone().transform(r, i));
			const s = Zr(n);
			r && s.transform(i, r);
			const o = s.getCoordinates()[0];
			for (let e = 0, i = o.length - 1; e < i; ++e) t.push(o.slice(e, e + 2))
		}
		segmentGeometryCollectionGeometry_(t, e) {
			const i = e.getGeometriesArray();
			for (let e = 0; e < i.length; ++e) {
				const n = this.GEOMETRY_SEGMENTERS_[i[e].getType()];
				n && n(t, i[e])
			}
		}
		segmentLineStringGeometry_(t, e) {
			const i = e.getCoordinates();
			for (let e = 0, n = i.length - 1; e < n; ++e) t.push(i.slice(e, e + 2))
		}
		segmentMultiLineStringGeometry_(t, e) {
			const i = e.getCoordinates();
			for (let e = 0, n = i.length; e < n; ++e) {
				const n = i[e];
				for (let e = 0, i = n.length - 1; e < i; ++e) t.push(n.slice(e, e + 2))
			}
		}
		segmentMultiPointGeometry_(t, e) {
			e.getCoordinates().forEach((e => {
				t.push([e])
			}))
		}
		segmentMultiPolygonGeometry_(t, e) {
			const i = e.getCoordinates();
			for (let e = 0, n = i.length; e < n; ++e) {
				const n = i[e];
				for (let e = 0, i = n.length; e < i; ++e) {
					const i = n[e];
					for (let e = 0, n = i.length - 1; e < n; ++e) t.push(i.slice(e, e + 2))
				}
			}
		}
		segmentPointGeometry_(t, e) {
			t.push([e.getCoordinates()])
		}
		segmentPolygonGeometry_(t, e) {
			const i = e.getCoordinates();
			for (let e = 0, n = i.length; e < n; ++e) {
				const n = i[e];
				for (let e = 0, i = n.length - 1; e < i; ++e) t.push(n.slice(e, e + 2))
			}
		}
	};
	const S_ = "translatestart",
		E_ = "translating",
		C_ = "translateend";
	class T_ extends at {
		constructor(t, e, i, n, r) {
			super(t), this.features = e, this.coordinate = i, this.startCoordinate = n, this.mapBrowserEvent = r
		}
	}
	var P_ = class extends Eh {
			constructor(t) {
				let e;
				if (super(t = t || {}), this.on, this.once, this.un, this.lastCoordinate_ = null, this.startCoordinate_ = null, this.features_ = void 0 !== t.features ? t.features : null, t.layers && !this.features_)
					if ("function" == typeof t.layers) e = t.layers;
					else {
						const i = t.layers;
						e = function(t) {
							return i.includes(t)
						}
					}
				else e = ft;
				this.layerFilter_ = e, this.filter_ = t.filter && !this.features_ ? t.filter : ft, this.hitTolerance_ = t.hitTolerance ? t.hitTolerance : 0, this.condition_ = t.condition ? t.condition : Rh, this.lastFeature_ = null, this.addChangeListener(xh, this.handleActiveChanged_)
			}
			handleDownEvent(t) {
				if (!t.originalEvent || !this.condition_(t)) return !1;
				if (this.lastFeature_ = this.featuresAtPixel_(t.pixel, t.map), !this.lastCoordinate_ && this.lastFeature_) {
					this.startCoordinate_ = t.coordinate, this.lastCoordinate_ = t.coordinate, this.handleMoveEvent(t);
					const e = this.features_ || new Rs([this.lastFeature_]);
					return this.dispatchEvent(new T_(S_, e, t.coordinate, this.startCoordinate_, t)), !0
				}
				return !1
			}
			handleUpEvent(t) {
				if (this.lastCoordinate_) {
					this.lastCoordinate_ = null, this.handleMoveEvent(t);
					const e = this.features_ || new Rs([this.lastFeature_]);
					return this.dispatchEvent(new T_(C_, e, t.coordinate, this.startCoordinate_, t)), this.startCoordinate_ = null, !0
				}
				return !1
			}
			handleDragEvent(t) {
				if (this.lastCoordinate_) {
					const e = t.coordinate,
						i = t.map.getView().getProjection(),
						n = An(e, i),
						r = An(this.lastCoordinate_, i),
						s = n[0] - r[0],
						o = n[1] - r[1],
						a = this.features_ || new Rs([this.lastFeature_]),
						l = Ln();
					a.forEach((function(t) {
						const e = t.getGeometry();
						l ? (e.transform(l, i), e.translate(s, o), e.transform(i, l)) : e.translate(s, o), t.setGeometry(e)
					})), this.lastCoordinate_ = e, this.dispatchEvent(new T_(E_, a, e, this.startCoordinate_, t))
				}
			}
			handleMoveEvent(t) {
				const e = t.map.getViewport();
				this.featuresAtPixel_(t.pixel, t.map) ? (e.classList.remove(this.lastCoordinate_ ? "ol-grab" : "ol-grabbing"), e.classList.add(this.lastCoordinate_ ? "ol-grabbing" : "ol-grab")) : e.classList.remove("ol-grab", "ol-grabbing")
			}
			featuresAtPixel_(t, e) {
				return e.forEachFeatureAtPixel(t, ((t, e) => {
					if (t instanceof De && this.filter_(t, e) && (!this.features_ || this.features_.getArray().includes(t))) return t
				}), {
					layerFilter: this.layerFilter_,
					hitTolerance: this.hitTolerance_
				})
			}
			getHitTolerance() {
				return this.hitTolerance_
			}
			setHitTolerance(t) {
				this.hitTolerance_ = t
			}
			setMap(t) {
				const e = this.getMap();
				super.setMap(t), this.updateState_(e)
			}
			handleActiveChanged_() {
				this.updateState_(null)
			}
			updateState_(t) {
				let e = this.getMap();
				const i = this.getActive();
				if ((!e || !i) && (e = e || t, e)) {
					e.getViewport().classList.remove("ol-grab", "ol-grabbing")
				}
			}
		},
		R_ = Object.freeze({
			__proto__: null,
			DoubleClickZoom: bh,
			DblClickDragZoom: Tm,
			DragAndDrop: Fm,
			DragBox: Xh,
			DragPan: zh,
			DragRotate: Gh,
			DragRotateAndZoom: Mm,
			DragZoom: Wh,
			Draw: Xm,
			Extent: Jm,
			Interaction: wh,
			KeyboardPan: Hh,
			KeyboardZoom: Jh,
			Link: i_,
			Modify: d_,
			MouseWheelZoom: Qh,
			PinchRotate: tu,
			PinchZoom: eu,
			Pointer: Eh,
			Select: __,
			Snap: b_,
			Translate: P_,
			defaults: iu
		});
	const F_ = "http://www.w3.org/2001/XMLSchema-instance";

	function M_(t, e) {
		return Y_().createElementNS(t, e)
	}

	function I_(t, e) {
		return L_(t, e, []).join("")
	}

	function L_(t, e, i) {
		if (t.nodeType == Node.CDATA_SECTION_NODE || t.nodeType == Node.TEXT_NODE) e ? i.push(String(t.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : i.push(t.nodeValue);
		else {
			let n;
			for (n = t.firstChild; n; n = n.nextSibling) L_(n, e, i)
		}
		return i
	}

	function k_(t) {
		return "documentElement" in t
	}

	function A_(t) {
		return (new DOMParser).parseFromString(t, "application/xml")
	}

	function D_(t, e) {
		return function(i, n) {
			const r = t.call(void 0 !== e ? e : this, i, n);
			if (void 0 !== r) {
				gt(n[n.length - 1], r)
			}
		}
	}

	function O_(t, e) {
		return function(i, n) {
			const r = t.call(void 0 !== e ? e : this, i, n);
			if (void 0 !== r) {
				n[n.length - 1].push(r)
			}
		}
	}

	function z_(t, e) {
		return function(i, n) {
			const r = t.call(void 0 !== e ? e : this, i, n);
			void 0 !== r && (n[n.length - 1] = r)
		}
	}

	function G_(t, e, i) {
		return function(n, r) {
			const s = t.call(void 0 !== i ? i : this, n, r);
			if (void 0 !== s) {
				r[r.length - 1][void 0 !== e ? e : n.localName] = s
			}
		}
	}

	function N_(t, e) {
		return function(i, n, r) {
			t.call(void 0 !== e ? e : this, i, n, r);
			r[r.length - 1].node.appendChild(i)
		}
	}

	function j_(t, e) {
		return function(i, n, r) {
			const s = n[n.length - 1].node;
			let o = t;
			void 0 === o && (o = r);
			return M_(void 0 !== e ? e : s.namespaceURI, o)
		}
	}
	const U_ = j_();

	function B_(t, e) {
		const i = e.length,
			n = new Array(i);
		for (let r = 0; r < i; ++r) n[r] = t[e[r]];
		return n
	}

	function $_(t, e, i) {
		let n, r;
		for (i = void 0 !== i ? i : {}, n = 0, r = t.length; n < r; ++n) i[t[n]] = e;
		return i
	}

	function V_(t, e, i, n) {
		let r;
		for (r = e.firstElementChild; r; r = r.nextElementSibling) {
			const e = t[r.namespaceURI];
			if (void 0 !== e) {
				const t = e[r.localName];
				void 0 !== t && t.call(n, r, i)
			}
		}
	}

	function X_(t, e, i, n, r) {
		return n.push(t), V_(e, i, n, r), n.pop()
	}

	function W_(t, e, i, n, r, s, o) {
		return r.push(t),
			function(t, e, i, n, r, s) {
				const o = (void 0 !== r ? r : i).length;
				let a, l;
				for (let h = 0; h < o; ++h) a = i[h], void 0 !== a && (l = e.call(void 0 !== s ? s : this, a, n, void 0 !== r ? r[h] : void 0), void 0 !== l && t[l.namespaceURI][l.localName].call(s, l, a, n))
			}(e, i, n, r, s, o), r.pop()
	}
	let q_, Z_;

	function Y_() {
		return void 0 === Z_ && "undefined" != typeof document && (Z_ = document.implementation.createDocument("", "", null)), Z_
	}
	var K_ = class extends wu {
		constructor() {
			super(), this.xmlSerializer_ = (void 0 === q_ && "undefined" != typeof XMLSerializer && (q_ = new XMLSerializer), q_)
		}
		getType() {
			return "xml"
		}
		readFeature(t, e) {
			if (!t) return null;
			if ("string" == typeof t) {
				const i = A_(t);
				return this.readFeatureFromDocument(i, e)
			}
			return k_(t) ? this.readFeatureFromDocument(t, e) : this.readFeatureFromNode(t, e)
		}
		readFeatureFromDocument(t, e) {
			const i = this.readFeaturesFromDocument(t, e);
			return i.length > 0 ? i[0] : null
		}
		readFeatureFromNode(t, e) {
			return null
		}
		readFeatures(t, e) {
			if (!t) return [];
			if ("string" == typeof t) {
				const i = A_(t);
				return this.readFeaturesFromDocument(i, e)
			}
			return k_(t) ? this.readFeaturesFromDocument(t, e) : this.readFeaturesFromNode(t, e)
		}
		readFeaturesFromDocument(t, e) {
			const i = [];
			for (let n = t.firstChild; n; n = n.nextSibling) n.nodeType == Node.ELEMENT_NODE && gt(i, this.readFeaturesFromNode(n, e));
			return i
		}
		readFeaturesFromNode(t, e) {
			return o()
		}
		readGeometry(t, e) {
			if (!t) return null;
			if ("string" == typeof t) {
				const i = A_(t);
				return this.readGeometryFromDocument(i, e)
			}
			return k_(t) ? this.readGeometryFromDocument(t, e) : this.readGeometryFromNode(t, e)
		}
		readGeometryFromDocument(t, e) {
			return null
		}
		readGeometryFromNode(t, e) {
			return null
		}
		readProjection(t) {
			if (!t) return null;
			if ("string" == typeof t) {
				const e = A_(t);
				return this.readProjectionFromDocument(e)
			}
			return k_(t) ? this.readProjectionFromDocument(t) : this.readProjectionFromNode(t)
		}
		readProjectionFromDocument(t) {
			return this.dataProjection
		}
		readProjectionFromNode(t) {
			return this.dataProjection
		}
		writeFeature(t, e) {
			const i = this.writeFeatureNode(t, e);
			return this.xmlSerializer_.serializeToString(i)
		}
		writeFeatureNode(t, e) {
			return null
		}
		writeFeatures(t, e) {
			const i = this.writeFeaturesNode(t, e);
			return this.xmlSerializer_.serializeToString(i)
		}
		writeFeaturesNode(t, e) {
			return null
		}
		writeGeometry(t, e) {
			const i = this.writeGeometryNode(t, e);
			return this.xmlSerializer_.serializeToString(i)
		}
		writeGeometryNode(t, e) {
			return null
		}
	};

	function H_(t) {
		return function(t) {
			const e = /^\s*(true|1)|(false|0)\s*$/.exec(t);
			if (e) return void 0 !== e[1] || !1;
			return
		}(I_(t, !1))
	}

	function J_(t) {
		return function(t) {
			const e = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(t);
			if (e) return parseFloat(e[1]);
			return
		}(I_(t, !1))
	}

	function Q_(t) {
		return I_(t, !1).trim()
	}

	function ty(t, e) {
		iy(t, e ? "1" : "0")
	}

	function ey(t, e) {
		const i = e.toPrecision();
		t.appendChild(Y_().createTextNode(i))
	}

	function iy(t, e) {
		t.appendChild(Y_().createTextNode(e))
	}
	const ny = ["http://www.google.com/kml/ext/2.2"],
		ry = [null, "http://earth.google.com/kml/2.0", "http://earth.google.com/kml/2.1", "http://earth.google.com/kml/2.2", "http://www.opengis.net/kml/2.2"],
		sy = {
			fraction: "fraction",
			pixels: "pixels",
			insetPixels: "pixels"
		},
		oy = $_(ry, {
			ExtendedData: hx,
			Region: ux,
			MultiGeometry: G_(tx, "geometry"),
			LineString: G_(Hy, "geometry"),
			LinearRing: G_(Jy, "geometry"),
			Point: G_(ex, "geometry"),
			Polygon: G_(nx, "geometry"),
			Style: G_(sx),
			StyleMap: function(t, e) {
				const i = zy.call(this, t, e);
				if (!i) return;
				const n = e[e.length - 1];
				if (Array.isArray(i)) n.Style = i;
				else {
					if ("string" != typeof i) throw new Error("`styleMapValue` has an unknown type");
					n.styleUrl = i
				}
			},
			address: G_(Q_),
			description: G_(Q_),
			name: G_(Q_),
			open: G_(H_),
			phoneNumber: G_(Q_),
			styleUrl: G_(Ay),
			visibility: G_(H_)
		}, $_(ny, {
			MultiTrack: G_((function(t, e) {
				const i = X_([], Vy, t, e);
				if (!i) return;
				return new Lr(i)
			}), "geometry"),
			Track: G_(Wy, "geometry")
		})),
		ay = $_(ry, {
			ExtendedData: hx,
			Region: ux,
			Link: function(t, e) {
				V_(ly, t, e)
			},
			address: G_(Q_),
			description: G_(Q_),
			name: G_(Q_),
			open: G_(H_),
			phoneNumber: G_(Q_),
			visibility: G_(H_)
		}),
		ly = $_(ry, {
			href: G_(ky)
		}),
		hy = $_(ry, {
			Altitude: G_(J_),
			Longitude: G_(J_),
			Latitude: G_(J_),
			Tilt: G_(J_),
			AltitudeMode: G_(Q_),
			Heading: G_(J_),
			Roll: G_(J_)
		}),
		uy = $_(ry, {
			LatLonAltBox: function(t, e) {
				const i = X_({}, gx, t, e);
				if (!i) return;
				const n = e[e.length - 1],
					r = [parseFloat(i.west), parseFloat(i.south), parseFloat(i.east), parseFloat(i.north)];
				n.extent = r, n.altitudeMode = i.altitudeMode, n.minAltitude = parseFloat(i.minAltitude), n.maxAltitude = parseFloat(i.maxAltitude)
			},
			Lod: function(t, e) {
				const i = X_({}, px, t, e);
				if (!i) return;
				const n = e[e.length - 1];
				n.minLodPixels = parseFloat(i.minLodPixels), n.maxLodPixels = parseFloat(i.maxLodPixels), n.minFadeExtent = parseFloat(i.minFadeExtent), n.maxFadeExtent = parseFloat(i.maxFadeExtent)
			}
		}),
		cy = $_(ry, ["Document", "Placemark"]),
		dy = $_(ry, {
			Document: N_((function(t, e, i) {
				W_({
					node: t
				}, xx, vx, e, i, void 0, this)
			})),
			Placemark: N_(Vx)
		});
	let gy, py, fy, my, _y, yy, xy, vy, wy, by = null,
		Sy = null,
		Ey = null,
		Cy = null,
		Ty = null,
		Py = null;

	function Ry(t) {
		return 32 / Math.min(t[0], t[1])
	}

	function Fy(t) {
		return t
	}

	function My(t, e, i) {
		return Array.isArray(t) ? t : "string" == typeof t ? My(i[t], e, i) : e
	}

	function Iy(t) {
		const e = I_(t, !1),
			i = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(e);
		if (i) {
			const t = i[1];
			return [parseInt(t.substr(6, 2), 16), parseInt(t.substr(4, 2), 16), parseInt(t.substr(2, 2), 16), parseInt(t.substr(0, 2), 16) / 255]
		}
	}

	function Ly(t) {
		let e = I_(t, !1);
		const i = [];
		e = e.replace(/\s*,\s*/g, ",");
		const n = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?),([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s+|,|$)(?:([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s+|$))?\s*/i;
		let r;
		for (; r = n.exec(e);) {
			const t = parseFloat(r[1]),
				n = parseFloat(r[2]),
				s = r[3] ? parseFloat(r[3]) : 0;
			i.push(t, n, s), e = e.substr(r[0].length)
		}
		if ("" === e) return i
	}

	function ky(t) {
		const e = I_(t, !1).trim();
		let i = t.baseURI;
		if (i && "about:blank" != i || (i = window.location.href), i) {
			return new URL(e, i).href
		}
		return e
	}

	function Ay(t) {
		const e = I_(t, !1).trim().replace(/^(?!.*#)/, "#");
		let i = t.baseURI;
		if (i && "about:blank" != i || (i = window.location.href), i) {
			return new URL(e, i).href
		}
		return e
	}

	function Dy(t) {
		return J_(t)
	}
	const Oy = $_(ry, {
		Pair: function(t, e) {
			const i = X_({}, cx, t, e, this);
			if (!i) return;
			const n = i.key;
			if (n && "normal" == n) {
				const t = i.styleUrl;
				t && (e[e.length - 1] = t);
				const n = i.Style;
				n && (e[e.length - 1] = n)
			}
		}
	});

	function zy(t, e) {
		return X_(void 0, Oy, t, e, this)
	}
	const Gy = $_(ry, {
		Icon: G_((function(t, e) {
			const i = X_({}, qy, t, e);
			if (i) return i;
			return null
		})),
		color: G_(Iy),
		heading: G_(J_),
		hotSpot: G_((function(t) {
			const e = t.getAttribute("xunits"),
				i = t.getAttribute("yunits");
			let n;
			return n = "insetPixels" !== e ? "insetPixels" !== i ? "bottom-left" : "top-left" : "insetPixels" !== i ? "bottom-right" : "top-right", {
				x: parseFloat(t.getAttribute("x")),
				xunits: sy[e],
				y: parseFloat(t.getAttribute("y")),
				yunits: sy[i],
				origin: n
			}
		})),
		scale: G_(Dy)
	});
	const Ny = $_(ry, {
		color: G_(Iy),
		scale: G_(Dy)
	});
	const jy = $_(ry, {
		color: G_(Iy),
		width: G_(J_)
	});
	const Uy = $_(ry, {
		color: G_(Iy),
		fill: G_(H_),
		outline: G_(H_)
	});
	const By = $_(ry, {
		coordinates: z_(Ly)
	});

	function $y(t, e) {
		return X_(null, By, t, e)
	}
	const Vy = $_(ny, {
		Track: O_(Wy)
	});
	const Xy = $_(ry, {
		when: function(t, e) {
			const i = e[e.length - 1].whens,
				n = I_(t, !1),
				r = Date.parse(n);
			i.push(isNaN(r) ? 0 : r)
		}
	}, $_(ny, {
		coord: function(t, e) {
			const i = e[e.length - 1].coordinates,
				n = I_(t, !1),
				r = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(n);
			if (r) {
				const t = parseFloat(r[1]),
					e = parseFloat(r[2]),
					n = parseFloat(r[3]);
				i.push([t, e, n])
			} else i.push([])
		}
	}));

	function Wy(t, e) {
		const i = X_({
			coordinates: [],
			whens: []
		}, Xy, t, e);
		if (!i) return;
		const n = [],
			r = i.coordinates,
			s = i.whens;
		for (let t = 0, e = Math.min(r.length, s.length); t < e; ++t) 3 == r[t].length && n.push(r[t][0], r[t][1], r[t][2], s[t]);
		return new Mr(n, "XYZM")
	}
	const qy = $_(ry, {
		href: G_(ky)
	}, $_(ny, {
		x: G_(J_),
		y: G_(J_),
		w: G_(J_),
		h: G_(J_)
	}));
	const Zy = $_(ry, {
		coordinates: z_(Ly)
	});

	function Yy(t, e) {
		return X_(null, Zy, t, e)
	}
	const Ky = $_(ry, {
		extrude: G_(H_),
		tessellate: G_(H_),
		altitudeMode: G_(Q_)
	});

	function Hy(t, e) {
		const i = X_({}, Ky, t, e),
			n = Yy(t, e);
		if (n) {
			const t = new Mr(n, "XYZ");
			return t.setProperties(i, !0), t
		}
	}

	function Jy(t, e) {
		const i = X_({}, Ky, t, e),
			n = Yy(t, e);
		if (n) {
			const t = new Wr(n, "XYZ", [n.length]);
			return t.setProperties(i, !0), t
		}
	}
	const Qy = $_(ry, {
		LineString: O_(Hy),
		LinearRing: O_(Jy),
		MultiGeometry: O_(tx),
		Point: O_(ex),
		Polygon: O_(nx)
	});

	function tx(t, e) {
		const i = X_([], Qy, t, e);
		if (!i) return null;
		if (0 === i.length) return new er(i);
		let n, r = !0;
		const s = i[0].getType();
		let o;
		for (let t = 1, e = i.length; t < e; ++t)
			if (o = i[t], o.getType() != s) {
				r = !1;
				break
			} if (r) {
			let t, e;
			if ("Point" == s) {
				const r = i[0];
				t = r.getLayout(), e = r.getFlatCoordinates();
				for (let t = 1, n = i.length; t < n; ++t) o = i[t], gt(e, o.getFlatCoordinates());
				n = new Or(e, t), ox(n, i)
			} else if ("LineString" == s) n = new Lr(i), ox(n, i);
			else if ("Polygon" == s) n = new Hr(i), ox(n, i);
			else {
				if ("GeometryCollection" != s) throw new Error("Unknown geometry type found");
				n = new er(i)
			}
		} else n = new er(i);
		return n
	}

	function ex(t, e) {
		const i = X_({}, Ky, t, e),
			n = Yy(t, e);
		if (n) {
			const t = new Ar(n, "XYZ");
			return t.setProperties(i, !0), t
		}
	}
	const ix = $_(ry, {
		innerBoundaryIs: function(t, e) {
			const i = X_([], fx, t, e);
			if (i.length > 0) {
				e[e.length - 1].push(...i)
			}
		},
		outerBoundaryIs: function(t, e) {
			const i = X_(void 0, mx, t, e);
			if (i) {
				e[e.length - 1][0] = i
			}
		}
	});

	function nx(t, e) {
		const i = X_({}, Ky, t, e),
			n = X_([null], ix, t, e);
		if (n && n[0]) {
			const t = n[0],
				e = [t.length];
			for (let i = 1, r = n.length; i < r; ++i) gt(t, n[i]), e.push(t.length);
			const r = new Wr(t, "XYZ", e);
			return r.setProperties(i, !0), r
		}
	}
	const rx = $_(ry, {
		IconStyle: function(t, n) {
			const r = X_({}, Gy, t, n);
			if (!r) return;
			const s = n[n.length - 1],
				o = "Icon" in r ? r.Icon : {},
				a = !("Icon" in r) || Object.keys(o).length > 0;
			let l;
			const h = o.href;
			let u, c, d;
			h ? l = h : a && (l = yy);
			let g = "bottom-left";
			const p = r.hotSpot;
			let f;
			p ? (u = [p.x, p.y], c = p.xunits, d = p.yunits, g = p.origin) : /^https?:\/\/maps\.(?:google|gstatic)\.com\//.test(l) && (l.includes("pushpin") ? (u = py, c = fy, d = my) : l.includes("arrow-reverse") ? (u = [54, 42], c = fy, d = my) : l.includes("paddle") && (u = [32, 1], c = fy, d = my));
			const m = o.x,
				_ = o.y;
			let y;
			void 0 !== m && void 0 !== _ && (f = [m, _]);
			const x = o.w,
				v = o.h;
			let w;
			void 0 !== x && void 0 !== v && (y = [x, v]);
			const b = r.heading;
			void 0 !== b && (w = T(b));
			const S = r.scale,
				E = r.color;
			if (a) {
				l == yy && (y = _y);
				const t = new ke({
						anchor: u,
						anchorOrigin: g,
						anchorXUnits: c,
						anchorYUnits: d,
						crossOrigin: this.crossOrigin_,
						offset: f,
						offsetOrigin: "bottom-left",
						rotation: w,
						scale: S,
						size: y,
						src: this.iconUrlFunction_(l),
						color: E
					}),
					n = t.getScaleArray()[0],
					r = t.getSize();
				if (null === r) {
					const r = t.getImageState();
					if (r === e || r === i) {
						const s = function() {
							const r = t.getImageState();
							if (r !== e && r !== i) {
								const e = t.getSize();
								if (e && 2 == e.length) {
									const i = Ry(e);
									t.setScale(n * i)
								}
								t.unlistenImageChange(s)
							}
						};
						t.listenImageChange(s), r === e && t.load()
					}
				} else if (2 == r.length) {
					const e = Ry(r);
					t.setScale(n * e)
				}
				s.imageStyle = t
			} else s.imageStyle = xy
		},
		LabelStyle: function(t, e) {
			const i = X_({}, Ny, t, e);
			if (!i) return;
			const n = e[e.length - 1],
				r = new us({
					fill: new be({
						color: "color" in i ? i.color : gy
					}),
					scale: i.scale
				});
			n.textStyle = r
		},
		LineStyle: function(t, e) {
			const i = X_({}, jy, t, e);
			if (!i) return;
			const n = e[e.length - 1],
				r = new is({
					color: "color" in i ? i.color : gy,
					width: "width" in i ? i.width : 1
				});
			n.strokeStyle = r
		},
		PolyStyle: function(t, e) {
			const i = X_({}, Uy, t, e);
			if (!i) return;
			const n = e[e.length - 1],
				r = new be({
					color: "color" in i ? i.color : gy
				});
			n.fillStyle = r;
			const s = i.fill;
			void 0 !== s && (n.fill = s);
			const o = i.outline;
			void 0 !== o && (n.outline = o)
		}
	});

	function sx(t, e) {
		const i = X_({}, rx, t, e, this);
		if (!i) return null;
		let n = "fillStyle" in i ? i.fillStyle : by;
		const r = i.fill;
		let s;
		void 0 === r || r || (n = null), "imageStyle" in i ? i.imageStyle != xy && (s = i.imageStyle) : s = Sy;
		const o = "textStyle" in i ? i.textStyle : Cy,
			a = "strokeStyle" in i ? i.strokeStyle : Ey,
			l = i.outline;
		return void 0 === l || l ? [new ls({
			fill: n,
			image: s,
			stroke: a,
			text: o,
			zIndex: void 0
		})] : [new ls({
			geometry: function(t) {
				const e = t.getGeometry(),
					i = e.getType();
				if ("GeometryCollection" === i) {
					return new er(e.getGeometriesArrayRecursive().filter((function(t) {
						const e = t.getType();
						return "Polygon" !== e && "MultiPolygon" !== e
					})))
				}
				if ("Polygon" !== i && "MultiPolygon" !== i) return e
			},
			fill: n,
			image: s,
			stroke: a,
			text: o,
			zIndex: void 0
		}), new ls({
			geometry: function(t) {
				const e = t.getGeometry(),
					i = e.getType();
				if ("GeometryCollection" === i) {
					return new er(e.getGeometriesArrayRecursive().filter((function(t) {
						const e = t.getType();
						return "Polygon" === e || "MultiPolygon" === e
					})))
				}
				if ("Polygon" === i || "MultiPolygon" === i) return e
			},
			fill: n,
			stroke: null,
			zIndex: void 0
		})]
	}

	function ox(t, e) {
		const i = e.length,
			n = new Array(e.length),
			r = new Array(e.length),
			s = new Array(e.length);
		let o, a, l;
		o = !1, a = !1, l = !1;
		for (let t = 0; t < i; ++t) {
			const i = e[t];
			n[t] = i.get("extrude"), r[t] = i.get("tessellate"), s[t] = i.get("altitudeMode"), o = o || void 0 !== n[t], a = a || void 0 !== r[t], l = l || s[t]
		}
		o && t.set("extrude", n), a && t.set("tessellate", r), l && t.set("altitudeMode", s)
	}
	const ax = $_(ry, {
		displayName: G_(Q_),
		value: G_(Q_)
	});
	const lx = $_(ry, {
		Data: function(t, e) {
			const i = t.getAttribute("name");
			V_(ax, t, e);
			const n = e[e.length - 1];
			i && n.displayName ? n[i] = {
				value: n.value,
				displayName: n.displayName,
				toString: function() {
					return n.value
				}
			} : null !== i ? n[i] = n.value : null !== n.displayName && (n[n.displayName] = n.value), delete n.value
		},
		SchemaData: function(t, e) {
			V_(dx, t, e)
		}
	});

	function hx(t, e) {
		V_(lx, t, e)
	}

	function ux(t, e) {
		V_(uy, t, e)
	}
	const cx = $_(ry, {
		Style: G_(sx),
		key: G_(Q_),
		styleUrl: G_(Ay)
	});
	const dx = $_(ry, {
		SimpleData: function(t, e) {
			const i = t.getAttribute("name");
			if (null !== i) {
				const n = Q_(t);
				e[e.length - 1][i] = n
			}
		}
	});
	const gx = $_(ry, {
		altitudeMode: G_(Q_),
		minAltitude: G_(J_),
		maxAltitude: G_(J_),
		north: G_(J_),
		south: G_(J_),
		east: G_(J_),
		west: G_(J_)
	});
	const px = $_(ry, {
		minLodPixels: G_(J_),
		maxLodPixels: G_(J_),
		minFadeExtent: G_(J_),
		maxFadeExtent: G_(J_)
	});
	const fx = $_(ry, {
		LinearRing: O_($y)
	});
	const mx = $_(ry, {
		LinearRing: z_($y)
	});

	function _x(t, e) {
		const i = j(e),
			n = [255 * (4 == i.length ? i[3] : 1), i[2], i[1], i[0]];
		for (let t = 0; t < 4; ++t) {
			const e = Math.floor(n[t]).toString(16);
			n[t] = 1 == e.length ? "0" + e : e
		}
		iy(t, n.join(""))
	}
	const yx = $_(ry, {
		Data: N_((function(t, e, i) {
			t.setAttribute("name", e.name);
			const n = {
					node: t
				},
				r = e.value;
			"object" == typeof r ? (null !== r && r.displayName && W_(n, yx, U_, [r.displayName], i, ["displayName"]), null !== r && r.value && W_(n, yx, U_, [r.value], i, ["value"])) : W_(n, yx, U_, [r], i, ["value"])
		})),
		value: N_((function(t, e) {
			iy(t, e)
		})),
		displayName: N_((function(t, e) {
			! function(t, e) {
				t.appendChild(Y_().createCDATASection(e))
			}(t, e)
		}))
	});
	const xx = $_(ry, {
			Placemark: N_(Vx)
		}),
		vx = function(t, e, i) {
			return M_(e[e.length - 1].node.namespaceURI, "Placemark")
		};
	const wx = j_("Data");
	const bx = $_(ry, ["href"], $_(ny, ["x", "y", "w", "h"])),
		Sx = $_(ry, {
			href: N_(iy)
		}, $_(ny, {
			x: N_(ey),
			y: N_(ey),
			w: N_(ey),
			h: N_(ey)
		})),
		Ex = function(t, e, i) {
			return M_(ny[0], "gx:" + i)
		};
	const Cx = $_(ry, ["scale", "heading", "Icon", "color", "hotSpot"]),
		Tx = $_(ry, {
			Icon: N_((function(t, e, i) {
				const n = {
						node: t
					},
					r = i[i.length - 1].node;
				let s = bx[r.namespaceURI],
					o = B_(e, s);
				W_(n, Sx, U_, o, i, s), s = bx[ny[0]], o = B_(e, s), W_(n, Sx, Ex, o, i, s)
			})),
			color: N_(_x),
			heading: N_(ey),
			hotSpot: N_((function(t, e) {
				t.setAttribute("x", String(e.x)), t.setAttribute("y", String(e.y)), t.setAttribute("xunits", e.xunits), t.setAttribute("yunits", e.yunits)
			})),
			scale: N_(tv)
		});
	const Px = $_(ry, ["color", "scale"]),
		Rx = $_(ry, {
			color: N_(_x),
			scale: N_(tv)
		});
	const Fx = $_(ry, ["color", "width"]),
		Mx = $_(ry, {
			color: N_(_x),
			width: N_(ey)
		});
	const Ix = {
			Point: "Point",
			LineString: "LineString",
			LinearRing: "LinearRing",
			Polygon: "Polygon",
			MultiPoint: "MultiGeometry",
			MultiLineString: "MultiGeometry",
			MultiPolygon: "MultiGeometry",
			GeometryCollection: "MultiGeometry"
		},
		Lx = function(t, e, i) {
			if (t) {
				return M_(e[e.length - 1].node.namespaceURI, Ix[t.getType()])
			}
		},
		kx = j_("Point"),
		Ax = j_("LineString"),
		Dx = j_("LinearRing"),
		Ox = j_("Polygon"),
		zx = $_(ry, {
			LineString: N_(qx),
			Point: N_(qx),
			Polygon: N_(Jx),
			GeometryCollection: N_(Gx)
		});

	function Gx(t, e, i) {
		const n = {
				node: t
			},
			r = e.getType();
		let s, o = [];
		if ("GeometryCollection" === r) e.getGeometriesArrayRecursive().forEach((function(t) {
			const e = t.getType();
			if ("MultiPoint" === e) o = o.concat(t.getPoints());
			else if ("MultiLineString" === e) o = o.concat(t.getLineStrings());
			else if ("MultiPolygon" === e) o = o.concat(t.getPolygons());
			else {
				if ("Point" !== e && "LineString" !== e && "Polygon" !== e) throw new Error("Unknown geometry type");
				o.push(t)
			}
		})), s = Lx;
		else if ("MultiPoint" === r) o = e.getPoints(), s = kx;
		else if ("MultiLineString" === r) o = e.getLineStrings(), s = Ax;
		else {
			if ("MultiPolygon" !== r) throw new Error("Unknown geometry type");
			o = e.getPolygons(), s = Ox
		}
		W_(n, zx, s, o, i)
	}
	const Nx = $_(ry, {
		LinearRing: N_(qx)
	});

	function jx(t, e, i) {
		W_({
			node: t
		}, Nx, Dx, [e], i)
	}
	const Ux = $_(ry, {
			ExtendedData: N_((function(t, e, i) {
				const n = {
						node: t
					},
					r = e.names,
					s = e.values,
					o = r.length;
				for (let t = 0; t < o; t++) W_(n, yx, wx, [{
					name: r[t],
					value: s[t]
				}], i)
			})),
			MultiGeometry: N_(Gx),
			LineString: N_(qx),
			LinearRing: N_(qx),
			Point: N_(qx),
			Polygon: N_(Jx),
			Style: N_((function(t, e, i) {
				const n = {
						node: t
					},
					r = {};
				if (e.pointStyles.length) {
					const t = e.pointStyles[0].getText();
					t && (r.LabelStyle = t);
					const i = e.pointStyles[0].getImage();
					i && "function" == typeof i.getSrc && (r.IconStyle = i)
				}
				if (e.lineStyles.length) {
					const t = e.lineStyles[0].getStroke();
					t && (r.LineStyle = t)
				}
				if (e.polyStyles.length) {
					const t = e.polyStyles[0].getStroke();
					t && !r.LineStyle && (r.LineStyle = t), r.PolyStyle = e.polyStyles[0]
				}
				const s = i[i.length - 1].node,
					o = ev[s.namespaceURI],
					a = B_(r, o);
				W_(n, iv, U_, a, i, o)
			})),
			address: N_(iy),
			description: N_(iy),
			name: N_(iy),
			open: N_(ty),
			phoneNumber: N_(iy),
			styleUrl: N_(iy),
			visibility: N_(ty)
		}),
		Bx = $_(ry, ["name", "open", "visibility", "address", "phoneNumber", "description", "styleUrl", "Style"]),
		$x = j_("ExtendedData");

	function Vx(t, e, i) {
		const n = {
			node: t
		};
		e.getId() && t.setAttribute("id", e.getId());
		const r = e.getProperties(),
			s = {
				address: 1,
				description: 1,
				name: 1,
				open: 1,
				phoneNumber: 1,
				styleUrl: 1,
				visibility: 1
			};
		s[e.getGeometryName()] = 1;
		const o = Object.keys(r || {}).sort().filter((function(t) {
				return !s[t]
			})),
			a = e.getStyleFunction();
		if (a) {
			const t = a(e, 0);
			if (t) {
				const i = Array.isArray(t) ? t : [t];
				let n = i;
				if (e.getGeometry() && (n = i.filter((function(t) {
						const i = t.getGeometryFunction()(e);
						if (i) {
							const t = i.getType();
							return "GeometryCollection" === t ? i.getGeometriesArrayRecursive().filter((function(t) {
								const e = t.getType();
								return "Point" === e || "MultiPoint" === e
							})).length : "Point" === t || "MultiPoint" === t
						}
					}))), this.writeStyles_) {
					let t = i,
						s = i;
					e.getGeometry() && (t = i.filter((function(t) {
						const i = t.getGeometryFunction()(e);
						if (i) {
							const t = i.getType();
							return "GeometryCollection" === t ? i.getGeometriesArrayRecursive().filter((function(t) {
								const e = t.getType();
								return "LineString" === e || "MultiLineString" === e
							})).length : "LineString" === t || "MultiLineString" === t
						}
					})), s = i.filter((function(t) {
						const i = t.getGeometryFunction()(e);
						if (i) {
							const t = i.getType();
							return "GeometryCollection" === t ? i.getGeometriesArrayRecursive().filter((function(t) {
								const e = t.getType();
								return "Polygon" === e || "MultiPolygon" === e
							})).length : "Polygon" === t || "MultiPolygon" === t
						}
					}))), r.Style = {
						pointStyles: n,
						lineStyles: t,
						polyStyles: s
					}
				}
				if (n.length && void 0 === r.name) {
					const t = n[0].getText();
					t && (r.name = t.getText())
				}
			}
		}
		const l = i[i.length - 1].node,
			h = Bx[l.namespaceURI],
			u = B_(r, h);
		if (W_(n, Ux, U_, u, i, h), o.length > 0) {
			const t = B_(r, o);
			W_(n, Ux, $x, [{
				names: o,
				values: t
			}], i)
		}
		const c = i[0];
		let d = e.getGeometry();
		d && (d = bu(d, !0, c)), W_(n, Ux, Lx, [d], i)
	}
	const Xx = $_(ry, ["extrude", "tessellate", "altitudeMode", "coordinates"]),
		Wx = $_(ry, {
			extrude: N_(ty),
			tessellate: N_(ty),
			altitudeMode: N_(iy),
			coordinates: N_((function(t, e, i) {
				const n = i[i.length - 1],
					r = n.layout,
					s = n.stride;
				let o;
				if ("XY" == r || "XYM" == r) o = 2;
				else {
					if ("XYZ" != r && "XYZM" != r) throw new Error("Invalid geometry layout");
					o = 3
				}
				const a = e.length;
				let l = "";
				if (a > 0) {
					l += e[0];
					for (let t = 1; t < o; ++t) l += "," + e[t];
					for (let t = s; t < a; t += s) {
						l += " " + e[t];
						for (let i = 1; i < o; ++i) l += "," + e[t + i]
					}
				}
				iy(t, l)
			}))
		});

	function qx(t, e, i) {
		const n = e.getFlatCoordinates(),
			r = {
				node: t
			};
		r.layout = e.getLayout(), r.stride = e.getStride();
		const s = e.getProperties();
		s.coordinates = n;
		const o = i[i.length - 1].node,
			a = Xx[o.namespaceURI],
			l = B_(s, a);
		W_(r, Wx, U_, l, i, a)
	}
	const Zx = $_(ry, ["color", "fill", "outline"]),
		Yx = $_(ry, {
			outerBoundaryIs: N_(jx),
			innerBoundaryIs: N_(jx)
		}),
		Kx = j_("innerBoundaryIs"),
		Hx = j_("outerBoundaryIs");

	function Jx(t, e, i) {
		const n = e.getLinearRings(),
			r = n.shift(),
			s = {
				node: t
			};
		W_(s, Yx, Kx, n, i), W_(s, Yx, Hx, [r], i)
	}
	const Qx = $_(ry, {
		color: N_(_x),
		fill: N_(ty),
		outline: N_(ty)
	});

	function tv(t, e) {
		ey(t, Math.round(1e6 * e) / 1e6)
	}
	const ev = $_(ry, ["IconStyle", "LabelStyle", "LineStyle", "PolyStyle"]),
		iv = $_(ry, {
			IconStyle: N_((function(t, e, i) {
				const n = {
						node: t
					},
					r = {},
					s = e.getSrc(),
					o = e.getSize(),
					a = e.getImageSize(),
					l = {
						href: s
					};
				if (o) {
					l.w = o[0], l.h = o[1];
					const t = e.getAnchor(),
						i = e.getOrigin();
					if (i && a && 0 !== i[0] && i[1] !== o[1] && (l.x = i[0], l.y = a[1] - (i[1] + o[1])), t && (t[0] !== o[0] / 2 || t[1] !== o[1] / 2)) {
						const e = {
							x: t[0],
							xunits: "pixels",
							y: o[1] - t[1],
							yunits: "pixels"
						};
						r.hotSpot = e
					}
				}
				r.Icon = l;
				let h = e.getScaleArray()[0],
					u = o;
				if (null === u && (u = _y), 2 == u.length) {
					h /= Ry(u)
				}
				1 !== h && (r.scale = h);
				const c = e.getRotation();
				0 !== c && (r.heading = c);
				const d = e.getColor();
				d && (r.color = d);
				const g = i[i.length - 1].node,
					p = Cx[g.namespaceURI],
					f = B_(r, p);
				W_(n, Tx, U_, f, i, p)
			})),
			LabelStyle: N_((function(t, e, i) {
				const n = {
						node: t
					},
					r = {},
					s = e.getFill();
				s && (r.color = s.getColor());
				const o = e.getScale();
				o && 1 !== o && (r.scale = o);
				const a = i[i.length - 1].node,
					l = Px[a.namespaceURI],
					h = B_(r, l);
				W_(n, Rx, U_, h, i, l)
			})),
			LineStyle: N_((function(t, e, i) {
				const n = {
						node: t
					},
					r = {
						color: e.getColor(),
						width: Number(e.getWidth()) || 1
					},
					s = i[i.length - 1].node,
					o = Fx[s.namespaceURI],
					a = B_(r, o);
				W_(n, Mx, U_, a, i, o)
			})),
			PolyStyle: N_((function(t, e, i) {
				const n = {
						node: t
					},
					r = e.getFill(),
					s = e.getStroke(),
					o = {
						color: r ? r.getColor() : void 0,
						fill: !!r && void 0,
						outline: !!s && void 0
					},
					a = i[i.length - 1].node,
					l = Zx[a.namespaceURI],
					h = B_(o, l);
				W_(n, Qx, U_, h, i, l)
			}))
		});
	var nv = class extends K_ {
		constructor(t) {
			super(), t = t || {}, Py || (gy = [255, 255, 255, 1], by = new be({
				color: gy
			}), py = [20, 2], fy = "pixels", my = "pixels", _y = [64, 64], yy = "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png", Sy = new ke({
				anchor: py,
				anchorOrigin: "bottom-left",
				anchorXUnits: fy,
				anchorYUnits: my,
				crossOrigin: "anonymous",
				rotation: 0,
				scale: Ry(_y),
				size: _y,
				src: yy
			}), xy = "NO_IMAGE", Ey = new is({
				color: gy,
				width: 1
			}), vy = new is({
				color: [51, 51, 51, 1],
				width: 2
			}), Cy = new us({
				font: "bold 16px Helvetica",
				fill: by,
				stroke: vy,
				scale: .8
			}), Ty = new ls({
				fill: by,
				image: Sy,
				text: Cy,
				stroke: Ey,
				zIndex: 0
			}), Py = [Ty]), this.dataProjection = yn("EPSG:4326"), this.defaultStyle_ = t.defaultStyle ? t.defaultStyle : Py, this.extractStyles_ = void 0 === t.extractStyles || t.extractStyles, this.writeStyles_ = void 0 === t.writeStyles || t.writeStyles, this.sharedStyles_ = {}, this.showPointNames_ = void 0 === t.showPointNames || t.showPointNames, this.crossOrigin_ = void 0 !== t.crossOrigin ? t.crossOrigin : "anonymous", this.iconUrlFunction_ = t.iconUrlFunction ? t.iconUrlFunction : Fy, this.supportedMediaTypes = ["application/vnd.google-earth.kml+xml"]
		}
		readDocumentOrFolder_(t, e) {
			const i = X_([], $_(ry, {
				Document: D_(this.readDocumentOrFolder_, this),
				Folder: D_(this.readDocumentOrFolder_, this),
				Placemark: O_(this.readPlacemark_, this),
				Style: this.readSharedStyle_.bind(this),
				StyleMap: this.readSharedStyleMap_.bind(this)
			}), t, e, this);
			if (i) return i
		}
		readPlacemark_(t, e) {
			const i = X_({
				geometry: null
			}, oy, t, e, this);
			if (!i) return;
			const n = new De,
				r = t.getAttribute("id");
			null !== r && n.setId(r);
			const s = e[0],
				o = i.geometry;
			if (o && bu(o, !1, s), n.setGeometry(o), delete i.geometry, this.extractStyles_) {
				const t = function(t, e, i, n, r) {
					return function(s, o) {
						let a = r,
							l = "",
							h = [];
						if (a) {
							const t = s.getGeometry();
							if (t)
								if (t instanceof er) h = t.getGeometriesArrayRecursive().filter((function(t) {
									const e = t.getType();
									return "Point" === e || "MultiPoint" === e
								})), a = h.length > 0;
								else {
									const e = t.getType();
									a = "Point" === e || "MultiPoint" === e
								}
						}
						a && (l = s.get("name"), a = a && !!l, a && /&[^&]+;/.test(l) && (wy || (wy = document.createElement("textarea")), wy.innerHTML = l, l = wy.value));
						let u = i;
						if (t ? u = t : e && (u = My(e, i, n)), a) {
							const t = function(t, e) {
								const i = [0, 0];
								let n = "start";
								const r = t.getImage();
								if (r) {
									const t = r.getSize();
									if (t && 2 == t.length) {
										const e = r.getScaleArray(),
											s = r.getAnchor();
										i[0] = e[0] * (t[0] - s[0]), i[1] = e[1] * (t[1] / 2 - s[1]), n = "left"
									}
								}
								let s = t.getText();
								s ? (s = s.clone(), s.setFont(s.getFont() || Cy.getFont()), s.setScale(s.getScale() || Cy.getScale()), s.setFill(s.getFill() || Cy.getFill()), s.setStroke(s.getStroke() || vy)) : s = Cy.clone();
								s.setText(e), s.setOffsetX(i[0]), s.setOffsetY(i[1]), s.setTextAlign(n);
								const o = new ls({
									image: r,
									text: s
								});
								return o
							}(u[0], l);
							if (h.length > 0) {
								t.setGeometry(new er(h));
								return [t, new ls({
									geometry: u[0].getGeometry(),
									image: null,
									fill: u[0].getFill(),
									stroke: u[0].getStroke(),
									text: null
								})].concat(u.slice(1))
							}
							return t
						}
						return u
					}
				}(i.Style, i.styleUrl, this.defaultStyle_, this.sharedStyles_, this.showPointNames_);
				n.setStyle(t)
			}
			return delete i.Style, n.setProperties(i, !0), n
		}
		readSharedStyle_(t, e) {
			const i = t.getAttribute("id");
			if (null !== i) {
				const n = sx.call(this, t, e);
				if (n) {
					let e, r = t.baseURI;
					if (r && "about:blank" != r || (r = window.location.href), r) {
						e = new URL("#" + i, r).href
					} else e = "#" + i;
					this.sharedStyles_[e] = n
				}
			}
		}
		readSharedStyleMap_(t, e) {
			const i = t.getAttribute("id");
			if (null === i) return;
			const n = zy.call(this, t, e);
			if (!n) return;
			let r, s = t.baseURI;
			if (s && "about:blank" != s || (s = window.location.href), s) {
				r = new URL("#" + i, s).href
			} else r = "#" + i;
			this.sharedStyles_[r] = n
		}
		readFeatureFromNode(t, e) {
			if (!ry.includes(t.namespaceURI)) return null;
			const i = this.readPlacemark_(t, [this.getReadOptions(t, e)]);
			return i || null
		}
		readFeaturesFromNode(t, e) {
			if (!ry.includes(t.namespaceURI)) return [];
			let i;
			const n = t.localName;
			if ("Document" == n || "Folder" == n) return i = this.readDocumentOrFolder_(t, [this.getReadOptions(t, e)]), i || [];
			if ("Placemark" == n) {
				const i = this.readPlacemark_(t, [this.getReadOptions(t, e)]);
				return i ? [i] : []
			}
			if ("kml" == n) {
				i = [];
				for (let n = t.firstElementChild; n; n = n.nextElementSibling) {
					const t = this.readFeaturesFromNode(n, e);
					t && gt(i, t)
				}
				return i
			}
			return []
		}
		readName(t) {
			if (t) {
				if ("string" == typeof t) {
					const e = A_(t);
					return this.readNameFromDocument(e)
				}
				return k_(t) ? this.readNameFromDocument(t) : this.readNameFromNode(t)
			}
		}
		readNameFromDocument(t) {
			for (let e = t.firstChild; e; e = e.nextSibling)
				if (e.nodeType == Node.ELEMENT_NODE) {
					const t = this.readNameFromNode(e);
					if (t) return t
				}
		}
		readNameFromNode(t) {
			for (let e = t.firstElementChild; e; e = e.nextElementSibling)
				if (ry.includes(e.namespaceURI) && "name" == e.localName) return Q_(e);
			for (let e = t.firstElementChild; e; e = e.nextElementSibling) {
				const t = e.localName;
				if (ry.includes(e.namespaceURI) && ("Document" == t || "Folder" == t || "Placemark" == t || "kml" == t)) {
					const t = this.readNameFromNode(e);
					if (t) return t
				}
			}
		}
		readNetworkLinks(t) {
			const e = [];
			if ("string" == typeof t) {
				const i = A_(t);
				gt(e, this.readNetworkLinksFromDocument(i))
			} else k_(t) ? gt(e, this.readNetworkLinksFromDocument(t)) : gt(e, this.readNetworkLinksFromNode(t));
			return e
		}
		readNetworkLinksFromDocument(t) {
			const e = [];
			for (let i = t.firstChild; i; i = i.nextSibling) i.nodeType == Node.ELEMENT_NODE && gt(e, this.readNetworkLinksFromNode(i));
			return e
		}
		readNetworkLinksFromNode(t) {
			const e = [];
			for (let i = t.firstElementChild; i; i = i.nextElementSibling)
				if (ry.includes(i.namespaceURI) && "NetworkLink" == i.localName) {
					const t = X_({}, ay, i, []);
					e.push(t)
				} for (let i = t.firstElementChild; i; i = i.nextElementSibling) {
				const t = i.localName;
				!ry.includes(i.namespaceURI) || "Document" != t && "Folder" != t && "kml" != t || gt(e, this.readNetworkLinksFromNode(i))
			}
			return e
		}
		readRegion(t) {
			const e = [];
			if ("string" == typeof t) {
				const i = A_(t);
				gt(e, this.readRegionFromDocument(i))
			} else k_(t) ? gt(e, this.readRegionFromDocument(t)) : gt(e, this.readRegionFromNode(t));
			return e
		}
		readRegionFromDocument(t) {
			const e = [];
			for (let i = t.firstChild; i; i = i.nextSibling) i.nodeType == Node.ELEMENT_NODE && gt(e, this.readRegionFromNode(i));
			return e
		}
		readRegionFromNode(t) {
			const e = [];
			for (let i = t.firstElementChild; i; i = i.nextElementSibling)
				if (ry.includes(i.namespaceURI) && "Region" == i.localName) {
					const t = X_({}, uy, i, []);
					e.push(t)
				} for (let i = t.firstElementChild; i; i = i.nextElementSibling) {
				const t = i.localName;
				!ry.includes(i.namespaceURI) || "Document" != t && "Folder" != t && "kml" != t || gt(e, this.readRegionFromNode(i))
			}
			return e
		}
		readCamera(t) {
			const e = [];
			if ("string" == typeof t) {
				const i = A_(t);
				gt(e, this.readCameraFromDocument(i))
			} else k_(t) ? gt(e, this.readCameraFromDocument(t)) : gt(e, this.readCameraFromNode(t));
			return e
		}
		readCameraFromDocument(t) {
			const e = [];
			for (let i = t.firstChild; i; i = i.nextSibling) i.nodeType === Node.ELEMENT_NODE && gt(e, this.readCameraFromNode(i));
			return e
		}
		readCameraFromNode(t) {
			const e = [];
			for (let i = t.firstElementChild; i; i = i.nextElementSibling)
				if (ry.includes(i.namespaceURI) && "Camera" === i.localName) {
					const t = X_({}, hy, i, []);
					e.push(t)
				} for (let i = t.firstElementChild; i; i = i.nextElementSibling) {
				const t = i.localName;
				!ry.includes(i.namespaceURI) || "Document" !== t && "Folder" !== t && "Placemark" !== t && "kml" !== t || gt(e, this.readCameraFromNode(i))
			}
			return e
		}
		writeFeaturesNode(t, e) {
			e = this.adaptOptions(e);
			const i = M_(ry[4], "kml"),
				n = "http://www.w3.org/2000/xmlns/";
			i.setAttributeNS(n, "xmlns:gx", ny[0]), i.setAttributeNS(n, "xmlns:xsi", F_), i.setAttributeNS(F_, "xsi:schemaLocation", "http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");
			const r = {
					node: i
				},
				s = {};
			t.length > 1 ? s.Document = t : 1 == t.length && (s.Placemark = t[0]);
			const o = cy[i.namespaceURI],
				a = B_(s, o);
			return W_(r, dy, U_, a, [e], o, this), i
		}
	};
	const rv = 34962,
		sv = 34963,
		ov = 35048,
		av = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];
	const lv = 35044;

	function hv(t) {
		switch (t) {
			case rv:
				return Float32Array;
			case sv:
				return Uint32Array;
			default:
				return Float32Array
		}
	}
	var uv = class {
			constructor(t, e) {
				this.array_ = null, this.type_ = t, Se(t === rv || t === sv, "A `WebGLArrayBuffer` must either be of type `ELEMENT_ARRAY_BUFFER` or `ARRAY_BUFFER`"), this.usage_ = void 0 !== e ? e : lv
			}
			ofSize(t) {
				return this.array_ = new(hv(this.type_))(t), this
			}
			fromArray(t) {
				return this.array_ = hv(this.type_).from(t), this
			}
			fromArrayBuffer(t) {
				return this.array_ = new(hv(this.type_))(t), this
			}
			getType() {
				return this.type_
			}
			getArray() {
				return this.array_
			}
			getUsage() {
				return this.usage_
			}
			getSize() {
				return this.array_ ? this.array_.length : 0
			}
		},
		cv = "webglcontextlost",
		dv = "webglcontextrestored";
	var gv = class {
		constructor(t) {
			this.gl_ = t.webGlContext;
			const e = this.gl_;
			this.scaleRatio_ = t.scaleRatio || 1, this.renderTargetTexture_ = e.createTexture(), this.renderTargetTextureSize_ = null, this.frameBuffer_ = e.createFramebuffer(), this.depthBuffer_ = e.createRenderbuffer();
			const i = e.createShader(e.VERTEX_SHADER);
			e.shaderSource(i, t.vertexShader || "\n  precision mediump float;\n  \n  attribute vec2 a_position;\n  varying vec2 v_texCoord;\n  varying vec2 v_screenCoord;\n  \n  uniform vec2 u_screenSize;\n   \n  void main() {\n    v_texCoord = a_position * 0.5 + 0.5;\n    v_screenCoord = v_texCoord * u_screenSize;\n    gl_Position = vec4(a_position, 0.0, 1.0);\n  }\n"), e.compileShader(i);
			const n = e.createShader(e.FRAGMENT_SHADER);
			e.shaderSource(n, t.fragmentShader || "\n  precision mediump float;\n   \n  uniform sampler2D u_image;\n  uniform float u_opacity;\n   \n  varying vec2 v_texCoord;\n   \n  void main() {\n    gl_FragColor = texture2D(u_image, v_texCoord) * u_opacity;\n  }\n"), e.compileShader(n), this.renderTargetProgram_ = e.createProgram(), e.attachShader(this.renderTargetProgram_, i), e.attachShader(this.renderTargetProgram_, n), e.linkProgram(this.renderTargetProgram_), this.renderTargetVerticesBuffer_ = e.createBuffer();
			e.bindBuffer(e.ARRAY_BUFFER, this.renderTargetVerticesBuffer_), e.bufferData(e.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1]), e.STATIC_DRAW), this.renderTargetAttribLocation_ = e.getAttribLocation(this.renderTargetProgram_, "a_position"), this.renderTargetUniformLocation_ = e.getUniformLocation(this.renderTargetProgram_, "u_screenSize"), this.renderTargetOpacityLocation_ = e.getUniformLocation(this.renderTargetProgram_, "u_opacity"), this.renderTargetTextureLocation_ = e.getUniformLocation(this.renderTargetProgram_, "u_image"), this.uniforms_ = [], t.uniforms && Object.keys(t.uniforms).forEach((i => {
				this.uniforms_.push({
					value: t.uniforms[i],
					location: e.getUniformLocation(this.renderTargetProgram_, i)
				})
			}))
		}
		getGL() {
			return this.gl_
		}
		init(t) {
			const e = this.getGL(),
				i = [e.drawingBufferWidth * this.scaleRatio_, e.drawingBufferHeight * this.scaleRatio_];
			if (e.bindFramebuffer(e.FRAMEBUFFER, this.getFrameBuffer()), e.bindRenderbuffer(e.RENDERBUFFER, this.getDepthBuffer()), e.viewport(0, 0, i[0], i[1]), !this.renderTargetTextureSize_ || this.renderTargetTextureSize_[0] !== i[0] || this.renderTargetTextureSize_[1] !== i[1]) {
				this.renderTargetTextureSize_ = i;
				const t = 0,
					n = e.RGBA,
					r = 0,
					s = e.RGBA,
					o = e.UNSIGNED_BYTE,
					a = null;
				e.bindTexture(e.TEXTURE_2D, this.renderTargetTexture_), e.texImage2D(e.TEXTURE_2D, t, n, i[0], i[1], r, s, o, a), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.renderTargetTexture_, 0), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, i[0], i[1]), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, this.depthBuffer_)
			}
		}
		apply(t, e, i, n) {
			const r = this.getGL(),
				s = t.size;
			if (r.bindFramebuffer(r.FRAMEBUFFER, e ? e.getFrameBuffer() : null), r.activeTexture(r.TEXTURE0), r.bindTexture(r.TEXTURE_2D, this.renderTargetTexture_), !e) {
				const e = l(r.canvas);
				if (!t.renderTargets[e]) {
					const i = r.getContextAttributes();
					i && i.preserveDrawingBuffer && (r.clearColor(0, 0, 0, 0), r.clearDepth(1), r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT)), t.renderTargets[e] = !0
				}
			}
			r.disable(r.DEPTH_TEST), r.enable(r.BLEND), r.blendFunc(r.ONE, r.ONE_MINUS_SRC_ALPHA), r.viewport(0, 0, r.drawingBufferWidth, r.drawingBufferHeight), r.bindBuffer(r.ARRAY_BUFFER, this.renderTargetVerticesBuffer_), r.useProgram(this.renderTargetProgram_), r.enableVertexAttribArray(this.renderTargetAttribLocation_), r.vertexAttribPointer(this.renderTargetAttribLocation_, 2, r.FLOAT, !1, 0, 0), r.uniform2f(this.renderTargetUniformLocation_, s[0], s[1]), r.uniform1i(this.renderTargetTextureLocation_, 0);
			const o = t.layerStatesArray[t.layerIndex].opacity;
			r.uniform1f(this.renderTargetOpacityLocation_, o), this.applyUniforms(t), i && i(r, t), r.drawArrays(r.TRIANGLES, 0, 6), n && n(r, t)
		}
		getFrameBuffer() {
			return this.frameBuffer_
		}
		getDepthBuffer() {
			return this.depthBuffer_
		}
		applyUniforms(t) {
			const e = this.getGL();
			let i, n = 1;
			this.uniforms_.forEach((function(r) {
				if (i = "function" == typeof r.value ? r.value(t) : r.value, i instanceof HTMLCanvasElement || i instanceof ImageData) r.texture || (r.texture = e.createTexture()), e.activeTexture(e[`TEXTURE${n}`]), e.bindTexture(e.TEXTURE_2D, r.texture), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), i instanceof ImageData ? e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, i.width, i.height, 0, e.UNSIGNED_BYTE, new Uint8Array(i.data)) : e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, i), e.uniform1i(r.location, n++);
				else if (Array.isArray(i)) switch (i.length) {
					case 2:
						return void e.uniform2f(r.location, i[0], i[1]);
					case 3:
						return void e.uniform3f(r.location, i[0], i[1], i[2]);
					case 4:
						return void e.uniform4f(r.location, i[0], i[1], i[2], i[3]);
					default:
						return
				} else "number" == typeof i && e.uniform1f(r.location, i)
			}))
		}
	};
	const pv = "u_projectionMatrix",
		fv = "u_time",
		mv = "u_zoom",
		_v = "u_resolution",
		yv = "u_rotation",
		xv = "u_viewportSizePx",
		vv = "u_pixelRatio",
		wv = "u_hitDetection",
		bv = {
			UNSIGNED_BYTE: 5121,
			UNSIGNED_SHORT: 5123,
			UNSIGNED_INT: 5125,
			FLOAT: 5126
		},
		Sv = {};

	function Ev(t) {
		return "shared/" + t
	}
	let Cv = 0;

	function Tv(t) {
		let e = Sv[t];
		if (!e) {
			const i = document.createElement("canvas");
			i.width = 1, i.height = 1, i.style.position = "absolute", i.style.left = "0";
			const n = function(t, e) {
				e = Object.assign({
					preserveDrawingBuffer: !0,
					antialias: !W
				}, e);
				const i = av.length;
				for (let n = 0; n < i; ++n) try {
					const i = t.getContext(av[n], e);
					if (i) return i
				} catch (t) {}
				return null
			}(i);
			e = {
				users: 0,
				context: n
			}, Sv[t] = e
		}
		return e.users += 1, e.context
	}
	class Pv extends ht {
		constructor(t) {
			super(), t = t || {}, this.boundHandleWebGLContextLost_ = this.handleWebGLContextLost.bind(this), this.boundHandleWebGLContextRestored_ = this.handleWebGLContextRestored.bind(this), this.canvasCacheKey_ = t.canvasCacheKey ? Ev(t.canvasCacheKey) : function() {
				const t = "unique/" + Cv;
				return Cv += 1, t
			}(), this.gl_ = Tv(this.canvasCacheKey_), this.bufferCache_ = {}, this.extensionCache_ = {}, this.currentProgram_ = null, this.needsToBeRecreated_ = !1;
			const e = this.gl_.canvas;
			e.addEventListener(cv, this.boundHandleWebGLContextLost_), e.addEventListener(dv, this.boundHandleWebGLContextRestored_), this.offsetRotateMatrix_ = [1, 0, 0, 1, 0, 0], this.offsetScaleMatrix_ = [1, 0, 0, 1, 0, 0], this.tmpMat4_ = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], this.uniformLocationsByProgram_ = {}, this.attribLocationsByProgram_ = {}, this.uniforms_ = [], t.uniforms && this.setUniforms(t.uniforms), this.postProcessPasses_ = t.postProcesses ? t.postProcesses.map((t => new gv({
				webGlContext: this.gl_,
				scaleRatio: t.scaleRatio,
				vertexShader: t.vertexShader,
				fragmentShader: t.fragmentShader,
				uniforms: t.uniforms
			}))) : [new gv({
				webGlContext: this.gl_
			})], this.shaderCompileErrors_ = null, this.startTime_ = Date.now()
		}
		setUniforms(t) {
			this.uniforms_ = [], this.addUniforms(t)
		}
		addUniforms(t) {
			for (const e in t) this.uniforms_.push({
				name: e,
				value: t[e]
			})
		}
		canvasCacheKeyMatches(t) {
			return this.canvasCacheKey_ === Ev(t)
		}
		getExtension(t) {
			if (t in this.extensionCache_) return this.extensionCache_[t];
			const e = this.gl_.getExtension(t);
			return this.extensionCache_[t] = e, e
		}
		bindBuffer(t) {
			const e = this.gl_,
				i = l(t);
			let n = this.bufferCache_[i];
			if (!n) {
				n = {
					buffer: t,
					webGlBuffer: e.createBuffer()
				}, this.bufferCache_[i] = n
			}
			e.bindBuffer(t.getType(), n.webGlBuffer)
		}
		flushBufferData(t) {
			const e = this.gl_;
			this.bindBuffer(t), e.bufferData(t.getType(), t.getArray(), t.getUsage())
		}
		deleteBuffer(t) {
			const e = this.gl_,
				i = l(t),
				n = this.bufferCache_[i];
			n && !e.isContextLost() && e.deleteBuffer(n.webGlBuffer), delete this.bufferCache_[i]
		}
		disposeInternal() {
			const t = this.gl_.canvas;
			t.removeEventListener(cv, this.boundHandleWebGLContextLost_), t.removeEventListener(dv, this.boundHandleWebGLContextRestored_),
				function(t) {
					const e = Sv[t];
					if (!e) return;
					if (e.users -= 1, e.users > 0) return;
					const i = e.context,
						n = i.getExtension("WEBGL_lose_context");
					n && n.loseContext();
					const r = i.canvas;
					r.width = 1, r.height = 1, delete Sv[t]
				}(this.canvasCacheKey_), delete this.gl_
		}
		prepareDraw(t, e, i) {
			const n = this.gl_,
				r = this.getCanvas(),
				s = t.size,
				o = t.pixelRatio;
			r.width === s[0] * o && r.height === s[1] * o || (r.width = s[0] * o, r.height = s[1] * o, r.style.width = s[0] + "px", r.style.height = s[1] + "px");
			for (let e = this.postProcessPasses_.length - 1; e >= 0; e--) this.postProcessPasses_[e].init(t);
			n.bindTexture(n.TEXTURE_2D, null), n.clearColor(0, 0, 0, 0), n.depthRange(0, 1), n.clearDepth(1), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT), n.enable(n.BLEND), n.blendFunc(n.ONE, e ? n.ZERO : n.ONE_MINUS_SRC_ALPHA), i ? (n.enable(n.DEPTH_TEST), n.depthFunc(n.LEQUAL)) : n.disable(n.DEPTH_TEST)
		}
		bindTexture(t, e, i) {
			const n = this.gl_;
			n.activeTexture(n.TEXTURE0 + e), n.bindTexture(n.TEXTURE_2D, t), n.uniform1i(this.getUniformLocation(i), e)
		}
		prepareDrawToRenderTarget(t, e, i, n) {
			const r = this.gl_,
				s = e.getSize();
			r.bindFramebuffer(r.FRAMEBUFFER, e.getFramebuffer()), r.bindRenderbuffer(r.RENDERBUFFER, e.getDepthbuffer()), r.viewport(0, 0, s[0], s[1]), r.bindTexture(r.TEXTURE_2D, e.getTexture()), r.clearColor(0, 0, 0, 0), r.depthRange(0, 1), r.clearDepth(1), r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT), r.enable(r.BLEND), r.blendFunc(r.ONE, i ? r.ZERO : r.ONE_MINUS_SRC_ALPHA), n ? (r.enable(r.DEPTH_TEST), r.depthFunc(r.LEQUAL)) : r.disable(r.DEPTH_TEST)
		}
		drawElements(t, e) {
			const i = this.gl_;
			this.getExtension("OES_element_index_uint");
			const n = i.UNSIGNED_INT,
				r = e - t,
				s = 4 * t;
			i.drawElements(i.TRIANGLES, r, n, s)
		}
		finalizeDraw(t, e, i) {
			for (let n = 0, r = this.postProcessPasses_.length; n < r; n++) n === r - 1 ? this.postProcessPasses_[n].apply(t, null, e, i) : this.postProcessPasses_[n].apply(t, this.postProcessPasses_[n + 1])
		}
		getCanvas() {
			return this.gl_.canvas
		}
		getGL() {
			return this.gl_
		}
		applyFrameState(t) {
			const e = t.size,
				i = t.viewState.rotation,
				n = t.pixelRatio;
			this.setUniformFloatValue(fv, .001 * (Date.now() - this.startTime_)), this.setUniformFloatValue(mv, t.viewState.zoom), this.setUniformFloatValue(_v, t.viewState.resolution), this.setUniformFloatValue(vv, n), this.setUniformFloatVec2(xv, [e[0], e[1]]), this.setUniformFloatValue(yv, i)
		}
		applyHitDetectionUniform(t) {
			const e = this.getUniformLocation(wv);
			this.getGL().uniform1i(e, t ? 1 : 0), t && this.setUniformFloatValue(vv, .5)
		}
		applyUniforms(t) {
			const e = this.gl_;
			let i, n = 0;
			this.uniforms_.forEach((r => {
				if (i = "function" == typeof r.value ? r.value(t) : r.value, i instanceof HTMLCanvasElement || i instanceof HTMLImageElement || i instanceof ImageData) {
					r.texture || (r.prevValue = void 0, r.texture = e.createTexture()), this.bindTexture(r.texture, n, r.name), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
					(!(i instanceof HTMLImageElement) || i.complete) && r.prevValue !== i && (r.prevValue = i, e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, i)), n++
				} else if (Array.isArray(i) && 6 === i.length) this.setUniformMatrixValue(r.name, function(t, e) {
					return t[0] = e[0], t[1] = e[1], t[4] = e[2], t[5] = e[3], t[12] = e[4], t[13] = e[5], t
				}(this.tmpMat4_, i));
				else if (Array.isArray(i) && i.length <= 4) switch (i.length) {
					case 2:
						return void e.uniform2f(this.getUniformLocation(r.name), i[0], i[1]);
					case 3:
						return void e.uniform3f(this.getUniformLocation(r.name), i[0], i[1], i[2]);
					case 4:
						return void e.uniform4f(this.getUniformLocation(r.name), i[0], i[1], i[2], i[3]);
					default:
						return
				} else "number" == typeof i && e.uniform1f(this.getUniformLocation(r.name), i)
			}))
		}
		useProgram(t, e) {
			this.gl_.useProgram(t), this.currentProgram_ = t, this.applyFrameState(e), this.applyUniforms(e)
		}
		compileShader(t, e) {
			const i = this.gl_,
				n = i.createShader(e);
			return i.shaderSource(n, t), i.compileShader(n), n
		}
		getProgram(t, e) {
			const i = this.gl_,
				n = this.compileShader(t, i.FRAGMENT_SHADER),
				r = this.compileShader(e, i.VERTEX_SHADER),
				s = i.createProgram();
			if (i.attachShader(s, n), i.attachShader(s, r), i.linkProgram(s), !i.getShaderParameter(n, i.COMPILE_STATUS)) {
				const t = `Fragment shader compilation failed: ${i.getShaderInfoLog(n)}`;
				throw new Error(t)
			}
			if (i.deleteShader(n), !i.getShaderParameter(r, i.COMPILE_STATUS)) {
				const t = `Vertex shader compilation failed: ${i.getShaderInfoLog(r)}`;
				throw new Error(t)
			}
			if (i.deleteShader(r), !i.getProgramParameter(s, i.LINK_STATUS)) {
				const t = `GL program linking failed: ${i.getProgramInfoLog(s)}`;
				throw new Error(t)
			}
			return s
		}
		getUniformLocation(t) {
			const e = l(this.currentProgram_);
			return void 0 === this.uniformLocationsByProgram_[e] && (this.uniformLocationsByProgram_[e] = {}), void 0 === this.uniformLocationsByProgram_[e][t] && (this.uniformLocationsByProgram_[e][t] = this.gl_.getUniformLocation(this.currentProgram_, t)), this.uniformLocationsByProgram_[e][t]
		}
		getAttributeLocation(t) {
			const e = l(this.currentProgram_);
			return void 0 === this.attribLocationsByProgram_[e] && (this.attribLocationsByProgram_[e] = {}), void 0 === this.attribLocationsByProgram_[e][t] && (this.attribLocationsByProgram_[e][t] = this.gl_.getAttribLocation(this.currentProgram_, t)), this.attribLocationsByProgram_[e][t]
		}
		makeProjectionTransform(t, e) {
			const i = t.size,
				n = t.viewState.rotation,
				r = t.viewState.resolution,
				s = t.viewState.center;
			return $e(e, 0, 0, 2 / (r * i[0]), 2 / (r * i[1]), -n, -s[0], -s[1]), e
		}
		setUniformFloatValue(t, e) {
			this.gl_.uniform1f(this.getUniformLocation(t), e)
		}
		setUniformFloatVec2(t, e) {
			this.gl_.uniform2fv(this.getUniformLocation(t), e)
		}
		setUniformFloatVec4(t, e) {
			this.gl_.uniform4fv(this.getUniformLocation(t), e)
		}
		setUniformMatrixValue(t, e) {
			this.gl_.uniformMatrix4fv(this.getUniformLocation(t), !1, e)
		}
		enableAttributeArray_(t, e, i, n, r) {
			const s = this.getAttributeLocation(t);
			s < 0 || (this.gl_.enableVertexAttribArray(s), this.gl_.vertexAttribPointer(s, e, i, !1, n, r))
		}
		enableAttributes(t) {
			const e = function(t) {
				let e = 0;
				for (let i = 0; i < t.length; i++) {
					const n = t[i];
					e += n.size * Rv(n.type)
				}
				return e
			}(t);
			let i = 0;
			for (let n = 0; n < t.length; n++) {
				const r = t[n];
				this.enableAttributeArray_(r.name, r.size, r.type || 5126, e, i), i += r.size * Rv(r.type)
			}
		}
		handleWebGLContextLost(t) {
			vt(this.bufferCache_), this.currentProgram_ = null, t.preventDefault()
		}
		handleWebGLContextRestored() {
			this.needsToBeRecreated_ = !0
		}
		needsToBeRecreated() {
			return this.needsToBeRecreated_
		}
		createTexture(t, e, i) {
			const n = this.gl_;
			i = i || n.createTexture();
			const r = n.RGBA,
				s = n.RGBA,
				o = n.UNSIGNED_BYTE;
			return n.bindTexture(n.TEXTURE_2D, i), e ? n.texImage2D(n.TEXTURE_2D, 0, r, s, o, e) : n.texImage2D(n.TEXTURE_2D, 0, r, t[0], t[1], 0, s, o, null), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), i
		}
	}

	function Rv(t) {
		switch (t) {
			case bv.UNSIGNED_BYTE:
				return Uint8Array.BYTES_PER_ELEMENT;
			case bv.UNSIGNED_SHORT:
				return Uint16Array.BYTES_PER_ELEMENT;
			case bv.UNSIGNED_INT:
				return Uint32Array.BYTES_PER_ELEMENT;
			case bv.FLOAT:
			default:
				return Float32Array.BYTES_PER_ELEMENT
		}
	}
	class Fv extends Va {
		constructor(t, e) {
			super(t), e = e || {}, this.inversePixelTransform_ = [1, 0, 0, 1, 0, 0], this.pixelContext_ = null, this.postProcesses_ = e.postProcesses, this.uniforms_ = e.uniforms, this.helper, t.addChangeListener($s, this.removeHelper.bind(this)), this.dispatchPreComposeEvent = this.dispatchPreComposeEvent.bind(this), this.dispatchPostComposeEvent = this.dispatchPostComposeEvent.bind(this)
		}
		dispatchPreComposeEvent(t, e) {
			const i = this.getLayer();
			if (i.hasListener(Is)) {
				const n = new Xa(Is, void 0, e, t);
				i.dispatchEvent(n)
			}
		}
		dispatchPostComposeEvent(t, e) {
			const i = this.getLayer();
			if (i.hasListener(Ls)) {
				const n = new Xa(Ls, void 0, e, t);
				i.dispatchEvent(n)
			}
		}
		reset(t) {
			this.uniforms_ = t.uniforms, this.helper && this.helper.setUniforms(this.uniforms_)
		}
		removeHelper() {
			this.helper && (this.helper.dispose(), delete this.helper)
		}
		prepareFrame(t) {
			if (this.getLayer().getRenderSource()) {
				let e, i = !0,
					n = -1;
				for (let r = 0, s = t.layerStatesArray.length; r < s; r++) {
					const s = t.layerStatesArray[r].layer,
						o = s.getRenderer();
					if (!(o instanceof Fv)) {
						i = !0;
						continue
					}
					const a = s.getClassName();
					if ((i || a !== e) && (n += 1, i = !1), e = a, o === this) break
				}
				const r = "map/" + t.mapId + "/group/" + n;
				this.helper && this.helper.canvasCacheKeyMatches(r) && !this.helper.needsToBeRecreated() || (this.removeHelper(), this.helper = new Pv({
					postProcesses: this.postProcesses_,
					uniforms: this.uniforms_,
					canvasCacheKey: r
				}), e && (this.helper.getCanvas().className = e), this.afterHelperCreated())
			}
			return this.prepareFrameInternal(t)
		}
		afterHelperCreated() {}
		prepareFrameInternal(t) {
			return !0
		}
		disposeInternal() {
			this.removeHelper(), super.disposeInternal()
		}
		dispatchRenderEvent_(t, e, i) {
			const n = this.getLayer();
			if (n.hasListener(t)) {
				$e(this.inversePixelTransform_, 0, 0, i.pixelRatio, -i.pixelRatio, 0, 0, -i.size[1]);
				const r = new Xa(t, this.inversePixelTransform_, i, e);
				n.dispatchEvent(r)
			}
		}
		preRender(t, e) {
			this.dispatchRenderEvent_(Fs, t, e)
		}
		postRender(t, e) {
			this.dispatchRenderEvent_(Ms, t, e)
		}
	}
	var Mv = Fv;
	const Iv = new Uint8Array(4);
	var Lv = class {
		constructor(t, e) {
			this.helper_ = t;
			const i = t.getGL();
			this.texture_ = i.createTexture(), this.framebuffer_ = i.createFramebuffer(), this.depthbuffer_ = i.createRenderbuffer(), this.size_ = e || [1, 1], this.data_ = new Uint8Array(0), this.dataCacheDirty_ = !0, this.updateSize_()
		}
		setSize(t) {
			pt(t, this.size_) || (this.size_[0] = t[0], this.size_[1] = t[1], this.updateSize_())
		}
		getSize() {
			return this.size_
		}
		clearCachedData() {
			this.dataCacheDirty_ = !0
		}
		readAll() {
			if (this.dataCacheDirty_) {
				const t = this.size_,
					e = this.helper_.getGL();
				e.bindFramebuffer(e.FRAMEBUFFER, this.framebuffer_), e.readPixels(0, 0, t[0], t[1], e.RGBA, e.UNSIGNED_BYTE, this.data_), this.dataCacheDirty_ = !1
			}
			return this.data_
		}
		readPixel(t, e) {
			if (t < 0 || e < 0 || t > this.size_[0] || e >= this.size_[1]) return Iv[0] = 0, Iv[1] = 0, Iv[2] = 0, Iv[3] = 0, Iv;
			this.readAll();
			const i = Math.floor(t) + (this.size_[1] - Math.floor(e) - 1) * this.size_[0];
			return Iv[0] = this.data_[4 * i], Iv[1] = this.data_[4 * i + 1], Iv[2] = this.data_[4 * i + 2], Iv[3] = this.data_[4 * i + 3], Iv
		}
		getTexture() {
			return this.texture_
		}
		getFramebuffer() {
			return this.framebuffer_
		}
		getDepthbuffer() {
			return this.depthbuffer_
		}
		updateSize_() {
			const t = this.size_,
				e = this.helper_.getGL();
			this.texture_ = this.helper_.createTexture(t, null, this.texture_), e.bindFramebuffer(e.FRAMEBUFFER, this.framebuffer_), e.viewport(0, 0, t[0], t[1]), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture_, 0), e.bindRenderbuffer(e.RENDERBUFFER, this.depthbuffer_), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, t[0], t[1]), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, this.depthbuffer_), this.data_ = new Uint8Array(t[0] * t[1] * 4)
		}
	};
	const kv = "GENERATE_POINT_BUFFERS";
	var Av = {
		exports: {}
	};

	function Dv(t, e, i) {
		i = i || 2;
		var n, r, s, o, a, l, h, u = e && e.length,
			c = u ? e[0] * i : t.length,
			d = Ov(t, 0, c, i, !0),
			g = [];
		if (!d || d.next === d.prev) return g;
		if (u && (d = function(t, e, i, n) {
				var r, s, o, a = [];
				for (r = 0, s = e.length; r < s; r++)(o = Ov(t, e[r] * n, r < s - 1 ? e[r + 1] * n : t.length, n, !1)) === o.next && (o.steiner = !0), a.push(qv(o));
				for (a.sort($v), r = 0; r < a.length; r++) i = Vv(a[r], i);
				return i
			}(t, e, d, i)), t.length > 80 * i) {
			n = s = t[0], r = o = t[1];
			for (var p = i; p < c; p += i)(a = t[p]) < n && (n = a), (l = t[p + 1]) < r && (r = l), a > s && (s = a), l > o && (o = l);
			h = 0 !== (h = Math.max(s - n, o - r)) ? 32767 / h : 0
		}
		return Gv(d, g, i, n, r, h, 0), g
	}

	function Ov(t, e, i, n, r) {
		var s, o;
		if (r === ow(t, e, i, n) > 0)
			for (s = e; s < i; s += n) o = nw(s, t[s], t[s + 1], o);
		else
			for (s = i - n; s >= e; s -= n) o = nw(s, t[s], t[s + 1], o);
		return o && Hv(o, o.next) && (rw(o), o = o.next), o
	}

	function zv(t, e) {
		if (!t) return t;
		e || (e = t);
		var i, n = t;
		do {
			if (i = !1, n.steiner || !Hv(n, n.next) && 0 !== Kv(n.prev, n, n.next)) n = n.next;
			else {
				if (rw(n), (n = e = n.prev) === n.next) break;
				i = !0
			}
		} while (i || n !== e);
		return e
	}

	function Gv(t, e, i, n, r, s, o) {
		if (t) {
			!o && s && function(t, e, i, n) {
				var r = t;
				do {
					0 === r.z && (r.z = Wv(r.x, r.y, e, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
				} while (r !== t);
				r.prevZ.nextZ = null, r.prevZ = null,
					function(t) {
						var e, i, n, r, s, o, a, l, h = 1;
						do {
							for (i = t, t = null, s = null, o = 0; i;) {
								for (o++, n = i, a = 0, e = 0; e < h && (a++, n = n.nextZ); e++);
								for (l = h; a > 0 || l > 0 && n;) 0 !== a && (0 === l || !n || i.z <= n.z) ? (r = i, i = i.nextZ, a--) : (r = n, n = n.nextZ, l--), s ? s.nextZ = r : t = r, r.prevZ = s, s = r;
								i = n
							}
							s.nextZ = null, h *= 2
						} while (o > 1)
					}(r)
			}(t, n, r, s);
			for (var a, l, h = t; t.prev !== t.next;)
				if (a = t.prev, l = t.next, s ? jv(t, n, r, s) : Nv(t)) e.push(a.i / i | 0), e.push(t.i / i | 0), e.push(l.i / i | 0), rw(t), t = l.next, h = l.next;
				else if ((t = l) === h) {
				o ? 1 === o ? Gv(t = Uv(zv(t), e, i), e, i, n, r, s, 2) : 2 === o && Bv(t, e, i, n, r, s) : Gv(zv(t), e, i, n, r, s, 1);
				break
			}
		}
	}

	function Nv(t) {
		var e = t.prev,
			i = t,
			n = t.next;
		if (Kv(e, i, n) >= 0) return !1;
		for (var r = e.x, s = i.x, o = n.x, a = e.y, l = i.y, h = n.y, u = r < s ? r < o ? r : o : s < o ? s : o, c = a < l ? a < h ? a : h : l < h ? l : h, d = r > s ? r > o ? r : o : s > o ? s : o, g = a > l ? a > h ? a : h : l > h ? l : h, p = n.next; p !== e;) {
			if (p.x >= u && p.x <= d && p.y >= c && p.y <= g && Zv(r, a, s, l, o, h, p.x, p.y) && Kv(p.prev, p, p.next) >= 0) return !1;
			p = p.next
		}
		return !0
	}

	function jv(t, e, i, n) {
		var r = t.prev,
			s = t,
			o = t.next;
		if (Kv(r, s, o) >= 0) return !1;
		for (var a = r.x, l = s.x, h = o.x, u = r.y, c = s.y, d = o.y, g = a < l ? a < h ? a : h : l < h ? l : h, p = u < c ? u < d ? u : d : c < d ? c : d, f = a > l ? a > h ? a : h : l > h ? l : h, m = u > c ? u > d ? u : d : c > d ? c : d, _ = Wv(g, p, e, i, n), y = Wv(f, m, e, i, n), x = t.prevZ, v = t.nextZ; x && x.z >= _ && v && v.z <= y;) {
			if (x.x >= g && x.x <= f && x.y >= p && x.y <= m && x !== r && x !== o && Zv(a, u, l, c, h, d, x.x, x.y) && Kv(x.prev, x, x.next) >= 0) return !1;
			if (x = x.prevZ, v.x >= g && v.x <= f && v.y >= p && v.y <= m && v !== r && v !== o && Zv(a, u, l, c, h, d, v.x, v.y) && Kv(v.prev, v, v.next) >= 0) return !1;
			v = v.nextZ
		}
		for (; x && x.z >= _;) {
			if (x.x >= g && x.x <= f && x.y >= p && x.y <= m && x !== r && x !== o && Zv(a, u, l, c, h, d, x.x, x.y) && Kv(x.prev, x, x.next) >= 0) return !1;
			x = x.prevZ
		}
		for (; v && v.z <= y;) {
			if (v.x >= g && v.x <= f && v.y >= p && v.y <= m && v !== r && v !== o && Zv(a, u, l, c, h, d, v.x, v.y) && Kv(v.prev, v, v.next) >= 0) return !1;
			v = v.nextZ
		}
		return !0
	}

	function Uv(t, e, i) {
		var n = t;
		do {
			var r = n.prev,
				s = n.next.next;
			!Hv(r, s) && Jv(r, n, n.next, s) && ew(r, s) && ew(s, r) && (e.push(r.i / i | 0), e.push(n.i / i | 0), e.push(s.i / i | 0), rw(n), rw(n.next), n = t = s), n = n.next
		} while (n !== t);
		return zv(n)
	}

	function Bv(t, e, i, n, r, s) {
		var o = t;
		do {
			for (var a = o.next.next; a !== o.prev;) {
				if (o.i !== a.i && Yv(o, a)) {
					var l = iw(o, a);
					return o = zv(o, o.next), l = zv(l, l.next), Gv(o, e, i, n, r, s, 0), void Gv(l, e, i, n, r, s, 0)
				}
				a = a.next
			}
			o = o.next
		} while (o !== t)
	}

	function $v(t, e) {
		return t.x - e.x
	}

	function Vv(t, e) {
		var i = function(t, e) {
			var i, n = e,
				r = t.x,
				s = t.y,
				o = -1 / 0;
			do {
				if (s <= n.y && s >= n.next.y && n.next.y !== n.y) {
					var a = n.x + (s - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
					if (a <= r && a > o && (o = a, i = n.x < n.next.x ? n : n.next, a === r)) return i
				}
				n = n.next
			} while (n !== e);
			if (!i) return null;
			var l, h = i,
				u = i.x,
				c = i.y,
				d = 1 / 0;
			n = i;
			do {
				r >= n.x && n.x >= u && r !== n.x && Zv(s < c ? r : o, s, u, c, s < c ? o : r, s, n.x, n.y) && (l = Math.abs(s - n.y) / (r - n.x), ew(n, t) && (l < d || l === d && (n.x > i.x || n.x === i.x && Xv(i, n))) && (i = n, d = l)), n = n.next
			} while (n !== h);
			return i
		}(t, e);
		if (!i) return e;
		var n = iw(i, t);
		return zv(n, n.next), zv(i, i.next)
	}

	function Xv(t, e) {
		return Kv(t.prev, t, e.prev) < 0 && Kv(e.next, t, t.next) < 0
	}

	function Wv(t, e, i, n, r) {
		return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = (t - i) * r | 0) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (e - n) * r | 0) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
	}

	function qv(t) {
		var e = t,
			i = t;
		do {
			(e.x < i.x || e.x === i.x && e.y < i.y) && (i = e), e = e.next
		} while (e !== t);
		return i
	}

	function Zv(t, e, i, n, r, s, o, a) {
		return (r - o) * (e - a) >= (t - o) * (s - a) && (t - o) * (n - a) >= (i - o) * (e - a) && (i - o) * (s - a) >= (r - o) * (n - a)
	}

	function Yv(t, e) {
		return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
			var i = t;
			do {
				if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && Jv(i, i.next, t, e)) return !0;
				i = i.next
			} while (i !== t);
			return !1
		}(t, e) && (ew(t, e) && ew(e, t) && function(t, e) {
			var i = t,
				n = !1,
				r = (t.x + e.x) / 2,
				s = (t.y + e.y) / 2;
			do {
				i.y > s != i.next.y > s && i.next.y !== i.y && r < (i.next.x - i.x) * (s - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next
			} while (i !== t);
			return n
		}(t, e) && (Kv(t.prev, t, e.prev) || Kv(t, e.prev, e)) || Hv(t, e) && Kv(t.prev, t, t.next) > 0 && Kv(e.prev, e, e.next) > 0)
	}

	function Kv(t, e, i) {
		return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
	}

	function Hv(t, e) {
		return t.x === e.x && t.y === e.y
	}

	function Jv(t, e, i, n) {
		var r = tw(Kv(t, e, i)),
			s = tw(Kv(t, e, n)),
			o = tw(Kv(i, n, t)),
			a = tw(Kv(i, n, e));
		return r !== s && o !== a || (!(0 !== r || !Qv(t, i, e)) || (!(0 !== s || !Qv(t, n, e)) || (!(0 !== o || !Qv(i, t, n)) || !(0 !== a || !Qv(i, e, n)))))
	}

	function Qv(t, e, i) {
		return e.x <= Math.max(t.x, i.x) && e.x >= Math.min(t.x, i.x) && e.y <= Math.max(t.y, i.y) && e.y >= Math.min(t.y, i.y)
	}

	function tw(t) {
		return t > 0 ? 1 : t < 0 ? -1 : 0
	}

	function ew(t, e) {
		return Kv(t.prev, t, t.next) < 0 ? Kv(t, e, t.next) >= 0 && Kv(t, t.prev, e) >= 0 : Kv(t, e, t.prev) < 0 || Kv(t, t.next, e) < 0
	}

	function iw(t, e) {
		var i = new sw(t.i, t.x, t.y),
			n = new sw(e.i, e.x, e.y),
			r = t.next,
			s = e.prev;
		return t.next = e, e.prev = t, i.next = r, r.prev = i, n.next = i, i.prev = n, s.next = n, n.prev = s, n
	}

	function nw(t, e, i, n) {
		var r = new sw(t, e, i);
		return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r
	}

	function rw(t) {
		t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
	}

	function sw(t, e, i) {
		this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1
	}

	function ow(t, e, i, n) {
		for (var r = 0, s = e, o = i - n; s < i; s += n) r += (t[o] - t[s]) * (t[s + 1] + t[o + 1]), o = s;
		return r
	}
	Av.exports = Dv, Av.exports.default = Dv, Dv.deviation = function(t, e, i, n) {
		var r = e && e.length,
			s = r ? e[0] * i : t.length,
			o = Math.abs(ow(t, 0, s, i));
		if (r)
			for (var a = 0, l = e.length; a < l; a++) {
				var h = e[a] * i,
					u = a < l - 1 ? e[a + 1] * i : t.length;
				o -= Math.abs(ow(t, h, u, i))
			}
		var c = 0;
		for (a = 0; a < n.length; a += 3) {
			var d = n[a] * i,
				g = n[a + 1] * i,
				p = n[a + 2] * i;
			c += Math.abs((t[d] - t[p]) * (t[g + 1] - t[d + 1]) - (t[d] - t[g]) * (t[p + 1] - t[d + 1]))
		}
		return 0 === o && 0 === c ? 0 : Math.abs((c - o) / o)
	}, Dv.flatten = function(t) {
		for (var e = t[0][0].length, i = {
				vertices: [],
				holes: [],
				dimensions: e
			}, n = 0, r = 0; r < t.length; r++) {
			for (var s = 0; s < t[r].length; s++)
				for (var o = 0; o < e; o++) i.vertices.push(t[r][s][o]);
			r > 0 && (n += t[r - 1].length, i.holes.push(n))
		}
		return i
	};

	function aw(t, e) {
		const i = 256,
			n = 255;
		return (e = e || [])[0] = Math.floor(t / i / i / i) / n, e[1] = Math.floor(t / i / i) % i / n, e[2] = Math.floor(t / i) % i / n, e[3] = t % i / n, e
	}
	var lw = class extends Mv {
		constructor(t, e) {
			const i = e.uniforms || {},
				n = [1, 0, 0, 1, 0, 0];
			i[pv] = n, super(t, {
				uniforms: i,
				postProcesses: e.postProcesses
			}), this.sourceRevision_ = -1, this.verticesBuffer_ = new uv(rv, ov), this.indicesBuffer_ = new uv(sv, ov), this.vertexShader_ = e.vertexShader, this.fragmentShader_ = e.fragmentShader, this.program_, this.hitDetectionEnabled_ = e.hitDetectionEnabled ?? !0;
			const r = e.attributes ? e.attributes.map((function(t) {
				return {
					name: "a_prop_" + t.name,
					size: 1,
					type: bv.FLOAT
				}
			})) : [];
			this.attributes = [{
				name: "a_position",
				size: 2,
				type: bv.FLOAT
			}, {
				name: "a_index",
				size: 1,
				type: bv.FLOAT
			}], this.hitDetectionEnabled_ && (this.attributes.push({
				name: "a_hitColor",
				size: 4,
				type: bv.FLOAT
			}), this.attributes.push({
				name: "a_featureUid",
				size: 1,
				type: bv.FLOAT
			})), this.attributes.push(...r), this.customAttributes = e.attributes ? e.attributes : [], this.previousExtent_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0], this.currentTransform_ = n, this.renderTransform_ = [1, 0, 0, 1, 0, 0], this.invertRenderTransform_ = [1, 0, 0, 1, 0, 0], this.renderInstructions_ = new Float32Array(0), this.hitRenderTarget_, this.lastSentId = 0, this.worker_ = function() {
				const t = 'const e="GENERATE_POLYGON_BUFFERS",t="GENERATE_POINT_BUFFERS",n="GENERATE_LINE_STRING_BUFFERS";function r(e,t){const n=t[0],r=t[1];return t[0]=e[0]*n+e[2]*r+e[4],t[1]=e[1]*n+e[3]*r+e[5],t}function x(e,t){const n=(r=t)[0]*r[3]-r[1]*r[2];var r;!function(e,t){if(!e)throw new Error(t)}(0!==n,"Transformation matrix cannot be inverted");const x=t[0],i=t[1],u=t[2],o=t[3],f=t[4],s=t[5];return e[0]=o/n,e[1]=-i/n,e[2]=-u/n,e[3]=x/n,e[4]=(u*s-o*f)/n,e[5]=-(x*s-i*f)/n,e}function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}new Array(6);var u={exports:{}};function o(e,t,n){n=n||2;var r,x,i,u,o,s,l,v=t&&t.length,h=v?t[0]*n:e.length,c=f(e,0,h,n,!0),g=[];if(!c||c.next===c.prev)return g;if(v&&(c=function(e,t,n,r){var x,i,u,o=[];for(x=0,i=t.length;x<i;x++)(u=f(e,t[x]*r,x<i-1?t[x+1]*r:e.length,r,!1))===u.next&&(u.steiner=!0),o.push(d(u));for(o.sort(p),x=0;x<o.length;x++)n=y(o[x],n);return n}(e,t,c,n)),e.length>80*n){r=i=e[0],x=u=e[1];for(var b=n;b<h;b+=n)(o=e[b])<r&&(r=o),(s=e[b+1])<x&&(x=s),o>i&&(i=o),s>u&&(u=s);l=0!==(l=Math.max(i-r,u-x))?32767/l:0}return a(c,g,n,r,x,l,0),g}function f(e,t,n,r,x){var i,u;if(x===O(e,t,n,r)>0)for(i=t;i<n;i+=r)u=P(i,e[i],e[i+1],u);else for(i=n-r;i>=t;i-=r)u=P(i,e[i],e[i+1],u);return u&&m(u,u.next)&&(B(u),u=u.next),u}function s(e,t){if(!e)return e;t||(t=e);var n,r=e;do{if(n=!1,r.steiner||!m(r,r.next)&&0!==w(r.prev,r,r.next))r=r.next;else{if(B(r),(r=t=r.prev)===r.next)break;n=!0}}while(n||r!==t);return t}function a(e,t,n,r,x,i,u){if(e){!u&&i&&function(e,t,n,r){var x=e;do{0===x.z&&(x.z=b(x.x,x.y,t,n,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==e);x.prevZ.nextZ=null,x.prevZ=null,function(e){var t,n,r,x,i,u,o,f,s=1;do{for(n=e,e=null,i=null,u=0;n;){for(u++,r=n,o=0,t=0;t<s&&(o++,r=r.nextZ);t++);for(f=s;o>0||f>0&&r;)0!==o&&(0===f||!r||n.z<=r.z)?(x=n,n=n.nextZ,o--):(x=r,r=r.nextZ,f--),i?i.nextZ=x:e=x,x.prevZ=i,i=x;n=r}i.nextZ=null,s*=2}while(u>1)}(x)}(e,r,x,i);for(var o,f,p=e;e.prev!==e.next;)if(o=e.prev,f=e.next,i?v(e,r,x,i):l(e))t.push(o.i/n|0),t.push(e.i/n|0),t.push(f.i/n|0),B(e),e=f.next,p=f.next;else if((e=f)===p){u?1===u?a(e=h(s(e),t,n),t,n,r,x,i,2):2===u&&c(e,t,n,r,x,i):a(s(e),t,n,r,x,i,1);break}}}function l(e){var t=e.prev,n=e,r=e.next;if(w(t,n,r)>=0)return!1;for(var x=t.x,i=n.x,u=r.x,o=t.y,f=n.y,s=r.y,a=x<i?x<u?x:u:i<u?i:u,l=o<f?o<s?o:s:f<s?f:s,v=x>i?x>u?x:u:i>u?i:u,h=o>f?o>s?o:s:f>s?f:s,c=r.next;c!==t;){if(c.x>=a&&c.x<=v&&c.y>=l&&c.y<=h&&M(x,o,i,f,u,s,c.x,c.y)&&w(c.prev,c,c.next)>=0)return!1;c=c.next}return!0}function v(e,t,n,r){var x=e.prev,i=e,u=e.next;if(w(x,i,u)>=0)return!1;for(var o=x.x,f=i.x,s=u.x,a=x.y,l=i.y,v=u.y,h=o<f?o<s?o:s:f<s?f:s,c=a<l?a<v?a:v:l<v?l:v,p=o>f?o>s?o:s:f>s?f:s,y=a>l?a>v?a:v:l>v?l:v,g=b(h,c,t,n,r),d=b(p,y,t,n,r),Z=e.prevZ,m=e.nextZ;Z&&Z.z>=g&&m&&m.z<=d;){if(Z.x>=h&&Z.x<=p&&Z.y>=c&&Z.y<=y&&Z!==x&&Z!==u&&M(o,a,f,l,s,v,Z.x,Z.y)&&w(Z.prev,Z,Z.next)>=0)return!1;if(Z=Z.prevZ,m.x>=h&&m.x<=p&&m.y>=c&&m.y<=y&&m!==x&&m!==u&&M(o,a,f,l,s,v,m.x,m.y)&&w(m.prev,m,m.next)>=0)return!1;m=m.nextZ}for(;Z&&Z.z>=g;){if(Z.x>=h&&Z.x<=p&&Z.y>=c&&Z.y<=y&&Z!==x&&Z!==u&&M(o,a,f,l,s,v,Z.x,Z.y)&&w(Z.prev,Z,Z.next)>=0)return!1;Z=Z.prevZ}for(;m&&m.z<=d;){if(m.x>=h&&m.x<=p&&m.y>=c&&m.y<=y&&m!==x&&m!==u&&M(o,a,f,l,s,v,m.x,m.y)&&w(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function h(e,t,n){var r=e;do{var x=r.prev,i=r.next.next;!m(x,i)&&A(x,r,r.next,i)&&z(x,i)&&z(i,x)&&(t.push(x.i/n|0),t.push(r.i/n|0),t.push(i.i/n|0),B(r),B(r.next),r=e=i),r=r.next}while(r!==e);return s(r)}function c(e,t,n,r,x,i){var u=e;do{for(var o=u.next.next;o!==u.prev;){if(u.i!==o.i&&Z(u,o)){var f=F(u,o);return u=s(u,u.next),f=s(f,f.next),a(u,t,n,r,x,i,0),void a(f,t,n,r,x,i,0)}o=o.next}u=u.next}while(u!==e)}function p(e,t){return e.x-t.x}function y(e,t){var n=function(e,t){var n,r=t,x=e.x,i=e.y,u=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var o=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(o<=x&&o>u&&(u=o,n=r.x<r.next.x?r:r.next,o===x))return n}r=r.next}while(r!==t);if(!n)return null;var f,s=n,a=n.x,l=n.y,v=1/0;r=n;do{x>=r.x&&r.x>=a&&x!==r.x&&M(i<l?x:u,i,a,l,i<l?u:x,i,r.x,r.y)&&(f=Math.abs(i-r.y)/(x-r.x),z(r,e)&&(f<v||f===v&&(r.x>n.x||r.x===n.x&&g(n,r)))&&(n=r,v=f)),r=r.next}while(r!==s);return n}(e,t);if(!n)return t;var r=F(n,e);return s(r,r.next),s(n,n.next)}function g(e,t){return w(e.prev,e,t.prev)<0&&w(t.next,e,e.next)<0}function b(e,t,n,r,x){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*x|0)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-r)*x|0)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function d(e){var t=e,n=e;do{(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next}while(t!==e);return n}function M(e,t,n,r,x,i,u,o){return(x-u)*(t-o)>=(e-u)*(i-o)&&(e-u)*(r-o)>=(n-u)*(t-o)&&(n-u)*(i-o)>=(x-u)*(r-o)}function Z(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&A(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}(e,t)&&(z(e,t)&&z(t,e)&&function(e,t){var n=e,r=!1,x=(e.x+t.x)/2,i=(e.y+t.y)/2;do{n.y>i!=n.next.y>i&&n.next.y!==n.y&&x<(n.next.x-n.x)*(i-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==e);return r}(e,t)&&(w(e.prev,e,t.prev)||w(e,t.prev,t))||m(e,t)&&w(e.prev,e,e.next)>0&&w(t.prev,t,t.next)>0)}function w(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function m(e,t){return e.x===t.x&&e.y===t.y}function A(e,t,n,r){var x=I(w(e,t,n)),i=I(w(e,t,r)),u=I(w(n,r,e)),o=I(w(n,r,t));return x!==i&&u!==o||(!(0!==x||!E(e,n,t))||(!(0!==i||!E(e,r,t))||(!(0!==u||!E(n,e,r))||!(0!==o||!E(n,t,r)))))}function E(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function I(e){return e>0?1:e<0?-1:0}function z(e,t){return w(e.prev,e,e.next)<0?w(e,t,e.next)>=0&&w(e,e.prev,t)>=0:w(e,t,e.prev)<0||w(e,e.next,t)<0}function F(e,t){var n=new _(e.i,e.x,e.y),r=new _(t.i,t.x,t.y),x=e.next,i=t.prev;return e.next=t,t.prev=e,n.next=x,x.prev=n,r.next=n,n.prev=r,i.next=r,r.prev=i,r}function P(e,t,n,r){var x=new _(e,t,n);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function B(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function _(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function O(e,t,n,r){for(var x=0,i=t,u=n-r;i<n;i+=r)x+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return x}u.exports=o,u.exports.default=o,o.deviation=function(e,t,n,r){var x=t&&t.length,i=x?t[0]*n:e.length,u=Math.abs(O(e,0,i,n));if(x)for(var o=0,f=t.length;o<f;o++){var s=t[o]*n,a=o<f-1?t[o+1]*n:e.length;u-=Math.abs(O(e,s,a,n))}var l=0;for(o=0;o<r.length;o+=3){var v=r[o]*n,h=r[o+1]*n,c=r[o+2]*n;l+=Math.abs((e[v]-e[c])*(e[h+1]-e[v+1])-(e[v]-e[h])*(e[c+1]-e[v+1]))}return 0===u&&0===l?0:Math.abs((l-u)/u)},o.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,x=0;x<e.length;x++){for(var i=0;i<e[x].length;i++)for(var u=0;u<t;u++)n.vertices.push(e[x][i][u]);x>0&&(r+=e[x-1].length,n.holes.push(r))}return n};var N=i(u.exports);const R=[],S={vertexPosition:0,indexPosition:0};function T(e,t,n,r,x){e[t+0]=n,e[t+1]=r,e[t+2]=x}function U(e,t,n,r,x,i){const u=3+x,o=e[t+0],f=e[t+1],s=R;s.length=x;for(let n=0;n<s.length;n++)s[n]=e[t+2+n];let a=i?i.vertexPosition:0,l=i?i.indexPosition:0;const v=a/u;return T(n,a,o,f,0),s.length&&n.set(s,a+3),a+=u,T(n,a,o,f,1),s.length&&n.set(s,a+3),a+=u,T(n,a,o,f,2),s.length&&n.set(s,a+3),a+=u,T(n,a,o,f,3),s.length&&n.set(s,a+3),a+=u,r[l++]=v,r[l++]=v+1,r[l++]=v+3,r[l++]=v+1,r[l++]=v+2,r[l++]=v+3,S.vertexPosition=a,S.indexPosition=l,S}function k(e,t,n,x,i,u,o,f,s,a,l){const v=8+f.length,h=u.length/v,c=[e[t+0],e[t+1]],p=[e[n],e[n+1]],y=r(s,[...c]),g=r(s,[...p]);function b(e,t,n){const r=Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])),x=[(t[0]-e[0])/r,(t[1]-e[1])/r],i=[-x[1],x[0]],u=Math.sqrt((n[0]-e[0])*(n[0]-e[0])+(n[1]-e[1])*(n[1]-e[1])),o=[(n[0]-e[0])/u,(n[1]-e[1])/u],f=0===r||0===u?0:Math.acos((s=o[0]*x[0]+o[1]*x[1],a=-1,l=1,Math.min(Math.max(s,a),l)));var s,a,l;return o[0]*i[0]+o[1]*i[1]>0?f:2*Math.PI-f}let d=-1,M=-1,Z=l;const w=null!==i;if(null!==x){d=b(y,g,r(s,[...[e[x],e[x+1]]])),Math.cos(d)<=.985&&(Z+=Math.tan((d-Math.PI)/2))}if(w){M=b(g,y,r(s,[...[e[i],e[i+1]]])),Math.cos(M)<=.985&&(Z+=Math.tan((Math.PI-M)/2))}function m(e,t){return 0===t?1e4*e:Math.sign(t)*(1e4*e+Math.abs(t))}return u.push(c[0],c[1],p[0],p[1],d,M,a,m(0,l)),u.push(...f),u.push(c[0],c[1],p[0],p[1],d,M,a,m(1,l)),u.push(...f),u.push(c[0],c[1],p[0],p[1],d,M,a,m(2,l)),u.push(...f),u.push(c[0],c[1],p[0],p[1],d,M,a,m(3,l)),u.push(...f),o.push(h,h+1,h+2,h+1,h+3,h+2),{length:a+Math.sqrt((g[0]-y[0])*(g[0]-y[0])+(g[1]-y[1])*(g[1]-y[1])),angle:Z}}function G(e,t,n,r,x){const i=2+x;let u=t;const o=e.slice(u,u+x);u+=x;const f=e[u++];let s=0;const a=new Array(f-1);for(let t=0;t<f;t++)s+=e[u++],t<f-1&&(a[t]=s);const l=e.slice(u,u+2*s),v=N(l,a,2);for(let e=0;e<v.length;e++)r.push(v[e]+n.length/i);for(let e=0;e<l.length;e+=2)n.push(l[e],l[e+1],...o);return u+2*s}const j=self;j.onmessage=r=>{const i=r.data;switch(i.type){case t:{const e=3,t=2,n=i.customAttributesSize,r=t+n,x=new Float32Array(i.renderInstructions),u=x.length/r,o=4*u*(n+e),f=new Uint32Array(6*u),s=new Float32Array(o);let a;for(let e=0;e<x.length;e+=r)a=U(x,e,s,f,n,a);const l=Object.assign({vertexBuffer:s.buffer,indexBuffer:f.buffer,renderInstructions:x.buffer},i);j.postMessage(l,[s.buffer,f.buffer,x.buffer]);break}case n:{const e=[],t=[],n=i.customAttributesSize,r=2,u=new Float32Array(i.renderInstructions);let o=0;const f=[1,0,0,1,0,0];let s,a;for(x(f,i.renderInstructionsTransform);o<u.length;){a=Array.from(u.slice(o,o+n)),o+=n,s=u[o++];const x=o,i=o+(s-1)*r,l=u[x]===u[i]&&u[x+1]===u[i+1];let v=0,h=0;for(let n=0;n<s-1;n++){let c=null;n>0?c=o+(n-1)*r:l&&(c=i-r);let p=null;n<s-2?p=o+(n+2)*r:l&&(p=x+r);const y=k(u,o+n*r,o+(n+1)*r,c,p,e,t,a,f,v,h);v=y.length,h=y.angle}o+=s*r}const l=Uint32Array.from(t),v=Float32Array.from(e),h=Object.assign({vertexBuffer:v.buffer,indexBuffer:l.buffer,renderInstructions:u.buffer},i);j.postMessage(h,[v.buffer,l.buffer,u.buffer]);break}case e:{const e=[],t=[],n=i.customAttributesSize,r=new Float32Array(i.renderInstructions);let x=0;for(;x<r.length;)x=G(r,x,e,t,n);const u=Uint32Array.from(t),o=Float32Array.from(e),f=Object.assign({vertexBuffer:o.buffer,indexBuffer:u.buffer,renderInstructions:r.buffer},i);j.postMessage(f,[o.buffer,u.buffer,r.buffer]);break}}};';
				return new Worker("undefined" == typeof Blob ? "data:application/javascript;base64," + Buffer.from(t, "binary").toString("base64") : URL.createObjectURL(new Blob([t], {
					type: "application/javascript"
				})))
			}(), this.worker_.addEventListener("message", (t => {
				const e = t.data;
				if (e.type === kv) {
					const i = e.projectionTransform;
					this.verticesBuffer_.fromArrayBuffer(e.vertexBuffer), this.helper.flushBufferData(this.verticesBuffer_), this.indicesBuffer_.fromArrayBuffer(e.indexBuffer), this.helper.flushBufferData(this.indicesBuffer_), this.renderTransform_ = i, Ve(this.invertRenderTransform_, this.renderTransform_), this.renderInstructions_ = new Float32Array(t.data.renderInstructions), e.id === this.lastSentId && (this.ready = !0), this.getLayer().changed()
				}
			})), this.featureCache_ = {}, this.featureCount_ = 0;
			const s = this.getLayer().getSource();
			this.sourceListenKeys_ = [Ot(s, Cl, this.handleSourceFeatureAdded_, this), Ot(s, Tl, this.handleSourceFeatureChanged_, this), Ot(s, Rl, this.handleSourceFeatureDelete_, this), Ot(s, Pl, this.handleSourceFeatureClear_, this)], s.forEachFeature((t => {
				this.featureCache_[l(t)] = {
					feature: t,
					properties: t.getProperties(),
					geometry: t.getGeometry()
				}, this.featureCount_++
			}))
		}
		afterHelperCreated() {
			this.program_ = this.helper.getProgram(this.fragmentShader_, this.vertexShader_), this.hitDetectionEnabled_ && (this.hitRenderTarget_ = new Lv(this.helper))
		}
		handleSourceFeatureAdded_(t) {
			const e = t.feature;
			this.featureCache_[l(e)] = {
				feature: e,
				properties: e.getProperties(),
				geometry: e.getGeometry()
			}, this.featureCount_++
		}
		handleSourceFeatureChanged_(t) {
			const e = t.feature;
			this.featureCache_[l(e)] = {
				feature: e,
				properties: e.getProperties(),
				geometry: e.getGeometry()
			}
		}
		handleSourceFeatureDelete_(t) {
			const e = t.feature;
			delete this.featureCache_[l(e)], this.featureCount_--
		}
		handleSourceFeatureClear_() {
			this.featureCache_ = {}, this.featureCount_ = 0
		}
		renderFrame(t) {
			const e = this.helper.getGL();
			this.preRender(e, t);
			const [i, n, r] = function(t, e) {
				const i = t.viewState.projection,
					n = e.getSource().getWrapX() && i.canWrapX(),
					r = i.getExtent(),
					s = t.extent,
					o = n ? Ei(r) : null,
					a = n ? Math.ceil((s[2] - r[2]) / o) + 1 : 1;
				return [n ? Math.floor((s[0] - r[0]) / o) : 0, a, o]
			}(t, this.getLayer());
			this.renderWorlds(t, !1, i, n, r), this.helper.finalizeDraw(t, this.dispatchPreComposeEvent, this.dispatchPostComposeEvent), this.hitDetectionEnabled_ && (this.renderWorlds(t, !0, i, n, r), this.hitRenderTarget_.clearCachedData()), this.postRender(e, t);
			return this.helper.getCanvas()
		}
		prepareFrameInternal(t) {
			const e = this.getLayer(),
				i = e.getSource(),
				n = t.viewState,
				r = !t.viewHints[Xs] && !t.viewHints[Ws],
				s = !ai(this.previousExtent_, t.extent),
				o = this.sourceRevision_ < i.getRevision();
			if (o && (this.sourceRevision_ = i.getRevision()), r && (s || o)) {
				const r = n.projection,
					s = n.resolution,
					o = e instanceof Pa ? e.getRenderBuffer() : 0,
					a = Ye(t.extent, o * s);
				i.loadFeatures(a, s, r), this.rebuildBuffers_(t), this.previousExtent_ = t.extent.slice()
			}
			return this.helper.useProgram(this.program_, t), this.helper.prepareDraw(t), this.helper.bindBuffer(this.verticesBuffer_), this.helper.bindBuffer(this.indicesBuffer_), this.helper.enableAttributes(this.attributes), !0
		}
		rebuildBuffers_(t) {
			const e = [1, 0, 0, 1, 0, 0];
			this.helper.makeProjectionTransform(t, e);
			const i = Ln(),
				n = (this.hitDetectionEnabled_ ? 7 : 2) + this.customAttributes.length,
				r = n * this.featureCount_;
			let s, o;
			this.renderInstructions_ && this.renderInstructions_.length === r || (this.renderInstructions_ = new Float32Array(r));
			const a = [],
				l = [];
			let h = -1;
			for (const n in this.featureCache_)
				if (s = this.featureCache_[n], o = s.geometry, o && "Point" === o.getType()) {
					if (i) {
						const e = An(o.getFlatCoordinates(), t.viewState.projection);
						a[0] = e[0], a[1] = e[1]
					} else a[0] = o.getFlatCoordinates()[0], a[1] = o.getFlatCoordinates()[1];
					if (je(e, a), this.renderInstructions_[++h] = a[0], this.renderInstructions_[++h] = a[1], this.hitDetectionEnabled_) {
						const t = aw(h + 5, l);
						this.renderInstructions_[++h] = t[0], this.renderInstructions_[++h] = t[1], this.renderInstructions_[++h] = t[2], this.renderInstructions_[++h] = t[3], this.renderInstructions_[++h] = Number(n)
					}
					for (let t = 0; t < this.customAttributes.length; t++) {
						const e = this.customAttributes[t].callback(s.feature, s.properties);
						this.renderInstructions_[++h] = e
					}
				} const u = {
				id: ++this.lastSentId,
				type: kv,
				renderInstructions: this.renderInstructions_.buffer,
				customAttributesSize: n - 2
			};
			u.projectionTransform = e, this.ready = !1, this.worker_.postMessage(u, [this.renderInstructions_.buffer]), this.renderInstructions_ = null
		}
		forEachFeatureAtCoordinate(t, e, i, n, r) {
			if (Se(this.hitDetectionEnabled_, "`forEachFeatureAtCoordinate` cannot be used on a WebGL layer if the hit detection logic has been disabled using the `disableHitDetection: true` option."), !this.renderInstructions_ || !this.hitDetectionEnabled_) return;
			const s = je(e.coordinateToPixelTransform, t.slice()),
				o = this.hitRenderTarget_.readPixel(s[0] / 2, s[1] / 2),
				a = function(t) {
					let e = 0;
					const i = 256,
						n = 255;
					return e += Math.round(t[0] * i * i * i * n), e += Math.round(t[1] * i * i * n), e += Math.round(t[2] * i * n), e += Math.round(t[3] * n), e
				}([o[0] / 255, o[1] / 255, o[2] / 255, o[3] / 255]),
				l = this.renderInstructions_[a],
				h = Math.floor(l).toString(),
				u = this.getLayer().getSource().getFeatureByUid(h);
			return u ? n(u, this.getLayer(), null) : void 0
		}
		renderWorlds(t, e, i, n, r) {
			let s = i;
			this.helper.useProgram(this.program_, t), e && (this.hitRenderTarget_.setSize([Math.floor(t.size[0] / 2), Math.floor(t.size[1] / 2)]), this.helper.prepareDrawToRenderTarget(t, this.hitRenderTarget_, !0)), this.helper.bindBuffer(this.verticesBuffer_), this.helper.bindBuffer(this.indicesBuffer_), this.helper.enableAttributes(this.attributes);
			do {
				this.helper.makeProjectionTransform(t, this.currentTransform_), Be(this.currentTransform_, s * r, 0), Ge(this.currentTransform_, this.invertRenderTransform_), this.helper.applyUniforms(t), this.helper.applyHitDetectionUniform(e);
				const i = this.indicesBuffer_.getSize();
				this.helper.drawElements(0, i)
			} while (++s < n)
		}
		disposeInternal() {
			this.worker_.terminate(), this.layer_ = null, this.sourceListenKeys_.forEach((function(t) {
				Gt(t)
			})), this.sourceListenKeys_ = null, super.disposeInternal()
		}
	};
	var hw = class {
		constructor(t, e) {
			this.name = t, this.data = e, this.texture_ = null
		}
		getTexture(t) {
			if (!this.texture_) {
				const e = t.createTexture();
				t.bindTexture(t.TEXTURE_2D, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.data.length / 4, 1, 0, t.RGBA, t.UNSIGNED_BYTE, this.data), this.texture_ = e
			}
			return this.texture_
		}
	};
	const uw = {
		TILE_TRANSFORM: "u_tileTransform",
		TRANSITION_ALPHA: "u_transitionAlpha",
		DEPTH: "u_depth",
		RENDER_EXTENT: "u_renderExtent",
		PATTERN_ORIGIN: "u_patternOrigin",
		RESOLUTION: "u_resolution",
		ZOOM: "u_zoom",
		GLOBAL_ALPHA: "u_globalAlpha",
		PROJECTION_MATRIX: "u_projectionMatrix",
		SCREEN_TO_WORLD_MATRIX: "u_screenToWorldMatrix",
		TILE_TEXTURE_ARRAY: "u_tileTextures",
		TEXTURE_PIXEL_WIDTH: "u_texturePixelWidth",
		TEXTURE_PIXEL_HEIGHT: "u_texturePixelHeight",
		TEXTURE_RESOLUTION: "u_textureResolution",
		TEXTURE_ORIGIN_X: "u_textureOriginX",
		TEXTURE_ORIGIN_Y: "u_textureOriginY"
	};

	function cw(t) {
		const e = t.toString();
		return e.includes(".") ? e : e + ".0"
	}

	function dw(t) {
		if (t.length < 2 || t.length > 4) throw new Error("`formatArray` can only output `vec2`, `vec3` or `vec4` arrays.");
		return `vec${t.length}(${t.map(cw).join(", ")})`
	}

	function gw(t) {
		const e = j(t),
			i = e.length > 3 ? e[3] : 1;
		return dw([e[0] / 255 * i, e[1] / 255 * i, e[2] / 255 * i, i])
	}
	const pw = {};
	let fw = 0;

	function mw(t) {
		return t in pw || (pw[t] = fw++), pw[t]
	}

	function _w(t) {
		return cw(mw(t))
	}

	function yw(t) {
		return "u_var_" + t
	}
	const xw = "getBandValue";

	function vw(t) {
		return (e, i, n) => {
			const r = i.args.length,
				s = new Array(r);
			for (let t = 0; t < r; ++t) s[t] = bw(i.args[t], n, e);
			return t(s, e)
		}
	}
	const ww = {
		[qo.Get]: (t, e) => {
			const i = e.args[0].value;
			i in t.properties || (t.properties[i] = {
				name: i,
				type: e.type
			});
			return (t.inFragmentShader ? "v_prop_" : "a_prop_") + i
		},
		[qo.GeometryType]: (t, e, i) => {
			const n = "geometryType",
				r = t => {
					const e = t.getType();
					switch (e) {
						case "Point":
						case "LineString":
						case "Polygon":
							return e;
						case "MultiPoint":
						case "MultiLineString":
						case "MultiPolygon":
							return e.substring(5);
						case "Circle":
							return "Polygon";
						case "GeometryCollection":
							return r(t.getGeometries()[0])
					}
				};
			n in t.properties || (t.properties[n] = {
				name: n,
				type: Ao,
				evaluator: t => r(t.getGeometry())
			});
			return (t.inFragmentShader ? "v_prop_" : "a_prop_") + n
		},
		[qo.Var]: (t, e) => {
			const i = e.args[0].value;
			return i in t.variables || (t.variables[i] = {
				name: i,
				type: e.type
			}), yw(i)
		},
		[qo.Resolution]: () => "u_resolution",
		[qo.Zoom]: () => "u_zoom",
		[qo.Time]: () => "u_time",
		[qo.Any]: vw((t => `(${t.join(" || ")})`)),
		[qo.All]: vw((t => `(${t.join(" && ")})`)),
		[qo.Not]: vw((([t]) => `(!${t})`)),
		[qo.Equal]: vw((([t, e]) => `(${t} == ${e})`)),
		[qo.NotEqual]: vw((([t, e]) => `(${t} != ${e})`)),
		[qo.GreaterThan]: vw((([t, e]) => `(${t} > ${e})`)),
		[qo.GreaterThanOrEqualTo]: vw((([t, e]) => `(${t} >= ${e})`)),
		[qo.LessThan]: vw((([t, e]) => `(${t} < ${e})`)),
		[qo.LessThanOrEqualTo]: vw((([t, e]) => `(${t} <= ${e})`)),
		[qo.Multiply]: vw((t => `(${t.join(" * ")})`)),
		[qo.Divide]: vw((([t, e]) => `(${t} / ${e})`)),
		[qo.Add]: vw((t => `(${t.join(" + ")})`)),
		[qo.Subtract]: vw((([t, e]) => `(${t} - ${e})`)),
		[qo.Clamp]: vw((([t, e, i]) => `clamp(${t}, ${e}, ${i})`)),
		[qo.Mod]: vw((([t, e]) => `mod(${t}, ${e})`)),
		[qo.Pow]: vw((([t, e]) => `pow(${t}, ${e})`)),
		[qo.Abs]: vw((([t]) => `abs(${t})`)),
		[qo.Floor]: vw((([t]) => `floor(${t})`)),
		[qo.Ceil]: vw((([t]) => `ceil(${t})`)),
		[qo.Round]: vw((([t]) => `floor(${t} + 0.5)`)),
		[qo.Sin]: vw((([t]) => `sin(${t})`)),
		[qo.Cos]: vw((([t]) => `cos(${t})`)),
		[qo.Atan]: vw((([t, e]) => void 0 !== e ? `atan(${t}, ${e})` : `atan(${t})`)),
		[qo.Sqrt]: vw((([t]) => `sqrt(${t})`)),
		[qo.Match]: vw((t => {
			const e = t[0],
				i = t[t.length - 1];
			let n = null;
			for (let r = t.length - 3; r >= 1; r -= 2) {
				n = `(${e} == ${t[r]} ? ${t[r + 1]} : ${n || i})`
			}
			return n
		})),
		[qo.Between]: vw((([t, e, i]) => `(${t} >= ${e} && ${t} <= ${i})`)),
		[qo.Interpolate]: vw((([t, e, ...i]) => {
			let n = "";
			for (let r = 0; r < i.length - 2; r += 2) {
				const s = i[r],
					o = n || i[r + 1],
					a = i[r + 2],
					l = i[r + 3];
				let h;
				h = t === cw(1) ? `(${e} - ${s}) / (${a} - ${s})` : `(pow(${t}, (${e} - ${s})) - 1.0) / (pow(${t}, (${a} - ${s})) - 1.0)`, n = `mix(${o}, ${l}, clamp(${h}, 0.0, 1.0))`
			}
			return n
		})),
		[qo.Case]: vw((t => {
			const e = t[t.length - 1];
			let i = null;
			for (let n = t.length - 3; n >= 0; n -= 2) {
				i = `(${t[n]} ? ${t[n + 1]} : ${i || e})`
			}
			return i
		})),
		[qo.In]: vw((([t, ...e], i) => {
			const n = function(t, e) {
					return `operator_${t}_${Object.keys(e.functions).length}`
				}("in", i),
				r = [];
			for (let t = 0; t < e.length; t += 1) r.push(`  if (inputValue == ${e[t]}) { return true; }`);
			return i.functions[n] = `bool ${n}(float inputValue) {\n${r.join("\n")}\n  return false;\n}`, `${n}(${t})`
		})),
		[qo.Array]: vw((t => `vec${t.length}(${t.join(", ")})`)),
		[qo.Color]: vw((t => {
			const e = t.slice(0, 3).map((t => `${t} / 255.0`));
			if (3 === t.length) return `vec4(${e.join(", ")}, 1.0)`;
			return `(${t[3]} * vec4(${e.join(", ")}, 1.0))`
		})),
		[qo.Band]: vw((([t, e, i], n) => {
			if (!(xw in n.functions)) {
				let t = "";
				const e = n.bandCount || 1;
				for (let i = 0; i < e; i++) {
					const n = Math.floor(i / 4);
					let r = i % 4;
					i === e - 1 && 1 === r && (r = 3);
					t += `  if (band == ${i + 1}.0) {\n    return texture2D(${`${uw.TILE_TEXTURE_ARRAY}[${n}]`}, v_textureCoord + vec2(dx, dy))[${r}];\n  }\n`
				}
				n.functions[xw] = `float getBandValue(float band, float xOffset, float yOffset) {\n  float dx = xOffset / ${uw.TEXTURE_PIXEL_WIDTH};\n  float dy = yOffset / ${uw.TEXTURE_PIXEL_HEIGHT};\n${t}\n}`
			}
			return `${xw}(${t}, ${e ?? "0.0"}, ${i ?? "0.0"})`
		})),
		[qo.Palette]: (t, e) => {
			const [i, ...n] = e.args, r = n.length, s = new Uint8Array(4 * r);
			for (let t = 0; t < n.length; t++) {
				const e = j(n[t].value),
					i = 4 * t;
				s[i] = e[0], s[i + 1] = e[1], s[i + 2] = e[2], s[i + 3] = 255 * e[3]
			}
			t.paletteTextures || (t.paletteTextures = []);
			const o = `u_paletteTextures[${t.paletteTextures.length}]`,
				a = new hw(o, s);
			t.paletteTextures.push(a);
			return `texture2D(${o}, vec2((${bw(i, ko, t)} + 0.5) / ${r}.0, 0.5))`
		}
	};

	function bw(t, e, i) {
		if (t instanceof Vo) {
			const n = ww[t.operator];
			if (void 0 === n) throw new Error(`No compiler defined for this operator: ${JSON.stringify(t.operator)}`);
			return n(i, t, e)
		}
		if ((t.type & ko) > 0) return cw(t.value);
		if ((t.type & Lo) > 0) return t.value.toString();
		if ((t.type & Ao) > 0) return _w(t.value.toString());
		if ((t.type & Do) > 0) return gw(t.value);
		if ((t.type & Oo) > 0) return dw(t.value);
		throw new Error(`Unexpected expression ${t.value} (expected type ${jo(e)})`)
	}
	const Sw = "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nuniform mat4 u_projectionMatrix;\nuniform mat4 u_screenToWorldMatrix;\nuniform vec2 u_viewportSizePx;\nuniform float u_pixelRatio;\nuniform float u_globalAlpha;\nuniform float u_time;\nuniform float u_zoom;\nuniform float u_resolution;\nuniform float u_rotation;\nuniform vec4 u_renderExtent;\nuniform vec2 u_patternOrigin;\nuniform float u_depth;\nuniform mediump int u_hitDetection;\n\nconst float PI = 3.141592653589793238;\nconst float TWO_PI = 2.0 * PI;\n\n// this used to produce an alpha-premultiplied color from a texture\nvec4 samplePremultiplied(sampler2D sampler, vec2 texCoord) {\n  vec4 color = texture2D(sampler, texCoord);\n  return vec4(color.rgb * color.a, color.a);\n}\n",
		Ew = {
			"fill-color": "rgba(255,255,255,0.4)",
			"stroke-color": "#3399CC",
			"stroke-width": 1.25,
			"circle-radius": 5,
			"circle-fill-color": "rgba(255,255,255,0.4)",
			"circle-stroke-width": 1.25,
			"circle-stroke-color": "#3399CC"
		};
	class Cw {
		constructor() {
			this.uniforms_ = [], this.attributes_ = [], this.varyings_ = [], this.hasSymbol_ = !1, this.symbolSizeExpression_ = `vec2(${cw(Ew["circle-radius"])} + ${cw(.5 * Ew["circle-stroke-width"])})`, this.symbolRotationExpression_ = "0.0", this.symbolOffsetExpression_ = "vec2(0.0)", this.symbolColorExpression_ = gw(Ew["circle-fill-color"]), this.texCoordExpression_ = "vec4(0.0, 0.0, 1.0, 1.0)", this.discardExpression_ = "false", this.symbolRotateWithView_ = !1, this.hasStroke_ = !1, this.strokeWidthExpression_ = cw(Ew["stroke-width"]), this.strokeColorExpression_ = gw(Ew["stroke-color"]), this.strokeOffsetExpression_ = "0.", this.strokeCapExpression_ = _w("round"), this.strokeJoinExpression_ = _w("round"), this.strokeMiterLimitExpression_ = "10.", this.strokeDistanceFieldExpression_ = "-1000.", this.hasFill_ = !1, this.fillColorExpression_ = gw(Ew["fill-color"]), this.vertexShaderFunctions_ = [], this.fragmentShaderFunctions_ = []
		}
		addUniform(t) {
			return this.uniforms_.push(t), this
		}
		addAttribute(t) {
			return this.attributes_.push(t), this
		}
		addVarying(t, e, i) {
			return this.varyings_.push({
				name: t,
				type: e,
				expression: i
			}), this
		}
		setSymbolSizeExpression(t) {
			return this.hasSymbol_ = !0, this.symbolSizeExpression_ = t, this
		}
		getSymbolSizeExpression() {
			return this.symbolSizeExpression_
		}
		setSymbolRotationExpression(t) {
			return this.symbolRotationExpression_ = t, this
		}
		setSymbolOffsetExpression(t) {
			return this.symbolOffsetExpression_ = t, this
		}
		getSymbolOffsetExpression() {
			return this.symbolOffsetExpression_
		}
		setSymbolColorExpression(t) {
			return this.hasSymbol_ = !0, this.symbolColorExpression_ = t, this
		}
		getSymbolColorExpression() {
			return this.symbolColorExpression_
		}
		setTextureCoordinateExpression(t) {
			return this.texCoordExpression_ = t, this
		}
		setFragmentDiscardExpression(t) {
			return this.discardExpression_ = t, this
		}
		getFragmentDiscardExpression() {
			return this.discardExpression_
		}
		setSymbolRotateWithView(t) {
			return this.symbolRotateWithView_ = t, this
		}
		setStrokeWidthExpression(t) {
			return this.hasStroke_ = !0, this.strokeWidthExpression_ = t, this
		}
		setStrokeColorExpression(t) {
			return this.hasStroke_ = !0, this.strokeColorExpression_ = t, this
		}
		getStrokeColorExpression() {
			return this.strokeColorExpression_
		}
		setStrokeOffsetExpression(t) {
			return this.strokeOffsetExpression_ = t, this
		}
		setStrokeCapExpression(t) {
			return this.strokeCapExpression_ = t, this
		}
		setStrokeJoinExpression(t) {
			return this.strokeJoinExpression_ = t, this
		}
		setStrokeMiterLimitExpression(t) {
			return this.strokeMiterLimitExpression_ = t, this
		}
		setStrokeDistanceFieldExpression(t) {
			return this.strokeDistanceFieldExpression_ = t, this
		}
		setFillColorExpression(t) {
			return this.hasFill_ = !0, this.fillColorExpression_ = t, this
		}
		getFillColorExpression() {
			return this.fillColorExpression_
		}
		addVertexShaderFunction(t) {
			this.vertexShaderFunctions_.includes(t) || this.vertexShaderFunctions_.push(t)
		}
		addFragmentShaderFunction(t) {
			this.fragmentShaderFunctions_.includes(t) || this.fragmentShaderFunctions_.push(t)
		}
		getSymbolVertexShader() {
			return this.hasSymbol_ ? `${Sw}\n${this.uniforms_.map((function (t) { return "uniform " + t + ";" })).join("\n")}\nattribute vec2 a_position;\nattribute float a_index;\nattribute vec4 a_hitColor;\n${this.attributes_.map((function (t) { return "attribute " + t + ";" })).join("\n")}\nvarying vec2 v_texCoord;\nvarying vec2 v_quadCoord;\nvarying vec4 v_hitColor;\nvarying vec2 v_centerPx;\nvarying float v_angle;\nvarying vec2 v_quadSizePx;\n${this.varyings_.map((function (t) { return "varying " + t.type + " " + t.name + ";" })).join("\n")}\n${this.vertexShaderFunctions_.join("\n")}\nvec2 pxToScreen(vec2 coordPx) {\n  vec2 scaled = coordPx / u_viewportSizePx / 0.5;\n  return scaled;\n}\n\nvec2 screenToPx(vec2 coordScreen) {\n  return (coordScreen * 0.5 + 0.5) * u_viewportSizePx;\n}\n\nvoid main(void) {\n  v_quadSizePx = ${this.symbolSizeExpression_};\n  vec2 halfSizePx = v_quadSizePx * 0.5;\n  vec2 centerOffsetPx = ${this.symbolOffsetExpression_};\n  vec2 offsetPx = centerOffsetPx;\n  if (a_index == 0.0) {\n    offsetPx -= halfSizePx;\n  } else if (a_index == 1.0) {\n    offsetPx += halfSizePx * vec2(1., -1.);\n  } else if (a_index == 2.0) {\n    offsetPx += halfSizePx;\n  } else {\n    offsetPx += halfSizePx * vec2(-1., 1.);\n  }\n  float angle = ${this.symbolRotationExpression_};\n  ${this.symbolRotateWithView_ ? "angle += u_rotation;" : ""}\n  float c = cos(-angle);\n  float s = sin(-angle);\n  offsetPx = vec2(c * offsetPx.x - s * offsetPx.y, s * offsetPx.x + c * offsetPx.y);\n  vec4 center = u_projectionMatrix * vec4(a_position, 0.0, 1.0);\n  gl_Position = center + vec4(pxToScreen(offsetPx), u_depth, 0.);\n  vec4 texCoord = ${this.texCoordExpression_};\n  float u = a_index == 0.0 || a_index == 3.0 ? texCoord.s : texCoord.p;\n  float v = a_index == 2.0 || a_index == 3.0 ? texCoord.t : texCoord.q;\n  v_texCoord = vec2(u, v);\n  v_hitColor = a_hitColor;\n  v_angle = angle;\n  c = cos(-v_angle);\n  s = sin(-v_angle);\n  centerOffsetPx = vec2(c * centerOffsetPx.x - s * centerOffsetPx.y, s * centerOffsetPx.x + c * centerOffsetPx.y); \n  v_centerPx = screenToPx(center.xy) + centerOffsetPx;\n${this.varyings_.map((function (t) { return "  " + t.name + " = " + t.expression + ";" })).join("\n")}\n}` : null
		}
		getSymbolFragmentShader() {
			return this.hasSymbol_ ? `${Sw}\n${this.uniforms_.map((function (t) { return "uniform " + t + ";" })).join("\n")}\nvarying vec2 v_texCoord;\nvarying vec4 v_hitColor;\nvarying vec2 v_centerPx;\nvarying float v_angle;\nvarying vec2 v_quadSizePx;\n${this.varyings_.map((function (t) { return "varying " + t.type + " " + t.name + ";" })).join("\n")}\n${this.fragmentShaderFunctions_.join("\n")}\n\nvoid main(void) {\n  if (${this.discardExpression_}) { discard; }\n  vec2 coordsPx = gl_FragCoord.xy / u_pixelRatio - v_centerPx; // relative to center\n  float c = cos(v_angle);\n  float s = sin(v_angle);\n  coordsPx = vec2(c * coordsPx.x - s * coordsPx.y, s * coordsPx.x + c * coordsPx.y);\n  gl_FragColor = ${this.symbolColorExpression_};\n  if (u_hitDetection > 0) {\n    if (gl_FragColor.a < 0.05) { discard; };\n    gl_FragColor = v_hitColor;\n  }\n}` : null
		}
		getStrokeVertexShader() {
			return this.hasStroke_ ? `${Sw}\n${this.uniforms_.map((function (t) { return "uniform " + t + ";" })).join("\n")}\nattribute vec2 a_position;\nattribute float a_index;\nattribute vec2 a_segmentStart;\nattribute vec2 a_segmentEnd;\nattribute float a_parameters;\nattribute float a_distance;\nattribute vec2 a_joinAngles;\nattribute vec4 a_hitColor;\n${this.attributes_.map((function (t) { return "attribute " + t + ";" })).join("\n")}\nvarying vec2 v_segmentStart;\nvarying vec2 v_segmentEnd;\nvarying float v_angleStart;\nvarying float v_angleEnd;\nvarying float v_width;\nvarying vec4 v_hitColor;\nvarying float v_distanceOffsetPx;\n${this.varyings_.map((function (t) { return "varying " + t.type + " " + t.name + ";" })).join("\n")}\n${this.vertexShaderFunctions_.join("\n")}\nvec2 worldToPx(vec2 worldPos) {\n  vec4 screenPos = u_projectionMatrix * vec4(worldPos, 0.0, 1.0);\n  return (0.5 * screenPos.xy + 0.5) * u_viewportSizePx;\n}\n\nvec4 pxToScreen(vec2 pxPos) {\n  vec2 screenPos = 2.0 * pxPos / u_viewportSizePx - 1.0;\n  return vec4(screenPos, u_depth, 1.0);\n}\n\nbool isCap(float joinAngle) {\n  return joinAngle < -0.1;\n}\n\nvec2 getJoinOffsetDirection(vec2 normalPx, float joinAngle) {\n  float halfAngle = joinAngle / 2.0;\n  float c = cos(halfAngle);\n  float s = sin(halfAngle);\n  vec2 angleBisectorNormal = vec2(s * normalPx.x + c * normalPx.y, -c * normalPx.x + s * normalPx.y);\n  float length = 1.0 / s;\n  return angleBisectorNormal * length;\n}\n\nvec2 getOffsetPoint(vec2 point, vec2 normal, float joinAngle, float offsetPx) {\n  // if on a cap or the join angle is too high, offset the line along the segment normal\n  if (cos(joinAngle) > 0.998 || isCap(joinAngle)) {\n    return point - normal * offsetPx;\n  }\n  // offset is applied along the inverted normal (positive offset goes "right" relative to line direction)\n  return point - getJoinOffsetDirection(normal, joinAngle) * offsetPx;\n}\n\nvoid main(void) {\n  v_angleStart = a_joinAngles.x;\n  v_angleEnd = a_joinAngles.y;\n  float vertexNumber = floor(abs(a_parameters) / 10000. + 0.5);\n  // we're reading the fractional part while keeping the sign (so -4.12 gives -0.12, 3.45 gives 0.45)\n  float angleTangentSum = fract(abs(a_parameters) / 10000.) * 10000. * sign(a_parameters);\n\n  float lineWidth = ${this.strokeWidthExpression_};\n  float lineOffsetPx = ${this.strokeOffsetExpression_};\n\n  // compute segment start/end in px with offset\n  vec2 segmentStartPx = worldToPx(a_segmentStart);\n  vec2 segmentEndPx = worldToPx(a_segmentEnd);\n  vec2 tangentPx = normalize(segmentEndPx - segmentStartPx);\n  vec2 normalPx = vec2(-tangentPx.y, tangentPx.x);\n  segmentStartPx = getOffsetPoint(segmentStartPx, normalPx, v_angleStart, lineOffsetPx),\n  segmentEndPx = getOffsetPoint(segmentEndPx, normalPx, v_angleEnd, lineOffsetPx);\n  \n  // compute current vertex position\n  float normalDir = vertexNumber < 0.5 || (vertexNumber > 1.5 && vertexNumber < 2.5) ? 1.0 : -1.0;\n  float tangentDir = vertexNumber < 1.5 ? 1.0 : -1.0;\n  float angle = vertexNumber < 1.5 ? v_angleStart : v_angleEnd;\n  vec2 joinDirection;\n  vec2 positionPx = vertexNumber < 1.5 ? segmentStartPx : segmentEndPx;\n  // if angle is too high, do not make a proper join\n  if (cos(angle) > 0.985 || isCap(angle)) {\n    joinDirection = normalPx * normalDir - tangentPx * tangentDir;\n  } else {\n    joinDirection = getJoinOffsetDirection(normalPx * normalDir, angle);\n  }\n  positionPx = positionPx + joinDirection * lineWidth * 0.5;\n  gl_Position = pxToScreen(positionPx);\n\n  v_segmentStart = segmentStartPx;\n  v_segmentEnd = segmentEndPx;\n  v_width = lineWidth;\n  v_hitColor = a_hitColor;\n  v_distanceOffsetPx = a_distance / u_resolution - (lineOffsetPx * angleTangentSum);\n${this.varyings_.map((function (t) { return "  " + t.name + " = " + t.expression + ";" })).join("\n")}\n}` : null
		}
		getStrokeFragmentShader() {
			return this.hasStroke_ ? `${Sw}\n${this.uniforms_.map((function (t) { return "uniform " + t + ";" })).join("\n")}\nvarying vec2 v_segmentStart;\nvarying vec2 v_segmentEnd;\nvarying float v_angleStart;\nvarying float v_angleEnd;\nvarying float v_width;\nvarying vec4 v_hitColor;\nvarying float v_distanceOffsetPx;\n${this.varyings_.map((function (t) { return "varying " + t.type + " " + t.name + ";" })).join("\n")}\n${this.fragmentShaderFunctions_.join("\n")}\n\nvec2 pxToWorld(vec2 pxPos) {\n  vec2 screenPos = 2.0 * pxPos / u_viewportSizePx - 1.0;\n  return (u_screenToWorldMatrix * vec4(screenPos, 0.0, 1.0)).xy;\n}\n\nbool isCap(float joinAngle) {\n  return joinAngle < -0.1;\n}\n\nfloat segmentDistanceField(vec2 point, vec2 start, vec2 end, float width) {\n  vec2 tangent = normalize(end - start);\n  vec2 normal = vec2(-tangent.y, tangent.x);\n  vec2 startToPoint = point - start;\n  return abs(dot(startToPoint, normal)) - width * 0.5;\n}\n\nfloat buttCapDistanceField(vec2 point, vec2 start, vec2 end) {\n  vec2 startToPoint = point - start;\n  vec2 tangent = normalize(end - start);\n  return dot(startToPoint, -tangent);\n}\n\nfloat squareCapDistanceField(vec2 point, vec2 start, vec2 end, float width) {\n  return buttCapDistanceField(point, start, end) - width * 0.5;\n}\n\nfloat roundCapDistanceField(vec2 point, vec2 start, vec2 end, float width) {\n  float onSegment = max(0., 1000. * dot(point - start, end - start)); // this is very high when inside the segment\n  return length(point - start) - width * 0.5 - onSegment;\n}\n\nfloat roundJoinDistanceField(vec2 point, vec2 start, vec2 end, float width) {\n  return roundCapDistanceField(point, start, end, width);\n}\n\nfloat bevelJoinField(vec2 point, vec2 start, vec2 end, float width, float joinAngle) {\n  vec2 startToPoint = point - start;\n  vec2 tangent = normalize(end - start);\n  float c = cos(joinAngle * 0.5);\n  float s = sin(joinAngle * 0.5);\n  float direction = -sign(sin(joinAngle));\n  vec2 bisector = vec2(c * tangent.x - s * tangent.y, s * tangent.x + c * tangent.y);\n  float radius = width * 0.5 * s;\n  return dot(startToPoint, bisector * direction) - radius;\n}\n\nfloat miterJoinDistanceField(vec2 point, vec2 start, vec2 end, float width, float joinAngle) {\n  if (cos(joinAngle) > 0.985) { // avoid risking a division by zero\n    return bevelJoinField(point, start, end, width, joinAngle);\n  }\n  float miterLength = 1. / sin(joinAngle * 0.5);\n  float miterLimit = ${this.strokeMiterLimitExpression_};\n  if (miterLength > miterLimit) {\n    return bevelJoinField(point, start, end, width, joinAngle);\n  }\n  return -1000.;\n}\n\nfloat capDistanceField(vec2 point, vec2 start, vec2 end, float width, float capType) {\n   if (capType == ${_w("butt")}) {\n    return buttCapDistanceField(point, start, end);\n  } else if (capType == ${_w("square")}) {\n    return squareCapDistanceField(point, start, end, width);\n  }\n  return roundCapDistanceField(point, start, end, width);\n}\n\nfloat joinDistanceField(vec2 point, vec2 start, vec2 end, float width, float joinAngle, float joinType) {\n  if (joinType == ${_w("bevel")}) {\n    return bevelJoinField(point, start, end, width, joinAngle);\n  } else if (joinType == ${_w("miter")}) {\n    return miterJoinDistanceField(point, start, end, width, joinAngle);\n  }\n  return roundJoinDistanceField(point, start, end, width);\n}\n\nfloat computeSegmentPointDistance(vec2 point, vec2 start, vec2 end, float width, float joinAngle, float capType, float joinType) {\n  if (isCap(joinAngle)) {\n    return capDistanceField(point, start, end, width, capType);\n  }\n  return joinDistanceField(point, start, end, width, joinAngle, joinType);\n}\n\nvoid main(void) {\n  vec2 currentPoint = gl_FragCoord.xy / u_pixelRatio;\n  #ifdef GL_FRAGMENT_PRECISION_HIGH\n  vec2 worldPos = pxToWorld(currentPoint);\n  if (\n    abs(u_renderExtent[0] - u_renderExtent[2]) > 0.0 && (\n      worldPos[0] < u_renderExtent[0] ||\n      worldPos[1] < u_renderExtent[1] ||\n      worldPos[0] > u_renderExtent[2] ||\n      worldPos[1] > u_renderExtent[3]\n    )\n  ) {\n    discard;\n  }\n  #endif\n  if (${this.discardExpression_}) { discard; }\n\n  float segmentLength = length(v_segmentEnd - v_segmentStart);\n  vec2 segmentTangent = (v_segmentEnd - v_segmentStart) / segmentLength;\n  vec2 segmentNormal = vec2(-segmentTangent.y, segmentTangent.x);\n  vec2 startToPoint = currentPoint - v_segmentStart;\n  float currentLengthPx = max(0., min(dot(segmentTangent, startToPoint), segmentLength)) + v_distanceOffsetPx; \n  float currentRadiusPx = abs(dot(segmentNormal, startToPoint));\n  float currentRadiusRatio = dot(segmentNormal, startToPoint) * 2. / v_width;\n  vec4 color = ${this.strokeColorExpression_} * u_globalAlpha;\n  float capType = ${this.strokeCapExpression_};\n  float joinType = ${this.strokeJoinExpression_};\n  float segmentStartDistance = computeSegmentPointDistance(currentPoint, v_segmentStart, v_segmentEnd, v_width, v_angleStart, capType, joinType);\n  float segmentEndDistance = computeSegmentPointDistance(currentPoint, v_segmentEnd, v_segmentStart, v_width, v_angleEnd, capType, joinType);\n  float distance = max(\n    segmentDistanceField(currentPoint, v_segmentStart, v_segmentEnd, v_width),\n    max(segmentStartDistance, segmentEndDistance)\n  );\n  distance = max(distance, ${this.strokeDistanceFieldExpression_});\n  gl_FragColor = color * smoothstep(0., -1., distance);\n  if (u_hitDetection > 0) {\n    if (gl_FragColor.a < 0.1) { discard; };\n    gl_FragColor = v_hitColor;\n  }\n}` : null
		}
		getFillVertexShader() {
			return this.hasFill_ ? `${Sw}\n${this.uniforms_.map((function (t) { return "uniform " + t + ";" })).join("\n")}\nattribute vec2 a_position;\nattribute vec4 a_hitColor;\n${this.attributes_.map((function (t) { return "attribute " + t + ";" })).join("\n")}\nvarying vec4 v_hitColor;\n${this.varyings_.map((function (t) { return "varying " + t.type + " " + t.name + ";" })).join("\n")}\n${this.vertexShaderFunctions_.join("\n")}\nvoid main(void) {\n  gl_Position = u_projectionMatrix * vec4(a_position, u_depth, 1.0);\n  v_hitColor = a_hitColor;\n${this.varyings_.map((function (t) { return "  " + t.name + " = " + t.expression + ";" })).join("\n")}\n}` : null
		}
		getFillFragmentShader() {
			return this.hasFill_ ? `${Sw}\n${this.uniforms_.map((function (t) { return "uniform " + t + ";" })).join("\n")}\nvarying vec4 v_hitColor;\n${this.varyings_.map((function (t) { return "varying " + t.type + " " + t.name + ";" })).join("\n")}\n${this.fragmentShaderFunctions_.join("\n")}\nvec2 pxToWorld(vec2 pxPos) {\n  vec2 screenPos = 2.0 * pxPos / u_viewportSizePx - 1.0;\n  return (u_screenToWorldMatrix * vec4(screenPos, 0.0, 1.0)).xy;\n}\n\nvec2 worldToPx(vec2 worldPos) {\n  vec4 screenPos = u_projectionMatrix * vec4(worldPos, 0.0, 1.0);\n  return (0.5 * screenPos.xy + 0.5) * u_viewportSizePx;\n}\n\nvoid main(void) {\n  vec2 pxPos = gl_FragCoord.xy / u_pixelRatio;\n  vec2 pxOrigin = worldToPx(u_patternOrigin);\n  #ifdef GL_FRAGMENT_PRECISION_HIGH\n  vec2 worldPos = pxToWorld(pxPos);\n  if (\n    abs(u_renderExtent[0] - u_renderExtent[2]) > 0.0 && (\n      worldPos[0] < u_renderExtent[0] ||\n      worldPos[1] < u_renderExtent[1] ||\n      worldPos[0] > u_renderExtent[2] ||\n      worldPos[1] > u_renderExtent[3]\n    )\n  ) {\n    discard;\n  }\n  #endif\n  if (${this.discardExpression_}) { discard; }\n  gl_FragColor = ${this.fillColorExpression_} * u_globalAlpha;\n  if (u_hitDetection > 0) {\n    if (gl_FragColor.a < 0.1) { discard; };\n    gl_FragColor = v_hitColor;\n  }\n}` : null
		}
	}
	const Tw = "blur",
		Pw = "gradient",
		Rw = "radius",
		Fw = ["#00f", "#0ff", "#0f0", "#ff0", "#f00"];
	var Mw = class extends Pa {
		constructor(t) {
			t = t || {};
			const e = Object.assign({}, t);
			delete e.gradient, delete e.radius, delete e.blur, delete e.weight, super(e), this.gradient_ = null, this.addChangeListener(Pw, this.handleGradientChanged_), this.setGradient(t.gradient ? t.gradient : Fw), this.setBlur(void 0 !== t.blur ? t.blur : 15), this.setRadius(void 0 !== t.radius ? t.radius : 8);
			const i = t.weight ? t.weight : "weight";
			this.weightFunction_ = "string" == typeof i ? function(t) {
				return t.get(i)
			} : i, this.setRenderOrder(null)
		}
		getBlur() {
			return this.get(Tw)
		}
		getGradient() {
			return this.get(Pw)
		}
		getRadius() {
			return this.get(Rw)
		}
		handleGradientChanged_() {
			this.gradient_ = function(t) {
				const e = 1,
					i = 256,
					n = tt(e, i),
					r = n.createLinearGradient(0, 0, e, i),
					s = 1 / (t.length - 1);
				for (let e = 0, i = t.length; e < i; ++e) r.addColorStop(e * s, t[e]);
				return n.fillStyle = r, n.fillRect(0, 0, e, i), n.canvas
			}(this.getGradient())
		}
		setBlur(t) {
			this.set(Tw, t)
		}
		setGradient(t) {
			this.set(Pw, t)
		}
		setRadius(t) {
			this.set(Rw, t)
		}
		createRenderer() {
			const t = (new Cw).addAttribute("float a_prop_weight").addVarying("v_prop_weight", "float", "a_prop_weight").addUniform("float u_size").addUniform("float u_blurSlope").setSymbolSizeExpression("vec2(u_size)").setSymbolColorExpression("vec4(smoothstep(0., 1., (1. - length(coordsPx * 2. / v_quadSizePx)) * u_blurSlope) * v_prop_weight)");
			return new lw(this, {
				className: this.getClassName(),
				attributes: [{
					name: "weight",
					callback: t => {
						const e = this.weightFunction_(t);
						return void 0 !== e ? b(e, 0, 1) : 1
					}
				}],
				uniforms: {
					u_size: () => 2 * (this.get(Rw) + this.get(Tw)),
					u_blurSlope: () => this.get(Rw) / Math.max(1, this.get(Tw))
				},
				hitDetectionEnabled: !0,
				vertexShader: t.getSymbolVertexShader(),
				fragmentShader: t.getSymbolFragmentShader(),
				postProcesses: [{
					fragmentShader: "\n            precision mediump float;\n\n            uniform sampler2D u_image;\n            uniform sampler2D u_gradientTexture;\n            uniform float u_opacity;\n\n            varying vec2 v_texCoord;\n\n            void main() {\n              vec4 color = texture2D(u_image, v_texCoord);\n              gl_FragColor.a = color.a * u_opacity;\n              gl_FragColor.rgb = texture2D(u_gradientTexture, vec2(0.5, color.a)).rgb;\n              gl_FragColor.rgb *= gl_FragColor.a;\n            }",
					uniforms: {
						u_gradientTexture: () => this.gradient_,
						u_opacity: () => this.getOpacity()
					}
				}]
			})
		}
		renderDeclutter() {}
	};

	function Iw(t, e, i) {
		const n = Xo();
		return n.style = t.style,
			function(t, e, i, n) {
				const r = Wo(t, i, e);
				if (Bo(r.type, Io)) throw new Error("No matching type was found");
				if (!Uo(e, r.type)) {
					const t = jo(e),
						i = jo(r.type);
					throw new Error(`Expected expression to be of type ${t}, got ${i}`)
				}
				return bw(r, e, n)
			}(e, i, n, t)
	}

	function Lw(t) {
		const e = j(t);
		return [256 * e[0] + e[1], 256 * e[2] + Math.round(255 * e[3])]
	}

	function kw(t) {
		return t === Do ? 2 : t === Oo ? 4 : 1
	}

	function Aw(t) {
		const e = kw(t);
		return e > 1 ? `vec${e}` : "float"
	}

	function Dw(t) {
		return (JSON.stringify(t).split("").reduce(((t, e) => (t << 5) - t + e.charCodeAt(0)), 0) >>> 0).toString()
	}

	function Ow(t, e, i, n) {
		let r;
		if (`${n}radius` in t && "icon-" !== n ? r = Iw(i, t[`${n}radius`], ko) : `${n}radius1` in t && "shape-" === n && (r = Iw(i, t[`${n}radius1`], ko)), void 0 !== r && (`${n}stroke-width` in t && (r = `(${r} + ${Iw(i, t[`${n}stroke-width`], ko)} * 0.5)`), e.setSymbolSizeExpression(`vec2(${r} * 2. + 0.5)`)), `${n}scale` in t) {
			const r = Iw(i, t[`${n}scale`], ko | Oo);
			e.setSymbolSizeExpression(`${e.getSymbolSizeExpression()} * ${r}`)
		}
		`${n}displacement` in t && e.setSymbolOffsetExpression(Iw(i, t[`${n}displacement`], Oo)), `${n}rotation` in t && e.setSymbolRotationExpression(Iw(i, t[`${n}rotation`], ko)), `${n}rotate-with-view` in t && e.setSymbolRotateWithView(!!t[`${n}rotate-with-view`])
	}

	function zw(t, e, i, n, r) {
		let s = "vec4(0.)";
		if (null !== e && (s = e), null !== i && null !== n) {
			s = `mix(${i}, ${s}, ${`smoothstep(-${n} + 0.63, -${n} - 0.58, ${t})`})`
		}
		let o = `${s} * ${`(1.0 - smoothstep(-0.63, 0.58, ${t}))`}`;
		return null !== r && (o = `${o} * ${r}`), o
	}

	function Gw(t, e, i, n, r) {
		const s = new Image;
		let o;
		return s.crossOrigin = void 0 === t[`${n}cross-origin`] ? "anonymous" : t[`${n}cross-origin`], s.src = t[`${n}src`], s.complete && s.width && s.height ? o = dw([s.width, s.height]) : (i[`u_texture${r}_size`] = () => s.complete ? [s.width, s.height] : [0, 0], e.addUniform(`vec2 u_texture${r}_size`), o = `u_texture${r}_size`), i[`u_texture${r}`] = s, e.addUniform(`sampler2D u_texture${r}`), o
	}

	function Nw(t, e, i, n, r) {
		let s = Iw(i, t[`${e}offset`], Oo);
		if (`${e}offset-origin` in t) switch (t[`${e}offset-origin`]) {
			case "top-right":
				s = `vec2(${n}.x, 0.) + ${r} * vec2(-1., 0.) + ${s} * vec2(-1., 1.)`;
				break;
			case "bottom-left":
				s = `vec2(0., ${n}.y) + ${r} * vec2(0., -1.) + ${s} * vec2(1., -1.)`;
				break;
			case "bottom-right":
				s = `${n} - ${r} - ${s}`
		}
		return s
	}

	function jw(t) {
		const e = {
				inFragmentShader: !1,
				properties: {},
				variables: {},
				functions: {},
				style: t
			},
			i = {
				inFragmentShader: !0,
				variables: e.variables,
				properties: {},
				functions: {},
				style: t
			},
			n = new Cw,
			r = {};
		if ("icon-src" in t ? function(t, e, i, n, r) {
				let s = "vec4(1.0)";
				"icon-color" in t && (s = Iw(r, t["icon-color"], Do)), "icon-opacity" in t && (s = `${s} * ${Iw(r, t["icon-opacity"], ko)}`);
				const o = Dw(t["icon-src"]),
					a = Gw(t, e, i, "icon-", o);
				if (e.setSymbolColorExpression(`${s} * samplePremultiplied(u_texture${o}, v_texCoord)`).setSymbolSizeExpression(a), "icon-width" in t && "icon-height" in t && e.setSymbolSizeExpression(`vec2(${Iw(n, t["icon-width"], ko)}, ${Iw(n, t["icon-height"], ko)})`), "icon-offset" in t && "icon-size" in t) {
					const i = Iw(n, t["icon-size"], Oo),
						r = e.getSymbolSizeExpression();
					e.setSymbolSizeExpression(i);
					const s = Nw(t, "icon-", n, "v_quadSizePx", i);
					e.setTextureCoordinateExpression(`(vec4((${s}).xyxy) + vec4(0., 0., ${i})) / (${r}).xyxy`)
				}
				if (Ow(t, e, n, "icon-"), "icon-anchor" in t) {
					const i = Iw(n, t["icon-anchor"], Oo);
					let r, s = "1.0";
					"icon-scale" in t && (s = Iw(n, t["icon-scale"], ko | Oo)), r = "pixels" === t["icon-anchor-x-units"] && "pixels" === t["icon-anchor-y-units"] ? `${i} * ${s}` : "pixels" === t["icon-anchor-x-units"] ? `${i} * vec2(vec2(${s}).x, v_quadSizePx.y)` : "pixels" === t["icon-anchor-y-units"] ? `${i} * vec2(v_quadSizePx.x, vec2(${s}).x)` : `${i} * v_quadSizePx`;
					let o = `v_quadSizePx * vec2(0.5, -0.5) + ${r} * vec2(-1., 1.)`;
					if ("icon-anchor-origin" in t) switch (t["icon-anchor-origin"]) {
						case "top-right":
							o = `v_quadSizePx * -0.5 + ${r}`;
							break;
						case "bottom-left":
							o = `v_quadSizePx * 0.5 - ${r}`;
							break;
						case "bottom-right":
							o = `v_quadSizePx * vec2(-0.5, 0.5) + ${r} * vec2(1., -1.)`
					}
					e.setSymbolOffsetExpression(`${e.getSymbolOffsetExpression()} + ${o}`)
				}
			}(t, n, r, e, i) : "shape-points" in t ? function(t, e, i, n, r) {
				r.functions.round = "float round(float v) {\n  return sign(v) * floor(abs(v) + 0.5);\n}", r.functions.starDistanceField = "float starDistanceField(vec2 point, float numPoints, float radiusIn, float radiusOut, float angle) {\n  float startAngle = -PI * 0.5 + angle; // tip starts upwards and rotates clockwise with angle\n  float c = cos(startAngle);\n  float s = sin(startAngle);\n  vec2 pointRotated = vec2(c * point.x - s * point.y, s * point.x + c * point.y); \n  float alpha = TWO_PI / numPoints; // the angle of one sector\n  float beta = atan(pointRotated.y, pointRotated.x);\n  float gamma = round(beta / alpha) * alpha; // angle in sector\n  c = cos(-gamma);\n  s = sin(-gamma);\n  vec2 inSector = vec2(c * pointRotated.x - s * pointRotated.y, abs(s * pointRotated.x + c * pointRotated.y));\n  vec2 tipToPoint = inSector + vec2(-radiusOut, 0.);\n  vec2 edgeNormal = vec2(radiusIn * sin(alpha * 0.5), -radiusIn * cos(alpha * 0.5) + radiusOut);\n  return dot(normalize(edgeNormal), tipToPoint);\n}", r.functions.regularDistanceField = "float regularDistanceField(vec2 point, float numPoints, float radius, float angle) {\n  float startAngle = -PI * 0.5 + angle; // tip starts upwards and rotates clockwise with angle\n  float c = cos(startAngle);\n  float s = sin(startAngle);\n  vec2 pointRotated = vec2(c * point.x - s * point.y, s * point.x + c * point.y); \n  float alpha = TWO_PI / numPoints; // the angle of one sector\n  float radiusIn = radius * cos(PI / numPoints);\n  float beta = atan(pointRotated.y, pointRotated.x);\n  float gamma = round((beta - alpha * 0.5) / alpha) * alpha + alpha * 0.5; // angle in sector from mid\n  c = cos(-gamma);\n  s = sin(-gamma);\n  vec2 inSector = vec2(c * pointRotated.x - s * pointRotated.y, abs(s * pointRotated.x + c * pointRotated.y));\n  return inSector.x - radiusIn;\n}", Ow(t, e, n, "shape-");
				let s = null;
				"shape-opacity" in t && (s = Iw(r, t["shape-opacity"], ko));
				let o = "coordsPx";
				"shape-scale" in t && (o = `coordsPx / ${Iw(r, t["shape-scale"], ko | Oo)}`);
				let a = null;
				"shape-fill-color" in t && (a = Iw(r, t["shape-fill-color"], Do));
				let l = null;
				"shape-stroke-color" in t && (l = Iw(r, t["shape-stroke-color"], Do));
				let h = null;
				"shape-stroke-width" in t && (h = Iw(r, t["shape-stroke-width"], ko));
				const u = Iw(r, t["shape-points"], ko);
				let c, d = "0.";
				if ("shape-angle" in t && (d = Iw(r, t["shape-angle"], ko)), "shape-radius" in t) {
					let e = Iw(r, t["shape-radius"], ko);
					null !== h && (e = `${e} + ${h} * 0.5`), c = `regularDistanceField(${o}, ${u}, ${e}, ${d})`
				} else {
					let e = Iw(r, t["shape-radius1"], ko),
						i = Iw(r, t["shape-radius2"], ko);
					null !== h && (e = `${e} + ${h} * 0.5`, i = `${i} + ${h} * 0.5`), c = `starDistanceField(${o}, ${u}, ${i}, ${e}, ${d})`
				}
				const g = zw(c, a, l, h, s);
				e.setSymbolColorExpression(g)
			}(t, n, 0, e, i) : "circle-radius" in t && function(t, e, i, n, r) {
				r.functions.circleDistanceField = "float circleDistanceField(vec2 point, float radius) {\n  return length(point) - radius;\n}", Ow(t, e, n, "circle-");
				let s = null;
				"circle-opacity" in t && (s = Iw(r, t["circle-opacity"], ko));
				let o = "coordsPx";
				"circle-scale" in t && (o = `coordsPx / ${Iw(r, t["circle-scale"], ko | Oo)}`);
				let a = null;
				"circle-fill-color" in t && (a = Iw(r, t["circle-fill-color"], Do));
				let l = null;
				"circle-stroke-color" in t && (l = Iw(r, t["circle-stroke-color"], Do));
				let h = Iw(r, t["circle-radius"], ko),
					u = null;
				"circle-stroke-width" in t && (u = Iw(r, t["circle-stroke-width"], ko), h = `(${h} + ${u} * 0.5)`);
				const c = zw(`circleDistanceField(${o}, ${h})`, a, l, u, s);
				e.setSymbolColorExpression(c)
			}(t, n, 0, e, i), function(t, e, i, n, r) {
				if ("stroke-color" in t && e.setStrokeColorExpression(Iw(r, t["stroke-color"], Do)), "stroke-pattern-src" in t) {
					const n = Dw(t["stroke-pattern-src"]),
						s = Gw(t, e, i, "stroke-pattern-", n);
					let o = s,
						a = "vec2(0.)";
					"stroke-pattern-offset" in t && "stroke-pattern-size" in t && (o = Iw(r, t["stroke-pattern-size"], Oo), a = Nw(t, "stroke-pattern-", r, s, o));
					let l = "0.";
					"stroke-pattern-spacing" in t && (l = Iw(r, t["stroke-pattern-spacing"], ko)), r.functions.sampleStrokePattern = "vec4 sampleStrokePattern(sampler2D texture, vec2 textureSize, vec2 textureOffset, vec2 sampleSize, float spacingPx, float currentLengthPx, float currentRadiusRatio) {\n      float currentLengthScaled = currentLengthPx * sampleSize.y / v_width;\n      float spacingScaled = spacingPx * sampleSize.y / v_width;\n      float uCoordPx = mod(currentLengthScaled, (sampleSize.x + spacingScaled));\n      float vCoordPx = (currentRadiusRatio * 0.5 + 0.5) * sampleSize.y;\n      vec2 texCoord = (vec2(uCoordPx, vCoordPx) + textureOffset) / textureSize;\n      return uCoordPx > sampleSize.x ? vec4(0.) : samplePremultiplied(texture, texCoord);\n    }";
					const h = `u_texture${n}`;
					let u = "1.";
					"stroke-color" in t && (u = e.getStrokeColorExpression()), e.setStrokeColorExpression(`${u} * sampleStrokePattern(${h}, ${s}, ${a}, ${o}, ${l}, currentLengthPx, currentRadiusRatio)`)
				}
				if ("stroke-width" in t && e.setStrokeWidthExpression(Iw(n, t["stroke-width"], ko)), "stroke-offset" in t && e.setStrokeOffsetExpression(Iw(n, t["stroke-offset"], ko)), "stroke-line-cap" in t && e.setStrokeCapExpression(Iw(n, t["stroke-line-cap"], Ao)), "stroke-line-join" in t && e.setStrokeJoinExpression(Iw(n, t["stroke-line-join"], Ao)), "stroke-miter-limit" in t && e.setStrokeMiterLimitExpression(Iw(n, t["stroke-miter-limit"], ko)), "stroke-line-dash" in t) {
					r.functions.getSingleDashDistance = `float getSingleDashDistance(float distance, float radius, float dashOffset, float dashLength, float dashLengthTotal, float capType) {\n  float localDistance = mod(distance, dashLengthTotal);\n  float distanceSegment = abs(localDistance - dashOffset - dashLength * 0.5) - dashLength * 0.5;\n  distanceSegment = min(distanceSegment, dashLengthTotal - localDistance);\n  if (capType == ${_w("square")}) {\n    distanceSegment -= v_width * 0.5;\n  } else if (capType == ${_w("round")}) {\n    distanceSegment = min(distanceSegment, sqrt(distanceSegment * distanceSegment + radius * radius) - v_width * 0.5);\n  }\n  return distanceSegment;\n}`;
					let i = t["stroke-line-dash"].map((t => Iw(r, t, ko)));
					i.length % 2 == 1 && (i = [...i, ...i]);
					let s = "0.";
					"stroke-line-dash-offset" in t && (s = Iw(n, t["stroke-line-dash-offset"], ko));
					const o = `dashDistanceField_${Dw(t["stroke-line-dash"])}`,
						a = i.map(((t, e) => `float dashLength${e} = ${t};`)),
						l = i.map(((t, e) => `dashLength${e}`)).join(" + ");
					let h = "0.",
						u = `getSingleDashDistance(distance, radius, ${h}, dashLength0, totalDashLength, capType)`;
					for (let t = 2; t < i.length; t += 2) h = `${h} + dashLength${t - 2} + dashLength${t - 1}`, u = `min(${u}, getSingleDashDistance(distance, radius, ${h}, dashLength${t}, totalDashLength, capType))`;
					r.functions[o] = `float ${o}(float distance, float radius, float capType) {\n  ${a.join("\n  ")}\n  float totalDashLength = ${l};\n  return ${u};\n}`, e.setStrokeDistanceFieldExpression(`${o}(currentLengthPx + ${s}, currentRadiusPx, capType)`)
				}
			}(t, n, r, e, i), function(t, e, i, n, r) {
				if ("fill-color" in t && e.setFillColorExpression(Iw(r, t["fill-color"], Do)), "fill-pattern-src" in t) {
					const n = Dw(t["fill-pattern-src"]),
						s = Gw(t, e, i, "fill-pattern-", n);
					let o = s,
						a = "vec2(0.)";
					"fill-pattern-offset" in t && "fill-pattern-size" in t && (o = Iw(r, t["fill-pattern-size"], Oo), a = Nw(t, "fill-pattern-", r, s, o)), r.functions.sampleFillPattern = "vec4 sampleFillPattern(sampler2D texture, vec2 textureSize, vec2 textureOffset, vec2 sampleSize, vec2 pxOrigin, vec2 pxPosition) {\n  float scaleRatio = pow(2., mod(u_zoom + 0.5, 1.) - 0.5);\n  vec2 samplePos = mod((pxPosition - pxOrigin) / scaleRatio, sampleSize);\n  samplePos.y = sampleSize.y - samplePos.y; // invert y axis so that images appear upright\n  return samplePremultiplied(texture, (samplePos + textureOffset) / textureSize);\n}";
					const l = `u_texture${n}`;
					let h = "1.";
					"fill-color" in t && (h = e.getFillColorExpression()), e.setFillColorExpression(`${h} * sampleFillPattern(${l}, ${s}, ${a}, ${o}, pxOrigin, pxPos)`)
				}
			}(t, n, r, 0, i), t.filter) {
			const e = Iw(i, t.filter, Lo);
			n.setFragmentDiscardExpression(`!${e}`)
		}
		Object.keys(i.variables).forEach((function(e) {
			const s = i.variables[e],
				o = yw(s.name);
			let a;
			n.addUniform(`${Aw(s.type)} ${o}`), a = s.type === Ao ? () => mw(t.variables[s.name]) : s.type === Do ? () => Lw([...j(t.variables[s.name] || "#eee")]) : s.type === Lo ? () => t.variables[s.name] ? 1 : 0 : () => t.variables[s.name], r[o] = a
		})), Object.keys(i.properties).forEach((function(t) {
			const r = i.properties[t];
			e.properties[t] || (e.properties[t] = r);
			let s = Aw(r.type),
				o = `a_prop_${r.name}`;
			r.type === Do && (s = "vec4", o = `unpackColor(${o})`, n.addVertexShaderFunction("vec4 unpackColor(vec2 packedColor) {\n  return fract(packedColor[1] / 256.0) * vec4(\n    fract(floor(packedColor[0] / 256.0) / 256.0),\n    fract(packedColor[0] / 256.0),\n    fract(floor(packedColor[1] / 256.0) / 256.0),\n    1.0\n  );\n}")), n.addVarying(`v_prop_${r.name}`, s, o)
		})), Object.keys(e.properties).forEach((function(t) {
			const i = e.properties[t];
			n.addAttribute(`${Aw(i.type)} a_prop_${i.name}`)
		}));
		const s = Object.keys(e.properties).map((function(t) {
			const i = e.properties[t];
			let n;
			return n = i.evaluator ? i.evaluator : i.type === Ao ? t => mw(t.get(i.name)) : i.type === Do ? t => Lw([...j(t.get(i.name) || "#eee")]) : i.type === Lo ? t => t.get(i.name) ? 1 : 0 : t => t.get(i.name), {
				name: i.name,
				size: kw(i.type),
				callback: n
			}
		}));
		for (const t in e.functions) n.addVertexShaderFunction(e.functions[t]);
		for (const t in i.functions) n.addFragmentShaderFunction(i.functions[t]);
		return {
			builder: n,
			attributes: s.reduce(((t, e) => ({
				...t,
				[e.name]: {
					callback: e.callback,
					size: e.size
				}
			})), {}),
			uniforms: r
		}
	}
	var Uw = class extends uo {
		constructor(t) {
			super(Object.assign({}, t)), this.parseResult_ = jw(t.style), this.styleVariables_ = t.style.variables || {}, this.hitDetectionDisabled_ = !!t.disableHitDetection
		}
		createRenderer() {
			const t = Object.keys(this.parseResult_.attributes).map((t => ({
				name: t,
				...this.parseResult_.attributes[t]
			})));
			return new lw(this, {
				vertexShader: this.parseResult_.builder.getSymbolVertexShader(),
				fragmentShader: this.parseResult_.builder.getSymbolFragmentShader(),
				hitDetectionEnabled: !this.hitDetectionDisabled_,
				uniforms: this.parseResult_.uniforms,
				attributes: t
			})
		}
		updateStyleVariables(t) {
			Object.assign(this.styleVariables_, t), this.changed()
		}
	};
	var Bw = class extends qc {
		constructor(t) {
			const e = void 0 !== t.hidpi && t.hidpi;
			super({
				cacheSize: t.cacheSize,
				crossOrigin: "anonymous",
				interpolate: t.interpolate,
				opaque: !0,
				projection: yn("EPSG:3857"),
				reprojectionErrorThreshold: t.reprojectionErrorThreshold,
				state: "loading",
				tileLoadFunction: t.tileLoadFunction,
				tilePixelRatio: e ? 2 : 1,
				wrapX: void 0 === t.wrapX || t.wrapX,
				transition: t.transition,
				zDirection: t.zDirection
			}), this.hidpi_ = e, this.culture_ = void 0 !== t.culture ? t.culture : "en-us", this.maxZoom_ = void 0 !== t.maxZoom ? t.maxZoom : -1, this.apiKey_ = t.key, this.imagerySet_ = t.imagerySet, this.placeholderTiles_ = t.placeholderTiles;
			const i = "https://dev.virtualearth.net/REST/v1/Imagery/Metadata/" + this.imagerySet_ + "?uriScheme=https&include=ImageryProviders&key=" + this.apiKey_ + "&c=" + this.culture_;
			fetch(i).then((t => t.json())).then((t => this.handleImageryMetadataResponse(t)))
		}
		getApiKey() {
			return this.apiKey_
		}
		getImagerySet() {
			return this.imagerySet_
		}
		handleImageryMetadataResponse(t) {
			if (200 != t.statusCode || "OK" != t.statusDescription || "ValidCredentials" != t.authenticationResultCode || 1 != t.resourceSets.length || 1 != t.resourceSets[0].resources.length) return void this.setState("error");
			const e = t.resourceSets[0].resources[0],
				i = -1 == this.maxZoom_ ? e.zoomMax : this.maxZoom_,
				n = zc(this.getProjection()),
				r = this.hidpi_ ? 2 : 1,
				s = e.imageWidth == e.imageHeight ? e.imageWidth / r : [e.imageWidth / r, e.imageHeight / r],
				o = Ac({
					extent: n,
					minZoom: e.zoomMin,
					maxZoom: i,
					tileSize: s
				});
			this.tileGrid = o;
			const a = this.culture_,
				l = this.hidpi_,
				h = this.placeholderTiles_;
			if (this.tileUrlFunction = xu(e.imageUrlSubdomains.map((function(t) {
					const i = [0, 0, 0],
						n = e.imageUrl.replace("{subdomain}", t).replace("{culture}", a);
					return function(t, e, r) {
						if (!t) return;
						ms(t[0], t[1], t[2], i);
						const s = new URL(n.replace("{quadkey}", function(t) {
								const e = t[0],
									i = new Array(e);
								let n, r, s = 1 << e - 1;
								for (n = 0; n < e; ++n) r = 48, t[1] & s && (r += 1), t[2] & s && (r += 2), i[n] = String.fromCharCode(r), s >>= 1;
								return i.join("")
							}(i))),
							o = s.searchParams;
						return l && (o.set("dpi", "d1"), o.set("device", "mobile")), !0 === h ? o.delete("n") : !1 === h && o.set("n", "z"), s.toString()
					}
				}))), e.imageryProviders) {
				const t = Tn(yn("EPSG:4326"), this.getProjection());
				this.setAttributions((i => {
					const n = [],
						r = i.viewState,
						s = this.getTileGrid(),
						o = s.getZForResolution(r.resolution, this.zDirection),
						a = s.getTileCoordForCoordAndZ(r.center, o)[0];
					return e.imageryProviders.map((function(e) {
						let r = !1;
						const s = e.coverageAreas;
						for (let e = 0, n = s.length; e < n; ++e) {
							const n = s[e];
							if (a >= n.zoomMin && a <= n.zoomMax) {
								const e = n.bbox;
								if (Ci(Pi([e[1], e[0], e[3], e[2]], t), i.extent)) {
									r = !0;
									break
								}
							}
						}
						r && n.push(e.attribution)
					})), n.push('<a class="ol-attribution-bing-tos" href="https://www.microsoft.com/maps/product/terms.html" target="_blank">Terms of Use</a>'), n
				}))
			}
			this.setState("ready")
		}
	};
	var $w = class extends qc {
		constructor(t) {
			const e = void 0 !== (t = t || {}).projection ? t.projection : "EPSG:3857",
				i = void 0 !== t.tileGrid ? t.tileGrid : Ac({
					extent: zc(e),
					maxResolution: t.maxResolution,
					maxZoom: t.maxZoom,
					minZoom: t.minZoom,
					tileSize: t.tileSize
				});
			super({
				attributions: t.attributions,
				cacheSize: t.cacheSize,
				crossOrigin: t.crossOrigin,
				interpolate: t.interpolate,
				opaque: t.opaque,
				projection: e,
				reprojectionErrorThreshold: t.reprojectionErrorThreshold,
				tileGrid: i,
				tileLoadFunction: t.tileLoadFunction,
				tilePixelRatio: t.tilePixelRatio,
				tileUrlFunction: t.tileUrlFunction,
				url: t.url,
				urls: t.urls,
				wrapX: void 0 === t.wrapX || t.wrapX,
				transition: t.transition,
				attributionsCollapsible: t.attributionsCollapsible,
				zDirection: t.zDirection
			}), this.gutter_ = void 0 !== t.gutter ? t.gutter : 0
		}
		getGutter() {
			return this.gutter_
		}
	};

	function Vw(t, e) {
		const i = [];
		Object.keys(e).forEach((function(t) {
			null !== e[t] && void 0 !== e[t] && i.push(t + "=" + encodeURIComponent(e[t]))
		}));
		const n = i.join("&");
		return t = t.replace(/[?&]$/, ""), (t += t.includes("?") ? "&" : "?") + n
	}
	var Xw = class extends Sc {
		constructor(t) {
			const e = void 0 !== t.crossOrigin ? t.crossOrigin : null,
				i = void 0 !== t.imageLoadFunction ? t.imageLoadFunction : wc;
			super({
				attributions: t.attributions,
				interpolate: t.interpolate,
				projection: yn(t.projection)
			}), this.url_ = t.url, this.imageExtent_ = t.imageExtent, this.image = null, this.image = new Te(this.imageExtent_, void 0, 1, function(t) {
				const e = t.load || Ce,
					i = t.imageExtent,
					n = new Image;
				return null !== t.crossOrigin && (n.crossOrigin = t.crossOrigin), () => e(n, t.url).then((t => {
					const e = Ei(i) / t.width,
						n = vi(i) / t.height;
					return {
						image: t,
						extent: i,
						resolution: e !== n ? [e, n] : n,
						pixelRatio: 1
					}
				}))
			}({
				url: t.url,
				imageExtent: t.imageExtent,
				crossOrigin: e,
				load: (t, e) => (this.image.setImage(t), i(this.image, e), Ce(t))
			})), this.image.addEventListener(St, this.handleImageChange.bind(this))
		}
		getImageExtent() {
			return this.imageExtent_
		}
		getImageInternal(t, e, i, n) {
			return Ci(t, this.image.getExtent()) ? this.image : null
		}
		getUrl() {
			return this.url_
		}
	};
	const Ww = "1.3.0",
		qw = [101, 101];

	function Zw(t, e, i, n, r) {
		r.WIDTH = i[0], r.HEIGHT = i[1];
		const s = n.getAxisOrientation();
		let o;
		const a = qi(r.VERSION, "1.3") >= 0;
		return r[a ? "CRS" : "SRS"] = n.getCode(), o = a && "ne" == s.substr(0, 2) ? [e[1], e[0], e[3], e[2]] : e, r.BBOX = o.join(","), Vw(t, r)
	}

	function Yw(t, e, i, n, r, s, o) {
		s = Object.assign({
			REQUEST: "GetMap"
		}, s);
		const a = e / i,
			l = [M(Ei(t) / a, mc), M(vi(t) / a, mc)];
		if (1 != i) switch (o) {
			case "geoserver":
				const t = 90 * i + .5 | 0;
				"FORMAT_OPTIONS" in s ? s.FORMAT_OPTIONS += ";dpi:" + t : s.FORMAT_OPTIONS = "dpi:" + t;
				break;
			case "mapserver":
				s.MAP_RESOLUTION = 90 * i;
				break;
			case "carmentaserver":
			case "qgis":
				s.DPI = 90 * i;
				break;
			default:
				throw new Error("Unknown `serverType` configured")
		}
		return Zw(r, t, l, n, s)
	}

	function Kw(t, e) {
		return Object.assign({
			REQUEST: e,
			SERVICE: "WMS",
			VERSION: Ww,
			FORMAT: "image/png",
			STYLES: "",
			TRANSPARENT: !0
		}, t)
	}
	var Hw = class extends Sc {
		constructor(t) {
			super({
				attributions: (t = t || {}).attributions,
				interpolate: t.interpolate,
				projection: t.projection,
				resolutions: t.resolutions
			}), this.crossOrigin_ = void 0 !== t.crossOrigin ? t.crossOrigin : null, this.url_ = t.url, this.imageLoadFunction_ = void 0 !== t.imageLoadFunction ? t.imageLoadFunction : wc, this.params_ = t.params, this.serverType_ = t.serverType, this.hidpi_ = void 0 === t.hidpi || t.hidpi, this.renderedRevision_ = 0, this.ratio_ = void 0 !== t.ratio ? t.ratio : 1.5, this.loaderProjection_ = null
		}
		getFeatureInfoUrl(t, e, i, n) {
			const r = yn(i),
				s = this.getProjection();
			s && s !== r && (e = dc(s, r, t, e), t = Rn(t, r, s));
			return function(t, e, i) {
				if (void 0 === t.url) return;
				const n = yn(t.projection || "EPSG:3857"),
					r = yi(e, i, 0, qw),
					s = {
						QUERY_LAYERS: t.params.LAYERS,
						INFO_FORMAT: "application/json"
					};
				Object.assign(s, Kw(t.params, "GetFeatureInfo"), t.params);
				const o = I((e[0] - r[0]) / i, mc),
					a = I((r[3] - e[1]) / i, mc),
					l = qi(s.VERSION, "1.3") >= 0;
				return s[l ? "I" : "X"] = o, s[l ? "J" : "Y"] = a, Zw(t.url, r, qw, n, s)
			}({
				url: this.url_,
				params: {
					...this.params_,
					...n
				},
				projection: s || r
			}, t, e)
		}
		getLegendUrl(t, e) {
			return function(t, e) {
				if (void 0 === t.url) return;
				const i = {
					SERVICE: "WMS",
					VERSION: Ww,
					REQUEST: "GetLegendGraphic",
					FORMAT: "image/png"
				};
				if (void 0 === t.params || void 0 === t.params.LAYER) {
					const e = t.params.LAYERS;
					if (Array.isArray(e) && 1 !== e.length) return;
					i.LAYER = e
				}
				if (void 0 !== e) {
					const n = yn(t.projection || "EPSG:3857").getMetersPerUnit() || 1,
						r = 28e-5;
					i.SCALE = e * n / r
				}
				return Object.assign(i, t.params), Vw(t.url, i)
			}({
				url: this.url_,
				params: {
					...this.params_,
					...e
				}
			}, t)
		}
		getParams() {
			return this.params_
		}
		getImageInternal(t, e, i, n) {
			return void 0 === this.url_ ? null : (this.loader && this.loaderProjection_ === n || (this.loaderProjection_ = n, this.loader = function(t) {
				const e = void 0 === t.hidpi || t.hidpi,
					i = yn(t.projection || "EPSG:3857"),
					n = t.ratio || 1.5,
					r = t.load || Ce;
				return (s, o, a) => {
					s = bc(s, o, a, n), 1 == a || e && void 0 !== t.serverType || (a = 1);
					const l = Yw(s, o, a, i, t.url, Kw(t.params, "GetMap"), t.serverType),
						h = new Image;
					return null !== t.crossOrigin && (h.crossOrigin = t.crossOrigin), r(h, l).then((t => ({
						image: t,
						extent: s,
						pixelRatio: a
					})))
				}
			}({
				crossOrigin: this.crossOrigin_,
				params: this.params_,
				projection: n,
				serverType: this.serverType_,
				hidpi: this.hidpi_,
				url: this.url_,
				ratio: this.ratio_,
				load: (t, e) => (this.image.setImage(t), this.imageLoadFunction_(this.image, e), Ce(t))
			})), super.getImageInternal(t, e, i, n))
		}
		getImageLoadFunction() {
			return this.imageLoadFunction_
		}
		getUrl() {
			return this.url_
		}
		setImageLoadFunction(t) {
			this.imageLoadFunction_ = t, this.changed()
		}
		setUrl(t) {
			t != this.url_ && (this.url_ = t, this.loader = null, this.changed())
		}
		updateParams(t) {
			Object.assign(this.params_, t), this.changed()
		}
		changed() {
			this.image = null, super.changed()
		}
	};
	var Jw = class extends $w {
		constructor(t) {
			let e;
			e = void 0 !== (t = t || {}).attributions ? t.attributions : ['&#169; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.'];
			const i = void 0 !== t.crossOrigin ? t.crossOrigin : "anonymous",
				n = void 0 !== t.url ? t.url : "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
			super({
				attributions: e,
				attributionsCollapsible: !1,
				cacheSize: t.cacheSize,
				crossOrigin: i,
				interpolate: t.interpolate,
				maxZoom: void 0 !== t.maxZoom ? t.maxZoom : 19,
				opaque: void 0 === t.opaque || t.opaque,
				reprojectionErrorThreshold: t.reprojectionErrorThreshold,
				tileLoadFunction: t.tileLoadFunction,
				transition: t.transition,
				url: n,
				wrapX: t.wrapX,
				zDirection: t.zDirection
			})
		}
	};
	var Qw = class extends qc {
		constructor(t) {
			t = t || {};
			const e = Object.assign({}, t.params),
				i = !("TRANSPARENT" in e) || e.TRANSPARENT;
			super({
				attributions: t.attributions,
				attributionsCollapsible: t.attributionsCollapsible,
				cacheSize: t.cacheSize,
				crossOrigin: t.crossOrigin,
				interpolate: t.interpolate,
				opaque: !i,
				projection: t.projection,
				reprojectionErrorThreshold: t.reprojectionErrorThreshold,
				tileClass: t.tileClass,
				tileGrid: t.tileGrid,
				tileLoadFunction: t.tileLoadFunction,
				url: t.url,
				urls: t.urls,
				wrapX: void 0 === t.wrapX || t.wrapX,
				transition: t.transition,
				zDirection: t.zDirection
			}), this.gutter_ = void 0 !== t.gutter ? t.gutter : 0, this.params_ = e, this.v13_ = !0, this.serverType_ = t.serverType, this.hidpi_ = void 0 === t.hidpi || t.hidpi, this.tmpExtent_ = [1 / 0, 1 / 0, -1 / 0, -1 / 0], this.updateV13_(), this.setKey(this.getKeyForParams_())
		}
		getFeatureInfoUrl(t, e, i, n) {
			const r = yn(i),
				s = this.getProjection() || r;
			let o = this.getTileGrid();
			o || (o = this.getTileGridForProjection(s));
			const a = Rn(t, r, s),
				l = dc(s, r, t, e),
				h = o.getZForResolution(l, this.zDirection),
				u = o.getResolution(h),
				c = o.getTileCoordForCoordAndZ(a, h);
			if (o.getResolutions().length <= c[0]) return;
			let d = o.getTileCoordExtent(c, this.tmpExtent_);
			const g = this.gutter_;
			0 !== g && (d = Ye(d, u * g, d));
			const p = {
				QUERY_LAYERS: this.params_.LAYERS
			};
			Object.assign(p, Kw(this.params_, "GetFeatureInfo"), n);
			const f = Math.floor((a[0] - d[0]) / u),
				m = Math.floor((d[3] - a[1]) / u);
			return p[this.v13_ ? "I" : "X"] = f, p[this.v13_ ? "J" : "Y"] = m, this.getRequestUrl_(c, d, 1, s || r, p)
		}
		getLegendUrl(t, e) {
			if (void 0 === this.urls[0]) return;
			const i = {
				SERVICE: "WMS",
				VERSION: Ww,
				REQUEST: "GetLegendGraphic",
				FORMAT: "image/png"
			};
			if (void 0 === e || void 0 === e.LAYER) {
				const t = this.params_.LAYERS;
				if (!(!Array.isArray(t) || 1 === t.length)) return;
				i.LAYER = t
			}
			if (void 0 !== t) {
				const e = this.getProjection() ? this.getProjection().getMetersPerUnit() : 1,
					n = 28e-5;
				i.SCALE = t * e / n
			}
			return Object.assign(i, e), Vw(this.urls[0], i)
		}
		getGutter() {
			return this.gutter_
		}
		getParams() {
			return this.params_
		}
		getRequestUrl_(t, e, i, n, r) {
			const s = this.urls;
			if (!s) return;
			let o;
			if (1 == s.length) o = s[0];
			else {
				o = s[P(vs(t), s.length)]
			}
			return Yw(e, (this.tileGrid || this.getTileGridForProjection(n)).getResolution(t[0]), i, n, o, r, this.serverType_)
		}
		getTilePixelRatio(t) {
			return this.hidpi_ && void 0 !== this.serverType_ ? t : 1
		}
		getKeyForParams_() {
			let t = 0;
			const e = [];
			for (const i in this.params_) e[t++] = i + "-" + this.params_[i];
			return e.join("/")
		}
		updateParams(t) {
			Object.assign(this.params_, t), this.updateV13_(), this.setKey(this.getKeyForParams_())
		}
		updateV13_() {
			const t = this.params_.VERSION || Ww;
			this.v13_ = qi(t, "1.3") >= 0
		}
		tileUrlFunction(t, e, i) {
			let n = this.getTileGrid();
			if (n || (n = this.getTileGridForProjection(i)), n.getResolutions().length <= t[0]) return;
			1 == e || this.hidpi_ && void 0 !== this.serverType_ || (e = 1);
			const r = n.getResolution(t[0]);
			let s = n.getTileCoordExtent(t, this.tmpExtent_);
			const o = this.gutter_;
			0 !== o && (s = Ye(s, r * o, s));
			const a = Object.assign({}, Kw(this.params_, "GetMap"));
			return this.getRequestUrl_(t, s, e, i, a)
		}
	};
	Ut.unByKey = jt;
	let tb = {
			Control: ph,
			Zoom: yh,
			Attribution: mh,
			ScaleLine: vm,
			LayerSwitcher: Cm
		},
		eb = {
			GeoJSON: Mu,
			KML: nv,
			MVT: oc
		},
		ib = {
			Group: Zl,
			Tile: Fc,
			Vector: wl,
			VectorTile: Jc,
			WebGLPoints: Uw,
			Heatmap: Mw,
			Image: ku
		},
		nb = {
			LineString: Mr,
			Point: Ar,
			MultiPoint: Or
		},
		rb = {
			Icon: ke,
			Style: ls,
			Text: us,
			Stroke: is,
			Fill: be,
			Circle: ve
		},
		sb = {
			OSM: Jw,
			XYZ: $w,
			TileWMS: Qw,
			BingMaps: Bw,
			Vector: Gl,
			VectorTile: Qc,
			ImageWMS: Hw,
			ImageStatic: Xw
		};
	t.Collection = Rs, t.Feature = De, t.Map = su, t.Observable = Ut, t.Overlay = cu, t.View = lo, t.applyStyle = function(t, e, i = "", n = {}, r = void 0) {
		let s, o, a, l, h = !0;
		return "string" == typeof i || Array.isArray(i) ? l = i : (a = i, l = a.source || a.layers, n = a), "string" == typeof n ? (s = n, a = {}) : (s = n.styleUrl, a = n), !1 === a.updateSource && (h = !1), r || (r = a.resolutions), s || "string" != typeof e || e.trim().startsWith("{") || (s = e), s && (s = s.startsWith("data:") ? location.href : Pf(s, a.accessToken), a = function(t, e) {
			e.accessToken || (e = Object.assign({}, e), new URL(t).searchParams.forEach(((t, i) => {
				e.accessToken = t, e.accessTokenParam = i
			})));
			return e
		}(s, a)), new Promise((function(i, n) {
			(function(t, e) {
				if ("string" != typeof t) return Promise.resolve(t);
				if (!t.trim().startsWith("{")) return zf("Style", t = Pf(t, e.accessToken), e);
				try {
					const e = JSON.parse(t);
					return Promise.resolve(e)
				} catch (t) {
					return Promise.reject(t)
				}
			})(e, a).then((function(e) {
				if (8 != e.version) return n(new Error("glStyle version 8 required."));
				if (!(t instanceof wl || t instanceof Jc)) return n(new Error("Can only apply to VectorLayer or VectorTileLayer"));
				const u = t instanceof Jc ? "vector" : "geojson";
				if (l ? o = Array.isArray(l) ? e.layers.find((function(t) {
						return t.id === l[0]
					})).source : l : (o = Object.keys(e.sources).find((function(t) {
						return e.sources[t].type === u
					})), l = o), !o) return n(new Error(`No ${u} source found in the glStyle.`));

				function c() {
					if (!h) return Promise.resolve();
					if (t instanceof Jc) return function(t, e, i) {
						return new Promise((function(n, r) {
							(function(t, e, i = {}) {
								const n = [e, JSON.stringify(t)].toString();
								let r = Gf[n];
								if (!r || i.transformRequest) {
									let s;
									i.transformRequest && (s = (t, e) => {
										const n = i.transformRequest && i.transformRequest(e, "Tiles") || e;
										if (t instanceof mu) t.setLoader(((e, i, r) => {
											xt((() => n)).then((i => {
												fetch(i).then((t => t.arrayBuffer())).then((i => {
													const n = t.getFormat().readFeatures(i, {
														extent: e,
														featureProjection: r
													});
													t.setFeatures(n)
												})).catch((e => t.setState(Ss.ERROR)))
											}))
										}));
										else {
											const e = t.getImage();
											xt((() => n)).then((i => {
												i instanceof Request ? fetch(i).then((t => t.blob())).then((t => {
													const i = URL.createObjectURL(t);
													e.addEventListener("load", (() => URL.revokeObjectURL(i))), e.addEventListener("error", (() => URL.revokeObjectURL(i))), e.src = i
												})).catch((e => t.setState(Ss.ERROR))) : e.src = i
											}))
										}
									});
									const o = t.url;
									if (o && !t.tiles) {
										const n = Rf(o, i.accessToken, i.accessTokenParam || "access_token", e || location.href);
										if (o.startsWith("mapbox://")) r = Promise.resolve({
											tileJson: Object.assign({}, t, {
												url: void 0,
												tiles: vu(n)
											}),
											tileLoadFunction: s
										});
										else {
											const t = {};
											r = zf("Source", n, i, t).then((function(e) {
												return e.tiles = e.tiles.map((function(n) {
													return "tms" === e.scheme && (n = n.replace("{y}", "{-y}")), Rf(n, i.accessToken, i.accessTokenParam || "access_token", t.request.url)
												})), Promise.resolve({
													tileJson: e,
													tileLoadFunction: s
												})
											}))
										}
									} else t = Object.assign({}, t, {
										tiles: t.tiles.map((function(n) {
											return "tms" === t.scheme && (n = n.replace("{y}", "{-y}")), Rf(n, i.accessToken, i.accessTokenParam || "access_token", e || location.href)
										}))
									}), r = Promise.resolve({
										tileJson: Object.assign({}, t),
										tileLoadFunction: s
									});
									Gf[n] = r
								}
								return r
							})(t, e, i).then((function({
								tileJson: e,
								tileLoadFunction: r
							}) {
								const s = function(t, e, i) {
									const n = new Zc({
											tileJSON: e,
											tileSize: t.tileSize || e.tileSize || 512
										}),
										r = n.getTileJSON(),
										s = n.getTileGrid(),
										o = yn(i.projection || "EPSG:3857"),
										a = function(t, e) {
											const i = t.bounds;
											if (i) {
												const t = En([i[0], i[1]], e),
													n = En([i[2], i[3]], e);
												return [t[0], t[1], n[0], n[1]]
											}
											return yn(e).getExtent()
										}(r, o),
										l = o.getExtent(),
										h = r.minzoom || 0,
										u = r.maxzoom || 22,
										c = {
											attributions: n.getAttributions(),
											projection: o,
											tileGrid: new bs({
												origin: l ? bi(l) : s.getOrigin(0),
												extent: a || s.getExtent(),
												minZoom: h,
												resolutions: mm(o, e.tileSize).slice(0, u + 1),
												tileSize: s.getTileSize(0)
											})
										};
									Array.isArray(r.tiles) ? c.urls = r.tiles : c.url = r.tiles;
									return c
								}(t, e, i);
								s.tileLoadFunction = r, s.format = new oc, n(new Qc(s))
							})).catch(r)
						}))
					}(e.sources[o], s, a).then((function(e) {
						const i = t.getSource();
						if (i ? e !== i && (i.setTileUrlFunction(e.getTileUrlFunction()), "function" == typeof i.setUrls && "function" == typeof e.getUrls && i.setUrls(e.getUrls()), i.format_ || (i.format_ = e.format_), i.getAttributions() || i.setAttributions(e.getAttributions()), i.getTileLoadFunction() === td && i.setTileLoadFunction(e.getTileLoadFunction()), Cn(i.getProjection(), e.getProjection()) && (i.tileGrid = e.getTileGrid())) : t.setSource(e), !isFinite(t.getMaxResolution()) && !isFinite(t.getMinZoom())) {
							const e = t.getSource().getTileGrid();
							t.setMaxResolution(e.getResolution(e.getMinZoom()))
						}
					}));
					const i = e.sources[o];
					let n = t.getSource();
					n && n.get("mapbox-source") === i || (n = function(t, e, i) {
						const n = i.projection ? new Mu({
								dataProjection: i.projection
							}) : new Mu,
							r = t.data,
							s = {};
						if ("string" == typeof r) {
							const s = Rf(r, i.accessToken, i.accessTokenParam || "access_token", e || location.href);
							if (/\{bbox-[0-9a-z-]+\}/.test(s)) {
								const e = (t, e, i) => {
										const n = function(t) {
											const e = t ? t.getCode() : "EPSG:3857";
											return `{bbox-${e.toLowerCase().replace(/[^a-z0-9]/g, "-")}}`
										}(i);
										return s.replace(n, `${t.join(",")}`)
									},
									r = new Gl({
										attributions: t.attribution,
										format: n,
										loader: (t, n, s, o, a) => {
											zf("GeoJSON", "function" == typeof e ? e(t, n, s) : e, i).then((t => {
												const e = r.getFormat().readFeatures(t, {
													featureProjection: s
												});
												r.addFeatures(e), o(e)
											})).catch((e => {
												r.removeLoadedExtent(t), a()
											}))
										},
										strategy: kl
									});
								return r.set("mapbox-source", t), r
							}
							const o = new Gl({
								attributions: t.attribution,
								format: n,
								url: s,
								loader: (t, e, n, r, a) => {
									zf("GeoJSON", s, i).then((t => {
										const e = o.getFormat().readFeatures(t, {
											featureProjection: n
										});
										o.addFeatures(e), r(e)
									})).catch((e => {
										o.removeLoadedExtent(t), a()
									}))
								}
							});
							return o
						}
						s.features = n.readFeatures(r, {
							featureProjection: Ln() || "EPSG:3857"
						});
						const o = new Gl(Object.assign({
							attributions: t.attribution,
							format: n
						}, s));
						return o.set("mapbox-source", t), o
					}(i, s, a));
					const r = t.getSource();
					return r ? n !== r && (r.getAttributions() || r.setAttributions(n.getAttributions()), r.format_ || (r.format_ = n.getFormat()), r.url_ = n.getUrl()) : t.setSource(n), Promise.resolve()
				}
				let d, g, p, f;

				function m() {
					if (f || e.sprite && !g) f ? (t.setStyle(f), c().then(i).catch(n)) : n(new Error("Something went wrong trying to apply style."));
					else {
						if (a.projection && !r) {
							const t = yn(a.projection).getUnits();
							"m" !== t && (r = Af.map((e => e / Fi[t])))
						}
						f = fm(t, e, l, r, g, p, tm, a.getImage), t.getStyle() ? c().then(i).catch(n) : n(new Error(`Nothing to show for source [${o}]`))
					}
				}
				if (e.sprite) {
					const t = new URL(function(t, e, i) {
						const n = Tf(t);
						if (!n) return decodeURI(new URL(t, i).href);
						const r = "sprites/";
						if (0 !== n.indexOf(r)) throw new Error(`unexpected sprites url: ${t}`);
						const s = n.slice(8);
						return `${Cf}/styles/v1/${s}/sprite?access_token=${e}`
					}(e.sprite, a.accessToken, s || location.href));
					d = window.devicePixelRatio >= 1.5 ? .5 : 1;
					const i = .5 == d ? "@2x" : "";
					let r = t.origin + t.pathname + i + ".json" + t.search;
					new Promise((function(e, i) {
						zf("Sprite", r, a).then(e).catch((function(n) {
							r = t.origin + t.pathname + ".json" + t.search, zf("Sprite", r, a).then(e).catch(i)
						}))
					})).then((function(e) {
						if (void 0 === e && n(new Error("No sprites found.")), g = e, p = t.origin + t.pathname + i + ".png" + t.search, a.transformRequest) {
							const t = a.transformRequest(p, "SpriteImage") || p;
							(t instanceof Request || t instanceof Promise) && (p = t)
						}
						m()
					})).catch((function(t) {
						n(new Error(`Sprites cannot be loaded: ${r}: ${t.message}`))
					}))
				} else m()
			})).catch(n)
		}))
	}, t.control = tb, t.format = eb, t.geom = nb, t.interaction = R_, t.layer = ib, t.proj = Nn, t.source = sb, t.sphere = ln, t.style = rb, t.stylefunction = fm, t.tilegrid = Gc, Object.defineProperty(t, "__esModule", {
		value: !0
	})
}));
//# sourceMappingURL=ol-custom.js.map