# クッキーを理解する

## 課題１（質問）

### クッキーとは何でしょうか？「Set-cookie」「ヘッダ」「サーバ」「ブラウザ」という単語を使って、クッキーの仕組みを説明してみてください

→　クッキーとは、サーバーのレスポンスヘッダーに「Set-cookie」に

```
<cookie-name>=<cookie-value>
```

といった形で情報を指定すると、ブラウザがその情報を保存できる仕組み。

### www.hoge.comで発行されたクッキーは、www.fuga.comにも送信されるでしょうか？その理由を説明してください

→　ドメイン名が異なるため、送信されない。

### hoge.com:8080のクッキーはhoge.com:9090にも送信されるでしょうか？

→送信される。

### www.hoge.comで発行されたクッキーは、www.api.hoge.comにも送信されるでしょうか？

→サブドメインが異なるため、送信されない。

### クッキーにDomain="hoge.com"を指定した場合、api.hoge.comにもクッキーは送信されるでしょうか？理由を説明してください

送信される。ドメイン名を指定すると、サブドメインも含めてクッキーを共有する。


### ブラウザで実行されるJavaScriptは場合によってはクッキーの値を取得できます。JavaScriptからクッキーの値が取得されることを防ぐことは可能でしょうか？どうすれば良いのでしょうか？

Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly の形式にする。

### HTTPS（暗号化）通信の時だけクッキーを送信することは可能でしょうか？どうすれば良いのでしょうか？

Set-Cookie: <cookie-name>=<cookie-value>; Secureの形式にする。

### クッキーにExpiresを設定すると、どのように挙動が変わるでしょうか？
期限が切れると、クッキーがブラウザから削除され、リクエストで送信されなくなる。設定しない場合は、ブラウザを閉じた時点で削除される「Session Cookie」となる。


### SameSite属性について説明してください
- Strict 
SameSiteであったときの、2回めのリクエストから送信する。
- Lax
SameSiteであったとき、1回目のリクエストから送信する。
- None
SameSiteを考慮せず、常にクッキーを送信する。

### クッキーに格納しない方が良い情報の例を、3つ以上挙げてください
ユーザーの機密情報は基本的に危ない。住所、Userid、本名など…。

### クッキーはローカルストレージと混同されることが多々あります。クッキーを使うべきタイミングと、ローカルストレージを使うべきタイミングを挙げてみてください
→ローカルストレージはJsvaScriptからのアクセスが可能、かつHTTPSでは送信しないなどのオプションをデフォルトで備えていないので、脆弱性はCookieより高い。ただ、クッキーに比べて保存できる容量が多い、かつ、クライアントサイドのみで利用する情報など（たとえばBase64可された画像情報）をおいておけば、読み込みの高速化などが可能か。

クッキーは、SameSiteであれば毎回リクエストで送信される。またHttpOnlyやSecure フラグを立てれば、CSRFやXSSといった脆弱性への対応も可能である。

### stack overflowのようなWEB掲示板サービスを開発しているとしましょう。XSS（クロスサイトスクリプティング）により、他ユーザのクッキー情報が抜き出される仕組みを説明してください。どのような対策が考えられますか？

スクリプトが埋め込まれた投稿を表示してしまい、そのスクリプトが他サイトなどへのリクエストを実行できてしまう。入力値の制限や、HTMLタグのサニタイズなどを行う。



## 課題２（クイズ）

クッキーに関するクイズを作成してください
### Session Cookie とPersistant Cookieの違いとはなにか。

 If a cookie does not contain an expiration date, it is considered a session cookie. Session cookies are stored in memory and never written to disk. When the browser closes, the cookie is permanently lost from this point on. If the cookie contains an expiration date, it is considered a persistent cookie. On the date specified in the expiration, the cookie will be removed from the disk.

 → 有効期限なしのクッキーは「セッションクッキー」であり、disk上に保存されない。そのため、ブラウザを閉じると消える。有効期限を設定すると、「パーシステントクッキー」となり、設定期限まで永続的に残る。


参考文献

https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Set-Cookie 
