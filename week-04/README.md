# 在 Readme 中提供 instance 的 public IP，我會連線過去檢查，所以要保持主機是一直在啟動中
[http://18.179.36.12/](http://18.179.36.12/)

# 什麼是 instance type?
虛擬機的類型， instance 包含了 vCPU, memory,網路頻寬等，同個類型的 instance 硬體配置是固定的，可以根據自己的需求配置對應的 instance type

# 什麼是 Nginx？有哪些用途與特性？
Nginx 是一款開源的軟體，提供 web 相關的 server 功能，如反向代理、負載平衡，並且有輕量化和模組化的優勢，使他成為高效建構網路服務的選擇

# pm2 套件是什麼？有什麼用處？
pm2則是程序管理工具，他可以幫忙服務 crash 後的重啟、錯誤日誌進行問題排查、監控應用程式性能和部署服務等諸多功能

# 步驟 9 中提到的 proxy 是什麼意思？為什麼要透過 Nginx 來 proxy 到 Express 開發的 Web Server?
proxy 是指 client 端和目標 server端之間添加一個中間服務器來轉發 client 的請求。在步驟 9 中使用 Nginx 作為反向代理後端的 web server，他可以實現負載均衡、透過隱藏真實 IP 和 port 來達到安全性等

# 在 readme 中提供步驟 9 的 Nginx 設定檔
```
server {
        listen 80 default_server;
        listen [::]:80 default_server;
        server_name 18.179.36.12;
        location / {
                proxy_pass http://127.0.0.1:3000;
        }
}
```

# Security Group 是什麼？用途為何？有什麼設定原則嗎？
Security Group 是 AWS 的虛擬防火牆，他控制進入和離開 instance 的資料，允許或限制特定 IP 和 port的資料輸入輸出。

設定原則包含：
- 最小權限原則：只允許正常運行的最少訪問權限，限制不必要的 IP 和 port來減少風險

- 明確 IP 限制：避免將安全组設為對所有 IP 地址 (0.0.0.0/0) 開放

- 為不同環境設置不同的安全組：開發、測試、生產的環境使用不同的安全組配置，如開發環境中的安全組可以較為寬鬆，生產環境應較為嚴格

# 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？
sudo 是 superuser do 的簡寫，代表要以 root 的身份執行指令。要不要加 sudo 的時機取決於要執行的操作需不需要 root 權限

# Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？
Nginx 的 log 可以在 `/etc/nginx/nginx.conf` 中找到路徑

error log: `/var/log/nginx/error.log`

access log: `/var/log/nginx/access.log`

查看日誌的方式可以使用 `sudo tail -f /var/log/nginx/error.log` 看最後幾行或使用 `cat /var/log/nginx/error.log` 查看完整日誌

# 其他你在過程中遭遇的問題，有找到解答就記錄下來，沒有可以把問題放著，下次上課討論。如果沒有遇到任何問題，也可以回答「無」
- nginx 的 .conf 不好寫，網路上查到的寫法五花八門，有一段時間一直在報 502 bad gateway 的 error。查了一堆不同的寫法，有的說某些參數要怎麼寫另一偏又給完全不同的解法，最後才發現是自己 inbound 沒設好，但是到現在還是沒有很懂裡面的參數。

# 列出完成本作業時參考的資料
- [Amazon EC2 執行個體類型](https://aws.amazon.com/tw/ec2/instance-types/)
- [D07_可以很簡單也可以非常複雜的EC2_InstanceType](https://ithelp.ithome.com.tw/m/articles/10295411)
- [用 Nginx 伺服器建立反向代理](https://ithelp.ithome.com.tw/articles/10221704)
- [【筆記】使用 pm2 進行 node 服務管理](https://blog.jsy.tw/2661/pm2-node-service-manager/)
- [用人類語言跟你說甚麼事正向代理和反向代理](https://www.pressplay.cc/project/F720CEB1D6057D7ABB5614722AB18FFF/articles/660A57208C29FF94453548ED21F284EF)