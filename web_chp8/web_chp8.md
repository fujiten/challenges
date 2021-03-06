# WEBサービスの代表的な脆弱性を理解する

## 課題１（質問）

### 以下の脆弱性の仕組み、発生し得る被害、対処法を解説してください


#### XSS

##### 仕組み

クロスサイトスクリプティングとは、ユーザのアクセス時に表示内容が生成される「動的Webページ」の脆弱性、もしくはその脆弱性を利用した攻撃方法のことです。動的Webページの表示内容生成処理の際、Webページに任意のスクリプトが紛れ込み、Webサイトを閲覧したユーザ環境で紛れ込んだスクリプトが実行されてしまいます。

##### 被害

攻撃者による不正ログイン（なりすまし）
利用者のCookieが攻撃者の手に渡ることで、Cookie内にある利用者のセッション情報がそのまま使用されてしまい、利用者の名をかたってサービスを使用されてしまう危険性があります。

##### 対策

XSSへの代表的な対策
Webページに出力するデータのエスケープ処理
Webページの出力に際して特別な意味を持つ文字列（例えば「<」、「&」など）は単なる文字列として出力するようにしましょう。また、エスケープの対象としては、利用者が画面から入力した値はもちろん、外部システムからのデータなどWebページの出力対象となるものは必ずエスケープすることが重要です。

#### コマンドインジェクション

##### 仕組み

コマンドインジェクションは、攻撃者が Web アプリケーションを通して、Web サーバが動作する OS でコマンドを実行できてしまう脆弱性です

##### 被害

rm -rf / コマンドなど実行がある場合がある。

##### 対策

別ブログラムを実行する関数を実装する場合は、ユーザーからの入力値をそのまま利用するなどしない。

#### SQLインジェクション

##### 仕組み

SQLインジェクション（英: SQL Injection）とは、アプリケーションのセキュリティ上の不備を意図的に利用し、アプリケーションが想定しないSQL文を実行させることにより、データベースシステムを不正に操作する攻撃方法のこと。 また、その攻撃を可能とする脆弱性のことである。

##### 被害
DBの改ざん、個人情報の漏洩

##### 対策
ユーザーからの入力値をそのままクエリに利用しない。

#### CSRF

##### 仕組み

クロスサイトリクエストフォージェリ（CSRF）とは、Webアプリケーションに存在する脆弱性、もしくはその脆弱性を利用した攻撃方法のことです。掲示板や問い合わせフォームなどを処理するWebアプリケーションが、本来拒否すべき他サイトからのリクエストを受信し処理してしまいます。

##### 被害

該当ユーザーの予期せぬ投稿、購入など。

##### 対策

CSRFトークンを発行する。

## 課題２（クイズ）

- ベンダー別で2019年に最も多くの脆弱性が報告されたのはMicrosoft, Google, Oracle, Adobeのどれ？

Microsoft(668件)、Google(609件)、Oracle(489件)、Adobe(441件)

- MacOS, Android, Linux の中だったら？

2019年に報告されたAndroidの脆弱性は414件。Debian Linuxが360件、Windows Server 2016とWindows 10が357件で続く

- SPAでWebアプリケーションを開発している。トークンを埋め込むCSRF対策は必要だろうか？

必要ないっぽい…？

https://numb86-tech.hatenablog.com/entry/2019/02/13/221458

https://qiita.com/k_kind/items/e26f03f4e24551b46b98#csrf%E5%AF%BE%E7%AD%96

APIサーバーへのリクエストには何らかの独自ヘッダの付与を義務付け、そのヘッダがないリクエストは全て拒否することで、CSRF対策になる ということらしい。
