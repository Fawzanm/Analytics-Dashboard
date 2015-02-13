$(document).ready(
    $('.tab-content').find('a').click(function () {
        //console.log("Clicked")
        var divId = ($(this).attr("href"));
        $('.tab-item').hide();
        $(divId).show();
    })
);

$(document).ready(
    $('.collapse').find('a').click(function () {
        var divId = ($(this).attr("href"));
        $('.tab-menu').hide();
        $(divId).show();
    })
);

$(document).ready(
    $('.parent_menu').find('a').click(function () {
        //console.log("Clicked")
        $(this).find('.parent').toggleClass('glyphicon-plus-sign glyphicon-minus-sign');
    })
);


function formatDashBoardArray(jsonArray, field) {

    //var uniqueFields = [];
    var obj = {};

    jsonArray.forEach(function (d) {

        //console.log(!(d[field] in obj));

        if (!(d[field] in obj)) {

            obj[d[field]] = [d];


        } else {
            obj[d[field]].push(d);
        }


    });

    //console.log(obj);
    //console.log(uniqueFields);
    return obj;
}