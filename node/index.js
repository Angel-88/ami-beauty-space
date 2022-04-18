const express = require('express');
const cors = require('cors')
const clientRouter = require('./routers/client.routers');
const masterRouter = require('./routers/master.routers');
const categoryRouter = require('./routers/category.routers');
const serviceRouter = require('./routers/service.routers');
const scheduleRouter = require('./routers/schedule.routers');
const recordRouter = require('./routers/record.routers');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use('/api', clientRouter);
app.use('/api', masterRouter);
app.use('/api', categoryRouter);
app.use('/api', serviceRouter);
app.use('/api', scheduleRouter);
app.use('/api', recordRouter);
let whitelist = ['http://localhost:4200']
app.use(cors({
    origin: (origin, callback) => {
        // allow requests with no origin
        if(!origin) return callback(null, true);
        if(whitelist.indexOf(origin) === -1){
            const message = 'The CORS policy for this origin doesnt allow access from the particular origin.';
            return callback(new Error(message), false);
        }
        return callback(null, true);
    }
}));

app.listen(PORT, () => console.log(`server started on post ${PORT}`));

