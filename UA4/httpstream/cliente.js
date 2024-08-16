fetch('http://localhost:3000/measurements.json')
    .then(async (response) => {
        const reader = response.body.getReader();
        let readResult, i = 0;
        do{
            readResult = await reader.read();
            if(readResult.value)
                console.log(`Blocos lidos: ${++i}`);
        }while(!readResult.done)
});