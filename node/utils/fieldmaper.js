module.exports = (array, fieldsMap) => {
    array.map(client => {
        for (const clientKey in client) {
            if (fieldsMap[clientKey] != null) {
                client[fieldsMap[clientKey]] = client[clientKey];
                delete client[clientKey];
            }
        }
    });
}