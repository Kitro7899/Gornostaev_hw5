ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [54.83, 37.11],
            zoom: 5
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([55.771332, 37.602130], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            balloonContentHeader: "Балун метки",
            balloonContentBody: "Описание<br><img src='https://images.unsplash.com/photo-1495475163540-aea45ea95aed?w=150'>",
            balloonContentFooter: "Подвал",
            hintContent: "Хинт метки"
        });
        
    
    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark2);
}