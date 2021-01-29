# CORSについて

## 課題1（質問）

### 以下の単語を使ってCORSの仕組みを説明してください

- preflight request
- simple request
- access-control-allow-origin

CORSとは、ヘッダー上によるやり取りを基本に、異なるオリジン間でリソースを共有するための仕組みのこと。OPTIONSメソッドを利用したpreflight requestによって、実際のリクエストの前にこれから何のHTTPメソッドを送るか、カスタムヘッダーは利用しているか、などを調べる。基本的にXMLHttpRequest を使用するなどして、リクエストのOriginヘッダーとは異なるオリジンに対してリソースを要求する際に必要となる、Access-Control-Allow-Originヘッダーで、Originが異なる場合でも、リソース要求が可能なOriginを指定しておくと、CORSが可能である。simple request は プリフライトリクエストを利用しないシンプルなリクエストのこと。

### Access-Control-Allow-Origin: * , この設定が問題となるケースを1つ挙げて、なぜ設定するべきではないのか、説明してください.

よきせぬオリジンから勝手にリソースを要求されることを防げない。

## 課題2（クイズ）

### CORSに関するクイズを作成してください

- Access-Control-Allow-Origin: *  のとき、a credentialed requestsは使えないらしい。a credentialed requests　とはなにか。

- Content-type: application/json で、シンプルリクエストを送ることは可能だろうか。

- プリフライトリクエストのHTTPメソッドは一体なにか。

## 課題3（実装）

web_chp5で実装しました。（多分前回の課題で、不必要な実装をしてしまっている）

## 課題4（成果物に関する質問）

されない。異なるオリジンではないため。（問題の意図がつかめず…）

