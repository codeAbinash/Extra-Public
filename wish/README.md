# wish.js

## CDN
```html
<script src="https://github.com/DarkRoseAbinash/wish.js/blob/main/wish.js"></script>
```


## Use Heart
```js
h = new Heart(100,1,1); 
// (params number of hearts, size, speed, image source)
```

## Use Music
```js
let m = new Music("musicSource.mp3");

let button = document.getElementById("btn");

button.onclick = function(){
    m.play();
}
```


## Required Styles

```css
*{
    margin: 0;
    padding: 0;
}
.heart{
    position: fixed;
    top: -30%;
    left: 0;
    animation-name: Move;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    height: auto;
}
@keyframes Move{
    from{
        top: 0%;
    }to{
        top: 100%;
    }
}
```

## See a [Example](https://darkroseabinash.github.io/wish.js/index.html)
"# wish.js" 
