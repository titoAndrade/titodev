
export default function Loader () {
  return (
    <div id="loading" class="container" style={{ height: '100vh', maxWidth: '100%' }}>
      <div class="row justify-content-center align-items-center">
        <div class="col-12"
             style={{ marginTop: '45vh', marginLeft: '85vw'}}>
          <lottie-player 
            src="https://assets10.lottiefiles.com/packages/lf20_yn8lqib7.json"
            background="transparent"
            speed="1" 
            style={{ width: '13vmin', height: '13vmin'}}
            loop
            autoplay>
          </lottie-player>
        </div>
      </div>
    </div>
  )
}