let getDatasetComponentConstructor = (obj) => {
    let {dependencies,id,data} = obj;
    let {get,app,retrieveDataConstructor,getDatasetOptionsComponentConstructor} = dependencies;
    let {retrieveData} = retrieveDataConstructor({id,path:data['path'],get});
    let getDatasetOptionsComponent = getDatasetOptionsComponentConstructor({dependencies,retrieveData,data});

    let init = () => {
        document.getElementById('BackToProjectButton').style.display='initial';

        return {
            optionsEls:getDatasetOptionsComponent.init(data)
        }
    };

    return {init};

};
module.exports = getDatasetComponentConstructor;
