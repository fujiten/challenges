# XMLHttpRequestについて理解する

## 課題１（質問）

### 未経験でエンジニアとして採用されて昨日から入社した新人くんに「先輩、XMLHttpRequestって何ですか？（ブラウザのアドレスバーにURLを入力して送信する）普通のHTTPリクエストと何が違うんですか？」とキラキラした目で聞かれました


フルページリフレッシュなしにURLからデータを取得できる。


### 「先輩・・・僕、example.comっていうサイトを担当することになって。example.comのページからapi.example.com（API）に向けて、XMLHttpRequestを使ってリクエストを送信するコードを書いたんですけど、リクエストにクッキー情報が付与されないんです・・・どうしてですか？」
新人くんのコードを見た所、送信部分はこのように記述されていました。どこに問題があるのか、説明してあげてください

XMLHttpRequest.withCredentials property をtrueにしよう

## 「先輩・・・CORSって分かりますか？なんか「No 'Access-Control-Allow-Origin' header is present on the requested resource」ってエラーが出てきて、リクエストが送られなくて・・・どうすればいいんでしょうか？」  

レスポンスがオリジンを許可していない。許可しよう
