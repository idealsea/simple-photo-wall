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
