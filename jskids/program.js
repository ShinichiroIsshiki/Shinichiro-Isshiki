jyoutai = [];

function tokutenkeisan(){
    kosuu = 0;

    for(y = 0;y <21;y++){
        sorottenai = false;
        for(x = 1;x <=10;x++){
            if(jyoutai[y][x] == 100){
                sorottenai = true;
            }
        }
        if(!sorottenai){
            kosuu = kosuu + 1;
            document.getElementById('kieru').play();
            for(k = y;k>0;k--){
                for(x = 1;x <= 10;x++){
                    jyoutai[k][x] = jyoutai[k-1][x];
                }
            }

        }
    }

    //ブロックを描きなおす
    gamegamen = document.getElementById('game');
    cg = gamegamen.getContext('2d');

    //2.全部消す
    cg.clearRect(0,0,239,439);

    //3.ブロックがあるところを描く
    for(y = 0;y<22;y++){
        for(x = 0;x<12;x++){
            if((jyoutai[y][x] != 100 && jyoutai[y][x] != 99)){
                cg.fillStyle = biro[jyoutai[y][x]];
                cg.strokeStyle = '#333333';
                cg.lineWidth = 3;
                cg.fillRect(x *20,y*20,20,20);
                cg.strokeRect(x*20,y*20,20,20);
            }
        }
    }

    switch(kosuu){
        case 1:
            tokuten = tokuten+10;
            break;
        case 2:
            tokuten = tokuten + 20;
            break;
        case 3:
            tokuten = tokuten + 100;
            break;
        case 4:
            tokuten = tokuten + 1000;
            document.getElementById('zenbu').play();
            break;
    }
    tgamen = document.getElementById('tokuten');
    tgamen.innerHTML = tokuten;
}

block =[
        //ブロック0
        [
            
            [
                [0,0,0,0],
                [1,1,1,0],
                [0,1,0,0],
                [0,0,0,0]
            ],
            [
                [0,1,0,0],
                [0,1,1,0],
                [0,1,0,0],
                [0,0,0,0]
            ],
            [
                [0,1,0,0],
                [1,1,1,0],
                [0,0,0,0],
                [0,0,0,0]
            ],
            [
                [0,1,0,0],
                [1,1,0,0],
                [0,1,0,0],
                [0,0,0,0]
            ]
        ],
        //ブロック1
        [
            [
                [0,0,0,0],
                [1,1,1,0],
                [1,0,0,0],
                [0,0,0,0]
            ],
            [
                [1,0,0,0],
                [1,0,0,0],
                [1,1,0,0],
                [0,0,0,0]
            ],
            [
                [0,0,0,0],
                [0,0,1,0],
                [1,1,1,0],
                [0,0,0,0]
            ],
            [
                [1,1,0,0],
                [0,1,0,0],
                [0,1,0,0],
                [0,0,0,0]
            ]

        ],
        //ブロック2
        [
            [
                [0,0,0,0],
                [1,1,0,0],
                [0,1,1,0],
                [0,0,0,0]
            ],
            [
                [0,1,0,0],
                [1,1,0,0],
                [1,0,0,0],
                [0,0,0,0]
            ],
            [
                [0,0,0,0],
                [1,1,0,0],
                [0,1,1,0],
                [0,0,0,0]
            ],
            [
                [0,1,0,0],
                [1,1,0,0],
                [1,0,0,0],
                [0,0,0,0]
            ]

        ],
        //ブロック3
        [
            [
                [0,0,0,0],
                [0,1,1,0],
                [1,1,0,0],
                [0,0,0,0]
            ],
            [
                [1,0,0,0],
                [1,1,0,0],
                [0,1,0,0],
                [0,0,0,0]
            ],
            [
                [0,0,0,0],
                [0,1,1,0],
                [1,1,0,0],
                [0,0,0,0]
            ],
            [
                [1,0,0,0],
                [1,1,0,0],
                [0,1,0,0],
                [0,0,0,0]
            ]

        ],
        //ブロック4
        [
            [
                [0,0,0,0],
                [1,1,1,0],
                [0,0,1,0],
                [0,0,0,0]
            ],
            [
                [1,1,0,0],
                [1,0,0,0],
                [1,0,0,0],
                [0,0,0,0]
            ],
            [
                [0,0,0,0],
                [1,0,0,0],
                [1,1,1,0],
                [0,0,0,0]
            ],
            [
                [0,1,0,0],
                [0,1,0,0],
                [1,1,0,0],
                [0,0,0,0]
            ]

        ],
        //ブロック5
        [
            [
                [0,0,0,0],
                [1,1,1,1],
                [0,0,0,0],
                [0,0,0,0]
            ],
            [
                [0,0,1,0],
                [0,0,1,0],
                [0,0,1,0],
                [0,0,1,0]
            ],
            [
                [0,0,0,0],
                [1,1,1,1],
                [0,0,0,0],
                [0,0,0,0]
            ],
            [
                [0,0,1,0],
                [0,0,1,0],
                [0,0,1,0],
                [0,0,1,0]
            ]

        ],
        //ブロック6
        [
            [
                [0,0,0,0],
                [0,1,1,0],
                [0,1,1,0],
                [0,0,0,0]
            ],
            [
                [0,0,0,0],
                [0,1,1,0],
                [0,1,1,0],
                [0,0,0,0]
            ],
            [
                [0,0,0,0],
                [0,1,1,0],
                [0,1,1,0],
                [0,0,0,0]
            ],
            [
                [0,0,0,0],
                [0,1,1,0],
                [0,1,1,0],
                [0,0,0,0]
            ]

        ]
];

biro = ['#CC00CC','#FFA500','#CC0000','#00CC00','#CC0000','#00CCCC','#CCCC00'];

function hajime(){
    backgamen = document.getElementById('back');
    //↓getContext('2d')として2Dコンテキストと呼ばれるものを取得して、変数に保存
    cb = backgamen.getContext('2d');
    //塗りをしてい
    cb.fillStyle = '#CCCCCC';
    //線を設定 線の色はstrokeStyleで、幅はlineWidthで
    cb.strokeStyle ='#333333';
    cb.lineWidth = 3;
    //四角形をつくる
    x = 0;
    y = 0;
    for(i = 0;i < 22;i++){
        cb.fillRect(x,y,20,20);
        cb.strokeRect(x,y,20,20);
        y = y + 20;
    }

    x = 220;
    y = 0;
    for(i = 0;i < 22;i++){
        cb.fillRect(x,y,20,20);
        cb.strokeRect(x,y,20,20);
        y = y + 20;
    }
    
        y = 420;
        x = 0;
    for(i = 0;i < 12;i++){
        cb.fillRect(x,y,20,20);
        cb.strokeRect(x,y,20,20);
        x = x + 20;
    }

}

function jikandeugokasu(){
    if(jikkou){
        shitaidou();

        setTimeout(jikandeugokasu,jikan);
    }
}
function gamekaishi(){
    gamegamen = document.getElementById('game');
    cg = gamegamen.getContext('2d');

    //画面を消す
    cg.clearRect(0,0,239,439);
    
    tokuten = 0;
    
    jikkou = true;
    jikan = 1000;
    setTimeout(jikandeugokasu,jikan);

    jyoutai = new Array(22);
    for(i = 0;i<22;i++){
        jyoutai[i] = new Array(12);
        for(j= 0;j<12;j++){
            jyoutai[i][j] = 100;
        }
    }
    //壁を設定
    for(i = 0;i<22;i++){
        jyoutai[i][0] = 99;
    }
    for(i = 0;i<22;i++){
        jyoutai[i][11] = 99;
    }
    for(i = 0;i<12;i++){
        jyoutai[21][i] = 99;
    }
    //ランダムなブロックを作る
    ix = 4;
    iy = 0;
    imuki = 0;
    ishurui = Math.floor(Math.random() * 7);
    //ishurui = Math.floor(Math.randam() * 7);
    kaku(cg,ix,iy,imuki,ishurui);
    tsugiwotsukuru();
}

function kakunin(bx,by,muki,shurui){
    p = block[shurui][muki];
    for(n = 0;n < 4;n++){
        for(m = 0;m <4;m++){
            if(p[n][m] == 1){
                //ブロックを描画する位置が空欄か調べる
                if((bx + m <0) || (bx + m > 11)){
                    return false;
                }
                if((by + n < 0) || (by + n > 21)){
                    return false;
                }
                if(jyoutai[by+n][bx + m] != 100){
                    return false;
                }
            }
        }
    }
    return true;
}

function kaku(c,bx,by,muki,shurui){
    c.fillStyle = biro[shurui];
    c.strokeStyle = '#333333';
    c.lineWidth = 3;
    p = block[shurui][muki];

    for(n = 0;n < 4;n++){
        for(m = 0;m < 4;m++){
            if(p[n][m] == 1){
                c.fillRect((bx+m)*20,(by + n)*20,20,20);
                c.strokeRect((bx+m)*20,(by + n)*20,20,20);
            }
        }
    }

    
}

function kesu(c,bx,by,muki,shurui){
    //↓の処理で２Dコンテキストが消しゴムのようなモードに切り替わる
    c.globalCompositeOperation = 'destination-out';
    kaku(c,bx,by,muki,shurui);

    //↓の処理で消すモードから書くモードに戻す
    c.globalCompositeOperation = 'source-over';
    
}

function shitaidou(){
    gamegamen = document.getElementById('game');
    cg = gamegamen.getContext('2d');

    maenoix = ix;
    maenoiy = iy;
    maenomuki = imuki;

    kesu(cg,ix,iy,imuki,ishurui);

    iy = iy + 1;
    document.getElementById('ochiru').play();

    kekka = kakunin(ix,iy,imuki,ishurui);
    if(kekka){
        kaku(cg,ix,iy,imuki,ishurui);
    }else{
        ix = maenoix;
        iy = maenoiy;
        imuki = maenoimuki;
        kaku(cg,ix,iy,imuki,ishurui);

        //この位置を当たり判定用の配列に設定する
        p = block[ishurui][imuki]
        for(n = 0;n < 4;n++){
            for(m = 0;m<4;m++){
                if(p[n][m] == 1){
                    jyoutai[iy+n][ix + m] = ishurui;
                }
            }
        }

        document.getElementById('don').play();

        tokutenkeisan();

        //次のブロックとして設定したものが落ちてくる
        ix = 4;
        iy = 0;
        ishurui = btsugi;
        imuki = 0;
        kaku(cg,ix,iy,imuki,ishurui);

        kekka = kakunin(ix,iy,imuki,ishurui);
        if(!kekka){
            document.getElementById('gameover').play();
            alert('ゲームオーバー');
            jikkou = false;
        }

        jikan = jikan -1;
        if(jikan < 50){
            jikan = 1000;
        }

        //さらに次のブロックを設定
        tsugiwotsukuru();
            
        }
}

function ugokasu(e){
    gamegamen = document.getElementById('game');
    cg = gamegamen.getContext('2d');

    //現在の座標と向きを保存
    maenoix = ix;
    maenoiy = iy;
    maenoimuki = imuki;

    kesu(cg,ix,iy,imuki,ishurui);

    //←キーが押された時
    if(e.keyCode == 37){
        ix = ix - 1;
        document.getElementById('kaiten').play();
    }

    //→キーが押された時
    if(e.keyCode == 39){
        ix = ix + 1;
        document.getElementById('kaiten').play();
    }

    if(e.keyCode == 38){
        imuki = imuki + 1;
        if(imuki > 3){
            imuki = 0;
        }
        document.getElementById('kaiten').play();
    }
    if(e.keyCode == 40){
        shitaidou();
    }


    kekka = kakunin(ix,iy,imuki,ishurui);
    if(!kekka){
        //回転・移動できない
        //元に戻す
        ix = maenoix;
        iy = maenoiy;
        imuki = maenoimuki;
    }
    kaku(cg,ix,iy,imuki,ishurui);
}

function tsugiwotsukuru(){
    btsugi = Math.floor(Math.random() * 7);
    tsugigamen = document.getElementById('tsugi');
    ct = tsugigamen.getContext('2d');

    ct.clearRect(0,0,79,79);

    kaku(ct,0,0,0,btsugi);
}