const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const header = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play');
const player = $('.player')
const progess = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const btnRandom = $('.btn-random');
const btnRepeat = $('.btn-repeat');
const playlist = $('.playlist');

const app = 
{ 
  currentIndex: 0,
  isPlaying: false,
  isRandom: true,
  isRepeat: true,
    songs: [
        {
          name: "Em không sai chúng ta sai",
          singer: "Erik",
          path: "https://data.chiasenhac.com/down2/2232/4/2231190-17ab501c/128/Em%20Khong%20Sai%20Chung%20Ta%20Sai%20-%20Erik.mp3",
          image: "https://data.chiasenhac.com/data/cover/158/157662.jpg"
        },
        {
          name: "See Tình",
          singer: "Hoàng Thùy Linh",
          path: "https://data.chiasenhac.com/down2/2226/0/2225812-e3722baa/128/See%20Tinh%20-%20Hoang%20Thuy%20Linh.mp3",
          image:'https://data.chiasenhac.com/data/cover/156/155591.jpg'
        },
        {
          name: "Vui Lắm Nha",
          singer: "Hương Ly ft Jombie",
          path: "https://data.chiasenhac.com/down2/2217/0/2216465-0ddd4ca9/128/Vui%20Lam%20Nha%20-%20Huong%20Ly_%20Jombie.mp3",
          image: "https://data.chiasenhac.com/data/cover/153/152594.jpg"
        },
        {
          name: "Khuê Mộc Lang",
          singer: "Hương Ly ft Jombie",
          path: "https://data.chiasenhac.com/down2/2189/0/2188638-b017b616/128/Khue%20Moc%20Lang%20-%20Huong%20Ly_%20Jombie.mp3",
          image:"https://data.chiasenhac.com/data/cover/146/145133.jpg"
        },
        {
          name: "Lạc Trôi",
          singer: "Sơn Tùng MTP",
          path: "https://data3.chiasenhac.com/downloads/2123/0/2122884-bdb6cdd3/128/Lac%20Troi%20-%20Son%20Tung%20M-TP_.mp3",
          image:"https://data.chiasenhac.com/data/cover/130/129082.jpg"
        },
        {
          name: "Muộn rồi mà sao còn",
          singer: "Sơn Tùng MTP",
          path:
            "https://data.chiasenhac.com/down2/2169/0/2168156-4608576a/128/Muon%20Roi%20Ma%20Sao%20Con%20-%20Son%20Tung%20M-TP.mp3",
          image:
            "https://data.chiasenhac.com/data/cover/140/139611.jpg"
        },
        {
          name: "They Said",
          singer: "Binz ft Touliver",
          path:  "https://data3.chiasenhac.com/downloads/2109/0/2108627-49eb4c8a/128/They%20Said%20-%20Binz_%20Touliver.mp3",
          image: "https://data.chiasenhac.com/data/cover/126/125484.jpg"
        },
        {
          name: "Ok",
          singer: "Binz",
          path:  "https://data.chiasenhac.com/down2/2232/0/2231211-64caa270/128/OK%20-%20Binz.mp3",
          image: "https://data.chiasenhac.com/data/cover/115/114164.jpg"
        }
    ],

    /* Render Songs to the playList */
    render : function()
    {

        const htmls = this.songs.map( (song, index) => {
            return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index = ${index}>
                    <div class="thumb"
                        style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `;
        })

        playlist.innerHTML = htmls.join('');
    },

    /* Define new property at here */
    defineProperties : function()
    {
      Object.defineProperty(this, 'currentSong', {
        get: function()
        {
          return this.songs[this.currentIndex];
        }
      })
    },
    /* handle Event*/

    handleEvents: function()
    {   
      const _this = this;
      const cdwidth = cd.offsetWidth;
      // handle cd: Quay / Dung 

      const cdThumbAnimate = cdThumb.animate([{transform: 'rotate(360deg)'}],{
        duration : 10000,
        iterations: Infinity
      });

      cdThumbAnimate.pause();
      

      // handle scale bg
      document.onscroll = function()
      {
        const scrollTop = Math.round(window.scrollY || document.documentElement.scrollTop);
        const newWidth = cdwidth - scrollTop;
        // console.log(newWidth)
        cd.style.width = newWidth > 0 ?  newWidth + 'px' : 0;
        cd.style.opacity = newWidth / cdwidth;
      }

      // handle kick play
      playBtn.onclick = function()
      { 
        if(_this.isPlaying)
        {
          audio.pause();
        }
        else
        {
          audio.play();
        }
      }

      // khi audio play
      audio.onplay = function()
      {
        _this.isPlaying = true;
        player.classList.add('playing')
        cdThumbAnimate.play();
      }
      // audio pause
      audio.onpause = function()
      {
        player.classList.remove('playing')
        _this.isPlaying = false;
        cdThumbAnimate.pause();
      }

      // Button next
      nextBtn.onclick = function()
      {
        _this.nextSong();
        audio.play();
      }

      // Button Prev
      prevBtn.onclick = function()
      {
        _this.prevSong();
        audio.play();
      }

      // progressing of song
      audio.ontimeupdate = function()
      { 
        if(audio.duration)
        {
          // console.log(audio.currentTime, audio.duration)
          const progressPercent = (audio.currentTime/audio.duration) * 100
          progress.value = progressPercent;

          if(audio.currentTime === audio.duration)
          {
            if(_this.isRandom === false){
              _this.button_Random();
            }
            else if(_this.isRepeat === false)
            {
              _this.button_Repeat();
            }
            else
            {
              _this.nextSong();
              audio.play();
            }
          }
        }
      }

      // progressing on change
      progress.onchange = function(e)
      {
        const seekTime = e.target.value;
        audio.currentTime = audio.duration/100 * seekTime;
      }

      btnRandom.onclick = function()
      {   
        if(_this.isRandom)
        {
          _this.button_Random();
          btnRandom.classList.add('active');
          _this.isRandom = false;
        }
        else
        {
          _this.isRandom = true;
          btnRandom.classList.remove('active');
        }
      }

      playlist.onclick = function(e)
      {
        const songNode = e.target.closest('.song:not(.active)');
        if( songNode || e.target.closest('option'))
        {
          if(songNode)
          {
            _this.currentIndex = Number(songNode.dataset.index);
            _this.loadCurrentSong();
            _this.render();
            audio.play();
          }
        }
      }

      btnRepeat.onclick = function()
      {
        if(_this.isRepeat)
        {
          btnRepeat.classList.add('active')
          _this.isRepeat = false;
        }
        else
        {
          btnRepeat.classList.remove('active')
          _this.isRepeat = true;
        }
      }
    },

    /* Load Current Song */

    loadCurrentSong: function()
    {
      // console.log(header, cdThumb, audio)
      header.textContent = app.currentSong.name;
      cdThumb.style.backgroundImage = `url('${app.currentSong.image}')`;
      audio.src = app.currentSong.path;
    },

    nextSong: function()
    {
      this.currentIndex++;
      if(this.currentIndex >= this.songs.length)
      {
        this.currentIndex = 0;
      }
      this.loadCurrentSong();
      this.render();
      this.scrollToActiveSong();
    },

    prevSong: function()
    {
      this.currentIndex--;
      if(this.currentIndex < 0)
      {
        this.currentIndex = this.songs.length-1;
      }
      this.loadCurrentSong();
      this.render();
      this.scrollToActiveSong();
    },

    button_Random: function()
    { 
      this.currentIndex = Math.round((this.songs.length-1)*Math.random())
      // console.log(this.currentIndex)
      this.loadCurrentSong()
      audio.play();
      this.render();
      this.scrollToActiveSong();
    },

    button_Repeat: function()
    {
      // _this.loadCurrentSong();
      audio.play();
      this.render();
      this.scrollToActiveSong();
    },

    scrollToActiveSong: function()
    {
      setTimeout( () =>{
        $('.song.active').scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        })
      }, 300)
    },

    start : function()
    {   
      // Định nghĩa lại các thuộc tính cho Object
        this.defineProperties();
      // loading
        this.loadCurrentSong();
      // Lắng nghe và xử lý các sự kiện
        this.handleEvents();
      // Render Playlist
        this.render();
    }
}

app.start();

