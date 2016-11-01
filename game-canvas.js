class GameCanvas {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.Resize16x9();
    }

    DrawBorders() {
        var x = 0;
        var y = 0;
        var w = this.canvas.width;
        var h = this.canvas.height;
        this.ctx.strokeRect(x, y, w, h);
    }

    Resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    }

    Resize16x9() {
        var w = this.canvas.parentElement.clientWidth;
        var h = (9*w)/16;
        this.Resize(w, h);
    }
}
