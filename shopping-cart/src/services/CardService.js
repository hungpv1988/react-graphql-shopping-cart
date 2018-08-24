export default class UserService{
    getItems(criteria){
          
        var products = [
                {
                    "availableSizes":["S","XS"],
                    "currencyFormat":"$",
                    "currencyId":"USD",
                    "description":
                    "4 MSL","id":12,
                    "installments":9,
                    "isFreeShipping":true,
                    "price":10.9,
                    "image": "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.4edb5154.jpg",
                    "style": "Black with custom print",
                    "title": "Cat Tee Black T-Shirt"
                },
        
                {
                    "availableSizes":["M"],"currencyFormat":"$","currencyId":"USD","description":"", "id":13,
                    "installments":5,"isFreeShipping":true,"price":29.45,
                    "image": "https://react-shopping-cart-67954.firebaseapp.com/static/media/51498472915966370_1.8da09d0b.jpg",
                    "style":"Front print and paisley print","title":"Dark Thug Blue-Navy T-Shirt"
                },
        
                {
                    "availableSizes":["X","L","XL"],"currencyFormat":"$","currencyId":"USD",
                    "description":"GPX Poly 1",
                    "id":14,"installments":3,"isFreeShipping":true,"price":9,
                    "image": "https://react-shopping-cart-67954.firebaseapp.com/static/media/10686354557628304_1.b047a598.jpg",
                    "style":"Front tie dye print","title":"Sphynx Tie Dye Wine T-Shirt"
                },
        
                {   
                    "availableSizes":["X","L","XL","XXL"],"currencyFormat":"$","currencyId":"USD",
                    "description":"Treino 2014","id":15,"installments":5,"isFreeShipping":true,"price":14,
                    "image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/11033926921508488_1.cb8727d9.jpg",
                    "style":"Black T-Shirt with front print","title":"imageul"
                },
        
                {
                    "availableSizes":["X","L"],"currencyFormat":"$","currencyId":"USD","description":"","id":11,
                    "installments":3,"isFreeShipping":true,"price":13.25,
                    "image": "https://react-shopping-cart-67954.firebaseapp.com/static/media/39876704341265610_1.c9fb4794.jpg",
                    "style":"Wine","title":"Wine imagel T-Shirt"
                },
        
                {   "availableSizes":["XS","X","L","ML","XL"],"currencyFormat":"$","currencyId":"USD",
                    "description":"","id":16,"installments":5,"isFreeShipping":true,"price":75,
                    "image": "https://react-shopping-cart-67954.firebaseapp.com/static/media/10412368723880252_1.854f9ebd.jpg",
                    "style":"Grey","title":"Short Sleeve T-Shirt"
                },
        
                {   "availableSizes":["X","L","XL","XXL"],"currencyFormat":"$","currencyId":"USD",
                    "description":"14/15 s/nº","id":0,"installments":9,"isFreeShipping":true,"price":10.9,
                    "image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/8552515751438644_1.08690d27.jpg",
                    "style":"Branco com listras pretas","title":"Cat Tee Black T-Shirt"
                },
        
                {
                    "availableSizes":["X","L","XL","XXL"],"currencyFormat":"$","currencyId":"USD",
                    "description":"14/15 s/nº","id":1,"installments":9,"isFreeShipping":true,"price":10.9,
                    "image": "https://react-shopping-cart-67954.firebaseapp.com/static/media/10547961582846888_1.6ffa45d5.jpg",
                    "style":"Preta com listras brancas","title":"Sphynx Tie Dye Grey T-Shirt"
                },
        
                {
                    "availableSizes":["X","L"],"currencyFormat":"$","currencyId":"USD","description":"14/15 s/nº",
                    "id":2,"installments":7,"isFreeShipping":true,"price":14.9,
                    "image": "https://react-shopping-cart-67954.firebaseapp.com/static/media/18644119330491310_1.7bbbf40e.jpg",
                    "style":"Branco com listras pretas","title":"Danger Knife Grey"
                },
        
                {
                    "availableSizes":["X","L"],"currencyFormat":"$","currencyId":"USD","description":"2014 s/nº",
                    "id":3,"installments":7,"isFreeShipping":true,"price":14.9,
                    "image": "https://react-shopping-cart-67954.firebaseapp.com/static/media/11854078013954528_1.16d87c7b.jpg",
                    "style":"Preto com listras brancas","title":"White DGK Script Tee"
                },
        
                {
                    "availableSizes":["XL"],"currencyFormat":"$","currencyId":"USD",
                    "description":"14/15 s/nº - Jogador","id":4,"installments":12,"isFreeShipping":false,
                    "price":25.9,
                    "image": "https://react-shopping-cart-67954.firebaseapp.com/static/media/876661122392077_1.76d63530.jpg",
                    "style":"Branco com listras pretas",
                    "title":"Born On The Streets"
                },
        
                {
                    "availableSizes":["X","L","XL"],
                    "currencyFormat":"$","currencyId":"USD","description":"14/15 + Camiseta 1º Mundial","id":5,
                    "installments":9,"isFreeShipping":false,"price":10.9,
                    "image": "https://react-shopping-cart-67954.firebaseapp.com/static/media/9197907543445676_1.a5707e84.jpg",
                    "style":"Preto","title":"Tso 3D Short Sleeve T-Shirt A"
                },
        
                {
                    "availableSizes":["XL","XXL"],"currencyFormat":"$","currencyId":"USD",
                    "description":"Goleiro 13/14","id":6,"installments":0,"isFreeShipping":true,
                    "price":49.9,
                    "image": "https://react-shopping-cart-67954.firebaseapp.com/static/media/5619496040738316_1.d6803810.jpg",
                    "style":"Branco","title":"Man Tie Dye Cinza Grey T-Shirt"
                },
        
                {
                    "availableSizes":["S"],"currencyFormat":"$","currencyId":"USD","description":"1977 Infantil","id":7,
                    "installments":4,"isFreeShipping":true,"price":22.5,
                    "image": "https://react-shopping-cart-67954.firebaseapp.com/static/media/6090484789343891_1.a998813f.jpg",
                    "style":"Preto com listras brancas","title":"Crazy Monkey Black T-Shirt"
                },
                    
                {
                    "availableSizes":["XL"],"currencyFormat":"$","currencyId":"USD","description":"",
                    "id":8,"installments":4,"isFreeShipping":false,"price":18.7,
                    "image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/11600983276356164_1.1fd27374.jpg",
                    "style":"Azul escuro","title":"Tso 3D Black T-Shirt"
                },
        
                {
                    "availableSizes":["L","XL"],"currencyFormat":"$","currencyId":"USD","description":"","id":9,
                    "installments":5,"isFreeShipping":true,"price":134.9,
                    "image": "https://react-shopping-cart-67954.firebaseapp.com/static/media/18532669286405344_1.9d1a7699.jpg",
                    "style":"",
                    "title":"Crazy Monkey Grey"
                },
                    
                {
                    "availableSizes":["L","XL"],"currencyFormat":"$",
                    "currencyId":"USD","description":"","id":10,"installments":9,
                    "isFreeShipping":true,"price":49,
                    "image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/27250082398145996_1.5a5265ad.jpg",
                    "style":"",
                    "title":"On The Streets Black T-Shirt"
                }
            ]
                
        if (!criteria || criteria.length == 0){
            return products;
        }

        products = products.filter(function(item){ 
            var availableSizes = item.availableSizes;

            return availableSizes.some(function(size){
                return criteria.some(function(criterion){
                    return criterion === size;
                })
            })  
        });

        return products
    };

    getAllCardSizes(params) {
        var filterItems = [
            {name: 'XS', value : 'XS'}, 
            {name: 'S', value : 'S'}, 
            {name: 'M', value : 'M'}, 
            {name: 'ML', value : 'ML'}, 
            {name: 'L', value : 'L'}, 
            {name: 'XL', value : 'XL'}, 
            {name: 'XXL', value : 'XXL'}
         ];

        return filterItems; 
    }
}