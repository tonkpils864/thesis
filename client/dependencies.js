
let {get,post,put,del} = require('xhr');

const dependencies = Object.freeze({
    app: document.getElementById('app'),
    top: document.getElementById('top'),
    get: get,
    post: post,
    put: put,
    del: del,
    html: require('./components/html'),
    validator : require('validator'),

    css : {

        button: 'dark-green b--solid dim b--green bg-white ph2 mb2 pa2 mh2 bw2 br3',
        input: 'ph3 pv2 mh2 b--green b--solid green'

    },

    init : require('./components/init/init'),

    errorComponentConstructor : require('./components/error/errorComponent'),

    postStructurer: require('./components/structure_helpers/post_structure/postStructurer'),
    uniqueCheckboxHandlerConstructor: require('./components/create_post/subComponents/uniqueCheckboxHandler'),
    getPlotButtonHandlerConstructor : require('./components/structure_helpers/post_structure/getPlotButtonHandler'),
    getDatasetButtonHandlerConstructor : require('./components/structure_helpers/post_structure/getDatasetButtonHandler'),
    trArrayHandlerConstructor: require('./components/structure_helpers/post_structure/trArrayHandler'),

    loginComponentConstructor: require('./components/login/loginComponent'),
    loginHandlerConstructor: require('./components/login/loginHandler'),
    isLoggedInConstructor: require('./components/login/isLoggedIn'),

    registerComponentConstructor: require('./components/login/register/registerComponent'),
    registerHandlerConstructor: require('./components/login/register/registerHandler'),

    navigationComponentConstructor : require('./components/navigation/navigationComponent'),
    homeHandlerConstructor : require('./components/navigation/homeHandler'),
    logoutHandlerConstructor : require('./components/navigation/logoutHandler'),
    backProjectHandlerConstructor : require('./components/navigation/backProjectHandler'),
    searchHandlerConstructor: require('./components/navigation/searchHandler'),

    usersComponentConstructor: require('./components/get_user_profile/usersComponent'),
    usersInfoComponentConstructor : require('./components/get_user_profile/usersSubComponents/usersInfoComponent'),
    usersMatrixComponentConstructor : require('./components/get_user_profile/usersSubComponents/usersMatrixComponent'),
    usersBttnCreateComponentConstructor : require('./components/get_user_profile/usersSubComponents/usersBttnCreateComponent'),
    usersGetDataComponentConstructor : require('./components/get_user_profile/usersSubComponents/usersGetDataComponent'),
    usersBttnCreateHandlerConstructor : require('./components/get_user_profile/usersSubComponents/usersBttnCreateHandler'),
    usersDatasetRowHandlerConstructor: require('./components/get_user_profile/usersSubComponents/usersDatasetRowHandler'),

    searchComponentConstructor : require('./components/get_search_profile/searchComponent'),
    searchGetDataConstructor : require('./components/get_search_profile/searchGetData'),
    searchResultsComponentConstructor: require('./components/get_search_profile/searchResultsComponent'),
    addHandlerConstructor: require('./components/get_search_profile/addHandler'),

    createProjectComponentConstructor: require('./components/create_project/createProjectComponent'),
    submitButtonProjectHandlerConstructor: require('./components/create_project/submitProjectButtonHandler'),

    createDatasetComponentConstructor: require('./components/create_dataset/createDatasetComponent'),
    submitButtonDatasetHandlerConstructor : require('./components/create_dataset/submitDatasetButtonHandler'),

    createPostComponentConstructor: require('./components/create_post/createPostComponent'),
    createPostFormComponentConstructor : require('./components/create_post/subComponents/createPostFormComponent'),
    createPostListComponentConstructor : require('./components/create_post/subComponents/createPostListComponent'),
    createPostSaveButtonComponentConstructor : require('./components/create_post/subComponents/createPostSaveButtonComponent'),
    createPostAddPlotComponentConstructor : require('./components/create_post/subComponents/createPostAddPlotComponent'),
    createPostAddPlotButtonHandlerConstructor : require('./components/create_post/subComponents/createPostAddPlotButtonHandler'),
    createPostGetDatasetListConstructor : require('./components/create_post/subComponents/createPostGetDatasetListComponent'),
    createPostSaveButtonHandlerConstructor : require('./components/create_post/subComponents/createPostSaveButtonHandler'),

    getPlotComponentConstructor: require('./components/get_plot/getPlotComponent'),
    getPlotInfoComponentConstructor : require('./components/get_plot/subComponents/getPlotInfoComponent'),
    getPlotDataComponentConstructor : require('./components/get_plot/subComponents/getPlotDataComponent'),
    getPlotDiagramComponentConstructor : require('./components/get_plot/subComponents/getPlotDiagramComponent'),
    DataTransformConstructor : require('./components/get_plot/subComponents/DataTransformConstructor'),
    PlotConstructor : require('./components/structure_helpers/PlotConstructor'),

    getProjectComponentConstructor: require('./components/get_project/getProjectComponent'),
    getProjectCreateDatasetHandlerConstructor: require('./components/get_project/subComponents/datasetComponents/getProjectCreateDatasetHandler'),
    getProjectInfoComponentConstructor : require('./components/get_project/subComponents/getProjectInfoComponent'),
    getProjectDataComponentConstructor : require('./components/get_project/getProjectDataComponent'),
    getProjectDatasetComponentConstructor :require('./components/get_project/subComponents/datasetComponents/getProjectDatasetComponent'),
    getDatasetContentsHandlerConstructor :  require('./components/get_project/subComponents/datasetComponents/getDatasetContentsHandler'),
    gotContentsConstructor : require('./components/structure_helpers/post_structure/gotContents'),
    getProjectPostComponentConstructor : require('./components/get_project/subComponents/postComponents/getProjectPostComponent'),
    getProjectCreatePostHandlerConstructor : require('./components/get_project/subComponents/postComponents/getProjectCreatePostHandler'),
    fullPostButtonHandlerConstructor : require('./components/get_project/subComponents/postComponents/fullPostButtonHandler'),

    getPostComponentConstructor: require('./components/get_post/getPostComponent'),
    createResponseButtonHandlerConstructor: require('./components/get_post/createResponseButtonHandler'),


    createPlotComponentConstructor :require('./components/create_plot/createPlotComponent'),
    createPlotInfoComponentConstructor :require('./components/create_plot/subComponents/createPlotInfoComponent'),
    createPlotDatasetComponentConstructor : require('./components/create_plot/subComponents/createPlotDatasetComponent'),
    getDatasetContentsComponentConstructor : require('./components/create_plot/getDatasetContentsComponent'),
    createPlotPreviewComponentConstructor: require('./components/create_plot/subComponents/createPlotPreviewComponent'),

    getDatasetComponentConstructor : require('./components/get_dataset/getDatasetComponent'),
    getDatasetGridComponentConstructor : require('./components/get_dataset/subComponents/getDatasetGridComponent'),
    getDataConstructor : require('./components/get_dataset/subComponents/getDataConstructor'),
    getDatasetOptionsComponentConstructor : require('./components/get_dataset/subComponents/getDatasetOptionsComponent'),
    retrieveDataConstructor : require('./components/get_dataset/subComponents/retrieveDataConstructor'),

    errorHandler :require('./components/error/errorHandler'),
    store : localStorage
});

module.exports =  dependencies;