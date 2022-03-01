const text = 'Привет! Как дела! Давно мы с тобой не виделись.'

const showSuccessMessage = (message) => {
    console.log(message)
}
const showErrorMessage = (message) => {
    console.eror(message)
}

const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {

    errorCallback = () => {
        alert(`Найден запрещенный символ "${errorSymbol}" под индексом ${text.indexOf(errorSymbol)}`)
    }
    successCallback = () => {
        alert('Ошибок не обнаружено')
    }
    if (errorSymbol) {
        errorCallback()
    } else {
        successCallback()
    }
    
}
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);