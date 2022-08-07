const cloudinary = require('./cloudinary.js');

module.exports.listResources = async (res) => {
	try {
		const { resources } = await cloudinary.search
        .expression('folder: media-manager/*')
        .sort_by('created_at','desc')
        .max_results(100)
        .execute();
		return resources.map((file) => [file.public_id, file.url]);
	} catch (error) {
		console.log(error);
		return false;
	}
};
