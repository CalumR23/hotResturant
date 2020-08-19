const tableData = require("../data/table")
const waitingData = require("../data/waitingList")
const router = require("express").Router()


router.get("/tables",(req,res) => {
    res.json(tableData)
})

router.get("/waiting",(req,res) => {
    res.json(waitingData)
})

router.post("/tables", (req,res) => {
    let newData = req.body
    if(tableData.length < 5){
        tableData.push(newData)
    } else {
        waitingData.push(newData)
    }
    res.sendStatus(200)
})


module.exports = router