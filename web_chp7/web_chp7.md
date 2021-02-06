# キャッシュについて理解する

## 課題1（質問）

- なぜキャッシュが必要なのか、説明してください

データ取得パフォーマンス向上のため

^ キャッシュには様々な種類があります。いくつか例を挙げてそれぞれのキャッシュの違いを説明してください（「ブラウザキャッシュ」「プロキシキャッシュ」など）


Images - logos, pictures, backgrounds, etc.
HTML
CSS
JavaScript
In short, browsers typically cache what are known as "static assets" - parts of a website that do not change from visit to visit.

ブラウザキャッシュ：ブラウザは静的ファイル（images, HTML, CSS, JavaScript)などをディスク上に保存する。

プロキシキャッシュ：プロキシサーバーがコンテンツを保存する。ユーザーにそれらの利用を許可する。もともとのソースサーバーともやり取りし、キャッシュの有効期限切れなどに対応している、

- HTTP通信における、ブラウザがキャッシュを制御するために存在するヘッダーを3つ以上挙げて、それぞれの役割を説明してください

  - Cache-Control は HTTP のヘッダーで、リクエストとレスポンスの両方でキャッシュのためのディレクティブ (指示) が格納されています。リクエストで指定されたディレクティブは、レスポンスでも同じディレクティブを使用しなければならないということではありません。

  - ETag レスポンスヘッダーは strong validator として使用できる、ユーザーエージェントにとって不透明な値です。ブラウザーなどの HTTP ユーザーエージェントは、この文字列が何を表すかがわからず、またこの値が何になるかを予測することもできません。ETag ヘッダーがリソースのレスポンスの一部に含まれていたら、クライアントは以降のリクエストでキャッシュ済みリソースの確認を行うために If-None-Match  をヘッダーに含めることができます。

  - Vary HTTP レスポンスヘッダーは、提供元のサーバーからレスポンスを得るように要求せずにキャッシュ済みのレスポンスを使用できるかを判断するために、以降のリクエストヘッダーをどのように照合するかを定義します。

- ブラウザのキャッシュサイズの上限は、ユーザが自由に変更できます、最大容量はどの程度でしょうか？（ブラウザを複数調べて比較してみましょう）。上限を超えると何が起きるでしょうか？

Chrome 2GB?
https://superuser.com/questions/378991/what-is-chrome-default-cache-size-limit#:~:text=3%20Answers&text=There%20isn't%20a%20default,is%20calculated%20at%20start%20time.

FireFox
1024 MB
The default value of Firefox's cache is 50 MB. The minimum value is 0. The maximum value is 1024 MB.Jul 30, 2020

上限を超えると、古いものを捨てる？
code.google.com/speed/page-speed/docs/caching.html –

- あなたは、マイページ（ユーザの情報が動的に表示されるページ）の作成を任されました。マイページへのアクセスが多いことに気づいたあなたは、マイページをキャッシュしておくことを考えました。そこで「expires」ヘッダをレスポンスに含めることで、1週間程度はキャッシュを使用するように設定しました
すると先輩エンジニアに「動的なサイトをキャッシュするなら、expiresは使わない方が良いよ」と言われました。なぜでしょうか？どうすれば良いのでしょうか？

細かな調整ができない。Cache-Controll　を使おう！


- ブラウザのキャッシュがWEBサービスに用いられている実例を、3つ以上見つけて共有してください。どのような仕組みで対象がキャッシュされているのか、技術的な流れを説明してみてください
chromeの開発者コンソールの「ネットワーク」タブを使って探すのがオススメです



## 課題２（実装）

仕様

何かしらの画像を返す、簡単なWEBサーバを作成してください
WEBサーバには2つのエンドポイントを用意してください
1つ目のエンドポイントでは、同じクライアントによるアクセスの場合ブラウザのキャッシュを使うことで、アクセス負荷を減らしましょう
2つ目のエンドポイントではブラウザキャッシュを使わず画像を返すようにしてください


## 課題３（成果物に関する質問）

- ブラウザキャッシュを使うべきではないケースを３つ考えて、ペアと会話してみてください
どんなサービスの？
どんなページで？
どんなファイルを？
キャッシュしてはいけないのでしょうか？

  - 頻繁に更新されるトップ画像
  - 新着記事一覧
  - ツイッターのタイムライン

## 課題４（クイズ）

ブラウザキャッシュに関するクイズを作成してください
クイズに関する詳細は　コチラ　を参照してください  

- ブラウザは画像をキャッシュできますが、
CSS,HTML,JavaScriptファイルなどもキャッシュできるでしょうか？
→できる  

- ブラウザキャッシュは、最低１度はそのサイトに訪れている必要があります。プロキシキャッシュはどうでしょうか？
→　訪れていなくてもいい

- AWS, GCPが提供するCDNサービスそれぞれの名前はなんでしょうか。
Amazon CloudFront
Cloud　CDN  

CloudFrontを導入してECサイトのレスポンス改善をした話
https://dev.classmethod.jp/articles/cloudfront-ecsite-optimize/  