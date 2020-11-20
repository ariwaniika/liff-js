document.addEventListener("DOMContentLoaded", () => {
liff.init({
// 自分のLIFF ID（URLから『https://liff.line.me/』を除いた文字列）を入力する
liffId: "1654893906-zZ9xVQ4W"

}).then(() => { // 初期化完了. 以降はLIFF SDKの各種メソッドを利用できる

    
    sendText("send message");
// 利用者のLINEアカウントのプロフィール名を取得
liff.getProfile().then(profile => {


})
})
}



function sendText(text) {
    if (!liff.isInClient()) {
        shareTargetPicker(text);
    } else {
        sendMessages(text);
    }
}

// LINEトーク画面上でメッセージ送信
function sendMessages(text) {
    liff.sendMessages([{
        'type': 'text',
        'text': text
    }]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}

// Webブラウザからメッセージ送信
function shareTargetPicker(text) {
    liff.shareTargetPicker([{
        'type': 'text',
        'text': text
    }]).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}
