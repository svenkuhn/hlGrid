# hlgrid

Responsive CSS-Grid for Website-Developers

## Installation

Using Bower

```shell script
bower i hlgrid
```

Using npm

```shell script
npm i hlgrid --save-dev
```

## Meta-Viewport

To ensure correct function on mobile devices, add the viewport meta tag to the head area of your HTML document.

```html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    ...
</head>
```

## Include CSS

Now include the extracted CSS file that meets your requirements in the head area as well.

**hlgrid-standalone.css**
Uncompressed CSS grid incl. border box handling to avoid display problems in different browsers.

**hlgrid-standalone.min.css (Empfehlung)**
Compressed CSS grid incl. border box handling to avoid display problems in different browsers.

**hlgrid.css**
Uncompressed CSS grid. Useful for use with other frame works for later compression.

**hlgrid.min.css**
Compressed CSS grid.

```html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    ...

    <link rel="stylesheet" href="css/hlgrid-standalone.min.css" />
</head>
```

## Grid structure

The hlGrid consists of three different elements.

1.  The container `.hl-wrapper` or `.hl-wrapper-fluid`
2.  The grid series `.hl-grid`
3.  The grid columns `.hl-col-(1-12)[-(s,m,l,xl)]`

The values 1-12 of the grid columns indicate how wide a column should be displayed.
You can use the optional additions s, m, l, or xl to control how wide a column is to be displayed with different resolutions.

**xl**: 1200px and wider

**l**: 992px - 1199px

**m**: 768px - 991px

**s**: 576px - 767px

```html
<body>
    <div class="hl-wrapper">
        <div class="hl-grid">
            <div class="hl-col-4-xl hl-col-8-m">...</div>
            <div class="hl-col-4-m">...</div>
            <div class="hl-col-4-xl hl-col-12">...</div>
        </div>
    </div>
</body>
```

You can find the complete documentation [here](https://www.hlgrid.de/).
