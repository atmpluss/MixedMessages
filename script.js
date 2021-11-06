const mixedMessage = {
    _start:['All our dreams can come true, if we have the courage to pursue them.',
    'The secret of getting ahead is getting started.',
    'Don’t limit yourself.',
    'The best time to plant a tree was 20 years ago.',
    'Do what you feel in your heart to be right',
    'Your passion is waiting for your courage to catch up.'],
    _mid:[' Only the paranoid survive.',
    ' It’s hard to beat a person who never gives up.',
    ' If people are doubting how far you can go, go so far that you can’t hear them anymore.',
    ' We need to accept that we won’t always make the right decisions.',
    ' Whatever you are, be a good one.',
    ' Magic is believing in yourself.'],
    _end:[' You’ve gotta dance like there’s nobody watching.',
    ' Everything you can imagine is real.',
    ' When one door of happiness closes, another opens.',
    ' Do one thing every day that scares you.',
    ' Impossible is just an opinion.',
    'Hold the vision, trust the process.'],

    randomMessageGenerator: function(){
        
        return this._start[Math.floor(Math.random()*this._start.length)]
         + this._mid[Math.floor(Math.random()*this._mid.length)]
          + this._end[Math.floor(Math.random()*this._end.length)];
    },

    randomMessageDisplay: function(){
        console.log(this.randomMessageGenerator());
    },


};

mixedMessage.randomMessageDisplay();
