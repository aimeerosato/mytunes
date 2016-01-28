// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  /*  Big Picture
  
    collection of songs that are waiting to be played
    when an item in the library is clicked, 
      it should be added to the queue (FIFO)

    functionality  
      -add items to queue (when enqueue)
      -remove item from list (when dequeue)

      -play first item in queue
      -if no items in queue, do nothing
      -once played, should be removed from queue

      -move following item to top of list
    
  */
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
      if(this.get(0) !== undefined){
        this.playFirst();
      }
      
    }); 

    this.on('dequeue', function(song) {
      this.remove(song);
    });

  }, 

  playFirst: function() {
    if(this.get(0) !== undefined){
      this.get(0).play();
    }
  }

  

  //where we get information from?

});
