










startLocalStorage(mockData)
const tableBody = document.getElementById("table-body")
tableBody.addEventListener("click", manageTableClicks)
drawTable(getItems("financialRecords"))
configureForm()