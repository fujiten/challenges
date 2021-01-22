## 課題２（質問）

### Content-typeにapplication/x-www-form-urlencodedを指定した時と、application/jsonを指定した時で、送信されるデータ形式がどのように異なるのか説明してください。どんな時にどちらを選択するべきでしょうか？

Content-typeにapplication/x-www-form-urlencodedを指定した場合は、URLとして

```
Name=John+Smith&Age=23
```

上のように指定し、送信したことを表す。

application/jsonの場合は、dataとして

```
{ Name : 'John Smith', Age: 23}
```

のように送信することを表す。

1つ目のケースはたとえば検索条件などのクエリパラメータ、2つ目は新規会員登録など、RESTfulAPIでいうところのcreateを行うときなどに使える。
