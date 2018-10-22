'use strict';
module.exports = function(app) {
    var boardList = require('../controllers/boardController');

    app.route('/boards-ms/resources/boards')
        .get(boardList.list_all_boards)
        .post(boardList.create_a_board);

    app.route('/boards-ms/resources/boards/:board_id')
        .get(boardList.read_a_board)
        .put(boardList.update_a_board)
        .delete(boardList.delete_a_board);
};