# package.json 中的 dependencies 與 devDependencies 分別是什麼
- dependencies的套件用於發佈的環境中
- devDependencie的套件則用於本地開發環境中
___
# package.json 中的 scripts 這個區塊怎麼用？
- scripts這塊是用在命令行運行的腳本，他能讓你能不用輸入一長串的命令便能夠簡單地執行如啟動伺服器、運行測試等常見的任務。
- 比如可以使用 npm run start 來執行 node index.js
```json
"scripts": {
    "start": "node index.js",
}
```
___
# Port number 要怎麼以環境變數來設定？
- 直接在命令行設定環境變數，如：PORT=3000 node app.js
- 創造.env檔案，並將環境變數寫到裡面
___
# 關於哪些檔案應該要被放上 github repo 這個問題，描述看看為什麼你選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼？
- 可以直接從指令下載的套件，如 node_moudels 裡的套件
- 測試用的檔案，如測試用的圖片
- 機密的資料，如 token
___
# 範例程式中用 require，但上週的 Stack 是用 import/export，這兩種分別是 JavaScript 引用模組的兩種方式: CJS vs ESM，這兩者分別怎麼用？
- CJS 的副檔名為 .cjs，使用require() 來引入 module、使用 module.exports 或 exports 來導出 module。
- ESM 的副檔名為 .mjs，使用import() 來導入 module、使用 export 來導出 module。