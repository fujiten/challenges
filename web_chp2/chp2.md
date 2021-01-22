# curlとPostmanに慣れる

## 問題1

```bash
curl -H 'X-Test='hello'' https://httpbin.org/headers  
```


```
{
  "headers": {
    "Accept": "*/*",
    "Host": "httpbin.org",
    "User-Agent": "curl/7.54.0",
    "X-Amzn-Trace-Id": "Root=1-6009de3f-4dd7663e5ee757a00e9808e1"
  }
}
```  

## 問題2

```bash
curl -H 'Content-Type: application/json' -d 'name=hoge' -X POST https://httpbin.org/post
```

```
{
  "data": "{\"name\": \"hoge\"}",  // ここが重要！
  "headers": {
    "Accept": "*/*", 
    "Content-Length": "16", 
    "Content-Type": "application/json", 
    "Host": "httpbin.org", 
    "User-Agent": "curl/7.54.0"
  }, 
  "json": {
    "name": "hoge" // ここが重要！
  }, 
  "origin": "xxxxxxxxxx",  // 自分自身のIPアドレス
  "url": "https://httpbin.org/post"
}
```
 
 ## 問題3

```bash
curl -H 'Content-Type: application/json' -d '{"userA": {"name": "hoge", "age": 29}}' -X POST https://httpbin.org/post
```

```
{
  "args": {},
  "data": "",
  "files": {},
  "form": {
  "{\"userA\": {\"name\": \"hoge\", \"age\": 29}}": ""
  },
  "headers": {
  "Accept": "*/*",
  "Content-Length": "38",
  "Content-Type": "application/x-www-form-urlencoded",
  "Host": "httpbin.org",
  "User-Agent": "curl/7.54.0",
  "X-Amzn-Trace-Id": "Root=1-6009dfb5-54afcc05313c251b151bcdf0"
  },
  "json": null,
  "origin": "113.197.179.38",
  "url": "https://httpbin.org/post"
}  
```

だった。

## クイズ

- curl とは何の略？
- curl　でのリクエストのUserAgentはなにになる？
- Postmanで、レスポンスヘッダーを参照してJSでなにか処理を書きたいときはどうすればいいだろう？



## 答え
- client for URL
- curl/7.54. 0 .   など
- Testタブを利用する 
