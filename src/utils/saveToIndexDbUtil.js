function handleOpenSuccess({ target: { result } }) {
  const { data, onsuccess, onerror } = this.callback;
  const transaction = result.transaction("lists", "readwrite");
  const store = transaction.objectStore("lists");
  const request = store.put(data);
  request.onerror = onerror;
  request.onsuccess = onsuccess;
}

function handleUpgrade({ target: { result } }) {
  console.info("尝试创建数据库");
  if (!result.objectStoreNames.contains("lists")) {
    result.createObjectStore("lists", { keyPath: "id" });
  }
}

function handleOpenError() {
  console.error("数据库连接失败");
  this.callback.onerror();
}

function saveToIndexDb(data, onsuccess, onerror) {
  const request = indexedDB.open("projects", 3);
  request.callback = { data, onsuccess, onerror };
  request.onsuccess = handleOpenSuccess;
  request.onerror = handleOpenError;
  request.onupgradeneeded = handleUpgrade;
}

export default saveToIndexDb;
