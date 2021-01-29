# サードパーティクッキーを理解する

## 課題１（質問）

### サードパーティクッキーとファーストパーティクッキーの違いを説明してください
サードパーティクッキー　訪れたWebサイトのドメインと異なるクッキー
ファーストパーティークッキー　訪れたWebサイトのドメインと同じクッキー

### サードパーティ Cookie を用いて広告配信ネットワーク（例えばGoogle AdSense など）がどのようにユーザの訪問履歴を把握しているのか、説明してください

広告配信サーバーなどがサードーパーティクッキーを送り、ユーザーがそれをブラウザに保存。他のサイトで再びそのサーバーにリクエストを送ったとき、ブラウザが保存したクッキーも送られる。


### そもそもサードパーティークッキーはどのように生成されるのでしょうか？画像埋め込みやスクリプト埋め込みなど、様々な手法を説明してください

画像埋め込みの場合は、画像保存サーバーへのHTTPリクエスト。スクリプトの場合はajaxを使うケースなどがある。

### サードパーティクッキーの扱いはブラウザによってどのような差があるのでしょうか？（特にsafariは他のブラウザと挙動が異なるので、ぜひ調べてみてください！）

safari: デフォルトブロック
Chrome: 数年以内にデフォルトブロック
他: 現状は容認（設定で拒否はできる）

#### 参考資料
SuperCookie（クッキー以外を使って、サードパーティクッキーのようなトラッキングを行う方法もある）
Firefoxはそれをブロックするよう対応。
https://forest.watch.impress.co.jp/docs/news/1302697.html


#### ドメインは同一で、ポートが異なるクッキーはファーストパーティクッキーでしょうか？サードパーティクッキーでしょうか？（hoge.com:8080とhoge.com:8081など）

ファーストパーティクッキー だと思う…。



## 課題２（実装）

ページの読み込みと同時に、ファーストパーティクッキーと、サードパーティクッキーが設定されるようなWEBサイトを作成してください
