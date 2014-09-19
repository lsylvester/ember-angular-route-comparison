// anguler
$routeProvider
 .when('/Books', {
  templateUrl: 'books.html',
  controller: 'BooksController'
})
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
  this.route('books');
  this.route('book', {path: '/Book/:bookId'});
  this.route('chapter',{path: '/Book/:bookId/ch/:chapterId'});
})

// ember with nested resources

App.Router.map(function(){
  this.route('books');
  this.resource('book', {path: '/Book/:bookId'}, function(){
    this.route('chapter',{path: '/ch/:chapterId'})
  })
})