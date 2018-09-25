<script type="text/javascript">

var siteUrl = 'https://thermofisher.sharepoint.com/sites/functions/hr1';

var collListItem;
var collListItemsDisc;
var PagesArray=[];
var iconclassArray=[];
var navItemclassArray=[];
var navHrefArray=[];
var $title;


 SP.SOD.executeFunc('sp.js', 'SP.ClientContext', retrieveListItems);
function retrieveListItems(){
    var clientContext = new SP.ClientContext(siteUrl);
    var oList = clientContext.get_web().get_lists().getByTitle('Pages');
    var camlQuery = new SP.CamlQuery();
    var pageValue="NavigationPage";
    camlQuery.set_viewXml("<View Scope='Recursive'><Query><Where><Eq><FieldRef Name ='PageType'/><Value Type='Text'>NavigationPage</Value></Eq></Where><OrderBy><FieldRef Name='CustomOrder'/></OrderBy></Query></View>");
    var folderPath="Pages/USBenefits";
    camlQuery.set_folderServerRelativeUrl(folderPath);
    collListItem= oList.getItems(camlQuery);
    clientContext.load(collListItem);
    clientContext.executeQueryAsync(onQuerySucceeded,onQueryFailed);
}

function onQuerySucceeded() {
    var ListEnumerator = collListItem.getEnumerator();
    var displayhtml="";
        while (ListEnumerator.moveNext()) {
            var currentItem = ListEnumerator.get_current();
			// Navigation Href links
			navHrefArray.push(currentItem.get_item('FileLeafRef'));
			// Navigation Items Name - Title
      //Getting the tile from the "Title" field in SP
      $title = currentItem.get_item('Title');
			// var PageName=currentItem.get_item('FileLeafRef').replace(/\.[^/.]+$/g, "");
			// PageName= PageName.split(/(?=[A-Z])/g).join(" ");
			// var $title=PageName.replace(/-/g, '');
			PagesArray.push($title);
			// Navigation Icon class Name
			var iconClassname=currentItem.get_item( 'IconClass');
			iconClassname="fa "+iconClassname;
			iconclassArray.push(iconClassname);
			// Navigation Item Class
			var NavClassName = $title.split(/(?=[A-Z])/)[0].toLowerCase();
			NavClassName=NavClassName.trim();
			navItemclassArray.push(NavClassName);
			//binding the nav items to html.
			displayhtml+="<li><a href='"+currentItem.get_item('FileLeafRef')+"' class='"+NavClassName+"'><i class='"+iconClassname+"'></i>"+ $title+"</a></li>";
		}
    // binding the items to html
    $(".task-nav").html(displayhtml);
    $(".task-nav-r").html(displayhtml);
    // $(".task-nav .benefits").addClass("current");
     var pagenavhtml="";
  var pageheadertext=$("#page-header").text();
  for (var i=0; i<PagesArray.length; i++){

       if (PagesArray[i]==pageheadertext)
	   {
	       if (i==0)
		   {
			var k=PagesArray.length-1;
			pagenavhtml= "<a href='"+navHrefArray[k]+"' class='"+navItemclassArray[k]+"'><i class='fa fa-arrow-left'></i>"+ PagesArray[k] +"<i class='"+iconclassArray[k]+"'></i></a>";
            pagenavhtml+="<a href='"+navHrefArray[i+1]+"' class='"+navItemclassArray[i+1]+"'><i class='"+iconclassArray[i+1]+"'></i>"+ PagesArray[i+1] +"<i class='fa fa-arrow-right'></i></a>";
		  }
		}
    }
    var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
      }
    };

    var page = getUrlParameter('page');

    switch(page) {
        case 'HealthAssessment':
            $(".task-nav .health").addClass("current");
            break;
        case 'Rates':
            $(".task-nav .2018").addClass("current");
            break;
        case 'Medical-Cigna':
            $(".task-nav .medical").addClass("current");
            break;
        case 'AllPlanDocuments':
            $(".task-nav .all").addClass("current");
            break;
        case 'BenPlanDcos':
            $(".task-nav .benefit").addClass("current");
            break;
        case 'Dental':
            $(".task-nav .dental").addClass("current");
            break;
        case 'HR-Only':
            $(".task-nav .benefits").addClass("current");
            break;
        case 'Life-ADD':
            $(".task-nav .life").addClass("current");
            break;
        case 'Medical-FairlawnUnion':
            $(".task-nav .fair").addClass("current");
            break;
        case 'Medical-LocalPlans':
            $(".task-nav .local").addClass("current");
            break;
        case 'Medical-Cigna':
            $(".task-nav .medical").addClass("current");
            break;
        case 'Prescriptions':
            $(".task-nav .prescriptions").addClass("current");
            break;
        case 'SavingsSpendingAccounts':
            $(".task-nav .savings").addClass("current");
            break;
        case 'SupplementalVoluntaryBenefits':
            $(".task-nav .supplemental").addClass("current");
            break;
        case 'Vision':
            $(".task-nav .vision").addClass("current");
            break;
        default:
            $(".task-nav .benefits").addClass("current");
    }

    // if (health == 'true') {
    //   $(".task-nav .health").addClass("current");
    // }
    // else {
    //     $(".task-nav .benefits").addClass("current");
    // }
  // $(".page-nav").html(pagenavhtml);
  getPageNavigationItem();

  $(".task-nav li a, .task-nav-r li a").on('click', addOnClick);
  }

  function addOnClick(e){
    e.preventDefault();
    var $url = $(this).attr("href");
    var $box = $(".ww-content");
    $('.content .ms-rtestate-field').css('visibility', 'hidden');
    $box.before( "<p class='ww-loader'>Loading...</p>" );
    $box.load('https://thermofisher.sharepoint.com/sites/functions/hr1/Pages/USBenefits/'+$url+' .ms-rtestate-field, #MSOZoneCell_WebPartWPQ5', function(){
      $('.ww-loader').remove();
      $('.content .ms-rtestate-field:first-child').remove();
      $('.ww-content').animateCss('fadeIn');
      getPageNavigationItem();
    });
    $('#s4-workspace').animate({ scrollTop: 0}, 'slow');
    hideMenu();
    $(".task-nav li a, .task-nav-r li a").removeClass("current");
    $(this).addClass("current");

    $title = $(this).text();
    $("#page-header").text($title);
    return false;
  }

  function addPageNavClick(e){
    e.preventDefault();
    var $url = $(this).attr("href");
    var $box = $(".ww-content");
    $('.content .ms-rtestate-field').css('visibility', 'hidden');
    $box.before( "<p class='ww-loader'>Loading...</p>" );
    $box.load('https://thermofisher.sharepoint.com/sites/functions/hr1/Pages/USBenefits/'+$url+' .ms-rtestate-field, #MSOZoneCell_WebPartWPQ5', function(){
      $('.ww-loader').remove();
      $('.content .ms-rtestate-field:first-child').remove();
      $('.ww-content').animateCss('fadeIn');
      getPageNavigationItem();
    });
    $('#s4-workspace').animate({ scrollTop: 0}, 'slow');
    hideMenu();
    $(".task-nav li a, .task-nav-r li a").removeClass("current");
    $title = $(this).text();
    $("#page-header").text($title);

    $(".task-nav li a").each(function(){
      if($(this).text() == $title){
        $(this).addClass("current");
      }
    });


    return false;
  }

  function onQueryFailed(){
    alert(' hi in fail');
  }

//   setTimeout(function(){$(".task-nav li:first-child a").trigger("click");},1500);
// $(".task-nav li:first-child a").trigger("click");
  // function getFileName() {
  //   //this gets the full url
  //   var url = document.location.href;
  //   // //this removes the anchor at the end, if there is one
  //   url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
  //   // //this removes the query after the file name, if there is one
  //   url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
  //   // //this removes everything before the last slash in the path
  //   url = url.substring(url.lastIndexOf("/") + 1, url.length);
  //   // //this removes everything after the last period (file extension)
  //   url = url.substring(0, url.lastIndexOf("."));
  //
  //   //return
  //   return url;
  // };

  function getPageNavigationItem(){
  var pagenavhtml="";
  var pageheadertext = $("#page-header").text();
  // console.log(pageheadertext+"^^^^^^^^^^^^^^");
  for (var i=0; i<PagesArray.length; i++){

       if (PagesArray[i]==pageheadertext)
	   {
	       if (i==0)
		   {
			var k=PagesArray.length-1;
			pagenavhtml= "<a href='"+navHrefArray[k]+"' class='"+navItemclassArray[k]+"'><i class='fa fa-arrow-left'></i>"+ PagesArray[k] +"<i class='"+iconclassArray[k]+"'></i></a>";
            pagenavhtml+="<a href='"+navHrefArray[i+1]+"' class='"+navItemclassArray[i+1]+"'><i class='"+iconclassArray[i+1]+"'></i>"+ PagesArray[i+1] +"<i class='fa fa-arrow-right'></i></a>";
		  }

		  else if(i==PagesArray.length-1){
		   pagenavhtml= "<a href='"+navHrefArray[i-1]+"' class='"+navItemclassArray[i-1]+"'><i class='fa fa-arrow-left'></i>"+ PagesArray[i-1]+"<i class='"+iconclassArray[i-1]+"'></i></a>";
           pagenavhtml+="<a href='"+navHrefArray[0]+"' class='"+navItemclassArray[0]+"'><i class='"+iconclassArray[0]+"'></i>"+ PagesArray[0] +"<i class='fa fa-arrow-right'></i></a>";
		  }
		  else {
		   pagenavhtml= "<a href='"+navHrefArray[i-1]+"' class='"+navItemclassArray[i-1]+"'><i class='fa fa-arrow-left'></i>"+ PagesArray[i-1]+"<i class='"+iconclassArray[i-1]+"'></i></a>";
           pagenavhtml+="<a href='"+navHrefArray[i+1]+"' class='"+navItemclassArray[i+1]+"'><i class='"+iconclassArray[i+1]+"'></i>"+ PagesArray[i+1] +"<i class='fa fa-arrow-right'></i></a>";
         }
	   }
  }
  $(".page-nav").html(pagenavhtml);
  $(".page-nav a").on('click', addPageNavClick);
   return pagenavhtml;
  };

</script>
