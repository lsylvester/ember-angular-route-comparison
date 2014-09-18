// anguler
$routeProvider
 .when('/Book/:bookId', {
  templateUrl: 'book.html',
  controller: 'BookController'
})
.when('/Book/:bookId/ch/:chapterId', {
  templateUrl: 'chapter.html',
  controller: 'ChapterController'
});

// ember

App.Router.map(function(){
  this.resource('book', {path: '/Book/:bookId'}, function(){
    this.resource('chapter',{path: '/ch/:chapterId'})
  })
})