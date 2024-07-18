export function convertMultiModeltoObject(array) {
    //use toObject or toJSON is similar => convert to origin object
    return array.map(item=>item.toObject())
}