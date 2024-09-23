#  blob
___
- 檔案內容會被轉換成二進制，並且使用SHA-1編號儲存成物件
- 當執行 git add 時，新增檔案的內容就會在 .git目錄裡被寫入成為 blob 物件

#  tree
___
- 用於存儲目錄狀態的物件，包含該目錄下的檔名、對應的 blob 物件名稱、文件權限...
- 每個 tree 物件可包含一個或多個 tree entries，每個 tree entry 都包含一個指向 blob 物件或 subtree 的指標、物件類型、檔名

#  commit
___
-  用來記錄有哪些 tree 物件包含在版本中，一個 commit 物件代表一次提交
-  記錄特定提交版本有哪些 tree 物件、以及提交的時間、訊息紀錄等...

___ 
#  branch
- 指定特定 commit 的指標，可用於並行開發和隔離

#  head
___
- 代表目前的branch

___
# commit message 應該怎麼寫比較好？應該有什麼 style 嗎？
- 應精簡寫下該次的改動的標題
- 標題後敘述主要改動的部分
- 一次改動不應該太大
- 制定團隊的commit格式，避免不一樣的style
