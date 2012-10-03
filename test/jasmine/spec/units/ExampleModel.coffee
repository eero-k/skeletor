define ['../../../../public/js/app/module/models/exampleModel'], (ExampleModel) ->
  describe 'ExampleModel', ->

    beforeEach ->
      @exampleModel = new ExampleModel
    
    # You can nest tests into logical groups
    # Tests related to name
    describe 'name', ->
      it 'is empty string initially', ->
        name = @exampleModel.get('name')
        expect(name).toBeDefined()
        expect(name).toBe('')

      it 'stays after it is set', ->
        newName = "John Doe"
        @exampleModel.set('name', newName)
        expect(@exampleModel.get('name')).toEqual(newName)

    # example of a failing test
    describe 'failing test example', ->
      it '4 equals 5', ->
        expect(4).toEqual(5)
