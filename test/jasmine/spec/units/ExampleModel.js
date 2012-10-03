// Generated by CoffeeScript 1.3.1
(function() {

  define(['../../../../public/js/app/module/models/exampleModel'], function(ExampleModel) {
    return describe('ExampleModel', function() {
      beforeEach(function() {
        return this.exampleModel = new ExampleModel;
      });
      describe('name', function() {
        it('is empty string initially', function() {
          var name;
          name = this.exampleModel.get('name');
          expect(name).toBeDefined();
          return expect(name).toBe('');
        });
        return it('stays after it is set', function() {
          var newName;
          newName = "John Doe";
          this.exampleModel.set('name', newName);
          return expect(this.exampleModel.get('name')).toEqual(newName);
        });
      });
      return describe('failing test example', function() {
        return it('4 equals 5', function() {
          return expect(4).toEqual(5);
        });
      });
    });
  });

}).call(this);