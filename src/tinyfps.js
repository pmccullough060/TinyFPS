
/**
 * @author pete
 */

class tiny {

    constructor() {
        this.container = document.createElement('div');
        this.container.style.fontSize = "14px";
        this.container.style.margin = "2px"

        this.lastTickTime = 0;
        this.lastUpdate = 0;
    }

    tick(){
        var delta = ( ( performance || Date ).now() - this.lastTickTime ) / 1000;

        var fps = Math.round( ( 1 / delta ) );

        this.lastTickTime = ( performance || Date).now();

        if( ( this.lastTickTime - this.lastUpdate >= 500 ) ){

            this._update(fps);

            this.lastUpdate = this.lastTickTime;
        }
    }

    _update(fps){

        var colour;

        if(fps < 20) { colour = "red"; } else
        if(fps < 50) { colour = "amber"; } else
        { colour = "green" }

        this.container.textContent= `${ fps } FPS`;
        this.container.style.color = colour;
    }
}
