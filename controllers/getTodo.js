const Todo = require('./../models/Todo');

exports.getTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const todos = await Todo.find({});
        res.status(200).json({
            success: true,
            data: todos,
            message: 'Entry todo data is fetched successfully'
        });
    }
    catch (err) {
        console.log(err);
        console.error(err);
        res.status(500)
            .json({
                success: false,
                data: "internal server error",
                message: err.message,
            })
    }
}
exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const todos = await Todo.findById({ _id: id });
        if (todos) {
            res.status(200).json({
                success: true,
                data: todos,
                message: 'Entry todo data is fetched successfully by id'
            });
        }
        else {
            res.status(404).json({
                success: true,
                data: todos,
                message: 'no data found with the given id'
            });
        }
    }
    catch (err) {
        console.log(err);
        console.error(err);
        res.status(500)
            .json({
                success: false,
                data: "internal server error for id",
                message: err.message,
            })
    }
}