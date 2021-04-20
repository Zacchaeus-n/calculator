/**References
 * https://daily-dev-tips.com/posts/vanilla-javascript-live-search/
 * https://codepen.io/michaelpanik/pen/wpNJLV
 * https://www.florin-pop.com/blog/2019/06/vanilla-javascript-instant-search/
 */

/**Selecting elements */
// const results = document.querySelector(".results__wrap");
// const submitBtn = document.querySelector(".submit");
// const hobbyField = document.querySelector("#hobby");
// const genderField = document.querySelector("#gender");
var app = angular.module("ShoppingListApp", []);
//SEECTION 1
app.controller("ListController", ($scope) => {
  $scope.list = ["bread", "mango", "pawpaw", "juice"];

  $scope.addItem = (shopList) => {
    $scope.list.push(shopList);
    $scope.newItem = "";
  };
  $scope.removeItem = (shopList) => {
    let itemToRemove = $scope.list.indexOf(shopList);
    $scope.list.splice(itemToRemove, 1);
  };
});

//SECTION 2
app.controller("ImageController", ($scope) => {
  // $scope.testing = "Testing scope";
  $scope.imagesCount = 0;

  $scope.avatar = [
    "/images/avatar/avatar0.jpg",
    "/images/avatar/avatar5.png",
    "/images/avatar/avatar7.jpg",
    "/images/avatar/avatar9.jpg",
    "/images/avatar/avatar10.png",
    "/images/avatar/avatar11.jpg",
  ];

  $scope.previous = () => ($scope.imagesCount -= 1);
  $scope.next = () => ($scope.imagesCount += 1);
});

//SECTION 3
app.controller("ComposersController", ($scope) => {
  // $scope.testing = "Testing scope";
  $scope.pieces = [
    {
      img: "/images/composers/amadeus.jpg",
      composer: "Amadeus Mozart",
      title: "The magic flute",
    },
    {
      img: "/images/composers/amadeus.jpg",
      composer: "Amadeus Mozart",
      title: "Requiem",
    },
    {
      img: "/images/composers/amadeus.jpg",
      composer: "Amadeus Mozart",
      title: "Symphony N0. 40",
    },
    {
      img: "/images/composers/amadeus.jpg",
      composer: "Amadeus Mozart",
      title: "Eine kleine Nachtmusik",
    },
    {
      img: "/images/composers/amadeus.jpg",
      composer: "Amadeus Mozart",
      title: "The Marriage of Figaro",
    },
    {
      img: "/images/composers/beethoven.jpg",
      composer: "Van Beethoven",
      title: "Symphony N0. 5",
    },
    {
      img: "/images/composers/beethoven.jpg",
      composer: "Van Beethoven",
      title: "Symphony N0. 6",
    },
    {
      img: "/images/composers/beethoven.jpg",
      composer: "Van Beethoven",
      title: "Symphony N0. 7",
    },
    {
      img: "/images/composers/beethoven.jpg",
      composer: "Van Beethoven",
      title: "Fur Elise",
    },
    {
      img: "/images/composers/beethoven.jpg",
      composer: "Van Beethoven",
      title: "Piano Sonata N0. 14",
    },
    {
      img: "/images/composers/beethoven.jpg",
      composer: "Van Beethoven",
      title: "Symphony N0. 9",
    },
    {
      img: "/images/composers/sebastian.jpg",
      composer: "Sebastian Bachh",
      title: "The Well-Tempered Clever",
    },
    {
      img: "/images/composers/sebastian.jpg",
      composer: "Sebastian Bach",
      title: "Toccata and Fugue in D minor, BWV 565",
    },
    {
      img: "/images/composers/sebastian.jpg",
      composer: "Sebastian Bach",
      title: "Air on the G String",
    },
    {
      img: "/images/composers/sebastian.jpg",
      composer: "Sebastian Bach",
      title: "St. Matthew Passion",
    },
    {
      img: "/images/composers/sebastian.jpg",
      composer: "Sebastian Bach",
      title: "Ave Maria",
    },
    {
      img: "/images/composers/sebastian.jpg",
      composer: "Sebastian Bach",
      title: "Fugue in D minor, BWV 565",
    },
  ];
});

//SECTION 4
app.controller("SingersController", ($scope) => {
  // $scope.testing = "Testing scope";
  $scope.singers = [
    {
      img: "/images/avatar/avatar0.jpg",
      composer: "Van Beethoven",
      gender: "male",
      like: "🤦‍♀️",
    },
    {
      img: "/images/avatar/avatar1.jpg",
      composer: "Van Beet hoven",
      gender: "male",
      like: "🤦‍♀️",
    },
    {
      img: "/images/avatar/avatar3.jpg",
      composer: "Beet hoven",
      gender: "male",
      like: "👍🏽",
    },
    {
      img: "/images/avatar/avatar6.jpg",
      composer: "Van hoven",
      gender: "male",
      like: "👍🏽",
    },
    {
      img: "/images/avatar/avatar10.png",
      composer: "Van smith",
      gender: "male",
      like: "👌",
    },
    {
      img: "/images/avatar/avatar9.jpg",
      composer: "Wes Ben",
      gender: "male",
      like: "🤦‍♀️",
    },
    {
      img: "/images/avatar/avatar6.jpg",
      composer: "Sebastian Bachh",
      gender: "male",
      like: "💚",
    },
    {
      img: "/images/avatar/avatar7.jpg",
      composer: "Sarah Bach",
      gender: "female",
      like: "❤",
    },
    {
      img: "/images/avatar/avatar11.jpg",
      composer: "Elizabeth Bach",
      gender: "female",
      like: "🙌",
    },
    {
      img: "/images/avatar/avatar5.png",
      composer: "Lizzy Black",
      gender: "female",
      like: "👍",
    },
    {
      img: "/images/avatar/avatar7.jpg",
      composer: "Sebastian Bach",
      gender: "female",
      like: "👌",
    },
  ];
});
//SECTION 5
app.controller("LeadersController", ($scope) => {
  // $scope.testing = "Testing scope";
  $scope.showGold = false;
  $scope.showBronze = false;
  $scope.showSilver = false;

  $scope.toggleGold = () => ($scope.showGold = !$scope.showGold);
  $scope.toggleBronze = () => ($scope.showBronze = !$scope.showBronze);
  $scope.toggleSilver = () => ($scope.showSilver = !$scope.showSilver);

  $scope.leaders = [
    {
      img: "/images/leaders/BARBAROSSA.png",
      rank: 1,
    },
    {
      img: "/images/leaders/CATHERINE_DE_MEDICI.png",
      rank: 1,
    },
    {
      img: "/images/leaders/GANDHI.png",
      rank: 1,
    },
    {
      img: "/images/leaders/DIDO.png",
      rank: 2,
    },
    {
      img: "/images/leaders/CLEOPATRA.png",
      rank: 2,
    },
    {
      img: "/images/leaders/GENGHIS_KHAN.png",
      rank: 2,
    },
    {
      img: "/images/leaders/GILGAMESH.png",
      rank: 3,
    },
    {
      img: "/images/leaders/GORGO.png",
      rank: 3,
    },
    {
      img: "/images/leaders/ICON_LEADER_CHANDRAGUPTA.png",
      rank: 3,
    },
  ];
});
//SECTION 6
app.controller("HerosController", ($scope) => {
  // $scope.testing = "Testing scope";
  $scope.favorites = [];
  console.log($scope.favorites);
  $scope.addFavorite = function (favorite) {
    $scope.favorites.push(favorite);
  };
  $scope.leaders = [
    {
      img: "/images/leaders/BARBAROSSA.png",
      name: "BARBAROSSA",
    },
    {
      img: "/images/leaders/CATHERINE_DE_MEDICI.png",
      name: "CATHERINE DE MEDICI",
    },
    {
      img: "/images/leaders/GANDHI.png",
      name: "GANDHI",
    },
    {
      img: "/images/leaders/ELEANOR_FRANCE.png",
      name: "ELEANOR FRANCE",
    },
    {
      img: "/images/leaders/ELEANOR_ENGLAND.png",
      name: "ELEANOR ENGLAND",
    },
    {
      img: "/images/leaders/DIDO.png",
      name: "DIDO",
    },
    {
      img: "/images/leaders/CLEOPATRA.png",
      name: "CLEOPATRA",
    },
    {
      img: "/images/leaders/GENGHIS_KHAN.png",
      name: "GENGHIS KHAN",
    },
    {
      img: "/images/leaders/GILGAMESH.png",
      name: "GILGAMESH",
    },
    {
      img: "/images/leaders/GORGO.png",
      name: "GORGO",
    },
    {
      img: "/images/leaders/ICON_LEADER_CHANDRAGUPTA.png",
      name: "CHANDRAGUPTA",
    },
  ];
});
//SECTION 7
app.controller("LiveSearchController", ($scope) => {
  $scope.testing = "Testing scope";
  $scope.favorites = [];
  console.log($scope.favorites);
  $scope.addFavorite = function (favorite) {
    $scope.favorites.push(favorite);
  };
  $scope.leaders = [
    {
      img: "/images/leaders/BARBAROSSA.png",
      name: "BARBAROSSA",
    },
    {
      img: "/images/leaders/SULEIMAN.png",
      name: "SULEIMAN",
    },
    {
      img: "/images/leaders/KUPE.png",
      name: "KUPE",
    },
    {
      img: "/images/leaders/KRISTINA.png",
      name: "KRISTINA",
    },
    {
      img: "/images/leaders/CATHERINE_DE_MEDICI.png",
      name: "CATHERINE DE MEDICI",
    },
    {
      img: "/images/leaders/GANDHI.png",
      name: "GANDHI",
    },
    {
      img: "/images/leaders/ELEANOR_FRANCE.png",
      name: "ELEANOR FRANCE",
    },
    {
      img: "/images/leaders/ELEANOR_ENGLAND.png",
      name: "ELEANOR ENGLAND",
    },
    {
      img: "/images/leaders/DIDO.png",
      name: "DIDO",
    },
    {
      img: "/images/leaders/CLEOPATRA.png",
      name: "CLEOPATRA",
    },
    {
      img: "/images/leaders/GENGHIS_KHAN.png",
      name: "GENGHIS KHAN",
    },
    {
      img: "/images/leaders/GILGAMESH.png",
      name: "GILGAMESH",
    },
    {
      img: "/images/leaders/GORGO.png",
      name: "GORGO",
    },
    {
      img: "/images/leaders/ICON_LEADER_CHANDRAGUPTA.png",
      name: "CHANDRAGUPTA",
    },
  ];
});
