let right = 0
let left = 0
radio.setGroup(1)
basic.forever(function () {
    right = input.rotation(Rotation.Pitch)
    left = input.rotation(Rotation.Pitch)
    right += input.rotation(Rotation.Roll) / 4
    left += 0 - input.rotation(Rotation.Roll) / 4
    radio.sendValue("right", right)
    radio.sendValue("left", left)
    basic.pause(100)
})
