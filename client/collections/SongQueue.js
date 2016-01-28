// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){

    this.on('add', function(song) { 
      // If first song....
      if(this.indexOf(song) === 0){
        // then play song
        this.playFirst();
      } 
    }, this);

    this.on('ended', function() {
      this.shift();
      if(this.at(0) !== undefined){
        this.playFirst();
      }
      
    }, this); 

    this.on('dequeue', function(song) {
      this.remove(song);
    }, this);

  }, 

  playFirst: function() {
    if(this.at(0) !== undefined){
      this.at(0).play();
    }
  }

  

  //where we get information from?

});
