const expect = require('expect');
var {generateMessage} = require('./message');


describe('generateMessage',() => {
  it('should generate the correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message.from).toEqual(from);
    expect(message.text).toEqual(text);
  });
});
