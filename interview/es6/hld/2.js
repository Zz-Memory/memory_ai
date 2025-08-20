const sleep = time => new Promise((resolve) => setTimeout(resolve, time));

async function trafficLight() {
    const seq = [
        { color: 'red', time: 3000 },
        { color: 'yellow', time: 1000 },
        { color: 'green', time: 2000 },
    ]

    while (true) {
        for (const {color,time} of seq) {
            console.log(color);
            await sleep(time);
        } 
    }
}

trafficLight();