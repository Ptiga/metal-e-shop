import './App.css';

function chooseTrack(numTrack){
    switch(numTrack){
        case 0:
            return "Arch Enemy - Avalanche"
        case 1:
            return "Dream Theater - Finally Free"
        case 2:
            return "Haken - Celestial Elixir"
        case 3:
            return "Iron Maiden - hallowed be thy name (live)"
        case 4:
            return "Persefone - Living Waves"
        case 5:
            return "Pink Floyd - High Hopes"
    }

}

function trackLink(numTrack){
    switch(numTrack){
        case 0:
            return "audio/Arch Enemy - Avalanche.mp3"
        case 1:
            return "audio/Dream Theater - Finally Free.mp3"
        case 2:
            return "audio/Haken - Celestial Elixir.mp3"
        case 3:
            return "audio/Iron Maiden - hallowed be thy name (live).mp3"
        case 4:
            return "audio/Persefone - Living Waves.mp3"
        case 5:
            return "audio/Pink Floyd - High Hopes.mp3"

    }
}

function RandomTrack(){
    
    let numTrack = Math.floor(Math.random()*6)

    console.log('num track: ', numTrack)

    return(

            <div className="le-son-du-moment">
            <p className="le-son-du-moment">Envie d'écouter une chanson au pif ?</p>
            <p className="song-name">Le hasard a choisi pour toi : <b>{chooseTrack(numTrack)}</b></p>
            <audio type="audio/mpeg" controls src={trackLink(numTrack)} control="" >
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}

export default RandomTrack