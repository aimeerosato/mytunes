// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    // This will change once queue is implemented b/c songs are played from queue.  ?? Maybe
    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      // add song to Queue
      // tell queue to add song
      // Gets songQueue we instantiated on line 6.  Adds the song to it.
      this.get('songQueue').add(song);
    }, this);
  }

});


/*

  var appModel =
  { currentSong: this is a SongModel Object
    songQueue: this is a SongQueue Object.  A SongQueue Object is a subclass of Songs.  Songs is a collection of SongModels
    library: this is a Songs object.  Songs is a collection of SongModels
  }

*/