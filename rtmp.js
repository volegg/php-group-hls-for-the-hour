var options = {
    type: 'rtmp',
    // todo: your remote machine address with RTMP server
    file: 'rtmp://10.168.1.44/stream/live',
    width: '100%',
    image: 'cote.jpg',
    aspectratio: '4:3',
    autostart: 'true'
};

jwplayer('playerRTMP').setup(options);
