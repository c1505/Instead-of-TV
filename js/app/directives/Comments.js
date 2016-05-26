var Comments = {
  bindings: {
    kids: '='
  },
  templateUrl: "views/comments.html",
  controller: function(BasicService) {
    var ctrl = this;
    this.sing = this.kids[0];
    this.allComments = this.allComments || [];
    this.kids.forEach(function(item) {
      BasicService.story(item)
      .then(function(res) {
        ctrl.allComments.push(res.data);
      });
    });
  },
  controllerAs: 'ctrl'
};

angular
  .module('app')
  .component('comments', Comments);