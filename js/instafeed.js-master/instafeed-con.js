    var feed = new Instafeed({
        get: 'user', //ユーザーから取得
        userId: '5965482946', //ユーザーID(数字のみのもの)
        sortBy:'random', //並び順をランダムに
        links: true , //画像リンク取得
        limit: 5, //取得する画像数を設定
        resolution: 'low_resolution', //画像サイズを設定
        template: '<div class="col-lg-4 col-md-6 portfolio-item" data-aos="zoom-in"><div class="card"><a href="{{link}}"><img src="{{image}}" class="card-img-top" target="_blank"></a><div class="card-body"><p class="card-text">{{caption}}</p></div></span></div></div>',
        accessToken: '5965482946.c3eecaf.99481570fdea4ae9894a2133243c3657' //アクセストークン
    });
    feed.run();
