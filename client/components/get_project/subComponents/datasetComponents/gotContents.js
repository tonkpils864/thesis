
let gotContentsConstructor = (obj) => {
    let {errorHandler,html} =obj;
    let gotContents = (err,contents) => {
        let {data,caller} = contents;
        if (err) return errorHandler(new Error(err));

        let contents_div = html.create('div',{textContent:data});
        let mountToCaller = html.mountTo(caller);
        mountToCaller(contents_div);
    };
    return gotContents;
};

module.exports = gotContentsConstructor;