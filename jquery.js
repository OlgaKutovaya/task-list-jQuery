$(document).ready(function () {

    $('#btnAdd').click(function (event) {
        event.preventDefault();
        var $inputField = $('#inputField');
        if ($inputField.val().length === 0) {
            alert('you have to enter a task !');
            return;
        }
        var li = $('#template').html();
        li = li.replace('{{text}}}', $('input').val());
        $('ul').append(li);
        $inputField.val('');
    });

    $('#todoList').on('click', 'input.mark', function () {
        var $checkbox = $(this);
        if ($checkbox.is(':checked')) {
            $checkbox.parent().addClass('task-done');
            if($('#hideCompletedTasks').is(':checked')) {
                $checkbox.parent().parent().hide();
            }
        }  else {
            $checkbox.parent().removeClass('task-done');
        }
    });

    $('#todoList').on('click', '.delTask', function () {
        var $delTask = $(this);
        $delTask.parent().remove();
    });

    $('#hideCompletedTasks').on('click', function () {
        var $checkbox = $(this);
        var hide = $checkbox.is(':checked');
        $('#todoList li input:checked').each(function (index, element) {
            var $li = $(element).parent().parent();
            if (hide) {
                $li.hide();
            } else {
                $li.show();
            }
        });
    });

    $('#btnDelAllCompleted').on('click', function () {
        $('#todoList li input:checked').parent().parent().remove();
    });

    $('#btnDelAll').on('click', function () {
        $('#todoList li').remove();
    });

});