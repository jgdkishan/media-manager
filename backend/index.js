require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const cloudinary = require('./utils/cloudinary.js');
const { listResources } = require('./utils/listResources.js');

app.use(cors());

app.get('/gallery', async (req, res) => {
    try{
        var gallaryList = await listResources(res);
        return res.status(200).json({ result: true, gallary: gallaryList });
    } catch (err){
        console.error(err)
        res.status(402)
    }
});

app.post('/upload', (req, res) => {
	setTimeout(() => {
		console.log('file uploaded');
		return res.status(200).json({ result: true, msg: 'file uploaded' });
	}, 3000);
});

app.delete('/delete', async (req, res) => {
    try{
        console.log(`File delete`, req.query);
        if(req.query?.publicId){
            const removeFile = await cloudinary.uploader.destroy(req.query.publicId);
            console.log(removeFile);
        } 
	    return res.status(200).json({ result: true, msg: 'file deleted' });
    } catch (err){
        console.error(err)
        res.status(402)
    }
});

app.listen(8080, () => {
	console.log(`Server running on port 8080`);
});
