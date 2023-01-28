function rotateServo () {
    let servo = Kitronik_Robotics_Board.Servos.Servo1
    let degrees = 90
    let movement = 30
    loops.everyInterval(1000, function () {
        if (input.buttonIsPressed(Button.A)
            && input.buttonIsPressed(Button.B)) {
                Kitronik_Robotics_Board.servoStop(servo)
                degrees = 90
                basic.showString("stop")
            } else {
                if (input.buttonIsPressed(Button.A) && degrees >= 0 + movement) {
                    degrees -= movement
                }
                if (input.buttonIsPressed(Button.B) && degrees <= 180 - movement) {
                    degrees += movement
                }
                if (input.buttonIsPressed(Button.A)
                    || input.buttonIsPressed(Button.B)) {
                    Kitronik_Robotics_Board.servoWrite(servo, degrees)
                    basic.showNumber(degrees)
                }
            }
    })
}
let motor = Kitronik_Robotics_Board.Motors.Motor1
input.onGesture(Gesture.TiltRight, function() {
    motor = Kitronik_Robotics_Board.Motors.Motor1
    basic.showNumber(1)
})
input.onGesture(Gesture.TiltLeft, function () {
    motor = Kitronik_Robotics_Board.Motors.Motor2
    basic.showNumber(2)
})

function runMotor() {
    let speed = 20
    let speedDiff = 20
    let direction = Kitronik_Robotics_Board.MotorDirection.Forward
    loops.everyInterval(1000, function () {
        if (input.buttonIsPressed(Button.A)
            && input.buttonIsPressed(Button.B)) {
            if (direction == Kitronik_Robotics_Board.MotorDirection.Forward) {
                direction = Kitronik_Robotics_Board.MotorDirection.Reverse
            } else {
                direction = Kitronik_Robotics_Board.MotorDirection.Forward
            }
        } else {
            if (input.buttonIsPressed(Button.A) && speed >= 0 + speedDiff) {
                speed -= speedDiff
            }
            if (input.buttonIsPressed(Button.B) && speed <= 180 - speedDiff) {
                speed += speedDiff
            }
            if (input.buttonIsPressed(Button.A)
                || input.buttonIsPressed(Button.B)) {
                Kitronik_Robotics_Board.motorOn(motor, direction, speed)
                basic.showNumber(speed)
            }
        }
    })
}


// rotateServo()
runMotor()
