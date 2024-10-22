# 你的網址
[https://www.ray0326.online](https://www.ray0326.online)

# 你在哪裡購買網域的
GoDaddy

# DNS 的 A record 是什麼？
A record 是 DNS 的一種記錄類型，表示給定網域的 IPv4 位址，如果網站是使用 IPv6 則改用 AAAA record

# DNS 的 NS record 是什麼？
NS record 代表 Name Sever，他記錄了網域名稱的伺服器位置

# Domain Name vs FQDN vs URL 這三者分別為何？
- Domain Name 用於識別一個網站或服務，並可以包含多個子域，比如 `example.com` 是一個 Domain Name，而 `blog.example.com` 則是他一個子域

- FQDN 全名為 Fully Qualified Domain Name，是一種完整的域名，他是唯一的，指定了主機完整的位置，比如 `api.github.com` 指向 GitHub 的 API 服務

- URL 是一種用於指定網路資源位置的地址格式，通常包括協議、域名、路徑和其他參數，比如 `https://www.python.org/doc/3.9/tutorial/index.html?version=3.9` 中 `www.python.org` 是主機名，`/doc/3.9/tutorial/index.html` 是路徑，`?version=3.9` 是查詢參數

# 為什麼應該要為網站加上憑證？而不是直接用 http 就好？
https 使用 SSL/TLS 協議來加密用戶和伺服器之間的通訊，即使封包被攔截也無法輕易被取得內容，同時也使攻擊難以惡意修改封包