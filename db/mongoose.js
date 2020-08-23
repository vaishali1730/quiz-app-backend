const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://vaishali:vaishali@123@cluster0.twmrm.mongodb.net/Quiz?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
