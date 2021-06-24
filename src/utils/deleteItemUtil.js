function handleSuccess({ target: { result } }) {
  const { key, onsuccess, onerror } = this.callback;
  const transaction = result.transaction("lists", "readwrite");
  const store = transaction.objectStore("lists");
  const request = store.delete(key);
  request.onerror = onerror;
  request.onsuccess = onsuccess;
}

function handleError() {
  console.error("数据库连接失败");
  this.callback.onerror();
}

function deleteItem(key, onsuccess, onerror) {
  const request = indexedDB.open("projects", 3);
  request.callback = { key, onsuccess, onerror };
  request.onsuccess = handleSuccess;
  request.onerror = handleError;
}

export default deleteItem;
