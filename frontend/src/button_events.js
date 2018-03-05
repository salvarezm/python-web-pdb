/*
Copyright (c) 2017 Roman Miroshnychenko <roman1972@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import $ from 'jquery';
import globals from './globals';
import { send_command } from './utils';

function bind_button_events() {
  $('#next_btn').click(() => {
    send_command('n');
  });

  $('#step_btn').click(() => {
    send_command('s');
  });

  $('#return_btn').click(() => {
    send_command('r');
  });

  $('#continue_btn').click(() => {
    send_command('c');
  });

  $('#up_btn').click(() => {
    send_command('u');
  });

  $('#down_btn').click(() => {
    send_command('d');
  });

  $('#where_btn').click(() => {
    send_command('w');
  });

  $('#help_btn').click(() => {
    $('#help_window').modal();
  });

  $('#send_btn').click(() => {
    let input = $('#stdin').val();
    $.ajax({
      url: 'input',
      data: input + '\n',
      method: 'POST',
      contentType: 'text/plain; charset=UTF-8'
    })
    .done(() => {
      $('#stdin').val('');
      globals.history_index = -1;
      if (input != '' && input != globals.command_history[0]) {
        globals.command_history.unshift(input);
        if (globals.command_history.length > 10) {
          globals.command_history.pop();
        }
      }
    });
  });

}

export default bind_button_events;
