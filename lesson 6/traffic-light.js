class TrafficLight {
    constructor() {
        this.count = 0
        this.currentState = new Red(this)
    }

    change(state) {
        // limits number of changes
        if (this.count++ >= 10) return
        this.currentState = state
        this.currentState.go()
    }

    start() {
        this.currentState.go()
    }
}

class LightColor {
    constructor(light) {
        this.light = light
    }
}




class Red extends LightColor {
    go() {
        console.log("Red --> for 1 minute")
        this.light.change(new Green(light))
    }
}

class Yellow extends LightColor {
    go() {
        console.log("Yellow --> for 10 seconds")
        this.light.change(new Red(light))
    }
}

class Green extends LightColor {
    go() {
        console.log("Green --> for 1 minute")
        this.light.change(new Yellow(light))
    }
}

//Test
let light = new TrafficLight()
light.start()