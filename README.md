# simple-photo-wall
Base on html,css,js.
# source code show
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>photo wall</title>
    <style>
        body{margin: 0; overflow-y: scroll;}
        .photo-wall{ padding: 8px 11px; box-sizing: border-box; width: 100%; overflow: auto;}
        .photo-wall div{ box-sizing: border-box; float: left; margin-bottom: 3px; position: relative; overflow: hidden;}
        .photo-wall div:nth-child(3n+1){ margin-right: 2px;}
        .photo-wall div:nth-child(3n+2){ margin: 0 1px;}
        .photo-wall div:nth-child(3n+3){ margin-left: 2px;}
        .photo-wall div img{ display: block; position: absolute; width: 220%; top: -30%; left: -60%;}
    </style>
</head>
<body>
    <div id="myPhoto" class="photo-wall">
        <div><img src="images/Chrysanthemum.jpg" alt=""></div>
        <div><img src="images/Desert.jpg" alt=""></div>
        <div><img src="images/Hydrangeas.jpg" alt=""></div>
        <div><img src="images/Jellyfish.jpg" alt=""></div>
        <div><img src="images/Koala.jpg" alt=""></div>
        <div><img src="images/Lighthouse.jpg" alt=""></div>
        <div><img src="images/Penguins.jpg" alt=""></div>
        <div><img src="images/Tulips.jpg" alt=""></div>
        <div><img src="images/1.jpg" alt=""></div>
        <div><img src="images/2.jpeg" alt=""></div>
    </div>
</body>
<script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
<script>
    $(function(){
        initPhotoSize('myPhoto');
        $(window).resize(function(){
            initPhotoSize('myPhoto');
        });
        function initPhotoSize(id){
            var oMyPhoto = document.getElementById(id),
                aPhotos = oMyPhoto.getElementsByTagName('div'),
                containerWidth = oMyPhoto.offsetWidth - 22,
                picWidth = parseInt((containerWidth - 6)/3);
            for(var i = 0; i<aPhotos.length;i++){
                aPhotos[i].style.width = picWidth + 'px';
                aPhotos[i].style.height = picWidth + 'px';
            }
        }
    });
</script>
</html>
