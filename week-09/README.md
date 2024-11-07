# 驗屍報告
- 開啟 nginx 發現錯誤訊息，根據錯誤訊息得知 nginx.conf 第八行多了個分號
> ![](assets/img/1.png)
- 刪除多餘的分號
> ![](assets/img/2.png)
- 發現 80 port 被佔用
> ![](assets/img/3.png)
- kill 佔用 80 port 的程序
> ![](assets/img/4.png)
- 發現防火牆擋住 80 port，開啟 80 port
> ![](assets/img/5.png)
- 修改 index.html 的權限
> ![](assets/img/6.png)
- 可以成功 curl localhost
> ![](assets/img/7.png)
> ![](assets/img/8.png)