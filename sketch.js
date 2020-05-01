// Amin Ahmad Ahmadi
// https://github.com/aminahmadahmadi/Dieline.git


let SVGelement

function setup() {
    noCanvas();
    getData()
}

function getData() {
    let Length = int(select("#length").value());
    let Width = int(select("#width").value());
    let Depth = int(select("#depth").value());
    let glueFlap = int(select("#glueFlap").value());
    let tuckFlap = int(select("#tuckFlap").value());
    let svg = split(dielineMaker(Length, Width, Depth, glueFlap, tuckFlap), '\n')

    return {
        l: Length,
        w: Width,
        d: Depth,
        g: glueFlap,
        t: tuckFlap,
        SVGtext: svg
    }
}

function saveSVG() {
    let box = getData();
    saveStrings(box.SVGtext, 'box_' + box.l + '-' + box.w + '-' + box.d + '-' + box.g + '-' + box.t + '.svg.txt')
}

function dielineMaker(Length, Width, Depth, glueFlap, tuckFlap) {
    if (SVGelement) SVGelement.remove();
    SVGelement = createElement("div", svgText(Length, Width, Depth, glueFlap, tuckFlap));
    return svgText(Length, Width, Depth, glueFlap, tuckFlap);
}

function svgText(l, w, d, g, t) {
    let scl = 1;

    let x = 5 + 0.05 * l;

    let _left = 10
    let _top = 10

    let boxH = d + 2 * (w + t - 1);
    let boxW = g + 2 * (l + w);

    let svgTxt = '';
    svgTxt += '<!-- Generator: Amin Ahmad Ahmadi  -->\n';
    svgTxt += '<!-- Length: ' + l + 'mm, Width: ' + w + 'mm, Depth: ' + d + 'mm, glueFlap: ' + g + 'mm, tuckFlap: ' + t + 'mm  -->\n';
    svgTxt += '<svg version = "1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink = "http://www.w3.org/1999/xlink" xmlns:a = "http://maan.studio/"  x="0px" y="0px" width="' + (2 * _left + boxW) + 'mm" height="' + (2 * _top + boxH) + 'mm" viewBox="0 0 ' + scl * (2 * _left + boxW) + ' ' + scl * (2 * _top + boxH) + '" style="enable-background:New 0 0 ' + scl * (2 * _left + boxW) + ' ' + scl * (2 * _top + boxH) + ';"  xml:Space = "preserve" >\n'
    // style
    svgTxt += '<style type="text/css">\n';
    svgTxt += ' .st0{fill:none;stroke:#FFBF00;stroke-width:' + (scl / 2) + ';stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n';
    svgTxt += ' .st1{fill:none;stroke:#888;stroke-width:' + (scl / 2) + ';stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n';
    svgTxt += ' .st2{fill:none;stroke:#ff4823;stroke-width:' + (scl / 2) + ';stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n';
    svgTxt += '</style>\n';

    svgTxt += '<defs>' + '</defs>\n';

    // ------------------------------- Yellow Lines ----------------------------------
    svgTxt += '<g>\n';
    // Yellow 1
    svgTxt += svgLine(g, w + t - 1, g, d + w + t - 1, 'st0', scl, _left, _top);
    // Yellow 2                                                    
    svgTxt += svgLine(g + x, t, l + g - x, t, 'st0', scl, _left, _top);
    // Yellow 3                                                    
    svgTxt += svgLine(g, w + t - 1.5, g + l, w + t - 1.5, 'st0', scl, _left, _top);
    // Yellow 4                                                    
    svgTxt += svgLine(g + l, w + t - 1, g + l, d + w + t - 1, 'st0', scl, _left, _top);
    // Yellow 5
    svgTxt += svgLine(g + l, w + t - 1, g + l + w - 0.65, w + t - 1, 'st0', scl, _left, _top);
    // Yellow 6
    svgTxt += svgLine(g + l + 0.65, d + w + t - 1, g + l + w, d + w + t - 1, 'st0', scl, _left, _top);
    // Yellow 7                                                    
    svgTxt += svgLine(g + l + w, w + t - 1, g + l + w, d + w + t - 1, 'st0', scl, _left, _top);
    // Yellow 8
    svgTxt += svgLine(g + l + w, d + w + t - 1.5, g + l + l + w, d + w + t - 1.5, 'st0', scl, _left, _top);
    // Yellow 9
    svgTxt += svgLine(g + l + w + x, d + w + w + t - 2, g + l + l + w - x, d + w + w + t - 2, 'st0', scl, _left, _top);
    // Yellow 10                                                                
    svgTxt += svgLine(g + l + l + w, w + t - 1, g + l + l + w, d + w + t - 1, 'st0', scl, _left, _top);
    // Yellow 11
    svgTxt += svgLine(g + l + l + w + 0.65, w + t - 1, g + l + l + w + w - 0.75, w + t - 1, 'st0', scl, _left, _top);
    // Yellow 12
    svgTxt += svgLine(g + l + l + w, d + w + t - 1, g + l + l + w + w - 0.75, d + w + t - 1, 'st0', scl, _left, _top);

    svgTxt += '</g>\n';

    // ------------------------------- Gray Lines -------------------------------------
    svgTxt += '<g>\n';
    // Gray 1
    svgTxt += ' <polyline class="st1" points="' +
        scl * (g + _left) + ',' + scl * (_top + (w + t - 1)) + ' ' +
        scl * _left + ',' + scl * (_top + (w + t + 2)) + ' ' +
        scl * _left + ',' + scl * (_top + (d + w + t - 4)) + ' ' +
        scl * (g + _left) + ',' + scl * (_top + (d + w + t - 1)) + ' "/>\n'
    // Gray 2
    svgTxt += svgLine(g, w + t - 1, g, t - 1, 'st1', scl, _left, _top);
    // Gray 3
    svgTxt += ' <polyline class="st1" points="' +
        (scl * (g - 1.5) + scl * _left) + ',' + (scl * _top + scl * (t - 1)) + ' ' +
        (scl * (g + x) + scl * _left) + ',' + (scl * _top + scl * (t - 1)) + ' ' +
        (scl * (g + x) + scl * _left) + ',' + (scl * _top + scl * (t + 2)) + '"/>\n'
    // Gray 4
    svgTxt += ' <path class="st1" d="M' +
        scl * (_left + g + 0.75) + ',' + scl * (_top + (t - 1)) +
        'c ' + scl * -0.5 + ',' + scl * (0.5 - (t / 2)) +
        ' ' + scl * (0.6 * 0.5 * t) + ',' + scl * (-0.85 * t) +
        ' ' + scl * (0.8 * 0.5 * t + 0.16 * t) + ',' + scl * (1 - t) + ' "/>\n'
    // Gray 5
    svgTxt += svgLine(g + 0.75 + 0.8 * 0.5 * t + 0.16 * t, 0, l + g - 0.75 - 0.8 * 0.5 * t - 0.16 * t, 0, 'st1', scl, _left, _top);
    // Gray 6
    svgTxt += ' <path class="st1" d="M' +
        scl * (_left + l + g - 0.75) + ',' + scl * (_top + (t - 1)) +
        'c ' + scl * 0.5 + ',' + scl * (0.5 - (t / 2)) +
        ' ' + scl * (-0.6 * 0.5 * t) + ',' + scl * (-0.85 * t) +
        ' ' + scl * (-0.8 * 0.5 * t - 0.16 * t) + ',' + scl * (1 - t) + ' "/>\n'
    // Gray 7
    svgTxt += ' <polyline class="st1" points="' +
        scl * ((g + l + 1.5) + _left) + ',' + scl * (_top + (t - 1)) +
        ' ' + scl * ((l + g - x) + _left) + ',' + scl * (_top + (t - 1)) +
        ' ' + scl * ((g + l - x) + _left) + ',' + scl * (_top + (t + 2)) + '"/>\n'
    // Gray 8
    svgTxt += svgLine(g + l, w + t - 1, g + l, t - 1, 'st1', scl, _left, _top);
    // Gray 9 
    svgTxt += ' <polyline class="st1" points="' +
        scl * (_left + (g + l)) + ',' + scl * (_top + (w + t - 1)) +
        ' ' + scl * (_left + (g + l + 3)) + ',' + scl * (_top + (w + t - 4)) +
        ' ' + scl * (_left + (g + l + 5)) + ',' + scl * (_top + 0.50 * (w + t - 1)) +
        ' ' + scl * ((g + l + w - 4.5) + _left - 0.65) + ',' + scl * (_top + 0.50 * (w + t - 1)) +
        ' ' + scl * ((g + l + w - 3) + _left - 0.65) + ',' + scl * (_top + (w + t - x - 2)) +
        ' ' + scl * ((g + l + w) + _left - 0.65) + ',' + scl * (_top + (w + t - x + 1)) +
        ' ' + scl * ((g + l + w) + _left - 0.65) + ',' + scl * (_top + (w + t - 1)) + ' "/>\n'
    // Gray 10
    svgTxt += svgLine(g + l + w - 0.65, w + t - 1, g + l + l + w + 0.65, w + t - 1, 'st1', scl, _left, _top)
    // Gray 11 
    svgTxt += ' <polyline class="st1" points="' +
        scl * (_left + (g + l + l + w) + 0.65) + ',' + scl * (_top + (w + t - 1)) +
        ' ' + scl * (_left + (g + l + l + w) + 0.65) + ',' + (scl * _top + scl * (w + t - x + 1)) +
        ' ' + scl * (_left + (g + l + l + w + 3) + 0.65) + ',' + scl * (_top + (w + t - x - 2)) +
        ' ' + scl * (_left + (g + l + l + w + 4.5) + 0.65) + ',' + scl * (_top + 0.50 * (w + t - 1)) +
        ' ' + scl * (_left + (g + l + l + w + w - 5) - 0.75) + ',' + scl * (_top + 0.50 * (w + t - 1)) +
        ' ' + scl * (_left + (g + l + l + w + w - 3) - 0.75) + ',' + scl * (_top + (w + t - 4)) +
        ' ' + scl * (_left + (g + l + l + w + w) - 0.75) + ',' + scl * (_top + (w + t - 1)) + ' "/>\n'
    // Gray 12                                                             
    svgTxt += svgLine(g + l + l + w + w - 0.75, w + t - 1, g + l + l + w + w - 0.75, d + w + t - 1, 'st1', scl, _left, _top);
    // Gray 13 
    svgTxt += ' <polyline class="st1" points="' +
        scl * (_left + l + w + g + l) + ',' + scl * (_top + d + w + t - 1) + ' ' +
        scl * (_left + l + w + g + l + 3) + ',' + scl * (_top + d + w + t + 2) + ' ' +
        scl * (_left + l + w + g + l + 5) + ',' + scl * (_top + d + 1.5 * (w + t - 1)) + ' ' +
        scl * (_left + l + w + g + l + w - 4.5 - 0.75) + ',' + scl * (_top + d + 1.50 * (w + t - 1)) + ' ' +
        scl * (_left + l + w + g + l + w - 3 - 0.75) + ',' + scl * (_top + d + w + t + x) + ' ' +
        scl * (_left + l + w + g + l + w - 0.75) + ',' + scl * (_top + d + w + t + x - 3) + ' ' +
        scl * (_left + l + w + g + l + w - 0.75) + ',' + scl * (_top + d + w + t - 1) + ' "/>\n'
    // Gray 14 
    svgTxt += svgLine(g + l + l + w, w + t + d - 1, g + l + l + w, w + t + d + w - 1, 'st1', scl, _left, _top);
    // Gray 15 
    svgTxt += ' <polyline class="st1" points="' +
        scl * (_left + g + l + w + l + 1.5) + ',' +
        scl * (_top + w + w + t + d - 1) + ' ' +
        scl * (_left + w + l + g + l - x) + ',' +
        scl * (_top + w + w + d + t - 1) + ' ' +
        scl * (_left + w + l + g + l - x) + ',' +
        scl * (_top + w + w + d + t - 4) + '"/>\n'
    // Gray 16
    svgTxt += ' <path class="st1" d="M' +
        scl * (_left + l + g + l + w - 0.75) + ',' + scl * (_top + t + w + d + w - 1) + 'c ' +
        scl * (0.50) + ',' + scl * (-0.50 + t / 2) + ' ' +
        scl * (-0.60 * 0.5 * t) + ',' + scl * (0.85 * t) + ' ' +
        scl * (-0.80 * 0.5 * t - 0.16 * t) + ',' + scl * (t - 1) + ' "/>\n'
    // Gray 17
    svgTxt += svgLine(l + w + g + 0.75 + 0.80 * 0.5 * t + 0.16 * t, t + w + d + w + t - 2, l + g + l + w - 0.75 - 0.80 * 0.5 * t - 0.16 * t, t + w + d + w + t - 2, 'st1', scl, _left, _top);
    // Gray 18
    svgTxt += ' <path class="st1" d="M' +
        scl * (_left + l + w + g + 0.75) + ',' + scl * (_top + t + w + d + w - 1) + 'c ' +
        scl * (-0.5) + ',' + scl * (-0.5 + t / 2) + ' ' +
        scl * (0.60 * 0.5 * t) + ',' + scl * (0.85 * t) + ' ' +
        scl * (0.80 * 0.5 * t + 0.16 * t) + ',' + scl * (t - 1) + ' "/>\n'
    // Gray 19
    svgTxt += ' <polyline class="st1" points="' +
        scl * (_left + g + l + w - 1.5) + ',' + scl * (_top + w + w + t + d - 1) + ' ' +
        scl * (_left + w + l + g + x) + ',' + scl * (_top + w + w + d + t - 1) + ' ' +
        scl * (_left + w + l + g + x) + ',' + scl * (_top + w + w + d + t - 4) + '"/>\n'
    // Gray 20
    svgTxt += svgLine(g + l + w, w + t + d - 1, g + l + w, w + t + d + w - 1, 'st1', scl, _left, _top);
    // Gray 21
    svgTxt += ' <polyline class="st1" points="' +
        scl * (_left + g + l + 0.65) + ',' + scl * (_top + w + d + t - 1) + ' ' +
        scl * (_left + g + l + 0.65) + ',' + scl * (_top + w + t + d + x - 3) + ' ' +
        scl * (_left + g + l + 3 + 0.65) + ',' + scl * (_top + w + d + t + x) + ' ' +
        scl * (_left + g + l + 4.5 + 0.65) + ',' + scl * (_top + d + 1.5 * (w + t - 1)) + ' ' +
        scl * (_left + g + l + w - 5) + ',' + scl * (_top + d + 1.50 * (w + t - 1)) + ' ' +
        scl * (_left + g + l + w - 3) + ',' + scl * (_top + w + d + t + 2) + ' ' +
        scl * (_left + g + l + w) + ',' + scl * (_top + w + d + t - 1) + ' "/>\n'
    // Gray 22 
    svgTxt += svgLine(g, w + t + d - 1, g + l + 0.65, w + t + d - 1, 'st1', scl, _left, _top);


    svgTxt += '</g>\n';
    svgTxt += '</svg>';

    return svgTxt;
}

function svgLine(x1, y1, x2, y2, style, scl, left, top) {
    x1 = scl * (left + x1);
    y1 = scl * (top + y1);
    x2 = scl * (left + x2);
    y2 = scl * (top + y2);

    return '<line class="' + style + '" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"/>\n';
}