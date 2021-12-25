const Campground = require('../models/campground');
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.Mapbox_Token;
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });
const { cloudinary } = require('../cloudinary');

module.exports.index = async (req, res) => {

    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });
}

module.exports.newForm = (req, res) => {
    res.render('campgrounds/new');
}

module.exports.new = async (req, res) => {
    // if (!req.body.campground) throw new ExpressError('Invalid Campground', 400);
    const geoData = await geocoder.forwardGeocode({
        query: req.body.campground.location,
        limit: 1
    }).send();
    const newCampground = Campground(req.body.campground);
    newCampground.geometry = geoData.body.features[0].geometry;
    newCampground.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    newCampground.author = req.user._id;
    await newCampground.save();
    console.log(newCampground);
    req.flash('success', 'You have successfully created a campground');
    res.redirect(`/campgrounds/${newCampground._id}`);
}

module.exports.show = async (req, res) => {

    const campground = await Campground.findById(req.params.id)
        .populate({ path: 'reviews', populate: { path: 'author' } })
        .populate('author');
    if (!campground) {
        req.flash('error', 'Cannot find that campground');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/show', { campground });
}

module.exports.editForm = async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    if (!campground) {
        req.flash('error', 'Cannot find that campground');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/edit', { campground });
}

module.exports.edit = async (req, res) => {
    // if (!req.body.campground) throw new ExpressError('Invalid Campground', 400);
    const campground = await Campground.findByIdAndUpdate(req.params.id, { ...req.body.campground });
    const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }));
    campground.images.push(...imgs);
    await campground.save();
    if (req.body.deletedImages) {
        for (let filename of req.body.deletedImages) {
            await cloudinary.uploader.destroy(filename);
        }
        await campground.updateOne({ $pull: { images: { filename: { $in: req.body.deletedImages } } } });
    }
    req.flash('success', 'You have successfully updated a campground');
    res.redirect(`/campgrounds/${req.params.id}`);
}

module.exports.delete = async (req, res) => {
    await Campground.findByIdAndDelete(req.params.id);
    req.flash('success', 'You have successfully deleted a campground');
    res.redirect('/campgrounds');
}