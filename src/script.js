/*
 * TheaterJS, a typing effect mimicking human behavior.
 *
 * Github repository: 
 * https://github.com/Zhouzi/TheaterJS
 *
 */

var theater = theaterJS()

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  .on('type:start, erase:start', function () {
    if (theater.getCurrentActor().name === 'vader') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })

theater
  .addActor('vader', { speed: 0.8, accuracy: 0.6 })
  .addActor('luke')
  .addScene('vader:Cậu ơi', 600)
  .addScene('luke:Ơi', 400)
  .addScene('vader:Tớ thích cậu', 400)
  .addScene('luke:What...', -3, '!!! ', 600, '??? ', 600)
  .addScene('luke:Gì vậy má', 600)
  .addScene('luke:Cậu nói lại được không', 400)
  .addScene('vader:Tớ muốn nói là', 1600)
  .addScene('vader:Tớ thích cậu', 1000)
  .addScene('luke:Ỏ... ', 600, 'No!', 400)
  .addScene('vader:Cậu làm người iu tớ đi', 600)
  .addScene('vader:Nhaaa', 1600)
  .addScene('luke:Ơ... ', 800)
  .addScene('luke:Ờ thì...', 1600)
  .addScene('luke:Tớ cũng thích cậu lâu rùi ó', 800)
  .addScene('vader:Hả', 800)
  .addScene('vader:Yeahhhhh', 1600)
  .addScene('vader:Bố mẹ ơi con có người iu rồi!!! ', 800)
  .addScene('vader:Cậu ơi lên đồ đi tối này tớ đãi cậu trà đá Bách Khoa nha', 2000)
  .addScene(theater.replay.bind(theater))