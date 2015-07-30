var options = {

    // todo: your remote machine address with RTMP server
    file: 'http://10.168.1.44/stream/live.m3u8',
    width: '100%',
    image: 'cote.jpg',
    aspectratio: '4:3',

    androidhls: 'true',

    autostart: 'true'
};

jwplayer('playerHLS').setup(options);
