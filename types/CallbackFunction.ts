type CallbackFunction<CallbackDataType> = (err:boolean | string, data?:CallbackDataType) => any;

export default CallbackFunction;
