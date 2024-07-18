export function convertMultiModeltoObject(array) {
  //use toObject or toJSON is similar => convert to origin object
  return array.map((item) => item.toObject());
}

export function convertModeltoObject(model) {
  //use toObject or toJSON is similar => convert to origin object
  return model.toObject();
}
