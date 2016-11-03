class GameCanvas {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    DrawBorders() {
        this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
    }

    FillBackground(color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
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
