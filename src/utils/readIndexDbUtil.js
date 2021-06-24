function handleSuccess({ target: { result } }) {
  const data = [];
  const { onsuccess, onerror } = this.callback;
  const transaction = result.transaction("lists");
  const store = transaction.objectStore("lists");
  const request = store.openCursor();
  request.onerror = onerror;
  request.onsuccess = function (event) {
    const cursor = event.target.result;
    if (cursor) {
      cursor.value.remove = false;
      data.push(cursor.value);
      cursor.continue();
    } else {
      onsuccess(data);
      console.info("数据库读取完成");
    }
  };
}

function handleError() {
  console.error("数据库连接失败");
  this.callback.onerror();
}

function readIndexDb(onsuccess, onerror) {
  const request = indexedDB.open("projects", 3);
  request.callback = { onsuccess, onerror };
  request.onsuccess = handleSuccess;
  request.onerror = handleError;
}

export default readIndexDb;
