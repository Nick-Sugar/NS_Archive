
window.AudioContext = window.AudioContext || window.webkitAudioContext;

// AudioContextを生成
var ctx = new AudioContext();
var bufferSource = ctx.createBufferSource();
// 指定した音源ファイルをバイナリデータとして取得
var xml = new XMLHttpRequest();
xml.responseType = 'arraybuffer';
xml.open('GET', 'sample.wav', true);
xml.onload = function() {
    // 取得したバイナリデータをデコード
    ctx.decodeAudioData(
        xml.response,
        function(_data) {
            data = _data;
        },
        function(err) {
            alert(e.err);
        }
    );
};
xml.send();
bufferSource.buffer = data;
// 再生速度を2倍に設定すると、周波数も2倍になり、音は高くなる
bufferSource.playbackRate.value = 2;
bufferSource.connect(ctx.destination);
bufferSource.start(0);