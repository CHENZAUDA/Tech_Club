const ForumModel = require('../models/postModel')

const findOne = (req, res) => {
    ForumModel.findById(req.params.SubjectId)
    .then(subject => {
        if(!subject) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.SubjectId
            });            
        }
        res.send(subject);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.SubjectId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.SubjectId
        });
    });
};

module.exports = {
    findOne
}