app.controller('NavController', ['$scope', function($scope) {
  $scope.navItems =
  	{
  		baseNav: [
  							{type:"link",				label:"Home",								alt:"Go to Libray home",							icon:"/img/home.png",							url:"./"},
  							{type:"link",				label:"Events",							alt:"Events, Calendar, etc.",					icon:"/img/events.png",						url:"./#"},
  							{type:"link",				label:"Catalog",						alt:"Browse the Catalog",							icon:"/img/catalog.png",					url:"./#"},
  							{type:"link",				label:"Location & Hours",		alt:"Location and Hours",							icon:"/img/locAndHours.png",			url:"./#"},
  							{type:"link",				label:"Services",						alt:"Services available the Library",	icon:"/img/home.png",							url:"./#"},
  							],
  		confRoomNav: [
  							{
  								id:"eventsNav",
  								type:"link",
  								label:"Events",
  								alt:"Browse Libray Events",
  								icon:"/img/events.png",
  								url:"./#events/home"
  							},
  							{
  								id:"roomNav",
  								type:"dropdown",
  								label:"Change Room",
  								alt:"View a different room",
  								icon:"/img/room.png",
  								url:"./#roomscheduler/"
  							},
  							{
  								id: "dateNav",
  								type:"other",
  								label:"Select Date",
  								alt:"view a different date",
  								icon:"/img/catalog.png",
  								url:"./#"
  							},
  							{
  								id: "eventSearchNav",
  								type:"search",
  								label:"Search",
  								alt:"Search Events",
  								icon:"/img/search.png",
  								url:"./#"
  							},
  							{
  								id: "confRoomSettingNav",
  								type:"dropdown",
  								label:"Settings",
  								alt:"Settings",
  								icon:"/img/settings.png",
  								url:"./#"
  							},
  							]
  	}
  		
}]);