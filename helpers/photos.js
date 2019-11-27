const fs = require('fs')

async function main(){
    var data = await fs.readdirSync("photos/")
    data = data.slice(1,data.length)
    await fs.writeFileSync("photos/index.json", JSON.stringify(data))

}

main()