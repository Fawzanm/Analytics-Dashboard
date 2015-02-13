/**
 * Created by fawzan on 2/6/15.
 */


/**
 * function to retrieve all the dashboard info. for the menu
 * @return array of dashboards : JSON Objects
 */
function getDashboards() {
    return dashboard;
}

/**
 * function to retrieve the pages meta for the seected dashboard
 * @param dashboardId
 * @return array of Page meta : JSON Objects
 */
function getDashboardPagesMeta(dashboardId) {

    var dashboardPageMeta = [
        {'id': '1', 'title': 'tab-' + dashboardId + '-1'},
        {'id': '2', 'title': 'tab-' + dashboardId + '-2'},
        {'id': '3', 'title': 'tab-' + dashboardId + '-3'},
        {'id': '4', 'title': 'tab-' + dashboardId + '-4'}
    ];

    return dashboardPageMeta;
}

/**
 * function to retrieve the page content for the selected page
 * @param dashboardId
 * @param pageId
 * @return Page content : array of JSON object
 */
function getPageContents(dashboardId, pageId) {


    console.log('---------------------');
    console.log('d : ' + dashboardId + " p: " + pageId) ;
    console.log('---------------------');
    var dashboardPageContent = [

        {id : 1, name:'John'+dashboardId+'-'+pageId, content:'content-'+dashboardId+'-'+pageId},
        {id : 6, name:'Jane'+dashboardId+'-'+pageId,content:'content-'+dashboardId+'-'+pageId},
        {id : 7, name:'Jane'+dashboardId+'-'+pageId,content:'content-'+dashboardId+'-'+pageId},
        {id : 8, name:'Jane'+dashboardId+'-'+pageId,content:'content-'+dashboardId+'-'+pageId},
        {id : 11, name:'Jane'+dashboardId+'-'+pageId,content:'content-'+dashboardId+'-'+pageId},
        {id : 9, name:'Jane'+dashboardId+'-'+pageId,content:'content-'+dashboardId+'-'+pageId},
        {id : 10, name:'Jane'+dashboardId+'-'+pageId,content:'content-'+dashboardId+'-'+pageId},
        {id : 5, name:'Doe'+dashboardId+'-'+pageId,content:'content-'+dashboardId+'-'+pageId},
        {id : 4, name:'Wayne'+dashboardId+'-'+pageId,content:'content-'+dashboardId+'-'+pageId},
        {id : 3, name:'oliver'+dashboardId+'-'+pageId,content:'content-'+dashboardId+'-'+pageId},
        {id : 2, name:'barry'+dashboardId+'-'+pageId,content:'content-'+dashboardId+'-'+pageId}

    ];

    return dashboardPageContent;


}

function getObjById(arrayOfJSONObj, id){

    for(var i=0; i<arrayOfJSONObj.length;i++){
        if(arrayOfJSONObj[i].id == id){
            return arrayOfJSONObj[i];
        }
    }

}

function getLoc(maxCol, droppedItem){

    var row = 1 +  Math.floor(droppedItem/maxCol) ;
    var col =  droppedItem % maxCol;

    if(col == 0 ) col = maxCol;
    return {
        row : row,
        col : col
    }

}