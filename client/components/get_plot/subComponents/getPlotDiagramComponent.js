let getPlotDiagramComponentConstructor = (obj) => {
    let {dependencies,id} = obj;
    let {app,html,getPlotDataComponentConstructor,errorHandler,
        DataTransformConstructor,PlotConstructor} = dependencies;
    let getPlotDataComponent = getPlotDataComponentConstructor({id,dependencies});

    let {transformData} = DataTransformConstructor();
    let {generateChart,zoomListener,updateChart} = PlotConstructor();

    let state =[0,0,0,0];

    let init = () => {
        let getplot_diagram_div_el = html.create('div');
        html.mountTo(app)(getplot_diagram_div_el);

        let getplot_diagram_el = generateChart(getplot_diagram_div_el);

        let reset_button = html.create('button',{textContent:'Reset'});
        let mountToDiv = html.mountTo(getplot_diagram_div_el);

        let listenerFunc = ()=> {
            let init_obj = {direction:'init',currystart:0,curryend:0,zoomstart:0,zoomend:0};
            state[2] = 0;
            state[3] = 0;
            getPlotDataComponent.getData(init_obj)((err,body) => {
                let {data,plot_metadata} = body;
                update({data,plot_metadata,diagramEls:{static:[],
                    dynamic:[getplot_diagram_div_el,getplot_diagram_el,up_button,down_button]}});
            });
        };

        let addListenerToReset = html.addListenerTo(reset_button);
        addListenerToReset('click',listenerFunc);

        let up_button = html.create('button',{textContent:'Up'});
        let down_button = html.create('button',{textContent:'Down'});


        let upListener = () => {
            let my_obj = {direction:'up',currystart:state[0],
                curryend:state[1],zoomstart:state[2],zoomend:state[3]};

            getPlotDataComponent.getData(my_obj)((err,body) => {

                let {data,plot_metadata} = body;

                update({data,plot_metadata,diagramEls:{static:[],
                    dynamic:[getplot_diagram_div_el,getplot_diagram_el,up_button,down_button]}});
            });
        };

        let downListener = () => {
            let my_obj = {direction:'down',currystart:state[0],
                curryend:state[1],zoomstart:state[2],zoomend:state[3]};

            getPlotDataComponent.getData(my_obj)((err,body) => {

                let {data,plot_metadata} = body;

                update({data,plot_metadata,diagramEls:{static:[],
                    dynamic:[getplot_diagram_div_el,getplot_diagram_el,up_button,down_button]}});
            });
        };

        let addListenerToUp = html.addListenerTo(up_button);
        addListenerToUp('click',upListener);

        let addListenerToDown = html.addListenerTo(down_button);
        addListenerToDown('click',downListener);


        [reset_button,up_button,down_button].map((el) => {
            mountToDiv(el);
        });


        return {static:[],dynamic:[getplot_diagram_div_el,getplot_diagram_el,up_button,down_button]};
    };

    let update = (obj) => {
        let {data,plot_metadata,diagramEls} = obj;

        state[0] =data['arr_y_limits'][0];
        state[1] =data['arr_y_limits'][1];

        if(Number(state[0]) <= 0) diagramEls['dynamic'][3].disabled =  true;
        else diagramEls['dynamic'][3].disabled =  false;

        if(Number(state[1]) >= data['2d_arr_dims'][1]-1) diagramEls['dynamic'][2].disabled =  true;
        else diagramEls['dynamic'][2].disabled =  false;

        let arr=transformData(data);
        // let arr = data['arr'];
        // let xaxis =  data['xaxis'];
        updateChart(diagramEls['dynamic'][1],arr,plot_metadata,()=>{

            zoomListener(document,(err,point,pivot) => {
                    console.log(arr[0][point+1],arr[0][pivot+1]);

                    state[2] = parseFloat(arr[0][point+1]);
                    state[3] = parseFloat(arr[0][pivot+1]);
                    let my_obj = {direction:'static',currystart:state[0],
                        curryend:state[1],zoomstart:state[2],zoomend:state[3]};

                    getPlotDataComponent.getData(my_obj)((err,body) => {
                        let {data,plot_metadata} = body;

                        update({data,plot_metadata,diagramEls});
                    });
            });

        });

    };

    return {init,update};

};
module.exports = getPlotDiagramComponentConstructor;