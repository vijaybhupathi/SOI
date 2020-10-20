//THIS CALL IS USED TO FETCH BLOG ARTICLES
//BLOG FETCH BEGINS

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://www.stateofindia.in/blog/wp-json/wp/v2/posts?_embed=&per_page=3",
    "method": "GET"
    }

    $.ajax(settings).done(function (response) {
    var i;
    var memory;
    var build = "";
    for (i = 0; i < 3; i++) {
        var newData = JSON.stringify(response[i]);
        var obj = JSON.parse(newData);
        var blogmedia = JSON.stringify(obj._embedded['wp:featuredmedia']['0'].source_url);
        memory = "<div class='col-md-4 justify-content-center'><div class='bg-light master-hover' style='width:95%'><img src="+ blogmedia +" width='100%' alt=''><p class='mt-2 ml-2'>"+ (obj.title).rendered +"</p><a href='"+ obj.link +"'><p class='ml-2 pb-2'>Read More</p></a></div></div>";
      //text += i;
        build += memory;
    }
    document.getElementById("blogdata").innerHTML = build;
    });

//BLOG FETCH ENDS

//THIS CALL IS USED FOR SLIDER ITEMS
//SLIDER FETCH BEGINS

var sliders = {
    "async": true,
    "crossDomain": true,
    "url": "http://www.stateofindia.in/blog/wp-json/wp/v2/slider_item/",
    "method": "GET"
    }

    $.ajax(sliders).done(function (response) {
    var Data = JSON.stringify(response[0]);
    var slider_obj = JSON.parse(Data);
    console.log((slider_obj.title).rendered);
    console.log((slider_obj.acf).link_to_visualization);
    var finalData = ((slider_obj.acf).embed_code).replace(/\\/g, "");
    console.log(finalData);
    var j;
    var slidercode;
    var builder = "";
    for (j = 0; j < 10; j++) {
        //build += memory;
    }
    });

//SLIDER FETCH ENDS