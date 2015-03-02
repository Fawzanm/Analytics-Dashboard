//$(document).ready(
//    $('.tab-content').find('a').click(function () {
//        //console.log("Clicked")
//        var divId = ($(this).attr("href"));
//        $('.tab-item').hide();
//        $(divId).show();
//    })
//);
//
//$(document).ready(
//    $('.collapse').find('a').click(function () {
//        var divId = ($(this).attr("href"));
//        $('.tab-menu').hide();
//        $(divId).show();
//    })
//);
//
//$(document).ready(
//    $('.parent_menu').find('a').click(function () {
//        //console.log("Clicked")
//        $(this).find('.parent').toggleClass('glyphicon-plus-sign glyphicon-minus-sign');
//    })
//);
//
//
//function formatDashBoardArray(jsonArray, field) {
//
//    //var uniqueFields = [];
//    var obj = {};
//
//    jsonArray.forEach(function (d) {
//
//        //console.log(!(d[field] in obj));
//
//        if (!(d[field] in obj)) {
//
//            obj[d[field]] = [d];
//
//
//        } else {
//            obj[d[field]].push(d);
//        }
//
//
//    });
//
//    //console.log(obj);
//    //console.log(uniqueFields);
//    return obj;
//}


/**
 * Created by fawzan on 2/19/15.
 */


function createSidebarParent(id, group, href){

    //var divGroupPanel = $('<div>',{
    //    id:'sidebarItems',
    //    class:'list-group panel'
    //});

    //divGroupPanel.appendTo($("#sidebar"));

    var divGroupPanel = $('#sidebarItems');


    var divParentMenu = $('<div>',{
        class:'parent_menu',
        id:id
    });
    //append divParentMenu to divGroupPanel
    divParentMenu.appendTo(divGroupPanel);

    var divListGroupItem = $('<div>',{
        id:'dummy',
        class:'list-group-item'
    });

    //append divListGroupItem to divParentMenu
    divListGroupItem.appendTo(divParentMenu);


    var anchorListGroupItem = $('<a>',{
        href:"#"+href,
        class:'list-group-item clearfix',
        'data-toggle':"collapse"
    });

    anchorListGroupItem.appendTo(divListGroupItem);

    var spanAnchorListGroupItem = $('<span>',{
        class:'glyphicon glyphicon-circle-arrow-down'
    });
    spanAnchorListGroupItem.appendTo(anchorListGroupItem);

    var spanIcon = $('<span>',{
        class:'pull-right'
    });
    spanIcon.appendTo(anchorListGroupItem);

    var button = $('<button>',{
        class:'btn btn-xs btn-success'
    });
    button.appendTo(spanIcon);

    var span = $('<span>',{
        class:'glyphicon glyphicon-plus-sign'
    });
    span.appendTo(button);

    var h2 = $('<text>',{
        text:group
    });
    h2.appendTo(anchorListGroupItem);

    //create child elements
    var divDemo1 = $('<div>',{
        class:'collapse',
        id:href
    });

    //divDemo1.appendTo(divListGroupItem);
    divDemo1.appendTo(divListGroupItem);

    button.click(function(e){

        console.log("Clicked : Add Child Item to sidebar");
        e.stopPropagation();
        var child = prompt('Enter the Dashboard Name');
        if(child !== ''){
            createSidebarChild(id,id, href);
        }

    });

    //anchorListGroupItem.click(function(e){
    //    console.log("Clicked: Anchor");
    //
    //});


}

function createSidebarChild(id, parentId, href){



    var divDemo1 = $('#'+parentId).find('#'+href);

    var anchorLink = $('<a>',{
        'data-id' : id,
        href:"#tab-"+id,
        class:'list-group-item child-link'
    });
    anchorLink.appendTo(divDemo1);

    var spanAnchorLink = $('<span>',{
        class:'glyphicon glyphicon-stats'
    });
    spanAnchorLink.appendTo(anchorLink);

    var spanDelete = $('<span>',{
        class:'pull-right'
    });
    spanDelete.appendTo(anchorLink);

    var buttonSpan = $('<button>',{
        class:'btn btn-xs btn-warning'
    });
    buttonSpan.appendTo(spanDelete);

    var spanButton = $('<span>',{
        class:'glyphicon glyphicon-trash'
    });
    spanButton.appendTo(buttonSpan);

    var anchorText = $('<text>',{
        text:'Child 1'
    });
    anchorText.appendTo(anchorLink);

    anchorLink.click(function () {
        console.log("Clicked : Child Item " + id);
        createDashboardTab( id, parentId + "-" + id, 'default');



    });

    buttonSpan.click(function(){

        var div = $(this).closest('a').attr('href');
        $(div).remove();
        console.log("div"+div);
        $(this).closest('.child-link').remove();

    });



}

function createAddMoreParent(href){

    var divParentMenu = $('<div>',{
        class:'parent_menu'
    });
    divParentMenu.appendTo($('#sidebarItems'));

    var divListGroupItem = $('<div>',{
        class:'list-group-item'
    });
    divListGroupItem.appendTo(divParentMenu);
    var anchor = $('<a>',{
        href:"#"+href,
        class:'list-group-item clearfix text-center',
        text:'Add More'
    });
    anchor.appendTo(divListGroupItem);


    anchor.click(function () {
        console.log("clicked : Add More Parent");
        var person = prompt("Please enter your name");

        if(person){
            createSidebarParent(1,person,'demo');
        }

    });

}

function createDashboardTab(newDivId, dashboardId, title){

    //create the tabbed container div (if not exist).

    $('.tab-menu').hide();

    var tabbedDiv;

    if($('#tab-'+newDivId).length <= 0 ){

        tabbedDiv = $('<div>',{
            class:'tab-menu col-md-9',
            id: 'tab-' + newDivId,
            text:'new Div added' + dashboardId

        });
        tabbedDiv.appendTo( $('.row') );
        var spanDiv = $('<div>',{
            class:'span6'
        });

        var ulSpan = $('<ul>',{
            class:'nav nav-tabs'
        });

        var liItem1 = $('<li>',{
            role:'presentation'

        });
        var anchorLi1 = $('<a>',{
            href:'#',
            text : '+',
            class:'tab-item add-more-tabs',
            'data-dashboardId' : dashboardId

        });
        var liItem2 = $('<li>',{
            role:'presentation',
            class:'active'
        });

        var anchorLi2 = $('<a>',{
            href:'#',
            text :  title,
            class:'tab-item',
            'data-dashboardId' : dashboardId

        });

        spanDiv.appendTo(tabbedDiv);
        ulSpan.appendTo(spanDiv);
        liItem1.appendTo(ulSpan);
        anchorLi1.appendTo(liItem1);
        liItem2.appendTo(ulSpan);
        anchorLi2.appendTo(liItem2);

        $('tab-menu-item').click(function(){

            $(this).closest('ul').find('.active').removeClass('active');
            $(this).closest('li').addClass('active');
            console.log($(this).attr('data-dashboardId'));
        });

        $('.add-more-tabs').click(function(){

            var liItem = $('<li>',{
                //role:'presentation',
                ///class:'active'
                class:'tab-menu-item'
            });

            var title = prompt("Enter the Title", "title ");
            var anchorLi = $('<a>',{
                href:'#',
                text : title,
                class:'tab-item',
                'data-dashboardId' : dashboardId

            });

            liItem.appendTo(ulSpan);
            anchorLi.appendTo(liItem);


        });

    }else{

        tabbedDiv = $('#tab-'+newDivId).show();
    }


    //append add more tab


}

function createAddMoreDashboardTab(divId, dashboardId){

}

$(document).ready(

    function(){


        $('#myModal').modal({
            backdrop: 'static',
            keyboard: true
        });

        // create the div id='main
        var divMain = $('<div>',{
            id:'main',
            class:'container',
            role:'main'
        });

        //append the 'main' div to the body
        divMain.appendTo('body');

        //create the title div
        var divTitle = $('<div>',{
            id:'title',
            class: 'span5 offset1'
        });

        //append 'title' div to 'main' div
        divTitle.appendTo(divMain);

        //create the title heading
        var h2Title = $('<div>',{
            text:'Analytics Dashboard'
        });

        //append title to the 'title' div
        h2Title.appendTo(divTitle);



        //create the div .row
        var divRow = $('<div>',{
            class: 'row'
        });
        //append .row to main
        divRow.appendTo(divMain);


        var divSidebar = $('<div>',{
            class:'col-md-3 sidebar sidebar-menu-collapsed',
            id:'sidebar'
        });
        //append divSidebar to div .row
        divSidebar.appendTo(divRow);


        var divGroupPanel = $('<div>',{
            id:'sidebarItems',
            class:'list-group panel'
        });

        //append divGroupPanel to sidebar
        divGroupPanel.appendTo(divSidebar);



        for(var i=0; i<1; i++){

            createAddMoreParent('aaa');

            createSidebarParent(9, 'Parent 1','b');
            createSidebarChild(1,9,'b');
            createSidebarChild(2,9,'b');

            createSidebarParent(8, 'Parent 2','d');
            createSidebarChild(3,8,'d');
            createSidebarChild(4,8,'d');




        }

        //createDashboardParent('one',$('#sidebarItems'));
    }

);