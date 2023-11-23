const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: "A positive direction",
        artist: 'unknown',
        url: '/images/Aylex - A Positive Direction (freetouse.com).mp3',
        cover: '/music/cover/兩隻老虎.jpg'
      }
    ]
});