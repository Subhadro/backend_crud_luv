const Todo = require('./../models/Todo');

exports.updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, description } = req.body;
        const todos = await Todo.findByIdAndUpdate({ _id: id }, { title, description, updatedAt: Date.now() });
        if (todos) {
            res.status(200).json({
                success: true,
                data: todos,
                message: 'Entry todo data is updated successfully by id'
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